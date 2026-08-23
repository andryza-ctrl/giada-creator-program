# Handoff — Giada Creator Program

Documento di contesto completo per chi (persona o modello) apre questo progetto per la prima volta.
Stato al **23 agosto 2026**. Non sostituisce gli altri documenti del repo: li indicizza e spiega
perché esistono. Se leggi solo una cosa oltre a questa, leggi `SESSION_STATUS.md`.

Le affermazioni portanti sono etichettate come nel brief, così chi legge sa cosa può dare per buono:

| Tag | Significato |
| --- | --- |
| `[F]` | Fatto verificato: osservato, misurato o constatato |
| `[D]` | Decisione presa: vincolo operativo, non ridiscutibile senza un motivo nuovo |
| `[A]` | Assunzione dichiarata, accettata senza test |
| `[I]` | Ipotesi di modello, da validare con il pilot |
| `[?]` | Aperto: richiede una decisione |

---

## 1. In una frase

Questo repo è la **landing page di reclutamento** del Giada Creator Program: il sistema con cui
Vivarium si procura in modo continuativo le creative UGC che servono a far crescere lo spend
pubblicitario Meta di Giada, senza che la produzione dei video diventi il collo di bottiglia. `[D]`

Non è una campagna di recruiting fine a sé stessa, ed è importante capirlo prima di toccare una
riga: **ogni scelta della pagina serve a portare un creator dentro un processo produttivo**, non a
raccogliere candidature.

## 2. Gli attori

| Chi | Cosa |
| --- | --- |
| **Vivarium S.r.l.** | La società. Sviluppa Giada. È il committente del programma |
| **Giada** | Il prodotto: un assistente di nutrizione su **Telegram**. È un assistente, non un servizio medico, non una dieta, non una promessa di perdita di peso `[D]` |
| **Andrea** | Il committente operativo. Scrive i brief, giudica le proposte, decide. È anche il vincolo del sistema: le sue ore non scalano `[F]` |
| **I creator** | Il pubblico di questa pagina: nano e micro creator italiani che producono video UGC |
| **La coorte B2C** | Gli utenti paganti di Giada. Vanno tenuti **separati** dal funnel creator: dataset, trial ed eventi distinti `[D]` |

## 3. Perché il programma esiste: la catena del valore

Va letta in ordine, perché ogni anello spiega il successivo.

1. **Lo spend deve crescere.** Da ~€3.000/mese (agosto 2026) a €10.000 entro ottobre e a €500/giorno,
   circa €15.000/mese, entro dicembre 2026. `[D]`
2. **Più spend significa più test creativi.** Oggi 2-3 test a settimana, a regime 7-10, di cui almeno
   il 70% UGC: **21-43 asset UGC al mese**. La quota UGC non ha un tetto dichiarato. `[F]`
3. **Le creative si consumano.** Due o tre mesi prima che il CPA degradi: il ricambio deve essere
   continuo, non frenetico. `[F]`
4. **Il collo di bottiglia non è il budget, sono le ore di Andrea.** Un brief produce un video, un
   video produce un asset, e non esiste capacità di editing interna. Aggiungere creator sposta il
   problema, non lo risolve. `[F]`
5. **Da qui la leva del programma: la consegna a tre hook.** Ogni video viene girato con tre aperture
   diverse nella stessa sessione, stessa scena, stessa luce, stesso outfit. Al creator costa cinque
   minuti in più; a Vivarium triplica gli asset testabili a parità di brief, fee e review. `[D]`

| Modello | Video/mese | Asset/mese | Costo/mese | Costo/asset |
| --- | ---: | ---: | ---: | ---: |
| 1 hook (v1 del brief) | 15 | 15 | €1.200 | €80 |
| **3 hook (attuale)** | **15** | **45** | **€1.200** | **€26,7** |

Cinque creator che consegnano tre video al mese producono 45 asset: coprono il fabbisogno anche
nello scenario più aggressivo, a **€1.200 al mese, il 7,7% di uno spend da €15.000**.

> **Il punto su cui il programma riesce o fallisce**: i tre hook devono stare nell'offerta **dal
> primo contatto**. Chiesti dopo la firma diventano lavoro non pagato, cioè esattamente lo «spec
> work» che il programma dichiara di rifiutare. Per questo la consegna a tre hook è obbligatoria in
> tre punti: blocco condizioni sotto la hero, step 04 del processo, brief operativo. `[D]`

## 4. Obiettivi, in ordine di importanza

1. **Portare 5 creator affidabili a regime**, che consegnino 3 video al mese ciascuno con tre hook.
2. **Misurare** il costo per creator contrattualizzato e il CPL reale di una campagna B2B rivolta a
   creator: prima non esisteva un numero osservato, solo una proiezione arbitraria.
3. **Non contaminare** il funnel B2C di Giada: trial parallelo, dataset Meta separato, eventi
   distinti da `Contact`.
4. **Non promettere nulla di falso**: nessun numero di reach, nessuna performance inventata, nessun
   claim sanitario.

### Risultati attesi

Il primo video utilizzabile arriva **4-6 settimane dopo il lancio della campagna**. `[I]`

| Gate | Quando | Soglia di passaggio | Se fallisce |
| --- | --- | --- | --- |
| **G1 — Domanda** | fine settimana 2 | ≥10 lead qualificati | CPL fuori scala: spegni o cambia angolo |
| **G2 — Funnel** | fine settimana 4 | ≥3 proposte valutabili | il problema è landing o offerta, non discovery |
| **G3 — Qualità** | fine settimana 6 | ≥2 video giudicati utilizzabili | fail: spegni il programma inbound |
| **G4 — Sistema** | mese 3 | ≥4 creator attivi, ≥30 asset/mese | resta un pilot, non è ancora una factory |

I gate sono `[?]`: proposti, da confermare. È dichiarato in anticipo anche il **caso ambiguo**: 3
video buoni e 3 scarsi al G3 è un pass parziale, si prosegue con i tre buoni senza riaprire la
campagna finché non arrivano dati di performance dall'asta.

Funnel del pilot, con €200 di media e CPL €8-15: **1-3 creator contrattualizzati**, non 5. `[I]`
€200 non bastano per arrivare a 5: il gap si chiude con l'outbound ai top-20 del database, che gira
già in parallelo. `[F]`

### KPI, in ordine

1. Costo per creator contrattualizzato
2. Percentuale di trial realmente usati
3. Percentuale di proposte ricevute sui trial avviati
4. **Costo per asset**: €26,7 a regime, il numero che governa tutto il modello
5. Puntualità di consegna e numero di revisioni
6. Winner rate delle creative
7. Costo per creative scalabile
8. Creator attivi e asset mensili

Il CPL **non** è la metrica finale. È solo il primo cancello.

## 5. Il target della pagina

Nano e micro creator italiani. Si lavora anche sotto i 10.000 follower: contano idea, naturalezza e
affidabilità, non la dimensione del profilo. `[D]`

I tre profili non sono segmenti di sourcing con pesi: sono **angoli creativi** e device di
auto-selezione in pagina. `[D]` I pesi 50/35/15 della prima versione del brief sono stati rimossi
perché non avevano base empirica.

| Angolo | Funzione | Chi | Messaggio della relativa inserzione Meta |
| --- | --- | --- | --- |
| **La voce che rassicura** | fiducia e permesso | nutrizionista, dietista, farmacista con qualifica verificabile | «La competenza che può arrivare più lontano» |
| **La vita vera** | identificazione e contesto d'uso | creator food, family, lifestyle | «Non servono grandi numeri» |
| **L'istinto performance** | hook, ritmo, velocità di test | creator UGC advertising | «Metti alla prova il tuo istinto creativo» |

Il terzo è quello che si allinea meglio al modello a tre hook, perché ragiona già in varianti. Il
primo ha un vincolo noto: i professionisti sanitari hanno limiti deontologici sulla pubblicità, che
non hanno bloccato la collaborazione già avvenuta con Elena. `[F]`

Ogni inserzione atterra su una variante di H1 e con il tab profilo preselezionato: in pagina il
parametro è `?angolo=default|competenza|numeri|istinto` e `?profilo=rassicurante|vita-reale|performance`
(array `heroAngles` in `src/App.jsx`). Le tre varianti di headline **non sono ancora scritte come
message match reale**: è un candidato aperto.

### Sul database creator

193 creator, 35 colonne, deduplica per handle Instagram, ordinati per rating. `[F]` Attenzione
all'uso: **Elena, Maria e Rosa** hanno un rating assegnato da Andrea su collaborazioni reali (96, 94,
82); il rating degli altri 190 è **generato da un modello per similarità rispetto a quelle tre**. È
una lista di outreach ordinata per plausibilità, ed è utile per quello. Non è evidenza sul mercato
creator italiano, e i tre avatar sono un'estrapolazione da n=3, non un'inferenza sui 193.

## 6. I termini commerciali: cosa è deciso e non si tocca

Questi valori vivono in tre posti: il brief, questa pagina e il contratto. Devono coincidere. `[D]`

- **€80 a video selezionato. Tetto assoluto, nessuna eccezione.** Non scrivere mai «fino a €50»: era
  l'errore della prima versione della pagina, che comunicava il 37% in meno del tetto reale.
- **1 video + 3 hook**, 45-60 secondi, formato Reel o TikTok, girati nella stessa sessione.
- **Uso paid e organico senza limite di tempo né di territorio**, incluso negli €80. Il paid è lo
  scopo del programma: un video che non può girare in campagna non serve.
- **Trial di 7 giorni** su Giada, su funnel parallelo. Nessun contenuto richiesto durante la prova.
- **Una revisione inclusa. Pagamento alla consegna approvata.**
- **Risposta entro 48 ore** alla candidatura.
- **Nessun video completo prima del contratto**: prima si propone un'idea, poi si firma, poi si gira.
- **RAW fuori scope**: senza capacità di editing interna sono un costo negoziale speso per niente.
- **Retainer €200/mese** (3 video, 3 hook ciascuno, €22,2 ad asset): esiste, ma è una leva
  post-primo-video e **non va pubblicata in pagina**.
- Contro-offerte valutate caso per caso **entro** il tetto: chi chiede un extra per il perpetuo può
  ottenere continuità o una durata definita, non un prezzo più alto.

Il compenso in pagina compare in cinque punti e non in altri: pastiglia della hero, nota sotto le
schede del patto, barra sticky mobile, step 04 del processo, FAQ. `[D]`

Storico su cui si basa il prezzo: sei video totali già prodotti da Elena, Maria e Rosa, due
ciascuna, a €80, **senza che fosse concordato alcun diritto paid**. `[F]`

## 7. Il workflow completo

1. Campagna Meta B2B, tre inserzioni, un angolo per avatar, **dataset separato** dal funnel B2C
2. Landing (questo repo), un solo micro-commitment
3. Form: nome, email, canale, handle, maggiore età, consenso privacy
4. Accesso a Giada per 7 giorni, su funnel parallelo
5. Brief introduttivo: obiettivi, territori, limiti, riferimenti, **struttura a tre hook**, 2-3
   storie utente anonimizzate e i 5 hook che oggi funzionano meglio nell'account
6. Proposta del creator: hook, sviluppo, perché può funzionare. Form strutturato, non email libera
7. Selezione: giudizio di Andrea, **human in the loop** `[D]`
8. Contratto e diritti
9. Brief finale con i tre hook definitivi
10. Produzione: corpo più tre aperture, stessa sessione
11. Revisione, una inclusa
12. Pagamento alla consegna approvata
13. Test in campagna: le tre varianti entrano insieme
14. Retainer proposto a chi supera il fit operativo

Principio che governa tutto: **l'impegno del creator cresce solo quando cresce quello di Vivarium.**

Nota sul brief (punto 5): consegnare solo obiettivi e limiti produce proposte generiche e una
scorecard che non discrimina. Il materiale di partenza costa mezz'ora una volta sola e alza il
pavimento di tutte le proposte. `[D]`

## 8. La landing: cosa deve fare e com'è costruita

**Una sola conversione**: lasciare i contatti per ricevere accesso e brief. Una sola etichetta di
CTA su tutta la pagina, «Ricevi accesso e brief». `[D]`

L'ordine delle sezioni risolve, nell'ordine: **comprensione, credibilità, meccanismo, obiezioni,
azione**. È il modello preso dalla libreria di reference (vedi §12) e ha cambiato la pagina il 23
agosto 2026.

| # | Sezione | `id` | Cosa fa |
| --- | --- | --- | --- |
| 1 | Hero | `top` | Una promessa sola, il ventaglio di carte, le due obiezioni sull'attrezzatura, la pastiglia del compenso, la riga di prova |
| 2 | Il patto | `il-patto` | Le tre condizioni prima di ogni domanda: prova 7 giorni, consegna 1 video + 3 hook, utilizzo senza scadenza |
| 3 | Prova il prodotto | `prova` | Cosa si racconta: due schermate reali di Giada, la domanda da portarsi via, e la rail dei tre fatti già accaduti |
| 4 | Chi cerchiamo | `chi-cerchiamo` | Qualifica: due pannelli di peso opposto, «Sei in linea se» e «Non basta» |
| 5 | Profili | `profili` | Auto-selezione sui tre angoli, con tab e pannello |
| 6 | Come funziona | `come-funziona` | I quattro passi: provi, ricevi il brief, proponi l'idea, produciamo |
| 7 | FAQ | `faq` | Le obiezioni, **prima** del form |
| 8 | Finale e candidatura | `candidatura` | Il form, dentro l'unico rientro nel navy. Una conversione, non un form più una fascia di chiusura |

Perché quest'ordine e non un altro: la prova del prodotto sta **prima** della qualifica, perché
chiedere a un creator di misurarsi su un programma di cui non ha ancora visto il prodotto è chiedere
un atto di fede; la FAQ sta **prima** del form, perché un dubbio risolto dopo la decisione è un
dubbio risolto troppo tardi; la vecchia fascia di chiusura è stata fusa nel form, perché duplicava
la CTA a 400px di distanza e puntava indietro.

La **prova sociale** usa solo fatti accaduti: 6 video prodotti e già in campagna, 3 creator pagate
alla consegna, 48 ore per la risposta. Nessuna metrica di performance, nessuna promessa di reach.
`[D]` Se servisse una prova nominale (nome e volto di Elena, Maria o Rosa) va chiesto il consenso:
è una decisione aperta.

## 9. Il design system in breve

Dettaglio completo in `DESIGN_SYSTEM.md`. Qui il minimo per non rompere niente.

Versione **V8 «Quattro colori»**, in produzione dal 23 agosto 2026.

- **Quattro colori, nessun altro**: navy `#203260`, teal `#10b8c0`, carta `#fff9ef`, lilla `#e9dcff`.
  Ogni altro valore è una miscela dichiarata di questi quattro, con il contrasto misurato. Non ci
  sono nero, bianco puro, ambra, rosa o viola. `[D]`
- **Un fondo continuo**: le sezioni non hanno una tinta piatta, hanno un anello di una catena di
  gradienti in cui il colore finale di una zona è il colore iniziale della successiva. Fra due
  sezioni non esiste giunzione. La pagina cambia luminanza **due volte** in tutto, all'inizio del
  patto e all'inizio del finale, e in entrambi i casi il passaggio cade dentro il padding, dove non
  c'è testo. `[D]`
- **Quota di palette**: i colori Giada (navy, teal, carta) coprono il **67%** dell'altezza reale del
  documento, il lilla il **33%**. È un vincolo del committente e va rimisurato quando si aggiunge o
  si toglie una sezione. `[D]`
- **Un accento solo**: il teal, in due valori (`--teal-light` sul navy, `--teal-ink` sulla carta). Il
  lilla è superficie, non colore di testo.
- **Tre voci tipografiche**: Bricolage Grotesque per display e titoli, **Boska Italic 700** per
  l'accento editoriale, Geist per il testo. Tutte self-hosted da `public/assets`, zero richieste di
  rete. Boska sta a 700 e non a 400: è un serif ad alto contrasto e a peso basso i tratti sottili
  sparivano. Schema ripetuto in tutta la pagina: prima riga in sans pesante, seconda riga in corsivo
  serif nell'accento della superficie.
- **Movimento**: due curve, nessun rimbalzo. Rivelazione in scroll 460ms, pressione dei bottoni
  150ms, stagger 60-90ms, si animano solo `transform` e `opacity`. `prefers-reduced-motion` è
  gestito per intero, incluso l'anello del sigillo che viene fermato e non accelerato.
- **Bandito**: gradiente sul testo (`background-clip: text`), filetti laterali colorati oltre 1px,
  curve con rimbalzo, fasce di metriche in stile SaaS, oggetti translucidi sopra il navy,
  transizioni su proprietà di layout.

## 10. Stack e operatività

| Cosa | Valore |
| --- | --- |
| Stack | React 19 + Vite, `lucide-react` per le icone. **Nessuna libreria di animazione** |
| Repo | `andryza-ctrl/giada-creator-program` (pubblico) |
| Clone locale | `/Users/andrea/giada-creator-program` |
| Live | https://giada-creator-program.vercel.app |
| Deploy | Push su `main` = deploy Production su Vercel, automatico. Per una revisione prima: branch e PR, che genera un Preview Deployment |
| Comandi | `npm run dev` · `npm run build` · `npm run test:sites` |
| Packaging alternativo | `worker/index.js`, `scripts/prepare-sites-build.mjs`, `.openai/hosting.json` per il deploy su Sites. Non rimuoverli senza verificare entrambi i workflow |

File che contano:

| File | Contenuto |
| --- | --- |
| `src/App.jsx` | Tutta la struttura, i contenuti e le interazioni. Gli array in cima (`heroAngles`, `heroDeck`, `termCards`, `fitYes`, `fitNo`, `creatorModes`, `processSteps`, `proofFacts`, `faqs`) sono il contenuto della pagina |
| `src/styles.css` | Palette, catena delle zone, tipografia, componenti, responsive, movimento |
| `public/assets/` | I tre font e le tre immagini: hero della creator e due schermate reali di Giada |
| `index.html` | Meta, Open Graph, preload dei font |

## 11. Debiti aperti e rischi

**Aperti in pagina.** Nessuno di questi è visivo: sono tutti dati e infrastruttura.

1. **Il form è una demo e non invia dati.** Va collegato a un endpoint creator dedicato e va tolta la
   riga `.form-demo`. **Non riusare `/api/onboarding`**: alimenta il funnel B2C e la relativa
   audience.
2. **Il link privacy punta all'informativa B2C** (`giada.care/privacy`, costante `PRIVACY_URL` in
   cima a `src/App.jsx`). Serve la sezione dedicata ai lead creator: il form raccoglie già email e
   handle.
3. **Dataset Meta separato** dal funnel B2C, con eventi distinti da `Contact`. Scade **al lancio
   della campagna**: l'inquinamento del dataset B2C è immediato e non recuperabile a posteriori.
4. **La pagina è pubblica e indicizzabile**: compenso e criteri di selezione sono leggibili da
   chiunque, concorrenti compresi. È una scelta, ma va saputa.
5. **Il copy è provvisorio**, dichiarato tale dal committente. La riscrittura è il prossimo passo.
6. Gli slot «FOTO» del ventaglio nella hero aspettano le immagini reali delle creator.

**Aperti fuori pagina**, con la soglia oltre cui smettono di essere rimandabili:

| Debito | Blocca a partire da |
| --- | --- |
| Contratto e clausola di ritiro del consenso | prima del primo pagamento |
| Inquadramento fiscale dei compensi | al passaggio ai retainer ricorrenti |
| Claim library sui contenuti health | prima che un professionista sanitario produca |
| Brand del programma: Giada o Vivarium | decisione a costo quasi nullo oggi, costosa fra sei settimane |
| Performance dei sei video già prodotti | quando serve la scorecard di selezione |

Le voci contrattuali e fiscali indicano **cosa** va deciso, non come: vanno verificate con un legale
e un commercialista.

**Rischi presidiati**, per non riaprirli per sbaglio: trial usato in modo opportunistico
(prequalifica e finestra chiusa), candidature non confrontabili (form strutturato), percezione di
spec work (idea e non video prima del contratto, tre hook dichiarati dall'inizio), promesse di reach
(nessun numero in pagina), Andrea collo di bottiglia (i tre hook portano il rapporto brief/asset da
1:1 a 1:3).

**Il rischio che conta**: se il modello a tre hook non viene implementato, la factory produce 15
asset al mese contro un fabbisogno di 30-43, e lo spend non arriva a €500/giorno per mancanza di
creative.

## 12. Da dove vengono le scelte visive

Le reference vengono da una libreria personale di riferimento, la **Knowledge Studio**
(`https://knowledge-studio-andrea.vercel.app`): 127 schede in sei categorie, ognuna con la fonte
originale collegata. Sono state lette come regole e riscritte nel CSS del progetto: **nessun asset di
terzi, nessuna dipendenza aggiunta**.

Le schede che hanno cambiato la pagina, con il link diretto, stanno in
`AUDIT-LIBRERIA-E-REDESIGN-V8.md` e in `REFERENCE_MAP.md`. Le più incisive:

- **Anatomia di una landing SaaS ad alta conversione** (@uiux.subash): l'ordine comprensione,
  credibilità, meccanismo, obiezioni, azione. Da qui il riordino delle sezioni.
- **Due coppie cromatiche** (@dyslove.design): la coppia lilla/viola con valori verificati.
- **Il bianco non è un solo colore** (@346eur): la carta come scelta di tono, non come default.
- **Font pairing editoriali e luxury** (@itsdesignare) e **Cinque font aesthetic** (@robiinluca): i
  ruoli distinti fra display e testo, da cui la terza voce tipografica.
- **Sette linguaggi UI** (@avrosh.hq): scegliere un linguaggio prima dei componenti. Scelto
  Editorial, senza collage di stili.
- **Hallmark** (@dario.fontanel): usata come checklist anti-slop.

## 13. Storia delle versioni, e perché

Serve per non riproporre cose già scartate.

| Versione | Data | Cosa era | Perché è stata superata |
| --- | --- | --- | --- |
| V4 «Skyline» | ~16 ago 2026 | Pagina chiara, primo assetto | Copy con «fino a €50», grafico di reach inventato, nessun trust signal, CTA fuori dal primo viewport su mobile |
| V5 «Backstage» | 16-17 ago | Tema unico navy, Bricolage, fascia «il patto», hero su reference watermelon.sh | Un solo fondo scuro su tutta la lunghezza: monotono |
| V5.2 | 18 ago | Hero a ventaglio di cinque carte (reference «Pallet Ross») | Sopravvive nella V8: è la hero attuale |
| V6 «Daylight» | 19 ago | Sei superfici alternate, nove token per superficie, quattro accenti | Mai andata in produzione. Troppi colori, cinque scarti chiaro/scuro, tagli netti fra sezioni |
| V7 «Pastel Editorial» | 23 ago | Cuciture fra superfici, lavanda e viola verificati, terza voce tipografica, riordino delle sezioni | Mai andata in produzione. Le cuciture erano un velo sovrapposto, non una transizione; palette ancora troppo larga; corsivo a 400 illeggibile |
| **V8 «Quattro colori»** | **23 ago** | **In produzione.** Palette a quattro valori, fondo continuo, corsivo a 700 | — |

Le quattro obiezioni del committente che hanno prodotto la V8 sono trascritte in
`AUDIT-LIBRERIA-E-REDESIGN-V8.md`, §5. Vale la pena leggerle: sono regole, non preferenze del giorno.

## 14. Come si verifica il lavoro

Non basta guardare la pagina: la verifica è automatica e va rifatta dopo ogni cambio visivo
sostanziale. Si usa **playwright-core** con il Chrome for Testing già in cache in
`~/Library/Caches/ms-playwright` (gli script sono usa e getta e non versionati).

| Controllo | Come | Soglia attuale |
| --- | --- | --- |
| Overflow orizzontale | 17 larghezze da 1920 a 320px: confronto `scrollWidth`/`clientWidth` più scansione dei bounding box (le rotazioni allargano il box, va misurato quello) | zero elementi oltre il bordo |
| Contrasto | ogni nodo di testo, con il fondo **campionato dentro il gradiente alla quota reale dell'elemento**. Attenzione: il `background-color` è trasparente su tutta la pagina, e Chrome serializza `linear-gradient(180deg, …)` **senza** l'angolo | zero nodi sotto AA |
| Tenuta hero | la riga del compenso deve stare nel primo schermo | 913px su 950 a 1512×950; 806px su 844 a 390×844 |
| Nav fissa | scroll a quote fisse, lettura di `is-visible`, `inert`, `visibility` | nascosta a 0px, visibile dopo la hero, nascosta di nuovo risalendo |
| Quota di palette | media pesata sull'altezza delle zone della frazione di lilla dichiarata da ognuna | Giada 67% / lilla 33% |
| Build e test | `npm run build`, `npm run test:sites` | build ok, 4/4 |

Le evidenze visive stanno in `qa-v8-01` … `qa-v8-12` nella cartella. Il registro dei finding, con la
diagnosi di ogni difetto trovato e chiuso, in `design-qa.md`.

## 15. I documenti del progetto

| File | A cosa serve |
| --- | --- |
| `handoff.md` | Questo documento: contesto a 360° |
| `SESSION_STATUS.md` | **Il punto da cui ripartire.** Stato, verifiche, git, candidati per la sessione dopo |
| `BRIEF-GIADA-CREATOR-PROGRAM-v2.md` | Il modello di business: economia, funnel, gate, KPI, rischi, debiti. È la fonte di verità dei termini commerciali |
| `AUDIT-GIADA-CREATOR-PROGRAM-copy-uiux.md` | L'audit di copy e UI che ha prodotto la riscrittura dei testi |
| `AUDIT-LIBRERIA-E-REDESIGN-V8.md` | Lo scan della libreria di reference con i link, l'audit della V6 e le obiezioni che hanno portato alla V8 |
| `DESIGN_SYSTEM.md` | Palette, catena delle zone, tipografia, forma, movimento, regole che non si rompono |
| `REFERENCE_MAP.md` | Da quale reference viene ogni scelta visiva |
| `design-qa.md` | Registro delle verifiche e dei difetti chiusi, versione per versione |
| `MONOREPO_HANDOFF.md` | Come trasferire la pagina nell'app `apps/landing` del monorepo Giada |
| `CLAUDE.md`, `AGENTS.md` | I guardrail operativi per gli agenti che lavorano sul repo |

Memoria esterna al repo, utile a chi lavora dalla macchina di Andrea: la memoria operativa completa
del progetto sta in `/Users/andrea/.claude/projects/-Users-andrea-vivarium/memory/giada-creator-program-landing.md`,
con un puntatore in `/Users/andrea/.claude/projects/-Users-andrea/memory/`.

## 16. Se devi lavorare su questo progetto

Nell'ordine:

1. Leggi `SESSION_STATUS.md`, poi i guardrail in `CLAUDE.md`. Sono brevi e ti evitano di riaprire
   decisioni già prese.
2. Prima di toccare colore o tipografia, leggi `DESIGN_SYSTEM.md`: la palette è chiusa a quattro
   valori e il fondo è una catena, non una serie di fasce.
3. Prima di toccare i numeri (compenso, hook, diritti, tempi), verifica il **brief**: la pagina deve
   restare allineata, e i termini non si cambiano in pagina.
4. Prima di aggiungere una sezione: agganciala alla catena dei gradienti con il colore iniziale
   uguale al colore finale della zona precedente, scegli `zone--light` o `zone--dark`, non
   introdurre un quinto colore e rimisura le quote di palette.
5. Dopo un cambio visivo sostanziale: rifai la passata di verifica del §14, aggiorna `design-qa.md`
   e `SESSION_STATUS.md`.
6. Cosa non fare mai: posizionare Giada come dieta, servizio medico o promessa di perdita di peso;
   pubblicare percentuali di copertura, numeri di follower promessi o performance inventate;
   scrivere «fino a €50»; aggiungere una seconda etichetta di CTA; collegare il form a
   `/api/onboarding`; usare trattini lunghi nel copy visibile.

Ultima cosa, la più facile da perdere di vista: questa pagina non deve convincere il maggior numero
possibile di creator. Deve portare **cinque creator affidabili** dentro un processo in cui ogni
video girato produce tre asset testabili. Tutto il resto è conseguenza.
