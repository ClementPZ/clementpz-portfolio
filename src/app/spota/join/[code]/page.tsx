import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// /spota/join/<code>, the page a friend's invite link lands on.
//
// On a phone with Spot a installed the app opens by itself from this address
// (universal link, public/.well-known/apple-app-site-association) and this page
// is never seen. It is what everyone else gets: a button that opens the app on
// its own scheme, the code to type by hand, and where to get the beta.
//
// Meme derogation que /spota (voir CLAUDE.md, "Exception /spota"): English
// only, mono-theme, hors shell commun. Not indexed, a code is not content.
// The preview image is opengraph-image.tsx beside this file. Next drops the
// layout's openGraph object as soon as a page sets its own (pageMeta.ts), so
// the title and description are repeated here, otherwise an invite would be
// shared under the portfolio's own title.
const TITLE = "Spot with me on Spot a";
const DESCRIPTION = "One dare a day, shot with both cameras. Join my crew.";

export const metadata: Metadata = {
  title: "Join a friend on Spot a",
  description: DESCRIPTION,
  robots: { index: false, follow: false },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    siteName: "Spot a",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const SPOT = "#cafe00";
const SPOT_INK = "#0a0d00";
const BETA_MAILTO =
  "mailto:clementpicardzivy@gmail.com?subject=Spot%20a%20beta";

export default async function SpotaJoinPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code: raw } = await params;
  const code = raw.toUpperCase();
  // The same shape the app accepts, eight letters and digits in practice.
  if (!/^[A-Z0-9]{6,12}$/.test(code)) notFound();

  return (
    <div className="spotj">
      <div className="spotj-shell">
        <Link href="/spota" className="spotj-wordmark">
          Spot<b>a</b>
        </Link>
        <h1>A friend invited you to Spot a</h1>
        <p className="spotj-lede">
          One dare a day, shot with both cameras, shared with the friends you let in.
          Open the app to join their crew.
        </p>
        <a className="spotj-btn" href={`spota://join/${code}`}>
          Open Spot a
        </a>
        <p className="spotj-small">
          If the app does not open, type this code in it, on the crew page, long press
          the title:
        </p>
        <div className="spotj-code">{code}</div>
        <p className="spotj-small">
          Do not have Spot a yet? It is in closed beta on iOS, for people aged 16 and
          over. <a href={BETA_MAILTO}>Ask for the beta</a>.
        </p>
      </div>

      <style>{`
        .spotj {
          --spot: ${SPOT};
          min-height: 100vh; background: #000; color: #fff;
          font-family: var(--font-dm-sans), system-ui, sans-serif;
          background-image:
            radial-gradient(1200px 600px at 20% -10%, rgba(202,254,0,0.06), transparent 60%);
        }
        .spotj * { box-sizing: border-box; }
        .spotj h1, .spotj p { margin: 0; }
        .spotj-shell { max-width: 520px; margin: 0 auto; padding: 56px 24px 72px; }
        .spotj-wordmark {
          font-family: var(--font-sora), var(--font-dm-sans), sans-serif;
          font-weight: 800; font-size: 22px; letter-spacing: -0.3px;
          color: #fff; text-decoration: none;
        }
        .spotj-wordmark b { color: var(--spot); }
        .spotj h1 {
          margin-top: 48px;
          font-family: var(--font-sora), var(--font-dm-sans), sans-serif;
          font-size: clamp(30px, 7vw, 42px); font-weight: 800;
          line-height: 1.05; letter-spacing: -1.1px; color: var(--spot);
        }
        .spotj .spotj-lede {
          margin-top: 18px; font-size: 16px; line-height: 1.6;
          color: rgba(255,255,255,0.78);
        }
        .spotj-btn {
          display: inline-flex; align-items: center; justify-content: center;
          margin-top: 28px; height: 52px; padding: 0 28px; border-radius: 26px;
          background: var(--spot); color: ${SPOT_INK}; font-weight: 800;
          font-size: 15px; text-decoration: none; border: 3px solid ${SPOT_INK};
          box-shadow: 0 0 0 1px rgba(202,254,0,0.4);
        }
        .spotj .spotj-small {
          margin-top: 28px; font-size: 14px; line-height: 1.6;
          color: rgba(255,255,255,0.6);
        }
        .spotj .spotj-small a { color: var(--spot); text-decoration: none; }
        .spotj .spotj-small a:hover { text-decoration: underline; }
        .spotj-code {
          margin-top: 10px; display: inline-block; padding: 12px 18px;
          border-radius: 14px; border: 1px solid rgba(255,255,255,0.14);
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 22px; letter-spacing: 0.18em; color: #fff;
        }
      `}</style>
    </div>
  );
}
