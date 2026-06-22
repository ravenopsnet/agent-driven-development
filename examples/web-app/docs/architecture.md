# Architecture

This document is the architecture source of truth for the web app reference project.

## Product purpose

This project is a reference implementation for an agent-driven TypeScript web application. It demonstrates the standard repository structure, agent workflow files, and preferred RAVEN web stack.

## Stack

- Monorepo: pnpm workspaces.
- Tooling: Vite+ (`vp`) for development, checks, tests, builds, and monorepo tasks.
- Language: TypeScript 6.
- Runtime: Bun for server-side execution.
- TanStack Start deployment target: Nitro with Bun preset in `apps/web/vite.config.ts`.
- Full-stack app: TanStack Start in `apps/web`.
- Frontend: React + TanStack Router/Query/DB/Table/Form/Store.
- Styling: Tailwind CSS.
- UI: external npm package `@ravenopsnet/ui`.
- Forms: TanStack Form.
- Validation: Zod.
- Auth: Better Auth.
- Backend business logic: importable functions/services in `apps/core`.
- Backend service layer: Effect v4 beta through `effect@beta`.
- ORM: Drizzle ORM.
- Database: Turso/libSQL.
- Product docs: Astro + Starlight in `apps/docs`.
- Testing: Vitest, React Testing Library, Playwright, MSW, and V8 coverage.
- Lint/format: OXC via Oxlint and Oxfmt.

## Workspace boundaries

```text
apps/web
  TanStack Start application.
  Owns routing, pages, app shell, server functions, server routes, loaders, and UI composition.
  Imports backend/business functions from apps/core.

apps/core
  Importable backend/business logic module.
  Owns services, use cases, auth configuration, background-job functions, and integration boundaries.
  Does not expose a standalone HTTP API by default.

apps/docs
  Astro + Starlight product documentation website.
  Owns public product docs, guides, API docs, and operational docs intended for users/developers.

packages/db
  Owns Drizzle schema, database client creation, and migrations.

packages/domain
  Owns shared business types, Zod schemas, and domain validation.

packages/config
  Owns shared typed environment/config helpers.

tests/e2e
  Owns Playwright smoke and end-to-end tests.
```

## Dependency direction

Allowed:

- `apps/web` → `apps/core`, `packages/domain`, `packages/db` only through public APIs, `packages/config`, external `@ravenopsnet/ui`.
- `apps/core` → `packages/domain`, `packages/db`, `packages/config`.
- `apps/docs` → documentation-only dependencies and local docs content.
- `packages/db` → Drizzle, libSQL client.
- `packages/domain` → Zod and pure TypeScript only.
- `packages/config` → Zod and platform environment values.

Avoid:

- `apps/core` importing React UI or route components.
- `packages/domain` importing from apps.
- `packages/db` importing from apps.
- apps importing non-exported package internals.
- creating a local `packages/ui` package for `@ravenopsnet/ui`.

## Frontend architecture

- Use TanStack Start for the full-stack React app structure.
- Use TanStack Router file-based routing.
- Use TanStack Start server functions/server routes to call `apps/core` functions.
- Build the production server for Bun using the Nitro Bun preset.
- Use TanStack Query for server-state caching and mutations.
- Use TanStack DB when client-side synced collections/live queries are justified.
- Use TanStack Form with Zod/Standard Schema validation.
- Use TanStack Store for local client state when needed.
- Import reusable UI primitives from external `@ravenopsnet/ui`.

## Backend/core architecture

- `apps/core` is the backend business-logic layer, not an HTTP server package.
- Export functions/services from `apps/core` and import them into `apps/web` server functions/server routes.
- Runtime is Bun when executing server-side code.
- Prefer Web APIs, Bun-native file/process APIs, and Bun built-ins.
- Avoid Node compatibility APIs unless required by a dependency.
- Use Effect for service composition, explicit errors, retries, concurrency, resource management, and observability boundaries.
- Validate external input with Zod at transport boundaries.
- Keep side effects behind service functions.
- Better Auth configuration lives in `apps/core` and is exposed through TanStack Start server routes in `apps/web`.

## Database architecture

- Turso/libSQL is the production database target.
- Drizzle owns schema and type-safe database access.
- Schema lives in `packages/db/src/schema.ts`.
- Database client creation lives in `packages/db/src/client.ts`.
- Better Auth tables live in the Drizzle schema alongside app tables.
- Migrations must be generated and tested when schema changes.

## Docs architecture

- Product docs live in `apps/docs`.
- Use Astro + Starlight.
- Keep internal agent workflow docs in repository-level `docs/`.
- Keep public product/user/developer documentation in `apps/docs/src/content/docs`.

## API and contract boundaries

- `apps/web` server functions and server routes are the HTTP-facing API boundary.
- `apps/core` exports functions and services; it should not expose standalone API routes by default.
- Public request/response shapes must use shared schemas from `packages/domain` when possible.
- Contracts must be tested when changed.
- Do not silently change response fields, error shape, pagination, filtering, or auth requirements.

## Security architecture

- Validate all external input.
- Keep secrets out of client bundles.
- Do not log secrets, tokens, passwords, or sensitive customer data.
- Auth is handled with Better Auth.
- Permission-sensitive features must test allowed and denied cases.
- Database writes must be scoped by authorization and tenant/user boundaries when introduced.

## Architectural rules

- Prefer boring, explicit, maintainable code.
- Prefer local changes over broad rewrites.
- New abstractions must be justified by repeated concrete use.
- Keep domain rules testable without UI or transport layers.
- Use package exports as boundaries.
- Keep generated files out of manual edits.

## Update policy

Update this document when the stack, package boundaries, module ownership, API contracts, database ownership, security model, docs architecture, or major architecture decisions change.


## Design system

`DESIGN.md` is the visual identity and UI design source of truth.

UI implementation should use the project's component library and executable theme tokens. In Tailwind/shadcn projects, the app should expose semantic CSS variables such as `--background`, `--foreground`, `--primary`, `--border`, `--ring`, and `--radius` so reusable components render consistently across projects.

Architecture changes that introduce new reusable UI patterns, app shells, navigation systems, or design token conventions must update `DESIGN.md` in the same PR.
