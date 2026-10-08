import type { Locale } from "./i18n";

// Visuels de /nrc : ecrans exportes du canvas Claude Design (public/nrc/<id>.webp),
// avec les notes de chaque ecran. Les ecrans sont une recreation fictive, jamais
// un produit NRC Health reel. Le numero d'une note correspond au marqueur de l'image.

export type VisualNote = {
  heading: string;
  lines: { label: string; body: string }[];
};

export type VisualStep = {
  id: string; // nom du fichier dans public/nrc, sans extension
  title: string;
  alt: string;
  notes: VisualNote[];
};

export type NrcVisualText = {
  disclaimer: string;
  fullSize: string;
  slider: {
    before: string;
    after: string;
    caption: string;
    alt: string;
    ariaLabel: string;
  };
  steps: VisualStep[]; // cas a
  huey: VisualStep[]; // cas c
};

export const nrcVisuals: Record<Locale, NrcVisualText> = {
  en: {
    disclaimer:
      "Illustrative recreation, not an actual NRC Health product. All screens and data are fictional.",
    fullSize: "Open full size",
    slider: {
      before: "Before",
      after: "After",
      caption: "Feedback Operations, before and after the redesign. Drag to compare.",
      alt: "The report screen before and after the redesign",
      ariaLabel: "Compare before and after",
    },
    steps: [
      {
        id: "audit",
        title: "The audit",
        alt: "The legacy screen with four problems marked",
        notes: [
          {
            heading: "Navigation hierarchy",
            lines: [
              { label: "Problem", body: "It does not reflect current usage." },
              { label: "On screen", body: "Endless flat list, Favorites at the end, main pages hidden behind clicks." },
            ],
          },
          {
            heading: "One element, three purposes",
            lines: [
              { label: "Problem", body: "Navigation, filtering and the empty state share one element." },
              { label: "On screen", body: "Report list, report settings with filters, and an empty panel." },
            ],
          },
          {
            heading: "No visual hierarchy",
            lines: [
              { label: "Problem", body: "Actions and information carry the same weight." },
              { label: "On screen", body: "No hierarchy between CTAs and information. A mobile pattern, the burger menu, on desktop." },
            ],
          },
          {
            heading: "Hidden filtering",
            lines: [
              { label: "Problem", body: "The filtering system sits behind clicks." },
              { label: "On screen", body: "Filters are split between the presets bar and the panel." },
            ],
          },
        ],
      },
      {
        id: "phase-0",
        title: "Phase 0, quick wins",
        alt: "The legacy screen with favorite reports on top and a report search",
        notes: [
          {
            heading: "Favorites and most used on top",
            lines: [
              { label: "Problem", body: "Favorites sat at the end of an endless list (audit 1)." },
              { label: "Solution", body: "Favorite and most used reports are surfaced at the top of the list." },
            ],
          },
          {
            heading: "Report search",
            lines: [
              { label: "Problem", body: "Finding a report meant scrolling the whole list (audit 1)." },
              { label: "Solution", body: "A search field above the list." },
            ],
          },
        ],
      },
      {
        id: "phase-1",
        title: "Phase 1, primitives",
        alt: "The screen with primitive buttons and input fields",
        notes: [
          {
            heading: "Buttons from the design system",
            lines: [
              { label: "Problem", body: "No shared base: every action looked equally important (audit 3)." },
              { label: "Solution", body: "Primitive buttons. Export is the one filled action, Favorite and Subscribe stay quiet." },
            ],
          },
          {
            heading: "Input fields from the design system",
            lines: [
              { label: "Problem", body: "Controls were styled one by one, with no shared base (audit 3)." },
              { label: "Solution", body: "Primitive input fields: the feedback search shares one height and one style with its button." },
            ],
          },
        ],
      },
      {
        id: "phase-2",
        title: "Phase 2, navbar",
        alt: "The screen with the new sidebar navigation and report search",
        notes: [
          {
            heading: "Navigation, reordered and grouped",
            lines: [
              { label: "Problem", body: "Endless flat list, Favorites at the end, main pages behind clicks (audit 1, 2)." },
              { label: "Solution", body: "Home and Ask Huey first, reports in four sections with Favorites on top. The panel only navigates." },
            ],
          },
          {
            heading: "Report search",
            lines: [
              { label: "Problem", body: "Even grouped into sections, the report list stays long (audit 1)." },
              { label: "Solution", body: "The search field from phase 0 stays, above the sections." },
            ],
          },
        ],
      },
      {
        id: "phase-3",
        title: "Phase 3, filters",
        alt: "The screen with app-level filters, a header card and bento cards",
        notes: [
          {
            heading: "Two levels of filters",
            lines: [
              { label: "Problem", body: "Filtering was hidden behind clicks and split across two places (audit 4)." },
              { label: "Solution", body: "App-level filters on the app background, page-level filters in the header card. Scope is visible." },
            ],
          },
          {
            heading: "Bento cards",
            lines: [
              { label: "Problem", body: "CTAs and information had no hierarchy (audit 3)." },
              { label: "Solution", body: "Header, alerts and feedback become separate cards on the app background, each with one job." },
            ],
          },
        ],
      },
    ],
    huey: [
      {
        id: "huey-widget",
        title: "The widget",
        alt: "The screen with the Huey widget next to the alerts and the graph",
        notes: [
          {
            heading: "Huey widget in the stats row",
            lines: [
              { label: "Principle", body: "Inviting, relevant, adaptive: the three principles every Huey interaction has to pass." },
              { label: "Solution", body: "One short insight beside the alerts and the graph, and a button into the conversation." },
            ],
          },
        ],
      },
      {
        id: "huey-drawer",
        title: "The drawer",
        alt: "The screen with the Huey drawer open on the right",
        notes: [
          {
            heading: "Full-height drawer",
            lines: [
              { label: "Principle", body: "Going deeper should not take the user off the page." },
              { label: "Solution", body: "Deepdive with Huey opens a drawer docked right that pushes the content." },
            ],
          },
          {
            heading: "Answer, insight, next steps",
            lines: [
              { label: "Principle", body: "A long answer has to be scannable and ratable." },
              { label: "Solution", body: "Three labelled blocks, with a rating on each answer." },
            ],
          },
          {
            heading: "Ask Huey input",
            lines: [
              { label: "Principle", body: "The conversation continues where the insight appeared." },
              { label: "Solution", body: "One field to ask a follow-up in natural language, with a send icon." },
            ],
          },
        ],
      },
    ],
  },
  fr: {
    disclaimer:
      "Recréation illustrative, pas un produit réel de NRC Health. Tous les écrans et toutes les données sont fictifs.",
    fullSize: "Ouvrir en grand",
    slider: {
      before: "Avant",
      after: "Après",
      caption: "Feedback Operations, avant et après la refonte. Glisser pour comparer.",
      alt: "L'écran du rapport avant et après la refonte",
      ariaLabel: "Comparer avant et après",
    },
    steps: [
      {
        id: "audit",
        title: "L'audit",
        alt: "L'écran legacy avec quatre problèmes repérés",
        notes: [
          {
            heading: "Hiérarchie de la navigation",
            lines: [
              { label: "Problème", body: "Elle ne reflète pas les usages actuels." },
              { label: "À l'écran", body: "Une liste plate sans fin, les favoris à la fin, les pages principales cachées derrière des clics." },
            ],
          },
          {
            heading: "Un élément, trois usages",
            lines: [
              { label: "Problème", body: "La navigation, le filtrage et l'état vide partagent un seul élément." },
              { label: "À l'écran", body: "Liste des rapports, réglages du rapport avec filtres, et un panneau vide." },
            ],
          },
          {
            heading: "Aucune hiérarchie visuelle",
            lines: [
              { label: "Problème", body: "Les actions et l'information ont le même poids." },
              { label: "À l'écran", body: "Aucune hiérarchie entre les CTA et l'information. Un pattern mobile, le menu burger, sur desktop." },
            ],
          },
          {
            heading: "Filtrage caché",
            lines: [
              { label: "Problème", body: "Le filtrage est derrière des clics." },
              { label: "À l'écran", body: "Les filtres sont répartis entre la barre de presets et le panneau." },
            ],
          },
        ],
      },
      {
        id: "phase-0",
        title: "Phase 0, quick wins",
        alt: "L'écran legacy avec les rapports favoris en haut et une recherche de rapports",
        notes: [
          {
            heading: "Favoris et plus utilisés en haut",
            lines: [
              { label: "Problème", body: "Les favoris étaient à la fin d'une liste sans fin (audit 1)." },
              { label: "Solution", body: "Les rapports favoris et les plus utilisés remontent en haut de la liste." },
            ],
          },
          {
            heading: "Recherche de rapports",
            lines: [
              { label: "Problème", body: "Trouver un rapport obligeait à parcourir toute la liste (audit 1)." },
              { label: "Solution", body: "Un champ de recherche au-dessus de la liste." },
            ],
          },
        ],
      },
      {
        id: "phase-1",
        title: "Phase 1, primitives",
        alt: "L'écran avec des boutons et des champs de saisie primitifs",
        notes: [
          {
            heading: "Boutons du design system",
            lines: [
              { label: "Problème", body: "Pas de base commune : toutes les actions semblaient aussi importantes (audit 3)." },
              { label: "Solution", body: "Des boutons primitifs. Export est la seule action pleine, Favorite et Subscribe restent discrets." },
            ],
          },
          {
            heading: "Champs de saisie du design system",
            lines: [
              { label: "Problème", body: "Les contrôles étaient stylés un par un, sans base commune (audit 3)." },
              { label: "Solution", body: "Des champs de saisie primitifs : la recherche de feedback partage une hauteur et un style avec son bouton." },
            ],
          },
        ],
      },
      {
        id: "phase-2",
        title: "Phase 2, navbar",
        alt: "L'écran avec la nouvelle navigation latérale et la recherche de rapports",
        notes: [
          {
            heading: "Navigation réordonnée et regroupée",
            lines: [
              { label: "Problème", body: "Liste plate sans fin, favoris à la fin, pages principales derrière des clics (audit 1, 2)." },
              { label: "Solution", body: "Home et Ask Huey en premier, les rapports en quatre sections avec les favoris en haut. Le panneau ne sert qu'à naviguer." },
            ],
          },
          {
            heading: "Recherche de rapports",
            lines: [
              { label: "Problème", body: "Même regroupée en sections, la liste des rapports reste longue (audit 1)." },
              { label: "Solution", body: "Le champ de recherche de la phase 0 reste, au-dessus des sections." },
            ],
          },
        ],
      },
      {
        id: "phase-3",
        title: "Phase 3, filtres",
        alt: "L'écran avec les filtres de l'app, une carte d'en-tête et des cartes bento",
        notes: [
          {
            heading: "Deux niveaux de filtres",
            lines: [
              { label: "Problème", body: "Le filtrage était caché derrière des clics et réparti en deux endroits (audit 4)." },
              { label: "Solution", body: "Filtres de l'app sur le fond de l'app, filtres de la page dans la carte d'en-tête. Le périmètre est visible." },
            ],
          },
          {
            heading: "Cartes bento",
            lines: [
              { label: "Problème", body: "Les CTA et l'information n'avaient aucune hiérarchie (audit 3)." },
              { label: "Solution", body: "L'en-tête, les alertes et les feedbacks deviennent des cartes séparées sur le fond de l'app, chacune avec un seul rôle." },
            ],
          },
        ],
      },
    ],
    huey: [
      {
        id: "huey-widget",
        title: "Le widget",
        alt: "L'écran avec le widget Huey à côté des alertes et du graphique",
        notes: [
          {
            heading: "Widget Huey dans la ligne de stats",
            lines: [
              { label: "Principe", body: "Inviting, relevant, adaptive : les trois principes que toute interaction Huey doit respecter." },
              { label: "Solution", body: "Un insight court à côté des alertes et du graphique, et un bouton vers la conversation." },
            ],
          },
        ],
      },
      {
        id: "huey-drawer",
        title: "Le tiroir",
        alt: "L'écran avec le tiroir Huey ouvert à droite",
        notes: [
          {
            heading: "Tiroir pleine hauteur",
            lines: [
              { label: "Principe", body: "Aller plus loin ne doit pas faire quitter la page." },
              { label: "Solution", body: "Deepdive with Huey ouvre un tiroir à droite qui pousse le contenu." },
            ],
          },
          {
            heading: "Réponse, insight, prochaines étapes",
            lines: [
              { label: "Principe", body: "Une longue réponse doit se parcourir et se noter." },
              { label: "Solution", body: "Trois blocs titrés, avec une note sur chaque réponse." },
            ],
          },
          {
            heading: "Champ Ask Huey",
            lines: [
              { label: "Principe", body: "La conversation continue là où l'insight est apparu." },
              { label: "Solution", body: "Un champ pour poser une question de suite en langage naturel, avec une icône d'envoi." },
            ],
          },
        ],
      },
    ],
  },
  es: {
    disclaimer:
      "Recreación ilustrativa, no un producto real de NRC Health. Todas las pantallas y los datos son ficticios.",
    fullSize: "Abrir en grande",
    slider: {
      before: "Antes",
      after: "Después",
      caption: "Feedback Operations, antes y después del rediseño. Deslizar para comparar.",
      alt: "La pantalla del informe antes y después del rediseño",
      ariaLabel: "Comparar antes y después",
    },
    steps: [
      {
        id: "audit",
        title: "La auditoría",
        alt: "La pantalla legacy con cuatro problemas señalados",
        notes: [
          {
            heading: "Jerarquía de la navegación",
            lines: [
              { label: "Problema", body: "No refleja el uso actual." },
              { label: "En pantalla", body: "Una lista plana sin fin, los favoritos al final, las páginas principales escondidas tras clics." },
            ],
          },
          {
            heading: "Un elemento, tres usos",
            lines: [
              { label: "Problema", body: "La navegación, el filtrado y el estado vacío comparten un solo elemento." },
              { label: "En pantalla", body: "Lista de informes, ajustes del informe con filtros, y un panel vacío." },
            ],
          },
          {
            heading: "Ninguna jerarquía visual",
            lines: [
              { label: "Problema", body: "Las acciones y la información tienen el mismo peso." },
              { label: "En pantalla", body: "Ninguna jerarquía entre los CTA y la información. Un patrón móvil, el menú burger, en desktop." },
            ],
          },
          {
            heading: "Filtrado escondido",
            lines: [
              { label: "Problema", body: "El filtrado está detrás de clics." },
              { label: "En pantalla", body: "Los filtros se reparten entre la barra de presets y el panel." },
            ],
          },
        ],
      },
      {
        id: "phase-0",
        title: "Fase 0, quick wins",
        alt: "La pantalla legacy con los informes favoritos arriba y una búsqueda de informes",
        notes: [
          {
            heading: "Favoritos y más usados arriba",
            lines: [
              { label: "Problema", body: "Los favoritos estaban al final de una lista sin fin (auditoría 1)." },
              { label: "Solución", body: "Los informes favoritos y los más usados suben al principio de la lista." },
            ],
          },
          {
            heading: "Búsqueda de informes",
            lines: [
              { label: "Problema", body: "Encontrar un informe obligaba a recorrer toda la lista (auditoría 1)." },
              { label: "Solución", body: "Un campo de búsqueda encima de la lista." },
            ],
          },
        ],
      },
      {
        id: "phase-1",
        title: "Fase 1, primitivos",
        alt: "La pantalla con botones y campos de entrada primitivos",
        notes: [
          {
            heading: "Botones del design system",
            lines: [
              { label: "Problema", body: "Sin base común: todas las acciones parecían igual de importantes (auditoría 3)." },
              { label: "Solución", body: "Botones primitivos. Export es la única acción rellena, Favorite y Subscribe quedan discretos." },
            ],
          },
          {
            heading: "Campos de entrada del design system",
            lines: [
              { label: "Problema", body: "Los controles se estilaban uno a uno, sin base común (auditoría 3)." },
              { label: "Solución", body: "Campos de entrada primitivos: la búsqueda de feedback comparte altura y estilo con su botón." },
            ],
          },
        ],
      },
      {
        id: "phase-2",
        title: "Fase 2, navbar",
        alt: "La pantalla con la nueva navegación lateral y la búsqueda de informes",
        notes: [
          {
            heading: "Navegación reordenada y agrupada",
            lines: [
              { label: "Problema", body: "Lista plana sin fin, favoritos al final, páginas principales tras clics (auditoría 1, 2)." },
              { label: "Solución", body: "Home y Ask Huey primero, los informes en cuatro secciones con los favoritos arriba. El panel solo sirve para navegar." },
            ],
          },
          {
            heading: "Búsqueda de informes",
            lines: [
              { label: "Problema", body: "Incluso agrupada en secciones, la lista de informes sigue siendo larga (auditoría 1)." },
              { label: "Solución", body: "El campo de búsqueda de la fase 0 se mantiene, encima de las secciones." },
            ],
          },
        ],
      },
      {
        id: "phase-3",
        title: "Fase 3, filtros",
        alt: "La pantalla con los filtros de la app, una tarjeta de cabecera y tarjetas bento",
        notes: [
          {
            heading: "Dos niveles de filtros",
            lines: [
              { label: "Problema", body: "El filtrado estaba escondido tras clics y repartido en dos sitios (auditoría 4)." },
              { label: "Solución", body: "Filtros de la app sobre el fondo de la app, filtros de la página en la tarjeta de cabecera. El alcance se ve." },
            ],
          },
          {
            heading: "Tarjetas bento",
            lines: [
              { label: "Problema", body: "Los CTA y la información no tenían jerarquía (auditoría 3)." },
              { label: "Solución", body: "La cabecera, las alertas y los feedbacks pasan a ser tarjetas separadas sobre el fondo de la app, cada una con un solo cometido." },
            ],
          },
        ],
      },
    ],
    huey: [
      {
        id: "huey-widget",
        title: "El widget",
        alt: "La pantalla con el widget de Huey junto a las alertas y el gráfico",
        notes: [
          {
            heading: "Widget de Huey en la fila de estadísticas",
            lines: [
              { label: "Principio", body: "Inviting, relevant, adaptive: los tres principios que toda interacción con Huey debe cumplir." },
              { label: "Solución", body: "Un insight corto junto a las alertas y el gráfico, y un botón hacia la conversación." },
            ],
          },
        ],
      },
      {
        id: "huey-drawer",
        title: "El panel lateral",
        alt: "La pantalla con el panel lateral de Huey abierto a la derecha",
        notes: [
          {
            heading: "Panel lateral a toda altura",
            lines: [
              { label: "Principio", body: "Profundizar no debe sacar al usuario de la página." },
              { label: "Solución", body: "Deepdive with Huey abre un panel anclado a la derecha que empuja el contenido." },
            ],
          },
          {
            heading: "Respuesta, insight, próximos pasos",
            lines: [
              { label: "Principio", body: "Una respuesta larga tiene que poder recorrerse y valorarse." },
              { label: "Solución", body: "Tres bloques con título, y una valoración en cada respuesta." },
            ],
          },
          {
            heading: "Campo Ask Huey",
            lines: [
              { label: "Principio", body: "La conversación continúa donde apareció el insight." },
              { label: "Solución", body: "Un campo para hacer una pregunta de seguimiento en lenguaje natural, con un icono de envío." },
            ],
          },
        ],
      },
    ],
  },
};
