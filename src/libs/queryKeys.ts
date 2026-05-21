/**
 * Type-safe query key factory.
 *
 * Why this exists:
 *  - Prevents typo-induced key collisions across hooks
 *  - Enables granular cache invalidation (e.g. invalidate all "orders", or
 *    just the detail for order #42)
 *  - Co-locates key shapes with their domain so refactors are isolated
 *
 * Usage:
 *   useQuery({ queryKey: queryKeys.orders.detail(id), queryFn: … })
 *   queryClient.invalidateQueries({ queryKey: queryKeys.orders.all })
 */

export const queryKeys = {
  // ------------------------------------------------------------------
  // Auth
  // ------------------------------------------------------------------
  auth: {
    /** Covers the authenticated user profile and session state. */
    me: ['auth', 'me'] as const,
  },

  // ------------------------------------------------------------------
  // Orders
  // ------------------------------------------------------------------
  orders: {
    /** Invalidates everything under "orders". */
    all: ['orders'] as const,
    /** Paginated or filtered list queries. */
    list: (filters?: Record<string, unknown>) =>
      ['orders', 'list', filters ?? {}] as const,
    /** Single order by ID. */
    detail: (id: string | number) => ['orders', 'detail', id] as const,
  },

  // ------------------------------------------------------------------
  // Products
  // ------------------------------------------------------------------
  products: {
    all: ['products'] as const,
    list: (filters?: Record<string, unknown>) =>
      ['products', 'list', filters ?? {}] as const,
    detail: (id: string | number) => ['products', 'detail', id] as const,
  },

  // ------------------------------------------------------------------
  // Profile / User
  // ------------------------------------------------------------------
  profile: {
    all: ['profile'] as const,
    detail: (userId: string | number) =>
      ['profile', 'detail', userId] as const,
  },

  // ------------------------------------------------------------------
  // Wallet
  // ------------------------------------------------------------------
  wallet: {
    all: ['wallet'] as const,
    balance: ['wallet', 'balance'] as const,
    transactions: (filters?: Record<string, unknown>) =>
      ['wallet', 'transactions', filters ?? {}] as const,
  },
} as const;
