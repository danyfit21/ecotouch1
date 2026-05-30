# UI Kit — Ecotouch Interactive Panel (launcher)

A high-fidelity recreation of the **on-screen home/launcher** of an Ecotouch interactive screen (the Android-style touch panel sold to classrooms and meeting rooms). Branded with Ecotouch foundations; a generic panel launcher pattern, not a copy of any third-party vendor UI.

## Run
Open `index.html`. The UI is a fixed **1280×720** touch canvas that auto-scales (`fitStage`) to letterbox in any viewport — like a real panel screen.

## Surfaces & interaction
- **Home / Launcher** — brand gradient wallpaper, status bar (room name, wifi, cast, settings), big live **clock + Spanish date**, an app row, and a floating **dock**.
- **Pizarra (Whiteboard)** — tap the *Pizarra* tile (or it's the first dock tool) to open a working drawing canvas: 6 brand-color pens, 3 stroke sizes, clear, and a dotted-grid surface. Tap **home** to return.

## Components
| File | Component(s) | Notes |
|---|---|---|
| `components.jsx` | `PIcon`, `Clock`, `StatusBar`, `AppTile`, `Dock`, `usePanelLucide` | Atoms. Frosted-glass tiles, live clock. |
| `Whiteboard.jsx` | `Whiteboard` | Real `<canvas>` drawing with pen palette + sizes. |
| `index.html` | `Launcher` | Composes the home screen, holds view state, handles stage scaling. |

## Conventions
- Touch-first: hit targets ≥ 44px, large type, generous spacing.
- Glassmorphism is used *here only* (panel OS context) — frosted tiles over a photographic/gradient wallpaper. The marketing site stays light and airy.
- Icons: Lucide via `<PIcon name="…" />`; `usePanelLucide()` hydrates after render.
- All color comes from `/colors_and_type.css` variables.

## Omitted
Apps other than Pizarra are non-functional tiles; settings/cast/wifi are decorative. Visual + interaction recreation only.
