# Emil design engineering review — V3

| Before | After | Why |
|---|---|---|
| Hero convenzionale 50/50 | Masthead editoriale con arco fotografico centrale, offerta a sinistra e trust a destra | Crea una prima impressione più memorabile e rende leggibili promessa, talento e condizioni in un solo sistema. |
| Più proof element in competizione | Una promessa dominante, un visual anchor e tre metriche ordinate | Riduce il rumore e rende la scansione immediata. |
| CTA hero spinta al fondo dal layout | CTA ancorata al contenuto con spazio fisso e visibile nel primo viewport desktop e mobile | L’azione primaria non dipende dall’altezza disponibile. |
| Card benefici equivalenti | Mosaico con una card dominante e due moduli secondari | La distribuzione è il vantaggio principale; compenso e continuità diventano supporto, non concorrenti. |
| Profili compatti e poco autoesplicativi | Tre percorsi di self-selection con descrizione visibile prima del click | Il creator si riconosce prima di interagire. |
| Quattro step in card alte e simili | Righe editoriali con label di impegno crescente | Il processo si legge più velocemente e comunica il principio “impegno proporzionato”. |
| Due checklist separate | Matrice unica “Sei in linea se / Non basta” | Il confronto è più neutrale, professionale e leggibile. |
| CTA nav soggetta a restringimento | `flex: 0 0 auto`, larghezza minima e testo non spezzabile | Evita clipping quando font e viewport si assestano. |
| Tab con relazione semantica incompleta | `role="tab"`, `aria-selected`, `aria-controls` e pannello nominato | Lo stato è comprensibile anche senza affidarsi solo al colore. |
| Form molto alto prima dell’azione | Griglia compatta, quattro campi, consenso e rassicurazioni sotto CTA | Mantiene la qualifica ma anticipa l’azione. |
| FAQ uniforme | Numerazione, domanda dominante e una risposta aperta | Migliora scansione e orientamento. |
| Hover e movimento più generici | Ease-out custom, press a 0.97, hover gated, reduced-motion | Le interazioni sono rapide, coerenti e non rallentano il funnel. |

## Verdetto

La landing ora possiede una grammatica visiva riconoscibile: masthead forte, griglia editoriale, prodotto reale e progressione dell’impegno. Il sistema è abbastanza espressivo per il test con il team ma resta trasferibile nel monorepo Giada. Il copy economico, i diritti d’uso e il flusso post-form rimangono volutamente provvisori.
