# HOW_TO_USE.md

This guide explains how to use this repository with AI agents or general AI models such as ChatGPT to build software from requirements using a UX-first, acceptance-driven, domain-oriented workflow.

## Philosophy

Do not ask the agent to “build the whole app.” Ask it to convert requirements into a product-level `SOW.md`, derive domain modules, generate module specs/contracts/tests, implement one domain at a time, then wire domains into app routes and cross-domain flows.

The main flow is:

1. requirements → `SOW.md`
2. `SOW.md` → domain modules
3. domain module docs → tests
4. tests → implementation
5. modules → app routes and cross-domain E2E flows
6. test failures → bounded repair loop
7. passing evidence → delivery evidence

## File roles

- `AGENTS.md`: global agent rules, architecture summary, and testing architecture.
- `DESIGN.md`: visual identity and UI behavior contract.
- `SOW.md`: product-level Functional & Technical Specification / Statement of Work.
- `.agents/skills/ux-first-acceptance-loop/SKILL.md`: workflow the agent should execute.
- `modules/<domain>`: colocated specs, contracts, code, tests, fixtures, and evidence for one domain.
- `tests/e2e`: root-level cross-domain E2E workflows.
- `apps/web/src/routes`: thin route wiring for the actual app.

## Step 1: Generate the reference `SOW.md`

Use this when you have a new product idea or full software requirements.

Prompt:

```md
Read `AGENTS.md` and `.agents/skills/ux-first-acceptance-loop/SKILL.md`.

Do not implement code yet.

I will give you the complete software requirements. Your task is to generate `SOW.md` using the existing `SOW.md` model.

Requirements:
[PASTE REQUIREMENTS]

Generate a complete `SOW.md` with:
- product overview
- scope and non-scope
- assumptions and constraints
- users, roles, and permissions
- domain modules
- global workflows
- functional requirements by module
- technical requirements
- UX/design requirements
- testing and delivery requirements
- risks and open questions

Do not create modules or implementation yet. End with assumptions and questions.
```

Review the generated SOW before continuing. The SOW is the product contract.

## Step 2: Generate domain modules from `SOW.md`

Prompt:

```md
Use `.agents/skills/ux-first-acceptance-loop/SKILL.md`.

Read `SOW.md` and derive the domain modules.

For each module, create `modules/<domain>` from `modules/_template` and draft:
- `README.md`
- `SPEC.md`
- `USE_CASES.md`
- `UX.md`
- `CONTRACTS.md`
- `TEST_PLAN.md`
- `DELIVERY_EVIDENCE.md`

Do not implement code yet.

At the end, summarize:
- modules created
- cross-module dependencies
- unclear boundaries
- recommended implementation order
```

Review domain boundaries carefully. Top-level modules should be stable business capabilities, not tiny tasks.

## Step 3: Refine one domain before implementation

Prompt:

```md
Focus only on `modules/<domain>`.

Read:
- `SOW.md`
- `DESIGN.md` if UI is involved
- `modules/<domain>/SPEC.md`
- `modules/<domain>/USE_CASES.md`
- `modules/<domain>/UX.md`
- `modules/<domain>/CONTRACTS.md`
- `modules/<domain>/TEST_PLAN.md`

Refine these files so they are implementation-ready.

Do not implement code yet.

Return:
- final acceptance criteria
- contracts to implement
- tests to create first
- files likely to change
- risks and open questions
```

Approve this before coding.

## Step 4: Create frontend acceptance tests

Use this for UI/user-facing domains.

Prompt:

```md
For `modules/<domain>`, create frontend acceptance/E2E tests from `UX.md` and `CONTRACTS.md`.

Rules:
- tests should describe user behavior
- use accessible locators and user-visible text
- use contract-shaped mock data if backend is not implemented yet
- cover loading, empty, error, validation, success, and permission states where relevant
- do not implement UI yet unless required to make the test file compile

Place tests under `modules/<domain>/tests/e2e` unless the flow crosses multiple domains, in which case use `tests/e2e`.
```

## Step 5: Implement frontend UI

Prompt:

```md
Implement the frontend UI for `modules/<domain>` based on:
- `DESIGN.md`
- `modules/<domain>/UX.md`
- `modules/<domain>/CONTRACTS.md`
- the acceptance tests

Rules:
- implement UI under `modules/<domain>/web`
- use `@ravenopsnet/ui` first
- keep `apps/web/src/routes` thin
- route files should import module web exports
- include loading, empty, error, success, disabled, and validation states where relevant
- do not implement backend/core logic yet unless explicitly needed

Run the relevant frontend tests and report evidence.
```

## Step 6: Create backend/domain tests

Prompt:

```md
For `modules/<domain>`, create backend/domain tests based on `CONTRACTS.md`, `SPEC.md`, and `USE_CASES.md`.

Create relevant:
- domain validation tests
- core business logic tests
- integration tests
- permission/auth tests
- database/migration tests
- server-function tests

Do not implement backend/core code yet except minimal stubs needed for failing tests.
```

## Step 7: Implement domain code

Prompt:

```md
Implement `modules/<domain>` so the tests pass.

Implement as needed:
- `domain/` schemas, types, fixtures, validation
- `core/` business logic and use-case functions
- `db/` tables, query helpers, migration-related code
- `web/` query options, mutations, server-function wrappers, components

Rules:
- keep the implementation inside the module unless app wiring is required
- do not weaken tests to pass
- update `CONTRACTS.md` if the accepted contract changes
- update `TEST_PLAN.md` if the test strategy changes

Run relevant tests and report evidence.
```

## Step 8: Wire the actual app routes

Prompt:

```md
Wire `modules/<domain>` into the actual app.

For TanStack Start:
- create/update thin route files under `apps/web/src/routes`
- route files should import module web components
- server functions/routes should call module core functions
- do not move domain logic into route files

Run route-level tests and the relevant E2E tests.
```

## Step 9: Create cross-domain E2E flows

Use this when a workflow spans multiple modules.

Prompt:

```md
Create a root-level cross-domain E2E test for this workflow:
[DESCRIBE WORKFLOW]

Use the relevant module specs and contracts:
- `modules/<domain-a>`
- `modules/<domain-b>`
- `modules/<domain-c>`

Place the test under `tests/e2e`.

Do not duplicate module-level tests. This test should verify the end-to-end business workflow across modules.
```

## Step 10: Repair failing tests

Prompt:

```md
The following test/check failed:
[PASTE FAILURE OUTPUT]

Use the bounded repair loop:
1. classify the failing layer: spec, contract, mock, UI, domain, db, app wiring, environment, or test bug
2. identify the smallest fix
3. apply the fix without scope expansion
4. rerun the failing command
5. if the same failure repeats twice, stop and ask for human review

Do not weaken tests unless the test contradicts the accepted spec.
```

## Step 11: Record delivery evidence

Prompt:

```md
Update `modules/<domain>/DELIVERY_EVIDENCE.md`.

Include:
- change summary
- tests added/updated
- commands run
- results
- screenshots for UI changes if available
- known risks and limitations
- rollback notes
- follow-up tasks

Also update the PR summary using `.github/PULL_REQUEST_TEMPLATE.md`.
```

## What the human should review

Review:

- `SOW.md` scope and assumptions
- domain boundaries
- module specs and contracts
- UX flows/screenshots
- security and permission rules
- database schema/migrations
- test plan and test evidence
- cross-domain E2E coverage
- delivery evidence

Do not try to manually review every line of a huge diff. Review intent, boundaries, risks, and evidence.

## How to improve the system

- If product scope changes, update `SOW.md`.
- If a domain changes, update its module docs.
- If a design rule changes, update `DESIGN.md`.
- If the workflow changes, update `.agents/skills/ux-first-acceptance-loop/SKILL.md`.
- If agents repeatedly make the same mistake, update `AGENTS.md` with a concise rule.
