---
name: qa-security-accessibility
description: 'Use when validating quality, accessibility, and security for Carea Mobile features. Trigger phrases: qa plan, test plan, accessibility audit, a11y, pentest, security review, threat model, regression checks, release readiness.'
---

# QA Security Accessibility

## Intent

Apply release-quality checks from QA, pentest, and accessibility perspectives before merging user-impacting changes.

## Use This Skill When

- Reviewing a feature for release readiness
- Writing a test plan or regression checklist
- Hardening sensitive flows: auth, wallet, transactions, messaging, calls

## QA Checklist

1. Define risk tier:

- P0: auth, payment, transaction verification, protected navigation
- P1: profile updates, search, offers, chat
- P2: low-risk UI polish

2. Verify behavior states:

- Loading
- Success
- Empty
- Error
- Retry

3. Validate commands:

- `yarn lint`
- `yarn typecheck`
- `yarn test:ci`

## Accessibility Checklist (Required)

- Blind-user usability is mandatory: changed flows must be fully operable with VoiceOver (iOS) and TalkBack (Android) without sight.
- Screen-reader parity is required: blind users must be able to complete the same core tasks as sighted users.
- Interactive elements expose role and label
- Inputs expose labels and error feedback
- Touch targets are large enough
- Contrast meets WCAG AA
- VoiceOver/TalkBack manual spot check on changed screens

## Accessibility Release Gate (Mandatory)

Do not treat accessibility as optional polish. Block release when a blind user cannot complete P0 journeys (auth, payment, transaction verification, protected navigation) with assistive technology.

## Security Checklist

- No secrets or tokens in logs
- Encrypted storage used for auth material
- API errors do not leak sensitive server internals
- Auth route guarding cannot be bypassed by direct navigation
- Validate brute-force and replay abuse assumptions for auth endpoints

## Output Format

Provide:

- Findings ordered by severity
- Repro steps
- Risk statement
- Exact file paths impacted
- Suggested remediation per finding
