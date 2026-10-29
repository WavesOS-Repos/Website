import { createFileRoute } from "@tanstack/react-router";
import WavesSite from "@/components/wavesos/WavesSite";

const TITLE = "WavesOS — Arch Linux + Hyprland Rice & Installer";
const DESC =
  "WavesOS is a free, open-source Arch Linux + Hyprland rice. One installer sets up Waybar, Rofi, Matugen colors, GTK/Qt themes, Kitty, Hyprlock and SDDM.";
const IMG = "https://wavesos.org/wavesos-wallpaper-1280.webp";

const jsonLd = [
  { "@context": "https://schema.org", "@type": "WebSite", name: "WavesOS", url: "https://wavesos.org", description: DESC },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "WavesOS (WavesHyprland)",
    applicationCategory: "DesktopEnhancementApplication",
    operatingSystem: "Arch Linux",
    url: "https://wavesos.org",
    image: IMG,
    downloadUrl: "https://github.com/WavesOS-Repos/WavesHyprland/archive/refs/heads/main.zip",
    codeRepository: "https://github.com/WavesOS-Repos/WavesHyprland",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@type": "Person", name: "Tarang Verma" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WavesOS",
    url: "https://wavesos.org",
    logo: "https://wavesos.org/wavesos-logo.jpg",
    sameAs: [
      "https://github.com/WavesOS-Repos/WavesHyprland",
      "https://www.reddit.com/r/WavesOS/",
      "https://discord.gg/y3p9J4z75",
    ],
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      {
        name: "keywords",
        content:
          "WavesOS, WavesHyprland, Hyprland rice, Arch Linux Hyprland, Hyprland dotfiles, Hyprland installer, Wayland desktop, Waybar themes, Rofi themes, Matugen, Linux ricing",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:site_name", content: "WavesOS" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://wavesos.org/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [
      { rel: "canonical", href: "https://wavesos.org/" },
      { rel: "preload", as: "image", href: "/wavesos-wallpaper-1280.webp", type: "image/webp" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: WavesSite,
});
