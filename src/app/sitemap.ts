import type { MetadataRoute } from "next";

const base = "https://clementpz.com";

// /nrc/huey est volontairement absente : en ligne, mais sans lien d'entrée.
const paths = [
  "",
  "/nrc",
  "/nrc/design-system",
  "/click-to-code",
  "/builder",
  "/music-quality-upgrader",
  "/interior",
  "/remarkable-calendar-sync",
  "/spota",
  "/days",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({ url: `${base}${p}` }));
}
