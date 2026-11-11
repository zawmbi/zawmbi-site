/* Shut — content for three pages:
     /projects/shut/   the project page (homepage card links here)
     /shut/            the App Store Support URL. Apple's reviewers open it
     /privacy/#shut    the privacy policy, on the privacy index page
   Voice: plain, short, slightly dry. No hype, no emoji, no exclamation marks.
   iPhone Duo (the fold trigger) is "coming in 1.1" only. Version 1.0 is the
   lock version and runs on every iPhone. Never say the fold works today.
   Screenshots: public/attachments/shut/, 660 × 1434 WebP, resized from the
   1320 × 2868 set in the app repo's AppStore/Screenshots/iPhone-6.9in/. */

export const shut = {
  name: 'Shut',
  tagline: 'Lock the phone. Begin focus.',
  oneLine: 'Shut is a focus timer for iPhone. Pick a length, lock your phone, and a focus block begins.',
  blurb:
    'A focus timer with one input. Pick a length and lock your phone, and a block begins. Unlock it early, or go off into another app, and the block breaks. You get a 10-second grace period to lock it again first.',
  /* [APP STORE URL] — paste the listing link here. While it is empty, no App
     Store button or link is rendered anywhere. */
  appStore: '',
  contact: 'linda@zawmbi.com',
  support: '/shut/',
  privacy: '/privacy/#shut',
  project: '/projects/shut/',
  heroShot: '/attachments/shut/1-timer.webp',
};

/* Walkthrough, one screenshot per step, in order. */
export interface ShutStep {
  title: string;
  note?: string;
  src: string;
  alt: string;
}
export const shutWalkthrough: ShutStep[] = [
  {
    title: 'Pick a length',
    note: 'The only input.',
    src: '/attachments/shut/2-home.webp',
    alt: 'Shut home screen: block length buttons for 15m, 25m, 45m, 1h, 90m, No limit and Custom, with 25m selected, a "Lock to begin" card, and today’s total of 1h 25m and a 17-day streak.',
  },
  {
    title: 'Lock the phone',
    note: 'The block runs.',
    src: '/attachments/shut/1-timer.webp',
    alt: 'Shut timer screen: a ring counting down with 18:42 left, on a dark background.',
  },
  {
    title: 'Unlock early',
    note: 'The grace countdown starts. Lock it again to carry on.',
    src: '/attachments/shut/3-grace.webp',
    alt: 'Shut grace screen: “You unlocked it.” above a 0:09 countdown, “18m left. Nothing is lost yet.”, “Lock it again to carry on.” and a “Break it” button.',
  },
  {
    title: 'Kept, or broken',
    src: '/attachments/shut/4-kept.webp',
    alt: 'Shut result screen: “Kept” and 45m, with an optional label field and a Done button.',
  },
  {
    title: 'History',
    note: 'Today’s total and your streak. Week and month totals are Pro.',
    src: '/attachments/shut/5-history.webp',
    alt: 'Shut history screen: this week 4h 0m, this month 22h 20m, a bar for each day of the week, and a list of kept blocks with lengths, dates and labels such as Thesis and Reading.',
  },
  {
    title: 'Settings',
    note: 'With the privacy statement.',
    src: '/attachments/shut/6-settings.webp',
    alt: 'Shut settings: grace period 10s, sound when a block ends, encouragement, appearance, and a privacy note: “Shut collects nothing and sends nothing anywhere. Your blocks are stored on this phone only.”',
  },
  {
    title: 'Appearance',
    note: 'Six styles, custom colours, fonts and timer faces. Pro.',
    src: '/attachments/shut/7-appearance.webp',
    alt: 'Shut appearance editor: live previews of the timer and home screens, style options Classic and Technical, and colour palettes including Walnut, Avocado, Atomic, Dusk, Graphite, Blossom, Noir, Glacier, Sunset and Custom.',
  },
];

export const shutFree = [
  'Unlimited blocks',
  'Every preset length',
  'Today’s total',
  'Current streak',
  'The Classic look',
];

export const shutPro = [
  'Full history',
  'Week and month totals',
  'Session labels',
  'Custom lengths',
  'An adjustable grace period',
  'A forgiving streak: one missed day in seven',
  'The Technical, Cute, Chic, Cool and Retro styles, with custom colours, fonts and faces',
];

export const shutProPrice = '$4.99';

/* Stack and engineering. */
export const shutTechTags = [
  'Swift 6', 'SwiftUI', 'SwiftData', 'StoreKit 2', 'UserNotifications', 'OSLog',
];

export const shutTech: [string, string][] = [
  ['The stack', 'Swift 6 with strict concurrency, SwiftUI, SwiftData, StoreKit 2, UserNotifications and OSLog.'],
  ['Nothing else', 'No third-party dependencies, no backend, no accounts, no analytics. The only network traffic is StoreKit’s.'],
  ['One universal build', 'A single hardware-aware type, HingeMonitor, picks the trigger at runtime: the fold on iPhone Duo, the lock everywhere else. The rest of the app never checks which device it’s on.'],
  ['A state machine', 'Each block runs through one engine: idle → armed → running → grace → broken or complete.'],
  ['Time from dates', 'Time is computed from stored dates, never trusted to a timer, so a block survives the app being suspended.'],
  ['Privacy label', 'Data Not Collected, in every category.'],
];

/* Support FAQ, for /shut. Plain text. */
export const shutFaq: [string, string][] = [
  [
    'Why did my block break when I didn’t unlock?',
    'Shut tells locking apart from leaving the app by using iOS’s protected-data signal, and that needs a device passcode. With no passcode, going to the Home Screen counts as locking. Opening another app breaks the block.',
  ],
  [
    'What is the grace period?',
    'You get 10 seconds after unlocking to lock again before the block breaks. Pro can change the length.',
  ],
  [
    'How do I restore Pro?',
    'Tap History or Settings ▸ Shut Pro, then “Restore purchase”.',
  ],
  [
    'Does Shut sync or back up?',
    'No. Nothing leaves your phone.',
  ],
];
