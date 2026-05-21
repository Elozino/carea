/**
 * Typed HTTP client for the Carea API.
 *
 * Features:
 *  - Auth token injection from EncryptedStorage on every request
 *  - Single-flight 401 → token refresh → auto-retry (prevents thundering herd)
 *  - Per-request AbortController timeout
 *  - User-initiated cancellation forwarded transparently to React Query
 *  - Typed `ApiError`, `NetworkError`, and `TimeoutError` thrown for all failure paths
 *  - Type-safe convenience methods: get / post / put / patch / delete
 */

import EncryptedStorage from 'react-native-encrypted-storage';
import {
  ApiError,
  NetworkError,
  RequestConfig,
  TimeoutError,
} from '../types/api';

// ---------------------------------------------------------------------------
// Configuration – override via env injected by your build system
// ---------------------------------------------------------------------------

/**
 * Base URL for all API requests.
 * Set CAREA_API_BASE_URL in your .env (e.g. via react-native-config)
 * and swap the fallback string for the real value.
 */
const BASE_URL: string =
  (typeof process !== 'undefined' && process.env?.CAREA_API_BASE_URL) ||
  'http://localhost:8000/api/v1';

const DEFAULT_TIMEOUT_MS = 15_000;

// ---------------------------------------------------------------------------
// Token storage keys
// ---------------------------------------------------------------------------

const ACCESS_TOKEN_KEY = 'auth_access_token';
const REFRESH_TOKEN_KEY = 'auth_refresh_token';

// ---------------------------------------------------------------------------
// Token helpers
// ---------------------------------------------------------------------------

async function getAccessToken(): Promise<string | null> {
  try {
    return await EncryptedStorage.getItem(ACCESS_TOKEN_KEY);
  } catch {
    return null;
  }
}

/**
 * Stores the pair returned after a successful login / refresh.
 * Call this from your auth flow after receiving new tokens.
 */
export async function storeTokens(
  accessToken: string,
  refreshToken: string,
): Promise<void> {
  await Promise.all([
    EncryptedStorage.setItem(ACCESS_TOKEN_KEY, accessToken),
    EncryptedStorage.setItem(REFRESH_TOKEN_KEY, refreshToken),
  ]);
}

/** Clears all tokens (call on logout). */
export async function clearTokens(): Promise<void> {
  await Promise.all([
    EncryptedStorage.removeItem(ACCESS_TOKEN_KEY),
    EncryptedStorage.removeItem(REFRESH_TOKEN_KEY),
  ]);
}

export async function hasStoredAuthSession(): Promise<boolean> {
  try {
    const [accessToken, refreshToken] = await Promise.all([
      EncryptedStorage.getItem(ACCESS_TOKEN_KEY),
      EncryptedStorage.getItem(REFRESH_TOKEN_KEY),
    ]);

    return Boolean(accessToken || refreshToken);
  } catch {
    return false;
  }
}

// ---------------------------------------------------------------------------
// Single-flight token refresh
// Prevents multiple parallel 401 responses all trying to refresh concurrently.
// ---------------------------------------------------------------------------

let refreshPromise: Promise<string> | null = null;

type RefreshTokenPayload = {
  accessToken: string;
  refreshToken?: string;
};

function extractRefreshTokens(body: unknown): RefreshTokenPayload | null {
  if (!body || typeof body !== 'object') {
    return null;
  }

  const direct = body as {
    accessToken?: unknown;
    refreshToken?: unknown;
    data?: unknown;
  };

  if (typeof direct.accessToken === 'string') {
    return {
      accessToken: direct.accessToken,
      refreshToken:
        typeof direct.refreshToken === 'string'
          ? direct.refreshToken
          : undefined,
    };
  }

  if (direct.data && typeof direct.data === 'object') {
    const nested = direct.data as {
      accessToken?: unknown;
      refreshToken?: unknown;
    };
    if (typeof nested.accessToken === 'string') {
      return {
        accessToken: nested.accessToken,
        refreshToken:
          typeof nested.refreshToken === 'string'
            ? nested.refreshToken
            : undefined,
      };
    }
  }

  return null;
}

async function refreshAccessToken(): Promise<string> {
  const refreshToken = await EncryptedStorage.getItem(REFRESH_TOKEN_KEY);
  if (!refreshToken) {
    throw new ApiError(401, 'Session expired. Please log in again.');
  }

  const response = await fetch(`${BASE_URL}/auth/refresh`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({refreshToken}),
  });

  if (!response.ok) {
    // Refresh itself failed – wipe tokens so the app can redirect to login
    await clearTokens();
    throw new ApiError(401, 'Session expired. Please log in again.');
  }

  const body = await response.json();
  const tokens = extractRefreshTokens(body);

  if (!tokens) {
    throw new ApiError(500, 'Invalid refresh token response from server.');
  }

  await EncryptedStorage.setItem(ACCESS_TOKEN_KEY, tokens.accessToken);
  if (tokens.refreshToken) {
    await EncryptedStorage.setItem(REFRESH_TOKEN_KEY, tokens.refreshToken);
  }

  return tokens.accessToken;
}

// ---------------------------------------------------------------------------
// URL builder
// ---------------------------------------------------------------------------

function buildUrl(
  path: string,
  params?: Record<string, string | number | boolean | undefined>,
): string {
  const base = path.startsWith('http') ? path : `${BASE_URL}${path}`;
  if (!params) {
    return base;
  }
  const query = Object.entries(params)
    .filter(([, v]) => v !== undefined)
    .map(
      ([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`,
    )
    .join('&');
  return query ? `${base}?${query}` : base;
}

// ---------------------------------------------------------------------------
// Core fetch wrapper
// ---------------------------------------------------------------------------

async function request<T>(
  method: string,
  path: string,
  body: unknown,
  config: RequestConfig,
  isRetry: boolean,
): Promise<T> {
  const {
    params,
    timeout = DEFAULT_TIMEOUT_MS,
    signal: callerSignal,
    ...rest
  } = config;

  // Compose caller-supplied AbortSignal with our internal timeout signal
  const controller = new AbortController();
  let timedOut = false;
  const timeoutId = setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, timeout);

  // If the caller cancels (e.g. React Query unmount), forward it
  callerSignal?.addEventListener('abort', () => controller.abort());

  const token = await getAccessToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(token ? {Authorization: `Bearer ${token}`} : {}),
    ...(rest.headers as Record<string, string> | undefined),
  };

  let response: Response;
  try {
    response = await fetch(buildUrl(path, params), {
      ...rest,
      method,
      headers,
      signal: controller.signal,
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  } catch (err: unknown) {
    if (err instanceof Error && err.name === 'AbortError') {
      if (timedOut) {
        throw new TimeoutError();
      }
      // Propagate cancellation so React Query can mark the query as cancelled
      throw err;
    }
    throw new NetworkError();
  } finally {
    clearTimeout(timeoutId);
  }

  // ------------------------------------------------------------------
  // 401 handling – single-flight refresh then retry once
  // ------------------------------------------------------------------
  if (response.status === 401 && !isRetry) {
    try {
      if (!refreshPromise) {
        refreshPromise = refreshAccessToken().finally(() => {
          refreshPromise = null;
        });
      }
      await refreshPromise;
      return request<T>(method, path, body, config, true);
    } catch {
      throw new ApiError(401, 'Session expired. Please log in again.');
    }
  }

  // ------------------------------------------------------------------
  // Non-2xx error handling
  // ------------------------------------------------------------------
  if (!response.ok) {
    let message = `Request failed with status ${response.status}`;
    let details: unknown;
    try {
      const errorBody = await response.json();
      message = errorBody?.message ?? errorBody?.error ?? message;
      details = errorBody;
    } catch {
      // Response body is not JSON or is empty – use the default message
    }
    throw new ApiError(response.status, message, details);
  }

  // 204 No Content
  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}

// ---------------------------------------------------------------------------
// Public API client
// ---------------------------------------------------------------------------

export const apiClient = {
  get<T>(path: string, config: RequestConfig = {}): Promise<T> {
    return request<T>('GET', path, undefined, config, false);
  },

  post<T>(
    path: string,
    body?: unknown,
    config: RequestConfig = {},
  ): Promise<T> {
    return request<T>('POST', path, body, config, false);
  },

  put<T>(path: string, body?: unknown, config: RequestConfig = {}): Promise<T> {
    return request<T>('PUT', path, body, config, false);
  },

  patch<T>(
    path: string,
    body?: unknown,
    config: RequestConfig = {},
  ): Promise<T> {
    return request<T>('PATCH', path, body, config, false);
  },

  delete<T>(path: string, config: RequestConfig = {}): Promise<T> {
    return request<T>('DELETE', path, undefined, config, false);
  },
};
