import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { profile } from "../data/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${profile.name} · ${profile.tagline}`;

// Share card — Jégousse-style: circular photo centered, name below in a vibrant
// aubergine gradient, on a light background. Minimal.
export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/clement-bw.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

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
          gap: 44,
          background:
            "radial-gradient(1000px 560px at 50% 0%, rgba(84,37,90,0.10) 0%, transparent 62%), #faf6fb",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 230,
            height: 230,
            borderRadius: 999,
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(84,37,90,0.18)",
          }}
        >
          <img
            src={photoSrc}
            alt=""
            width={230}
            height={230}
            style={{
              width: 230,
              height: 230,
              borderRadius: 999,
              objectFit: "cover",
              objectPosition: "32% 26%",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <div
            style={{
              fontSize: 100,
              fontWeight: 800,
              letterSpacing: -3,
              lineHeight: 1,
              backgroundImage: "linear-gradient(100deg, #2c1030 0%, #54255a 45%, #7a3a70 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 500,
              letterSpacing: 1,
              color: "#8a5a90",
            }}
          >
            {profile.tagline}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
