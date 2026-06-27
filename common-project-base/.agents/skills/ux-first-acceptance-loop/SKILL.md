---
name: ux-first-acceptance-loop
description: Build production software from requirements using a UX-first, acceptance-driven, domain-oriented workflow.
---

# UX-First Acceptance Loop

Use this skill for meaningful product work: new products, modules, major features, UI-heavy features, and workflows that require strong confidence.

## Principles

- Start from user workflows, not implementation details.
- Use `SOW.md` as the product-level source of truth.
- Use `modules/<domain>` as the unit of ownership.
- Keep specs, contracts, tests, and implementation colocated.
- Define contracts before mocks.
- Generate tests before implementation where practical.
- Keep app routes thin; domain modules own behavior.
- Do not claim done without tests and delivery evidence.

## Phase 0: Read project context

Read `AGENTS.md`, `SOW.md`, `DESIGN.md` for UI work, and the relevant `modules/<domain>` folders before implementation.

## Phase 1: Generate or update `SOW.md`

Convert the user's complete software requirements into `SOW.md` before creating modules. The SOW must define product overview, scope, users/roles, domain modules, global workflows, functional requirements, technical requirements, UX requirements, testing requirements, delivery requirements, risks, and open questions.

## Phase 2: Derive domain modules

Create/update `modules/<domain>` folders from `SOW.md`. Each module owns `SPEC.md`, `USE_CASES.md`, `UX.md`, `CONTRACTS.md`, `TEST_PLAN.md`, `DELIVERY_EVIDENCE.md`, and the `domain/`, `core/`, `db/`, `web/`, and `tests/` subfolders.

## Phase 3: Create module docs

For each domain, generate coherent specs, use cases, UX flows, contracts, and a test plan before implementation. Stop for human review if product scope, architecture, auth, database schema, dependencies, or cross-domain contracts are unclear.

## Phase 4: Create frontend acceptance tests

Use `UX.md` and `CONTRACTS.md` to create frontend acceptance/E2E tests. Tests should describe user behavior, use accessible locators, and use contract-shaped mocks when real backend behavior is not implemented yet.

## Phase 5: Implement frontend/UI

Implement module UI under `modules/<domain>/web`. Follow `DESIGN.md`, use the component library first, and keep `apps/web/src/routes` thin.

## Phase 6: Create backend/domain tests

Create unit, integration, contract, permission, migration, and server-function tests from `CONTRACTS.md` and business rules before backend implementation where practical.

## Phase 7: Implement backend/domain code

Implement `domain/`, `core/`, `db/`, and related server-function integration. Do not weaken tests to pass.

## Phase 8: Wire app routes and cross-domain flows

App folders compose modules. For TanStack Start, route files call module `core` functions from server functions/routes and import module `web` components. Root-level cross-domain E2E tests live in `tests/e2e`.

## Phase 9: Verify and repair

Run the relevant lint, format, typecheck, module tests, E2E tests, and build. If tests fail, classify the failing layer and fix the smallest cause. If the same failure repeats twice, stop and request human review.

## Phase 10: Record delivery evidence

Update `modules/<domain>/DELIVERY_EVIDENCE.md` with what changed, tests, commands, results, screenshots if UI changed, risks, rollback notes, and follow-ups.

## Exit criteria

Work is complete only when specs, contracts, tests, implementation, UI, app route wiring, and delivery evidence are consistent and relevant checks pass.
