# Giada Creators — Manuale di volo

> **Sorgente modificabile.** Copy, gerarchia delle pagine e riferimenti agli asset del PDF
> `GiadaCreators_ManualeDiVolo`. Si modifica qui prima di rigenerare.

**Versione:** v4 — 7 settembre 2026 (16 pagine)
**Formato del PDF:** verticale 450×675 pt, pensato per lettura da telefono
**PDF impaginato:** [GiadaCreators_ManualeDiVolo.pdf](GiadaCreators_ManualeDiVolo.pdf)
**Script di impaginazione:** [`../output/pdf/source/build_manual.py`](../output/pdf/source/build_manual.py)
**Versioni precedenti dello script:** `build_manual_v3_18pagine.py.bak`, `build_manual_v2_18pagine.py.bak`,
`build_manual_v1_26pagine.py.bak`

## Cosa è cambiato dalla v3

La v4 esegue le **45 richieste** del secondo giro di revisione (28 blocchi, 16 note di pagina,
una nota generale), 7 settembre 2026.

- **Copertina:** c'è l'immagine nuova, Giada che si registra col telefono
  (`giada-selfie-scene.png`, ritaglio con trasparenza vera sul pannello periwinkle). Via lo
  sticker «CIAO!».
- **Da 18 a 16 pagine.** «Cosa non si mostra» era ridondante: i suoi quattro punti sono
  scesi in fondo a pagina 14, in un riquadro. «Ultimo check» era superflua: la CTA completa
  è passata sulla pagina del compenso, che adesso chiude il manuale.
- **Fatto corretto a pagina 08:** il video esce sul profilo di Giada e nelle sue campagne;
  sul profilo del creator solo se si pubblica in collaborazione. Prima diceva il contrario.
- **Pagina 09:** non serve per forza aprire con una domanda — serve prendere l'attenzione e
  tenerla alta. Titolo, intro e i tre chip riscritti di conseguenza, e i due esempi sono
  dichiarati come esempi, non modelli.
- **Pagina 05:** intro e cinque personas accorciate, con l'italiano sistemato («Le arrivi
  se…» era sbagliato) e un suggerimento all'imperativo, più caldo.
- **Icone di pagina 03:** ridisegnate per stare dentro il riquadro (il pittogramma adesso
  scala con la dimensione del riquadro, prima usciva).
- **Pagina 04:** card bianche con il numero colorato, invece di quattro fondi diversi sul
  periwinkle. Lo spunto 4 dice la cosa giusta: foto **o vocale** per raccontare il piatto.
- **Tolti:** la nota «ispirazione mai copia» da pagina 06 (resta su 07), i riquadri demo dei
  sottotitoli e la loro nota, la nota di pagina 13.
- **Tono:** presentazione senza la parte su Giada, «UGC a cottimo» via, divieto sull'aspetto
  detto in modo meno diretto, intro e step 01 di «Come si va avanti» più aperti, riquadro
  del compenso ridotto a una riga.
- **Layout:** passata su tutte le pagine, nessun testo sopra altro testo. Zero avvisi.

## Regole bloccanti

1. **Non inventare numeri.** Se manca un dato, togli la frase.
2. **La compliance si può accorciare, non ammorbidire.** Nessun divieto si elimina: i quattro
   punti di «cosa non si mostra» sono dentro pagina 14, non spariti. La trasparenza sull'AI
   resta («Si capisce che Giada è un'AI»): è l'art. 50 AI Act in forma editoriale.
3. **I verbatim restano riscritti.** Le frasi delle personas non sono citazioni di utenti.
4. **L'URL si copia e incolla esatto:** `https://t.me/giadacare_bot?start=ad_creatorsb2b_t14d`.
5. **Il prezzo di Giada non entra.** Si parla di prova gratuita, mai del prezzo dopo.
6. **Nessuna frase promette una mail al creator.**
7. **Italiano, prima persona, registro amichevole**, senza rivolgersi a un genere specifico.
8. **Andrea non è fondatore di Vivarium.** Si occupa di marketing e contenuti.

Il controllo automatico sta in [`../output/pdf/source/check_copy.py`](../output/pdf/source/check_copy.py):
24 test sulla sostanza dei divieti, non sulla frase esatta.

## Sistema visivo

- **Superfici:** carta `#fff9ef`, periwinkle `#c6d0f6`, navy `#203260`, teal `#10b8c0`,
  blush `#ffb8c7`, giallo `#ffe074`.
- **Tipografia:** Bricolage Grotesque display, Geist testo/UI, Arapey Italic accenti.
- **Asset in uso:** `giada-selfie-scene.png` (01), `giada-director-scene.png` (16),
  `rosa-2-0.jpg`, `elena-2-0.jpg`, `maria-1-0.jpg`, `maria-2-1.jpg` (06),
  `rosa-1-0.jpg`, `elena-1-0.jpg` (07).

## Le 16 pagine

I blocchi qui sotto sono la stessa lista che alimenta la console di revisione
(`revisione/data.py`): se cambi il copy, cambialo in tutti e due i posti.

---

<!-- PAGINA 01 -->
## 01 — Copertina

# Facciamo un video insieme.

**Titolo** — Facciamo un video insieme.
**Promessa** — La tua giornata, le tue parole, e Giada che risponde.
**Fumetto** — Ciao! Sono Giada. Com’è andata oggi?
**Sticker** — TUTTO PARTE DA UN’IDEA TUA · PROVA. GIOCA. RACCONTA.
**Immagine** — Giada che si registra un video selfie col telefono, ritagliata sul pannello periwinkle.

---

<!-- PAGINA 02 -->
## 02 — Ciao

# Ciao, sono Andrea.

**Titolo** — Ciao, sono Andrea.
**Presentazione** — In Vivarium mi occupo di marketing e contenuti, e questo programma nasce da una cosa semplice: i video migliori li fa chi ha qualcosa da dire.
**Patto** — Non è un contest. Un video alla volta, con calma. Io ti porto obiettivi, riferimenti e i pochi limiti che abbiamo; l’idea, le parole e il taglio restano tuoi.
**Chiusa** — Le idee le leggo io, una per una. Qui dentro c’è quello che darei a me stesso per cominciare.
**Mappa** — La tua mappa — 03 Conosci e prova Giada · 05 Trova la tua storia · 06 Esempi e come si gira · 13 Regole e consegna
**Sticker** — 16 PAGINE. DIECI MINUTI.

---

<!-- PAGINA 03 -->
## 03 — Conosci Giada

# Un’amica in chat. Sempre a un messaggio di distanza.

**Titolo** — Un’amica in chat. Sempre a un messaggio di distanza.
**Intro** — Vive su Telegram. Le scrivi, le mandi la foto del piatto o un vocale mentre cammini. Le puoi raccontare anche acqua, movimento, sonno e peso: quello che le dici, se lo tiene.
**Funzione 1** — Capire il pasto — Le mandi la foto e ti dice cosa c’è dentro: calorie, macro e se va d’accordo con i tuoi obiettivi.
**Funzione 2** — Decidere cosa mangiare — «Ho questo in frigo, che faccio?» Lei tira fuori un’idea, non una lezione di cucina.
**Funzione 3** — Ricordarsi di te — Non riparte da zero ogni volta: sa com’è andata la settimana e ti aiuta a riprendere dopo uno sgarro, senza prediche.
**Funzione 4** — Uscire senza pensieri — Al ristorante le mandi il menù e sceglie con te. E se ti muovi, tiene il conto anche di quello.

---

<!-- PAGINA 04 -->
## 04 — Prova Giada

# Prima la chat. Poi la scintilla.

**Titolo** — Prima la chat. Poi la scintilla.
**Intro** — Nei tuoi 14 giorni di prova usala davvero: niente compiti da consegnare, scrivile come scriveresti a un’amica. La tua chat vera è il materiale del video.
**Sezione** — Quattro modi per rompere il ghiaccio
**Spunto 1** — «Cosa preparo con quello che ho in frigo?»
**Spunto 2** — «Stasera mangio qui: mi dai un’idea dal menù?»
**Spunto 3** — «Oggi è andata così. Come riprendo il filo?»
**Spunto 4** — La foto del piatto, o un vocale per raccontarglielo.
**[VINCOLO] CTA** — Inizia i tuoi 14 giorni → https://t.me/giadacare_bot?start=ad_creatorsb2b_t14d (bottone + QR, stesso link)
**Nota** — Prenditi i primi due giorni per giocarci: le idee arrivano da lì.

---

<!-- PAGINA 05 -->
## 05 — A chi parli

# A chi stai parlando? Scegline una sola.

**Titolo** — A chi stai parlando? Scegline una sola.
**Intro** — Sono le persone che scrivono a Giada ogni giorno: servono a darti un volto in testa mentre scrivi.
**Persona 01** — La testa già piena — «Non ho voglia di pensarci anche a questo.» Falle vedere che bastano dieci secondi e una foto.
**Persona 02** — Il piano c’è, la costanza no — «So cosa fare. Il difficile è farlo ogni giorno.» Raccontale una giornata storta che si raddrizza.
**Persona 03** — Vuole una risposta, non una lezione — «Chiedo una cosa e mi arriva un trattato.» Mostrale Giada che risponde corta e chiara.
**Persona 04** — I passi sì, il pranzo no — «Misuro tutto, tranne quello che mangio.» Collega il movimento a quello che c’è nel piatto.
**Persona 05** — Il solito «da lunedì» — «Non voglio ricominciare un’altra volta.» Parti da qualcosa che funziona, non da una colpa.
**Nota** — Sono spunti, non recinti: scegli quella che conosci meglio e parla solo a lei.

---

<!-- PAGINA 06 -->
## 06 — Esempi

# Cosa abbiamo già fatto.

**Titolo** — Cosa abbiamo già fatto.
**Intro** — Sei video girati con altre creator. Non devi rifarli: guardali per capire cosa ha funzionato e prendi l’idea che ti serve.
**Card 1** — ROSA 2 · 35,4 s — Poche scene, tanta luce. Ha funzionato perché in trenta secondi si capisce tutto.
**Card 2** — ELENA 2 · 78,1 s — Un elenco che tiene incollati. Ha funzionato perché dice cosa farà, e poi lo fa.
**Card 3** — MARIA 1 · 55,1 s — Un dubbio vero, detto a voce. Ha funzionato perché la domanda se la fanno tutti, e la risposta arriva in scena.
**Card 4** — MARIA 2 · 55,9 s — Si legge la conversazione. Ha funzionato perché la chat riempie lo schermo: Giada si capisce senza spiegarla.

---

<!-- PAGINA 07 -->
## 07 — Esempi

# Altri due, girati in modo diverso.

**Titolo** — Altri due, girati in modo diverso.
**Intro** — Rosa porta la giornata dentro il video.
**Card 1** — ROSA 1 · 65,2 s — Una giornata raccontata. Allenamento, piatti, luoghi veri: Giada entra nella quotidianità senza essere annunciata. Ha funzionato: la logica del vlog, scegli un momento vicino a chi ti guarda e falla entrare lì.
**Card 2** — ELENA 1 · 61,5 s — Una domanda in mano. Tiene il telefono con la domanda in vista e la legge ad alta voce, mentre cammina. Ha funzionato: il gesto e le parole dicono la stessa cosa, si capisce anche senza audio.
**Nota** — Ispirazione, mai copia: prendi l’idea, non le stesse inquadrature.

---

<!-- PAGINA 08 -->
## 08 — Scrivi l’idea

# Cosa deve fare il tuo video.

**Titolo** — Cosa deve fare il tuo video.
**Intro** — Il video esce sul profilo di Giada e nelle sue campagne. Se ti va, lo pubblichiamo in collaborazione con te: in quel caso esce anche sul tuo profilo.
**Mossa 1** — Ferma lo scroll — Primi tre secondi: una situazione precisa, un gesto, una domanda.
**Mossa 2** — Fai vedere Giada — Falla entrare almeno una volta. Ingrandisci la chat: chi guarda deve poterla leggere.
**Mossa 3** — Lascia un invito — Uno solo, detto con calma: «Provala gratis dal link».
**Riquadro** — Perché uno resta fino alla fine: SI RICONOSCE · VUOLE SAPERE COM’È FINITA · SE LO SALVA · PIACE COME LO RACCONTI TU

---

<!-- PAGINA 09 -->
## 09 — Scrivi l’idea

# Uno script che ti somiglia.

**Titolo** — Uno script che ti somiglia.
**Intro** — Inizio, centro, fine. In 30-90 secondi prendi l’attenzione, la tieni alta e chiudi il cerchio. Scrivi a blocchi: per ogni frase scegli anche cosa si vede.
**Chip** — 01 Prendi l’attenzione · 02 Tienila alta · 03 Chiudi il cerchio
**Script HOOK** — A: «Stasera ceno fuori: il menù lo apro prima.» — B: «Frigo mezzo vuoto e zero idee.»
**Script COSTRUZIONE** — A: «Mando il menù a Giada e le chiedo cosa prendo.» — B: «Le mando la foto di quello che c’è dentro.»
**Script PAYOFF** — A: Leggi ad alta voce la sua risposta sul menù. — B: Fai la ricetta che ti ha tirato fuori.
**Script CTA** — A: «La provi gratis dal link.» — B: «Se ti va, provala anche tu.»
**Nota** — Esempi, non modelli: servono a farti venire la tua idea.

---

<!-- PAGINA 10 -->
## 10 — Il primo fotogramma

# Fermare lo scroll. Senza urlare.

**Titolo** — Fermare lo scroll. Senza urlare.
**Intro** — Otto forme che funzionano, da cui prendere ispirazione. Una sola per video: tieni quella che regge.
**Hook 01** — La domanda sul piatto — Inquadri il pranzo dall’alto: «Secondo te cosa manca?» Chi guarda risponde nella testa, e resta.
**Hook 02** — L’oggetto fuori posto — Il menù di un ristorante appoggiato tra i pesi in palestra. Una cosa che non c’entra incuriosisce e apre la storia.
**Hook 03** — Due cose a confronto — Da una parte i passi contati, dall’altra i pasti mai raccontati. Il confronto è tra abitudini, mai tra corpi.
**Hook 04** — La negazione — «Oggi non conto niente a mente.» Dire cosa non farai incuriosisce: poi mostri il gesto al posto suo.
**Hook 05** — Il quiz — «Secondo te cosa le ho chiesto?», e si vede solo la risposta. Chi guarda vuole scoprire la domanda.
**Hook 06** — La scena che conosci — Frigo aperto, sguardo dentro: «E adesso?» Nessuna presentazione: si riconosce da sola.
**Hook 07** — La parola gigante — «CENA?» scritto grande sopra una scena vera. Una parola sola tiene lo sguardo, poi arriva la prova.
**Hook 08** — L’immagine che spiega — La lista delle cose da fare che si allunga da sola. Rende visibile un peso che di solito si racconta a parole.
**Nota** — Sono spunti di ispirazione: la scena della tua vita vale più di tutte e otto.

---

<!-- PAGINA 11 -->
## 11 — Formato e montaggio

# Il taglio è tuo. Noi montiamo così.

**Titolo** — Il taglio è tuo. Noi montiamo così.
**Intro** — Volto e voce, voice-over, mani, cibo, schermo registrato: il formato lo scegli tu.
**Formati** — Chat protagonista · Problema, poi soluzione · Titolo da notizia · Risposta a un commento · Esperienza personale · Giornata / backstage
**Passata 01** — Niente vuoti — Dove non parli, di solito non serve: lascia respirare la voce e taglia il resto.
**Passata 02** — Fidati della noia — Se ti annoi mentre lo riguardi, quel pezzo lo sente anche chi guarda: accorcia lì.
**Passata 03** — Cambia ogni 3-5 secondi — Uno zoom, un cambio di inquadratura, la chat che compare: sono questi a tenere su lo sguardo.
**Nota** — Riguardalo una volta col telefono in mano, come lo guarderebbe lei.

---

<!-- PAGINA 12 -->
## 12 — Audio e sottotitoli

# Prima si sente. Poi si legge.

**Titolo** — Prima si sente. Poi si legge.
**Audio** — L’audio conta più dell’immagine. Registra vicino al microfono, in una stanza che non rimbomba, e riascoltati prima di montare: se la voce è pulita, il resto si perdona.
**[VINCOLO] Musica** — La musica, libera davvero — Meglio evitare gli audio di tendenza presi dai social: la licenza deve coprire anche la pubblicità e tutti i canali. Una libreria free va benissimo.
**Sottotitoli** — Sottotitoli sempre, nel tuo stile — L’unica cosa che ti chiediamo: due o tre parole per volta, anche una sola. Servono a dare ritmo, non a trascrivere. Font, colore e animazione li scegli tu.
**Nota** — Provalo in cuffia e senza: se si capisce in tutti e due i modi, è pronto.

---

<!-- PAGINA 13 -->
## 13 — Le regole tecniche

# La scheda da tenere a vista.

**Titolo** — La scheda da tenere a vista.
**Riquadri** — 9:16 verticale · 30-90 secondi
**Tabella** — Lingua: italiano, il tuo. Strumenti: quelli che usi già, per girare e montare. Audio: la voce prima di tutto. Sottotitoli: sempre, con lo stile che preferisci. Giada: almeno un momento, con la chat leggibile. File: finito, senza watermark dell’app di montaggio. Invio: Drive o WeTransfer, il grezzo tienilo tu. Tempi: 7-10 giorni dalla call, senza corse. Revisione: al massimo una, se funziona nessuna.

---

<!-- PAGINA 14 -->
## 14 — Cosa non si può dire

# Creatività sì. Promesse magiche no.

**Titolo** — Creatività sì. Promesse magiche no.
**[VINCOLO] Divieto** — Niente chili, taglie o percentuali. Non promettiamo risultati sul corpo. I numeri veri del percorso, quelli sì.
**[VINCOLO] Divieto** — Niente primi piani su una parte del corpo. Non pizzicare il grasso, non usare il corpo come il problema da correggere.
**[VINCOLO] Divieto** — Il corpo di nessuno è un difetto. Vale anche per il tuo: meglio lasciare fuori le frasi che se la prendono con l’aspetto.
**[VINCOLO] Divieto** — Mai «sei sola». La solitudine non si usa come leva. Fai vedere che Giada risponde: basta quello.
**[VINCOLO] Divieto** — Si capisce che Giada è un’AI. Dillo con le tue parole: chi guarda deve capire che è un’AI su Telegram.
**[VINCOLO] Divieto** — Giada non è un medico né una nutrizionista. Non fa diagnosi, non cura, non scrive diete, e le sue stime sono indicative.
**[VINCOLO] Riquadro** — E queste non si mostrano: solo la chat con Giada (niente lista chat, nomi o notifiche di altri) · nessun altro marchio in campo (vestiti, confezioni, watermark) · niente minori, e per un altro adulto serve il suo ok · niente audio dei trend, libreria libera con licenza anche per la pubblicità.

---

<!-- PAGINA 15 -->
## 15 — Come si va avanti

# La tua idea arriva qui.

**Titolo** — La tua idea arriva qui.
**Indirizzo** — andrea@vivariumai.co (bolla teal, cliccabile)
**Intro** — Scrivimi quando ti va: mandami lo script e due indicazioni visive in un documento, oppure un video-selfie. Dimmi a chi parli, che scena hai in testa e cosa si vede di Giada. Nessuna scadenza.
**Step 01** — Ti rispondo entro 72 ore — Ti dico cosa mi piace e cosa proverei diversamente. Se ci va, ci facciamo due chiacchiere in call.
**Step 02** — Se l’idea ci piace, ci parliamo — Mezz’ora per allineare taglio, compenso e dettagli. Poi hai mano libera.
**Step 03** — Giri, e poi mi mandi il video — Finito entro 7-10 giorni dalla call, via Drive o WeTransfer. Al massimo una revisione.

---

<!-- PAGINA 16 -->
## 16 — Il compenso

# Facciamo i conti insieme.

**Titolo** — Facciamo i conti insieme.
**Compenso** — da 50€ per ogni video selezionato. È UN PAVIMENTO, NON UN TETTO.
**Diritti** — Nessuna esclusiva: continui a lavorare con chi vuoi, prima e dopo.
**Upside** — Cosa può far salire la cifra — Un hook in più, un pacchetto di video, una collaborazione che va avanti nei mesi. E se hai numeri tuoi da mostrare, possiamo ragionare anche sui risultati.
**Nota** — Approfondiamo in call, prima che tu giri.
**[VINCOLO] CTA** — Apri la tua prova da 14 giorni → https://t.me/giadacare_bot?start=ad_creatorsb2b_t14d
**Congedo** — Quando ti viene in mente quella cosa che racconteresti a un’amica, scrivimi.
**Sticker** — CI VEDIAMO NEL TUO VIDEO.
