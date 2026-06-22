# Architecture

This document is the architecture source of truth for the project.

Keep it short, practical, and accurate. Do not turn it into a generic software engineering textbook.

## Product purpose

TODO: Describe what this product does and who it serves.

## Tech stack

TODO: List runtime, language, frontend, backend, database, ORM, validation, testing, deployment, and package manager.

## System boundaries

TODO: Describe major apps, packages, modules, services, and data boundaries.

## Domain model

TODO: Describe important business concepts and relationships.

## Data ownership

TODO: Describe which module owns which data and who can read/write it.

## API and contract boundaries

TODO: Describe API conventions, request/response contracts, event contracts, and compatibility rules.

## Frontend architecture

TODO: Describe routing, data loading, state management, forms, component structure, and UI package usage.

## Backend architecture

TODO: Describe runtime, service boundaries, validation, side effects, errors, observability, and background jobs.

## Database architecture

TODO: Describe database engine, migrations, schema ownership, indexing, and data safety expectations.

## Security architecture

TODO: Describe auth, authorization, session rules, secrets, input validation, and sensitive data rules.

## Architectural rules

- Prefer boring, explicit, maintainable code.
- Prefer local changes over broad rewrites.
- Preserve public contracts unless the change explicitly requires a contract update.
- New abstractions must be justified by repeated concrete use, not speculation.
- Cross-boundary behavior must be covered by integration or contract tests.

## Forbidden patterns

TODO: List project-specific forbidden patterns.

## Update policy

Update this document when a change modifies architecture, module boundaries, data ownership, public contracts, stack choices, or important conventions.
