import { useEffect, useMemo, useRef, useState } from "react";
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

// TODO prima del traffico: sostituire con l'informativa dedicata ai lead creator.
// Oggi punta all'informativa Vivarium S.r.l. pubblicata per Giada.
const PRIVACY_URL = "https://giada.care/privacy";

// Una sola etichetta per l'unica conversione della pagina.
const CTA_LABEL = "Ricevi brief e accesso";

// Un solo titolo. La lettura di `?angolo=` resta in piedi per un eventuale
// message match futuro: qualsiasi valore diverso da `default` cade qui.
const heroAngles = {
  default: {
    lead: "Diventa una voce di Giada.",
    accent: "L’idea resta tua.",
    profile: "rassicurante",
  },
};

// Ventaglio della hero, sulla reference "Pallet Ross": cinque carte verticali in
// arco, sovrapposte, che salgono da sinistra a destra. Sotto i 700px escono le
// due esterne e restano le tre centrali, con la foto sempre al centro.
// Solo la carta centrale ha oggi un'immagine reale: le altre sono slot in attesa
// dei file. Per riempire uno slot basta aggiungere `src` e `alt` alla sua riga.
const heroDeck = [
  { id: "slot-1", rot: -8.5, lift: 6 },
  { id: "slot-2", rot: -4.5, lift: 2.4 },
  {
    id: "hero-shot",
    rot: -1,
    lift: 0.5,
    src: "/assets/giada-creator-hero.png",
    alt: "Una creator registra un video per Giada nella cucina di casa",
  },
  { id: "slot-4", rot: 4, lift: 1.6 },
  { id: "slot-5", rot: 7.5, lift: 0 },
];

// Le tre cose da sapere prima di ogni domanda: come nasce il contenuto, cosa si
// consegna, dove finisce. Nessun termine economico: il compenso vive solo in FAQ.
// `tone` decide la superficie della scheda: teal, neutra, lilla.
const termCards = [
  {
    id: "liberta",
    tone: "teal",
    icon: Lightbulb,
    label: "Libertà",
    sublabel: "COME NASCE",
    metric: "0",
    suffix: "copioni da recitare",
    subtext: "L’idea è tua, dall’inizio.",
    copy: "Ti diamo obiettivi, riferimenti e limiti. Il come lo decidi tu: è il motivo per cui ti stiamo cercando.",
    foot: "Linee guida, non uno script",
  },
  {
    id: "consegna",
    tone: "plain",
    icon: Video,
    label: "Consegna",
    sublabel: "COSA PRODUCI",
    metric: "1",
    suffix: "video finito",
    subtext: "30-60 secondi, Reel e TikTok.",
    copy: "Girato da te, col telefono, dove vivi. Non serve un set, non serve una troupe.",
    foot: "Una sola consegna",
  },
  {
    id: "distribuzione",
    tone: "lilac",
    icon: Megaphone,
    label: "Distribuzione",
    sublabel: "DOVE FINISCE",
    metric: "2",
    suffix: "milioni di visualizzazioni",
    subtext: "Ogni mese, in tutta Italia.",
    copy: "Il tuo video entra nelle campagne di Giada. Se ti va, esce anche sul tuo profilo come collaborazione.",
    foot: "Advertising e organico",
  },
];

// Chi cerchiamo: due elenchi separati invece di una matrice a due colonne. Il
// pannello affermativo porta una riga di dettaglio, quello negativo resta secco.
const fitYes = [
  ["Giri contenuti tuoi", "Idea, riprese e voce partono da te."],
  ["Curi audio e luce", "Bastano una finestra e una stanza silenziosa."],
  ["Rispetti i tempi", "Consegni quando hai detto che consegni."],
  ["Arrivi con un’idea", "Un’apertura e il motivo per cui può funzionare."],
];

const fitNo = [
  "Follower senza una voce",
  "Un video riciclato da un altro brand",
  "Nessuna voglia di provare il prodotto",
  "Una richiesta al posto di una proposta",
];

// Ogni profilo porta la sua tinta: teal, lilla, ambra. La tinta viaggia dal tab
// al pannello, quindi cambiando profilo cambia il colore della sezione.
const creatorModes = [
  {
    id: "rassicurante",
    tone: "teal",
    number: "01",
    label: "La voce che rassicura",
    title: "Rendi semplice quello che sembra difficile.",
    copy: "La camera è una conversazione, non un palco.",
    tags: ["Talking head", "Spiegazioni chiare", "Tono credibile"],
  },
  {
    id: "vita-reale",
    tone: "lilac",
    number: "02",
    label: "La vita vera",
    title: "Trasformi una giornata qualsiasi in una storia.",
    copy: "Trovi il dettaglio umano, non lo spot.",
    tags: ["Storytelling", "Scene quotidiane", "Naturalezza"],
  },
  {
    id: "performance",
    tone: "amber",
    number: "03",
    label: "L’istinto performance",
    title: "Pensi ai primi tre secondi.",
    copy: "Sai aprire forte e tenere incollato chi guarda.",
    tags: ["UGC adv", "Hook forti", "Test creativi"],
  },
];

// Il numero di ogni passo porta una tinta diversa: la scala di colore misura
// l'avanzamento, dall'ingresso teal alla consegna in ambra.
const processSteps = [
  ["01", "Lasci i contatti", "Brief e accesso arrivano subito nella tua mail.", "s1"],
  ["02", "Provi Giada", "Tre giorni gratis. Nessun contenuto richiesto.", "s2"],
  ["03", "Proponi la tua idea", "Ti diciamo entro 72 ore se si gira. Non serve un video.", "s3"],
  ["04", "Giri il video", "Un video finito. Poi entra nelle campagne.", "s4"],
];

// La prova del programma, sulla stessa superficie scura in cui si guarda il
// prodotto: la credibilità sta accanto alla dimostrazione, non a fine pagina.
// Solo fatti già accaduti, nessuna metrica di performance.
const proofFacts = [
  { id: "spend", value: "10.000", unit: "€", label: "investiti ogni mese in pubblicità" },
  { id: "reach", value: "1,2", unit: "mln", label: "di persone raggiunte ogni mese" },
  { id: "onboarding", value: "50", unit: "%", label: "di chi arriva inizia a usare Giada" },
];

const faqs = [
  {
    question: "Devo avere molti follower?",
    answer: "No. Lavoriamo anche sotto i 10.000. Contano l’idea, la naturalezza e i tempi rispettati.",
  },
  {
    question: "Cosa ricevo dopo il form?",
    answer:
      "Subito, nella tua mail: un brief in PDF e il link per provare Giada gratis per tre giorni.",
  },
  {
    question: "Mi date uno script da recitare?",
    answer:
      "No. Il brief dà obiettivi, riferimenti e limiti. L’idea, le parole e il taglio restano tuoi.",
  },
  {
    question: "Quanto pagate?",
    answer:
      "Da 50€ a video selezionato. Con chi lavora già con i brand e porta risultati si ragiona su cifre più alte, su più video o su un accordo legato ai risultati.",
  },
  {
    question: "Come usate il video?",
    answer:
      "Nelle campagne pubblicitarie di Giada e sui nostri canali, senza limite di tempo. È il motivo per cui il programma esiste.",
  },
  {
    question: "Devo pubblicarlo sul mio profilo?",
    answer: "Solo se ti va. In quel caso esce come collaborazione, così resta anche tuo.",
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
  const [submitted, setSubmitted] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);
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

  // Un solo osservatore per i due elementi fissi: la nav in alto segue la hero,
  // la barra mobile in basso compare dopo la hero e sparisce sul form.
  useEffect(() => {
    const hero = heroRef.current;
    const form = document.getElementById("candidatura");
    if (!hero || typeof IntersectionObserver === "undefined") return undefined;
    const state = { pastHero: false, onForm: false };
    const sync = () => {
      setShowNav(state.pastHero);
      setShowStickyCta(state.pastHero && !state.onForm);
    };
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        state.pastHero = !entry.isIntersecting;
        sync();
      },
      { rootMargin: "-72px 0px 0px 0px" },
    );
    heroObserver.observe(hero);
    const formObserver = form
      ? new IntersectionObserver(([entry]) => {
          state.onForm = entry.isIntersecting;
          sync();
        })
      : null;
    if (form && formObserver) formObserver.observe(form);
    return () => {
      heroObserver.disconnect();
      formObserver?.disconnect();
    };
  }, []);

  const angle = heroAngles[angleKey] ?? heroAngles.default;
  const selectedMode = useMemo(
    () => creatorModes.find((mode) => mode.id === activeMode) ?? creatorModes[0],
    [activeMode],
  );

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
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
          <a className="button button--primary button--sm" href="#candidatura">
            <span>{CTA_LABEL}</span>
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
                          src={card.src}
                          alt={card.alt}
                          width="1536"
                          height="1024"
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

                {/* Le due note che prima stavano sull'immagine: rispondono alla
                    prima obiezione di un creator, l'attrezzatura. */}
                <div className="deck-tags">
                  <span className="deck-tag deck-tag--left" data-reveal style={{ "--d": "420ms" }}>
                    Girato col telefono
                  </span>
                  <span className="deck-tag deck-tag--right" data-reveal style={{ "--d": "480ms" }}>
                    Nessun set
                  </span>
                </div>

                {/* Il sigillo porta alla spiegazione del programma, non alla
                    conversione: la CTA è già due volte in questo schermo. */}
                <a className="hero-seal" href="#come-funziona" aria-label="Scopri come funziona">
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
                Giada è un’assistente di nutrizione su Telegram. Provala gratis, poi
                proponici la tua idea per un video.
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
              {/* Il compenso non sta più sul sigillo: diventa la pastiglia che
                  apre la riga di prova, quindi resta nella hero a ogni larghezza. */}
              <p className="hero-proof" data-reveal style={{ "--d": "220ms" }}>
                <span className="hero-fee">Oltre 10.000€ al mese in pubblicità</span>
                <span>Il tuo video gira lì dentro, ogni giorno, in tutta Italia.</span>
              </p>
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
                Tre cose chiare prima ancora che tu ci scriva. Restano queste, fino alla consegna.
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
              Nessun video prima che ci siamo capiti. <strong>Prima l’idea, poi si gira.</strong>
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
                  <em>Poi la racconti.</em>
                </h2>
                <p className="lede">Tre giorni di accesso gratuito. Servono a te, non a noi.</p>
                <ul className="trial-days">
                  <li>
                    <b>SENZA COMPITI</b>
                    Usala davvero, come la useresti se nessuno te lo avesse chiesto.
                  </li>
                  <li>
                    <b>SENZA FRETTA</b>
                    Ci scrivi quando hai trovato il momento che meriterebbe di aprire un video.
                  </li>
                </ul>
                <a className="inline-cta" href="#profili">
                  Scegli il profilo che ti somiglia
                  <ArrowRight aria-hidden="true" size={16} strokeWidth={2} />
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
                    src="/assets/product-bilancio-v2.png"
                    alt="Riepilogo di calorie e macronutrienti in Giada"
                    loading="lazy"
                  />
                </div>
                <div className="stage-screen stage-screen--log">
                  <img
                    src="/assets/product-food-log-v3.jpg"
                    alt="Food log di Giada con i pasti della giornata"
                    loading="lazy"
                  />
                </div>
                <div className="stage-question">
                  <span>LA DOMANDA</span>
                  <p>Quale momento aprirebbe il tuo video?</p>
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
                <em>Non poche idee.</em>
              </h2>
              <p className="lede">
                Guardiamo l’idea, la naturalezza e la parola data. L’esperienza aiuta, non decide.
              </p>
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
              <p className="eyebrow">Tre modi di essere in linea</p>
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
                Il tuo impegno cresce
                <em>insieme al nostro.</em>
              </h2>
              <p className="lede">Quattro passaggi. Nessuno di corsa.</p>
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
                Domande chiare.
                <em>Risposte brevi.</em>
              </h2>
              {/* La rail non è più titolo e vuoto: porta la scorciatoia al form
                  per chi ha già letto abbastanza. */}
              <div className="faq-aside">
                <p>Due minuti. Brief e accesso subito nella tua mail.</p>
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
              <span className="finale-kicker">Hai già un’idea?</span>
              <h2 id="apply-title">
                Prova Giada.
                <em>Poi proponi.</em>
              </h2>
              <p className="lede">Lascia i contatti. Brief e accesso arrivano subito.</p>
              <p className="finale-note">
                <Check aria-hidden="true" size={14} strokeWidth={2.4} />
                Nessun video da mandare adesso.
              </p>
            </div>
            <div className="form-card" data-reveal style={{ "--d": "100ms" }}>
              {submitted ? (
                <div className="form-success" role="status" aria-live="polite">
                  <div className="form-success-mark">
                    <Check aria-hidden="true" size={26} strokeWidth={2.4} />
                  </div>
                  <h3>Ci siamo.</h3>
                  <p>Anteprima: nessun dato è stato inviato.</p>
                  <button
                    className="button button--ghost"
                    type="button"
                    onClick={() => setSubmitted(false)}
                  >
                    <span>Rivedi il form</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="field-grid">
                    <label>
                      <span>Nome</span>
                      <input name="name" placeholder="Come ti chiami?" autoComplete="name" required />
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
                    <span>Canale principale</span>
                    <select name="channel" defaultValue="" required>
                      <option value="" disabled>
                        Seleziona il canale
                      </option>
                      <option>Instagram</option>
                      <option>TikTok</option>
                      <option>Entrambi</option>
                      <option>Sto iniziando ora</option>
                    </select>
                  </label>
                  <label>
                    <span>Il tuo profilo</span>
                    <input
                      name="profile"
                      placeholder="@iltuonome"
                      autoCapitalize="none"
                      autoCorrect="off"
                      required
                    />
                  </label>
                  <label>
                    <span>Raccontati in due righe</span>
                    <textarea
                      name="about"
                      rows={3}
                      placeholder="Che contenuti fai? Perché Giada ti incuriosisce? Se hai altri profili, lasciali qui."
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
                  <button className="button button--primary button--full" type="submit">
                    <span>{CTA_LABEL}</span>
                    <ArrowRight aria-hidden="true" size={17} strokeWidth={2} />
                  </button>
                  <p className="form-note">Due minuti. Brief e accesso subito nella tua mail.</p>
                  <p className="form-demo">Anteprima: il form non invia ancora dati.</p>
                </form>
              )}
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

      <div className={showStickyCta ? "sticky-cta is-visible" : "sticky-cta"}>
        <span>Brief e accesso, subito</span>
        <a className="button button--primary button--sm" href="#candidatura">
          <span>{CTA_LABEL}</span>
        </a>
      </div>
    </>
  );
}
