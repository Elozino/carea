# AI Workflow

## Goal

Use AI as a high-leverage teammate for product delivery, not as a shortcut around engineering discipline.

## Recommended Loop

1. Frame the task with a concrete outcome.
2. Point the agent to the exact files and constraints.
3. Ask for the smallest safe implementation, not a broad rewrite.
4. Review the diff for architecture fit, typing, and user impact.
5. Run `yarn validate`.
6. Capture follow-up debt separately instead of hiding it inside the current task.

## Good Prompts For This Repo

- "Refactor this screen to reuse `useCareaTheme` and shared spacing constants."
- "Add a Jest-safe mock for this native integration without changing runtime behavior."
- "Strengthen the developer workflow by updating scripts, hooks, and CI."
- "Document the architecture and delivery standards for new contributors."

## Avoid

- Massive stylistic rewrites with no product value
- Introducing new patterns without checking current navigation and theme conventions
- Claiming strict typing or enterprise readiness while checks still fail locally
- Bypassing validation because a native dependency is inconvenient to mock

## Current Direction

This repo uses an incremental-hardening approach:

- Fast local formatting and linting
- Pre-push validation
- CI quality workflow
- Mocked native-call surfaces in Jest
- Clear AI instructions for future contributors
