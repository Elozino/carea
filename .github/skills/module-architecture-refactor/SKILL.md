---
name: module-architecture-refactor
description: 'Use when modularizing or refactoring Carea Mobile code into feature modules. Trigger phrases: modularize code, extract module, move business logic, feature boundaries, architecture refactor, domain module, cleanup imports.'
---

# Module Architecture Refactor

## Intent

Refactor safely from screen-first logic into reusable feature modules with stable contracts.

## Use This Skill When

- Moving logic from `src/screens` to domain modules
- Creating new modules like `src/modules/<domain>`
- Converting legacy files to compatibility re-exports

## Target Module Shape

Each domain should converge to:

- `types.ts`
- `validation.ts` (if input logic exists)
- `api.ts`
- `hooks.ts`
- `index.ts`

## Refactor Steps

1. Identify domain boundaries:

- UI rendering in screens/components
- Business rules in module validation/hooks
- Transport logic in module api

2. Migrate incrementally:

- Create new module files first
- Move logic with no behavior changes
- Add compatibility re-exports from legacy locations

3. Update imports in touched screens only

4. Verify no regressions:

- `yarn typecheck`
- Feature smoke flow run

## Quality Bar

- Typed public interfaces
- No cyclic imports
- Minimal churn diff
- Follow existing theme/navigation conventions
- Add tests for extracted business logic
- Preserve or improve blind-user accessibility (VoiceOver/TalkBack behavior) during refactors
