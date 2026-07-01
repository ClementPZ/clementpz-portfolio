import { ImageResponse } from "next/og";
import { profile } from "../data/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${profile.name} — ${profile.tagline}`;

// Share card — minimal: light aubergine background (like the light theme),
// just the name. Simple and clean.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(1000px 560px at 50% 0%, rgba(84,37,90,0.10) 0%, transparent 62%), #faf6fb",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            letterSpacing: -3,
            color: "#241726",
            textAlign: "center",
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            fontSize: 34,
            fontWeight: 500,
            marginTop: 20,
            color: "#6a2d75",
            letterSpacing: 1,
          }}
        >
          {profile.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
