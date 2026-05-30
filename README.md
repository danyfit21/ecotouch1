# Ecotouch — Design System

> El puente entre la tecnología de vanguardia y las soluciones sostenibles.

Ecotouch is an Ecuadorian technology company (founded ~2019, headquartered in Quito) that began by pioneering **interactive screens / smart whiteboards** (pantallas interactivas) for schools, universities and companies, and has since expanded into **solar-energy systems** (sistemas de paneles solares) for institutions and businesses. The brand positions itself as a trusted, accessible, innovative *bridge* that finds the right cutting-edge technology for a client, imports it, and handles every step the client can't (customs, taxes, declarations), delivering a finished, guaranteed product.

This repository is a **design system**: brand foundations (color, type, spacing, motion), real visual assets (logos, isotypes, product imagery), reusable CSS tokens, UI-kit component recreations, and sample slides — everything an agent needs to design on-brand Ecotouch material.

---

## Brand at a glance

- **Name / wordmark:** *Ecotouch* (lowercase-feel, rounded). Set in **Comfortaa**.
- **Isotype:** a stylized lowercase **"e"** — the letter E of the name fused into a circular swirl with a **verde→azul gradient**, suggesting fluidity, connectivity and modernity.
- **Archetype:** *Sage + Magician* — knowledge and trust combined with transformation and vision. Ecotouch is the mentor that turns the complex into the simple.
- **Values:** Sostenibilidad · Accesibilidad · Innovación · Confianza · Impacto positivo.
- **Personality:** Confiable, Eficiente, Innovadora, Amigable, Inspiradora.
- **Promise:** "Soluciones innovadoras que transforman."
- **Slogans in rotation:** *"Haz tu vida sencilla, hazlo con EcoTouch." · "Tecnología sin complicaciones." · "Hazlo fácil, hazlo ahora."*
- **Mission:** Transformar vidas a través de soluciones tecnológicas y sostenibles.
- **Vision:** Ser líderes en la transformación tecnológica y sostenible en Ecuador.

### Two service areas
1. **Tecnología educativa / interactiva** — interactive touchscreens & smart whiteboards for classrooms and meeting rooms. Free teacher training, interactive resources, 24h technical service. *+700 screens delivered, +40 institutions, ~100k students reached, 7 years' experience.*
2. **Sistemas de paneles solares** — solar projects for companies and educational institutions: technical evaluation, budgeting, and execution (cotización → evaluación técnica → presupuesto → ejecución).

---

## Source materials (provided by the client)

These informed the system. The reader may not have access — listed for provenance.

| File | What it gave us |
|---|---|
| `uploads/Manual de Identidad - Ecotouch (2).pdf` | **Official brand manual** — exact colors, typeface (Comfortaa), logo construction, safe area, color versions, restrictions, min size. |
| `uploads/intangible ecotouch.pdf` | Brand intangibles — values, mission/vision, personas, archetype, conceptualization, promise, slogans, personality, brand story. |
| `uploads/PRESENTACION 2025.pdf` | Track record in educational technology — client list, stats (+700 screens, +40 institutions, 100k students), services, support procedure. |
| `uploads/Post para redes.pdf`, `uploads/Historia de Instagram.pdf` | Social pieces — show product photography style (interactive panels in real rooms, corporate/edu scenes). |
| `uploads/*.png` (logos & isotipos) | Logo lockups (horizontal + vertical) for white / gray / blue / dark-blue / green backgrounds; isotype in color + 3 monochromes. |
| `uploads/Comfortaa-*.ttf`, `OFL.txt`, `FONTLOG.txt` | The primary typeface (SIL OFL licensed). |

> Note: `PRESENTACION 2025.pdf` carries a "BY CLICK SOLUCIONES" cover and product photos of third-party panels (e.g. Prowise) used illustratively. Treat brand-owned marks (the Ecotouch isotype/wordmark) as canonical; third-party product photos are stand-ins for "an interactive screen" and **must not** be used commercially per the manual's mockup note.

---

## CONTENT FUNDAMENTALS — how Ecotouch writes

**Language.** Primary language is **Spanish (Ecuador)**. Warm, professional, plain. English appears only in proper nouns/product names.

**Voice — the Sage-Magician.** Reassuring expert who removes friction. Copy promises to *simplify* ("Tecnología sin complicaciones", "Transformamos tus retos en soluciones fáciles") and to *transform* ("Soluciones innovadoras que transforman"). It leads with the client's outcome, not the spec sheet.

**Person & address.** Speaks to the client as **"tú"** in marketing CTAs (*"Haz tu vida sencilla"*, *"Tu día, más simple que nunca"*) and as **"nosotros"** for the company (*"Nos ocupamos de todo el proceso"*, *"Garantizamos…"*). The relationship framing is constant: *aliado estratégico*, *puente*, *acompañamiento completo*.

**Casing.** Sentence case for body and most headlines. Section labels and stat captions are often **UPPERCASE** (e.g. "NUESTROS SERVICIOS", "CASOS DE ÉXITO", "CAPACITACIÓN DOCENTE"). Brand name is written **Ecotouch** or **EcoTouch** (camel form appears in the intangible deck) — prefer **Ecotouch** for running text.

**Tone & rhythm.** Short, confident sentences. Verbs of transformation: *transformar, simplificar, optimizar, acompañar, garantizar*. Concrete proof points and round numbers (*+700, +40, 100k, 24 horas, 7 años*). Triads are common ("instalación, capacitación y soporte"; "diseño, ejecución y mantenimiento").

**What to avoid.** No hype-tech jargon, no fear-selling, no emoji in formal/institutional copy (social posts may use a sparing few). Don't over-promise specifics you can't guarantee; the brand sells *certainty and service*, not just hardware.

**Sample lines (real):**
- "EcoTouch es el puente entre la tecnología de vanguardia y las soluciones sostenibles."
- "Haz tu vida sencilla, hazlo con EcoTouch."
- "Su satisfacción es nuestro compromiso."
- "Nos ocupamos de todo el proceso, desde la instalación hasta el mantenimiento."
- "Servicio técnico inmediato, resolución de problemas en 24 horas."

---

## VISUAL FOUNDATIONS

**Colors.** Four exact brand colors (from the manual):
- **Verde** `#1cf799` — energy, sustainability, the "eco". Bright, electric; use as accent/signal and in the gradient. On light backgrounds prefer `--accent-2-ink` (#0c8252) for *verde text* so it stays legible.
- **Azul** `#2b83ed` — technology, action, links, primary buttons.
- **Azul oscuro** `#002f56` — primary text color and deep backgrounds. This is the "ink" of the brand.
- **Gris** `#e1e2e4` — neutral surfaces, dividers, quiet backgrounds.

Full tint/shade scales (`--verde-*`, `--azul-*`, `--gris-*`) live in `colors_and_type.css`. The **signature gradient** `--eco-gradient` runs **verde → azul at 135°** — it is the most recognizable brand device (it lives inside the isotype). Use it for hero accents, key CTAs, the "active" swirl — sparingly, never as a wash behind body text.

**Type.** **Comfortaa** is the single brand typeface — a geometric, *rounded* sans that carries the brand's friendly-but-modern personality. Weights: Light 300 (large display/lead), Regular 400 (body, UI), Bold 700 (headings, buttons, emphasis). Comfortaa runs *wide* and its rounded terminals soften everything — lean into generous letter-spacing for caps labels, tight tracking for big headlines. For very long/dense paragraphs a neutral fallback (`--font-text`, Nunito Sans) is acceptable, but headings, UI and short copy should always be Comfortaa.

**Backgrounds.** Predominantly **clean white** and very light gris (`--gris-50/100`). Deep **azul-oscuro** panels are the inverse surface for hero/section breaks, with white text and a verde/gradient accent. No noisy textures or heavy patterns; the brand reads bright, airy and technological. Photography (interactive screens in classrooms/boardrooms; people collaborating) is the main source of color and warmth — product shots are crisp, well-lit, slightly cool, on white or in modern interiors.

**Imagery vibe.** Real product photography of interactive panels and solar installs; corporate/educational scenes of people using the technology. Cool-to-neutral white balance, bright, optimistic, never grainy or moody. Screens are shown *in use*. Avoid stocky clichés where possible; favor on-brand device shots.

**Spacing & layout.** 4px base scale (`--space-1..9`). Generous whitespace; content breathes. Cards and sections are roomy. Grid-driven, lots of air around the logo (the manual mandates a safe area equal to the isotype's height around the logo).

**Corner radii.** Friendly and rounded to echo Comfortaa and the circular isotype. Cards `--radius-md/lg` (14–22px), buttons `--radius-pill` or `--radius-md`, big feature panels `--radius-xl` (32px). Avoid sharp 0px corners except full-bleed edges.

**Cards.** White surface, soft shadow tinted with brand ink (`--shadow-sm/md`, `rgba(0,47,86,…)`), 1px `--border` (#e1e2e4) optional, medium-to-large radius. No colored left-border-accent cliché. Elevation comes from soft, low, navy-tinted shadows — never hard black drop shadows.

**Shadows / elevation.** Soft and navy-tinted (`rgba(0,47,86,a)`). Accent CTAs may carry a colored glow (`--shadow-accent` blue, `--shadow-verde` green) on hover. Five-step elevation xs→lg.

**Borders & dividers.** 1px `--gris-200`; stronger `--gris-300` when needed. Pills and chips use full radius with subtle fills (tinted verde/azul at 8–12% opacity).

**Motion.** Smooth and calm. `--ease-out` (cubic-bezier(.16,1,.3,1)) for entrances, 240ms default. Gentle fades and short upward translates; subtle scale on press. No bouncy/playful overshoot, no parallax theatrics — motion should feel *effortless*, matching "tecnología sin complicaciones."

**Hover / press states.**
- *Buttons (azul):* hover → `--accent-hover` (darker azul) + soft lift/`--shadow-accent`; press → `--accent-press` + scale(0.98).
- *Verde / ghost:* hover → fill deepens or tinted background appears; press → slight scale-down.
- *Cards/links:* hover → shadow grows + 1–2px lift; links → underline or azul deepen. Opacity dips (~0.9) acceptable for image tiles.

**Transparency & blur.** Used lightly — frosted overlays on imagery (white at ~70–85% + small backdrop-blur) for captions/CTAs over photos; tinted brand colors at 8–14% for chip/badge fills. Not a glassmorphism-heavy brand.

---

## ICONOGRAPHY

Ecotouch has **no proprietary icon font**. The brand's only bespoke mark is the **isotype "e"** (the gradient swirl), which doubles as app icon / favicon / bullet motif.

**Recommendation for this system:** use **[Lucide](https://lucide.dev)** (CDN) as the working icon set — its rounded, even-stroke geometry (2px, round caps/joins) is the closest match to Comfortaa's rounded character and the circular isotype. Set stroke to brand ink (`--fg`) or `--accent`; size 20–24px in UI. This is a **substitution** (the brand provided no icons) — flagged for the user; swap if a different set is preferred.

- **Stroke style:** outline, 2px, rounded caps & joins. Avoid filled/duotone icons except small status glyphs.
- **Emoji:** avoid in institutional/formal contexts; a sparing few are tolerable in social posts only.
- **Unicode as icons:** not part of the brand; use Lucide instead.
- **The isotype** (`assets/isotipo-color.png` + monochromes) is the hero glyph — use it for the bullet/marker accent, loaders, and the "active" state, not as a generic UI icon.

Logo & isotype assets are in `assets/` (see index below). **Never** redraw the logo, recolor it off-palette, distort, rotate, add effects, or place it on low-contrast backgrounds (manual §3.B/3.C). Keep the safe area clear.

---

## Index — what's in this system

**Foundations**
- `README.md` — this file.
- `colors_and_type.css` — all design tokens: brand palette + scales, semantic colors, type scale & `.eco-*` text classes, radii, shadows, spacing, motion. Import this everywhere.
- `fonts/` — Comfortaa Light/Regular/Bold (TTF), plus `OFL.txt`, `FONTLOG.txt`.
- `SKILL.md` — Agent Skill manifest (Claude Code compatible).

**Assets** (`assets/`)
- `isotipo-color.png` — primary gradient isotype.
- `isotipo-mono-2.png` (azul), `isotipo-mono-3.png` (azul oscuro), `isotipo-mono-4.png` (verde) — monochrome isotypes.
- `logo-h-*.png` — horizontal lockups for blanco / gris / azul / azul-oscuro / verde backgrounds.
- `logo-v-*.png` — vertical lockups (blanco / azul-oscuro / verde).
- `product-*.png`, `scene-*.png` — product & environment photography for use in mocks (illustrative; not for commercial reuse per manual).

**Previews** (`preview/`) — small HTML cards rendered in the Design System tab (colors, type, components, spacing, brand).

**UI kits** (`ui_kits/`)
- `ui_kits/website/` — Ecotouch marketing website recreation (hero, services, stats, case studies, footer).
- `ui_kits/panel-ui/` — the on-screen launcher/home UI of an Ecotouch interactive panel (clock, app tiles, dock).

**Slides** (`slides/`) — sample presentation slides on the brand system (title, section, stats, comparison, quote, closing).

---

## Quick start for an agent

1. `@import "colors_and_type.css";` (or copy the tokens) and set `font-family: var(--font-brand)`, `color: var(--fg)` on the body.
2. Pull logos/isotypes from `assets/` — pick the lockup that matches your background; keep the safe area.
3. Use `--accent` (azul) for primary actions, `--eco-gradient` for one signature moment per screen, `--accent-2` (verde) as the energy accent. Ink is `--azul-oscuro`.
4. Keep it bright, rounded, generous, calm. Write in warm Ecuadorian Spanish, tú-to-client / nosotros-as-company.
5. Lucide for icons (CDN); the isotype is the hero glyph.
