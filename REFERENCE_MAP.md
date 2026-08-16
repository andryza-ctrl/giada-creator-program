# Knowledge Studio reference map — V5

Libreria approvata: `https://knowledge-studio-andrea.vercel.app`

Lettura live della libreria del 16 agosto 2026: 109 schede, manifest `generated_at 2026-08-14`.
Le reference definiscono struttura, gerarchia e principi UI; font, palette, tono, fotografie e
schermate prodotto restano quelli di Giada. Nessun asset di terzi è incluso nella landing.

## Nota metodologica

Le schede della libreria non hanno URL di dettaglio: sono modali lato client su una single page.
Il manifest completo è però esposto nel payload RSC della root e contiene testo, media,
`visual_notes` e `deep_dive` di ogni scheda. La verifica di questo passaggio è stata fatta lì.

Molte schede hanno media segnaposto (`provenance: generated`): l'immagine allegata è un filler
editoriale, non lo screenshot della fonte. Per questa revisione sono state usate solo schede con
media reali, aperti e guardati.

## Cambio di reference per la hero

La V4 usava **«10 hero section moderne del mese» — @creative_vaani, layout Skyline**
(`KI-20260804-111506`): card unica su fondo neutro, griglia a filetti, arco fotografico centrale.
Quella direzione è stata abbandonata.

### Struttura: reference «Veluno»

La composizione della hero replica la slide 3 della scheda **«Sette hero section moderne come
reference UI» — @uiuxmanuel** (`KI-20260810-103432`), layout **Veluno**, un e-commerce di orologi.

Nota di reperibilità: il media allegato a questa scheda nella libreria è un segnaposto generato,
e la fonte Instagram è dietro login. La slide è stata fornita a mano come immagine e resta in
locale come `ref-veluno.png`: `.gitignore` tiene fuori dal repository i reference di terzi, quindi
il file non è versionato e va richiesto di nuovo per una verifica futura.

| Elemento della reference | Principio estratto | Traduzione nella landing Giada |
|---|---|---|
| Nav a tre zone: marchio, link, azioni | La navigazione distribuisce identità, orientamento e azione su tre ancoraggi invece di ammassarli a destra | Marchio a sinistra, tre link al centro, CTA a destra |
| Titolo grande, sottotitolo breve, CTA a pastiglia con pastiglia circolare in coda | Una promessa dominante, una sola azione, con un segno grafico che la rende un oggetto e non un semplice bottone | H1 su due frasi, sottotitolo di venti parole, CTA teal con pastiglia navy e freccia |
| Secondo livello sotto la CTA: card prodotto piccola più sigillo circolare con testo su anello | La prima schermata può portare un secondo livello di informazione senza competere con la promessa | Miniatura di una schermata Giada con la prova («Giada è già in campagna») e sigillo rotante con la condizione economica |
| Immagine a destra con tacca nell'angolo in basso a sinistra | La sagoma dell'immagine si incastra con il sigillo: le due colonne si agganciano invece di stare affiancate | Maschera SVG sulla foto: angoli arrotondati e tacca in basso a sinistra, rivolta al sigillo |
| Frecce di carosello e indicatori sotto l'immagine | — | **Non replicati.** La pagina ha una sola promessa per la prima schermata: un carosello di hero contraddirebbe la regola. Gli indicatori senza carosello sarebbero decorazione |

### Contenuto della foto: «17 reference visuali»

Il trattamento della fotografia resta preso da **«17 reference visuali per layout, UI e contenuti
social»** (`KI-20260809-143230`), l'unica scheda della libreria con un set completo di 17 immagini
originali. Le immagini sono state scaricate e aperte, non citate a memoria.

| Reference aperta | Principio estratto | Traduzione nella landing |
|---|---|---|
| `reference-17.png` — meal tracker editoriale | Annotazioni puntuali con linea guida sottile ancorate a un dettaglio reale della fotografia | La foto della hero ha una sola annotazione: una linea guida sale dal bordo inferiore al telefono sul treppiede. Risponde nella prima schermata alla domanda «mi serve attrezzatura?» |
| `reference-5.png` — infografica nutrizionale a quattro colonne | Quattro fatti allineati, una sola riga, nessuna decorazione | La fascia «il patto»: compenso, consegna, utilizzo, prova. Quattro condizioni, filetti da 1px, niente icone |
| `reference-14.png` — hero dark per nutrizione personalizzata | Un fondo scuro rende leggibili sia la fotografia sia le schermate di prodotto | Tema unico navy per l'intera pagina; le schermate Giada restano chiare e diventano l'oggetto luminoso della sezione prova |

## Mappa sezione per sezione

| Sezione | Reference aperta | Principio estratto | Traduzione nella landing Giada |
|---|---|---|---|
| Hero | **Sette hero section moderne come reference UI** — @uiuxmanuel, layout Veluno | Nav a tre zone, secondo livello sotto la CTA, immagine con tacca che si aggancia al sigillo | Titolo a due frasi, CTA con pastiglia, miniatura di prova più sigillo, foto mascherata a destra |
| Il patto | **17 reference visuali** — `reference-5` | Quattro fatti su una riga, pari peso | Fascia subito sotto la hero con le quattro condizioni economiche |
| Linguaggio complessivo | **Sette linguaggi UI per evitare prodotti generici** — @avrosh.hq (`KI-20260808-122614`, media reale) | «Swiss: griglie rigide, tipografia enorme, whitespace spietato». Scegliere un linguaggio e impegnarsi | Swiss portato su fondo scuro: filetti, tipografia dominante, nessuna card decorativa |
| Architettura di conversione | **Anatomia di una landing SaaS ad alta conversione** — @uiux.subash | Comprensione, credibilità, meccanismo, rimozione delle obiezioni | Hero, patto e prova, chi cerchiamo, prova prodotto, profili, processo, form, FAQ, chiusura |
| Chi cerchiamo | **Perché alcuni hook da carosello fermano lo scroll** — @tinnaloaizaofficial | Specificità e contrasto reggono meglio della descrizione | Matrice binaria «Sei in linea se / Non basta», quattro coppie |
| Prova di 7 giorni | **17 reference visuali** — `reference-16`, `reference-17` | UI dentro un contesto, non mockup isolato | Due schermate reali su stage navy, i giorni raccontati nella colonna di testo, una sola nota sull'immagine |
| Profili creator | **Landing real estate segmentata per intento** — @webdesign_786 | Self-selection esplicita senza silos | Tre profili selezionabili, un solo pannello, preselezione da `?angolo=` o `?profilo=` |
| Colore | **Il bianco non è un solo colore** — @346eur | L'off-white è una scelta di tono, non un valore neutro | Nessun `#FFFFFF` come fondo e nessun nero: `--paper #FEFDFD` per la carta, famiglia navy per il fondo |
| Tipografia | **Cinque font aesthetic per contenuti editoriali** — @robiinluca | Abbinare un sans leggibile a una voce display; verificare accenti italiani e resa mobile | Geist per il testo, Bricolage Grotesque per il display. Accenti italiani verificati a corpo grande |
| Allineamento all'annuncio | **Allineare creatività e CTA alle fasi TOFU, MOFU e BOFU** — @adswithsimon (media reale con trascrizione) | Visual, messaggio, destinazione e CTA devono chiedere lo stesso livello di impegno | La pagina è BOFU: offerta esplicita nella fascia patto, una sola CTA, nessun impegno chiesto prima del contratto |

## Cosa è stato rimosso rispetto alla V4, e perché

- **Card hero a sei celle**: sei blocchi di microtesto nella prima schermata. Le condizioni sono
  passate alla fascia «il patto», la prova nella miniatura del secondo livello della hero.
- **Riga di prova sotto il patto**: era una ripetizione. Utenti paganti, video prodotti e creator
  pagate stanno ora solo nella miniatura della hero, dove servono prima.
- **Cerchio con freccia sull'immagine**: elemento decorativo senza destinazione utile.
- **Due note su tre nello stage prodotto**: i giorni 1-3 e 4-7 sono ora testo nella colonna,
  sull'immagine resta solo la domanda.
- **Pillole di impegno nelle righe di processo**: ripetevano benefici già dichiarati nel patto.
- **Eyebrow su ogni sezione**: ridotte da sette a tre.
- **Doppia etichetta di CTA** («Candidati» e «Ricevi accesso e brief»): resta solo la seconda.
- **Alternanza chiaro/scuro fra le sezioni**: la pagina ha un tema unico.

## Regole di movimento applicate

- Ingresso della hero a cascata, una volta sola, 620 ms con ritardi da 90 ms.
- Il sigillo circolare ruota in continuo, 26 s lineari: movimento costante, quindi curva lineare.
  Sotto `prefers-reduced-motion` viene fermato con `animation: none`, non accelerato.
- Rivelazione in scroll via `IntersectionObserver`, mai `addEventListener('scroll')`.
- Curve ease-out personalizzate, durata massima 260 ms per l'interfaccia.
- Press state a `scale(0.97)`; nessun ingresso da `scale(0)`.
- Hover limitato ai dispositivi con puntatore preciso.
- FAQ animata su `grid-template-rows`, con `visibility` che toglie la risposta chiusa anche
  dall'albero di accessibilità.
- `prefers-reduced-motion` elimina ogni spostamento e rende visibili tutti gli elementi.
