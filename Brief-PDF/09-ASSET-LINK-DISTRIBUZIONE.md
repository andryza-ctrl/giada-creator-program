# Asset, link e distribuzione

Tutto quello che dentro il PDF deve essere un valore vero e non un segnaposto.

## Il link del trial

**Quello da mettere nel PDF — deep link diretto al bot:**

```
https://t.me/giadacare_bot?start=ad_creatorsb2b_t7d
```

Nessuna landing, nessun form: si apre Telegram e si parte. Il bot risponde
(`t.me/giadacare_bot` → «Giada.care», verificato il 6 settembre), il payload sta nei limiti
di Telegram (18 caratteri su 64, charset ammesso).

### Perché dà sette giorni

La durata si decide in un punto solo, all'attivazione:
`parseCampaignTrialDays(body.startPayload)` —
`apps/api/src/routes/api/users/handlers/post-activate.ts:176`. Vuole due cose insieme: il
prefisso **`ad_`** e un token **`_t<N>d`** delimitato, con N fra 1 e 30. Passando
`ad_creatorsb2b_t7d` alla stessa regex del codice il risultato è **7**.

E la catena a monte esiste davvero: `/start ad_*` arriva al router, che lo inoltra a Make,
che chiama `activate` con `{startPayload: "ad_…"}`. **Nei dati ci sono 66 utenti reali
arrivati così**, l'ultimo il 31 agosto — `ad_jul26_elena1`, `ad_lp_nutrition` e simili.
Hanno tutti 30 giorni, ma è corretto: **nessuno di quei payload contiene un `_t<N>d`**.

### L'unico anello mai esercitato, e come si prova in un minuto

Nessuna inserzione ha mai portato un `_t<N>d` dentro un payload `ad_`, quindi quel token
non è mai stato letto dal vivo su questa rotta (la stessa sintassi è invece provata
sull'altro ramo, quello del form, da 38 utenti veri).

**Il test**: aprire `https://t.me/giadacare_bot?start=ad_creatorsb2b_t7d` da un account
Telegram che **non ha mai fatto `/start`** con Giada, completare l'onboarding, e controllare
che il trial risulti di 7 giorni. Un minuto. Se esce 30, si passa al piano B qui sotto.

### Piano B, se il test dà 30 giorni

```
https://giada.care/nutrition7?flow=g3&utm_source=creators&utm_medium=b2b_pdf&utm_campaign=creatorsb2b_t7d&utm_content=manuale_di_volo
```

È il percorso **con il form**, ed è provato: le uniche 38 persone con trial da 7 o 14
giorni presenti nei dati vengono tutte da lì (`landing: g3_form`, `utm_campaign_raw`
`giada_onb_t7d` / `_t14d`). Path e token devono coincidere — `/nutrition7` con `_t7d` — e
`flow=g3` è il gate che manda il form sul flusso nuovo. Landing viva, il copy dice «7
giorni» in cinque punti. Costo: il creator compila nome, email e consensi prima di arrivare
su Telegram.

⚠️ **Da non usare in nessuno dei due casi: `/go/telegram`.** L'interstitial conia un token
`g3_…`, che non ha il prefisso `ad_`, quindi l'override non scatta mai: il `trialDays` che
quella rotta scrive nel click record (`functions/go/telegram.ts:177`) **non viene letto da
nessuno**. Nei dati, i 67 arrivi diretti recenti hanno tutti 30 giorni.

Nota igiene KPI: `fuori_perimetro()` filtra per **nome campagna Meta**, non per utm né per
payload, quindi le iscrizioni dei creator entrano nei conteggi g3. Sia `ad_creatorsb2b_t7d`
sia `creatorsb2b_t7d` sono riconoscibili a vista e togliibili a mano.

Il link «Conosci Giada da vicino» nella landing del programma punta a `/nutrition7` con lo
stesso token: resta valido in entrambi gli scenari.

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
