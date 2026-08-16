import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleCheck,
  CircleMinus,
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
    mini: "Fiducia, senza effetto wow.",
    title: "Rendi semplice ciò che sembra difficile.",
    copy: "Parli con calma. La camera diventa una conversazione, non un palco.",
    signal: "Sembra il consiglio di un’amica competente.",
    tags: ["Talking head", "Spiegazioni chiare", "Tono credibile"],
    icon: MessageCircle,
  },
  {
    id: "vita-reale",
    number: "02",
    label: "La vita vera",
    mini: "Una scena quotidiana diventa storia.",
    title: "Trasformi la quotidianità in una storia.",
    copy: "Trovi il dettaglio umano e lo racconti senza sembrare una pubblicità.",
    signal: "Giada entra nella scena senza interromperla.",
    tags: ["Storytelling", "Scene quotidiane", "Naturalezza"],
    icon: HeartHandshake,
  },
  {
    id: "performance",
    number: "03",
    label: "L’istinto performance",
    mini: "Hook, ritmo e attenzione.",
    title: "Pensi ai primi tre secondi e a cosa trattiene l’attenzione.",
    copy: "Sai aprire forte, seguire un brief e capire cosa funziona.",
    signal: "È nativa per Reel e TikTok, ma resta credibile.",
    tags: ["UGC adv", "Hook forti", "Test creativi"],
    icon: Zap,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Prova Giada",
    copy: "Usala gratis per 7 giorni e capisci come aiuta.",
    commitment: "Nessun contenuto",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Ricevi il brief",
    copy: "Obiettivi, riferimenti e limiti sono già chiari.",
    commitment: "Solo esplorazione",
    icon: FileText,
  },
  {
    number: "03",
    title: "Proponi l’idea",
    copy: "Spieghi hook, sviluppo e perché può funzionare.",
    commitment: "Idea, non video",
    icon: Lightbulb,
  },
  {
    number: "04",
    title: "Produciamo insieme",
    copy: "Se c’è fit: contratto, script, produzione e compenso.",
    commitment: "Collaborazione reale",
    icon: Video,
  },
];

const positiveStandards = [
  "Mostri contenuti originali",
  "Sei naturale e curi l’audio",
  "Segui brief, tempi e revisioni",
  "Porti un’idea, non solo una richiesta",
];

const negativeStandards = [
  "Follower senza una voce propria",
  "Un video riciclato per altri brand",
  "Cercare solo un guadagno facile",
  "Ignorare diritti e indicazioni",
];

const journeyStages = [
  ["01", "Scopri", "#opportunita"],
  ["02", "Prova", "#prova"],
  ["03", "Scegli", "#profili"],
  ["04", "Proponi", "#come-funziona"],
  ["05", "Inizia", "#candidatura"],
];

const faqs = [
  {
    question: "Devo avere molti follower?",
    answer:
      "No. Contano naturalezza, idee e affidabilità. Anche un profilo piccolo può funzionare.",
  },
  {
    question: "Come funziona il compenso?",
    answer:
      "Compenso, utilizzo e revisioni vengono definiti prima di produrre.",
  },
  {
    question: "Devo pubblicare il video sul mio profilo?",
    answer:
      "Non sempre. Canali, advertising e pubblicazione sul tuo profilo si concordano prima.",
  },
  {
    question: "Cosa succede dopo la prova di 7 giorni?",
    answer:
      "Invii l’idea. Se c’è fit, passiamo a contratto, brief finale e produzione.",
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

function SectionLabel({ number, children, light = false }) {
  return (
    <div className={light ? "section-label section-label--light" : "section-label"}>
      <span>{number}</span>
      <p>{children}</p>
    </div>
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
            <a href="#profili">Profili</a>
            <a href="#come-funziona">Percorso</a>
          </div>
          <a className="nav-cta" href="#candidatura">
            <span>CANDIDATI</span>
            <Send aria-hidden="true" size={15} />
          </a>
        </nav>
      </header>

      <section className="hero" id="top" data-theme="dark">
        <div className="container hero-editorial">
          <div className="hero-overline hero-enter hero-enter--1">
            <SectionLabel number="01" light>OPPORTUNITÀ CREATOR</SectionLabel>
            <div className="eyebrow"><Sparkles aria-hidden="true" size={15} /> GIADA × VIVARIUM</div>
          </div>
          <h1 className="hero-title hero-enter hero-enter--2">
            Porta una buona idea.
            <span>Giada la porta lontano.</span>
          </h1>
          <div className="hero-composition hero-enter hero-enter--3">
            <div className="hero-offer">
              <span className="hero-offer-kicker">SEI CREATOR?</span>
              <h2>Non servono grandi numeri. Serve una buona idea.</h2>
              <p>Prova Giada per 7 giorni. Se nasce un’idea, proponila prima di produrre.</p>
              <div className="hero-actions">
                <ArrowLink href="#candidatura">INIZIA LA PROVA</ArrowLink>
                <a className="text-link" href="#come-funziona"><Play aria-hidden="true" size={16} fill="currentColor" />Guarda il percorso</a>
              </div>
              <div className="hero-meta" aria-label="Informazioni chiave">
                <span><Check aria-hidden="true" size={15} /> 7 giorni gratuiti</span>
                <span><Check aria-hidden="true" size={15} /> Nessun video iniziale</span>
              </div>
            </div>
            <figure className="hero-image-frame">
              <img src="/assets/giada-creator-hero.png" alt="Una creator registra un video naturale per Giada nella cucina di casa" width="1536" height="1024" />
              <div className="image-shade" />
              <div className="video-pill"><span className="record-dot" aria-hidden="true" /> REC · IDEA IN PROVA</div>
              <figcaption className="hero-caption"><span>FORMATO POSSIBILE</span><strong>Una storia vera,<br />raccontata bene.</strong></figcaption>
            </figure>
            <aside className="hero-terms" aria-label="Condizioni principali del programma">
              <div className="hero-trust"><span>IL PUNTO</span><strong>Il talento viene prima dei follower.</strong><p>Contano idea, voce e metodo.</p></div>
              <div className="term-list">
                <div><small>COMPENSO</small><strong>Fino a €50</strong><span>per video</span></div>
                <div><small>CONTINUITÀ</small><strong>3–5</strong><span>video al mese</span></div>
                <div><small>DISTRIBUZIONE</small><strong>Paid + organic</strong><span>se il contenuto è selezionato</span></div>
              </div>
              <a className="hero-round-link" href="#opportunita" aria-label="Scopri l’opportunità"><ArrowRight aria-hidden="true" size={22} /></a>
            </aside>
          </div>
        </div>
      </section>

      <section className="journey-strip" aria-label="Percorso creator">
        <div className="container journey-inner">
          <div className="journey-heading"><small>IL PERCORSO</small><strong>Dall’idea al video</strong></div>
          <nav className="journey-track" aria-label="Fasi del Creator Program">
            {journeyStages.map(([number, label, href]) => <a href={href} key={number}><small>{number}</small><strong>{label}</strong></a>)}
          </nav>
        </div>
      </section>

      <section className="statement section" id="opportunita">
        <div className="container">
          <SectionLabel number="02">IL TALENTO PRIMA DEI FOLLOWER</SectionLabel>
          <div className="statement-grid">
            <h2>Puoi essere all’inizio.<br />Ma devi prenderla sul serio.</h2>
            <div className="statement-copy"><p>Cerchiamo naturalezza, idee e affidabilità. L’esperienza aiuta, ma non decide.</p></div>
          </div>
          <div className="criteria-rail" aria-label="Criteri principali di selezione">
            <div className="criterion criterion--number"><small>FOLLOWER</small><strong>&lt;10K</strong><p>Ammessi.</p></div>
            <div className="criterion"><small>VOCE</small><strong>Personale</strong><p>Riconoscibile.</p></div>
            <div className="criterion"><small>METODO</small><strong>Affidabile</strong><p>Brief e tempi rispettati.</p></div>
            <div className="criterion"><small>IDEA</small><strong>Motivata</strong><p>Non solo una richiesta.</p></div>
          </div>
        </div>
      </section>

      <section className="product-lab section" id="prova" aria-labelledby="lab-title">
        <div className="container product-lab-grid">
          <div className="product-lab-copy">
            <SectionLabel number="03">PRIMA LA VIVI, POI LA RACCONTI</SectionLabel>
            <h2 id="lab-title">Prova Giada.<br />Poi trova il tuo angolo.</h2>
            <p>Sette giorni servono a capire cosa vale la pena raccontare.</p>
            <div className="lab-checks"><span><Check aria-hidden="true" size={16} /> Usala davvero</span><span><Check aria-hidden="true" size={16} /> Nota cosa funziona</span><span><Check aria-hidden="true" size={16} /> Arriva con un’idea</span></div>
            <a className="inline-cta" href="#profili">Scegli il tuo stile <ArrowRight aria-hidden="true" size={17} /></a>
          </div>
          <div className="product-stage" aria-label="Anteprima dell’esperienza Giada">
            <div className="product-stage-note product-stage-note--top"><span>GIORNI 1–3</span><strong>Usala davvero</strong></div>
            <div className="product-screen product-screen--summary"><img src="/assets/product-bilancio-v2.png" alt="Riepilogo calorie e macronutrienti nell’esperienza Giada" /></div>
            <div className="product-screen product-screen--log"><img src="/assets/product-food-log-v3.jpg" alt="Food log di Giada con pasti e macronutrienti" /></div>
            <div className="product-stage-note product-stage-note--bottom"><span>GIORNI 4–7</span><strong>Trova il tuo angolo</strong></div>
            <div className="product-observation"><small>OSSERVA</small><p>Quale momento aprirebbe il tuo Reel?</p></div>
          </div>
        </div>
      </section>

      <section className="benefits section section--compact" aria-labelledby="benefits-title">
        <div className="container">
          <SectionLabel number="04">UN’OPPORTUNITÀ CONCRETA</SectionLabel>
          <div className="section-heading section-heading--split"><h2 id="benefits-title">Un’idea può diventare più di un post.</h2><p>Distribuzione, chiarezza, continuità.</p></div>
          <div className="benefit-grid">
            <article className="benefit-card benefit-card--featured"><div className="card-icon"><Target aria-hidden="true" /></div><span className="card-index">01</span><h3>La tua idea può viaggiare lontano.</h3><p>Se selezionata, entra nelle campagne organiche e paid.</p><div className="reach-visual" aria-label="Esempio di distribuzione del contenuto"><div className="reach-row"><span>Organico</span><i style={{ "--reach": "62%" }} /></div><div className="reach-row"><span>Advertising</span><i style={{ "--reach": "92%" }} /></div></div></article>
            <article className="benefit-card"><div className="card-icon"><WalletCards aria-hidden="true" /></div><span className="card-index">02</span><h3>Sai quanto vale il lavoro.</h3><p>Compenso, revisioni e utilizzo sono chiari prima di iniziare.</p></article>
            <article className="benefit-card"><div className="card-icon"><Clapperboard aria-hidden="true" /></div><span className="card-index">03</span><h3>Una prova forte può continuare.</h3><p>Se c’è fit, puoi produrre più contenuti ogni mese.</p></article>
          </div>
        </div>
      </section>

      <section className="creator-fit section" id="profili" aria-labelledby="fit-title">
        <div className="container">
          <SectionLabel number="05" light>TRE MODI DI ESSERE GIUSTI</SectionLabel>
          <div className="section-heading section-heading--split section-heading--light"><h2 id="fit-title">Non cerchiamo una faccia sola.</h2><p>Scegli il profilo che ti somiglia. Serve a capire dove dai il meglio.</p></div>
          <div className="fit-layout">
            <div className="fit-tabs" role="tablist" aria-label="Profili creator">
              {creatorModes.map((mode) => {
                const Icon = mode.icon;
                const active = mode.id === activeMode;
                return <button key={mode.id} id={`creator-mode-${mode.id}`} type="button" role="tab" aria-selected={active} aria-controls="creator-mode-panel" className={active ? "fit-tab is-active" : "fit-tab"} onClick={() => setActiveMode(mode.id)}><span className="fit-tab-top"><small>{mode.number}</small><Icon aria-hidden="true" size={19} /></span><strong>{mode.label}</strong><em>{mode.mini}</em><ArrowRight aria-hidden="true" size={18} /></button>;
              })}
            </div>
            <article className="fit-panel" id="creator-mode-panel" role="tabpanel" aria-labelledby={`creator-mode-${selectedMode.id}`}>
              <div className="fit-panel-intro"><div className="fit-panel-top"><div className="fit-panel-icon"><SelectedIcon aria-hidden="true" size={28} /></div><span>{selectedMode.number} / 03</span></div><p className="fit-panel-label">{selectedMode.label}</p><h3>{selectedMode.title}</h3></div>
              <div className="fit-panel-detail"><p>{selectedMode.copy}</p><div className="fit-signal"><span>PER GIADA FUNZIONA QUANDO</span><strong>{selectedMode.signal}</strong></div><div className="tag-row">{selectedMode.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
            </article>
          </div>
        </div>
      </section>

      <section className="process section" id="come-funziona" aria-labelledby="process-title">
        <div className="container">
          <SectionLabel number="06">COME FUNZIONA</SectionLabel>
          <div className="section-heading section-heading--split"><h2 id="process-title">Il tuo impegno cresce insieme al nostro.</h2><p>Prima provi. Poi proponi. Produci solo dopo selezione e contratto.</p></div>
          <div className="process-list" aria-label="Percorso di collaborazione">
            {processSteps.map(({ number, title, copy, commitment, icon: Icon }) => <article className="process-row" key={number}><span className="process-number">{number}</span><div className="process-icon"><Icon aria-hidden="true" size={21} /></div><h3>{title}</h3><p>{copy}</p><small>{commitment}</small></article>)}
          </div>
          <div className="process-reassurance"><Check aria-hidden="true" size={17} /><span>Nessun video completo prima di contratto e brief finale.</span></div>
        </div>
      </section>

      <section className="standards section" aria-labelledby="standards-title">
        <div className="container">
          <SectionLabel number="07">APERTO, NON CASUALE</SectionLabel>
          <div className="standards-heading"><h2 id="standards-title">Non serve essere famosi.<br />Serve esserci davvero.</h2><p>Aperti ai creator emergenti. Seri sulla collaborazione.</p></div>
          <div className="standards-matrix" role="list" aria-label="Criteri di allineamento">
            <div className="standards-matrix-head" aria-hidden="true"><span>SEI IN LINEA SE</span><span>NON BASTA</span></div>
            {positiveStandards.map((item, index) => <div className="standard-pair" role="listitem" key={item}><div><CircleCheck aria-hidden="true" size={22} /><p>{item}</p></div><div><CircleMinus aria-hidden="true" size={22} /><p>{negativeStandards[index]}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="application section" id="candidatura" aria-labelledby="application-title">
        <div className="container application-grid">
          <div className="application-copy">
            <SectionLabel number="08" light>PRIMO PASSO</SectionLabel>
            <div className="eyebrow eyebrow--dark"><Sparkles aria-hidden="true" size={15} /> CANDIDATURA SEMPLICE</div>
            <h2 id="application-title">Prova Giada.<br />Poi proponi la tua idea.</h2>
            <p>Lascia i contatti. Ricevi accesso e brief. Il resto viene dopo la prova.</p>
            <div className="application-path" aria-label="Percorso di candidatura"><div><span>01</span><strong>Lascia i contatti</strong><small>2 minuti</small></div><div><span>02</span><strong>Prova Giada</strong><small>7 giorni</small></div><div><span>03</span><strong>Proponi l’idea</strong><small>Idea e logica</small></div></div>
          </div>
          <div className="form-card">
            {submitted ? (
              <div className="success-state" role="status" aria-live="polite"><div className="success-icon"><CircleCheck aria-hidden="true" size={32} /></div><p className="section-kicker">CANDIDATURA SIMULATA</p><h3>Ottimo inizio.</h3><p>Demo completata: nessun dato è stato inviato.</p><button className="button button--primary" type="button" onClick={() => setSubmitted(false)}><span>RIVEDI IL FORM</span><ArrowRight aria-hidden="true" size={18} /></button></div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-heading"><div><span>DEMO · STEP 1</span><h3>Inizia la prova</h3></div><p>Solo l’essenziale.</p></div>
                <div className="form-progress" aria-hidden="true"><span /></div>
                <div className="field-grid"><label><span>Nome</span><input name="name" placeholder="Come ti chiami?" required /></label><label><span>Email</span><input name="email" type="email" placeholder="nome@email.it" required /></label></div>
                <label><span>Canale principale</span><select name="channel" defaultValue="" required><option value="" disabled>Seleziona il canale</option><option>Instagram</option><option>TikTok</option><option>Entrambi</option><option>Sto iniziando ora</option></select></label>
                <label><span>Link al tuo profilo o portfolio</span><input name="profile" type="url" placeholder="https://" required /></label>
                <label className="consent-row"><input type="checkbox" required /><span>Confermo di avere almeno 18 anni.</span></label>
                <button className="button button--primary button--full" type="submit"><span>RICEVI ACCESSO E BRIEF</span><ArrowRight aria-hidden="true" size={18} /></button>
                <div className="form-assurances" aria-label="Rassicurazioni candidatura"><span><Check aria-hidden="true" size={13} /> 2 minuti</span><span><Check aria-hidden="true" size={13} /> Nessun video</span><span><Check aria-hidden="true" size={13} /> Demo senza invio</span></div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="faq section" id="faq" aria-labelledby="faq-title">
        <div className="container faq-grid">
          <div><SectionLabel number="09">FAQ</SectionLabel><h2 id="faq-title">Domande chiare.<br />Risposte brevi.</h2></div>
          <div className="faq-list">
            {faqs.map((item, index) => {
              const active = openFaq === index;
              const answerId = `faq-answer-${index}`;
              return <article className={active ? "faq-item is-open" : "faq-item"} key={item.question}><button type="button" aria-expanded={active} aria-controls={answerId} onClick={() => setOpenFaq(active ? -1 : index)}><small>{String(index + 1).padStart(2, "0")}</small><span>{item.question}</span><ChevronDown aria-hidden="true" size={20} /></button><div className="faq-answer" id={answerId} hidden={!active}><p>{item.answer}</p></div></article>;
            })}
          </div>
        </div>
      </section>

      <section className="final-cta" aria-label="Candidatura finale">
        <div className="container final-cta-inner"><div><span>GIADA CREATOR PROGRAM</span><h2>Hai già un’idea?</h2><p>Prima prova Giada. Poi proponila.</p></div><ArrowLink href="#candidatura">INIZIA LA PROVA</ArrowLink></div>
      </section>

      <footer>
        <div className="container footer-grid"><div className="footer-brand"><strong>GIADA</strong><span>by Vivarium</span></div><p>Creator Program · Concept UI/UX · Copy provvisorio</p><a href="#top">Torna su <ArrowRight aria-hidden="true" size={15} /></a></div>
      </footer>
    </main>
  );
}
