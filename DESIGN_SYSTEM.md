# Giada Creator Program — design system

Versione V5 «Backstage», 16 agosto 2026. Sostituisce il sistema chiaro V4.

## Direzione

Il prodotto Giada vive alla luce del giorno: consumer, chiaro, rassicurante. Il programma creator
è il suo retro, lo studio di sera. La pagina adotta un unico fondo navy per tutta la lunghezza; la
carta calda resta, ma solo per gli oggetti che si guardano o si compilano (schermate prodotto,
card del form). Non ci sono sezioni che invertono il tema.

Il registro visivo è editoriale da manifesto: una promessa grande, molto spazio, un solo accento.
Ogni elemento che non risponde a una domanda del creator è stato tolto.

## Colore

Strategia: **committed**. Il navy porta oltre il 90% della superficie, il teal è l'unico accento e
compare solo dove serve un'azione o un dato. Tutti i valori di testo passano WCAG AA sul proprio
fondo; il rapporto misurato è indicato in tabella.

| Token | Valore | Uso | Contrasto |
| --- | --- | --- | --- |
| `--ink-900` | `#12163A` | Fondo pagina, hero, footer | — |
| `--ink-850` | `#161B45` | Fasce alternate: patto, prova, processo | — |
| `--ink-800` | `#191E42` | Chiusura, didascalia della foto hero | — |
| `--ink-700` | `#262B56` | Pannello profili | — |
| `--ink-600` | `#333A6B` | Superfici interattive | — |
| `--paper` | `#FEFDFD` | Card form, cornice schermate prodotto | — |
| `--blush` | `#FFF5F5` | Superfici chiare secondarie | — |
| `--surface` | `#FBF9F7` | Campi del form | — |
| `--text` | `#FFFFFF` | Titoli e testo primario su navy | 17,5 su ink-900 |
| `--text-soft` | `#B9BCD1` | Testo corrente su navy | 9,30 |
| `--periwinkle` | `#A9B5DF` | Etichette e testo terziario su navy | 8,62 |
| `--teal` | `#00ADB5` | CTA piene su navy, superfici | 6,36 |
| `--teal-bright` | `#2FD9E0` | Testo piccolo e segni d'accento su navy | 10,09 |
| `--ink` | `#353B72` | Testo su carta | 10,24 su paper |
| `--muted` | `#686C8C` | Testo secondario su carta | 5,03 |
| `--teal-text` | `#007E85` | Link su carta | 4,78 |
| `--teal-deep` | `#00757C` | CTA piena dentro la card del form | 5,39 |

Regole: il teal pieno su navy passa AA anche a corpo piccolo, ma per etichette e microcopy si usa
`--teal-bright`. Dentro la card del form l'accento torna scuro (`--teal-deep`) perché il fondo è
carta. Nessun bianco puro come fondo, nessun nero.

## Tipografia

Due famiglie, entrambe self-hosted, nessuna richiesta di rete.

- **Bricolage Grotesque** (variabile, assi `opsz` e `wght` 400–800) per display, titoli, numeri e
  domande FAQ. Ha una grottesca leggermente irregolare: dà voce al programma senza costare
  leggibilità sugli accenti italiani.
- **Geist** (variabile) per testo corrente, etichette, interfaccia e form.

```css
--fs-display: clamp(2.6rem, 5.4vw, 4.6rem);   /* H1 */
--fs-h2:      clamp(1.95rem, 3.7vw, 3.25rem);
--fs-h3:      clamp(1.2rem, 1.6vw, 1.5rem);
--fs-body:    clamp(1rem, 1.05vw, 1.1rem);
--fs-label:   0.7rem;
```

Rapporto minimo fra i gradini 1,25. Tracking negativo sui display, mai oltre `-0.045em`.
`font-optical-sizing: auto` sui titoli. Nessun corsivo: la seconda riga dell'H1 si distingue per
peso (500 contro 800) e colore (`--teal-bright`), non per stile.

## Layout

- Container `1280px`, gutter fluido `clamp(20px, 4vw, 40px)`.
- Sezioni: `clamp(84px, 10.5vh, 140px)` di padding verticale.
- Breakpoint: `1080 / 900 / 700 / 560 / 420px`. La hero passa a colonna singola a `900px`.
- Hero su due colonne `0.95fr / 1.05fr` allineate in alto, sul modello della reference Veluno.
  La colonna di testo porta un secondo livello sotto la CTA: miniatura di prova a sinistra,
  sigillo circolare spinto a destra contro la tacca dell'immagine.
- La foto conserva il proprio rapporto 3:2 e non viene mai ritagliata: è la condizione che tiene
  la linea guida ancorata al telefono a qualsiasi larghezza.
- La sagoma della foto è una maschera SVG con `viewBox` 3:2, quindi scala in modo uniforme:
  angoli a raggio 10 unità e tacca in basso a sinistra larga il 14,7% e alta il 44%.

### Forma

Una sola scala, applicata ovunque:

| Raggio | Token | Applicazione |
| --- | --- | --- |
| 0 | — | Filetti, righe di tabella, fasce |
| 6px | `--r-sm` | Anelli di focus |
| 14px | `--r-md` | Campi del form, tab profili, note sovrapposte |
| 22px | `--r-lg` | Oggetti: card form, pannello, stage prodotto, foto hero |
| pieno | `--r-pill` | Bottoni e tag |

Unica eccezione documentata: le cornici delle schermate prodotto usano `18px`, perché imitano la
scocca di un telefono e non una superficie dell'interfaccia.

## Movimento

- Solo `transform`, `opacity`, `visibility` e `grid-template-rows`.
- Curva unica `cubic-bezier(0.16, 1, 0.3, 1)`, durate 150–260 ms per l'interfaccia.
- Ingresso della hero a cascata: titolo, sottotitolo, CTA, foto, secondo livello con ritardo
  `0 / 90 / 170 / 240 / 260 ms`.
- Il sigillo circolare ruota in continuo, `26s linear infinite`: unica animazione perpetua della
  pagina. Sotto `prefers-reduced-motion` viene fermata con `animation: none`, perché la regola
  generale che porta le durate a 1ms trasformerebbe un ciclo infinito in uno sfarfallio.
- Rivelazione in scroll con un solo `IntersectionObserver`, una volta per elemento, mai un
  listener di scroll.
- Press state `scale(0.97)`. Hover solo con `(hover: hover) and (pointer: fine)`.
- `prefers-reduced-motion` azzera animazioni e transizioni e rende visibili tutti gli elementi.

## Componenti

Nav a tre zone dentro la hero · CTA pill con pastiglia circolare in coda ed etichetta unica ·
miniatura di prova · sigillo circolare con testo su anello · foto mascherata con tacca, linea
guida e didascalia · fascia «il patto» a quattro condizioni · matrice binaria a filetti · stage
prodotto con due schermate reali e una sola nota · selettore a tre profili con pannello ·
processo in quattro righe a piena larghezza · form a quattro campi con doppio consenso · FAQ
accordion animata sulle righe della griglia · barra CTA sticky su mobile · grana fissa
sull'intera pagina.

## Regole che non si toccano

1. Una sola etichetta di CTA su tutta la pagina: «Ricevi accesso e brief».
2. Nessuna percentuale di reach, nessun grafico, nessun dato inventato.
3. Un tema unico per tutta la pagina: nessuna sezione chiara fra due scure.
4. Un solo accento cromatico, il teal, in tutte le sezioni.
5. Massimo tre eyebrow di sezione sull'intera pagina.
6. Un solo `h1`, gerarchia `h2`/`h3` senza salti, focus sempre visibile.
7. Consenso privacy obbligatorio nel form, con link raggiungibile.
8. Ogni testo sotto i 24px deve stare sopra 4,5:1.
9. Nessun trattino lungo nei testi visibili: si usano punti, virgole o due punti.
