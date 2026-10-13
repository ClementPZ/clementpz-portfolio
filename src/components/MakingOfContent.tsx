"use client";

import Link from "next/link";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { BackHome } from "./BackHome";
import { makingOfText } from "../data/i18n";
import { useLocale } from "./LocaleProvider";

// Schéma du flow : deux voies (je décide / Claude produit) lues ligne par ligne,
// de l'idée à la passation. En HTML plutôt qu'en SVG : le texte passe à la ligne
// seul, il tient dans les trois langues sans recaler la géométrie.
const ROW = "grid gap-x-6 gap-y-2 sm:grid-cols-[9rem_1fr_1fr]";

export function MakingOfContent() {
  const { locale } = useLocale();
  const t = makingOfText[locale];
  return (
    // id="top" : cible du logo de la Nav (href="#top"), comme sur la home.
    <div id="top">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 pt-10 pb-24 sm:pt-14">
        <div className="mb-10">
          <BackHome />
        </div>
        <p
          className="text-xs uppercase tracking-widest font-semibold mb-4"
          style={{ color: "var(--accent)" }}
        >
          {t.kicker}
        </p>
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl leading-tight mb-6">
          {t.title}
        </h1>
        <p
          className="text-lg sm:text-xl leading-relaxed mb-14"
          style={{ color: "var(--text-muted)" }}
        >
          {t.intro}
        </p>

        <h2 className="font-display text-xl sm:text-2xl font-bold mb-4">{t.flowTitle}</h2>
        <div className="panel p-4 sm:p-6">
          <div
            className={`${ROW} hidden sm:grid mb-3 px-4 text-sm font-semibold`}
            style={{ color: "var(--text-muted)" }}
          >
            <span />
            <span>{t.meLabel}</span>
            <span>{t.claudeLabel}</span>
          </div>
          <ol className="space-y-3">
            {t.steps.map((s, i) => (
              <li
                key={s.title}
                className={`${ROW} p-4 rounded-xl`}
                style={{ background: "var(--bg-raised)" }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="font-display font-bold text-lg"
                    style={{ color: "var(--accent)" }}
                  >
                    {i + 1}
                  </span>
                  <h3
                    className="font-display font-bold text-base"
                    style={{ color: "var(--text)" }}
                  >
                    {s.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  <span className="sm:hidden font-semibold" style={{ color: "var(--text)" }}>
                    {t.meLabel} ·{" "}
                  </span>
                  {s.me}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  <span className="sm:hidden font-semibold" style={{ color: "var(--text)" }}>
                    {t.claudeLabel} ·{" "}
                  </span>
                  {s.claude}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm" style={{ color: "var(--text-muted)" }}>
            ↺ {t.loopNote}
          </p>
        </div>

        <div className="mt-14 space-y-12">
          {t.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-display text-xl sm:text-2xl font-bold mb-3">
                {s.heading}
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                {s.body}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-16">
          <Link href="/" className="btn-ghost">
            {t.backHome}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
