# Copilot Instructions For Carea Mobile

Prefer small, composable changes that fit the existing React Native architecture.

## Repo Priorities

- Respect `useCareaTheme` and shared constants before adding new style sources.
- Keep screens under `src/screens`, reusable UI under `src/components`, and navigation concerns under `src/navigators`.
- Favor explicit prop typing on touched files.
- Avoid broad rewrites of legacy SVG/icon files unless the task is specifically about asset cleanup.

## Delivery Rules

- Update docs and scripts when workflow expectations change.
- When native integrations make tests unstable, add focused Jest mocks instead of deleting tests.
- Keep commits and pull requests reviewable.
- Surface assumptions and migration debt clearly.
