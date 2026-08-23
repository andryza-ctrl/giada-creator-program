# Audit V6 → V7 «Pastel Editorial»

Data: 23 agosto 2026. Fonti: scan completo della Knowledge Studio
(`https://knowledge-studio-andrea.vercel.app`), skill `ui-ux-pro-max`, skill `frontend-design`.

## 1. Reference raccolte dalla libreria

Scansionate tutte le categorie: References (50), Inspo (69), Carousel (16), Meta Ads (3), AI (78),
Marketing (58). Le schede rilevanti per questa pagina, con link diretto alla fonte.

### Palette

| Scheda | Valori verificati | Uso su Giada |
| --- | --- | --- |
| Due coppie cromatiche: Cosmic–Vanilla e Lavender–Violet — @dyslove.design ([post](https://www.instagram.com/p/DaxM5E4iF97/)) | Lavender `#D2C3F6`, Violet `#36255C`, Cosmic `#23212C`, Vanilla `#F1FEC8` | Lavender e Violet entrano come coppia complementare ufficiale. Il viola `#4B3BA8` della V6 lascia il posto a `#36255C`, meno acido |
| Due combinazioni colore: Deep Navy + Cyan / Burgundy + Blush — @dyslove.design ([post](https://www.instagram.com/p/DcMLsEfiIcy/)) | Deep Navy + Cyan = «contrasto e precisione» | Conferma la coppia Giada navy + teal come base di autorevolezza |
| Il bianco non è un solo colore — @346eur ([post](https://www.instagram.com/p/DbDktxnjXfr/)) | soft gray, ivory, linen, sugar white, seashell, glacier white | La pagina passa da due bianchi a una scala di cinque carte: `seashell`, `linen`, `sugar`, `glacier`, `paper` |
| Quattro librerie di sfondi e gradienti — @ui.fig._.designer ([post](https://www.instagram.com/p/DasXa2ommjc/)) | [grainient.supply](https://grainient.supply/), [gradientora](https://gradientora.com/), [background.supply](https://background.supply/), [gradients.fm](https://gradients.fm/) | Direzione «grainy gradient»: gradiente + grana, mai tinta piatta. Nessun asset di terzi scaricato: il gradiente è scritto in CSS |

### Tipografia

| Scheda | Contenuto | Uso su Giada |
| --- | --- | --- |
| Cinque font aesthetic per contenuti editoriali — @robiinluca ([post](https://www.instagram.com/p/DbQn-S1jBPy/)) | Switzer, Chivo per testo; The Seasons, Boska come display | Regola presa: «un sans leggibile + un serif display crea gerarchia senza moltiplicare le famiglie» |
| Font pairing editoriali e luxury — @itsdesignare ([post](https://www.instagram.com/p/DaqBUMODSqP/)) | Ruoli distinti: display porta personalità, testo porta leggibilità | Tre ruoli dichiarati: Bricolage display, Instrument Serif corsivo editoriale, Geist testo |
| Otto font contemporanei — @dyslove.design ([post](https://www.instagram.com/p/Da0QF3zCFJk/)) | Neuhaus, Armany, Yapari, Druk, Kaftan, Brunson, Boreck, Givonic | Non usati: licenze non verificabili. Serve una famiglia con licenza aperta |
| 17 reference visuali per layout e UI — @Andrea | «il contrasto tra sans oversize, serif editoriale e microcopy costruisce ritmo e priorità» | È la regola tipografica portante della V7 |

Scelta: **Instrument Serif Italic** (OFL, 15,7 KB, self-hosted in `public/assets`). Ha un corsivo
vero, cosa che Bricolage non ha: la V6 fingeva il corsivo con un cambio di peso.

### Struttura e conversione

| Scheda | Contenuto | Uso su Giada |
| --- | --- | --- |
| Anatomia di una landing SaaS ad alta conversione — @uiux.subash ([post](https://www.instagram.com/p/DZFOv5nmTwE/)) | Nove blocchi in sequenza: hero, value prop, social proof, benefici, how-it-works, testimonial, FAQ, CTA, chiusura. Ordine di risoluzione: comprensione, credibilità, meccanismo, obiezioni, azione | Riordino delle sezioni: le obiezioni (FAQ) passano **prima** del form, la prova sale prima della qualifica |
| Sette hero section moderne — @uiuxmanuel ([post](https://www.instagram.com/p/DbeBUFVDpk7/)) | Una sola promessa primaria per viewport; metriche e trust signal solo se rispondono a un dubbio reale | La hero resta com'è (confermata), i trust signal diventano una rail dedicata |
| 10 hero section moderne del mese — @creative_vaani ([post](https://www.instagram.com/p/Dba5xP-jLqe/)) | «Estrai il DNA»: scala tipografica, griglia, crop, ritmo, contrasto, motion, tono CTA | Metodo di lettura delle reference, non copia di layout |
| Sette linguaggi UI — @avrosh.hq ([post](https://www.instagram.com/p/DbRuxjXAego/)) | Bento, Bauhaus, Neomorphism, Swiss, Claymorphism, Glassmorphism, Editorial | Direzione scelta: **Editorial**, con un tocco Swiss nelle rail numerate. Nessun collage di stili |
| Landing real estate segmentata per intento — @webdesign_786 ([post](https://www.instagram.com/p/Dadtpt_tsTb/)) | «Il mockup mobile ricompone la gerarchia invece di comprimere il desktop» | Vale per profili, processo e finale |
| Hallmark, skill anti-AI-slop — @dario.fontanel ([repo](https://github.com/Nutlope/hallmark)) | Quattro modalità: create, audit, redesign, study | Usata come checklist di audit anti-slop, sezione 3 |

## 2. Cosa tengo della V6

- **Hero** (confermata dal committente): titolo su due righe, ventaglio di cinque carte, due
  etichette a fumetto, sigillo, coppia di azioni, riga del compenso.
- **Il patto** (confermata): tre schede a metrica con `subgrid`, nota del compenso sotto.
- **L'architettura a temi**: nove token semantici per superficie, nessun colore diretto nei
  componenti. È la parte migliore della V6 e regge tutto il resto.
- Il cambio di colore fra sezioni, che al committente piace, e la nav fissa che compare solo dopo
  la hero.
- Accessibilità: `inert` sulla nav nascosta, `prefers-reduced-motion` completo, focus ring
  sull'accento della superficie.

## 3. Cosa non funziona

### Colore

1. **Superfici piatte.** Sei tinte uniformi, con qualche blob radiale sopra. Nessun passaggio di
   tonalità dentro la sezione, nessuna cucitura fra una sezione e l'altra: i bordi fra crema e
   lilla sono tagli netti a 1px.
2. **Il viola `#4B3BA8` non è pastello**, è saturo e freddo, ed è il colore che il committente
   nota per primo scorrendo. Anche il teal pieno della chiusura arriva a piena saturazione su una
   fascia alta 400px.
3. **Due soli bianchi** (`#F7F1E6`, `#E9E2FF` e i loro soft). La libreria dice esplicitamente che
   il bianco è una scelta di tono: qui la scala manca.
4. **Accenti spenti sulle superfici chiare**: `--teal-text #00757C` passa AA ma è un teal
   scurito, non un accento. Nessun gradiente su nessun elemento di azione.

### Tipografia

5. **Una sola voce.** Bricolage 700-800 per tutto ciò che è titolo, Geist per tutto il resto.
   Nessun corsivo vero (la V6 lo simula con `font-weight: 500`), nessun peso leggero, nessun
   serif. Il «contrasto sans oversize + serif editoriale + microcopy» della libreria non c'è.
6. Le metriche grandi (`7`, `1`, `∞`) hanno il suffisso in Geist 550: leggibile, ma senza voce.

### Composizione

7. **Tre vuoti veri.** Il pannello dei profili lascia scoperta metà della colonna destra; la FAQ
   ha una colonna sinistra con il solo titolo e 400px di crema vuoto; la chiusura ha un buco al
   centro fra titolo e CTA.
8. **Ritmo uniforme**: ogni sezione ha lo stesso `--pad-section`, la stessa testata allineata a
   sinistra, la stessa larghezza. Nove sezioni con lo stesso metro.
9. **Raggi identici** (`--r-lg 22px`) su carte, pannelli, form, palco: niente distingue un oggetto
   che si legge da uno che si compila.

### Conversione (target: creator professionali, decisione B2B)

10. **La prova sociale non ha un blocco.** Esiste una riga sola nella hero («6 video prodotti, 3
    creator pagate»), poi la pagina non torna mai sulla credibilità. La libreria mette la social
    proof come terzo blocco su nove.
11. **La FAQ sta dopo il form.** Chi ha un dubbio lo trova risolto *dopo* aver deciso di non
    compilare. Va prima: le obiezioni si chiudono e poi si chiede il contatto.
12. **La chiusura duplica la CTA e punta indietro.** Dopo il form c'è una fascia teal con lo stesso
    bottone, che riporta l'utente su. Due conversioni identiche a 400px di distanza, di cui una
    scorre nella direzione sbagliata.
13. **La qualifica («chi cerchiamo») arriva prima della prova.** Si chiede al creator di misurarsi
    su un programma di cui non ha ancora visto il prodotto.

### Anti-slop (checklist Hallmark)

14. Blob radiali in gradiente su fondo scuro: il pattern più riconoscibile dell'output generato.
    Restano, ma smettono di essere l'unico effetto e diventano parte di un gradiente di superficie.
15. Griglia di tre card uguali, chip generiche, tutte le sezioni con `head + grid`.
16. Nessun momento memorabile fra la hero e il footer: la pagina non ha un secondo picco.

## 4. Piano V7 «Pastel Editorial»

**Direzione**: la pagina è un editoriale stampato su carte diverse. Si attraversa una scala di
superfici che passano di tonalità dentro sé stesse e si cuciono fra loro; il testo alterna un sans
oversize, un corsivo serif e un microcopy larghissimo. Giada resta la base, il lilla-viola verificato
porta il terzo di complemento.

### Interventi

| # | Intervento | Sezioni |
| --- | --- | --- |
| 1 | Scala di carte a cinque valori + gradiente di superficie su ogni tema + cuciture fra sezioni | tutte |
| 2 | Viola profondo `#36255C` e lavanda `#D2C3F6` verificati al posto del viola saturo | processo, candidatura, chi cerchiamo |
| 3 | Instrument Serif Italic come terza voce: accento dei titoli, suffissi delle metriche, citazioni | tutte |
| 4 | CTA e pastiglie con gradiente d'accento e sheen al passaggio | tutte |
| 5 | Rail di prova con i quattro fatti veri (6 video, 3 creator pagate, 48 ore, €80) | prova |
| 6 | FAQ prima del form; chiusura fusa nel form come finale unico navy → teal | faq, candidatura |
| 7 | Riempiti i tre vuoti: pannello profili a tre zone, rail sinistra della FAQ, finale a due colonne | profili, faq, candidatura |
| 8 | Ritmo variabile: tre metri di sezione (compatto, normale, ampio) e testate alternate | tutte |
| 9 | Scala di raggi a tre valori con ruoli dichiarati | tutte |

### Ordine delle sezioni: prima e dopo

| V6 | V7 | Motivo |
| --- | --- | --- |
| 1 hero | 1 hero | confermata |
| 2 il patto | 2 il patto | confermata: value proposition |
| 3 chi cerchiamo | 3 prova il prodotto + rail di prova | credibilità prima della qualifica |
| 4 prova il prodotto | 4 chi cerchiamo | qualifica dopo la prova |
| 5 profili | 5 profili | identificazione |
| 6 come funziona | 6 come funziona | meccanismo |
| 7 candidatura | 7 FAQ | obiezioni prima dell'azione |
| 8 FAQ | 8 candidatura (finale navy → teal) | azione, una volta sola |
| 9 chiusura | — | fusa nella 8 |

Vincoli rispettati: una sola etichetta di CTA, tre eyebrow al massimo, €80 nei cinque punti
previsti, nessun dato di performance inventato, nessuna promessa medica, quota Giada sotto due
terzi (rimisurata a fine lavoro).

---

## 5. Esito: dalla V7 alla V8 «Quattro colori»

La V7 descritta sopra è stata costruita e verificata, poi rivista dal committente sulla base di
quattro obiezioni. Sono la ragione della V8, ed è utile tenerle scritte perché sono regole, non
preferenze del momento.

| Obiezione | Cosa non funzionava | Cosa è cambiato |
| --- | --- | --- |
| «Le sfumature da un colore all'altro non sono uniformi e smooth» | Le cuciture erano un elemento sovrapposto alto 150px sopra una tinta piatta: il passaggio si vedeva come un velo, non come una transizione | Il fondo è una catena di gradienti: il colore finale di una zona è il colore iniziale della successiva, quindi la giunzione non esiste |
| «Troppi colori e troppi stacchi dark/light» | Sette superfici, quattro accenti, cinque scarti di luminanza | Quattro colori in tutto, un accento, due soli scarti di luminanza, entrambi dentro un padding |
| «Il navy è troppo scuro, il lilla troppo chiaro, non sono effetti pastello reali» | `#12163A` e `#0E1436` erano quasi neri; il lilla stava a `#F3EFFE`, cioè un bianco appena tinto | Navy `#203260`, e il lilla `#e9dcff` usato a pieno valore nelle zone e nelle miscele, non diluito in un bianco |
| «Le scritte light/italic sono troppo thin e si vedono poco» | Boska a peso 400: su un serif ad alto contrasto i tratti sottili sparivano | Un solo taglio in pagina, il corsivo a 700 |

Restano validi dalla V7: il riordino delle sezioni sul modello della libreria, la rail dei fatti, la
FAQ prima del form, il finale fuso col form, i tre vuoti riempiti, le regole di movimento e la
rimozione dei pattern generici (gradiente sul testo, filetti laterali colorati, curve con rimbalzo,
fascia di metriche).
