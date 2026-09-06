# Asset, link e distribuzione

Tutto quello che dentro il PDF deve essere un valore vero e non un segnaposto.

## Il link del trial — verificato il 6 settembre, e corretto

```
https://giada.care/nutrition7?flow=g3&utm_source=creators&utm_medium=b2b_pdf&utm_campaign=creatorsb2b_t7d&utm_content=manuale_di_volo
```

Landing viva (HTTP 200, il copy dice «7 giorni» in cinque punti). **Path e token devono
coincidere**: `/nutrition7` con `_t7d` dentro la `utm_campaign`. `flow=g3` serve, perché è
il gate che manda il form sul flusso nuovo.

### Perché non la rotta diretta, che avevamo scelto prima

Avevo indicato `/go/telegram?…&utm_campaign=creatorsb2b_t7d`. **Non funziona, e la prova è
doppia.**

*Nel codice*: la durata del trial viene decisa in un punto solo, all'attivazione —
`parseCampaignTrialDays(body.startPayload)` in
`apps/api/src/routes/api/users/handlers/post-activate.ts:176`. Quella funzione **pretende
un payload che comincia per `ad_`**, e il payload del flusso diretto è un token `g3_…`.
Il `trialDays` che `/go/telegram` scrive nel click record
(`functions/go/telegram.ts:177`) **non viene letto da nessuno**.

*Nei dati*, letti da `stats.giada.care` lo stesso giorno: esistono **38 persone con trial
da 7 o 14 giorni**, e vengono **tutte** dal form (`landing: g3_form`,
`utm_campaign_raw` = `giada_onb_t7d` / `giada_onb_t14d`). Nello stesso periodo i **67
arrivi dalla rotta diretta hanno tutti 30 giorni** (o 29 per arrotondamento). Zero
eccezioni da entrambi i lati.

**Costo della scelta**: il creator compila il form B2C — nome, email, consensi — prima di
arrivare su Telegram. Un passaggio in più, ma è l'unico modo di dargli davvero sette
giorni oggi.

*Se un giorno si vuole il deep link diretto*, serve che il riscatto del token g3 legga
`record.campaign.trialDays` e lo passi ad `activate`. È una modifica di Davide, non una
configurazione.

Nota igiene KPI: `fuori_perimetro()` filtra per **nome campagna Meta**, non per utm, quindi
le iscrizioni dei creator entrano nei conteggi g3. Il token `creatorsb2b_t7d` è
riconoscibile a vista e togliibile a mano.

Il link «Conosci Giada da vicino» già presente nella landing del programma punta alla
stessa destinazione: sono coerenti.

## L'indirizzo per le idee

**`andrea@vivariumai.co`** — va scritto nel PDF, e ripetuto nella chiusura.

(Nota interna: la notifica del form arriva invece a `andrea.zannuto@gmail.com`, dov'è il
foglio delle candidature. Sono due cose diverse.)

## La cartella Drive

È **l'unica via di consegna**: al creator non parte nessuna mail. L'accesso arriva dal
pop-up di conferma del form.

Struttura decisa:

- **cartella padre**, link unico, **sola visualizzazione con download attivo** → dentro il
  PDF, che deve poter essere scaricato e tenuto nel telefono;
- **sottocartella con i sei video, senza download**, in sola visione, perché sono i volti
  di Elena, Maria e Rosa. Il permesso più restrittivo sul figlio è ammesso da Drive.
  Onestà: la sola visione scoraggia, non impedisce — una registrazione di schermo resta
  possibile.

Account: **`andrea.zannuto@gmail.com`**, il Gmail personale, dove sta già il foglio.

**Il link va incollato in `MATERIALS_URL`**, in cima a `../src/App.jsx`: finché è vuoto il
bottone del pop-up resta disattivato e la pagina dice «La cartella si attiva a breve».
Dopo la modifica serve un deploy del sito — la landing è **costruita dentro**
`vivariumai.co` dalla CI, quindi non va online da sola:

```bash
gh workflow run deploy.yml --repo vivariumai/vivariumai.co
```

**Recupero dell'accesso**: chi perde il link **ricompila il form con la stessa mail** e il
pop-up ricompare. La FAQ in pagina lo dice già.

## I sei video di esempio

Due a testa di Elena, Maria e Rosa. I diritti per mostrarli li abbiamo. I file:

```
~/Desktop/Works/Vivarium/GIADA/Acquisition BETA/1. VIDEO FINITI/
  elena 1 - 1080.mp4   61,5 s
  elena 2 - 1080.mp4   78,1 s
  maria 1 - 1080.mp4   55,1 s
  maria 2 - 1080.mp4   55,9 s
  rosa 1 - 1080.mp4    65,2 s
  rosa 2 - 1080.mp4    35,4 s
```

Tutti 9:16, 60 fps. La cartella è popolabile subito.

**Per estrarre fermi immagine da mettere nel PDF** — i fotogrammi vanno scelti per numero,
non per tempo, altrimenti il mosaico esce tutto dai primi secondi:

```bash
ffmpeg -i "elena 1 - 1080.mp4" -vf "select='eq(n\,10)+eq(n\,600)',scale=216:-1,tile=2x1" -frames:v 1 -vsync 0 out.png
```

## Cosa manca, lato asset

- il PDF stesso;
- la cartella Drive creata e i permessi impostati;
- `MATERIALS_URL` compilato e il sito deployato;
- la verifica del trial a 7 giorni sul link sopra.
