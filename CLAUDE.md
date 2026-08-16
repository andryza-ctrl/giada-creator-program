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
- Commercial terms are decided and must stay in sync with `BRIEF-GIADA-CREATOR-PROGRAM-v2.md`: EUR 80 per selected video (absolute cap), 1 video + 3 hooks, paid and organic use with no expiry, 7-day trial, reply within 48 hours. Never write "fino a EUR 50".
- Never publish reach percentages, follower promises or invented performance data.
- The current form is a demo and must not transmit creator data. Remove `.form-demo` and wire a real endpoint before sending traffic.
- The page has one conversion. Keep the four-step process (Provi Giada, Ricevi il brief, Proponi l'idea, Produciamo) as the only journey model.
- The three-hook delivery must appear in the hero terms and in step 04, never only after the contract.
- Keep creator-facing copy concise and avoid repeating the same benefit across sections.

## Visual guardrails

The page runs the V5 "Backstage" system: one navy theme for the whole page, teal as the only
accent, warm paper reserved for objects (form card, product screens). Type is Bricolage Grotesque
for display and Geist for body, both self-hosted from `public/assets`. Keep editorial spacing,
real Giada product screens, restrained motion and accessible focus states.

- One CTA label on the whole page: "Ricevi accesso e brief".
- No section inverts the theme; no second accent colour.
- Maximum three section eyebrows on the page.
- No em dash or en dash in visible copy.

Read `DESIGN_SYSTEM.md`, `REFERENCE_MAP.md`, `design-qa.md` and `MONOREPO_HANDOFF.md` before a substantial visual change.
