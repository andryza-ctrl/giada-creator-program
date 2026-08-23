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

## Revision of 17 August 2026 — centred hero and three-card terms

Layout references for this revision are two public shadcn blocks from watermelon.sh, read as
structure and rewritten in the project CSS: `hero-27` for the hero and `stats-1` for the terms
section. No Tailwind, no shadcn CLI, no third-party asset is shipped. Full mapping in
`REFERENCE_MAP.md`.

Evidence: `qa-v51-01-hero-desktop.png`, `qa-v51-02-hero-mobile.png`,
`qa-v51-03-terms-desktop.png`, `qa-v51-04-terms-mobile.png`.

### Findings and fixes

| Finding | Severity | Fix | Evidence |
| --- | --- | --- | --- |
| The hero image ignored its `aspect-ratio: 16 / 9` and rendered 1080 × 1024, so the hero ran 1650 px tall and the photo read as a square | P1 | `height: auto` on `.hero-shot img`: the `height` attribute on the element otherwise wins over the CSS aspect ratio. Hero is now 1269 px at 1440 × 900 | `qa-v51-01-hero-desktop.png` |
| Below 700 px the seal became `position: static`, so its absolutely positioned ring escaped to the whole stage and drew a giant circle of text across the photo | P0 | The seal keeps `position: relative` when it leaves the image, and the note leaves the image with it. Both stack under the photo in flex order | `qa-v51-02-hero-mobile.png` |
| The terms heading wrapped mid-phrase at 62ch | P3 | Heading block widened to `min(100%, 880px)` | `qa-v51-03-terms-desktop.png` |

### Checks

- `npm run build` and `npm run test:sites` (4/4) pass.
- No horizontal overflow at 1920, 1440, 1080, 900, 700, 560 and 390 px: `scrollWidth` equals
  `clientWidth` at every step.
- One `h1`, no duplicate ids, no image without `alt`, heading order unchanged.
- Scroll reveal: 25 of 25 elements reach `is-in`.
- Contrast on the new surfaces, computed on the blended backgrounds: white on card 15,38 · body
  text on card 8,19 · teal-bright on card 8,88 · teal-bright on chip 7,38 · periwinkle sublabel on
  chip 6,31 · white on the hero note over the worst case, a pure white photo, 11,58. All above AA.
- The infinity glyph in the third card is `aria-hidden` and carries "Senza scadenza" in `.sr-only`.

### Notes

- The fee is no longer one of the cards, per the brief for this revision. EUR 80 stays in the hero
  seal, in the note under the cards, in the mobile sticky bar, in process step 04 and in the FAQ.
- The hero photo is now cropped (16:9, 3:2, 4:3 by breakpoint), so the earlier guide line to the
  phone was dropped: its anchor depended on the uncropped 3:2 frame.

## Revision of 18 August 2026 — hero card fan

The hero photo block became a fan of overlapping portrait cards, on the "Pallet Ross" reference
recorded in `REFERENCE_MAP.md`. Five cards from 1080 px up, three below 700 px, the real creator
photo always in the middle. The remaining cards are labelled slots waiting for creator media: a
slot becomes a real card by adding `src` and `alt` to its row in the `heroDeck` array in
`src/App.jsx`.

### Evidence

- `qa-v52-01-hero-desktop.png` — 1512 × 950
- `qa-v52-02-hero-tablet.png` — 834 × 1100

### Checks

- No horizontal overflow at 1920, 1512, 1080, 900, 834, 701, 700, 560, 390 and 360 px:
  `scrollWidth` equals `clientWidth` at every step.
- Card count: 5 at 1920, 1512, 834 and 701 px; 3 at 700, 390 and 360 px.
- Side margins of the fan measured on the rotated bounding boxes: 30 px at 360 px viewport, after
  cutting card rotations to 60 per cent below 700 px and narrowing `--card-w`.
- One `h1`, no duplicate ids, no image without `alt`.
- Above the fold at 1512 × 950 and at 390 × 844: title, fan, subtitle, both actions. The proof line
  falls below the fold only on phones under 800 px of height.
- Contrast of the new objects: `#04212a` on the teal tag 6,09 · `--ink-900` on the paper tag 17,21 ·
  `--teal-bright` on the fee pill over `--ink-700` 7,76 · `--periwinkle` slot label over
  `--ink-700` 6,63 · `--periwinkle` proof line over `--ink-900` 8,62. All above AA.
- Radius drift fixed: the cards use `--r-lg`, not a one-off `clamp()`.
- `prefers-reduced-motion`: the fade-in of the cards collapses to 1 ms and the seal ring stops.

### Notes

- The card fan is not wired to `[data-reveal]`. That rule animates `transform`, which would erase
  the arc; the cards fade in through `.hero-deck.is-in .deck-card` instead.
- Below 700 px the circular seal is hidden: in a single column it cost about 150 px of height and
  pushed the primary CTA below the fold. EUR 80 stays in the hero as a third pill, in the sticky
  bar, in the note under the terms cards, in step 04 and in the FAQ.
- "Nessun set" is hidden below 700 px: it repeats what "Girato col telefono" already says and its
  extra row cost the same fold.
- The secondary hero action is now a ghost pill instead of a text link, matching the reference. The
  `.text-link` rules were removed, they had no other use.

## Revision of 19 August 2026 — hero breathing room, terms polish, "chi cerchiamo" redesign, second accent

Requested changes: more air between headline and card fan, more space between cards while keeping
them overlapped, "SCOPRI COME FUNZIONA" on the rotating seal, a fixed nav that only exists after
the hero, "Scopri di più" as the secondary action, a polish pass on the terms section, a redesign
of "chi cerchiamo", and a richer palette with lilac alongside the Giada navy, teal and warm white.

Evidence: `qa-v6-01-hero-desktop.png`, `qa-v6-02-hero-mobile.png`, `qa-v6-03-patto-desktop.png`,
`qa-v6-04-chi-cerchiamo-desktop.png`, `qa-v6-05-chi-cerchiamo-mobile.png`.

### What changed

- **Hero rhythm.** The gap between headline and fan goes from `clamp(2px, 0.8vw, 12px)` to
  `clamp(22px, 2.6vw, 40px)`. Card overlap drops from 0.2 to 0.1 on desktop, so each photo is
  almost fully visible while the deck still reads as a deck. The rest of the hero was tightened to
  pay for that height: top bar 84 to 76 px, subtitle, actions and proof line each lose a step.
- **Seal.** The ring now reads "SCOPRI COME FUNZIONA" and links to `#come-funziona`. The chevron
  replaces the arrow, because the target is further down the same page.
- **Fee.** With the seal repurposed, EUR 80 became a lilac pill opening the proof line. That works
  at every width, so the mobile-only third deck tag was removed. Both deck tags now survive on
  mobile, since the row no longer carries three pills.
- **Fixed nav.** New `.site-nav`: a floating pill with brand, section links and the CTA, driven by
  the same hero observer as the sticky bar. It is absent above the hero, appears once the hero has
  left, and hides again on the way back up. `inert` keeps it out of the focus order and the
  accessibility tree while hidden. Section links drop below 900 px, the whole bar drops below
  700 px where the bottom sticky bar already carries the CTA.
- **Terms.** The grid declares five shared rows and each card inherits them with
  `grid-template-rows: subgrid`, so metrics and footers align across cards regardless of copy
  length. Each card carries a tone (teal, neutral, lilac) that drives chip, texture and footer.
  Metric suffixes no longer wrap under the number, lead and copy are capped at 26ch and 34ch.
- **Chi cerchiamo.** The two-column matrix is replaced by two panels of different weight: the
  affirmative one is raised, teal-tinted and carries a detail line per item; the negative one is
  recessed, lilac, dashed, and stays a bare list whose rows distribute over the panel height. A
  lilac radial glow sits behind the section.
- **Palette.** Lilac joins as a second accent with a fixed role, documented in `DESIGN_SYSTEM.md`.

### Findings and fixes

| Finding | Severity | Fix | Evidence |
| --- | --- | --- | --- |
| At 701 px the fixed nav could not fit brand, links and CTA on one line: the CTA overflowed the viewport by 13 px | P1 | Section links hidden in the fixed bar below 900 px, inner row switches to `space-between` | Overflow sweep below |
| Between 900 and 701 px the seal, anchored to the fan edge, crossed the right margin by 3 px | P2 | Below 900 px the seal anchors to the container edge instead | Overflow sweep below |
| The proof line, sitting exactly on the fold, never reached `is-in`: the reveal observer shrank the root by 12 % and the initial 18 px translate pushed the element past it | P1 | Reveal margin relaxed from -12 % to -6 %; the mobile hero was tightened so the line ends at 826 px on a 844 px screen | `qa-v6-02-hero-mobile.png` |
| Below 480 px the headline took four lines and pushed the fee line under the fold | P2 | `--fs-display` steps down to `clamp(2.4rem, 10.4vw, 2.7rem)` under 480 px | `qa-v6-02-hero-mobile.png` |
| The terms chip stretched to the full card width once the card became a grid | P3 | `justify-self: start` on `.term-chip` | `qa-v6-03-patto-desktop.png` |
| Jumping to a section anchor put the heading under the new fixed bar | P2 | `scroll-margin-top: 96px` above 700 px | Rule in `styles.css` |
| The reduced-motion block zeroed durations but not delays, leaving the nav's `visibility` delay in place | P3 | `transition-delay: 0ms !important` added to the block | Rule in `styles.css` |

### Checks

- `npm run build` and `npm run test:sites` (4/4) pass.
- No horizontal overflow at 1920, 1512, 1280, 1080, 1024, 900, 834, 768, 701, 700, 620, 560, 480,
  420, 390, 360 and 320 px: `scrollWidth` equals `clientWidth` at every step and no element crosses
  the viewport edge.
- Fixed nav behaviour verified by script at 1280 px: hidden and `inert` at load, visible at 2200
  and 5670 px of scroll, hidden and `inert` again after scrolling back to 300 and to 0.
- Hero fits the first screen at 1512 x 950 and at 390 x 844, fee pill included.
- Contrast of the new objects, computed on the blended backgrounds: fee pill text 7,33 · lilac card
  chip 7,80 · neutral card chip 7,19 · teal card chip 8,32 · chip sublabel on the lilac chip 7,10 ·
  "Non basta" list 6,47 · lilac panel footer 7,10 · lilac card footer 9,47 · fee in the sticky bar
  9,47 · fee in the note under the cards 8,91. All above AA.
- Dead rules removed: `.deck-tag--fee`, the whole `.fit-matrix` block, `.hero-nav`.

## Second pass of 19 August 2026 — nav out of the hero, full palette

Two things were still wrong after the first pass. The bar with brand and CTA was still sitting
inside the hero, so the page still read as "navigation visible on the hero". And the palette had
gained one accent used sparingly, not the chromatic movement that was asked for.

### What changed

- **The hero has no bar.** `.hero-topbar` is gone from the markup and the CSS. The first screen is
  headline, fan, text, actions and the fee line. Brand, section links and the service CTA exist
  only in the fixed nav. Below 700 px that nav keeps the brand alone, because the bottom sticky bar
  already carries the action. The hero gained `padding-top: clamp(64px, 8vh, 116px)` to replace the
  height the bar used to provide.
- **Full palette.** Two more accents with assigned roles, amber for time and production and rose
  for questions, plus five section backgrounds of equal depth and different hue. Radial glows of
  the section accent sit on top, never above 22 % opacity. Detail and role table in
  `DESIGN_SYSTEM.md`.
- Per-section colour: violet band on the terms, teal and lilac lights on "chi cerchiamo", amber
  abyss on the product trial with amber day labels and question chip, per-profile tint that travels
  from the tab into the panel and its tags, a four-colour scale on the process numbers, amber on the
  application section, rose on the FAQ accordion, all three accents on the closing band, plum on
  the footer, alternating teal and lilac hatching on the deck slots, and a three-colour hairline on
  top of the form card.

### Checks

- `npm run build` and `npm run test:sites` (4/4) pass.
- No horizontal overflow at the same 17 widths, 1920 to 320 px.
- Fixed nav re-tested by script: hidden and `inert` at load, visible after the hero, hidden and
  `inert` again on the way back up.
- Contrast swept automatically over every text node on the page, composing the alpha of every
  ancestor: nothing below AA. Worst case computed by hand against the glows at full opacity is 4,71
  on the profile tags; everything else stays above 6.

## Third pass of 19 August 2026 — V6 "Daylight", the page stops being all navy

The previous two passes only moved accents around: the page was still one dark navy from top to
bottom, which was the actual complaint. This pass changes the substrate.

### What changed

- **Six surfaces instead of one.** `theme-night` (hero, footer), `theme-abyss` (product trial),
  `theme-cream` `#F7F1E6` (terms, profiles, FAQ), `theme-lilac` `#E9E2FF` (chi cerchiamo,
  application), `theme-violet` `#4B3BA8` (process, a full saturated block), `theme-teal` `#00ADB5`
  (closing, Giada's own teal at full surface).
- **Nine semantic tokens per theme.** `--surface`, `--surface-2`, `--on`, `--on-soft`, `--on-faint`,
  `--hair`, `--hair-strong`, `--accent`, `--accent-text`, `--on-accent`. Every component was
  rewritten to read those, so nothing knows a direct colour any more. The visible consequence: the
  CTA, the eyebrows, the hairlines, the inline links and the focus ring all take the accent of the
  surface they sit on. The primary CTA is teal on the hero, dark teal on cream, violet on lilac,
  amber on violet, navy on teal.
- **Two declared local inversions.** The "Sei in linea se" panel carries the night theme inside the
  lilac section, so the affirmative list reads as a lit object on a pale ground. The form card
  carries the cream theme inside the lilac section.
- **Palette share measured, not assumed.** Summing the real rendered height of every themed block:
  navy plus teal are 30.9 % at 1512px and 28.7 % at 390px. Counting cream as Giada's warm paper
  the total is 63.9 % and 65.2 %, under the 67 % ceiling that was asked for.

### Findings and fixes

| Finding | Severity | Fix | Evidence |
| --- | --- | --- | --- |
| On cream, the profile tab number fell to 4.25 once the active tab added its own 10 % tint over the surface | P1 | Teal steps down to `--teal-ink` `#00646A` for tones sitting on tinted light surfaces | Contrast sweep below |
| The fixed nav crosses light and dark sections, so a theme-following bar would have changed identity mid-scroll | P2 | The bar stays a dark navy pill on every surface, and its CTA keeps the brand teal regardless of the section underneath | `qa-v6-04-chi-cerchiamo-desktop.png` |
| White text on the full teal closing band fails AA at 2.75 | P1 | `theme-teal` sets `--on` to `--on-teal` `#04212A` and the closing CTA is navy with white text | `qa-v6-10-chiusura-desktop.png` |

### Checks

- `npm run build` and `npm run test:sites` (4/4) pass.
- No horizontal overflow at the same 17 widths, 1920 to 320 px.
- Contrast swept automatically over every text node, composing the alpha of every ancestor: nothing
  below AA. The single flagged row is a false positive, the deck tag, whose text sits on the
  element's own teal fill rather than on its parent; its real ratio is 6.09.
- Fixed nav behaviour unchanged: hidden and `inert` at load, visible after the hero, hidden and
  `inert` again on the way back up.
- Evidence: `qa-v6-01-hero-desktop.png`, `qa-v6-02-hero-mobile.png`, `qa-v6-03-patto-desktop.png`,
  `qa-v6-04-chi-cerchiamo-desktop.png`, `qa-v6-05-chi-cerchiamo-mobile.png`,
  `qa-v6-06-profili-desktop.png`, `qa-v6-07-processo-desktop.png`, `qa-v6-08-prova-desktop.png`,
  `qa-v6-09-candidatura-desktop.png`, `qa-v6-10-chiusura-desktop.png`.

## Provisional items

- Compensation, usage rights, privacy and eligibility wording still require business and legal
  approval.
- Form submission, CRM and email automation remain outside this visual prototype. `.form-demo`
  must be removed and a real endpoint wired before sending traffic.
- Product screenshots should be refreshed if Giada's official UI changes before merge.

final result: passed

> Nota: le evidenze delle revisioni V5.1, V5.2 e V6 citate sopra non sono versionate. Quei sistemi
> non sono mai arrivati in produzione: la V8 nasce dal loro working tree e porta le proprie evidenze
> `qa-v8-*`.

---

# V8 «Quattro colori» — QA del 23 agosto 2026

Passata automatica con playwright-core e il Chrome for Testing già in cache. Tre controlli:
overflow su 17 larghezze, contrasto su ogni nodo di testo, comportamento della nav a quote fisse.
Più due misure: tenuta della hero e quota di palette.

## Risultati

| Controllo | Risultato |
| --- | --- |
| Overflow orizzontale | **nessun elemento oltre il bordo** a 1920, 1512, 1280, 1080, 1024, 900, 834, 768, 701, 700, 620, 560, 480, 420, 390, 360, 320px. `scrollWidth` uguale a `clientWidth` su tutte |
| Contrasto | **zero nodi sotto AA** su tutta la pagina, FAQ aperte comprese |
| Nav fissa | nascosta e `inert` a 0px, visibile a 2200 e 5600px, nascosta di nuovo a 300 e a 0 |
| Tenuta hero | riga del compenso a 913px su 950 a 1512×950, a 806px su 844 a 390×844 |
| Quota di palette | Giada 67% / lilla 33% a 1512px; 66,6% / 33,4% a 390px |
| Build e test | `npm run build` e `npm run test:sites` (4/4) passano |

## Come è stata misurata la quota di palette

Il fondo non è più una tinta per sezione, quindi non si può sommare l'altezza delle fasce. Ogni zona
dichiara quanta parte del proprio gradiente è lilla (`zone-terms` 0,12, `zone-trial` 0,375,
`zone-fit` 0,625, `zone-profiles` 0,625, `zone-process` 0,375, `zone-faq` 0,625, `zone-finale` 0,1,
hero e footer 0) e la quota è la media pesata sull'altezza reale.

## Note sul metodo del contrasto

Il fondo di un elemento **non si legge dal `background-color`**: nella V8 è trasparente su tutta la
pagina, il colore sta nel `background-image`. Il campionatore risale gli antenati e, quando trova un
gradiente verticale, lo interpola alla quota reale dell'elemento. Due trappole trovate:

1. **Chrome serializza `linear-gradient(180deg, …)` senza l'angolo.** Un filtro su `180deg` scarta
   tutti i gradienti verticali della pagina e il campionatore ricade sul primo stop dichiarato.
2. Prendere il primo stop invece di interpolare fa sembrare corretto un difetto reale e viceversa:
   con il primo stop il titolo del patto risultava navy su navy (ratio 1,0), mentre con
   l'interpolazione è emerso il difetto vero, cioè che il titolo cadeva **dentro** la dissolvenza.

## Difetti trovati e chiusi

| Difetto | Diagnosi | Correzione |
| --- | --- | --- |
| Il titolo del patto e il kicker del finale perdevano contrasto | `padding-block` di `.section`, più in basso nel foglio, sovrascriveva il `padding-top` dichiarato dalla zona: il testo cominciava a 99px invece che a 256px e cadeva dentro la dissolvenza navy → carta | Lo scarto passa da `--pad-extra`, una variabile che `.section` somma al proprio padding |
| La hero risultava vuota e con una striscia teal in cima (prima passata, meccanismo a cuciture) | Il footer non era posizionato: la sua cucitura `position: absolute` si ancorava al blocco iniziale e copriva la hero | Meccanismo abbandonato: la catena di gradienti non usa elementi sovrapposti |
| La carta del form si leggeva grigia sul navy | Gradiente con secondo stop in alfa: il navy passava attraverso | Stop opachi, campi del form opachi |
| Gli slot del ventaglio erano fantasmi | Superficie a `rgba(255,249,239,0.06)` sul navy nuovo, più chiaro del precedente | Fondo con più corpo e trame teal e lilla al 20-28% |
| A 390px la rail dei fatti mostrava un filetto laterale su voci impilate | La regola `+ .proof-item` valeva a ogni larghezza | Filetto verticale sopra i 701px, orizzontale sotto |
| Il pannello dei profili dichiarava `transition: background` | I gradienti non interpolano: il colore saltava comunque | Il corpo del pannello ha una `key` in React e rientra in 300ms |
| Il corsivo editoriale si leggeva sbiadito | Boska è un serif ad alto contrasto: a peso 400 i tratti sottili sparivano | Un solo taglio in pagina, il 700 corsivo |

## Evidenze

`qa-v8-01-hero-desktop.png`, `qa-v8-02-patto-desktop.png`, `qa-v8-03-prova-desktop.png`,
`qa-v8-04-chi-cerchiamo-desktop.png`, `qa-v8-05-profili-desktop.png`,
`qa-v8-06-processo-desktop.png`, `qa-v8-07-faq-desktop.png`, `qa-v8-08-finale-desktop.png`,
`qa-v8-09-hero-mobile.png`, `qa-v8-10-patto-mobile.png`, `qa-v8-11-prova-mobile.png`,
`qa-v8-12-finale-mobile.png`.
