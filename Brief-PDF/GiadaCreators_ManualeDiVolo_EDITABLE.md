# Giada Creators — Manuale di volo

> **Sorgente modificabile.** Contiene il copy, la gerarchia delle pagine, le indicazioni di
> layout e i riferimenti agli asset del PDF `GiadaCreators_ManualeDiVolo`. È il punto di
> partenza da modificare prima di una nuova impaginazione.

**Versione:** v3 — 7 settembre 2026 (18 pagine)
**Formato del PDF:** verticale 450×675 pt, pensato per lettura da telefono
**PDF impaginato:** [GiadaCreators_ManualeDiVolo.pdf](GiadaCreators_ManualeDiVolo.pdf)
**Script di impaginazione:** [`../output/pdf/source/build_manual.py`](../output/pdf/source/build_manual.py)
**Versione precedente dello script:** `../output/pdf/source/build_manual_v2_18pagine.py.bak`

## Cosa è cambiato dalla v2

La v3 esegue le **101 richieste** che Andrea ha segnato nella console di revisione
(83 blocchi + 18 note di pagina), il 7 settembre 2026.

- **Tono.** È la richiesta che torna in quaranta note: più caldo, più amichevole, meno
  saccente e meno impositivo. Giada si tratta come una persona, non come un software:
  l'etichetta «assistente AI» sparisce dal corpo del testo e resta dove è una regola per i
  video (pagina 14).
- **Trial da 7 a 14 giorni**, ovunque: copy, bottone, QR e link
  (`…?start=ad_creatorsb2b_t14d`). Stessa modifica sulla landing B2B.
- **Struttura.** «Il video» (ex pagina 06) si è spostata dopo gli esempi ed è entrata nella
  sezione *Scrivi l'idea* (ora pagina 08). Gli esempi salgono a 06 e 07, e **Rosa 2 ed
  Elena 1 si scambiano di posto**.
- **Pagina 05 (personas).** Riscritta perché si capisca dall'esterno: ogni situazione ha una
  frase che le somiglia e un suggerimento su come arrivarle. Niente più «Evita…»: sono
  spunti, non recinti.
- **Pagina 10 (hook).** Ogni forma ha ora una scena concreta e una riga che spiega perché
  funziona: prima erano appunti interni.
- **Pagina 09 (script).** Due esempi per ogni blocco, su due usi diversi di Giada, per
  lasciare libertà: «due strade, non due modelli».
- **Tolto:** il disclaimer medico dalla 03 (resta nei limiti, pagina 14), la nota «cartella
  materiali» dalle pagine esempi, «prova in muto» dalla 12, l'avviso «non girare prima
  dell'ok» dalla 16, il riquadro fattura/hook dalla 17 (spostato nel testo), la mail
  duplicata sulla 18, il titolo e il footer della copertina.
- **Pagina 17:** non si chiama più «I soldi».
- **Layout:** passata su tutte e 18 le pagine — gerarchie, spaziature e posizionamenti.
  Zero avvisi dal controllo di impaginazione (`layout-checks.json`).

## Regole bloccanti

1. **Non inventare numeri.** Se manca un dato, togli la frase.
2. **La compliance si può accorciare, non ammorbidire.** Nessun divieto si elimina. La
   trasparenza sull'AI **resta**, riscritta in modo caldo: «Si capisce che Giada è un'AI»
   (pagina 14). È l'obbligo dell'art. 50 AI Act tradotto in una regola editoriale: il
   creator lo dice con parole sue, ma deve essere chiaro.
3. **I verbatim restano riscritti.** Le frasi delle personas non sono citazioni di utenti.
4. **L'URL si copia e incolla esatto:** `https://t.me/giadacare_bot?start=ad_creatorsb2b_t14d`.
   Il token `_t14d` è quello che il bot legge per accorciare la prova
   (`parseCampaignTrialDays`, cap a 30 giorni).
5. **Il prezzo di Giada non entra.** Si parla di prova gratuita, mai del prezzo dopo.
6. **Nessuna frase promette una mail al creator.** Il percorso passa dalla cartella Drive.
7. **Italiano, prima persona, registro amichevole**, senza rivolgersi a un genere specifico.
8. **Andrea non è fondatore di Vivarium.** Si occupa di marketing e contenuti.

Il controllo automatico di queste regole sta in
[`../output/pdf/source/check_copy.py`](../output/pdf/source/check_copy.py): si lancia dopo
la build e verifica la sostanza di ogni divieto, non la vecchia frase esatta.

## Sistema visivo

- **Superfici:** carta `#fff9ef`, periwinkle `#c6d0f6`, navy `#203260`, teal `#10b8c0`,
  blush `#ffb8c7`, giallo `#ffe074`.
- **Tipografia:** Bricolage Grotesque display, Geist testo/UI, Arapey Italic accenti.
- **Segni:** bordi navy, ombre nette, sticker, numeri grandi, vignette.
- **Avatar:** Giada resta riconoscibile (volto, occhi, bob castano ramato, T-shirt navy).
  Cambiano posa e scena, non l'identità.
- **Asset in uso:** `giada-welcome-scene.png` (01), `giada-director-scene.png` (18),
  `rosa-2-0.jpg`, `elena-2-0.jpg`, `maria-1-0.jpg`, `maria-2-1.jpg` (06),
  `rosa-1-0.jpg`, `elena-1-0.jpg` (07).
- **Asset da produrre:** `giada-selfie-scene.png` per la copertina — Giada che si registra
  un video selfie col telefono. Il prompt pronto è in
  `../output/pdf/assets/giada-selfie-scene.PROMPT.txt`; appena il file esiste nella cartella
  `assets`, `build_manual.py` lo usa da solo al posto di `giada-welcome-scene.png`.

---

<!-- PAGINA 01 -->
## 01 — Copertina

<!-- LAYOUT: hero, titolo oversize, pannello periwinkle con avatar, sticker. Niente footer. -->

**Eyebrow** `giada / CREATORS` · sticker `TUTTO PARTE DA UN'IDEA TUA`
**Titolo** # Facciamo un video insieme.
**Promessa** La tua giornata, le tue parole, e Giada che risponde.
**Fumetto** _Ciao! Sono Giada. Com'è andata oggi?_
**Sticker** `CIAO!` · `PROVA. GIOCA. RACCONTA.`

---

<!-- PAGINA 02 -->
## 02 — Ciao

<!-- LAYOUT: saluto grande, tre paragrafi, mappa cliccabile a quattro voci. -->

### Ciao, sono Andrea.

In Vivarium mi occupo di marketing e contenuti. **Giada** la conosci fra due pagine: vive su
Telegram e risponde davvero, a qualsiasi ora. Questo programma nasce da una cosa semplice: i
video migliori li fa chi la usa e ha qualcosa da dire.

**Non è un contest e non è UGC a cottimo.** Un video alla volta, con calma. Io ti porto
obiettivi, riferimenti e i pochi limiti che abbiamo; l'idea, le parole e il taglio restano
tuoi.

Le idee le leggo io, una per una. Qui dentro c'è quello che darei a me stesso per cominciare.

### La tua mappa

- **03** — Conosci e prova Giada
- **05** — Trova la tua storia
- **06** — Esempi e come si gira
- **13** — Regole e consegna

Sticker: `18 PAGINE. DIECI MINUTI.`

---

<!-- PAGINA 03 -->
## 03 — Conosci Giada

# Un'amica in chat. Sempre a un messaggio di distanza.

Vive su **Telegram**. Le scrivi, le mandi la foto del piatto o un vocale mentre cammini. Le
puoi raccontare anche acqua, movimento, sonno e peso: quello che le dici, se lo tiene.

- **Capire il pasto** — Le mandi la foto e ti dice cosa c'è dentro: calorie, macro e se va
  d'accordo con i tuoi obiettivi.
- **Decidere cosa mangiare** — «Ho questo in frigo, che faccio?» Lei tira fuori un'idea, non
  una lezione di cucina.
- **Ricordarsi di te** — Non riparte da zero ogni volta: sa com'è andata la settimana e ti
  aiuta a riprendere dopo uno sgarro, senza prediche.
- **Uscire senza pensieri** — Al ristorante le mandi il menù e sceglie con te. E se ti muovi,
  tiene il conto anche di quello.

---

<!-- PAGINA 04 -->
## 04 — Prova Giada

<!-- CHECK: non abbreviare l'URL, non sostituirlo con una landing. QR e bottone puntano allo stesso link. -->

# Prima la chat. Poi la scintilla.

Nei tuoi **14 giorni di prova** usala davvero: niente compiti da consegnare, scrivile come
scriveresti a un'amica. La tua chat vera è il materiale del video.

### Quattro modi per rompere il ghiaccio

1. «Cosa preparo con quello che ho in frigo?»
2. «Stasera mangio qui: mi dai un'idea dal menù?»
3. «Oggi è andata così. Come riprendo il filo?»
4. Una foto del piatto, senza scrivere niente.

**Bottone + QR** `Inizia i tuoi 14 giorni` → `https://t.me/giadacare_bot?start=ad_creatorsb2b_t14d`
**Nota** Prenditi i primi due giorni per giocarci: le idee arrivano da lì.

---

<!-- PAGINA 05 -->
## 05 — A chi parli

# A chi stai parlando? Scegline una sola.

Queste sono le persone che scrivono a Giada ogni giorno. Non sono caselle: servono a darti un
volto preciso in testa mentre scrivi.

- **01 La testa già piena** — «Non ho voglia di pensarci anche a questo.»
  _Le arrivi se le mostri che bastano dieci secondi e una foto._
- **02 Il piano c'è, la costanza no** — «So cosa fare. Il difficile è farlo ogni giorno.»
  _Le arrivi se fai vedere una giornata storta che si raddrizza._
- **03 Vuole una risposta, non una lezione** — «Chiedo una cosa e mi ritrovo un trattato.»
  _Le arrivi se mostri Giada che risponde corta e chiara._
- **04 I passi sì, il pranzo no** — «Misuro tutto, tranne quello che mangio.»
  _Le arrivi se colleghi il movimento a quello che c'è nel piatto._
- **05 Il solito «da lunedì»** — «Non voglio ricominciare da capo un'altra volta.»
  _Le arrivi se il tuo video non parte da una colpa._

Nota: Sono spunti, non recinti: scegli quella che conosci meglio e parla solo a lei.

---

<!-- PAGINA 06 -->
## 06 — Esempi / quattro video

# Cosa abbiamo già fatto.

Sei video girati con altre creator. Non devi rifarli: guardali per capire **cosa ha
funzionato** e prendi l'idea che ti serve.

- **ROSA 2 · 35,4 s — Poche scene, tanta luce.** Ha funzionato perché in trenta secondi si
  capisce tutto: colazione e chat grande.
- **ELENA 2 · 78,1 s — Un elenco che tiene incollati.** Ha funzionato perché dice cosa farà e
  poi lo fa: sai sempre cosa sta per succedere.
- **MARIA 1 · 55,1 s — Un dubbio vero, detto a voce.** Ha funzionato perché la domanda se la
  fanno tutti, e la risposta arriva in scena.
- **MARIA 2 · 55,9 s — Si legge la conversazione.** Ha funzionato perché la chat riempie lo
  schermo: Giada si capisce senza spiegarla.

Nota: Ispirazione, mai copia: prendi l'idea, non le stesse inquadrature.

---

<!-- PAGINA 07 -->
## 07 — Esempi / altri due

# Altri due, girati in modo diverso.

Rosa porta la giornata dentro il video.

- **ROSA 1 · 65,2 s — Una giornata raccontata.** Allenamento, piatti, luoghi veri: Giada entra
  nella quotidianità senza essere annunciata.
  _Ha funzionato: la logica del vlog: scegli un momento vicino a chi ti guarda e falla entrare lì._
- **ELENA 1 · 61,5 s — Una domanda in mano.** Tiene il telefono con la domanda in vista e la
  legge ad alta voce, mentre cammina.
  _Ha funzionato: il gesto e le parole dicono la stessa cosa: si capisce anche senza audio._

Nota: Anche qui: ispirazione, mai copia. Il taglio è tuo.

---

<!-- PAGINA 08 -->
## 08 — Scrivi l'idea / cosa deve fare il video

# Cosa deve fare il tuo video.

Prima esce sul **tuo profilo**, come reel o TikTok. Se funziona, lo portiamo anche in
campagna. Quindi gira quello che pubblicheresti comunque.

1. **Ferma lo scroll** — Primi tre secondi: una situazione precisa, un gesto, una domanda.
2. **Fai vedere Giada** — Falla entrare almeno una volta. Ingrandisci la chat: chi guarda deve
   poterla leggere.
3. **Lascia un invito** — Uno solo, detto con calma: «Provala gratis dal link».

**Perché uno resta fino alla fine:** `SI RICONOSCE` · `VUOLE SAPERE COM'È FINITA` ·
`SE LO SALVA` · `PIACE COME LO RACCONTI TU`

---

<!-- PAGINA 09 -->
## 09 — Scrivi l'idea / lo script

# Uno script che respira.

**Inizio, centro, fine.** In 30-90 secondi apri una domanda, fai arrivare la risposta e chiudi
il cerchio. Scrivi a blocchi: per ogni frase scegli anche **cosa si vede**.

`01 Apri una domanda` · `02 Fai arrivare la risposta` · `03 Chiudi il cerchio`

| blocco | esempio A | esempio B |
| --- | --- | --- |
| HOOK | «Stasera ceno fuori: il menù lo apro prima.» | «Frigo mezzo vuoto e zero idee.» |
| COSTRUZIONE | «Mando il menù a Giada e le chiedo cosa prendo.» | «Le mando la foto di quello che c'è dentro.» |
| PAYOFF | Leggi ad alta voce la sua risposta sul menù. | Fai la ricetta che ti ha tirato fuori. |
| CTA | «La provi gratis dal link.» | «Se ti va, provala anche tu.» |

Nota: **Due strade, non due modelli.** La terza, la tua, è la migliore.

---

<!-- PAGINA 10 -->
## 10 — Il primo fotogramma

# Fermare lo scroll. Senza urlare.

Otto forme che funzionano. Una sola per video: scrivine tre su un foglio e tieni quella che
regge.

1. **La domanda sul piatto** — Inquadri il pranzo dall'alto: «Secondo te cosa manca?»
   _Chi guarda risponde nella testa, e resta._
2. **L'oggetto fuori posto** — Il menù di un ristorante appoggiato tra i pesi in palestra.
   _Una cosa che non c'entra incuriosisce e apre la storia._
3. **Due cose a confronto** — Da una parte i passi contati, dall'altra i pasti mai raccontati.
   _Il confronto è tra abitudini, mai tra corpi._
4. **La negazione** — «Oggi non conto niente a mente.»
   _Dire cosa non farai incuriosisce: poi mostri subito il gesto al posto suo._
5. **Il quiz** — «Secondo te cosa le ho chiesto?», e si vede solo la risposta.
   _Chi guarda vuole scoprire la domanda._
6. **La scena che conosci** — Frigo aperto, sguardo dentro: «E adesso?»
   _Nessuna presentazione: si riconosce da sola._
7. **La parola gigante** — «CENA?» scritto grande sopra una scena vera.
   _Una parola sola tiene lo sguardo, poi arriva la prova._
8. **L'immagine che spiega** — La lista delle cose da fare che si allunga da sola.
   _Rende visibile un peso che di solito si racconta a parole._

---

<!-- PAGINA 11 -->
## 11 — Formato e montaggio

# Il tuo taglio. Tre passate.

Volto e voce, voice-over, mani, cibo, schermo registrato: **il formato lo scegli tu.**

Tagli che funzionano: `Chat protagonista` · `Problema, poi soluzione` · `Titolo da notizia` ·
`Risposta a un commento` · `Esperienza personale` · `Giornata / backstage`

1. **Niente vuoti** — Dove non parli, di solito non serve: lascia respirare la voce e taglia
   il resto.
2. **Fidati della noia** — Se ti annoi mentre lo riguardi, quel pezzo lo sente anche chi
   guarda: accorcia lì.
3. **Cambia ogni 3-5 secondi** — Uno zoom, un cambio di inquadratura, la chat che compare:
   sono questi a tenere su lo sguardo.

Nota: Riguardalo una volta col telefono in mano, come lo guarderebbe lei.

---

<!-- PAGINA 12 -->
## 12 — Audio e sottotitoli

# Prima si sente. Poi si legge.

**L'audio conta più dell'immagine.** Registra vicino al microfono, in una stanza che non
rimbomba, e riascoltati prima di montare: se la voce è pulita, il resto si perdona.

### La musica, libera davvero

Meglio evitare gli audio di tendenza presi dai social: la licenza deve coprire anche la
pubblicità e tutti i canali. Una libreria free va benissimo.

### Sottotitoli sempre. Lo stile è tuo.

L'unica cosa che ti chiediamo: **due o tre parole per volta**, anche una sola. Servono a dare
ritmo, non a trascrivere. Font, colore e animazione li scegli tu.

Demo: `LA TUA` · `CHAT` · `SI LEGGE` — tre battute, tre respiri.
Nota: Se il tuo montaggio le fa apparire una parola per volta, ancora meglio.

---

<!-- PAGINA 13 -->
## 13 — Le regole tecniche

# La scheda da tenere a vista.

`9:16 VERTICALE` · `30-90 SECONDI`

| voce | valore |
| --- | --- |
| Lingua | Italiano, il tuo. |
| Strumenti | Quelli che usi già, per girare e montare. |
| Audio | La voce prima di tutto. |
| Sottotitoli | Sempre, con lo stile che preferisci. |
| Giada | Almeno un momento, con la chat leggibile. |
| File | Finito, senza watermark dell'app di montaggio. |
| Invio | Drive o WeTransfer. Il grezzo tienilo tu. |
| Tempi | 7-10 giorni dalla call, senza corse. |
| Revisione | Al massimo una. Se funziona, nessuna. |

Nota: La prima volta è un video solo. Il resto lo decidiamo insieme.

---

<!-- PAGINA 14 -->
## 14 — Cosa non si può dire

<!-- CHECK: nessun divieto si elimina. Si può accorciare, non ammorbidire. -->

# Creatività sì. Promesse magiche no.

- **Niente chili, taglie o percentuali.** Non promettiamo risultati sul corpo. I numeri veri
  del percorso, quelli sì: giorni, pasti raccontati, abitudini.
- **Niente primi piani su una parte del corpo.** Non pizzicare il grasso, non usare il corpo
  come il problema da correggere.
- **Nessuno deve sentirsi sbagliato.** Vale anche per te: «ero uno schifo» non ci va, nemmeno
  detto ridendo.
- **Mai «sei sola».** La solitudine non si usa come leva. Fai vedere che Giada risponde: basta
  quello.
- **Si capisce che Giada è un'AI.** Dillo con le tue parole, dove ti viene meglio: chi guarda
  deve capire che è un'AI su Telegram, non una persona in carne e ossa.
- **Giada non è un medico né una nutrizionista.** Non fa diagnosi, non cura, non scrive diete,
  e le sue stime sono indicative. Niente condizioni cliniche nel video.

Nota: Il resto è tuo: racconta quello che hai provato davvero.

---

<!-- PAGINA 15 -->
## 15 — Cosa non si mostra

# Un ultimo sguardo prima di esportare.

1. **Solo la chat con Giada** — Prima di registrare lo schermo dai un'occhiata: niente lista
   chat, nomi o notifiche di altri.
2. **Nessun altro marchio in campo** — Maglietta, confezioni, sfondo. E niente watermark delle
   app di montaggio.
3. **Niente minori** — Se nel video c'è un altro adulto serve il suo ok, e te ne prendi la
   responsabilità.
4. **Niente audio dei trend** — Prendi la musica da una libreria libera, con licenza valida
   anche per la pubblicità.

**E l'ordine, che aiuta tutti:** prima l'idea, poi ci sentiamo, poi si gira.

---

<!-- PAGINA 16 -->
## 16 — Come si va avanti

# La tua idea arriva qui.

**andrea@vivariumai.co** (in evidenza, bolla teal cliccabile)

Mandami **lo script e due indicazioni visive** in un documento, oppure un **video-selfie**:
dimmi a chi parli, che scena hai in testa, come apri e cosa si vede di Giada. Con calma, non
c'è una scadenza.

1. **Ti rispondo entro 72 ore** — Un riscontro vero: cosa mi piace, cosa cambierei, e se serve
   ci facciamo una call breve.
2. **Se l'idea ci piace, ci parliamo** — Mezz'ora per allineare taglio, compenso e dettagli.
   Poi hai mano libera.
3. **Giri, e poi mi mandi il video** — Finito entro 7-10 giorni dalla call, via Drive o
   WeTransfer. Al massimo una revisione.

---

<!-- PAGINA 17 -->
## 17 — Il compenso

# Facciamo i conti insieme.

**da 50€** per ogni video selezionato — `È UN PAVIMENTO, NON UN TETTO.`

**Nessuna esclusiva:** continui a lavorare con chi vuoi, prima e dopo.

### Cosa può far salire la cifra

Un hook in più, un pacchetto di video, una collaborazione che va avanti nei mesi. E se hai
numeri tuoi da mostrare, possiamo ragionare anche sui risultati.

**Ne parliamo in call, prima che tu giri.** Due hook vogliono dire due video finiti, con
visivi diversi. Fattura o ritenuta d'acconto: vediamo lì cosa è più comodo per te.

---

<!-- PAGINA 18 -->
## 18 — Ora tocca a te

# Ultimo check. Poi tocca a te.

- Parlo a una persona sola, e si sente.
- L'apertura e il finale si tengono insieme.
- Giada si vede e la chat si legge.
- Si capisce che è un'AI.
- Voce pulita, sottotitoli corti.
- Nessuna promessa sul corpo.

**Bottone** `Apri la tua prova da 14 giorni` → `https://t.me/giadacare_bot?start=ad_creatorsb2b_t14d`

Provala per due settimane. Quando ti viene in mente quella cosa che racconteresti a un'amica,
scrivimi.

Sticker: `CI VEDIAMO NEL TUO VIDEO.`
