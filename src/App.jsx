import { useEffect, useMemo, useRef, useState } from "react";
import { loadPixel, newEventId, readConsent, trackLead, writeConsent } from "./pixel.js";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Lightbulb,
  Megaphone,
  Minus,
  Video,
} from "lucide-react";

// Informativa dedicata ai lead creator, servita da questa stessa origine.
// Non è quella B2C di giada.care: base giuridica, destinatari e conservazione
// sono diversi perché diverso è il trattamento.
const PRIVACY_URL = `${import.meta.env.BASE_URL}privacy-creator.html`;

// Le candidature vanno a una Web App di Apps Script legata al foglio
// "Giada Creator Program - Candidature" sul Drive di Andrea: scrive la riga
// nella scheda «Candidature» e manda la mail di notifica. Dopo ogni modifica al
// codice dello script va rifatta la distribuzione, altrimenti gira il vecchio.
const FORM_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzPKz6bAb9YfU5qaIZgPmstuQxci1Zt8uNMPj0I0wrt37PX_XaCHAag81Wcqwm32TQT/exec";

// TODO: link alla cartella Drive dei materiali. Dentro: il brief in PDF, che il
// creator deve poter scaricare, e una sottocartella con i sei video di esempio in
// sola visione. È l'unica via di consegna — al creator non parte nessuna mail —
// quindi finché è vuoto il bottone del pop-up resta disattivato.
const MATERIALS_URL = "";

// Una sola etichetta per l'unica conversione della pagina.
const CTA_LABEL = "Ricevi brief e accesso";

// Un solo titolo. La lettura di `?angolo=` resta in piedi per un eventuale
// message match futuro: qualsiasi valore diverso da `default` cade qui.
const heroAngles = {
  default: {
    lead: "Diventa una voce di Giada.",
    accent: "Il tuo punto di vista conta.",
    profile: "rassicurante",
  },
};

// Ventaglio della hero, sulla reference "Pallet Ross": cinque carte verticali in
// arco, sovrapposte, che salgono da sinistra a destra. Sotto i 700px escono le
// due esterne e restano le tre centrali, con la foto sempre al centro.
// Cinque creator diversi, uno per carta: quattro donne e un uomo, l'80/20 del
// pubblico creator reale. `src` e il nome base del file in public/assets.
const heroDeck = [
  {
    id: "nutrizione",
    rot: -8.5,
    lift: 5.5,
    src: "01-nutrizionista",
    alt: "Una nutrizionista parla al telefono montato su un treppiede, con la luce ad anello accesa",
  },
  {
    // Sotto i 700px restano solo le tre carte centrali: l'unico profilo maschile
    // sta qui perché su mobile deve restare visibile.
    id: "fitness",
    rot: -4.5,
    lift: 2,
    src: "03-fitness",
    alt: "Un creator fitness riprende un video con il telefono su un treppiede, nell'angolo allenamento di casa",
  },
  {
    id: "giovane",
    rot: -1,
    lift: 0,
    src: "07-giovane",
    alt: "Una creator si riprende con il telefono in mano, seduta al tavolo di casa",
  },
  {
    id: "food",
    rot: 4,
    lift: 1.8,
    src: "02-food-blogger",
    alt: "Una food creator mostra una ciotola al telefono montato sul treppiede, in cucina",
  },
  {
    id: "wellness",
    rot: 7.5,
    lift: 4.8,
    src: "05-wellness",
    alt: "Una creator wellness racconta la sua mattina al telefono su treppiede, accanto al tappetino",
  },
];

/* Le carte sono 3:4 a ogni breakpoint: cambia solo la larghezza resa, 218px sul
   desktop e 190px sotto i 700px. Una sola immagine per carta, tre larghezze. */
const DECK_WIDTHS = [264, 436, 654];
const deckSrcSet = (name) =>
  DECK_WIDTHS.map((w) => `${import.meta.env.BASE_URL}assets/${name}-${w}.webp ${w}w`).join(", ");
const DECK_SIZES = "(max-width: 700px) min(28vw, 190px), min(19.5vw, 218px)";

// Le tre cose da sapere prima di ogni domanda: come nasce il contenuto, cosa si
// consegna, dove finisce. Nessun termine economico: il compenso vive solo in FAQ.
// `tone` decide la superficie della scheda: teal, neutra, periwinkle.
const termCards = [
  {
    id: "liberta",
    tone: "teal",
    icon: Lightbulb,
    label: "Libertà",
    sublabel: "COME NASCE",
    metric: "0",
    suffix: "copioni da recitare",
    subtext: "L’idea parte da te.",
    copy: "Noi mettiamo obiettivi, riferimenti e limiti. Tu ci metti il punto di vista: è proprio quello che cerchiamo 🎯",
    foot: "Linee guida, non copioni",
  },
  {
    id: "consegna",
    tone: "plain",
    icon: Video,
    label: "Consegna",
    sublabel: "COSA PRODUCI",
    metric: "1",
    suffix: "video finito",
    subtext: "30–60 secondi, pronti per Reel o TikTok.",
    copy: "Lo giri tu, col telefono, nel tuo ambiente. Niente set: basta una buona idea fatta bene 🚀",
    foot: "Un solo video finito",
  },
  {
    id: "distribuzione",
    tone: "periwinkle",
    icon: Megaphone,
    label: "Distribuzione",
    sublabel: "DOVE FINISCE",
    metric: "2",
    suffix: "milioni di visualizzazioni",
    subtext: "Ogni mese, in tutta Italia.",
    copy: "Il tuo video entra nelle campagne di Giada. Se ti va, può vivere anche sul tuo profilo in collaborazione 📊",
    foot: "Advertising e organico",
  },
];

// Chi cerchiamo: due elenchi separati invece di una matrice a due colonne. Il
// pannello affermativo porta una riga di dettaglio, quello negativo resta secco.
const fitYes = [
  ["Crei contenuti tuoi 💻", "Idea, riprese e voce sono davvero tue."],
  ["Curi audio e luce 🎞️", "Una finestra e una stanza silenziosa possono bastare."],
  ["Rispetti i tempi ⌚️", "Se dici una data, la rispetti."],
  ["Arrivi con un’idea 💡", "Ci racconti da dove partiresti e perché può funzionare."],
];

const fitNo = [
  "Avere tanti follower",
  "Riciclare un video fatto per un altro brand",
  "Voler parlare di Giada senza averla provata",
  "Aspettare che l’idea te la diamo noi",
];

// I profili condividono la stessa palette; il tono resta un identificatore
// semantico per eventuali sviluppi futuri.
const creatorModes = [
  {
    id: "rassicurante",
    tone: "teal",
    number: "01",
    label: "La voce che rassicura",
    title: "Rendi semplice quello che sembra difficile.",
    copy: "Davanti alla camera parli come parleresti a una persona, non a un pubblico.",
    tags: ["Talking head", "Spiegazioni chiare", "Tono credibile"],
  },
  {
    id: "vita-reale",
    tone: "periwinkle",
    number: "02",
    label: "La vita vera",
    title: "Trovi una storia dentro una giornata qualsiasi.",
    copy: "Ti viene naturale partire da un dettaglio vero, non da una frase da pubblicità.",
    tags: ["Storytelling", "Scene quotidiane", "Naturalezza"],
  },
  {
    id: "performance",
    tone: "navy",
    number: "03",
    label: "L’istinto performance",
    title: "Sai che i primi tre secondi fanno la differenza.",
    copy: "Parti forte e sai tenere l’attenzione di chi guarda.",
    tags: ["UGC adv", "Hook forti", "Test creativi"],
  },
];

// Il numero di ogni passo usa una progressione dal teal al navy.
const processSteps = [
  ["01", "Lasci i contatti", "Brief e video di esempio si aprono subito dopo l’invio.", "s1"],
  ["02", "Provi Giada", "Hai quattordici giorni per usarla. Non devi creare nulla.", "s2"],
  ["03", "Proponi la tua idea", "Ci racconti il video che faresti. Entro 72 ore decidiamo se partire insieme.", "s3"],
  ["04", "Giri il video", "Realizzi un video finito, che poi entra nelle campagne di Giada.", "s4"],
];

// La prova del programma sta accanto alla dimostrazione, non a fine pagina.
// Solo fatti già accaduti, nessuna metrica di performance.
const proofFacts = [
  { id: "spend", value: "+10.000", unit: "€", label: "investiti ogni mese in pubblicità" },
  { id: "views", value: "+2", unit: "mln", label: "di visualizzazioni ogni mese" },
  { id: "reach", value: "+1,2", unit: "mln", label: "di persone raggiunte ogni mese" },
];

const faqs = [
  {
    question: "Devo avere molti follower?",
    answer: "No. Lavoriamo anche con profili sotto i 5.000 follower. Ci interessano soprattutto l’idea, la naturalezza e l’affidabilità.",
  },
  {
    question: "Cosa ricevo dopo il form?",
    answer: "Appena invii, si apre la cartella: dentro c’è il brief in PDF da scaricare, sei nostri video di esempio e il link per provare Giada gratis per quattordici giorni. Se perdi il link, ricompila il form con la stessa mail e te lo rimostriamo.",
  },
  {
    question: "Mi date uno script da recitare?",
    answer: "No. Ti diamo obiettivi, riferimenti e limiti. Il resto è tuo: idea, parole e taglio.",
  },
  {
    question: "Quanto pagate?",
    answer: "Si parte da 50€ per ogni video selezionato. Se lavori già con brand e hai risultati da mostrare, possiamo valutare cifre più alte, più video o un accordo legato ai risultati.",
  },
  {
    question: "Come usate il video?",
    answer: "Lo usiamo nelle campagne pubblicitarie di Giada e sui nostri canali, senza limite di tempo. È importante saperlo prima: è il motivo per cui nasce il programma.",
  },
  {
    question: "Devo pubblicarlo sul mio profilo?",
    answer: "No, non è obbligatorio. Se ti va, possiamo pubblicarlo in collaborazione, così compare anche sul tuo profilo.",
  },
  {
    question: "Chi siete?",
    answer: "Vivarium, la società che sviluppa Giada.",
  },
];

// Rivelazione in scroll: una sola classe, una sola volta, niente listener di scroll.
function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    if (typeof IntersectionObserver === "undefined") {
      nodes.forEach((el) => el.classList.add("is-in"));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      // Il margine era del 12%: un elemento appoggiato alla piega, come la riga
      // del compenso nella hero, restava invisibile finché non si scrollava.
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 },
    );
    nodes.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export function App() {
  const [angleKey, setAngleKey] = useState("default");
  const [activeMode, setActiveMode] = useState("rassicurante");
  const [openFaq, setOpenFaq] = useState(0);
  // idle | sending | done | error
  const [formState, setFormState] = useState("idle");
  const modalRef = useRef(null);
  // null = non ha ancora scelto, "granted" | "denied" = ha scelto.
  const [consent, setConsent] = useState(null);
  // La nav fissa non esiste sopra la hero: compare solo dalla sezione dopo, e
  // torna a sparire risalendo verso la hero dal basso.
  const [showNav, setShowNav] = useState(false);
  const heroRef = useRef(null);
  useReveal();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const angle = params.get("angolo");
    const profile = params.get("profilo");
    if (angle && heroAngles[angle]) {
      setAngleKey(angle);
      setActiveMode(heroAngles[angle].profile);
    }
    if (profile && creatorModes.some((mode) => mode.id === profile)) {
      setActiveMode(profile);
    }
  }, []);

  // La nav fissa compare quando la hero esce dal viewport e torna a sparire
  // risalendo. Su mobile porta con sé anche la CTA, senza una seconda barra.
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero || typeof IntersectionObserver === "undefined") return undefined;
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setShowNav(!entry.isIntersecting);
      },
      { rootMargin: "-72px 0px 0px 0px" },
    );
    heroObserver.observe(hero);
    return () => heroObserver.disconnect();
  }, []);

  const angle = heroAngles[angleKey] ?? heroAngles.default;
  const selectedMode = useMemo(
    () => creatorModes.find((mode) => mode.id === activeMode) ?? creatorModes[0],
    [activeMode],
  );

  // Il pixel Meta parte solo dopo un sì esplicito. La scelta si legge dopo il
  // primo render: durante il render il localStorage non si tocca.
  useEffect(() => {
    const saved = readConsent();
    setConsent(saved);
    if (saved === "granted") loadPixel();
  }, []);

  function decideConsent(value) {
    writeConsent(value);
    setConsent(value);
    if (value === "granted") loadPixel();
  }

  // Il pop-up di conferma: Esc chiude, la pagina sotto non scorre, il focus
  // entra nel pannello. Senza questo il lettore di schermo resta nel form.
  useEffect(() => {
    if (formState !== "done") return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setFormState("idle");
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    modalRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [formState]);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());

    const payload = {
      fullName: String(values.fullName || "").trim(),
      email: String(values.email || "").trim(),
      handle: String(values.handle || "").trim(),
      about: String(values.about || "").trim(),
      consentAge: Boolean(values.age),
      consentPrivacy: Boolean(values.privacy),
      submittedAt: new Date().toISOString(),
      pageUrl: window.location.href,
    };

    const eventId = newEventId();
    payload.eventId = eventId;

    setFormState("sending");
    try {
      // text/plain evita il preflight: Apps Script non risponde alle OPTIONS.
      // La redirect su script.googleusercontent.com porta `Access-Control-Allow-Origin: *`,
      // quindi qui la risposta si legge davvero e una conferma è una conferma.
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.error || String(response.status));
      form.reset();
      // L'evento parte solo a invio riuscito: una candidatura contata è una
      // candidatura arrivata davvero nel foglio.
      trackLead(eventId);
      setFormState("done");
    } catch {
      setFormState("error");
    }
  }

  return (
    <>
      <div className="grain" aria-hidden="true" />

      {/* Nav fissa a pastiglia. Non esiste sopra la hero: entra quando la hero
          è uscita e torna a uscire risalendo dal basso. `inert` la toglie anche
          da tastiera e lettori di schermo finché è nascosta. */}
      <header
        className={showNav ? "site-nav is-visible" : "site-nav"}
        aria-label="Navigazione principale"
        inert={!showNav}
      >
        <div className="site-nav-inner">
          <a className="brand" href="#top">
            GIADA<span>CREATOR PROGRAM</span>
          </a>
          <nav className="nav-links" aria-label="Sezioni della pagina">
            <a href="#chi-cerchiamo">Chi cerchiamo</a>
            <a href="#come-funziona">Come funziona</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="button button--primary button--sm button--nav-cta" href="#candidatura">
            <span>{CTA_LABEL}</span>
            <span className="button-badge" aria-hidden="true">
              <ArrowUpRight size={14} strokeWidth={2.2} />
            </span>
          </a>
        </div>
      </header>

      <main>
        <section className="hero zone zone--dark zone-hero" id="top" ref={heroRef}>
          {/* Nella hero non c'è nessuna barra: marchio, link e azione di
              servizio vivono solo nella nav fissa, che qui è fuori campo. */}
          <div className="container">

            {/* Composizione centrata sulla reference "Pallet Ross": titolo su due
                righe, ventaglio di carte sotto il titolo, poi sottotitolo stretto
                e coppia di azioni. Due etichette a fumetto ai lati del ventaglio. */}
            <div className="hero-center">
              <h1 className="hero-title" data-reveal>
                {angle.lead}
                <em>{angle.accent}</em>
              </h1>

              <div className="hero-deck" data-reveal style={{ "--d": "90ms" }}>
                <div className="deck-fan">
                  {heroDeck.map((card, i) => (
                    <figure
                      className={`deck-card${card.src ? "" : " deck-card--slot"}`}
                      key={card.id}
                      style={{
                        "--rot": card.rot,
                        "--lift": card.lift,
                        zIndex: i + 1,
                        "--d": `${140 + i * 60}ms`,
                      }}
                    >
                      {card.src ? (
                        <img
                          src={`${import.meta.env.BASE_URL}assets/${card.src}-436.webp`}
                          srcSet={deckSrcSet(card.src)}
                          sizes={DECK_SIZES}
                          alt={card.alt}
                          width="654"
                          height="872"
                          fetchPriority="high"
                        />
                      ) : (
                        <span className="deck-slot-label" aria-hidden="true">
                          Foto
                        </span>
                      )}
                    </figure>
                  ))}
                </div>

                {/* Due promesse compatte: libertà creativa e distribuzione. */}
                <div className="deck-tags">
                  <span className="deck-tag deck-tag--left" data-reveal style={{ "--d": "420ms" }}>
                    La tua idea, la tua voce
                  </span>
                  <span className="deck-tag deck-tag--right" data-reveal style={{ "--d": "480ms" }}>
                    Amplificato in tutta Italia
                  </span>
                </div>

                {/* Il sigillo porta alla spiegazione del programma, non alla
                    conversione: la CTA è già due volte in questo schermo. */}
                <a className="hero-seal" href="#prova" aria-label="Scopri come funziona">
                  <svg className="hero-seal-ring" viewBox="0 0 120 120" aria-hidden="true">
                    <defs>
                      <path
                        id="sealPath"
                        fill="none"
                        d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0"
                      />
                    </defs>
                    <text>
                      <textPath href="#sealPath" startOffset="0">
                        SCOPRI COME FUNZIONA · SCOPRI COME FUNZIONA ·
                      </textPath>
                    </text>
                  </svg>
                  <span className="hero-seal-core" aria-hidden="true">
                    <ChevronDown size={20} strokeWidth={2.2} />
                  </span>
                </a>
              </div>

              <p className="hero-sub" data-reveal style={{ "--d": "90ms" }}>
                Giada è un’assistente di nutrizione su Telegram. Provala gratis e scopri come
                potresti raccontarla con la tua voce.
              </p>
              <div className="hero-actions" data-reveal style={{ "--d": "170ms" }}>
                <a className="button button--primary button--badge" href="#candidatura">
                  <span>{CTA_LABEL}</span>
                  <span className="button-badge" aria-hidden="true">
                    <ArrowUpRight size={16} strokeWidth={2.2} />
                  </span>
                </a>
                {/* Nella reference la seconda azione è una pastiglia chiara
                    accanto alla principale, non un link di testo. */}
                <a className="button button--ghost" href="#come-funziona">
                  <span>Come funziona</span>
                  <ChevronDown aria-hidden="true" size={15} strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Le condizioni come tre schede a metrica, sulla reference "stats-1" di
            watermelon.sh: chip con etichetta, numero grande, riga di dettaglio.
            La cucitura porta il navy della hero dentro la carta calda. */}
        <section
          className="section terms zone zone--light zone-terms"
          id="il-patto"
          aria-labelledby="terms-title"
        >
          <div className="container">
            <div className="section-head section-head--center terms-head" data-reveal>
              <h2 id="terms-title">
                Come lavoriamo
                <em>insieme.</em>
              </h2>
              <p className="lede">
                Tre cose da sapere subito. Poche regole, zero sorprese.
              </p>
            </div>

            <div className="terms-grid">
              {termCards.map((card, i) => (
                <article
                  className={`term-card term-card--${card.tone}`}
                  key={card.id}
                  data-reveal
                  style={{ "--d": `${i * 80}ms` }}
                >
                  <p className="term-chip">
                    <card.icon aria-hidden="true" size={18} strokeWidth={1.9} />
                    <span>
                      <strong>{card.label}</strong>
                      <em>{card.sublabel}</em>
                    </span>
                  </p>

                  <p className="term-metric">
                    <span aria-hidden={card.metricSr ? "true" : undefined}>{card.metric}</span>
                    {card.metricSr ? <span className="sr-only">{card.metricSr}</span> : null}
                    <em>{card.suffix}</em>
                  </p>

                  <p className="term-lead">{card.subtext}</p>
                  <p className="term-copy">{card.copy}</p>

                  <p className="term-foot">
                    <Check aria-hidden="true" size={14} strokeWidth={2.4} />
                    {card.foot}
                  </p>
                </article>
              ))}
            </div>

            <p className="terms-note" data-reveal>
              <strong>Prima l’idea, poi il ciak.</strong> Giri solo quando siamo allineati.
            </p>
          </div>
        </section>

        {/* La prova del prodotto sale prima della qualifica: si guarda cosa si
            racconta, e solo dopo si chiede al creator di misurarsi. In fondo
            alla stessa superficie sta la rail dei fatti verificabili. */}
        <section
          className="section trial zone zone--light zone-trial"
          id="prova"
          aria-labelledby="trial-title"
        >
          <div className="container">
            <div className="trial-grid">
              <div className="trial-copy" data-reveal>
                <h2 id="trial-title">
                  Prima la usi.
                  <em>Poi la racconti 🎙️</em>
                </h2>
                <p className="lede">Hai quattordici giorni gratis per usarla e scoprire cosa ti viene voglia di raccontare.</p>
                <ul className="trial-days">
                  <li>
                    <b>SENZA COMPITI</b>
                    Usala come la useresti davvero. L’idea giusta può aspettare.
                  </li>
                  <li>
                    <b>SENZA FRETTA</b>
                    Quando pensi “questo lo racconterei”, hai trovato il punto di partenza.
                  </li>
                </ul>
                <a className="inline-cta" href="https://giada.care/nutrition14?flow=g3&utm_source=creators&utm_medium=b2b_landing&utm_campaign=creatorsb2b_t14d" target="_blank" rel="noreferrer noopener">
                  Conosci Giada da vicino
                  <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2} />
                </a>
              </div>
              <div
                className="trial-stage"
                aria-label="Anteprima dell’esperienza Giada"
                data-reveal
                style={{ "--d": "100ms" }}
              >
                <div className="stage-screen stage-screen--summary">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/product-bilancio-v2.png`}
                    alt="Riepilogo di calorie e macronutrienti in Giada"
                    loading="lazy"
                  />
                </div>
                <div className="stage-screen stage-screen--log">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/product-food-log-v3.jpg`}
                    alt="Food log di Giada con i pasti della giornata"
                    loading="lazy"
                  />
                </div>
                <div className="stage-question">
                  <span>LA DOMANDA</span>
                  <p>Quale momento di Giada racconteresti per primo?</p>
                </div>
              </div>
            </div>

            {/* Tre fatti già accaduti, non tre promesse. */}
            <dl className="proof-rail">
              {proofFacts.map((fact, i) => (
                <div className="proof-item" key={fact.id} data-reveal style={{ "--d": `${i * 70}ms` }}>
                  <dt>{fact.label}</dt>
                  <dd>
                    {fact.value}
                    {fact.unit ? <em>{fact.unit}</em> : null}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* La qualifica sulla sola carta fredda della pagina: dal ghiacciaio
            scende alla lavanda, quindi prepara il viola del processo. */}
        <section
          className="section fit zone zone--light zone-fit"
          id="chi-cerchiamo"
          aria-labelledby="fit-title"
        >
          <div className="container">
            <div className="section-head" data-reveal>
              <p className="eyebrow">Chi cerchiamo</p>
              <h2 id="fit-title">
                Puoi avere pochi follower.
                <em>Ma non poche idee! 😉</em>
              </h2>
              <p className="lede">Ci interessano idee vive, naturalezza e parola data. L’esperienza aiuta, ma non decide.</p>
            </div>
            {/* Due pannelli invece della matrice a due colonne: quello
                affermativo è sollevato e porta una riga di dettaglio, quello
                negativo resta secco e più silenzioso. */}
            <div className="fit-split">
              <div className="fit-panel fit-panel--yes" data-reveal style={{ "--d": "80ms" }}>
                <p className="fit-panel-head">
                  <span className="fit-badge fit-badge--yes">
                    <Check aria-hidden="true" size={14} strokeWidth={2.6} />
                  </span>
                  Sei in linea se
                </p>
                <ul className="fit-items">
                  {fitYes.map(([title, note]) => (
                    <li key={title}>
                      <strong>{title}</strong>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="fit-panel fit-panel--no" data-reveal style={{ "--d": "160ms" }}>
                <p className="fit-panel-head">
                  <span className="fit-badge fit-badge--no">
                    <Minus aria-hidden="true" size={14} strokeWidth={2.6} />
                  </span>
                  Non basta
                </p>
                <ul className="fit-items fit-items--quiet">
                  {fitNo.map((item) => (
                    <li key={item}>
                      <strong>{item}</strong>
                    </li>
                  ))}
                </ul>
                <p className="fit-panel-foot">Nessuno di questi punti è squalificante da solo.</p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="section profiles zone zone--light zone-profiles"
          id="profili"
          aria-labelledby="profiles-title"
        >
          <div className="container">
            <div className="section-head" data-reveal>
              <p className="eyebrow">Tre modi diversi, una cosa in comune: sembrare veri</p>
              <h2 id="profiles-title">
                Non cerchiamo <em className="is-inline">una faccia sola.</em>
              </h2>
            </div>
            <div
              className="profiles-tabs"
              role="tablist"
              aria-label="Profili creator"
              data-reveal
              style={{ "--d": "80ms" }}
            >
              {creatorModes.map((mode) => {
                const active = mode.id === activeMode;
                return (
                  <button
                    key={mode.id}
                    id={`profile-${mode.id}`}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    aria-controls="profile-panel"
                    className={`profile-tab${active ? " is-active" : ""}`}
                    onClick={() => setActiveMode(mode.id)}
                  >
                    <small>{mode.number}</small>
                    <strong>{mode.label}</strong>
                  </button>
                );
              })}
            </div>
            {/* Tre zone: indice e titolo a sinistra, citazione editoriale e tag
                a destra. Nella V6 metà della colonna destra restava vuota. */}
            <article
              className="profile-panel"
              id="profile-panel"
              role="tabpanel"
              aria-labelledby={`profile-${selectedMode.id}`}
              data-reveal
              style={{ "--d": "140ms" }}
            >
              {/* La `key` fa ripartire l'animazione del corpo a ogni cambio di
                  profilo: il colore della superficie cambia dentro il movimento
                  invece di saltare. */}
              <div className="profile-panel-body" key={selectedMode.id}>
                <div>
                  <span className="profile-index">{selectedMode.number} / 03</span>
                  <h3>{selectedMode.title}</h3>
                </div>
                <div className="profile-side">
                  <p className="profile-quote">{selectedMode.copy}</p>
                  <div>
                    <span className="profile-side-label">{selectedMode.label}</span>
                    <ul className="tag-row">
                      {selectedMode.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section
          className="section process zone zone--light zone-process"
          id="come-funziona"
          aria-labelledby="process-title"
        >
          <div className="container">
            <div className="section-head" data-reveal>
              <h2 id="process-title">
                Tu parti.
                <em>Noi ti guidiamo.</em>
              </h2>
              <p className="lede">Quattro passaggi, ognuno con un senso.</p>
            </div>
            <ol className="process-list">
              {processSteps.map(([number, title, copy, tone], i) => (
                <li
                  className={`process-row process-row--${tone}`}
                  key={number}
                  data-reveal
                  style={{ "--d": `${i * 60}ms` }}
                >
                  <span className="process-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Le obiezioni si chiudono prima di chiedere il contatto: nella V6 la
            FAQ stava dopo il form. */}
        <section
          className="section faq zone zone--light zone-faq"
          id="faq"
          aria-labelledby="faq-title"
        >
          <div className="container faq-grid">
            <div className="faq-rail" data-reveal>
              <h2 id="faq-title">
                Le cose da sapere.
                <em>Prima di iniziare 🏁</em>
              </h2>
              {/* La rail non è più titolo e vuoto: porta la scorciatoia al form
                  per chi ha già letto abbastanza. */}
              <div className="faq-aside">
                <p>Due minuti adesso. Brief e video di esempio subito dopo l’invio.</p>
                <a className="button button--primary button--sm" href="#candidatura">
                  <span>{CTA_LABEL}</span>
                  <ArrowRight aria-hidden="true" size={15} strokeWidth={2} />
                </a>
              </div>
            </div>
            <div className="faq-list" data-reveal style={{ "--d": "80ms" }}>
              {faqs.map((item, index) => {
                const active = openFaq === index;
                const answerId = `faq-answer-${index}`;
                return (
                  <article className={active ? "faq-item is-open" : "faq-item"} key={item.question}>
                    <button
                      type="button"
                      aria-expanded={active}
                      aria-controls={answerId}
                      onClick={() => setOpenFaq(active ? -1 : index)}
                    >
                      <span>{item.question}</span>
                      <ChevronDown aria-hidden="true" size={19} strokeWidth={2} />
                    </button>
                    <div className="faq-answer" id={answerId}>
                      <div>
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Finale e candidatura sono la stessa sezione: la V6 metteva il form e
            poi una fascia teal con la stessa CTA che riportava indietro. Una
            conversione sola, sull'unica superficie che arriva al teal pieno. */}
        <section
          className="section section--wide finale zone zone--dark zone-finale"
          id="candidatura"
          aria-labelledby="apply-title"
        >
          <div className="container finale-grid">
            <div className="finale-copy" data-reveal>
              <span className="finale-kicker eyebrow">Hai già un’idea?</span>
              <h2 id="apply-title">
                Prova Giada.
                <em>Poi raccontacela.</em>
              </h2>
              <p className="lede">Lasciaci i tuoi contatti: brief e video di esempio si aprono subito.</p>
              <p className="finale-note">
                <Check aria-hidden="true" size={14} strokeWidth={2.4} />
                Adesso basta la curiosità. Il video viene dopo.
              </p>
            </div>
            <div className="form-card" data-reveal style={{ "--d": "100ms" }}>
              <form onSubmit={handleSubmit}>
                <div className="field-grid">
                    <label>
                      <span>Nome completo</span>
                      <input
                        name="fullName"
                        placeholder="Nome e cognome"
                        autoComplete="name"
                        required
                      />
                    </label>
                    <label>
                      <span>Email</span>
                      <input
                        name="email"
                        type="email"
                        placeholder="nome@email.it"
                        autoComplete="email"
                        required
                      />
                    </label>
                  </div>
                  <label>
                    <span>Tag del profilo</span>
                    <input
                      name="handle"
                      placeholder="@iltuonome"
                      autoCapitalize="none"
                      autoCorrect="off"
                      required
                    />
                  </label>
                  <label>
                    <span>Raccontaci qualcosa di te</span>
                    <textarea
                      name="about"
                      rows={3}
                      placeholder="Che contenuti fai? Cosa ti incuriosisce di Giada? Se pubblichi anche altrove, lascia pure gli altri profili."
                      required
                    />
                  </label>
                  <label className="consent">
                    <input type="checkbox" name="age" required />
                    <span>Ho almeno 18 anni.</span>
                  </label>
                  <label className="consent">
                    <input type="checkbox" name="privacy" required />
                    <span>
                      Accetto l’
                      <a href={PRIVACY_URL} target="_blank" rel="noreferrer noopener">
                        informativa privacy
                      </a>
                      .
                    </span>
                  </label>
                  <button
                    className="button button--primary button--full"
                    type="submit"
                    disabled={formState === "sending"}
                  >
                    <span>{formState === "sending" ? "Invio in corso…" : CTA_LABEL}</span>
                    <ArrowRight aria-hidden="true" size={17} strokeWidth={2} />
                  </button>
                  {formState === "error" ? (
                    <p className="form-error" role="alert">
                      L’invio non è riuscito. Riprova, oppure scrivici a{" "}
                      <a href="mailto:info@vivariumai.co">info@vivariumai.co</a>.
                    </p>
                  ) : null}
                </form>
            </div>
          </div>
        </section>

        <footer className="zone zone--dark zone-footer">
          <div className="container footer-grid">
            <strong>
              GIADA <span>by Vivarium</span>
            </strong>
            <a href={PRIVACY_URL} target="_blank" rel="noreferrer noopener">
              Informativa privacy
            </a>
            <a href="#top">
              Torna su
              <ArrowUpRight aria-hidden="true" size={14} strokeWidth={2} />
            </a>
          </div>
        </footer>
      </main>

      {consent === null ? (
        <div className="cookie-bar" role="region" aria-label="Consenso alla misurazione">
          <p>
            Usiamo un cookie di Meta per capire quale annuncio ti ha portato qui. Serve solo a
            misurare le campagne: nessun profilo, nessuna rivendita.{" "}
            <a href={PRIVACY_URL} target="_blank" rel="noreferrer noopener">
              Informativa
            </a>
            .
          </p>
          <div className="cookie-bar-actions">
            <button
              className="button button--ghost"
              type="button"
              onClick={() => decideConsent("denied")}
            >
              <span>Rifiuta</span>
            </button>
            <button
              className="button button--primary"
              type="button"
              onClick={() => decideConsent("granted")}
            >
              <span>Accetta</span>
            </button>
          </div>
        </div>
      ) : null}

      {formState === "done" ? (
        <div
          className="modal-scrim"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) setFormState("idle");
          }}
        >
          <div
            className="modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            ref={modalRef}
            tabIndex={-1}
          >
            <p className="modal-mark" aria-hidden="true">
              <Check size={26} strokeWidth={2.6} />
            </p>
            <h2 id="modal-title">
              Ci siamo.
              <em>Sei dentro 🎬</em>
            </h2>
            <p className="modal-lede">
              Abbiamo ricevuto la tua candidatura. Apri la cartella qui sotto: dentro trovi il
              brief da scaricare, sei nostri video di esempio e il link per provare Giada.
            </p>
            <ul className="modal-steps">
              <li>
                <b>01</b>
                Leggi il brief: dice cosa cerchiamo e quanta libertà hai.
              </li>
              <li>
                <b>02</b>
                Prova Giada per quattordici giorni, senza compiti.
              </li>
              <li>
                <b>03</b>
                Raccontaci la tua idea. Entro 72 ore ti diciamo se si parte.
              </li>
            </ul>
            <div className="modal-actions">
              {MATERIALS_URL ? (
                <a
                  className="button button--primary button--badge"
                  href={MATERIALS_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span>Apri la cartella</span>
                  <span className="button-badge" aria-hidden="true">
                    <ArrowUpRight size={16} strokeWidth={2.2} />
                  </span>
                </a>
              ) : (
                <button className="button button--primary button--badge" type="button" disabled>
                  <span>Apri la cartella</span>
                  <span className="button-badge" aria-hidden="true">
                    <ArrowUpRight size={16} strokeWidth={2.2} />
                  </span>
                </button>
              )}
              <button
                className="button button--ghost"
                type="button"
                onClick={() => setFormState("idle")}
              >
                <span>Chiudi</span>
              </button>
            </div>
            {MATERIALS_URL ? null : (
              <p className="modal-note">La cartella si attiva a breve: ti scriviamo appena è pronta.</p>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
