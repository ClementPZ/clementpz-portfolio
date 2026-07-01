// ============================================================================
// i18n — textes localisés (EN / FR / ES).
// Le contenu STRUCTUREL (couleurs, tags, noms d'entreprise, périodes, liens,
// stack) reste dans content.ts et n'est PAS traduit. Ici on ne stocke que le
// TEXTE traduisible, mergé par index sur les tableaux `work` et `recentProjects`.
// ============================================================================

export type Locale = "en" | "fr" | "es";

export const locales: { id: Locale; label: string; short: string }[] = [
  { id: "en", label: "English", short: "UK" },
  { id: "fr", label: "Français", short: "FR" },
  { id: "es", label: "Español", short: "SP" },
];

export const defaultLocale: Locale = "en";

// Détection de la langue navigateur → fallback English.
export function detectLocale(): Locale {
  if (typeof navigator === "undefined") return defaultLocale;
  const langs = [navigator.language, ...(navigator.languages || [])];
  for (const l of langs) {
    const code = l.slice(0, 2).toLowerCase();
    if (code === "fr") return "fr";
    if (code === "es") return "es";
    if (code === "en") return "en";
  }
  return defaultLocale;
}

type UI = {
  getInTouch: string;
  stackTitle: string;
  stackSub: string;
  workTitle: string;
  workCount: string; // "{n} experiences" — {n} remplacé côté composant
  impactLabel: string;
  recentTitle: string;
  recentSub: string;
  recoTitle: string;
  recoSub: string;
  contact: string;
  overlayBadge: string;
  overlayTitle: string;
  overlayBodyPre: string; // avant le numéro
  overlayBodyPost: string; // après le numéro
  overlayCta: string;
  overlayFoot: string;
  overlayLang: string;
  backToTop: string;
};

export const ui: Record<Locale, UI> = {
  en: {
    getInTouch: "Get in touch",
    stackTitle: "My day-to-day stack",
    stackSub: "the toolkit",
    workTitle: "Selected work",
    workCount: "{n} experiences",
    impactLabel: "Business impact",
    recentTitle: "Past 6 months side projects",
    recentSub:
      "Side projects in flight. The goal: push each one to a solid first version.",
    recoTitle: "Recommendations",
    recoSub: "from LinkedIn",
    contact: "Contact",
    overlayBadge: "V1 — shipping in public",
    overlayTitle: "This portfolio is under construction, but already online.",
    overlayBodyPre: "You're the",
    overlayBodyPost:
      "person to visit. Have a tour, and don't hesitate to reach out for anything. Design, code, and AI — all done by hand.",
    overlayCta: "Visit",
    overlayFoot: "No wall, no sign-up. Everything is accessible.",
    overlayLang: "Language",
    backToTop: "Back to top",
  },
  fr: {
    getInTouch: "Me contacter",
    stackTitle: "Ma stack au quotidien",
    stackSub: "la boîte à outils",
    workTitle: "Sélection de projets",
    workCount: "{n} expériences",
    impactLabel: "Impact business",
    recentTitle: "Side projects des 6 derniers mois",
    recentSub:
      "Side projects en cours. L'objectif : pousser chacun jusqu'à une première version solide.",
    recoTitle: "Recommandations",
    recoSub: "extraits LinkedIn",
    contact: "Contact",
    overlayBadge: "V1 — en construction, en public",
    overlayTitle: "Ce portfolio est en construction, mais déjà en ligne.",
    overlayBodyPre: "Vous êtes la",
    overlayBodyPost:
      "personne à le visiter. Faites le tour, et n'hésitez pas à me contacter pour quoi que ce soit. Design, code et IA — tout est fait main.",
    overlayCta: "Visiter",
    overlayFoot: "Aucun mur, aucune inscription. Tout est accessible.",
    overlayLang: "Langue",
    backToTop: "Haut de page",
  },
  es: {
    getInTouch: "Contactarme",
    stackTitle: "Mi stack del día a día",
    stackSub: "las herramientas",
    workTitle: "Trabajo seleccionado",
    workCount: "{n} experiencias",
    impactLabel: "Impacto de negocio",
    recentTitle: "Side projects de los últimos 6 meses",
    recentSub:
      "Proyectos en marcha. El objetivo: llevar cada uno a una primera versión sólida.",
    recoTitle: "Recomendaciones",
    recoSub: "de LinkedIn",
    contact: "Contacto",
    overlayBadge: "V1 — construyéndose en público",
    overlayTitle: "Este portafolio está en construcción, pero ya en línea.",
    overlayBodyPre: "Eres la",
    overlayBodyPost:
      "persona en visitarlo. Date una vuelta, y no dudes en contactarme para lo que sea. Design, código e IA — todo hecho a mano.",
    overlayCta: "Visitar",
    overlayFoot: "Sin muro, sin registro. Todo es accesible.",
    overlayLang: "Idioma",
    backToTop: "Volver arriba",
  },
};

// Intro localisée (profile.intro).
export const introText: Record<Locale, string> = {
  en: "Product Design Leader, 10+ years across product design, design systems, and AI. I built NRC Health's design function from the ground up and now lead a team of three, from research to production to analytics. Founding a coding campus in Mexico City, then leading design at a NASDAQ-listed US healthcare company: a business-first instinct still drives how I lead.",
  fr: "Product Design Leader, 10+ ans entre product design, design systems et IA. J'ai construit la fonction design de NRC Health de zéro et je pilote aujourd'hui une équipe de trois, de la recherche à la production à l'analytics. Fonder un campus de code à Mexico, puis diriger le design dans une entreprise de santé américaine cotée au NASDAQ : un instinct business-first guide toujours ma façon de diriger.",
  es: "Product Design Leader, más de 10 años entre product design, design systems e IA. Construí la función de diseño de NRC Health desde cero y hoy lidero un equipo de tres, desde la investigación hasta la producción y la analítica. Fundar un campus de código en Ciudad de México y luego liderar el diseño en una empresa de salud estadounidense cotizada en NASDAQ: un instinto business-first sigue guiando mi forma de liderar.",
};

// Langues parlées (footer).
export const languagesText: Record<Locale, string[]> = {
  en: ["French (native)", "English (proficient)", "Spanish (proficient)"],
  fr: ["Français (natif)", "Anglais (courant)", "Espagnol (courant)"],
  es: ["Francés (nativo)", "Inglés (competente)", "Español (competente)"],
};

// Texte localisé des expériences — index aligné sur `work` dans content.ts :
// 0 NRC · 1 Episource · 2 SEIF · 3 Le Wagon · 4 Welcomhere · 5 Devialet
export const workText: Record<
  Locale,
  { role: string; bullets: string[]; impact?: string[] }[]
> = {
  en: [
    {
      role: "Product Design Lead",
      bullets: [
        "Built NRC's first product design team from scratch (two designers + a senior UX/data researcher) across all four product suites.",
        "Created a multi-product design system (tokens, NRC semantic layer on Flowbite) with AI-assisted design-to-code tooling for non-engineers.",
        "Led the design of AI features: the Huey in-app assistant and an ambient-listening tool.",
        "Owned the design roadmap and stood up the team's first analytics practice.",
      ],
      impact: [
        "Nurse-rounding documentation 55% → 90% (ambient-listening)",
        "+24% outreach-email CTR (research-led A/B testing)",
      ],
    },
    {
      role: "Senior → Lead Product Designer · Design System",
      bullets: [
        "Led design of the AI-assisted NLP coding interface (Click to Code) from alpha to full production, including a V2.0 redesign.",
        "Established Figma component libraries and integrated design tokens to React/TypeScript production.",
        "Led Provider Direct Messaging, a bi-directional EHR integration piloted with UHC.",
        "Promoted to Lead after 12 months, across 6+ products.",
      ],
      impact: [
        "88% acceptance · 80% satisfaction (V2.0, 897 users)",
        "Core enabler of autocoding targeting 500–750k charts/year",
      ],
    },
    {
      role: "Product Designer · Design System · Project Manager",
      bullets: [
        "Defined and positioned blockchain/fintech products with the CEO and CTO.",
        "Designed conversational PWA interfaces: KYC, payments, blockchain explorer, dashboards.",
        "Built the UI kit and design system from scratch.",
      ],
    },
    {
      role: "Founder · Product Design Teacher · Business Development",
      bullets: [
        "Launched Le Wagon's Mexico City campus, the first in Latin America.",
        "Secured 15 commercial partners (ITAM, Start-Up Mexico, Numa).",
        "Taught UI/UX fundamentals across 4 cohorts.",
      ],
      impact: ["4 cohorts · 40 students · 15 web products shipped"],
    },
    {
      role: "Co-founder · Product & Business Development",
      bullets: [
        "Co-founded a relocation platform for migrants.",
        "Led product definition, pitches, fundraising, and partnerships.",
      ],
    },
    {
      role: "Project Manager — Retail & Flagship Europe",
      bullets: [
        "Launched the Paris flagship store.",
        "Deployed concept stores across Europe.",
        "Owned retail operations and premium customer experience.",
      ],
    },
  ],
  fr: [
    {
      role: "Product Design Lead",
      bullets: [
        "Construit la première équipe design produit de NRC, de zéro (deux designers + un senior UX/data researcher) sur les quatre suites produits.",
        "Créé un design system multi-produits (tokens, couche sémantique NRC sur Flowbite) avec un outillage AI-to-code pour les non-engineers.",
        "Piloté le design des features IA : l'assistant in-app Huey et un outil d'écoute ambiante.",
        "Porté la roadmap design et lancé la première pratique analytics de l'équipe.",
      ],
      impact: [
        "Documentation infirmière 55% → 90% (écoute ambiante)",
        "+24% de CTR sur les emails outreach (A/B testing par la recherche)",
      ],
    },
    {
      role: "Senior → Lead Product Designer · Design System",
      bullets: [
        "Piloté le design de l'interface de codage NLP assistée par IA (Click to Code), de l'alpha à la production, dont une refonte V2.0.",
        "Établi les bibliothèques de composants Figma et intégré les design tokens en production React/TypeScript.",
        "Dirigé Provider Direct Messaging, une intégration EHR bidirectionnelle pilotée avec UHC.",
        "Promu Lead après 12 mois, sur 6+ produits.",
      ],
      impact: [
        "88% d'acceptation · 80% de satisfaction (V2.0, 897 users)",
        "Catalyseur d'un autocoding visant 500–750k dossiers/an",
      ],
    },
    {
      role: "Product Designer · Design System · Chef de projet",
      bullets: [
        "Défini et positionné les produits blockchain/fintech avec le CEO et le CTO.",
        "Conçu des interfaces PWA conversationnelles : KYC, paiements, explorateur blockchain, dashboards.",
        "Construit l'UI kit et le design system de zéro.",
      ],
    },
    {
      role: "Fondateur · Enseignant Product Design · Business Development",
      bullets: [
        "Lancé le campus Le Wagon de Mexico, le premier d'Amérique latine.",
        "Sécurisé 15 partenaires commerciaux (ITAM, Start-Up Mexico, Numa).",
        "Enseigné les fondamentaux UI/UX sur 4 promotions.",
      ],
      impact: ["4 promotions · 40 étudiants · 15 produits web livrés"],
    },
    {
      role: "Co-fondateur · Product & Business Development",
      bullets: [
        "Co-fondé une plateforme de relocation pour migrants.",
        "Porté la définition produit, les pitchs, la levée de fonds et les partenariats.",
      ],
    },
    {
      role: "Chef de projet — Retail & Flagship Europe",
      bullets: [
        "Lancé le flagship store parisien.",
        "Déployé les concept stores à travers l'Europe.",
        "Porté les opérations retail et l'expérience client premium.",
      ],
    },
  ],
  es: [
    {
      role: "Product Design Lead",
      bullets: [
        "Construí el primer equipo de diseño de producto de NRC, desde cero (dos diseñadores + un senior UX/data researcher) en las cuatro suites de producto.",
        "Creé un design system multi-producto (tokens, capa semántica NRC sobre Flowbite) con herramientas AI-to-code para non-engineers.",
        "Lideré el diseño de funciones de IA: el asistente in-app Huey y una herramienta de escucha ambiental.",
        "Dirigí la roadmap de diseño y lancé la primera práctica de analítica del equipo.",
      ],
      impact: [
        "Documentación de enfermería 55% → 90% (escucha ambiental)",
        "+24% de CTR en emails de outreach (A/B testing basado en investigación)",
      ],
    },
    {
      role: "Senior → Lead Product Designer · Design System",
      bullets: [
        "Lideré el diseño de la interfaz de codificación NLP asistida por IA (Click to Code), de alpha a producción, con un rediseño V2.0.",
        "Establecí las bibliotecas de componentes en Figma e integré design tokens en producción React/TypeScript.",
        "Dirigí Provider Direct Messaging, una integración EHR bidireccional piloteada con UHC.",
        "Promovido a Lead tras 12 meses, en más de 6 productos.",
      ],
      impact: [
        "88% de aceptación · 80% de satisfacción (V2.0, 897 usuarios)",
        "Habilitador clave de autocoding para 500–750k historiales/año",
      ],
    },
    {
      role: "Product Designer · Design System · Project Manager",
      bullets: [
        "Definí y posicioné productos de blockchain/fintech con el CEO y el CTO.",
        "Diseñé interfaces PWA conversacionales: KYC, pagos, explorador blockchain, dashboards.",
        "Construí el UI kit y el design system desde cero.",
      ],
    },
    {
      role: "Fundador · Profesor de Product Design · Business Development",
      bullets: [
        "Lancé el campus de Le Wagon en Ciudad de México, el primero de América Latina.",
        "Aseguré 15 socios comerciales (ITAM, Start-Up Mexico, Numa).",
        "Enseñé fundamentos de UI/UX en 4 promociones.",
      ],
      impact: ["4 promociones · 40 estudiantes · 15 productos web entregados"],
    },
    {
      role: "Cofundador · Product & Business Development",
      bullets: [
        "Cofundé una plataforma de relocation para migrantes.",
        "Dirigí la definición de producto, pitches, recaudación de fondos y alianzas.",
      ],
    },
    {
      role: "Project Manager — Retail & Flagship Europa",
      bullets: [
        "Lancé la flagship store de París.",
        "Desplegué concept stores por toda Europa.",
        "Dirigí las operaciones retail y la experiencia de cliente premium.",
      ],
    },
  ],
};

// Texte localisé des projets — index aligné sur `recentProjects` :
// 0 Builder Flow · 1 Couples Card Game · 2 Legal Music Pipeline · 3 Job Search
// 4 History of Graphic Design · 5 Paris Conferences · 6 DJ Energy Classifier
export const projectText: Record<Locale, { tagline: string; description: string }[]> = {
  en: [
    {
      tagline: "Front-end editing for non-engineers",
      description:
        "A Claude Code skill that lets a PM or designer edit an app's front-end in plain language, with design-system enforcement. Production-ready, compliant code, reviewed by engineers before merge.",
    },
    {
      tagline: "An asymmetric reveal mechanic",
      description:
        "A card game for couples built on a simultaneous reveal on a spectrum. 5 pillars, an intensity-based color system, special cards. Currently in card-design phase.",
    },
    {
      tagline: "Source and upgrade a music library",
      description:
        "A pipeline that sources and upgrades an existing music library to lossless through legal platforms, with automatic conversion and import.",
    },
    {
      tagline: "A cleaner France Travail interface",
      description:
        "A stripped-down interface over the France Travail API: search by city, filters, job cards. Cloudflare Worker proxy for OAuth and caching.",
    },
    {
      tagline: "A chronological view of the movements",
      description:
        "An interactive timeline of graphic design history: typographers, founding moments, and iconic posters, from Art Nouveau to the Swiss and American schools.",
    },
    {
      tagline: "Cultural events aggregator for Paris",
      description:
        "App aggregating conferences and cultural events in Paris from the city's and the Ministry of Culture's open data. Filters, week view, iCal export.",
    },
    {
      tagline: "Scoring set energy through audio analysis",
      description:
        "A homegrown system that scores tracks as warm-up / mid / peak through audio analysis (librosa), on an intra-genre percentile. An open-source alternative to Mixed In Key, focused on energy rather than key.",
    },
  ],
  fr: [
    {
      tagline: "Édition front-end pour les non-engineers",
      description:
        "Un skill Claude Code qui permet à un PM ou un designer d'éditer le front-end d'une app en langage naturel, avec enforcement du design system. Code production-ready et compliant, relu par les engineers avant merge.",
    },
    {
      tagline: "Une mécanique de révélation asymétrique",
      description:
        "Un jeu de cartes pour couples basé sur une révélation simultanée sur un spectre. 5 piliers, un système de couleurs par intensité, des cartes spéciales. Actuellement en phase de design des cartes.",
    },
    {
      tagline: "Sourcer et upgrader une bibliothèque musicale",
      description:
        "Un pipeline qui source et upgrade une bibliothèque musicale existante en lossless via des plateformes légales, avec conversion et import automatiques.",
    },
    {
      tagline: "Une interface France Travail épurée",
      description:
        "Une interface épurée par-dessus l'API France Travail : recherche par commune, filtres, cartes d'offres. Proxy Cloudflare Worker pour l'OAuth et le cache.",
    },
    {
      tagline: "Une vue chronologique des mouvements",
      description:
        "Une frise interactive de l'histoire du graphisme : typographes, moments fondateurs et affiches emblématiques, de l'Art Nouveau aux écoles suisse et américaine.",
    },
    {
      tagline: "Agrégateur d'événements culturels parisiens",
      description:
        "App qui agrège conférences et événements culturels de Paris depuis les open data de la ville et du ministère de la Culture. Filtres, vue semaine, export iCal.",
    },
    {
      tagline: "Scorer l'énergie d'un set par analyse audio",
      description:
        "Un système maison qui classe les tracks en warm-up / mid / peak par analyse audio (librosa), en percentile intra-genre. Une alternative open-source à Mixed In Key, focalisée sur l'énergie plutôt que la tonalité.",
    },
  ],
  es: [
    {
      tagline: "Edición front-end para non-engineers",
      description:
        "Un skill de Claude Code que permite a un PM o diseñador editar el front-end de una app en lenguaje natural, con enforcement del design system. Código production-ready y compliant, revisado por engineers antes del merge.",
    },
    {
      tagline: "Una mecánica de revelación asimétrica",
      description:
        "Un juego de cartas para parejas basado en una revelación simultánea sobre un espectro. 5 pilares, un sistema de colores por intensidad, cartas especiales. Actualmente en fase de diseño de cartas.",
    },
    {
      tagline: "Buscar y mejorar una biblioteca musical",
      description:
        "Un pipeline que busca y mejora una biblioteca musical existente a lossless mediante plataformas legales, con conversión e importación automáticas.",
    },
    {
      tagline: "Una interfaz de France Travail más limpia",
      description:
        "Una interfaz depurada sobre la API de France Travail: búsqueda por ciudad, filtros, tarjetas de ofertas. Proxy Cloudflare Worker para OAuth y caché.",
    },
    {
      tagline: "Una vista cronológica de los movimientos",
      description:
        "Una línea de tiempo interactiva de la historia del diseño gráfico: tipógrafos, momentos fundadores y carteles emblemáticos, del Art Nouveau a las escuelas suiza y americana.",
    },
    {
      tagline: "Agregador de eventos culturales de París",
      description:
        "App que agrega conferencias y eventos culturales de París desde los open data de la ciudad y del ministerio de Cultura. Filtros, vista semanal, exportación iCal.",
    },
    {
      tagline: "Puntuar la energía de un set por análisis de audio",
      description:
        "Un sistema propio que clasifica los tracks en warm-up / mid / peak mediante análisis de audio (librosa), en percentil intra-género. Una alternativa open-source a Mixed In Key, centrada en la energía más que en la tonalidad.",
    },
  ],
};

// Statuts projets traduits.
export const statusText: Record<Locale, Record<"live" | "in progress" | "concept", string>> = {
  en: { live: "● Live", "in progress": "● In progress", concept: "○ Concept" },
  fr: { live: "● En ligne", "in progress": "● En cours", concept: "○ Concept" },
  es: { live: "● En vivo", "in progress": "● En curso", concept: "○ Concepto" },
};
