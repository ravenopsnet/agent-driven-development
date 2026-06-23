# Agent Driven Development Starter

A minimal reference repository for Agent Driven Development.

The repo contains:

- `common-project-base`: a project-agnostic base with `AGENTS.md`, two skills, architecture/testing docs, CI, and PR evidence template.
- `examples/web-app`: a concrete TypeScript web-app reference implementation using the preferred RAVEN stack.

## Standard project base

```text
AGENTS.md
DESIGN.md
docs/
  architecture.md
  testing.md
skills/
  continuous-development/SKILL.md
  continuous-delivery/SKILL.md
.github/
  workflows/ci.yml
  PULL_REQUEST_TEMPLATE.md
```

## Reference web app stack

- pnpm monorepo
- Vite+
- TypeScript 6
- Bun runtime
- TanStack Start in `apps/web`
- importable backend/core functions in `apps/core`
- external npm UI package `@ravenopsnet/ui`
- Better Auth
- Drizzle ORM
- Turso/libSQL
- Effect v4 beta
- Astro + Starlight docs in `apps/docs`
- Vitest + React Testing Library + Playwright + MSW
- OXC through Oxlint and Oxfmt

## Intended use

Copy `common-project-base` into a new project for a clean Agent Driven Development foundation.

Use `examples/web-app` as a concrete implementation reference for TypeScript web applications.


## Design system contract

Projects include `DESIGN.md` as the visual identity and UI contract for agents. In Tailwind/shadcn projects, `DESIGN.md` should match the executable CSS variables used by the app and component library.

For the web-app reference, `@ravenopsnet/ui` is treated as the component source of truth, while the consuming app provides the shadcn-compatible CSS variables and Tailwind theme bridge.


## Usage

Read [HOW_TO_USE.md](./HOW_TO_USE.md) for the concrete workflow and prompt templates.
