# Giada Creator Program — handoff al monorepo

Questa cartella è un prototipo autonomo e Sites-ready. La UI è stata costruita per essere trasferita nell'app `apps/landing` del monorepo Giada senza cambiare direzione visiva.

## Destinazione consigliata

- Route: `apps/landing/src/app/creator/page.tsx`
- Componente client: `apps/landing/src/components/CreatorProgramLanding.tsx`
- Stili: modulo CSS dedicato oppure classi Tailwind equivalenti
- Asset hero: `apps/landing/public/creator/giada-creator-hero.png`

## File da portare

- `src/App.jsx`: struttura completa, contenuti provvisori e interazioni.
- `src/styles.css`: token, layout responsive, stati e motion.
- `public/assets/giada-creator-hero.png`: asset originale generato per la hero.
- `public/assets/product-bilancio-v2.png` e `product-food-log-v3.jpg`: schermate reali di Giada,
  usate nella miniatura della hero e nello stage della sezione prova.
- `public/assets/bricolage-latin.woff2`: font display, **necessario** nel monorepo (vedi punto 3).

## Adattamenti minimi per Next.js

1. Aggiungere `"use client";` all'inizio del componente.
2. Rinominare `App` in `CreatorProgramLanding`.
3. Riutilizzare `Geist` dai token già caricati da `apps/landing/src/app/layout.tsx` e
   `globals.css`, ma **portare Bricolage Grotesque**: il monorepo non ce l'ha e la V5 lo usa per
   display, titoli, numeri e domande FAQ. Il file è variabile su assi `opsz` e `wght`, 77 KB, e va
   preloadato come Geist.
4. Sostituire il submit simulato con un endpoint creator dedicato. Non riutilizzare `/api/onboarding`, perché alimenta il funnel B2C e la relativa audience Mailchimp.
5. Collegare il form al flusso creator di 7 giorni e a eventi Meta distinti da `Contact`.
6. Rimuovere le etichette `DEMO`, “nessun dato viene inviato” e i riferimenti al copy provvisorio prima del lancio.

## Dipendenze

Il prototipo usa soltanto React e `lucide-react`, già coerente con la landing Giada. Non richiede librerie di animazione: le micro-interazioni sono in CSS, rispettano `prefers-reduced-motion` e si limitano a `transform`, `opacity`, colore e stato.

## Decisioni visuali (V5 «Backstage», 16/08/2026)

La V4 chiara è superata. Riferimento completo in `DESIGN_SYSTEM.md`, provenienza delle scelte in
`REFERENCE_MAP.md`.

- **Tema unico navy** su tutta la pagina: `--ink-900 #12163A`, `--ink-850 #161B45`,
  `--ink-800 #191E42`, `--ink-700 #262B56`. Nessuna sezione inverte il tema.
- **Un solo accento**, il teal: `#00ADB5` per superfici e CTA su navy, `#2FD9E0` per testo piccolo
  su navy, `#00757C` per la CTA dentro la card chiara del form.
- **Carta solo per oggetti**: `--paper #FEFDFD` per card form e cornici delle schermate prodotto.
  Mai `#FFFFFF` come fondo, mai nero.
- **Due font**: Bricolage Grotesque per il display, Geist per il testo.
- **Scala di forma unica**: 6 / 14 / 22 px più pill. Unica eccezione: 18 px per le cornici delle
  schermate prodotto.
- **Hero sulla reference «Veluno»**: nav a tre zone, CTA a pastiglia con pastiglia circolare in
  coda, secondo livello con miniatura di prova più sigillo circolare rotante, foto mascherata con
  tacca in basso a sinistra.
- Hero fotografica editoriale, non stock patinato, con una sola annotazione a linea guida.
- Tre profili creator presentati come tabs interattivi.
- Form finale deliberatamente breve, con stato di successo già progettato.
- **Una sola etichetta di CTA** su tutta la pagina: «Ricevi accesso e brief».

### Da sapere prima di portare il codice

- `.form-card` porta `color-scheme: light`, altrimenti i controlli nativi ereditano il tema scuro
  della pagina e diventano illeggibili sulla carta.
- La sagoma della foto hero è una maschera SVG inline con `viewBox` 3:2. Funziona perché il
  riquadro è bloccato a 3:2: cambiando quel rapporto la tacca si deforma.
- Il sigillo circolare è l'unica animazione perpetua della pagina e va fermata esplicitamente con
  `animation: none` sotto `prefers-reduced-motion`. La regola generica che porta le durate a 1 ms
  trasformerebbe un ciclo infinito in uno sfarfallio.

## Contenuti ancora provvisori

- Compenso e perimetro diritti.
- Claim sulla distribuzione paid/organic.
- Durata e meccanica esatta della prova creator.
- Criteri definitivi di ammissione.
- FAQ legali e privacy.

