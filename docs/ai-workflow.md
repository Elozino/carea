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

## Agent Pickup (Required)

When an AI agent starts work in this repo, it should load and follow this plan first:

- `docs/codebase-analysis-and-execution-plan.md`

That plan defines:

- Current codebase behavior and architecture
- FAANG-level implementation standards
- Accessibility non-negotiables
- Role-based execution lens (Senior Engineer, Product Engineer, QA, Pentester)
- AI-owned unit test strategy and rollout

### Pickup Protocol

1. Read `docs/codebase-analysis-and-execution-plan.md` before writing code.
2. Map the request to the relevant phase and role sections in the plan.
3. Implement the smallest safe change that satisfies those standards.
4. Add or update tests using the AI-owned test strategy in that plan.
5. Run `yarn validate` before finalizing (or explain why not possible).

### Prompt Template For Any Agent

Use this prompt starter to ensure the agent picks the plan:

"Before implementing, read `docs/codebase-analysis-and-execution-plan.md` and follow it as the governing execution plan for architecture, accessibility, QA, security, and AI unit-test standards."

## Project Skills

This repo now includes workspace skills that AI agents can pick and apply:

- `.github/skills/auth-feature-delivery/SKILL.md`
- `.github/skills/qa-security-accessibility/SKILL.md`
- `.github/skills/module-architecture-refactor/SKILL.md`

When prompting an agent, include one of these phrases to trigger the matching skill:

- "Use auth-feature-delivery"
- "Use qa-security-accessibility"
- "Use module-architecture-refactor"
