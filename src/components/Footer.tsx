"use client";

import { profile } from "../data/content";
import { languagesText } from "../data/i18n";
import { useLocale } from "./LocaleProvider";

export function Footer() {
  const { locale } = useLocale();
  const year = new Date().getFullYear();
  return (
    <footer
      className="mt-16 py-12"
      style={{ borderTop: "1px solid var(--border)", background: "var(--bg-elev)" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row gap-6 sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold">{profile.name}</p>
          <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
            {profile.tagline}
          </p>
          <p className="text-xs mt-3" style={{ color: "var(--text-muted)" }}>
            {languagesText[locale].join(" · ")}
          </p>
        </div>
        <div className="flex flex-col sm:items-end gap-2 text-sm">
          <a href={`mailto:${profile.email}`} className="hover:underline">
            {profile.email}
          </a>
          <div className="flex gap-4 text-xs" style={{ color: "var(--text-muted)" }}>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <span>© {year}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
