# Claude project instructions

## Project

This is the Giada Creator Program landing page: a creator-recruiting funnel for Vivarium. Keep the existing Giada visual language and the connected journey from hero to form.

## Commands

- `npm run dev` — local preview
- `npm run build` — production build; Vercel outputs `dist/client` and Sites packaging is also prepared
- `npm run test:sites` — worker and Sites packaging checks

Run `npm run build && npm run test:sites` before publishing changes.

## Deployment

The GitHub repository is connected to Vercel. Pushes to `main` deploy Production automatically; pull requests should be used for previews and review.

Do not remove `vercel.json`, `.openai/hosting.json`, `worker/index.js` or `scripts/prepare-sites-build.mjs` without checking both Vercel and Sites workflows.

## Product guardrails

- Giada is an AI assistant on Telegram; do not position it as a diet, medical service or guaranteed weight-loss solution.
- Avoid medical, diagnostic, disease, weight-loss guarantee or before/after claims.
- Commercial terms: **EUR 50 is the published floor** ("da 50EUR per video selezionato", never "fino a EUR 50"), **EUR 80 stays the internal absolute cap** per selected video. 1 video + 3 hooks, paid and organic use with no expiry, **14-day trial**, reply within 48 hours. The floor framing supersedes the flat "EUR 80" of `BRIEF-GIADA-CREATOR-PROGRAM-v2.md` (23 Aug): see `Brief-PDF/00-DECISIONI.md` and the Manuale, which declare the floor and leave the figure to the call.
- The published fee lives in the **right speech bubble of the hero deck** (`.deck-tag--right`) and in the FAQ. Under 700px that bubble is the only one left, static under the cards, because the hero would otherwise lose the figure above the fold.
- Never publish reach percentages, follower promises or invented performance data.
- The current form is a demo and must not transmit creator data. Remove `.form-demo` and wire a real endpoint before sending traffic.
- The page has one conversion. Keep the four-step process (Provi Giada, Ricevi il brief, Proponi l'idea, Produciamo) as the only journey model.
- The three-hook delivery must appear in the terms section right below the hero and in step 04, never only after the contract.
- The terms section carries three cards (trial, delivery, usage). The fee is not a card: it stays in the hero deck bubble and in the FAQ.
- Keep creator-facing copy concise and avoid repeating the same benefit across sections.

## Visual guardrails

The page runs the V8 "Quattro colori" system. Read `DESIGN_SYSTEM.md` before touching colour or
type; it carries the mixes, the contrast ratios and the zone chain.

**Four colours, nothing else**: navy `#203260`, teal `#10b8c0`, paper `#fff9ef`, lilac `#e9dcff`.
Every other value in the page is a declared mix of those four (tints `--tint-1/2/3`, texts `--ink`,
`--ink-soft`, `--on-dark`, `--on-dark-soft`, accents `--teal-ink`, `--teal-light`). No black, no
pure white, no amber, rose or violet: those belonged to V6 and V7 and are gone.

**One continuous background**: sections do not own a flat surface, they own a link in a gradient
chain where each zone's closing colour is the next zone's opening colour. Adding a section means
hooking it into the chain, never dropping a new flat band in the middle. The page changes luminance
exactly twice, at `zone-terms` and `zone-finale`, and both transitions sit inside a padding zone
(`--pad-extra`) so no text ever lands mid-fade.

Type is Bricolage Grotesque (display), Boska Italic 700 (editorial accent) and Geist (body), all
self-hosted from `public/assets`. Boska stays at 700: at 400 a high-contrast serif loses its thin
strokes and reads as faded text.

Each section carries `zone--light` or `zone--dark` for the semantic tokens (`--on`, `--on-soft`,
`--hair`, `--hair-strong`, `--accent`, `--accent-text`, `--accent-grad`, `--on-accent`) plus its own
`zone-<name>` gradient. Components read tokens and never a direct colour, so the CTA, the eyebrows,
the hairlines and the focus ring all take the accent of whatever zone they sit on.

- One CTA label on the whole page, from `CTA_LABEL` in `src/App.jsx`: "Ricevi brief e accesso". Any secondary button that points at the form reuses it.
- One accent: teal, in two values (`--teal-light` on navy, `--teal-ink` on paper). Lilac is a
  surface, not a text accent.
- Giada's own colours (navy, teal, paper) stay the foundation at two thirds of the page height.
  Measured on real document height: 67 % at 1512px, 66.6 % at 390px, with lilac at 33 %.
  Re-measure with the QA script when adding or removing a section.
- Local inversions are allowed but must stay rare and declared. Today there are three: the product
  stage is navy inside a light zone, the "Sei in linea se" panel is navy inside a light zone, the
  form card is paper inside the navy finale.
- Objects sitting on navy must be opaque. A gradient with an alpha stop lets the navy through and
  the card reads grey.
- Banned: gradient text (`background-clip: text`), coloured side stripes thicker than 1px, bounce
  or elastic easing, hero-metric bands (big number plus small label plus gradient), animating
  layout properties.
- The fee lives in the right bubble of the hero deck and in the FAQ. The hero seal does not
  carry it: its ring links to the process section.
- The hero carries no bar of any kind. Brand, section links and the service CTA live only in the
  fixed nav, which does not exist above the hero: it appears once the hero has left the screen and
  hides again when the reader scrolls back up into it.
- Section order resolves comprehension, then credibility, then mechanism, then objections, then the
  ask: hero, terms, product proof, fit, profiles, process, FAQ, finale with the form. The FAQ stays
  before the form and the page has one conversion block, not a form plus a closing band.
- Maximum three section eyebrows on the page.
- No em dash or en dash in visible copy.

Read `DESIGN_SYSTEM.md`, `REFERENCE_MAP.md`, `design-qa.md` and `MONOREPO_HANDOFF.md` before a substantial visual change.
