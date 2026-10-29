import { mediaFromFiles } from './preview-media';

// Vite discovers added files at development/build time; no directory-listing server is required.
const localFiles = import.meta.glob<string>('/src/assets/desktop-previews/**/*.{jpg,jpeg,png,webp,avif,gif,mp4,webm,ogg,ogv,mov,JPG,JPEG,PNG,WEBP,AVIF,GIF,MP4,WEBM,MOV}', {
  eager: true, query: '?url', import: 'default',
});
const assets = import.meta.glob<{ url: string }>('/src/assets/desktop-previews/**/*.asset.json', {
  eager: true, import: 'default',
});

export const previews = mediaFromFiles({
  ...localFiles,
  ...Object.fromEntries(Object.entries(assets).map(([path, asset]) => [path, asset.url])),
});
