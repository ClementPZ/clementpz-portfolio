"use client";

import { profile } from "../data/content";
import { languagesText } from "../data/i18n";
import { useLocale } from "./LocaleProvider";

export function Footer() {
  const { locale } = useLocale();
  const year = new Date().getFullYear();
  return (
    <footer
      className="mt-16 py-6"
      style={{ borderTop: "1px solid var(--border)", background: "var(--bg-elev)" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-start justify-between gap-6">
        {/* Bas gauche : signature + liens (+ langues sur desktop) */}
        <div>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Handcrafted with ❤️ by Clément and Claude.ai
          </p>

          <div
            className="flex flex-wrap gap-4 text-xs mt-3"
            style={{ color: "var(--text-muted)" }}
          >
            <a href={`mailto:${profile.email}`} className="hover:underline">
              Email
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
              GitHub
            </a>
          </div>

          <p className="hidden sm:block text-xs mt-3" style={{ color: "var(--text-muted)" }}>
            {languagesText[locale].join(" · ")}
          </p>
        </div>

        {/* Haut droite : copyright */}
        <span className="text-xs shrink-0" style={{ color: "var(--text-muted)" }}>
          © {year}
        </span>
      </div>
    </footer>
  );
}
