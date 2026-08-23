# Giada Creator Program — Audit copy e UI/UX

**Oggetto:** `giada-creator-program.andrea-zannuto.chatgpt.site` (versione live al 16 agosto 2026)
**Skill applicate:** `copywriting`, `copy-editing` (seven sweeps), `marketing-psychology`, `frontend-design`, `page-cro`
**Fonte reference visuali:** Knowledge Studio — 98 schede indicizzate, 33 in categoria *References*, 8 in *Hero*, 4 in *Typography*
**Obiettivi guida:** immediatezza, chiarezza, semplicità, meno testo

---

## 0. Sintesi in una pagina

### Cosa ho ispezionato

Bundle applicativo (`index-M0TYC3n1.js`, 225 KB) e foglio di stile (`index-CPUgj-G8.css`, 30 KB) scaricati direttamente dal dominio live. Ho ricostruito l'albero JSX completo: **10 sezioni, 180 stringhe visibili, 4.327 caratteri di copy**. Sul CSS ho verificato token, scala tipografica, griglie, breakpoint e contrasti.

### I quattro problemi che contano

| # | Problema | Perché conta |
|---|---|---|
| 1 | **Il numero in pagina è sbagliato** | La hero dice `Fino a €50`. Il tuo tetto reale è €80. Stai comunicando il **37% in meno** di quanto sei disposto a pagare, e `Fino a` è la formulazione peggiore possibile: segnala "probabilmente meno". |
| 2 | **Zero prove** | Nessun trust signal in tutta la pagina. Chiedi a uno sconosciuto email, profilo e sette giorni di attenzione senza dare una sola ragione per crederti. Hai le prove — prodotto live, campagne attive, sei video già prodotti — e non ne usi nessuna. |
| 3 | **Un dato inventato** | Il grafico *reach* nella sezione benefici mostra `Organico 62%` e `Advertising 92%`. Percentuali senza unità, senza fonte, senza significato. Un creator UGC performance-oriented — il tuo Avatar 3 — lo riconosce in due secondi. |
| 4 | **La consegna a tre hook non esiste in pagina** | È diventata la leva che chiude il gap 15 → 45 asset/mese. Va dichiarata nell'offerta dal primo scroll, non chiesta dopo la firma: chiesta dopo diventa lavoro gratis. |

### Cosa produce questo documento

- Copy completo riscritto: **4.327 → 3.100 caratteri (−28%)**, e la riduzione è netta **dopo** aver aggiunto una fascia di prove, due FAQ, il consenso privacy e le specifiche di formato. Sulle sezioni confrontabili il taglio reale è intorno al 40%.
- Architettura da **10 a 8 blocchi**, di cui 2 sottili: 5 sezioni a padding pieno contro le attuali 9.
- 17 finding UI/UX ordinati per severità, con correzioni.
- Token colore corretti sui due contrasti che oggi non passano AA.

---

# PARTE 1 — Audit del copy

## 1.1 I sette sweep

Metodo `copy-editing`: sette passate, una dimensione per volta.

### Sweep 1 — Chiarezza

**Verdetto: insufficiente sopra la piega.**

L'H1 è `Porta una buona idea. Giada la porta lontano.` Un creator che arriva da un'inserzione Meta ha cinque secondi e tre domande: *cosa è questo, per chi, cosa devo fare*. L'H1 non risponde a nessuna. È un gioco di parole su un verbo. Il principio della skill è esplicito — **clarity over cleverness** — e qui la clarity perde.

Peggio: **la pagina non dice mai cos'è Giada.** In 4.327 caratteri la parola "Telegram" non compare, "nutrizione" non compare. Il visitatore lo deve dedurre da due screenshot di food log. Chiedi a qualcuno di provare per sette giorni un prodotto che non hai nominato.

Reference Knowledge Studio — *Sette hero section moderne come reference UI* (@uiuxmanuel): «Una hero efficace combina promessa, prova e prossimo passo senza distribuire la stessa enfasi ovunque.» Oggi la hero ha promessa e prossimo passo, non ha prova, e distribuisce l'enfasi in modo uniforme su tre colonne.

### Sweep 2 — Voce e tono

**Verdetto: buono, con una crepa.**

Il registro è coerente: frasi brevi, seconda persona, niente corporate speak. Nessuna occorrenza di "sinergia", "innovativo", "all'avanguardia". Il principio §11 del brief è rispettato.

La crepa è la sezione benefici, che scivola in astratto: `Un'idea può diventare più di un post.` / `La tua idea può viaggiare lontano.` Due frasi consecutive che dicono la stessa cosa e non dicono niente. Confrontale con `Non servono grandi numeri` — concreta, oppositiva, memorabile. La pagina sa scrivere: in quella sezione smette.

### Sweep 3 — So what

**Verdetto: tre affermazioni su quattro non chiudono il cerchio.**

| Affermazione attuale | So what? | Manca |
|---|---|---|
| `Se selezionata, entra nelle campagne organiche e paid.` | E quindi? | Cosa significa in pratica: campagne attive ogni giorno, budget reale dietro |
| `Compenso, revisioni e utilizzo sono chiari prima di iniziare.` | Chiari *quanto*? | Il numero. Chiarezza senza cifra non è chiarezza |
| `Se c'è fit, puoi produrre più contenuti ogni mese.` | Quanti? Quando? | Condizione e ordine di grandezza |
| `Non servono grandi numeri. Serve una buona idea.` | ✅ | Chiude da sola |

### Sweep 4 — Prove

**Verdetto: il fallimento più grave della pagina.**

Zero testimonianze. Zero numeri sul prodotto. Zero riferimenti a collaborazioni esistenti. Zero informazioni su chi sia Vivarium. L'unico elemento quantitativo dell'intera pagina è **un grafico con dati inventati**.

E le prove esistono, verificate in questa conversazione:

- Giada è un prodotto vivo su Telegram, con utenti paganti
- Le campagne pubblicitarie girano ogni giorno
- Sei video già prodotti con tre creator

Tre fatti, tutti veri, tutti verificabili, tutti assenti dalla pagina. Reference — *Real estate website orientato a fiducia e lead* (@webdesign_786): «Trust signal e CTA sono parti della UI, non elementi da aggiungere dopo il design.»

### Sweep 5 — Specificità

**Verdetto: il copy è breve ma vago. Sono due cose diverse.**

| Vago | Specifico |
|---|---|
| `Fino a €50` | `€80 a video selezionato` |
| `Paid + organic` | `Nelle campagne pubblicitarie e sui canali di Giada, senza limite di tempo` |
| `3–5 video al mese` | Da togliere: promette un volume che il modello non garantisce |
| `un video` | `Reel o TikTok, 45–60 secondi` |
| Nessuna menzione | `1 video + 3 hook` |

`Fino a` merita una nota a sé. È un anchor al ribasso: chi legge sente "probabilmente meno di 50". Con il numero corretto e la preposizione rimossa, la stessa riga passa da €50-percepito-come-40 a €80 netti. Il salto percepito è vicino al raddoppio, senza che tu spenda un euro in più rispetto a quanto hai già dichiarato di essere disposto a pagare.

### Sweep 6 — Emozione

**Verdetto: freddo dove dovrebbe scaldare.**

La pagina è tutta struttura, condizioni e criteri. È coerente con il posizionamento professionale, ma non c'è un solo momento in cui un creator senta qualcosa. Il candidato ideale che descrivi — *persone creative disposte a mettersi in gioco* — reagisce alla sfida creativa, non a un elenco di condizioni.

L'unica frase con una temperatura è nel product lab: `Quale momento aprirebbe il tuo Reel?` È una domanda, è personale, mette il lettore a immaginare. È anche l'unica di quel tipo in tutta la pagina. Va tenuta e va replicata l'idea, non moltiplicata la quantità.

### Sweep 7 — Rischio zero

**Verdetto: buono sul lavoro, scoperto su fiducia e dati.**

Ben gestito: `Nessun video completo prima di contratto e brief finale` compare due volte, nel punto giusto. La paura dello spec work è affrontata bene.

Non gestito:
- **Chi siete?** Non c'è risposta in nessun punto della pagina.
- **Cosa succede ai miei dati?** Il form chiede email e profilo con il solo consenso alla maggiore età. **Manca il consenso privacy: è un requisito di legge per un form di lead in Italia, e come guardrail anti-attrito vale quanto il resto.**
- **Quando mi rispondete?** L'SLA 48–72 ore esiste nel brief, non in pagina.

---

## 1.2 Sei problemi strutturali

**1. Un'idea ripetuta cinque volte.** «Il talento prima dei follower» compare come: `IL PUNTO / Il talento viene prima dei follower` (hero), label sezione 02 `IL TALENTO PRIMA DEI FOLLOWER`, H2 `Puoi essere all'inizio`, criterio `FOLLOWER <10K Ammessi`, FAQ `Devo avere molti follower?`. Cinque volte lo stesso concetto viola la Rule of One e allunga la pagina senza aggiungere argomenti.

**2. Due percorsi concorrenti.** La journey strip dice `Scopri → Prova → Scegli → Proponi → Inizia` (5 step). La sezione processo dice `Prova → Brief → Proponi → Produciamo` (4 step). Nomi diversi, conteggi diversi, stessa cosa. Uno dei due va eliminato — e il processo è quello che porta informazione vera.

**3. Il denaro è l'elemento più prominente della hero.** `Fino a €50` in `<strong>` dentro il pannello destro è il primo numero che l'occhio incontra. Hai detto esplicitamente di non volere creator che guardano prima il compenso: la gerarchia visuale della pagina attrae esattamente quelli.

**4. La distribuzione è promessa in modo non verificabile.** `La tua idea può viaggiare lontano` più un grafico inventato. Il §10 del brief identifica correttamente questo rischio («promessa di milioni di persone») e la pagina ci cade dentro con una visualizzazione dati. La formulazione onesta è più forte: *il video viene usato*, senza numeri.

**5. Nessun message match con le tre inserzioni.** I tre angoli creativi Meta (competenza / non servono numeri / istinto creativo) atterrano tutti sullo stesso H1 generico. Reference — *Allineare creatività e CTA alle fasi TOFU, MOFU e BOFU* (@adswithsimon): problema e beneficio in alto, piccolo commitment al centro. Servono almeno tre varianti di hero con parametro URL.

**6. Il copy è scritto per essere letto, non scansionato.** Nove label numerate, nove H2, testi di supporto sotto ognuno. La struttura suggerisce lettura lineare. Il traffico da Meta scansiona in verticale su mobile in meno di dieci secondi.

---

# PARTE 2 — Copy riscritto

Pronto per il paste. Ogni blocco ha *prima → dopo*, il conteggio caratteri e il principio applicato.

## Navigazione

```
GIADA · CREATOR PROGRAM        Chi cerchiamo   Come funziona   FAQ   [CANDIDATI]
```

Tre link contro i tre attuali, rinominati per corrispondere alle sezioni superstiti. Su una landing con una sola conversione la nav è già un compromesso: mantieni la CTA sempre visibile e nient'altro.

## Hero

**Prima**

> `Porta una buona idea. Giada la porta lontano.`
> `SEI CREATOR? / Non servono grandi numeri. Serve una buona idea.`
> `Prova Giada per 7 giorni. Se nasce un'idea, proponila prima di produrre.`
> `COMPENSO Fino a €50 · CONTINUITÀ 3–5 video al mese · DISTRIBUZIONE Paid + organic`

**Dopo**

```
GIADA × VIVARIUM

H1   Cerchiamo 5 creator.
     Conta l'idea, non i follower.

Sub  Giada è un assistente di nutrizione su Telegram.
     Provala 7 giorni e proponici un'idea per un video.

CTA  [RICEVI ACCESSO E BRIEF]        Come funziona ↓

     ✓ 7 giorni gratis    ✓ Nessun video prima del contratto
```

Blocco condizioni, colonna destra:

```
COMPENSO    €80                a video selezionato
CONSEGNI    1 video + 3 hook   stessa scena, tre aperture
UTILIZZO    Paid e organico    senza scadenza
```

Didascalia immagine: `FORMATO — Reel o TikTok, 45–60 secondi`

**Cosa cambia e perché**

- **`Cerchiamo 5 creator`** — Il numero è vero, quindi la scarsità è legittima. Dichiara subito la natura del programma (selezione, non bando aperto) e attiva scarcity e mimetic desire senza inventare nulla. Il §3 del brief chiede di non sembrare né casting elitario né porta aperta: un numero preciso è la posizione esatta tra i due.
- **`Conta l'idea, non i follower`** — Il filtro nell'headline. Chi legge capisce in un secondo se è dentro o fuori. Il pattern *{outcome} without {pain point}* delle formule copywriting, invertito: rimuove l'obiezione principale dell'avatar nano/micro prima ancora che si formi.
- **Il sottotitolo nomina il prodotto.** Prima riga: cosa è Giada. Seconda: cosa fai. Risolve il buco più grave del sweep 1.
- **`€80` senza `fino a`.** Numero pieno, nessun anchor al ribasso.
- **`1 video + 3 hook` in hero.** L'attesa è nell'offerta dal primo scroll. Il micro-copy `stessa scena, tre aperture` disinnesca la paura del lavoro triplicato: si capisce subito che sono cinque minuti in più, non tre giornate.
- **`senza scadenza`.** Il paid perpetuo dichiarato apertamente. È un filtro voluto: chi non è d'accordo lo scopre ora invece che dopo la selezione, e chi vuole negoziare lo fa sapendo. Il costo di non dirlo è un contratto che salta a valle.
- **`Reel o TikTok, 45–60 secondi`** sostituisce `REC · IDEA IN PROVA`. La didascalia decorativa diventa una specifica: risponde a una domanda invece di riempire uno spazio.
- **Continuità esce dalla hero.** `3–5 video al mese` prometteva un volume che il modello non sostiene. Si sposta nei benefici come possibilità condizionata.

### Alternative H1

| | Copy | Razionale | Quando |
|---|---|---|---|
| **A** ✅ | Cerchiamo 5 creator. Conta l'idea, non i follower. | Scarsità reale, filtro esplicito, zero denaro. Combina chiarezza e selezione. | Default |
| **B** | Non ci servono i tuoi follower. Ci serve la tua idea. | Più aggressiva, più memorabile, più identitaria. Rischio: suona come rifiuto in apertura. | Angolo 2, creator emergenti |
| **C** | La tua idea, girata da te, dentro le nostre campagne. | Massima concretezza sul deliverable. Più fredda, meno filtro. | Angolo 3, UGC performance |

### Alternative CTA

| | Copy | Razionale |
|---|---|---|
| **A** ✅ | RICEVI ACCESSO E BRIEF | Nomina entrambe le cose che ottieni. Formula [verbo] + [cosa ricevi]. Coerente con il bottone del form: stessa azione, stesso nome, dall'inizio alla fine. |
| **B** | PROVA GIADA GRATIS | Attiva lo zero-price effect, ma nasconde la metà più preziosa dell'offerta — il brief. |
| **C** | CANDIDATI IN 2 MINUTI | Abbassa l'energia di attivazione dichiarando il costo. Meglio come micro-copy sotto il bottone che come bottone. |

## Fascia prove — sezione nuova

```
Non è un progetto. È un prodotto che gira.

Giada è attiva su Telegram,     Le campagne pubblicitarie     Abbiamo già prodotto
con utenti paganti.             girano ogni giorno.           6 video con 3 creator.
```

Fascia sottile, sfondo navy, subito sotto la hero. Tre fatti verificabili, nessun numero gonfiato, nessun grafico.

Il terzo è il più forte e sostituisce sia la testimonianza che manca sia il grafico inventato: dice che il programma ha già funzionato, che qualcuno è già stato pagato, che non stai cercando cavie. Authority bias e social proof con l'unica prova che possiedi davvero. Quando i primi creator del pilot consegnano, il numero si aggiorna da solo.

## Chi cerchiamo — fusione di tre sezioni

Assorbe `statement` + `criteria-rail` + `standards`, oggi tre sezioni separate che dicono la stessa cosa.

```
CHI CERCHIAMO

Puoi essere all'inizio. Devi essere serio.
Un'idea tua, naturalezza, brief rispettati. L'esperienza aiuta, non decide.

SEI IN LINEA SE                   NON BASTA
Giri contenuti tuoi               Follower senza una voce
Curi audio e luce                 Un video riciclato da altri brand
Rispetti brief e tempi            Interesse solo per il compenso
Arrivi con un'idea                Arrivi con una richiesta
```

Tre sezioni diventano una, la ripetizione da cinque scende a due (headline e matrice), la matrice fa da sola il lavoro dei criteri.

`Arrivi con un'idea / Arrivi con una richiesta` è la coppia più affilata: stesso verbo, opposizione secca, e traccia esattamente il confine tra i due tipi di candidato che riceverai.

Il contrasto binario è la struttura più leggibile per un criterio di ammissione. Reference — *Perché alcuni hook da carosello fermano lo scroll e altri no* (@tinnaloaizaofficial): specificità e contrasto reggono meglio della descrizione.

## Prova Giada

```
PRIMA LA USI, POI LA RACCONTI

Prova Giada. Poi trova il tuo angolo.
Sette giorni per capire cosa vale la pena raccontare.

GIORNI 1–3  Usala davvero
GIORNI 4–7  Trova l'angolo

OSSERVA — Quale momento aprirebbe il tuo video?
```

Sezione già ben scritta. Tolto `Reel` a favore di `video`, che copre entrambe le piattaforme. Tolta la lista di tre check ridondante con le note giorni. La domanda finale resta: è il momento più caldo della pagina.

> **Variabile trial.** Se scendi a tre giorni: `GIORNI 1–2 Usala davvero` / `GIORNO 3 Trova l'angolo`, e sostituisci `7 giorni` in hero, form e FAQ. Sono cinque stringhe. Nota di merito: sette giorni su un prodotto la cui promessa è l'aderenza produce idee migliori di tre, e hai detto tu stesso che il costo è trascurabile.

## Tre profili

Struttura a tab invariata — è il device di message match con i tre angoli Meta ed è il pezzo migliore della pagina. Ridotto da sei elementi di testo per tab a quattro: eliminati `mini` e `signal`, che parafrasavano `title` e `copy`.

```
TRE MODI DI ESSERE GIUSTI
Non cerchiamo una faccia sola.
Scegli il profilo che ti somiglia.

01  LA VOCE CHE RASSICURA
    Rendi semplice ciò che sembra difficile.
    La camera è una conversazione, non un palco.
    Talking head · Spiegazioni chiare · Tono credibile

02  LA VITA VERA
    Trasformi una giornata qualsiasi in una storia.
    Trovi il dettaglio umano, non la pubblicità.
    Storytelling · Scene quotidiane · Naturalezza

03  L'ISTINTO PERFORMANCE
    Pensi ai primi tre secondi.
    Sai aprire forte e capire cosa funziona.
    UGC adv · Hook forti · Test creativi
```

`Trovi il dettaglio umano, non la pubblicità` guadagna forza dal taglio: la versione lunga (`senza sembrare una pubblicità`) diceva la stessa cosa in dodici caratteri in più e con meno mordente.

**Nota per la campagna:** il tab attivo deve arrivare da URL (`?profilo=performance`), così ogni inserzione atterra sul profilo che le corrisponde. È il message match che oggi manca, e costa una riga di codice.

## Come funziona

```
COME FUNZIONA
Il tuo impegno cresce insieme al nostro.

01  Provi Giada        Sette giorni gratis. Nessun contenuto richiesto.   Nessun impegno
02  Ricevi il brief    Obiettivi, riferimenti e limiti già scritti.        Solo esplorazione
03  Proponi l'idea     Hook, sviluppo, perché funziona. Non un video.      Un'idea, non un girato
04  Produciamo         Contratto, tre hook, compenso alla consegna.        Collaborazione vera

⚑ Nessun video prima del contratto.
```

Sostituisce sia il processo attuale sia la journey strip. Lo step 04 nomina i tre hook per la seconda volta: prima come offerta in hero, ora come impegno contrattuale. Ripetizione voluta — è l'unico elemento che ha bisogno di essere assorbito due volte.

## Form

```
PRIMO PASSO
Prova Giada. Poi proponi.
Lascia i contatti. Accesso e brief entro 48 ore.

Nome                    [                    ]
Email                   [                    ]
Canale principale       [ Instagram ▾        ]
Il tuo profilo          [ @iltuonome         ]

☐ Ho almeno 18 anni.
☐ Accetto l'informativa privacy.

[ RICEVI ACCESSO E BRIEF ]

2 minuti · Nessun video · Risposta in 48 ore
```

**Tre correzioni:**

1. **`@iltuonome` sostituisce `https://`.** Il campo attuale è `type="url"` obbligatorio con placeholder `https://`. Su mobile — dove atterra quasi tutto il traffico Meta — significa digitare un URL completo o passare a un'altra app per copiarlo. Handle in testo libero: stessa informazione, un decimo dell'attrito. Applica direttamente il principio di activation energy: la prima azione deve essere banale.
2. **Consenso privacy aggiunto.** Requisito di legge, e un form che chiede email senza informativa segnala amatorialità a chi ha già lavorato con brand strutturati.
3. **`Risposta in 48 ore` promessa esplicitamente.** L'SLA esisteva nel brief e non in pagina. È il migliore riduttore di rischio disponibile a costo zero, e ti vincola a un comportamento che avevi già deciso di tenere.

## FAQ

Le risposte attuali dicono che le condizioni «vengono definite prima di produrre». Ora le condizioni le conosci: vanno scritte.

| Domanda | Risposta |
|---|---|
| Devo avere molti follower? | No. Lavoriamo anche sotto i 10.000. Contano idea, naturalezza e affidabilità. |
| Quanto pagate? | €80 per video selezionato, alla consegna. Definito prima che tu giri. |
| Come usate il video? | Nelle campagne pubblicitarie e sui canali di Giada, senza limite di tempo. Per condizioni diverse, se ne parla prima del contratto. |
| Devo pubblicarlo sul mio profilo? | No, se non vuoi. Si decide prima di produrre. |
| **Cosa sono i tre hook?** | Tre aperture per lo stesso video, girate nella stessa sessione. Cinque minuti in più, tre contenuti da testare. |
| **Chi siete?** | Vivarium, la società che sviluppa Giada. |

Le due nuove voci coprono le due obiezioni più probabili: quella operativa sui tre hook, quella di fiducia su chi c'è dietro.

`Per condizioni diverse, se ne parla prima del contratto` è la frase più importante delle FAQ. Trasforma il perpetuo da imposizione a punto di partenza negoziabile, che è la tua posizione reale. Senza quella riga il paid illimitato fa scappare chi ha alternative — cioè chi ti serve di più.

## CTA finale

```
Hai già un'idea?
Prima prova Giada. Poi proponila.
[ RICEVI ACCESSO E BRIEF ]
```

Il bottone allineato agli altri due. La stessa azione porta lo stesso nome in tutti e tre i punti della pagina: coerenza di vocabolario, principio base della scrittura di interfaccia.

## Bilancio

| | Prima | Dopo |
|---|---|---|
| Caratteri visibili | 4.327 | 3.100 |
| Stringhe | 180 | 128 |
| Sezioni | 10 | 8 (di cui 2 sottili) |
| Ripetizioni del messaggio centrale | 5 | 2 |
| Trust signal | 0 | 3 |
| Dati inventati | 1 | 0 |

**−28% complessivo**, ottenuto pur avendo aggiunto la fascia prove, due FAQ, il consenso privacy e le specifiche di formato. Sulle sole sezioni confrontabili la riduzione è vicina al 40%.

---

# PARTE 3 — Audit UI/UX

## 3.1 Metodo e reference

Analisi condotta sul CSS di produzione. Le reference provengono dalla Knowledge Studio, filtrate sulle categorie *Hero*, *References*, *Typography*, *Design*: nove schede pertinenti su 98.

| Reference | Autore | Principio estratto |
|---|---|---|
| 10 hero section moderne del mese | @creative_vaani | La composizione **Skyline** — quella citata nel brief — «funziona per impatto e riconoscibilità, ma richiede una gerarchia mobile dedicata per non sacrificare leggibilità» |
| Sette hero section moderne come reference UI | @uiuxmanuel | Promessa + prova + prossimo passo, con enfasi non uniforme |
| Anatomia di una landing page SaaS ad alta conversione | @uiux.subash | Alternanza promessa → prova → spiegazione → rimozione obiezioni |
| Real estate website orientato a fiducia e lead | @webdesign_786 | Trust signal e CTA sono parte della UI, non un'aggiunta |
| Sette linguaggi UI per evitare prodotti generici | @avrosh.hq | Scegliere un linguaggio prima dei componenti riduce l'effetto collage |
| Il bianco non è un solo colore | @346eur | L'off-white è una scelta di tono, da verificare in contrasto |
| 17 reference visuali per layout e UI | Andrea | Palette a pochi dominanti con un solo accento per CTA e numeri |
| Prompt Claude per togliere genericità a un sito | @lifeofarjav | Tipografia, whitespace, micro-motion e trust signal sono leve indipendenti |
| Allineare creatività e CTA alle fasi TOFU/MOFU/BOFU | @adswithsimon | Problema e beneficio in alto, piccolo commitment al centro |

La nota su Skyline è quella decisiva, e viene dalla tua stessa libreria: la composizione che hai scelto per la hero è archiviata con l'avvertenza che richiede una gerarchia mobile progettata a parte. Il §15 del brief afferma che la composizione mobile è autonoma — il CSS dice altro, come mostra il finding P0-1.

## 3.2 Finding

### P0 — Bloccanti

**P0-1 · La hero mobile è ingestibile.**

```css
.hero-title { font-size: clamp(4.1rem, 7vw, 7.1rem); line-height:.88; letter-spacing:-.07em }
.hero-composition { min-height:430px; grid-template-columns: minmax(0,.9fr) minmax(320px,1.1fr) minmax(0,.9fr) }
```

Su un viewport da 390px il clamp non scende sotto **65,6px**. `Cerchiamo 5 creator. Conta l'idea, non i follower.` a 65px occupa quattro o cinque righe: circa 290px di solo H1. Sopra ci sono label sezione ed eyebrow, sotto la composizione da 430px minimi che su mobile si impila. **La CTA finisce fuori dal primo viewport con ampio margine**, su un traffico che è quasi tutto mobile.

Correzione: clamp mobile dedicato a `2.6rem` (41,6px), `line-height: .95`, `letter-spacing: -.04em`. Sotto i 560px la hero diventa una colonna sola: H1 → sub → CTA → tre condizioni in riga orizzontale scrollabile → immagine. **La CTA sale sopra l'immagine.** Le condizioni economiche restano visibili come strip, non come pannello.

**P0-2 · Il grafico reach va rimosso.**

```jsx
<div className="reach-row"><span>Organico</span><i style={{"--reach":"62%"}}/></div>
<div className="reach-row"><span>Advertising</span><i style={{"--reach":"92%"}}/></div>
```

Percentuali senza unità né fonte, rese come barre di dati. Il pubblico di questa pagina include creator che leggono dashboard pubblicitarie per mestiere. Sostituire con il fatto: `Le campagne pubblicitarie girano ogni giorno.`

**P0-3 · Nessun trust signal nel DOM.** Nessun logo, nessuna testimonianza, nessun dato, nessuna informazione societaria. Correzione: fascia prove dopo la hero (Parte 2).

**P0-4 · Consenso privacy assente dal form.** Presente solo `Confermo di avere almeno 18 anni`. Va aggiunta la checkbox con link all'informativa.

**P0-5 · Prezzo errato nel DOM.** `Fino a €50` → `€80`.

### P1 — Alta priorità

**P1-1 · La pagina è troppo lunga per una micro-conversione.** Nove sezioni a `padding-block: 136px` più hero, benefici e journey strip: oltre 7.000px di scroll desktop per chiedere un'email. Con il consolidamento della Parte 2 si scende a cinque sezioni piene più due fasce, con `padding-block: 104px` (`80px` sotto 820px). Riduzione stimata: **circa 40% di altezza**.

**P1-2 · Tre sistemi di numerazione in competizione.** Label sezione `01`–`09`, journey strip `01`–`05`, processo `01`–`04`. Tre serie che si sovrappongono nella stessa pagina. La skill `frontend-design` è netta: la numerazione va usata quando l'ordine porta informazione. Qui solo il processo è una sequenza reale. Le label sezione perdono il numero e restano eyebrow testuali; la journey strip sparisce.

**P1-3 · La griglia hero a tre colonne strozza l'offerta.** `minmax(0,.9fr)` su container da 1240px significa circa 300px per la colonna che contiene H2, paragrafo, CTA e due meta. Con la nuova struttura la hero passa a due colonne — `1.15fr / .85fr` — con testo e CTA a sinistra e immagine con condizioni sovrapposte a destra.

**P1-4 · Il teal non passa il contrasto.**

| Combinazione | Ratio | Esito |
|---|---:|---|
| `#00ADB5` su bianco | **2,75** | Fallisce |
| Bianco su `#00ADB5` | **2,75** | Fallisce |
| `#008E96` su bianco | 3,96 | Solo testo grande |
| `#6F7393` su `#FFF5F5` | **4,32** | Sotto AA per il corpo |

Il teal oggi non può portare testo in nessuna delle due direzioni. Correzioni in Parte 5.

**P1-5 · Undici scale tipografiche distinte.** Undici valori `clamp()` diversi per `font-size`: non è una scala, è un elenco. Consolidare a cinque livelli.

**P1-6 · Journey strip ridondante.** Vedi P1-2. Rimuovere.

**P1-7 · Campo profilo ad alto attrito.** `type="url"` obbligatorio con placeholder `https://`. Passare a testo libero con placeholder `@iltuonome`.

### P2 — Rifiniture

**P2-1 · Il denaro domina la gerarchia della hero.** `Fino a €50` è in `<strong>` dentro il pannello destro, che è la seconda area a più alto peso visivo dopo l'H1. Nella nuova composizione le tre condizioni diventano una riga sottile sotto l'immagine, con lo stesso peso tipografico l'una per l'altra: l'informazione resta, la gerarchia smette di contraddire il filtro dichiarato.

**P2-2 · Didascalia decorativa.** `REC · IDEA IN PROVA` più pallino rosso animato è atmosfera. Sostituire con `FORMATO — Reel o TikTok, 45–60 secondi`.

**P2-3 · Nav con tre link su una landing a conversione singola.** Ridotta e riallineata alle sezioni superstiti.

**P2-4 · Griglia benefici asimmetrica senza motivo.** `1.2fr / .8fr` su due righe da `minmax(238px,1fr)` con una card featured. La gerarchia è arbitraria: le tre promesse hanno lo stesso peso. Tre colonne uguali, o due più una.

**P2-5 · Tre soli breakpoint.** `1100 / 820 / 560`. Tra 560 e 820 la hero a tre colonne è già compressa ma non ancora impilata: è la fascia dei tablet e dei phone grandi in orizzontale. Aggiungere un intermedio a 700px.

## 3.3 Cosa funziona e va conservato

Non tutto va toccato.

- **Le tab dei tre profili.** Device di auto-selezione che fa message match con le tre inserzioni. È l'elemento più intelligente della pagina.
- **Gli screenshot reali di prodotto.** Con le note `GIORNI 1–3` / `GIORNI 4–7` sovrapposte creano un mini-percorso dentro la sezione. Coerente con la reference *17 reference visuali* — UI collocata in un contesto narrativo, non mockup isolato.
- **`Nessun video completo prima di contratto`** ripetuto nei due punti giusti.
- **Le basi di accessibilità.** Un solo H1, alt text presenti, label associate, `aria-expanded` sulle FAQ, `role="tablist"` corretto, `prefers-reduced-motion` gestito. È un livello che raramente si trova in un prototipo.
- **La palette.** Navy, teal, blush e periwinkle sono coerenti col brand Giada. Serve una correzione di contrasto, non un cambio di direzione.

---

# PARTE 4 — Nuova architettura

## Desktop

```
┌─────────────────────────────────────────────────────────────────┐
│ GIADA · CREATOR PROGRAM      Chi cerchiamo  Come funziona  FAQ  [CANDIDATI] │
├─────────────────────────────────────────────────────────────────┤
│  HERO — navy                                                     │
│  GIADA × VIVARIUM                                                │
│                                                                  │
│  Cerchiamo 5 creator.              ┌────────────────────────┐   │
│  Conta l'idea, non i follower.     │                        │   │
│                                     │   foto creator          │   │
│  Giada è un assistente di          │                        │   │
│  nutrizione su Telegram.           │                        │   │
│  Provala 7 giorni e proponici      └────────────────────────┘   │
│  un'idea per un video.              FORMATO — Reel o TikTok,     │
│                                     45–60 secondi                │
│  [ RICEVI ACCESSO E BRIEF ]                                      │
│  Come funziona ↓                                                 │
│                                                                  │
│  ── COMPENSO €80 · CONSEGNI 1 video + 3 hook · USO senza scadenza │
└─────────────────────────────────────────────────────────────────┘
│  PROVE — navy scuro, fascia sottile                              │
│  Non è un progetto. È un prodotto che gira.                      │
│  Attiva su Telegram · Campagne ogni giorno · 6 video, 3 creator  │
├─────────────────────────────────────────────────────────────────┤
│  CHI CERCHIAMO — blush          [statement + matrice binaria]    │
├─────────────────────────────────────────────────────────────────┤
│  PROVA GIADA — surface          [copy | screenshot prodotto]     │
├─────────────────────────────────────────────────────────────────┤
│  TRE PROFILI — navy             [tab | pannello]                 │
├─────────────────────────────────────────────────────────────────┤
│  COME FUNZIONA — blush          [4 righe processo]               │
├─────────────────────────────────────────────────────────────────┤
│  CANDIDATURA — navy             [copy | form]                    │
├─────────────────────────────────────────────────────────────────┤
│  FAQ — surface                  [6 voci]                         │
├─────────────────────────────────────────────────────────────────┤
│  CTA FINALE — teal scuro        [ RICEVI ACCESSO E BRIEF ]       │
└─────────────────────────────────────────────────────────────────┘
```

Alternanza cromatica: navy → navy scuro → blush → surface → navy → blush → navy → surface → teal. Nessuna coppia adiacente uguale, ritmo percepito senza aggiungere separatori.

## Mobile — composizione autonoma

```
┌───────────────────────┐
│ GIADA    [CANDIDATI]  │  header compatto, CTA sempre presente
├───────────────────────┤
│ GIADA × VIVARIUM      │
│                       │
│ Cerchiamo 5 creator.  │  H1 41,6px, line-height .95
│ Conta l'idea,         │  3 righe, ~135px
│ non i follower.       │
│                       │
│ Giada è un assistente │  sub 17px
│ di nutrizione su      │
│ Telegram. Provala 7   │
│ giorni e proponici    │
│ un'idea per un video. │
│                       │
│ [RICEVI ACCESSO       │  ◄── CTA dentro il primo viewport
│  E BRIEF]             │
│                       │
│ €80 · 3 hook · no exp │  strip condizioni, scroll orizzontale
├───────────────────────┤  ▼ piega a ~620px
│  [ foto creator ]     │
│  FORMATO — Reel o     │
│  TikTok, 45–60 sec    │
└───────────────────────┘
```

L'inversione è il punto: su desktop l'immagine è a fianco del testo, su mobile scende **sotto la CTA**. Non è una riduzione del desktop, è una composizione diversa — che è quello che la nota su Skyline nella tua libreria chiedeva esplicitamente.

---

# PARTE 5 — Correzioni al design system

## Colore

```css
:root{
  /* invariati */
  --navy:#262b56; --navy-deep:#191e42; --ink:#353b72;
  --blush:#fff5f5; --surface:#fbf9f7; --periwinkle:#a9b5df;

  /* corretti */
  --teal:#00adb5;        /* SOLO superfici, icone ≥24px, riempimenti. Mai testo. */
  --teal-text:#007e85;   /* 4,86 su bianco — link e testo teal */
  --teal-deep:#00757c;   /* 5,48 con testo bianco — bottoni pieni */
  --muted:#686c8c;       /* 4,77 su blush — era 4,32, sotto AA */
}
```

| Uso | Prima | Dopo | Ratio |
|---|---|---|---|
| CTA primaria | teal, bianco 2,75 | **navy `#262b56`, testo bianco** | **13,44** |
| CTA secondaria | — | bordo `--teal-deep`, testo `--teal-text` | 4,86 |
| Link e accenti testuali | `#00adb5` 2,75 | `--teal-text` | 4,86 |
| Testo secondario su blush | `#6f7393` 4,32 | `--muted` | 4,77 |
| Riempimenti, pallini, icone grandi | teal | teal — nessun cambio | n/a |

La CTA primaria in navy invece che teal ha un secondo vantaggio oltre al contrasto: sulle sezioni navy diventa automaticamente teal per inversione, e l'accento resta l'elemento più raro della pagina. Reference — *17 reference visuali*: «palette a pochi dominanti con un accento per CTA, numeri o claim».

## Tipografia

Da undici valori `clamp()` a cinque livelli.

```css
--fs-display: clamp(2.6rem, 6.2vw, 5.2rem);   /* H1 — era fino a 7,1rem */
--fs-h2:      clamp(1.9rem, 3.4vw, 3.1rem);
--fs-h3:      clamp(1.25rem, 1.8vw, 1.6rem);
--fs-body:    clamp(1rem, 1.1vw, 1.125rem);
--fs-label:   .78rem;                          /* eyebrow, tag, meta */
```

Massimo desktop da 113,6px a 83,2px. La hero resta dominante ma smette di mangiarsi il viewport, e a `letter-spacing: -.07em` un display sopra i 100px inizia a compromettere la leggibilità degli accenti — un problema reale in italiano, dove `à` `è` `ì` `ò` `ù` compaiono di continuo. Il tracking scende a `-.045em`.

Geist resta, per coerenza col brand Giada. La differenziazione si ottiene con peso e tracking, non con una seconda famiglia.

## Spaziatura

```css
.section       { padding-block: 104px }   /* era 136px */
.section--thin { padding-block: 56px }    /* fascia prove, CTA finale */
@media (max-width:820px){ .section{ padding-block:80px } }
```

---

# PARTE 6 — Implementazione

## Ordine consigliato

**Blocco 1 — Correzioni bloccanti (mezza giornata)**
1. `Fino a €50` → `€80`
2. Rimuovere il grafico reach
3. Aggiungere il consenso privacy al form
4. Clamp mobile dell'H1 e riordino della hero mobile con CTA sopra l'immagine
5. Token colore corretti

**Blocco 2 — Copy e struttura (una giornata)**
6. Sostituire tutto il copy con la Parte 2
7. Aggiungere la fascia prove
8. Fondere statement + criteri + standards in *Chi cerchiamo*
9. Eliminare la journey strip
10. Togliere i numeri alle label di sezione

**Blocco 3 — Rifinitura (mezza giornata)**
11. Hero a due colonne
12. Scala tipografica a cinque livelli
13. Padding sezioni a 104px
14. Campo profilo da URL a handle
15. Breakpoint intermedio a 700px

**Blocco 4 — Campagna**
16. Tre varianti di H1 su parametro URL, una per angolo
17. Tab profilo preselezionato da `?profilo=`
18. Evento di conversione su dataset separato dal funnel B2C

## Verifiche prima del traffico

- [ ] CTA visibile senza scroll su 390×844 e 1280×720
- [ ] Nessun overflow orizzontale a 320px
- [ ] Contrasto ≥ 4.5:1 su tutto il testo sotto 24px
- [ ] Form: privacy + 18 anni entrambi obbligatori, errori leggibili
- [ ] Un solo H1, gerarchia H2/H3 senza salti
- [ ] Tab e FAQ navigabili da tastiera, focus visibile
- [ ] `prefers-reduced-motion` rispettato
- [ ] Nessuna promessa numerica di reach in pagina
- [ ] `€80` presente in hero e FAQ, `€50` assente ovunque
- [ ] Informativa privacy raggiungibile e reale

---

# PARTE 7 — Decisioni aperte

Cinque punti che il documento non può chiudere al posto tuo.

**1. Trial a 7 o 3 giorni.** Il copy è scritto per 7. Il passaggio a 3 tocca cinque stringhe. Sette giorni producono idee migliori su un prodotto di aderenza, e il costo lo hai definito trascurabile.

**2. Prova sociale nominale.** `6 video con 3 creator` è la versione anonima. Con il consenso di Elena, Maria o Rosa — nome, handle, una riga — la fascia prove raddoppia di forza e diventa authority bias vero. Vale una telefonata.

**3. Il perpetuo in chiaro.** `senza scadenza` in hero è onesto ma filtra. La formulazione alternativa — condizioni standard in hero e dettaglio solo in FAQ — allarga il funnel e sposta l'attrito a valle. Consiglio di tenerlo in hero: l'attrito a valle costa più caro, perché arriva dopo che hai già investito selezione e tempo.

**4. Brand del programma.** Oggi la pagina è Giada con eyebrow `GIADA × VIVARIUM`. Se la sposti sotto Vivarium risolvi in un colpo dominio, pixel separato, informativa e contaminazione della coorte B2C. Hai detto che non è il focus ora — ma è una decisione che costa poco oggi e molto tra sei settimane, quando la campagna gira e il dataset è già sporco.

**5. Retainer fuori pagina.** Confermato secondo la tua indicazione. La conseguenza è che la continuità resta una promessa vaga (`Se c'è fit, puoi produrre più contenuti ogni mese`) invece dell'argomento più forte che hai. Se dopo il primo ciclo vuoi rimetterlo, il blocco condizioni della hero ha già lo spazio.

---

## Nota finale

Una cosa che va detta e che non rientra in nessuna delle due parti: **il prototipo è pubblico.** Il dominio risponde 200 senza autenticazione e ho scaricato bundle, CSS e asset senza credenziali. Il brief lo dà per privato. Prima di mandare traffico — o anche solo prima di condividerlo internamente — vale la pena chiuderlo davvero o accettare consapevolmente che compenso, criteri di selezione e struttura del programma siano leggibili da chiunque, concorrenti inclusi.
