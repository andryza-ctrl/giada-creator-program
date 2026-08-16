import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronDown } from "lucide-react";

// TODO prima del traffico: sostituire con l'informativa dedicata ai lead creator.
// Oggi punta all'informativa Vivarium S.r.l. pubblicata per Giada.
const PRIVACY_URL = "https://giada.care/privacy";

// Una sola etichetta per l'unica conversione della pagina.
const CTA_LABEL = "Ricevi accesso e brief";

// Un angolo per inserzione Meta: l'H1 e il profilo preselezionato cambiano con ?angolo=
const heroAngles = {
  default: {
    lead: "Cerchiamo 5 creator.",
    accent: "Conta l’idea, non i follower.",
    profile: "rassicurante",
  },
  competenza: {
    lead: "Spieghi bene la nutrizione?",
    accent: "Portiamola più lontano.",
    profile: "rassicurante",
  },
  numeri: {
    lead: "Non ci servono i tuoi follower.",
    accent: "Ci serve la tua idea.",
    profile: "vita-reale",
  },
  istinto: {
    lead: "La tua idea, girata da te,",
    accent: "dentro le nostre campagne.",
    profile: "performance",
  },
};

// Il patto: le quattro condizioni che un creator vuole leggere prima di tutto.
const pactTerms = [
  ["COMPENSO", "€80", "a video selezionato, alla consegna"],
  ["CONSEGNA", "1 video + 3 hook", "Reel o TikTok, 45-60 secondi"],
  ["UTILIZZO", "Paid e organico", "senza scadenza"],
  ["PROVA", "7 giorni gratis", "nessun video prima del contratto"],
];

const fitPairs = [
  ["Giri contenuti tuoi", "Follower senza una voce"],
  ["Curi audio e luce", "Un video riciclato da altri brand"],
  ["Rispetti brief e tempi", "Interesse solo per il compenso"],
  ["Arrivi con un’idea", "Arrivi con una richiesta"],
];

const creatorModes = [
  {
    id: "rassicurante",
    number: "01",
    label: "La voce che rassicura",
    title: "Rendi semplice ciò che sembra difficile.",
    copy: "La camera è una conversazione, non un palco.",
    tags: ["Talking head", "Spiegazioni chiare", "Tono credibile"],
  },
  {
    id: "vita-reale",
    number: "02",
    label: "La vita vera",
    title: "Trasformi una giornata qualsiasi in una storia.",
    copy: "Trovi il dettaglio umano, non la pubblicità.",
    tags: ["Storytelling", "Scene quotidiane", "Naturalezza"],
  },
  {
    id: "performance",
    number: "03",
    label: "L’istinto performance",
    title: "Pensi ai primi tre secondi.",
    copy: "Sai aprire forte e capire cosa funziona.",
    tags: ["UGC adv", "Hook forti", "Test creativi"],
  },
];

const processSteps = [
  ["01", "Provi Giada", "Sette giorni gratis. Nessun contenuto richiesto."],
  ["02", "Ricevi il brief", "Obiettivi, riferimenti e limiti già scritti."],
  ["03", "Proponi l’idea", "Hook, sviluppo, perché funziona. Non un video."],
  ["04", "Produciamo", "Contratto, tre hook, compenso alla consegna."],
];

const faqs = [
  {
    question: "Devo avere molti follower?",
    answer: "No. Lavoriamo anche sotto i 10.000. Contano idea, naturalezza e affidabilità.",
  },
  {
    question: "Quanto pagate?",
    answer: "€80 per video selezionato, alla consegna. Definito prima che tu giri.",
  },
  {
    question: "Come usate il video?",
    answer:
      "Nelle campagne pubblicitarie e sui canali di Giada, senza limite di tempo. Per condizioni diverse, se ne parla prima del contratto.",
  },
  {
    question: "Devo pubblicarlo sul mio profilo?",
    answer: "No, se non vuoi. Si decide prima di produrre.",
  },
  {
    question: "Cosa sono i tre hook?",
    answer:
      "Tre aperture per lo stesso video, girate nella stessa sessione. Cinque minuti in più, tre contenuti da testare.",
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
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );
    nodes.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function CtaButton({ href, children, variant = "primary", full = false, onClick }) {
  const classes = ["button", `button--${variant}`, full ? "button--full" : ""].filter(Boolean);
  return (
    <a className={classes.join(" ")} href={href} onClick={onClick}>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={17} strokeWidth={2} />
    </a>
  );
}

export function App() {
  const [angleKey, setAngleKey] = useState("default");
  const [activeMode, setActiveMode] = useState("rassicurante");
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);
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

  // La barra mobile compare dopo la hero e sparisce quando il form è già a schermo.
  useEffect(() => {
    const hero = heroRef.current;
    const form = document.getElementById("candidatura");
    if (!hero || typeof IntersectionObserver === "undefined") return undefined;
    const state = { pastHero: false, onForm: false };
    const sync = () => setShowStickyCta(state.pastHero && !state.onForm);
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        state.pastHero = !entry.isIntersecting;
        sync();
      },
      { rootMargin: "-120px 0px 0px 0px" },
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

      <main>
        <section className="hero" id="top" ref={heroRef}>
          <div className="container">
            <header className="hero-nav" aria-label="Navigazione principale">
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
            </header>

            {/* Composizione da reference "Veluno" (@uiuxmanuel, slide 3): colonna di
                testo con un secondo livello sotto la CTA, immagine a destra con la
                tacca nell'angolo in basso a sinistra rivolta al sigillo. */}
            <div className="hero-grid">
              <div className="hero-copy">
                <h1 className="hero-title" data-reveal>
                  {angle.lead}
                  <em>{angle.accent}</em>
                </h1>
                <p className="hero-sub" data-reveal style={{ "--d": "90ms" }}>
                  Giada è un assistente di nutrizione su Telegram. Provala sette giorni, poi
                  proponici un’idea per un video.
                </p>
                <div className="hero-actions" data-reveal style={{ "--d": "170ms" }}>
                  <a className="button button--primary button--badge" href="#candidatura">
                    <span>{CTA_LABEL}</span>
                    <span className="button-badge" aria-hidden="true">
                      <ArrowUpRight size={16} strokeWidth={2.2} />
                    </span>
                  </a>
                  <a className="text-link" href="#come-funziona">
                    Come funziona
                    <ChevronDown aria-hidden="true" size={15} strokeWidth={2} />
                  </a>
                </div>

                <div className="hero-tier" data-reveal style={{ "--d": "260ms" }}>
                  <figure className="hero-mini">
                    <img
                      src="/assets/product-bilancio-v2.png"
                      alt="Riepilogo di calorie e macronutrienti nell’assistente Giada"
                      loading="lazy"
                    />
                    <figcaption>
                      <strong>Giada è già in campagna</strong>
                      <span>Utenti paganti su Telegram. 6 video prodotti, 3 creator pagate.</span>
                    </figcaption>
                  </figure>

                  <a className="hero-seal" href="#candidatura" aria-label={CTA_LABEL}>
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
                          €80 A VIDEO SELEZIONATO · €80 A VIDEO SELEZIONATO ·
                        </textPath>
                      </text>
                    </svg>
                    <span className="hero-seal-core" aria-hidden="true">
                      <ArrowUpRight size={19} strokeWidth={2.2} />
                    </span>
                  </a>
                </div>
              </div>

              {/* Annotazione con linea guida: risponde nella hero alla prima obiezione
                  di un creator, cioè l'attrezzatura. Reference: scheda "17 reference
                  visuali per layout, UI e contenuti social" della libreria. */}
              <figure className="hero-visual" data-reveal style={{ "--d": "240ms" }}>
                <div className="hero-shot">
                  <img
                    src="/assets/giada-creator-hero.png"
                    alt="Una creator registra un video per Giada nella cucina di casa"
                    width="1536"
                    height="1024"
                    fetchPriority="high"
                  />
                  <span className="hero-pin" aria-hidden="true" />
                </div>
                <figcaption>Girato col telefono. Nessun set, nessuna troupe.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="pact" aria-label="Condizioni del programma">
          <div className="container">
            <dl className="pact-grid" data-reveal>
              {pactTerms.map(([label, value, note]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>
                    <span className="pact-value">{value}</span>
                    <span className="pact-note">{note}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section fit" id="chi-cerchiamo" aria-labelledby="fit-title">
          <div className="container">
            <div className="section-head" data-reveal>
              <p className="eyebrow">CHI CERCHIAMO</p>
              <h2 id="fit-title">
                Puoi essere all’inizio.
                <br />
                Devi essere serio.
              </h2>
              <p className="lede">
                Un’idea tua, naturalezza, brief rispettati. L’esperienza aiuta, non decide.
              </p>
            </div>
            <div className="fit-matrix" role="list" data-reveal style={{ "--d": "80ms" }}>
              <div className="fit-head" aria-hidden="true">
                <span>SEI IN LINEA SE</span>
                <span>NON BASTA</span>
              </div>
              {fitPairs.map(([positive, negative]) => (
                <div className="fit-row" role="listitem" key={positive}>
                  <p>
                    <Check aria-hidden="true" size={17} strokeWidth={2.4} />
                    {positive}
                  </p>
                  <p>{negative}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section trial" id="prova" aria-labelledby="trial-title">
          <div className="container trial-grid">
            <div className="trial-copy" data-reveal>
              <h2 id="trial-title">
                Prima la usi.
                <br />
                Poi la racconti.
              </h2>
              <p className="lede">Sette giorni per capire cosa vale la pena raccontare.</p>
              <ul className="trial-days">
                <li>
                  <b>GIORNI 1-3</b>
                  Usala davvero, come la useresti se nessuno te lo avesse chiesto.
                </li>
                <li>
                  <b>GIORNI 4-7</b>
                  Trova l’angolo: il momento che meriterebbe di aprire un video.
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
        </section>

        <section className="section profiles" id="profili" aria-labelledby="profiles-title">
          <div className="container">
            <div className="section-head" data-reveal>
              <p className="eyebrow">TRE MODI DI ESSERE GIUSTI</p>
              <h2 id="profiles-title">Non cerchiamo una faccia sola.</h2>
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
                    className={active ? "profile-tab is-active" : "profile-tab"}
                    onClick={() => setActiveMode(mode.id)}
                  >
                    <small>{mode.number}</small>
                    <strong>{mode.label}</strong>
                  </button>
                );
              })}
            </div>
            <article
              className="profile-panel"
              id="profile-panel"
              role="tabpanel"
              aria-labelledby={`profile-${selectedMode.id}`}
              data-reveal
              style={{ "--d": "140ms" }}
            >
              <div>
                <span className="profile-index">{selectedMode.number} / 03</span>
                <h3>{selectedMode.title}</h3>
              </div>
              <div>
                <p>{selectedMode.copy}</p>
                <ul className="tag-row">
                  {selectedMode.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section className="section process" id="come-funziona" aria-labelledby="process-title">
          <div className="container">
            <div className="section-head" data-reveal>
              <h2 id="process-title">Il tuo impegno cresce insieme al nostro.</h2>
              <p className="lede">Quattro passaggi. Nessuno di corsa.</p>
            </div>
            <ol className="process-list" data-reveal style={{ "--d": "80ms" }}>
              {processSteps.map(([number, title, copy]) => (
                <li className="process-row" key={number}>
                  <span className="process-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section apply" id="candidatura" aria-labelledby="apply-title">
          <div className="container apply-grid">
            <div className="apply-copy" data-reveal>
              <p className="eyebrow">PRIMO PASSO</p>
              <h2 id="apply-title">
                Prova Giada.
                <br />
                Poi proponi.
              </h2>
              <p className="lede">Lascia i contatti. Accesso e brief entro 48 ore.</p>
            </div>
            <div className="form-card" data-reveal style={{ "--d": "100ms" }}>
              {submitted ? (
                <div className="form-success" role="status" aria-live="polite">
                  <div className="form-success-mark">
                    <Check aria-hidden="true" size={26} strokeWidth={2.4} />
                  </div>
                  <h3>Ottimo inizio.</h3>
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
                  <p className="form-note">Due minuti. Nessun video. Risposta in 48 ore.</p>
                  <p className="form-demo">Anteprima: il form non invia ancora dati.</p>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="section faq" id="faq" aria-labelledby="faq-title">
          <div className="container faq-grid">
            <div data-reveal>
              <h2 id="faq-title">
                Domande chiare.
                <br />
                Risposte brevi.
              </h2>
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

        <section className="closing" aria-label="Candidatura finale">
          <div className="container closing-inner">
            <div data-reveal>
              <h2>Hai già un’idea?</h2>
              <p>Prima prova Giada. Poi proponila.</p>
            </div>
            <div data-reveal style={{ "--d": "100ms" }}>
              <CtaButton href="#candidatura" variant="paper">
                {CTA_LABEL}
              </CtaButton>
            </div>
          </div>
        </section>

        <footer>
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
        <span>€80 a video selezionato</span>
        <a className="button button--primary button--sm" href="#candidatura">
          <span>{CTA_LABEL}</span>
        </a>
      </div>
    </>
  );
}
