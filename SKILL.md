---
name: ecotouch-design
description: Use this skill to generate well-branded interfaces and assets for Ecotouch (Ecuadorian interactive-screen & solar-energy company), either for production or throwaway prototypes/mocks/decks. Contains essential design guidelines, colors, type, fonts, logos, photography, and UI-kit components for prototyping.
user-invocable: true
---

# Ecotouch — design skill

Read `README.md` in this skill first — it holds the full brand context (company, two product areas, voice), the **CONTENT FUNDAMENTALS**, **VISUAL FOUNDATIONS** and **ICONOGRAPHY** sections, and an index of every file. Then explore the other files as needed.

## What's here
- `colors_and_type.css` — all design tokens (brand palette + scales, semantic colors, type scale + `.eco-*` classes, radii, shadows, spacing, motion). Import this; never hard-code brand hexes.
- `fonts/` — Comfortaa (Light/Regular/Bold), the single brand typeface.
- `assets/` — logos (horizontal + vertical, per-background), isotypes (color + monochromes), product & scene photography.
- `preview/` — small specimen cards (colors, type, components, spacing, brand).
- `ui_kits/website/` — marketing-site recreation (React + Babel components).
- `ui_kits/panel-ui/` — interactive-panel launcher + whiteboard recreation.
- `slides/` — branded 16:9 deck (deck-stage.js) with 6 sample slide types.

## How to work
- **Visual artifacts** (slides, mocks, social, throwaway prototypes): copy the assets you need out of `assets/`, import `colors_and_type.css`, and produce static HTML the user can open. Reuse UI-kit components where they fit.
- **Production code**: read the rules here and apply the tokens/components as an expert in the brand.

## Non-negotiables
- Colors come from the four brand values only (verde `#1cf799`, azul `#2b83ed`, azul-oscuro `#002f56`, gris `#e1e2e4`) and their scales; the **verde→azul gradient** is the signature device — one moment per screen.
- Type is **Comfortaa** everywhere (rounded, friendly, modern).
- Voice: warm Ecuadorian Spanish, *tú* to the client / *nosotros* as the company; sells certainty and service ("tecnología sin complicaciones"), not just hardware.
- Icons: **Lucide** (rounded, 2px). The isotype "e" is the hero glyph. No emoji in formal contexts.
- Keep it bright, airy, rounded, calm. Never distort/recolor the logo; keep its safe area.

If invoked with no brief, ask the user what they want to build, ask a few focused questions, then act as an expert Ecotouch designer who outputs HTML artifacts **or** production code as needed.
