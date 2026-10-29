import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Images } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { previews } from './preview-manifest';
import { nextPreviewIndex, type PreviewMedia } from './preview-media';

export function DesktopPreview({ media = previews }: { media?: PreviewMedia[] }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [failedSource, setFailedSource] = useState<string | null>(null);
  const item = media[index] ?? media[0];

  useEffect(() => {
    const linkEls: HTMLLinkElement[] = [];
    for (const m of media) {
      if (m.kind !== 'image') continue;
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = m.src;
      document.head.appendChild(link);
      linkEls.push(link);
    }
    return () => { linkEls.forEach((el) => el.remove()); };
  }, [media]);

  const move = (step: number) => {
    setDirection(step);
    setIndex((current) => nextPreviewIndex(current, step, media.length));
  };

  return (
    <section className="desktop-preview-section container" id="desktop-preview" aria-labelledby="desktop-preview-heading">
      <div className="gallery-intro">
        <h2 id="desktop-preview-heading">Take a look</h2>
        <span className="eyebrow">WavesOS / In motion</span>
      </div>
      <div className="desktop-preview" role="region" aria-roledescription="carousel" aria-label="WavesOS desktop media"
        onKeyDown={(event) => {
          if ((event.target as HTMLElement).tagName === 'VIDEO') return;
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault();
            move(event.key === 'ArrowLeft' ? -1 : 1);
          }
        }}>
        <div className="desktop-preview-stage">
          {item ? (
            <div key={item.src} className={`desktop-preview-slide ${direction < 0 ? 'from-left' : 'from-right'}`}>
              {failedSource === item.src ? (
                <div className="desktop-preview-empty"><Images size={28} /><p>This preview could not be loaded.</p></div>
              ) : item.kind === 'video' ? (
                <video className="desktop-preview-media" src={item.src} controls playsInline preload="metadata"
                  aria-label={item.label} onError={() => setFailedSource(item.src)} />
              ) : (
                <Button variant="ghost" className="desktop-preview-picture" aria-label="Next desktop preview"
                  title="Next desktop preview" onClick={() => move(1)} disabled={media.length < 2}>
                  <img className="desktop-preview-media" src={item.src} alt={item.label} decoding="async" loading="eager"
                    onError={() => setFailedSource(item.src)} />
                </Button>
              )}
            </div>
          ) : (
            <div className="desktop-preview-empty"><Images size={32} /><p>Desktop previews coming soon</p></div>
          )}
        </div>
        <div className="desktop-preview-toolbar">
          <div className="desktop-preview-status" aria-live="polite" aria-atomic="true">
            <span>{item?.label ?? 'WavesOS desktop'}</span>
            <span className="desktop-preview-count">{media.length ? `${index + 1} / ${media.length}` : '0 / 0'}</span>
          </div>
          <div className="desktop-preview-controls">
            <Button variant="ghost" size="icon" className="desktop-preview-arrow" aria-label="Previous preview" title="Previous preview"
              disabled={media.length < 2} onClick={() => move(-1)}><ArrowLeft size={18} /></Button>
            <Button variant="ghost" size="icon" className="desktop-preview-arrow" aria-label="Next preview" title="Next preview"
              disabled={media.length < 2} onClick={() => move(1)}><ArrowRight size={18} /></Button>
          </div>
        </div>
      </div>
    </section>
  );
}
