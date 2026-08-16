# Giada Creator Program — design system

Aggiornato il 16 agosto 2026 con la revisione copy + UI/UX. Tutti i valori di testo passano
WCAG AA sul proprio fondo: la verifica è automatizzabile e va rifatta a ogni cambio di token.

## Colore

| Token | Valore | Uso |
| --- | --- | --- |
| `--navy` | `#262B56` | Sezioni scure (profili, candidatura), CTA su fondo chiaro alternativo |
| `--navy-deep` | `#191E42` | Footer |
| `--blush` | `#FFF5F5` | Card hero, sezioni chiare calde |
| `--surface` | `#FBF9F7` | Colonna «non basta», sezione processo, campi form |
| `--canvas` | `#E9EBF3` | Fondo attorno alla card hero |
| `--paper` | `#FEFDFD` | Card bianche e sezione «chi cerchiamo» — mai `#FFF` puro |
| `--white` | `#FFFFFF` | Solo testo e icone sui fondi scuri |
| `--periwinkle` | `#A9B5DF` | Chiusura, eyebrow su fondo scuro |
| `--ink` | `#353B72` | Titoli e testo su fondo chiaro |
| `--muted` | `#686C8C` | Testo secondario — 4,77 su blush |
| `--teal-text` | `#007E85` | Link, eyebrow, numeri — 4,86 su bianco |
| `--teal-deep` | `#00757C` | CTA piene con testo bianco — 5,48 |
| `--teal` | `#00ADB5` | **Solo superfici**: riempimenti, barrette, bordi. Mai sotto al testo (2,75) |

Strategia: neutri tiepidi più un solo accento. Il teal è l'elemento più raro della pagina.
Nelle sezioni `[data-theme="dark"]` la CTA primaria si inverte in bianco su navy; dentro una
card chiara torna al teal pieno.

## Tipografia

Geist, cinque livelli, rapporto minimo 1,25 fra i gradini.

```css
--fs-display: clamp(2.35rem, 3.5vw, 3.35rem);  /* H1, in colonna stretta */
--fs-h2:      clamp(1.75rem, 2.85vw, 2.6rem);
--fs-h3:      clamp(1.2rem, 1.7vw, 1.55rem);
--fs-body:    clamp(1rem, 1.05vw, 1.09rem);
--fs-label:   0.72rem;                          /* eyebrow, tag, meta */
```

Tracking negativo sui display, mai oltre `-0.045em`: in italiano gli accenti si chiudono.
Geist non ha un corsivo reale (`font-synthesis: none`): la gerarchia si fa con peso e colore,
non con `font-style: italic`.

## Layout

- Container desktop `1240px`, sezioni `104px` di padding verticale (`80px` sotto 820px, `68px` sotto 560px).
- Radius: `12 / 20 / 28 / 32px` più pill complete.
- Breakpoint: `1100 / 900 / 820 / 700 / 560 / 420px`. Il salto a colonna singola della hero è a `700px`.
- Hero: card unica su `--canvas`, griglia a filetti da 1px, immagine ad arco centrale.
- Mobile: la hero è una composizione autonoma, non una riduzione del desktop. Ordine: H1, CTA,
  sottotitolo, prove, immagine, condizioni. La CTA resta dentro il primo viewport a 390×844.

## Motion

- Solo `transform` e `opacity`. Curva `cubic-bezier(0.23, 1, 0.32, 1)`, durate 150–240 ms.
- Ingresso: solo la card hero, una volta, 520 ms.
- Press state `scale(0.97)`; hover solo con `(hover: hover) and (pointer: fine)`.
- `prefers-reduced-motion` azzera animazioni e transizioni.

## Componenti

Nav dentro la hero · CTA pill · matrice binaria a filetti · stage prodotto con note
sovrapposte · selector a tre profili con pannello · processo in quattro righe · form a quattro
campi con doppio consenso · FAQ accordion · barra CTA sticky mobile.

## Regole che non si toccano

1. Nessuna percentuale di reach, nessun grafico di distribuzione, nessun dato inventato.
2. Il compenso non domina la gerarchia: le condizioni stanno nella cella a peso più basso della hero.
3. Un solo `h1`, gerarchia `h2`/`h3` senza salti, focus sempre visibile.
4. Consenso privacy obbligatorio nel form, con link raggiungibile.
5. Ogni testo sotto i 24px deve stare sopra 4.5:1.
