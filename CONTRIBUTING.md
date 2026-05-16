# Contributing

## Engineering Standard

We build this codebase like a long-term product, not a demo. Every change should improve at least one of these dimensions:

- Product quality
- Delivery speed
- Operational confidence
- Team clarity

## Local Workflow

1. Use Node `20.x` and Yarn `1.x`.
2. Install dependencies with `yarn install`.
3. Run `yarn start`, `yarn android`, or `yarn ios` for local development.
4. Before pushing, run `yarn validate`.

## Quality Gates

- `yarn lint`: ESLint for app and test sources.
- `yarn typecheck`: Incremental TypeScript verification for the app surface.
- `yarn test:ci`: Jest in CI-safe mode with native calling integrations mocked.
- `yarn verify`: Formatting check plus the full validation chain.

## Pull Requests

- Keep PRs small enough to review in one sitting.
- Include behavior change, risk, and validation notes.
- Add or update tests when the behavior contract changes.
- If a legacy area cannot meet the final standard yet, leave it better than you found it and document the constraint.

## AI-Assisted Delivery

- Read `AGENTS.md` before using an AI coding agent.
- Use AI to accelerate analysis, refactors, scaffolding, and documentation.
- Do not outsource judgment. Review generated code with the same rigor as human code.
- Ask the AI to explain its assumptions any time a change crosses architecture, security, or release boundaries.
