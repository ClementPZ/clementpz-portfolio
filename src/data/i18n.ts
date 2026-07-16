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
  makingOfWidget: string;
};

export const ui: Record<Locale, UI> = {
  en: {
    getInTouch: "Get in touch",
    stackTitle: "My day-to-day stack",
    workTitle: "IC & Management experiences",
    impactLabel: "Business impact",
    recentTitle: "Past 6 months side projects",
    recentSub:
      "Side projects in flight. The goal: push each one to a solid first version.",
    recoTitle: "Recommendations",
    overlayTitle: "This portfolio is under construction, but already online.",
    overlayBodyPre: "You're the",
    overlayBodyPost:
      "person to visit. Have a tour, and don't hesitate to reach out for anything. Design, code, and AI, all done by hand.",
    overlayCta: "Visit",
    makingOfWidget: "How this portfolio was built",
  },
  fr: {
    getInTouch: "Me contacter",
    stackTitle: "Ma stack au quotidien",
    workTitle: "Expériences salariales",
    impactLabel: "Impact business",
    recentTitle: "Side projects des 6 derniers mois",
    recentSub:
      "Side projects en cours. L'objectif : pousser chacun jusqu'à une première version solide.",
    recoTitle: "Recommandations",
    overlayTitle: "Ce portfolio est en construction, mais déjà en ligne.",
    overlayBodyPre: "Vous êtes la",
    overlayBodyPost:
      "personne à le visiter. Faites le tour, et n'hésitez pas à me contacter pour quoi que ce soit. Design, code et IA, tout est fait main.",
    overlayCta: "Visiter",
    makingOfWidget: "Comment ce portfolio a été construit",
  },
  es: {
    getInTouch: "Contactarme",
    stackTitle: "Mi stack del día a día",
    workTitle: "Experiencia profesional",
    impactLabel: "Impacto de negocio",
    recentTitle: "Side projects de los últimos 6 meses",
    recentSub:
      "Proyectos en marcha. El objetivo: llevar cada uno a una primera versión sólida.",
    recoTitle: "Recomendaciones",
    overlayTitle: "Este portafolio está en construcción, pero ya en línea.",
    overlayBodyPre: "Eres la",
    overlayBodyPost:
      "persona en visitarlo. Date una vuelta, y no dudes en contactarme para lo que sea. Design, código e IA, todo hecho a mano.",
    overlayCta: "Visitar",
    makingOfWidget: "Cómo se construyó este portafolio",
  },
};

// Intro localisée (profile.intro).
export const introText: Record<Locale, string> = {
  en: "Hello, I'm Clément. Product designer with 10+ years across product, design systems, and innovation. I built NRC Health's design function from scratch, now leading a team of three from research to production to analytics. A business and marketing role at Devialet, various entrepreneurial projects, and then founding a coding campus in Mexico City, shaped the business-first instinct that still drives how I lead design today.",
  fr: "Bonjour, moi c'est Clément. Product designer avec 10+ ans entre produit, design systems et innovation. J'ai construit la fonction design de NRC Health de zéro, et je pilote aujourd'hui une équipe de trois, de la recherche à la production à l'analytics. Un rôle business et marketing chez Devialet, divers projets entrepreneuriaux, puis la création d'un campus de code à Mexico ont forgé l'instinct business-first qui guide encore ma façon de diriger le design aujourd'hui.",
  es: "Hola, soy Clément. Product designer con más de 10 años entre producto, design systems e innovación. Construí la función de diseño de NRC Health desde cero, y hoy lidero un equipo de tres, desde la investigación hasta la producción y la analítica. Un rol de negocio y marketing en Devialet, varios proyectos emprendedores, y luego fundar un campus de código en Ciudad de México forjaron el instinto business-first que sigue guiando cómo lidero el diseño hoy.",
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
      tagline: "One command, a deck-ready track",
      description:
        "A pipeline that finds a track on a P2P network, downloads the best quality available, converts it to lossless and files it into my DJ library: genre, playlist, energy tag. One command, zero clicks.",
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
    spota: {
      tagline: "Spot a ___, every day",
      description:
        "A social game for friend groups. One prompt a day: spot a ___. Find it in the real world, shoot it with both cameras at once (the target and your face), and post. You only see your friends' spots once you have posted yours.",
    },
    "making-of": {
      tagline: "The portfolio, explained by itself",
      description:
        "My first portfolio in 10+ years of design. Built in hackathon mode to test how far design, code and AI can go in a single flow, from zero to deployed. The full story on a dedicated page.",
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
      tagline: "Une commande, un track prêt à mixer",
      description:
        "Un pipeline qui trouve un morceau sur un réseau P2P, le télécharge dans la meilleure qualité disponible, le convertit en lossless et le range dans ma bibliothèque DJ : genre, playlist, tag d'énergie. Une commande, zéro clic.",
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
    spota: {
      tagline: "Repère un ___, chaque jour",
      description:
        "Un jeu social entre potes. Un défi par jour : repère un ___. Trouve-le dans la vraie vie, capture-le avec les deux caméras à la fois (la cible et ta tête), et poste. Tu ne vois les spots des autres qu'une fois le tien posté.",
    },
    "making-of": {
      tagline: "Le portfolio, expliqué par lui-même",
      description:
        "Mon premier portfolio en 10+ ans de design. Construit en mode hackathon pour tester jusqu'où design, code et IA peuvent aller dans un seul flow, de zéro au déploiement. L'histoire complète sur une page dédiée.",
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
      tagline: "Un comando, un track listo para pinchar",
      description:
        "Un pipeline que encuentra un track en una red P2P, lo descarga en la mejor calidad disponible, lo convierte a lossless y lo archiva en mi biblioteca DJ: género, playlist, etiqueta de energía. Un comando, cero clics.",
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
    spota: {
      tagline: "Encuentra un ___, cada día",
      description:
        "Un juego social entre amigos. Un reto al día: encuentra un ___. Búscalo en la vida real, captúralo con las dos cámaras a la vez (el objetivo y tu cara), y publícalo. Solo ves los spots de los demás cuando ya has publicado el tuyo.",
    },
    "making-of": {
      tagline: "El portafolio, explicado por sí mismo",
      description:
        "Mi primer portafolio en más de 10 años de diseño. Construido en modo hackathon para probar hasta dónde pueden llegar design, código e IA en un solo flow, de cero al deploy. La historia completa en una página dedicada.",
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

// ============================================================================
// Page /making-of — le portfolio expliqué comme projet du portfolio (méta).
// ============================================================================

export const makingOfText: Record<
  Locale,
  {
    kicker: string;
    title: string;
    intro: string;
    sections: { heading: string; body: string }[];
    backHome: string;
  }
> = {
  en: {
    kicker: "Very meta",
    title: "The making of this portfolio",
    intro:
      "A first portfolio, built as a portfolio piece: why now, and how far one person can push design, code and AI in a single flow.",
    sections: [
      {
        heading: "Why now, after 10 years without one",
        body: "Ten years of product design, no portfolio. Work and referrals did the job. Two things changed: I wanted to look around, and to test one idea, how far a designer gets solo when design, code and AI share the same flow.",
      },
      {
        heading: "Hackathon, not monument",
        body: "Ship a live V1 in days, keep it public while it improves, let visitors watch it being built. One theme, one content file, a disclaimer instead of a coming-soon page. Momentum over polish, on purpose.",
      },
      {
        heading: "How it is built",
        body: "Next.js, React, TypeScript and Tailwind, shipped to Vercel on every push. Colors are CSS tokens, dark and light. Three languages from one source. Written with Claude Code, down to the easter eggs: live cursors, pull-to-refresh, a real visitor counter.",
      },
      {
        heading: "Still cooking",
        body: "Per-project deep dives, real NRC and Episource cases, an interior page with community votes, a Figma file generated from the code. It keeps changing, that is the point.",
      },
    ],
    backHome: "Back to the portfolio",
  },
  fr: {
    kicker: "Très méta",
    title: "Le making of de ce portfolio",
    intro:
      "Un premier portfolio, conçu comme une pièce du portfolio : pourquoi maintenant, et jusqu'où une personne peut pousser design, code et IA dans un seul flow.",
    sections: [
      {
        heading: "Pourquoi maintenant, après 10 ans sans",
        body: "Dix ans de product design, aucun portfolio. Le travail et les recommandations suffisaient. Deux choses ont changé : l'envie de regarder ailleurs, et de tester une idée, jusqu'où un designer va seul quand design, code et IA partagent le même flow.",
      },
      {
        heading: "Hackathon, pas monument",
        body: "Livrer une V1 en ligne en quelques jours, la garder publique pendant qu'elle progresse, laisser les visiteurs voir le chantier. Un thème, un fichier de contenu, un disclaimer plutôt qu'une page coming soon. L'élan avant le poli, volontairement.",
      },
      {
        heading: "Comment c'est construit",
        body: "Next.js, React, TypeScript et Tailwind, déployé sur Vercel à chaque push. Les couleurs sont des tokens CSS, dark et light. Trois langues depuis une seule source. Écrit avec Claude Code, jusqu'aux easter eggs : curseurs live, pull-to-refresh, vrai compteur de visites.",
      },
      {
        heading: "Encore en cuisine",
        body: "Des pages dédiées par projet, de vrais cas NRC et Episource, une page d'intérieur avec votes, un fichier Figma généré depuis le code. Ça bouge encore, c'est le principe.",
      },
    ],
    backHome: "Retour au portfolio",
  },
  es: {
    kicker: "Muy meta",
    title: "El making of de este portafolio",
    intro:
      "Un primer portafolio, hecho como una pieza del portafolio: por qué ahora, y hasta dónde puede llevar una persona el design, el código y la IA en un solo flow.",
    sections: [
      {
        heading: "Por qué ahora, tras 10 años sin uno",
        body: "Diez años de product design, sin portafolio. El trabajo y las recomendaciones bastaban. Dos cosas cambiaron: quería mirar alrededor, y probar una idea, hasta dónde llega un diseñador solo cuando design, código e IA comparten el mismo flow.",
      },
      {
        heading: "Hackathon, no monumento",
        body: "Lanzar una V1 en línea en días, mantenerla pública mientras mejora, dejar que los visitantes vean la obra. Un tema, un archivo de contenido, un disclaimer en vez de una página de coming soon. Impulso antes que pulido, a propósito.",
      },
      {
        heading: "Cómo está construido",
        body: "Next.js, React, TypeScript y Tailwind, desplegado en Vercel con cada push. Los colores son tokens CSS, dark y light. Tres idiomas desde una sola fuente. Escrito con Claude Code, hasta los easter eggs: cursores live, pull-to-refresh, contador real de visitas.",
      },
      {
        heading: "Aún en la cocina",
        body: "Páginas dedicadas por proyecto, casos reales de NRC y Episource, una página de interior con votos, un archivo Figma generado desde el código. Sigue cambiando, ese es el punto.",
      },
    ],
    backHome: "Volver al portafolio",
  },
};

// ============================================================================
// Page /music-downloader — case study du pipeline musique (EN / FR / ES).
// ============================================================================

type MusicStep = { n: string; title: string; body: string; code?: string };
type MusicRow = { name: string; role: string };
type MusicMode = { title: string; body: string; cmd: string };
type MusicVersion = { v: string; title: string; tags: string[] };
type MusicRoad = { title: string; body: string };

export const musicDownloaderText: Record<
  Locale,
  {
    period: string;
    title: string;
    introPre: string;
    introBold: string;
    introPost: string;
    stack: string[];
    flow: {
      title: string;
      sub: string;
      steps: MusicStep[];
      asideBold: string;
      aside: string;
    };
    tools: { title: string; sub: string; cols: [string, string]; rows: MusicRow[] };
    modes: { title: string; sub: string; items: MusicMode[] };
    versions: { title: string; sub: string; items: MusicVersion[] };
    roadmap: { title: string; sub: string; items: MusicRoad[] };
    legal: string;
  }
> = {
  en: {
    period: "2025 - 2026",
    title: "Music Downloader",
    introPre:
      "I DJ, and I used to spend hours finding tracks, checking their quality, converting, tagging and filing them. This project cuts all of that to ",
    introBold: "one command",
    introPost:
      ": the track is found on SoundMesh, a peer-to-peer network, downloaded at the best available quality, converted to lossless, imported into my library and filed by genre and energy level, ready for rekordbox.",
    stack: ["Python", "Docker", "ffmpeg", "AppleScript", "librosa"],
    flow: {
      title: "The flow",
      sub: "One command, seven steps, zero intervention. Each step was hardened against a problem hit in real use.",
      steps: [
        { n: "01", title: "One command", code: 'meshd track "Artist" "Title" "Genre"', body: " is the only input needed." },
        { n: "02", title: "Library check", body: "Already lossless: it stops there. Only in MP3: it switches to the upgrade flow. No duplicates." },
        { n: "03", title: "Escalating search", body: "A precise query first, then wider and wider until a valid source shows up. The network connection repairs itself if it drops." },
        { n: "04", title: "Quality and error filter", body: "Lossless first, MP3 320 accepted, everything else rejected. A match check discards files that are not the right track (unwanted remix, another title by the same artist)." },
        { n: "05", title: "Download with fallback", body: "If a source rejects or blocks, the next one takes over, up to five tries. Metadata (genre, artist, title) travels with the file." },
        { n: "06", title: "Automatic conversion and import", body: "FLAC and WAV become AIFF (lossless, readable by the decks), MP3 320 is kept as is. The file lands in the Music app import folder, which ingests it on its own." },
        { n: "07", title: "Filing", body: "Genre tagged, added to the matching playlist, energy tag (E1 warm-up, E2 mid, E3 peak): the track is ready to play." },
      ],
      asideBold: "What if the track can't be found?",
      aside: " It joins a persistent queue. A nightly job retries the entries that are due: rarities eventually resolve as other peers come online.",
    },
    tools: {
      title: "The tools",
      sub: "The core flow only needs Docker and the Python standard library. Audio analysis is the only module with scientific dependencies.",
      cols: ["Component", "Role"],
      rows: [
        { name: "meshd (CLI)", role: "A single-file Python orchestrator, around 3,000 lines. Drives the daemon's REST API and the Music app via AppleScript." },
        { name: "P2P daemon", role: "Self-hosted SoundMesh client in Docker, local REST API for search and transfers." },
        { name: "Conversion hook", role: "Shell script triggered on every finished download: ffmpeg transcode, real bitrate check, MIME check, metadata." },
        { name: "Music app", role: "Watched folder for automatic import; reads and writes genres, playlists and tags via AppleScript." },
        { name: "Energy engine", role: "librosa analysis of the full track, intra-genre percentile score, E1/E2/E3 buckets and vocal detection. A homegrown alternative to a paid tool." },
        { name: "Queue", role: "Retry with a file lock, normalized keys (artist order, accents) and due dates: no duplicates, no network spam." },
      ],
    },
    modes: {
      title: "Three modes",
      sub: "The same code serves three distinct uses.",
      items: [
        { title: "Download", body: "Acquire a new track, from search to filing.", cmd: 'meshd track "Artist" "Title" "Genre"' },
        { title: "Upgrade", body: "Replace the library's MP3s with lossless, playlists preserved; the old file goes to a review list, never deleted blindly.", cmd: "meshd upgrade-batch --playlist=X --apply" },
        { title: "Score energy", body: "Rate each track E1/E2/E3 to build sets, with cached analyses.", cmd: "meshd energy-analyze --genre=X --apply" },
      ],
    },
    versions: {
      title: "Three iterations",
      sub: "Each version closed a family of problems seen in real use, no speculative features.",
      items: [
        { v: "v1", title: "Foundations", tags: ["API search and download", "quality filter", "session cache"] },
        { v: "v2", title: "Automation", tags: ["conversion hook", "embedded metadata", "playlist by genre", "multi-source fallback", "lossless upgrade flow", "energy classification"] },
        { v: "v3", title: "Robustness", tags: ["upstream de-duplication", "escalating search", "auto-reconnect", "bad-file guard", "normalized queue", "dated nightly retry", "secrets out of code"] },
      ],
    },
    roadmap: {
      title: "What's next",
      sub: "The owned backlog: leads identified, noted, and deliberately left aside until the pain justifies them.",
      items: [
        { title: "Search by compilation", body: "When a single can't be found on its own, look for it through the artist's known albums and compilations already in the library." },
        { title: "Validate energy by ear", body: "Build a reference set per genre (tracks whose bucket is certain) to measure the score's correlation cleanly, and improve the heterogeneous genres where the current model slips." },
        { title: "Crowd-sourced signal", body: "Cross the energy score with track positions in public sets: a track played late by many DJs is probably a peak." },
        { title: "Package and share", body: "Extract the personal config, document the install and publish the tool so another DJ can deploy it." },
      ],
    },
    legal:
      "SoundMesh is presented here as a generic peer-to-peer network for freely licensed, self-produced audio. The engineering described (self-hosted daemon, REST orchestration, conversion pipeline, library integration, energy classification) is independent of the source and applies to any catalog the user can legitimately access.",
  },
  fr: {
    period: "2025 - 2026",
    title: "Music Downloader",
    introPre:
      "Je mixe, et je passais des heures à chercher des tracks, vérifier leur qualité, les convertir, les taguer et les ranger. Ce projet réduit tout ça à ",
    introBold: "une commande",
    introPost:
      " : le morceau est trouvé sur SoundMesh, un réseau peer-to-peer, téléchargé dans la meilleure qualité disponible, converti en lossless, importé dans ma bibliothèque et rangé par genre et niveau d'énergie, prêt pour rekordbox.",
    stack: ["Python", "Docker", "ffmpeg", "AppleScript", "librosa"],
    flow: {
      title: "Le flow",
      sub: "Une commande, sept étapes, zéro intervention. Chaque étape a été durcie contre un problème réellement rencontré à l'usage.",
      steps: [
        { n: "01", title: "Une commande", code: 'meshd track "Artiste" "Titre" "Genre"', body: " : c'est le seul input nécessaire." },
        { n: "02", title: "Vérification de la bibliothèque", body: "Le morceau existe déjà en lossless : on s'arrête là. Il existe en MP3 : on bascule sur le flow upgrade. Pas de doublons." },
        { n: "03", title: "Recherche en escalade", body: "Requête précise d'abord, puis de plus en plus large jusqu'à trouver une source valide. La connexion au réseau se répare toute seule si elle est tombée." },
        { n: "04", title: "Filtre qualité et anti-erreur", body: "Lossless en priorité, MP3 320 accepté, tout le reste refusé. Un contrôle de correspondance écarte les fichiers qui ne sont pas le bon morceau (remix non demandé, autre titre du même artiste)." },
        { n: "05", title: "Téléchargement avec repli", body: "Si une source rejette ou bloque, la suivante prend le relais, jusqu'à cinq tentatives. Les métadonnées (genre, artiste, titre) voyagent avec le fichier." },
        { n: "06", title: "Conversion et import automatiques", body: "FLAC et WAV sont convertis en AIFF (lossless, lisible par les platines), le MP3 320 est gardé tel quel. Le fichier est déposé dans le dossier d'import de l'app Musique, qui l'ingère seule." },
        { n: "07", title: "Rangement", body: "Genre tagué, ajout à la playlist correspondante, tag d'énergie (E1 warm-up, E2 mid, E3 peak) : le morceau est prêt à jouer." },
      ],
      asideBold: "Et si le morceau est introuvable ?",
      aside: " Il rejoint une file d'attente persistante. Un job nocturne retente les entrées arrivées à échéance : les raretés finissent par se résoudre quand d'autres pairs se connectent.",
    },
    tools: {
      title: "Les outils",
      sub: "Le cœur du flow ne dépend que de Docker et de la bibliothèque standard Python. L'analyse audio est le seul module avec des dépendances scientifiques.",
      cols: ["Composant", "Rôle"],
      rows: [
        { name: "meshd (CLI)", role: "Orchestrateur Python d'environ 3 000 lignes, un seul fichier. Pilote l'API REST du daemon et l'app Musique via AppleScript." },
        { name: "Daemon P2P", role: "Client SoundMesh auto-hébergé dans Docker, API REST locale pour la recherche et les transferts." },
        { name: "Hook de conversion", role: "Script shell déclenché à chaque téléchargement terminé : transcodage ffmpeg, contrôle du bitrate réel, vérification MIME, métadonnées." },
        { name: "App Musique", role: "Dossier surveillé pour l'import automatique ; lecture et écriture des genres, playlists et tags via AppleScript." },
        { name: "Moteur d'énergie", role: "Analyse librosa du morceau entier, score par percentile intra-genre, buckets E1/E2/E3 et détection de voix. Alternative maison à un outil payant." },
        { name: "File d'attente", role: "Retry avec verrou fichier, clés normalisées (ordre des artistes, accents) et dates d'échéance : pas de doublons, pas de spam réseau." },
      ],
    },
    modes: {
      title: "Trois modes",
      sub: "Le même code sert trois usages distincts.",
      items: [
        { title: "Télécharger", body: "Acquérir un nouveau morceau, de la recherche au rangement.", cmd: 'meshd track "Artiste" "Titre" "Genre"' },
        { title: "Upgrader", body: "Remplacer les MP3 de la bibliothèque par du lossless, playlists préservées, l'ancien fichier part en liste de review, jamais supprimé à l'aveugle.", cmd: "meshd upgrade-batch --playlist=X --apply" },
        { title: "Classer l'énergie", body: "Scorer chaque morceau en E1/E2/E3 pour construire des sets, avec cache des analyses.", cmd: "meshd energy-analyze --genre=X --apply" },
      ],
    },
    versions: {
      title: "Trois itérations",
      sub: "Chaque version a fermé une famille de problèmes constatés en usage réel, pas de features spéculatives.",
      items: [
        { v: "v1", title: "Fondations", tags: ["recherche et téléchargement via API", "filtre qualité", "cache de session"] },
        { v: "v2", title: "Automatisation", tags: ["hook de conversion", "métadonnées embarquées", "playlist par genre", "repli multi-sources", "flow upgrade lossless", "classification d'énergie"] },
        { v: "v3", title: "Robustesse", tags: ["anti-doublons en amont", "recherche en escalade", "reconnexion auto", "anti-mauvais-fichier", "file d'attente normalisée", "retry nocturne daté", "secrets sortis du code"] },
      ],
    },
    roadmap: {
      title: "Et ensuite",
      sub: "Le backlog assumé : des pistes identifiées, notées, et volontairement laissées de côté tant que la douleur ne le justifie pas.",
      items: [
        { title: "Recherche par compilation", body: "Quand un single est introuvable seul, le chercher via les albums et compilations connus de l'artiste déjà présents dans la bibliothèque." },
        { title: "Valider l'énergie à l'oreille", body: "Constituer un set de référence par genre (morceaux dont le bucket est certain) pour mesurer proprement la corrélation du score, et améliorer les genres hétérogènes où le modèle actuel décroche." },
        { title: "Signal crowd-sourcé", body: "Croiser le score d'énergie avec la position des morceaux dans des sets publics : un track joué en fin de set par beaucoup de DJs est probablement un peak." },
        { title: "Packager et partager", body: "Extraire la configuration personnelle, documenter l'installation et publier l'outil pour qu'un autre DJ puisse le déployer chez lui." },
      ],
    },
    legal:
      "SoundMesh est présenté ici comme un réseau peer-to-peer générique pour de l'audio librement licencié et auto-produit. L'ingénierie décrite (daemon auto-hébergé, orchestration REST, pipeline de conversion, intégration bibliothèque, classification d'énergie) est indépendante de la source et s'applique à tout catalogue auquel l'utilisateur a légitimement accès.",
  },
  es: {
    period: "2025 - 2026",
    title: "Music Downloader",
    introPre:
      "Mezclo, y pasaba horas buscando tracks, verificando su calidad, convirtiéndolos, etiquetándolos y archivándolos. Este proyecto reduce todo eso a ",
    introBold: "un comando",
    introPost:
      ": el track se encuentra en SoundMesh, una red peer-to-peer, se descarga en la mejor calidad disponible, se convierte a lossless, se importa en mi biblioteca y se archiva por género y nivel de energía, listo para rekordbox.",
    stack: ["Python", "Docker", "ffmpeg", "AppleScript", "librosa"],
    flow: {
      title: "El flow",
      sub: "Un comando, siete pasos, cero intervención. Cada paso fue endurecido contra un problema encontrado en uso real.",
      steps: [
        { n: "01", title: "Un comando", code: 'meshd track "Artista" "Título" "Género"', body: " es el único input necesario." },
        { n: "02", title: "Verificación de la biblioteca", body: "Ya existe en lossless: se detiene ahí. Existe en MP3: pasa al flow de upgrade. Sin duplicados." },
        { n: "03", title: "Búsqueda en escalada", body: "Consulta precisa primero, luego cada vez más amplia hasta encontrar una fuente válida. La conexión a la red se repara sola si se cae." },
        { n: "04", title: "Filtro de calidad y anti-error", body: "Lossless primero, MP3 320 aceptado, el resto rechazado. Un control de coincidencia descarta los archivos que no son el track correcto (remix no pedido, otro título del mismo artista)." },
        { n: "05", title: "Descarga con respaldo", body: "Si una fuente rechaza o bloquea, la siguiente toma el relevo, hasta cinco intentos. Los metadatos (género, artista, título) viajan con el archivo." },
        { n: "06", title: "Conversión e importación automáticas", body: "FLAC y WAV se convierten a AIFF (lossless, legible por las platinas), el MP3 320 se conserva tal cual. El archivo se deja en la carpeta de importación de Música, que lo ingiere sola." },
        { n: "07", title: "Archivado", body: "Género etiquetado, añadido a la playlist correspondiente, etiqueta de energía (E1 warm-up, E2 mid, E3 peak): el track está listo para sonar." },
      ],
      asideBold: "¿Y si el track no se encuentra?",
      aside: " Entra en una cola persistente. Un job nocturno reintenta las entradas vencidas: las rarezas terminan por resolverse cuando otros pares se conectan.",
    },
    tools: {
      title: "Las herramientas",
      sub: "El núcleo del flow solo depende de Docker y de la biblioteca estándar de Python. El análisis de audio es el único módulo con dependencias científicas.",
      cols: ["Componente", "Rol"],
      rows: [
        { name: "meshd (CLI)", role: "Orquestador Python de un solo archivo, alrededor de 3000 líneas. Pilota la API REST del daemon y la app Música vía AppleScript." },
        { name: "Daemon P2P", role: "Cliente SoundMesh autoalojado en Docker, API REST local para búsqueda y transferencias." },
        { name: "Hook de conversión", role: "Script shell disparado en cada descarga terminada: transcodificación ffmpeg, control del bitrate real, verificación MIME, metadatos." },
        { name: "App Música", role: "Carpeta vigilada para importación automática; lee y escribe géneros, playlists y etiquetas vía AppleScript." },
        { name: "Motor de energía", role: "Análisis librosa del track entero, puntuación por percentil intra-género, buckets E1/E2/E3 y detección de voz. Alternativa propia a una herramienta de pago." },
        { name: "Cola", role: "Reintento con bloqueo de archivo, claves normalizadas (orden de artistas, acentos) y fechas de vencimiento: sin duplicados, sin spam de red." },
      ],
    },
    modes: {
      title: "Tres modos",
      sub: "El mismo código sirve tres usos distintos.",
      items: [
        { title: "Descargar", body: "Adquirir un nuevo track, de la búsqueda al archivado.", cmd: 'meshd track "Artista" "Título" "Género"' },
        { title: "Mejorar", body: "Reemplazar los MP3 de la biblioteca por lossless, playlists preservadas; el archivo antiguo va a una lista de review, nunca borrado a ciegas.", cmd: "meshd upgrade-batch --playlist=X --apply" },
        { title: "Clasificar energía", body: "Puntuar cada track en E1/E2/E3 para construir sets, con caché de análisis.", cmd: "meshd energy-analyze --genre=X --apply" },
      ],
    },
    versions: {
      title: "Tres iteraciones",
      sub: "Cada versión cerró una familia de problemas vistos en uso real, sin features especulativas.",
      items: [
        { v: "v1", title: "Fundaciones", tags: ["búsqueda y descarga vía API", "filtro de calidad", "caché de sesión"] },
        { v: "v2", title: "Automatización", tags: ["hook de conversión", "metadatos embebidos", "playlist por género", "respaldo multi-fuente", "flow de upgrade lossless", "clasificación de energía"] },
        { v: "v3", title: "Robustez", tags: ["de-duplicación en origen", "búsqueda en escalada", "reconexión automática", "guardia anti-archivo-malo", "cola normalizada", "reintento nocturno con fecha", "secretos fuera del código"] },
      ],
    },
    roadmap: {
      title: "Y después",
      sub: "El backlog asumido: pistas identificadas, anotadas y dejadas de lado a propósito hasta que el dolor lo justifique.",
      items: [
        { title: "Búsqueda por compilación", body: "Cuando un single no se encuentra solo, buscarlo a través de los álbumes y compilaciones conocidos del artista ya presentes en la biblioteca." },
        { title: "Validar la energía de oído", body: "Formar un set de referencia por género (tracks cuyo bucket es seguro) para medir limpiamente la correlación del score, y mejorar los géneros heterogéneos donde el modelo actual falla." },
        { title: "Señal crowd-sourced", body: "Cruzar el score de energía con la posición de los tracks en sets públicos: un track puesto al final por muchos DJs probablemente es un peak." },
        { title: "Empaquetar y compartir", body: "Extraer la configuración personal, documentar la instalación y publicar la herramienta para que otro DJ pueda desplegarla." },
      ],
    },
    legal:
      "SoundMesh se presenta aquí como una red peer-to-peer genérica para audio de licencia libre y autoproducido. La ingeniería descrita (daemon autoalojado, orquestación REST, pipeline de conversión, integración con la biblioteca, clasificación de energía) es independiente de la fuente y se aplica a cualquier catálogo al que el usuario tenga acceso legítimo.",
  },
};

// ============================================================================
// Highlight — projet en vedette sur la home (Builder). Lien vers /builder.
// ============================================================================

export const highlightText: Record<
  Locale,
  {
    sectionTitle: string;
    title: string;
    tagline: string;
    blurb: string;
    ctaPrimary: string;
    ctaSecondary: string;
  }
> = {
  en: {
    sectionTitle: "Monthly highlight",
    title: "Builder",
    tagline: "A Claude Code plugin",
    blurb:
      "Builder lets non-engineers ship front-end changes that stay on the design system: a ratified token contract, changes tiered by risk, and code left review-ready for engineers.",
    ctaPrimary: "Ask for access",
    ctaSecondary: "See details",
  },
  fr: {
    sectionTitle: "Highlight du mois",
    title: "Builder",
    tagline: "Un plugin Claude Code",
    blurb:
      "Builder permet aux non-ingénieurs de livrer des changements front-end fidèles au design system : un contrat de tokens ratifié, des changements par paliers de risque, et du code laissé prêt pour la review des ingénieurs.",
    ctaPrimary: "Demander l'accès",
    ctaSecondary: "Voir les détails",
  },
  es: {
    sectionTitle: "Destacado del mes",
    title: "Builder",
    tagline: "Un plugin de Claude Code",
    blurb:
      "Builder permite a los no ingenieros entregar cambios de front-end fieles al design system: un contrato de tokens ratificado, cambios por niveles de riesgo, y código listo para la review de los ingenieros.",
    ctaPrimary: "Pedir acceso",
    ctaSecondary: "Ver detalles",
  },
};

// Mail pré-rempli pour la demande d'accès à Builder (Highlight + page /builder).
export const builderAccessMail: Record<Locale, { subject: string; body: string }> = {
  en: {
    subject: "Builder, access request",
    body: "Hey, I saw your work on the front-end builder plugin for non-engineers. I'd be interested in getting access to it. Please get in touch and let's arrange something :)",
  },
  fr: {
    subject: "Builder, demande d'accès",
    body: "Salut, j'ai vu ton travail sur le plugin de front-end builder pour non-ingénieurs. J'aimerais beaucoup y avoir accès. Recontacte-moi et voyons ça ensemble :)",
  },
  es: {
    subject: "Builder, solicitud de acceso",
    body: "Hola, vi tu trabajo en el plugin de front-end builder para no ingenieros. Me interesaría tener acceso. Escríbeme y organizamos algo :)",
  },
};

// Construit le href mailto pré-rempli (sujet + corps) pour la demande d'accès.
export function accessMailtoHref(email: string, locale: Locale): string {
  const m = builderAccessMail[locale];
  return `mailto:${email}?subject=${encodeURIComponent(m.subject)}&body=${encodeURIComponent(
    m.body
  )}`;
}

// ============================================================================
// Page /spota — jeu social de repérage quotidien (EN / FR / ES).
// ============================================================================

export const spotaText: Record<
  Locale,
  {
    kicker: string;
    title: string;
    intro: string;
    sections: { heading: string; body: string }[];
    backHome: string;
  }
> = {
  en: {
    kicker: "Social game",
    title: "SpotA",
    intro:
      "A daily spotting game for a group of friends. One prompt, both cameras, and nothing to see until you have posted.",
    sections: [
      {
        heading: "The idea",
        body: "One prompt a day, the same for your whole group: spot a ___. No feed to scroll, no score to farm. You have the day to find the thing in the real world.",
      },
      {
        heading: "The mechanic",
        body: "Both cameras fire in sequence: the back one for the target, the front one for your face. They composite into a single image, shot in session, no gallery import. The feed is gated, so you see your friends' spots only after posting yours.",
      },
      {
        heading: "How it is built",
        body: "Flutter, one codebase for iOS and Android. Supabase for Postgres, Storage and anonymous auth: no account, you join a group with a code. No push and no realtime in the MVP, the feed refreshes on pull. Private bucket and signed URLs, since the audience is 13+.",
      },
      {
        heading: "Scope and status",
        body: "Hackathon mode, deliberately lean. Onboarding and group join run end to end against the live database. The daily prompt screen and the feed are built and currently being wired. Not published yet: test phase first, APK sideload and TestFlight.",
      },
    ],
    backHome: "Back to the portfolio",
  },
  fr: {
    kicker: "Jeu social",
    title: "SpotA",
    intro:
      "Un jeu de repérage quotidien entre potes. Un défi, les deux caméras, et rien à voir tant que tu n'as pas posté.",
    sections: [
      {
        heading: "L'idée",
        body: "Un défi par jour, le même pour tout le groupe : repère un ___. Pas de feed à scroller, pas de score à farmer. Tu as la journée pour trouver la chose dans la vraie vie.",
      },
      {
        heading: "La mécanique",
        body: "Les deux caméras s'enchaînent : l'arrière pour la cible, l'avant pour ta tête. Elles se composent en une seule image, prise en direct, sans import galerie. Le feed est gaté : tu ne vois les spots des autres qu'après avoir posté le tien.",
      },
      {
        heading: "Comment c'est construit",
        body: "Flutter, un seul codebase iOS et Android. Supabase pour Postgres, le Storage et l'auth anonyme : pas de compte, tu rejoins un groupe avec un code. Pas de push ni de realtime dans le MVP, le feed se rafraîchit au pull. Bucket privé et URLs signées, le public étant 13+.",
      },
      {
        heading: "Périmètre et statut",
        body: "Mode hackathon, volontairement lean. L'onboarding et le join de groupe tournent de bout en bout contre la base live. L'écran du défi du jour et le feed sont codés, en cours de branchement. Pas encore publié : phase de test d'abord, APK sideload et TestFlight.",
      },
    ],
    backHome: "Retour au portfolio",
  },
  es: {
    kicker: "Juego social",
    title: "SpotA",
    intro:
      "Un juego de búsqueda diario entre amigos. Un reto, las dos cámaras, y nada que ver hasta que hayas publicado.",
    sections: [
      {
        heading: "La idea",
        body: "Un reto al día, el mismo para todo el grupo: encuentra un ___. Sin feed que scrollear, sin puntos que farmear. Tienes el día para encontrar la cosa en la vida real.",
      },
      {
        heading: "La mecánica",
        body: "Las dos cámaras se encadenan: la trasera para el objetivo, la delantera para tu cara. Se componen en una sola imagen, tomada en directo, sin importar de la galería. El feed está gateado: solo ves los spots de los demás después de publicar el tuyo.",
      },
      {
        heading: "Cómo está construido",
        body: "Flutter, un solo codebase para iOS y Android. Supabase para Postgres, Storage y auth anónima: sin cuenta, entras a un grupo con un código. Sin push ni realtime en el MVP, el feed se refresca al tirar. Bucket privado y URLs firmadas, ya que el público es 13+.",
      },
      {
        heading: "Alcance y estado",
        body: "Modo hackathon, deliberadamente lean. El onboarding y el join de grupo funcionan de punta a punta contra la base live. La pantalla del reto diario y el feed están hechos, en proceso de conexión. Aún no publicado: primero fase de prueba, APK sideload y TestFlight.",
      },
    ],
    backHome: "Volver al portafolio",
  },
};

// ============================================================================
// Page /builder — explication du plugin (EN / FR / ES).
// ============================================================================

export const builderText: Record<
  Locale,
  {
    kicker: string;
    title: string;
    intro: string;
    sections: { heading: string; body: string }[];
    contactLead: string;
    contactCta: string;
    backHome: string;
  }
> = {
  en: {
    kicker: "Claude Code plugin",
    title: "Builder",
    intro:
      "A design-system enforcer for non-engineers. Describe a front-end change in plain language; Builder delivers code that stays on the system and is left review-ready for engineers.",
    sections: [
      {
        heading: "The problem",
        body: "Non-engineers can now generate front-end code, but it drifts: off-token colors, one-off spacing, patterns that don't match the app. Review falls back on engineers, every time.",
      },
      {
        heading: "How it works",
        body: "Builder scans the repo and extracts a token contract (DTCG). You ratify it once, and it becomes the source of truth. Every change is checked against it, on the changed lines, before anything is committed.",
      },
      {
        heading: "Tiered by risk",
        body: "T1 touches tokens (color, spacing, a label, a variant). T2 composes new UI from patterns already in the app. T3, anything with logic, data or auth, stops with a clean handoff for engineering. Doubt always promotes up, never down.",
      },
      {
        heading: "Three modes",
        body: "Setup builds and ratifies the contract. Audit scores compliance without touching a file. Tweak applies one atomic change at a time, behind a write gate you approve.",
      },
      {
        heading: "Status",
        body: "V1, piloted on this very portfolio. Not public yet.",
      },
    ],
    contactLead: "Curious, or want it on your codebase?",
    contactCta: "Ask for access",
    backHome: "Back to the portfolio",
  },
  fr: {
    kicker: "Plugin Claude Code",
    title: "Builder",
    intro:
      "Un garde-fou de design system pour les non-ingénieurs. Décris un changement front-end en langage naturel ; Builder produit du code fidèle au système, laissé prêt pour la review des ingénieurs.",
    sections: [
      {
        heading: "Le problème",
        body: "Les non-ingénieurs génèrent désormais du code front-end, mais ça dérive : couleurs hors tokens, espacements one-off, patterns qui ne collent pas à l'app. La review retombe sur les ingénieurs, à chaque fois.",
      },
      {
        heading: "Comment ça marche",
        body: "Builder scanne le repo et en extrait un contrat de tokens (DTCG). Tu le ratifies une fois, il devient la source de vérité. Chaque changement est vérifié contre lui, sur les lignes modifiées, avant tout commit.",
      },
      {
        heading: "Par paliers de risque",
        body: "T1 touche aux tokens (couleur, espacement, un label, une variante). T2 compose du nouveau UI à partir de patterns déjà présents. T3, tout ce qui touche à la logique, aux données ou à l'auth, s'arrête avec un handoff propre pour l'engineering. Le doute fait toujours monter d'un cran, jamais descendre.",
      },
      {
        heading: "Trois modes",
        body: "Setup construit et ratifie le contrat. Audit note la conformité sans toucher un fichier. Tweak applique un changement atomique à la fois, derrière un write gate que tu approuves.",
      },
      {
        heading: "Statut",
        body: "V1, piloté sur ce portfolio même. Pas encore public.",
      },
    ],
    contactLead: "Envie des détails, ou de l'essayer sur ton code ?",
    contactCta: "Demander l'accès",
    backHome: "Retour au portfolio",
  },
  es: {
    kicker: "Plugin de Claude Code",
    title: "Builder",
    intro:
      "Un garante del design system para no ingenieros. Describe un cambio de front-end en lenguaje natural; Builder produce código fiel al sistema, listo para la review de los ingenieros.",
    sections: [
      {
        heading: "El problema",
        body: "Los no ingenieros ya generan código de front-end, pero se desvía: colores fuera de tokens, espaciados one-off, patrones que no encajan con la app. La review recae en los ingenieros, cada vez.",
      },
      {
        heading: "Cómo funciona",
        body: "Builder escanea el repo y extrae un contrato de tokens (DTCG). Lo ratificas una vez y se vuelve la fuente de verdad. Cada cambio se verifica contra él, en las líneas modificadas, antes de cualquier commit.",
      },
      {
        heading: "Por niveles de riesgo",
        body: "T1 toca los tokens (color, espaciado, una etiqueta, una variante). T2 compone nuevo UI a partir de patrones ya presentes. T3, todo lo que toca lógica, datos o auth, se detiene con un handoff limpio para ingeniería. La duda siempre sube un nivel, nunca baja.",
      },
      {
        heading: "Tres modos",
        body: "Setup construye y ratifica el contrato. Audit puntúa el cumplimiento sin tocar un archivo. Tweak aplica un cambio atómico a la vez, tras un write gate que apruebas.",
      },
      {
        heading: "Estado",
        body: "V1, piloteado en este mismo portafolio. Aún no público.",
      },
    ],
    contactLead: "¿Quieres los detalles, o probarlo en tu código?",
    contactCta: "Pedir acceso",
    backHome: "Volver al portafolio",
  },
};
