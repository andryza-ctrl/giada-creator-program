import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleCheck,
  Clapperboard,
  FileText,
  HeartHandshake,
  Lightbulb,
  MessageCircle,
  Play,
  Send,
  Sparkles,
  Target,
  Video,
  WalletCards,
  Zap,
} from "lucide-react";

const creatorModes = [
  {
    id: "rassicurante",
    number: "01",
    label: "La voce rassicurante",
    title: "Sai rendere semplice ciò che sembra complicato.",
    copy: "Parli con calma, trasmetti fiducia e fai sentire le persone comprese. La camera non è un palco: è una conversazione.",
    tags: ["Talking head", "Spiegazioni chiare", "Tono credibile"],
    icon: MessageCircle,
  },
  {
    id: "vita-reale",
    number: "02",
    label: "La vita vera",
    title: "Trasformi un momento quotidiano in una storia.",
    copy: "Cucina, spesa, pausa pranzo, palestra: trovi il dettaglio umano e lo racconti senza sembrare dentro una pubblicità.",
    tags: ["Storytelling", "Scene quotidiane", "Naturalezza"],
    icon: HeartHandshake,
  },
  {
    id: "performance",
    number: "03",
    label: "L’istinto performance",
    title: "Pensi già in hook, ritmo e attenzione.",
    copy: "Hai occhio per i primi tre secondi, sai seguire un brief e ti piace capire perché un contenuto funziona davvero.",
    tags: ["UGC adv", "Hook forti", "Test creativi"],
    icon: Zap,
  },
];

const faqs = [
  {
    question: "Devo avere molti follower?",
    answer:
      "No. In questa fase contano soprattutto naturalezza, idee e affidabilità. Anche un profilo piccolo può essere molto interessante se sa comunicare bene.",
  },
  {
    question: "Come funziona il compenso?",
    answer:
      "Il copy economico è ancora provvisorio. L’ipotesi iniziale è un compenso chiaro per ogni video commissionato, con perimetro e utilizzo definiti prima della produzione.",
  },
  {
    question: "Devo pubblicare il video sul mio profilo?",
    answer:
      "Non necessariamente. Alcuni contenuti possono essere prodotti per i canali organici e advertising di Giada; eventuali collaborazioni sul profilo del creator vengono concordate a parte.",
  },
  {
    question: "Cosa succede dopo la prova di 7 giorni?",
    answer:
      "Se Giada ti interessa e hai un’idea forte, invii la proposta finale. Vivarium la valuta e, se c’è allineamento, si passa a contratto, brief esecutivo e produzione.",
  },
];

function ArrowLink({ children, href, secondary = false }) {
  return (
    <a className={secondary ? "button button--secondary" : "button button--primary"} href={href}>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={18} strokeWidth={2.2} />
    </a>
  );
}

export function App() {
  const [activeMode, setActiveMode] = useState(creatorModes[0].id);
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const selectedMode = creatorModes.find((mode) => mode.id === activeMode) ?? creatorModes[0];
  const SelectedIcon = selectedMode.icon;

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <header className="site-header" aria-label="Navigazione principale">
        <nav className="nav-shell">
          <a className="brand" href="#top" aria-label="Giada Creator Program">
            GIADA
            <span>CREATOR PROGRAM</span>
          </a>
          <div className="nav-links" aria-label="Sezioni pagina">
            <a href="#opportunita">Opportunità</a>
            <a href="#come-funziona">Come funziona</a>
            <a href="#faq">FAQ</a>
          </div>
          <a className="nav-cta" href="#candidatura">
            CANDIDATI
            <Send aria-hidden="true" size={15} />
          </a>
        </nav>
      </header>

      <section className="hero" id="top" data-theme="dark">
        <div className="hero-grid container">
          <div className="hero-copy">
            <div className="eyebrow hero-enter hero-enter--1">
              <Sparkles aria-hidden="true" size={15} />
              GIADA × CREATOR PROGRAM
            </div>
            <h1 className="hero-enter hero-enter--2">
              Non cerchiamo grandi numeri.
              <span>Cerchiamo buone idee.</span>
            </h1>
            <p className="hero-lead hero-enter hero-enter--3">
              Prova Giada, immagina un contenuto che possa farla conoscere e candidati per produrlo con Vivarium.
            </p>
            <div className="hero-actions hero-enter hero-enter--4">
              <ArrowLink href="#candidatura">INIZIA LA PROVA CREATOR</ArrowLink>
              <a className="text-link" href="#come-funziona">
                <Play aria-hidden="true" size={16} fill="currentColor" />
                Guarda come funziona
              </a>
            </div>
            <div className="hero-meta hero-enter hero-enter--5" aria-label="Informazioni chiave">
              <span><Check aria-hidden="true" size={15} /> 7 giorni per conoscere Giada</span>
              <span><Check aria-hidden="true" size={15} /> Creator emergenti benvenuti</span>
            </div>
          </div>

          <div className="hero-visual hero-enter hero-enter--3">
            <div className="hero-image-frame">
              <img
                src="/assets/giada-creator-hero.png"
                alt="Una creator registra un video naturale per Giada nella cucina di casa"
                width="1536"
                height="1024"
              />
              <div className="image-shade" />
              <div className="video-pill">
                <span className="record-dot" aria-hidden="true" />
                REC · IDEA IN PROVA
              </div>
              <div className="floating-card floating-card--brief">
                <div className="floating-icon"><FileText aria-hidden="true" size={18} /></div>
                <div><strong>Brief ricevuto</strong><span>Spazio alla tua idea</span></div>
              </div>
              <div className="floating-card floating-card--selected">
                <div className="floating-icon floating-icon--teal"><CircleCheck aria-hidden="true" size={18} /></div>
                <div><strong>Contenuto selezionato</strong><span>Da proposta a collaborazione</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-proof container" aria-label="Vantaggi del programma">
          <div><strong>€50</strong><span>ipotesi per video commissionato</span></div>
          <div><strong>3–5</strong><span>video al mese, se c’è continuità</span></div>
          <div><strong>Paid + organic</strong><span>contenuti pensati per viaggiare</span></div>
        </div>
      </section>

      <section className="statement section" id="opportunita">
        <div className="container statement-grid">
          <div>
            <p className="section-kicker">IL TALENTO PRIMA DEI FOLLOWER</p>
            <h2>Puoi essere all’inizio.<br />Non devi sembrare improvvisato.</h2>
          </div>
          <div className="statement-copy">
            <p>Cerchiamo persone curiose, naturali davanti alla camera e abbastanza precise da trasformare un brief in qualcosa di proprio.</p>
            <p>L’esperienza aiuta. La sensibilità creativa, l’affidabilità e la voglia di mettersi in gioco contano di più.</p>
          </div>
        </div>
      </section>

      <section className="benefits section section--compact" aria-labelledby="benefits-title">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">UN’OPPORTUNITÀ CONCRETA</p>
            <h2 id="benefits-title">Il tuo contenuto non resta fermo sul tuo profilo.</h2>
            <p>Giada mette insieme distribuzione, sperimentazione e possibilità di continuità.</p>
          </div>
          <div className="benefit-grid">
            <article className="benefit-card benefit-card--featured">
              <div className="card-icon"><Target aria-hidden="true" /></div>
              <span className="card-index">01</span>
              <h3>Le tue idee possono viaggiare molto più lontano.</h3>
              <p>I contenuti selezionati possono entrare nelle campagne organiche e paid di Giada.</p>
              <div className="reach-visual" aria-label="Esempio di distribuzione del contenuto">
                <div className="reach-row"><span>Organico</span><i style={{ "--reach": "62%" }} /></div>
                <div className="reach-row"><span>Advertising</span><i style={{ "--reach": "92%" }} /></div>
              </div>
            </article>
            <article className="benefit-card">
              <div className="card-icon"><WalletCards aria-hidden="true" /></div>
              <span className="card-index">02</span>
              <h3>Sai prima per cosa vieni pagato.</h3>
              <p>Compenso, formato, revisioni e utilizzo vengono chiariti prima di iniziare.</p>
            </article>
            <article className="benefit-card">
              <div className="card-icon"><Clapperboard aria-hidden="true" /></div>
              <span className="card-index">03</span>
              <h3>Una buona prova può diventare continuità.</h3>
              <p>I creator più allineati possono produrre più contenuti ogni mese insieme a Vivarium.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="creator-fit section" aria-labelledby="fit-title">
        <div className="container">
          <div className="section-heading section-heading--light">
            <p className="section-kicker">TRE MODI DI ESSERE GIUSTI</p>
            <h2 id="fit-title">Non cerchiamo una faccia sola.</h2>
            <p>Cerchiamo personalità diverse, unite dalla capacità di creare fiducia e attenzione.</p>
          </div>
          <div className="fit-layout">
            <div className="fit-tabs" role="tablist" aria-label="Profili creator">
              {creatorModes.map((mode) => {
                const Icon = mode.icon;
                const active = mode.id === activeMode;
                return (
                  <button
                    key={mode.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    aria-controls="creator-mode-panel"
                    className={active ? "fit-tab is-active" : "fit-tab"}
                    onClick={() => setActiveMode(mode.id)}
                  >
                    <span className="fit-tab-icon"><Icon aria-hidden="true" size={19} /></span>
                    <span><small>{mode.number}</small>{mode.label}</span>
                    <ArrowRight aria-hidden="true" size={18} />
                  </button>
                );
              })}
            </div>
            <article className="fit-panel" id="creator-mode-panel" role="tabpanel">
              <div className="fit-panel-icon"><SelectedIcon aria-hidden="true" size={28} /></div>
              <p className="fit-panel-label">{selectedMode.label}</p>
              <h3>{selectedMode.title}</h3>
              <p>{selectedMode.copy}</p>
              <div className="tag-row">
                {selectedMode.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="process section" id="come-funziona" aria-labelledby="process-title">
        <div className="container">
          <div className="section-heading section-heading--center">
            <p className="section-kicker">COME FUNZIONA</p>
            <h2 id="process-title">Prima conosci Giada.<br />Poi ci fai vedere la tua idea.</h2>
            <p>Niente provini complessi e niente video completo prima di sapere se c’è allineamento.</p>
          </div>
          <div className="process-grid">
            {[
              ["01", "Prova Giada", "La usi gratuitamente per 7 giorni e capisci davvero come parla, ragiona e aiuta.", MessageCircle],
              ["02", "Ricevi il brief", "Ti mandiamo obiettivi, linee guida, territori creativi e limiti da rispettare.", FileText],
              ["03", "Proponi l’idea", "Ci racconti hook, sviluppo e perché il contenuto potrebbe funzionare.", Lightbulb],
              ["04", "Produciamo insieme", "Se la proposta è selezionata: contratto, script finale, produzione e compenso.", Video],
            ].map(([number, title, copy, Icon]) => (
              <article className="process-card" key={number}>
                <div className="process-top"><span>{number}</span><Icon aria-hidden="true" size={22} /></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="standards section" aria-labelledby="standards-title">
        <div className="container standards-grid">
          <div className="standards-copy">
            <p className="section-kicker">APERTO, NON CASUALE</p>
            <h2 id="standards-title">Non serve essere famosi. Serve prenderla sul serio.</h2>
            <p>La selezione è accessibile, ma il lavoro resta professionale. Vogliamo proteggere il tempo del creator e quello del team.</p>
            <ArrowLink href="#candidatura" secondary>VEDI SE SEI IN LINEA</ArrowLink>
          </div>
          <div className="standards-card">
            <p className="standards-label">PER CANDIDARTI TI CHIEDIAMO</p>
            {[
              "Un profilo pubblico con almeno qualche contenuto originale",
              "Naturalezza davanti alla camera e audio comprensibile",
              "Disponibilità a seguire brief, scadenze e una revisione",
              "Un’idea motivata, non soltanto la richiesta di collaborare",
            ].map((item) => (
              <div className="standard-row" key={item}>
                <span><Check aria-hidden="true" size={16} /></span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="application section" id="candidatura" aria-labelledby="application-title">
        <div className="container application-grid">
          <div className="application-copy">
            <div className="eyebrow eyebrow--dark"><Sparkles aria-hidden="true" size={15} /> PRIMO PASSO</div>
            <h2 id="application-title">Prova Giada.<br />Poi sorprendici.</h2>
            <p>Lascia i tuoi riferimenti per ricevere l’accesso creator e il brief introduttivo. Il copy e il flusso finale verranno revisionati prima del lancio.</p>
            <div className="application-note">
              <strong>Nessun video completo adesso.</strong>
              <span>Prima ci basta capire come pensi e che direzione prenderesti.</span>
            </div>
          </div>
          <div className="form-card">
            {submitted ? (
              <div className="success-state" role="status" aria-live="polite">
                <div className="success-icon"><CircleCheck aria-hidden="true" size={32} /></div>
                <p className="section-kicker">CANDIDATURA SIMULATA</p>
                <h3>Ottimo inizio.</h3>
                <p>Questa demo non ha inviato dati. Nella versione finale, da qui partiranno accesso a Giada e brief creator.</p>
                <button className="button button--primary" type="button" onClick={() => setSubmitted(false)}>
                  <span>RIVEDI IL FORM</span><ArrowRight aria-hidden="true" size={18} />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-heading">
                  <div><span>DEMO</span><h3>Inizia la prova creator</h3></div>
                  <p>Nessun dato viene inviato.</p>
                </div>
                <div className="field-grid">
                  <label><span>Nome</span><input name="name" placeholder="Come ti chiami?" required /></label>
                  <label><span>Email</span><input name="email" type="email" placeholder="nome@email.it" required /></label>
                </div>
                <label>
                  <span>Canale principale</span>
                  <select name="channel" defaultValue="" required>
                    <option value="" disabled>Seleziona il canale</option>
                    <option>Instagram</option><option>TikTok</option><option>Entrambi</option><option>Sto iniziando ora</option>
                  </select>
                </label>
                <label><span>Link al tuo profilo o portfolio</span><input name="profile" type="url" placeholder="https://" required /></label>
                <label className="consent-row">
                  <input type="checkbox" required />
                  <span>Confermo di aver compiuto 18 anni e di voler conoscere il Creator Program.</span>
                </label>
                <button className="button button--primary button--full" type="submit">
                  <span>RICEVI ACCESSO E BRIEF</span><ArrowRight aria-hidden="true" size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="faq section" id="faq" aria-labelledby="faq-title">
        <div className="container faq-grid">
          <div><p className="section-kicker">FAQ</p><h2 id="faq-title">Domande sensate,<br />risposte chiare.</h2></div>
          <div className="faq-list">
            {faqs.map((item, index) => {
              const active = openFaq === index;
              return (
                <article className={active ? "faq-item is-open" : "faq-item"} key={item.question}>
                  <button type="button" aria-expanded={active} onClick={() => setOpenFaq(active ? -1 : index)}>
                    <span>{item.question}</span><ChevronDown aria-hidden="true" size={20} />
                  </button>
                  <div className="faq-answer" aria-hidden={!active}><div><p>{item.answer}</p></div></div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-grid">
          <div className="footer-brand"><strong>GIADA</strong><span>by Vivarium</span></div>
          <p>Creator Program · Concept UI/UX · Copy provvisorio</p>
          <a href="#top">Torna su <ArrowRight aria-hidden="true" size={15} /></a>
        </div>
      </footer>
    </main>
  );
}
