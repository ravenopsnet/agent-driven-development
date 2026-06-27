# DESIGN.md

This file defines the visual identity and UI behavior contract for the reference web app.

## Brand direction

RAVEN software should feel precise, engineered, intelligent, premium, calm, serious, dark by default, and not generic SaaS.

## Typography

- Display: Space Grotesk
- Body: Inter

## Color roles

- Void/background: deep blue-black
- Parchment/foreground: warm off-white
- Slate/muted surfaces
- Amber/primary accent

Amber is the single accent color. Use it for primary actions, focus states, active navigation, and important highlights.

## UI rules

- Use `@ravenopsnet/ui` components first.
- Use semantic Tailwind/shadcn tokens instead of hardcoded colors.
- Implement loading, empty, error, success, disabled, and validation states where relevant.
- Keep tables dense but readable.
- Avoid random gradients, unrelated accent colors, and decorative UI that does not support the workflow.

## Token compatibility

`DESIGN.md` defines the design contract. Tailwind/shadcn CSS variables implement the contract. `@ravenopsnet/ui` consumes those semantic variables.
