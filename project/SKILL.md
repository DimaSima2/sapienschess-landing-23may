---
name: sapienschess-design
description: Use this skill to generate well-branded interfaces and assets for SapiensChess (Russian-market chess events / partner-program brand), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, slide templates, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

- **Wordmark**: `SAPIENSCHESS` — `SAPIENS` weight 900 + `CHESS` weight 400, all-caps, no separator.
- **Headlines**: hot-pink `#E6097E`, weight 900, ALL CAPS, tight tracking.
- **Body**: neutral gray `#4A4A4A`, Roboto regular, generous line-height.
- **Bullet glyph**: solid black square `▪` — never a dot.
- **No emoji, no gradients, no shadows, no rounded corners.**
- **Photography**: black-and-white only.
- **Language**: Russian (formal вы).

## File map

| Path | What |
|---|---|
| `README.md` | Full system overview — brand context, content fundamentals, visual foundations, iconography. |
| `colors_and_type.css` | All design tokens — load this first when building. |
| `fonts/` | Roboto (Google Fonts substitution — flagged). |
| `assets/` | Logos, wordmarks, chess-piece SVGs, checker tile, stripe, B&W placeholders. |
| `preview/` | Design-System-tab cards (foundations specimens). |
| `slides/` | Six slide templates + combined `index.html` deck. |
| `ui_kits/marketing/` | Partner-program landing page + JSX components. |
| `uploads/` | Original source PNG. |
