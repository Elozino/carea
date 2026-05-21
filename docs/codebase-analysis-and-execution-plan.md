# Carea Mobile: Codebase Analysis and Execution Plan

## 1. Executive Summary

Carea Mobile is a React Native marketplace app focused on car discovery, checkout-style flows, wallet operations, profile management, messaging, and real-time calling integration.

The app currently uses:

- React Native + TypeScript
- React Navigation stack and tab navigators
- TanStack Query for API-state orchestration
- Encrypted local storage for auth/session material
- Expo modules and native integrations

This plan defines what the app is doing today, where quality and security gaps are likely, and how to execute FAANG-grade engineering improvements with accessibility as a non-negotiable requirement and AI owning unit-test implementation.

## 2. What The App Is Doing Today

### 2.1 Core User Flow

- App starts in splash/onboarding flow, then enters auth journey.
- New-device onboarding route decision is handled via local encrypted state.
- Auth journey supports:
  - Sign in
  - Sign up
  - Forgot-password + reset-password flow
- Successful auth transitions users into the main app shell.

### 2.2 Main Product Surfaces

- Bottom tab shell includes:
  - Home
  - Orders
  - Inbox
  - Wallet
  - Profile
- Home stack includes:
  - Product browsing and details
  - Notification flow
  - Offer/shipping/payment/review snapshots
  - Search modal and chat/call entry points
- Calling stack is integrated through Zego prebuilt call screens.

### 2.3 Architecture Patterns Observed

- Screen-first organization under src/screens.
- Shared UI components under src/components.
- Domain logic increasingly modularized (example: src/modules/auth).
- Theming centralized with useCareaTheme and constants.
- API requests abstracted with a typed client + auth token handling.

## 3. Role-Based Assessment and Plan

## 3.1 Senior Software Engineer Perspective

### Findings

- Strong baseline: typed APIs, navigation structure, modularization movement.
- Improvement areas: broader domain modularization, stricter boundaries, test coverage depth, and reliability hardening for native integrations.

### Plan

1. Move remaining business domains into module boundaries:

- src/modules/users
- src/modules/cars
- src/modules/transactions
- src/modules/wallet

2. Standardize architecture contracts per module:

- types.ts
- api.ts
- hooks.ts
- selectors.ts (when local derivations are needed)
- validation.ts
- index.ts barrel

3. Create domain ownership matrix:

- Explicit owner per module
- Explicit API contract source (Swagger/OpenAPI)
- Explicit state ownership (server state vs local UI state)

4. Tighten static quality gates:

- Raise TypeScript strictness incrementally
- Add lint rules for forbidden cross-module imports
- Add dead-code and unused-export checks in CI

## 3.2 Product Engineer Perspective

### Findings

- User value chain exists end to end: onboarding → auth → browse → transact → communicate.
- Friction opportunities: auth fallback logic clarity, error-state messaging consistency, and checkout-state resilience.

### Plan

1. Define product-critical journeys as first-class flows:

- New user activation (onboarding to first actionable state)
- Returning user login
- Search to product detail
- Offer to checkout snapshots
- Wallet funding and transaction verification

2. Add measurable product instrumentation:

- screen_view
- auth_success and auth_failure reason taxonomy
- forgot_password_requested
- reset_password_success and reset_password_failure reason taxonomy
- checkout_step_progress

3. Ship guardrails for continuity:

- Preserve draft state in multi-step flows
- Show deterministic error and retry paths
- Ensure all network actions have loading, success, failure states

## 3.3 QA Perspective

### Findings

- Validation commands exist and are scriptable.
- Current testing approach needs explicit risk-based test matrix and automation ownership strategy.

### Plan

1. Introduce risk-tiered test matrix:

- P0: auth, navigation shell, payments, transaction verification, call entry/exit
- P1: search, offer flows, notifications, profile updates
- P2: cosmetic and low-risk state transitions

2. Formalize test levels:

- Unit tests: domain logic, hooks, validators, reducers/selectors
- Integration tests: screen + API hooks + navigation transitions
- E2E smoke tests: critical path only

3. Enforce release criteria:

- No P0 regressions
- Deterministic retries and error handling for network failures
- Accessibility checks pass for all touched surfaces

## 3.4 Pentester Perspective

### Findings

- Auth/token handling is present but must be continuously validated against abuse patterns.
- Mobile security posture needs explicit threat model and recurring checks.

### Plan

1. Threat model key assets:

- Access and refresh tokens
- PII in profile and transaction flows
- Payment-related metadata
- Call session metadata

2. Execute abuse-case testing:

- Token replay and refresh race behavior
- Insecure local-data leakage checks
- Excessive error-detail leakage from API responses
- Navigation bypass attempts on protected routes
- Brute-force controls around auth endpoints

3. Security controls to verify:

- Least-privilege API usage
- Sensitive logging redaction
- Secrets not committed in repository
- Runtime checks for SSL pinning strategy (if required by policy)

## 4. FAANG-Grade Engineering Standards

## 4.1 Design and Architecture Standards

- Domain ownership and clear module boundaries
- Stable interfaces and backward-compatible change strategy
- No hidden side effects in hooks and service layers
- Deterministic error semantics with typed error categories

## 4.2 Delivery and Operations Standards

- CI gates: lint, typecheck, unit tests, integration tests, security checks
- Trunk quality policy with small, reviewable PRs
- Rollback-safe feature flags for high-risk changes
- Observability baseline for client errors and key events

## 4.3 Code Review Standards

- Behavior and regression risk first
- Contract compatibility checks mandatory
- Test evidence required for all user-affecting changes
- Accessibility impact checklist mandatory

## 5. Accessibility: Mandatory Requirements

Accessibility is required for all implementation phases.

### Accessibility Baseline

- Every interactive element must have an accessible role and label.
- Focus order must be logical and consistent.
- Inputs must expose labels and error messages for assistive tech.
- Color contrast must meet WCAG AA minimums.
- Dynamic state changes must be announced where relevant.
- Touch targets must be adequately sized.

### Accessibility Definition of Done

- Manual VoiceOver/TalkBack pass for touched screens
- Automated lint or test assertion coverage for accessibility props
- No blocker accessibility defects on P0/P1 journeys

## 6. AI-Owned Unit Test Implementation Plan

AI is the primary implementation engine for unit tests. Humans provide acceptance constraints and review.

### 6.1 Ownership Model

- AI generates and updates unit tests for:
  - module validations
  - module API wrappers (with mocked transport)
  - auth and domain hooks
  - route decision helpers
- Human reviewers approve behavior intent and edge-case completeness.

### 6.2 Required Unit-Test Scope (Initial)

1. Auth module

- validation.ts edge cases
- deviceState route decision logic
- auth hooks mutation/query state transitions
- auth API success and failure mapping

2. Navigation helpers

- route selection decisions
- guard behavior when state is absent/corrupt

3. Shared utilities

- typed error normalization
- request timeout and cancellation semantics

### 6.3 Quality Bar For AI-Generated Tests

- Branch coverage on validation logic >= 95%
- Mutation and query hooks tested for:
  - success
  - API errors
  - network timeout and cancellation
- Deterministic tests with no real network dependency
- Test names describe business behavior, not implementation detail

## 7. Execution Roadmap

## Phase 0: Baseline and Risk Mapping (1 week)

- Confirm architecture map and owner matrix.
- Define P0/P1 user journeys and threat scenarios.
- Establish current baseline metrics and test coverage.

## Phase 1: Auth and Navigation Hardening (1 to 2 weeks)

- Finalize auth module boundaries.
- Validate onboarding and auth entry decisions.
- Complete unit/integration tests for auth and reset-password paths.

## Phase 2: Domain Modularization (2 to 4 weeks)

- Migrate users/cars/transactions/wallet into module pattern.
- Add typed contracts and error taxonomies per domain.
- Add tests for each migrated module.

## Phase 3: Accessibility and Security Enforcement (parallel)

- Add accessibility gating to PR checklist and CI.
- Add security checks and pentest cadence to release pipeline.

## Phase 4: Product Reliability and Observability (parallel)

- Instrument key user events and error funnels.
- Add release health dashboard and rollback indicators.

## 8. Deliverables

1. Architecture and module ownership matrix
2. P0/P1 journey maps with acceptance criteria
3. AI-generated unit test suite with coverage report
4. Accessibility compliance checklist and audit report
5. Security threat model and pentest findings log
6. CI policy updates and release readiness checklist

## 9. Success Metrics

- P0 regression count trends to zero per release cycle.
- Auth and checkout-related crash-free sessions improve release-over-release.
- Accessibility blocker count is zero on release candidates.
- Unit-test coverage and branch coverage targets met for modular domains.
- Mean time to detect and recover from production issues improves measurably.

## 10. Immediate Next Steps

1. Approve this plan and freeze scope for Phase 0 and Phase 1.
2. Start with auth and navigation quality gates, since this is the current active surface.
3. Let AI generate the first test pack for src/modules/auth and navigation route decisions.
4. Run QA and pentest review on auth and reset-password paths before broader domain migration.
