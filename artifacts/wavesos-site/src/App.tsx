import { useEffect, useState } from 'react';
import {
  ArrowDownToLine,
  ArrowUpRight,
  Check,
  Command,
  Github,
  Layers3,
  Moon,
  Monitor,
  Palette,
  Sun,
  Terminal,
  WandSparkles,
  Waypoints,
} from 'lucide-react';
import { SiDiscord, SiGithub, SiReddit } from 'react-icons/si';
import logoPath from '../../../attached_assets/logo_1792936887677.jpg';
import { localArchiveFilename } from '@/download-source';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';

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

function Home() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.localStorage.getItem('wavesos-theme') !== 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    window.localStorage.setItem('wavesos-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark((value) => !value);
  const external = { target: '_blank', rel: 'noreferrer' };

  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="container nav-inner">
          <a className="brand" href="#top" aria-label="WavesOS home" data-testid="link-home">
            <img src={logoPath} alt="WavesOS glowing W mark" />
            <span>WavesOS<small>Arch + Hyprland rice</small></span>
          </a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#experience">The experience</a>
            <a href="#stack">What’s inside</a>
            <a href="#install">Install</a>
          </nav>
          <div className="nav-actions">
            <button
              className="theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
              title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
              data-testid="button-theme-toggle"
            >
              {isDark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <a className="button small" href={ZIP_URL} download={DOWNLOAD_FILENAME} data-testid="link-download-nav">
              Download <ArrowDownToLine size={15} />
            </a>
          </div>
        </div>
      </header>

      <section className="hero container" id="top">
        <picture className="hero-wallpaper" aria-hidden="true">
          <source srcSet={WALLPAPER_WEBP_URL} type="image/webp" />
          <img
            src={WALLPAPER_JPEG_URL}
            alt=""
            width={1024}
            height={576}
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <div className="hero-content">
          <div className="eyebrow"><i className="live-dot" /> Arch Linux · Hyprland · WavesOS installer</div>
          <h1>Your system.<br /><span>In its element.</span></h1>
          <p className="hero-copy">
            WavesOS is an Arch Linux Hyprland rice installer for a desktop that feels considered from the first boot. One focused setup, ready to make your own.
          </p>
          <div className="hero-buttons">
            <a className="button" href={ZIP_URL} download={DOWNLOAD_FILENAME} data-testid="link-download-hero">
              Get the installer <ArrowDownToLine size={16} />
            </a>
            <a className="button outline" href={SOURCE_URL} {...external} data-testid="link-source-hero">
              Explore the source <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="hero-meta">
            <span><Check size={13} /> Runs as a normal user</span>
            <span><Terminal size={13} /> Sudo only when needed</span>
            <span><Command size={13} /> Installer menu included</span>
          </div>
        </div>
        <div className="hero-index">01 / MADE FOR YOUR WORKFLOW</div>
      </section>

      <div className="signal-strip">
        <div className="container signal-inner">
          <div className="signal-label">A desktop, tuned end to end</div>
          <div className="signals">
            <span><Waypoints /> Hyprland compositor</span>
            <span><Palette /> Matugen theming</span>
            <span><Layers3 /> Waybar workflow</span>
            <span><Monitor /> Arch Linux base</span>
          </div>
        </div>
      </div>

      <section className="section container" id="experience">
        <div className="section-heading">
          <div>
            <div className="eyebrow">02 / The experience</div>
            <h2>A workspace with<br />a point of view.</h2>
          </div>
          <p>Not another distro image. WavesOS brings together a coordinated set of desktop tools, visuals, and quality-of-life choices—then lets you decide how far to take it.</p>
        </div>
        <div className="feature-layout">
          <div className="feature-visual" role="img" aria-label="WavesOS blue wave desktop wallpaper">
            <div className="visual-label">WavesOS / desktop environment<b>Quietly capable.</b></div>
          </div>
          <div className="feature-list">
            <article className="feature-row">
              <div className="feature-icon"><WandSparkles size={20} /></div>
              <div><h3>One visual language</h3><p>Matugen ties color into the setup so your desktop feels like one place, not a pile of packages.</p></div>
            </article>
            <article className="feature-row">
              <div className="feature-icon"><Waypoints size={20} /></div>
              <div><h3>Designed around Hyprland</h3><p>A dynamic Wayland compositor is the center of the experience, with Rofi and Waybar close at hand.</p></div>
            </article>
            <article className="feature-row">
              <div className="feature-icon"><Terminal size={20} /></div>
              <div><h3>You stay in control</h3><p>Start with the guided menu or choose the full install. The installer only asks for sudo when it needs it.</p></div>
            </article>
            <article className="feature-row">
              <div className="feature-icon"><Github size={20} /></div>
              <div><h3>Open source by nature</h3><p>Community maintained and inspectable. Explore the scripts before you run anything.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="section stack-section" id="stack">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">03 / The toolkit</div>
              <h2>Every layer<br />has a purpose.</h2>
            </div>
            <p>A carefully assembled collection of familiar tools, brought into a single desktop workflow.</p>
          </div>
          <div className="stack-grid">
            {[
              ['01', 'Hyprland', 'Dynamic Wayland compositor'],
              ['02', 'Matugen', 'Palette generation from your wallpaper'],
              ['03', 'Wallfliper', 'Wallpaper rotation and discovery'],
              ['04', 'Thunar', 'Practical file management'],
              ['05', 'Relax GTK', 'A cohesive GTK appearance'],
              ['06', 'Waybar + Rofi', 'Status, launch, and switch'],
              ['07', 'wlogout + Hyprlock', 'Logout controls and lock screen'],
              ['08', 'Conky + qylock', 'Desktop detail and SDDM greeter'],
            ].map(([number, name, description]) => (
              <article className="stack-item" key={number} data-testid={`stack-item-${number}`}>
                <span className="stack-number">{number} / COMPONENT</span>
                <h3>{name}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container" id="install">
        <div className="install-layout">
          <div className="install-copy">
            <div className="eyebrow">04 / Begin here</div>
            <h2>From shell<br />to shore.</h2>
            <p>From the directory containing your <code>WavesHyprland</code> folder, run the setup commands below.</p>
            <a className="button outline" href={SOURCE_URL} {...external} data-testid="link-inspect-source">
              Read the installer source <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="terminal" aria-label="Installation commands">
            <div className="terminal-top">
              <span className="terminal-dots"><i /><i /><i /></span>
              <span>bash — wavesos setup</span>
              <span>⌘</span>
            </div>
            <div className="terminal-body">
              <span className="term-code"><span className="term-prompt">$</span> cd WavesHyprland</span>
              <span className="term-code"><span className="term-prompt">$</span> chmod +x install.sh scripts/*.sh</span>
              <div><span className="term-dim"># Guided installer menu</span></div>
              <span className="term-code"><span className="term-prompt">$</span> ./install.sh</span>
              <div><span className="term-dim"># Or select the complete setup</span></div>
              <span className="term-code"><span className="term-prompt">$</span> ./install.sh --all</span>
              <div className="term-green">✓ Sudo is requested only when needed</div>
            </div>
            <div className="terminal-note">Review the README first. Run the installer as a normal user; it requests sudo only when needed.</div>
          </div>
        </div>
      </section>

      <section className="closing container">
        <div className="closing-panel">
          <div className="closing-copy">
            <div className="eyebrow">wavesos.live / get started</div>
            <h2>Make room for flow.</h2>
            <p>Take the installer. Make the desktop yours.</p>
          </div>
          <div className="closing-action">
            <a className="button" href={ZIP_URL} download={DOWNLOAD_FILENAME} data-testid="link-download-final">
              Download WavesOS <ArrowDownToLine size={16} />
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="brand" href="#top" data-testid="link-footer-home">
            <img src={logoPath} alt="" />
            <span>WavesOS<small>Arch + Hyprland rice</small></span>
          </a>
          <div className="footer-credit">Developed by <strong>Tarang Verma</strong></div>
          <div className="footer-socials" aria-label="WavesOS community links">
            <a className="social-link" href={DISCORD_URL} {...external} aria-label="WavesOS Discord server" title="Discord" data-testid="link-discord">
              <SiDiscord aria-hidden="true" />
              <span>Discord</span>
            </a>
            <a className="social-link" href={REDDIT_URL} {...external} aria-label="WavesOS Reddit community" title="Reddit" data-testid="link-reddit">
              <SiReddit aria-hidden="true" />
              <span>Reddit</span>
            </a>
            <a className="social-link" href={SOURCE_URL} {...external} aria-label="WavesHyprland on GitHub" title="GitHub" data-testid="link-github-source">
              <SiGithub aria-hidden="true" />
              <span>GitHub</span>
            </a>
          </div>
          <span className="footer-domain">wavesos.live</span>
        </div>
      </footer>
    </main>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

export default App;
