// ============================================================================
// Données STRUCTURELLES du portfolio (non traduisibles).
// Tout le TEXTE localisé (rôles, bullets, taglines, descriptions…) vit dans
// src/data/i18n.ts, clé par `id`. Ici : ids, entreprises, périodes, tags,
// couleurs d'identité projet, liens.
// ============================================================================

export const profile = {
  name: "Clément Picard-Zivy",
  shortName: "Clément PZ",
  tagline: "Product Design × AI",
  intro:
    "Hello, I'm Clément, a product designer with 10+ years across product, business and design systems. I worked in healthcare SaaS for the past 5 years, built the design function at Nasdaq-listed NRC Health from scratch and led a team of three, from research and design to production and analytics. Before that I founded a coding campus in Mexico City and ran marketing and sales projects at Devialet. So I always start from the business question.",
  email: "clementpicardzivy@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/clément-picard-zivy-b6930155/",
    github: "https://github.com/ClementPZ",
  },
};

// ============================================================================
// Stack — outils du quotidien, affichés en pills sous le hero.
// icon = clé d'icône rendue par StackIcon.
// ============================================================================

export const stack: { label: string; icon: string }[] = [
  { label: "Figma suite", icon: "figma" },
  { label: "Claude suite", icon: "claude" },
  { label: "GitHub", icon: "github" },
  { label: "MCP", icon: "mcp" },
  { label: "Plugins", icon: "plugins" },
  { label: "Docker", icon: "docker" },
  { label: "VS Code", icon: "vscode" },
  { label: "Notion", icon: "notion" },
];

// ============================================================================
// Work — expériences (structurel). Le rôle, les bullets et l'impact localisés
// sont dans i18n.ts → workText[locale][id]. Ordre = ordre d'affichage.
// ============================================================================

// Identifiants des expériences. Cette liste est la source de vérité : i18n.ts
// doit fournir un texte pour chacun dans les 3 langues, sinon le build casse.
export type WorkId =
  | "nrc"
  | "episource"
  | "seif"
  | "lewagon"
  | "welcomhere"
  | "devialet";

export type WorkItem = {
  id: WorkId;
  company: string;
  period: string;
  location: string;
  tags: string[];
  image?: string; // logo/avatar 52px (sinon placeholder monogramme généré)
  photo?: string; // grand visuel de carte, entre la localisation et les puces
  link?: string; // page de case study dédiée, rendue en pied de carte
};

export const work: WorkItem[] = [
  {
    id: "nrc",
    company: "NRC Health (Nasdaq: NRC)",
    period: "2024 - Present",
    location: "Lincoln, USA · Paris",
    tags: ["Healthcare", "SaaS", "Design System", "Lead", "AI"],
    photo: "/work/nrc.jpg",
    link: "/nrc",
  },
  {
    id: "episource",
    company: "Episource · Optum (NYSE: UNH)",
    period: "2021 - 2024",
    location: "Los Angeles, Remote",
    tags: ["Healthcare", "AI", "Design System", "Enterprise", "NLP"],
    photo: "/work/episource.jpg",
  },
  {
    id: "lewagon",
    company: "Le Wagon",
    period: "2017 - 2021",
    location: "Mexico City",
    tags: ["Founder", "Education", "Teaching", "LATAM"],
    photo: "/work/lewagon.jpg",
  },
  {
    id: "devialet",
    company: "Devialet",
    period: "2011 - 2015",
    location: "Paris · Europe",
    tags: ["Retail", "Luxury", "Operations", "Europe"],
    photo: "/work/devialet.jpg",
  },
  {
    id: "seif",
    company: "SEIF",
    period: "2020 - 2021",
    location: "Mexico City, Remote",
    tags: ["Fintech", "Blockchain", "Mobile", "Design System"],
  },
  {
    id: "welcomhere",
    company: "Welcomhere",
    period: "2015 - 2017",
    location: "Paris",
    tags: ["Founder", "Social Impact", "Product", "NGO"],
  },
];

// ============================================================================
// Recommendations — citations LinkedIn (en anglais, non traduites).
// ============================================================================

export type Reco = {
  author: string;
  title: string;
  quote: string;
  linkedin?: string; // href vide pour l'instant — à valider avec eux
  pinnedTo?: WorkId; // rendue en tete de cette carte plutot que dans le bloc editorial
};

export const recommendations: Reco[] = [
  {
    author: "C. Louvion",
    title: "CTO @ Episource",
    quote:
      "Clément brings the full design package: deep user research, journey maps, personas, and fast prototyping, in close collaboration with users, product, and engineering, presenting results clearly to sr leadership.",
    linkedin: "https://www.linkedin.com/in/chrislouvion/",
    pinnedTo: "episource",
  },
  {
    author: "V. Ramnathan",
    title: "CPO @ NRC Health",
    quote:
      "Clément built our design function from nothing, hired the team, and set the bar for how design worked across all four product lines. He was as comfortable in C-suite product strategy conversations as he was shipping production design and AI tooling. Whatever team he joins next just got stronger.",
    linkedin: "https://www.linkedin.com/in/vinithacramnathan/",
    pinnedTo: "nrc",
  },
];

// ============================================================================
// Recent projects (structurel). tagline/description localisées dans i18n.ts →
// projectText[locale][id]. accent/accent2 = couleurs d'IDENTITÉ projet (données,
// volontairement en dur, pas des tokens de thème). Ordre = ordre d'affichage.
// ============================================================================

export type ProjectStatus =
  | "live"
  | "in progress"
  | "concept"
  | "concept-wip"
  | "fail"
  | "private-live";

// Identifiants des projets du carrousel. Même règle que WorkId : chaque id doit
// avoir son texte dans i18n.ts, en EN, FR et ES.
export type ProjectId =
  | "dj-energy"
  | "paris-conf"
  | "job-search"
  | "graphic-history"
  | "couples-card"
  | "builder-flow"
  | "legal-music"
  | "spota"
  | "making-of"
  | "interior-design"
  | "remarkable-calendar-sync"
  | "days";

export type RecentProject = {
  id: ProjectId;
  name: string;
  status: ProjectStatus;
  tags: string[];
  accent: string;
  accent2: string;
  link?: string;
  image?: string; // photo de fond de carte (sinon gradient accent/accent2)
  motif?: "zigzag"; // signe graphique du projet, dessine sur le degrade
  // Habillage de carte quand la marque du projet impose sa propre hiérarchie
  // (badge, motif, tags). Non renseigné = les défauts blancs translucides du
  // carrousel, donc aucune carte existante ne bouge.
  brand?: {
    motif?: string;
    badgeBg?: string;
    badgeText?: string;
    tagBg?: string;
  };
};

// Ordre d'affichage gauche → droite dans le carrousel. Builder Flow est au
// centre : le carrousel s'ouvre centré dessus (initialSlide dans RecentProjects).
export const recentProjects: RecentProject[] = [
  {
    id: "dj-energy",
    name: "DJ Energy Classifier",
    status: "fail",
    tags: ["Python", "librosa", "Audio ML"],
    accent: "#db2777",
    accent2: "#18181b",
  },
  {
    id: "paris-conf",
    name: "Paris Conferences",
    status: "concept",
    tags: ["Next.js", "Open Data", "TypeScript"],
    accent: "#2563eb",
    accent2: "#0f172a",
  },
  {
    id: "job-search",
    name: "Job Search",
    status: "concept",
    tags: ["API", "Cloudflare Worker", "UX"],
    accent: "#0891b2",
    accent2: "#083344",
  },
  {
    id: "graphic-history",
    name: "History of Graphic Design",
    status: "concept",
    tags: ["Data Viz", "Design", "History"],
    accent: "#ca8a04",
    accent2: "#1c1917",
  },
  {
    id: "couples-card",
    name: "Couples Card Game",
    status: "concept-wip",
    tags: ["Flutter", "Game Design", "Product"],
    accent: "#ea580c",
    accent2: "#1c1917",
  },
  // ── Carte centrale : le carrousel s'ouvre ici ──
  {
    id: "builder-flow",
    name: "Builder Flow",
    status: "concept-wip",
    tags: ["Claude Code", "Design System", "AI"],
    accent: "#7c3aed",
    accent2: "#1e1b4b",
    link: "/builder",
  },
  // Voisine immédiate de Builder : les deux projets en vedette sur la home se
  // suivent aussi dans le deck.
  // Couleurs = l'identité réelle de l'app (SpotColors, lib/theme.dart du repo
  // SpotA) : noir de marque en fond, CTA lime, accent violet. C'est la
  // hiérarchie de l'app elle-même, donc ce que l'oeil reconnaît.
  {
    id: "spota",
    name: "SpotA",
    status: "in progress",
    tags: ["Flutter", "Supabase", "Social Game"],
    accent: "#1a1a1a",
    accent2: "#000000",
    // Pas de photo : le zigzag suffit a nommer l'app, et c'est le meme signe
    // que sous les titres de la page /spota.
    motif: "zigzag",
    brand: {
      motif: "#9922ff", // electricViolet
      badgeBg: "#cafe00", // bratLime, la couleur du CTA de l'app
      badgeText: "#0a0d00",
      tagBg: "rgba(153, 34, 255, 0.28)",
    },
    link: "/spota",
  },
  {
    id: "legal-music",
    name: "Music Downloader",
    status: "private-live",
    tags: ["Automation", "Audio", "Pipeline"],
    accent: "#059669",
    accent2: "#022c22",
    link: "/music-downloader",
  },
  // Carte méta : le portfolio comme projet du portfolio. Seule carte aux
  // couleurs de l'identité (aubergine signature) → visuellement "spéciale".
  {
    id: "making-of",
    name: "This Very Portfolio",
    status: "live",
    tags: ["Meta", "Hackathon Mode", "Claude Code"],
    accent: "#54255a",
    accent2: "#1a0e1c",
    link: "/making-of",
  },
  {
    id: "interior-design",
    name: "Apartment Interior Design",
    status: "live",
    tags: ["Interior", "Community", "Design"],
    accent: "#9a3412",
    accent2: "#1c1917",
    image: "/interior/carroussel.JPG",
    link: "/interior",
  },
  {
    id: "remarkable-calendar-sync",
    name: "reMarkable Calendar Sync",
    status: "private-live",
    tags: ["TypeScript", "Automation", "reMarkable"],
    accent: "#57534e",
    accent2: "#0c0a09",
    link: "/remarkable-calendar-sync",
  },
  // Couleurs = l'identite de l'app (Theme.swift du repo day-counter): l'indigo
  // du degrade d'accent sur le fond nuit de l'app.
  {
    id: "days",
    name: "Days",
    status: "in progress",
    tags: ["Swift", "SwiftUI", "WidgetKit"],
    accent: "#4f52e6",
    accent2: "#0b0e17",
    link: "/days",
  },
];

// ============================================================================
// Photos de la galerie /interior (structurel, pas de texte à traduire : pas
// de légende par photo). Le vote par photo vit côté client (InteriorContent),
// compteur abacus (namespace clementpz, clé `interior-photo-{id}`).
// ============================================================================

export type InteriorPhoto = {
  id: string;
  file: string;
};

// Ordre = ordre par défaut à égalité de votes (tri stable).
export const interiorPhotos: InteriorPhoto[] = [
  { id: "carroussel", file: "/interior/carroussel.JPG" },
  { id: "c1", file: "/interior/c1.JPG" },
  { id: "c3", file: "/interior/c3.JPG" },
  { id: "c4", file: "/interior/c4.JPG" },
  { id: "c6", file: "/interior/c6.JPG" },
];

// ============================================================================
// Thèmes — V1 : identité unique "signature" (aubergine) en dark/light.
// Les 4 thèmes de marque (Spotify/Wise/Apple/Airbnb) sont ARCHIVÉS dans
// /_archive (hors bundle). Voir _archive/README.md pour les réactiver.
// ============================================================================

export type ThemeId = "signature" | "signature-light";

export const defaultTheme: ThemeId = "signature-light";
