# WavesOS

WavesOS is a free, open-source Arch Linux + Hyprland rice. One installer
(`WavesHyprland`) sets up Waybar, Rofi, Matugen colours, GTK/Qt themes, Kitty,
Hyprlock and SDDM in one pass, so the desktop is put together the first time it
boots.

- Site: **https://wavesos.org**
- Source: **https://github.com/WavesOS-Repos/WavesHyprland**

## Run it locally

You need Node.js 20 or newer.

```sh
npm install
npm run dev
```

Then open **http://localhost:8080**.

To use a different port:

```sh
PORT=3000 npm run dev
```

To serve the production build (faster, and no dev-server host checks, which is
what you want when sharing through a tunnel like cloudflared or ngrok):

```sh
npm run build
npm run preview
```

## Where things live

```
src/routes/index.tsx            page title, description, Open Graph tags, structured data
src/routes/__root.tsx           theme (dark/light), favicon, shared <head>
src/components/wavesos/         the whole landing page
src/styles.css                  colours, type, and layout
public/                         images, downloads, robots.txt, sitemap.xml
```

## Deploying

`npm run build` produces a static-ready bundle. Host it anywhere that serves a
Node/TanStack Start app or static files, point the `wavesos.org` DNS at it, and
the `public/` folder ships `robots.txt` and `sitemap.xml` automatically.

## Getting found on Google

See **[INDEXING.md](INDEXING.md)** — step-by-step, no cost, covers Google Search
Console, Bing, sitemaps, and what actually makes a new domain rank.
