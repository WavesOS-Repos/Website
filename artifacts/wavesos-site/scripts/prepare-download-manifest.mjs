import { mkdir, readdir, writeFile } from 'node:fs/promises';

const downloadsDir = new URL('../public/downloads/', import.meta.url);
const previewsDir = new URL('../public/previews/', import.meta.url);
const sourceFile = new URL('../src/download-source.ts', import.meta.url);
const previewsFile = new URL('../src/preview-manifest.ts', import.meta.url);

await mkdir(downloadsDir, { recursive: true });
await mkdir(previewsDir, { recursive: true });

const zipFiles = (await readdir(downloadsDir, { withFileTypes: true }))
  .filter((entry) => entry.isFile() && /\.zip$/i.test(entry.name))
  .map((entry) => entry.name)
  .sort((a, b) => a.localeCompare(b));

const selectedZip =
  zipFiles.find((filename) => filename.toLowerCase() === 'waveshyprland.zip') ??
  zipFiles[0] ??
  null;

await writeFile(
  sourceFile,
  `export const localArchiveFilename: string | null = ${JSON.stringify(selectedZip)};\n`,
  'utf8',
);

const previewSlots = [
  { label: 'Desktop', slug: 'desktop' },
  { label: 'Waybar', slug: 'waybar' },
  { label: 'Rofi', slug: 'rofi' },
  { label: 'Lock screen', slug: 'lock-screen' },
  { label: 'SDDM', slug: 'sddm' },
  { label: 'Light / dark themes', slug: 'light-dark' },
];
const imageExtensions = ['.avif', '.webp', '.jpg', '.jpeg', '.png'];
const previewFilesOnDisk = (await readdir(previewsDir, { withFileTypes: true }))
  .filter((entry) => entry.isFile())
  .map((entry) => entry.name);

const previews = previewSlots.map(({ label, slug }) => {
  const filename = imageExtensions
    .map((extension) => `${slug}${extension}`)
    .map((candidate) =>
      previewFilesOnDisk.find(
        (filenameOnDisk) => filenameOnDisk.toLowerCase() === candidate,
      ),
    )
    .find(Boolean);

  return { label, file: filename ?? null };
});

await writeFile(
  previewsFile,
  `export const previews = ${JSON.stringify(previews)} as const;\n`,
  'utf8',
);
