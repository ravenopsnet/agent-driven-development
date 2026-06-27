# Web App Reference

A TypeScript web-app reference for the Agent Driven Development foundation.

## Architecture

This example is transitioning around domain-oriented vertical slices:

- `SOW.md` defines product-level scope.
- `DESIGN.md` defines visual identity.
- `.agents/skills/ux-first-acceptance-loop/SKILL.md` defines the workflow.
- `modules/<domain>` owns specs, contracts, code, tests, fixtures, and delivery evidence.
- `apps/web` is the TanStack Start runtime host and should keep route files thin.
- `apps/docs` is the Astro + Starlight product docs app.

## Stack

- pnpm monorepo
- Vite+
- TypeScript 6
- Bun runtime
- TanStack Start
- React + TanStack Router/Query/Form/Table/Store/DB
- Tailwind CSS
- external `@ravenopsnet/ui`
- Better Auth
- Drizzle ORM + Turso/libSQL
- Vitest + Playwright
- OXC

## Commands

- `pnpm install`
- `pnpm dev`
- `pnpm check`
- `pnpm test`
- `pnpm test:e2e`
- `pnpm build`
