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
- The header lives inside the hero frame as its top row. After the hero, the sticky navigation carries the CTA at every viewport; below 700 px it keeps Giada and the CTA side by side. Do not reintroduce a bottom sticky bar.
- As of 23 Aug 2026, the page is a continuous light canvas built from `#fff9ef` and `#c6d0f6` (including their gradients). Use `#203260` for text and contained UI cards and `#10b8c0` for accents; do not use dark full-width section backgrounds or visible luminance fades between sections.
- Keep Bricolage Grotesque for display and Geist for body/UI. Editorial italics use Arapey Italic, with the accent line never larger than the primary display line.
- The three commercial term cards are solid navy UI objects without diagonal stripe motifs.
- Hero proof tags should communicate creator value and distribution, not production limitations such as phone shooting or the absence of a set.
- Browser annotations on 23 Aug 2026 set the editorial italic to Arapey Italic across the page, hide hero proof tags on mobile, keep the hero seal as a link to the product trial section, and use a teal B2B-value tag for paid campaign amplification on desktop.
- The hero accent copy is “Il tuo punto di vista conta.”, the product CTA reads “Conosci Giada da vicino”, the nav CTA includes the navy arrow badge, and the five desktop hero cards use a staggered wave rather than a flat run.
- On mobile, process step 01 breaks after “arrivano”, process step 03 is capped at two lines, and the footer stays on the periwinkle surface without a teal right-side gradient.
- The 24 Aug 2026 annotation pass uses “Amplificato in tutta Italia”, heavier Arapey accents with section-specific display sizes, eyebrow styling for the finale kicker, a compact mobile product stage, and no teal halo at the bottom-right of the application section.
- The 25 Aug 2026 annotation pass uses “Tu parti. Noi ti guidiamo.” for the process heading, adds 🎙️ to the trial accent and 🏁 to the FAQ accent, and sets those two accent sizes to 52.4px and 51.4px at the desktop reference width.
- The product proof rail is ordered as monthly ad spend, monthly video views, then monthly reach; use `+` prefixes where the value is a lower bound. Keep the external product discovery CTA linked to `https://giada.care`.
- In the qualification section, keep the playful emoji endings and concise single-line detail copy requested in the browser annotations. Remove the extra form microcopy after the CTA while retaining the local-demo disclosure.
- The sticky navigation is light periwinkle and translucent; the finale/footer remain visually continuous across the section boundary without a hard rule or isolated teal halo.
- As of 24 Aug 2026, use `#c6d0f6` as the only cool surface color across page backgrounds and the translucent sticky navigation; keep navy text and the teal CTA dominant.
- As of 24 Aug 2026, keep the periwinkle surface lightly mixed with the paper tone (45%) so navy and soft text remain easy to read.
