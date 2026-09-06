# Anatomia dei sei video esempio — 6 settembre 2026

Materiale per le sezioni 5, 6 e 6-bis di `GiadaCreators_ManualeDiVolo`. Ricostruita
estraendo dodici fotogrammi per video (`ffmpeg`, quattro nei primi tre secondi, otto
distribuiti sul resto) e leggendoli. Le parole vengono dagli script già ricostruiti in
`vivarium/analisi-creator-tipo-ugc-giada-2026-08-05.md`: Whisper non è installato sul
Mac, quindi l'audio non è stato trascritto.

File: `~/Desktop/Works/Vivarium/GIADA/Acquisition BETA/1. VIDEO FINITI/`.

## Le durate reali

| video | durata | formato |
| --- | ---: | --- |
| elena 1 | 61,5 s | 9:16, 60 fps |
| elena 2 | 78,1 s | 9:16, 60 fps |
| maria 1 | 55,1 s | 9:16, 60 fps |
| maria 2 | 55,9 s | 9:16, 60 fps |
| rosa 1 | 65,2 s | 9:16, 60 fps |
| rosa 2 | 35,4 s | 9:16, 60 fps |

Sta tutto dentro i **30-90 secondi** decisi per il programma: la finestra non è teorica,
è la finestra in cui la libreria esistente è già stata girata. Il più corto è di Rosa a
35 secondi, il più lungo di Elena a 78.

## Cosa fa ciascuno

**elena 1 — la domanda con l'oggetto in mano.** Apre col volto in cucina e la ciotola
alzata verso l'obiettivo: «ma che cosa mangia una nutrizionista?». Poi mangia, poi
b-roll dall'alto della preparazione (yogurt, chia, sbattitura), poi il telefono che
fotografa il piatto, poi un secondo piatto. Sei scene distinte in un minuto, luce
naturale, cucina vera, nessuna grafica.

**elena 2 — l'autorità che elenca.** Camice bianco, ambulatorio, microfono a clip,
inquadratura ferma per quasi tutto il video: «3 consigli per mangiare meglio», scanditi
da tre numeri in sovrimpressione. Verso il 78% entra la chat vera di Giada.care sul
telefono in mano — con un grafico dentro — poi la foto del piatto, poi si torna al volto
per «e inizia da oggi». Il taglio più statico dei sei, ed è quello che regge 78 secondi.

**maria 1 — il meccanismo, ed è il più chiaro dei sei.** Apre su un macro del piatto
(omelette) e su un'obiezione: «il coach ti ha detto di mangiare 50 g di proteine». Poi
il volto, poi il telefono: icona di Telegram, e da lì **lo schermo pieno con la chat
leggibile** — la richiesta scritta a Giada, la risposta con tre proposte numerate, e poi
il bilancio: «Kcal -627 (target 1500)», i macro, l'acqua, «0% processati», «Voto al
pasto: 8.5/10». Chiude mangiando. Chi guarda capisce *cosa fa* il prodotto, non solo che
esiste.

**maria 2 — la conversazione come protagonista.** Apre su food styling (cuori di
fragola su carta di giornale) con un'esitazione: «vuoi provare una ricetta bilanciata,
ma poi…». Metà dei fotogrammi sono il telefono: il vocale che si registra, la tastiera
che digita, la risposta lunga col conteggio, il voto alla colazione. È il video che
mostra più a lungo *come si parla* con Giada.

**rosa 1 — la giornata filmata.** «Vi porto in un giorno da personal trainer a
Tenerife»: vlog, ragazza atletica, palme, classe di allenamento all'aperto, palestra,
piatti belli. Il telefono c'è, ma lo schermo è piccolo, riflettente e **illeggibile**.

**rosa 2 — l'estetica breve.** 35 secondi, colazione curata, sottotitoli in maiuscolo,
sole pieno. Anche qui il telefono compare ma la chat non si legge. In due inquadrature
è ben visibile un **barattolo di proteine di un'altra marca**.

## I due sistemi di sottotitoli in uso

Non ce n'è uno solo, e la differenza si vede:

- **maiuscolo con box** (elena 1, elena 2, rosa 2): tutto in maiuscolo, condensato e
  grassetto, una riga sola di due o tre parole, con la parola chiave dentro un
  rettangolo pieno color teal (e un secondo accento magenta su elena 1). Posizione nel
  terzo basso ma staccata dal fondo. È il più leggibile su telefono.
- **minuscolo con parola accentata** (maria 1, maria 2, rosa 1): frase in tondo, peso
  leggero, bianca, con una sola parola colorata (verde, arancio, rosa). Più elegante,
  meno leggibile in muto e alla luce del sole.

Su elena 2 il sistema porta anche i **numeri in chip** (1, 2, 3) che tengono insieme
l'elenco.

## Cosa ne esce, incrociato coi dati

1. **La chat leggibile è il discrimine.** Maria 1 e 2 la mostrano a schermo pieno e
   leggibile; Rosa la mostra piccola e riflettente. È la stessa cosa che i dati dicono
   sulle statiche: chat ingrandita porta il click→contatto dal 2,7% al 14%, il cibo in
   primo piano no. **Mostrare il meccanismo qualifica, mostrare l'appetito ferma lo
   scroll e basta.**
2. **Il pubblico dei sei video non è l'ICP.** Rosa parla da ventenne in vacanza a
   Tenerife, mentre chi paga sono donne 42-65, nucleo 45-50. Maria — cinquantenne, in
   cucina, con gli occhiali — è l'unica delle tre visivamente in target.
3. **Il video statico regge.** Elena 2 tiene 78 secondi con un'unica inquadratura e tre
   numeri. Il ritmo non lo fanno i tagli, lo fa l'elenco.
4. **Due errori concreti da vietare nel brief**, entrambi presenti nel materiale
   esistente: in maria 2 si vede la **lista chat di Telegram con i nomi di altre
   persone** (Silvia, Laura, Micaela…), che è un dato personale di terzi; in rosa 2 si
   vede un **prodotto di un'altra marca**.

## Riproducibile

```bash
ffmpeg -i "<video>.mp4" \
  -vf "select='eq(n\,20)+eq(n\,60)+…',scale=216:-1,tile=4x3" \
  -frames:v 1 -vsync 0 out_tile.png
```

I fotogrammi vanno scelti per numero (`eq(n,…)`) e non per tempo: una finestra su `t`
prende più fotogrammi consecutivi per ogni istante e il mosaico esce tutto dai primi
secondi.
