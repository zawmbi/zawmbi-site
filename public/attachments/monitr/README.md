# monitr theme screenshots

Drop the monitr theme screenshots in this folder. The gallery on the homepage
(the monitr app row) and on the `/monitr` case-study page reads from
`src/data/monitr.ts`.

By default the code expects these filenames:

```
matrix.png  midnight.png  synthwave.png  mono.png  amber.png
crimson.png  cyan.png  rose.png  gold.png
```

Each entry in `monitrThemes` (in `src/data/monitr.ts`) has a `name`, an
`accent` color, and a `src` path. To use a different filename or theme name,
edit that file — the `src` just has to match the file you drop here.

Until a file exists, that slide shows a tinted placeholder with the theme name,
so the carousel still looks intentional. Wide 16:9 screenshots look best.
