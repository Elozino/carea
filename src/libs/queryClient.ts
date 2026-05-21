/**
 * Global QueryClient for TanStack React Query.
 *
 * React Native-specific wiring:
 *  - focusManager: treats AppState "active" as window focus so queries
 *    refetch when the user returns to the app from background.
 *  - Retry policy: never retry 4xx errors (client mistakes); retry up to 3
 *    times with exponential back-off for network/5xx failures.
 */

import {AppState, AppStateStatus} from 'react-native';
import {focusManager, QueryClient} from '@tanstack/react-query';
import {ApiError} from '../types/api';

// ---------------------------------------------------------------------------
// React Native focus management
// TanStack Query ships browser-only focus events by default; we replace the
// listener with AppState so background→foreground triggers refetches.
// ---------------------------------------------------------------------------

focusManager.setEventListener(onFocusChange => {
  const subscription = AppState.addEventListener(
    'change',
    (status: AppStateStatus) => {
      onFocusChange(status === 'active');
    },
  );
  // Return cleanup function
  return () => subscription.remove();
});

// ---------------------------------------------------------------------------
// Retry policy
// ---------------------------------------------------------------------------

/**
 * Returns true when the failed query should be retried.
 *  - 4xx  → never retry (the request is inherently wrong)
 *  - 401  → never retry here; the apiClient already handles refresh+retry
 *  - 5xx / NetworkError / TimeoutError → retry up to 3 times
 */
function shouldRetryQuery(failureCount: number, error: unknown): boolean {
  if (error instanceof ApiError && error.isClientError) {
    return false;
  }
  return failureCount < 3;
}

/**
 * Mutations are more expensive – only retry transient server/network errors
 * once to avoid duplicate side-effects.
 */
function shouldRetryMutation(failureCount: number, error: unknown): boolean {
  if (error instanceof ApiError && error.isClientError) {
    return false;
  }
  return failureCount < 1;
}

// ---------------------------------------------------------------------------
// QueryClient instance
// ---------------------------------------------------------------------------

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: shouldRetryQuery,
      // Exponential back-off capped at 30 s
      retryDelay: attempt => Math.min(1_000 * 2 ** attempt, 30_000),
      // Data is considered fresh for 5 minutes; won't refetch unnecessarily
      staleTime: 5 * 60 * 1_000,
      // Keep unused cache for 10 minutes before garbage-collecting
      gcTime: 10 * 60 * 1_000,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      refetchOnMount: true,
    },
    mutations: {
      retry: shouldRetryMutation,
    },
  },
});
