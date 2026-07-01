import { ImageResponse } from "next/og";

// Favicon PNG généré (robuste cross-navigateur — Safari gère mal les SVG à
// texte). "C" blanc sur tuile aubergine. Le SVG adaptatif est en /_archive.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#54255a",
          borderRadius: 14,
          color: "#ffffff",
          fontSize: 44,
          fontWeight: 800,
          fontFamily: "sans-serif",
        }}
      >
        C
      </div>
    ),
    { ...size }
  );
}
