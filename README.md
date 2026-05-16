# Carea Mobile

![Home screen preview](./src/assets/ui-snippet/home.jpeg)

Carea Mobile is a React Native application with themed UI, multi-screen navigation, commerce-style discovery flows, and calling integrations. This repository is now set up for a stronger AI-assisted engineering workflow with clearer standards, repeatable validation, and production-minded team conventions.

## Stack

- React Native `0.73`
- React `18`
- TypeScript
- React Navigation
- Expo modules where useful
- Jest + ESLint + Prettier + Husky

## Quick Start

### Prerequisites

- Node `20.x`
- Yarn `1.x`
- Xcode for iOS development
- Android Studio for Android development

### Install

```bash
yarn install
```

### Run

```bash
yarn start
yarn android
yarn ios
```

## Quality Workflow

```bash
yarn lint
yarn typecheck
yarn test:ci
yarn validate
```

## Repo Operating System

- `AGENTS.md`: rules for AI coding agents working in this repo
- `CONTRIBUTING.md`: contributor workflow and quality expectations
- `docs/ai-workflow.md`: recommended AI delivery loop for this project
- `.github/workflows/quality.yml`: CI quality gate for pull requests and key branches
- `.husky/pre-commit` and `.husky/pre-push`: local guardrails

## Architecture Notes

- `src/screens`: screen-level flows
- `src/components`: reusable UI and feature components
- `src/navigators`: navigation structure
- `src/hooks`: shared hooks like theming and navigation behavior
- `src/libs`: external service integrations
- `src/constants`: design tokens and shared app constants

## Current Standard

This repo is being hardened incrementally:

- Linting is scoped to active app and test sources
- Type checking is enabled as a migration guardrail instead of pretending the whole legacy surface is fully strict today
- Native call integrations are mocked in Jest so the validation loop stays reliable
- Pull requests, issues, and AI instructions are documented for team scale

## Next Product-Grade Moves

- Expand component and navigation test coverage around critical user journeys
- Tighten TypeScript from incremental mode toward full strictness
- Add environment validation and release automation once secrets strategy is finalized
- Separate domain data from presentational components for easier scaling
