# AGENTS.md

This repository is developed with AI coding agents. Optimize for correctness, maintainability, security, minimal diffs, and production confidence.

## Source of truth

- `SOW.md` is the product-level Functional & Technical Specification / Statement of Work.
- `DESIGN.md` is the visual identity and UI behavior source of truth.
- `modules/<domain>/SPEC.md` is the domain/module source of truth.
- `modules/<domain>/USE_CASES.md` defines user workflows for the domain.
- `modules/<domain>/UX.md` defines screens, states, and frontend behavior for the domain.
- `modules/<domain>/CONTRACTS.md` defines schemas, function contracts, errors, permissions, and boundaries.
- `modules/<domain>/TEST_PLAN.md` defines required tests for that module.
- `.agents/skills/ux-first-acceptance-loop/SKILL.md` defines the standard workflow.

## Architecture

This project uses domain-oriented vertical slices. Each domain module owns specs, contracts, domain models, core business logic, database ownership, web UI building blocks, tests, fixtures, and delivery evidence.

App folders such as `apps/web` should be thin runtime hosts. They wire routes, providers, layouts, and deployment concerns; domain behavior lives in `modules/<domain>`.

## Testing architecture

Tests are colocated with modules by default:

- module unit tests: `modules/<domain>/tests/unit`
- module integration tests: `modules/<domain>/tests/integration`
- module E2E/acceptance tests: `modules/<domain>/tests/e2e`
- module fixtures: `modules/<domain>/tests/fixtures`
- cross-domain smoke and workflow tests: `tests/e2e`

Frontend mocks are allowed only when they are based on module contracts. Do not let mocks become an independent source of truth.

## Standard workflow

Use `.agents/skills/ux-first-acceptance-loop/SKILL.md` for meaningful product work.

1. Convert product requirements into `SOW.md`.
2. Derive domain modules from `SOW.md`.
3. For each domain, create specs, use cases, UX flows, contracts, and test plan.
4. Create frontend acceptance tests from UX flows and contracts.
5. Implement UI from the acceptance tests and `DESIGN.md`.
6. Create backend/domain tests from contracts and business rules.
7. Implement domain models, core functions, database schema, and migrations.
8. Wire thin app routes to module implementation.
9. Run module tests and cross-domain E2E flows.
10. Record delivery evidence.

## Engineering rules

- Prefer working inside one domain module at a time.
- Do not implement code before relevant module docs are coherent.
- Do not create frontend mocks without contracts.
- Do not implement backend/core code before backend/domain tests exist where practical.
- Do not change public contracts without updating `CONTRACTS.md` and relevant tests.
- Do not change product scope without updating `SOW.md`.
- Do not change UX behavior without updating `UX.md` and relevant acceptance tests.
- Do not change visual design rules without updating `DESIGN.md`.
- Do not weaken or delete tests to make a change pass.
- Do not bypass failing checks.
