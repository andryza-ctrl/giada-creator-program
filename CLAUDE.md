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
- Compensation, usage rights, paid distribution, eligibility and privacy copy are provisional.
- The current form is a demo and must not transmit creator data.
- Preserve the five-stage creator journey: Scopri → Prova → Scegli → Proponi → Inizia.
- Keep creator-facing copy concise and avoid repeating the same benefit across sections.

## Visual guardrails

Use Geist, Giada navy/teal/blush/periwinkle tokens, editorial spacing, real Giada product screens, restrained motion and accessible focus states. Read `DESIGN_SYSTEM.md`, `REFERENCE_MAP.md`, `design-qa.md` and `MONOREPO_HANDOFF.md` before a substantial visual change.
