# monitr theme screenshots

Drop the monitr theme screenshots in this folder. The gallery on the homepage
(the monitr app row) and on the `/monitr` case-study page reads from
`src/data/monitr.ts`.

The nine themes (in the app's theme-picker order) and the filenames the code
expects:

```
ruby.png  dune.png  amber.png  terra.png  azure.png
amethyst.png  fleur.png  yin.png  yang.png
```

Each entry in `monitrThemes` (in `src/data/monitr.ts`) has a `name`, an
`accent` color, and a `src` path. To use a different filename or theme name,
edit that file — the `src` just has to match the file you drop here.

Until a file exists, that slide shows a tinted placeholder with the theme name,
so the carousel still looks intentional. Wide 16:9 screenshots look best.
