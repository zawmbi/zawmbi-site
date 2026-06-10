# attachments

Drop your real images in this folder, then reference them from the site.

Anything in `public/` is served from the site root, so a file at
`public/attachments/me.jpg` is reachable at `/attachments/me.jpg`.

## How to use them

Open `src/pages/index.astro` and find the **`YOUR IMAGES`** block near the top.
Set each path to a file you placed here, for example:

```js
const profilePhoto = '/attachments/me.jpg';
const makerAvatar  = '/attachments/me.jpg';
const appShots = {
  monitr:    '/attachments/monitr.png',
  attendize: '/attachments/attendize.png',
  syllabus:  '/attachments/syllabus.png',
};
```

Leave a value as an empty string (`''`) to keep the placeholder box instead.

Recommended: JPG/PNG/WebP. Phone screenshots look best around 2:1 tall
(the Attendize / Syllabus slots); monitr's slot is a wide 16:10.
