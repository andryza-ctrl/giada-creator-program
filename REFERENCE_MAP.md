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

## Cambio di reference per la hero, revisione del 18 agosto 2026

Il blocco visivo della hero passa da una sola immagine 16:9 a un ventaglio di carte, su reference
indicata dal committente: **«Pallet Ross», concept di landing pubblicato su Pinterest**
(`https://it.pinterest.com/pin/1059964462322741824/`). La reference è un mockup grafico, non un
componente: è stata letta come composizione e riscritta nel CSS del progetto. Nessun asset, font o
colore della reference è stato ripreso.

| Elemento della reference | Principio estratto | Traduzione nella landing Giada |
|---|---|---|
| Titolo grande su due righe, subito sopra le carte | La promessa e le prove diventano un blocco solo | Titolo e ventaglio restano a `clamp(2px, 0.8vw, 12px)` di distanza: sono lo stesso gruppo |
| Ventaglio di carte verticali sovrapposte in arco | Il lavoro dei creator si mostra in quantità, non in un esempio unico | Cinque carte `3 / 4` con rotazione da `-8,5°` a `7,5°` e arco governato da `--unit` e `--lift-max`; tre carte sotto i 700px |
| Impilamento monotono verso destra | Il ventaglio ha una direzione di lettura, non è un mucchio | `z-index` crescente da sinistra a destra, sollevamento decrescente |
| Due fumetti con handle sugli angoli alti del ventaglio | Le carte parlano con la voce di chi le ha girate | Etichette «Girato col telefono» (teal) e «Nessun set» (carta), agganciate a `--fan-w`. Nessun handle inventato: la copy resta quella del programma |
| Paragrafo di contesto sotto le carte, poi coppia di pastiglie | La spiegazione arriva dopo la prova visiva | Sottotitolo, poi CTA «Ricevi accesso e brief» e pastiglia ghost «Come funziona» |
| Fondo chiaro con card unica arrotondata e ombra | — | **Non replicato.** Il tema resta navy unico: il ventaglio poggia sulla notte, senza inversione di tema |
| Barra di nav con icone account e tema | — | **Non replicato.** La pagina ha una sola conversione e nessuna area account |

Cosa cambia rispetto alla revisione precedente: la foto della creator non è più l'immagine larga
16:9 ma la carta centrale del ventaglio, ritagliata in verticale con `object-position: 80% 50%`.
La nota sull'attrezzatura diventa una delle due etichette a fumetto. Il sigillo con il compenso
resta, agganciato al bordo destro del ventaglio invece che all'angolo della foto, e sotto i 700px
lascia il posto a una pastiglia «€80 a video selezionato».

## Cambio di reference per la hero, revisione del 17 agosto 2026

Nota del 18 agosto 2026: di questa revisione resta valido l'asse centrale unico. Il blocco
immagine è stato sostituito dal ventaglio di carte descritto sopra.

La hero a due colonne descritta qui sotto (reference «Veluno») è stata sostituita da una
composizione centrata su un asse unico, presa da **`hero-27` della libreria pubblica
watermelon.sh** (`https://ui.watermelon.sh/block/hero-27`, sorgente in
`https://registry.watermelon.sh/r/hero-27.json`). La reference è un componente shadcn in
Tailwind: è stata letta come struttura e riscritta nel CSS del progetto, nessuna dipendenza
aggiunta e nessun asset di terzi copiato.

| Elemento della reference | Principio estratto | Traduzione nella landing Giada |
|---|---|---|
| Contenuto su un asse centrale, dalla nav allo scroll indicator | Un solo punto di fuga: lo sguardo scende in verticale invece di rimbalzare fra due colonne | Titolo, sottotitolo, azioni, riga di prova e immagine tutti centrati |
| Nav con i link raccolti in un gruppo a pastiglia | La navigazione diventa un oggetto solo, non tre elementi sparsi | I tre link stanno dentro una pastiglia con filetto; marchio a sinistra e CTA a destra restano dov'erano |
| Titolo su due righe, seconda riga in voce diversa | La promessa si legge in due tempi | Prima riga bianca, seconda riga in `--teal-bright` a peso 500. La reference usa un corsivo serif: Bricolage non ha corsivo reale, quindi la differenza resta di peso e colore |
| Coppia di azioni: pastiglia piena più link testuale con freccia | Una sola azione dominante, la seconda è orientamento | CTA «Ricevi accesso e brief» più link «Come funziona» con chevron verso il basso, che fa anche da invito allo scroll |
| Immagine larga che occupa la parte bassa della prima schermata | La fotografia chiude la composizione invece di affiancarla | Una sola immagine 16:9 al centro, larga 1080px, angoli a 22px |
| Scroll indicator dedicato in fondo alla sezione | — | **Non replicato.** Il link «Come funziona» con chevron fa già quel lavoro, e la fascia del patto è visibile subito sotto |

Cosa è stato tolto dalla hero precedente: maschera SVG con tacca, linea guida sul telefono,
miniatura della schermata prodotto. La nota sull'attrezzatura resta come pastiglia appoggiata
sull'immagine, la prova diventa una riga di testo sotto le azioni, il sigillo rotante con la
condizione economica si sposta sull'angolo in basso a destra della foto.

## Le tre condizioni: reference «stats-1»

La fascia «il patto» è diventata una sezione a tre schede, presa da **`stats-1` della stessa
libreria** (`https://ui.watermelon.sh/blocks/Stats`,
`https://registry.watermelon.sh/r/stats-1.json`).

| Elemento della reference | Principio estratto | Traduzione nella landing Giada |
|---|---|---|
| Testata centrata: titolo più riga di contesto | La griglia di numeri ha bisogno di una domanda a cui rispondere | «Il patto, prima di ogni domanda» più una riga sul perimetro |
| Tre schede uguali con chip in alto | L'etichetta della metrica sta in un oggetto riconoscibile, non in una riga di testo | Chip con icona, nome della condizione e sopratitolo in maiuscoletto |
| Metrica grande con suffisso più piccolo | Il numero si legge prima della frase | 7 giorni gratis, 1 video + 3 hook, ∞ senza scadenza. Il simbolo di infinito ha un equivalente testuale per le tecnologie assistive |
| Trama diagonale colorata per scheda | La superficie distingue le schede senza aggiungere bordi pesanti | Una sola trama teal a bassissima opacità, uguale per le tre schede: la regola dell'accento unico resta |
| Riga di stelle in fondo alla scheda | Chiusura visiva costante | Una conferma sola con spunta: «Nessun contenuto richiesto», «Compenso alla consegna», «Definito prima del contratto» |
| Quarta metrica | — | **Non replicata.** Il compenso non è una scheda: sta nel sigillo della hero, nella nota sotto la griglia, nella barra CTA mobile e nella FAQ |

## Cambio di reference per la hero (V5, superata)

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
| Hero | **`hero-27`** — watermelon.sh | Asse centrale unico, titolo su due righe, coppia di azioni, immagine larga sotto il testo | Titolo a due frasi, CTA con pastiglia più link, riga di prova, foto 16:9 con nota e sigillo |
| Il patto | **`stats-1`** — watermelon.sh | Tre schede a metrica: chip, numero grande, dettaglio, conferma in fondo | Prova, consegna e utilizzo. Il compenso resta fuori dalle schede |
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

---

## V8 «Quattro colori» — 23 agosto 2026

Scan completo della Knowledge Studio (`https://knowledge-studio-andrea.vercel.app`): References,
Inspo, Carousel, Meta Ads, AI, Marketing. Le schede che hanno cambiato la pagina, con la fonte
diretta. Le reference sono lette come regole e riscritte nel CSS del progetto: nessun asset di
terzi, nessuna dipendenza aggiunta.

| Scheda | Autore | Fonte | Cosa ne è entrato |
| --- | --- | --- | --- |
| Anatomia di una landing SaaS ad alta conversione | @uiux.subash | https://www.instagram.com/p/DZFOv5nmTwE/ | L'ordine delle sezioni: comprensione, credibilità, meccanismo, obiezioni, azione. Da qui la FAQ prima del form e la prova prima della qualifica |
| Due coppie cromatiche: Cosmic–Vanilla e Lavender–Violet | @dyslove.design | https://www.instagram.com/p/DaxM5E4iF97/ | La coppia lilla/viola verificata, che nella V7 era diventata palette e nella V8 resta come sola direzione complementare |
| Il bianco non è un solo colore | @346eur | https://www.instagram.com/p/DbDktxnjXfr/ | La carta `#fff9ef` come scelta di tono, non come bianco di default |
| Quattro librerie di sfondi e gradienti | @ui.fig._.designer | https://www.instagram.com/p/DasXa2ommjc/ | La direzione «gradiente più grana» invece della tinta piatta, scritta in CSS |
| Font pairing per progetti editoriali e luxury | @itsdesignare | https://www.instagram.com/p/DaqBUMODSqP/ | Ruoli distinti fra display e testo: il display porta personalità, il testo porta leggibilità |
| Cinque font aesthetic per contenuti editoriali | @robiinluca | https://www.instagram.com/p/DbQn-S1jBPy/ | Boska come voce display. Il file scaricato è il corsivo a 700 da Fontshare |
| Sette linguaggi UI | @avrosh.hq | https://www.instagram.com/p/DbRuxjXAego/ | Scegliere un linguaggio prima dei componenti. Scelto Editorial, senza collage di stili |
| Sette hero section moderne come reference UI | @uiuxmanuel | https://www.instagram.com/p/DbeBUFVDpk7/ | Una sola promessa primaria per viewport; i trust signal solo se rispondono a un dubbio reale, da cui la rail dei fatti |
| 10 hero section moderne del mese | @creative_vaani | https://www.instagram.com/p/Dba5xP-jLqe/ | Il metodo: estrarre il DNA (scala, griglia, ritmo, contrasto, motion) invece di copiare il layout |
| Landing real estate segmentata per intento | @webdesign_786 | https://www.instagram.com/p/Dadtpt_tsTb/ | Il mobile ricompone la gerarchia invece di comprimere il desktop |
| Hallmark, skill anti-AI-slop | @dario.fontanel | https://github.com/Nutlope/hallmark | Checklist di audit: pattern ripetitivi, gerarchia, coerenza, polish |

### Tipografia versionata

- **Boska Italic 700**, Fontshare, `public/assets/boska-bold-italic-latin.woff2`, 33 KB. È la terza
  voce. Il taglio a 400, provato nella passata intermedia, è stato scartato: su un serif ad alto
  contrasto i tratti sottili sparivano.
- Bricolage Grotesque e Geist restano invariati.

## Regole di movimento applicate nella V8

- Rivelazione in scroll a 460ms con spostamento di 14px, stagger fra 60 e 90ms.
- Pressione dei bottoni a 150ms con `scale(0.97)`.
- Nessuna curva con rimbalzo: `--ease-out` per gli ingressi, `--ease-quart` per il tocco.
- Nessuna transizione su proprietà di layout, mai `transition: all`.
- Il cambio di profilo non anima un gradiente, che non interpola: rientra il contenuto.
- `prefers-reduced-motion` elimina ogni spostamento e ferma l'anello del sigillo.
