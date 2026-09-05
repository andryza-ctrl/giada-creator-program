# Giada Creator Program — istruzioni operative per Codex

**Obiettivo:** aggiornare esclusivamente il copy di src/App.jsx del progetto Giada Creator Program.

**Vincolo principale:** struttura, design, componenti, interazioni e logica devono rimanere invariati. Il lavoro consiste soltanto nel sostituire i testi indicati in questo documento con quelli finali esatti.

**Versione copy:** V9 /human, definita nella conversazione “Umanizzare copy Giada”.

**KPI confermato:** 1,2 mln di persone raggiunte ogni mese è un dato reale e approvato. Non è una stima, non è un’assunzione e non va segnalato come dato da sostituire.

---

## 1. Fonti e ordine di precedenza

Usa questi materiali come contesto, con il seguente ordine:

1. Questo documento: contiene i testi finali approvati e i vincoli di esecuzione.
2. La versione /human del copy nella conversazione “Umanizzare copy Giada”: è la base stilistica e testuale.
3. integrazione_handoff.md: contiene le decisioni operative più recenti e prevale sulle parti obsolete di handoff.md.
4. COPY-V9-MAPPATURA.md: serve per orientarsi tra gli slot e per la verifica, ma le sue versioni precedenti del copy non prevalgono sui testi riportati qui.
5. App.jsx: è la struttura concreta da modificare. Mantieni il codice esistente e cambia solo i valori testuali indicati.

Le parti obsolete presenti nei documenti di contesto non devono essere reintrodotte. In particolare, non usare più:

- prova di 7 giorni;
- consegna di un video con tre hook;
- compenso di 80€;
- risposta alla candidatura entro 48 ore;
- reach descritta come stima o come numero da sostituire;
- copy della mappatura V9 quando differisce dalla versione /human qui trascritta.

Le decisioni correnti sono: prova di 3 giorni, un solo video finito, compenso “da 50€” nella sola FAQ, brief e accesso inviati subito, risposta entro 72 ore sulla proposta e KPI di reach confermato.

---

## 2. Perimetro di modifica

### File autorizzato

Modifica soltanto:

~~~text
src/App.jsx
~~~

Se nel checkout il file è esposto semplicemente come App.jsx, applica le stesse istruzioni a quel file. Non modificare altri file.

### Cosa è consentito modificare

Sono consentiti soltanto:

- stringhe nei dati testuali degli array e delle costanti già presenti;
- stringhe JSX nei nodi indicati nella mappatura slot-per-slot;
- punteggiatura, apostrofi tipografici e spaziatura necessari a riportare esattamente i testi finali.

### Cosa non è consentito modificare

Non modificare:

- import, icone, dipendenze o componenti;
- nomi, ordine, numero o struttura delle sezioni;
- id, className, key, role, aria-*, href, name, type, required e attributi del form;
- array, oggetti o proprietà non esplicitamente elencati come slot di copy;
- hook, stato, useEffect, useMemo, useRef, IntersectionObserver o handler;
- gestione di ?angolo= e ?profilo=;
- CTA, ancore, apertura/chiusura FAQ, tab dei profili, sticky CTA, nav fissa o comportamento del form;
- immagini, src, alt, font, colori, classi, CSS, responsive, animazioni o layout;
- PRIVACY_URL e i link privacy;
- testo tecnico della demo del form non incluso nel copy /human, salvo diversa istruzione esplicita.

Non applicare la patch CSS al textarea descritta in COPY-V9-MAPPATURA.md: questa consegna è copy-only e non autorizza modifiche a src/styles.css.

---

## 3. Regola di implementazione

Lavora sugli slot esistenti, senza riscrivere o sostituire la struttura React.

Per ogni slot:

1. individua il riferimento indicato sotto, preferibilmente tramite id, chiave dell’array o classe JSX;
2. sostituisci solo il valore testuale;
3. conserva virgolette tipografiche, apostrofi, accenti e punteggiatura esattamente come riportati;
4. non aggiungere testo alternativo, spiegazioni, qualificatori o microcopy non presente qui;
5. non cambiare la logica di rendering dello slot.

Quando una stringa è usata tramite CTA_LABEL, aggiorna la costante una sola volta e lascia invariati tutti i punti in cui viene renderizzata.

---

## 4. Copy finale, slot per slot

### 4.1 Costante CTA globale

Riferimento: CTA_LABEL.

Valore finale esatto:

~~~jsx
const CTA_LABEL = "Ricevi brief e accesso";
~~~

Questa deve restare l’unica etichetta della CTA in tutta la pagina. Non usare “Ricevi accesso e brief” e non creare varianti della CTA.

---

### 4.2 Hero

Riferimenti: heroAngles.default, .hero-sub, .deck-tag--left, .deck-tag--right, .hero-proof.

#### Titolo

Nel primo oggetto di heroAngles, conserva profile: "rassicurante" e modifica solo i due testi:

~~~jsx
lead: "Diventa una voce di Giada.",
accent: "L’idea resta tua.",
~~~

Il rendering deve restare su due righe, con la seconda dentro l’elemento em già esistente.

#### Sottotitolo

Nel paragrafo .hero-sub inserisci esattamente:

~~~text
Giada è un’assistente di nutrizione su Telegram. Provala gratis e, se ti viene un’idea per raccontarla, proponicela.
~~~

#### Azioni

- azione primaria: usa CTA_LABEL, senza testo hardcoded alternativo;
- azione secondaria: Come funziona;
- destinazioni e struttura dei bottoni: invariati.

#### Etichette laterali

~~~text
Girato col telefono
Nessun set
~~~

#### Prova sociale nella hero

Pastiglia .hero-fee:

~~~text
Oltre 10.000€ al mese in pubblicità
~~~

Riga accanto:

~~~text
È lì che gira il video che realizzi con noi, ogni giorno, in tutta Italia.
~~~

Non trasformare questa riga in una promessa diversa e non aggiungere dati di performance.

---

### 4.3 Sezione “Come lavoriamo insieme”

Riferimento: sezione id="il-patto", heading terms-title, termCards, .terms-note.

#### Titolo e sommario

Nel titolo esistente conserva la divisione tra testo normale e em:

~~~text
Prima riga: Come lavoriamo
Seconda riga in corsivo: insieme.
~~~

Sommario .terms-head .lede:

~~~text
Tre cose da sapere subito, prima ancora di scriverci. E non cambiano strada facendo.
~~~

#### Scheda 01 — termCards con id: "liberta"

Non modificare id, tone o icon. Imposta solo questi slot:

~~~jsx
label: "Libertà",
sublabel: "COME NASCE",
metric: "0",
suffix: "copioni da recitare",
subtext: "L’idea parte da te.",
copy: "Noi ti diamo obiettivi, riferimenti e limiti. Tu scegli come trasformarli in un video: è proprio per questo che cerchiamo creator.",
foot: "Linee guida, non copioni",
~~~

#### Scheda 02 — termCards con id: "consegna"

Non modificare id, tone o icon. Imposta solo questi slot:

~~~jsx
label: "Consegna",
sublabel: "COSA PRODUCI",
metric: "1",
suffix: "video finito",
subtext: "30–60 secondi, per Reel o TikTok.",
copy: "Lo giri tu, col telefono, nel tuo ambiente. Niente set e niente troupe.",
foot: "Un solo video finito",
~~~

#### Scheda 03 — termCards con id: "distribuzione"

Non modificare id, tone o icon. Imposta solo questi slot:

~~~jsx
label: "Distribuzione",
sublabel: "DOVE FINISCE",
metric: "2",
suffix: "milioni di visualizzazioni",
subtext: "Ogni mese, in tutta Italia.",
copy: "Il tuo video entra nelle campagne di Giada. E, se ti va, possiamo pubblicarlo anche sul tuo profilo in collaborazione.",
foot: "Advertising e organico",
~~~

Qui “2 milioni di visualizzazioni” resta il testo approvato della scheda. Non sostituirlo con “2 milioni di persone” e non aggiungere “stimati”.

#### Nota sotto le schede

Nel paragrafo .terms-note inserisci esattamente:

~~~text
Non ti chiediamo di girare nulla prima. Prima ci racconti l’idea; se siamo allineati, poi si gira.
~~~

Mantieni l’enfasi già presente sulla seconda frase, senza cambiare il markup.

---

### 4.4 Sezione “Prova il prodotto”

Riferimento: sezione id="prova", heading trial-title, .trial-copy, .stage-question.

#### Titolo

Conserva la divisione esistente:

~~~text
Prima riga: Prima la usi.
Seconda riga in corsivo: Poi la racconti.
~~~

#### Sommario

Sostituisci .trial-copy .lede con:

~~~text
Hai tre giorni per provarla gratis e capire cosa ti viene davvero voglia di raccontare.
~~~

#### Prima rassicurazione

Mantieni l’etichetta in grassetto SENZA COMPITI e sostituisci il testo seguente con:

~~~text
Usala come la useresti davvero, senza metterti subito a cercare l’idea giusta.
~~~

#### Seconda rassicurazione

Mantieni l’etichetta in grassetto SENZA FRETTA e sostituisci il testo seguente con:

~~~text
Quando trovi un momento che ti fa pensare “questo lo racconterei”, parti da lì.
~~~

#### Link e domanda

Mantieni invariati:

~~~text
Scegli il profilo che ti somiglia
LA DOMANDA
~~~

Nel testo della domanda .stage-question p inserisci:

~~~text
Da quale momento partirebbe il tuo video?
~~~

Non modificare immagini, alt text, struttura del mockup o destinazione #profili.

---

### 4.5 Rail dei numeri

Riferimento: proofFacts.

Mantieni la struttura dell’array e imposta i tre oggetti così:

~~~jsx
{ id: "spend", value: "10.000", unit: "€", label: "investiti ogni mese in pubblicità" },
{ id: "reach", value: "1,2", unit: "mln", label: "di persone raggiunte ogni mese" },
{ id: "onboarding", value: "50", unit: "%", label: "di chi arriva inizia a usare Giada" },
~~~

Il secondo elemento deve risultare visibilmente come:

~~~text
1,2 mln
di persone raggiunte ogni mese
~~~

Questo KPI è confermato e definitivo. È vietato:

- aggiungere “circa”, “stimati”, “stima”, “assunzione”, “ipotizzati” o formule equivalenti;
- scrivere che il dato va sostituito con la reach reale;
- cambiare 1,2 mln in un altro numero;
- rimuovere la rail o spostarla.

---

### 4.6 Sezione “Chi cerchiamo”

Riferimento: sezione id="chi-cerchiamo", heading fit-title, fitYes, fitNo.

#### Titolo e sommario

Mantieni la struttura su due righe del titolo:

~~~text
Prima riga: Puoi avere pochi follower.
Seconda riga in corsivo: Non poche idee.
~~~

Sostituisci il .lede con:

~~~text
Ci interessano le idee, la naturalezza e il fatto che tu mantenga quello che prometti. L’esperienza aiuta, ma non è tutto.
~~~

#### Elenco “Sei in linea se”

Sostituisci il contenuto di fitYes, mantenendo array, ordine e rendering:

~~~jsx
const fitYes = [
  ["Crei contenuti tuoi", "Idea, riprese e voce sono davvero tue."],
  ["Curi audio e luce", "Non serve attrezzatura professionale. Una finestra e una stanza silenziosa possono bastare."],
  ["Rispetti i tempi", "Se dici una data, la rispetti."],
  ["Arrivi con un’idea", "Ci racconti da dove partiresti e perché, secondo te, può funzionare."],
];
~~~

#### Elenco “Non basta”

Sostituisci il contenuto di fitNo, mantenendo array, ordine e rendering:

~~~jsx
const fitNo = [
  "Avere tanti follower",
  "Riciclare un video fatto per un altro brand",
  "Voler parlare di Giada senza averla provata",
  "Aspettare che l’idea te la diamo noi",
];
~~~

Mantieni invariata la nota finale:

~~~text
Nessuno di questi punti è squalificante da solo.
~~~

---

### 4.7 Sezione “Profili”

Riferimento: sezione id="profili", .profiles e creatorModes.

#### Occhiello e titolo

Occhiello .eyebrow:

~~~text
Tre modi diversi di raccontare Giada
~~~

Titolo: mantieni le due parti già presenti:

~~~text
Prima parte: Non cerchiamo
Parte in corsivo: una faccia sola.
~~~

#### Profili in creatorModes

Mantieni invariati id, tone, number e tags. Sostituisci solo label, title e copy con questi valori:

~~~jsx
{
  id: "rassicurante",
  label: "La voce che rassicura",
  title: "Rendi semplice quello che sembra difficile.",
  copy: "Davanti alla camera parli come parleresti a una persona, non a un pubblico.",
  tags: ["Talking head", "Spiegazioni chiare", "Tono credibile"],
},
{
  id: "vita-reale",
  label: "La vita vera",
  title: "Trovi una storia dentro una giornata qualsiasi.",
  copy: "Ti viene naturale partire da un dettaglio vero, non da una frase da pubblicità.",
  tags: ["Storytelling", "Scene quotidiane", "Naturalezza"],
},
{
  id: "performance",
  label: "L’istinto performance",
  title: "Sai che i primi tre secondi fanno la differenza.",
  copy: "Parti forte e sai tenere l’attenzione di chi guarda.",
  tags: ["UGC adv", "Hook forti", "Test creativi"],
},
~~~

I tag sono riportati per confermare il testo finale, ma non cambiare la loro struttura o il comportamento dei tab.

---

### 4.8 Sezione “Come funziona”

Riferimento: sezione id="come-funziona", process-title, processSteps.

#### Titolo e sommario

Nel titolo mantieni la divisione tra testo normale e em:

~~~text
Prima riga: Tu fai un passo.
Seconda riga in corsivo: Noi facciamo il nostro.
~~~

Sommario:

~~~text
Funziona così, in quattro passaggi.
~~~

#### Passaggi

Sostituisci solo i valori testuali di processSteps, mantenendo number e tone:

~~~jsx
const processSteps = [
  ["01", "Lasci i contatti", "Brief e accesso ti arrivano subito via mail.", "s1"],
  ["02", "Provi Giada", "Hai tre giorni per usarla. Non devi creare nulla.", "s2"],
  ["03", "Proponi la tua idea", "Ci racconti il video che faresti. Entro 72 ore ti diciamo se vogliamo realizzarlo con te.", "s3"],
  ["04", "Giri il video", "Realizzi un video finito, che poi entra nelle campagne di Giada.", "s4"],
];
~~~

Non aggiungere contratto, pagamento, revisioni o tre hook agli step.

---

### 4.9 FAQ

Riferimento: sezione id="faq", faq-title, .faq-aside, faqs.

#### Titolo

Mantieni la divisione esistente:

~~~text
Prima riga: Le cose da sapere.
Seconda riga in corsivo: Prima di iniziare.
~~~

#### Testo laterale

Nel rail della FAQ inserisci:

~~~text
Ci vogliono due minuti. Poi ricevi subito brief e accesso via mail.
~~~

Il bottone laterale continua a usare CTA_LABEL e l’href #candidatura.

#### Domande e risposte

Sostituisci faqs con i seguenti sette elementi, nello stesso ordine:

~~~jsx
const faqs = [
  {
    question: "Devo avere molti follower?",
    answer: "No. Lavoriamo anche con profili sotto i 10.000 follower. Ci interessano soprattutto l’idea, la naturalezza e l’affidabilità.",
  },
  {
    question: "Cosa ricevo dopo il form?",
    answer: "Appena invii il form, ti arrivano via mail il brief in PDF e il link per provare Giada gratis per tre giorni.",
  },
  {
    question: "Mi date uno script da recitare?",
    answer: "No. Ti diamo obiettivi, riferimenti e limiti. Il resto è tuo: idea, parole e taglio.",
  },
  {
    question: "Quanto pagate?",
    answer: "Si parte da 50€ per ogni video selezionato. Se lavori già con brand e hai risultati da mostrare, possiamo valutare cifre più alte, più video o un accordo legato ai risultati.",
  },
  {
    question: "Come usate il video?",
    answer: "Lo usiamo nelle campagne pubblicitarie di Giada e sui nostri canali, senza limite di tempo. È importante saperlo prima: è il motivo per cui nasce il programma.",
  },
  {
    question: "Devo pubblicarlo sul mio profilo?",
    answer: "No, non è obbligatorio. Se ti va, possiamo pubblicarlo in collaborazione, così compare anche sul tuo profilo.",
  },
  {
    question: "Chi siete?",
    answer: "Siamo Vivarium, la società che sviluppa Giada.",
  },
];
~~~

La risposta sul compenso è l’unico punto della pagina in cui compare il compenso al creator. Non reintrodurre 80€, fino a 50€, un tetto massimo o una seconda FAQ economica.

---

### 4.10 Finale e candidatura

Riferimento: sezione id="candidatura", .finale-kicker, apply-title, .finale-copy, .form-card.

#### Testo introduttivo

Occhiello:

~~~text
Hai già un’idea?
~~~

Titolo, mantenendo le due righe:

~~~text
Prima riga: Prova Giada.
Seconda riga in corsivo: Poi raccontacela.
~~~

Sommario:

~~~text
Lasciaci i tuoi contatti. Brief e accesso ti arrivano subito via mail.
~~~

Nota con icona:

~~~text
Adesso non devi mandarci nessun video.
~~~

Mantieni il markup e l’icona già presenti.

#### Campi del form

Mantieni name, type, required, autoComplete, ordine e comportamento. Aggiorna soltanto le stringhe indicate:

| Slot | Testo finale esatto |
| --- | --- |
| Label nome | Nome |
| Placeholder nome | Come ti chiami? |
| Label email | Email |
| Placeholder email | nome@email.it |
| Label canale | Canale principale |
| Placeholder select | Seleziona il canale |
| Opzione | Instagram |
| Opzione | TikTok |
| Opzione | Entrambi |
| Opzione | Sto iniziando ora |
| Label profilo | Il tuo profilo |
| Placeholder profilo | @iltuonome |
| Label domanda aperta | Raccontaci qualcosa di te |
| Placeholder domanda aperta | Che contenuti fai? Cosa ti incuriosisce di Giada? Se pubblichi anche altrove, lascia pure gli altri profili. |
| Consenso età | Ho almeno 18 anni. |
| Consenso privacy | Testo visibile: Accetto l’informativa privacy. Mantieni il link già presente sulla porzione informativa privacy. |
| CTA form | usa CTA_LABEL |
| Nota sotto CTA | Ci vogliono due minuti. Brief e accesso arrivano subito via mail. |
| Conferma invio | Ci siamo. |

Per il consenso privacy conserva il link, target, rel e PRIVACY_URL esistenti. Non modificare il testo tecnico della demo (Anteprima: il form non invia ancora dati. e Anteprima: nessun dato è stato inviato.) perché non appartiene al copy /human approvato.

---

### 4.11 Sticky CTA mobile

Riferimento: .sticky-cta in fondo ad App.jsx.

Mantieni:

~~~text
Brief e accesso, subito
~~~

Il bottone deve continuare a usare CTA_LABEL e href #candidatura. Non inserire compenso, numero di giorni o altre promesse nella sticky CTA.

---

## 5. Testi e codice da lasciare invariati

Questi elementi non fanno parte degli slot da riscrivere oppure sono vincolati dal comportamento esistente:

- PRIVACY_URL e i link all’informativa;
- brand GIADA, CREATOR PROGRAM, GIADA by Vivarium;
- link della nav: Chi cerchiamo, Come funziona, FAQ;
- testo del sigillo SCOPRI COME FUNZIONA;
- placeholder visivi Foto del ventaglio hero;
- alt text delle immagini e testi accessibili non indicati nella mappatura;
- label tecnica LA DOMANDA;
- testo tecnico della demo del form;
- footer Informativa privacy e Torna su;
- tutti gli attributi, le chiavi, le destinazioni, gli stati e gli handler.

Se incontri una stringa visibile non coperta da questo documento, non riscriverla autonomamente: lasciala invariata.

---

## 6. Vincoli di contenuto da controllare

Prima di considerare concluso il lavoro, verifica che il copy:

- parli di Giada come assistente di nutrizione su Telegram, mai come dieta, servizio medico o promessa di perdita di peso;
- mantenga un linguaggio neutro rispetto al genere;
- usi frasi brevi e un tono caldo, concreto e umano;
- non reintroduca la consegna con tre hook;
- non reintroduca prova di 7 giorni, compenso di 80€ o risposta entro 48 ore;
- dica sempre “un video finito” dove si parla della consegna;
- tenga “da 50€” esclusivamente nella FAQ sul compenso;
- mantenga 1,2 mln di persone raggiunte ogni mese come KPI confermato, senza qualificatori di incertezza;
- usi una sola etichetta CTA: Ricevi brief e accesso;
- non aggiunga scarsità, numero di posti, follower promessi o performance non fornite;
- non usi trattini lunghi nel copy visibile.

---

## 7. Checklist tecnica finale

### Diff e perimetro

- [ ] git diff --name-only mostra solo src/App.jsx.
- [ ] Nessuna modifica a src/styles.css, immagini, font, configurazione o altri file.
- [ ] Il diff contiene solo sostituzioni testuali nei riferimenti elencati.
- [ ] Non sono stati cambiati import, componenti, hook, handler, classi, id, key o attributi.

### Copy

- [ ] CTA_LABEL vale esattamente Ricevi brief e accesso.
- [ ] La hero usa il titolo “Diventa una voce di Giada. / L’idea resta tua.”.
- [ ] La hero usa il sottotitolo /human completo.
- [ ] La riga hero dice esattamente “È lì che gira il video che realizzi con noi, ogni giorno, in tutta Italia.”.
- [ ] La sezione usa “Come lavoriamo / insieme.” e il sommario /human.
- [ ] Le tre schede contengono rispettivamente libertà, un video finito e distribuzione con i testi finali sopra indicati.
- [ ] La nota delle schede dice “Non ti chiediamo di girare nulla prima. Prima ci racconti l’idea; se siamo allineati, poi si gira.”.
- [ ] Il trial usa tre giorni e il nuovo copy /human.
- [ ] La rail contiene 10.000€, 1,2 mln e 50% con le etichette corrette.
- [ ] Il KPI di reach non contiene parole che lo presentino come stima o dato da sostituire.
- [ ] “Chi cerchiamo”, i tre profili, i quattro passaggi e le sette FAQ corrispondono esattamente a questa consegna.
- [ ] Il compenso compare solo nella FAQ e in nessun altro punto come compenso al creator.
- [ ] Il finale usa “Prova Giada. / Poi raccontacela.”.
- [ ] Il campo aperto usa label e placeholder finali.
- [ ] La sticky mobile usa “Brief e accesso, subito” e la CTA globale.

### Build e comportamento

- [ ] npm run build completa senza errori.
- [ ] npm run test:sites completa con tutti i test previsti.
- [ ] La CTA hero, la CTA FAQ e la sticky continuano ad arrivare a #candidatura.
- [ ] Il link “Come funziona” continua ad arrivare a #come-funziona.
- [ ] I tre tab dei profili continuano a cambiare pannello e colore senza errori.
- [ ] Le FAQ continuano ad aprirsi e chiudersi.
- [ ] Il form continua a mostrare la conferma demo senza inviare dati.
- [ ] La nav fissa e la sticky CTA mantengono la visibilità condizionale originale.
- [ ] ?angolo= e ?profilo= continuano a essere accettati senza introdurre nuove varianti di headline.

### Verifica visiva proporzionata al cambio copy

Poiché il testo della hero e di alcune sezioni cambia lunghezza, esegui anche la verifica visuale già prevista dall’handoff:

- [ ] zero overflow orizzontale alle larghezze previste, da 1920px a 320px;
- [ ] nessun testo fuori dal contenitore o sovrapposto;
- [ ] la riga della prova sociale resta nel primo schermo desktop e mobile;
- [ ] contrasto del testo invariato e senza nuovi nodi sotto soglia;
- [ ] nessun salto di layout, cambio palette, variazione tipografica o animazione introdotta;
- [ ] la pagina conserva la struttura e la sequenza delle sezioni esistenti.

Se uno di questi controlli richiede una modifica a CSS, layout, componente o logica, fermati: quella modifica è fuori dal perimetro di questa consegna e va segnalata separatamente.

---

## 8. Criterio di completamento

Il lavoro è completo solo quando src/App.jsx contiene tutti i testi finali di questo documento, il diff è limitato al copy, il KPI 1,2 mln è trattato come confermato e build, test, interazioni e verifica visiva risultano invariati rispetto alla versione di partenza.
