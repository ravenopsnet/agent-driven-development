# Repository map

## Root

- `README.md`: repository overview.
- `HOW_TO_USE.md`: human guide and prompt templates for working with agents.
- `templates.json`: metadata about included templates.

## `common-project-base`

Reusable base to copy into real projects:

- `AGENTS.md`: global agent rules, architecture summary, and testing architecture.
- `DESIGN.md`: visual identity and UI behavior template.
- `SOW.md`: Statement of Work / Functional & Technical Specs template.
- `.agents/skills/ux-first-acceptance-loop/SKILL.md`: workflow skill.
- `modules/_template`: vertical domain module template.
- `.github`: CI and PR evidence template.

## `examples/web-app`

Concrete TypeScript/Bun/TanStack reference:

- `SOW.md`: example product-level specification.
- `DESIGN.md`: RAVEN design contract.
- `.agents/skills/ux-first-acceptance-loop/SKILL.md`: workflow skill.
- `modules/auth`: Better Auth domain module.
- `modules/customers`: customer vertical-slice module.
- `modules/health`: health/reference module.
- `apps/web`: thin TanStack Start runtime host.
- `apps/docs`: Astro + Starlight docs app.
- `packages/db`: Drizzle/Turso database infrastructure and aggregated schema.
- `packages/config`: environment/config helper package.
- `tests/e2e`: cross-domain E2E tests.
