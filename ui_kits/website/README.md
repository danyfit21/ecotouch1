# UI Kit — Ecotouch Website

A high-fidelity recreation of the Ecotouch marketing website, built from the brand foundations (`/colors_and_type.css`) and real copy/stats from the brand decks.

## Run
Open `index.html`. React + Babel (in-browser) compose the page from the component files below. Lucide icons load from CDN.

## Components
| File | Component(s) | Notes |
|---|---|---|
| `components.jsx` | `Icon`, `Logo`, `Button`, `Badge`, `Overline`, `useLucide` | Atoms. `Button` variants: primary / gradient / verde / ghost / white / quiet. Exports to `window`. |
| `Header.jsx` | `Header` | Sticky, frosted nav with logo + links + Cotizar CTA. |
| `Hero.jsx` | `Hero` | Gradient headline, product image, floating proof card, inline stats. |
| `Sections.jsx` | `Services`, `Process`, `ServiceCard` | Two service cards (pantallas / solar, one dark) + 4-step "puente" process. |
| `Stats.jsx` | `Stats`, `Clients`, `CTABand` | Dark navy stats band, client pills, gradient CTA. |
| `Footer.jsx` | `Footer` | Dark footer with link columns + social. |

## Conventions
- All scripts are `type="text/babel"`; each exports its components to `window` via `Object.assign` so files share scope.
- Icons: `<Icon name="..." />` renders a Lucide `<i data-lucide>`; `useLucide()` (called in `App`) hydrates them after render.
- Colors/type come exclusively from CSS variables in `/colors_and_type.css` — never hard-code brand hexes.
- Copy is real: drawn from the brand decks (slogans, +700/+40/100k stats, client list, services).

## What's intentionally omitted
Forms don't submit, links are inert (`preventDefault`), there's no router. This is a visual + interaction recreation, not production code.
