/* Shut product page content. This page is also the App Store Support URL, so
   keep the support section and the privacy link on it.
   Screenshots live in  public/attachments/shut/  — copy the 6.9" set
   (1320 × 2868, AppStore/Screenshots/iPhone-6.9in in the app repo) in under the
   same file names. Until a file exists, its slot shows a placeholder. */

export const shut = {
  name: 'Shut',
  tagline: 'Lock the phone. Begin focus.',
  blurb:
    'A focus timer with one input. Pick a length and lock your phone, and a focus block begins. Unlock it early, or leave for another app, and you get ten seconds to lock it again before the block breaks.',
  status: 'App Store · October 2026',
  platforms: ['iPhone'],
  /* [APP STORE URL] — paste the listing link here. While it is empty the page
     shows "Coming to the App Store" instead of a dead button. */
  appStore: '',
  support: 'support@zawmbi.com',
  privacy: '/privacy/#shut',
  heroShot: '/attachments/shut/1-timer.png',
};

/* Quick facts strip. */
export const shutFacts: [string, string][] = [
  ['Role', 'Design & development, solo · Zawmbi Productions LLC'],
  ['Platform', 'iOS 26+, iPhone. Designed around iPhone Duo, iPad-ready'],
  ['Price', 'Free, with a one-time Pro unlock'],
  ['Status', 'App Store launch, October 2026'],
];

/* Stack tags for the hero. */
export const shutTechTags = [
  'Swift 6', 'SwiftUI', 'SwiftData', 'StoreKit 2', 'UserNotifications', 'OSLog',
  'Swift Testing', 'iPhone Duo hinge APIs', 'No dependencies',
];

/* How a block works — the whole app in three steps. */
export const shutSteps: [string, string][] = [
  ['Pick a length', 'That is the only input.'],
  ['Lock your phone', 'The focus block begins.'],
  ['Leave early, get ten seconds', 'Unlock it, or switch to another app, and you have ten seconds to lock it again. After that the block breaks.'],
];

export const shutFree = [
  'Unlimited blocks',
  'Any preset length',
  'Today’s total',
  'The current streak',
  'The timer face',
];

export const shutPro = [
  'Full history, plus week and month totals',
  'Session labels',
  'Custom lengths',
  'An adjustable grace period',
  'A forgiving streak',
  'Six styles: Classic, Technical, Cute, Chic, Cool, Retro',
  'Fully custom colours, clock font and weight, timer faces, text style and corners',
];

/* Screenshot slots, in App Store order. `pro` marks shots that show Pro
   features, so the caption says so. */
export interface ShutShot {
  name: string;
  src: string;
  pro?: boolean;
}
export const shutGallery: ShutShot[] = [
  { name: 'Timer', src: '/attachments/shut/1-timer.png' },
  { name: 'Home', src: '/attachments/shut/2-home.png' },
  { name: 'Grace period', src: '/attachments/shut/3-grace.png' },
  { name: 'Block kept', src: '/attachments/shut/4-kept.png' },
  { name: 'History', src: '/attachments/shut/5-history.png', pro: true },
  { name: 'Settings', src: '/attachments/shut/6-settings.png' },
  { name: 'Appearance editor', src: '/attachments/shut/7-appearance.png', pro: true },
];

/* Support FAQ. Answers may contain a little inline HTML. */
export const shutFaq: [string, string][] = [
  ['How do I restore my purchase?', 'Settings → Restore purchases.'],
  ['Why did my block break when I went to the home screen?', 'Telling “locked” apart from “left the app” needs a device passcode. Without one, leaving the app counts as locking.'],
  ['Is my data backed up?', 'Not by the app. Your data stays on the device only.'],
  ['Something else?', 'Email <a href="mailto:support@zawmbi.com">support@zawmbi.com</a>.'],
];

/* Under the hood — the engineering. */
export const shutTech: [string, string][] = [
  ['One universal build', 'On iPhone Duo the hinge starts a block; on every other iPhone, locking the screen does. Only one type in the codebase knows which device it is on.'],
  ['A session state machine', 'Blocks run through a state machine with a grace period, timed against the wall clock so a block survives the app being suspended or killed.'],
  ['A lock-screen-style editor', 'A live preview, six styles, and component-by-component editing of colours, timer face, clock type and corners. Custom palettes are derived to keep text WCAG-readable whatever colours are picked.'],
  ['Privacy as a feature', '“Data Not Collected” in every App Store category, with no network calls beyond StoreKit.'],
  ['The stack', 'Swift 6 with strict concurrency, SwiftUI, SwiftData for on-device persistence, StoreKit 2 for one non-consumable purchase, UserNotifications, OSLog, and the iOS 27.1 iPhone Duo hinge APIs. Zero third-party dependencies and no backend.'],
  ['Tests', '80 tests, written with Swift Testing.'],
];
