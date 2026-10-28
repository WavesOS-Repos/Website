import { createReadStream, statSync } from 'node:fs';
import { join, extname, normalize } from 'node:path';
import { createServer } from 'node:http';

const ROOT = join(import.meta.dirname, 'dist');
const PORT = Number(process.env.PORT ?? 8080);
const HOST = process.env.HOST ?? '0.0.0.0';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.woff2': 'font/woff2',
  '.zip': 'application/zip',
};

const IMMUTABLE = /\/assets\/.+-[a-zA-Z0-9_]{8,}\.(?:js|css|webp|jpg|jpeg|png|woff2|svg)$/;
const CACHE_IMMUTABLE = 'public, max-age=31536000, immutable';
const CACHE_STATIC = 'public, max-age=3600';
const CACHE_HTML = 'public, max-age=0, must-revalidate';

createServer((req, res) => {
  const url = new URL(req.url, `http://${HOST}:${PORT}`);
  let pathname = decodeURIComponent(url.pathname);

  if (pathname === '/') pathname = '/index.html';

  let filePath = normalize(join(ROOT, pathname));
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  try {
    const stat = statSync(filePath);
    if (stat.isDirectory()) {
      filePath = join(filePath, 'index.html');
      statSync(filePath);
    }
  } catch {
    filePath = join(ROOT, 'index.html');
    try {
      statSync(filePath);
    } catch {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
  }

  const ext = extname(filePath);
  const headers = { 'Content-Type': MIME[ext] ?? 'application/octet-stream' };

  if (IMMUTABLE.test(filePath)) {
    headers['Cache-Control'] = CACHE_IMMUTABLE;
  } else if (ext === '.html') {
    headers['Cache-Control'] = CACHE_HTML;
  } else {
    headers['Cache-Control'] = CACHE_STATIC;
  }

  res.writeHead(200, headers);
  createReadStream(filePath).pipe(res);
}).listen(PORT, HOST, () => {
  console.log(`WavesOS production server running at http://${HOST}:${PORT}`);
});
