// Pixel Meta della landing creator.
//
// Dataset "Giada Creator Program" (1063455126601347), separato da quello di
// Giada B2C: eventi, pubblici e attribuzione non si mescolano, e le priorità
// dell'Aggregated Event Measurement si configurano per dominio, quindi le due
// macchine non si rubano gli slot.
//
// Il pixel parte senza attendere il consenso, come sulla landing B2C di Giada
// (`NEXT_PUBLIC_FORCE_MARKETING`): il banner resta in pagina e la scelta si
// registra, ma la misurazione non dipende da un clic. È una scelta dichiarata,
// non un default: portarla a `false` rimette il pixel dietro il sì esplicito e
// il resto del codice non cambia.
export const FORCE_MARKETING = true;

export const PIXEL_ID = "1063455126601347";

const CONSENT_KEY = "giada-creator-consent";

export function readConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    // Safari in navigazione privata e i browser che bloccano lo storage
    // arrivano qui: senza memoria della scelta, la scelta non c'è.
    return null;
  }
}

export function writeConsent(value) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Se non si può scrivere, il consenso vale per la sola sessione corrente.
  }
}

let loaded = false;

export function loadPixel() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;

  /* eslint-disable */
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  /* eslint-enable */

  window.fbq("init", PIXEL_ID);
  window.fbq("track", "PageView");
}

// L'id dell'evento viaggia anche verso Apps Script: quando la Web App manderà
// lo stesso evento con la Conversions API, Meta userà questo per deduplicare le
// due copie invece di contarle due volte.
export function newEventId() {
  try {
    return crypto.randomUUID();
  } catch {
    return `ev-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  }
}

export function trackLead(eventId) {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq(
    "track",
    "Lead",
    { content_name: "Giada Creator Program", content_category: "creator-application" },
    { eventID: eventId },
  );
}
