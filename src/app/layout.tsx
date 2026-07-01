import type { Metadata } from "next";
import { Sora, DM_Sans, Inter, Syne, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import { profile, defaultTheme } from "../data/content";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Wise — Inter (body) + Syne (display, approx. Wise Sans)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

// Airbnb — Plus Jakarta Sans (approx. Airbnb Cereal — même ADN géométrique humaniste)
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.tagline}`,
  description: profile.intro,
  metadataBase: new URL("https://portfoliomai2026.vercel.app"),
  openGraph: {
    title: `${profile.name} — ${profile.tagline}`,
    description: profile.intro,
    type: "website",
    locale: "fr_FR",
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.tagline}`,
    description: profile.intro,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // data-theme = thème par défaut (rendu SSR). Le ThemeProvider peut le changer
  // côté client après hydration sans flicker grâce à un script inline.
  return (
    <html
      lang="fr"
      data-theme={defaultTheme}
      className={`${sora.variable} ${dmSans.variable} ${inter.variable} ${syne.variable} ${jakarta.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Applique le mode (dark|light) AVANT le render pour éviter le flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var m=localStorage.getItem('mode');document.documentElement.setAttribute('data-theme',m==='light'?'signature-light':'signature');}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
