"use client";

import Link from "next/link";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { BackHome } from "./BackHome";
import { BuilderDiagram } from "./BuilderDiagram";
import { BuilderDemo } from "./BuilderDemo";
import { recentProjects } from "../data/content";
import { builderText } from "../data/i18n";
import { useLocale } from "./LocaleProvider";

export function BuilderContent() {
  const { locale } = useLocale();
  const t = builderText[locale];
  const builder = recentProjects.find((p) => p.id === "builder-flow");
  return (
    <div id="top">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 pt-10 pb-24">
        <div className="mb-10">
          <BackHome />
        </div>
        <p
          className="text-sm font-semibold mb-4"
          style={{ color: "var(--accent)" }}
        >
          {t.kicker}
        </p>
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl leading-tight mb-6">
          {t.title}
        </h1>
        <p
          className="text-lg sm:text-xl leading-relaxed mb-10"
          style={{ color: "var(--text-muted)" }}
        >
          {t.intro}
        </p>

        {/* La demo de la home, rejouee ici : memes couleurs d'identite que la carte. */}
        <div
          className="mb-14 p-4 sm:p-8"
          style={{
            borderRadius: "var(--radius-lg)",
            background: `linear-gradient(150deg, ${builder?.accent} 0%, ${builder?.accent2} 100%)`,
          }}
        >
          <BuilderDemo trigger={0} />
        </div>

        <div className="space-y-12">
          {t.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-display text-xl sm:text-2xl font-bold mb-3">{s.heading}</h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {s.body}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-8 panel p-4 sm:p-6">
          <BuilderDiagram />
        </div>

        <section className="mt-12">
          <h2 className="font-display text-xl sm:text-2xl font-bold mb-3">{t.status.heading}</h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {t.status.body}
          </p>
        </section>

        <div className="mt-12">
          <Link href="/nrc" className="hover:underline" style={{ color: "var(--accent)" }}>
            {t.nrcCta} →
          </Link>
        </div>

        <div className="mt-10">
          <Link href="/" className="btn-ghost">
            {t.backHome}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
