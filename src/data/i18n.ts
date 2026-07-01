// ============================================================================
// i18n — textes localisés (EN / FR / ES).
// Le contenu STRUCTUREL (couleurs, tags, noms d'entreprise, périodes, liens,
// stack) reste dans content.ts. Ici : le TEXTE traduisible, clé par `id`
// (workText[locale][id], projectText[locale][id]) — plus de merge par index.
// ============================================================================

export type Locale = "en" | "fr" | "es";

export const locales: { id: Locale; label: string; short: string }[] = [
  { id: "en", label: "English", short: "EN" },
  { id: "fr", label: "Français", short: "FR" },
  { id: "es", label: "Español", short: "ES" },
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
  workTitle: string;
  impactLabel: string;
  recentTitle: string;
  recentSub: string;
  recoTitle: string;
  overlayTitle: string;
  overlayBodyPre: string; // avant le numéro
  overlayBodyPost: string; // après le numéro
  overlayCta: string;
  overlayFoot: string;
};

export const ui: Record<Locale, UI> = {
  en: {
    getInTouch: "Get in touch",
    stackTitle: "My day-to-day stack",
    workTitle: "Selected work",
    impactLabel: "Business impact",
    recentTitle: "Past 6 months side projects",
    recentSub:
      "Side projects in flight. The goal: push each one to a solid first version.",
    recoTitle: "Recommendations",
    overlayTitle: "This portfolio is under construction, but already online.",
    overlayBodyPre: "You're the",
    overlayBodyPost:
      "person to visit. Have a tour, and don't hesitate to reach out for anything. Design, code, and AI — all done by hand.",
    overlayCta: "Visit",
    overlayFoot: "No pay wall, no sign-up.",
  },
  fr: {
    getInTouch: "Me contacter",
    stackTitle: "Ma stack au quotidien",
    workTitle: "Sélection de projets",
    impactLabel: "Impact business",
    recentTitle: "Side projects des 6 derniers mois",
    recentSub:
      "Side projects en cours. L'objectif : pousser chacun jusqu'à une première version solide.",
    recoTitle: "Recommandations",
    overlayTitle: "Ce portfolio est en construction, mais déjà en ligne.",
    overlayBodyPre: "Vous êtes la",
    overlayBodyPost:
      "personne à le visiter. Faites le tour, et n'hésitez pas à me contacter pour quoi que ce soit. Design, code et IA — tout est fait main.",
    overlayCta: "Visiter",
    overlayFoot: "Pas de paywall, pas d'inscription.",
  },
  es: {
    getInTouch: "Contactarme",
    stackTitle: "Mi stack del día a día",
    workTitle: "Trabajo seleccionado",
    impactLabel: "Impacto de negocio",
    recentTitle: "Side projects de los últimos 6 meses",
    recentSub:
      "Proyectos en marcha. El objetivo: llevar cada uno a una primera versión sólida.",
    recoTitle: "Recomendaciones",
    overlayTitle: "Este portafolio está en construcción, pero ya en línea.",
    overlayBodyPre: "Eres la",
    overlayBodyPost:
      "persona en visitarlo. Date una vuelta, y no dudes en contactarme para lo que sea. Design, código e IA — todo hecho a mano.",
    overlayCta: "Visitar",
    overlayFoot: "Sin muro de pago, sin registro.",
  },
};

// Intro localisée (profile.intro).
export const introText: Record<Locale, string> = {
  en: "Hello, I'm Clément. Product designer with 10+ years across product, design systems, and innovation. I built NRC Health's design function from scratch, now leading a team of three from research to production to analytics. A business and marketing role at Devialet, various entrepreneurial projects, and then founding a coding campus in Mexico City, shaped the business-first instinct that still drives how I lead design today.",
  fr: "Bonjour, moi c'est Clément. Product designer avec 10+ ans entre produit, design systems et innovation. J'ai construit la fonction design de NRC Health de zéro, et je pilote aujourd'hui une équipe de trois, de la recherche à la production à l'analytics. Un rôle business et marketing chez Devialet, divers projets entrepreneuriaux, puis la création d'un campus de code à Mexico ont forgé l'instinct business-first qui guide encore ma façon de diriger le design aujourd'hui.",
  es: "Hola, soy Clément. Product designer con más de 10 años entre producto, design systems e innovación. Construí la función de diseño de NRC Health desde cero, y hoy lidero un equipo de tres, desde la investigación hasta la producción y la analítica. Un rol de negocio y marketing en Devialet, varios proyectos emprendedores, y luego fundar un campus de código en Ciudad de México forjaron el instinto business-first que sigue guiando cómo lidero el diseño hoy.",
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
  Record<string, { role: string; bullets: string[]; impact?: string[] }>
> = {
  en: {
    nrc: {
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
    episource: {
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
    seif: {
      role: "Product Designer · Design System · Project Manager",
      bullets: [
        "Defined and positioned blockchain/fintech products with the CEO and CTO.",
        "Designed conversational PWA interfaces: KYC, payments, blockchain explorer, dashboards.",
        "Built the UI kit and design system from scratch.",
      ],
    },
    lewagon: {
      role: "Founder · Product Design Teacher · Business Development",
      bullets: [
        "Launched Le Wagon's Mexico City campus, the first in Latin America.",
        "Secured 15 commercial partners (ITAM, Start-Up Mexico, Numa).",
        "Taught UI/UX fundamentals across 4 cohorts.",
      ],
      impact: ["4 cohorts · 40 students · 15 web products shipped"],
    },
    welcomhere: {
      role: "Co-founder · Product & Business Development",
      bullets: [
        "Co-founded a relocation platform for migrants.",
        "Led product definition, pitches, fundraising, and partnerships.",
      ],
    },
    devialet: {
      role: "Project Manager — Retail & Flagship Europe",
      bullets: [
        "Launched the Paris flagship store.",
        "Deployed concept stores across Europe.",
        "Owned retail operations and premium customer experience.",
      ],
    },
  },
  fr: {
    nrc: {
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
    episource: {
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
    seif: {
      role: "Product Designer · Design System · Chef de projet",
      bullets: [
        "Défini et positionné les produits blockchain/fintech avec le CEO et le CTO.",
        "Conçu des interfaces PWA conversationnelles : KYC, paiements, explorateur blockchain, dashboards.",
        "Construit l'UI kit et le design system de zéro.",
      ],
    },
    lewagon: {
      role: "Fondateur · Enseignant Product Design · Business Development",
      bullets: [
        "Lancé le campus Le Wagon de Mexico, le premier d'Amérique latine.",
        "Sécurisé 15 partenaires commerciaux (ITAM, Start-Up Mexico, Numa).",
        "Enseigné les fondamentaux UI/UX sur 4 promotions.",
      ],
      impact: ["4 promotions · 40 étudiants · 15 produits web livrés"],
    },
    welcomhere: {
      role: "Co-fondateur · Product & Business Development",
      bullets: [
        "Co-fondé une plateforme de relocation pour migrants.",
        "Porté la définition produit, les pitchs, la levée de fonds et les partenariats.",
      ],
    },
    devialet: {
      role: "Chef de projet — Retail & Flagship Europe",
      bullets: [
        "Lancé le flagship store parisien.",
        "Déployé les concept stores à travers l'Europe.",
        "Porté les opérations retail et l'expérience client premium.",
      ],
    },
  },
  es: {
    nrc: {
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
    episource: {
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
    seif: {
      role: "Product Designer · Design System · Project Manager",
      bullets: [
        "Definí y posicioné productos de blockchain/fintech con el CEO y el CTO.",
        "Diseñé interfaces PWA conversacionales: KYC, pagos, explorador blockchain, dashboards.",
        "Construí el UI kit y el design system desde cero.",
      ],
    },
    lewagon: {
      role: "Fundador · Profesor de Product Design · Business Development",
      bullets: [
        "Lancé el campus de Le Wagon en Ciudad de México, el primero de América Latina.",
        "Aseguré 15 socios comerciales (ITAM, Start-Up Mexico, Numa).",
        "Enseñé fundamentos de UI/UX en 4 promociones.",
      ],
      impact: ["4 promociones · 40 estudiantes · 15 productos web entregados"],
    },
    welcomhere: {
      role: "Cofundador · Product & Business Development",
      bullets: [
        "Cofundé una plataforma de relocation para migrantes.",
        "Dirigí la definición de producto, pitches, recaudación de fondos y alianzas.",
      ],
    },
    devialet: {
      role: "Project Manager — Retail & Flagship Europa",
      bullets: [
        "Lancé la flagship store de París.",
        "Desplegué concept stores por toda Europa.",
        "Dirigí las operaciones retail y la experiencia de cliente premium.",
      ],
    },
  },
};

// Texte localisé des projets — index aligné sur `recentProjects` :
export const projectText: Record<
  Locale,
  Record<string, { tagline: string; description: string }>
> = {
  en: {
    "builder-flow": {
      tagline: "Front-end editing for non-engineers",
      description:
        "A Claude Code skill that lets a PM or designer edit an app's front-end in plain language, with design-system enforcement. Production-ready, compliant code, reviewed by engineers before merge.",
    },
    "couples-card": {
      tagline: "An asymmetric reveal mechanic",
      description:
        "A card game for couples built on a simultaneous reveal on a spectrum. 5 pillars, an intensity-based color system, special cards. Currently in card-design phase.",
    },
    "legal-music": {
      tagline: "Source and upgrade a music library",
      description:
        "A pipeline that sources and upgrades an existing music library to lossless through legal platforms, with automatic conversion and import.",
    },
    "job-search": {
      tagline: "A cleaner France Travail interface",
      description:
        "A stripped-down interface over the France Travail API: search by city, filters, job cards. Cloudflare Worker proxy for OAuth and caching.",
    },
    "graphic-history": {
      tagline: "A chronological view of the movements",
      description:
        "An interactive timeline of graphic design history: typographers, founding moments, and iconic posters, from Art Nouveau to the Swiss and American schools.",
    },
    "paris-conf": {
      tagline: "Cultural events aggregator for Paris",
      description:
        "App aggregating conferences and cultural events in Paris from the city's and the Ministry of Culture's open data. Filters, week view, iCal export.",
    },
    "interior-design": {
      tagline: "My apartment, designed in public",
      description:
        "The ongoing interior design of my apartment — inspirations from Verner Panton, Tadao Ando and Jean-Pierre Garrauld. A dedicated page where visitors upvote the photos, bumping the best ones to the top.",
    },
    "dj-energy": {
      tagline: "Scoring set energy through audio analysis",
      description:
        "A homegrown system that scores tracks as warm-up / mid / peak through audio analysis (librosa), on an intra-genre percentile. An open-source alternative to Mixed In Key, focused on energy rather than key.",
    },
  },
  fr: {
    "builder-flow": {
      tagline: "Édition front-end pour les non-engineers",
      description:
        "Un skill Claude Code qui permet à un PM ou un designer d'éditer le front-end d'une app en langage naturel, avec enforcement du design system. Code production-ready et compliant, relu par les engineers avant merge.",
    },
    "couples-card": {
      tagline: "Une mécanique de révélation asymétrique",
      description:
        "Un jeu de cartes pour couples basé sur une révélation simultanée sur un spectre. 5 piliers, un système de couleurs par intensité, des cartes spéciales. Actuellement en phase de design des cartes.",
    },
    "legal-music": {
      tagline: "Sourcer et upgrader une bibliothèque musicale",
      description:
        "Un pipeline qui source et upgrade une bibliothèque musicale existante en lossless via des plateformes légales, avec conversion et import automatiques.",
    },
    "job-search": {
      tagline: "Une interface France Travail épurée",
      description:
        "Une interface épurée par-dessus l'API France Travail : recherche par commune, filtres, cartes d'offres. Proxy Cloudflare Worker pour l'OAuth et le cache.",
    },
    "graphic-history": {
      tagline: "Une vue chronologique des mouvements",
      description:
        "Une frise interactive de l'histoire du graphisme : typographes, moments fondateurs et affiches emblématiques, de l'Art Nouveau aux écoles suisse et américaine.",
    },
    "paris-conf": {
      tagline: "Agrégateur d'événements culturels parisiens",
      description:
        "App qui agrège conférences et événements culturels de Paris depuis les open data de la ville et du ministère de la Culture. Filtres, vue semaine, export iCal.",
    },
    "interior-design": {
      tagline: "Mon appartement, designé en public",
      description:
        "Le design d'intérieur en cours de mon appartement — inspirations Verner Panton, Tadao Ando et Jean-Pierre Garrauld. Une page dédiée où les visiteurs upvotent les photos, faisant remonter les meilleures.",
    },
    "dj-energy": {
      tagline: "Scorer l'énergie d'un set par analyse audio",
      description:
        "Un système maison qui classe les tracks en warm-up / mid / peak par analyse audio (librosa), en percentile intra-genre. Une alternative open-source à Mixed In Key, focalisée sur l'énergie plutôt que la tonalité.",
    },
  },
  es: {
    "builder-flow": {
      tagline: "Edición front-end para non-engineers",
      description:
        "Un skill de Claude Code que permite a un PM o diseñador editar el front-end de una app en lenguaje natural, con enforcement del design system. Código production-ready y compliant, revisado por engineers antes del merge.",
    },
    "couples-card": {
      tagline: "Una mecánica de revelación asimétrica",
      description:
        "Un juego de cartas para parejas basado en una revelación simultánea sobre un espectro. 5 pilares, un sistema de colores por intensidad, cartas especiales. Actualmente en fase de diseño de cartas.",
    },
    "legal-music": {
      tagline: "Buscar y mejorar una biblioteca musical",
      description:
        "Un pipeline que busca y mejora una biblioteca musical existente a lossless mediante plataformas legales, con conversión e importación automáticas.",
    },
    "job-search": {
      tagline: "Una interfaz de France Travail más limpia",
      description:
        "Una interfaz depurada sobre la API de France Travail: búsqueda por ciudad, filtros, tarjetas de ofertas. Proxy Cloudflare Worker para OAuth y caché.",
    },
    "graphic-history": {
      tagline: "Una vista cronológica de los movimientos",
      description:
        "Una línea de tiempo interactiva de la historia del diseño gráfico: tipógrafos, momentos fundadores y carteles emblemáticos, del Art Nouveau a las escuelas suiza y americana.",
    },
    "paris-conf": {
      tagline: "Agregador de eventos culturales de París",
      description:
        "App que agrega conferencias y eventos culturales de París desde los open data de la ciudad y del ministerio de Cultura. Filtros, vista semanal, exportación iCal.",
    },
    "interior-design": {
      tagline: "Mi apartamento, diseñado en público",
      description:
        "El diseño interior en curso de mi apartamento — inspiraciones de Verner Panton, Tadao Ando y Jean-Pierre Garrauld. Una página dedicada donde los visitantes votan las fotos, subiendo las mejores.",
    },
    "dj-energy": {
      tagline: "Puntuar la energía de un set por análisis de audio",
      description:
        "Un sistema propio que clasifica los tracks en warm-up / mid / peak mediante análisis de audio (librosa), en percentil intra-género. Una alternativa open-source a Mixed In Key, centrada en la energía más que en la tonalidad.",
    },
  },
};

// Statuts projets traduits.
type StatusKey =
  | "live"
  | "in progress"
  | "concept"
  | "concept-wip"
  | "fail"
  | "private-live";

export const statusText: Record<Locale, Record<StatusKey, string>> = {
  en: {
    live: "● Live",
    "in progress": "● In progress",
    concept: "○ Concept",
    "concept-wip": "○ Concept · WIP",
    fail: "● Fail",
    "private-live": "● Private · Live",
  },
  fr: {
    live: "● En ligne",
    "in progress": "● En cours",
    concept: "○ Concept",
    "concept-wip": "○ Concept · WIP",
    fail: "● Échec",
    "private-live": "● Privé · Live",
  },
  es: {
    live: "● En vivo",
    "in progress": "● En curso",
    concept: "○ Concepto",
    "concept-wip": "○ Concepto · WIP",
    fail: "● Fallido",
    "private-live": "● Privado · Live",
  },
};
