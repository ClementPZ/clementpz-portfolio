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
    workTitle: "Experiences",
    impactLabel: "Business impact",
    recentTitle: "Past 6 months side projects",
    recentSub:
      "Side projects in progress, each pushed toward a solid first version.",
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
    workTitle: "Expériences",
    impactLabel: "Impact business",
    recentTitle: "Side projects des 6 derniers mois",
    recentSub:
      "Des side projects en cours, chacun poussé vers une première version solide.",
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
    workTitle: "Experiencias",
    impactLabel: "Impacto de negocio",
    recentTitle: "Side projects de los últimos 6 meses",
    recentSub:
      "Side projects en marcha, cada uno llevado hacia una primera versión sólida.",
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
  en: "Hello, I'm Clément, a product designer with 10+ years of experience across product, business, design systems and innovation. I built the design function at NRC Health (Nasdaq: NRC) from scratch, and today I lead a team of three, from research to production to analytics. My role as a sales and marketing project manager at Devialet, various entrepreneurial projects, then founding a coding campus in Mexico City shaped my business-first approach, which guides how I do product today.",
  fr: "Bonjour, je suis Clément, Product designer avec 10+ ans d'expérience entre produit, business, design systems et innovation. J'ai monté la fonction design de NRC Health (Nasdaq: NRC) à partir de zéro et je pilote aujourd'hui une équipe de trois personnes, de la recherche à la production en passant par les analytics. Mon rôle de project manager sales et marketing chez Devialet, dans divers projets entrepreneuriaux, puis dans la création d'un campus de code à Mexico, a forgé mon approche business-first, qui guide aujourd'hui ma façon de faire du produit.",
  es: "Hola, soy Clément, product designer con más de 10 años de experiencia entre producto, business, design systems e innovación. Construí la función de diseño de NRC Health (Nasdaq: NRC) desde cero, y hoy lidero un equipo de tres personas, desde la investigación hasta la producción pasando por los analytics. Mi rol de project manager de ventas y marketing en Devialet, varios proyectos emprendedores, y luego la creación de un campus de código en Ciudad de México forjaron mi enfoque business-first, que guía hoy mi manera de hacer producto.",
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
        "Recruited and led NRC Health's first Design team, two Product Designers and an Analytics Specialist, serving all four product suites: Consumer, Patient, Market Insights and Employee Experience.",
        "Created a multi-product design system, design tokens and a Flowbite-based semantic layer, unifying the experience across every product and bridging design with a multi-stack production environment (Angular, React, legacy). Built an AI-assisted design-to-code workflow that lets non-technical profiles ship UX/UI changes safely.",
        "Led the design of the company's core AI features, notably the Huey conversational assistant, its product-embedded features and an ambient-listening tool that raised nurse documentation from 55% to 90%.",
        "Set up the product team's analytics approach with Product, Engineering and C-level, validating design decisions through research and A/B testing, e.g. +24% CTR on email outreach.",
      ],
    },
    episource: {
      role: "Senior → Lead Product Designer · Design System",
      bullets: [
        "Coordinated user research across several products: MCC/epiCoder, epiAnalyst, epiEncounter and HRA. Promoted to Lead Product Designer after 12 months.",
        "Contributed to the design-system rollout across the whole product suite (Q4 2021 - Q2 2022), building the Figma component libraries and integrating design tokens into production. Then owned Provider Direct Messaging, a bi-directional EHR integration built with UHC and piloted for Q1 2024.",
        "Led the Click to Code medical autocoding project, an NLP-based AI coding interface, from alpha to production (Q1 2022). A major V2.0 redesign, validated with 897 users, reached 88% acceptance and 80% satisfaction, and became a pillar of Episource's autocoding strategy, targeting 500,000-750,000 charts a year.",
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
      role: "Project Manager · Retail & Flagship Europe",
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
        "Recrutement et management de la première équipe Design de NRC Health, composée de deux Product Designers et d'un Analytics Specialist, au service des quatre suites produits : Consumer, Patient, Market Insights et Employee Experience.",
        "Création d'un design system multi-produits, de design tokens et d'une semantic layer basée sur Flowbite, unifiant l'expérience utilisateur à travers l'ensemble des produits et assurant le lien entre le design et un environnement de production multi-stack (Angular, React, legacy). Développement d'un workflow design-to-code assisté par IA permettant à des profils non techniques de déployer des évolutions UX/UI en toute sécurité.",
        "Pilotage de la conception des principales fonctionnalités IA de l'entreprise, notamment l'assistant conversationnel Huey, les features structurellement intégrées aux produits et un outil d'ambient listening ayant permis d'augmenter le taux de documentation des infirmières de 55 % à 90 %.",
        "Mise en place de l'approche analytics de l'équipe produit, en collaboration avec les équipes Produit, Engineering et C-level. Validation des décisions de conception via une approche research-driven et des A/B tests. Ex : +24 % de CTR sur les campagnes d'outreach par email.",
      ],
    },
    episource: {
      role: "Senior → Lead Product Designer · Design System",
      bullets: [
        "Coordination de la recherche utilisateur à l'échelle de plusieurs produits : MCC/epiCoder, epiAnalyst, epiEncounter et HRA. Promotion au poste de Lead Product Designer après 12 mois.",
        "Contribution au déploiement du design system sur l'ensemble de la suite produit (Q4 2021 - Q2 2022), avec la création de bibliothèques de composants Figma et l'intégration de design tokens dans l'environnement de production. Prise en charge par la suite de la conception de Provider Direct Messaging, une intégration EHR bidirectionnelle développée avec UHC et déployée en pilote pour Q1 2024.",
        "Pilotage du projet d'autocoding médical Click to Code, l'interface de coding assistée par IA reposant sur le NLP, depuis l'alpha jusqu'à la mise en production (Q1 2022). Refonte majeure (V2.0) validée auprès de 897 utilisateurs, atteignant 88 % d'acceptation et 80 % de satisfaction. Cette fonctionnalité est devenue un pilier de la stratégie d'autocoding d'Episource, avec un objectif de traitement de 500 000 à 750 000 dossiers par an.",
      ],
    },
    seif: {
      role: "Product Designer · Design System · Chef de projet",
      bullets: [
        "Définition et positionnement des produits blockchain/fintech avec le CEO et le CTO.",
        "Conception d'interfaces PWA conversationnelles : KYC, paiements, explorateur blockchain, dashboards.",
        "Construction de l'UI kit et du design system à partir de zéro.",
      ],
    },
    lewagon: {
      role: "Fondateur · Enseignant Product Design · Business Development",
      bullets: [
        "Lancement du campus Le Wagon de Mexico, le premier d'Amérique latine.",
        "Signature de 15 partenaires commerciaux, dont ITAM, Start-Up Mexico et Numa.",
        "Enseignement des fondamentaux UI/UX sur 4 promotions.",
      ],
      impact: ["4 promotions · 40 étudiants · 15 produits web livrés"],
    },
    welcomhere: {
      role: "Co-fondateur · Product & Business Development",
      bullets: [
        "Co-fondation d'une plateforme de relocation pour migrants.",
        "Prise en charge de la définition produit, des pitchs, de la levée de fonds et des partenariats.",
      ],
    },
    devialet: {
      role: "Chef de projet · Retail & Flagship Europe",
      bullets: [
        "Lancement du flagship store parisien.",
        "Déploiement des concept stores à travers l'Europe.",
        "Prise en charge des opérations retail et de l'expérience client premium.",
      ],
    },
  },
  es: {
    nrc: {
      role: "Product Design Lead",
      bullets: [
        "Contraté y gestioné el primer equipo de Diseño de NRC Health, formado por dos Product Designers y un Analytics Specialist, al servicio de las cuatro suites de producto: Consumer, Patient, Market Insights y Employee Experience.",
        "Creé un design system multi-producto, design tokens y una semantic layer basada en Flowbite, unificando la experiencia de usuario en todos los productos y conectando el diseño con un entorno de producción multi-stack (Angular, React, legacy). Desarrollé un workflow design-to-code asistido por IA que permite a perfiles no técnicos desplegar cambios de UX/UI con total seguridad.",
        "Dirigí el diseño de las principales funcionalidades de IA de la empresa, en particular el asistente conversacional Huey, sus features integradas en los productos y una herramienta de ambient listening que elevó la documentación de enfermería del 55 % al 90 %.",
        "Implementé el enfoque analytics del equipo de producto, en colaboración con los equipos de Producto, Engineering y C-level. Validé las decisiones de diseño mediante investigación y A/B testing. Ej.: +24 % de CTR en campañas de outreach por email.",
      ],
    },
    episource: {
      role: "Senior → Lead Product Designer · Design System",
      bullets: [
        "Coordiné la investigación de usuario a escala de varios productos: MCC/epiCoder, epiAnalyst, epiEncounter y HRA. Fui ascendido a Lead Product Designer tras 12 meses.",
        "Contribuí al despliegue del design system en toda la suite de producto (Q4 2021 - Q2 2022), creando las bibliotecas de componentes en Figma e integrando design tokens en el entorno de producción. Después me hice cargo del diseño de Provider Direct Messaging, una integración EHR bidireccional desarrollada con UHC y piloteada para Q1 2024.",
        "Dirigí el proyecto de autocoding médico Click to Code, la interfaz de coding asistida por IA basada en NLP, desde el alpha hasta producción (Q1 2022). Un rediseño mayor (V2.0), validado con 897 usuarios, alcanzó 88 % de aceptación y 80 % de satisfacción, y se volvió un pilar de la estrategia de autocoding de Episource, con un objetivo de 500 000 a 750 000 historiales al año.",
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
      role: "Project Manager · Retail & Flagship Europa",
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
      tagline: "Front-end changes, made accessible to PMs and designers",
      description:
        "A Claude Code plugin that lets a PM or designer make front-end changes to an app in plain language, while reinforcing the design system. The generated code is production-ready and ready for an engineer to review before merge.",
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
        "The ongoing interior design of my apartment, with inspirations from Verner Panton, Tadao Ando and Jean-Pierre Garrauld. A dedicated page where visitors upvote the photos, bumping the best ones to the top.",
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
      tagline: "Le front-end rendu accessible aux PM et aux designers",
      description:
        "Un plugin Claude Code qui permet à un PM ou un designer d'apporter des modifications au front-end d'une app en langage naturel, tout en renforçant l'usage du design system. Le code généré est production-ready et prêt pour la review d'un ingénieur avant merge.",
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
        "Une interface allégée par-dessus l'API France Travail : recherche par commune, filtres, cartes d'offres. Proxy Cloudflare Worker pour l'OAuth et le cache.",
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
        "Le design d'intérieur en cours de mon appartement, inspiré de Verner Panton, Tadao Ando et Jean-Pierre Garrauld. Une page dédiée où les visiteurs upvotent les photos, faisant remonter les meilleures.",
    },
    spota: {
      tagline: "Repérez un ___, chaque jour",
      description:
        "Un jeu social entre potes. Un défi par jour : repérez un ___. Trouvez-le dans la vraie vie, capturez-le avec les deux caméras à la fois (la cible et votre visage), et postez. Vous ne voyez les spots des autres qu'une fois le vôtre posté.",
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
      tagline: "El front-end, al alcance de PMs y diseñadores",
      description:
        "Un plugin de Claude Code que permite a un PM o un diseñador aportar modificaciones al front-end de una app en lenguaje natural, reforzando el uso del design system. El código generado es production-ready y está listo para la review de un ingeniero antes del merge.",
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
        "El diseño interior en curso de mi apartamento, inspirado en Verner Panton, Tadao Ando y Jean-Pierre Garrauld. Una página dedicada donde los visitantes votan las fotos, subiendo las mejores.",
    },
    spota: {
      tagline: "Encuentre un ___, cada día",
      description:
        "Un juego social entre amigos. Un reto al día: encuentre un ___. Búsquelo en la vida real, captúrelo con las dos cámaras a la vez (el objetivo y su cara), y publíquelo. Solo ve los spots de los demás cuando ya ha publicado el suyo.",
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
    sectionTitle: "Highlight",
    title: "Builder",
    tagline: "A Claude Code plugin",
    blurb:
      "The Builder plugin lets a PM or designer make front-end changes while reinforcing the design system. A ratified token contract, changes tiered by risk, and production-ready code an engineer only has to review and merge.",
    ctaPrimary: "Launch demo",
    ctaSecondary: "See details",
  },
  fr: {
    sectionTitle: "Highlight",
    title: "Builder",
    tagline: "Un plugin Claude Code",
    blurb:
      "Le plugin Builder permet à un PM ou un designer d'apporter des modifications au front-end tout en renforçant l'usage du design system. Un contrat de tokens validé, des changements classés par niveau de risque, et du code production-ready qu'un ingénieur n'a plus qu'à reviewer et à merger.",
    ctaPrimary: "Lancer demo",
    ctaSecondary: "Voir les détails",
  },
  es: {
    sectionTitle: "Destacado",
    title: "Builder",
    tagline: "Un plugin de Claude Code",
    blurb:
      "El plugin Builder permite a un PM o un diseñador aportar modificaciones al front-end reforzando el uso del design system. Un contrato de tokens ratificado, cambios clasificados por nivel de riesgo, y código production-ready que un ingeniero solo tiene que revisar y mergear.",
    ctaPrimary: "Lanzar demo",
    ctaSecondary: "Ver detalles",
  },
};

// Mail pré-rempli pour la demande d'accès à Builder (Highlight + page /builder).
export const builderAccessMail: Record<Locale, { subject: string; body: string }> = {
  en: {
    subject: "Builder, access request",
    body: "Hi Clément, I just came across Builder, your plugin that lets non-engineers make front-end changes while keeping the design system intact. I'd love to get access, happy to chat about it.",
  },
  fr: {
    subject: "Builder, demande d'accès",
    body: "Bonjour Clément, je viens de découvrir Builder, votre plugin qui permet aux non-ingénieurs d'apporter des modifications au front-end tout en respectant le design system. J'aimerais beaucoup y avoir accès, au plaisir d'en discuter.",
  },
  es: {
    subject: "Builder, solicitud de acceso",
    body: "Hola Clément, acabo de descubrir Builder, su plugin que permite a los no ingenieros aportar modificaciones al front-end respetando el design system. Me encantaría tener acceso; con gusto lo comentamos.",
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
      "Un jeu de repérage quotidien entre potes. Un défi, les deux caméras, et rien à voir tant que vous n'avez pas posté.",
    sections: [
      {
        heading: "L'idée",
        body: "Un défi par jour, le même pour tout le groupe : repérez un ___. Pas de feed à scroller, pas de score à farmer. Vous avez la journée pour trouver la chose dans la vraie vie.",
      },
      {
        heading: "La mécanique",
        body: "Les deux caméras s'enchaînent : l'arrière pour la cible, l'avant pour votre visage. Elles se composent en une seule image, prise en direct, sans import galerie. Le feed est gaté : vous ne voyez les spots des autres qu'après avoir posté le vôtre.",
      },
      {
        heading: "Comment c'est construit",
        body: "Flutter, un seul codebase iOS et Android. Supabase pour Postgres, le Storage et l'auth anonyme : pas de compte, vous rejoignez un groupe avec un code. Pas de push ni de realtime dans le MVP, le feed se rafraîchit au pull. Bucket privé et URLs signées, le public étant 13+.",
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
      "Un juego de búsqueda diario entre amigos. Un reto, las dos cámaras, y nada que ver hasta que haya publicado.",
    sections: [
      {
        heading: "La idea",
        body: "Un reto al día, el mismo para todo el grupo: encuentre un ___. Sin feed que scrollear, sin puntos que farmear. Tiene el día para encontrar la cosa en la vida real.",
      },
      {
        heading: "La mecánica",
        body: "Las dos cámaras se encadenan: la trasera para el objetivo, la delantera para su cara. Se componen en una sola imagen, tomada en directo, sin importar de la galería. El feed está gateado: solo ve los spots de los demás después de publicar el suyo.",
      },
      {
        heading: "Cómo está construido",
        body: "Flutter, un solo codebase para iOS y Android. Supabase para Postgres, Storage y auth anónima: sin cuenta, entra a un grupo con un código. Sin push ni realtime en el MVP, el feed se refresca al tirar. Bucket privado y URLs firmadas, ya que el público es 13+.",
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
    contactCta: string;
    backHome: string;
  }
> = {
  en: {
    kicker: "Claude Code plugin",
    title: "Builder",
    intro:
      "A tool that lets non-engineers produce front-end code that is production-ready and consistent with the design system. A PM or designer describes the interface change they want, and the plugin generates the matching code, ready for an engineer to review before merge.",
    sections: [
      {
        heading: "The problem",
        body: "PMs and designers are often the first to spot UX and UI problems, and the best placed to solve them. Today the fix goes through an engineer, or through a codegen tool that drifts fast and loses visual consistency. Builder hands that resolution back to the people whose value it is, without ever leaving the design system.",
      },
      {
        heading: "How it works",
        body: "Builder scans the repo and extracts a token contract (DTCG, a standard format), validated by a human then frozen as the reference. Every change is then checked against that contract, line by line, before any commit.",
      },
      {
        heading: "Tiered by risk",
        body: "T1 covers simple changes: a color, a spacing value, a label, a variant. T2 composes new UI from patterns already in the app. T3, anything involving logic, data or auth, stops with a clean handoff for the engineer. When in doubt, it always promotes a tier up, never down.",
      },
      {
        heading: "The architecture",
        body: "Builder ships as a versioned Claude Code plugin (v0.2.1), installable from a marketplace, not a homemade script. Inside: one orchestrator, three agents, one validator. The orchestrator, the skill itself, takes the plain-language request, tiers it by risk and holds the gates. The three agents only run when needed: a setup agent extracts the contract from the repo and the design system, a context agent runs a narrow scan when a change calls for it, an executor agent applies the ratified plan on the heavier changes. At the end of the chain, a deterministic validator, code and not an agent, checks every diff: nothing off-token, project lint and typecheck green.",
      },
    ],
    contactCta: "Contact me",
    backHome: "Back to the portfolio",
  },
  fr: {
    kicker: "Plugin Claude Code",
    title: "Builder",
    intro:
      "Un outil qui permet aux non-ingénieurs de produire du code front-end, production-ready et cohérent avec le design system. Un PM ou un designer décrit la modification d'interface souhaitée, et le plugin génère le code correspondant, prêt pour la review d'un ingénieur avant merge.",
    sections: [
      {
        heading: "Le problème",
        body: "Les PM et les designers sont souvent les premiers à repérer les problèmes d'UX et d'UI, et ceux qui savent le mieux les résoudre. Aujourd'hui l'exécution passe par un ingénieur, ou par un codegen qui dérive vite et perd la cohérence visuelle. Builder remet cette résolution entre les mains de ceux dont c'est la valeur ajoutée, sans sortir du design system.",
      },
      {
        heading: "Comment ça marche",
        body: "Builder scanne le repo et en extrait un contrat de tokens (DTCG, un format standard), validé par un humain puis figé comme référence. Chaque changement est ensuite comparé à ce contrat, ligne par ligne, avant le moindre commit.",
      },
      {
        heading: "Par paliers de risque",
        body: "T1 a trait aux changements simples : une couleur, un espacement, un label, une variante. T2 compose une nouvelle UI à partir de patterns déjà présents dans l'app. T3, dès qu'il y a de la logique, de la donnée ou de l'auth, le plugin s'arrête et prépare un handoff propre pour l'ingénieur. En cas de doute, il monte toujours d'un cran, jamais l'inverse.",
      },
      {
        heading: "L'architecture",
        body: "Builder est un plugin Claude Code versionné (v0.2.1), installable depuis un marketplace, pas un script maison. Dedans : un orchestrateur, trois agents, un validateur. L'orchestrateur, le skill lui-même, reçoit la demande en langage naturel, la classe par niveau de risque et tient les gates. Les trois agents ne se lancent qu'au besoin : un agent de setup extrait le contrat depuis le repo et le design system, un agent de contexte fait un scan ciblé quand une modification l'exige, un agent d'exécution applique le plan validé sur les changements les plus lourds. En bout de chaîne, un validateur déterministe, du code et pas un agent, vérifie chaque diff : rien hors tokens, lint et typecheck du projet qui passent.",
      },
    ],
    contactCta: "Contactez-moi",
    backHome: "Retour au portfolio",
  },
  es: {
    kicker: "Plugin de Claude Code",
    title: "Builder",
    intro:
      "Una herramienta que permite a los no ingenieros producir código front-end, production-ready y coherente con el design system. Un PM o un diseñador describe la modificación de interfaz deseada, y el plugin genera el código correspondiente, listo para la review de un ingeniero antes del merge.",
    sections: [
      {
        heading: "El problema",
        body: "Los PM y los diseñadores suelen ser los primeros en detectar los problemas de UX y de UI, y los que mejor saben resolverlos. Hoy la ejecución pasa por un ingeniero, o por un codegen que se desvía rápido y pierde la coherencia visual. Builder devuelve esa resolución a quienes aportan justamente ese valor, sin salir del design system.",
      },
      {
        heading: "Cómo funciona",
        body: "Builder escanea el repo y extrae un contrato de tokens (DTCG, un formato estándar), validado por un humano y fijado como referencia. Cada cambio se compara luego con ese contrato, línea por línea, antes de cualquier commit.",
      },
      {
        heading: "Por niveles de riesgo",
        body: "T1 cubre cambios simples: un color, un espaciado, una etiqueta, una variante. T2 compone nueva UI a partir de patrones ya presentes en la app. T3, en cuanto hay lógica, datos o auth, el plugin se detiene y prepara un handoff limpio para el ingeniero. Ante la duda, siempre sube un nivel, nunca lo contrario.",
      },
      {
        heading: "La arquitectura",
        body: "Builder es un plugin de Claude Code versionado (v0.2.1), instalable desde un marketplace, no un script casero. Dentro: un orquestador, tres agentes, un validador. El orquestador, el skill en sí, recibe la petición en lenguaje natural, la clasifica por nivel de riesgo y sostiene los gates. Los tres agentes solo se lanzan cuando hace falta: un agente de setup extrae el contrato desde el repo y el design system, un agente de contexto hace un escaneo puntual cuando un cambio lo exige, un agente de ejecución aplica el plan validado en los cambios más pesados. Al final de la cadena, un validador determinista, código y no un agente, verifica cada diff: nada fuera de tokens, lint y typecheck del proyecto en verde.",
      },
    ],
    contactCta: "Contáctame",
    backHome: "Volver al portafolio",
  },
};

// ============================================================================
// Schéma d'architecture Builder (BuilderDiagram) — textes localisés EN/FR/ES.
// ============================================================================

export const builderDiagramText: Record<
  Locale,
  {
    ariaTitle: string;
    ariaDesc: string;
    request: string;
    orchestrator: string;
    orchestratorSub: string;
    tiersLabel: string;
    doubtLabel: string;
    t1: string;
    t1Sub: string;
    t2: string;
    t2Sub: string;
    t3: string;
    t3Sub: string;
    validator: string;
    validatorSub: string;
    diff: string;
    agentSetup: string;
    agentSetupSub: string;
    gateContract: string;
    agentContext: string;
    agentContextSub: string;
    agentExec: string;
    agentExecSub: string;
    gateWrite: string;
  }
> = {
  en: {
    ariaTitle: "Builder architecture",
    ariaDesc:
      "A natural-language request goes through the orchestrator, which tiers it into three risk levels, before a deterministic validator produces a diff ready for an engineer's review. Three agents and two human gates step in as needed.",
    request: "Natural-language request",
    orchestrator: "Orchestrator",
    orchestratorSub: "the skill · tiers by risk · holds the gates",
    tiersLabel: "THREE RISK TIERS",
    doubtLabel: "doubt promotes a tier ↑",
    t1: "Tokens",
    t1Sub: "color, spacing, label · direct, no agent",
    t2: "Composition",
    t2Sub: "a UI from existing patterns",
    t3: "Logic · data · auth",
    t3Sub: "STOP → engineer handoff",
    validator: "Deterministic validator",
    validatorSub: "code, not an agent · nothing off-token · lint · typecheck",
    diff: "Diff ready for engineer review",
    agentSetup: "Agent · Setup",
    agentSetupSub: "extracts the token contract",
    gateContract: "◆ contract ratified by a human",
    agentContext: "Agent · Context",
    agentContextSub: "targeted scan, as needed",
    agentExec: "Agent · Execution",
    agentExecSub: "applies the validated plan",
    gateWrite: "◆ human write gate",
  },
  fr: {
    ariaTitle: "Architecture de Builder",
    ariaDesc:
      "Une demande en langage naturel passe par l'orchestrateur, qui la classe en trois paliers de risque, avant un validateur déterministe qui produit un diff prêt pour la review d'un ingénieur. Trois agents et deux gates humaines interviennent au besoin.",
    request: "Demande en langage naturel",
    orchestrator: "Orchestrateur",
    orchestratorSub: "le skill · classe par palier · tient les gates",
    tiersLabel: "TROIS PALIERS DE RISQUE",
    doubtLabel: "le doute monte d'un cran ↑",
    t1: "Tokens",
    t1Sub: "couleur, espacement, label · en direct, sans agent",
    t2: "Composition",
    t2Sub: "une UI à partir des patterns existants",
    t3: "Logique · données · auth",
    t3Sub: "STOP → handoff ingénieur",
    validator: "Validateur déterministe",
    validatorSub: "du code, pas un agent · rien hors tokens · lint · typecheck",
    diff: "Diff prêt pour la review ingénieur",
    agentSetup: "Agent · Setup",
    agentSetupSub: "extrait le contrat de tokens",
    gateContract: "◆ contrat ratifié par un humain",
    agentContext: "Agent · Contexte",
    agentContextSub: "scan ciblé, au besoin",
    agentExec: "Agent · Exécution",
    agentExecSub: "applique le plan validé",
    gateWrite: "◆ write gate humaine",
  },
  es: {
    ariaTitle: "Arquitectura de Builder",
    ariaDesc:
      "Una petición en lenguaje natural pasa por el orquestador, que la clasifica en tres niveles de riesgo, antes de un validador determinista que produce un diff listo para la review de un ingeniero. Tres agentes y dos gates humanas intervienen cuando hace falta.",
    request: "Petición en lenguaje natural",
    orchestrator: "Orquestador",
    orchestratorSub: "el skill · clasifica por nivel · sostiene los gates",
    tiersLabel: "TRES NIVELES DE RIESGO",
    doubtLabel: "la duda sube un nivel ↑",
    t1: "Tokens",
    t1Sub: "color, espaciado, label · en directo, sin agente",
    t2: "Composición",
    t2Sub: "una UI a partir de patrones existentes",
    t3: "Lógica · datos · auth",
    t3Sub: "STOP → handoff ingeniero",
    validator: "Validador determinista",
    validatorSub: "código, no un agente · nada fuera de tokens · lint · typecheck",
    diff: "Diff listo para la review de ingeniería",
    agentSetup: "Agente · Setup",
    agentSetupSub: "extrae el contrato de tokens",
    gateContract: "◆ contrato ratificado por un humano",
    agentContext: "Agente · Contexto",
    agentContextSub: "escaneo puntual, si hace falta",
    agentExec: "Agente · Ejecución",
    agentExecSub: "aplica el plan validado",
    gateWrite: "◆ write gate humana",
  },
};

// ============================================================================
// Easter egg sur les tags "Stack" (StackFixOverlay). Le script du terminal
// reste en anglais (convention CLI, cf. BuilderDemo) ; seul le "chrome"
// autour (badge, texte, CTA) est localisé.
// ============================================================================

export const stackEggText: Record<
  Locale,
  {
    badge: string;
    body: string;
    cta: string;
    dismissAria: string;
    overlayLead: string;
    fixedFooter: string;
    close: string;
  }
> = {
  en: {
    badge: "Bad UX!",
    body: "These are tags, not buttons. But they react on hover, as if they were clickable.",
    cta: "Correct with Builder",
    dismissAria: "Dismiss",
    overlayLead: "Watch Builder fix it, live.",
    fixedFooter: "Fixed. Hover away, nothing happens now.",
    close: "Close",
  },
  fr: {
    badge: "Mauvaise UX !",
    body: "Ce sont des tags, pas des boutons. Mais ils réagissent au survol, comme s'ils étaient cliquables.",
    cta: "Corriger avec Builder",
    dismissAria: "Fermer",
    overlayLead: "Builder corrige ça, en direct.",
    fixedFooter: "Corrigé. Passez la souris, il ne se passe plus rien.",
    close: "Fermer",
  },
  es: {
    badge: "Mala UX",
    body: "Son tags, no botones. Pero reaccionan al pasar el cursor, como si fueran clicables.",
    cta: "Corregir con Builder",
    dismissAria: "Cerrar",
    overlayLead: "Builder corrigiéndolo, en vivo.",
    fixedFooter: "Corregido. Pase el cursor, ya no reacciona.",
    close: "Cerrar",
  },
};
