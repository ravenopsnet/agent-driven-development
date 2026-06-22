# DESIGN.md

This file is the visual identity and product UI contract for AI coding agents.

It defines the design intent, tokens, component expectations, layout principles, and visual verification rules for this project. It should be read before any UI, layout, styling, design-system, or marketing-page change.

## Relationship to implementation

`DESIGN.md` is the semantic design source of truth. The executable implementation lives in the app's CSS theme variables, Tailwind theme variables, and component library configuration.

For projects using Tailwind CSS and shadcn-style components:

- `DESIGN.md` defines the brand, rationale, tokens, component behavior, and visual rules.
- Tailwind CSS variables implement those tokens in runtime styles.
- shadcn-compatible variables such as `--background`, `--foreground`, `--primary`, `--border`, `--ring`, and `--radius` are the component-facing token bridge.
- Component libraries should consume semantic variables instead of hard-coded one-off colors.

If `DESIGN.md` and the executable CSS theme disagree, fix the mismatch in the same change.

## Identity

Replace this section with the project's actual identity.

- Product name: TODO
- Audience: TODO
- Category: TODO
- Personality: precise, usable, trustworthy, calm
- Avoid: generic SaaS gradients, random colors, inconsistent spacing, decorative noise

## Design tokens

Replace these placeholder tokens with project-specific values.

### Color roles

- `background`: default app background
- `foreground`: default text color
- `card`: surface color
- `card-foreground`: text on cards
- `muted`: subdued surface
- `muted-foreground`: secondary text
- `primary`: main brand/action color
- `primary-foreground`: text on primary
- `secondary`: secondary surface/action color
- `secondary-foreground`: text on secondary
- `accent`: highlight/accent color
- `accent-foreground`: text on accent
- `destructive`: destructive/error action color
- `border`: default border color
- `input`: input border/background boundary
- `ring`: focus ring color

### Typography

- Display: TODO
- Body: TODO
- Monospace: TODO

### Radius

- Default radius: TODO
- Use radius consistently. Do not mix many unrelated radii.

### Spacing

- Prefer consistent spacing scale.
- Use whitespace to clarify hierarchy, not to decorate.

## UI implementation rules

- Read this file before UI changes.
- Reuse the project component library first.
- Do not invent new primitives when a design-system component exists.
- Do not hard-code brand colors in feature components.
- Use semantic classes and CSS variables.
- Implement loading, empty, error, success, disabled, and validation states when relevant.
- Preserve keyboard and focus behavior.
- Verify responsive behavior for mobile and desktop.
- Include screenshot evidence for meaningful UI changes.

## When to update this file

Update `DESIGN.md` when:

- visual identity changes
- color, typography, radius, spacing, shadow, or motion tokens change
- component usage rules change
- a new reusable UI pattern is introduced
- the project intentionally diverges from an existing theme

Do not update `DESIGN.md` for one-off implementation details that do not change the design system.
