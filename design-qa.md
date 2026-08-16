# Design QA — Giada Creator Program V5 «Backstage»

## Source visual truth

- Giada live brand and the local design tokens documented in `DESIGN_SYSTEM.md`.
- Knowledge Studio cards documented in `REFERENCE_MAP.md`.
- Selected hero layout: card `KI-20260810-103432` (@uiuxmanuel), slide 3, the "Veluno" layout.
  The library media for that card is a generated placeholder and Instagram is behind a login, so
  the slide was supplied by hand and kept locally as `ref-veluno.png`, which `.gitignore` keeps
  out of the repository along with every other third-party reference.
- Selected photo treatment: card `KI-20260809-143230`, images `reference-17.png` and
  `reference-5.png`. The V4 Skyline reference (`KI-20260804-111506`) has been retired.

The references define composition, hierarchy and density. Palette, type, product screens and
creator media remain Giada-owned.

## Current-run evidence

### Desktop — 1440 × 900

- `qa-v5-01-hero-desktop.png`
- `qa-v5-02-patto-desktop.png`
- `qa-v5-03-prova-desktop.png`
- `qa-v5-04-processo-desktop.png`
- `qa-v5-05-candidatura-desktop.png`
- `qa-v5-06-faq-chiusura-desktop.png`

### Mobile — 390 × 844 viewport

- `qa-v5-07-hero-mobile.png`
- `qa-v5-08-prova-mobile.png`
- `qa-v5-09-candidatura-mobile.png`

Measured at 390 px: `clientWidth 390`, `scrollWidth 390`. No horizontal overflow.
Measured at 1440 px: hero height 738 px, inside the viewport, primary CTA visible without
scrolling. Checked at 860 px (stacked) and 390 px: the second tier keeps thumbnail and seal
adjacent, no overflow.

## Journey health

1. **Hero — strong.** Built on the Veluno layout: three-zone nav, headline, subtext, badge CTA,
   then a second tier with the proof thumbnail and the circular seal. The photo carries one
   annotation that answers the equipment objection before any scroll, and its notch faces the
   seal so the two columns interlock rather than sit side by side. The reference's carousel
   arrows and dots were deliberately not reproduced: the page has one promise per first screen,
   and indicators without a carousel would be decoration.
2. **Il patto — strong.** The four commercial terms sit immediately below the hero, on one row, at
   equal weight. The proof moved up into the hero thumbnail, so nothing is restated here.
3. **Chi cerchiamo — strong.** The binary matrix stays specific and selective without sounding
   exclusionary.
4. **Prova prodotto — strong.** Two real Giada screens on a navy stage, one overlay note. The day
   ranges moved into the copy column, so the image is no longer covered by three labels.
5. **Profili — strong.** Self-selection is concise and each tab updates a correctly named panel.
6. **Processo — strong.** Four rows span the full grid width; commitment rises step by step.
7. **Candidatura — strong.** The light card is the only paper object in the section, which makes
   it the visual endpoint of the page.
8. **FAQ e chiusura — strong.** Six short answers, then one restated question and the same CTA.

## Interaction and accessibility review

- Creator tab tested: second tab reports `aria-selected="true"` and updates the tab panel.
- FAQ tested: third item reports `aria-expanded="true"`, its answer becomes `visibility: visible`
  and gains height; the closed item stays at `visibility: hidden`, height 0, so collapsed answers
  are out of the accessibility tree.
- Required fields, channel select, profile URL, consent and demo submission tested.
- Success state confirms that no data was sent.
- Exactly one H1. Zero duplicate IDs. Zero images without alt text. Zero unnamed buttons. Zero
  unlabeled inputs or selects.
- Scroll reveal verified end to end: 21 of 21 elements reach `is-in`; nothing stays hidden.
- `color-scheme: light` is scoped to the form card so native checkboxes and the select render
  against paper, not against the page's dark scheme.
- Focus-visible styles use `--teal-bright` on navy and `--teal-deep` inside the form card.
- `prefers-reduced-motion` disables transitions and forces every revealed element visible.

## Findings and corrections

| Finding | Severity | Correction | Evidence |
|---|---:|---|---|
| Hero overflowed the viewport: the `height` attribute on the image beat `aspect-ratio`, so the photo rendered at its intrinsic 1024 px and pushed the CTA below the fold | P0 | The photo now lives in a `.hero-shot` wrapper with a 3:2 ratio and fills it | `qa-v5-01-hero-desktop.png` |
| The hero annotation drifted off the phone between 1440 px and 1920 px, because `object-fit: cover` changed the crop with the box ratio | P1 | Removed the crop entirely: the shot keeps the source 3:2, so the leader line is anchored at fixed percentages at every width | `qa-v5-01-hero-desktop.png`, `qa-v5-07-hero-mobile.png` |
| Form checkboxes and select rendered dark on the white card, inheriting the page `color-scheme` | P1 | `color-scheme: light` on `.form-card` | `qa-v5-05-candidatura-desktop.png`, `qa-v5-09-candidatura-mobile.png` |
| Product screens overlapped so heavily that the summary screen was unreadable, on desktop and worse on mobile | P1 | Reduced the desktop overlap and stacked the two screens vertically below 560 px | `qa-v5-03-prova-desktop.png`, `qa-v5-08-prova-mobile.png` |
| FAQ answers stayed in the accessibility tree when collapsed, after the switch from `hidden` to a row animation | P2 | Added `visibility: hidden` with a delayed transition on the collapsed panel | Interaction test above |
| Process rows used only the left half of the grid | P2 | Description column moved to the right edge, rows now span the full width | `qa-v5-04-processo-desktop.png` |
| Profile tabs pushed number and label to opposite edges on mobile | P2 | `justify-content: flex-start` in the stacked layout | `qa-v5-07-hero-mobile.png` flow |
| The image bled without bound on very wide screens, growing the hero past a usable height | P2 | Bleed dropped entirely: the Veluno composition is contained, and the notch only reads when the whole shape is visible | `qa-v5-01-hero-desktop.png` |
| The rotating seal is an infinite animation, and the blanket reduced-motion rule sets every duration to 1 ms, which would have turned it into a flicker | P1 | Explicit `animation: none !important` on `.hero-seal-ring` inside the reduced-motion block | Rule in `styles.css` |
| The seal was pushed to the far right of the tier, leaving a 190 px hole between it and the thumbnail on desktop, and the full column width when stacked | P2 | Seal enlarged to the reference's proportion, thumbnail widened, and the tier capped at 540 px below 900 px | `qa-v5-01-hero-desktop.png`, `qa-v5-07-hero-mobile.png` |
| The hero thumbnail crop cut through the middle of a data row in the product screen | P2 | Crop ratio set to 2.25 so it stops above that row | `qa-v5-01-hero-desktop.png` |

No actionable P0, P1 or P2 finding remains.

## Provisional items

- Compensation, usage rights, privacy and eligibility wording still require business and legal
  approval.
- Form submission, CRM and email automation remain outside this visual prototype. `.form-demo`
  must be removed and a real endpoint wired before sending traffic.
- Product screenshots should be refreshed if Giada's official UI changes before merge.

final result: passed
