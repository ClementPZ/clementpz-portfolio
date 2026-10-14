// ============================================================================
// i18n — textes localisés (EN / FR / ES).
// Le contenu STRUCTUREL (couleurs, tags, noms d'entreprise, périodes, liens,
// stack) reste dans content.ts. Ici : le TEXTE traduisible, clé par `id`
// (workText[locale][id], projectText[locale][id]) — plus de merge par index.
// ============================================================================

import type { ProjectId, WorkId } from "./content";

export type Locale = "en" | "fr" | "es";

export const locales: { id: Locale; label: string; short: string }[] = [
  { id: "en", label: "English", short: "EN" },
  { id: "fr", label: "Français", short: "FR" },
  { id: "es", label: "Español", short: "ES" },
];

export const defaultLocale: Locale = "en";

type UI = {
  getInTouch: string;
  stackTitle: string;
  workTitle: string;
  pastTitle: string;
  impactLabel: string;
  recentTitle: string;
  recentSub: string;
  recoTitle: string;
  makingOfWidget: string;
  caseStudy: string;
  getTheApp: string;
  visualLabel: string;
  readMore: string;
};

export const ui: Record<Locale, UI> = {
  en: {
    getInTouch: "Get in touch",
    stackTitle: "My day-to-day stack",
    workTitle: "Recent experiences",
    pastTitle: "Earlier experience",
    impactLabel: "Business impact",
    recentTitle: "Past 6 months side projects",
    recentSub:
      "Side projects in progress.",
    recoTitle: "Recommendations",
    makingOfWidget: "How this portfolio was built",
    caseStudy: "Read the case study",
    getTheApp: "Get the app",
    visualLabel: "Visual to come",
    readMore: "Read the rest",
  },
  fr: {
    getInTouch: "Me contacter",
    stackTitle: "Ma stack au quotidien",
    workTitle: "Expériences récentes",
    pastTitle: "Expériences précédentes",
    impactLabel: "Impact business",
    recentTitle: "Side projects des 6 derniers mois",
    recentSub:
      "Des side projects en cours.",
    recoTitle: "Recommandations",
    makingOfWidget: "Comment ce portfolio a été construit",
    caseStudy: "Lire le case study",
    getTheApp: "Télécharger l'app",
    visualLabel: "Visuel à venir",
    readMore: "Lire la suite",
  },
  es: {
    getInTouch: "Contactarme",
    stackTitle: "Mi stack del día a día",
    workTitle: "Experiencias recientes",
    pastTitle: "Experiencias anteriores",
    impactLabel: "Impacto de negocio",
    recentTitle: "Side projects de los últimos 6 meses",
    recentSub:
      "Side projects en marcha.",
    recoTitle: "Recomendaciones",
    makingOfWidget: "Cómo se construyó este portafolio",
    caseStudy: "Leer el case study",
    getTheApp: "Descargar la app",
    visualLabel: "Visual pendiente",
    readMore: "Leer el resto",
  },
};

// Legende sous l'ecran des cartes NRC et Episource de la home (courte). La
// mention sur la nature des visuels est sur les pages dediees (visualsNotice).
export const workCardCaption: Record<Locale, { nrc: string; episource: string }> = {
  en: {
    nrc: "Patient experience redesign",
    episource: "Click to Code",
  },
  fr: {
    nrc: "Refonte de l'expérience patient",
    episource: "Click to Code",
  },
  es: {
    nrc: "Rediseño de la experiencia del paciente",
    episource: "Click to Code",
  },
};

// Sous l'intro des pages dediees NRC et Episource : les visuels sont des
// reproductions volontairement non conformes, pas les vrais produits.
export const visualsNotice: Record<Locale, string> = {
  en: "The visuals on this page are simplified reproductions, deliberately different from the real products and built with royalty-free elements. They show how the product is used, they are not the actual software, out of respect for intellectual property.",
  fr: "Les visuels de cette page sont des reproductions simplifiées, volontairement différentes des produits réels et réalisées avec des éléments libres de droits. Ils montrent les usages, ce ne sont pas les vrais logiciels, par respect de la propriété intellectuelle.",
  es: "Las imágenes de esta página son reproducciones simplificadas, deliberadamente distintas de los productos reales y hechas con elementos libres de derechos. Muestran los usos, no son el software real, por respeto a la propiedad intelectual.",
};

// Sur mobile, l'intro s'arrête après cette expression (présente dans introText)
// et un "…" cliquable affiche la suite. Absente du texte : l'intro reste entière.
export const introCut: Record<Locale, string> = {
  en: "a first team of three",
  fr: "une première équipe de trois personnes",
  es: "un primer equipo de tres personas",
};

// Sur bureau (dès sm), l'intro s'arrête après cette expression, un "…" affiche
// la suite. Absente pour une langue : l'intro reste entière sur bureau.
export const introDesktopCut: Partial<Record<Locale, string>> = {
  en: "AI features and design to code flows",
  fr: "ainsi qu'un workflow design to code",
};

// Intro localisée (profile.intro).
export const introText: Record<Locale, string> = {
  en: "Hello, I'm Clément, product designer with 10+ years across product, business and design systems. I built the design function at Nasdaq-listed NRC Health from scratch: a first team of three, a centralized design system, analytics strategy, AI features and design to code flows... Before that, I was lead designer at Episource (now Optum-UnitedHealth Group), where, among others, I took an AI medical-coding interface from alpha to production. Open to Design Engineer, Design Manager, and Senior Product Designer roles.",
  fr: "Bonjour, je suis Clément, Product designer avec plus de 10 ans d'expérience entre produit, business et design systems. J'ai monté la fonction design depuis zéro chez NRC Health, une entreprise SaaS cotée au Nasdaq. Recruter et leader une première équipe de trois personnes, créé le design system, intégrer les analytics et des fonctionnalités IA ainsi qu'un workflow design to code. Avant cela, j'étais lead designer chez Episource (aujourd'hui Optum-UnitedHealth Group), où j'ai mené la migration d'une interface de coding médical via IA de l'alpha à la production. Je suis ouvert aux postes de Design Engineer, Design Manager et Senior Product Designer.",
  es: "Hola, soy Clément, product designer con más de 10 años de experiencia entre producto, business y design systems. Construí la función de diseño desde cero en NRC Health (Nasdaq): un primer equipo de tres personas, un design system adoptado por tres de las cuatro suites de producto, analytics,AI features and design to code flows. Antes, lead designer en Episource (hoy Optum), donde llevé una interfaz de codificación médica con IA del alpha a producción. Abierto a puestos de Design Engineer, Design Manager y Senior Product Designer.",
};

// Texte localisé des expériences — index aligné sur `work` dans content.ts :
// 0 NRC · 1 Episource · 2 SEIF · 3 Le Wagon · 4 Welcomhere · 5 Devialet
export const workText: Record<
  Locale,
  Record<WorkId, { role: string; bullets: string[]; impact?: string[] }>
> = {
  en: {
    nrc: {
      role: "Design Manager",
      bullets: [
        "Recruited and led NRC Health's first design team, two Product Designers and an Analytics Specialist, across all four product suites.",
        "Created a multi-product design system based on the Flowbite library: design tokens and a semantic layer shared by Angular, Vue and legacy front-ends, with an adoption ramp-up strategy from tokens to design patterns.",
        "Built an AI-assisted design-to-code workflow, so non-technical profiles can propose UX/UI changes that a developer reviews.",
        "Led the design of the company's AI features, including the Huey assistant and an ambient-listening tool that raised nurse-rounding documentation from 55% to 90% in a one-month test.",
        "Set up product analytics with Product, Engineering and the C-suite, and validated design decisions with research and A/B tests: +24% click-through on outreach emails.",
      ],
    },
    episource: {
      role: "Senior → Lead Product Designer · Design System",
      bullets: [
        "Coordinated user research across several products of the suite.",
        "Built the Figma component libraries and integrated design tokens into production for the design-system rollout across the whole product suite (Q4 2021 - Q2 2022).",
        "Promoted to Lead Product Designer after 12 months.",
        "Owned Provider Direct Messaging, a two-way integration with hospital record systems (EHR), built with UnitedHealthcare and piloted for Q1 2024.",
        "Led the Click to Code medical autocoding project, an NLP-based AI coding interface, from alpha to production (Q1 2022). A major V2.0 redesign, validated with 897 users, reached 88% acceptance and 80% satisfaction, and became a core part of Episource's autocoding strategy, targeting 500,000-750,000 charts a year.",
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
        "Taught UI/UX fundamentals across 5 batches.",
      ],
      impact: ["5 batches · 61 students · 15 web products shipped"],
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
      role: "Design Manager",
      bullets: [
        "Recrutement et management de la première équipe Design de NRC Health, deux Product Designers et un Analytics Specialist, sur les quatre suites produit.",
        "Création d'un design system multi-produits basé sur la bibliothèque Flowbite : design tokens et semantic layer partagés par les front-ends Angular, Vue et legacy, avec une stratégie d'adoption progressive, des tokens aux design patterns.",
        "Mise en place d'un workflow design-to-code assisté par IA, pour que des profils non techniques proposent des changements UX/UI relus par un développeur.",
        "Pilotage du design des fonctionnalités IA de l'entreprise, dont l'assistant Huey et un outil d'ambient listening qui a fait passer la documentation des rondes infirmières de 55 % à 90 % sur un test d'un mois.",
        "Mise en place des analytics produit avec les équipes Produit, Engineering et le C-level, et validation des décisions design par la recherche et l'A/B testing : +24 % de taux de clic sur les emails d'outreach.",
      ],
    },
    episource: {
      role: "Senior → Lead Product Designer · Design System",
      bullets: [
        "Coordination de la recherche utilisateur sur plusieurs produits de la suite.",
        "Création des bibliothèques de composants Figma et intégration des design tokens en production pour le déploiement du design system sur l'ensemble de la suite produit (Q4 2021 - Q2 2022).",
        "Promotion au poste de Lead Product Designer après 12 mois.",
        "Prise en charge de la conception de Provider Direct Messaging, une intégration bidirectionnelle avec les dossiers médicaux des hôpitaux (EHR), développée avec UnitedHealthcare et déployée en pilote pour Q1 2024.",
        "Pilotage du projet d'autocoding médical Click to Code, l'interface de coding assistée par IA reposant sur le NLP, depuis l'alpha jusqu'à la mise en production (Q1 2022). Refonte majeure (V2.0) validée auprès de 897 utilisateurs, atteignant 88 % d'acceptation et 80 % de satisfaction. Cette fonctionnalité est devenue un élément central de la stratégie d'autocoding d'Episource, avec un objectif de traitement de 500 000 à 750 000 dossiers par an.",
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
        "Enseignement des fondamentaux UI/UX sur 5 promotions.",
      ],
      impact: ["5 promotions · 61 étudiants · 15 produits web livrés"],
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
      role: "Design Manager",
      bullets: [
        "Contraté y lideré el primer equipo de Diseño de NRC Health, dos Product Designers y un Analytics Specialist, en las cuatro suites de producto.",
        "Creé un design system multi-producto basado en la librería Flowbite: design tokens y una semantic layer compartidos por los front-ends Angular, Vue y legacy, con una estrategia de adopción progresiva, de los tokens a los design patterns.",
        "Monté un workflow design-to-code asistido por IA, para que perfiles no técnicos propongan cambios de UX/UI que revisa un desarrollador.",
        "Dirigí el diseño de las funcionalidades de IA de la empresa, entre ellas el asistente Huey y una herramienta de ambient listening que elevó la documentación de las rondas de enfermería del 55 % al 90 % en una prueba de un mes.",
        "Implanté los analytics de producto con Producto, Engineering y el C-level, y validé las decisiones de diseño con investigación y A/B testing: +24 % de tasa de clics en los emails de outreach.",
      ],
    },
    episource: {
      role: "Senior → Lead Product Designer · Design System",
      bullets: [
        "Coordiné la investigación de usuarios en varios productos de la suite.",
        "Creé las bibliotecas de componentes en Figma e integré design tokens en producción para el despliegue del design system en toda la suite de producto (Q4 2021 - Q2 2022).",
        "Fui ascendido a Lead Product Designer tras 12 meses.",
        "Me hice cargo del diseño de Provider Direct Messaging, una integración bidireccional con las historias clínicas de los hospitales (EHR), desarrollada con UnitedHealthcare y pilotada para Q1 2024.",
        "Dirigí el proyecto de autocoding médico Click to Code, la interfaz de coding asistida por IA basada en NLP, desde el alpha hasta producción (Q1 2022). Un rediseño mayor (V2.0), validado con 897 usuarios, alcanzó 88 % de aceptación y 80 % de satisfacción, y se volvió una pieza central de la estrategia de autocoding de Episource, con un objetivo de 500 000 a 750 000 historiales al año.",
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
        "Enseñé fundamentos de UI/UX en 5 promociones.",
      ],
      impact: ["5 promociones · 61 estudiantes · 15 productos web entregados"],
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
  Record<ProjectId, { tagline: string; description: string }>
> = {
  en: {
    "builder-flow": {
      tagline: "Front-end changes, made accessible to PMs and designers",
      description:
        "A Claude Code plugin that lets a PM or designer make front-end changes to an app in plain language, within the design system. An engineer reviews the generated code before merge.",
    },
    "couples-card": {
      tagline: "A card game for couples",
      description:
        "A card game for couples built on a simultaneous reveal on a spectrum. 5 pillars, an intensity-based color system, special cards. Currently in card-design phase.",
    },
    "legal-music": {
      tagline: "Swap MP3s for lossless files, playlist by playlist",
      description:
        "A pipeline that audits a DJ library for low-quality files, finds better ones and swaps them in. It runs a dry run first and never deletes anything on its own: old files go to a review playlist.",
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
      tagline: "A Parisian apartment",
      description:
        "The ongoing interior design of my apartment, with inspirations from Verner Panton, Tadao Ando and Jean-Pierre Garrauld. A dedicated page where visitors upvote the photos, bumping the best ones to the top.",
    },
    spota: {
      tagline: "Spot a ___, every day",
      description:
        "A social game for friend groups. One dare a day: spot a ___. Find it in the real world, shoot it with both cameras (the target, then your face), and post. You only see your friends' spots once you have posted yours.",
    },
    days: {
      tagline: "Count days down or up",
      description:
        "An iOS day counter. Count down to a date or count up the days since one, with a ring, home screen and lock screen widgets, and a notification at each milestone. No account, no ads, everything stays on the phone.",
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
    "remarkable-calendar-sync": {
      tagline: "Your calendar, waiting on paper every morning",
      description:
        "A weekly PDF planner generated from Google Calendar and pushed automatically to a reMarkable tablet, so the week is already on paper before I sit down. Built for a Paper Pro, in-place updates keep handwritten notes when the calendar changes.",
    },
  },
  fr: {
    "builder-flow": {
      tagline: "Le front-end rendu accessible aux PM et aux designers",
      description:
        "Un plugin Claude Code qui permet à un PM ou un designer d'apporter des modifications au front-end d'une app en langage naturel, dans le cadre du design system. Un ingénieur relit le code généré avant le merge.",
    },
    "couples-card": {
      tagline: "Un jeu de cartes pour couples",
      description:
        "Un jeu de cartes pour couples basé sur une révélation simultanée sur un spectre. 5 piliers, un système de couleurs par intensité, des cartes spéciales. Actuellement en phase de design des cartes.",
    },
    "legal-music": {
      tagline: "Remplacer les MP3 par du lossless, playlist par playlist",
      description:
        "Un pipeline qui audite une bibliothèque de DJ à la recherche de fichiers de basse qualité, trouve de meilleures versions et les remplace. Il commence par un dry run et ne supprime jamais rien tout seul : les anciens fichiers vont dans une playlist de review.",
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
      tagline: "Un appartement parisien",
      description:
        "Le design d'intérieur en cours de mon appartement, inspiré de Verner Panton, Tadao Ando et Jean-Pierre Garrauld. Une page dédiée où les visiteurs upvotent les photos, faisant remonter les meilleures.",
    },
    spota: {
      tagline: "Repérez un ___, chaque jour",
      description:
        "Un jeu social entre potes. Un défi par jour : repérez un ___. Trouvez-le dans la vraie vie, capturez-le avec les deux caméras (la cible, puis votre visage), et postez. Vous ne voyez les spots des autres qu'une fois le vôtre posté.",
    },
    days: {
      tagline: "Compte à rebours et jours écoulés",
      description:
        "Un compteur de jours pour iOS. Comptez à rebours vers une date ou comptez les jours écoulés depuis, avec un anneau, des widgets sur l'écran d'accueil et l'écran verrouillé, et une notification à chaque palier. Pas de compte, pas de publicité, tout reste sur le téléphone.",
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
    "remarkable-calendar-sync": {
      tagline: "Votre agenda, déjà sur papier chaque matin",
      description:
        "Un planning hebdomadaire en PDF généré depuis Google Agenda et envoyé automatiquement sur une tablette reMarkable, pour que la semaine soit déjà sur papier avant de s'asseoir. Pensé pour une Paper Pro, la mise à jour sur place garde les notes manuscrites quand l'agenda change.",
    },
  },
  es: {
    "builder-flow": {
      tagline: "El front-end, al alcance de PMs y diseñadores",
      description:
        "Un plugin de Claude Code que permite a un PM o un diseñador aportar modificaciones al front-end de una app en lenguaje natural, dentro del design system. Un ingeniero revisa el código generado antes del merge.",
    },
    "couples-card": {
      tagline: "Un juego de cartas para parejas",
      description:
        "Un juego de cartas para parejas basado en una revelación simultánea sobre un espectro. 5 pilares, un sistema de colores por intensidad, cartas especiales. Actualmente en fase de diseño de cartas.",
    },
    "legal-music": {
      tagline: "Cambiar los MP3 por lossless, playlist por playlist",
      description:
        "Un pipeline que audita una biblioteca de DJ en busca de archivos de baja calidad, encuentra versiones mejores y las sustituye. Empieza con un dry run y nunca borra nada por su cuenta: los archivos antiguos van a una playlist de review.",
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
      tagline: "Un apartamento parisino",
      description:
        "El diseño interior en curso de mi apartamento, inspirado en Verner Panton, Tadao Ando y Jean-Pierre Garrauld. Una página dedicada donde los visitantes votan las fotos, subiendo las mejores.",
    },
    spota: {
      tagline: "Encuentre un ___, cada día",
      description:
        "Un juego social entre amigos. Un reto al día: encuentre un ___. Búsquelo en la vida real, captúrelo con las dos cámaras (el objetivo y después su cara), y publíquelo. Solo ve los spots de los demás cuando ya ha publicado el suyo.",
    },
    days: {
      tagline: "Cuenta atrás y días transcurridos",
      description:
        "Un contador de días para iOS. Cuenta hacia atrás hasta una fecha o cuenta los días desde una, con un anillo, widgets en la pantalla de inicio y en la de bloqueo, y una notificación en cada hito. Sin cuenta, sin publicidad, todo se queda en el teléfono.",
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
    "remarkable-calendar-sync": {
      tagline: "Tu agenda, ya en papel cada mañana",
      description:
        "Una agenda semanal en PDF generada desde Google Calendar y enviada automáticamente a una tablet reMarkable, para que la semana ya esté en papel antes de sentarte. Pensada para una Paper Pro, la actualización en el mismo lugar conserva las notas manuscritas cuando el calendario cambia.",
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
  | "private-live"
  | "app-store";

export const statusText: Record<Locale, Record<StatusKey, string>> = {
  en: {
    live: "Live",
    "in progress": "● In progress",
    concept: "○ Concept",
    "concept-wip": "○ Concept · WIP",
    fail: "● Fail",
    "private-live": "Private · Live",
    "app-store": "Live on App Store",
  },
  fr: {
    live: "En ligne",
    "in progress": "● En cours",
    concept: "○ Concept",
    "concept-wip": "○ Concept · WIP",
    fail: "● Échec",
    "private-live": "Privé · Live",
    "app-store": "Disponible sur l'App Store",
  },
  es: {
    live: "En vivo",
    "in progress": "● En curso",
    concept: "○ Concepto",
    "concept-wip": "○ Concepto · WIP",
    fail: "● Fallido",
    "private-live": "Privado · Live",
    "app-store": "Disponible en el App Store",
  },
};

// ============================================================================
// Page /making-of — la frise des hooks et skills construits pendant le chantier.
// Dates : commits du vault. Raisons : en-têtes de scripts, journal des
// réexplications, mesures du handoff. L'anglais est la source, FR et ES adaptés.
// ============================================================================

type MakingOfCopy = {
  kicker: string;
  title: string;
  intro: string;
  entries: {
    date: string;
    kind: string;
    title: string;
    text: string;
    whyLabel: string;
    why: string;
  }[];
  backHome: string;
};

export const makingOfText: { en: MakingOfCopy } & Partial<Record<Locale, MakingOfCopy>> = {
  en: {
    kicker: "Process",
    title: "The making of this portfolio",
    intro:
      "Along the way, Claude and I built hooks and skills, listed below. My rule: nothing gets built until the same thing has had to be explained twice. Most of them started with a mistake.",
    entries: [
      {
        date: "3 Sep",
        kind: "Hook",
        title: "The handoff cap",
        text: "The handoff note, a short file saying where the project stands, kept growing. A hook (a script that runs on its own, here after every file write) now sends back any handoff over 60 lines.",
        whyLabel: "Why 60?",
        why: "The number is not calculated, it is fixed on purpose. A cap limits size, not content, so every time I hit it I have to judge what a new session really needs: the state, not the history, and delete what the last commits made false.",
      },
      {
        date: "7 Sep",
        kind: "Command",
        title: "Ship",
        text: "Vercel builds whatever is pushed, so a broken push is a broken site. One command runs the checks and the build before saving anything, pushes, then waits until the live page really changes.",
        whyLabel: "Why wait?",
        why: "A page that answers only proves the site is up. A page whose version changed proves my change arrived.",
      },
      {
        date: "9 Sep",
        kind: "Hook",
        title: "Done has a definition",
        text: "After any edit in the project, Claude cannot end its turn until types and lint pass.",
        whyLabel: "Why at the end of the turn?",
        why: "A change often spans several files, and the middle of it is allowed to be broken. The check runs once, when Claude says it is finished.",
      },
      {
        date: "9 Sep",
        kind: "Skills",
        title: "Open and close",
        text: "The opening and closing routines were text loaded into every session, used or not. They became two skills (procedures loaded only when I ask). One reads the handoff and reports what no longer matches. The other updates it against the real files, then saves and publishes.",
        whyLabel: "Why read the files first?",
        why: "Several sessions run in parallel. A rewrite from an old read would erase another session's work.",
      },
      {
        date: "11 Sep",
        kind: "Rule",
        title: "Memory",
        text: "Claude saved a note to its own memory without being asked, in the wrong file and shape. Writing there now needs my yes, and so does a push to GitHub.",
        whyLabel: "Why a permission, not a sentence?",
        why: "The sentence already existed, and a stronger habit had beaten it once.",
      },
      {
        date: "15 Sep",
        kind: "Hook",
        title: "Blind search",
        text: "The rule said to read a project's guide before searching it. A session searched blindly anyway. Now the first search is refused until something has been read.",
        whyLabel: "Why?",
        why: "I measured a session start: about 61,700 tokens, of which my own files are about 2,700. The waste was wandering, not file size.",
      },
    ],
    backHome: "Back to the portfolio",
  },
  fr: {
    kicker: "Process",
    title: "Le making of de ce portfolio",
    intro:
      "En chemin, Claude et moi avons construit des hooks et des skills, listés ci-dessous. Ma règle : je ne construis rien avant d'avoir dû expliquer deux fois la même chose. La plupart sont nés d'une erreur.",
    entries: [
      {
        date: "3 sept",
        kind: "Hook",
        title: "Le plafond du handoff",
        text: "Le handoff, un court fichier qui dit où en est le projet, grossissait à chaque séance. Un hook (un script qui se déclenche tout seul, ici après chaque écriture de fichier) refuse désormais tout handoff de plus de 60 lignes.",
        whyLabel: "Pourquoi 60 ?",
        why: "Le chiffre est arbitraire, et c'est voulu. Un plafond limite la taille, pas le contenu : quand je l'atteins, je dois choisir ce dont une nouvelle session a vraiment besoin, l'état du projet et non son historique, et supprimer ce que les derniers commits ont rendu faux.",
      },
      {
        date: "7 sept",
        kind: "Commande",
        title: "Ship",
        text: "Vercel publie tout ce que je pousse sur GitHub : un push cassé, c'est un site cassé. Une seule commande vérifie et compile le code avant d'enregistrer quoi que ce soit, pousse, puis attend que la page en ligne ait vraiment changé.",
        whyLabel: "Pourquoi attendre ?",
        why: "Une page qui répond prouve seulement que le site fonctionne. Une page dont la version a changé prouve que ma modification est arrivée.",
      },
      {
        date: "9 sept",
        kind: "Hook",
        title: "Pas de « terminé » sans vérification",
        text: "Après toute modification du projet, Claude ne peut pas conclure tant que deux vérifications ne passent pas : les types (la cohérence des données d'un fichier à l'autre) et le lint (les règles d'écriture du code).",
        whyLabel: "Pourquoi en fin de tour ?",
        why: "Un changement touche souvent plusieurs fichiers, et le code a le droit d'être cassé en cours de route. La vérification ne tourne qu'une fois, quand Claude dit avoir fini.",
      },
      {
        date: "9 sept",
        kind: "Skills",
        title: "Ouvrir et clore",
        text: "Mes routines d'ouverture et de clôture étaient du texte rechargé à chaque session, utilisé ou non. J'en ai fait deux skills (des procédures que Claude ne charge que si je les demande). À l'ouverture, il lit le handoff et signale ce qui ne correspond plus à la réalité. À la clôture, il le met à jour d'après les vrais fichiers, puis enregistre le travail et le publie.",
        whyLabel: "Pourquoi lire les fichiers d'abord ?",
        why: "Plusieurs sessions tournent en parallèle. Un handoff réécrit à partir d'une lecture ancienne effacerait le travail d'une autre session.",
      },
      {
        date: "11 sept",
        kind: "Règle",
        title: "Mémoire",
        text: "Claude a inscrit une note dans sa propre mémoire sans que je le demande, dans le mauvais fichier et sous une mauvaise forme. Il lui faut maintenant mon accord pour y écrire, et aussi pour pousser vers GitHub.",
        whyLabel: "Pourquoi une autorisation plutôt qu'une phrase ?",
        why: "La phrase existait déjà, et une habitude de Claude plus forte qu'elle l'avait déjà emporté une fois.",
      },
      {
        date: "15 sept",
        kind: "Hook",
        title: "Recherche à l'aveugle",
        text: "Ma consigne disait de lire le guide d'un projet avant d'y chercher quoi que ce soit. Une session a cherché à l'aveugle quand même. Maintenant, la première recherche est refusée tant que Claude n'a rien lu dans le projet.",
        whyLabel: "Pourquoi cette règle ?",
        why: "J'ai mesuré le démarrage d'une session : environ 61 700 tokens (les unités de texte que Claude lit), dont 2 700 seulement viennent de mes propres fichiers. Ce qui coûtait cher, c'était de chercher sans savoir où, pas la taille de mes fichiers.",
      },
    ],
    backHome: "Retour au portfolio",
  },
  es: {
    kicker: "Process",
    title: "El making of de este portafolio",
    intro:
      "Por el camino, Claude y yo construimos hooks y skills, listados abajo. Mi regla: no se construye nada hasta que la misma cosa haya tenido que explicarse dos veces. La mayoría nació de un error.",
    entries: [
      {
        date: "3 sep",
        kind: "Hook",
        title: "El tope del handoff",
        text: "El handoff, un archivo corto que dice cómo va el proyecto, no paraba de crecer. Un hook (un script que corre solo, aquí después de cada escritura de archivo) devuelve ahora cualquier handoff de más de 60 líneas.",
        whyLabel: "¿Por qué 60?",
        why: "El número no está calculado, está fijado a propósito. Un tope limita el tamaño, no el contenido: cada vez que lo alcanzo tengo que juzgar qué necesita de verdad una sesión nueva, el estado y no el historial, y borrar lo que los últimos commits dejaron falso.",
      },
      {
        date: "7 sep",
        kind: "Comando",
        title: "Ship",
        text: "Vercel construye todo lo que se sube, así que un push roto es un sitio roto. Un solo comando ejecuta los checks y el build antes de guardar nada, hace el push y espera a que la página en línea cambie de verdad.",
        whyLabel: "¿Por qué esperar?",
        why: "Una página que responde solo prueba que el sitio está arriba. Una página cuya versión cambió prueba que mi cambio llegó.",
      },
      {
        date: "9 sep",
        kind: "Hook",
        title: "«Terminado» tiene una definición",
        text: "Tras cualquier edición en el proyecto, Claude no puede terminar su turno hasta que pasen los tipos y el lint.",
        whyLabel: "¿Por qué al final del turno?",
        why: "Un cambio suele abarcar varios archivos, y a la mitad puede estar roto. El check corre una sola vez, cuando Claude dice que terminó.",
      },
      {
        date: "9 sep",
        kind: "Skills",
        title: "Abrir y cerrar",
        text: "Las rutinas de apertura y cierre eran texto cargado en cada sesión, se usara o no. Pasaron a ser dos skills (procedimientos que se cargan solo cuando los pido). Una lee el handoff e indica lo que ya no coincide. La otra lo actualiza según los archivos reales, y luego guarda y publica.",
        whyLabel: "¿Por qué leer primero los archivos?",
        why: "Varias sesiones corren en paralelo. Reescribir a partir de una lectura vieja borraría el trabajo de otra sesión.",
      },
      {
        date: "11 sep",
        kind: "Regla",
        title: "Memoria",
        text: "Claude guardó una nota en su propia memoria sin que se lo pidiera, en el archivo equivocado y con la forma equivocada. Escribir ahí ahora requiere mi visto bueno, y un push a GitHub también.",
        whyLabel: "¿Por qué un permiso y no una frase?",
        why: "La frase ya existía, y un hábito más fuerte ya la había vencido una vez.",
      },
      {
        date: "15 sep",
        kind: "Hook",
        title: "Búsqueda a ciegas",
        text: "La regla decía leer la guía de un proyecto antes de buscar en él. Una sesión buscó a ciegas igual. Ahora la primera búsqueda se rechaza hasta que se haya leído algo.",
        whyLabel: "¿Por qué?",
        why: "Medí el arranque de una sesión: unos 61 700 tokens, de los cuales mis propios archivos son unos 2 700. El desperdicio era divagar, no el tamaño de los archivos.",
      },
    ],
    backHome: "Volver al portafolio",
  },
};

// ============================================================================
// Page /music-quality-upgrader — case study du pipeline musique (EN / FR / ES).
// ============================================================================

type MusicStep = { n: string; title: string; body: string; code?: string };
type MusicRow = { name: string; role: string };
type MusicMode = { title: string; body: string; cmd: string };
type MusicVersion = { v: string; title: string; tags: string[] };
type MusicRoad = { title: string; body: string };
type MusicFlow = { title: string; sub: string; steps: MusicStep[]; asideBold: string; aside: string };

export const musicQualityUpgraderText: Record<
  Locale,
  {
    period: string;
    title: string;
    introPre: string;
    introBold: string;
    introPost: string;
    stack: string[];
    upgrade: MusicFlow;
    flow: MusicFlow;
    tools: { title: string; sub: string; rows: MusicRow[] };
    modes: { title: string; sub: string; items: MusicMode[] };
    versions: { title: string; sub: string; items: MusicVersion[] };
    roadmap: { title: string; sub: string; items: MusicRoad[] };
    legal: string;
    backHome: string;
  }
> = {
  en: {
    period: "2025 - 2026",
    title: "Music Quality Upgrader",
    introPre:
      "I DJ, and part of my library was MP3s picked up in a hurry. This tool checks the quality of every track in a playlist, searches for a better file, files it where the old one was and moves the old one to a ",
    introBold: "review playlist",
    introPost:
      ". The same code also brings in new tracks: found on SoundMesh, a peer-to-peer network, downloaded at the best available quality, converted to lossless and filed in their playlist, ready for rekordbox.",
    stack: ["Python", "Docker", "ffmpeg", "AppleScript"],
    upgrade: {
      title: "The upgrade loop",
      sub: "One playlist in, better files out. The old file is never deleted.",
      steps: [
        { n: "01", title: "Pick a playlist", code: "meshd upgrade-batch --playlist=X", body: " runs a dry run first: the list of candidates, the plan and the estimated time. Nothing changes until I add --apply." },
        { n: "02", title: "Check the quality of every track", body: "Everything below lossless is a candidate, MP3 320 included. Already lossless or already upgraded: skipped." },
        { n: "03", title: "Search for a better file", body: "A track under 320 kbps accepts lossless or MP3 320. A 320 MP3 accepts lossless only. The search widens step by step, and a match check discards files that are not the right track." },
        { n: "04", title: "Download and convert", body: "If a source fails, the next one takes over. FLAC and WAV become AIFF, metadata travels with the file." },
        { n: "05", title: "File the new track where the old one was", body: "The new file joins every playlist of the old one, before the old one leaves them. Genre is forced on the new file." },
        { n: "06", title: "Move the old file to review", body: "The old file goes to a playlist of legacy files to review and delete by hand. It is never deleted automatically." },
        { n: "07", title: "Nothing found", body: "A 320 MP3 stays as it is, and the miss is logged. Below 320, the track joins the retry queue and the nightly job tries again." },
      ],
      asideBold: "How a run ends",
      aside: " With one recap line: upgraded, no lossless found, pending, errors. Past ten tracks, the batch runs in the background and its status is one command away.",
    },
    flow: {
      title: "How a new track gets in",
      sub: "One command, seven steps, zero intervention. Each step was hardened against a problem hit in real use.",
      steps: [
        { n: "01", title: "One command", code: 'meshd track "Artist" "Title" "Playlist"', body: " is the only input needed." },
        { n: "02", title: "Library check", body: "Already lossless: it stops there. Only in MP3: it switches to the upgrade loop. No duplicates." },
        { n: "03", title: "Escalating search", body: "A precise query first, then wider and wider until a valid source shows up. The network connection repairs itself if it drops." },
        { n: "04", title: "Quality and error filter", body: "Lossless first, MP3 320 accepted, everything else rejected. A match check discards files that are not the right track (unwanted remix, another title by the same artist)." },
        { n: "05", title: "Download with fallback", body: "If a source rejects or blocks, the next one takes over, up to five tries. Metadata (genre, artist, title) travels with the file." },
        { n: "06", title: "Automatic conversion and import", body: "FLAC and WAV become AIFF (lossless, readable by the decks), MP3 320 is kept as is. The file lands in the Music app import folder, which ingests it on its own." },
        { n: "07", title: "Filing", body: "Genre tagged from the playlist name, track added to that playlist: it is ready to play." },
      ],
      asideBold: "What if the track can't be found?",
      aside: " It joins a persistent queue. A nightly job retries the entries that are due: rarities eventually resolve as other peers come online.",
    },
    tools: {
      title: "The tools",
      sub: "The core flow only needs Docker and the Python standard library.",
      rows: [
        { name: "meshd (CLI)", role: "A single-file Python orchestrator, around 3,000 lines. Drives the daemon's REST API and the Music app via AppleScript." },
        { name: "P2P daemon", role: "Self-hosted SoundMesh client in Docker, local REST API for search and transfers." },
        { name: "Conversion hook", role: "Shell script triggered on every finished download: ffmpeg transcode, real bitrate check, MIME check, metadata." },
        { name: "Music app", role: "Watched folder for automatic import; reads and writes genres, playlists and tags via AppleScript." },
        { name: "Queue", role: "Retry with a file lock, normalized keys (artist order, accents) and due dates: no duplicates, no network spam." },
      ],
    },
    modes: {
      title: "Two modes",
      sub: "The same code serves two distinct uses.",
      items: [
        { title: "Upgrade", body: "Replace the library's MP3s with lossless, playlists preserved; the old file goes to a review list, never deleted blindly.", cmd: "meshd upgrade-batch --playlist=X --apply" },
        { title: "Download", body: "Acquire a new track, from search to filing.", cmd: 'meshd track "Artist" "Title" "Playlist"' },
      ],
    },
    versions: {
      title: "Three iterations",
      sub: "Each version closed a family of problems seen in real use, no speculative features.",
      items: [
        { v: "v1", title: "Foundations", tags: ["API search and download", "quality filter", "session cache"] },
        { v: "v2", title: "Automation", tags: ["conversion hook", "embedded metadata", "playlist by genre", "multi-source fallback", "lossless upgrade flow"] },
        { v: "v3", title: "Robustness", tags: ["upstream de-duplication", "escalating search", "auto-reconnect", "bad-file guard", "normalized queue", "dated nightly retry", "secrets out of code"] },
      ],
    },
    roadmap: {
      title: "What's next",
      sub: "The owned backlog: leads identified, noted, and deliberately left aside until the pain justifies them.",
      items: [
        { title: "Search by compilation", body: "When a single can't be found on its own, look for it through the artist's known albums and compilations already in the library." },
        { title: "Package and share", body: "Extract the personal config, document the install and publish the tool so another DJ can deploy it." },
      ],
    },
    legal:
      "SoundMesh is presented here as a generic peer-to-peer network for freely licensed, self-produced audio. The engineering described (self-hosted daemon, REST orchestration, conversion pipeline, library integration) is independent of the source and applies to any catalog the user can legitimately access.",
    backHome: "Back to the portfolio",
  },
  fr: {
    period: "2025 - 2026",
    title: "Music Quality Upgrader",
    introPre:
      "Je mixe, et une partie de ma bibliothèque était faite de MP3 récupérés à la va-vite. Cet outil vérifie la qualité de chaque morceau d'une playlist, cherche un meilleur fichier, le range là où se trouvait l'ancien et déplace l'ancien dans une ",
    introBold: "playlist de review",
    introPost:
      ". Le même code fait aussi entrer les nouveaux morceaux : trouvés sur SoundMesh, un réseau peer-to-peer, téléchargés dans la meilleure qualité disponible, convertis en lossless et rangés dans leur playlist, prêts pour rekordbox.",
    stack: ["Python", "Docker", "ffmpeg", "AppleScript"],
    upgrade: {
      title: "La boucle d'upgrade",
      sub: "Une playlist en entrée, de meilleurs fichiers en sortie. L'ancien fichier n'est jamais supprimé.",
      steps: [
        { n: "01", title: "Choisir une playlist", code: "meshd upgrade-batch --playlist=X", body: " lance d'abord un dry-run : la liste des candidats, le plan et le temps estimé. Rien ne change tant que je n'ajoute pas --apply." },
        { n: "02", title: "Vérifier la qualité de chaque morceau", body: "Tout ce qui est sous le lossless est candidat, MP3 320 compris. Déjà lossless ou déjà upgradé : ignoré." },
        { n: "03", title: "Chercher un meilleur fichier", body: "Un morceau sous 320 kbps accepte du lossless ou du MP3 320. Un MP3 320 n'accepte que du lossless. La recherche s'élargit par paliers, et un contrôle de correspondance écarte les fichiers qui ne sont pas le bon morceau." },
        { n: "04", title: "Télécharger et convertir", body: "Si une source échoue, la suivante prend le relais. FLAC et WAV sont convertis en AIFF, les métadonnées voyagent avec le fichier." },
        { n: "05", title: "Ranger le nouveau là où était l'ancien", body: "Le nouveau fichier rejoint toutes les playlists de l'ancien, avant que celui-ci ne les quitte. Le genre est forcé sur le nouveau fichier." },
        { n: "06", title: "Déplacer l'ancien en review", body: "L'ancien fichier part dans une playlist de fichiers legacy à relire et supprimer à la main. Il n'est jamais supprimé automatiquement." },
        { n: "07", title: "Rien trouvé", body: "Un MP3 320 reste tel quel, et l'échec est loggé. Sous 320, le morceau rejoint la file d'attente et le job nocturne retente." },
      ],
      asideBold: "Comment se termine un run",
      aside: " Par une ligne de récap : upgradés, sans lossless trouvé, en attente, erreurs. Au-delà de dix morceaux, le batch tourne en arrière-plan et son avancement est à une commande.",
    },
    flow: {
      title: "Comment un nouveau morceau entre",
      sub: "Une commande, sept étapes, zéro intervention. Chaque étape a été durcie contre un problème réellement rencontré à l'usage.",
      steps: [
        { n: "01", title: "Une commande", code: 'meshd track "Artiste" "Titre" "Playlist"', body: " : c'est le seul input nécessaire." },
        { n: "02", title: "Vérification de la bibliothèque", body: "Le morceau existe déjà en lossless : on s'arrête là. Il existe en MP3 : on bascule sur la boucle d'upgrade. Pas de doublons." },
        { n: "03", title: "Recherche en escalade", body: "Requête précise d'abord, puis de plus en plus large jusqu'à trouver une source valide. La connexion au réseau se répare toute seule si elle est tombée." },
        { n: "04", title: "Filtre qualité et anti-erreur", body: "Lossless en priorité, MP3 320 accepté, tout le reste refusé. Un contrôle de correspondance écarte les fichiers qui ne sont pas le bon morceau (remix non demandé, autre titre du même artiste)." },
        { n: "05", title: "Téléchargement avec repli", body: "Si une source rejette ou bloque, la suivante prend le relais, jusqu'à cinq tentatives. Les métadonnées (genre, artiste, titre) voyagent avec le fichier." },
        { n: "06", title: "Conversion et import automatiques", body: "FLAC et WAV sont convertis en AIFF (lossless, lisible par les platines), le MP3 320 est gardé tel quel. Le fichier est déposé dans le dossier d'import de l'app Musique, qui l'ingère seule." },
        { n: "07", title: "Rangement", body: "Genre tagué d'après le nom de la playlist, morceau ajouté à cette playlist : il est prêt à jouer." },
      ],
      asideBold: "Et si le morceau est introuvable ?",
      aside: " Il rejoint une file d'attente persistante. Un job nocturne retente les entrées arrivées à échéance : les raretés finissent par se résoudre quand d'autres pairs se connectent.",
    },
    tools: {
      title: "Les outils",
      sub: "Le cœur du flow ne dépend que de Docker et de la bibliothèque standard Python.",
      rows: [
        { name: "meshd (CLI)", role: "Orchestrateur Python d'environ 3 000 lignes, un seul fichier. Pilote l'API REST du daemon et l'app Musique via AppleScript." },
        { name: "Daemon P2P", role: "Client SoundMesh auto-hébergé dans Docker, API REST locale pour la recherche et les transferts." },
        { name: "Hook de conversion", role: "Script shell déclenché à chaque téléchargement terminé : transcodage ffmpeg, contrôle du bitrate réel, vérification MIME, métadonnées." },
        { name: "App Musique", role: "Dossier surveillé pour l'import automatique ; lecture et écriture des genres, playlists et tags via AppleScript." },
        { name: "File d'attente", role: "Retry avec verrou fichier, clés normalisées (ordre des artistes, accents) et dates d'échéance : pas de doublons, pas de spam réseau." },
      ],
    },
    modes: {
      title: "Deux modes",
      sub: "Le même code sert deux usages distincts.",
      items: [
        { title: "Upgrader", body: "Remplacer les MP3 de la bibliothèque par du lossless, playlists préservées, l'ancien fichier part en liste de review, jamais supprimé à l'aveugle.", cmd: "meshd upgrade-batch --playlist=X --apply" },
        { title: "Télécharger", body: "Acquérir un nouveau morceau, de la recherche au rangement.", cmd: 'meshd track "Artiste" "Titre" "Playlist"' },
      ],
    },
    versions: {
      title: "Trois itérations",
      sub: "Chaque version a fermé une famille de problèmes constatés en usage réel, pas de features spéculatives.",
      items: [
        { v: "v1", title: "Fondations", tags: ["recherche et téléchargement via API", "filtre qualité", "cache de session"] },
        { v: "v2", title: "Automatisation", tags: ["hook de conversion", "métadonnées embarquées", "playlist par genre", "repli multi-sources", "flow upgrade lossless"] },
        { v: "v3", title: "Robustesse", tags: ["anti-doublons en amont", "recherche en escalade", "reconnexion auto", "anti-mauvais-fichier", "file d'attente normalisée", "retry nocturne daté", "secrets sortis du code"] },
      ],
    },
    roadmap: {
      title: "Et ensuite",
      sub: "Le backlog assumé : des pistes identifiées, notées, et volontairement laissées de côté tant que la douleur ne le justifie pas.",
      items: [
        { title: "Recherche par compilation", body: "Quand un single est introuvable seul, le chercher via les albums et compilations connus de l'artiste déjà présents dans la bibliothèque." },
        { title: "Packager et partager", body: "Extraire la configuration personnelle, documenter l'installation et publier l'outil pour qu'un autre DJ puisse le déployer chez lui." },
      ],
    },
    legal:
      "SoundMesh est présenté ici comme un réseau peer-to-peer générique pour de l'audio librement licencié et auto-produit. L'ingénierie décrite (daemon auto-hébergé, orchestration REST, pipeline de conversion, intégration bibliothèque) est indépendante de la source et s'applique à tout catalogue auquel l'utilisateur a légitimement accès.",
    backHome: "Retour au portfolio",
  },
  es: {
    period: "2025 - 2026",
    title: "Music Quality Upgrader",
    introPre:
      "Mezclo, y parte de mi biblioteca eran MP3 conseguidos con prisa. Esta herramienta verifica la calidad de cada track de una playlist, busca un archivo mejor, lo archiva donde estaba el antiguo y mueve el antiguo a una ",
    introBold: "playlist de review",
    introPost:
      ". El mismo código también incorpora los tracks nuevos: se encuentran en SoundMesh, una red peer-to-peer, se descargan en la mejor calidad disponible, se convierten a lossless y se archivan en su playlist, listos para rekordbox.",
    stack: ["Python", "Docker", "ffmpeg", "AppleScript"],
    upgrade: {
      title: "El bucle de upgrade",
      sub: "Una playlist de entrada, mejores archivos de salida. El archivo antiguo nunca se borra.",
      steps: [
        { n: "01", title: "Elegir una playlist", code: "meshd upgrade-batch --playlist=X", body: " lanza primero un dry-run: la lista de candidatos, el plan y el tiempo estimado. Nada cambia hasta que añado --apply." },
        { n: "02", title: "Verificar la calidad de cada track", body: "Todo lo que está por debajo de lossless es candidato, MP3 320 incluido. Ya lossless o ya mejorado: se omite." },
        { n: "03", title: "Buscar un archivo mejor", body: "Un track por debajo de 320 kbps acepta lossless o MP3 320. Un MP3 320 solo acepta lossless. La búsqueda se amplía por etapas, y un control de coincidencia descarta los archivos que no son el track correcto." },
        { n: "04", title: "Descargar y convertir", body: "Si una fuente falla, la siguiente toma el relevo. FLAC y WAV se convierten a AIFF, los metadatos viajan con el archivo." },
        { n: "05", title: "Archivar el nuevo donde estaba el antiguo", body: "El archivo nuevo entra en todas las playlists del antiguo, antes de que este las abandone. El género se fuerza en el archivo nuevo." },
        { n: "06", title: "Mover el antiguo a review", body: "El archivo antiguo va a una playlist de archivos legacy para revisar y borrar a mano. Nunca se borra automáticamente." },
        { n: "07", title: "Nada encontrado", body: "Un MP3 320 se queda como está, y el fallo se registra. Por debajo de 320, el track entra en la cola y el job nocturno vuelve a intentarlo." },
      ],
      asideBold: "Cómo termina una ejecución",
      aside: " Con una línea de resumen: mejorados, sin lossless encontrado, pendientes, errores. A partir de diez tracks, el lote corre en segundo plano y su estado queda a un comando.",
    },
    flow: {
      title: "Cómo entra un track nuevo",
      sub: "Un comando, siete pasos, cero intervención. Cada paso fue endurecido contra un problema encontrado en uso real.",
      steps: [
        { n: "01", title: "Un comando", code: 'meshd track "Artista" "Título" "Playlist"', body: " es el único input necesario." },
        { n: "02", title: "Verificación de la biblioteca", body: "Ya existe en lossless: se detiene ahí. Existe en MP3: pasa al bucle de upgrade. Sin duplicados." },
        { n: "03", title: "Búsqueda en escalada", body: "Consulta precisa primero, luego cada vez más amplia hasta encontrar una fuente válida. La conexión a la red se repara sola si se cae." },
        { n: "04", title: "Filtro de calidad y anti-error", body: "Lossless primero, MP3 320 aceptado, el resto rechazado. Un control de coincidencia descarta los archivos que no son el track correcto (remix no pedido, otro título del mismo artista)." },
        { n: "05", title: "Descarga con respaldo", body: "Si una fuente rechaza o bloquea, la siguiente toma el relevo, hasta cinco intentos. Los metadatos (género, artista, título) viajan con el archivo." },
        { n: "06", title: "Conversión e importación automáticas", body: "FLAC y WAV se convierten a AIFF (lossless, legible por las platinas), el MP3 320 se conserva tal cual. El archivo se deja en la carpeta de importación de Música, que lo ingiere sola." },
        { n: "07", title: "Archivado", body: "Género etiquetado a partir del nombre de la playlist, track añadido a esa playlist: está listo para sonar." },
      ],
      asideBold: "¿Y si el track no se encuentra?",
      aside: " Entra en una cola persistente. Un job nocturno reintenta las entradas vencidas: las rarezas terminan por resolverse cuando otros pares se conectan.",
    },
    tools: {
      title: "Las herramientas",
      sub: "El núcleo del flow solo depende de Docker y de la biblioteca estándar de Python.",
      rows: [
        { name: "meshd (CLI)", role: "Orquestador Python de un solo archivo, alrededor de 3000 líneas. Pilota la API REST del daemon y la app Música vía AppleScript." },
        { name: "Daemon P2P", role: "Cliente SoundMesh autoalojado en Docker, API REST local para búsqueda y transferencias." },
        { name: "Hook de conversión", role: "Script shell disparado en cada descarga terminada: transcodificación ffmpeg, control del bitrate real, verificación MIME, metadatos." },
        { name: "App Música", role: "Carpeta vigilada para importación automática; lee y escribe géneros, playlists y etiquetas vía AppleScript." },
        { name: "Cola", role: "Reintento con bloqueo de archivo, claves normalizadas (orden de artistas, acentos) y fechas de vencimiento: sin duplicados, sin spam de red." },
      ],
    },
    modes: {
      title: "Dos modos",
      sub: "El mismo código sirve dos usos distintos.",
      items: [
        { title: "Mejorar", body: "Reemplazar los MP3 de la biblioteca por lossless, playlists preservadas; el archivo antiguo va a una lista de review, nunca borrado a ciegas.", cmd: "meshd upgrade-batch --playlist=X --apply" },
        { title: "Descargar", body: "Adquirir un nuevo track, de la búsqueda al archivado.", cmd: 'meshd track "Artista" "Título" "Playlist"' },
      ],
    },
    versions: {
      title: "Tres iteraciones",
      sub: "Cada versión cerró una familia de problemas vistos en uso real, sin features especulativas.",
      items: [
        { v: "v1", title: "Fundaciones", tags: ["búsqueda y descarga vía API", "filtro de calidad", "caché de sesión"] },
        { v: "v2", title: "Automatización", tags: ["hook de conversión", "metadatos embebidos", "playlist por género", "respaldo multi-fuente", "flow de upgrade lossless"] },
        { v: "v3", title: "Robustez", tags: ["de-duplicación en origen", "búsqueda en escalada", "reconexión automática", "guardia anti-archivo-malo", "cola normalizada", "reintento nocturno con fecha", "secretos fuera del código"] },
      ],
    },
    roadmap: {
      title: "Y después",
      sub: "El backlog asumido: pistas identificadas, anotadas y dejadas de lado a propósito hasta que el dolor lo justifique.",
      items: [
        { title: "Búsqueda por compilación", body: "Cuando un single no se encuentra solo, buscarlo a través de los álbumes y compilaciones conocidos del artista ya presentes en la biblioteca." },
        { title: "Empaquetar y compartir", body: "Extraer la configuración personal, documentar la instalación y publicar la herramienta para que otro DJ pueda desplegarla." },
      ],
    },
    legal:
      "SoundMesh se presenta aquí como una red peer-to-peer genérica para audio de licencia libre y autoproducido. La ingeniería descrita (daemon autoalojado, orquestación REST, pipeline de conversión, integración con la biblioteca) es independiente de la fuente y se aplica a cualquier catálogo al que el usuario tenga acceso legítimo.",
    backHome: "Volver al portafolio",
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
    sectionTitle: "Side projects",
    title: "Builder",
    tagline: "A Claude Code plugin",
    blurb:
      "The Builder plugin allows PMs and designers to make front-end changes. Changes follow design system conventions, with guardrails by level of risk. The code is then reviewed and merged by an engineer.",
    ctaPrimary: "Relaunch demo",
    ctaSecondary: "See details",
  },
  fr: {
    sectionTitle: "Side projects",
    title: "Builder",
    tagline: "Un plugin Claude Code",
    blurb:
      "Le plugin Builder permet aux PM et aux designers d'apporter des modifications au front-end. Les changements suivent les conventions du design system, avec des garde-fous selon le niveau de risque. Le code est ensuite relu et mergé par un ingénieur.",
    ctaPrimary: "Relancer la démo",
    ctaSecondary: "Voir les détails",
  },
  es: {
    sectionTitle: "Side projects",
    title: "Builder",
    tagline: "Un plugin de Claude Code",
    blurb:
      "El plugin Builder permite a PMs y diseñadores hacer cambios en el front-end. Los cambios siguen las convenciones del design system, con límites según el nivel de riesgo. Después, un ingeniero revisa y mergea el código.",
    ctaPrimary: "Relanzar la demo",
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

// Page /spota: pas d'entree i18n. C'est une exception documentee (voir
// CLAUDE.md) au systeme EN/FR/ES du portfolio, English only comme l'app
// elle-meme. Copie geree directement dans SpotaContent.tsx.

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
    status: { heading: string; body: string };
    nrcCta: string;
    backHome: string;
  }
> = {
  en: {
    kicker: "Claude Code plugin",
    title: "Builder",
    intro:
      "A tool that lets PMs and designers make front-end changes that stay consistent with the design system. They describe the change they want, and the plugin generates the matching code for an engineer to review before merge.",
    sections: [
      {
        heading: "The problem",
        body: "PMs and designers are often the first to spot UX and UI problems, and the best placed to solve them. Today the fix goes through an engineer, or through a codegen tool that drifts fast and loses visual consistency. Builder lets them make the fix themselves, inside the design system. The idea comes from the design-to-code workflow I built at NRC Health.",
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
        body: "Builder is a versioned Claude Code plugin (v0.2.1), installable from a marketplace. The orchestrator takes the request, tiers it by risk and holds the two human gates. Three agents run only when a change needs them. At the end, a validator that is plain code checks every diff: nothing off-token, project lint and typecheck green.",
      },
    ],
    status: {
      heading: "Where it stands",
      body: "Builder is at V1 and has not been piloted yet: this portfolio is the first target, a repo on a different styling stack comes second. Its triage is tested on a set of 18 cases. It works on web apps only, native mobile is out of scope. It never commits or pushes by itself, and anything touching logic, data or auth goes back to an engineer.",
    },
    nrcCta: "Read the NRC Health case study, where this workflow started",
    backHome: "Back to the portfolio",
  },
  fr: {
    kicker: "Plugin Claude Code",
    title: "Builder",
    intro:
      "Un outil qui permet aux PM et aux designers d'apporter des modifications front-end qui restent cohérentes avec le design system. Ils décrivent la modification souhaitée, et le plugin génère le code correspondant, à faire relire par un ingénieur avant le merge.",
    sections: [
      {
        heading: "Le problème",
        body: "Les PM et les designers sont souvent les premiers à repérer les problèmes d'UX et d'UI, et ceux qui savent le mieux les résoudre. Aujourd'hui la correction passe par un ingénieur, ou par un codegen qui dérive vite et perd la cohérence visuelle. Builder leur permet de faire la correction eux-mêmes, en utilisant le design system. L'idée vient du workflow design-to-code que j'ai monté chez NRC Health.",
      },
      {
        heading: "Comment ça marche",
        body: "Builder scanne le repo et en extrait un contrat de tokens (DTCG, un format standard), validé par un humain puis figé comme référence. Chaque changement est ensuite comparé à ce contrat, ligne par ligne, avant le moindre commit.",
      },
      {
        heading: "Par paliers de risque",
        body: "T1 couvre les changements simples : une couleur, un espacement, un label, une variante. T2 compose une nouvelle UI à partir de patterns déjà présents dans l'app. T3, dès qu'il y a de la logique, de la donnée ou de l'auth, le plugin s'arrête et prépare un handoff propre pour l'ingénieur. En cas de doute, il monte toujours d'un cran, jamais l'inverse.",
      },
      {
        heading: "L'architecture",
        body: "Builder est un plugin Claude Code versionné (v0.2.1), installable depuis un marketplace. L'orchestrateur reçoit la demande, la classe par niveau de risque et garde les deux gates humaines. Trois agents ne se lancent que si un changement en a besoin. En bout de chaîne, un validateur écrit en code vérifie chaque diff : rien hors tokens, lint et typecheck du projet qui passent.",
      },
    ],
    status: {
      heading: "Où ça en est",
      body: "Builder est en V1 et n'a pas encore été piloté : ce portfolio est la première cible, un repo sur une autre stack de styles vient ensuite. Son triage est testé sur un jeu de 18 cas. Il ne fonctionne que sur des web apps, le mobile natif est hors périmètre. Il ne commit et ne push jamais seul, et tout ce qui touche à la logique, aux données ou à l'auth revient à un ingénieur.",
    },
    nrcCta: "Lire le case study NRC Health, où ce workflow a commencé",
    backHome: "Retour au portfolio",
  },
  es: {
    kicker: "Plugin de Claude Code",
    title: "Builder",
    intro:
      "Una herramienta que permite a PM y diseñadores hacer cambios de front-end que se mantienen coherentes con el design system. Describen el cambio que quieren, y el plugin genera el código correspondiente para que un ingeniero lo revise antes del merge.",
    sections: [
      {
        heading: "El problema",
        body: "Los PM y los diseñadores suelen ser los primeros en detectar los problemas de UX y de UI, y los que mejor saben resolverlos. Hoy la corrección pasa por un ingeniero, o por un codegen que se desvía rápido y pierde la coherencia visual. Builder les permite hacer la corrección ellos mismos, dentro del design system. La idea viene del workflow design-to-code que monté en NRC Health.",
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
        body: "Builder es un plugin de Claude Code versionado (v0.2.1), instalable desde un marketplace. El orquestador recibe la petición, la clasifica por nivel de riesgo y controla los dos gates humanos. Tres agentes solo se lanzan cuando un cambio los necesita. Al final, un validador escrito en código verifica cada diff: nada fuera de tokens, lint y typecheck del proyecto en verde.",
      },
    ],
    status: {
      heading: "En qué punto está",
      body: "Builder está en V1 y todavía no se ha pilotado: este portafolio es el primer objetivo, después vendrá un repo con otro stack de estilos. Su triage se prueba con un conjunto de 18 casos. Solo funciona en web apps, el móvil nativo queda fuera de alcance. Nunca hace commit ni push por sí solo, y todo lo que toca lógica, datos o auth vuelve a un ingeniero.",
    },
    nrcCta: "Leer el case study de NRC Health, donde empezó este workflow",
    backHome: "Volver al portafolio",
  },
};

// ============================================================================
// Page /remarkable-calendar-sync — vitrine du produit (EN / FR / ES).
// Marketing seulement, pas de fonction : pas de CTA, pas de connexion.
// ============================================================================

export const remarkableCalendarSyncText: Record<
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
    kicker: "Personal automation",
    title: "reMarkable Calendar Sync",
    intro:
      "A weekly planner generated from my Google Calendar and pushed straight to my reMarkable tablet, so the week is already on paper before I open a laptop. No app, no manual export, just a page that updates itself.",
    sections: [
      {
        heading: "The idea",
        body: "Every week starts on paper for me, but building that page by hand was a chore Google Calendar didn't solve. This pulls the week straight from the calendar and lays it out as a page sized for the tablet, automatically, on a schedule.",
      },
      {
        heading: "How it works",
        body: "Every hour from 6:00 to 23:00, a job on GitHub Actions reads the calendar in read-only mode, builds a portrait week page at the tablet's size, and replaces the single week file on the device. The new week starts blank on Monday, and the old one goes to the tablet's trash.",
      },
      {
        heading: "Where it stands",
        body: "Running on my own Paper Pro since 21 September 2026, personal use for now. Sharing it with a second person, then opening it up further, is the direction, not yet built.",
      },
    ],
    backHome: "Back to the portfolio",
  },
  fr: {
    kicker: "Automatisation personnelle",
    title: "reMarkable Calendar Sync",
    intro:
      "Un planning hebdomadaire généré depuis mon agenda Google et envoyé directement sur ma tablette reMarkable, pour que la semaine soit déjà sur papier avant même d'ouvrir un ordinateur. Pas d'application, pas d'export manuel, juste une page qui se met à jour toute seule.",
    sections: [
      {
        heading: "L'idée",
        body: "Chaque semaine commence sur papier pour moi, mais construire cette page à la main était une corvée que Google Agenda ne résolvait pas. Ce projet récupère la semaine directement depuis l'agenda et la met en page au format de la tablette, automatiquement, selon un planning.",
      },
      {
        heading: "Comment ça marche",
        body: "Toutes les heures, de 6 h à 23 h, une tâche sur GitHub Actions lit l'agenda en lecture seule, construit une page semaine en portrait au format de la tablette, et remplace l'unique fichier de la semaine sur l'appareil. La nouvelle semaine démarre vierge le lundi, et l'ancienne part à la corbeille de la tablette.",
      },
      {
        heading: "Où ça en est",
        body: "Fonctionne sur ma propre Paper Pro depuis le 21 septembre 2026, usage personnel pour l'instant. Le partager avec une deuxième personne, puis l'ouvrir plus largement, c'est la direction prise, pas encore construite.",
      },
    ],
    backHome: "Retour au portfolio",
  },
  es: {
    kicker: "Automatización personal",
    title: "reMarkable Calendar Sync",
    intro:
      "Una agenda semanal generada desde mi Google Calendar y enviada directamente a mi tablet reMarkable, para que la semana ya esté en papel antes de abrir un portátil. Sin aplicación, sin exportación manual, solo una página que se actualiza sola.",
    sections: [
      {
        heading: "La idea",
        body: "Cada semana empieza en papel para mí, pero construir esa página a mano era una tarea que Google Calendar no resolvía. Este proyecto toma la semana directamente del calendario y la maqueta al formato de la tablet, automáticamente, según un horario.",
      },
      {
        heading: "Cómo funciona",
        body: "Cada hora, de 6:00 a 23:00, una tarea en GitHub Actions lee el calendario en modo solo lectura, arma una página semanal en vertical al tamaño de la tablet, y reemplaza el único archivo de la semana en el dispositivo. La nueva semana empieza en blanco el lunes, y la anterior va a la papelera de la tablet.",
      },
      {
        heading: "En qué punto está",
        body: "Funciona en mi propia Paper Pro desde el 21 de septiembre de 2026, uso personal por ahora. Compartirlo con una segunda persona, y luego abrirlo más, es la dirección tomada, todavía sin construir.",
      },
    ],
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
    tiersLabel: "Three risk tiers",
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
    orchestratorSub: "le skill · classe par palier · garde les gates",
    tiersLabel: "Trois paliers de risque",
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
    orchestratorSub: "el skill · clasifica por nivel · controla los gates",
    tiersLabel: "Tres niveles de riesgo",
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
    relaunch: string;
  }
> = {
  en: {
    badge: "UX Issue",
    body: "These are tags, not buttons. But they react on hover, as if they were clickable.",
    cta: "Correct with Builder",
    dismissAria: "Dismiss",
    overlayLead: "Watch Builder fix it, live.",
    fixedFooter: "Fixed. Hover away, nothing happens now.",
    close: "Close",
    relaunch: "Relaunch demo",
  },
  fr: {
    badge: "Problème d'UX",
    body: "Ce sont des tags, pas des boutons. Mais ils réagissent au survol, comme s'ils étaient cliquables.",
    cta: "Corriger avec Builder",
    dismissAria: "Fermer",
    overlayLead: "Builder corrige ça, en direct.",
    fixedFooter: "Corrigé. Passez la souris, il ne se passe plus rien.",
    close: "Fermer",
    relaunch: "Relancer la démo",
  },
  es: {
    badge: "Problema de UX",
    body: "Son tags, no botones. Pero reaccionan al pasar el cursor, como si fueran clicables.",
    cta: "Corregir con Builder",
    dismissAria: "Cerrar",
    overlayLead: "Builder corrigiéndolo, en vivo.",
    fixedFooter: "Corregido. Pase el cursor, ya no reacciona.",
    close: "Cerrar",
    relaunch: "Relanzar la demo",
  },
};

// ============================================================================
// Page /interior — galerie votable de l'appartement. Pas de légende par
// photo (décision produit) : juste l'intro et les libellés de vote.
// ============================================================================

export const interiorText: Record<
  Locale,
  {
    kicker: string;
    title: string;
    intro: string;
    voteSingular: string;
    votePlural: string;
    backHome: string;
  }
> = {
  en: {
    kicker: "Personal project",
    title: "Apartment Interior Design",
    intro:
      "The ongoing interior design of my apartment, inspired by Verner Panton, Tadao Ando and Jean-Pierre Garrauld. Upvote your favorites, the best rise to the top.",
    voteSingular: "vote",
    votePlural: "votes",
    backHome: "Back to the portfolio",
  },
  fr: {
    kicker: "Projet personnel",
    title: "Design d'intérieur de mon appartement",
    intro:
      "Le design d'intérieur en cours de mon appartement, inspiré de Verner Panton, Tadao Ando et Jean-Pierre Garrauld. Votez pour vos photos préférées, les meilleures remontent en haut.",
    voteSingular: "vote",
    votePlural: "votes",
    backHome: "Retour au portfolio",
  },
  es: {
    kicker: "Proyecto personal",
    title: "Diseño interior de mi apartamento",
    intro:
      "El diseño interior en curso de mi apartamento, inspirado en Verner Panton, Tadao Ando y Jean-Pierre Garrauld. Vote por sus fotos favoritas, las mejores suben arriba.",
    voteSingular: "voto",
    votePlural: "votos",
    backHome: "Volver al portafolio",
  },
};

// ============================================================================
// Page /nrc — case study NRC Health (EN/FR/ES).
// Source : note manuscrite transcrite le 04/09/2026. Ne publie que ce que le
// portfolio et le CV portent deja : aucun nom de collegue, aucun nom de
// dirigeant, les reports designes par leur role.
// ============================================================================

export const nrcText: Record<
  Locale,
  {
    kicker: string;
    period: string;
    title: string;
    intro: string;
    stack: string[];
    figureLabel: string;
    team: {
      title: string;
      org: { top: string[]; lead: string; reports: string[]; peers: string[] };
      strategy: { title: string; body: string }[];
      roadmap: { label: string; items: { category: string; title: string }[] }[];
      asideBold: string;
      aside: string;
    };
    system: {
      title: string;
      sub: string;
      items: { title: string; body: string }[];
      teaserCaption: string;
      exploreCta: string;
    };
    cases: {
      title: string;
      sub: string;
      items: {
        n: string;
        name: string;
        problem: string;
        moves: string[];
        status?: { label: string; body: string };
        result?: string;
        more?: { body: string; cta: string };
        figure: string;
      }[];
    };
    analytics: { title: string; body: string; points: string[] };
    backHome: string;
  }
> = {
  en: {
    kicker: "Design Manager · Nasdaq: NRC",
    period: "2024 → 2026",
    title: "Building the design function at NRC Health",
    intro:
      "NRC Health helps US hospitals and health systems collect, analyze and act on the experience data of their patients and their employees, through four product suites, a business of about $140 million in annual revenue. When I joined in 2024, there was no design team. Two years later: a team of three, a design system adopted by three of the four suites, four phases shipped on the redesign of the oldest product, and a 24% lift in outreach-email click-through.",
    stack: ["SaaS", "Healthcare", "Patient Experience", "Employee Experience", "Design to Code", "Management", "AI", "Analytics"],
    figureLabel: "Visual to come",
    team: {
      title: "1. Building the team",
      org: {
        top: ["CTO", "CPO", "C-suite"],
        lead: "Design Manager",
        reports: ["Senior Product Designer", "Product Designer", "Analytics Specialist"],
        peers: ["Developers", "PMs"],
      },
      strategy: [
        {
          title: "Name a designer for each suite",
          body: "Four suites, two product designers. Each suite has a named designer instead of a shared queue, and every product team knows who to go to.",
        },
        {
          title: "Ship quick wins first",
          body: "A newborn function has no credit. So the first deliveries were small, visible and fast, because that is what earns the right to take on bigger topics later.",
        },
        {
          title: "Pool the cross-product layer",
          body: "Design system, analytics and front-end are handled as one whole.",
        },
      ],
      roadmap: [
        {
          label: "Delivered in two years",
          items: [
            { category: "Design system", title: "Design tokens and Storybook components adopted by three of the four product suites" },
            { category: "Quick wins", title: "101 listed and prioritized across the products" },
            { category: "Product design", title: "Market, Customer and Patient Experience redesigns launched, from tokens to design patterns. Patient Experience: phases 0 to 3 shipped, from quick wins to the filter system" },
            { category: "Huey", title: "Three entry points across the suites, three design patterns integrated" },
            { category: "Analytics", title: "Amplitude auto-capture in place, A/B testing on design decisions" },
          ],
        },
      ],
      asideBold: "Why the team stays shared",
      aside:
        "Product teams call on design the way they call on any other function. The designers are named per suite but belong to one team, and the design system and team cohesion are common responsibilities. That is what keeps the four suites coherent.",
    },
    system: {
      title: "3. The design system",
      sub: "Four products, several front-end stacks, one design system. Its Figma library is adopted by three of the four suites and by Huey.",
      items: [
        {
          title: "Build on Flowbite",
          body: "Rather than rebuilding primitives, add a semantic layer on top, shaped around the company and its needs. There was no time to build a full design team from scratch: an existing library meant fast integration and quick wins that solved identified user problems and proved value early.",
        },
        {
          title: "Make design tokens stack-agnostic",
          body: "To cover heterogeneous environments: Angular, Vue and legacy code all consume the same tokens.",
        },
        {
          title: "Share patterns across products",
          body: "Navigation, filters and the overall page template are common to every product, which eases development on one side, and onboarding and everyday use on the other.",
        },
        {
          title: "Make Figma and Storybook the shared source of truth",
          body: "Design and engineering look at the same component at the same time, so a gap between what was designed and what shipped shows at once.",
        },
        {
          title: "Experiment with AI-assisted code generation",
          body: "A design-to-code workflow that lets non-technical profiles ship changes consistent with the design system, and generates code ready for developer review.",
        },
      ],
      teaserCaption: "Flowbite, the open-source base of the system, extracted into tokens and 19 live components.",
      exploreCta: "Explore the extracted design system",
    },
    cases: {
      title: "2. Three product cases",
      sub: "Three problems of a different nature: redesigning the company's most profitable product, lifting conversion on a major data-collection channel, and a strategic call on AI.",
      items: [
        {
          n: "a",
          name: "Redesigning the Patient Experience suite",
          problem:
            "The oldest product in the portfolio, layered with years of iterations without a sustained product strategy, and weighed down by technical debt. Hospitals rely on it every day, so the redesign could not disrupt any of their workflows.",
          moves: [
            "Tackle the suite in phases rather than as one single project, each with its own scope and success criteria.",
            "Open each phase with a round of user research, to confirm in finer detail the problems identified upstream.",
            "Pair with a dedicated front-end developer squad based in Vietnam, which shortens the path from a design decision to production.",
            "Keep the product usable at every step, so the work could pause or be reordered without leaving a half-redesigned suite behind.",
          ],
          status: {
            label: "Status in July 2026: ",
            body: "Phase 0 shipped: two quick wins on the legacy screen, favorite reports on top and a report search. Phase 1 shipped: design tokens and primitive components (buttons, input fields). Phase 2 shipped: the navigation bar. Phase 3 shipped: the filter system. Tables and data visualization were next.",
          },
          figure: "Before and after, one phase of the suite",
        },
        {
          n: "b",
          name: "The outreach email",
          problem:
            "These emails had an 8% click-through rate, which is decent, but the email had no reading hierarchy and no clear main action, so it was easy to mistake for spam.",
          moves: [
            "List 101 quick wins across every product, then prioritize them. This one combined a wide reach with a low cost of change.",
            "Rebuild the email around a single action, instead of a wall of content.",
            "Ship it straight through the design-to-code pipeline, with no spec in between.",
            "Present the result to the executive committee, before and after side by side.",
          ],
          result: "Click-through rate from 8% to 9.9% in an A/B test, a 24% lift.",
          figure: "The outreach email, after the redesign",
        },
        {
          n: "c",
          name: "Huey, one door for AI",
          problem:
            "AI features were multiplying across the portfolio, each with its own entry point and its own definition.",
          moves: [
            "Bring everything under Huey: a single assistant federating the AI capabilities, extended into smart features and components shared by every suite.",
            "Settle on three entry points and no more: an agent to query the data directly, a widget component that pushes information (summaries, insights, next logical actions...), and features embedded in the products where the work already happens (writing assistant, incident handling, ambient listening...).",
            "Make the entry point a product decision, rather than a choice revisited from scratch with every feature.",
          ],
          result: "Ambient listening, for example, raised nurse-rounding documentation from 55% to 90% in a one-month test.",
          more: {
            body: "The research behind it distilled into three principles every Huey interaction has to pass: inviting, relevant, adaptive. They became an evaluation test, then a marker and a drawer shared by every product.",
            cta: "Explore a workshop session for Huey",
          },
          figure: "Huey, the three entry points",
        },
      ],
    },
    analytics: {
      title: "4. Analytics",
      body: "Product analytics was built with Product, Engineering and the executive committee, so a design decision could be checked against a number. The outreach email above is the example: one hypothesis, one A/B test, a measured 24% lift.",
      points: [
        "Bring an Analytics Specialist into the design team, so measurement is planned while the feature is designed.",
        "Back every design decision with research and A/B testing, so each change ships with a measurable hypothesis.",
        "Workshops and hands-on definition of KPIs and North Stars with PMs and the C-suite.",
      ],
    },
    backHome: "Back to the portfolio",
  },
  fr: {
    kicker: "Design Manager · Nasdaq: NRC",
    period: "2024 → 2026",
    title: "Monter la fonction design chez NRC Health",
    intro:
      "NRC Health accompagne les hôpitaux et les systèmes de santé américains dans la collecte, l'analyse et l'exploitation des données d'expérience de leurs patients et de leurs collaborateurs, grâce à quatre suites produit, pour un business d'environ 140 millions de dollars de chiffre d'affaires annuel. À mon arrivée en 2024, il n'y avait pas d'équipe design. Deux ans plus tard : une équipe de trois personnes, un design system adopté par trois des quatre suites, quatre phases livrées sur la refonte du produit le plus ancien, et +24 % de taux de clic sur les emails d'outreach.",
    stack: ["SaaS", "Healthcare", "Patient Experience", "Employee Experience", "Design to Code", "Management", "IA", "Analytics"],
    figureLabel: "Visuel à venir",
    team: {
      title: "1. Monter l'équipe",
      org: {
        top: ["CTO", "CPO", "C-suite"],
        lead: "Design Manager",
        reports: ["Senior Product Designer", "Product Designer", "Analytics Specialist"],
        peers: ["Developers", "PMs"],
      },
      strategy: [
        {
          title: "Nommer un designer pour chaque suite",
          body: "Quatre suites, deux product designers. Chaque suite a son designer identifié plutôt qu'une file d'attente partagée, et chaque équipe produit sait à qui s'adresser.",
        },
        {
          title: "Livrer des quick wins d'abord",
          body: "Une fonction qui vient de naître n'a aucune crédibilité. Les premières livraisons ont donc été petites, visibles et rapides, parce que c'est ainsi qu'on gagne le droit d'aborder les sujets plus gros ensuite.",
        },
        {
          title: "Mutualiser la couche transverse",
          body: "Design system, analytics et front-end sont traités comme un tout.",
        },
      ],
      roadmap: [
        {
          label: "Livré en deux ans",
          items: [
            { category: "Design system", title: "Design tokens et composants Storybook adoptés par trois des quatre suites produit" },
            { category: "Quick wins", title: "101 recensés et priorisés sur l'ensemble des produits" },
            { category: "Product design", title: "Refontes Market, Customer et Patient Experience lancées, des tokens aux design patterns. Patient Experience : phases 0 à 3 livrées, des quick wins au système de filtres" },
            { category: "Huey", title: "Trois points d'entrée sur l'ensemble des suites, trois design patterns intégrés" },
            { category: "Analytics", title: "Auto-capture Amplitude en place, A/B testing sur les décisions design" },
          ],
        },
      ],
      asideBold: "Pourquoi l'équipe reste partagée",
      aside:
        "Les équipes produit font appel au design comme à n'importe quelle autre fonction. Les designers sont identifiés par suite mais appartiennent à une seule équipe, et le design system comme la cohésion de l'équipe sont des responsabilités communes. C'est ce qui maintient la cohérence des quatre suites.",
    },
    system: {
      title: "3. Le design system",
      sub: "Quatre produits, plusieurs stacks front, un seul design system. Sa bibliothèque Figma est adoptée par trois des quatre suites et par Huey.",
      items: [
        {
          title: "S'appuyer sur Flowbite",
          body: "Plutôt que reconstruire les primitives, ajouter par-dessus une couche sémantique propre à l'entreprise et à ses besoins. Pas le temps de monter une équipe design complète de zéro : une bibliothèque existante permettait une intégration rapide et des quick wins qui résolvaient des problèmes utilisateurs identifiés et prouvaient la valeur dès le début.",
        },
        {
          title: "Rendre les design tokens agnostiques de la stack",
          body: "Pour couvrir des environnements hétérogènes : Angular, Vue et le code legacy consomment les mêmes tokens.",
        },
        {
          title: "Mutualiser les patterns",
          body: "Navigation, filtres et template général des pages sont communs aux produits, ce qui facilite le développement d'une part, l'onboarding et l'usage d'autre part.",
        },
        {
          title: "Faire de Figma et Storybook la source de vérité commune",
          body: "Design et engineering regardent le même composant au même moment, si bien qu'un écart entre ce qui a été designé et ce qui a été livré se voit tout de suite.",
        },
        {
          title: "Expérimenter la génération de code assistée par IA",
          body: "Un workflow design-to-code qui permet à des profils non techniques de livrer des changements cohérents avec le design system, et de générer du code prêt pour la review des développeurs.",
        },
      ],
      teaserCaption: "Flowbite, la base open source du système, extraite en tokens et 19 composants vivants.",
      exploreCta: "Explorer le design system extrait",
    },
    cases: {
      title: "2. Trois cas produit",
      sub: "Trois sujets de nature différente : la refonte du produit le plus rentable de l'entreprise, la conversion d'un canal majeur d'acquisition de données, et un arbitrage stratégique sur l'IA.",
      items: [
        {
          n: "a",
          name: "Refondre la suite Patient Experience",
          problem:
            "Le produit le plus ancien du portefeuille, sédimenté par des années d'itérations sans réelle stratégie produit suivie, et alourdi par la dette technique. Les hôpitaux s'appuient dessus tous les jours : la refonte ne devait perturber aucun de leurs workflows.",
          moves: [
            "Traiter la suite par phases plutôt qu'en un chantier unique, chacune avec son périmètre et ses critères de réussite.",
            "Ouvrir chaque phase par une séquence de recherche utilisateur, pour confirmer plus finement les problèmes découverts en amont.",
            "Travailler en binôme avec une squad de développeurs front-end dédiée, basée au Vietnam, ce qui raccourcit le trajet entre une décision de design et sa mise en production.",
            "Laisser le produit utilisable à chaque palier, de sorte que le chantier puisse s'interrompre ou se réordonner sans laisser une suite à moitié refondue.",
          ],
          status: {
            label: "État en juillet 2026 : ",
            body: "Phase 0 livrée : deux quick wins sur l'écran legacy, les rapports favoris en haut et une recherche de rapports. Phase 1 livrée : design tokens et composants primitifs (boutons, champs de saisie). Phase 2 livrée : la barre de navigation. Phase 3 livrée : le système de filtres. Les tables et la data visualization étaient les suivantes.",
          },
          figure: "Avant et après, une phase de la suite",
        },
        {
          n: "b",
          name: "L'email d'outreach",
          problem:
            "Ces emails avaient un taux de clic de 8 %, ce qui est correct, mais l'email n'avait ni hiérarchie de lecture ni action principale claire, et se confondait facilement avec du spam.",
          moves: [
            "Recenser 101 quick wins à travers l'ensemble des produits, puis les prioriser. Celui-ci combinait une large portée et un faible coût de changement.",
            "Reconstruire l'email autour d'une action unique, au lieu d'un mur de contenu.",
            "Livrer directement via le pipeline design-to-code, sans passer par une spec.",
            "Présenter le résultat au comité de direction, avant et après côte à côte.",
          ],
          result: "Taux de clic de 8 % à 9,9 % en A/B test, soit +24 %.",
          figure: "L'email d'outreach, après la refonte",
        },
        {
          n: "c",
          name: "Huey, une porte unique pour l'IA",
          problem:
            "Les fonctionnalités d'IA se multipliaient un peu partout dans le portefeuille, chacune avec son point d'entrée et sa propre définition.",
          moves: [
            "Regrouper l'ensemble sous Huey : un seul assistant qui fédère les fonctions IA, décliné en features et en composants intelligents communs à toutes les suites.",
            "Arbitrer trois points d'entrée et pas davantage : un agent d'interrogation directe des données, un composant widget qui pousse de l'information (résumés, insights, prochaines actions logiques...), et des fonctionnalités intégrées aux produits là où le travail se fait déjà (assistant de rédaction, traitement des incidents, ambient listening...).",
            "Faire du point d'entrée une décision produit, et non un choix repris à zéro à chaque fonctionnalité.",
          ],
          result: "L'ambient listening, par exemple, a fait passer la documentation des rondes infirmières de 55 % à 90 % sur un test d'un mois.",
          more: {
            body: "La recherche derrière ce choix s'est condensée en trois principes que toute interaction Huey doit passer : invitant, pertinent, adaptatif. Ils sont devenus un test d'évaluation, puis un marqueur et un drawer communs à tous les produits.",
            cta: "Explorer une session de workshop sur Huey",
          },
          figure: "Huey, les trois points d'entrée",
        },
      ],
    },
    analytics: {
      title: "4. Analytics",
      body: "Les analytics produit ont été construits avec les équipes Produit, Engineering et le comité de direction, pour qu'une décision design puisse se vérifier sur un chiffre. L'email d'outreach ci-dessus en est l'exemple : une hypothèse, un A/B test, +24 % mesurés.",
      points: [
        "Intégrer un Analytics Specialist à l'équipe design, pour que la mesure soit prévue pendant la conception de la fonctionnalité.",
        "Adosser chaque décision design à de la recherche et à de l'A/B testing, pour qu'un changement parte avec une hypothèse mesurable.",
        "Workshops et définition, main dans la main, des KPI et des North Stars avec les PM et le C-level.",
      ],
    },
    backHome: "Retour au portfolio",
  },
  es: {
    kicker: "Design Manager · Nasdaq: NRC",
    period: "2024 → 2026",
    title: "Construir la función de diseño en NRC Health",
    intro:
      "NRC Health acompaña a hospitales y sistemas de salud de Estados Unidos en la recopilación, el análisis y el aprovechamiento de los datos de experiencia de sus pacientes y de sus empleados, a través de cuatro suites de producto, un negocio de unos 140 millones de dólares de ingresos anuales. Cuando llegué en 2024, no había equipo de diseño. Dos años después: un equipo de tres personas, un design system adoptado por tres de las cuatro suites, cuatro fases entregadas en el rediseño del producto más antiguo, y un 24 % más de tasa de clics en los emails de outreach.",
    stack: ["SaaS", "Healthcare", "Patient Experience", "Employee Experience", "Design to Code", "Management", "IA", "Analytics"],
    figureLabel: "Visual pendiente",
    team: {
      title: "1. Construir el equipo",
      org: {
        top: ["CTO", "CPO", "C-suite"],
        lead: "Design Manager",
        reports: ["Senior Product Designer", "Product Designer", "Analytics Specialist"],
        peers: ["Developers", "PMs"],
      },
      strategy: [
        {
          title: "Nombrar un diseñador para cada suite",
          body: "Cuatro suites, dos product designers. Cada suite tiene su diseñador de referencia en lugar de una cola compartida, y cada equipo de producto sabe a quién acudir.",
        },
        {
          title: "Entregar quick wins primero",
          body: "Una función recién nacida no tiene crédito. Por eso las primeras entregas fueron pequeñas, visibles y rápidas: es lo que da derecho a abordar después los temas de mayor calado.",
        },
        {
          title: "Centralizar la capa transversal",
          body: "Design system, analytics y front-end se tratan como un todo. El diseñador senior asumió después el design system que yo llevaba.",
        },
      ],
      roadmap: [
        {
          label: "Entregado en dos años",
          items: [
            { category: "Design system", title: "Design tokens y componentes de Storybook adoptados por tres de las cuatro suites de producto" },
            { category: "Quick wins", title: "101 identificados y priorizados en todos los productos" },
            { category: "Product design", title: "Rediseños de Market, Customer y Patient Experience lanzados, de los tokens a los design patterns. Patient Experience: fases 0 a 3 entregadas, de los quick wins al sistema de filtros" },
            { category: "Huey", title: "Tres puntos de entrada en todas las suites, tres design patterns integrados" },
            { category: "Analytics", title: "Auto-capture de Amplitude en marcha, A/B testing en las decisiones de diseño" },
          ],
        },
      ],
      asideBold: "Por qué el equipo sigue siendo compartido",
      aside:
        "Los equipos de producto recurren al diseño como a cualquier otra función. Los diseñadores tienen una suite asignada pero pertenecen a un solo equipo, y el design system y la cohesión del equipo son responsabilidades comunes. Eso es lo que mantiene coherentes las cuatro suites.",
    },
    system: {
      title: "3. El design system",
      sub: "Cuatro productos, varios stacks de front-end, un solo design system. Su biblioteca de Figma está adoptada por tres de las cuatro suites y por Huey.",
      items: [
        {
          title: "Apoyarse en Flowbite",
          body: "En lugar de reconstruir las primitivas, añadir encima una capa semántica propia, pensada para la empresa y sus necesidades. No había tiempo para crear un equipo de diseño completo desde cero: una librería existente permitía una integración rápida y quick wins que resolvían problemas de usuario identificados y demostraban valor desde el principio.",
        },
        {
          title: "Hacer los design tokens agnósticos",
          body: "Para cubrir entornos heterogéneos: Angular, Vue y el código legacy consumen los mismos tokens.",
        },
        {
          title: "Compartir los patrones",
          body: "Navegación, filtros y plantilla general de página son comunes a todos los productos, lo que facilita el desarrollo por un lado, y el onboarding y el uso por otro.",
        },
        {
          title: "Hacer de Figma y Storybook la fuente de verdad común",
          body: "Diseño e ingeniería miran el mismo componente al mismo tiempo, de modo que una diferencia entre lo diseñado y lo entregado se ve enseguida.",
        },
        {
          title: "Experimentar con la generación de código asistida por IA",
          body: "Un workflow design-to-code que permite a perfiles no técnicos entregar cambios coherentes con el design system y generar código listo para la review de los desarrolladores.",
        },
      ],
      teaserCaption: "Flowbite, la base de código abierto del sistema, extraída en tokens y 19 componentes vivos.",
      exploreCta: "Explorar el design system extraído",
    },
    cases: {
      title: "2. Tres casos de producto",
      sub: "Tres temas de naturaleza distinta: el rediseño del producto más rentable de la empresa, la conversión de un canal clave de captación de datos y una decisión estratégica sobre la IA.",
      items: [
        {
          n: "a",
          name: "Rediseñar la suite Patient Experience",
          problem:
            "El producto más antiguo de la cartera, fruto de años de iteraciones sin una estrategia de producto sostenida y lastrado por la deuda técnica. Los hospitales lo usan a diario: el rediseño no podía alterar ninguno de sus flujos de trabajo.",
          moves: [
            "Abordar la suite por fases y no como un único proyecto, cada una con su alcance y sus criterios de éxito.",
            "Abrir cada fase con una ronda de investigación de usuarios, para confirmar con más detalle los problemas detectados previamente.",
            "Trabajar en tándem con una squad de desarrolladores front-end dedicada, con base en Vietnam, lo que acorta el camino entre una decisión de diseño y su puesta en producción.",
            "Mantener el producto utilizable en cada etapa, para que el proyecto pudiera pausarse o reordenarse sin dejar una suite a medio rediseñar.",
          ],
          status: {
            label: "Estado en julio de 2026: ",
            body: "Fase 0 entregada: dos quick wins en la pantalla legacy, los informes favoritos arriba y una búsqueda de informes. Fase 1 entregada: design tokens y componentes primitivos (botones, campos de entrada). Fase 2 entregada: la barra de navegación. Fase 3 entregada: el sistema de filtros. Las tablas y la data visualization eran las siguientes.",
          },
          figure: "Antes y después, una fase de la suite",
        },
        {
          n: "b",
          name: "El email de contacto",
          problem:
            "Estos emails tenían una tasa de clics del 8%, una cifra correcta, pero el email no tenía jerarquía de lectura ni una acción principal clara, y se confundía fácilmente con spam.",
          moves: [
            "Identificar 101 quick wins en todos los productos y priorizarlos. Este combinaba un gran alcance con un bajo coste de cambio.",
            "Reconstruir el email en torno a una única acción, en lugar de un muro de contenido.",
            "Entregarlo directamente a través del pipeline design-to-code, sin pasar por una spec.",
            "Presentar el resultado al comité de dirección, con el antes y el después lado a lado.",
          ],
          result: "Tasa de clics del 8% al 9,9% en un A/B test, un 24% más.",
          figure: "El email de outreach, después del rediseño",
        },
        {
          n: "c",
          name: "Huey, una puerta única para la IA",
          problem:
            "Las funcionalidades de IA se multiplicaban por toda la cartera, cada una con su propio punto de entrada y su propia definición.",
          moves: [
            "Reunir todo bajo Huey: un único asistente que unifica las funciones de IA, extendido en features y componentes inteligentes comunes a todas las suites.",
            "Fijar tres puntos de entrada, ni uno más: un agente para consultar los datos directamente, un componente widget que empuja información (resúmenes, insights, próximas acciones lógicas...) y funcionalidades integradas en los productos allí donde ya se trabaja (asistente de redacción, gestión de incidencias, ambient listening...).",
            "Hacer del punto de entrada una decisión de producto, y no una elección que se replantea desde cero con cada funcionalidad.",
          ],
          result: "El ambient listening, por ejemplo, elevó la documentación de las rondas de enfermería del 55 % al 90 % en una prueba de un mes.",
          more: {
            body: "La investigación detrás de esta decisión se condensó en tres principios que toda interacción con Huey debe superar: invitante, relevante, adaptable. Se convirtieron en un test de evaluación y luego en un marcador y un drawer comunes a todos los productos.",
            cta: "Explorar una sesión de workshop sobre Huey",
          },
          figure: "Huey, los tres puntos de entrada",
        },
      ],
    },
    analytics: {
      title: "4. Analytics",
      body: "Los analytics de producto se construyeron con Producto, Engineering y el comité de dirección, para que una decisión de diseño pudiera comprobarse con una cifra. El email de contacto de arriba es el ejemplo: una hipótesis, un A/B test, un 24 % medido.",
      points: [
        "Integrar un Analytics Specialist en el equipo de diseño, para que la medición se prevea mientras se diseña la funcionalidad.",
        "Respaldar cada decisión de diseño con investigación y A/B testing, para que cada cambio salga con una hipótesis medible.",
        "Workshops y definición, mano a mano, de los KPI y las North Stars con los PM y el C-level.",
      ],
    },
    backHome: "Volver al portafolio",
  },
};

// ============================================================================
// spotaHighlightText — le bloc SpotA de la section Highlights (home).
// Le titre "Today, spot ..." n'est pas ici : c'est le nom du produit joué
// dans la phrase, le traduire casserait le jeu de mots. Les prompts qui
// défilent restent en anglais aussi, ce sont les défis réels de l'app.
// La page /spota, elle, reste entièrement hors i18n (English only).
// ============================================================================

export const spotaHighlightText: Record<
  Locale,
  { eyebrow: string; lede: string; cta: string; finePrint: string }
> = {
  en: {
    eyebrow: "A daily photo game for friend groups",
    lede: "One dare a day. Find it in the real world, shoot it, back camera for the target, front camera for you. Post yours to unlock what your crew spotted.",
    cta: "Get the app",
    finePrint: "iOS · ages 13+",
  },
  fr: {
    eyebrow: "Un jeu photo quotidien pour les groupes d'amis",
    lede: "Un défi par jour. Trouve-le dans la vraie vie, capture-le, caméra arrière pour la cible, caméra avant pour toi. Publie le tien pour découvrir ce que ton crew a repéré.",
    cta: "Télécharger l'app",
    finePrint: "iOS · 13 ans et plus",
  },
  es: {
    eyebrow: "Un juego de fotos diario para grupos de amigos",
    lede: "Un reto al día. Encuéntralo en la vida real, captúralo, cámara trasera para el objetivo, cámara frontal para ti. Publica el tuyo para ver lo que encontró tu grupo.",
    cta: "Descargar la app",
    finePrint: "iOS · 13 años o más",
  },
};

// ============================================================================
// Page /nrc/design-system : extraction Flowbite (EN/FR/ES). Seul le chrome de
// la page est traduit, les notes d'usage et les guides restent en anglais
// (voir src/data/flowbiteSystem.ts).
// ============================================================================

export const nrcSystemText: Record<
  Locale,
  {
    kicker: string;
    period: string;
    title: string;
    intro: string;
    disclaimerBold: string;
    disclaimer: string;
    sourceLabel: string;
    color: { title: string; sub: string };
    type: { title: string; sub: string };
    spacing: { title: string; sub: string };
    radius: { title: string; sub: string };
    shadow: { title: string; sub: string };
    icons: {
      title: string;
      sub: string;
      searchPlaceholder: string;
      variantAll: string;
      variantOutline: string;
      variantSolid: string;
      categoryAll: string;
      copied: string;
      copyFallback: string;
    };
    components: { title: string; sub: string; notBuilt: string };
    groups: Record<string, string>;
    backCase: string;
  }
> = {
  en: {
    kicker: "Design system · Open source",
    period: "MIT license",
    title: "Flowbite, extracted and documented",
    intro:
      "At NRC Health, the design system is built on Flowbite. This page shows that open-source base on its own: every token copied from the source, every component with a live preview and a usage guide. Usage notes and guides are in English.",
    disclaimerBold: "This is not NRC's design system. ",
    disclaimer:
      "It is a public extraction of Flowbite, and it does not include the semantic layer built on top of it at NRC.",
    sourceLabel: "Source: flowbite.com, MIT license",
    color: {
      title: "Color",
      sub: "Tailwind's default palette as Flowbite uses it. Each note says where a shade is used and the contrast computed against its usual background.",
    },
    type: {
      title: "Type",
      sub: "Heading and text sizes documented by Flowbite. The family is Inter, the specimens below use the system font.",
    },
    spacing: { title: "Spacing", sub: "Steps that map to Flowbite's button paddings and layout gaps." },
    radius: { title: "Radius", sub: "Tailwind's default scale, from checkboxes to pills." },
    shadow: { title: "Shadow", sub: "Three elevations, from cards to modals." },
    icons: {
      title: "Icons",
      sub: "751 icons vendored from Flowbite's own icon set, MIT license, outline and solid. Search by name, click one to copy its SVG.",
      searchPlaceholder: "Search icons",
      variantAll: "All",
      variantOutline: "Outline",
      variantSolid: "Solid",
      categoryAll: "All categories",
      copied: "Copied",
      copyFallback: "Copy unavailable, select manually",
    },
    components: {
      title: "Components",
      sub: "Nineteen components, all live. Hover, focus and click inside the previews.",
      notBuilt: "Not built yet: Alert, Table, Tabs, Modal, Avatar.",
    },
    groups: { Actions: "Actions", Forms: "Forms", Navigation: "Navigation", Surfaces: "Surfaces", Feedback: "Feedback" },
    backCase: "Back to the NRC case study",
  },
  fr: {
    kicker: "Design system · Open source",
    period: "Licence MIT",
    title: "Flowbite, extrait et documenté",
    intro:
      "Chez NRC Health, le design system s'appuie sur Flowbite. Cette page montre cette base open source seule : chaque token copié de la source, chaque composant avec un aperçu vivant et un guide d'usage. Les notes d'usage et les guides sont en anglais.",
    disclaimerBold: "Ce n'est pas le design system de NRC. ",
    disclaimer:
      "C'est une extraction publique de Flowbite, sans la couche sémantique construite par-dessus chez NRC.",
    sourceLabel: "Source : flowbite.com, licence MIT",
    color: {
      title: "Couleur",
      sub: "La palette par défaut de Tailwind telle que Flowbite l'utilise. Chaque note indique où une teinte sert et le contraste calculé sur son fond habituel.",
    },
    type: {
      title: "Typographie",
      sub: "Tailles de titres et de texte documentées par Flowbite. La famille est Inter, les échantillons ci-dessous utilisent la police système.",
    },
    spacing: { title: "Espacements", sub: "Des pas qui correspondent aux paddings des boutons Flowbite et aux écarts de mise en page." },
    radius: { title: "Arrondis", sub: "L'échelle par défaut de Tailwind, des cases à cocher aux pilules." },
    shadow: { title: "Ombres", sub: "Trois niveaux d'élévation, des cartes aux modales." },
    icons: {
      title: "Icônes",
      sub: "751 icônes reprises du jeu d'icônes Flowbite, licence MIT, en contour et en plein. Recherche par nom, clic pour copier le SVG.",
      searchPlaceholder: "Rechercher une icône",
      variantAll: "Toutes",
      variantOutline: "Contour",
      variantSolid: "Plein",
      categoryAll: "Toutes les catégories",
      copied: "Copié",
      copyFallback: "Copie indisponible, sélectionnez manuellement",
    },
    components: {
      title: "Composants",
      sub: "Dix-neuf composants, tous vivants. Survolez, mettez le focus et cliquez dans les aperçus.",
      notBuilt: "Pas encore construits : Alert, Table, Tabs, Modal, Avatar.",
    },
    groups: { Actions: "Actions", Forms: "Formulaires", Navigation: "Navigation", Surfaces: "Surfaces", Feedback: "Retours" },
    backCase: "Retour au case study NRC",
  },
  es: {
    kicker: "Design system · Código abierto",
    period: "Licencia MIT",
    title: "Flowbite, extraído y documentado",
    intro:
      "En NRC Health, el design system se apoya en Flowbite. Esta página muestra esa base de código abierto por sí sola: cada token copiado de la fuente, cada componente con una vista previa viva y una guía de uso. Las notas de uso y las guías están en inglés.",
    disclaimerBold: "Este no es el design system de NRC. ",
    disclaimer:
      "Es una extracción pública de Flowbite, sin la capa semántica construida encima en NRC.",
    sourceLabel: "Fuente: flowbite.com, licencia MIT",
    color: {
      title: "Color",
      sub: "La paleta por defecto de Tailwind tal como la usa Flowbite. Cada nota indica dónde se usa un tono y el contraste calculado sobre su fondo habitual.",
    },
    type: {
      title: "Tipografía",
      sub: "Tamaños de títulos y de texto documentados por Flowbite. La familia es Inter, las muestras de abajo usan la fuente del sistema.",
    },
    spacing: { title: "Espaciados", sub: "Pasos que corresponden a los paddings de los botones de Flowbite y a los huecos de maquetación." },
    radius: { title: "Radios", sub: "La escala por defecto de Tailwind, de las casillas a las píldoras." },
    shadow: { title: "Sombras", sub: "Tres niveles de elevación, de las tarjetas a los modales." },
    icons: {
      title: "Iconos",
      sub: "751 iconos del propio set de iconos de Flowbite, licencia MIT, contorno y sólido. Busca por nombre, haz clic para copiar el SVG.",
      searchPlaceholder: "Buscar iconos",
      variantAll: "Todos",
      variantOutline: "Contorno",
      variantSolid: "Sólido",
      categoryAll: "Todas las categorías",
      copied: "Copiado",
      copyFallback: "Copia no disponible, selecciona manualmente",
    },
    components: {
      title: "Componentes",
      sub: "Diecinueve componentes, todos vivos. Pasa el cursor, enfoca y haz clic dentro de las vistas previas.",
      notBuilt: "Aún sin construir: Alert, Table, Tabs, Modal, Avatar.",
    },
    groups: { Actions: "Acciones", Forms: "Formularios", Navigation: "Navegación", Surfaces: "Superficies", Feedback: "Retroalimentación" },
    backCase: "Volver al case study NRC",
  },
};

// ============================================================================
// Page /nrc/huey : le cas Huey, developpe (EN/FR/ES). Source : le canvas de
// design "Huey, case study". Les noms de produits NRC y sont remplaces par des
// equivalents generiques, aucun chiffre hors le 55 % -> 90 % deja publie sur
// /nrc.
// ============================================================================

export const nrcHueyText: Record<
  Locale,
  {
    kicker: string;
    period: string;
    title: string;
    intro: string;
    meta: { label: string; value: string }[];
    role: { title: string; items: { verb: string; rest: string }[] };
    map: {
      title: string;
      body: string;
      axes: { top: string; bottom: string; left: string; right: string };
      quadrants: { title: string; body: string }[];
      questions: { label: string; tags: string[] }[];
      context: { label: string; big: string; sub: string };
    };
    principles: {
      title: string;
      body: string;
      items: { n: string; name: string; tagline: string; body: string }[];
    };
    test: { title: string; body: string; items: { q: string; tag: string }[] };
    ui: {
      title: string;
      body: string;
      markerLabel: string;
      markerNames: string[];
      drawerLabel: string;
      mockDisclaimer: string;
      mockUser: string;
      mockAsk: string;
      annotations: { label: string; body: string }[];
    };
    outcome: { title: string; body: string };
    backCase: string;
  }
> = {
  en: {
    kicker: "NRC Health",
    period: "Research · Design principles · AI experience",
    title: "Huey workshop: how AI is integrated into our products",
    intro:
      "As AI spread across products, each team was inventing its own way to surface it. The goal: unify how users meet and use AI across the whole platform.",
    meta: [
      { label: "Role", value: "Design Manager" },
      { label: "Team", value: "2 product designers, 1 analytics specialist" },
      {
        label: "Products",
        value: "Results dashboard, engagement tracking, rating scorecards, regulatory surveys, feedback management",
      },
      { label: "Deliverables", value: "Touchpoint map, 3 principles, evaluation test, marker and drawer" },
    ],
    role: {
      title: "My role",
      items: [
        { verb: "Led", rest: "the research workshop with the design team" },
        { verb: "Framed", rest: "the problem along two axes: who triggers Huey, and what the user is trying to do" },
        { verb: "Synthesized", rest: "the touchpoints into three design principles and wrote them" },
        { verb: "Turned", rest: "the principles into an evaluation test and a first UI pattern" },
      ],
    },
    map: {
      title: "Mapping touchpoints",
      body: "We mapped where users would want Huey, what should trigger it, and in which context: exploring data, monitoring, or problem-solving. The answer to context was \"all of them\". So the question became how Huey shows up, not where.",
      axes: { top: "User-initiated", bottom: "Auto-triggered", left: "Exploratory", right: "Action-oriented" },
      quadrants: [
        { title: "Enhanced search", body: "Chat and explore, insights from data" },
        { title: "Manual", body: "\"Explain this\", \"Dive into this\" on contextual items" },
        { title: "Aggregator", body: "Correlate data, create summaries" },
        { title: "Automatic", body: "Summaries and alerts inside existing workflows" },
      ],
      questions: [
        {
          label: "Where would users want Huey?",
          tags: [
            "On every page",
            "Integrated in existing flows, as a copilot",
            "Summarize ratings and comments",
            "Sentiment in survey responses",
          ],
        },
        {
          label: "What would trigger it?",
          tags: [
            "User triggered, mostly",
            "Integrated in page templates, by design",
            "On-screen alerts and notifications",
            "Outreach by email or app",
          ],
        },
      ],
      context: {
        label: "What's the context?",
        big: "All of them.",
        sub: "Exploring data, monitoring, problem-solving.",
      },
    },
    principles: {
      title: "Three principles",
      body: "The touchpoints collapsed into three qualities every Huey interaction must have. Each one got a visual signifier, so the principles could live in the UI and not only in a document.",
      items: [
        {
          n: "#1",
          name: "Inviting",
          tagline: "Always reachable, never intrusive",
          body: "Huey invites engagement through clear, discoverable patterns without demanding attention. An approachable presence that supports rather than interrupts.",
        },
        {
          n: "#2",
          name: "Relevant",
          tagline: "On point and user-centered",
          body: "Huey reads data state, workflow stage and task intent. AI appears when it adds value, with actionable insights and next steps rather than generic answers.",
        },
        {
          n: "#3",
          name: "Adaptive",
          tagline: "Adjusting its level of presence",
          body: "Huey integrates into existing workflows through familiar UI patterns. It adapts presence and persistence to context, fitting the tool to the user's intent.",
        },
      ],
    },
    test: {
      title: "Principles as a test",
      body: "The principles verify designs rather than being bent to fit them. Any Huey marker, feature, pattern or interaction has to pass all three to be ready to integrate.",
      items: [
        { q: "Is it relevant to this specific context and user need?", tag: "Relevant" },
        { q: "Is it inviting without being intrusive or demanding?", tag: "Inviting" },
        { q: "Does it adapt to existing workflows rather than create friction?", tag: "Adaptive" },
      ],
    },
    ui: {
      title: "From principles to UI",
      body: "The signifiers became the Huey marker, explored in weight and color variants. The drawer gives every product the same anatomy for AI conversations.",
      markerLabel: "Marker explorations",
      markerNames: ["Inviting", "Relevant", "Adaptive"],
      drawerLabel: "Huey drawer, anatomy",
      mockDisclaimer: "AI-generated content may contain errors.",
      mockUser: "[User question]",
      mockAsk: "Ask Huey",
      annotations: [
        { label: "Actions", body: "More, pop out, close" },
        { label: "Disclaimer", body: "Transparency on AI" },
        { label: "Content", body: "Answers, insights, next steps" },
        { label: "Feedback", body: "Rate each answer" },
        { label: "Search", body: "Ask in natural language" },
      ],
    },
    outcome: {
      title: "Outcome",
      body: "The three principles served as the grid for evaluating Huey markers, features and interactions, and the drawer gives every product the same structure for talking to the AI.",
    },
    backCase: "Back to the NRC case study",
  },
  fr: {
    kicker: "NRC Health",
    period: "Recherche · Principes de design · Expérience IA",
    title: "Workshop Huey : comment l'IA s'intègre à nos produits",
    intro:
      "À mesure que l'IA se diffusait dans les produits, chaque équipe inventait sa propre façon de la faire apparaître. L'objectif : unifier la manière dont les utilisateurs rencontrent et utilisent l'IA sur toute la plateforme.",
    meta: [
      { label: "Rôle", value: "Design Manager" },
      { label: "Équipe", value: "2 product designers, 1 analytics specialist" },
      {
        label: "Produits",
        value: "Tableau de bord de résultats, suivi d'engagement, tableaux de scores, enquêtes réglementaires, gestion du feedback",
      },
      { label: "Livrables", value: "Carte des points de contact, 3 principes, test d'évaluation, marqueur et drawer" },
    ],
    role: {
      title: "Mon rôle",
      items: [
        { verb: "Animé", rest: "l'atelier de recherche avec l'équipe design" },
        { verb: "Cadré", rest: "le problème sur deux axes : qui déclenche Huey, et ce que l'utilisateur cherche à faire" },
        { verb: "Synthétisé", rest: "les points de contact en trois principes de design, et rédigé ces principes" },
        { verb: "Transformé", rest: "les principes en test d'évaluation et en premier pattern d'interface" },
      ],
    },
    map: {
      title: "Cartographier les points de contact",
      body: "Nous avons cartographié où les utilisateurs voudraient Huey, ce qui devrait le déclencher, et dans quel contexte : explorer des données, surveiller, résoudre un problème. La réponse sur le contexte était « tous ». La question est donc devenue comment Huey apparaît, et non où.",
      axes: {
        top: "Déclenché par l'utilisateur",
        bottom: "Déclenché automatiquement",
        left: "Exploratoire",
        right: "Orienté action",
      },
      quadrants: [
        { title: "Recherche enrichie", body: "Discuter et explorer, insights issus des données" },
        { title: "Manuel", body: "« Explique-moi ça », « Creuse ça » sur des éléments contextuels" },
        { title: "Agrégateur", body: "Croiser les données, créer des synthèses" },
        { title: "Automatique", body: "Résumés et alertes au cœur des workflows existants" },
      ],
      questions: [
        {
          label: "Où les utilisateurs voudraient-ils Huey ?",
          tags: [
            "Sur chaque page",
            "Intégré aux parcours existants, comme copilote",
            "Résumer notes et commentaires",
            "Sentiment dans les réponses aux enquêtes",
          ],
        },
        {
          label: "Qu'est-ce qui le déclencherait ?",
          tags: [
            "L'utilisateur, surtout",
            "Intégré aux gabarits de page, par conception",
            "Alertes et notifications à l'écran",
            "Relances par e-mail ou par l'app",
          ],
        },
      ],
      context: {
        label: "Quel contexte ?",
        big: "Tous.",
        sub: "Explorer des données, surveiller, résoudre un problème.",
      },
    },
    principles: {
      title: "Trois principes",
      body: "Les points de contact se sont condensés en trois qualités que chaque interaction Huey doit avoir. Chacune a reçu un signifiant visuel, pour que les principes vivent dans l'interface et pas seulement dans un document.",
      items: [
        {
          n: "#1",
          name: "Invitant",
          tagline: "Toujours accessible, jamais intrusif",
          body: "Huey invite à l'échange par des patterns clairs et faciles à découvrir, sans exiger l'attention. Une présence accessible qui soutient plutôt qu'elle n'interrompt.",
        },
        {
          n: "#2",
          name: "Pertinent",
          tagline: "Juste et centré sur l'utilisateur",
          body: "Huey lit l'état des données, l'étape du workflow et l'intention de la tâche. L'IA apparaît quand elle apporte de la valeur, avec des insights actionnables et des prochaines étapes plutôt que des réponses génériques.",
        },
        {
          n: "#3",
          name: "Adaptatif",
          tagline: "Ajuste son niveau de présence",
          body: "Huey s'intègre aux workflows existants par des patterns d'interface familiers. Il adapte sa présence et sa persistance au contexte, en ajustant l'outil à l'intention de l'utilisateur.",
        },
      ],
    },
    test: {
      title: "Les principes comme test",
      body: "Les principes servent à vérifier les designs, on ne les plie pas pour les faire coller. Tout marqueur, feature, pattern ou interaction Huey doit passer les trois pour être prêt à l'intégration.",
      items: [
        { q: "Est-ce pertinent pour ce contexte précis et ce besoin utilisateur ?", tag: "Pertinent" },
        { q: "Est-ce invitant sans être intrusif ni exigeant ?", tag: "Invitant" },
        { q: "Est-ce que cela s'adapte aux workflows existants au lieu de créer de la friction ?", tag: "Adaptatif" },
      ],
    },
    ui: {
      title: "Des principes à l'interface",
      body: "Les signifiants sont devenus le marqueur Huey, exploré en variations de graisse et de couleur. Le drawer donne à chaque produit la même anatomie pour les conversations avec l'IA.",
      markerLabel: "Explorations du marqueur",
      markerNames: ["Invitant", "Pertinent", "Adaptatif"],
      drawerLabel: "Drawer Huey, anatomie",
      mockDisclaimer: "Le contenu généré par l'IA peut contenir des erreurs.",
      mockUser: "[Question de l'utilisateur]",
      mockAsk: "Demander à Huey",
      annotations: [
        { label: "Actions", body: "Plus, détacher, fermer" },
        { label: "Avertissement", body: "Transparence sur l'IA" },
        { label: "Contenu", body: "Réponses, insights, prochaines étapes" },
        { label: "Feedback", body: "Noter chaque réponse" },
        { label: "Recherche", body: "Poser sa question en langage naturel" },
      ],
    },
    outcome: {
      title: "Résultat",
      body: "Les trois principes ont servi de grille pour évaluer les marqueurs, features et interactions de Huey, et le drawer donne à chaque produit la même structure pour dialoguer avec l'IA.",
    },
    backCase: "Retour au case study NRC",
  },
  es: {
    kicker: "NRC Health",
    period: "Investigación · Principios de diseño · Experiencia IA",
    title: "Workshop Huey: cómo se integra la IA en nuestros productos",
    intro:
      "A medida que la IA se extendía por los productos, cada equipo inventaba su propia forma de mostrarla. El objetivo: unificar cómo los usuarios encuentran y usan la IA en toda la plataforma.",
    meta: [
      { label: "Rol", value: "Design Manager" },
      { label: "Equipo", value: "2 product designers, 1 analytics specialist" },
      {
        label: "Productos",
        value: "Panel de resultados, seguimiento del compromiso, tableros de puntuación, encuestas regulatorias, gestión del feedback",
      },
      { label: "Entregables", value: "Mapa de puntos de contacto, 3 principios, test de evaluación, marcador y drawer" },
    ],
    role: {
      title: "Mi rol",
      items: [
        { verb: "Dirigí", rest: "el taller de investigación con el equipo de diseño" },
        { verb: "Planteé", rest: "el problema en dos ejes: quién activa a Huey y qué intenta hacer el usuario" },
        { verb: "Sinteticé", rest: "los puntos de contacto en tres principios de diseño y los redacté" },
        { verb: "Convertí", rest: "los principios en un test de evaluación y un primer patrón de interfaz" },
      ],
    },
    map: {
      title: "Mapear los puntos de contacto",
      body: "Mapeamos dónde querrían los usuarios a Huey, qué debería activarlo y en qué contexto: explorar datos, monitorizar o resolver problemas. La respuesta sobre el contexto fue «todos». Así que la pregunta pasó a ser cómo aparece Huey, no dónde.",
      axes: {
        top: "Iniciado por el usuario",
        bottom: "Activado automáticamente",
        left: "Exploratorio",
        right: "Orientado a la acción",
      },
      quadrants: [
        { title: "Búsqueda mejorada", body: "Conversar y explorar, insights a partir de los datos" },
        { title: "Manual", body: "«Explícame esto», «Profundiza en esto» sobre elementos contextuales" },
        { title: "Agregador", body: "Cruzar datos, crear resúmenes" },
        { title: "Automático", body: "Resúmenes y alertas dentro de los flujos existentes" },
      ],
      questions: [
        {
          label: "¿Dónde querrían los usuarios a Huey?",
          tags: [
            "En cada página",
            "Integrado en los flujos existentes, como copiloto",
            "Resumir valoraciones y comentarios",
            "Sentimiento en las respuestas de encuestas",
          ],
        },
        {
          label: "¿Qué lo activaría?",
          tags: [
            "El usuario, sobre todo",
            "Integrado en las plantillas de página, por diseño",
            "Alertas y notificaciones en pantalla",
            "Contacto por correo o app",
          ],
        },
      ],
      context: {
        label: "¿Cuál es el contexto?",
        big: "Todos.",
        sub: "Explorar datos, monitorizar, resolver problemas.",
      },
    },
    principles: {
      title: "Tres principios",
      body: "Los puntos de contacto se condensaron en tres cualidades que toda interacción con Huey debe tener. Cada una recibió un significante visual, para que los principios vivieran en la interfaz y no solo en un documento.",
      items: [
        {
          n: "#1",
          name: "Invitante",
          tagline: "Siempre al alcance, nunca intrusivo",
          body: "Huey invita a interactuar mediante patrones claros y fáciles de descubrir, sin exigir atención. Una presencia cercana que apoya en lugar de interrumpir.",
        },
        {
          n: "#2",
          name: "Relevante",
          tagline: "Certero y centrado en el usuario",
          body: "Huey lee el estado de los datos, la etapa del flujo y la intención de la tarea. La IA aparece cuando aporta valor, con insights accionables y próximos pasos en lugar de respuestas genéricas.",
        },
        {
          n: "#3",
          name: "Adaptable",
          tagline: "Ajusta su nivel de presencia",
          body: "Huey se integra en los flujos existentes mediante patrones de interfaz familiares. Adapta su presencia y su persistencia al contexto, ajustando la herramienta a la intención del usuario.",
        },
      ],
    },
    test: {
      title: "Los principios como test",
      body: "Los principios sirven para verificar los diseños, no se doblan para que encajen. Cualquier marcador, feature, patrón o interacción de Huey debe cumplir los tres para estar listo para integrarse.",
      items: [
        { q: "¿Es relevante para este contexto y esta necesidad concretos del usuario?", tag: "Relevante" },
        { q: "¿Invita sin ser intrusivo ni exigente?", tag: "Invitante" },
        { q: "¿Se adapta a los flujos existentes en lugar de crear fricción?", tag: "Adaptable" },
      ],
    },
    ui: {
      title: "De los principios a la interfaz",
      body: "Los significantes se convirtieron en el marcador de Huey, explorado en variantes de grosor y color. El drawer da a cada producto la misma anatomía para las conversaciones con la IA.",
      markerLabel: "Exploraciones del marcador",
      markerNames: ["Invitante", "Relevante", "Adaptable"],
      drawerLabel: "Drawer de Huey, anatomía",
      mockDisclaimer: "El contenido generado por IA puede contener errores.",
      mockUser: "[Pregunta del usuario]",
      mockAsk: "Pregunta a Huey",
      annotations: [
        { label: "Acciones", body: "Más, abrir aparte, cerrar" },
        { label: "Aviso", body: "Transparencia sobre la IA" },
        { label: "Contenido", body: "Respuestas, insights, próximos pasos" },
        { label: "Feedback", body: "Valorar cada respuesta" },
        { label: "Búsqueda", body: "Preguntar en lenguaje natural" },
      ],
    },
    outcome: {
      title: "Resultado",
      body: "Los tres principios sirvieron de criterio para evaluar los marcadores, features e interacciones de Huey, y el drawer da a cada producto la misma estructura para conversar con la IA.",
    },
    backCase: "Volver al case study NRC",
  },
};

// ============================================================================
// Page /episource : la carte de la home ne garde que l'entete et l'ecran, le
// detail vit ici. Les paragraphes sont les puces de `workText.episource`, dans
// le meme ordre (un titre par puce, pas de second texte a tenir a jour). Ne
// publie que ce que la carte portait deja.
// ============================================================================

export const episourceText: Record<
  Locale,
  {
    kicker: string;
    intro: string;
    // Un titre par puce de workText.episource, dans l'ordre.
    sectionTitles: string[];
    useCase: { title: string; intro: string };
  }
> = {
  en: {
    kicker: "Episource · Optum",
    intro:
      "Senior, then Lead Product Designer at Episource, now part of Optum, from 2021 to 2024. User research across the suite, a design system, an integration with hospital record systems and an AI medical-coding interface taken from alpha to production.",
    sectionTitles: [
      "User research across the suite",
      "A design system for the whole suite",
      "Promoted to Lead after 12 months",
      "Provider Direct Messaging",
      "Click to Code, from alpha to production",
    ],
    useCase: {
      title: "Use case: Click to Code",
      intro:
        "One screen to show the work: a coder reviewing an encounter in Click to Code, with the evidence in the note, the confidence on each code and the guidance beside the decision.",
    },
  },
  fr: {
    kicker: "Episource · Optum",
    intro:
      "Product designer senior puis lead chez Episource, aujourd'hui Optum, de 2021 à 2024. Recherche utilisateur sur toute la suite, un design system, une intégration avec les dossiers médicaux des hôpitaux et une interface de coding médical par IA menée de l'alpha à la production.",
    sectionTitles: [
      "La recherche utilisateur sur toute la suite",
      "Un design system pour toute la suite",
      "Lead Product Designer après 12 mois",
      "Provider Direct Messaging",
      "Click to Code, de l'alpha à la production",
    ],
    useCase: {
      title: "Cas d'usage : Click to Code",
      intro:
        "Un écran pour montrer le travail : un codeur qui relit une consultation dans Click to Code, avec la preuve dans la note, la confiance sur chaque code et les règles à côté de la décision.",
    },
  },
  es: {
    kicker: "Episource · Optum",
    intro:
      "Product designer senior y luego lead en Episource, hoy parte de Optum, de 2021 a 2024. Investigación de usuarios en toda la suite, un design system, una integración con las historias clínicas de los hospitales y una interfaz de codificación médica con IA llevada del alpha a producción.",
    sectionTitles: [
      "La investigación de usuarios en toda la suite",
      "Un design system para toda la suite",
      "Lead Product Designer tras 12 meses",
      "Provider Direct Messaging",
      "Click to Code, del alpha a producción",
    ],
    useCase: {
      title: "Caso de uso: Click to Code",
      intro:
        "Una pantalla para mostrar el trabajo: un codificador revisa una consulta en Click to Code, con la evidencia en la nota, la confianza en cada código y las guías junto a la decisión.",
    },
  },
};
