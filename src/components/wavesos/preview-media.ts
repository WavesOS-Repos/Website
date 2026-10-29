export type PreviewMedia = { src: string; label: string; kind: 'image' | 'video' };

export function mediaFromFiles(files: Record<string, string>): PreviewMedia[] {
  return Object.entries(files)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .flatMap(([path, src]) => {
      const filename = path.split('/').at(-1)?.replace(/\.asset\.json$/i, '') ?? '';
      const extension = filename.split('.').at(-1)?.toLowerCase();
      const kind = extension && ['mp4', 'webm', 'ogg', 'ogv', 'mov'].includes(extension) ? 'video' : 'image';
      if (!extension || !['jpg', 'jpeg', 'png', 'webp', 'avif', 'gif', 'mp4', 'webm', 'ogg', 'ogv', 'mov'].includes(extension)) return [];
      return [{ src, kind, label: filename.replace(/\.[^.]+$/, '').replace(/^[\d]+[-_ ]*/, '').replace(/[-_]/g, ' ') || 'Desktop preview' }];
    });
}

export function nextPreviewIndex(current: number, direction: number, total: number) {
  return total > 0 ? ((current + direction) % total + total) % total : 0;
}