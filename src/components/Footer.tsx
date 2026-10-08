"use client";

import { profile } from "../data/content";
import { fireConfetti } from "../lib/confetti";

export function Footer({ tight = false }: { tight?: boolean }) {
  const year = new Date().getFullYear();
  return (
    <footer
      className={`${tight ? "mt-4" : "mt-16"} py-6`}
      style={{ borderTop: "1px solid var(--border)", background: "var(--bg-elev)" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-start justify-between gap-6">
        {/* Bas gauche : signature + liens (+ langues sur desktop) */}
        <div>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Handcrafted by Clément &amp; Claude
          </p>

          <div
            className="flex flex-wrap gap-4 text-xs mt-3"
            style={{ color: "var(--text-muted)" }}
          >
            <a
              href={`mailto:${profile.email}`}
              className="hover:underline"
              onClick={(e) => fireConfetti(e.currentTarget)}
            >
              Email
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              onClick={(e) => fireConfetti(e.currentTarget)}
            >
              LinkedIn
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              onClick={(e) => fireConfetti(e.currentTarget)}
            >
              GitHub
            </a>
          </div>

        </div>

        {/* Haut droite : copyright */}
        <span className="text-xs shrink-0" style={{ color: "var(--text-muted)" }}>
          © {year}
        </span>
      </div>
    </footer>
  );
}
