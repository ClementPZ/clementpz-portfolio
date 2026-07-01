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
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-10">
        {/* Haut droite : copyright */}
        <div className="flex justify-end">
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            © {year}
          </span>
        </div>

        {/* Bas gauche : signature + (desktop) langues et liens */}
        <div>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Handcrafted with ❤️ by Clément and Claude.ai
          </p>
          <p
            className="hidden sm:block text-xs mt-3"
            style={{ color: "var(--text-muted)" }}
          >
            {languagesText[locale].join(" · ")}
          </p>
          <div
            className="hidden sm:flex gap-4 text-xs mt-3"
            style={{ color: "var(--text-muted)" }}
          >
            <a href={`mailto:${profile.email}`} className="hover:underline">
              {profile.email}
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
