# -*- coding: utf-8 -*-
"""Genera la console di revisione del Manuale di volo (l'Artifact).

Legge i blocchi da `data.py`, ritaglia le anteprime delle pagine dal PDF impaginato
e le inietta in `console-template.html`. Scrive `revisione-manuale.html`, pronto da
pubblicare come Artifact.

    python3 build.py [--round 2] [--doc revisione/manuale-v3]

Il documento del database (`--doc`) è dove finisce quello che Andrea segna: un giro
nuovo va su un documento nuovo, così il verbale del giro precedente resta leggibile.
"""
import argparse, base64, io, json, pathlib, sys

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
from data import P

S = pathlib.Path(__file__).resolve().parent
PDF = S.parent.parent / 'output/pdf/GiadaCreators_ManualeDiVolo.pdf'  # il PDF canonico, quello che scrive build_manual.py
THUMB_W = 260  # px; la console la mostra a 84pt e la ingrandisce a 520px

ap = argparse.ArgumentParser()
ap.add_argument('--doc', default='revisione/manuale-v3', help='documento del database dell\'Artifact')
ap.add_argument('--round', default='2', help='numero del giro di revisione')
ap.add_argument('--version', default='v4', help='etichetta di versione del PDF')
ap.add_argument('--no-thumbs', action='store_true', help='riusa thumbs.json senza rileggere il PDF')
args = ap.parse_args()


def render_thumbs():
    """Ritaglia una anteprima JPEG per pagina dal PDF, come data URI."""
    import fitz  # PyMuPDF
    doc = fitz.open(PDF)
    out = {}
    for i, page in enumerate(doc, 1):
        zoom = THUMB_W / page.rect.width
        pix = page.get_pixmap(matrix=fitz.Matrix(zoom, zoom))
        from PIL import Image
        im = Image.frombytes('RGB', (pix.width, pix.height), pix.samples)
        buf = io.BytesIO()
        im.save(buf, 'JPEG', quality=72, optimize=True)
        out[f'{i:02d}'] = 'data:image/jpeg;base64,' + base64.b64encode(buf.getvalue()).decode()
    return out


if args.no_thumbs:
    thumbs = json.loads((S / 'thumbs.json').read_text())
else:
    thumbs = render_thumbs()
    (S / 'thumbs.json').write_text(json.dumps(thumbs))

pages = []
for n, sec, title, blocks in P:
    bs = []
    for i, (kind, text) in enumerate(blocks, 1):
        lock = kind.startswith('Vincolo')
        k = kind.split('|', 1)[1] if '|' in kind else kind
        bs.append({"id": f"p{n}-b{i:02d}", "kind": k, "lock": lock, "text": text})
    pages.append({"n": n, "sec": sec, "title": title, "thumb": thumbs[n], "blocks": bs})

nblocks = sum(len(p['blocks']) for p in pages)
sub = (f"{args.version} &middot; {len(pages)} pagine &middot; {nblocks} blocchi &middot; "
       f"giro {args.round} &middot; 7 settembre 2026")
round_note = ("Questo &egrave; il <b>giro " + args.round + "</b>: il PDF qui sotto ha gi&agrave; dentro "
              "le richieste dei giri precedenti.")

tpl = (S / 'console-template.html').read_text()
html_out = (tpl
            .replace('__PAGES__', json.dumps(pages, ensure_ascii=False))
            .replace('__DOCPATH__', args.doc)
            .replace('__LSKEY__', args.doc.replace('/', '-'))
            .replace('__SUB__', sub)
            .replace('__ROUND__', round_note))

out = S / 'revisione-manuale.html'
out.write_text(html_out)
print(f'scritto {out} — {len(pages)} pagine, {nblocks} blocchi, {len(html_out)} byte')
print(f'documento database: {args.doc}')
