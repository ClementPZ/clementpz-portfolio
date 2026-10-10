import type { MetadataRoute } from "next";

const base = "https://clementpz.com";

const paths = [
  "",
  "/nrc",
  "/nrc/design-system",
  "/nrc/huey",
  "/episource",
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
