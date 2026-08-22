// ============================================================================
// Données STRUCTURELLES du portfolio (non traduisibles).
// Tout le TEXTE localisé (rôles, bullets, taglines, descriptions…) vit dans
// src/data/i18n.ts, clé par `id`. Ici : ids, entreprises, périodes, tags,
// couleurs d'identité projet, liens.
// ============================================================================

export const profile = {
  name: "Clément Picard-Zivy",
  shortName: "Clément PZ",
  tagline: "Product Design × Code × AI",
  intro:
    "Hello, I'm Clément, a product designer with 10+ years of experience across product, business, design systems and innovation. I built the design function at NRC Health (Nasdaq: NRC) from scratch, and today I lead a team of three, from research to production to analytics. My role as a sales and marketing project manager at Devialet, various entrepreneurial projects, then founding a coding campus in Mexico City shaped my business-first approach, which guides how I do product today.",
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

export type WorkItem = {
  id: string;
  company: string;
  period: string;
  location: string;
  tags: string[];
  image?: string; // visuel de carte (sinon placeholder monogramme généré)
};

export const work: WorkItem[] = [
  {
    id: "nrc",
    company: "NRC Health",
    period: "2024 — Present",
    location: "Lincoln, USA · Paris",
    tags: ["Healthcare", "SaaS", "Design System", "Lead", "AI"],
  },
  {
    id: "episource",
    company: "Episource · Optum (UnitedHealth Group)",
    period: "2021 — 2024",
    location: "Los Angeles, Remote",
    tags: ["Healthcare", "AI", "Design System", "Enterprise", "NLP"],
  },
  {
    id: "seif",
    company: "SEIF",
    period: "2020 — 2021",
    location: "Mexico City, Remote",
    tags: ["Fintech", "Blockchain", "Mobile", "Design System"],
  },
  {
    id: "lewagon",
    company: "Le Wagon",
    period: "2017 — 2021",
    location: "Mexico City",
    tags: ["Founder", "Education", "Teaching", "LATAM"],
  },
  {
    id: "welcomhere",
    company: "Welcomhere",
    period: "2015 — 2017",
    location: "Paris",
    tags: ["Founder", "Social Impact", "Product", "NGO"],
  },
  {
    id: "devialet",
    company: "Devialet",
    period: "2011 — 2015",
    location: "Paris · Europe",
    tags: ["Retail", "Luxury", "Operations", "Europe"],
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
};

export const recommendations: Reco[] = [
  {
    author: "C. Louvion",
    title: "CTO @ NRC Health",
    quote:
      "Clément brings the full design package: deep user research, journey maps, personas, and fast prototyping, in close collaboration with users, product, and engineering, presenting results clearly to sr leadership.",
    linkedin: "https://www.linkedin.com/in/chrislouvion/",
  },
  {
    author: "V. Ramnathan",
    title: "CPO @ NRC Health",
    quote:
      "Clément built our design function from nothing, hired the team, and set the bar for how design worked across all four product lines. He was as comfortable in C-suite product strategy conversations as he was shipping production design and AI tooling. I'd hire him again.",
    linkedin: "https://www.linkedin.com/in/vinithacramnathan/",
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

export type RecentProject = {
  id: string;
  name: string;
  status: ProjectStatus;
  tags: string[];
  accent: string;
  accent2: string;
  link?: string;
  image?: string; // photo de fond de carte (sinon gradient accent/accent2)
  motif?: "zigzag"; // signe graphique du projet, dessine sur le degrade
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
  // Couleurs = l'identité réelle de l'app après le retint du 19 août
  // (SpotColors.electricViolet #9922ff sur surfaceDark #1a1a1a, cf.
  // lib/theme.dart du repo SpotA). C'est la couleur de l'icône, donc ce que
  // l'oeil reconnaît. Plus besoin d'assombrir : le badge de statut
  // (blanc translucide 22%) composite en #af53ff sur le violet et se voit,
  // alors qu'il disparaissait sur le lime, d'où l'ancien #7a9900.
  {
    id: "spota",
    name: "SpotA",
    status: "in progress",
    tags: ["Flutter", "Supabase", "Social Game"],
    accent: "#9922ff",
    accent2: "#1a1a1a",
    // Pas de photo : le zigzag lime sur le violet suffit a nommer l'app, et
    // c'est le meme signe que sous les titres de la page /spota.
    motif: "zigzag",
    link: "/spota",
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

export const defaultTheme: ThemeId = "signature";
