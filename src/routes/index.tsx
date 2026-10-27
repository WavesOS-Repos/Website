import { createFileRoute } from "@tanstack/react-router";
import WavesSite from "@/components/wavesos/WavesSite";

const title = "WavesOS — Hyprland, finished.";
const description =
  "WavesOS is an Arch + Hyprland installer for a coordinated desktop. Wallpaper-led color flows across Waybar, Rofi, GTK and Qt apps, terminal, lock and login.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://wavesos.live/wavesos-wallpaper.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://wavesos.live/wavesos-wallpaper.jpg" },
    ],
  }),
  component: WavesSite,
});
