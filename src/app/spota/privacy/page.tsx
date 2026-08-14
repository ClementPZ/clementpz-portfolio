import type { Metadata } from "next";
import Link from "next/link";

// /spota/privacy, exigee par Apple des le premier build TestFlight externe:
// l'URL doit etre publique et vivante avant la soumission.
// Meme derogation que /spota (voir CLAUDE.md, "Exception /spota"): hors shell
// commun, mono-theme noir/lime, English only, pas d'entree i18n. Page servie
// en Server Component, aucune interactivite.
//
// Le contenu decrit l'app telle qu'elle est CODEE, pas telle qu'on l'imagine.
// A relire si l'un de ces points bouge cote SpotA:
// - auth anonyme (pas d'email ni de mot de passe), main.dart
// - localisation = texte libre tape a la main, capture.dart _editLocation,
//   il n'y a AUCUNE permission de geolocalisation dans Info.plist
// - bucket prive + URLs signees 1h, feed.dart
// - google_fonts telecharge TikTok Sans chez Google au premier lancement
//
// PIEGE: les quelques {" "} explicites apres un <b> ne sont pas du bruit. Des
// qu'un noeud texte JSX contient une entite HTML, le transform avale l'espace
// qui precede, et on lit "name.A short line". Les retirer casse la typo.

export const metadata: Metadata = {
  title: "SpotA, privacy policy",
  description:
    "What Spot a collects, why, where it lives, and how to have it deleted.",
};

const SPOT = "#cafe00";
const SPOT_INK = "#0a0d00";
const CONTACT = "clementpicardzivy@gmail.com";
const UPDATED = "6 August 2026";

export default function SpotaPrivacyPage() {
  return (
    <div className="spotap">
      <div className="spotap-shell">
        <nav className="spotap-nav">
          <Link href="/spota" className="spotap-wordmark">
            Spot<b>a</b>
          </Link>
          <Link href="/spota" className="spotap-nav-back">
            ← Back to Spot a
          </Link>
        </nav>

        <header className="spotap-head">
          <h1>Privacy policy</h1>
          <p className="spotap-meta">
            Last updated {UPDATED} · Spot a is in closed beta, distributed through
            TestFlight
          </p>
          <p className="spotap-lede">
            Spot a is a small game built by one person. It collects the least it can
            get away with: no email, no password, no phone number, no address book,
            no advertising, no analytics, no tracking across other apps or websites.
          </p>
        </header>

        <section className="spotap-section">
          <h2>Who runs this</h2>
          <p>
            Spot a is built and operated by Clément Picard Zivy, an individual
            developer, reachable at{" "}
            <a href={`mailto:${CONTACT}`}>{CONTACT}</a>. That address is the contact
            for any question, correction or deletion request covered below.
          </p>
        </section>

        <section className="spotap-section">
          <h2>What the app collects</h2>
          <ul className="spotap-list">
            <li>
              <b>Your photos.</b> Each spot is two pictures taken inside the app, the
              rear camera on the target and the front camera on you. They can only be
              taken live, there is no import from your gallery.
            </li>
            <li>
              <b>A display name.</b> Whatever you type when you join. It does not have
              to be your real name.
            </li>
            <li>
              <b>An anonymous account id.</b> A random identifier created on first
              launch so your spots stay yours. It is not linked to an email, a phone
              number, a password or your Apple ID.
            </li>
            <li>
              <b>An optional place name.</b>{" "}
              A short line you type yourself, like
              &quot;behind the station&quot;. The app never reads your device
              location, and it never asks for location permission.
            </li>
            <li>
              <b>What you did in the game.</b> Which crew you belong to, which prompt
              a spot answers, your favourites, your upvotes, your validations, and the
              time each of these happened.
            </li>
            <li>
              <b>Your self-declared age check.</b> The fact that you confirmed being 13
              or older. No date of birth is stored.
            </li>
          </ul>
          <p className="spotap-note">
            The app has no analytics SDK, no advertising SDK, no crash reporter, and no
            push notifications. Nothing you do inside it is measured for any purpose
            other than running the game.
          </p>
        </section>

        <section className="spotap-section">
          <h2>Who can see your spots</h2>
          <p>
            Only the members of your crew, and only once they have posted their own
            spot for that prompt. That gate is the game. Photos live in a private
            store, they are never public, and they are served through links that
            expire after an hour, so a copied link stops working on its own.
          </p>
          <p>
            Nothing is posted anywhere else on your behalf. Sharing an invite goes
            through your own phone&apos;s share sheet, so you pick who receives it.
          </p>
        </section>

        <section className="spotap-section">
          <h2>Where it is stored, and who else is involved</h2>
          <ul className="spotap-list">
            <li>
              <b>Supabase</b>{" "}
              hosts the database, the file storage and the anonymous
              accounts. It processes this data on Spot a&apos;s behalf and for no other
              purpose.
            </li>
            <li>
              <b>Apple</b>{" "}
              distributes the beta through TestFlight, and sees the fact
              that you installed and used a beta build. That is Apple&apos;s
              relationship with you, under Apple&apos;s own privacy policy.
            </li>
            <li>
              <b>Google Fonts</b>{" "}
              serves the app&apos;s typeface. On first launch the
              app downloads the font file from Google&apos;s servers and caches it on
              your device, which means Google sees a request carrying your IP address.
              No account data is sent with it.
            </li>
          </ul>
          <p className="spotap-note">
            Nothing is sold, rented, or handed to advertisers or data brokers. There is
            no such arrangement, and there will not be one without this page changing
            first.
          </p>
        </section>

        <section className="spotap-section">
          <h2>How long it is kept</h2>
          <p>
            Spots stay until you ask for them to go, or until the beta ends. When the
            beta ends the test database can be wiped in full. This is early software,
            so treat anything you post in it as temporary, and do not use it as the
            only copy of a photo you care about.
          </p>
        </section>

        <section className="spotap-section">
          <h2>Deleting your data</h2>
          <p>
            You can delete any of your own spots from inside the app. To have
            everything removed, the account included, email{" "}
            <a href={`mailto:${CONTACT}`}>{CONTACT}</a> from any address and say so.
            Deletion is done by hand and confirmed back to you.
          </p>
          <p>
            One consequence of anonymous accounts, and it cuts both ways: there is
            nothing to prove an account is yours other than being on the device that
            created it. So please write in from the phone you play on, and mention your
            display name and crew.
          </p>
          <p>
            Depending on where you live you may also have the right to ask what is held
            about you, to have it corrected, or to get a copy. Same address, same
            answer, by hand.
          </p>
        </section>

        <section className="spotap-section">
          <h2>Age</h2>
          <p>
            Spot a is for people aged 13 and over, and it asks you to confirm that when
            you join. It is not aimed at children under 13 and it does not knowingly
            keep their data. If you are a parent or guardian and believe a child under
            13 is using it, write to{" "}
            <a href={`mailto:${CONTACT}`}>{CONTACT}</a> and the account will be removed.
          </p>
        </section>

        <section className="spotap-section">
          <h2>A word on what you point the camera at</h2>
          <p>
            The game sends you out into the real world, so other people can end up in
            the frame. Be decent about it: no photographing anyone who does not want
            it, nothing you would not want taken of you, nothing that identifies where
            someone lives. Spots that break that get removed.
          </p>
        </section>

        <section className="spotap-section">
          <h2>Changes</h2>
          <p>
            If what the app collects changes, this page changes with it, and the date at
            the top moves. During the beta that is the only notice you get, so it is
            worth a glance when a new build lands.
          </p>
        </section>

        <footer className="spotap-footer">
          <span>Spot a · 2026 · Ages 13+</span>
          <Link href="/spota" className="spotap-nav-back">
            ← Back to Spot a
          </Link>
        </footer>
      </div>

      <style>{`
        .spotap {
          --spot: ${SPOT};
          --spot-ink: ${SPOT_INK};
          min-height: 100vh;
          background: #000;
          color: #fff;
          font-family: var(--font-dm-sans), system-ui, sans-serif;
          background-image:
            radial-gradient(1200px 600px at 20% -10%, rgba(202,254,0,0.06), transparent 60%);
        }
        .spotap * { box-sizing: border-box; }
        .spotap h1, .spotap h2, .spotap p { margin: 0; }
        .spotap h1, .spotap h2, .spotap-wordmark {
          font-family: var(--font-sora), var(--font-dm-sans), sans-serif;
        }

        .spotap-shell { max-width: 680px; margin: 0 auto; padding: 0 24px 72px; }

        .spotap-nav {
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; padding: 22px 0 0;
        }
        .spotap-wordmark {
          font-weight: 800; font-size: 20px; letter-spacing: -0.3px;
          color: #fff; text-decoration: none;
        }
        .spotap-wordmark b { color: var(--spot); }
        .spotap-nav-back { font-size: 13px; color: rgba(255,255,255,0.7); text-decoration: none; }
        .spotap-nav-back:hover { color: #fff; }

        .spotap-head { padding: 56px 0 8px; }
        .spotap-head h1 {
          font-size: clamp(32px, 6vw, 46px);
          font-weight: 800; line-height: 1.05; letter-spacing: -1.2px;
          color: var(--spot);
        }
        /* Doublement scopees (.spotap .spotap-meta) et pas juste par leur
           classe: le reset ".spotap p { margin: 0 }" plus haut est un
           selecteur classe + type, donc plus specifique qu'une classe seule,
           et il ecrasait ces margin-top. */
        .spotap .spotap-meta {
          margin-top: 16px; font-size: 12.5px; letter-spacing: 0.02em;
          color: rgba(255,255,255,0.38);
        }
        .spotap .spotap-lede {
          margin-top: 22px; font-size: 16.5px; line-height: 1.6;
          color: rgba(255,255,255,0.78);
        }

        .spotap-section { padding: 34px 0 0; }
        .spotap-section h2 {
          font-size: clamp(19px, 3.4vw, 23px); font-weight: 800;
          letter-spacing: -0.5px; line-height: 1.15;
        }
        .spotap-section p {
          margin-top: 12px; font-size: 15px; line-height: 1.65;
          color: rgba(255,255,255,0.7);
        }
        .spotap-section p b, .spotap-list b { color: #fff; font-weight: 700; }
        .spotap-section a { color: var(--spot); text-decoration: none; }
        .spotap-section a:hover { text-decoration: underline; }

        .spotap-list {
          margin: 14px 0 0; padding: 0; list-style: none;
          display: grid; gap: 12px;
        }
        .spotap-list li {
          position: relative; padding-left: 18px;
          font-size: 15px; line-height: 1.6; color: rgba(255,255,255,0.7);
        }
        .spotap-list li::before {
          content: ""; position: absolute; left: 0; top: 0.62em;
          width: 6px; height: 6px; border-radius: 50%; background: var(--spot);
        }

        .spotap .spotap-note {
          margin-top: 18px;
          border-left: 2px solid rgba(202,254,0,0.35);
          padding-left: 14px;
          font-size: 14px;
        }

        .spotap-footer {
          margin-top: 52px; padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.08);
          display: flex; flex-wrap: wrap; gap: 10px 18px;
          align-items: center; justify-content: space-between;
          font-size: 12.5px; color: rgba(255,255,255,0.38);
        }
      `}</style>
    </div>
  );
}
