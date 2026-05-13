# SapiensChess Design System

> *Sapiens* — from Latin *sapius*, "to be wise."
> **SapiensChess is about people united by intellect, not by circumstance.**

SapiensChess (САПИЕНСЧЕСС) is a Russian-market events and community brand built around chess as a vehicle for intellectual culture. Their core product is a **partnership program** for venues — shopping centers, museums, parks, restaurants, cafés, galleries — co-hosting chess tournaments and intellectual-leisure events with a high-engagement family audience (children 5–18, parents, chess schools and coaches, "lovers of intellectual leisure").

Their flagship event series is the **Шахматная Лига Сберсити** (Sberciti Chess League) — three tournaments June–August with 80–100 child/junior participants, 100–150 accompanying adults, official ФШР rating calculation, professional refereeing, and full photo/video/broadcast production.

## Surfaces represented

This design system was derived from a **single partner-program pitch deck** ("Партнерская программа", `uploads/Sapiens Chess Layout.png`), so the focus is **presentation / marketing collateral**. There is no app or website in the source.

The deliverables in this kit are therefore:

1. **Deck templates** — title, manifesto, content-with-photo, two-column, photo grid, audience map, big-color section header, contact/close.
2. **Marketing one-pager / landing components** — a hypothetical brand site distilled from the deck's visual language, so the brand can extend beyond slides.

## Source materials

| Source | Access | Notes |
|---|---|---|
| `uploads/Sapiens Chess Layout.png` | ✅ local | The pitch deck layout, both "samples" and "editable frames" columns. |
| [Figma — Sapiens Chess Layout](https://www.figma.com/design/ygAoNSZc5MwvqDTB2q0Ncs/Sapiens-Chess-Layout?node-id=0-1) | ⚠️ external link, not authenticated | Same deck — ideal source of truth for typography, exact hex values, photo crops. If you can grant access, re-run the design system extraction against it. |
| [Google Drive — brand folder](https://drive.google.com/drive/folders/12sSLdWBjZ31neuJ9Iy1-zWiNRrWUweza?usp=sharing) | ⚠️ external link, not authenticated | Likely contains raw logos, photography, and other artifacts. Please download the contents into `assets/` so this system can be tightened with the real assets. |

> **Caveat to the reader:** every color, font, and asset in this system is reconstructed from the rasterized PNG layout. Hex values and font substitutions are best-effort matches. See *Caveats* at the bottom and replace flagged items as soon as the Figma file or Drive folder is provided.

## Content fundamentals

### Voice & tone

SapiensChess writes in **Russian**, addressing partners (venues, schools, sponsors) and the family audience. The tone is **confident, declarative, slightly aspirational** — short clauses, no fluff, no superlatives, no exclamation marks. The brand positions itself as the grown-ups in the room: serious about chess as culture, not as kids' entertainment.

Three recurring rhetorical moves:

1. **Latin etymology as gravitas.** The deck opens with `SAPIENS — ОТ ЛАТ. SAPIUS «БЫТЬ МУДРЫМ»` ("Sapiens — from Lat. *sapius*, 'to be wise'"). Headlines refer back to wisdom and intellect, not skill or competition.
2. **"We / You" partnership framing.** Format slides split into **МЫ** ("We provide the venue and audience, promote you as an expert, build a strong event") and **ВЫ** ("You speak, you invite your students"). The reader is *always* the partner, never a passive consumer.
3. **Antithesis / dramatic contrast.** "SAPIENS CHESS — about people united by intellect, **not by circumstance**." "**Not just an event**, but a tool for district development." This *X, not Y* structure carries most of the manifesto copy.

### Casing rules

- **Headlines** — ALL CAPS, hot-pink (`--sc-pink`).
- **Section labels / eyebrows** — ALL CAPS, weight 700, pink or ink.
- **Body** — Sentence case, weight 400, neutral gray.
- **Bullets** — Sentence-case, lowercase OK (the deck uses `даем площадку и аудиторию` — leading lowercase is fine).
- **Wordmark** — `SAPIENSCHESS` is *always* all-caps and is *always* the SAPIENS + CHESS two-weight lockup.

### Pronoun & address

- Formal **«вы»** (capital-V in salutations only).
- First-person plural **«мы»** for the brand. Never "I."
- Audience is addressed as a **partner**, never as a customer. CTAs read like invitations: `Станьте частью интеллектуальной среды` ("Become part of the intellectual environment…"), not "Sign up."

### Emoji & ornamentation

- **No emoji.** Anywhere. Ever.
- **No exclamation marks** in body copy (a single `!` in `Всегда на связи!` is the only exception observed in the deck close).
- **No buzzword English** mixed into Russian — even loanwords like "комьюнити" are spelled phonetically in Cyrillic (`комьюнити`), not Latin.
- Bullet glyph is a **solid black square `▪`** — not a dot, dash, or chevron.

### Sample copy patterns

| Use | Pattern | Example |
|---|---|---|
| Manifesto | `BRAND — это про X, а не Y.` | `SAPIENS CHESS — это про людей, которых объединяет интеллект, а не обстоятельства.` |
| Section label | `1–2 word eyebrow, uppercase` | `ФОРМАТ`, `АУДИТОРИЯ`, `ПОРТРЕТ`, `ЧТО МЫ ИЩЕМ`. |
| Big claim | `НЕ X, А Y` | `НЕ ПРОСТО МЕРОПРИЯТИЕ, А ИНСТРУМЕНТ РАЗВИТИЯ РАЙОНА`. |
| Tournament title | `Категория + Имя` | `ШАХМАТНАЯ ЛИГА СБЕРСИТИ`. |
| Closing CTA | `Imperative + benefit` | `Станьте частью среды, в которой растут будущие лидеры`. |

## Visual foundations

### Palette & vibe

The brand runs on a stark, **graphic-design / Bauhaus-meets-pop** palette:

- **Ink / black** (`#0A0A0A`) — wordmark, body text, chess pieces, the checker pattern.
- **Paper / white** (`#FFFFFF`) — slide field. The brand is **light-mode-first**; there is no dark variant in the source.
- **Magenta Sapiens** (`#E6097E`) — every headline, eyebrow, page-flag and accent. The brand is **hot-pink-led**, which reads as bold, contemporary, slightly punk.
- **Mint Knight** (`#3DD3B4`) — secondary accent, *only* for decorative use (chess pieces in the cover art, alternating stripe blocks). Never used for body text — it doesn't meet contrast against white.
- **Neutral grays** (`#D1D1D1`, `#8C8C8C`) — checker squares, sub-captions, rule lines, page numbers.

The vibe is **high-contrast, hard-edged, intellectual but playful**. It's not corporate-blue, not luxury-gold; it's *closer to streetwear or a music festival poster* than to a typical kids' sports league.

### Typography

- One family throughout (Roboto, pending confirmation) — but the brand leans on **weight contrast (900 vs. 400) and casing contrast** to do nearly all the work.
- Headlines are **ALL CAPS, weight 900, hot-pink**, with **tight tracking** (~`-0.02em`) and `line-height: 1.05`. They sit *flush left* against the slide margin, often wrapping over 2–3 lines.
- Body is **sentence-case, weight 400, neutral gray**, generous `line-height: 1.5`+.
- The wordmark is the one place where two weights meet on the same baseline: `SAPIENS` (900) **+** `CHESS` (400), no space, no separator.

### Backgrounds

- Slides are **flat white** with no gradient, no texture, no full-bleed photography behind text.
- Imagery sits **inside** the layout as bounded photo blocks (square or 4:3, hard corners, no rounding, no shadow). Photos are **black-and-white** with deep contrast — kids in suits at chess boards, tournament rooms, trophy rows, audience crowds. The only color in any photograph is the **mint + magenta plastic chess pieces** that appear on the cover.
- The signature background motif is the **checker pattern** — a small-square chessboard rendered in `--sc-black` / `--sc-n-300`. It appears as a strip along the top/sides of cover slides and as a small footer accent.
- The other recurring decoration is the **stripe of alternating pink / mint / gray blocks** that runs along the top of the cover and the bottom of most content slides. Block widths are irregular — looks rhythmic, not metric.

### Layout rules

- **12-column-feeling grid, generous outer margins.** Slides feel almost magazine-like — text never goes edge-to-edge.
- **Headline always top-left**, flush to the left margin, color = pink.
- **Body content** stacks beneath in two equal columns when comparing (МЫ / ВЫ, ДЛЯ ДЕТСКИХ / ДЛЯ ВЗРОСЛЫХ).
- **Photography rail** — when used, sits at the bottom of the slide as 3–4 equal square thumbnails with consistent gutter.
- **Small SC monogram** (a 2×2 grid of S / queen / king / C glyphs) lives in the **bottom-left corner** of every interior slide as a persistent brand watermark.
- **Page number** in the bottom-right, neutral gray, 13px, no chrome.

### Borders, radii, shadows

- **All corners are hard.** No rounded rectangles. The deck communicates *board-game grid* visually — rounding would dilute it. Default `border-radius: 0`.
- **No drop shadows.** Photos, cards, and panels sit flat on the page. The system defines a subtle `--shadow-1` only for web/marketing-page use where elevation cues are needed — not for slides.
- **Borders, when present, are 1px gray rules** (`--rule`) used to **separate stacked text blocks** (e.g. between the Latin etymology and the manifesto body on slide 2). The other border treatment is the **4px-wide left-edge stroke** used as an eyebrow flag for sub-section labels (МЫ, ВЫ, ФОРМАТ).

### Motion

The deck itself is static. For digital extensions, motion should be **minimal, snappy, deliberate**:

- **Durations:** 120ms (hover), 200ms (state change), 320ms (page transitions).
- **Easing:** `cubic-bezier(0.2, 0, 0.2, 1)` — fast-out, soft-stop. Never bouncy. Chess pieces don't bounce.
- **Hover state:** color shift only — pink → `--sc-pink-hover`, links underline. **No** scale, lift, or shadow.
- **Press state:** color darken to `--sc-pink-dark`, no shrink, no spring.

### Use of transparency, blur, gradients

- **No gradients** anywhere. The brand is built on **flat color blocking**.
- **No blur, no glassmorphism**, no translucent overlays. Where you need separation, use a hard edge or whitespace, not opacity.
- The only translucency permitted: photo treatments (B&W desaturation), and a **dimming overlay (`rgba(10,10,10,0.6)`)** on photographs that have to carry overlaid text — but this is **not used in the source deck** and should be a last resort.

### Cards & containers

- Cards = **a photo block + a caption line** (the photo *is* the container). No padding, no border, no shadow, no rounding.
- Where structural containers are required (panels, modals on the web), use **1px `--rule` border on a flat white fill**, **no radius, no shadow**.

## Index

| File / folder | What's inside |
|---|---|
| `README.md` | This document. |
| `SKILL.md` | Agent-Skill manifest — load this system when designing for SapiensChess. |
| `colors_and_type.css` | All design tokens: brand + neutral + semantic colors, type ramp, spacing, radii, shadows, motion. |
| `fonts/` | Webfonts used by the brand (Google Fonts substitutions — flagged for review). |
| `assets/` | Logos, chess-piece glyphs, checker patterns, photography placeholders, decorative stripe. |
| `preview/` | The cards that populate the Design System tab. |
| `ui_kits/marketing/` | Marketing one-pager UI kit (header, hero, audience strip, partner-benefits, contact, footer). |
| `slides/` | HTML slide templates for the partner pitch deck. |
| `uploads/` | The original source PNG. |

