"use client";

import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { BackHome } from "./BackHome";
import { ScreenStep } from "./NrcVisuals";
import { work } from "../data/content";
import { EPISOURCE_SCREEN, episourceVisual } from "../data/episourceVisual";
import { useLocale } from "./LocaleProvider";

// Page Click to Code : le detail de l'ecran de la carte Episource de la home.
// Meme coquille que /nrc (Nav, BackHome, Footer, largeur max-w-3xl). L'ecran est
// une recreation fictive, les chiffres sont ceux deja publies sur la carte.

export function ClickToCodeContent() {
  const { locale } = useLocale();
  const v = episourceVisual[locale];
  const w = work.find((x) => x.id === "episource");

  return (
    <div id="top">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 pt-10 pb-24">
        <div className="mb-10 flex items-center justify-between">
          <BackHome />
          <span className="text-sm" style={{ color: "var(--text-muted)" }}>
            {w?.period}
          </span>
        </div>

        <p className="text-sm font-semibold mb-4" style={{ color: "var(--accent)" }}>
          {v.page.kicker}
        </p>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl leading-tight mb-4">
          Click to Code
        </h1>
        <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "var(--text-muted)" }}>
          {v.page.intro}
        </p>
        {w && (
          <p className="mt-6 text-sm" style={{ color: "var(--text-muted)" }}>
            {w.tags.join(" · ")}
          </p>
        )}

        <hr className="section-rule mt-14" />
        <section className="pt-14">
          <ScreenStep step={v.step} fullSize={v.fullSize} src={EPISOURCE_SCREEN} />
          <p className="text-xs mt-6" style={{ color: "var(--text-muted)" }}>
            {v.disclaimer}
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
