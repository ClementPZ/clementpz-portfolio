// ============================================================================
// Source unique de vérité du contenu du portfolio.
// Édite ce fichier pour changer le texte, l'ordre ou ajouter des items.
// Tout le reste du site lit ces données.
// ============================================================================

export const profile = {
  name: "Clément Pellerin-Zaffino",
  shortName: "Clément PZ",
  tagline: "Product Design × Code × AI",
  intro:
    "Product Design Lead, je conçois des produits SaaS healthcare et fintech. Basé à Paris, après 6 ans Remote/Mexico. J'aime construire des design systems qui scalent, mixer code et design, et faire bouger les équipes avec l'IA.",
  email: "clement.pellerin.zaffino@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/clementpellerinzaffino/",
    github: "https://github.com/ClementPZ",
  },
  languages: ["FR (natif)", "EN (courant)", "ES (courant)"],
};

// ============================================================================
// Stack — outils du quotidien, affichés en pills sous le hero.
// ============================================================================

export const stack: { label: string; category: string }[] = [
  { label: "Figma", category: "design" },
  { label: "Design Tokens", category: "design" },
  { label: "FigJam", category: "design" },
  { label: "Claude", category: "ai" },
  { label: "Cursor", category: "ai" },
  { label: "Claude Code", category: "ai" },
  { label: "VS Code", category: "dev" },
  { label: "Next.js", category: "dev" },
  { label: "TypeScript", category: "dev" },
  { label: "Tailwind", category: "dev" },
  { label: "Notion", category: "ops" },
  { label: "Linear", category: "ops" },
  { label: "rekordbox", category: "perso" },
];

// ============================================================================
// Work — case studies / experiences, du plus récent au plus ancien.
// "summary" = description courte affichée sur la carte.
// "impact" = chiffres / résultats si dispo (sinon vide).
// ============================================================================

export type WorkItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  impact?: string[];
  tags: string[];
};

export const work: WorkItem[] = [
  {
    company: "NRC Health",
    role: "Product Design Lead",
    period: "2024 — Aujourd'hui",
    location: "Paris",
    summary:
      "Lead design sur les produits Experience patient. Construction du design system, alignement des équipes produit & engineering, intégration IA dans les workflows.",
    tags: ["Healthcare", "SaaS", "Design System", "Lead"],
  },
  {
    company: "Optum / Episource",
    role: "Lead Product Designer & Design System",
    period: "2021 — 2024",
    location: "Remote (Los Angeles)",
    summary:
      "Conception de Smart Chart, plateforme de codage médical assisté par IA pour 3000+ coders. Création et gouvernance du design system multi-produits.",
    impact: [
      "+40% productivité coders mesurée",
      "Design system adopté sur 5 produits",
    ],
    tags: ["Healthcare", "AI", "Design System", "Enterprise"],
  },
  {
    company: "SEIF",
    role: "Product Designer, UX & UI",
    period: "2020 — 2021",
    location: "Mexico",
    summary:
      "Conception d'une app de microfinance pour les populations non bancarisées au Mexique. Recherche terrain, prototypes, tests utilisateur.",
    tags: ["Fintech", "Mobile", "Research", "Emerging markets"],
  },
  {
    company: "Le Wagon Mexico",
    role: "Fondateur & UX/UI Teacher",
    period: "2017 — 2021",
    location: "Mexico",
    summary:
      "Lancement de la première école de code Le Wagon en Amérique Latine. Direction opérationnelle, business dev, enseignement du Product Design.",
    impact: ["200+ alumni formés", "Première école Le Wagon LATAM"],
    tags: ["Founder", "Education", "Teaching"],
  },
  {
    company: "Devialet",
    role: "Project Manager — Retail Europe & Flagship",
    period: "2011 — 2015",
    location: "Paris",
    summary:
      "Déploiement retail Europe et lancement du flagship store parisien. Project management, opérations, expérience client premium.",
    tags: ["Retail", "Luxury", "Operations"],
  },
];

// ============================================================================
// Recommendations — quotes LinkedIn (à compléter avec les vraies citations).
// ============================================================================

export type Reco = {
  author: string;
  title: string;
  quote: string;
};

export const recommendations: Reco[] = [
  {
    author: "Vinitha Ramnathan",
    title: "ex-CPO @ NRC Health",
    quote:
      "Placeholder — à remplacer avec la vraie citation LinkedIn de Vinitha.",
  },
  {
    author: "Susan Morgan",
    title: "Senior PM @ Episource (Optum)",
    quote:
      "Placeholder — à remplacer avec la vraie citation LinkedIn de Susan.",
  },
];

// ============================================================================
// Themes — chaque thème = un set de tokens CSS injecté via data-theme.
// Pour ajouter un thème : ajouter une entrée ici + un bloc CSS dans globals.css.
// ============================================================================

export type ThemeId = "spotify" | "wise" | "apple" | "airbnb";

export const themes: { id: ThemeId; label: string; vibe: string }[] = [
  { id: "spotify", label: "Spotify", vibe: "Dark, bold, contrasté" },
  { id: "wise", label: "Wise", vibe: "Light, vert citron, fintech" },
  { id: "apple", label: "Apple", vibe: "Minimal, spacieux, blanc" },
  { id: "airbnb", label: "Airbnb", vibe: "Corail, chaleureux, hospitality" },
];

export const defaultTheme: ThemeId = "spotify";
