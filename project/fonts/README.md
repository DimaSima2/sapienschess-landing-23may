# Fonts

The SapiensChess deck uses a clean, geometric **bold sans** for headlines and the wordmark. Without the source Figma file or font files, the closest readily-available match is:

- **Roboto** (Google Fonts) — weights 400 / 500 / 700 / 900.
  - Wordmark: `SAPIENS` = 900, `CHESS` = 400.
  - Section headlines (pink, uppercase): 900.
  - Sub-headings: 700.
  - Body: 400.

Roboto has comprehensive Cyrillic support (essential — the deck is in Russian), tight uppercase metrics that match the deck's headline rhythm, and rounded-but-geometric letterforms with the same vertical stress as the wordmark.

## ⚠️ Substitution flag

This is a **best-effort substitution**. The original may be **Roboto**, **Mulish**, **PT Sans**, **Heebo**, or a licensed face like **Proxima Nova** or **TT Norms Pro**. Please confirm by:

1. Opening the source Figma file (link in `README.md`), or
2. Sharing the brand book / font files from the Drive folder.

When the real font is provided, drop `.woff2`/`.ttf` files in this directory and replace the `@import` in `colors_and_type.css` with `@font-face` declarations.
