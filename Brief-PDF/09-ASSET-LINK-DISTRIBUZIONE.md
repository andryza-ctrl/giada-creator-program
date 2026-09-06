# Asset, link e distribuzione

Tutto quello che dentro il PDF deve essere un valore vero e non un segnaposto.

## Il link del trial — quello giusto

```
https://giada.care/go/telegram?mode=page&utm_source=creators&utm_medium=b2b_pdf&utm_campaign=creatorsb2b_t7d&utm_content=manuale_di_volo
```

`/go/telegram` conia il token `g3_…` e apre `t.me/giadacare_bot?start=g3_…`;
**`creatorsb2b_t7d` è ciò che dà i sette giorni** — `campaignTrialDays`
(`packages/acquisition/src/click-context.ts:69`) cerca il token `_t<N>d` nella
`utm_campaign`, e l'interstitial lo passa al click record (`functions/go/telegram.ts:177`).

Tre scelte dentro quel link:

- **niente `flow=g3`**: serve alla landing con form, `/go/telegram` è g3 per costruzione e
  non lo legge;
- **niente `pixel=on`**: inerte senza consenso, e non vogliamo eventi del programma nel
  dataset B2C di Giada;
- **`mode=page`**: mostra il bottone «Apri Telegram» invece di redirigere di colpo — da un
  PDF su telefono è più sicuro.

⚠️ **Da provare con un account Telegram vero prima di stampare il PDF**: il trial va
verificato che risulti di 7 giorni e non di 30.

Nota igiene KPI: `fuori_perimetro()` filtra per **nome campagna Meta**, non per utm, quindi
le iscrizioni dei creator entrano nei conteggi g3. Il token `creatorsb2b_t7d` è
riconoscibile a vista e togliibile a mano.

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
