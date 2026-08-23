# Brief v2 — Giada Creator Program

**Progetto:** sistema Vivarium per il recruiting e la produzione continuativa di creative UGC per Giada
**Versione:** 2.0 — sostituisce integralmente la v1 del 16 agosto 2026
**Data:** 16 agosto 2026
**Stato:** modello dimensionato, economia definita, pilot pronto al lancio
**Documento collegato:** `AUDIT-GIADA-CREATOR-PROGRAM-copy-uiux.md`

---

## Come leggere questo documento

Ogni affermazione portante è etichettata per livello di evidenza. La v1 mescolava fatti osservati, decisioni prese e proiezioni inventate senza distinguerli, e questo ha permesso a un CPL arbitrario e a un set di avatar circolari di viaggiare per venti sezioni come se fossero dati.

| Tag | Significato |
|---|---|
| **`[F]`** | Fatto verificato — osservato, misurato o direttamente constatato |
| **`[D]`** | Decisione presa — vincolo operativo, non ridiscutibile senza motivo nuovo |
| **`[A]`** | Assunzione dichiarata — accettata senza test, consapevolmente |
| **`[I]`** | Ipotesi di modello — proiezione da validare col pilot |
| **`[?]`** | Aperto — richiede una decisione |

---

## 1. Executive summary

Il Creator Program non è una campagna di recruiting. È il modo con cui Vivarium si procura il volume di creative necessario a portare lo spend Meta di Giada da €3.000 a €15.000 al mese senza che la produzione diventi il collo di bottiglia. **`[D]`**

Il salto rispetto alla v1 è di natura quantitativa. La v1 definiva il successo come «12–20 video al mese» senza mai calcolare quante creative servissero davvero. Con i numeri reali — 7–10 test a settimana a regime, di cui almeno il 70% UGC — quel target copre circa il 40% del fabbisogno. **`[F]`**

Il gap non si chiude assumendo più creator, perché il vincolo non è il budget: sono le ore di Andrea, unico autore dei brief e unico giudice della selezione. Si chiude cambiando cosa si chiede a ogni singolo video.

> **La leva centrale del programma è la consegna a tre hook.** Ogni video viene girato con tre aperture diverse nella stessa sessione, stessa scena, stessa luce, stesso outfit. Al creator costa cinque minuti in più. A Vivarium triplica gli asset testabili a parità di brief, di fee e di review. **`[D]`**

| | Video/mese | Asset/mese | Costo/mese | Costo/asset |
|---|---:|---:|---:|---:|
| Modello v1 (1 hook) | 15 | 15 | €1.200 | €80 |
| **Modello v2 (3 hook)** | **15** | **45** | **€1.200** | **€26,7** |

Cinque creator attivi che consegnano tre video al mese ciascuno producono 45 asset: sufficienti a coprire l'intero fabbisogno UGC anche nello scenario più aggressivo. Il costo è €1.200 al mese, il **7,7% di uno spend da €15.000**.

---

## 2. Cosa cambia rispetto alla v1

| Area | v1 | v2 | Perché |
|---|---|---|---|
| Obiettivo | «12–20 video/mese» | 30–45 asset/mese da 5 creator | Il fabbisogno non era mai stato calcolato |
| Unità di consegna | 1 video | 1 video + 3 hook | Unico modo di chiudere il gap senza aggiungere creator |
| Compenso | «fino a €50» | €80 a video, tetto assoluto | €50 era sotto il prezzo già pagato da Vivarium |
| Diritti | «da definire» | Paid perpetuo incluso nel prezzo | Il paid è lo scopo del programma, non un extra |
| RAW | Voce prioritaria della rate card | Fuori scope | Non esiste capacità di editing interna |
| Continuità | «3–5 video/mese» in pagina | Retainer fuori pagina, leva post-primo-video | Non promettere volumi non garantiti |
| Avatar | Tre segmenti con pesi 50/35/15 | Tre angoli creativi, pesi non usati come filtro | I pesi non hanno base empirica |
| Rating database | Trattato come evidenza | Lista di outreach ordinata | Model-generated per similarità a n=3 |
| CPL pilota | €5 | €8–15 | Il €5 era una proiezione arbitraria |
| Landing | «pubblicazione privata» | Pubblica e scaricabile senza credenziali | Verificato |
| Copy landing | Provvisorio | Riscritto, −28% caratteri | Vedi documento di audit |

---

## 3. Il problema dimensionato

### 3.1 Traiettoria di spend **`[D]`**

| Fase | Periodo | Spend |
|---|---|---:|
| Attuale | Agosto 2026 | ~€3.000/mese |
| Ramp | Entro ottobre 2026 | €10.000/mese |
| Target | Entro dicembre 2026 | €500/giorno ≈ €15.000/mese |

### 3.2 Fabbisogno di creative **`[F]`**

| | Oggi | A €500/giorno |
|---|---:|---:|
| Test a settimana | 2–3 | 7–10 |
| Test al mese | 10–13 | 30–43 |
| Quota UGC | — | ≥70%, senza tetto |
| **Asset UGC al mese** | — | **21–43** |

La quota UGC non ha un limite superiore dichiarato: nello scenario in cui l'UGC continua a battere ogni altro formato, il fabbisogno UGC coincide con il fabbisogno totale.

### 3.3 Vita utile di una creative **`[F]`**

Due o tre mesi prima che il CPA degradi. Il ricambio non deve essere frenetico, ma deve essere continuo: la libreria di vincitori attivi va rialimentata prima che la coda si esaurisca, non dopo.

### 3.4 Il vincolo reale **`[F]`**

Un brief produce un video, un video produce un asset. Non esiste capacità di editing interna: Andrea scrive i brief con Claude o GPT, il creator li sviluppa con la propria creatività, e da lì esce un montato singolo.

Ne discendono due conseguenze:

1. **I RAW sono inutili.** Senza qualcuno che li monti, i file grezzi sono un costo negoziale speso per niente. Escono dalla rate card.
2. **Il moltiplicatore deve stare nel brief, non nel montaggio.** L'unico punto in cui Vivarium può triplicare l'output senza triplicare il lavoro è il momento in cui scrive cosa girare.

---

## 4. Il modello a tre hook

### 4.1 Meccanica **`[D]`**

Il brief contiene tre aperture alternative per lo stesso video. Il creator gira il corpo una volta e le tre aperture di seguito, nella stessa sessione: stessa location, stessa luce, stesso outfit, stesso audio. Consegna quattro file — il corpo e le tre aperture — oppure tre montati completi, a seconda di come lavora.

Gli hook li scrive Andrea, dentro il brief che sta già scrivendo. Costo marginale: zero.

### 4.2 Perché funziona

**Sul volume.** Triplica gli asset a parità di brief, fee, creator e review. Le tre varianti si giudicano in blocco: una decisione, non tre.

**Sul metodo.** L'hook è la variabile che spiega la maggior parte della varianza di performance in un video breve. **`[A]`** Testandolo su un corpo identico la si isola pulita. Con un asset per video si confrontano video interi, e non si sa mai cosa abbia fatto la differenza. Il modello a tre hook non produce solo più creative: produce creative che insegnano qualcosa.

### 4.3 Vincolo di implementazione **`[D]`**

Deve stare nel brief e nel prezzo **dal primo contatto**. Chiesto dopo la firma diventa una richiesta di lavoro non pagato, ed è esattamente il rischio «spec work» che il programma dichiara di voler evitare.

Presenza obbligatoria in tre punti: blocco condizioni della hero, step 04 del processo in pagina, brief operativo.

---

## 5. Economia

### 5.1 Storico **`[F]`**

Elena, Maria e Rosa hanno già collaborato con Vivarium: due video ciascuna, **€80 a video, sei video totali**. Nessun diritto paid è stato concordato in nessuno dei tre accordi.

Questo è l'unico prezzo osservato che Vivarium possiede. La v1 proponeva €50 a creator sconosciuti: meno di quanto già pagato, a fronte di un rischio più alto.

### 5.2 Rate card **`[D]`**

**Test d'ingresso — €80**
- 1 video, 45–60 secondi, formato Reel o TikTok
- 3 hook alternativi girati nella stessa sessione
- Uso paid e organico senza limite di durata né territorio
- 1 revisione inclusa
- Pagamento alla consegna approvata

**Retainer — €200/mese** *(leva post-primo-video, non pubblicata)*
- 3 video al mese, 3 hook ciascuno
- Stessi diritti, 1 revisione per video
- €66,7 a video, **€22,2 ad asset**

Il retainer sta sotto gli €80 già pagati in passato e resta dentro il tetto. Il suo valore vero non è lo sconto: è che offre al creator la continuità che tutti e tre gli avatar mettono al primo posto tra i bisogni. Un creator che rifiuta €80 una tantum con paid perpetuo spesso accetta €200 ricorrenti con gli stessi diritti, perché sta valutando due cose diverse.

**Tetto assoluto: €80 a video.** Nessuna eccezione. **`[D]`**

### 5.3 Costo a regime

| Voce | Mensile |
|---|---:|
| 5 creator × 3 video × €80 | €1.200 |
| Asset prodotti | 45 |
| Costo per asset | €26,7 |
| Incidenza su spend €15.000 | **7,7%** |

Con il retainer al posto del singolo video: €1.000/mese, €22,2 ad asset, **6,7%** di incidenza.

### 5.4 Costo del pilot

| Voce | Importo |
|---|---:|
| Budget media campagna B2B | €200 |
| Fee sui primi test pagati (2–3 × €80) | €160–240 |
| Costo marginale trial | Trascurabile **`[F]`** |
| **Totale cash** | **€360–440** |
| Tempo Andrea | Non quantificato **`[?]`** |

---

## 6. Diritti

### 6.1 Posizione standard **`[D]`**

Uso paid e organico senza limite di tempo né di territorio, incluso negli €80. La ragione è strutturale: il paid è lo scopo del programma. Un video che non può girare in campagna non serve.

### 6.2 Contro-offerte **`[D]`**

Valutate caso per caso, entro il tetto di €80. Un creator che chiede un extra per il perpetuo può ottenere in cambio la continuità o una durata definita, non un prezzo più alto.

### 6.3 Effetto di selezione **`[I]`**

Il perpetuo a €80 filtra: chi ha alternative negozia o rifiuta, chi non ne ha accetta. Esiste il rischio di selezionare al contrario rispetto all'obiettivo. La mitigazione non è abbassare il prezzo ma dichiarare in pagina che le condizioni sono negoziabili — riga già presente nelle FAQ riscritte.

### 6.4 Ritiro del consenso **`[?]`**

Se una creator volesse ritirare volto e nome mentre un asset gira in una campagna da €500/giorno, la posizione di Vivarium dipende interamente da cosa dice il contratto. Serve una clausola esplicita su preavviso, finestra di ritiro e gestione degli asset già in campagna, scritta prima del primo pagamento.

> Non sono un consulente legale: questa sezione indica cosa va deciso, non come formularlo. Il contratto va scritto o rivisto da un professionista.

---

## 7. Database creator e avatar

### 7.1 Stato **`[F]`**

193 creator, 35 colonne, deduplica per handle Instagram normalizzato, ordinamento per rating decrescente. CSV come fonte di verità, XLSX come vista operativa.

### 7.2 Come è stato costruito il rating — e cosa significa **`[F]`**

Elena, Maria e Rosa hanno un rating assegnato da Andrea, sulla base di collaborazioni reali: **96, 94 e 82**. Il rating di tutti gli altri 190 è **generato da un modello per similarità di pattern comportamentali e stilistici rispetto a quelle tre**.

Conseguenza da registrare esplicitamente:

> I tre avatar non sono un'inferenza sui 193 creator. Sono un'estrapolazione da n=3. La struttura è circolare: il rating misura la somiglianza a tre persone, e gli avatar descrivono le funzioni creative di quelle stesse tre persone.

**Uso corretto del database:** lista di outreach ordinata per plausibilità. È esattamente ciò per cui serve, ed è utile.

**Uso scorretto:** trattare la distribuzione dei rating come evidenza sul mercato creator italiano, o i pesi di sourcing come dati.

### 7.3 I tre avatar — declassati ad angoli **`[D]`**

I pesi 50/35/15 della v1 escono dal documento come criterio di sourcing. Restano validi come **angoli creativi per le tre inserzioni Meta e come device di auto-selezione in pagina**, che è il ruolo in cui funzionano bene.

Il mix reale lo determina il test: quale angolo porta i creator che poi consegnano video utilizzabili.

**Avatar 1 — La professionista rassicurante.** Funzione: fiducia e permesso. Nutrizionista, dietista, farmacista con qualifica verificabile. Elena appartiene a questo gruppo e ha già prodotto. Vincolo noto: i professionisti sanitari hanno limiti deontologici sulla pubblicità. Non ha bloccato la collaborazione con Elena. **`[F]`**

**Avatar 2 — La narratrice della vita reale.** Funzione: identificazione e contesto d'uso. Creator food, family o lifestyle.

**Avatar 3 — La UGC performance partner.** Funzione: hook, ritmo, obiezioni, velocità di test. È l'avatar che si allinea meglio al modello a tre hook: ragiona già in varianti.

### 7.4 Il dato mancante **`[?]`**

Dei sei video già prodotti non sono stati recuperati CPA, CTR, hook rate, spesa per asset e durata di attività. Andrea ha classificato la cosa come non prioritaria.

Va registrato come debito perché ha tre conseguenze concrete: la scorecard di selezione resta intuizione invece che criterio osservato; non si sa se €80 fosse davvero troppo; i nuovi creator non ricevono esempi verificati di cosa ha funzionato.

---

## 8. Funnel pilota

### 8.1 Correzione del modello **`[I]`**

Il CPL di €5 della v1 era una proiezione arbitraria, applicata a una campagna B2B lead-gen rivolta a creator — asta e audience diverse dal funnel B2C di Giada. Modello rivisto con CPL €8–15.

| Fase | Tasso ipotizzato | Scenario basso | Scenario alto |
|---|---:|---:|---:|
| Budget media | — | €200 | €200 |
| CPL | €15 / €8 | 13 lead | 25 lead |
| Idonei | 75% | 10 | 19 |
| Trial attivati | 70% | 7 | 13 |
| Trial realmente usati | 60% | 4 | 8 |
| Proposte ricevute | 55% | 2 | 4 |
| **Contrattualizzati** | 65% | **1–2** | **3** |

Tutti i tassi sono assunzioni di pianificazione. Il pilot esiste per misurarli.

### 8.2 Implicazione **`[F]`**

**€200 non bastano per arrivare a 5 creator.** Producono realisticamente 2–3 contrattualizzati. Le opzioni sono tre:

1. Alzare il media a €400–500 — costo per creator contrattualizzato stimato ~€80–100 **`[I]`**
2. Chiudere il gap con l'outbound ai top-20 del database, già in corso **`[F]`**
3. Accettare 3 creator nel primo ciclo e riaccendere la campagna

L'opzione 2 è la più efficiente e sta già girando in parallelo. Il pilot inbound non deve produrre 5 creator da solo: deve produrre 2–3 creator **e** un CPL misurato.

### 8.3 Drop-off nel tempo **`[?]`**

Dei creator contrattualizzati, una quota non resta attiva oltre il terzo mese. Se il target di regime è 5 attivi, il bacino contrattualizzato deve essere più ampio. Ordine di grandezza da validare col primo ciclo.

---

## 9. Workflow operativo

1. **Campagna Meta B2B** — tre inserzioni, un angolo per avatar, dataset separato dal funnel B2C
2. **Landing** — versione riscritta, un solo micro-commitment
3. **Form** — nome, email, canale, handle, maggiore età, consenso privacy
4. **Accesso a Giada** — 7 giorni, funnel parallelo che non tocca la coorte B2C **`[D]`**
5. **Brief introduttivo** — obiettivi, territori, limiti, riferimenti, **struttura a tre hook**, 2–3 storie utente anonimizzate, i 5 hook che oggi funzionano meglio nell'account
6. **Proposta del creator** — hook, sviluppo, perché può funzionare. Form strutturato, non email libera
7. **Selezione** — giudizio di Andrea, human in the loop **`[D]`**
8. **Contratto e diritti**
9. **Brief finale** con i tre hook definitivi
10. **Produzione** — corpo + tre aperture, stessa sessione
11. **Revisione** — una inclusa
12. **Pagamento alla consegna approvata**
13. **Test in campagna** — le tre varianti entrano insieme
14. **Retainer** proposto ai creator che superano il fit operativo

Principio invariato dalla v1: *l'impegno del creator cresce solo quando cresce anche quello di Vivarium.* Nessun video completo prima del contratto.

### 9.1 Sul brief

Consegnare solo obiettivi e limiti produce proposte generiche. Con una prova di sette giorni e un brief nudo, tredici creator arrivano con la stessa idea e la scorecard non discrimina.

Il brief deve contenere anche materiale di partenza: due o tre storie utente reali anonimizzate e i cinque hook che oggi performano meglio nell'account. **`[D]`** Costa mezz'ora di preparazione una volta sola e alza il pavimento di tutte le proposte.

---

## 10. KPI e gate

### 10.1 Metriche

Il CPL non è la metrica finale. In ordine di importanza:

1. Costo per creator contrattualizzato
2. Percentuale di trial realmente usati
3. Percentuale di proposte ricevute sui trial avviati
4. **Costo per asset** — €26,7 a regime, il numero che governa tutto il modello
5. Puntualità di consegna e numero di revisioni richieste
6. Winner rate delle creative
7. Costo per creative scalabile
8. Creator attivi e asset mensili

### 10.2 Gate del pilot **`[?]` — da confermare**

Andrea ha definito il fail come «dopo €200 non portiamo a casa video di qualità da creator nuovi». Va reso misurabile, perché lo scenario più probabile non è il successo pieno né il fallimento netto: è l'ambiguo.

| Gate | Quando | Soglia pass | Se fallisce |
|---|---|---|---|
| **G1 — Domanda** | Fine settimana 2 | ≥10 lead qualificati | CPL fuori scala: spegni o cambia angolo |
| **G2 — Funnel** | Fine settimana 4 | ≥3 proposte valutabili | Il problema è landing o offerta, non discovery |
| **G3 — Qualità** | Fine settimana 6 | ≥2 video giudicati utilizzabili | Fail: spegni il programma inbound |
| **G4 — Sistema** | Mese 3 | ≥4 creator attivi, ≥30 asset/mese | Resta pilot, non è ancora una factory |

**Caso ambiguo dichiarato in anticipo:** 3 video buoni e 3 scarsi al G3 è un **pass parziale**. Si prosegue con i tre buoni, non si riapre la campagna finché non arrivano dati di performance dalle prime creative in asta.

### 10.3 Definizione di «affidabile» **`[?]`**

È il criterio pass/fail dichiarato per il regime — cinque creator affidabili — e non è ancora definito in comportamenti osservabili. Proposta da confermare, misurata sul primo ciclo:

- consegna entro la data concordata, senza solleciti
- una sola revisione richiesta
- audio pulito e viso in camera
- i tre hook effettivamente consegnati, non due
- il brief seguito senza reinterpretazioni non concordate

---

## 11. Rischi e guardrail

| Rischio | Mitigazione | Stato |
|---|---|---|
| Trial usato opportunisticamente | Prequalifica, finestra chiusa, tracciamento dell'uso | Presidiato |
| Candidature non confrontabili | Form strutturato con campi comuni | Presidiato |
| Percezione di spec work | Idea e non video prima del contratto; tre hook nell'offerta dall'inizio | Presidiato |
| Promessa di reach | Nessun numero in pagina, nessun grafico | Corretto nell'audit |
| Contaminazione della coorte B2C | Funnel trial parallelo | Deciso, da implementare |
| Dataset Meta sporcato dal lead B2B | Dataset separato | **Aperto — vedi §13** |
| Andrea come collo di bottiglia | Tre hook riducono il rapporto brief/asset da 1:1 a 1:3 | Mitigato strutturalmente |
| Face fatigue sugli stessi 5 volti | Nuova campagna B2B quando servono volti nuovi | Deciso |
| Claim sanitari | Claim library da scrivere prima che un professionista produca | Aperto, non bloccante ora |
| CPM italiani settembre–ottobre | Lanciare entro agosto | Vincolo di timeline |

### 11.1 Il rischio nuovo: sotto-dimensionamento

Non era nella v1 perché il fabbisogno non era calcolato. Se il modello a tre hook non viene implementato, la factory produce 15 asset al mese contro un fabbisogno di 30–43. A quel punto o si aggiungono creator — e il vincolo diventa il tempo di Andrea, che non scala — o la factory copre il 40% del bisogno e lo spend non arriva a €500/giorno per mancanza di creative.

**È il singolo punto su cui il programma riesce o fallisce.**

---

## 12. Landing page e campagna

### 12.1 Stato **`[F]`**

Prototipo React pubblicato su `giada-creator-program.andrea-zannuto.chatgpt.site`. **La pubblicazione non è privata**: il dominio risponde senza autenticazione e bundle, CSS e asset sono scaricabili da chiunque. La v1 la dava per riservata.

Copy e UI/UX sono stati auditati e riscritti: 4.327 → 3.100 caratteri, 10 → 8 blocchi, cinque finding bloccanti corretti. Dettaglio in `AUDIT-GIADA-CREATOR-PROGRAM-copy-uiux.md`.

### 12.2 Le cinque correzioni bloccanti

1. `Fino a €50` → `€80` — la pagina comunicava il 37% in meno del tetto reale
2. Grafico reach `62% / 92%` rimosso — dati inventati
3. Fascia prove aggiunta — la pagina non aveva un solo trust signal
4. Consenso privacy aggiunto al form
5. Hero mobile ricomposta — la CTA cadeva fuori dal primo viewport

### 12.3 I tre angoli Meta **`[D]`**

| Angolo | Avatar | Messaggio |
|---|---|---|
| Competenza che può arrivare più lontano | 1 | Valorizzare un modo chiaro di spiegare, mantenendo il controllo sul messaggio |
| Non servono grandi numeri | 2 | Talento e quotidianità contro dimensione del profilo |
| Metti alla prova il tuo istinto creativo | 3 | Hook e angoli che verranno testati davvero in advertising |

Ogni inserzione atterra su una variante di H1 e con il tab profilo preselezionato via parametro URL. Il message match oggi non esiste: tutti e tre gli angoli portano allo stesso headline generico.

---

## 13. Debiti consapevoli

Rimandati per scelta. Per ciascuno la soglia oltre la quale smette di essere rimandabile.

| Debito | Blocca a partire da | Costo se rimandato oltre |
|---|---|---|
| **Dataset Meta separato** | **Prima del lancio campagna** | L'inquinamento del dataset B2C è immediato e non recuperabile a posteriori, e arriva mentre stai sistemando l'evento di ottimizzazione |
| Contratto e clausola di ritiro | Prima del primo pagamento | Posizione debole sul diritto all'immagine, a prescindere dal perpetuo |
| Inquadramento fiscale dei compensi | Al passaggio a retainer ricorrenti | 5 creator × 3 video/mese è amministrazione strutturata, non prestazione occasionale sporadica |
| Claim library | Prima che un professionista sanitario produca | Rischio reputazionale e di policy Meta su contenuti health |
| Brand del programma sotto Vivarium | Decisione a costo quasi nullo oggi | Fra sei settimane significa rifare dominio, pixel, informativa e migrare i lead |
| Informativa privacy creator | Insieme al form live | Il form raccoglie già email e handle |

Il primo e l'ultimo sono gli unici veramente urgenti: entrambi scadono al lancio della campagna, non dopo.

> Le voci fiscali e contrattuali indicano cosa va deciso, non come. Vanno verificate con un commercialista e un legale.

---

## 14. Timeline

Lavorando a ritroso dal primo video utilizzabile.

| Settimana | Attività | Output |
|---|---|---|
| **0** — entro 31 ago | Correzioni bloccanti landing, dataset separato, tre creative Meta, brief creator, form strutturato | Campagna live |
| 1–2 | Raccolta candidature, attivazione trial | **G1**: ≥10 lead qualificati |
| 3 | Trial in corso, brief consegnati | — |
| 4 | Proposte, scorecard, selezione | **G2**: ≥3 proposte valutabili |
| 5 | Contratti, brief finali con i tre hook | 2–3 creator contrattualizzati |
| 6–7 | Produzione e revisione | **G3**: ≥2 video utilizzabili |
| 7–8 | Primi asset in asta | 6–9 asset dal primo ciclo |
| Mese 3 | Regime | **G4**: ≥4 attivi, ≥30 asset/mese |

Il primo video arriva **4–6 settimane dopo il lancio**. Con la campagna live a fine agosto, i primi asset entrano in asta a inizio ottobre — quando lo spend è in ramp verso €10.000. La finestra è stretta ma tiene, a patto che la settimana 0 chiuda in tempo.

I CPM italiani salgono in settembre e ottobre: è un argomento per lanciare la campagna B2B in agosto, non a settembre.

---

## 15. Cosa è deciso

- Modello inbound in parallelo all'outbound sui top-20 del database
- Apertura a nano e micro creator; selezione su talento, metodo e affidabilità
- **Consegna a tre hook per ogni video, dichiarata nell'offerta dal primo contatto**
- €80 a video, tetto assoluto, uso paid perpetuo incluso
- Contro-offerte valutate caso per caso entro il tetto
- Retainer €200/mese come leva post-primo-video, fuori dalla pagina
- RAW fuori scope
- Trial di 7 giorni su funnel parallelo
- Nessun video completo prima del contratto
- Selezione human in the loop
- Tre avatar come angoli creativi, non come pesi di sourcing
- Nuovi volti tramite nuova campagna B2B, non rotazione continua
- Landing riscritta secondo l'audit
- Campagna live entro fine agosto

## 16. Cosa resta aperto

| # | Decisione | Scadenza |
|---|---|---|
| 1 | Gate del pilot: confermare G1–G4 e la regola del caso ambiguo | Prima del lancio |
| 2 | Dataset Meta: account separato o dataset custom | Prima del lancio |
| 3 | Brand: Giada o Vivarium | Prima del lancio |
| 4 | Trial 7 o 3 giorni | Prima del lancio |
| 5 | Budget media: €200 o €400–500 | Prima del lancio |
| 6 | Definizione operativa di «affidabile» | Prima della scorecard |
| 7 | Clausola di ritiro del consenso | Prima del primo pagamento |
| 8 | Performance dei sei video già prodotti | Quando serve la scorecard |
| 9 | Prova sociale nominale: consenso di Elena, Maria o Rosa | Prima del lancio, se si vuole |
| 10 | Throughput settimanale di brief e review di Andrea | Prima di passare da 3 a 5 creator |

---

## 17. Prossimi materiali

In ordine di dipendenza — ciascuno sblocca il successivo.

1. **Brief creator e rate card** — il documento che il creator riceve dopo la prova: struttura a tre hook, deliverable, formato, diritti, tempi. Blocca tutto il resto.
2. **Copy landing revisionato** — pronto, in `AUDIT-GIADA-CREATOR-PROGRAM-copy-uiux.md`
3. **Tre creative Meta** — un angolo per avatar
4. **Scorecard di selezione** — la codifica del giudizio di Andrea, necessaria quando arrivano più proposte insieme
5. **Form strutturato di proposta** — campi comuni per hook, sviluppo, obiettivo, motivazione

---

## Conclusione

La v1 descriveva un sistema plausibile senza sapere quanto grande dovesse essere. La v2 lo dimensiona, e il dimensionamento cambia la natura del progetto: non serve una macchina che trovi creator in continuazione, serve una macchina che estragga tre asset da ogni video girato.

Cinque creator, tre video al mese, tre hook per video: 45 asset al mese a €26,7 l'uno, il 7,7% di uno spend da €15.000. È sufficiente a coprire il fabbisogno UGC nello scenario più aggressivo, e non richiede né più budget né più ore di quelle disponibili.

Tutto il resto — contratti, fiscalità, dataset, claim library — è infrastruttura che va costruita, ma nessuno di quei pezzi decide se il modello funziona. Lo decide una cosa sola: se i tre hook entrano nel brief dal primo giorno, o se vengono chiesti dopo.
