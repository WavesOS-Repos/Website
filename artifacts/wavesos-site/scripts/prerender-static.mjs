import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const indexPath = path.join(root, 'dist/public/index.html');
const rootPlaceholder = '<div id="root"></div>';

process.env.WAVESOS_PRERENDER = '1';

const vite = await createServer({
  configFile: path.join(root, 'vite.config.ts'),
  root,
  mode: 'production',
  appType: 'custom',
  server: {
    middlewareMode: true,
    hmr: false,
  },
  optimizeDeps: {
    noDiscovery: true,
    entries: [],
  },
});

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.tsx');
  const markup = renderToString(createElement(App));
  const html = await readFile(indexPath, 'utf8');

  if (!html.includes(rootPlaceholder)) {
    throw new Error('Could not find the app root in the production HTML.');
  }

  await writeFile(
    indexPath,
    html.replace(rootPlaceholder, `<div id="root">${markup}</div>`),
    'utf8',
  );
} finally {
  await vite.close();
}
