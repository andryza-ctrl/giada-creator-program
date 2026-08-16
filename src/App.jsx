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
    mini: "Fiducia prima dell’effetto wow.",
    title: "Sai rendere semplice ciò che sembra complicato.",
    copy: "Parli con calma, trasmetti fiducia e fai sentire le persone comprese. La camera non è un palco: è una conversazione.",
    signal: "Una spiegazione che sembra arrivare da un’amica competente.",
    tags: ["Talking head", "Spiegazioni chiare", "Tono credibile"],
    icon: MessageCircle,
  },
  {
    id: "vita-reale",
    number: "02",
    label: "La vita vera",
    mini: "Una scena quotidiana diventa storia.",
    title: "Trasformi un momento normale in qualcosa che vale la pena guardare.",
    copy: "Cucina, spesa, pausa pranzo, palestra: trovi il dettaglio umano e lo racconti senza sembrare dentro una pubblicità.",
    signal: "Giada entra nella scena senza interromperla o renderla artificiale.",
    tags: ["Storytelling", "Scene quotidiane", "Naturalezza"],
    icon: HeartHandshake,
  },
  {
    id: "performance",
    number: "03",
    label: "L’istinto performance",
    mini: "Hook, ritmo e attenzione.",
    title: "Pensi già ai primi tre secondi e a cosa fa restare una persona.",
    copy: "Hai occhio per l’apertura, sai seguire un brief e ti piace capire perché un contenuto funziona davvero.",
    signal: "L’idea è nativa per Reel e TikTok, ma resta credibile per chi guarda.",
    tags: ["UGC adv", "Hook forti", "Test creativi"],
    icon: Zap,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Prova Giada",
    copy: "La usi gratuitamente per 7 giorni e capisci davvero come parla, ragiona e aiuta.",
    commitment: "Nessun contenuto",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Ricevi il brief",
    copy: "Hai obiettivi, territori creativi, riferimenti e limiti chiari prima di ideare.",
    commitment: "Solo esplorazione",
    icon: FileText,
  },
  {
    number: "03",
    title: "Proponi l’idea",
    copy: "Ci racconti hook, sviluppo e perché il contenuto potrebbe funzionare.",
    commitment: "Idea, non video",
    icon: Lightbulb,
  },
  {
    number: "04",
    title: "Produciamo insieme",
    copy: "Se la proposta è selezionata: contratto, script finale, produzione e compenso.",
    commitment: "Collaborazione reale",
    icon: Video,
  },
];

const positiveStandards = [
  "Hai almeno qualche contenuto originale da mostrarci",
  "Sei naturale davanti alla camera e curi l’audio",
  "Sai seguire brief, scadenze e una revisione",
  "Porti un’idea motivata, non solo una richiesta",
];

const negativeStandards = [
  "Follower senza un linguaggio personale",
  "Un video generico già usato per altri brand",
  "La ricerca di un guadagno facile",
  "Ignorare diritti, tempi e indicazioni",
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
              <h2>Non servono grandi numeri per farsi notare.</h2>
              <p>Prova Giada, trova un modo tuo di raccontarla e proponi l’idea prima di produrre il video.</p>
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
              <div className="hero-trust"><span>IL PUNTO</span><strong>Il talento viene prima dei follower.</strong><p>Guardiamo come pensi, come comunichi e come lavori.</p></div>
              <div className="term-list">
                <div><small>COMPENSO</small><strong>€50</strong><span>ipotesi per video</span></div>
                <div><small>CONTINUITÀ</small><strong>3–5</strong><span>video al mese</span></div>
                <div><small>DISTRIBUZIONE</small><strong>Paid + organic</strong><span>se il contenuto è selezionato</span></div>
              </div>
              <a className="hero-round-link" href="#opportunita" aria-label="Scopri l’opportunità"><ArrowRight aria-hidden="true" size={22} /></a>
            </aside>
          </div>
        </div>
      </section>

      <section className="statement section" id="opportunita">
        <div className="container">
          <SectionLabel number="02">IL TALENTO PRIMA DEI FOLLOWER</SectionLabel>
          <div className="statement-grid">
            <h2>Puoi essere all’inizio.<br />Non devi sembrare improvvisato.</h2>
            <div className="statement-copy"><p>Cerchiamo persone curiose, naturali davanti alla camera e abbastanza precise da trasformare un brief in qualcosa di proprio.</p><p>L’esperienza aiuta. Sensibilità creativa, affidabilità e voglia di mettersi in gioco contano di più.</p></div>
          </div>
          <div className="criteria-rail" aria-label="Criteri principali di selezione">
            <div className="criterion criterion--number"><small>FOLLOWER</small><strong>&lt;10K</strong><p>Sono assolutamente ammessi.</p></div>
            <div className="criterion"><small>VOCE</small><strong>Personale</strong><p>Un modo riconoscibile di parlare e raccontare.</p></div>
            <div className="criterion"><small>METODO</small><strong>Affidabile</strong><p>Brief, tempi e revisioni presi sul serio.</p></div>
            <div className="criterion"><small>IDEA</small><strong>Motivata</strong><p>Non solo “mi piacerebbe collaborare”.</p></div>
          </div>
        </div>
      </section>

      <section className="product-lab section" aria-labelledby="lab-title">
        <div className="container product-lab-grid">
          <div className="product-lab-copy">
            <SectionLabel number="03">PRIMA LA VIVI, POI LA RACCONTI</SectionLabel>
            <h2 id="lab-title">Sette giorni dentro Giada.<br />Non sette giorni a indovinare.</h2>
            <p>La prova serve a costruire un’idea che nasca dal prodotto: linguaggio, utilità, momenti reali e dettagli che una demo veloce non farebbe vedere.</p>
            <div className="lab-checks"><span><Check aria-hidden="true" size={16} /> Esplora l’esperienza reale</span><span><Check aria-hidden="true" size={16} /> Osserva cosa merita una storia</span><span><Check aria-hidden="true" size={16} /> Arriva con un’idea motivata</span></div>
            <a className="inline-cta" href="#come-funziona">Vedi cosa succede dopo <ArrowRight aria-hidden="true" size={17} /></a>
          </div>
          <div className="product-stage" aria-label="Anteprima dell’esperienza Giada">
            <div className="product-stage-note product-stage-note--top"><span>GIORNI 1–3</span><strong>Usala davvero</strong></div>
            <div className="product-screen product-screen--summary"><img src="/assets/product-bilancio-v2.png" alt="Riepilogo calorie e macronutrienti nell’esperienza Giada" /></div>
            <div className="product-screen product-screen--log"><img src="/assets/product-food-log-v3.jpg" alt="Food log di Giada con pasti e macronutrienti" /></div>
            <div className="product-stage-note product-stage-note--bottom"><span>GIORNI 4–7</span><strong>Trova il tuo angolo</strong></div>
            <div className="product-observation"><small>OSSERVA</small><p>Quale momento useresti come apertura del tuo Reel?</p></div>
          </div>
        </div>
      </section>

      <section className="benefits section section--compact" aria-labelledby="benefits-title">
        <div className="container">
          <SectionLabel number="04">UN’OPPORTUNITÀ CONCRETA</SectionLabel>
          <div className="section-heading section-heading--split"><h2 id="benefits-title">Una buona idea può diventare molto più di un post.</h2><p>Giada mette insieme distribuzione, chiarezza e possibilità di costruire continuità.</p></div>
          <div className="benefit-grid">
            <article className="benefit-card benefit-card--featured"><div className="card-icon"><Target aria-hidden="true" /></div><span className="card-index">01</span><h3>Le tue idee possono viaggiare molto più lontano.</h3><p>I contenuti selezionati possono entrare nelle campagne organiche e paid di Giada.</p><div className="reach-visual" aria-label="Esempio di distribuzione del contenuto"><div className="reach-row"><span>Organico</span><i style={{ "--reach": "62%" }} /></div><div className="reach-row"><span>Advertising</span><i style={{ "--reach": "92%" }} /></div></div></article>
            <article className="benefit-card"><div className="card-icon"><WalletCards aria-hidden="true" /></div><span className="card-index">02</span><h3>Sai prima per cosa vieni pagato.</h3><p>Compenso, formato, revisioni e utilizzo vengono chiariti prima di iniziare.</p></article>
            <article className="benefit-card"><div className="card-icon"><Clapperboard aria-hidden="true" /></div><span className="card-index">03</span><h3>Una prova forte può diventare continuità.</h3><p>I creator più allineati possono produrre più contenuti ogni mese insieme a Vivarium.</p></article>
          </div>
        </div>
      </section>

      <section className="creator-fit section" id="profili" aria-labelledby="fit-title">
        <div className="container">
          <SectionLabel number="05" light>TRE MODI DI ESSERE GIUSTI</SectionLabel>
          <div className="section-heading section-heading--split section-heading--light"><h2 id="fit-title">Non cerchiamo una faccia sola.</h2><p>Scegli il profilo che ti somiglia di più. Non è un test: è un modo semplice per capire dove potresti dare il meglio.</p></div>
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
          <div className="section-heading section-heading--split"><h2 id="process-title">Il tuo impegno cresce soltanto quando cresce anche il nostro.</h2><p>Prima conosci Giada. Poi ci fai vedere l’idea. La produzione completa arriva solo dopo selezione e contratto.</p></div>
          <div className="process-list" aria-label="Percorso di collaborazione">
            {processSteps.map(({ number, title, copy, commitment, icon: Icon }) => <article className="process-row" key={number}><span className="process-number">{number}</span><div className="process-icon"><Icon aria-hidden="true" size={21} /></div><h3>{title}</h3><p>{copy}</p><small>{commitment}</small></article>)}
          </div>
          <div className="process-reassurance"><Check aria-hidden="true" size={17} /><span>Nessuna produzione completa prima di contratto e brief esecutivo.</span></div>
        </div>
      </section>

      <section className="standards section" aria-labelledby="standards-title">
        <div className="container">
          <SectionLabel number="07">APERTO, NON CASUALE</SectionLabel>
          <div className="standards-heading"><h2 id="standards-title">Non serve essere famosi.<br />Serve prenderla sul serio.</h2><p>La porta è aperta anche ai creator emergenti. Quello che vogliamo proteggere è la qualità della collaborazione.</p></div>
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
            <h2 id="application-title">Prova Giada.<br />Poi sorprendici.</h2>
            <p>Lascia i tuoi riferimenti per ricevere l’accesso creator e il brief introduttivo. Il copy e il flusso finale verranno revisionati prima del lancio.</p>
            <div className="application-path" aria-label="Percorso di candidatura"><div><span>01</span><strong>Lascia i riferimenti</strong><small>Circa 2 minuti</small></div><div><span>02</span><strong>Prova Giada</strong><small>7 giorni gratuiti</small></div><div><span>03</span><strong>Invia la proposta</strong><small>Idea, logica, potenziale</small></div></div>
          </div>
          <div className="form-card">
            {submitted ? (
              <div className="success-state" role="status" aria-live="polite"><div className="success-icon"><CircleCheck aria-hidden="true" size={32} /></div><p className="section-kicker">CANDIDATURA SIMULATA</p><h3>Ottimo inizio.</h3><p>Questa demo non ha inviato dati. Nella versione finale, da qui partiranno accesso a Giada e brief creator.</p><button className="button button--primary" type="button" onClick={() => setSubmitted(false)}><span>RIVEDI IL FORM</span><ArrowRight aria-hidden="true" size={18} /></button></div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-heading"><div><span>DEMO · STEP 1</span><h3>Inizia la prova creator</h3></div><p>Il minimo necessario.</p></div>
                <div className="form-progress" aria-hidden="true"><span /></div>
                <div className="field-grid"><label><span>Nome</span><input name="name" placeholder="Come ti chiami?" required /></label><label><span>Email</span><input name="email" type="email" placeholder="nome@email.it" required /></label></div>
                <label><span>Canale principale</span><select name="channel" defaultValue="" required><option value="" disabled>Seleziona il canale</option><option>Instagram</option><option>TikTok</option><option>Entrambi</option><option>Sto iniziando ora</option></select></label>
                <label><span>Link al tuo profilo o portfolio</span><input name="profile" type="url" placeholder="https://" required /></label>
                <label className="consent-row"><input type="checkbox" required /><span>Confermo di aver compiuto 18 anni e di voler conoscere il Creator Program.</span></label>
                <button className="button button--primary button--full" type="submit"><span>RICEVI ACCESSO E BRIEF</span><ArrowRight aria-hidden="true" size={18} /></button>
                <div className="form-assurances" aria-label="Rassicurazioni candidatura"><span><Check aria-hidden="true" size={13} /> 2 minuti</span><span><Check aria-hidden="true" size={13} /> Nessun video</span><span><Check aria-hidden="true" size={13} /> Demo senza invio</span></div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="faq section" id="faq" aria-labelledby="faq-title">
        <div className="container faq-grid">
          <div><SectionLabel number="09">FAQ</SectionLabel><h2 id="faq-title">Domande sensate,<br />risposte chiare.</h2></div>
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
        <div className="container final-cta-inner"><div><span>GIADA CREATOR PROGRAM</span><h2>Hai già in mente<br />come la racconteresti?</h2><p>Prima la provi. Poi ci mandi l’idea. Il video arriva soltanto se decidiamo di produrlo insieme.</p></div><ArrowLink href="#candidatura">INIZIA LA PROVA CREATOR</ArrowLink></div>
      </section>

      <footer>
        <div className="container footer-grid"><div className="footer-brand"><strong>GIADA</strong><span>by Vivarium</span></div><p>Creator Program · Concept UI/UX · Copy provvisorio</p><a href="#top">Torna su <ArrowRight aria-hidden="true" size={15} /></a></div>
      </footer>
    </main>
  );
}
