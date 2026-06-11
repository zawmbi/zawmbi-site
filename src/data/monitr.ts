/* monitr case-study content. Edit freely as the product evolves. */

export const monitr = {
  name: 'monitr',
  tagline: 'A live situation room for world events.',
  blurb:
    'monitr aggregates 150+ news sources into an interactive dashboard — trending topics, a 3D world map, elections, conflicts, and markets — with a real-time social layer of chat, profiles, and presence layered on top.',
  status: 'Live · Alpha',
  href: 'https://monitr.xyz',
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

/* ───────────────────────── "THE PROBLEM" PLANNING TAB ─────────────────────────
   The thinking behind monitr — written as a planning doc for the case study. */
export const monitrProblem = {
  lead: 'Staying genuinely informed about the world has never been harder. The raw information is out there, but it is scattered across hundreds of outlets, social feeds, market tickers, and maps — each with its own bias, refresh rate, and login. Holding a real-time picture in your head means juggling a dozen tabs and still missing how the pieces connect.',
  bet: 'The bet: the real-time web, cheap global event data like GDELT, and serverless infrastructure have finally made a one-person “situation room” feasible — something that used to take a newsroom.',
};

export const monitrProblemPoints: [string, string][] = [
  ['Everything lives somewhere else', 'News, markets, conflict, elections, weather, even satellites each sit in a separate tool with its own mental model.'],
  ['The page is slower than the world', 'Most dashboards are static snapshots or refresh on a timer. Real events move faster than the screen in front of you.'],
  ['Noise drowns the signal', 'With no credibility weighting or de-duplication, ten versions of one story crowd out the one that matters.'],
  ['Watching alone', 'Following world events is oddly isolating — there is no shared space to react, discuss, or see what others track.'],
  ['The context-switching tax', 'Every jump between apps drops the thread; the link between a market move and a headline gets lost in the gaps.'],
  ['No room of your own', 'Off-the-shelf readers can’t be arranged, themed, or tuned to the handful of things any one person actually watches.'],
];

export const monitrAudience: [string, string][] = [
  ['The informed generalist', 'Wants the whole world on one screen without ten subscriptions and twenty tabs.'],
  ['Analysts & researchers', 'Geopolitics, markets, and OSINT work that needs breadth and the ability to drill into one country or event.'],
  ['Finance & markets', 'People who trade or follow markets and want price action sitting next to the events driving it.'],
  ['Students & educators', 'A live teaching surface for current events, elections, and global affairs.'],
  ['Watch-together communities', 'Groups who want to follow a developing situation and talk about it in the same place.'],
];

export const monitrGoals: [string, string][] = [
  ['One screen, the whole world', 'Aggregate the major event surfaces into a single, arrangeable situation room.'],
  ['Real-time by default', 'A live feed, live presence, and websocket updates so the page keeps pace with events.'],
  ['Signal over noise', 'Trending topics distilled from 150+ sources, with credibility scoring and de-duplication.'],
  ['Make it social', 'Chat, profiles, presence, and shared watching, so following the world is not a solo act.'],
  ['Make it yours', 'Themes, layout, watchlists, and tiered alerts so each person tunes their own room.'],
];

export const monitrPrinciples: [string, string][] = [
  ['Aggregate, don’t replace', 'Surface and connect primary sources, and always link back out — never pretend to be the origin.'],
  ['Security & cost are features', 'Default-deny rules, rate limiting, and quota-aware deploys are part of the product, not an afterthought.'],
  ['Runnable by one person', 'Cheap data feeds, serverless, and a hybrid backend keep a one-operator situation room sustainable.'],
];
