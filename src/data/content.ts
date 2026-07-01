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
    "Product Design Lead, 10 ans entre produit, design systems et innovation. J'ai construit la fonction design de NRC Health from scratch et je pilote une équipe de trois sur des SaaS Patient & Employee Experience. Je travaille à la jonction design, engineering et IA : design tokens en production, outillage AI pour les non-engineers, décisions design ancrées dans l'analytics.",
  email: "clementpicardzivy@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/clementpz/",
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
    period: "2024 — Présent",
    location: "Lincoln, USA · Paris",
    summary:
      "Recruté et construit la première équipe design de NRC (2 designers + senior UX/data researcher) sur quatre suites produits (Consumer, Patient, Market Insight, Employee Experience). Créé un design system multi-produits sur base Flowbite avec design tokens et outillage AI-to-code pour les non-engineers. Piloté les features IA : assistant Huey et outil d'écoute ambiante qui a fait passer la documentation infirmière de 55% à 90%. Lancé la première pratique analytics de l'équipe, A/B testing validé en prod.",
    impact: [
      "55% → 90% documentation infirmière (ambient-listening)",
      "+24% CTR emails outreach (A/B testing)",
      "Première équipe design NRC — built from scratch",
    ],
    tags: ["Healthcare", "SaaS", "Design System", "Lead", "AI"],
  },
  {
    company: "Episource · Optum (UnitedHealth Group)",
    role: "Senior → Lead Product Designer · Design System",
    period: "2021 — 2024",
    location: "Los Angeles, Remote",
    summary:
      "Promu Lead Product Designer en 12 mois pour communication cross-fonctionnelle et leadership design sur 6+ produits. Contribué au design system Click to Code (alpha → production) avec un redesign V2.0 validé sur 897 utilisateurs. Piloté la recherche cross-produits et la bibliothèque Figma. Led design de l'interface NLP de codage médical assisté par IA et du Provider Direct Messaging (intégration EHR bidirectionnelle avec UHC).",
    impact: [
      "88% acceptance · 80% satisfaction (897 users, design system V2)",
      "500–750k charts/an ciblés par la stratégie autocoding",
      "6+ produits couverts par le design system",
    ],
    tags: ["Healthcare", "AI", "Design System", "Enterprise", "NLP"],
  },
  {
    company: "SEIF",
    role: "Product Designer · Design System · Project Manager",
    period: "2020 — 2021",
    location: "Mexico City",
    summary:
      "Défini et positionné les produits blockchain/fintech avec le CEO et CTO. Conçu des interfaces conversationnelles PWA : KYC, système de paiement, blockchain explorer, dashboards. Construit l'UI kit et le design system from scratch.",
    tags: ["Fintech", "Blockchain", "Mobile", "Design System"],
  },
  {
    company: "Le Wagon",
    role: "Fondateur · Product Design Teacher · Business Development",
    period: "2017 — 2021",
    location: "Mexico City",
    summary:
      "Lancé le campus Le Wagon Mexico, sécurisé 15 partenaires commerciaux (ITAM, Start-Up Mexico, Numa) et enseigné les fondamentaux UI/UX. 4 cohorts, 40 alumni, 15 web products livrés.",
    impact: [
      "15 partenaires commerciaux",
      "4 cohorts · 40 alumni · 15 web products",
      "Premier campus Le Wagon Amérique Latine",
    ],
    tags: ["Founder", "Education", "Teaching", "LATAM"],
  },
  {
    company: "Welcomhere",
    role: "Co-fondateur · Product & Business Development",
    period: "2015 — 2017",
    location: "Paris",
    summary:
      "Co-fondé une plateforme de relocation pour migrants : définition produit, pitches, levée de fonds, partenariats et développement produit itératif.",
    tags: ["Founder", "Social Impact", "Product", "NGO"],
  },
  {
    company: "Devialet",
    role: "Project Manager — Retail & Flagship Europe",
    period: "2011 — 2015",
    location: "Paris · Europe",
    summary:
      "Lancement du flagship store parisien et déploiement des concept stores en Europe. Project management, opérations retail, expérience client premium.",
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
};

export const recommendations: Reco[] = [
  {
    author: "C. Louvion",
    title: "CTO @ NRC Health",
    quote:
      "Clément brings the full design package: deep user research, journey maps, personas, quick prototyping, with amazing collaboration with users, product, and engineers, and presents results clearly to sr leadership.",
  },
];

// ============================================================================
// Recent projects — "The past 6 months". Side projects en cours, affichés en
// carousel. status = état d'avancement. accent/accent2 = couleurs d'identité
// PROPRES au projet (volontairement hardcodées, pas des tokens de thème).
// ============================================================================

export type ProjectStatus = "live" | "en cours" | "concept";

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
    name: "Paris Conferences",
    tagline: "Agrégateur d'events culturels parisiens",
    description:
      "App qui agrège conférences et events culturels de Paris depuis les open data de la ville et du ministère de la Culture. Filtres, vue semaine, export iCal.",
    status: "en cours",
    tags: ["Next.js", "Open Data", "TypeScript"],
    accent: "#2563eb",
    accent2: "#0f172a",
  },
  {
    name: "Builder Flow",
    tagline: "Front-end editing pour non-engineers",
    description:
      "Skill Claude Code qui laisse un PM ou designer modifier le front-end d'une app en langage naturel, avec enforcement du design system. Code production-ready et compliant, reviewé par les engineers avant merge.",
    status: "en cours",
    tags: ["Claude Code", "Design System", "AI"],
    accent: "#7c3aed",
    accent2: "#1e1b4b",
  },
  {
    name: "Classification énergie DJ",
    tagline: "Scorer l'énergie d'un set par analyse audio",
    description:
      "Système maison qui classe les tracks en warm-up / mid / peak par analyse audio (librosa), en percentile intra-genre. Alternative open-source à Mixed In Key, focalisée sur l'énergie plutôt que la tonalité.",
    status: "en cours",
    tags: ["Python", "librosa", "Audio ML"],
    accent: "#db2777",
    accent2: "#18181b",
  },
  {
    name: "Music pipeline légal",
    tagline: "Sourcer et upgrader une bibliothèque musicale",
    description:
      "Pipeline qui source et upgrade en lossless les morceaux d'une bibliothèque existante via plateformes légales, avec conversion et import automatiques.",
    status: "concept",
    tags: ["Automation", "Audio", "Pipeline"],
    accent: "#059669",
    accent2: "#022c22",
  },
  {
    name: "Recherche emploi",
    tagline: "Interface France Travail simplifiée",
    description:
      "Interface épurée par-dessus l'API France Travail : recherche par commune, filtres, cartes d'offres. Proxy Cloudflare Worker pour l'OAuth et le cache.",
    status: "concept",
    tags: ["API", "Cloudflare Worker", "UX"],
    accent: "#0891b2",
    accent2: "#083344",
  },
  {
    name: "Jeu de cartes couple",
    tagline: "Mécanique de révélation asymétrique",
    description:
      "Jeu de cartes pour couples basé sur une mécanique de révélation simultanée sur un spectre. 5 piliers, système de couleurs par intensité, cartes spéciales. Phase de design des cartes.",
    status: "concept",
    tags: ["Flutter", "Game Design", "Product"],
    accent: "#ea580c",
    accent2: "#1c1917",
  },
  {
    name: "Frise histoire du graphisme",
    tagline: "Visualisation chronologique des mouvements",
    description:
      "Frise interactive de l'histoire du graphisme : typographes, moments fondateurs et affiches emblématiques, de l'Art Nouveau à l'école suisse et américaine.",
    status: "concept",
    tags: ["Data Viz", "Design", "History"],
    accent: "#ca8a04",
    accent2: "#1c1917",
  },
];

// ============================================================================
// Themes — chaque thème = un set de tokens CSS injecté via data-theme.
// Pour ajouter un thème : ajouter une entrée ici + un bloc CSS dans globals.css.
// ============================================================================

export type ThemeId = "signature" | "spotify" | "wise" | "apple" | "airbnb";

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
