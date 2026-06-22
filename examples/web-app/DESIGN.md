# DESIGN.md

This file is the visual identity and product UI contract for this web app reference.

Agents must read this file before creating or modifying UI, layout, styling, product pages, marketing pages, docs visuals, or reusable visual patterns.

## Relationship to Tailwind, shadcn, and `@ravenopsnet/ui`

`DESIGN.md` is the semantic design source of truth. The executable implementation is the CSS/Tailwind/shadcn theme used by the app and by `@ravenopsnet/ui` components.

The intended mapping is:

- `DESIGN.md` explains the brand, design rationale, and token meaning.
- `apps/web/src/styles.css` implements the token bridge for this app.
- `@ravenopsnet/ui` should consume semantic Tailwind/shadcn variables, not hard-coded project colors.
- The consuming app owns the runtime theme values by defining CSS variables such as `--background`, `--foreground`, `--primary`, `--border`, `--ring`, and `--radius`.

If the project uses `@ravenopsnet/ui`, the app must provide the expected shadcn-compatible CSS variables. If `DESIGN.md` and the executable CSS theme disagree, treat that as a design-system bug unless the change intentionally updates the design system.

## Identity

- Product family: RAVEN / RavenOps
- Category: B2B software, business systems, operational tools, implementation platforms
- Audience: founders, operators, teams, developers, business owners, enterprise buyers
- Personality: intelligent, precise, engineered, calm, serious, premium
- Signature idea: sharp by design
- Visual metaphor: raven intelligence, amber eye, technical precision, architectural diagrams

## Atmosphere

The interface should feel:

- dark but not pure black
- premium but not luxury-fashion
- engineered but not cold enterprise software
- focused and operational
- calm, trustworthy, and precise
- visually distinctive without being decorative

Avoid:

- generic bright SaaS gradients
- playful startup colors
- crypto/gaming aesthetics
- excessive glassmorphism
- random accent colors
- one-off shadows and radii
- dense dashboards without hierarchy

## Color system

Use a dark-first palette with blue-black/violet undertones and one amber accent.

### Brand palette

| Token | Hex | Role |
| --- | --- | --- |
| `void` | `#08070D` | deepest background |
| `abyss` | `#0D0B14` | app background |
| `dusk` | `#171321` | elevated surfaces |
| `slate` | `#35313F` | borders and subdued structure |
| `ash` | `#A9A2B5` | secondary text |
| `parchment` | `#F4EFE4` | primary foreground |
| `amber` | `#F59E0B` | accent, focus, active states |

### Semantic roles

- `background`: abyss
- `foreground`: parchment
- `card`: dusk
- `card-foreground`: parchment
- `muted`: slate with dark treatment
- `muted-foreground`: ash
- `primary`: amber
- `primary-foreground`: void
- `secondary`: slate/dusk surface treatment
- `secondary-foreground`: parchment
- `accent`: amber used sparingly
- `border`: slate with reduced contrast
- `ring`: amber
- `destructive`: clear red, reserved for dangerous actions

Use amber as a signal, not decoration. It should appear in primary actions, focus states, active navigation, important highlights, and the occasional brand detail.

## Typography

- Display: Space Grotesk
- Body: Inter
- Monospace: Geist Mono, JetBrains Mono, or a system monospace fallback

Rules:

- Use display typography for page titles, hero headings, and high-level section labels.
- Use body typography for operational UI and content.
- Keep type hierarchy clear and restrained.
- Do not use more than two primary type families in product UI.

## Shape, radius, and surfaces

- Default radius: `0.75rem`
- Cards and panels should feel engineered and deliberate.
- Prefer subtle borders over heavy shadows.
- Use elevation through surface contrast, borders, and spacing rather than bright shadows.
- Avoid overly rounded playful shapes.

## Layout principles

- Prefer clear information architecture over visual decoration.
- Use generous but disciplined spacing.
- Group operational actions close to the data they affect.
- Use tables for dense operational data, cards for summaries, and forms for explicit workflows.
- Every screen should have one clear primary action.
- Make empty, loading, error, and success states feel intentional.

## Component rules

- Use `@ravenopsnet/ui` first for primitives and shared components.
- Do not create local duplicates of components already provided by `@ravenopsnet/ui`.
- Use Tailwind semantic classes such as `bg-background`, `text-foreground`, `border-border`, `bg-card`, `text-muted-foreground`, and `bg-primary`.
- Do not hard-code brand hex values in route components.
- Add reusable UI patterns to the component library, not to one-off app routes, when the pattern appears more than once.

## UI states

For product UI, implement the relevant states:

- loading
- empty
- error
- success
- disabled
- focused
- validation
- optimistic/pending when using mutations

## Accessibility rules

- Preserve visible focus states.
- Use semantic HTML before ARIA.
- Forms must have labels and meaningful validation messages.
- Interactive controls must be keyboard reachable.
- Color must not be the only way to communicate state.

## Visual verification

For meaningful UI changes, provide screenshot evidence for:

- desktop
- mobile
- important empty/error/loading states when affected

Use Playwright when possible for repeatable screenshots and smoke coverage.

## When to update this file

Update this file when the visual identity, tokens, component rules, or reusable UI patterns intentionally change.

Do not update this file just to explain a one-off implementation detail.
