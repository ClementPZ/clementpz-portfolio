"use client";

import Link from "next/link";
import { spotaHighlightText } from "../data/i18n";
import { useLocale } from "./LocaleProvider";
import {
  SPOTA_FONTS,
  SPOTA_VARS,
  SPOTA_SHARED_CSS,
  PhoneMock,
  SpotaHeadline,
} from "./SpotaShared";

// Bloc SpotA de la section Side projects. C'est le hero de /spota rejoue en
// carte: meme carte mission qui se tape, meme lede, meme CTA lime, meme rendu
// d'iPhone penche. La carte porte l'identite de l'app (kit Mix 3, oct. 2026),
// comme la carte Builder porte son violet: une couleur de marque est une
// donnee, pas un token de theme, donc elle ne change pas entre le mode sombre
// et le mode clair.
// Lien de la fiche App Store, vide tant que l'app n'est pas publiée : le
// bouton reste affiché mais ne mène nulle part.
const APP_STORE_URL = "";

export function SpotaFeature() {
  const { locale } = useLocale();
  const t = spotaHighlightText[locale];

  return (
    <div className={`spota-feature ${SPOTA_FONTS}`}>
      {/* Carte entière cliquable (lien étiré vers /spota), pas d'effet au
          survol hors curseur. Le bouton App Store passe au-dessus. */}
      <Link href="/spota" aria-label="SpotA" className="spota-card-link" />
      <div className="spota-feature-copy">
        <div className="spota-label">{t.eyebrow}</div>
        {/* Le titre reste en anglais: "Today, spot ..." fait entrer le nom
            du produit dans la phrase, et les prompts qui defilent sont ceux
            que l'app affiche vraiment. */}
        <SpotaHeadline />
        <p className="spota-lede">{t.lede}</p>
      </div>

      <div className="spota-feature-stage">
        <PhoneMock
          src="/spota/phone-spot.webp"
          alt="Spot a on an iPhone: the crew page of a day, each member's spot as a tile with its reactions"
        />
      </div>

      {/* Le CTA ferme la carte, en bas à droite, comme sur les autres cartes. */}
      <div className="spota-feature-ctas">
        <span className="spota-fine-print">{t.finePrint}</span>
        <a className="spota-btn" href={APP_STORE_URL || undefined}>
          {t.cta}
        </a>
      </div>

      {/* Etat de l'app, en haut à droite. Libellé gardé en anglais dans les
          trois langues. */}
      <span className="spota-status">
        <span aria-hidden className="live-dot" />
        Beta · Live
      </span>

      <style>{`
        ${SPOTA_SHARED_CSS}
        .spota-feature {
          ${SPOTA_VARS}
          display: grid;
          gap: 32px;
          align-items: center;
          padding: 40px;
          border-radius: 20px;
          position: relative;
          /* Le fond de l'app, noir teinte de violet. */
          background-color: var(--spota-ground);
          color: var(--spota-text);
          font-family: var(--font-space-grotesk), system-ui, sans-serif;
          box-shadow: var(--shadow);
          overflow: hidden;
        }
        @media (min-width: 768px) {
          /* Colonne droite plus large que la photo : elle se centre dedans
             au lieu de coller le bord de la carte. Hauteur mini pour que la
             photo ait la place de se voir grande, pas ratatinee a la
             hauteur du texte. */
          .spota-feature { grid-template-columns: 1fr 420px; gap: 40px; min-height: 520px; }
        }

        .spota-feature h1 { font-size: clamp(30px, 4vw, 46px); }
        .spota-feature .spota-label { margin-bottom: 22px; }
        .spota-feature .spota-lede {
          margin: 36px 0 0; max-width: 46ch;
          font-size: 16px; line-height: 1.55; color: var(--spota-text-2);
        }
        .spota-card-link { position: absolute; inset: 0; z-index: 1; border-radius: inherit; }
        .spota-feature-copy, .spota-feature-stage, .spota-feature-ctas { position: relative; z-index: 2; pointer-events: none; }
        .spota-feature-ctas { grid-column: 1 / -1; display: flex; align-items: center; justify-content: flex-end; gap: 16px; flex-wrap: wrap; }
        .spota-status {
          position: absolute; top: 24px; right: 28px; z-index: 2; pointer-events: none;
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 12px; color: var(--spota-text-2);
        }
        .spota-feature .spota-btn { pointer-events: auto; }
        .spota-feature .spota-fine-print { font-size: 12.5px; color: var(--spota-text-2); }
        .spota-feature-stage { display: flex; align-items: center; justify-content: center; padding: 12px; }
        .spota-feature .spota-phone { width: min(272px, 66vw); }
      `}</style>
    </div>
  );
}
