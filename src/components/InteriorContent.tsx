"use client";

// Page /interior : galerie votable de l'appartement. Compteurs de votes via
// abacus (même service que le compteur de visites du DisclaimerOverlay),
// un compteur par photo (clé `interior-photo-{id}`). Pas de garde-fou anti-
// spam (décision produit) : chaque clic incrémente réellement, sans limite.
// Tri par votes décroissants, tie-break = ordre curé de interiorPhotos.
import { useEffect, useState } from "react";
import Link from "next/link";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { BackHome } from "./BackHome";
import { interiorPhotos } from "../data/content";
import { interiorText } from "../data/i18n";
import { useLocale } from "./LocaleProvider";
import { fireConfetti } from "../lib/confetti";

const ABACUS_NAMESPACE = "clementpz";
const keyFor = (id: string) => `interior-photo-${id}`;

export function InteriorContent() {
  const { locale } = useLocale();
  const t = interiorText[locale];
  const [votes, setVotes] = useState<Record<string, number>>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    Promise.all(
      interiorPhotos.map((p) =>
        fetch(`https://abacus.jasoncameron.dev/get/${ABACUS_NAMESPACE}/${keyFor(p.id)}`)
          .then((r) => r.json())
          .then((d) => [p.id, typeof d?.value === "number" ? d.value : 0] as const)
          .catch(() => [p.id, 0] as const)
      )
    ).then((entries) => {
      if (cancelled) return;
      setVotes(Object.fromEntries(entries));
      setLoaded(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const vote = (id: string, anchor: HTMLElement | null) => {
    setVotes((v) => ({ ...v, [id]: (v[id] ?? 0) + 1 }));
    fireConfetti(anchor);
    fetch(`https://abacus.jasoncameron.dev/hit/${ABACUS_NAMESPACE}/${keyFor(id)}`).catch(() => {});
  };

  const sorted = [...interiorPhotos].sort((a, b) => (votes[b.id] ?? 0) - (votes[a.id] ?? 0));

  return (
    <div id="top">
      <Nav />
      <main className="max-w-5xl mx-auto px-6 pt-10 pb-24">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sorted.map((p) => {
            const count = votes[p.id] ?? 0;
            return (
              <button
                key={p.id}
                type="button"
                onClick={(e) => vote(p.id, e.currentTarget)}
                className="group relative rounded-2xl overflow-hidden aspect-[3/2] text-left"
                style={{ border: "1px solid var(--border)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.file}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-md">
                  <span aria-hidden>▲</span>
                  <span className={loaded ? undefined : "opacity-40"}>
                    {count} {count === 1 ? t.voteSingular : t.votePlural}
                  </span>
                </span>
              </button>
            );
          })}
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
