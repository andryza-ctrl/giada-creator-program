# Session status — Giada Creator Program

Ultimo aggiornamento: **6 settembre 2026**. Questo file è il punto da cui ripartire.

## Dove siamo

Design system **V8 «Quattro colori»**, in produzione. Sostituisce la V6 «Daylight» (sei superfici
alternate, quattro accenti, mai committata) e la V7 «Pastel Editorial» intermedia della stessa
sessione. Build, `test:sites` (4/4) e la passata di QA automatica passano.

La direzione: una pagina sola invece di nove fasce. Il fondo è una catena di gradienti in cui il
colore finale di ogni sezione è il colore iniziale della successiva, quindi non esiste nessun taglio
fra una sezione e l'altra. La pagina cambia luminanza due volte, all'inizio del patto e all'inizio
del finale, e in entrambi i casi il passaggio cade dentro il padding, dove non c'è testo.

**Palette bloccata a quattro colori**: navy `#203260`, teal `#10b8c0`, carta `#fff9ef`, lilla
`#e9dcff`. Tutto il resto è una miscela dichiarata di questi quattro. Quota misurata sull'altezza
reale: Giada (navy, teal, carta) al 67% a 1512px e al 66,6% a 390px, lilla al 33% e al 33,4%.

## Cosa è cambiato il 23 agosto 2026

Sessione in tre passate. Quello che segue è lo stato finale.

### 1. Scan della libreria e audit

Scansione completa della Knowledge Studio (`https://knowledge-studio-andrea.vercel.app`): tutte le
categorie, References (50), Inspo (69), Carousel (16), Meta Ads (3), AI (78), Marketing (58), con
apertura delle schede rilevanti per palette, tipografia, hero e struttura di conversione. Le fonti
con link diretto stanno in `AUDIT-V7-DAYLIGHT-PASTEL.md`, insieme all'audit della V6 e al piano di
intervento. Le schede che hanno cambiato la pagina:

- **Anatomia di una landing SaaS ad alta conversione** (@uiux.subash): nove blocchi in sequenza,
  ordine di risoluzione comprensione → credibilità → meccanismo → obiezioni → azione.
- **Due coppie cromatiche** (@dyslove.design): valori verificati per la coppia lilla/viola.
- **Il bianco non è un solo colore** (@346eur): la carta è una scelta di tono, non un default.
- **Font pairing editoriali e luxury** (@itsdesignare) e **Cinque font aesthetic** (@robiinluca):
  ruoli distinti fra display e testo, da cui la terza voce tipografica.
- **Sette linguaggi UI** (@avrosh.hq): scegliere un linguaggio prima dei componenti. Scelto
  Editorial.
- **Hallmark** (@dario.fontanel): usata come checklist anti-slop.

### 2. Struttura e conversione

Riordino delle sezioni sul modello della libreria. La FAQ passa **prima** del form, la prova del
prodotto sale **prima** della qualifica, la vecchia fascia di chiusura (che duplicava la CTA e
riportava l'utente indietro) è **fusa nel form** come finale unico.

| Prima (V6) | Ora (V8) |
| --- | --- |
| hero | hero |
| il patto | il patto |
| chi cerchiamo | prova il prodotto + rail dei fatti |
| prova il prodotto | chi cerchiamo |
| profili | profili |
| come funziona | come funziona |
| candidatura | FAQ |
| FAQ | finale con il form |
| chiusura | — (fusa nel finale) |

Nuovo in pagina: la **rail dei fatti** in fondo alla sezione del prodotto, con i tre fatti già
accaduti (6 video prodotti, 3 creator pagate, 48 ore di risposta). Nessun dato di performance,
nessuna promessa di copertura.

Riempiti i tre vuoti della V6: il pannello dei profili ha tre zone invece di due (indice e titolo,
citazione in corsivo, tag), la rail della FAQ tiene il titolo appiccicato allo scroll più la
scorciatoia al form, il finale è a due colonne con il form dentro.

### 3. Colore

- Da sei superfici piatte a **una catena di nove gradienti** che si agganciano l'uno all'altro.
- Da quattro accenti (teal, lilla-viola, ambra, rosa) a **un accento solo**, il teal, in due valori.
- Il lilla resta come **superficie complementare**, non come colore di testo.
- Niente nero, niente bianco puro: ogni neutro è una miscela dei quattro colori.
- `--fade` `clamp(200px, 22vh, 300px)` è la lunghezza dei due passaggi di luminanza; `--pad-extra`
  spinge il testo sotto la dissolvenza.

### 4. Tipografia

Terza voce: **Boska Italic 700** (Fontshare, 33 KB, self-hosted). Nella V6 il corsivo era finto, un
peso più basso dello stesso sans. La prima passata l'aveva messo a 400 e si leggeva sbiadito: a 700
il corsivo ha corpo. Schema ripetuto in tutta la pagina: prima riga in Bricolage 780-800, seconda
riga in Boska corsivo nell'accento della superficie.

### 5. Movimento

Passata sulle regole di design engineering: rivelazione da 620 a 460ms, pressione dei bottoni a
150ms, curve senza rimbalzo, stagger fra 60 e 90ms, nessuna transizione su proprietà di layout. Il
cambio di profilo non finge più di animare un gradiente: il corpo del pannello ha una `key` in
React e rientra.

### Verifiche

- `npm run build` e `npm run test:sites` (4/4) passano.
- **Nessun overflow orizzontale a 17 larghezze**: 1920, 1512, 1280, 1080, 1024, 900, 834, 768, 701,
  700, 620, 560, 480, 420, 390, 360, 320px. Nessun elemento oltre il bordo della viewport.
- **Passata di contrasto su ogni nodo di testo della pagina**, con il fondo campionato dentro il
  gradiente alla quota reale dell'elemento: **zero nodi sotto AA**.
- Hero dentro il primo schermo con la riga del compenso visibile: 913px su 950 a 1512×950, 806px su
  844 a 390×844.
- Nav fissa: nascosta e `inert` a 0px, visibile a 2200 e 5600px, di nuovo nascosta tornando a 300 e
  a 0.
- Quote di palette: Giada 67% / lilla 33% a 1512px, 66,6% / 33,4% a 390px.
- Evidenze: `qa-v8-01` … `qa-v8-12`. Registro dei finding in `design-qa.md`.

### Difetti trovati e chiusi in questa sessione

| Difetto | Correzione |
| --- | --- |
| La cucitura fra sezioni, prima passata: il footer non era posizionato, la sua cucitura assoluta finiva in cima al documento e copriva la hero | Il meccanismo delle cuciture è stato sostituito dalla catena di gradienti, che non usa elementi sovrapposti |
| Il titolo del patto cadeva dentro la dissolvenza navy → carta e perdeva contrasto: `padding-block` di `.section` sovrascriveva il `padding-top` della zona | Lo scarto passa da `--pad-extra`, una variabile, non da `padding-top` |
| La carta del form era translucida sul navy: il fondo scuro passava e la carta si leggeva grigia | Gradiente opaco fra carta e lilla, campi del form opachi |
| Gli slot del ventaglio a 6% di carta erano fantasmi sul navy nuovo | Superficie con più corpo, trama teal e lilla al 20-28% |
| A 390px la rail dei fatti impilava le voci con un filetto laterale, che diventava una barra colorata | Filetto verticale sopra i 701px, orizzontale sotto |
| Testo in corsivo Boska a 400: tratti sottili invisibili | Un solo taglio, il 700 |
| Il pannello dei profili dichiarava una transizione sul background: i gradienti non interpolano, il colore saltava | Animazione del corpo con `key` in React |

### Aperto

Niente: gli slot del ventaglio sono stati riempiti il 5 settembre 2026.

## Cosa è cambiato il 5 settembre 2026

### Le cinque carte del ventaglio hanno le immagini definitive

Gli slot `FOTO` non esistono più: le cinque carte portano cinque creator diversi, uno per carta.
La vecchia `giada-creator-hero.png` è stata eliminata, non spostata.

| Posizione | File | Chi | Cosa si vede |
| --- | --- | --- | --- |
| 1 (bordo) | `01-nutrizionista` | Nutrizionista, donna ~40 | Home office, telefono su treppiede e luce ad anello |
| 2 | `03-fitness` | Fitness creator, uomo ~35 | Angolo allenamento in casa, telefono su treppiede |
| 3 (centro) | `07-giovane` | Creator, donna ~24 | Tavolo di casa, telefono in mano a braccio teso |
| 4 | `02-food-blogger` | Food creator, donna ~33 | Cucina, mostra una ciotola al telefono sul treppiede |
| 5 (bordo) | `05-wellness` | Wellness, donna ~30 | Camera al mattino, telefono su treppiede e luce ad anello |

Il rapporto è quattro donne e un uomo, cioè l'80/20 del pubblico creator reale. Sotto i 700px
restano visibili solo le tre centrali: **fitness, ragazza, food**. L'uomo sta in seconda posizione
apposta, perché è l'unica sistemazione che lo tiene in pagina anche da telefono.

Il profilo maschile è passato per una versione intermedia — un nutrizionista uomo ~45 in studio,
che portava la credenziale come Elena nel funnel B2C — scartata dal committente: per una pagina
che recluta creator il fitness creator è più in linea del professionista con la libreria alle
spalle. Il suo master resta in archivio come `06-esperto`.

**Due master sono fuori pagina ma restano in `assets-src/hero`**: `04-abitudini`, la donna ~52,
uscita perché il committente voleva una under 26 al centro, e `06-esperto`. Le loro finestre in
`CROPS` sono conservate: per rimetterne una in pagina basta aggiungerla a `PUBLISHED` e rilanciare
lo script, senza rigenerare niente.

**Il difetto che le immagini dovevano chiudere.** Nella vecchia foto il telefono era fuori
inquadratura e non si capiva che la donna stesse girando un video. Adesso in ogni carta il
telefono è in primo piano, intero, con aria attorno e mai tagliato dal bordo, con il dorso e le
lenti verso chi guarda e lo schermo verso la persona; il soggetto guarda il telefono, non
l'obiettivo della foto. Una sola posa su cinque è a telefono in mano, per non ripetere cinque
volte lo stesso treppiede.

**Vincoli di scena tenuti nei prompt**: nessun camice, bilancia, grafico o prima-dopo, perché la
pagina non deve leggersi come medicale; nessun testo, logo o marchio dentro l'immagine; palette
forzata sui quattro colori della pagina; pelle reale senza ritocco.

### Come sono fatte le immagini

Le carte sono **3:4 a ogni breakpoint**: cambia solo la larghezza resa, 218px sul desktop e 190px
sotto i 700px. Non servono tagli diversi per device: serve un master per persona e più larghezze.

- I master 1024x1536 stanno in **`assets-src/hero/`**, fuori da `public/`: pesano 2MB l'uno e non
  vanno pubblicati.
- `scripts/hero-images.mjs` ritaglia ogni master a 3:4 con una finestra **scritta a mano per
  immagine** (la costante `CROPS`) e scrive tre larghezze WebP in `public/assets`: 264, 436, 654.
  La finestra è per immagine perché il generatore inquadra largo: senza avvicinare, a 200px di
  larghezza la persona e il telefono diventano illeggibili.
- In pagina l'array `heroDeck` porta solo il nome base; `srcSet` e `sizes` si costruiscono da
  `DECK_WIDTHS`. `sizes` è `(max-width: 700px) min(28vw, 190px), min(19.5vw, 218px)`, cioè la
  stessa formula del CSS.
- Peso totale delle quindici WebP: **1,3MB**, contro i 2MB della sola vecchia hero PNG.

Rigenerare una carta: si sostituisce il master in `assets-src/hero/`, si ritocca la sua riga in
`CROPS` e si rilancia `node scripts/hero-images.mjs`.

La regola `object-position: 80% 50%` su `.deck-card img` è stata tolta: con immagine e carta
entrambe 3:4, `cover` non ritaglia niente e la composizione la decide il taglio dello script.

### Verifiche

- `npm run build` e `npm run test:sites` (4/4) passano.
- Sei larghezze controllate (1512, 1440, 834, 768, 390, 360): **nessun overflow orizzontale**, la
  CTA della hero resta dentro il primo schermo ovunque (766/950 a 1512, 658/844 a 390).
- `srcset` verificato sul campo: 436 scelta sul desktop a DPR 2 (la carta è 218px), 264 sul
  telefono. Nessuna richiesta fallita, nessun errore in console.
- Le cinque carte controllate a zoom 3x una per una: telefono intero e leggibile in tutte.

### Come si generano

Le immagini nascono con la skill `imagegen` di Codex, non con il plugin `/codex-image:generate`:
con Codex 0.147 il plugin fallisce (`error: unexpected argument '--full-auto'`). Il comando che
funziona è `codex exec -m gpt-5.6-luna ...`. **Il modello va passato a mano**: il default del
`config.toml` e `gpt-6-astra`, che risponde `400 requires a newer version of Codex` e lascia il
processo appeso senza dire perché. In alternativa si genera dalla chat ChatGPT nel browser.

`playwright-core` è ora una devDependency: le passate di QA descritte più sotto la usano con il
Chrome installato sul Mac, perché la cache dei browser Playwright non c'è più.

### Il form invia davvero: Web App, foglio e mail formattata

Il form della landing non è più una demo. Il percorso di una candidatura:

1. La landing fa `POST` in JSON alla **Web App di Apps Script** (`FORM_ENDPOINT` in cima a
   `src/App.jsx`).
2. `doPost` scrive la riga nella scheda **«Candidature»** del foglio
   *Giada Creator Program - Candidature*, sul Drive di `andrea.zannuto@gmail.com`, creando la
   scheda e le intestazioni al primo giro.
3. Manda a `andrea.zannuto@gmail.com` una **mail formattata** — nome, tag, email, consensi, il
   testo della candidatura e il link al foglio — con `replyTo` sull'indirizzo del creator, così si
   risponde direttamente dalla mail.
4. Risponde `{"ok":true}`. La landing lo legge davvero: il redirect su
   `script.googleusercontent.com` porta `Access-Control-Allow-Origin: *`, quindi **una conferma in
   pagina è una conferma vera**, non un'assunzione.

| Cosa | Dove |
| --- | --- |
| Foglio | `13qIw9G_IEPwzWxiqNKWKDm3edcLLYUR7az1NRLFtZBI`, scheda «Candidature» |
| Progetto Apps Script | `1jLw9Jz6ancGzYE7I7RCalO8vjnIjhuVJkonfOL3piXWzve0V-xSIJSI9` |
| Endpoint | `https://script.google.com/macros/s/AKfycbzPKz6bAb9YfU5qaIZgPmstuQxci1Zt8uNMPj0I0wrt37PX_XaCHAag81Wcqwm32TQT/exec` |

**La trappola numero uno**: modificare il codice nell'editor **non** aggiorna la Web App. Dopo ogni
modifica serve *Distribuisci › Gestisci distribuzioni › matita › Versione: Nuova versione ›
Distribuisci*, altrimenti l'endpoint continua a eseguire la versione vecchia e sembra che la
modifica non abbia avuto effetto. L'URL `/exec` invece resta lo stesso.

Un `GET` sull'endpoint risponde `{"ok":true,"service":"giada-creator-program"}`: è il controllo
più veloce per sapere se la Web App è viva.

Se `doPost` va in errore, la candidatura non si perde in silenzio: lo script manda comunque una
mail con l'errore e il corpo ricevuto.

**Il modulo Google resta come traccia, ma è chiuso.** Nel primo tentativo le candidature passavano
da un modulo Google (scheda *Risposte del modulo 1*, oggi vuota). Da quando c'è la Web App il
modulo **non accetta più risposte** — *Pubblicazione › Accetta risposte* spento — così non esiste
un secondo endpoint pubblico che scrive nello stesso file. Per riaprirlo basta riaccendere quella
levetta.

### La pagina vive sotto /giadacreators

La destinazione è **`vivariumai.co/giadacreators`**: dominio separato da `giada.care`, che è il
presupposto per pixel, verifica dominio ed eventi dedicati al programma creator.

Il progetto costruisce con `base: "/giadacreators/"` e output in `dist/client/giadacreators`. Le due
URL servono quindi **percorsi identici** — `giada-creator-program.vercel.app/giadacreators` e
`vivariumai.co/giadacreators` — e il proxy davanti non deve riscrivere nulla: è lì che questi
montaggi si rompono di solito. La radice del progetto Vercel reindirizza al nuovo percorso, così i
vecchi link non muoiono.

Dentro l'app i percorsi degli asset nascono da `import.meta.env.BASE_URL`, non da uno slash
iniziale. `public/privacy-creator.html` sta fuori dal bundle e usa URL **relative**, quindi non ha
bisogno di sapere dove è montata.

**Il montaggio è live dal 5 settembre 2026**: `https://vivariumai.co/giadacreators/`.

Il sito `vivariumai.co` **non è su Vercel**: è un export statico di Next servito da **Cloudflare
Pages**, costruito dal repo privato `vivariumai/vivariumai.co` con GitHub Actions a ogni push su
`main` (e un'anteprima su ogni PR, protetta da Cloudflare Access).

Essendo un export statico **non esiste un server che possa fare da proxy**: la landing non è
proxata, è *costruita* dentro il sito. Uno step della CI clona questo repo (che è pubblico, quindi
non servono segreti), lo costruisce e copia `dist/client/giadacreators` dentro `out/giadacreators`.
Da lì la serve Pages come qualsiasi altro file: stessa CDN, nessun hop in più, niente da riscrivere
perché i percorsi già combaciano.

**La conseguenza operativa da ricordare**: una modifica a questa landing **non va online da sola**.
Serve un deploy del sito — un push su `main` lì, oppure il rilancio manuale del workflow
(`gh workflow run deploy.yml --repo vivariumai/vivariumai.co`). E se il build di questo repo si
rompe, si rompe il deploy del sito: è voluto, meglio un errore rumoroso di una pagina pubblicata a
metà.

Due cose imparate montandolo, che valgono per chiunque ci torni:

- Cloudflare Pages **normalizza gli indirizzi**: `/giadacreators` fa 308 verso `/giadacreators/`, e
  `/giadacreators/privacy-creator.html` fa 308 verso `/giadacreators/privacy-creator`. Le pagine
  rispondono, ma è un salto in più: nelle inserzioni conviene usare direttamente l'URL con la barra
  finale.
- Le anteprime delle PR stanno dietro **Cloudflare Access** con codice via email. Per verificarle
  senza autenticarsi, si riproduce in locale lo stesso build della CI e si serve `out/`: è anche una
  verifica più forte, perché guarda l'artefatto che verrà pubblicato.

### I campi del form

Quattro domande e due caselle, come chiesto il 5 settembre: **nome completo**, **email**,
**tag del profilo**, **raccontaci qualcosa di te**, più maggiore età e consenso privacy. È sparito
il menu «Canale principale»: il canale si legge dal tag del profilo.

### Il pop-up di conferma

Alla conferma non si sostituisce più la carta del form: si apre un **pop-up** con la stessa lingua
della pagina — superficie di carta, filo teal in cima, titolo in due voci — che conferma la
registrazione, elenca i tre passi successivi e porta il bottone al brief.

`BRIEF_PDF_URL` in cima a `src/App.jsx` è **vuota di proposito**: finché lo è, il bottone resta
disattivato e dice «Il brief arriva via mail». Appena il PDF è su Drive, si incolla il link diretto
lì e il bottone diventa attivo, senza toccare altro.

Il pop-up si chiude con Esc, con il clic fuori o con «Chiudi»; la pagina sotto non scorre e il
focus entra nel pannello.

### L'informativa privacy dei creator

`public/privacy-creator.html` è una pagina a sé, con i token della landing e nessuna dipendenza dal
bundle. **Non è una copia di quella B2C**, perché il trattamento è diverso: niente dati sulla
salute, niente art. 9, niente pagamenti. Basi giuridiche dichiarate: misure precontrattuali
(art. 6(1)(b)) per valutare la candidatura e mandare brief e accesso, legittimo interesse
(art. 6(1)(f)) per tenere l'elenco, contratto e obblighi fiscali se si arriva al compenso.
Destinatari: Google Ireland (foglio e notifiche) e Vercel (hosting). Conservazione: 12 mesi per le
candidature non selezionate, durata del rapporto più 10 anni fiscali per quelle che diventano
collaborazioni. Dichiarato anche che non c'è nessuna decisione automatizzata.

I dati societari (Vivarium S.r.l., Via Montello 18, Bologna, `privacy@vivariumai.co`) vengono
dall'informativa pubblicata su `giada.care/privacy`: solo quelli, non il testo.

### Il funnel Meta del programma creator

Tutto sta nel Business Manager **Giada Care** (`1591541148643398`), account pubblicitario
**Giada Care** (`1324590466380787`). La separazione da Giada B2C non passa da un account nuovo:
passa dal **dataset**, ed è lì che è stata fatta.

| Pezzo | Stato | Riferimento |
| --- | --- | --- |
| Dataset dedicato «Giada Creator Program» | **collegato** all'account pubblicitario il 5 set 2026 | `1063455126601347` |
| Pixel sulla pagina, dietro consenso | **live**, riceve eventi | `src/pixel.js` |
| Evento `Lead` all'invio del modulo | **live**, con `eventID` per la deduplica | `trackLead()` |
| Dominio `vivariumai.co` nel BM | **verificato** il 5 set 2026, meta-tag nella home | `1796239328281347` |
| Conversione personalizzata «Candidatura creator» | **creata** il 5 set 2026 | `1433539225403667` |
| Nome della campagna | **`Creators B2B — …`**, prefisso obbligatorio | vedi sotto |

**Il collegamento fra dataset e account pubblicitario non c'era, e non si vedeva.** Il dataset
risultava creato e la pagina sparava eventi, ma in *Impostazioni business › Origini dei dati ›
Dataset e pixel › Risorse collegate* leggeva «Nessuna risorsa collegata». Il sintomo si vede solo
provando a creare la conversione personalizzata, che risponde `L'account pubblicitario
1324590466380787 non ha accesso al pixel 1063455126601347`. Chi ci ritorna: il collegamento è
una spunta in quella schermata, e va **verificato**, non dato per fatto perché il dataset esiste.

**Perché stesso account pubblicitario e non uno nuovo.** Un secondo account ricomincerebbe da zero
lo storico di spesa e l'anagrafica di pagamento, con il limite di spesa basso e la revisione stretta
che Meta riserva agli account nuovi, senza dare niente che il dataset separato non dia già: eventi,
pubblici e attribuzione sono già separati a livello di dataset, e il dominio a livello di AEM. La
fatturazione è comunque di Vivarium. Se un giorno il programma creator avrà una contabilità sua,
allora conviene l'account dedicato — e conviene aprirlo quando la spesa è ancora zero, perché lo
storico non si sposta.

**Perché anche il dominio conta, e non è un dettaglio burocratico.** L'Aggregated Event Measurement
di Meta classifica **otto eventi per dominio**. Con `giada.care` e `vivariumai.co` separati, le due
macchine non si rubano gli slot: gli eventi del programma creator non competono con Contact,
CompleteRegistration e AdStart di Giada. Su `vivariumai.co` gli eventi sono due, `PageView` e
`Lead`: sotto la soglia degli otto, quindi Meta li classifica da sé e non c'è niente da configurare
a mano.

**Perché `Lead` standard e non un evento inventato.** Un evento custom è ottimizzabile solo
attraverso una conversione personalizzata; `Lead` è un evento che i modelli di Meta conoscono già,
e la conversione personalizzata gli si mette sopra per dargli il nome leggibile nel reporting. Si
ottiene la separazione **e** il segnale, invece di sceglierne uno.

La regola della conversione, verificata sull'oggetto creato:

```
{"and":[{"event":{"eq":"Lead"}},{"url":{"i_contains":"giadacreators"}}]}
```

Le due condizioni sono ridondanti di proposito. L'evento da solo basterebbe, visto che il dataset
serve solo questa pagina; l'URL è la rete di sicurezza per il giorno in cui lo stesso dataset
finisse su una seconda pagina del sito.

**La campagna si chiama `Creators B2B — …`, e il prefisso è un meccanismo, non un'etichetta.**
La lettura KPI di Giada (`vivarium/kpi-g3-giada`) gira sullo stesso account pubblicitario e
sommerebbe questa spesa ai suoi totali. Il collettore ora esclude ogni campagna il cui nome inizia
per `Creators B2B` da tutti i suoi numeri — totali, giornaliero, mappa dei flow, coda TG Direct,
catalogo delle inserzioni — e dichiara a parte la spesa esclusa, invece di farla sparire. Il
filtro è in un punto solo, `fuori_perimetro()` in `raccolta_g3.py`. **Se la campagna viene
chiamata in un altro modo, l'esclusione non scatta e i CAC di Giada risultano peggiori di quello
che sono.**

**Quello che resta spento, di proposito.** La *corrispondenza avanzata automatica* sul dataset è
su **No**. Accesa manderebbe a Meta email e nome degli hashati mentre il creator li digita: alza
l'EMQ, ma è un trattamento che l'informativa attuale non copre. Accenderla è una scelta da fare
con l'informativa in mano, non un default.

**La CAPI dedicata è a un passo, e non richiede infrastruttura nuova.** La Web App di Apps Script
riceve già la candidatura server-side e conosce l'`eventId` che il browser ha usato: le manca solo
un token del dataset per mandare lo stesso evento con la Conversions API. Stesso `event_id` da due
strade = Meta deduplica invece di contare due volte, e l'EMQ sale.

### Il consenso, e perché adesso c'è

La pagina non aveva un banner e l'informativa non parlava di cookie. Mettere un pixel Meta su una
pagina che chiede nome, email e profilo social a un pubblico europeo, senza consenso e senza
dirlo, non era una scorciatoia accettabile: il pixel ora **non viene iniettato prima di un sì
esplicito**, la scelta vive in `localStorage` sotto `giada-creator-consent`, e chi rifiuta usa la
pagina identica, modulo compreso. L'informativa ha la sezione 04 dedicata: finalità, base
giuridica (consenso), contitolarità con Meta, come ripensarci.

## Cosa è cambiato il 6 settembre 2026

Sessione di allineamento dei termini commerciali, prima di scrivere il brief in PDF. Nessun
cambio visivo: la V8 resta com'è. Il confronto fra la pagina live, il `BRIEF-GIADA-CREATOR-PROGRAM-v2.md`
e la scheda KB `people/andrea/programma-creator-b2b.md` ha fatto emergere quattro termini che
dicevano tre cose diverse nei tre posti. Il committente li ha decisi uno per uno.

| Termine | Pagina prima | Brief v2 / KB prima | Deciso il 6 settembre |
| --- | --- | --- | --- |
| Compenso | «si parte da 50€» | €80, tetto assoluto | **€50 base a video prodotto**, più bonus negoziati caso per caso |
| Consegna | 1 video finito | 1 video + 3 hook, obbligatori | 1 video finito; **i tre hook sono un bonus**, non un deliverable di base |
| Uso paid | incluso, senza limite di tempo | incluso negli €80 | **incluso nei €50**, confermato |
| Trial | tre giorni | sette giorni | **sette giorni** |
| Risposta alla proposta | entro 72 ore | 48 ore | **72 ore** |

**Il compenso non è più un tetto: è un pavimento.** €50 è il minimo garantito per un video
prodotto; sopra ci sono leve di aumento che si negoziano nella singola trattativa — hook
aggiuntivi girati nella stessa sessione, pacchetto di più video, collaborazione mensile
continuativa. La FAQ in pagina già lo diceva così («possiamo valutare cifre più alte, più video o
un accordo legato ai risultati») e non è stata toccata.

**L'uso del video nelle campagne resta incluso nel compenso base.** Era l'unico punto che poteva
rompersi: la FAQ «Come usate il video?» dichiara già l'uso paid e organico senza limite di tempo,
quindi trasformarlo in un extra a pagamento avrebbe cambiato le condizioni a chi aveva già letto la
pagina e compilato il form. Confermato incluso.

**Conseguenza da tenere presente sul modello economico.** Con i tre hook come bonus e non come
consegna obbligatoria, il numero portante del brief v2 — 45 asset al mese a €26,7 l'uno — non
descrive più il programma: il costo per asset torna verso i €50 ogni volta che il bonus non viene
negoziato. Il brief v2 va rifatto su questa base, e finché non lo è resta il documento delle
intenzioni, non quello dei termini.

### Cosa è stato cambiato in pagina

Solo la durata del trial, da tre a sette giorni, in tutti e quattro i punti dove compariva:

| Dove | File |
| --- | --- |
| Passo 02 del processo | `processSteps`, `src/App.jsx` |
| FAQ «Cosa ricevo dopo il form?» | `faqs`, `src/App.jsx` |
| Lede della sezione «Prima la usi» | sezione `zone-trial`, `src/App.jsx` |
| Passo 02 del pop-up di conferma | `modal-steps`, `src/App.jsx` |

Le 72 ore erano già coerenti nei due punti in cui compaiono (passo 03 del processo e passo 03 del
pop-up) e non sono state toccate.

`npm run build` e `npm run test:sites` (4/4) passano.

### Chiuso, per decisione del committente

- **Il copy non è più provvisorio.** Il debito 6 («il copy è quello della V6, la riscrittura è la
  prossima sessione») è chiuso: il copy attuale è considerato a posto.
- **L'informativa privacy è confermata.** Il debito 2 non aspetta più una validazione legale.

### La CAPI server-side non si fa, per ora

Decisione presa con il motivo, perché è una scelta che si rivaluta e non un rinvio generico. Il
pixel con l'evento `Lead` basta a questo stadio:

- **La fonte di verità è il foglio, non Meta.** Ogni candidatura passa dalla Web App server-side:
  il conteggio completo esiste già, e la CAPI non lo migliorerebbe.
- **Sotto la soglia di apprendimento l'EMQ non compra niente.** Meta esce dalla fase di
  apprendimento intorno alle 50 conversioni a settimana; l'obiettivo G1 è ≥10 lead qualificati in
  due settimane. A quel volume l'algoritmo non ottimizza comunque.
- **Il recupero in gioco è di due o tre eventi**, cioè quello che ITP e i blocker mangiano su una
  decina di lead.

Si rivaluta quando la spesa è reale e il volume regge l'ottimizzazione: l'`eventId` è già
propagato dal browser alla Web App, quindi il lavoro residuo è un token del dataset.

**Da mettere in conto:** i numeri di Meta e quelli del foglio non combaceranno, ed è atteso. Le
candidature si contano sul foglio.

### Il brief in PDF — non ancora scritto, e cosa manca

Il PDF è il prossimo lavoro. Due cose restano aperte e vanno decise prima di scriverlo:

1. **La struttura del documento**, da approvare prima della prima riga.
2. **I «cinque hook che oggi funzionano meglio nell'account» non esistono come dato.** Il brief v2
   li chiede dentro il PDF, ma registra anche il debito: dei sei video prodotti non sono mai stati
   recuperati CPA, CTR e hook rate per asset. Quello che è misurato sta a livello di video intero,
   non di hook — Elena 61s è il winner provato (oltre 200.000 di reach UE cumulata, CAC €37),
   Maria ~2.800 di reach, i due video di Rosa confinati su `/fitness` con 819 e 1.597. Le opzioni
   sono tre: ricostruire cinque hook dagli script già girati dichiarandoli come struttura e non
   come performance, recuperare i dati veri da Meta prima di scrivere, oppure togliere gli hook dal
   PDF.

Materiale già individuato per il resto del documento: `analisi-creator-tipo-ugc-giada-2026-08-05.md`
per i riferimenti e gli anti-requisiti, `kb-sync/insight-paganti-annuali-2026-08-05.md` per le
storie utente da anonimizzare e i quattro cluster di paganti.

## Storia precedente

- **19 agosto 2026, V6 «Daylight»**: sei superfici alternate (navy, abisso, crema, lilla pallido,
  viola pieno, teal pieno), nove token semantici per superficie, quattro accenti con ruoli fissi,
  hero senza barra e nav fissa che compare solo dopo la hero. Mai committata: la V8 nasce dal suo
  working tree. Il patto a tre schede con `subgrid` e la hero a ventaglio vengono da qui.
- **18 agosto 2026**: la hero passa dall'immagine singola al ventaglio di cinque carte, reference
  «Pallet Ross». Cinque token di geometria su `.hero-deck`, tre carte sotto i 700px.
- **17 agosto 2026**: hero centrata e sezione delle condizioni rifatte sulle reference `hero-27` e
  `stats-1` di watermelon.sh. Il compenso esce dalle schede e resta nella pastiglia della hero.
- **16 agosto 2026, V5 «Backstage»**: tema unico navy, Bricolage Grotesque, fascia «il patto», una
  sola etichetta di CTA.

## Stato Git

Branch **`main`**, con la V8 committata e pushata: **la Production su Vercel è la V8**. Il branch
`redesign/v5-backstage` resta come traccia del lavoro del 16-17 agosto (ultimo commit `ea28a9f`).

Push diretto su `main` = deploy Production immediato. Per una revisione prima della pubblicazione
usare un branch e una PR, che genera un Preview Deployment.

Non versionati: `ref-veluno.png` e gli altri `ref-*.png`, coperti da `.gitignore` perché materiale
di terzi.

## Debiti aperti prima di mandare traffico

Quattro dei sei sono stati chiusi: uno il 5 settembre, tre per decisione del committente il 6.

1. ~~Il form è una demo e non invia dati.~~ **Chiuso il 5 settembre 2026**: le candidature vanno
   a una Web App di Apps Script che scrive nel foglio sul Drive di Andrea e manda la mail
   formattata. Dettagli sotto.
2. ~~Il link privacy punta all'informativa B2C.~~ **Chiuso il 5 settembre 2026**: informativa
   dedicata in `public/privacy-creator.html`, servita da `/privacy-creator.html`. **Confermata dal
   committente il 6 settembre 2026**: non aspetta più una validazione legale.
3. ~~**Dataset Meta separato** dal funnel B2C, con eventi distinti da `Contact`.~~ **Chiuso il
   5 settembre 2026**: dataset `1063455126601347` collegato all'account, dominio verificato,
   conversione «Candidatura creator» creata. Vedi «Il funnel Meta del programma creator».
4. **La pagina è pubblica e indicizzabile**: compenso e criteri di selezione sono leggibili da
   chiunque. **Resta aperto.**
5. ~~Compenso, perimetro diritti, privacy e criteri di ammissione restano provvisori.~~ **Chiuso
   il 6 settembre 2026**: €50 base a video prodotto con bonus negoziati caso per caso, uso paid e
   organico incluso, trial sette giorni, risposta in 72 ore. Vedi «Cosa è cambiato il 6 settembre
   2026».
6. ~~**Il copy è quello della V6**, considerato provvisorio dal committente.~~ **Chiuso il
   6 settembre 2026**: il copy attuale è considerato a posto, nessuna riscrittura prevista.

## Da dove ripartire

- Comandi: `npm run dev` · `npm run build` · `npm run test:sites`
- Leggere prima di un cambio visivo sostanziale: `DESIGN_SYSTEM.md`, `REFERENCE_MAP.md`,
  `design-qa.md`, `MONOREPO_HANDOFF.md`, più i guardrail in `CLAUDE.md`.
- **Il brief in PDF si prepara nella cartella `Brief-PDF/`**, non qui. Si entra dal suo
  `README.md`: dentro ci sono le decisioni prese (`00-DECISIONI.md`, la fonte), la struttura
  del documento, il briefing sul prodotto, l'anatomia dei sei video, tutto il mestiere delle
  sezioni 6 e 6-bis, i vincoli con le loro fonti, percorso e compenso, layout e voce, link e
  asset. Cosa manca per scriverlo sta in `Brief-PDF/DA-FARE.md`. **Il PDF non è ancora
  scritto, ed è voluto.**
- I termini commerciali decisi stanno in «Cosa è cambiato il 6 settembre 2026» e nella scheda KB
  `people/andrea/programma-creator-b2b.md`. **`BRIEF-GIADA-CREATOR-PROGRAM-v2.md` non è più la
  fonte dei termini**: il suo modello a €80 con i tre hook obbligatori è stato superato, e va
  rifatto sul compenso a pavimento.

### Dove si tocca cosa

| Cosa | Dove |
| --- | --- |
| I quattro colori e le loro miscele | `src/styles.css`, blocco `:root` |
| La catena dei gradienti di zona | `src/styles.css`, blocco `SUPERFICI`; le classi `zone zone--light\|dark zone-<nome>` stanno sul tag `<section>` in `src/App.jsx` |
| Lunghezza dei due passaggi di luminanza | `--fade` in `:root`, `--pad-extra` su `.zone-terms` e `.zone-finale` |
| Le tre voci tipografiche | `@font-face` in cima a `src/styles.css`, token `--font-display`, `--font-editorial`, `--font-body` |
| Ordine, copy e struttura della hero | `src/App.jsx`, blocco `<div className="hero-center">` |
| Carte del ventaglio: quante, rotazione, sollevamento, immagini | array `heroDeck` in cima a `src/App.jsx` |
| Geometria del ventaglio, etichette, sigillo | `src/styles.css`, sezione `HERO` |
| Toni delle schede del patto | campo `tone` in `termCards`, `src/App.jsx` |
| I tre fatti della rail di prova | array `proofFacts`, `src/App.jsx` |
| Scala di colore dei passi del processo | classi `process-row--s1…s4` in `src/styles.css` |
| Comparsa della nav fissa | `useEffect` con l'osservatore della hero in `src/App.jsx`, più `.site-nav` in `styles.css` |
| Comportamento a 1080 / 900 / 700 / 560 / 480 / 420px | `src/styles.css`, sezione `RESPONSIVE` |

Riempire uno slot del ventaglio: mettere il file in `public/assets/`, aggiungere `src` e `alt` alla
riga corrispondente di `heroDeck`. L'ordine dell'array è l'ordine da sinistra a destra; la terza
riga è la carta centrale, quella che resta visibile anche a tre carte.

Aggiungere una sezione: agganciarla alla catena, con il colore iniziale uguale al colore finale
della zona che la precede, e scegliere `zone--light` o `zone--dark`. Non scrivere colori dentro i
componenti e non introdurre un quinto colore. Rimisurare le quote di palette.

### Come si verifica

La verifica è fatta con **playwright-core più il Chrome for Testing** già presente in
`~/Library/Caches/ms-playwright`, guidato da due script usa e getta (non versionati):

- **overflow**: per ogni larghezza, confronto di `scrollWidth` con `clientWidth` e scansione dei
  bounding box per trovare gli elementi che superano il bordo (le rotazioni allargano il box, va
  misurato quello).
- **contrasto**: scansione di ogni nodo di testo. Il fondo non si legge dal `background-color`, che
  qui è trasparente: va **campionato dentro il gradiente alla quota dell'elemento**, interpolando
  fra gli stop. Attenzione, Chrome serializza `linear-gradient(180deg, …)` senza l'angolo.
- La stessa passata misura la tenuta della hero, il comportamento della nav a quote fisse e la
  quota di lilla come media pesata sull'altezza delle zone.

### Candidati per la prossima sessione

- **Il brief in PDF**: struttura da approvare, e la questione dei cinque hook da risolvere (vedi
  «Il brief in PDF — non ancora scritto, e cosa manca»).
- Caricare il PDF su Drive e incollare il link in `BRIEF_PDF_URL`, che attiva il bottone del pop-up.
- Rifare il modello economico del brief v2 sul compenso a pavimento.
- Creare la campagna Meta, con il prefisso `Creators B2B` nel nome. **È l'ultimo passo**, dopo il
  PDF.
- Guardare la V8 su browser reali: finora solo Chromium.
- Traduzione dei quattro angoli `?angolo=` in varianti di headline già testate su Meta.
