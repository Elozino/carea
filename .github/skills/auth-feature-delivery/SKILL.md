---
name: auth-feature-delivery
description: 'Use when implementing or updating authentication features in Carea Mobile: login, signup, reset password, forgot password, token handling, auth navigation, and auth validations. Trigger phrases: auth flow, login screen, signup screen, reset password, forgot password, token refresh, auth api, auth hooks.'
---

# Auth Feature Delivery

## Intent

Deliver auth changes that are production-safe, typed, testable, and aligned with Carea API contracts.

## Use This Skill When

- Implementing auth screens under `src/screens/auth`
- Updating auth APIs/hooks in `src/modules/auth`
- Adding auth routes in auth navigator/types
- Hardening auth input validation and error handling

## Workflow

1. Read these files first:

- `src/modules/auth/api.ts`
- `src/modules/auth/hooks.ts`
- `src/modules/auth/validation.ts`
- `src/navigators/AuthStackNavigator.tsx`
- `src/types/navigation.ts`

2. Confirm API contract before coding:

- Match payload and response shapes to Swagger/OpenAPI
- Ensure status code edge cases are handled

3. Implement minimal safe changes:

- Keep UI and business logic separated
- Reuse `useCareaTheme` and shared constants
- Keep navigation and types in sync

4. Add test coverage (AI-owned):

- Validation edge cases
- Hook success/failure paths
- API error mapping

5. Run quality checks:

- `yarn typecheck`
- `yarn validate` when possible

## Non-Negotiables

- Never store auth tokens outside encrypted storage
- Never bypass typed error handling
- Never ship auth UX without loading, success, and failure states
- Accessibility labels required on interactive auth controls
- Blind-user accessibility is mandatory: auth flows must be fully operable via VoiceOver/TalkBack (including login, signup, forgot-password, and reset-password)
