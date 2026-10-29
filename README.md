# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Desktop preview media

Add screenshots, GIFs, and videos to **`src/assets/desktop-previews/`**. They automatically appear in the single “Take a look” gallery above the toolkit section; no manual list is needed. The folder starts empty because no desktop screenshots or recordings have been supplied.

- Supported images: JPG, JPEG, PNG, WebP, AVIF, GIF.
- Supported videos: MP4, WebM, OGG/OGV, MOV. Use MP4 (H.264) or WebM for reliable browser playback; MOV depends on its codec and the browser.
- Prefix names to control the order, such as `01-desktop.webp`, `02-launcher.gif`, `03-workflow.mp4`. Filenames become captions.
- In Lovable, upload media through `lovable-assets` and save the returned pointer directly in this folder, for example:

```sh
lovable-assets create --file /tmp/01-desktop.webp --filename 01-desktop.webp > src/assets/desktop-previews/01-desktop.webp.asset.json
```

Local source media files are also discovered. When adding media to an already published site, publish the updated version to include the new files. Click an image to advance; arrows work for all media, and videos keep their own playback controls.
