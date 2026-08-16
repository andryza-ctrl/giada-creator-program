# Design QA — Giada Creator Program V4

## Source visual truth

- Giada live brand and local design tokens.
- Knowledge Studio detailed cards documented in `REFERENCE_MAP.md`.
- Selected hero source: `deep-ref-hero-10-media.png` — Skyline.
- Source comparison: `qa-v4-compare-hero-source.png`.
- Before/after flow comparison: `audit-v4-compare-flow.png`.

The reference defines composition, hierarchy and density. Palette, type, product screens and creator media remain Giada-owned.

## Current-run evidence

### Desktop — 1280 × 720

- `audit-v4-after-01-hero-final.png`
- `audit-v4-after-02-journey-final.png`
- `audit-v4-after-03-product-final.png`
- `audit-v4-after-04-profiles-final.png`
- `audit-v4-after-05-process-final.png`
- `audit-v4-after-06-form-final.png`

### Mobile — 390 × 844 viewport

- `audit-v4-after-07-mobile-hero.png`
- `audit-v4-after-08-mobile-journey.png`
- `audit-v4-after-09-mobile-form.png`

The mobile document reports `clientWidth: 390`, `scrollWidth: 390`: no horizontal overflow.

## Journey health

1. **Hero — strong.** One promise, one qualification statement and one primary action are visible without copy competition.
2. **Journey strip — strong.** The five verbs create a persistent mental model: Scopri, Prova, Scegli, Proponi, Inizia.
3. **Product trial — strong.** The copy moves directly from product use to creative angle; the real Giada screens remain the visual anchor.
4. **Creator profiles — strong.** Self-selection is concise and each tab updates a correctly named panel.
5. **Process and standards — strong.** Commitment rises in clear steps and the qualification remains selective without sounding exclusionary.
6. **Application — strong.** The anchor lands at the section title, the three-step path explains what follows and the form is the next mobile action.

## Interaction and accessibility review

- Creator tab tested: second tab reports `aria-selected="true"` and updates the tab panel.
- FAQ tested: second item reports `aria-expanded="true"` and reveals the answer.
- Required fields, channel select, profile URL, consent and demo submission tested.
- Success state confirms that no data was sent.
- Exactly one H1.
- Zero duplicate IDs.
- Zero images without alt text.
- Zero unnamed buttons.
- Zero unlabeled inputs or selects.
- Desktop document width matches the 1280 px viewport.
- Focus-visible styles and reduced-motion support remain present.

## Findings and corrections

| Finding | Severity | Correction | Evidence |
|---|---:|---|---|
| Long paragraphs repeated the same promise across consecutive sections | P1 | Compressed headlines, paragraphs, cards, profiles, process, FAQ and form copy | `audit-v4-compare-flow.png` |
| Sections felt like independent modules | P1 | Added a five-stage journey strip and connective section rules | `audit-v4-after-02-journey-final.png` |
| Fixed navigation visually interrupted scrolled sections and clipped in browser compositing | P2 | Made the header hero-only and let the journey strip carry orientation below the fold | Final desktop captures |
| Hero CTA sat too close to the bottom of a 720 px viewport | P2 | Reduced title scale and tightened the title-to-composition gap | `audit-v4-after-01-hero-final.png` |
| Form anchor could hide the section opening under navigation | P2 | Removed the fixed obstruction and set a 24 px anchor margin | `audit-v4-after-06-form-final.png`, `audit-v4-after-09-mobile-form.png` |
| Mobile journey needed an explicit continuity cue | P2 | Kept the final hero terms immediately above the five-step strip | `audit-v4-after-08-mobile-journey.png` |

No actionable P0, P1 or P2 finding remains.

## Provisional items

- Compensation, usage rights, privacy and eligibility wording still require business/legal approval.
- Form submission, CRM and email automation remain outside this visual prototype.
- Product screenshots should be refreshed if Giada’s official UI changes before merge.

final result: passed
