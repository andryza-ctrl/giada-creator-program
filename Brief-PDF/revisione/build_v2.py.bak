# -*- coding: utf-8 -*-
import json, sys, html, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
from data import P
S=pathlib.Path(__file__).resolve().parent
thumbs=json.loads((S/'thumbs.json').read_text())

pages=[]
for n,sec,title,blocks in P:
    bs=[]
    for i,(kind,text) in enumerate(blocks,1):
        lock = kind.startswith('Vincolo')
        k = kind.split('|',1)[1] if '|' in kind else kind
        bs.append({"id":f"p{n}-b{i:02d}","kind":k,"lock":lock,"text":text})
    pages.append({"n":n,"sec":sec,"title":title,"thumb":thumbs[n],"blocks":bs})

CSS = r"""
:root{
  --bench:#e7eaf0; --bench-2:#dde2ec; --paper:#fff9ef; --ink:#151d33; --muted:#5d6780;
  --rule:#ccd3e1; --rule-soft:#e2e6ef; --accent:#0e9aa1; --accent-ink:#075a5f;
  --mark:#c1443c; --mark-bg:#fdecea; --mark-rule:#eab6b1;
  --peri:#c6d0f6; --yellow:#ffe074; --chip:#ffffff; --shadow:rgba(21,29,51,.10);
}
@media (prefers-color-scheme: dark){
 :root:not([data-theme="light"]){
  --bench:#0f1218; --bench-2:#161b23; --paper:#1b2029; --ink:#e9e6df; --muted:#98a2b8;
  --rule:#2e3543; --rule-soft:#242a35; --accent:#3ed2d8; --accent-ink:#8bf0f4;
  --mark:#ff8177; --mark-bg:#33201e; --mark-rule:#5f3b36;
  --peri:#3b4470; --yellow:#5c4d1c; --chip:#232936; --shadow:rgba(0,0,0,.45);
 }
}
:root[data-theme="dark"]{
  --bench:#0f1218; --bench-2:#161b23; --paper:#1b2029; --ink:#e9e6df; --muted:#98a2b8;
  --rule:#2e3543; --rule-soft:#242a35; --accent:#3ed2d8; --accent-ink:#8bf0f4;
  --mark:#ff8177; --mark-bg:#33201e; --mark-rule:#5f3b36;
  --peri:#3b4470; --yellow:#5c4d1c; --chip:#232936; --shadow:rgba(0,0,0,.45);
}
*{box-sizing:border-box}
body{background:var(--bench);color:var(--ink);
  font-family:"Geist","Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size:15px;line-height:1.5;-webkit-font-smoothing:antialiased}
h1,h2,h3{font-family:"Bricolage Grotesque","Geist",Helvetica,Arial,sans-serif;
  text-wrap:balance;margin:0;letter-spacing:-.015em}
.mono{font-family:"Geist Mono","SF Mono",ui-monospace,Menlo,monospace;
  font-variant-numeric:tabular-nums}

/* ---------- barra ---------- */
.bar{position:sticky;top:0;z-index:20;background:var(--bench-2);
  border-bottom:1px solid var(--rule);padding:10px 18px;
  display:flex;align-items:center;gap:14px;flex-wrap:wrap}
.bar h1{font-size:19px;font-weight:800;line-height:1.1}
.bar .sub{color:var(--muted);font-size:12.5px}
.spacer{flex:1 1 auto}
.count{font-size:12.5px;letter-spacing:.04em;text-transform:uppercase;color:var(--muted)}
.count b{color:var(--mark);font-size:15px}
button{font:inherit;color:inherit;cursor:pointer;background:var(--chip);
  border:1px solid var(--rule);border-radius:8px;padding:6px 12px}
button:hover{border-color:var(--accent)}
button:focus-visible,textarea:focus-visible,a:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
button.on{background:var(--ink);color:var(--bench-2);border-color:var(--ink)}
.status{font-size:11.5px;letter-spacing:.05em;text-transform:uppercase;color:var(--muted);
  border:1px dashed var(--rule);border-radius:99px;padding:3px 10px}

/* ---------- impianto ---------- */
.wrap{display:grid;grid-template-columns:78px minmax(0,1fr);gap:22px;
  max-width:1080px;margin:0 auto;padding:22px 18px 90px}
.rail{position:sticky;top:66px;align-self:start;display:flex;flex-direction:column;gap:3px}
.rail a{text-decoration:none;color:var(--muted);font-size:12px;padding:3px 6px;border-radius:6px;
  display:flex;align-items:center;gap:6px}
.rail a:hover{background:var(--bench-2);color:var(--ink)}
.rail .dot{width:6px;height:6px;border-radius:99px;background:transparent}
.rail a.has .dot{background:var(--mark)}
.rail a.has{color:var(--ink);font-weight:600}
.col{display:flex;flex-direction:column;gap:20px;min-width:0}

/* ---------- pagina ---------- */
.page{background:var(--paper);border:1px solid var(--rule);border-radius:14px;
  box-shadow:0 1px 2px var(--shadow);overflow:hidden;scroll-margin-top:74px}
.phead{display:flex;gap:14px;padding:14px 16px;border-bottom:1px solid var(--rule-soft);
  align-items:flex-start}
.phead img{width:62px;border-radius:5px;border:1px solid var(--rule);display:block;flex:0 0 auto}
.pnum{font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}
.phead h2{font-size:22px;font-weight:800;margin-top:2px}
.blocks{display:flex;flex-direction:column}

/* ---------- blocco ---------- */
.b{display:grid;grid-template-columns:96px minmax(0,1fr);gap:14px;
  padding:11px 16px 11px 13px;border-top:1px solid var(--rule-soft);
  border-left:3px solid transparent}
.b:first-child{border-top:none}
.b.marked{background:var(--mark-bg);border-left-color:var(--mark)}
.kind{font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);
  padding-top:3px;display:flex;flex-direction:column;gap:5px;align-items:flex-start}
.lockbadge{font-size:9.5px;letter-spacing:.06em;background:var(--peri);color:var(--ink);
  border-radius:4px;padding:1px 5px}
.btext{font-size:14.5px;line-height:1.55}
.b.marked .btext{color:var(--ink)}
.chips{display:flex;gap:6px;margin-top:8px;flex-wrap:wrap;align-items:center}
.chip{font-size:11.5px;letter-spacing:.03em;padding:3px 10px;border-radius:99px;
  border:1px solid var(--rule);background:transparent;color:var(--muted)}
.chip:hover{color:var(--ink)}
.chip[aria-pressed="true"]{background:var(--mark);border-color:var(--mark);color:#fff;font-weight:600}
:root[data-theme="dark"] .chip[aria-pressed="true"]{color:#241110}
textarea{width:100%;margin-top:8px;background:var(--chip);color:var(--ink);
  border:1px solid var(--mark-rule);border-radius:8px;padding:8px 10px;
  font:inherit;font-size:13.5px;resize:vertical;min-height:44px}
textarea::placeholder{color:var(--muted)}
.reminder{margin-top:7px;font-size:12px;color:var(--mark);display:flex;gap:6px}
.hidden{display:none!important}

/* ---------- esportazione ---------- */
.out{position:fixed;inset:auto 0 0 0;z-index:30;background:var(--bench-2);
  border-top:1px solid var(--rule);padding:14px 18px;max-height:52vh;overflow:auto}
.out h3{font-size:15px;margin-bottom:8px}
.out pre{white-space:pre-wrap;font-family:"Geist Mono",ui-monospace,monospace;font-size:12.5px;
  background:var(--paper);border:1px solid var(--rule);border-radius:8px;padding:12px;
  color:var(--ink);margin:0 0 10px}
.foot{max-width:1080px;margin:0 auto;padding:0 18px 60px;color:var(--muted);font-size:12.5px}
@media (max-width:720px){
  .wrap{grid-template-columns:minmax(0,1fr);padding:16px 12px 90px}
  .rail{display:none}
  .b{grid-template-columns:minmax(0,1fr);gap:6px}
  .kind{flex-direction:row;align-items:center;padding-top:0}
}
@media (prefers-reduced-motion:reduce){*{transition:none!important;animation:none!important}}
"""

JS = r"""
const PAGES = __DATA__;
const DOCPATH = "revisione/manuale-v2";
const LABELS = {accorcia:"Accorcia", riscrivi:"Riscrivi", togli:"Togli"};
let state = {};            // id -> {m, note}
let db = null, saveTimer = null;

const $ = (s,r)=> (r||document).querySelector(s);
const esc = s => s.replace(/[&<>"]/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const marked = () => Object.entries(state).filter(([,v])=>v && v.m);

function setStatus(t){ $("#status").textContent = t; }

function render(){
  const col = $("#col"), rail = $("#rail");
  col.innerHTML = PAGES.map(p=>`
    <section class="page" id="pg${p.n}">
      <div class="phead">
        <img src="${p.thumb}" alt="Anteprima della pagina ${p.n}">
        <div>
          <div class="pnum mono">Pagina ${p.n} / 18 &nbsp;·&nbsp; ${esc(p.sec)}</div>
          <h2>${esc(p.title)}</h2>
        </div>
      </div>
      <div class="blocks">
        ${p.blocks.map(b=>blockHTML(b)).join("")}
      </div>
    </section>`).join("");
  rail.innerHTML = PAGES.map(p=>`<a href="#pg${p.n}" data-p="${p.n}"><span class="dot"></span><span class="mono">${p.n}</span></a>`).join("");
  refresh();
}

function blockHTML(b){
  return `<div class="b" data-id="${b.id}">
    <div class="kind"><span class="mono">${esc(b.kind)}</span>${b.lock?'<span class="lockbadge">VINCOLO</span>':''}</div>
    <div>
      <div class="btext">${esc(b.text)}</div>
      <div class="chips">
        ${["accorcia","riscrivi","togli"].map(m=>
          `<button class="chip" data-m="${m}" aria-pressed="false">${LABELS[m]}</button>`).join("")}
      </div>
      ${b.lock?'<div class="reminder hidden" data-rem>Vincolo di compliance: si può accorciare, non ammorbidire. Il divieto non si elimina.</div>':''}
      <textarea class="hidden" rows="2" placeholder="Cosa cambiare, con parole tue (facoltativo)"></textarea>
    </div>
  </div>`;
}

function refresh(){
  document.querySelectorAll(".b").forEach(el=>{
    const st = state[el.dataset.id] || {};
    el.classList.toggle("marked", !!st.m);
    el.querySelectorAll(".chip").forEach(c=>
      c.setAttribute("aria-pressed", String(st.m === c.dataset.m)));
    const ta = el.querySelector("textarea");
    ta.classList.toggle("hidden", !st.m);
    if (document.activeElement !== ta) ta.value = st.note || "";
    const rem = el.querySelector("[data-rem]");
    if (rem) rem.classList.toggle("hidden", st.m !== "togli");
  });
  const n = marked().length;
  $("#count").innerHTML = n ? `<b>${n}</b> blocchi segnati su 117` : `nessun blocco segnato · 117 in totale`;
  const byPage = {};
  marked().forEach(([id])=>{ byPage[id.slice(1,3)] = true; });
  document.querySelectorAll("#rail a").forEach(a=> a.classList.toggle("has", !!byPage[a.dataset.p]));
  applyFilter();
}

let onlyMarked = false;
function applyFilter(){
  document.querySelectorAll(".b").forEach(el=>{
    const st = state[el.dataset.id] || {};
    el.classList.toggle("hidden", onlyMarked && !st.m);
  });
  document.querySelectorAll(".page").forEach(p=>{
    const any = [...p.querySelectorAll(".b")].some(b=>!b.classList.contains("hidden"));
    p.classList.toggle("hidden", onlyMarked && !any);
  });
}

function mut(id, patch){
  state[id] = Object.assign({m:null, note:""}, state[id], patch);
  if (!state[id].m) delete state[id];
  refresh(); save();
}

function save(){
  clearTimeout(saveTimer);
  saveTimer = setTimeout(async ()=>{
    const body = {blocks: state, updatedAt: new Date().toISOString()};
    try{ localStorage.setItem("revisione-manuale-v2", JSON.stringify(body)); }catch(e){}
    if (!db){ setStatus("salvato su questo browser"); return; }
    setStatus("salvataggio…");
    try{ await db.doc(DOCPATH).set(body); setStatus("salvato · Claude lo legge"); }
    catch(e){ setStatus("non salvato: " + (e && e.code ? e.code : "errore")); }
  }, 450);
}

function exportText(){
  const rows = marked();
  if (!rows.length) return "Nessun blocco segnato.";
  const idx = {};
  PAGES.forEach(p=>p.blocks.forEach(b=> idx[b.id] = {p, b}));
  const byPage = {};
  rows.forEach(([id,v])=>{ const e = idx[id]; if(!e) return;
    (byPage[e.p.n] = byPage[e.p.n] || []).push({e, v}); });
  let out = "Revisione Manuale di volo v2 — " + rows.length + " blocchi segnati\n";
  Object.keys(byPage).sort().forEach(n=>{
    const p = byPage[n][0].e.p;
    out += `\nPagina ${n} — ${p.sec}\n`;
    byPage[n].forEach(({e,v})=>{
      out += `  [${LABELS[v.m].toUpperCase()}] ${e.b.kind}: ${e.b.text}\n`;
      if (v.note) out += `      nota: ${v.note}\n`;
    });
  });
  return out;
}

document.addEventListener("click", e=>{
  const chip = e.target.closest(".chip");
  if (chip){
    const id = chip.closest(".b").dataset.id;
    const cur = (state[id]||{}).m;
    mut(id, {m: cur === chip.dataset.m ? null : chip.dataset.m});
    return;
  }
  if (e.target.id === "filter"){
    onlyMarked = !onlyMarked;
    e.target.classList.toggle("on", onlyMarked);
    e.target.textContent = onlyMarked ? "Mostra tutto" : "Solo i segnati";
    applyFilter(); return;
  }
  if (e.target.id === "copy"){
    const t = exportText();
    $("#outbox").classList.remove("hidden");
    $("#outpre").textContent = t;
    if (navigator.clipboard) navigator.clipboard.writeText(t).then(
      ()=> $("#copyhint").textContent = "Copiato negli appunti.",
      ()=> $("#copyhint").textContent = "Selezionalo e copialo a mano.");
    else $("#copyhint").textContent = "Selezionalo e copialo a mano.";
    return;
  }
  if (e.target.id === "closeout"){ $("#outbox").classList.add("hidden"); }
});

document.addEventListener("input", e=>{
  if (e.target.tagName === "TEXTAREA"){
    mut(e.target.closest(".b").dataset.id, {note: e.target.value});
  }
});

render();
try{
  const local = localStorage.getItem("revisione-manuale-v2");
  if (local){ state = (JSON.parse(local).blocks) || {}; refresh(); }
}catch(e){}

const useCap = (window.claude && claude.use) ? claude.use("db") : Promise.resolve(null);
useCap.then(async d=>{
  db = d;
  if (!db){ setStatus("salvataggio locale"); return; }
  setStatus("collegato");
  db.doc(DOCPATH).onSnapshot(snap=>{
    if (!snap.exists) return;
    if (snap.metadata.hasPendingWrites) return;
    const incoming = (snap.data() || {}).blocks || {};
    if (JSON.stringify(incoming) === JSON.stringify(state)) return;
    state = incoming; refresh();
  }, err => setStatus("sincronizzazione ferma: " + err.code));
}).catch(()=> setStatus("salvataggio locale"));
"""

BODY = """
<div class="bar">
  <div>
    <h1>Revisione Manuale di volo</h1>
    <div class="sub">v2 · 18 pagine · 117 blocchi · 6 settembre 2026</div>
  </div>
  <div class="spacer"></div>
  <div class="count" id="count">nessun blocco segnato · 117 in totale</div>
  <button id="filter">Solo i segnati</button>
  <button id="copy">Copia per Claude</button>
  <span class="status" id="status">avvio…</span>
</div>

<div class="wrap">
  <nav class="rail mono" id="rail" aria-label="Indice delle pagine"></nav>
  <main class="col" id="col"></main>
</div>

<div class="foot">
  Segna un blocco con <b>Accorcia</b>, <b>Riscrivi</b> o <b>Togli</b>, aggiungi una nota se
  serve. Quello che segni resta su questa pagina e Claude lo rilegge da qui: non serve
  copiare niente. I blocchi con l'etichetta <b>VINCOLO</b> vengono da policy Meta, dall'AI Act
  o dal confine medico: si possono accorciare, non ammorbidire.
</div>

<div class="out hidden" id="outbox">
  <h3>Le tue note</h3>
  <pre id="outpre"></pre>
  <span class="count" id="copyhint"></span>
  <button id="closeout" style="float:right">Chiudi</button>
</div>
"""

html_out = (
'<title>Revisione Manuale di volo</title>\n'
'<link rel="preconnect" href="https://fonts.googleapis.com">\n'
'<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
'<link rel="stylesheet" href="https://fonts.googleapis.com/css2?'
'family=Bricolage+Grotesque:opsz,wght@12..96,600..800&'
'family=Geist:wght@300..700&family=Geist+Mono:wght@400;600&display=swap">\n'
'<style>' + CSS + '</style>\n'
+ BODY +
'<script>' + JS.replace('__DATA__', json.dumps(pages, ensure_ascii=False)) + '</script>\n'
)
out = S/'revisione-manuale.html'
out.write_text(html_out)
print('scritto', out, len(html_out), 'byte')
