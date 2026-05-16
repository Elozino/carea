# Carea Mobile AI Operating Guide

This repository is set up for AI-assisted product delivery, but the bar is the same as a strong human engineering team: clear intent, small safe changes, and verifiable outcomes.

## Product Context

- `Carea` is a React Native mobile experience with navigation, themed UI, commerce-like flows, and calling integrations.
- The current architecture is feature-oriented under `src/screens`, `src/components`, `src/navigators`, `src/hooks`, and `src/libs`.
- UI consistency flows through `useCareaTheme`, shared constants in `src/constants`, and common layout wrappers such as `SafeInset`.

## Non-Negotiables

- Preserve user-authored changes. Never revert unrelated local modifications.
- Prefer targeted changes over repo-wide rewrites.
- Keep code readable for the next engineer. Favor explicit types at boundaries and predictable file structure.
- Run `yarn validate` before finishing meaningful code changes when the environment allows it.
- Document tradeoffs when a change improves the workflow but does not yet raise the entire codebase to strict mode.

## Implementation Rules

- Reuse existing patterns before introducing a new abstraction.
- Add types to new surfaces and touched components where practical.
- Keep hooks focused and side effects intentional.
- Avoid hardcoding product copy, colors, and spacing outside shared constants unless the screen is truly bespoke.
- Prefer adding docs, scripts, and CI guardrails over vague “best practice” claims.

## AI Workflow

- Start by reading the local context: `README.md`, `CONTRIBUTING.md`, and relevant feature files.
- For new work, define the user-facing outcome first, then implement the narrowest reliable change.
- If a strict rule would break large legacy surfaces, contain the exception and note the follow-up path.
- When updating tests, mock unstable native integrations instead of silently skipping coverage.

## Definition of Done

- The change is understandable from the diff.
- Quality commands and docs reflect the new reality.
- Open risks are named plainly.
