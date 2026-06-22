# Testing Policy

This document is the testing source of truth for the web app reference project.

## Test stack

- Unit and integration tests: Vitest.
- React/component tests: Vitest + React Testing Library + user-event.
- DOM test environment: happy-dom by default.
- HTTP/API boundary mocking: MSW when a test should not hit real network services.
- E2E smoke tests: Playwright.
- Coverage: V8 coverage through `@vitest/coverage-v8`.
- Linting: Oxlint.
- Formatting: Oxfmt.

## Commands

Primary commands:

```bash
pnpm check
pnpm lint
pnpm format
pnpm typecheck
pnpm test
pnpm test:e2e
pnpm build
```

Vite+ commands:

```bash
vp check
vp test
vp build
vp run build
```

Package-specific commands may be run with pnpm filters:

```bash
pnpm --filter web test
pnpm --filter @ravenopsnet/core test
pnpm --filter @ravenopsnet/db test
pnpm --filter @ravenopsnet/domain test
pnpm --filter @ravenopsnet/docs build
```

## Required tests by change type

| Change type | Required tests |
|---|---|
| Bug fix | Regression test that fails before the fix and passes after |
| Domain logic | Unit tests in the owning package |
| Core business function | Unit or integration tests in `apps/core` |
| UI component usage | Component/unit tests and accessibility-conscious assertions |
| UI critical flow | Playwright E2E smoke test or route-level integration test |
| Form/validation | Zod schema tests plus TanStack Form behavior tests when relevant |
| Server function/server route | Contract/integration tests for request, response, error, and auth behavior |
| Better Auth change | Auth route/session tests or documented manual verification if library integration prevents fast automation |
| Database schema change | Drizzle migration test with realistic existing data |
| Permission change | Allowed and denied cases |
| Product docs change | Build the docs app and check links/content structure when relevant |
| Performance change | Before/after measurement or benchmark plus correctness tests |
| Refactor | Existing tests pass; add characterization tests when behavior is unclear |

## PR gate

A normal PR should pass:

1. dependency install integrity
2. `pnpm lint`
3. `pnpm format`
4. `pnpm typecheck`
5. `pnpm test`
6. `pnpm build`
7. relevant package-specific tests
8. migration/contract/E2E checks when the change type requires them

## Test locations

```text
apps/web/src/**/*.test.ts
apps/web/src/**/*.test.tsx
apps/core/src/**/*.test.ts
packages/domain/src/**/*.test.ts
packages/db/src/**/*.test.ts
tests/e2e/**/*.spec.ts
```

## Test quality rules

- Test behavior, not implementation details.
- Keep domain tests pure and fast.
- Prefer integration tests at app/package boundaries.
- Do not mock the code under test.
- Use MSW for external HTTP boundaries instead of mocking internal services.
- Do not weaken or delete tests to make code pass.
- Prefer contract tests for public server functions, server routes, and package exports.
- For UI, assert user-visible behavior and accessibility semantics.
- For database changes, test migrations against realistic old data.

## Agent rules

`continuous-development` creates or updates tests according to this policy.
`continuous-delivery` verifies that tests are meaningful, relevant, passing, and documented in the PR evidence.

## Update policy

Update this document when commands, test tools, test locations, CI behavior, or required tests by change type change.
