import Link from "next/link";

// Page /days, DEROGATION documentee au shell commun du portfolio (voir
// CLAUDE.md, "Exception /days"), meme principe que /spota: destination du
// lien marketing et du lien de support de la fiche App Store, et de la carte
// du portfolio. Mono-theme sombre, English only, pas d'entree i18n.
//
// Couleurs en dur alignees sur Theme.swift de l'app (repo day-counter): fond
// #0B0E17, surface #131722, anneau #7178FF vers #B08CFF, degrade d'accent
// #4F52E6 vers #7B45E8. Textes en DM Sans et Sora, les deux fonts du
// bundle. Seul le gros chiffre du hero sort de la regle: il est en police
// systeme, poids 200, parce que l'app affiche ses chiffres en SF ultra-light
// et qu'aucune des deux fonts du bundle n'a ce poids. Sur un appareil non
// Apple, la police systeme retombe sur son propre trait fin, sans casse.
//
// Server Component, aucune interactivite.

const CONTACT = "clementpicardzivy@gmail.com";

// Sans code de pays: Apple redirige vers la vitrine du visiteur.
const APP_STORE = "https://apps.apple.com/app/id6816046229";

const CONTACT_MAILTO =
  "mailto:" +
  CONTACT +
  "?subject=" +
  encodeURIComponent("Days, question") +
  "&body=" +
  encodeURIComponent("Hi Clement, ");

const RING_R = 150;
const RING_LEN = 2 * Math.PI * RING_R;
// 28 % du chemin, comme le compte a rebours "Lisbon trip" de la capture.
const RING_SHOWN = RING_LEN * 0.28;

function Ring() {
  return (
    <svg
      className="days-ring"
      viewBox="0 0 320 320"
      role="img"
      aria-label="A ring around the number 47, days left before a trip"
    >
      <defs>
        <linearGradient id="days-ring-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7178ff" />
          <stop offset="1" stopColor="#b08cff" />
        </linearGradient>
      </defs>
      <circle cx="160" cy="160" r={RING_R} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
      <circle
        cx="160"
        cy="160"
        r={RING_R}
        fill="none"
        stroke="url(#days-ring-grad)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={`${RING_SHOWN} ${RING_LEN}`}
        transform="rotate(-90 160 160)"
      />
      <text x="160" y="182" textAnchor="middle" className="days-ring-number">
        47
      </text>
      <text x="160" y="222" textAnchor="middle" className="days-ring-unit">
        Days
      </text>
    </svg>
  );
}

export function DaysContent() {
  return (
    <div className="days">
      <div className="days-shell">
        <nav className="days-nav">
          <div className="days-nav-left">
            <Link href="/" aria-label="Back to portfolio" className="days-back-btn">
              ←
            </Link>
            <div className="days-wordmark">DAYS</div>
          </div>
          <a className="days-nav-cta" href={APP_STORE}>
            App Store
          </a>
        </nav>

        <header className="days-hero">
          <div className="days-eyebrow">A day counter for iOS</div>
          <h1>One number. The days that matter.</h1>
          <p className="days-lede">
            Count down to a date, or count up the days since one. Every counter is a title, a
            date and a mode, and the number updates by itself, on your home screen and your
            lock screen too.
          </p>
          <div className="days-hero-ctas">
            <a className="days-btn" href={APP_STORE}>
              Get it on the App Store
            </a>
          </div>
          <p className="days-fine-print">iPhone · iOS 17 and up · Free</p>
          <div className="days-stage">
            <Ring />
          </div>
        </header>

        <section className="days-section">
          <div className="days-section-head">
            <h2>Made to be looked at for one second.</h2>
            <p>
              Dark, calm, one number at a time. Nothing to set up, nothing to sign in to.
            </p>
          </div>
          <div className="days-shots">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/days/home.png"
              alt="The Days home screen, a list of counters with big thin numbers"
              width={660}
              height={1434}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/days/detail.png"
              alt="A count up counter, 129 days without smoking, with a ring toward the next milestone"
              width={660}
              height={1434}
            />
          </div>
        </section>

        <section className="days-section">
          <div className="days-section-head">
            <h2>Two modes, one idea.</h2>
          </div>
          <div className="days-grid">
            <div className="days-card">
              <h3>Countdown</h3>
              <p>
                Pick a date and watch the days go. A ring fills from the day you create the
                counter to the day itself.
              </p>
            </div>
            <div className="days-card">
              <h3>Count up</h3>
              <p>
                Days without smoking, days together, days since the move. Count today as day 1
                or day 0, your call.
              </p>
            </div>
            <div className="days-card">
              <h3>Milestones</h3>
              <p>
                Set a milestone every 7, 30, 100 or 365 days and get a quiet notification at
                9am when you reach it.
              </p>
            </div>
            <div className="days-card">
              <h3>Widgets</h3>
              <p>
                One counter on your home screen, one on your lock screen. Pick which counter
                each widget shows.
              </p>
            </div>
          </div>
        </section>

        <section className="days-section">
          <div className="days-section-head">
            <h2>Simple on purpose.</h2>
            <p>
              No account, no ads, no tracking. Your counters stay on your phone unless you
              choose to share one through your own iCloud.{" "}
              <Link href="/days/privacy" className="days-link">
                Read the privacy policy
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="days-section days-cta-band">
          <h2>A question, a bug, an idea?</h2>
          <p className="days-lede">
            Days is built and supported by one person. Write, it gets read.
          </p>
          <div className="days-hero-ctas">
            <a className="days-btn" href={CONTACT_MAILTO}>
              Write to Clément
            </a>
          </div>
        </section>

        <footer className="days-section days-footer">
          <div className="days-foot-row">
            <span>Days · 2026</span>
            <span>
              <Link href="/days/privacy" className="days-foot-link">
                Privacy policy
              </Link>
            </span>
          </div>
          <Link href="/" className="days-back">
            ← Clément PZ, portfolio
          </Link>
        </footer>
      </div>

      <style>{`
        .days {
          --bg: #0b0e17;
          --surface: #131722;
          --raised: #1f2537;
          --muted: #8a93a6;
          --ring-a: #7178ff;
          --ring-b: #b08cff;
          background: var(--bg);
          color: #fff;
          font-family: var(--font-dm-sans), system-ui, sans-serif;
          background-image:
            radial-gradient(1000px 520px at 15% -8%, rgba(113,120,255,0.12), transparent 60%),
            radial-gradient(800px 460px at 100% 12%, rgba(176,140,255,0.08), transparent 55%);
          min-height: 100vh;
        }
        .days * { box-sizing: border-box; }
        .days h1, .days h2, .days h3, .days p { margin: 0; }
        .days h1, .days h2, .days h3, .days-wordmark {
          font-family: var(--font-sora), var(--font-dm-sans), sans-serif;
        }

        .days-shell { max-width: 760px; margin: 0 auto; padding: 0 24px; }

        .days-nav { display: flex; align-items: center; justify-content: space-between; padding: 22px 0 0; }
        .days-nav-left { display: flex; align-items: center; gap: 14px; }
        .days-back-btn {
          display: inline-flex; align-items: center; justify-content: center;
          width: 36px; height: 36px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.14); color: rgba(255,255,255,0.7);
          text-decoration: none; transition: border-color .15s ease, color .15s ease;
        }
        .days-back-btn:hover { border-color: var(--ring-b); color: #fff; }
        .days-wordmark { font-weight: 700; font-size: 15px; letter-spacing: 0.32em; color: var(--muted); }
        .days-nav-cta {
          font-weight: 600; font-size: 13px; letter-spacing: 0.02em; color: #fff;
          background: linear-gradient(135deg, #4f52e6, #7b45e8);
          padding: 9px 16px; border-radius: 12px; text-decoration: none;
        }

        .days-hero { padding: 64px 0 12px; }
        .days-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 12px; font-weight: 600; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--muted); margin-bottom: 18px;
        }
        .days-eyebrow::before {
          content: ""; width: 6px; height: 6px; border-radius: 50%;
          background: var(--ring-b); box-shadow: 0 0 0 3px rgba(176,140,255,0.2);
        }
        .days-hero h1 {
          font-size: clamp(36px, 7vw, 56px); font-weight: 700;
          line-height: 1.04; letter-spacing: -1.4px; text-wrap: balance;
        }
        /* Scopees par .days: le reset ".days p" est plus specifique qu'une
           classe seule et ecraserait ces margin-top. */
        .days .days-lede {
          margin-top: 22px; max-width: 46ch;
          font-size: 17px; line-height: 1.55; color: rgba(255,255,255,0.7);
        }
        .days .days-fine-print { margin-top: 16px; font-size: 12.5px; color: rgba(255,255,255,0.4); }

        .days-stage { margin: 44px auto 8px; width: min(320px, 78vw); }
        .days-ring { display: block; width: 100%; height: auto; }
        .days-ring-number {
          fill: #fff; font-size: 132px; font-weight: 200; letter-spacing: -4px;
          font-family: -apple-system, "SF Pro Display", system-ui, "Helvetica Neue", sans-serif;
        }
        .days-ring-unit { fill: var(--muted); font-size: 17px; letter-spacing: 0.04em; font-family: var(--font-dm-sans), system-ui, sans-serif; }

        .days-section { padding: 58px 0; border-top: 1px solid rgba(255,255,255,0.08); }
        .days-section-head { max-width: 50ch; }
        .days-section-head h2 {
          font-size: clamp(24px, 4.2vw, 32px); font-weight: 700;
          letter-spacing: -0.8px; line-height: 1.12; text-wrap: balance;
        }
        .days-section-head p { margin-top: 12px; color: rgba(255,255,255,0.7); font-size: 15.5px; line-height: 1.6; }
        .days-link { color: #fff; text-decoration: underline; text-underline-offset: 3px; }

        .days-shots { margin-top: 34px; display: flex; gap: 16px; justify-content: center; }
        .days-shots img {
          width: calc(50% - 8px); max-width: 260px; height: auto;
          border-radius: 30px; border: 1px solid rgba(255,255,255,0.1);
        }

        .days-grid { margin-top: 30px; display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .days-card {
          background: var(--surface); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px; padding: 22px 20px;
        }
        .days-card h3 { font-size: 16px; font-weight: 700; }
        .days-card p { margin-top: 8px; font-size: 14px; line-height: 1.55; color: rgba(255,255,255,0.68); }

        .days-cta-band h2 { font-size: clamp(26px, 5vw, 36px); font-weight: 700; letter-spacing: -1px; text-wrap: balance; }
        .days-cta-band .days-lede { margin-top: 12px; }
        .days-hero-ctas { margin-top: 26px; display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
        .days-btn {
          display: inline-flex; align-items: center; justify-content: center;
          height: 46px; padding: 0 28px; border-radius: 14px;
          font-weight: 600; font-size: 16px; text-decoration: none; color: #fff;
          background: linear-gradient(135deg, #4f52e6, #7b45e8);
        }
        .days-btn:hover { filter: brightness(1.1); }

        .days-footer { padding-top: 30px; padding-bottom: 56px; display: grid; gap: 18px; }
        .days-foot-row {
          display: flex; flex-wrap: wrap; gap: 10px 18px; align-items: center;
          justify-content: space-between; font-size: 12.5px; color: rgba(255,255,255,0.4);
        }
        .days-foot-link { color: rgba(255,255,255,0.6); text-decoration: underline; text-underline-offset: 2px; }
        .days-foot-link:hover { color: #fff; }
        .days-back { font-size: 13px; color: rgba(255,255,255,0.7); text-decoration: none; }
        .days-back:hover { color: #fff; }

        @media (max-width: 520px) {
          .days-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
