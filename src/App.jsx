import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronDown } from "lucide-react";

// TODO prima del traffico: sostituire con l'informativa dedicata ai lead creator.
// Oggi punta all'informativa Vivarium S.r.l. pubblicata per Giada.
const PRIVACY_URL = "https://giada.care/privacy";

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

const heroTerms = [
  ["COMPENSO", "€80", "a video selezionato"],
  ["CONSEGNI", "1 video + 3 hook", "stessa scena, tre aperture"],
  ["UTILIZZO", "Paid e organico", "senza scadenza"],
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
  ["01", "Provi Giada", "Sette giorni gratis. Nessun contenuto richiesto.", "Nessun impegno"],
  ["02", "Ricevi il brief", "Obiettivi, riferimenti e limiti già scritti.", "Solo esplorazione"],
  ["03", "Proponi l’idea", "Hook, sviluppo, perché funziona. Non un video.", "Un’idea, non un girato"],
  ["04", "Produciamo", "Contratto, tre hook, compenso alla consegna.", "Collaborazione vera"],
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

function Eyebrow({ children, light = false }) {
  return <p className={light ? "eyebrow eyebrow--light" : "eyebrow"}>{children}</p>;
}

function CtaButton({ href, children, variant = "primary", full = false }) {
  const classes = ["button", `button--${variant}`, full ? "button--full" : ""].filter(Boolean);
  return (
    <a className={classes.join(" ")} href={href}>
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
    <main>
      <section className="hero" id="top" ref={heroRef}>
        <div className="container">
          <div className="hero-frame">
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
                <span>CANDIDATI</span>
              </a>
            </header>

            <div className="hero-lead hero-cell">
              <Eyebrow>GIADA × VIVARIUM</Eyebrow>
              <h1 className="hero-title">
                {angle.lead}
                <em>{angle.accent}</em>
              </h1>
              <div className="hero-actions">
                <CtaButton href="#candidatura">RICEVI ACCESSO E BRIEF</CtaButton>
                <a className="text-link" href="#come-funziona">
                  Come funziona
                  <ChevronDown aria-hidden="true" size={15} strokeWidth={2} />
                </a>
              </div>
            </div>

            <figure className="hero-visual">
              <img
                src="/assets/giada-creator-hero.png"
                alt="Una creator registra un video per Giada nella cucina di casa"
                width="1536"
                height="1024"
              />
              <a className="hero-round-link" href="#chi-cerchiamo" aria-label="Vai a chi cerchiamo">
                <ArrowUpRight aria-hidden="true" size={20} strokeWidth={2} />
              </a>
              <figcaption>FORMATO · Reel o TikTok, 45–60 secondi</figcaption>
            </figure>

            <div className="hero-proof hero-cell">
              <Eyebrow>LE PROVE</Eyebrow>
              <p className="hero-proof-claim">Non è un progetto. È un prodotto che gira.</p>
              <p className="hero-proof-copy">
                Attiva su Telegram con utenti paganti. Campagne pubblicitarie ogni giorno.
              </p>
              <dl className="hero-stats">
                <div>
                  <dt>6</dt>
                  <dd>video già prodotti</dd>
                </div>
                <div>
                  <dt>3</dt>
                  <dd>creator già pagate</dd>
                </div>
              </dl>
            </div>

            <div className="hero-sub hero-cell">
              <p>
                Giada è un assistente di nutrizione su Telegram. Provala 7 giorni e proponici
                un’idea per un video.
              </p>
              <ul className="hero-assurances">
                <li>
                  <Check aria-hidden="true" size={14} strokeWidth={2.4} /> 7 giorni gratis
                </li>
                <li>
                  <Check aria-hidden="true" size={14} strokeWidth={2.4} /> Nessun video prima del
                  contratto
                </li>
              </ul>
            </div>

            <dl className="hero-terms hero-cell" aria-label="Condizioni del programma">
              {heroTerms.map(([label, value, note]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>
                    <strong>{value}</strong>
                    <span>{note}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section fit" id="chi-cerchiamo" aria-labelledby="fit-title">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>CHI CERCHIAMO</Eyebrow>
              <h2 id="fit-title">
                Puoi essere all’inizio.
                <br />
                Devi essere serio.
              </h2>
            </div>
            <p>
              Un’idea tua, naturalezza, brief rispettati. L’esperienza aiuta, non decide.
            </p>
          </div>
          <div className="fit-matrix" role="list">
            <div className="fit-matrix-head" aria-hidden="true">
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
          <div className="trial-copy">
            <Eyebrow>PRIMA LA USI, POI LA RACCONTI</Eyebrow>
            <h2 id="trial-title">
              Prova Giada.
              <br />
              Poi trova il tuo angolo.
            </h2>
            <p>Sette giorni per capire cosa vale la pena raccontare.</p>
            <a className="inline-cta" href="#profili">
              Scegli il profilo che ti somiglia
              <ArrowRight aria-hidden="true" size={16} strokeWidth={2} />
            </a>
          </div>
          <div className="trial-stage" aria-label="Anteprima dell’esperienza Giada">
            <div className="stage-note stage-note--top">
              <span>GIORNI 1–3</span>
              <strong>Usala davvero</strong>
            </div>
            <div className="stage-screen stage-screen--summary">
              <img
                src="/assets/product-bilancio-v2.png"
                alt="Riepilogo di calorie e macronutrienti in Giada"
              />
            </div>
            <div className="stage-screen stage-screen--log">
              <img src="/assets/product-food-log-v3.jpg" alt="Food log di Giada con i pasti della giornata" />
            </div>
            <div className="stage-note stage-note--bottom">
              <span>GIORNI 4–7</span>
              <strong>Trova l’angolo</strong>
            </div>
            <div className="stage-question">
              <span>OSSERVA</span>
              <p>Quale momento aprirebbe il tuo video?</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section profiles" id="profili" data-theme="dark" aria-labelledby="profiles-title">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow light>TRE MODI DI ESSERE GIUSTI</Eyebrow>
              <h2 id="profiles-title">Non cerchiamo una faccia sola.</h2>
            </div>
            <p>Scegli il profilo che ti somiglia.</p>
          </div>
          <div className="profiles-tabs" role="tablist" aria-label="Profili creator">
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
          >
            <div>
              <span className="profile-panel-index">{selectedMode.number} / 03</span>
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
          <div className="section-head">
            <div>
              <Eyebrow>COME FUNZIONA</Eyebrow>
              <h2 id="process-title">Il tuo impegno cresce insieme al nostro.</h2>
            </div>
            <p>Quattro passaggi. Nessuno di corsa.</p>
          </div>
          <ol className="process-list">
            {processSteps.map(([number, title, copy, commitment]) => (
              <li className="process-row" key={number}>
                <span className="process-number">{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <small>{commitment}</small>
              </li>
            ))}
          </ol>
          <p className="process-note">
            <Check aria-hidden="true" size={16} strokeWidth={2.4} />
            Nessun video prima del contratto.
          </p>
        </div>
      </section>

      <section className="section apply" id="candidatura" data-theme="dark" aria-labelledby="apply-title">
        <div className="container apply-grid">
          <div className="apply-copy">
            <Eyebrow light>PRIMO PASSO</Eyebrow>
            <h2 id="apply-title">
              Prova Giada.
              <br />
              Poi proponi.
            </h2>
            <p>Lascia i contatti. Accesso e brief entro 48 ore.</p>
          </div>
          <div className="form-card">
            {submitted ? (
              <div className="form-success" role="status" aria-live="polite">
                <div className="form-success-mark">
                  <Check aria-hidden="true" size={26} strokeWidth={2.4} />
                </div>
                <h3>Ottimo inizio.</h3>
                <p>Anteprima: nessun dato è stato inviato.</p>
                <button className="button button--ghost" type="button" onClick={() => setSubmitted(false)}>
                  <span>RIVEDI IL FORM</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate={false}>
                <div className="field-grid">
                  <label>
                    <span>Nome</span>
                    <input name="name" placeholder="Come ti chiami?" autoComplete="name" required />
                  </label>
                  <label>
                    <span>Email</span>
                    <input name="email" type="email" placeholder="nome@email.it" autoComplete="email" required />
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
                  <input name="profile" placeholder="@iltuonome" autoCapitalize="none" autoCorrect="off" required />
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
                  <span>RICEVI ACCESSO E BRIEF</span>
                  <ArrowRight aria-hidden="true" size={17} strokeWidth={2} />
                </button>
                <p className="form-note">2 minuti · Nessun video · Risposta in 48 ore</p>
                <p className="form-demo">Anteprima: il form non invia ancora dati.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="section faq" id="faq" aria-labelledby="faq-title">
        <div className="container faq-grid">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 id="faq-title">
              Domande chiare.
              <br />
              Risposte brevi.
            </h2>
          </div>
          <div className="faq-list">
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
                  <div className="faq-answer" id={answerId} hidden={!active}>
                    <p>{item.answer}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="closing" aria-label="Candidatura finale">
        <div className="container closing-inner">
          <div>
            <h2>Hai già un’idea?</h2>
            <p>Prima prova Giada. Poi proponila.</p>
          </div>
          <CtaButton href="#candidatura" variant="dark">
            RICEVI ACCESSO E BRIEF
          </CtaButton>
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

      <div className={showStickyCta ? "sticky-cta is-visible" : "sticky-cta"}>
        <span>€80 a video · 3 hook · 7 giorni gratis</span>
        <a className="button button--primary button--sm" href="#candidatura">
          <span>CANDIDATI</span>
        </a>
      </div>
    </main>
  );
}
