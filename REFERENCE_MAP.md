# Knowledge Studio reference map — V3

Libreria approvata: `https://knowledge-studio-andrea.vercel.app`

In questo passaggio ogni reference è stata aperta nella relativa scheda di dettaglio, non valutata soltanto dalla card della libreria. Le reference definiscono struttura, gerarchia e principi UI; font, palette, tono, fotografie e schermate prodotto restano quelli di Giada. Nessun asset di terzi è incluso nella landing.

## Direzione selezionata

- **Hero:** “10 hero section moderne del mese” — @creative_vaani, layout **Skyline**. Media verificato: `https://knowledge-studio-andrea.vercel.app/library-media/KI-20260804-111506-1.png`.
- **Linguaggio complessivo:** “Sette linguaggi UI per evitare prodotti visivamente generici” — @avrosh.hq. Traduzione scelta: ibrido Swiss/editoriale, con griglia rigorosa, tipografia dominante, righe e whitespace.
- **Architettura di conversione:** “Anatomia di una landing page SaaS ad alta conversione” — @uiux.subash. Sequenza: promessa → prova → meccanismo → obiezioni → azione.

## Mappa sezione per sezione

| Sezione | Reference aperta | Principio estratto | Traduzione nella landing Giada |
|---|---|---|---|
| Navigazione | **Sette hero section moderne come reference UI** — @uiuxmanuel | Header leggero, CTA primaria unica, mobile semplificato | Pill nav compatta; su mobile rimangono brand e candidatura. |
| Hero | **10 hero section moderne del mese** — @creative_vaani, Skyline | Masthead forte, immagine verticale centrale, valore a sinistra, trust a destra | Headline oversize; arco fotografico centrale; invito alla prova a sinistra; compenso, continuità e distribuzione a destra. |
| Apertura opportunità | **Sette regole per caroselli leggibili e orientati ai buyer** — @liz.on.the.web | Un’idea per blocco, lettura a Z, titoli grandi, carico cognitivo ridotto | Statement diretto e rail a quattro criteri: follower, voce, metodo, idea. |
| Prova di 7 giorni | **17 reference visuali per layout, UI e contenuti social** — @Andrea | Persona e prodotto nella stessa storia; UI reale; overlay contestuali | Due schermate reali di Giada, progressione giorni 1–3 / 4–7 e domanda creativa concreta. |
| Benefici | **Landing landscaping con hero immersiva e servizi modulari** — @webdesign_786 | Beneficio dominante, moduli secondari, outcome prima delle feature | Mosaico asimmetrico: distribuzione dominante, chiarezza economica e continuità come supporti. |
| Profili creator | **Landing real estate segmentata per intento** — @webdesign_786 | Self-selection esplicita senza trasformare i segmenti in silos | Tre profili orizzontali selezionabili e un solo pannello di approfondimento. |
| Percorso | **Anatomia di una landing page SaaS ad alta conversione** — @uiux.subash | Rendere visibile il meccanismo e ridurre progressivamente l’incertezza | Quattro righe editoriali; l’impegno cresce da “nessun contenuto” a “collaborazione reale”. |
| Criteri | **Sette regole per caroselli leggibili e orientati ai buyer** — @liz.on.the.web | Confronto leggibile, gerarchia forte, una decisione per riga | Matrice “Sei in linea se / Non basta” per qualificare senza tono elitista. |
| Form | **Sette prompt per un sito lead-gen locale e un’offerta commerciale** — @kekoamac | Chiedere solo ciò che serve e spiegare il passo successivo | Quattro campi, consenso, rassicurazioni e stato demo esplicito senza invio dati. |
| Mobile | **Otto prompt per progettare struttura, copy e mobile di una landing** — @itsaiguide | Mobile come gerarchia autonoma, non semplice riduzione desktop | Masthead ricomposto, CTA iniziale visibile, moduli in colonna, tabelle e form senza overflow. |
| FAQ e chiusura | **Anatomia di una landing page SaaS ad alta conversione** — @uiux.subash | Risolvere obiezioni prima dell’ultima azione | FAQ numerate, una risposta aperta, CTA finale unica. |
| Fiducia complessiva | **Real estate website orientato a fiducia e lead** — @webdesign_786 | Trust e CTA devono appartenere alla gerarchia, non essere decorazioni | Condizioni, processo e limiti sono visibili prima della candidatura. |

## Regole di movimento applicate

- Ingresso della hero raro e breve, solo `opacity` e `transform`.
- Curve ease-out personalizzate e durata massima di 560 ms per il marketing motion.
- Press state a `scale(0.97)`; nessun ingresso da `scale(0)`.
- Hover limitato ai dispositivi con puntatore preciso.
- Tab e FAQ aggiornano lo stato immediatamente; niente animazioni di layout.
- `prefers-reduced-motion` elimina lo spostamento non necessario.
