import { useEffect, useState } from 'react';
import type React from 'react';
import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  FileCode2,
  FolderTree,
  ScrollText,
  Command,
  Github,
  Layers3,
  Menu,
  Moon,
  Monitor,
  Palette,
  Sun,
  Terminal,
  WandSparkles,
  Waypoints,
  X,
} from 'lucide-react';
import { SiDiscord, SiGithub, SiReddit } from 'react-icons/si';
import { localArchiveFilename } from './download-source';
import { previews } from './preview-manifest';

const GITHUB_ZIP_URL = 'https://github.com/WavesOS-Repos/WavesHyprland/archive/refs/heads/main.zip';
const ZIP_URL = localArchiveFilename
  ? `${import.meta.env.BASE_URL}downloads/${encodeURIComponent(localArchiveFilename)}`
  : GITHUB_ZIP_URL;
const SOURCE_URL = 'https://github.com/WavesOS-Repos/WavesHyprland';
const DISCORD_URL = 'https://discord.gg/y3p9J4z75';
const REDDIT_URL = 'https://www.reddit.com/r/WavesOS/';
const DOWNLOAD_FILENAME = localArchiveFilename ?? undefined;
const WALLPAPER_WEBP_URL = `${import.meta.env.BASE_URL}wavesos-wallpaper.webp`;
const WALLPAPER_JPEG_URL = `${import.meta.env.BASE_URL}wavesos-wallpaper.jpg`;
const LOGO_URL = `${import.meta.env.BASE_URL}wavesos-logo.jpg`;

const faqs: { q: string; a: React.ReactNode; source?: boolean }[] = [
  { q: 'What is WavesOS?', source: true, a: 'WavesOS is an Arch Linux + Hyprland rice delivered by the WavesHyprland installer. It sets up a coordinated desktop—compositor, bar, launcher, theming, lock and login—so you start from something that already feels intentional, not from an empty tty and a pile of unrelated dotfiles.' },
  { q: 'Is WavesOS a full Linux distribution?', a: 'No. It isn’t a separate distro like Omarchy. You stay on Arch. WavesOS is the desktop layer and installer that makes Hyprland usable and cohesive from the first session.' },
  { q: 'Is WavesOS free and open source?', source: true, a: 'Yes. The installer and configuration live in the open as WavesHyprland on GitHub. You can read every script before you run it.' },
  { q: 'Do I need Quickshell or a custom desktop shell?', a: 'No. WavesOS doesn’t replace Hyprland with a heavy shell stack. It stays close to Hyprland itself: modular config, scripts and familiar tools like Waybar and Rofi.' },
  { q: 'How do settings work?', a: 'There’s no separate settings app hiding everything behind a proprietary panel. Practical controls use scripts and Hyprland configuration—including a Hyprland settings script that edits your config directly. You keep the Arch habit of knowing where your files live.' },
  { q: 'Can I still customize everything?', a: 'Yes. The point is a strong default, not a cage. Configs are modular and editable—install for a finished baseline, then change what you care about.' },
  { q: 'What hardware do I need?', a: 'A machine that runs Arch and Hyprland comfortably: 64-bit, with working GPU drivers for Wayland. Exactly like any modern Hyprland setup—nothing exotic beyond that.' },
  { q: 'How do updates work?', a: <>You update Arch as usual with <code>pacman</code> or your normal workflow. WavesOS doesn’t take over your system updater. Desktop config lives in your home directory, so you stay in control of what changes.</> },
];

function Home() {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let dark = true;
    try {
      dark = window.localStorage.getItem('wavesos-theme') !== 'light';
    } catch {
      // Continue with the dark default when storage is unavailable.
    }
    setIsDark(dark);
    document.documentElement.classList.toggle('dark', dark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTheme = () => setIsDark((value) => {
    const next = !value;
    try {
      window.localStorage.setItem('wavesos-theme', next ? 'dark' : 'light');
    } catch {
      // Theme remains available for the current session.
    }
    return next;
  });
  const external = { target: '_blank', rel: 'noreferrer' };
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="container nav-inner">
          <a className="brand" href="#top" aria-label="WavesOS home" data-testid="link-home" onClick={closeMenu}>
            <img src={LOGO_URL} alt="" width={38} height={38} />
            <span>WavesOS<small>ARCH / HYPRLAND</small></span>
          </a>
          <nav className={`nav-links${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#stack" onClick={closeMenu}>The toolkit</a>
            <a href="#install" onClick={closeMenu}>Install</a>
            <a href="#philosophy" onClick={closeMenu}>Philosophy</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
          </nav>
          <div className="nav-actions">
            <button className="theme-toggle" type="button" onClick={toggleTheme}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
              title={`Switch to ${isDark ? 'light' : 'dark'} theme`} data-testid="button-theme-toggle">
              {isDark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <a className="button small nav-download" href={ZIP_URL} download={DOWNLOAD_FILENAME} data-testid="link-download-nav">
              Download <ArrowDownToLine size={15} />
            </a>
            <button className="menu-toggle" type="button" aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setMenuOpen((open) => !open)}>
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </header>

      <section className="hero container" id="top">
        <picture className="hero-wallpaper" aria-hidden="true">
          <source srcSet={WALLPAPER_WEBP_URL} type="image/webp" />
          <img src={WALLPAPER_JPEG_URL} alt="" width={1024} height={576} fetchPriority="high" decoding="async" />
        </picture>
        <div className="hero-content">
          <div className="eyebrow"><i className="live-dot" /> An Arch + Hyprland desktop, brought together</div>
          <h1>Everything matches — <span>because everything listens.</span></h1>
          <p className="hero-copy">
            One wallpaper drives Matugen, Waybar, Rofi, terminal, GTK, and lock — the whole rice stays in conversation.
          </p>
          <div className="hero-buttons">
            <a className="button" href={ZIP_URL} download={DOWNLOAD_FILENAME} data-testid="link-download-hero">
              Download the installer <ArrowDownToLine size={16} />
            </a>
            <a className="button outline" href={SOURCE_URL} {...external} data-testid="link-source-hero">
              View source <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="hero-meta">
            <span><Check size={13} /> Open source</span>
            <span><Terminal size={13} /> Guided or full install</span>
            <span><Command size={13} /> You stay in control</span>
          </div>
        </div>
        <div className="hero-aside"><span>01</span><i /> A desktop in sync</div>
        <div className="hero-index">WAVESOS / 2025</div>
      </section>

      <div className="signal-strip">
        <div className="container signal-inner">
          <div className="signal-label">One change. Every layer.</div>
          <div className="signals">
            <span><Waypoints /> Hyprland</span>
            <span><Palette /> Matugen + Wallfliper</span>
            <span><Layers3 /> Waybar + Rofi</span>
            <span><Sun /> GTK + Qt themes</span>
            <span><Monitor /> qylock + SDDM</span>
          </div>
        </div>
      </div>

      <section className="section container" id="experience">
        <div className="section-heading">
          <div>
            <div className="eyebrow">02 / Why WavesOS</div>
            <h2>A desktop is more<br />than its windows.</h2>
          </div>
          <p>Most setups stop at the compositor. WavesOS connects the details around it—so your colors, controls and daily tools feel like parts of the same place.</p>
        </div>
        <aside className="manifesto-panel" aria-label="The WavesOS manifesto">
          <blockquote className="manifesto-quote">
            “Made to be shown off. <span>Built to disappear.”</span>
          </blockquote>
          <div className="manifesto-copy">
            <p>WavesOS is for people who care how Hyprland looks—and don’t want to rebuild it every week. It should feel finished when you log in, and still feel right when you stop tinkering.</p>
            <p>One wallpaper sets the tone. Matugen, Waybar, Rofi, terminal, and lock screens follow. You’re free to dig into the configs; you shouldn’t have to in order to get a desktop that matches.</p>
          </div>
        </aside>
        <div className="feature-layout">
          <div className="feature-visual" role="img" aria-label="WavesOS desktop preview showing wallpaper-led desktop styling">
            <div className="visual-grid" aria-hidden="true"><span>W / 01</span><span>COLOR, IN MOTION</span></div>
            <div className="visual-label">WavesOS / desktop system<b>Everything in its element.</b></div>
          </div>
          <div className="feature-list">
            <article className="feature-row">
              <div className="feature-icon"><WandSparkles size={20} /></div>
              <div><h3>Color has a through-line</h3><p>Matugen carries wallpaper colors into your apps and desktop chrome. Change the scene, keep the system together.</p></div>
            </article>
            <article className="feature-row">
              <div className="feature-icon"><Waypoints size={20} /></div>
              <div><h3>Hyprland at the center</h3><p>Wallfliper, Waybar and Rofi work around a tuned Wayland workflow, not beside it.</p></div>
            </article>
            <article className="feature-row">
              <div className="feature-icon"><Terminal size={20} /></div>
              <div><h3>Install on your terms</h3><p>Use the guided menu, or choose the complete setup. The scripts are there to inspect before you run them.</p></div>
            </article>
            <article className="feature-row">
              <div className="feature-icon"><Github size={20} /></div>
              <div><h3>Yours to understand</h3><p>Open source, community shaped, and built on your Arch install—not a mystery image.</p></div>
            </article>
          </div>
        </div>
        <div className="gallery-intro">
          <span className="eyebrow">A closer look</span>
          <p>Six screenshot slots · WebP or AVIF, 1200 × 750 · add them in <code>public/previews</code></p>
        </div>
        <div className="preview-gallery" aria-label="WavesOS desktop preview gallery">
          {previews.map((preview, index) => (
            <figure className={`preview-card preview-card-${index + 1}`} key={preview.label}>
              {preview.file ? (
                <img className="preview-image" src={`${import.meta.env.BASE_URL}previews/${preview.file}`}
                  alt={`${preview.label} screenshot of the WavesOS desktop`} width={1200} height={750}
                  loading="lazy" decoding="async" />
              ) : (
                <div className="preview-empty" aria-label={`${preview.label} preview placeholder. Add an image in public/previews.`}>
                  <span className="placeholder-index">0{index + 1}</span>
                  <span className="placeholder-title">{preview.label}</span>
                  <span className="placeholder-note">Screenshot slot / replace in public/previews</span>
                </div>
              )}
              <figcaption className="preview-caption">{preview.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section stack-section" id="stack">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">03 / The toolkit</div>
              <h2>Separate tools.<br />One visual logic.</h2>
            </div>
            <p>A wallpaper-led system works because each layer has a job. WavesHyprland installs the pieces and gives them a shared language.</p>
          </div>
          <div className="stack-grid">
            <article className="stack-item"><span className="stack-number">01 / THE CANVAS</span><h3>Hyprland + Lua</h3><p>A configurable Wayland compositor with a workflow shaped around it.</p></article>
            <article className="stack-item"><span className="stack-number">02 / THE PALETTE</span><h3>Matugen + Wallfliper</h3><p>Wallpaper rotation and generated colors, carried through the system.</p></article>
            <article className="stack-item"><span className="stack-number">03 / THE STATUS</span><h3>Waybar</h3><p>Multiple layouts and a layout switcher, with styles driven by the active Matugen colors.</p></article>
            <article className="stack-item"><span className="stack-number">04 / THE LAUNCHER</span><h3>Rofi</h3><p>A multi-style launcher and theme switcher, with previews and colors matched to the wallpaper.</p></article>
            <article className="stack-item"><span className="stack-number">05 / THE APP SURFACE</span><h3>GTK + Qt themes</h3><p>Dark and light switches coordinate Relax GTK, Kvantum and Relax icon packs across apps.</p></article>
            <article className="stack-item"><span className="stack-number">06 / THE SESSION</span><h3>Kitty, Hyprlock + qylock</h3><p>Matugen-colored terminal, Hyprlock session lock and SDDM login themed through qylock.</p></article>
          </div>
          <div className="stack-footnote"><span className="stack-footnote-mark">↳</span> Plus Thunar, wlogout, cliphist, screenshots, brightness and volume controls, nightlight, and other daily-use scripts.</div>
        </div>
      </section>

      <section className="section container" id="install">
        <div className="install-layout">
          <div className="install-copy">
            <div className="eyebrow">04 / Start with a clean Arch install</div>
            <h2>Your system.<br />Your call.</h2>
            <p>Download or clone <code>WavesHyprland</code>, review the README, then run the installer from its directory.</p>
            <a className="button outline" href={SOURCE_URL} {...external} data-testid="link-inspect-source">
              Read the install notes <ArrowUpRight size={15} />
            </a>
            <div className="install-note"><span className="install-note-icon"><Check size={14} /></span><p>Run as a normal user. <strong>Do not launch with sudo.</strong> The installer requests elevated access only for steps that need it.</p></div>
          </div>
          <div className="terminal" aria-label="Installation commands">
            <div className="terminal-top">
              <span className="terminal-dots"><i /><i /><i /></span>
              <span>bash <b>/</b> WavesHyprland</span>
              <span className="terminal-lock">INSTALL</span>
            </div>
            <div className="terminal-body">
              <div className="terminal-comment"># Enter the project directory</div>
              <div className="term-code"><span className="term-prompt">$</span> cd WavesHyprland</div>
              <div className="term-code"><span className="term-prompt">$</span> chmod +x install.sh scripts/*.sh</div>
              <div className="terminal-comment terminal-comment-gap"># Guided installer menu</div>
              <div className="term-code"><span className="term-prompt">$</span> ./install.sh</div>
              <div className="terminal-comment terminal-comment-gap"># Or select the complete setup</div>
              <div className="term-code"><span className="term-prompt">$</span> ./install.sh --all</div>
            </div>
            <div className="terminal-note"><span className="terminal-status"><i /> Ready when you are</span><span>normal user · sudo when needed</span></div>
          </div>
        </div>
      </section>

      <section className="section heart-section" id="philosophy">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">05 / The heart of Hyprland</div>
              <h2>Simple<br />on purpose.</h2>
            </div>
            <p>Hyprland is a modern Wayland compositor built on one idea: you shape the desktop through configuration you can read. WavesOS respects that.</p>
          </div>
          <aside className="manifesto-panel heart-panel" aria-label="The WavesOS philosophy">
            <blockquote className="manifesto-quote">
              “Less setup. <span>Nothing hidden.”</span>
            </blockquote>
            <div className="manifesto-copy">
              <p>WavesOS doesn’t wrap your rice in a heavy shell layer that’s hard to touch, and there’s no mandatory mega settings app standing between you and your files. A Hyprland-focused settings script and clear, modular configs edit the same configuration Hyprland already reads.</p>
              <p>Arch’s strength is ownership—the terminal, the paths, the ability to change one file and know exactly what happened. WavesOS keeps that heart. It removes the painful first-time grind of assembling a rice from scratch, then gets out of the way.</p>
              <p className="heart-result">A desktop that’s convenient for everyday work—and still yours.</p>
            </div>
          </aside>
          <div className="pillar-grid">
            <article className="stack-item pillar">
              <span className="stack-number">01 / <FileCode2 size={13} /></span>
              <h3>Readable configs</h3>
              <p>Modular Hyprland files you can open, understand and change—no generated maze.</p>
            </article>
            <article className="stack-item pillar">
              <span className="stack-number">02 / <ScrollText size={13} /></span>
              <h3>Scripts, not black boxes</h3>
              <p>Practical controls are plain shell scripts. Read them, tweak them, or replace them.</p>
            </article>
            <article className="stack-item pillar">
              <span className="stack-number">03 / <FolderTree size={13} /></span>
              <h3>Arch ownership</h3>
              <p>Your files live in <code>~/.config</code>. Your updates stay with <code>pacman</code>. You stay in charge.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section container" id="faq">
        <div className="section-heading">
          <div>
            <div className="eyebrow">06 / Common questions</div>
            <h2>Before you<br />install.</h2>
          </div>
          <p>Straight answers about what WavesOS is, what it isn’t, and how it fits into your Arch system.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details className="faq-item" key={faq.q} open={index === 0}>
              <summary>
                <span className="faq-index">{String(index + 1).padStart(2, '0')}</span>
                <span className="faq-q">{faq.q}</span>
                <ChevronDown className="faq-chevron" size={18} aria-hidden="true" />
              </summary>
              <div className="faq-a">
                <p>{faq.a}</p>
                {faq.source && (
                  <a className="faq-link" href={SOURCE_URL} {...external}>Explore the source <ArrowRight size={13} /></a>
                )}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="closing container">
        <div className="closing-panel">
          <div className="closing-orbit" aria-hidden="true"><span>W</span></div>
          <div className="closing-copy">
            <div className="eyebrow">wavesos.live / make it yours</div>
            <h2>Hyprland,<br />finished.</h2>
            <p>Start with the installer. Shape the desktop around you.</p>
          </div>
          <div className="closing-action">
            <a className="button" href={ZIP_URL} download={DOWNLOAD_FILENAME} data-testid="link-download-final">
              Get WavesOS <ArrowRight size={16} />
            </a>
            <span>Open source · Arch Linux · Hyprland</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="brand" href="#top" data-testid="link-footer-home">
            <img src={LOGO_URL} alt="" width={38} height={38} />
            <span>WavesOS<small>HYPRLAND, FINISHED.</small></span>
          </a>
          <div className="footer-credit">Developed by <strong>Tarang Verma</strong></div>
          <div className="footer-socials" aria-label="WavesOS community links">
            <a className="social-link" href={DISCORD_URL} {...external} aria-label="WavesOS Discord server" title="Discord" data-testid="link-discord"><SiDiscord aria-hidden="true" /><span>Discord</span></a>
            <a className="social-link" href={REDDIT_URL} {...external} aria-label="WavesOS Reddit community" title="Reddit" data-testid="link-reddit"><SiReddit aria-hidden="true" /><span>Reddit</span></a>
            <a className="social-link" href={SOURCE_URL} {...external} aria-label="WavesHyprland on GitHub" title="GitHub" data-testid="link-github-source"><SiGithub aria-hidden="true" /><span>GitHub</span></a>
          </div>
          <a className="footer-domain" href="https://wavesos.live" {...external}>wavesos.live <ArrowUpRight size={12} /></a>
        </div>
      </footer>
    </main>
  );
}

function App() {
  return <Home />;
}

export default App;
