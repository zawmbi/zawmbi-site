# monitr theme screenshots

Drop the monitr theme screenshots in this folder. The gallery on the homepage
(the monitr app row) and on the `/monitr` case-study page reads from
`src/data/monitr.ts`.

**Theme grid** (the 3×3 click-to-zoom gallery) — nine files, in picker order:

```
ruby.png  dune.png  amber.png  terra.png  azure.png
amethyst.png  fleur.png  yin.png  yang.png
```

**Guided-tour carousel** — the walkthrough on /monitr and the homepage:

```
tour-dashboard.png  tour-globe.png  tour-country.png  tour-elections.png
tour-geopolitics.png  tour-chat.png  tour-profile.png  tour-admin.png
tour-watchlist.png
```

**Hero demo reel** — a muted, looping screen recording (feed + globe in motion):

```
monitr-demo.mp4        (or a .gif — set `gif` in src/data/monitr.ts)
```

Each entry in `monitrThemes` (in `src/data/monitr.ts`) has a `name`, an
`accent` color, and a `src` path. To use a different filename or theme name,
edit that file — the `src` just has to match the file you drop here.

Until a file exists, that slide shows a tinted placeholder with the theme name,
so the carousel still looks intentional. Wide 16:9 screenshots look best.
