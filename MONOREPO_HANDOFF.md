# Giada Creator Program — handoff al monorepo

Questa cartella è un prototipo autonomo e Sites-ready. La UI è stata costruita per essere trasferita nell'app `apps/landing` del monorepo Giada senza cambiare direzione visiva.

## Destinazione consigliata

- Route: `apps/landing/src/app/creator/page.tsx`
- Componente client: `apps/landing/src/components/CreatorProgramLanding.tsx`
- Stili: modulo CSS dedicato oppure classi Tailwind equivalenti
- Asset hero: `apps/landing/public/creator/giada-creator-hero.png`

## File da portare

- `src/App.jsx`: struttura completa, contenuti provvisori e interazioni.
- `src/styles.css`: token, layout responsive, stati e motion.
- `public/assets/giada-creator-hero.png`: asset originale generato per la hero.

## Adattamenti minimi per Next.js

1. Aggiungere `"use client";` all'inizio del componente.
2. Rinominare `App` in `CreatorProgramLanding`.
3. Riutilizzare `Geist` e i token già caricati da `apps/landing/src/app/layout.tsx` e `globals.css`; il font locale del prototipo non serve nel monorepo.
4. Sostituire il submit simulato con un endpoint creator dedicato. Non riutilizzare `/api/onboarding`, perché alimenta il funnel B2C e la relativa audience Mailchimp.
5. Collegare il form al flusso creator di 7 giorni e a eventi Meta distinti da `Contact`.
6. Rimuovere le etichette `DEMO`, “nessun dato viene inviato” e i riferimenti al copy provvisorio prima del lancio.

## Dipendenze

Il prototipo usa soltanto React e `lucide-react`, già coerente con la landing Giada. Non richiede librerie di animazione: le micro-interazioni sono in CSS, rispettano `prefers-reduced-motion` e si limitano a `transform`, `opacity`, colore e stato.

## Decisioni visuali

- Palette originale Giada: `#262B56`, `#353B72`, `#00ADB5`, `#FFF5F5`, `#A9B5DF`.
- Font Geist con gerarchia display black/extrabold.
- Navbar pill glass/navy, card da 24–48 px di raggio, CTA teal, alternanza sezioni navy/blush/white.
- Hero fotografica editoriale, non stock patinato.
- Tre profili creator presentati come tabs interattivi.
- Form finale deliberatamente breve, con stato di successo già progettato.

## Contenuti ancora provvisori

- Compenso e perimetro diritti.
- Claim sulla distribuzione paid/organic.
- Durata e meccanica esatta della prova creator.
- Criteri definitivi di ammissione.
- FAQ legali e privacy.

