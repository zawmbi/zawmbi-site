/* monitr case-study content. Edit freely as the product evolves. */

export const monitr = {
  name: 'monitr',
  tagline: 'A live situation room for world events.',
  blurb:
    'monitr aggregates 150+ news sources into an interactive dashboard — trending topics, a 3D world map, elections, conflicts, and markets — with a real-time social layer of chat, profiles, and presence layered on top.',
  status: 'Live · Alpha',
  href: 'https://monitr.xyz',
  api: 'https://api.monitr.xyz',
  platforms: ['Web', 'Desktop', 'Mobile'],
};

/* Headline numbers for the stats strip. */
export const monitrStats: [string, string][] = [
  ['150+', 'news sources'],
  ['~57', 'cloud functions'],
  ['9', 'colorway themes'],
  ['Real-time', 'feed & presence'],
];

/* Stack tags. */
export const monitrTechTags = [
  'React', 'Vite', 'Three.js', 'Firebase', 'Node.js', 'PostgreSQL',
  'WebSockets', 'Docker', 'nginx', 'Cloudflare', 'DigitalOcean', 'GDELT',
];

/* ───────────────────────────── THEME SCREENSHOTS ─────────────────────────────
   Drop your monitr theme PNGs into  public/attachments/monitr/  using the
   filenames below (or rename both the file and the `src` here to match).
   Until a file exists, its slide shows a tinted placeholder with the theme name,
   so the gallery looks intentional before the images land.
   The nine colorways, in the app's theme-picker order.
   ──────────────────────────────────────────────────────────────────────────── */
export interface ThemeShot {
  name: string;
  accent: string;
  src: string;
}

export const monitrThemes: ThemeShot[] = [
  { name: 'Ruby', accent: '#e34155', src: '/attachments/monitr/ruby.png' },
  { name: 'Dune', accent: '#df8f3d', src: '/attachments/monitr/dune.png' },
  { name: 'Amber', accent: '#efa92f', src: '/attachments/monitr/amber.png' },
  { name: 'Terra', accent: '#46d07e', src: '/attachments/monitr/terra.png' },
  { name: 'Azure', accent: '#3ea6ff', src: '/attachments/monitr/azure.png' },
  { name: 'Amethyst', accent: '#a06cf0', src: '/attachments/monitr/amethyst.png' },
  { name: 'Fleur', accent: '#ef5fa0', src: '/attachments/monitr/fleur.png' },
  { name: 'Yin', accent: '#f2f2f2', src: '/attachments/monitr/yin.png' },
  { name: 'Yang', accent: '#1c1c1c', src: '/attachments/monitr/yang.png' },
];

/* ───────────────────────────── GUIDED-TOUR SHOTS ─────────────────────────────
   The walkthrough carousel. Drop these into public/attachments/monitr/ too.
   Each slide shows a captioned placeholder until the file lands.
   ──────────────────────────────────────────────────────────────────────────── */
export interface TourShot {
  name: string;
  src: string;
}

export const monitrTour: TourShot[] = [
  { name: 'The control panel', src: '/attachments/monitr/tour-control-panel.png' },
  { name: 'The 3D globe', src: '/attachments/monitr/tour-globe.png' },
  { name: 'Country deep-dive', src: '/attachments/monitr/tour-country.png' },
  { name: 'Elections mode', src: '/attachments/monitr/tour-elections.png' },
  { name: 'Live chat & inbox', src: '/attachments/monitr/tour-chat.png' },
  { name: 'Public profiles', src: '/attachments/monitr/tour-profile.png' },
  { name: 'Admin & moderation', src: '/attachments/monitr/tour-admin.png' },
  { name: 'The economic dashboard', src: '/attachments/monitr/tour-dashboard.png' },

  { name: 'Watchlist & alerts', src: '/attachments/monitr/tour-watchlist.png' },
];

/* What it does — the feature surface. */
export const monitrFeatures: [string, string][] = [
  ['Live news aggregation', '150+ sources, including GDELT global event data, distilled into trending topics with credibility scoring and a websocket-backed live feed.'],
  ['Interactive dashboards', 'A 3D globe and 2D maps, country deep-dives, an Elections mode, conflict and geopolitics panels (nuclear, tariffs, trade blocs), plus markets, weather, space, and live cams.'],
  ['Watchlist & alerts', 'Track topics and countries with tiered alert sensitivity — off, important-only, or all — a daily AI-style digest, and browser notifications.'],
  ['Real-time social layer', 'Global chat with @mentions, friends and requests, public profiles with badges, live presence, and opt-in "what are you viewing" activity.'],
  ['Full moderation suite', 'An admin panel with user management, roles, a reports queue, word filters, a global chat kill-switch, badge granting, and an immutable audit log.'],
  ['Accounts', 'Google and X OAuth plus anonymous guest sessions and a username-onboarding gate.'],
];

/* How it's built — the part recruiters care about. */
export const monitrTech: [string, string][] = [
  ['Frontend', 'React + Vite SPA, code-split by feature so the Three.js globe, maps, and charts load on demand. Hook-driven with real-time Firestore listeners, optimistic UI with debounced cloud saves, and error boundaries that degrade a failed call inline instead of crashing the app.'],
  ['Backend', 'A Dockerized Node.js service on a DigitalOcean droplet (docker-compose + nginx reverse proxy) behind Cloudflare with origin TLS. PostgreSQL storage, a websocket server for live presence and feed, and scheduled news-ingestion and rundown jobs.'],
  ['Serverless & data', 'Around 57 Firebase Cloud Functions (2nd-gen / Cloud Run), Firestore real-time DB, Cloud Storage, and Hosting — a deliberate hybrid of always-on droplet and serverless.'],
  ['Security engineering', 'Default-deny Firestore and Storage rules, server-side validation and sanitization, Firestore-backed sliding-window rate limiting, signed upload URLs with size caps, ban and mute enforcement at the request gate, roles re-derived server-side, App Check (reCAPTCHA) attestation, and audit logging of every admin action.'],
  ['Infra & cost engineering', 'Worked under a hard regional Cloud Run CPU quota: tuned per-function maxInstances and built a one-at-a-time deploy strategy to keep all ~57 functions shipping under the ceiling.'],
];

/* Simple architecture diagram, rendered on the page. */
export const monitrArch = [
  { title: 'React / Vite SPA', detail: 'Three.js · maps · charts' },
  { title: 'Cloudflare', detail: 'origin TLS · CDN · WAF' },
  { title: 'Firebase', detail: 'Auth · Firestore · ~57 Functions · Storage' },
  { title: 'DigitalOcean droplet', detail: 'Docker · nginx · Postgres · WebSocket' },
];
