import type { Metadata } from "next";
import Link from "next/link";
import { ImageResponse } from "next/og";

import CopyAnchor from "./[code]/CopyAnchor";

// What an invite link to Spot a says, in one place, so the page, the preview
// image a messaging app draws under the link, and the text the app sends read
// the same. Copy settled 19 Oct 2026 with Clement:
//   kicker  "<NAME> INVITED YOU"          ("A FRIEND INVITED YOU" without a name)
//   big     "ONE POST A DAY," over "KEEP THE DOCTOR AWAY", Clement's wording
//   foot    "JOIN ME ON SPOT A", bottom right
//
// The inviter's name is NOT read from Spot a's base, which only answers a code
// to signed in players on purpose. The app puts it in the link itself,
// /spota/join/from/<name>/<code>, and the name is shown as given. So it is
// cleaned here before it goes near a page or an image: letters, digits, space,
// dot, dash and underscore, 24 characters at most. Nothing else is drawn.

export const OG_SIZE = { width: 1200, height: 630 };

const DESCRIPTION = "One post a day, keep the doctor away. Join me on Spot a.";

export function cleanName(raw: string | undefined): string | undefined {
  if (!raw) return undefined;
  let text = raw;
  try {
    text = decodeURIComponent(raw);
  } catch {
    // Not valid percent encoding, use it as it came.
  }
  const name = text
    .replace(/[^\p{L}\p{N} ._-]/gu, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 24)
    .trim();
  return name || undefined;
}

export function joinTitle(name?: string): string {
  return `${name ?? "A friend"} invited you to Spot a`;
}

// The layout's openGraph object is dropped as soon as a page sets its own
// (pageMeta.ts), so the title and description are repeated here, otherwise an
// invite would be shared under the portfolio's own title. The image is the
// opengraph-image.tsx beside the page.
export function joinMetadata(name?: string): Metadata {
  const title = joinTitle(name);
  return {
    title,
    description: DESCRIPTION,
    robots: { index: false, follow: false },
    openGraph: { title, description: DESCRIPTION, type: "website", siteName: "Spot a" },
    twitter: { card: "summary_large_image", title, description: DESCRIPTION },
  };
}

// ---- the preview image ----------------------------------------------------

// Colours read off lib/theme.dart on the SpotA side, the same ones as
// SpotaShared.tsx. The font is Anton, fetched from Google Fonts for the few
// letters used, and the card falls back to the default font when that fetch
// fails, so a preview never breaks over a font.
const GROUND = "#121014";
const VIOLET = "#9922ff";
const PINK = "#ff3ea5";
const LIME = "#cafe00";
const INK = "#0a0a0a";

const LINES = ["ONE POST A DAY,", "KEEP THE DOCTOR AWAY"];
const FOOT = "JOIN ME ON SPOT A";

async function loadAnton(extra: string): Promise<ArrayBuffer | null> {
  try {
    const text = encodeURIComponent([...LINES, FOOT, "A FRIEND INVITED YOU", extra].join(""));
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=Anton&text=${text}`)
    ).text();
    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    return await (await fetch(url)).arrayBuffer();
  } catch {
    return null;
  }
}

export async function renderJoinCard(name?: string): Promise<ImageResponse> {
  const kicker = `${name ? name.toUpperCase() : "A FRIEND"} INVITED YOU`;
  const anton = await loadAnton(kicker);
  const family = anton ? "Anton" : "sans-serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: GROUND,
          fontFamily: family,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -190,
            right: -150,
            width: 560,
            height: 560,
            borderRadius: 280,
            background: VIOLET,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -240,
            left: -170,
            width: 620,
            height: 620,
            borderRadius: 310,
            background: PINK,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            padding: "0 90px",
          }}
        >
          <div style={{ fontSize: 40, letterSpacing: 4, color: VIOLET, marginBottom: 26 }}>
            {kicker}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "flex-start",
              background: LIME,
              color: INK,
              border: `8px solid ${INK}`,
              borderRadius: 28,
              padding: "22px 40px 26px",
              transform: "rotate(-2.5deg)",
              fontSize: 98,
              lineHeight: 1.02,
            }}
          >
            {LINES.map((line) => (
              <div key={line} style={{ whiteSpace: "nowrap" }}>
                {line}
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            right: 70,
            bottom: 52,
            fontSize: 40,
            letterSpacing: 4,
            color: "#ffffff",
          }}
        >
          {FOOT}
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: anton ? [{ name: "Anton", data: anton, style: "normal", weight: 400 }] : [],
    },
  );
}

// ---- the page --------------------------------------------------------------

const SPOT = "#cafe00";
const SPOT_INK = "#0a0d00";
const BETA_MAILTO =
  "mailto:clementpicardzivy@gmail.com?subject=Spot%20a%20beta";

// On a phone with Spot a installed the app opens by itself from this address
// (universal link, public/.well-known/apple-app-site-association) and this page
// is never seen. It is what everyone else gets: a button that opens the app on
// its own scheme, the code to type by hand, and where to get the beta.
//
// Meme derogation que /spota (voir CLAUDE.md, "Exception /spota"): English
// only, mono-theme, hors shell commun. Not indexed, a code is not content.
//
// The two anchors that leave the page put the invite link on the clipboard
// (CopyAnchor), so the app can read it back on its first launch after the
// install. The code is the whole point of that link, the name in front of it
// is not needed.
export function JoinView({ code, name }: { code: string; name?: string }) {
  const link = `https://clementpz.com/spota/join/${code}`;
  return (
    <div className="spotj">
      <div className="spotj-shell">
        <Link href="/spota" className="spotj-wordmark">
          Spot<b>a</b>
        </Link>
        <h1>{joinTitle(name)}</h1>
        <p className="spotj-lede">
          One post a day, keep the doctor away. Join me on Spot a. Open the app to join{" "}
          {name ? `${name}'s` : "their"} team.
        </p>
        <CopyAnchor className="spotj-btn" href={`spota://join/${code}`} copy={link}>
          Open Spot a
        </CopyAnchor>
        <p className="spotj-small">
          If the app does not open, type this code in it, on the crew page, long press
          the title:
        </p>
        <div className="spotj-code">{code}</div>
        <p className="spotj-small">
          Do not have Spot a yet? It is in closed beta on iOS, for people aged 16 and
          over. <CopyAnchor href={BETA_MAILTO} copy={link}>Ask for the beta</CopyAnchor>
          . Your invite is kept: the app picks it up the first time it opens.
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
