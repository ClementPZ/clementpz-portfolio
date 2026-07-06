"use client";

import Link from "next/link";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { makingOfText } from "../data/i18n";
import { useLocale } from "./LocaleProvider";

export function MakingOfContent() {
  const { locale } = useLocale();
  const t = makingOfText[locale];
  return (
    // id="top" : cible du logo de la Nav (href="#top"), comme sur la home.
    <div id="top">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 pt-16 pb-24 sm:pt-24">
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

        <div className="space-y-12">
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
          <Link href="/" className="btn-accent">
            {t.backHome}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
