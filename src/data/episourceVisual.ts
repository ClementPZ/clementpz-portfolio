import type { Locale } from "./i18n";
import type { VisualStep } from "./nrcVisuals";

// Ecran Click to Code de la carte Episource de la home et de la page /episource
// (cas d'usage) : une recreation fictive, exportee en webp
// (public/episource/click-to-code.webp, 1561 x 880). Meme forme que les ecrans
// de /nrc, le numero d'une note correspond au marqueur de l'image. Aucun
// produit ni donnee reels.

export const EPISOURCE_SCREEN = "/episource/click-to-code.webp";
// Meme ecran sans les marqueurs numerotes, pour la carte de la home.
export const EPISOURCE_SCREEN_CLEAN = "/episource/click-to-code-clean.webp";

export type EpisourceVisualText = {
  disclaimer: string;
  fullSize: string;
  step: VisualStep;
};

export const episourceVisual: Record<Locale, EpisourceVisualText> = {
  en: {
    disclaimer:
      "Illustrative recreation of a Click to Code screen, not the actual Episource product. All content is fictional.",
    fullSize: "Open full size",
    step: {
      id: "click-to-code",
      title: "Reviewing an encounter",
      alt: "A clinical note as a PDF on the left, with the suggested medical codes, their evidence, guidance and a flagged code on the right",
      notes: [
        {
          heading: "Evidence in the note",
          lines: [
            { label: "Need", body: "A coder trusts a code only when the note visibly supports it." },
            { label: "Solution", body: "Each code points to the exact sentences in the PDF, highlighted and tagged with the code." },
          ],
        },
        {
          heading: "Confidence and validation",
          lines: [
            { label: "Need", body: "Time should go to the uncertain codes, not the obvious ones." },
            { label: "Solution", body: "A confidence level on every suggestion, the likely ones checked, and one action to validate the selection." },
          ],
        },
        {
          heading: "Guidance beside the decision",
          lines: [
            { label: "Need", body: "Checking a rule should not mean leaving the screen." },
            { label: "Solution", body: "Documentation checks and the relevant guideline, with its source, next to the codes." },
          ],
        },
        {
          heading: "Flag and escalate",
          lines: [
            { label: "Need", body: "A doubtful code should be neither guessed nor left blocking the queue." },
            { label: "Solution", body: "Flag it with a reason, send it to a senior coder or query the provider, and keep the discussion on the code." },
          ],
        },
      ],
    },
  },
  fr: {
    disclaimer:
      "Recréation illustrative d'un écran Click to Code, pas le produit réel d'Episource. Tout le contenu est fictif.",
    fullSize: "Ouvrir en grand",
    step: {
      id: "click-to-code",
      title: "La revue d'une consultation",
      alt: "Une note clinique en PDF à gauche, avec à droite les codes médicaux suggérés, leurs preuves, les règles de codage et un code signalé",
      notes: [
        {
          heading: "La preuve dans la note",
          lines: [
            { label: "Besoin", body: "Un codeur ne fait confiance à un code que si la note le soutient visiblement." },
            { label: "Solution", body: "Chaque code renvoie aux phrases exactes du PDF, surlignées et marquées du code." },
          ],
        },
        {
          heading: "Confiance et validation",
          lines: [
            { label: "Besoin", body: "Le temps doit aller aux codes incertains, pas aux évidents." },
            { label: "Solution", body: "Un niveau de confiance sur chaque suggestion, les probables déjà cochés, et une seule action pour valider la sélection." },
          ],
        },
        {
          heading: "Les règles à côté de la décision",
          lines: [
            { label: "Besoin", body: "Vérifier une règle ne doit pas obliger à quitter l'écran." },
            { label: "Solution", body: "Les contrôles de documentation et la règle utile, avec sa source, à côté des codes." },
          ],
        },
        {
          heading: "Signaler et escalader",
          lines: [
            { label: "Besoin", body: "Un code douteux ne doit être ni deviné, ni laissé à bloquer la file." },
            { label: "Solution", body: "On le signale avec un motif, on l'envoie à un codeur senior ou on interroge le praticien, et la discussion reste sur le code." },
          ],
        },
      ],
    },
  },
  es: {
    disclaimer:
      "Recreación ilustrativa de una pantalla de Click to Code, no el producto real de Episource. Todo el contenido es ficticio.",
    fullSize: "Abrir en grande",
    step: {
      id: "click-to-code",
      title: "La revisión de una consulta",
      alt: "Una nota clínica en PDF a la izquierda, con a la derecha los códigos médicos sugeridos, su evidencia, las reglas de codificación y un código marcado",
      notes: [
        {
          heading: "La evidencia en la nota",
          lines: [
            { label: "Necesidad", body: "Un codificador solo confía en un código si la nota lo respalda a la vista." },
            { label: "Solución", body: "Cada código apunta a las frases exactas del PDF, resaltadas y marcadas con el código." },
          ],
        },
        {
          heading: "Confianza y validación",
          lines: [
            { label: "Necesidad", body: "El tiempo debe ir a los códigos inciertos, no a los obvios." },
            { label: "Solución", body: "Un nivel de confianza en cada sugerencia, los probables ya marcados, y una sola acción para validar la selección." },
          ],
        },
        {
          heading: "Las reglas junto a la decisión",
          lines: [
            { label: "Necesidad", body: "Comprobar una regla no debería obligar a salir de la pantalla." },
            { label: "Solución", body: "Los controles de documentación y la guía relevante, con su fuente, junto a los códigos." },
          ],
        },
        {
          heading: "Marcar y escalar",
          lines: [
            { label: "Necesidad", body: "Un código dudoso no debe adivinarse ni dejarse bloqueando la cola." },
            { label: "Solución", body: "Se marca con un motivo, se envía a un codificador senior o se consulta al proveedor, y la conversación queda en el código." },
          ],
        },
      ],
    },
  },
};
