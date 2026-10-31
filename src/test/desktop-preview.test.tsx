import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { DesktopPreview } from '@/components/wavesos/DesktopPreview';
import WavesSite from '@/components/wavesos/WavesSite';
import { mediaFromFiles, nextPreviewIndex } from '@/components/wavesos/preview-media';

afterEach(cleanup);

describe('Desktop preview media', () => {
  it('includes screenshots, GIFs, and videos automatically in filename order', () => {
    const media = mediaFromFiles({
      '/10-workflow.mp4.asset.json': '/movie.mp4',
      '/02-launcher.gif': '/launcher.gif',
      '/01-desktop.webp': '/desktop.webp',
      '/README.md': '/README.md',
    });
    expect(media).toEqual([
      { src: '/desktop.webp', label: 'desktop', kind: 'image' },
      { src: '/launcher.gif', label: 'launcher', kind: 'image' },
      { src: '/movie.mp4', label: 'workflow', kind: 'video' },
    ]);
  });

  it('wraps previous and next around the gallery ends', () => {
    expect(nextPreviewIndex(0, -1, 3)).toBe(2);
    expect(nextPreviewIndex(2, 1, 3)).toBe(0);
    expect(nextPreviewIndex(0, 1, 0)).toBe(0);
  });

  it('clicking a picture advances and previous returns from video to GIF', () => {
    render(<DesktopPreview media={[
      { src: '/desktop.webp', label: 'Desktop', kind: 'image' },
      { src: '/launcher.gif', label: 'Launcher', kind: 'image' },
      { src: '/workflow.mp4', label: 'Workflow', kind: 'video' },
    ]} />);
    fireEvent.click(screen.getByRole('button', { name: 'Next desktop preview' }));
    expect(screen.getByRole('img', { name: 'Launcher' })).toHaveAttribute('src', '/launcher.gif');
    fireEvent.click(screen.getByRole('button', { name: 'Next preview' }));
    expect(screen.getByLabelText('Workflow')).toHaveAttribute('src', '/workflow.mp4');
    fireEvent.click(screen.getByRole('button', { name: 'Previous preview' }));
    expect(screen.getByRole('img', { name: 'Launcher' })).toBeInTheDocument();
  });
});

describe('Theme preference', () => {
  it('switches to light and restores the saved light preference on remount', () => {
    window.localStorage.clear();
    const { unmount } = render(<WavesSite />);
    fireEvent.click(screen.getByRole('button', { name: 'Switch to light theme' }));
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(window.localStorage.getItem('wavesos-theme')).toBe('light');
    unmount();
    render(<WavesSite />);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
});
describe('Preview categories', () => {
  it('switches the gallery to the clicked category', () => {
    render(<DesktopPreview categories={[
      { name: 'Desktop', media: [{ src: '/d.png', label: 'Desk', kind: 'image' }] },
      { name: 'Hyprland', media: [{ src: '/h.png', label: 'Hypr', kind: 'image' }] },
    ]} />);
    expect(screen.getByRole('img', { name: 'Desk' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('tab', { name: 'Hyprland' }));
    expect(screen.getByRole('img', { name: 'Hypr' })).toHaveAttribute('src', '/h.png');
  });
});
