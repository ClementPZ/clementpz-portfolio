"use client";

import Link from "next/link";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { BackHome } from "./BackHome";
import { makingOfText } from "../data/i18n";
import { useLocale } from "./LocaleProvider";

// Le pipeline en cinq étapes, lu de gauche à droite sur bureau, de haut en bas
// sur mobile. Une seule hiérarchie : la taille, pas de bordure ni de pastille.
export function MakingOfContent() {
  const { locale } = useLocale();
  const t = makingOfText[locale] ?? makingOfText.en;
  return (
    // id="top" : cible du logo de la Nav (href="#top"), comme sur la home.
    <div id="top">
      <Nav />
      <main className="max-w-5xl mx-auto px-6 pt-10 pb-24 sm:pt-14">
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
          className="text-lg sm:text-xl leading-relaxed mb-14 max-w-3xl"
          style={{ color: "var(--text-muted)" }}
        >
          {t.intro}
        </p>

        <div className="panel p-5 sm:p-8">
          <ol className="grid gap-8 lg:grid-cols-5 lg:gap-6">
            {t.stages.map((stage, i) => (
              <li key={stage.title}>
                <div className="flex items-baseline gap-3 mb-4">
                  <span
                    className="font-display font-bold text-lg"
                    style={{ color: "var(--accent)" }}
                  >
                    {i + 1}
                  </span>
                  <h2 className="font-display font-bold text-xl">{stage.title}</h2>
                </div>
                <ul className="space-y-4">
                  {stage.items.map((item) => (
                    <li
                      key={item.text}
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <span className="font-semibold" style={{ color: "var(--text)" }}>
                        {item.kind}
                      </span>
                      {" · "}
                      {item.text}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        <section className="mt-14 max-w-3xl">
          <h2 className="font-display text-xl sm:text-2xl font-bold mb-3">
            {t.handoffTitle}
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            {t.handoffBody}
          </p>
        </section>

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
