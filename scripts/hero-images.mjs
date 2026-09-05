#!/usr/bin/env node
// Dai master 2:3 in assets-src/hero ricava le carte 3:4 del ventaglio.
// I master restano fuori da public/: pesano 2MB l'uno e non vanno pubblicati.
// Le carte sono 3:4 a ogni breakpoint: cambia solo la larghezza resa (218px
// desktop, 190px sotto i 700px), quindi serve un solo taglio e tre larghezze.
// La finestra di ritaglio è per immagine, non automatica: il soggetto va
// avvicinato quel tanto che basta a leggere la scena a 200px di larghezza,
// tenendo dentro il telefono per intero.
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const srcDir = path.join(root, "assets-src/hero");
const outDir = path.join(root, "public/assets");
const WIDTHS = [264, 436, 654];

// x, y = angolo alto-sinistra della finestra sul master 1024x1536; w = larghezza
// della finestra (l'altezza scende dal rapporto 3:4).
const CROPS = {
  "01-nutrizionista": { x: 150, y: 280, w: 675 },
  "02-food-blogger": { x: 60, y: 200, w: 760 },
  "03-fitness": { x: 22, y: 150, w: 675 },
  "05-wellness": { x: 0, y: 40, w: 825 },
  "07-giovane": { x: 30, y: 260, w: 920 },
  // Fuori pagina, master tenuti per un eventuale rientro.
  "04-abitudini": { x: 0, y: 200, w: 1000 },
  "06-esperto": { x: 0, y: 250, w: 850 },
};

// Le sole carte pubblicate: gli altri master restano in assets-src senza WebP.
const PUBLISHED = new Set([
  "01-nutrizionista",
  "02-food-blogger",
  "03-fitness",
  "05-wellness",
  "07-giovane",
]);

const py = `
import sys, os
from PIL import Image
src, out_dir, widths, x, y, w = sys.argv[1], sys.argv[2], [int(v) for v in sys.argv[3].split(",")], *[int(v) for v in sys.argv[4:7]]
name = os.path.splitext(os.path.basename(src))[0]
im = Image.open(src).convert("RGB")
W, H = im.size
h = int(round(w * 4 / 3))
x = max(0, min(x, W - w)); y = max(0, min(y, H - h))
im = im.crop((x, y, x + w, y + h))
for width in widths:
    out = im.resize((width, int(round(width * 4 / 3))), Image.LANCZOS)
    p = os.path.join(out_dir, f"{name}-{width}.webp")
    out.save(p, "WEBP", quality=82, method=6)
    print(f"  {os.path.basename(p)}  {out.size[0]}x{out.size[1]}  {os.path.getsize(p)//1024}KB")
`;

const files = fs
  .readdirSync(srcDir)
  .filter((f) => /\.png$/i.test(f) && PUBLISHED.has(path.basename(f, path.extname(f))))
  .sort();
if (!files.length) {
  console.error("Nessun master in assets-src/hero");
  process.exit(1);
}
for (const file of files) {
  const name = path.basename(file, path.extname(file));
  const crop = CROPS[name];
  if (!crop) {
    console.error(`Nessuna finestra di ritaglio per ${name}: aggiungila a CROPS.`);
    process.exit(1);
  }
  console.log(name);
  process.stdout.write(
    execFileSync(
      "python3",
      [
        "-c", py, path.join(srcDir, file), outDir, WIDTHS.join(","),
        String(crop.x), String(crop.y), String(crop.w),
      ],
      { encoding: "utf8" },
    ),
  );
}
