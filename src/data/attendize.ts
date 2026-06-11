/* Attendize case-study content. Edit freely as the product evolves.
   Screenshots live in  public/attachments/attendize/  — until a file exists,
   each slot shows an intentional placeholder so the page reads while pre-launch. */

export const attendize = {
  name: 'Attendize',
  tagline: 'Attendance, with momentum.',
  blurb:
    'Attendize turns attendance into momentum. Students log Present, Late, or Absent for each class, see exactly how many classes they can still safely miss, forecast their end-of-term percentage, and earn XP, ranks, streaks, and badges along the way.',
  status: 'App Store submission ready',
  platforms: ['iPhone', 'iPad'],
  heroShot: '/attachments/attendize/dashboard-ring.png',
};

/* Quick facts strip. */
export const attendizeFacts: [string, string][] = [
  ['Role', 'Designed & built end-to-end, solo'],
  ['Platforms', 'iPhone + iPad'],
  ['Year', '2026'],
  ['Status', 'Under'],
];

/* Stack tags for the hero. */
export const attendizeTechTags = [
  'React Native', 'Expo (SDK 53)', 'TypeScript', 'Expo Router', 'Zustand',
  'NativeWind', 'Reanimated 3', 'react-native-svg', 'Firebase', 'EAS Build',
];

/* ───────────────────────── SIGNATURE FEATURES (with a screenshot each) ─────────
   Drop the matching PNGs into public/attachments/attendize/. */
export interface SigFeature {
  title: string;
  body: string;
  shot: string;
  shotName: string;
}

export const attendizeSignature: SigFeature[] = [
  {
    title: 'The Momentum Ring',
    body: 'The dashboard hero. One glanceable ring combines XP progress, current academic rank, and your active streak, so opening the app immediately tells you where you stand.',
    shot: '/attachments/attendize/dashboard-ring.png',
    shotName: 'Dashboard — Momentum Ring',
  },
  {
    title: 'The Buffer',
    body: 'The number students actually want: exactly how many classes you can still miss before you drop below your required percentage, computed live as you check in.',
    shot: '/attachments/attendize/buffer-gauge.png',
    shotName: 'Class Detail — Buffer Gauge',
  },
  {
    title: 'End-of-term Forecast',
    body: 'Projects your final attendance from your current trend, runs what-if scenarios, and flags at-risk classes with confidence bands so there are no surprises at finals.',
    shot: '/attachments/attendize/forecast.png',
    shotName: 'Forecast — projection + what-if',
  },
  {
    title: 'Gamification',
    body: 'Academic ranks from Freshman to Valedictorian, daily streaks, and a twelve-badge trophy case, with a guided first-run checklist to get a new student set up fast.',
    shot: '/attachments/attendize/trophy-case.png',
    shotName: 'Trophy Case — ranks + badges',
  },
];

/* The rest of the feature surface. */
export const attendizeFeatures: [string, string][] = [
  ['Fast check-in', 'One tap for Present, Late, or Absent, with instant XP, a streak bump, and a small celebratory burst the moment you log it.'],
  ['Insights', 'Weekday and time-of-day patterns, a consistency heatmap, and your punctuality records, so habits become visible.'],
  ['Privacy by design', 'Attendance data stays on the device, with full account and data deletion built in from the start.'],
];

/* Design-system color tokens (rendered as real swatches). */
export const attendizeTokens: { name: string; hex: string }[] = [
  { name: 'Spruce', hex: '#2F5247' },
  { name: 'Honey gold', hex: '#E0A53D' },
  { name: 'Deep spruce', hex: '#1F3A31' },
  { name: 'Cream', hex: '#F6EFDE' },
  { name: 'Ink', hex: '#16201C' },
];

/* Design-system talking points. */
export const attendizeDesign: [string, string][] = [
  ['Tokenized, light + dark', 'A full system on OKLCH color tokens, a 4-point spacing scale, a type scale, radii, elevation, and motion curves, themed end to end.'],
  ['Typography', 'Fraunces, a display serif, carries the hero numerals and rank names; Outfit handles the UI text.'],
  ['A bespoke icon family', 'A cohesive set of 33 glyphs, all drawn on a single 24px grid for a consistent weight and rhythm.'],
  ['An academic companion', 'A calm identity in deep spruce green and honey gold, with tactile depth from gradients, soft shadows, grain, and glass.'],
];

/* The two signature brand objects. */
export interface BrandObject {
  title: string;
  detail: string;
  shot: string;
}
export const attendizeComponents: BrandObject[] = [
  {
    title: 'Momentum Ring',
    detail: 'A single hero object that folds XP progress, current rank, and streak into one ring.',
    shot: '/attachments/attendize/ring-spec.png',
  },
  {
    title: 'Buffer Gauge',
    detail: 'A 270° gauge showing, at a glance, how many classes you can still miss before dropping below target.',
    shot: '/attachments/attendize/gauge-spec.png',
  },
];

/* Under the hood — the engineering. */
export const attendizeTech: [string, string][] = [
  ['Cross-platform foundation', 'React Native and Expo (SDK 53), fully typed in TypeScript, with file-based Expo Router navigation, a custom tab bar, and a center Check-In button.'],
  ['A real iPad layout', 'A custom responsive system that becomes a sidebar with multi-column content on tablet and bottom tabs on phone, rather than a stretched-up phone screen.'],
  ['From-scratch iOS UI kit', 'Sheets, segmented controls, steppers, sliders, and toggles built by hand, plus bespoke SVG data-viz, with no heavy third-party UI library.'],
  ['Custom graphics & motion', 'react-native-svg and Reanimated 3 drive the Momentum Ring, Buffer Gauge, sparkline, forecast chart, and celebrations, all built to respect reduced motion.'],
  ['State & engines', 'Zustand stores persisted with AsyncStorage feed a gamification engine and a forecasting engine that both derive from one attendance record store, so there is no schema migration.'],
  ['Auth & platform', 'Firebase with email, Google, and Apple sign-in, a guest demo mode, account deletion, local notifications, and location-based reminders.'],
  ['Release engineering', 'An EAS Build and Submit pipeline, a branded icon and splash, a hosted privacy policy and landing page on GitHub Pages, the App Store listing, and a dedicated demo login for Apple review.'],
  ['A toolchain fix', 'Tracked down a React Native and Xcode build failure (an fmt consteval error) and resolved it with a custom Expo config plugin.'],
];

/* Architecture nodes: one record store → two engines → the typed SVG UI. */
export const attendizeArch = [
  { title: 'Attendance record store', detail: 'Zustand · AsyncStorage · on-device' },
  { title: 'Gamification engine', detail: 'XP · ranks · streaks · badges' },
  { title: 'Forecasting engine', detail: 'projection · what-if · confidence' },
  { title: 'Typed SVG UI', detail: 'Ring · Gauge · charts · Reanimated' },
];

/* Gallery carousel — the shotlist. Accents alternate spruce / gold. */
export interface GalleryShot {
  name: string;
  src: string;
  accent: string;
}
export const attendizeGallery: GalleryShot[] = [
  { name: 'Dashboard — Momentum Ring', src: '/attachments/attendize/dashboard-ring.png', accent: '#2F5247' },
  { name: 'Quick Check-In — +XP', src: '/attachments/attendize/check-in.png', accent: '#E0A53D' },
  { name: 'Class Detail — Buffer Gauge', src: '/attachments/attendize/buffer-gauge.png', accent: '#2F5247' },
  { name: 'Forecast & what-if', src: '/attachments/attendize/forecast.png', accent: '#E0A53D' },
  { name: 'Insights — consistency heatmap', src: '/attachments/attendize/insights.png', accent: '#2F5247' },
  { name: 'Trophy Case — ranks & badges', src: '/attachments/attendize/trophy-case.png', accent: '#E0A53D' },
  { name: 'Light + dark', src: '/attachments/attendize/light-dark.png', accent: '#2F5247' },
  { name: 'The full iPad layout', src: '/attachments/attendize/ipad.png', accent: '#E0A53D' },
];
