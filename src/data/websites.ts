/* Client website work, rendered in the #websites section on the home page.
   Screenshots live in  public/attachments/<id>/  — drop a new folder in there,
   add an entry below, and the section picks it up. */

export interface WebsiteProject {
  id: string;
  name: string;
  domain: string;
  href: string;
  icon: string;
  tagline: string;
  desc: string;
  shot: string;
  shotAlt: string;
  points: string[];
  tags: string[];
  meta: string[];
}

export const websites: WebsiteProject[] = [
  {
    id: 'lightningauto',
    name: 'Lightning Auto Plus',
    domain: 'lightningautoplus.com',
    href: 'https://lightningautoplus.com',
    icon: '/attachments/lightningauto/icon.png',
    tagline: 'A neighborhood garage, online.',
    desc:
      'A bilingual one-page site for an independent auto-repair shop in Orland Park, Illinois. The shop had no web presence at all, so the whole thing is built around the one action that matters to them: getting a customer to call.',
    shot: '/attachments/lightningauto/hero.png',
    shotAlt: 'The Lightning Auto Plus home page',
    points: [
      'Full English ⇄ Arabic support, with the entire layout mirrored for right-to-left reading.',
      'A live open/closed indicator computed from the shop hours, and a call button that never leaves the screen.',
      'A contact form that lands straight in the owner\'s inbox, sent from a Cloudflare Worker with no third-party form service.',
      'Built phone-first for an older audience: large type, strong hierarchy, and no step between arriving and calling.',
    ],
    tags: ['HTML & CSS', 'Vanilla JS', 'Cloudflare Workers', 'Bilingual + RTL', 'Local SEO'],
    meta: ['Designed & built solo', '2026', 'Live'],
  },
];
