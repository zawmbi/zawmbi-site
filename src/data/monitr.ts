/* monitr case-study content. Edit freely as the product evolves. */

export const monitr = {
  name: 'monitr',
  tagline: 'A real-time window on the world.',
  blurb:
    'monitr pulls live news, conflict, markets, elections, and even satellites onto one interactive globe, then lets you arrange it all into the dashboard you actually want to watch.',
  status: 'Live · Alpha',
  href: 'https://monitr.xyz',
  platforms: ['Web', 'Desktop', 'Mobile'],
};

/* ───────────────────────────── THEME SCREENSHOTS ─────────────────────────────
   Drop your monitr theme PNGs into  public/attachments/monitr/  using the
   filenames below (or rename both the file and the `src` here to match).
   Until a file exists, its slide shows a tinted placeholder with the theme name,
   so the gallery looks intentional before the images land.
   There are 9 colorway themes — adjust names / accents to match the real ones.
   ──────────────────────────────────────────────────────────────────────────── */
export interface ThemeShot {
  name: string;
  accent: string;
  src: string;
}

export const monitrThemes: ThemeShot[] = [
  { name: 'Matrix', accent: '#46e08b', src: '/attachments/monitr/matrix.png' },
  { name: 'Midnight', accent: '#3ea6ff', src: '/attachments/monitr/midnight.png' },
  { name: 'Synthwave', accent: '#b06cf0', src: '/attachments/monitr/synthwave.png' },
  { name: 'Mono', accent: '#e8e8e8', src: '/attachments/monitr/mono.png' },
  { name: 'Amber', accent: '#f4a838', src: '/attachments/monitr/amber.png' },
  { name: 'Crimson', accent: '#ef4444', src: '/attachments/monitr/crimson.png' },
  { name: 'Cyan', accent: '#22d3d3', src: '/attachments/monitr/cyan.png' },
  { name: 'Rose', accent: '#f4719b', src: '/attachments/monitr/rose.png' },
  { name: 'Gold', accent: '#e8c349', src: '/attachments/monitr/gold.png' },
];

/* What it does — surfaced as a feature grid. */
export const monitrFeatures: [string, string][] = [
  ['A living 3D globe', 'A WebGL globe that plots events where they happen, spins under a real day-night terminator, and zooms from the whole planet down to a single city.'],
  ['28 intelligence panels', 'Conflict, military, politics, economics, science, climate, culture, elections, alliances and more. Pop any panel out and arrange your own dashboard.'],
  ['156+ live sources', 'News streamed in real time with source and bias labels (leans left, center, leans right) so you can read a story across the spectrum, not just one side.'],
  ['9 colorway themes', 'Re-skin the entire interface in a click. Every panel, marker, overlay, and globe re-tints from a single set of theme tokens.'],
  ['Live presence', 'See who else is watching, share watchlists and history, and track a live user count, all updating in real time.'],
  ['Space & satellites', 'Follow the ISS live (position, altitude, velocity, and crew) alongside other tracked objects in orbit.'],
  ['Elections tracker', 'Upcoming and completed elections worldwide, with countdowns and outcomes, country by country.'],
  ['Map overlays', 'Layer flights, maritime traffic, and more straight onto the globe to see the world move.'],
];

/* Why it matters — framed for employers / clients. */
export const monitrDemonstrates: [string, string][] = [
  ['Real-time data at scale', 'Many live streams — news, markets, satellites, presence — folded into one coherent UI that stays calm instead of chaotic.'],
  ['A real design system', 'A fully themeable interface where nine complete colorways fall out of one token layer. Theming as architecture, not paint.'],
  ['Serious data visualization', 'A performant 3D globe rendering thousands of geo-located markers without dropping frames.'],
  ['Product thinking', 'Dense information made navigable: search, pop-out panels, watchlists, and bias labels that respect the reader.'],
  ['Shipped, not slideware', 'Live at monitr.xyz across web, desktop, and mobile. Real users, real uptime, real edge cases handled.'],
];
