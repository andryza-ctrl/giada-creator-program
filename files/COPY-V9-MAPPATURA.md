# Copy V9 — mappatura slot per slot

**Oggetto:** `giada-creator-program.vercel.app` · riscrittura integrale del copy
**Data:** 23 agosto 2026 · sostituisce il copy provvisorio della V8
**File di consegna:** `App.jsx` (pronto da sostituire) + questa mappatura
**Design:** invariato. Nessuna sezione aggiunta, nessuna sezione tolta, nessun token di colore toccato.
**Destinatario dell'esecuzione:** GPT 5.6 Luna

---

## 0. Le sei regole che hanno guidato la riscrittura

1. **Niente economia nel corpo pagina.** Compenso, contratto e pagamento vivono in una sola FAQ. Nella hero, nelle schede, nel processo e nella barra sticky il denaro non compare mai come compenso: compare una volta sola come *investimento di Vivarium*, che è un argomento di credibilità e non una trattativa.
2. **Il sogno prima del meccanismo.** Sopra la piega si dice cosa diventi, non cosa devi fare. La procedura arriva a metà pagina, quando il creator ha già deciso che gli interessa.
3. **Ordine: comprensione, credibilità, meccanismo, obiezioni, azione.** È il framework di @uiux.subash già usato per l'ordine delle sezioni in V8. Il copy lo rispetta anche dentro le sezioni.
4. **Ogni numero è derivabile.** Nessuna performance inventata. Il breakdown è al §4.
5. **Lingua neutra rispetto al genere.** Nessun participio o aggettivo che obblighi a scegliere: niente "sei pronta", niente "sei pronto", niente "serio". Il pubblico reale è in maggioranza femminile ma la pagina non esclude nessuno.
6. **Frasi corte, parole comuni.** Nessuna frase oltre le due righe. Nessun trattino lungo. Niente gergo di marketing salvo dove il target lo usa già ("brief", "hook" è stato eliminato del tutto).

---

## 1. Cosa è cambiato a livello strutturale

| Prima | Adesso | Perché |
| --- | --- | --- |
| Quattro varianti di H1 con `?angolo=` | **Una sola** | Richiesta del committente: una versione di landing. Il lettore di `?angolo=` resta in piedi e qualsiasi valore cade sul default, quindi nulla si rompe e un eventuale message match futuro costa una riga |
| Sezione "Il patto" (prova · 1 video + 3 hook · utilizzo) | Sezione **"Come lavoriamo insieme"** (libertà · consegna · distribuzione) | Il registro contrattuale sparisce. La terza scheda diventa la scheda più desiderabile della pagina invece della più fredda |
| Consegna a tre hook, dichiarata in tre punti | **Eliminata ovunque** | Decisione del committente: un solo video finito |
| Prova di 7 giorni | **Prova di 3 giorni**, decorrenti dal comando `start` | Nuovo flusso |
| "Risposta alla candidatura in 48 ore" | **Invio immediato** di brief e accesso; le **72 ore** valgono sulla risposta alla proposta | Nuovo flusso: la mail parte da sola, quindi l'attesa non è più un costo ma un incentivo alla compilazione |
| Prova sociale: 6 video, 3 creator pagate, 48 ore | **Rail dei numeri di scala**: spend, persone raggiunte, tasso di iscrizione | Richiesta del committente. La vecchia rail parlava del passato di Vivarium, la nuova parla di cosa succede al video del creator |
| Compenso in 5 punti | **1 punto, in FAQ** | Richiesta del committente |
| Form: 4 campi | **5 campi**, con una domanda aperta | Richiesta del committente: vedere che tipo è il creator prima che produca l'idea |

---

## 2. Mappatura completa

### 2.1 Costanti

| Slot | Prima | Adesso |
| --- | --- | --- |
| `CTA_LABEL` | Ricevi accesso e brief | **Ricevi brief e accesso** |

L'ordine si inverte perché adesso il brief è la cosa che arriva per prima e che vale di più: è il documento che dice al creator che tipo di libertà avrà. Resta l'unica etichetta di CTA della pagina, in tutti e quattro i punti in cui compare.

### 2.2 Hero

| Slot | Testo |
| --- | --- |
| H1, riga 1 | **Diventa una voce di Giada.** |
| H1, riga 2 (corsivo) | **L'idea resta tua.** |
| Sottotitolo | Giada è un assistente di nutrizione su Telegram. Provala gratis, poi proponici la tua idea per un video. |
| Azione primaria | Ricevi brief e accesso |
| Azione secondaria | Come funziona |
| Etichetta sinistra | Girato col telefono *(invariata)* |
| Etichetta destra | Nessun set *(invariata)* |
| Pastiglia | **Oltre 10.000€ al mese in pubblicità** |
| Riga accanto | Il tuo video gira lì dentro, ogni giorno, in tutta Italia. |

Le due promesse che hai messo in cima si dividono i compiti: l'H1 porta *"diventi una delle voci del brand"* e *"l'idea è tua"*, la riga sotto porta *"il tuo contenuto gira davanti a un pubblico vero"*. Metterle tutte e tre nell'H1 avrebbe prodotto un titolo da tre righe.

**Vincolo rispettato:** l'H1 nuovo è di **43 caratteri contro i 49** del precedente. La tenuta della hero nel primo schermo è misurata (913px su 950 desktop, 806 su 844 mobile) e un titolo più lungo la rompeva. La pastiglia cresce di 12 caratteri, ma il titolo ne libera 6 su un font display: il saldo è positivo. **Va comunque rimisurata** con la passata Playwright del §14 dell'handoff.

### 2.3 Come lavoriamo insieme (ex "Il patto")

Titolo: **Come lavoriamo insieme.** · Sommario: *Tre cose chiare prima ancora che tu ci scriva. Restano queste, fino alla consegna.*

| # | Scheda | Numero | Riga | Testo |
| --- | --- | --- | --- | --- |
| 01 | Libertà · COME NASCE | **0** copioni da recitare | L'idea è tua, dall'inizio. | Ti diamo obiettivi, riferimenti e limiti. Il come lo decidi tu: è il motivo per cui ti stiamo cercando. |
| 02 | Consegna · COSA PRODUCI | **1** video finito | 30-60 secondi, Reel e TikTok. | Girato da te, col telefono, dove vivi. Non serve un set, non serve una troupe. |
| 03 | Distribuzione · DOVE FINISCE | **2** milioni di visualizzazioni | Ogni mese, in tutta Italia. | Il tuo video entra nelle campagne di Giada. Se ti va, esce anche sul tuo profilo come collaborazione. |

Piede delle schede: *Linee guida, non uno script* · *Una sola consegna* · *Advertising e organico*.

Nota sotto la griglia: **Nessun video prima che ci siamo capiti. Prima l'idea, poi si gira.**

Lo "0" della prima scheda è la scelta più aggressiva della pagina. Il formato della scheda vuole un numero grande, e l'unico numero che descrive la libertà creativa è quante costrizioni riceverai. Funziona perché è vero e perché è il contrario di quello che un creator si aspetta da un brand.

La terza scheda è il punto in cui il sogno diventa concreto. Prima diceva "utilizzo senza scadenza", che è una clausola; adesso dice quanta gente vedrà il tuo video, che è il motivo per cui uno accetta.

### 2.4 Prova il prodotto

| Slot | Testo |
| --- | --- |
| Titolo | Prima la usi. *Poi la racconti.* *(invariato)* |
| Sommario | Tre giorni di accesso gratuito. Servono a te, non a noi. |
| Riga 1 | **SENZA COMPITI** — Usala davvero, come la useresti se nessuno te lo avesse chiesto. |
| Riga 2 | **SENZA FRETTA** — Ci scrivi quando hai trovato il momento che meriterebbe di aprire un video. |
| Link | Scegli il profilo che ti somiglia *(invariato)* |
| Domanda sullo schermo | Quale momento aprirebbe il tuo video? *(invariato)* |

Le due righe non scandiscono più i giorni, come richiesto. Le etichette diventano due rassicurazioni ("nessun compito", "nessuna scadenza") invece di due tappe, e questo toglie il retrogusto di prova a tempo.

### 2.5 La rail dei numeri

| Numero | Etichetta |
| --- | --- |
| **10.000€** | investiti ogni mese in pubblicità |
| **1,2 mln** | di persone raggiunte ogni mese |
| **50%** | di chi arriva inizia a usare Giada |

La sequenza è un ragionamento, non tre statistiche: *spendiamo davvero → arriviamo a tanta gente → quella gente entra davvero nel prodotto*. Il terzo numero è quello che dice al creator che il suo lavoro produce un effetto misurabile, ed è l'aggancio naturale se un giorno introduci un accordo legato ai risultati.

### 2.6 Chi cerchiamo

Titolo: **Puoi avere pochi follower. *Non poche idee.*** · Sommario: *Guardiamo l'idea, la naturalezza e la parola data. L'esperienza aiuta, non decide.*

| Sei in linea se | Dettaglio |
| --- | --- |
| Giri contenuti tuoi | Idea, riprese e voce partono da te. |
| Curi audio e luce | Bastano una finestra e una stanza silenziosa. |
| Rispetti i tempi | Consegni quando hai detto che consegni. |
| Arrivi con un'idea | Un'apertura e il motivo per cui può funzionare. |

| Non basta |
| --- |
| Follower senza una voce |
| Un video riciclato da un altro brand |
| Nessuna voglia di provare il prodotto |
| Una richiesta al posto di una proposta |

Piede: *Nessuno di questi punti è squalificante da solo. (invariato)*

Il vecchio titolo diceva "Devi essere serio": maschile obbligato e vagamente paternalistico. Quello nuovo dice la stessa cosa ribaltando l'obiezione numero uno del target ("ho pochi follower") in un complimento. La terza voce di "Non basta" era *"Interesse solo per il compenso"*: unico riferimento economico rimasto in quella colonna, sostituito da un filtro che serve di più al nuovo flusso, cioè chi non ha voglia di provare il prodotto.

### 2.7 Profili

Occhiello: **Tre modi di essere in linea** (prima: "Tre modi di essere giusti", che obbligava il maschile).

| # | Profilo | Titolo | Citazione |
| --- | --- | --- | --- |
| 01 | La voce che rassicura | Rendi semplice quello che sembra difficile. | La camera è una conversazione, non un palco. |
| 02 | La vita vera | Trasformi una giornata qualsiasi in una storia. | Trovi il dettaglio umano, non lo spot. |
| 03 | L'istinto performance | Pensi ai primi tre secondi. | Sai aprire forte e tenere incollato chi guarda. |

Tag invariati. "Non lo spot" al posto di "non la pubblicità" perché la parola pubblicità nella pagina adesso ha un valore positivo, ed era l'unico punto in cui suonava come qualcosa da evitare.

### 2.8 Come funziona

Titolo e sommario invariati: **Il tuo impegno cresce *insieme al nostro.*** · *Quattro passaggi. Nessuno di corsa.*

| # | Passo | Testo |
| --- | --- | --- |
| 01 | Lasci i contatti | Brief e accesso arrivano subito nella tua mail. |
| 02 | Provi Giada | Tre giorni gratis. Nessun contenuto richiesto. |
| 03 | Proponi la tua idea | Ti diciamo entro 72 ore se si gira. Non serve un video. |
| 04 | Giri il video | Un video finito. Poi entra nelle campagne. |

Il contratto e il pagamento erano allo step 04 e sono usciti: restano nel flusso reale, non nella pagina. Le 72 ore stanno allo step 03 perché è lì che il creator ha investito qualcosa di suo ed è lì che l'attesa gli pesa.

### 2.9 FAQ

Titolo invariato. Colonna laterale: *Due minuti. Brief e accesso subito nella tua mail.*

L'ordine è deliberato: si comincia dall'obiezione che blocca di più (i follower), si spiega cosa si riceve, si toglie la paura del copione, **e solo al quarto posto arriva il compenso**. Chi legge fin lì ha già deciso che il programma gli piace.

| # | Domanda | Risposta |
| --- | --- | --- |
| 1 | Devo avere molti follower? | No. Lavoriamo anche sotto i 10.000. Contano l'idea, la naturalezza e i tempi rispettati. |
| 2 | Cosa ricevo dopo il form? | Subito, nella tua mail: un brief in PDF e il link per provare Giada gratis per tre giorni. |
| 3 | Mi date uno script da recitare? | No. Il brief dà obiettivi, riferimenti e limiti. L'idea, le parole e il taglio restano tuoi. |
| 4 | Quanto pagate? | **Da 50€ a video selezionato.** Con chi lavora già con i brand e porta risultati si ragiona su cifre più alte, su più video o su un accordo legato ai risultati. |
| 5 | Come usate il video? | Nelle campagne pubblicitarie di Giada e sui nostri canali, senza limite di tempo. È il motivo per cui il programma esiste. |
| 6 | Devo pubblicarlo sul mio profilo? | Solo se ti va. In quel caso esce come collaborazione, così resta anche tuo. |
| 7 | Chi siete? | Vivarium, la società che sviluppa Giada. |

Tre note sulla quarta risposta:

- **"Da 50€" e mai "fino a".** "Fino a" segnala un tetto e quindi "probabilmente meno"; "da" segnala un pavimento e quindi "può salire". È la stessa cifra e comunica l'opposto.
- **Il tetto alto non è scritto.** Sai di poterti spingere a 60-70€ più una percentuale, ma scriverlo lo trasforma nel nuovo prezzo di partenza di ogni trattativa. La frase apre tre porte (cifra, continuità, risultati) senza numerarne nessuna, e la condizione per aprirle è dichiarata: lavorare già con i brand e portare risultati.
- **"Accordo legato ai risultati" resta vago di proposito**, come chiesto: non dice se su onboarding o su paganti.

La risposta 5 dice che il video gira in advertising senza limite di tempo. So che lo trovi sottinteso; lo tengo scritto perché è l'unica cosa che, se un creator la scopre dopo, gli fa cambiare idea sul programma. Sta in FAQ, in una riga, senza linguaggio da contratto: è esplicito e leggero.

### 2.10 Finale e form

| Slot | Testo |
| --- | --- |
| Occhiello | Hai già un'idea? *(invariato)* |
| Titolo | Prova Giada. *Poi proponi.* *(invariato)* |
| Sommario | Lascia i contatti. Brief e accesso arrivano subito. |
| Nota | Nessun video da mandare adesso. |
| Nota sotto il bottone | Due minuti. Brief e accesso subito nella tua mail. |
| Conferma di invio | Ci siamo. |

**Campo nuovo, come richiesto:** *Raccontati in due righe* — segnaposto *"Che contenuti fai? Perché Giada ti incuriosisce? Se hai altri profili, lasciali qui."*

Una sola domanda aperta e non tre: ogni campo in più costa candidature, e una domanda formulata così ti dà comunque i tre segnali che ti servono (che tipo di contenuti fa, se ha capito il prodotto, dove altro pubblica). Chi scrive due righe generiche si è già auto-selezionato.

### 2.11 Barra sticky mobile

| Prima | Adesso |
| --- | --- |
| €80 a video selezionato | **Brief e accesso, subito** |

---

## 3. Cosa deve fare chi esegue

Il file `App.jsx` è già completo: si sostituisce `src/App.jsx` per intero. Tre cose da sapere.

**3.1 Import.** `Clock` non è più usato ed è stato sostituito da `Lightbulb` nell'import da `lucide-react`. Se resta `Clock` il lint fallisce su variabile non usata.

**3.2 Il `textarea` non è coperto dal CSS.** Oggi `src/styles.css` stila solo `input` e `select`. Patch minima, tre punti:

```css
/* riga ~1577 */
.form-card input:not([type="checkbox"]),
.form-card select,
.form-card textarea { /* ...regole esistenti invariate... */ }

/* riga ~1590 */
.form-card input::placeholder,
.form-card textarea::placeholder { color: var(--ink-soft); }

/* riga ~1591 */
.form-card input:focus,
.form-card select:focus,
.form-card textarea:focus { /* ...regole esistenti invariate... */ }

/* aggiunta */
.form-card textarea { resize: vertical; min-height: 96px; line-height: 1.45; }
```

**3.3 Da rifare dopo la sostituzione.** La passata di verifica del §14 dell'handoff, in particolare due controlli:

- **tenuta della hero**: la riga della pastiglia deve restare nel primo schermo a 1512×950 e a 390×844. È il controllo che ha più probabilità di saltare, perché la pastiglia è cresciuta;
- **contrasto**: il `textarea` è un nodo di testo nuovo su superficie navy, va campionato come gli altri.

Restano invariati: palette, quote di palette 67/33, catena dei gradienti, tipografia, movimento. Nessuna sezione aggiunta o rimossa, quindi le quote non vanno ricalcolate.

---

## 4. I numeri: da dove vengono

Tutto quello che è scritto in pagina è derivato da due valori che mi hai dato, più un dato di funnel.

| Passaggio | Valore | Origine |
| --- | --- | --- |
| Spend mensile | 10.000 - 15.000€ | dichiarato |
| CPM medio | 5€ | dichiarato |
| Impression / mese | ~2.500.000 | 12.500 / 5 × 1.000 |
| Frequenza | ~2 | assunzione di mercato |
| Persone raggiunte / mese | ~1.250.000 | impression / frequenza |
| Iscrizione | 50% | dichiarato |

**Cosa è scritto in pagina, e con che margine.**

- *"Oltre 10.000€ al mese in pubblicità"* — conservativo: la media reale è 12.500€.
- *"2 milioni di visualizzazioni"* (scheda 03) — conservativo: la stima è 2,5 milioni. Sono impression, e "visualizzazioni" è la parola con cui un creator le chiama.
- *"1,2 mln di persone raggiunte ogni mese"* — è il numero più fragile, perché la frequenza è un'assunzione mia e non un tuo dato. **Sostituiscilo con la reach reale a 30 giorni presa da Gestione Inserzioni.** Finché non lo fai, il numero è difendibile ma non osservato.
- *"50% di chi arriva inizia a usare Giada"* — tuo dato, riformulato per essere leggibile da un creator invece che da un growth manager.

**Cosa non è scritto, ed è una scelta.** Il plurale "milioni di persone" che avevi in mente non regge sul mese: sono 1,2 milioni. Regge sul trimestre, ma un dato trimestrale in una hero suona come un numero gonfiato apposta. La pagina dice "2 milioni di visualizzazioni al mese", che è vero, verificabile e altrettanto grande agli occhi di chi legge.

---

## 5. Le due cose che restano aperte

1. **Il costo per asset è raddoppiato.** Senza i tre hook, con 50€ a video, il costo per asset passa da 26,7€ a 50€ e il rapporto brief/asset torna 1:1. Non è un problema di copy e non lo tratta la pagina, ma cambia quanti creator servono per coprire 21-43 asset al mese. Vale la pena rifare quel conto prima di aprire la campagna.
2. **La reach reale.** Vedi §4. È l'unico numero della pagina che ti conviene sostituire con un dato osservato prima di mandare traffico.
