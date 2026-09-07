# Brief-PDF — tutto il necessario per scrivere `GiadaCreators_ManualeDiVolo`

Cartella di lavoro del brief in PDF per i creator del Giada Creator Program.
**Contiene tutto quello che serve per scriverlo**: decisioni prese, struttura, contenuti
di ogni sezione, materiale di ricerca, vincoli, layout e link.

✅ Il PDF è alla **v3: 18 pagine**, impaginato in `../output/pdf/`. Aggiornato al
**7 settembre 2026**: esegue le 101 richieste segnate da Andrea nella console di revisione
(tono più caldo su tutte le pagine, trial a 14 giorni, «Il video» spostata dopo gli esempi,
Rosa 2 ed Elena 1 scambiate, passata di layout su tutte e 18). Gli script precedenti restano
come `build_manual_v2_18pagine.py.bak` e `build_manual_v1_26pagine.py.bak`.

⚠️ Due cose aperte: la copertina aspetta ancora `giada-selfie-scene.png` (Giada che si
registra col telefono — prompt pronto in `../output/pdf/assets/giada-selfie-scene.PROMPT.txt`,
lo script lo usa da solo appena il file c'è), e il link `?start=ad_creatorsb2b_t14d` va provato
con un account Telegram nuovo prima di distribuire il PDF.

## I tre file con cui si lavora

- **`GiadaCreators_ManualeDiVolo.pdf`** — il documento, 18 pagine.
- **`GiadaCreators_ManualeDiVolo_EDITABLE.md`** — il copy e le indicazioni di layout, pagina
  per pagina: si modifica qui prima di rigenerare.
- **`revisione/revisione-manuale.html`** — la console di revisione (Artifact): le 18 pagine
  spezzate in **117 blocchi**, ognuno segnabile con *Accorcia · Riscrivi · Togli · Nota*, più
  una nota per pagina e le richieste generali. Quello che Andrea segna lì Claude lo rilegge
  dal database dell'artefatto (documento `revisione/manuale-v2`), non serve copiare niente.
  Si rigenera con `python3 revisione/build.py` dopo aver aggiornato `revisione/data.py`.
  **Attenzione:** la console pubblicata mostra ancora il copy della v2, quello su cui Andrea
  ha segnato le 101 richieste. Per un secondo giro va rigenerata sul copy della v3 e puntata
  a un documento nuovo (`revisione/manuale-v3`), così il primo giro resta leggibile.

Per rigenerare il PDF:

```bash
python3 ../output/pdf/source/build_manual.py
```

Lo script stampa il numero di pagine e le violazioni di layout, e riscrive `copy.txt` e
`layout-checks.json`. Se cambi il numero di pagine, aggiorna `TOTAL` in cima e i numeri
della mappa a pagina 02.

## I file, nell'ordine in cui servono

| file | cosa contiene |
| --- | --- |
| **`00-DECISIONI.md`** | tutte le decisioni prese con Andrea e le risposte alle domande, in ordine cronologico. **È la fonte: se un altro file contraddice questo, vince questo** |
| `01-STRUTTURA.md` | l'indice del PDF sezione per sezione, cosa fa ognuna, in che ordine e perché |
| `02-BRIEFING-GIADA.md` | il testo della sezione 2: cos'è Giada, cosa sa fare, dove si ferma |
| `03-PERSONAS.md` | la sezione 3: **cinque personas**, scritte dai dati di `stats.giada.care` e dalle 33 inserzioni attive, con i numeri da cui derivano |
| `04-ANATOMIA-SEI-VIDEO.md` | i sei video di esempio smontati fotogramma per fotogramma: base delle sezioni 5 e 6 |
| `05-MESTIERE-SEZIONI-6-E-6BIS.md` | il pezzo più grosso: struttura, hook, ritmo, montaggio, audio, sottotitoli, cosa fare e cosa no, viralità, concorrenti |
| `06-VINCOLI-E-COMPLIANCE.md` | la sezione 8: cosa non si può dire, con le formulazioni esatte e la fonte di ciascun divieto |
| `07-PERCORSO-CONSEGNA-COMPENSO.md` | le sezioni 9 e 10: come si va avanti, specifiche di consegna, compenso |
| `08-LAYOUT-E-VOCE.md` | come deve essere fatto e come deve suonare: palette, tipografia, formato, registro |
| `09-ASSET-LINK-DISTRIBUZIONE.md` | i link veri, la cartella Drive, i file dei sei video, cosa va in pagina |
| `10-APERTURA-E-CHIUSURA.md` | il testo della sezione 1 e della chiusura, già scritto |
| **`DA-FARE.md`** | cosa manca prima di poter scrivere, in ordine |

## Per chi scrive il PDF

Il documento lo assembla un altro modello. Sette regole, e non sono di stile:

1. **Non inventare numeri.** Ogni cifra che compare nel PDF deve stare in uno di questi
   file. Se un dato manca, la risposta giusta è togliere la frase, non stimare.
2. **Le righe di compliance si riportano come sono.** In `06-VINCOLI-E-COMPLIANCE.md` le
   formulazioni vengono da policy vere: si possono accorciare, non ammorbidire, e nessun
   divieto si toglie.
3. **I verbatim si riscrivono.** Le frasi delle personas sono già riscritte; non
   sostituirle con citazioni «più vere», perché le citazioni vere sono di utenti reali e
   non escono da qui.
4. **Il link del trial si copia e incolla**, esatto: dal 7 settembre 2026 è
   `https://t.me/giadacare_bot?start=ad_creatorsb2b_t14d` (14 giorni, non più 7).
   Non ricostruirlo, non abbreviarlo, non togliere parametri: ognuno fa qualcosa.
5. **Il prezzo di Giada non entra.** Si parla al massimo di prova gratuita.
6. **Non promettere mail al creator.** La consegna passa dalla cartella Drive: nessuna
   frase del tipo «ti scriviamo» o «controlla la posta».
7. **Italiano, prima persona, registro friendly.** Le tre prove di tono stanno in
   `08-LAYOUT-E-VOCE.md`.
8. **Andrea non è fondatore di Vivarium.** Si occupa di marketing e contenuti; il team
   esiste e si sente («la nostra assistente AI»), ma le idee le legge lui.

L'ordine di assemblaggio è quello di `01-STRUTTURA.md`. Le immagini dei sei video di
esempio si estraggono dai file in locale con il comando in
`09-ASSET-LINK-DISTRIBUZIONE.md`.

## Cosa NON è una fonte

`../BRIEF-GIADA-CREATOR-PROGRAM-v2.md`, nella cartella superiore, è **superato**: il suo
modello a 80€ con i tre hook obbligatori non vale più, e con esso il numero di 45 asset al
mese a 26,7€ l'uno. Resta come storia, non come riferimento.

Lo stato del programma nel suo insieme sta in `../SESSION_STATUS.md` e, in KB, in
`people/andrea/programma-creator-b2b.md`.
