# Giada Creator Program — design system

## Fondamenta

| Token | Valore | Uso |
| --- | --- | --- |
| Navy | `#262B56` | Hero, sezioni scure, superfici autorevoli |
| Navy deep | `#1A1F43` | Footer e profondità |
| Ink | `#353B72` | Testo e titoli su fondo chiaro |
| Teal | `#00ADB5` | CTA, highlight e focus |
| Blush | `#FFF5F5` | Fondo principale morbido |
| Periwinkle | `#A9B5DF` | Accenti secondari |
| Font | Geist | Display e UI |

## Principi UI

- Titoli grandi, compatti e con tracking negativo; testi lunghi più ariosi.
- Una CTA primaria per sezione, sempre leggibile e con feedback `scale(0.97)` alla pressione.
- Card bianche su blush e card navy su sezioni di selezione/commitment.
- Motion di ingresso riservata alla hero; interazioni ricorrenti sotto 220 ms.
- Hover attivi solo su device con puntatore fine; focus sempre visibile.
- Il colore teal segnala azione e progresso, non viene usato come decorazione indiscriminata.

## Layout

- Container desktop: `1240px`.
- Padding sezione desktop: `120px`; mobile: `72px`.
- Radius: `14 / 24 / 32 / 48px` più pill complete.
- Breakpoint principali: `1100 / 820 / 560px`.
- Mobile: contenuto a colonna singola, CTA full-width e griglie trasformate in stack.

## Componenti trasferibili

- Navbar floating pill.
- Hero con visual editoriale e due proof card.
- Bento benefici.
- Selector a tre profili creator.
- Processo in quattro step.
- Standard di candidatura.
- Form breve con stato di successo.
- FAQ accordion.

