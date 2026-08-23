# Giada Creator Program — design system

Versione **V8 «Quattro colori»**, 23 agosto 2026. Sostituisce la V6 «Daylight» (sei superfici
alternate, quattro accenti) e la V7 «Pastel Editorial» intermedia (cuciture fra superfici, palette
allargata a lavanda, ambra e rosa).

## Direzione

Una pagina sola, non nove fasce. Il fondo è una **catena di gradienti** in cui il colore finale di
ogni sezione è il colore iniziale della successiva: fra due sezioni non esiste nessun taglio, e lo
scroll è una deriva continua di pastelli. La pagina cambia luminanza **due volte**, e entrambe le
volte il passaggio cade dentro il padding di una sezione, dove non c'è testo.

Registro: editoriale. Una promessa grande, molto spazio, tre voci tipografiche con ruoli fissi.

## Colore

**Quattro colori, nessun altro.**

| Token | Valore | Ruolo |
| --- | --- | --- |
| `--navy` | `#203260` | superficie scura, testo su chiaro, secondo colore dei gradienti d'azione |
| `--teal` | `#10b8c0` | accento unico: azione, conferma, luce |
| `--paper` | `#fff9ef` | carta calda, superficie chiara e testo su scuro |
| `--lilac` | `#e9dcff` | il colore complementare: superfici pastello e oggetti delle condizioni |

Tutto il resto della pagina è una **miscela di questi quattro**. Non ci sono nero, bianco puro,
ambra, rosa o viola. Le tinte intermedie sono carta e lilla mescolati:

| Token | Valore | Composizione |
| --- | --- | --- |
| `--tint-1` | `#faf2f3` | 25% lilla |
| `--tint-2` | `#f4eaf7` | 50% lilla |
| `--tint-3` | `#eee3fb` | 75% lilla |

I testi e gli accenti sono anch'essi miscele:

| Token | Valore | Composizione | Contrasto |
| --- | --- | --- | --- |
| `--ink` | `#203260` | navy pieno | 11,9:1 su carta |
| `--ink-soft` | `#515e7f` | 78% navy nella carta | 5,2:1 su `--tint-3`, 4,96:1 su lilla |
| `--on-dark` | `#fff9ef` | carta piena | 11,9:1 su navy |
| `--on-dark-soft` | `#bdb7dc` | 78% lilla nel navy | 6,5:1 su navy |
| `--teal-ink` | `#196a88` | 42% teal, 58% navy | 5,8:1 su carta, 4,65:1 su lilla |
| `--teal-light` | `#40c5c9` | 80% teal, 20% carta | 6:1 su navy |

**Quota di palette misurata sull'altezza reale del documento**: Giada (navy, teal, carta) copre il
**67% a 1512px** e il **66,6% a 390px**; il lilla copre il **33%** e il **33,4%**. È il rapporto
chiesto dal committente. Va rimisurato quando si aggiunge o si toglie una sezione: lo script di QA
calcola la quota di lilla come media pesata sull'altezza di ogni zona (vedi `design-qa.md`).

### La catena delle zone

Ogni sezione porta due classi: `zone--light` o `zone--dark` per i token semantici, e `zone-<nome>`
per il proprio gradiente. Il `to` di una zona è il `from` della zona dopo.

| Zona | Gradiente | Luminanza |
| --- | --- | --- |
| `zone-hero` | navy pieno, con due luci radiali teal e lilla | scura |
| `zone-terms` | navy → carta in `--fade`, poi carta → `tint-1` | **scarto 1**, poi chiara |
| `zone-trial` | `tint-1` → `tint-2` | chiara |
| `zone-fit` | `tint-2` → `tint-3` | chiara |
| `zone-profiles` | `tint-3` → `tint-2` | chiara |
| `zone-process` | `tint-2` → `tint-1` | chiara |
| `zone-faq` | `tint-1` → lilla | chiara |
| `zone-finale` | lilla → navy in `--fade`, poi navy | **scarto 2**, poi scura |
| `zone-footer` | navy pieno | scura |

`--fade` è `clamp(200px, 22vh, 300px)`: la lunghezza del passaggio chiaro/scuro. Le due zone di
scarto aggiungono `--pad-extra` al proprio padding alto (`0.78 × --fade` per il patto,
`0.92 × --fade` per il finale), così il testo comincia sotto la dissolvenza. Lo scarto passa da una
variabile e non da `padding-top`, che verrebbe sovrascritto dal `padding-block` di `.section`.

### Token semantici

Due soli set, uno per le zone chiare e uno per le zone navy. Nessun componente conosce un colore
diretto.

```
--on            testo primario        --accent        accento pieno
--on-soft       testo corrente        --accent-text   accento come testo
--hair          filetto               --accent-grad   gradiente dell'azione
--hair-strong   filetto marcato       --on-accent     testo sopra il pieno
```

Conseguenza visibile: **la CTA non ha un colore proprio**. Sul navy è un gradiente
`teal-light → teal` con testo navy; sulle carte è `teal-ink → navy` con testo carta. Lo stesso vale
per eyebrow, filetti, chevron della FAQ e anello di focus.

### Inversioni locali

Un oggetto può portare il set opposto alla sua zona. Oggi sono tre, tutte dichiarate:

- il **palco del prodotto** (`.trial-stage`) è navy dentro una zona chiara: il buio serve
  all'oggetto in cui si guarda il prodotto, non a tutta la sezione;
- il pannello **«Sei in linea se»** è navy dentro la zona chiara della qualifica;
- la **carta del form** è carta dentro la zona navy del finale.

Gli oggetti su fondo navy sono **opachi**: un gradiente con uno stop in alfa lascia passare il navy
e la carta si legge grigia (era il difetto della prima passata del finale).

## Tipografia

Tre voci con ruoli fissi, tutte self-hosted da `public/assets`, zero richieste di rete.

| Voce | File | Peso | Ruolo |
| --- | --- | --- | --- |
| Bricolage Grotesque | `bricolage-latin.woff2`, 77 KB | variabile 400-800 | display, titoli, numeri, domande FAQ |
| Boska Italic | `boska-bold-italic-latin.woff2`, 33 KB | 700 corsivo | l'accento editoriale |
| Geist | `geist-latin.woff2`, 29 KB | variabile | testo, etichette, form |

**Boska sta a 700 e non a 400.** È un serif ad alto contrasto: a peso 400 i tratti sottili
sparivano e il corsivo si leggeva come testo sbiadito. L'altezza x più bassa del sans va compensata
in dimensione: gli accenti girano a `1.12em` del titolo che li ospita.

Schema ripetuto su tutta la pagina: nei titoli a due righe la prima è **Bricolage 780-800**, la
seconda è **Boska corsivo 700** nell'accento della superficie. Vale per hero, patto, prova,
qualifica, profili, processo, FAQ e finale.

Il corsivo porta anche: i suffissi delle metriche del patto, le frasi della rail di prova, la
citazione del profilo, la nota del palco prodotto, la scorciatoia della FAQ e il kicker del finale.
Non porta mai un blocco di testo corrente.

Scala: display `clamp(2.7rem, 5.4vw, 4.6rem)`, h2 `clamp(2rem, 4vw, 3.5rem)`, h3
`clamp(1.2rem, 1.6vw, 1.5rem)`, corpo `clamp(1rem, 1.05vw, 1.1rem)`. I rapporti fra i gradini
stanno sopra 1,25. Microcopy: 9-10px con `letter-spacing` 0,18-0,2em, sempre in Geist.

## Forma e ritmo

Tre raggi con ruoli dichiarati: `--r-xs 10px` per gli oggetti minuti (chip, input), `--r-sm 14px`
e `--r-md 20px` per gli oggetti che si leggono (schede, pannelli), `--r-lg 28px` per gli oggetti che
si guardano (carte del ventaglio, palco, carta del form), `--r-pill` per le azioni.

Tre metri di sezione: `--pad-tight`, `--pad-section`, `--pad-wide`. Due metri di testata: allineata
a sinistra (predefinita) e centrata (`.section-head--center`, solo il patto).

## Movimento

Due curve, **nessun rimbalzo**: `--ease-out` `cubic-bezier(0.16, 1, 0.3, 1)` per gli ingressi e
`--ease-quart` `cubic-bezier(0.25, 1, 0.5, 1)` per le risposte al tocco.

| Elemento | Durata | Note |
| --- | --- | --- |
| Rivelazione in scroll | 460ms, 14px | un solo `IntersectionObserver`, una volta sola |
| Pressione dei bottoni | 150ms, `scale(0.97)` | la risposta più importante della pagina |
| Riflesso sulla CTA | 520ms | un gradiente che attraversa, niente ombre animate |
| Chevron FAQ, risposta | 240ms / 300ms | `grid-template-rows`, non `height` |
| Cambio profilo | 300ms | il corpo del pannello ha una `key` in React: i gradienti non interpolano, quindi rientra il contenuto invece di finto-animare il colore |
| Filo del processo | 420ms | si tira quando la riga entra |
| Anello del sigillo | 26s lineari | unica animazione perpetua, fermata sotto `prefers-reduced-motion` |

Stagger fra 60 e 90ms. Si animano solo `transform` e `opacity`, mai proprietà di layout.

`prefers-reduced-motion`: durate e ritardi a 1ms, anello fermato, riflesso della CTA e filo del
processo disattivati (il filo resta a larghezza piena).

## Regole che non si rompono

1. Quattro colori. Una tinta nuova è una miscela dichiarata di quelli, con il contrasto misurato.
2. Nessun taglio fra sezioni: chi aggiunge una zona deve agganciarla alla catena, con il `from`
   uguale al `to` della zona precedente.
3. Non più di due scarti di luminanza su tutta la pagina, e sempre dentro un padding.
4. Un accento solo, il teal, in due valori. Il lilla è superficie, non accento di testo.
5. Nessun gradiente sul testo (`background-clip: text`), nessun filetto laterale colorato oltre
   1px, nessuna curva con rimbalzo, nessun bianco puro e nessun nero.
6. Boska solo a 700 e solo per accenti.
7. Gli oggetti sopra il navy sono opachi.
8. Una sola etichetta di CTA su tutta la pagina, massimo tre eyebrow.
