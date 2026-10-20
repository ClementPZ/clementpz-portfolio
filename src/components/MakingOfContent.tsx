"use client";

import Link from "next/link";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { BackHome } from "./BackHome";
import { MakingOfFlow } from "./MakingOfFlow";
import { makingOfText } from "../data/i18n";
import { useLocale } from "./LocaleProvider";

// Frise des hooks et skills, dans l'ordre où ils sont nés. La date est à gauche
// sur bureau, au-dessus sur mobile. Une seule hiérarchie : la taille, pas de bordure.
export function MakingOfContent() {
  const { locale } = useLocale();
  const t = makingOfText[locale] ?? makingOfText.en;
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

        <div className="panel p-5 sm:p-8 mb-10">
          <MakingOfFlow />
        </div>

        <div className="panel p-5 sm:p-8">
          <ol className="space-y-10">
            {t.entries.map((e) => (
              <li
                key={e.date + e.title}
                className="grid gap-x-8 gap-y-2 sm:grid-cols-[5rem_1fr]"
              >
                <p
                  className="font-display font-bold text-base"
                  style={{ color: "var(--accent)" }}
                >
                  {e.date}
                </p>
                <div>
                  <h2 className="font-display font-bold text-xl mb-2">
                    {e.title}
                    <span
                      className="ml-3 text-sm font-semibold"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {e.kind}
                    </span>
                  </h2>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {e.text}
                  </p>
                  <p
                    className="mt-3 text-sm leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <span className="font-semibold" style={{ color: "var(--text)" }}>
                      {e.whyLabel}
                    </span>{" "}
                    {e.why}
                  </p>
                </div>
              </li>
            ))}
          </ol>
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
