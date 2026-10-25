import { mkdir, readdir, writeFile } from 'node:fs/promises';

const downloadsDir = new URL('../public/downloads/', import.meta.url);
const sourceFile = new URL('../src/download-source.ts', import.meta.url);

await mkdir(downloadsDir, { recursive: true });

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
