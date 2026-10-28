import { createFileRoute } from "@tanstack/react-router";
import WavesSite from "@/components/wavesos/WavesSite";

const SITE = "https://wavesos.org";
const IMAGE = `${SITE}/wavesos-wallpaper-1280.webp`;
const title = "WavesOS — Arch Linux + Hyprland Rice & Installer";
const description =
  "WavesOS is a free, open-source Arch Linux + Hyprland rice. One installer sets up Waybar, Rofi, Matugen colors, GTK/Qt themes, Kitty, Hyprlock and SDDM.";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "WavesOS",
    url: SITE,
    description,
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "WavesOS (WavesHyprland)",
    applicationCategory: "DesktopEnhancementApplication",
    operatingSystem: "Arch Linux",
    url: SITE,
    image: IMAGE,
    description,
    downloadUrl: "https://github.com/WavesOS-Repos/WavesHyprland/archive/refs/heads/main.zip",
    codeRepository: "https://github.com/WavesOS-Repos/WavesHyprland",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@type": "Person", name: "Tarang Verma" },
    keywords:
      "Arch Linux, Hyprland, Hyprland rice, Hyprland dotfiles, Wayland, Waybar, Rofi, Matugen, Linux desktop, ricing",
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WavesOS",
    url: SITE,
    logo: `${SITE}/wavesos-logo.jpg`,
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
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "WavesOS, WavesHyprland, Hyprland rice, Arch Linux Hyprland, Hyprland dotfiles, Hyprland installer, Wayland desktop, Waybar themes, Rofi themes, Matugen, Linux ricing",
      },
      { name: "author", content: "Tarang Verma" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#05080d" },
      { property: "og:site_name", content: "WavesOS" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/` },
      { property: "og:image", content: IMAGE },
      { property: "og:image:alt", content: "WavesOS Hyprland desktop wallpaper" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE}/` }],
    scripts: jsonLd.map((d) => ({ type: "application/ld+json", children: JSON.stringify(d) })),
  }),
  component: WavesSite,
});
