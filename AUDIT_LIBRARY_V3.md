# Audit UI/UX sezione per sezione — Knowledge Studio + Emil

## Metodo ed evidenze

- Homepage della libreria aperta: `library-deep-home.png`.
- Undici schede specifiche aperte e lette, da `deep-ref-02-ui-languages-detail.png` a `deep-ref-11-visual-moodboard-detail.png`.
- Reference hero originale aperta come media: `deep-ref-hero-10-media.png`.
- Confronto visivo hero: `qa-compare-hero-v3.png`.
- Confronto reference/implementazione per profili, percorso e criteri: `qa-compare-sections-v3.png`.
- Audit desktop a 1280 × 720 e audit mobile reale dentro un viewport iframe di 390 × 844.

## Breakdown

### 1. Hero — salute: forte

La precedente split hero era chiara ma prevedibile. La struttura Skyline introduce una gerarchia più editoriale: promessa dominante, visual verticale come asse, valore e CTA a sinistra, condizioni e trust a destra. La traduzione evita di copiare estetica e asset della reference; conserva Geist, navy, teal e fotografia Giada. In mobile la composizione cambia ordine: promessa, valore e CTA arrivano prima del visual.

### 2. Opportunità — salute: forte

Il messaggio “emergente ma non improvvisato” è espresso senza un blocco difensivo. Il rail a quattro colonne trasforma requisiti astratti in segnali rapidi: follower, voce, metodo e idea. Il pattern rispetta la reference buyer-oriented: una decisione cognitiva per colonna.

### 3. Prova prodotto — salute: forte

Le schermate reali di Giada sostituiscono spiegazioni generiche. I due momenti temporali e la domanda sull’apertura del Reel preparano il creator a pensare già come autore. È la sezione con maggiore valore di prova prima del form.

### 4. Benefici — salute: forte

La griglia asimmetrica comunica una priorità precisa: la distribuzione è il vantaggio differenziante; chiarezza economica e continuità sono rassicurazioni. La gerarchia evita che tre card equivalenti sembrino tre promesse indistinte.

### 5. Profili — salute: forte

Le tre opzioni rendono visibili i diversi modi di essere “giusti” per Giada. Il pannello attivo approfondisce senza aprire nuove pagine. L’interazione è semantica, tastierabile e non trasforma gli avatar in categorie rigide.

### 6. Percorso — salute: forte

Le righe sostituiscono le card alte e mostrano una progressione verificabile: nessun contenuto → esplorazione → idea → collaborazione. Questo riduce la paura di lavorare gratis e prepara il creator al contratto prima della produzione completa.

### 7. Criteri — salute: forte

La matrice mantiene il segnale di qualità senza tono elitista. “Non basta” evita formule aggressive; ogni riga oppone un comportamento professionale a un rischio concreto. Su mobile la tabella si ricompone senza overflow.

### 8. Candidatura — salute: buona, copy provvisorio

Il form chiede il minimo necessario e mostra cosa accade dopo. La demo non invia dati e lo dichiara. Prima del lancio servono ancora le decisioni su compenso, diritti, privacy, scoring e automazione email; non sono problemi di layout.

### 9. FAQ — salute: forte

Le domande più sensibili arrivano prima della CTA finale. La risposta aperta, la numerazione e il controllo `aria-expanded` rendono lo stato leggibile senza animazioni di altezza.

### 10. Chiusura — salute: forte

La pagina termina con un’unica azione coerente con la hero. Non vengono introdotti percorsi concorrenti dopo la risoluzione delle obiezioni.

## Controlli tecnici e di esperienza

- Un solo H1.
- Nessun overflow orizzontale a 1280 px o 390 px.
- Tutte le immagini hanno `alt`.
- Nessun bottone senza nome accessibile.
- Tutti gli input e i select hanno label.
- Tab creator, FAQ e submit demo testati in browser.
- Stato di successo del form verificato; nessun dato viene trasmesso.
- Nessun `transition: all`, `scale(0)`, `ease-in` o gradiente CSS.

## Follow-up non bloccanti

- Finalizzare compenso e diritti d’uso con business/legal.
- Collegare il form a CRM/email solo dopo aver chiuso consenso e privacy.
- Sostituire il testo “ipotesi per video” quando il modello economico sarà approvato.
