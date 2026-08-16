# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Prototype decisions

- Treat the live Giada landing and the local Giada monorepo as the visual source of truth.
- Copy follows `AUDIT-GIADA-CREATOR-PROGRAM-copy-uiux.md` and `BRIEF-GIADA-CREATOR-PROGRAM-v2.md`. Commercial figures are decided, not provisional.
- The application form is a local demo only and must not transmit creator data.
- Keep the implementation portable to `apps/landing` in the official monorepo.
- Preserve the generated hero asset and Giada's navy, teal, blush, and periwinkle palette.
- Use `https://knowledge-studio-andrea.vercel.app` as the approved inspiration library. Translate selected patterns through `REFERENCE_MAP.md`; do not copy third-party brand assets into the landing.
- For this iteration, prioritize section hierarchy, editorial composition, integrated product evidence, mobile-first qualification, and restrained motion over final copy polish.
- Use the Skyline reference from Knowledge Studio as the hero composition, replicated rather than interpreted: a single bordered card on a light canvas, hairline grid, nav row on top, headline plus CTA top-left, supporting copy bottom-left, central arch image, proof top-right, commercial terms bottom-right. Keep the broader UI in a Swiss/editorial language and do not ship third-party reference assets.
- Keep creator-facing copy concise: one promise or decision per section, short paragraphs and no repeated benefit explanation.
- The five-stage journey strip was removed on 16 Aug 2026: it duplicated the four-step process and added a third competing numbering system. Do not reintroduce it.
- The header lives inside the hero frame as its top row. Below 700 px a sticky bottom bar carries the CTA; it appears after the hero and hides while the form is on screen.
