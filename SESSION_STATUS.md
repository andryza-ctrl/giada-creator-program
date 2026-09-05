# Session status — Giada Creator Program

Ultimo aggiornamento: **5 settembre 2026**. Questo file è il punto da cui ripartire.

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
| Dataset dedicato «Giada Creator Program» | **creato**, collegato all'account pubblicitario | `1063455126601347` |
| Pixel sulla pagina, dietro consenso | **live** | `src/pixel.js` |
| Evento `Lead` all'invio del modulo | **live**, con `eventID` per la deduplica | `trackLead()` |
| Dominio `vivariumai.co` nel BM | **verificato** il 5 settembre 2026, meta-tag nella home | `1796239328281347` |
| Conversione personalizzata «Candidatura creator» | **da creare** | vedi sotto |

**Perché stesso account pubblicitario e non uno nuovo.** Un secondo account ricomincerebbe da zero
l'apprendimento e l'anagrafica di pagamento senza dare niente che il dataset separato non dia già:
eventi, pubblici e attribuzione sono già separati a livello di dataset. Se un giorno serve separare
anche la fatturazione, allora sì.

**Perché anche il dominio conta, e non è un dettaglio burocratico.** L'Aggregated Event Measurement
di Meta classifica **otto eventi per dominio**. Con `giada.care` e `vivariumai.co` separati, le due
macchine non si rubano gli slot: gli eventi del programma creator non competono con Contact,
CompleteRegistration e AdStart di Giada.

**Perché `Lead` standard e non un evento inventato.** Un evento custom è ottimizzabile solo
attraverso una conversione personalizzata; `Lead` è un evento che i modelli di Meta conoscono già,
e la conversione personalizzata gli si mette sopra per dargli il nome leggibile nel reporting. Si
ottiene la separazione **e** il segnale, invece di sceglierne uno.

**La conversione personalizzata va creata quando il dataset ha ricevuto il primo evento**: finché
è a zero, nella regola Meta offre solo «Traffico di tutti gli URL» e non l'evento `Lead`. Un evento
di prova è già stato sparato. Poi: *Gestione eventi › Conversioni personalizzate › Crea*, origine
dati **Giada Creator Program**, evento **Lead**, regola **URL contiene `giadacreators`**, nome
«Candidatura creator».

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

### Accesso mancante per il montaggio su vivariumai.co

Aggiungo un dettaglio a quanto scritto sopra sul montaggio, perché indirizza chi ci riprova: il
dominio **esiste** come alias del vecchio deployment di produzione, ma non è governabile da questa
postazione. `vercel alias set` risponde
`You don't have access to the domain vivariumai.co under andryza-ctrls-projects`, e `vercel teams
ls` vede un solo team. Il dominio sta in un altro team Vercel — quello da cui il progetto è stato
trasferito. Anche Cloudflare, che sta davanti al dominio, non è raggiungibile: la dashboard non è
loggata e non esiste un token in locale.

Sbloccarlo richiede **una** di queste due cose, entrambe fuori dalla mia portata:

1. invitare questo account Vercel nel team che possiede `vivariumai.co` (oppure spostare lì il
   dominio), e allora il montaggio si chiude da qui in un deploy;
2. l'accesso a Cloudflare, e allora si può fare senza toccare il sito Next: un Worker sulla rotta
   `vivariumai.co/giadacreators*` che inoltra al deployment della landing.

Finché non si sblocca, la pagina è pubblica e funzionante su
`giada-creator-program.vercel.app/giadacreators`, e **la verifica del dominio in Meta resta in
attesa**: il meta-tag `facebook-domain-verification` con valore `neu6cqmoei357qfg0stsff6fmqqc0o` è
già dentro il `layout.tsx` del sito Vivarium ricostruito, e diventerà visibile appena quel build
servirà il dominio.

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

Nessuno chiuso in questa sessione: sono tutti fuori dal perimetro visivo.

1. ~~Il form è una demo e non invia dati.~~ **Chiuso il 5 settembre 2026**: le candidature vanno
   a una Web App di Apps Script che scrive nel foglio sul Drive di Andrea e manda la mail
   formattata. Dettagli sotto.
2. ~~Il link privacy punta all'informativa B2C.~~ **Chiuso il 5 settembre 2026**: informativa
   dedicata in `public/privacy-creator.html`, servita da `/privacy-creator.html`. **Va fatta
   validare da un legale prima di mandare traffico**: è scritta sui trattamenti reali, ma non è
   stata rivista da un avvocato.
3. **Dataset Meta separato** dal funnel B2C, con eventi distinti da `Contact`.
4. **La pagina è pubblica e indicizzabile**: compenso e criteri di selezione sono leggibili da
   chiunque.
5. Compenso, perimetro diritti, privacy e criteri di ammissione restano provvisori e attendono
   approvazione business e legale.
6. **Il copy è quello della V6**, considerato provvisorio dal committente: la riscrittura è la
   prossima sessione.

## Da dove ripartire

- Comandi: `npm run dev` · `npm run build` · `npm run test:sites`
- Leggere prima di un cambio visivo sostanziale: `DESIGN_SYSTEM.md`, `REFERENCE_MAP.md`,
  `design-qa.md`, `MONOREPO_HANDOFF.md`, più i guardrail in `CLAUDE.md`.
- I termini commerciali vanno tenuti allineati con `BRIEF-GIADA-CREATOR-PROGRAM-v2.md`.

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

- Riscrittura del copy, che il committente considera provvisorio.
- Chiudere il debito 1: endpoint reale del form e rimozione dello stato demo.
- Guardare la V8 su browser reali: finora solo Chromium.
- Traduzione dei quattro angoli `?angolo=` in varianti di headline già testate su Meta.
