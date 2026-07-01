// ============================================================================
// Source unique de vérité du contenu du portfolio.
// Édite ce fichier pour changer le texte, l'ordre ou ajouter des items.
// Tout le reste du site lit ces données.
// ============================================================================

export const profile = {
  name: "Clément Picard-Zivy",
  shortName: "Clément PZ",
  tagline: "Product Design × Code × AI",
  intro:
    "Product Design Leader, 10+ years across product design, design systems, and AI. I built NRC Health's design function from the ground up and now lead a team of three, from research to production to analytics. Founding a coding campus in Mexico City, then leading design at a NASDAQ-listed US healthcare company: a business-first instinct still drives how I lead.",
  email: "clementpicardzivy@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/clementpz/",
    github: "https://github.com/ClementPZ",
  },
  languages: ["French (native)", "English (proficient)", "Spanish (proficient)"],
};

// ============================================================================
// Stack — outils du quotidien, affichés en pills sous le hero.
// ============================================================================

// icon = clé d'icône rendue par le composant Stack (voir StackIcons).
export const stack: { label: string; icon: string }[] = [
  { label: "Figma", icon: "figma" },
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
  bullets?: string[];
  impact?: string[];
  tags: string[];
};

export const work: WorkItem[] = [
  {
    company: "NRC Health",
    role: "Product Design Lead",
    period: "2024 — Present",
    location: "Lincoln, USA · Paris",
    summary:
      "Recruited and built NRC's first product design team (two designers and a senior UX/data researcher) serving all four product suites. Created a multi-product design system with tokens on a Flowbite foundation, bridging design to a multi-stack production environment, extended with AI-assisted design-to-code tooling for non-engineers. Led AI features including the Huey in-app assistant and an ambient-listening tool. Owned the design roadmap and stood up the team's first analytics practice.",
    impact: [
      "Nurse-rounding documentation raised from 55% to 90% (ambient-listening)",
      "+24% outreach-email CTR (research-led A/B testing)",
      "NRC's first design team — built from scratch",
    ],
    tags: ["Healthcare", "SaaS", "Design System", "Lead", "AI"],
  },
  {
    company: "Episource · Optum (UnitedHealth Group)",
    role: "Senior → Lead Product Designer · Design System",
    period: "2021 — 2024",
    location: "Los Angeles, Remote",
    summary:
      "Promoted to Lead Product Designer after 12 months, cited for cross-functional communication and design leadership across 6+ products. Led design of the AI-assisted NLP coding interface (Click to Code) from alpha through full production, including a V2.0 redesign validated with 897 users. Established Figma component libraries and integrated design tokens to React/TypeScript production. Led Provider Direct Messaging, a bi-directional EHR integration piloted with UHC.",
    impact: [
      "88% acceptance · 80% satisfaction (897 users, design system V2)",
      "Core enabler of an autocoding strategy targeting 500–750k charts/year",
      "6+ products covered by the design system",
    ],
    tags: ["Healthcare", "AI", "Design System", "Enterprise", "NLP"],
  },
  {
    company: "SEIF",
    role: "Product Designer · Design System · Project Manager",
    period: "2020 — 2021",
    location: "Mexico City, Remote",
    summary:
      "Defined and positioned blockchain/fintech products alongside the CEO and CTO. Designed conversational PWA interfaces (KYC, payment system, blockchain explorer, dashboards) and built the UI kit and design system from scratch.",
    tags: ["Fintech", "Blockchain", "Mobile", "Design System"],
  },
  {
    company: "Le Wagon",
    role: "Founder · Product Design Teacher · Business Development",
    period: "2017 — 2021",
    location: "Mexico City",
    summary:
      "Launched Le Wagon's Mexico City campus, secured 15 commercial partners (ITAM, Start-Up Mexico, Numa) and taught UI/UX fundamentals. Ran 4 cohorts producing 40 students and 15 web products.",
    impact: [
      "15 commercial partners secured",
      "4 cohorts · 40 students · 15 web products",
      "First Le Wagon campus in Latin America",
    ],
    tags: ["Founder", "Education", "Teaching", "LATAM"],
  },
  {
    company: "Welcomhere",
    role: "Co-founder · Product & Business Development",
    period: "2015 — 2017",
    location: "Paris",
    summary:
      "Co-founded a relocation platform for migrants: product definition, pitches, fundraising, partnerships, and iterative product development.",
    tags: ["Founder", "Social Impact", "Product", "NGO"],
  },
  {
    company: "Devialet",
    role: "Project Manager — Retail & Flagship Europe",
    period: "2011 — 2015",
    location: "Paris · Europe",
    summary:
      "Launched the Paris flagship store and deployed concept stores across Europe. Project management, retail operations, and premium customer experience.",
    tags: ["Retail", "Luxury", "Operations", "Europe"],
  },
];

// ============================================================================
// Recommendations — quotes LinkedIn (à compléter avec les vraies citations).
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
    linkedin: "",
  },
  {
    author: "V. Ramnathan",
    title: "CPO @ NRC Health",
    quote:
      "Clément built our design function from nothing, hired the team, and set the bar for how design worked across all four product lines. He was as comfortable in C-suite product strategy conversations as he was shipping production design and AI tooling. I'd hire him again.",
    linkedin: "",
  },
];

// ============================================================================
// Recent projects — "The past 6 months". Side projects en cours, affichés en
// carousel. status = état d'avancement. accent/accent2 = couleurs d'identité
// PROPRES au projet (volontairement hardcodées, pas des tokens de thème).
// ============================================================================

export type ProjectStatus = "live" | "in progress" | "concept";

export type RecentProject = {
  name: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  tags: string[];
  accent: string; // couleur d'identité projet (fond de carte)
  accent2: string; // 2e couleur pour le gradient
  link?: string;
};

export const recentProjects: RecentProject[] = [
  {
    name: "Builder Flow",
    tagline: "Front-end editing for non-engineers",
    description:
      "A Claude Code skill that lets a PM or designer edit an app's front-end in plain language, with design-system enforcement. Production-ready, compliant code, reviewed by engineers before merge.",
    status: "in progress",
    tags: ["Claude Code", "Design System", "AI"],
    accent: "#7c3aed",
    accent2: "#1e1b4b",
  },
  {
    name: "Couples Card Game",
    tagline: "An asymmetric reveal mechanic",
    description:
      "A card game for couples built on a simultaneous reveal on a spectrum. 5 pillars, an intensity-based color system, special cards. Currently in card-design phase.",
    status: "concept",
    tags: ["Flutter", "Game Design", "Product"],
    accent: "#ea580c",
    accent2: "#1c1917",
  },
  {
    name: "Legal Music Pipeline",
    tagline: "Source and upgrade a music library",
    description:
      "A pipeline that sources and upgrades an existing music library to lossless through legal platforms, with automatic conversion and import.",
    status: "concept",
    tags: ["Automation", "Audio", "Pipeline"],
    accent: "#059669",
    accent2: "#022c22",
  },
  {
    name: "Job Search",
    tagline: "A cleaner France Travail interface",
    description:
      "A stripped-down interface over the France Travail API: search by city, filters, job cards. Cloudflare Worker proxy for OAuth and caching.",
    status: "concept",
    tags: ["API", "Cloudflare Worker", "UX"],
    accent: "#0891b2",
    accent2: "#083344",
  },
  {
    name: "History of Graphic Design",
    tagline: "A chronological view of the movements",
    description:
      "An interactive timeline of graphic design history: typographers, founding moments, and iconic posters, from Art Nouveau to the Swiss and American schools.",
    status: "concept",
    tags: ["Data Viz", "Design", "History"],
    accent: "#ca8a04",
    accent2: "#1c1917",
  },
  {
    name: "Paris Conferences",
    tagline: "Cultural events aggregator for Paris",
    description:
      "App aggregating conferences and cultural events in Paris from the city's and the Ministry of Culture's open data. Filters, week view, iCal export.",
    status: "in progress",
    tags: ["Next.js", "Open Data", "TypeScript"],
    accent: "#2563eb",
    accent2: "#0f172a",
  },
  {
    name: "DJ Energy Classifier",
    tagline: "Scoring set energy through audio analysis",
    description:
      "A homegrown system that scores tracks as warm-up / mid / peak through audio analysis (librosa), on an intra-genre percentile. An open-source alternative to Mixed In Key, focused on energy rather than key.",
    status: "in progress",
    tags: ["Python", "librosa", "Audio ML"],
    accent: "#db2777",
    accent2: "#18181b",
  },
];

// ============================================================================
// Themes — chaque thème = un set de tokens CSS injecté via data-theme.
// Pour ajouter un thème : ajouter une entrée ici + un bloc CSS dans globals.css.
// ============================================================================

export type ThemeId =
  | "signature"
  | "signature-light"
  | "spotify"
  | "wise"
  | "apple"
  | "airbnb";

// Thème actif V1 = "signature" (aubergine). Les 4 autres sont PARQUÉS :
// conservés en code (CSS + entrées ci-dessous) mais le switcher est retiré
// de la nav pour l'instant. Réactivables plus tard sans réécriture.
export const themes: { id: ThemeId; label: string; vibe: string }[] = [
  { id: "signature", label: "Signature", vibe: "Aubergine #54255A, gradient dérivé" },
  { id: "spotify", label: "Spotify", vibe: "Dark canvas, vert Encore, gradient pochette" },
  { id: "wise", label: "Wise", vibe: "Bright Green, Forest Green, Inter + Syne" },
  { id: "apple", label: "Apple", vibe: "Liquid Glass, SF Pro, System Blue" },
  { id: "airbnb", label: "Airbnb", vibe: "Blanc pur, Rausch, search pill" },
];

export const defaultTheme: ThemeId = "signature";
