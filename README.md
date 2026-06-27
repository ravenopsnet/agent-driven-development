# Agent Driven Development Starter

A minimal reference repository for Agent Driven Development based on a UX-first, acceptance-driven, domain-oriented workflow.

The repo contains:

- `common-project-base`: a project-agnostic base with `AGENTS.md`, `DESIGN.md`, `SOW.md`, `.agents/skills`, module templates, CI, and PR evidence template.
- `examples/web-app`: a concrete TypeScript web-app reference implementation using the preferred RAVEN stack.

## Core idea

Start from a complete product-level `SOW.md`, derive domain modules from it, then build each module through an outside-in loop:

1. module specs
2. use cases
3. UX flows
4. contracts
5. frontend acceptance tests
6. frontend UI
7. backend/domain tests
8. backend/domain implementation
9. app route wiring and cross-domain E2E flows
10. delivery evidence

## Standard project base

```text
AGENTS.md
DESIGN.md
SOW.md
.agents/
  skills/
    ux-first-acceptance-loop/
      SKILL.md
modules/
  _template/
tests/
  e2e/
.github/
  workflows/ci.yml
  PULL_REQUEST_TEMPLATE.md
```

## Usage

Read [HOW_TO_USE.md](./HOW_TO_USE.md) for the concrete workflow and prompt templates.
