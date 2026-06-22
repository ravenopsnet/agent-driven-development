# AGENTS.md

This repository is developed with AI coding agents. Optimize for correctness, maintainability, security, minimal diffs, and production confidence.

## Standard workflow

Use the `continuous-development` skill before implementation.
Use the `continuous-delivery` skill before declaring work complete.

Per change:

1. Understand the request and relevant project context.
2. Read `docs/architecture.md` when touching architecture, modules, API boundaries, data ownership, or project conventions.
3. Read `docs/testing.md` before deciding which tests to create or run.
4. Use `skills/continuous-development/SKILL.md` to plan and implement the change.
5. Use `skills/continuous-delivery/SKILL.md` to verify evidence and release readiness.
6. Do not claim completion without evidence.

## Project commands

Update these commands for the actual project.

- Install: `TODO`
- Format/check: `TODO`
- Typecheck: `TODO`
- Lint: `TODO`
- Unit tests: `TODO`
- Integration tests: `TODO`
- Contract tests: `TODO`
- E2E smoke tests: `TODO`
- Build: `TODO`

## Engineering rules

- Prefer small, local, project-native changes.
- Follow existing patterns before introducing new abstractions.
- Do not change public contracts without contract or integration tests.
- Do not change database schema without migration tests.
- Do not weaken or delete tests to make a change pass.
- Do not bypass failing checks.
- Do not introduce new dependencies without justification.
- Do not hide uncertainty. State what was not verified.
- Keep documentation updated when the code changes the truth.

## Documentation rules

- `docs/architecture.md` is the architecture source of truth.
- `docs/testing.md` is the testing policy source of truth.
- Agents may update documentation facts.
- Humans approve changes to architecture principles, stack choices, CI policy, release policy, and security policy.
