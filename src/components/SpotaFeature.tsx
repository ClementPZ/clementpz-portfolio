"use client";

import Link from "next/link";
import { spotaHighlightText } from "../data/i18n";
import { useLocale } from "./LocaleProvider";
import {
  SPOT,
  SELF,
  SPOT_INK,
  SPOTA_SHARED_CSS,
  SpotaHeadline,
} from "./SpotaShared";

// Bloc SpotA de la section Highlights. C'est le hero de /spota rejoue en
// carte: meme titre qui se tape, meme lede, meme CTA lime, mais un rendu
// iPhone (ecran SpotA compose dedans) plutot que la coque dessinee en CSS
// de /spota, cf. iphone-mockup.png. La carte porte l'identite
// de l'app, noir et lime et violet, comme la carte Builder porte son
// violet: une couleur de marque est une donnee, pas un token de theme, donc
// elle ne change pas entre le mode sombre et le mode clair.
export function SpotaFeature() {
  const { locale } = useLocale();
  const t = spotaHighlightText[locale];

  return (
    <div className="spota-feature">
      <div className="spota-feature-copy">
        <div className="spota-eyebrow">{t.eyebrow}</div>
        {/* Le titre reste en anglais: "Today: spot a ..." fait entrer le nom
            du produit dans la phrase, et les prompts qui defilent sont ceux
            que l'app affiche vraiment. */}
        <SpotaHeadline />
        <p className="spota-lede">{t.lede}</p>
        <div className="spota-feature-ctas">
          <Link className="spota-btn" href="/spota">
            {t.cta}
          </Link>
          <span className="spota-fine-print">{t.finePrint}</span>
        </div>
      </div>

      <div className="spota-feature-stage">
        {/* Rendu iPhone 17 Pro (Apple Design Resources, bezel officiel) avec
            l'ecran SpotA reel compose dedans, sans main. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="spota-hand-shot"
          src="/spota/iphone-mockup.png"
          alt="SpotA on an iPhone: the daily prompt over the back camera, with the front camera inset"
        />
      </div>

      <style>{`
        ${SPOTA_SHARED_CSS}
        .spota-feature {
          --spot: ${SPOT};
          --self: ${SELF};
          --spot-ink: ${SPOT_INK};
          display: grid;
          gap: 32px;
          align-items: center;
          padding: 40px;
          border-radius: 18px;
          background: #000;
          background-image:
            radial-gradient(760px 380px at 8% -20%, rgba(153,34,255,0.20), transparent 62%),
            radial-gradient(560px 320px at 100% 8%, rgba(202,254,0,0.07), transparent 58%);
          color: #fff;
          font-family: var(--font-dm-sans), system-ui, sans-serif;
          box-shadow: var(--shadow);
          overflow: hidden;
        }
        @media (min-width: 768px) {
          /* Colonne droite plus large que la photo : elle se centre dedans
             au lieu de coller le bord de la carte. Hauteur mini pour que la
             photo ait la place de se voir grande, pas ratatinee a la
             hauteur du texte. */
          .spota-feature { grid-template-columns: 1fr 480px; gap: 40px; min-height: 520px; }
        }

        .spota-feature h1 {
          margin: 0;
          font-family: var(--font-sora), var(--font-dm-sans), sans-serif;
          font-size: clamp(30px, 4vw, 44px);
          font-weight: 800; line-height: 1.02; letter-spacing: -1.2px;
        }
        .spota-feature .spota-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 12px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; color: rgba(255,255,255,0.7);
          margin-bottom: 18px;
        }
        .spota-feature .spota-eyebrow::before {
          content: ""; width: 6px; height: 6px; border-radius: 50%;
          background: var(--self); box-shadow: 0 0 0 3px rgba(202,254,0,0.18);
        }
        .spota-feature .spota-lede {
          margin: 32px 0 0; max-width: 46ch;
          font-size: 16px; line-height: 1.55; color: rgba(255,255,255,0.7);
        }
        .spota-feature-ctas { margin-top: 26px; display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
        .spota-feature .spota-btn {
          display: inline-flex; align-items: center; justify-content: center;
          height: 46px; padding: 0 28px; border-radius: 12px;
          font-weight: 800; font-size: 16px; text-decoration: none;
          /* Lime, pas violet: le CTA de l'app est lime, et l'encre sombre sur
             violet tombe a 3.76:1 en 16px/800, sous le plancher AA. */
          border: none; cursor: pointer; background: var(--self); color: var(--spot-ink);
        }
        .spota-feature .spota-btn:hover { filter: brightness(1.06); }
        .spota-feature .spota-fine-print { font-size: 12.5px; color: rgba(255,255,255,0.38); }
        .spota-feature-stage { display: flex; align-items: center; justify-content: center; padding: 12px; }
        .spota-hand-shot { width: min(270px, 62vw); height: auto; display: block; filter: drop-shadow(0 24px 40px rgba(0,0,0,0.55)); }
      `}</style>
    </div>
  );
}
