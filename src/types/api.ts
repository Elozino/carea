/**
 * Typed error classes for network/API failures.
 * Use `instanceof` checks in components and query `onError` callbacks.
 */

/** Thrown when the server responds with a non-2xx status code. */
export class ApiError extends Error {
  constructor(
    public readonly statusCode: number,
    message: string,
    public readonly details?: unknown,
  ) {
    super(message);
    this.name = 'ApiError';
    // Restore prototype chain so `instanceof ApiError` works after transpilation.
    Object.setPrototypeOf(this, ApiError.prototype);
  }

  get isClientError(): boolean {
    return this.statusCode >= 400 && this.statusCode < 500;
  }

  get isServerError(): boolean {
    return this.statusCode >= 500;
  }

  get isUnauthorized(): boolean {
    return this.statusCode === 401;
  }

  get isForbidden(): boolean {
    return this.statusCode === 403;
  }

  get isNotFound(): boolean {
    return this.statusCode === 404;
  }
}

/** Thrown when the device is offline or DNS/TCP fails entirely. */
export class NetworkError extends Error {
  constructor(message = 'Network request failed. Check your connection.') {
    super(message);
    this.name = 'NetworkError';
    Object.setPrototypeOf(this, NetworkError.prototype);
  }
}

/** Thrown when a request exceeds its allowed duration. */
export class TimeoutError extends Error {
  constructor(message = 'Request timed out. Please try again.') {
    super(message);
    this.name = 'TimeoutError';
    Object.setPrototypeOf(this, TimeoutError.prototype);
  }
}

/** Shape of a successful envelope response from the Carea API. */
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

/** Optional config forwarded to every fetch call. */
export interface RequestConfig extends Omit<RequestInit, 'method' | 'body'> {
  /** URL query string parameters, undefined values are omitted. */
  params?: Record<string, string | number | boolean | undefined>;
  /** Per-request timeout in milliseconds. Defaults to 15 000. */
  timeout?: number;
}

/**
 * Returns the best user-facing message for unknown request errors.
 * Prefers backend-provided messages and falls back only when unavailable.
 */
export function getApiErrorMessage(error: unknown, fallback: string): string {
  if (error instanceof ApiError) {
    return error.message || fallback;
  }

  if (error instanceof Error) {
    return error.message || fallback;
  }

  if (
    error &&
    typeof error === 'object' &&
    'message' in error &&
    typeof (error as {message?: unknown}).message === 'string'
  ) {
    return (
      ((error as {message: string}).message || fallback).trim() || fallback
    );
  }

  return fallback;
}
