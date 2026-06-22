# AGENTS.md

This repository is a TypeScript web application monorepo developed with AI coding agents.

Optimize for correctness, maintainability, security, minimal diffs, and production confidence.

## Standard workflow

Use `skills/continuous-development/SKILL.md` before implementation.
Use `skills/continuous-delivery/SKILL.md` before declaring work complete.

For normal tasks:

1. Read this file.
2. Read `docs/architecture.md` if changing architecture, modules, contracts, database, backend services, frontend structure, docs site, or project conventions.
3. Read `docs/testing.md` before deciding what tests to create or run.
4. Read `DESIGN.md` before UI, styling, layout, docs visual, product page, marketing page, or reusable UI pattern changes.
5. Use `continuous-development` to plan, implement, and create tests.
6. Use `continuous-delivery` to verify evidence and release readiness.

## Tech stack

- Structure: pnpm monorepo.
- Tooling: Vite+ (`vp`) for install/check/test/build/run where possible.
- Language: TypeScript 6.
- Runtime: Bun for server-side execution and local backend/runtime tasks.
- TanStack Start deployment target: Nitro with Bun preset.
- Full-stack app: TanStack Start in `apps/web`.
- Frontend: React, TanStack Router, Query, DB, Table, Form, Store.
- Styling: Tailwind CSS with a shadcn-compatible CSS variable theme bridge in `apps/web/src/styles.css`.
- Visual identity: `DESIGN.md`.
- UI package: external npm package `@ravenopsnet/ui`; do not create a local `packages/ui` package unless explicitly requested.
- Forms: TanStack Form.
- Validation: Zod.
- Auth: Better Auth.
- Backend business logic: `apps/core` exports functions/services imported by `apps/web` server functions and server routes.
- Backend libraries: prefer Bun built-ins and Bun-specific APIs over Node compatibility APIs and unnecessary npm packages.
- Backend service style: Effect v4 beta through `effect@beta` until Effect v4 becomes stable.
- ORM: Drizzle ORM.
- Database: Turso/libSQL.
- Product docs: Astro + Starlight in `apps/docs`.
- Tests: Vitest, React Testing Library, Playwright, MSW, V8 coverage.
- Lint/format: OXC via Oxlint and Oxfmt.

## Commands

- Install: `vp install` or `pnpm install`
- Check: `pnpm check`
- Lint: `pnpm lint`
- Format check: `pnpm format`
- Format write: `pnpm format:write`
- Typecheck: `pnpm typecheck`
- Unit/integration tests: `pnpm test`
- E2E smoke tests: `pnpm test:e2e`
- Build: `pnpm build`
- Database generate: `pnpm db:generate`
- Database migrate: `pnpm db:migrate`

## Engineering rules

- Prefer Bun built-ins in server-side code.
- Prefer platform APIs over unnecessary dependencies.
- Prefer Effect for backend service composition, explicit errors, retries, concurrency, resource management, and observability boundaries.
- Keep domain logic outside React components.
- Keep backend business logic in `apps/core`, not in route components.
- `apps/core` must not expose a standalone HTTP API by default; it exports functions used by `apps/web` server functions and server routes.
- Keep database schema in `packages/db`.
- Keep shared business types and Zod schemas in `packages/domain`.
- Import reusable UI from external `@ravenopsnet/ui`.
- Do not create local duplicate UI primitives for components already available from `@ravenopsnet/ui`.
- For UI changes, read `DESIGN.md` first and implement with semantic Tailwind/shadcn variables.
- Do not hard-code RAVEN brand hex values in route components; put theme values in the CSS token bridge.
- Do not make app packages import private internals from other packages.
- Use package exports.
- Keep PRs small and focused.
- Do not change public contracts without contract/integration tests.
- Do not change database schema without migration evidence.
- Do not weaken tests to pass CI.

## Documentation rules

- Update `docs/architecture.md` when architecture, boundaries, modules, data ownership, contracts, stack choices, or app responsibilities change.
- Update `docs/testing.md` when test tools, commands, test policy, or CI behavior changes.
- Update `DESIGN.md` when visual identity, design tokens, component rules, or reusable UI patterns intentionally change.
- Agents may update factual docs.
- Humans approve changes to architecture principles, delivery policy, security policy, and stack choices.


## Design token ownership

- `DESIGN.md` defines the semantic design contract.
- `apps/web/src/styles.css` implements that contract as Tailwind/shadcn-compatible CSS variables for this app.
- `@ravenopsnet/ui` should consume semantic variables exposed by the app, not require a local `packages/ui` copy.
- If `DESIGN.md` and the executable CSS theme disagree, fix the mismatch or explicitly document the intentional design-system change.
