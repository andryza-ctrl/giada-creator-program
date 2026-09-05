import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // La pagina vive su vivariumai.co/giadacreators. Costruire dentro una cartella
  // che si chiama come il percorso pubblico tiene le due URL identiche: quella
  // di Vercel e quella del dominio, senza riscritture di percorso nel mezzo.
  base: "/giadacreators/",
  build: {
    outDir: "dist/client/giadacreators",
  },
  optimizeDeps: {
    include: ["react", "react-dom/client"],
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: ["terminal.local"],
    warmup: {
      clientFiles: ["./src/main.jsx"],
    },
  },
  plugins: [react()],
});
