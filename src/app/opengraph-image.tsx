import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { profile } from "../data/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${profile.name} — ${profile.tagline}`;

// Share card (LinkedIn, email, Slack). Jégousse-style: circular photo + name in
// an aubergine gradient, on the "signature" aubergine background.
export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/clement.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 80px",
          background:
            "radial-gradient(900px 620px at 85% -20%, #54255a 0%, #1a0e1c 58%, #100710 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 660 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 22,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#c9a6d2",
              marginBottom: 26,
            }}
          >
            <div style={{ width: 13, height: 13, borderRadius: 999, background: "#b370c0" }} />
            V1 — Shipping in public
          </div>

          <div
            style={{
              fontSize: 82,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: -2,
              backgroundImage: "linear-gradient(100deg, #f5eff6 0%, #d3a6dd 45%, #b370c0 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {profile.name}
          </div>

          <div style={{ fontSize: 40, fontWeight: 600, marginTop: 18, color: "#e7d6ec" }}>
            {profile.tagline}
          </div>

          <div style={{ display: "flex", fontSize: 24, color: "#a897ac", marginTop: 28 }}>
            Product Design Leader · NRC Health · 10+ yrs design, systems &amp; AI
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: 300,
            height: 300,
            borderRadius: 999,
            overflow: "hidden",
            border: "5px solid rgba(245,239,246,0.9)",
            boxShadow: "0 30px 80px rgba(10,3,12,0.6)",
            flexShrink: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoSrc}
            alt=""
            width={300}
            height={300}
            style={{ width: 300, height: 300, objectFit: "cover", objectPosition: "center 30%" }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
