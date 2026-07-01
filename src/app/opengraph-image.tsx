import { ImageResponse } from "next/og";
import { profile } from "../data/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${profile.name} — ${profile.tagline}`;

// Carte de partage (LinkedIn, mail, Slack). Identité aubergine "signature".
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(900px 500px at 78% -10%, #54255a 0%, #1a0e1c 55%, #100710 100%)",
          color: "#f5eff6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 24,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#c9a6d2",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#b370c0",
            }}
          />
          V1 — Shipping in public
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              fontSize: 44,
              fontWeight: 600,
              marginTop: 18,
              color: "#d3a6dd",
            }}
          >
            {profile.tagline}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "#a897ac" }}>
          Product Design Lead · NRC Health · 10+ ans design, systems & IA
        </div>
      </div>
    ),
    { ...size }
  );
}
