# Knowledge Studio reference map — V4

Libreria approvata: `https://knowledge-studio-andrea.vercel.app`

In questo passaggio ogni reference è stata aperta nella relativa scheda di dettaglio, non valutata soltanto dalla card della libreria. Le reference definiscono struttura, gerarchia e principi UI; font, palette, tono, fotografie e schermate prodotto restano quelli di Giada. Nessun asset di terzi è incluso nella landing.

## Direzione selezionata

- **Hero:** “10 hero section moderne del mese” — @creative_vaani, layout **Skyline**. Media verificato: `https://knowledge-studio-andrea.vercel.app/library-media/KI-20260804-111506-1.png`.
- **Linguaggio complessivo:** “Sette linguaggi UI per evitare prodotti visivamente generici” — @avrosh.hq. Traduzione scelta: ibrido Swiss/editoriale, con griglia rigorosa, tipografia dominante, righe e whitespace.
- **Architettura di conversione:** “Anatomia di una landing page SaaS ad alta conversione” — @uiux.subash. Sequenza: promessa → prova → meccanismo → obiezioni → azione.

## Mappa sezione per sezione

Lettura live della libreria del 16 agosto 2026: 109 schede (erano 98 nell'audit, 74 a inizio mese).
La reference Skyline è stata riaperta come immagine, non citata a memoria, e **replicata** nella
composizione: si adattano palette e messaggio, non il layout.

| Sezione | Reference aperta | Principio estratto | Traduzione nella landing Giada |
|---|---|---|---|
| Hero | **10 hero section moderne del mese** — @creative_vaani, Skyline | Card unica su fondo neutro, griglia a filetti, arco fotografico centrale, prova in alto a destra, accento caldo unico sulla CTA | Card blush su canvas; nav come prima riga; H1 e CTA in alto a sinistra; sottotitolo in basso a sinistra; prove (6 video, 3 creator) in alto a destra; condizioni economiche in basso a destra |
| Prova nella hero | **Sette hero section moderne come reference UI** — @uiuxmanuel | Promessa, prova e prossimo passo con enfasi non uniforme | La cella prove sostituisce la fascia separata: tre fatti verificabili e due numeri reali |
| Gerarchia mobile | **10 hero section moderne** — nota archiviata su Skyline | La composizione richiede una gerarchia mobile dedicata | Sotto 700px la hero si ricompone: H1, CTA, sottotitolo, prove, immagine, condizioni. Barra CTA sticky |
| Linguaggio complessivo | **Sette linguaggi UI per evitare prodotti generici** — @avrosh.hq | Scegliere un linguaggio prima dei componenti | Swiss/editoriale: griglia a filetti, tipografia dominante, zero card decorative |
| Chi cerchiamo | **Perché alcuni hook da carosello fermano lo scroll** — @tinnaloaizaofficial | Specificità e contrasto reggono meglio della descrizione | Matrice binaria «Sei in linea se / Non basta», quattro coppie |
| Prova di 7 giorni | **17 reference visuali per layout, UI e contenuti social** — @Andrea | UI dentro un contesto narrativo, non mockup isolato | Due schermate reali, note giorni 1–3 / 4–7, una domanda creativa |
| Profili creator | **Landing real estate segmentata per intento** — @webdesign_786 | Self-selection esplicita senza silos | Tre profili selezionabili, un solo pannello, preselezione da `?angolo=` o `?profilo=` |
| Architettura | **Anatomia di una landing page SaaS ad alta conversione** — @uiux.subash | Promessa, prova, meccanismo, obiezioni, azione | Hero con prove, chi cerchiamo, prova, profili, processo, form, FAQ, chiusura |
| Fiducia | **Real estate website orientato a fiducia e lead** — @webdesign_786 | Trust signal e CTA fanno parte della UI | Le prove stanno nella hero, non in una fascia aggiunta dopo |
| Tipografia e ritmo | **Prompt Claude per togliere genericità a un sito** — @lifeofarjav | Tipografia, whitespace, micro-motion e trust signal sono leve indipendenti | Scala a cinque livelli, padding sezione ridotto a 104px, motion limitata all'ingresso |
| Colore | **Il bianco non è un solo colore** — @346eur · **17 reference visuali** — @Andrea | L'off-white è una scelta di tono; palette a pochi dominanti con un solo accento | `--paper` al posto del bianco puro; teal solo su superfici, `--teal-text` e `--teal-deep` per testo e CTA |

## Cosa è stato rimosso, e perché

- **Journey strip a cinque tappe**: duplicava il processo a quattro passi e introduceva una terza serie di numeri.
- **Grafico reach 62% / 92%**: dati inventati davanti a un pubblico che legge dashboard pubblicitarie.
- **Sezione benefici a tre card**: le tre promesse sono ora nelle condizioni della hero e nelle FAQ.
- **Numeri nelle label di sezione**: restavano solo per decorazione.
- **Icone decorative nelle card e nelle righe di processo**: sostituite da numeri e filetti.

## Regole di movimento applicate

- Ingresso della hero raro e breve, solo `opacity` e `transform`.
- Curve ease-out personalizzate e durata massima di 560 ms per il marketing motion.
- Press state a `scale(0.97)`; nessun ingresso da `scale(0)`.
- Hover limitato ai dispositivi con puntatore preciso.
- Tab e FAQ aggiornano lo stato immediatamente; niente animazioni di layout.
- `prefers-reduced-motion` elimina lo spostamento non necessario.
