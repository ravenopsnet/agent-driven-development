# Testing Policy

This document is the testing source of truth for the project.

Keep it enforceable. Avoid generic testing theory unless it directly changes what agents must do in this repository.

## Test commands

Update these commands for the actual project.

- Format/check: `TODO`
- Typecheck: `TODO`
- Lint: `TODO`
- Unit tests: `TODO`
- Integration tests: `TODO`
- Contract tests: `TODO`
- Migration tests: `TODO`
- E2E smoke tests: `TODO`
- Build: `TODO`

## Required tests by change type

| Change type | Required test evidence |
|---|---|
| Bug fix | Regression test that fails before the fix and passes after |
| New feature | Unit tests for domain logic plus integration or acceptance tests for behavior |
| API change | Contract tests and integration tests |
| Database change | Migration test with realistic old data and rollback/forward notes |
| Auth/permission change | Permission tests for allowed and denied cases |
| UI flow change | Component tests and E2E smoke test for critical flows |
| Refactor | Existing tests pass; add characterization tests if behavior is unclear |
| Performance change | Benchmark or measurement before/after plus correctness tests |
| Security fix | Reproduction/exploit test where safe, plus denied-case tests |

## PR test expectation

Every PR must include:

- Which tests were added or updated.
- Which commands were run.
- What passed.
- What was not run and why.

## Test quality rules

- Tests must assert behavior, not implementation details, unless testing internal domain rules.
- Do not create tests that only prove mocks were called.
- Do not weaken tests to make the implementation pass.
- Prefer integration tests at important boundaries.
- Prefer contract tests for public APIs, events, webhooks, and package exports.
- Prefer small unit tests for pure domain rules, calculations, validators, and parsers.
- E2E tests should cover critical user flows, not every UI detail.

## CI policy

The CI pipeline should run the smallest reliable required gate for every PR and deeper checks on release/nightly workflows.

Minimum PR gate:

1. install/dependency integrity
2. format/check
3. typecheck
4. lint
5. unit tests
6. integration tests where applicable
7. contract/migration tests where applicable
8. build
9. E2E smoke tests for critical flows
10. security/dependency scan when configured

## Update policy

Update this document when test commands, test tools, CI behavior, or testing requirements change.


## Visual verification

For meaningful UI changes:

- run the relevant component tests
- run E2E smoke tests when the change affects a critical flow
- include screenshot evidence when possible
- verify mobile and desktop behavior
- verify loading, empty, error, success, disabled, focus, and validation states when relevant
- verify the UI follows `DESIGN.md`

Visual regression testing can be added later when the product has enough stable screens to justify snapshot maintenance.
