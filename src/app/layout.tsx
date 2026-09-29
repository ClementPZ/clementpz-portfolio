import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import { LocaleProvider } from "../components/LocaleProvider";
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

// NB : les fonts des thèmes de marque archivés (Inter/Syne pour Wise, Plus
// Jakarta Sans pour Airbnb) ont été retirées du bundle. Les réintroduire ici
// si un thème est réactivé depuis /_archive.

export const metadata: Metadata = {
  title: `${profile.name} · ${profile.tagline}`,
  description: profile.intro,
  metadataBase: new URL("https://clementpz.com"),
  openGraph: {
    title: `${profile.name} · ${profile.tagline}`,
    description: profile.intro,
    type: "website",
    locale: "fr_FR",
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} · ${profile.tagline}`,
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
      className={`${sora.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Applique le mode (dark|light) AVANT le render pour éviter le flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var m=localStorage.getItem('mode-v2');document.documentElement.setAttribute('data-theme',m==='dark'?'signature':'signature-light');}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <LocaleProvider>{children}</LocaleProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
