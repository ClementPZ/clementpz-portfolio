import type { Metadata } from "next";
import { profile } from "../data/content";

// Fiche SEO et carte de partage d'une page. Next remplace l'objet openGraph du
// layout en entier dès qu'une page définit le sien : type et siteName sont donc
// répétés ici, sinon chaque page partagerait le titre de la home. L'image, elle
// aussi, n'est plus héritée : on pointe vers la carte de la home.
const image = "/opengraph-image";

export function pageMeta(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      locale: "en_US",
      siteName: profile.name,
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
