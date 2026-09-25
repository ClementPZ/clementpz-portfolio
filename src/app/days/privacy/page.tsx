import type { Metadata } from "next";
import Link from "next/link";

// /days/privacy, l'URL de confidentialite que Apple verifie pendant la review
// de "Days: Countdown & Count up". Doit etre publique et vivante AVANT la
// soumission. Meme derogation que /spota (voir CLAUDE.md, "Exception /days"):
// hors shell commun, mono-theme sombre, English only, pas d'entree i18n. Page
// servie en Server Component, aucune interactivite.
//
// Le contenu decrit l'app telle qu'elle est CODEE, pas telle qu'on l'imagine.
// A relire si l'un de ces points bouge cote day-counter:
// - aucun code reseau: pas d'URLSession, pas d'URL http, pas de CloudKit, pas
//   de SDK tiers (Package.swift absent, project.yml sans dependance externe)
// - stockage = JSON des compteurs dans les UserDefaults du groupe
//   group.com.clementpz.days, partage app et widget, Shared/SharedStorage.swift
// - notifications locales a 9 h, permission demandee au premier enregistrement,
//   App/NotificationScheduler.swift
// - schema d'URL days://counter/<id>, ouvre un compteur depuis le widget
// - PrivacyInfo.xcprivacy: pas de tracking, aucune donnee collectee, seule
//   l'API UserDefaults est declaree (raisons CA92.1 et 1C8F.1)
//
// PIEGE: pas d'entite HTML dans le texte, apostrophes et guillemets sont des
// caracteres typographiques. Un noeud texte JSX avec entite avale l'espace qui
// precede apres un <b>, voir src/app/spota/NOTES.md.

export const metadata: Metadata = {
  title: "Days, privacy policy",
  description:
    "Days collects nothing. What is stored on your phone, why, and how to remove it.",
};

const CONTACT = "clementpicardzivy@gmail.com";
const UPDATED = "25 September 2026";

export default function DaysPrivacyPage() {
  return (
    <div className="daysp">
      <div className="daysp-shell">
        <nav className="daysp-nav">
          <div className="daysp-nav-left">
            <Link href="/days" aria-label="Back to Days" className="daysp-back-btn">
              ←
            </Link>
            <Link href="/days" className="daysp-wordmark">
              DAYS
            </Link>
          </div>
          <Link href="/days" className="daysp-nav-back">
            ← Back to Days
          </Link>
        </nav>

        <header className="daysp-head">
          <h1>Privacy policy</h1>
          <p className="daysp-meta">Last updated {UPDATED} · Days: Countdown & Count up, for iOS</p>
          <p className="daysp-lede">
            Days is a small app built by one person. It collects nothing. No account, no
            email, no analytics, no advertising, no tracking, and no code that connects to the
            internet. Your counters live on your phone and nowhere else.
          </p>
        </header>

        <section className="daysp-section">
          <h2>Who runs this</h2>
          <p>
            Days is built and operated by Clément Picard Zivy, an individual developer,
            reachable at <a href={`mailto:${CONTACT}`}>{CONTACT}</a>. That address is the
            contact for any question or request covered below.
          </p>
        </section>

        <section className="daysp-section">
          <h2>What the app stores on your phone</h2>
          <ul className="daysp-list">
            <li>
              <b>Your counters.</b> For each one, the title you typed, its date, its mode
              (countdown or count up), the options you chose (show the title on the widget,
              count today as day 1, a milestone every so many days) and the day you created
              it.
            </li>
            <li>
              <b>Shared with the widgets.</b> The home screen and lock screen widgets read
              the same counters through a storage area shared between the app and its
              widgets, on your device. It is not sent anywhere.
            </li>
            <li>
              <b>Scheduled reminders.</b> If you allow notifications, the app schedules local
              notifications on your phone, at 9am, for a countdown that reaches zero and for
              each milestone. They are created and delivered by your phone, not by a server.
            </li>
          </ul>
          <p className="daysp-note">
            The app asks for permission to send notifications the first time you save a
            counter, and for nothing else. It never asks for your location, contacts, photos,
            camera or microphone.
          </p>
        </section>

        <section className="daysp-section">
          <h2>What leaves your phone</h2>
          <p>
            Nothing. The app has no analytics tool, no advertising tool, no crash reporter and
            no code that makes network requests. There is no server behind Days, so there is
            nothing to send to and nothing to be breached.
          </p>
          <p>
            Nothing is sold, rented, or handed to advertisers or data brokers. There is no such
            arrangement, and there will not be one without this page changing first.
          </p>
        </section>

        <section className="daysp-section">
          <h2>Who else is involved</h2>
          <ul className="daysp-list">
            <li>
              <b>Apple</b> distributes the app through the App Store and can offer developers
              aggregate statistics from users who chose to share them. That is Apple’s
              relationship with you, under Apple’s own privacy policy, and Days does not
              receive anything that identifies you.
            </li>
            <li>
              <b>Your device backups.</b> If you back up your phone, for example to iCloud,
              the app’s data can be part of that backup. That is handled by Apple, under your
              own account settings, and Days has no access to it.
            </li>
          </ul>
        </section>

        <section className="daysp-section">
          <h2>Deleting your data</h2>
          <p>
            Delete a counter from inside the app, from its edit screen or by pressing and
            holding it in the list. To remove everything, delete the app: its counters go with
            it. Because nothing is held anywhere else, there is nothing to request from the
            developer, and no account to close.
          </p>
        </section>

        <section className="daysp-section">
          <h2>Children</h2>
          <p>
            Days collects nothing from anyone, children included. It has no account, no chat,
            no purchase and no link that leads out of the app.
          </p>
        </section>

        <section className="daysp-section">
          <h2>Changes</h2>
          <p>
            If what the app stores or shares ever changes, this page changes first, and the
            date at the top moves.
          </p>
        </section>

        <footer className="daysp-footer">
          <span>Days · 2026</span>
          <Link href="/days" className="daysp-nav-back">
            ← Back to Days
          </Link>
        </footer>
      </div>

      <style>{`
        .daysp {
          --ring-a: #7178ff;
          --ring-b: #b08cff;
          --muted: #8a93a6;
          min-height: 100vh;
          background: #0b0e17;
          color: #fff;
          font-family: var(--font-dm-sans), system-ui, sans-serif;
          background-image:
            radial-gradient(1000px 520px at 15% -8%, rgba(113,120,255,0.1), transparent 60%);
        }
        .daysp * { box-sizing: border-box; }
        .daysp h1, .daysp h2, .daysp p { margin: 0; }
        .daysp h1, .daysp h2, .daysp-wordmark {
          font-family: var(--font-sora), var(--font-dm-sans), sans-serif;
        }

        .daysp-shell { max-width: 680px; margin: 0 auto; padding: 0 24px 72px; }

        .daysp-nav {
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; padding: 22px 0 0;
        }
        .daysp-nav-left { display: flex; align-items: center; gap: 14px; }
        .daysp-back-btn {
          display: inline-flex; align-items: center; justify-content: center;
          width: 36px; height: 36px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.14); color: rgba(255,255,255,0.7);
          text-decoration: none; transition: border-color .15s ease, color .15s ease;
        }
        .daysp-back-btn:hover { border-color: var(--ring-b); color: #fff; }
        .daysp-wordmark {
          font-weight: 700; font-size: 15px; letter-spacing: 0.32em;
          color: var(--muted); text-decoration: none;
        }
        .daysp-nav-back { font-size: 13px; color: rgba(255,255,255,0.7); text-decoration: none; }
        .daysp-nav-back:hover { color: #fff; }

        .daysp-head { padding: 56px 0 8px; }
        .daysp-head h1 {
          font-size: clamp(32px, 6vw, 46px); font-weight: 700;
          line-height: 1.05; letter-spacing: -1.2px; color: var(--ring-b);
        }
        /* Doublement scopees (.daysp .daysp-meta): le reset ".daysp p" est un
           selecteur classe + type, plus specifique qu'une classe seule, et il
           ecraserait ces margin-top. */
        .daysp .daysp-meta {
          margin-top: 16px; font-size: 12.5px; letter-spacing: 0.02em;
          color: rgba(255,255,255,0.4);
        }
        .daysp .daysp-lede {
          margin-top: 22px; font-size: 16.5px; line-height: 1.6;
          color: rgba(255,255,255,0.78);
        }

        .daysp-section { padding: 34px 0 0; }
        .daysp-section h2 {
          font-size: clamp(19px, 3.4vw, 23px); font-weight: 700;
          letter-spacing: -0.5px; line-height: 1.15;
        }
        .daysp-section p {
          margin-top: 12px; font-size: 15px; line-height: 1.65;
          color: rgba(255,255,255,0.7);
        }
        .daysp-section p b, .daysp-list b { color: #fff; font-weight: 700; }
        .daysp-section a { color: var(--ring-b); text-decoration: none; }
        .daysp-section a:hover { text-decoration: underline; }

        .daysp-list {
          margin: 14px 0 0; padding: 0; list-style: none;
          display: grid; gap: 12px;
        }
        .daysp-list li {
          position: relative; padding-left: 18px;
          font-size: 15px; line-height: 1.6; color: rgba(255,255,255,0.7);
        }
        .daysp-list li::before {
          content: ""; position: absolute; left: 0; top: 0.62em;
          width: 6px; height: 6px; border-radius: 50%; background: var(--ring-b);
        }

        .daysp .daysp-note {
          margin-top: 18px; border-left: 2px solid rgba(176,140,255,0.4);
          padding-left: 14px; font-size: 14px;
        }

        .daysp-footer {
          margin-top: 52px; padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.08);
          display: flex; flex-wrap: wrap; gap: 10px 18px;
          align-items: center; justify-content: space-between;
          font-size: 12.5px; color: rgba(255,255,255,0.4);
        }
      `}</style>
    </div>
  );
}
