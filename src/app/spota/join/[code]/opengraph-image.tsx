import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "A friend invited you to Spot a";

// The card a messaging app shows under an invite link. It is the "Go wake up
// your crew" picture of the app, the lime mission card tilted over two flat
// discs, resized to the link preview ratio. Colours read off lib/theme.dart on
// the SpotA side, the same ones as SpotaShared.tsx. The font is Anton, fetched
// from Google Fonts for the few letters used, and the card falls back to the
// default font when that fetch fails, so a preview never breaks over a font.
const GROUND = "#121014";
const VIOLET = "#9922ff";
const PINK = "#ff3ea5";
const LIME = "#cafe00";
const INK = "#0a0a0a";

const LINES = ["SPOT WITH ME", "ON SPOT A"];
const KICKER = "A FRIEND INVITED YOU";
const FOOT = "ONE DARE A DAY";

async function loadAnton(): Promise<ArrayBuffer | null> {
  try {
    const text = encodeURIComponent([...LINES, KICKER, FOOT].join(""));
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

export default async function SpotaJoinImage() {
  const anton = await loadAnton();
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
          <div style={{ fontSize: 40, letterSpacing: 4, color: PINK, marginBottom: 30 }}>
            {KICKER}
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
              padding: "26px 44px 30px",
              transform: "rotate(-2.5deg)",
              fontSize: 124,
              lineHeight: 1.02,
            }}
          >
            {LINES.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </div>
          <div style={{ fontSize: 40, letterSpacing: 4, color: "#ffffff", marginTop: 40 }}>
            {FOOT}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: anton ? [{ name: "Anton", data: anton, style: "normal", weight: 400 }] : [],
    },
  );
}
