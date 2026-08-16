# Session status — Giada Creator Program

Ultimo aggiornamento: **16 agosto 2026**. Questo file è il punto da cui ripartire.

## Dove siamo

Design system **V5 «Backstage»** completo e verificato in locale. Sostituisce la V4 chiara.
Build e test passano. Tutto committato sul branch **`redesign/v5-backstage`**, non pushato:
`main` e la Production su Vercel sono ancora alla V4.

La direzione: il prodotto Giada vive alla luce del giorno, il programma creator è il suo retro,
lo studio di sera. Un unico tema navy su tutta la pagina, teal come solo accento, carta calda
riservata agli oggetti che si guardano o si compilano.

## Cosa è cambiato in questa sessione

**Sistema visivo**
- Tema unico navy (`--ink-900` `#12163A`) su tutta la pagina. Prima le sezioni alternavano chiaro
  e scuro.
- Aggiunto **Bricolage Grotesque** variabile (assi `opsz` + `wght`, 77 KB) per display, titoli,
  numeri e domande FAQ. **Geist** resta per testo, etichette e form. Entrambi self-hosted in
  `public/assets`, zero richieste di rete.
- Scala di forma unica: 6 / 14 / 22 px più pill. Unica eccezione documentata: 18 px per le cornici
  delle schermate prodotto, che imitano la scocca di un telefono.
- Grana fissa a schermo intero, `pointer-events: none`, per dare superficie al fondo scuro.

**Hero, ricostruita sulla reference «Veluno»**
La composizione replica la slide 3 della scheda `KI-20260810-103432` (@uiuxmanuel) della Knowledge
Studio. Dettaglio in `REFERENCE_MAP.md`.
- Nav a tre zone: marchio, link al centro, CTA a destra.
- CTA a pastiglia con pastiglia circolare in coda.
- Secondo livello sotto la CTA: miniatura con la prova più sigillo circolare rotante con la
  condizione economica.
- Foto a destra mascherata con tacca nell'angolo in basso a sinistra, rivolta al sigillo.
- Una sola annotazione sulla foto: linea guida al telefono sul treppiede, «Girato col telefono.
  Nessun set, nessuna troupe.» Risponde alla prima obiezione di un creator prima di ogni scroll.
- **Non replicati** dalla reference: frecce e indicatori di carosello. La pagina ha una sola
  promessa per la prima schermata, e indicatori senza carosello sarebbero decorazione.

**Struttura e copy**
- Nuova fascia **«il patto»** subito sotto la hero: compenso, consegna, utilizzo, prova. Quattro
  condizioni su una riga.
- Una sola etichetta di CTA su tutta la pagina: **«Ricevi accesso e brief»**. Prima ce n'erano due
  con la stessa intenzione.
- Eyebrow di sezione ridotte da sette a tre.
- Rimossi: card hero a sei celle, cerchio-freccia decorativo, due note su tre nello stage prodotto,
  pillole di impegno nelle righe di processo, riga di prova duplicata sotto il patto.
- Nessun trattino lungo nei testi visibili.

**Movimento**
- Ingresso hero a cascata (0 / 90 / 170 / 240 / 260 ms), una volta sola.
- Rivelazione in scroll con un solo `IntersectionObserver`, nessun listener di scroll.
- FAQ animata su `grid-template-rows`, con `visibility` che toglie la risposta chiusa anche
  dall'albero di accessibilità.
- Il sigillo ruota 26 s lineari: unica animazione perpetua, fermata esplicitamente sotto
  `prefers-reduced-motion`.

## Verifiche fatte

- `npm run build` e `npm run test:sites` (4/4) passano.
- Hero 738 px a 1440×900: CTA sopra la piega. Controllato anche 1920, 860 e 390 px.
- 390 px: `clientWidth 390`, `scrollWidth 390`, nessun overflow orizzontale.
- Un solo `h1`, zero ID duplicati, zero immagini senza alt, zero controlli senza nome accessibile.
- Rivelazione in scroll: 21 su 21 elementi arrivano a `is-in`.
- Contrasti WCAG AA calcolati e tabellati in `DESIGN_SYSTEM.md`.
- Tab profili e accordion FAQ testati con verifica degli attributi ARIA.

Evidenze: `qa-v5-01` … `qa-v5-09`. Registro completo dei finding in `design-qa.md`.

## Stato Git

Tutto committato sul branch **`redesign/v5-backstage`**, commit `cddc6e4`. **Non pushato.**
`main` resta al commit precedente (`1f4c19d`, la V4 Skyline), quindi la Production su Vercel
non è stata toccata.

Per pubblicare:

```bash
git push -u origin redesign/v5-backstage
gh pr create --fill        # Vercel genera un Preview Deployment
```

Push diretto su `main` = deploy Production immediato: da evitare finché i debiti qui sotto
sono aperti.

Non versionato: `ref-veluno.png`, coperto da `ref-*.png` nel `.gitignore` perché è materiale
di terzi. Per una verifica futura della hero serve di nuovo l'immagine.

## Debiti aperti prima di mandare traffico

Invariati rispetto alla revisione precedente, nessuno è stato chiuso in questa sessione:

1. **Il form è una demo e non invia dati.** Va collegato a un endpoint creator dedicato, e va
   tolta la riga `.form-demo`. Non riusare `/api/onboarding`: alimenta il funnel B2C.
2. **Il link privacy punta all'informativa B2C** (`giada.care/privacy`). Serve la sezione dedicata
   ai lead creator. Costante `PRIVACY_URL` in cima a `src/App.jsx`.
3. **Dataset Meta separato** dal funnel B2C, con eventi distinti da `Contact`.
4. **Il prototipo è pubblico e indicizzabile**: compenso e criteri di selezione sono leggibili da
   chiunque.
5. Compenso, perimetro diritti, privacy e criteri di ammissione restano provvisori e attendono
   approvazione business e legale.

## Da dove ripartire

- Comandi: `npm run dev` · `npm run build` · `npm run test:sites`
- Leggere prima di un cambio visivo sostanziale: `DESIGN_SYSTEM.md`, `REFERENCE_MAP.md`,
  `design-qa.md`, `MONOREPO_HANDOFF.md`, più i guardrail in `CLAUDE.md`.
- I termini commerciali vanno tenuti allineati con `BRIEF-GIADA-CREATOR-PROGRAM-v2.md`.
- La reference «Veluno» non è versionata. Per una verifica futura serve di nuovo l'immagine.

### Candidati per la prossima sessione

- Chiudere il debito 1: endpoint reale del form e rimozione dello stato demo.
- Traduzione dei quattro angoli `?angolo=` in varianti di headline già testate su Meta.
- Verifica su browser reali di maschera SVG e `mask-image` (finora solo Chromium via Playwright).
- Decidere se la pagina resta autonoma o entra nel monorepo (`MONOREPO_HANDOFF.md`).
