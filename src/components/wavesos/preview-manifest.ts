import { mediaFromFiles, type PreviewMedia } from './preview-media';

// Vite discovers added files at development/build time; no directory-listing server is required.
// Globs must be string literals, so each category folder is listed explicitly.

function build(local: Record<string, string>, assets: Record<string, { url: string }>) {
  return mediaFromFiles({
    ...local,
    ...Object.fromEntries(Object.entries(assets).map(([path, asset]) => [path, asset.url])),
  });
}

export const previews = build(
  import.meta.glob<string>('/src/assets/desktop-previews/**/*.{jpg,jpeg,png,webp,avif,gif,mp4,webm,ogg,ogv,mov,JPG,JPEG,PNG,WEBP,AVIF,GIF,MP4,WEBM,MOV}', { eager: true, query: '?url', import: 'default' }),
  import.meta.glob<{ url: string }>('/src/assets/desktop-previews/**/*.asset.json', { eager: true, import: 'default' }),
);

export const previewCategories: { name: string; media: PreviewMedia[] }[] = [
  { name: 'Desktop', media: previews },
  { name: 'SDDM', media: build(
    import.meta.glob<string>('/src/assets/sddm/**/*.{jpg,jpeg,png,webp,avif,gif,mp4,webm,ogg,ogv,mov,JPG,JPEG,PNG,WEBP,AVIF,GIF,MP4,WEBM,MOV}', { eager: true, query: '?url', import: 'default' }),
    import.meta.glob<{ url: string }>('/src/assets/sddm/**/*.asset.json', { eager: true, import: 'default' }),
  ) },
  { name: 'Hyprland', media: build(
    import.meta.glob<string>('/src/assets/hyprland/**/*.{jpg,jpeg,png,webp,avif,gif,mp4,webm,ogg,ogv,mov,JPG,JPEG,PNG,WEBP,AVIF,GIF,MP4,WEBM,MOV}', { eager: true, query: '?url', import: 'default' }),
    import.meta.glob<{ url: string }>('/src/assets/hyprland/**/*.asset.json', { eager: true, import: 'default' }),
  ) },
  { name: 'Rofi', media: build(
    import.meta.glob<string>('/src/assets/rofi/**/*.{jpg,jpeg,png,webp,avif,gif,mp4,webm,ogg,ogv,mov,JPG,JPEG,PNG,WEBP,AVIF,GIF,MP4,WEBM,MOV}', { eager: true, query: '?url', import: 'default' }),
    import.meta.glob<{ url: string }>('/src/assets/rofi/**/*.asset.json', { eager: true, import: 'default' }),
  ) },
  { name: 'Waybar', media: build(
    import.meta.glob<string>('/src/assets/waybar/**/*.{jpg,jpeg,png,webp,avif,gif,mp4,webm,ogg,ogv,mov,JPG,JPEG,PNG,WEBP,AVIF,GIF,MP4,WEBM,MOV}', { eager: true, query: '?url', import: 'default' }),
    import.meta.glob<{ url: string }>('/src/assets/waybar/**/*.asset.json', { eager: true, import: 'default' }),
  ) },
  { name: 'More', media: build(
    import.meta.glob<string>('/src/assets/more/**/*.{jpg,jpeg,png,webp,avif,gif,mp4,webm,ogg,ogv,mov,JPG,JPEG,PNG,WEBP,AVIF,GIF,MP4,WEBM,MOV}', { eager: true, query: '?url', import: 'default' }),
    import.meta.glob<{ url: string }>('/src/assets/more/**/*.asset.json', { eager: true, import: 'default' }),
  ) },
];
