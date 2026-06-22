# Web App Reference Project

A reference monorepo for Agent Driven Development using the preferred RAVEN web stack.

## Stack

- Monorepo: pnpm workspaces.
- Tooling: Vite+ (`vp`) for install/check/test/build/run workflows.
- Language: TypeScript 6.
- App runtime: Bun for the full-stack TanStack Start app and server-side runtime.
- Frontend: React + TanStack Start/Router/Query/DB/Table/Form/Store.
- Styling: Tailwind CSS.
- UI package: external npm package `@ravenopsnet/ui`.
- Forms: TanStack Form.
- Validation: Zod.
- Auth: Better Auth.
- Backend business logic: importable functions in `apps/core`.
- Backend libraries: prefer Bun built-ins and Bun-specific APIs over unnecessary npm packages.
- Service layer: Effect v4 beta through `effect@beta`.
- ORM: Drizzle ORM.
- Database: Turso/libSQL.
- Product docs website: Astro + Starlight in `apps/docs`.
- Testing: Vitest, React Testing Library, Playwright, MSW, and coverage via V8.
- Linting/formatting: OXC through Oxlint and Oxfmt.

## Workspace layout

```text
apps/
  web/        TanStack Start full-stack app; imports server logic from apps/core
  core/       importable backend/business logic functions, auth, services, jobs
  docs/       Astro + Starlight product documentation website
packages/
  db/         Drizzle + Turso/libSQL schema and client
  domain/     shared domain schemas and types
  config/     shared typed environment/config helpers
tests/
  e2e/        Playwright end-to-end smoke tests
```

`apps/core` does not expose a separate HTTP API server. It exports functions and services that `apps/web` uses from TanStack Start server functions and server routes.

## Commands

Install Vite+ globally first if needed:

```bash
curl -fsSL https://vite.plus | bash
```

Then:

```bash
vp install
vp check
vp test
vp build
```

Equivalent package scripts:

```bash
pnpm install
pnpm check
pnpm test
pnpm build
```

## Notes

- This is a reference skeleton, not a finished app.
- Keep project-specific facts in `AGENTS.md`, `docs/architecture.md`, and `docs/testing.md`.
- Use `continuous-development` to implement code and tests.
- Use `continuous-delivery` to verify PR evidence and delivery readiness.
