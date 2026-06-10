/* Zawmbi mark v2 — 3/4-angle chibi zombie, muted 8-bit sprite.
   Ported from the prototype's zawmbi-logo-v2.jsx to run at build time:
   hand-authored pixel grids (char -> palette colour), mirrored/shifted/blink
   variants, and a grid->rect projector the Astro components render to SVG.
   Animation is pure CSS (see global.css #z2-styles block). */

export type Palette = Record<string, string>;

/* ---------- palettes (muted) ---------- */
export const Z2_PALETTES: Record<string, Palette> = {
  Sage: {
    o: '#27301f', g: '#8aa178', s: '#6d8a5e', h: '#a9bf94', e: '#1d2517',
    w: '#dfe6d3', k: '#b18a80', t: '#5a7048', p: '#6b5e74', q: '#564b60', d: '#48583c',
  },
  Olive: {
    o: '#2d2f1d', g: '#9aa06e', s: '#7c8454', h: '#b8bd8c', e: '#22240f',
    w: '#e7e7d2', k: '#b3917b', t: '#6a7244', p: '#75596a', q: '#5d4655', d: '#555c34',
  },
  Ghoul: {
    o: '#222b29', g: '#7e9a90', s: '#62807a', h: '#9eb7ab', e: '#172019',
    w: '#dce5de', k: '#a98a8a', t: '#4e6a5e', p: '#5d6377', q: '#494e61', d: '#3d524a',
  },
};

/* ---------- heads (18 wide, 3/4 facing left) ---------- */
/* A — stitched crown */
const Z2_HEAD_STITCH = [
  '.....oooooooo.....',
  '...oohhththhhoo...',
  '..ohggtttttgggho..',
  '.ogggggtgtggggggo.',
  '.oggggggggggggggo.',
  '.oggggggggggggggo.',
  '.ogwegggweggggggo.',
  '.ogeegggeegggggggo',
  '.ogeegggeegggggggo',
  '.okkggggggkkggggo.',
  '.okkgeegggkkggggo.',
  '.osggggggggggggso.',
  '..osggggggggggso..',
  '...oossssssssoo...',
  '.....oooooooo.....',
];

/* B — cowlick sprout, clean crown */
const Z2_HEAD_SPROUT = [
  '.........d........',
  '........dd........',
  '.....ooodoooo.....',
  '...oohhhhhhhhoo...',
  '..ohggggggggggho..',
  '.oggggggggggggggo.',
  '.oggggggggggggggo.',
  '.oggggggggggggggo.',
  '.ogwegggweggggggo.',
  '.ogeegggeegggggggo',
  '.ogeegggeegggggggo',
  '.okkggggggkkggggo.',
  '.okkgeegggkkggggo.',
  '.osggggggggggggso.',
  '..osggggggggggso..',
  '...oossssssssoo...',
  '.....oooooooo.....',
];

/* C — droopy near eye, nicked ear, cheek stitch */
const Z2_HEAD_PATCH = [
  '.....oooooooo.....',
  '...oohhhhhhhhoo...',
  '..ohggggggggggho..',
  '.oggggggggggggggo.',
  '.oggggggggggggggo.',
  '.oggggggggggggggo.',
  '.ogwegggggggggggo.',
  '.ogeegggeeggggggo.',
  '.ogeegggeegggggggo',
  '.okkggggggkkgttgo.',
  '.okkgeegggkkggggo.',
  '.osggggggggggggso.',
  '..osggggggggggso..',
  '...oossssssssoo...',
  '.....oooooooo.....',
];

/* ---------- body (20 wide) — both arms shambling forward-left,
   tattered shirt, mid-step feet ---------- */
export const Z2_BODY = [
  '..oooooooooooo......',
  '.oggggpppppppo......',
  'oooooopppqpppo......',
  'ogggggpppqpppo......',
  '.ooooopqpppqpo......',
  '......opoppopo......',
  '......ogo.ogo.......',
  '......ogo.ogo.......',
  '.....oggo.ogo.......',
  '.....oooo.ooo.......',
];

export type HeadVariant = 'stitch' | 'sprout' | 'patch';
export const Z2_HEADS: Record<HeadVariant, string[]> = {
  stitch: Z2_HEAD_STITCH,
  sprout: Z2_HEAD_SPROUT,
  patch: Z2_HEAD_PATCH,
};

/* ---------- grid helpers ---------- */
export function buildFull(head: string[]): string[] {
  return head.slice(0, -1).map((r) => '.' + r + '.').concat(Z2_BODY);
}

/* mirror horizontally — art is authored facing left; default render faces right */
export function mirror(grid: string[]): string[] {
  return grid.map((r) => r.split('').reverse().join(''));
}

/* shift the top `topRows` rows 1px left (-1) or right (+1) — pixel wobble frame */
export function shiftTop(grid: string[], dir: number, topRows: number): string[] {
  return grid.map((r, i) => {
    if (i >= topRows) return r;
    return dir > 0 ? '.' + r.slice(0, -1) : r.slice(1) + '.';
  });
}

/* eyes-closed overlay patch: transparent everywhere except the 3-row eye band */
export function blinkPatch(grid: string[], bandStart: number): string[] {
  return grid.map((r, i) => {
    if (i < bandStart || i > bandStart + 2) return '.'.repeat(r.length);
    if (i < bandStart + 2) return r.replace(/[ew]/g, 'g');
    return r; /* lash line row stays */
  });
}

export interface Rect {
  x: number;
  y: number;
  fill: string;
}

export function gridToRects(grid: string[], pal: Palette): Rect[] {
  const out: Rect[] = [];
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      const ch = grid[y][x];
      if (!ch || ch === '.') continue;
      out.push({ x, y, fill: pal[ch] || '#f0f' });
    }
  }
  return out;
}
