---
name: continuous-delivery
description: Bootstrap or verify CI/CD guardrails, PR evidence, release readiness, rollback safety, and production confidence.
---

# Continuous Delivery

Use this skill in two modes:

1. **Bootstrap mode**: when setting up or changing CI/CD, PR templates, release guardrails, or delivery infrastructure.
2. **Verification mode**: after `continuous-development` finishes a change and before declaring the work complete.

## Core rule

Do not declare done without evidence.

## Bootstrap mode

Use bootstrap mode when creating a new project or improving the delivery system.

Create or update:

- `.github/workflows/ci.yml`
- `.github/PULL_REQUEST_TEMPLATE.md`
- test commands in `package.json` or equivalent
- `docs/testing.md`
- `DESIGN.md` when setting up a UI project or changing design-system delivery rules
- delivery-related instructions in `AGENTS.md`
- release checklist if the project deploys to production

Minimum CI gate:

1. dependency/install integrity
2. format/check
3. typecheck
4. lint
5. unit tests
6. integration tests when configured
7. contract tests when configured
8. migration tests when configured
9. build
10. E2E smoke tests when configured
11. security/dependency scan when configured

## Verification mode

Use verification mode for every implementation PR.

Verify:

- The change matches the requested behavior.
- The implementation followed `AGENTS.md`.
- Architecture docs are updated if architecture changed.
- Testing docs are updated if testing policy or commands changed.
- Tests match the change type in `docs/testing.md`.
- Test evidence is present.
- Build evidence is present.
- Security, permissions, data, and migration risks are considered.
- UI changes follow `DESIGN.md`.
- UI screenshots or recordings are included for meaningful UI changes when useful.
- Design token changes are mirrored between `DESIGN.md` and the executable CSS/theme implementation.
- Rollback is understood.
- Known limitations are stated.

## Testing ownership

This skill verifies tests. It does not own initial test creation.

`continuous-development` creates or updates tests. `continuous-delivery` checks whether those tests are sufficient, meaningful, and passing.

## Rejection rules

Reject or send back to `continuous-development` if:

- No meaningful tests exist for behavior changes.
- Tests were weakened or deleted without justification.
- Public contracts changed without contract tests.
- Database changes lack migration evidence.
- Auth/permission changes lack denied-case tests.
- CI commands fail.
- UI changes ignore `DESIGN.md` or introduce one-off visual patterns without justification.
- Design tokens changed in CSS/theme files without updating `DESIGN.md`, or vice versa.
- The PR evidence is missing or vague.
- The change has hidden risk or unclear rollback.

## Verification output

Produce:

- Readiness verdict: ready / not ready.
- Evidence summary.
- Missing checks.
- Blocking issues.
- Non-blocking follow-ups.
- Release and rollback notes.


## Visual verification

For UI, layout, styling, product page, marketing page, docs visual, or design-system changes, verify:

- `DESIGN.md` was read and followed.
- Existing component-library primitives were reused before creating new local UI.
- Semantic CSS variables/classes were used instead of hard-coded brand values.
- Desktop and mobile behavior were considered.
- Loading, empty, error, success, disabled, focus, and validation states are covered when relevant.
- Screenshot or Playwright evidence exists for meaningful visual changes when possible.
- Any intentional token, visual identity, or reusable pattern change updated `DESIGN.md`.
