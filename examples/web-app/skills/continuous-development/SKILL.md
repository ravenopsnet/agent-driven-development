---
name: continuous-development
description: Produce high-quality, project-native code and tests that satisfy the repository's architecture, testing policy, and CI guardrails.
---

# Continuous Development

Use this skill when implementing a feature, bug fix, refactor, optimization, API change, UI change, database change, or security-sensitive change.

The goal is to generate code that is likely to pass delivery verification on the first serious attempt.

## Core rule

Produce boring, project-native, maintainable code that fits the repository and is easy to verify.

## Required loop

1. Understand the task.
2. Read `AGENTS.md`.
3. Read `docs/architecture.md` when the task touches architecture, modules, data, APIs, UI structure, backend services, or project conventions.
4. Read `docs/testing.md` before deciding which tests to create or run.
5. Read `DESIGN.md` when the task touches UI, styling, layout, product pages, marketing pages, docs visuals, or reusable UI patterns.
6. Classify the change type.
6. Identify the smallest safe implementation.
7. Identify affected contracts, data, permissions, and user flows.
8. Decide the required tests before coding.
9. Create or update tests as part of the implementation.
10. Implement one coherent vertical slice.
11. Run the smallest relevant checks locally.
12. Self-review for correctness, scope creep, security, and maintainability.
13. Handoff to `continuous-delivery` for verification.

## Change classification

Classify the work as one or more of:

- feature
- bugfix
- refactor
- API change
- database change
- UI change
- visual design change
- performance change
- security-sensitive change
- dependency/tooling change
- documentation-only change

## Testing ownership

This skill creates or updates tests.

Follow `docs/testing.md`.

- Bug fix: write a regression test.
- API change: write/update contract tests.
- Database change: write/update migration tests.
- Auth/permission change: write allowed and denied cases.
- UI flow change: write component tests and critical E2E smoke tests when appropriate.
- Visual design change: implement against `DESIGN.md` and capture screenshot evidence when possible.
- Performance change: add measurement or benchmark evidence.

## Implementation rules

- Inspect nearby code before writing new code.
- Reuse existing patterns before creating new ones.
- Keep diffs small and focused.
- Avoid speculative abstractions.
- Preserve public APIs unless the change explicitly requires changing them.
- Prefer explicit names and simple control flow.
- Validate external input at boundaries.
- Keep domain logic testable outside UI and transport layers.
- Do not introduce dependencies without documenting why the platform or existing stack is insufficient.
- Do not modify unrelated files.

## Self-review checklist

Before handoff, check:

- Does the code match the requested behavior?
- Is the diff minimal?
- Does it fit the architecture?
- Are affected contracts updated and tested?
- Are database changes migrated and tested?
- Are permissions and denied cases covered?
- Are tests meaningful?
- Did the relevant local checks pass?
- Is anything unverified clearly stated?

## Handoff output

Provide:

- Summary of change.
- Files changed.
- Tests added or updated.
- Commands run and result.
- Risks or assumptions.
- What should `continuous-delivery` verify next.


## UI and design mode

Use this mode for UI, layout, styling, product page, marketing page, docs visual, and reusable component-pattern work.

Before coding:

1. Read `DESIGN.md`.
2. Inspect nearby existing UI and component usage.
3. Identify the page or component's single job.
4. Define visual hierarchy, layout structure, states, and responsive behavior.
5. Reuse the project component library first.
6. Use semantic CSS variables and Tailwind classes instead of hard-coded brand values.

Implementation rules:

- Do not invent a new visual language.
- Do not create local duplicates of existing component-library primitives.
- Implement relevant loading, empty, error, success, disabled, focused, and validation states.
- Preserve keyboard navigation and visible focus states.
- Keep responsive behavior explicit.
- Update `DESIGN.md` only when the design system intentionally changes.

Handoff requirements for meaningful UI changes:

- Summarize how the UI follows `DESIGN.md`.
- List component-library primitives used.
- Provide screenshot or Playwright evidence when possible.
- State any visual risks or unresolved design decisions.
