// Extraction Flowbite (tokens + guides des composants), copie figee du projet
// design-system-flowbite (Projects/, hors de ce depot). Valeurs copiees telles
// quelles de la source, seuls les tirets cadratins des textes sont remplaces
// (regle du contenu). Les apercus vivants sont dans public/flowbite/, meme origine.
// Anglais uniquement, choix assume : ce sont des notes techniques.

export type FlowbiteColor = { name: string; value: string; usage: string };
export type FlowbiteToken = { name: string; value: string; usage: string };
export type FlowbiteStyle = { name: string; fontSize: string; lineHeight: string; fontWeight: number };
export type FlowbiteComponent = { name: string; group: string; height: number; guide: string };

export const flowbite: {
  colors: FlowbiteColor[];
  spacing: FlowbiteToken[];
  radius: FlowbiteToken[];
  shadow: FlowbiteToken[];
  family: string;
  type: { name: string; family: string; styles: FlowbiteStyle[] }[];
  components: FlowbiteComponent[];
} = {
  "colors": [
    {
      "name": "gray-50",
      "value": "oklch(98.5% 0.002 247.839)",
      "usage": "Lightest neutral; subtle surfaces, table stripes, sidebar/nav hover background."
    },
    {
      "name": "gray-100",
      "value": "oklch(96.7% 0.003 264.542)",
      "usage": "Secondary background; disabled input fill; Secondary-button background (13.35:1 with gray-800 text)."
    },
    {
      "name": "gray-200",
      "value": "oklch(92.8% 0.006 264.531)",
      "usage": "Default border, dividers, card border, navbar border; Secondary-button hover background. Decorative structure, not a state indicator."
    },
    {
      "name": "gray-300",
      "value": "oklch(87.2% 0.01 258.338)",
      "usage": "Default input/select border. Note: at 1.47:1 against white this does not on its own meet the 3:1 non-text contrast guideline; the label and, on focus, the violet-500 ring (4.40:1) carry the boundary. Also Flowbite's dark-mode secondary text (dark:text-gray-300)."
    },
    {
      "name": "gray-400",
      "value": "oklch(70.7% 0.022 261.325)",
      "usage": "Placeholder text, disabled icons, chevrons. 2.60:1 on white, decorative/disabled only, never body text."
    },
    {
      "name": "gray-500",
      "value": "oklch(55.1% 0.027 264.364)",
      "usage": "Secondary/muted text, helper text, meta-row labels and stat-tile captions on white (4.84:1)."
    },
    {
      "name": "gray-600",
      "value": "oklch(44.6% 0.03 256.802)",
      "usage": "Body text alternative, secondary links, sidebar inactive item text."
    },
    {
      "name": "gray-700",
      "value": "oklch(37.3% 0.034 259.733)",
      "usage": "Strong secondary text, dark-mode borders, meta-row values, category-chip labels."
    },
    {
      "name": "gray-800",
      "value": "oklch(27.8% 0.033 256.848)",
      "usage": "Secondary-button text, stat-tile value color; Flowbite's dark-mode surface (dark:bg-gray-800); Dark-button hover."
    },
    {
      "name": "gray-900",
      "value": "oklch(21% 0.034 264.665)",
      "usage": "Dark-button background (17.75:1 with white text); Warning-button text on amber-500 (8.27:1)."
    },
    {
      "name": "violet-50",
      "value": "oklch(96.9% 0.016 293.756)",
      "usage": "Brand tint; info alert/badge soft background; Outline-button hover fill; Sidebar active-item background."
    },
    {
      "name": "violet-100",
      "value": "oklch(94.3% 0.029 294.588)",
      "usage": "Brand soft background for badges and alerts; focus-ring halo."
    },
    {
      "name": "violet-300",
      "value": "oklch(81.1% 0.111 293.571)",
      "usage": "Brand border on light alert/badge backgrounds."
    },
    {
      "name": "violet-500",
      "value": "oklch(60.6% 0.25 292.717)",
      "usage": "Focus ring / focus border (4.40:1 on white, meets the 3:1 UI-boundary guideline)."
    },
    {
      "name": "violet-600",
      "value": "oklch(54.1% 0.281 293.009)",
      "usage": "Primary brand color (violet); Primary-button background with white text (5.88:1); Link default; Sidebar active-item border/text; Outline-button border/text; checkbox/radio accent color."
    },
    {
      "name": "violet-700",
      "value": "oklch(49.1% 0.27 292.581)",
      "usage": "Primary-button hover/active state (7.29:1 with white text); Link hover."
    },
    {
      "name": "violet-900",
      "value": "oklch(38% 0.189 293.745)",
      "usage": "Brand text on light backgrounds; dark-mode brand accents."
    },
    {
      "name": "blue-600",
      "value": "oklch(54.6% 0.245 262.881)",
      "usage": "Category-chip dot for the blue hue only. Not a brand color in this system: the brand is violet."
    },
    {
      "name": "green-100",
      "value": "oklch(96.2% 0.044 156.743)",
      "usage": "Success alert/badge/input soft background."
    },
    {
      "name": "green-600",
      "value": "oklch(62.7% 0.194 149.214)",
      "usage": "Success border/icon/dot accent (3.22:1 on white, meets 3:1, do not pair with white text, that fails at 3.22:1)."
    },
    {
      "name": "green-700",
      "value": "oklch(52.7% 0.154 150.069)",
      "usage": "Success-button background with white text (4.94:1)."
    },
    {
      "name": "green-800",
      "value": "oklch(44.8% 0.119 151.328)",
      "usage": "Success text on green-100 soft background (6.45:1); Success-button hover."
    },
    {
      "name": "red-100",
      "value": "oklch(93.6% 0.032 17.717)",
      "usage": "Danger alert/badge/input soft background."
    },
    {
      "name": "red-600",
      "value": "oklch(57.7% 0.245 27.325)",
      "usage": "Danger primary; Danger-button/status-pill background with white text (4.76:1), form error border, category-chip dot."
    },
    {
      "name": "red-800",
      "value": "oklch(44.4% 0.177 26.899)",
      "usage": "Danger text on red-100 soft background (6.86:1); Danger-button hover."
    },
    {
      "name": "amber-100",
      "value": "oklch(96.2% 0.059 95.617)",
      "usage": "Warning alert/badge/input soft background."
    },
    {
      "name": "amber-500",
      "value": "oklch(76.9% 0.188 70.08)",
      "usage": "Warning-button/status-pill background, pair with gray-900 text (8.27:1), never white (only 2.15:1)."
    },
    {
      "name": "amber-600",
      "value": "oklch(66.6% 0.179 58.318)",
      "usage": "Warning border/icon/dot accent (3.19:1 on white, meets 3:1)."
    },
    {
      "name": "amber-800",
      "value": "oklch(47.3% 0.137 46.201)",
      "usage": "Warning text on amber-100 soft background (6.41:1)."
    },
    {
      "name": "purple-100",
      "value": "oklch(94.6% 0.033 307.174)",
      "usage": "Category-chip / badge soft background (purple)."
    },
    {
      "name": "purple-600",
      "value": "oklch(55.8% 0.288 302.321)",
      "usage": "Category-chip dot; solid fill with white text passes at 5.53:1."
    },
    {
      "name": "purple-800",
      "value": "oklch(43.8% 0.218 303.724)",
      "usage": "Text on purple-100 soft background (7.51:1)."
    },
    {
      "name": "teal-100",
      "value": "oklch(95.3% 0.051 180.801)",
      "usage": "Category-chip / badge soft background (teal)."
    },
    {
      "name": "teal-600",
      "value": "oklch(60% 0.118 184.704)",
      "usage": "Category-chip dot/border/icon (3.66:1 on white, meets 3:1, do not pair with white text at this shade)."
    },
    {
      "name": "teal-800",
      "value": "oklch(43.7% 0.078 188.216)",
      "usage": "Text on teal-100 soft background (6.69:1); solid fill with white text passes at 7.53:1."
    }
  ],
  "spacing": [
    {
      "name": "space-1",
      "value": "4px",
      "usage": "Smallest gap; icon-to-text spacing, chip dot-to-label gap."
    },
    {
      "name": "space-2",
      "value": "8px",
      "usage": "Compact gaps; form field internal spacing, meta-row item gap."
    },
    {
      "name": "space-3",
      "value": "12px",
      "usage": "Flowbite xs/sm button horizontal padding (px-3)."
    },
    {
      "name": "space-4",
      "value": "16px",
      "usage": "Base padding; Flowbite base-button horizontal padding (px-4)."
    },
    {
      "name": "space-5",
      "value": "20px",
      "usage": "Flowbite large-button horizontal padding (px-5)."
    },
    {
      "name": "space-6",
      "value": "24px",
      "usage": "Flowbite xl-button horizontal padding (px-6); default card padding (p-6)."
    },
    {
      "name": "space-8",
      "value": "32px",
      "usage": "Section spacing, large gaps, stat-tile gap."
    },
    {
      "name": "space-12",
      "value": "48px",
      "usage": "Layout spacing between major blocks."
    },
    {
      "name": "space-16",
      "value": "64px",
      "usage": "Large vertical rhythm, section padding, navbar height."
    }
  ],
  "radius": [
    {
      "name": "radius-xs",
      "value": "2px",
      "usage": "Smallest radius; checkboxes, small tags."
    },
    {
      "name": "radius-sm",
      "value": "4px",
      "usage": "Inputs, selects, small controls."
    },
    {
      "name": "radius-md",
      "value": "6px",
      "usage": "Default component radius; buttons, badges, logo placeholder."
    },
    {
      "name": "radius-lg",
      "value": "8px",
      "usage": "Cards, alerts, dropdown/menu panels, accordion panels."
    },
    {
      "name": "radius-xl",
      "value": "12px",
      "usage": "Large cards, modals."
    },
    {
      "name": "radius-2xl",
      "value": "16px",
      "usage": "Prominent panels, large modals."
    },
    {
      "name": "radius-3xl",
      "value": "24px",
      "usage": "Hero and marketing surfaces."
    },
    {
      "name": "radius-4xl",
      "value": "32px",
      "usage": "Largest decorative radius."
    },
    {
      "name": "radius-full",
      "value": "9999px",
      "usage": "Pills; Flowbite's rounded-full pill buttons, badges and avatars."
    }
  ],
  "shadow": [
    {
      "name": "shadow-xs",
      "value": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      "usage": "Flowbite's default card shadow (shadow-xs)."
    },
    {
      "name": "shadow-sm",
      "value": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      "usage": "Slightly raised surface, dropdown, menu panel."
    },
    {
      "name": "shadow-md",
      "value": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      "usage": "Modal, popover."
    }
  ],
  "family": "Inter",
  "type": [
    {
      "name": "Headings",
      "family": "sans",
      "styles": [
        {
          "name": "h1",
          "fontSize": "48px",
          "lineHeight": "48px",
          "fontWeight": 700
        },
        {
          "name": "h2",
          "fontSize": "36px",
          "lineHeight": "40px",
          "fontWeight": 700
        },
        {
          "name": "h3",
          "fontSize": "30px",
          "lineHeight": "36px",
          "fontWeight": 700
        },
        {
          "name": "h4",
          "fontSize": "24px",
          "lineHeight": "32px",
          "fontWeight": 700
        },
        {
          "name": "h5",
          "fontSize": "20px",
          "lineHeight": "28px",
          "fontWeight": 700
        },
        {
          "name": "h6",
          "fontSize": "18px",
          "lineHeight": "28px",
          "fontWeight": 700
        }
      ]
    },
    {
      "name": "Text",
      "family": "sans",
      "styles": [
        {
          "name": "body-lg",
          "fontSize": "18px",
          "lineHeight": "28px",
          "fontWeight": 400
        },
        {
          "name": "body",
          "fontSize": "16px",
          "lineHeight": "24px",
          "fontWeight": 400
        },
        {
          "name": "body-sm",
          "fontSize": "14px",
          "lineHeight": "20px",
          "fontWeight": 400
        },
        {
          "name": "caption",
          "fontSize": "12px",
          "lineHeight": "16px",
          "fontWeight": 400
        }
      ]
    }
  ],
  "components": [
    {
      "name": "Accordion",
      "group": "Navigation",
      "height": 340,
      "guide": "A collapsible section for hiding secondary content (typically filter groups) behind a heading; provide the heading text and the content it hides, and optionally a trailing action like \"Reset\".\n\nBuilt on native `<details>`/`<summary>`, expand/collapse and keyboard support come from the browser, no JavaScript. The chevron rotates 180° on open using a `details[open]` CSS selector, not a script. Header text is `body-sm` `font-medium` in `gray-700`; the panel has no border or background of its own, it just indents.\n\nDon't nest an Accordion inside another Accordion, flatten the groups instead, or it becomes hard to scan."
    },
    {
      "name": "Badge",
      "group": "Feedback",
      "height": 320,
      "guide": "A small label attached to a piece of content; provide the text (and, for the category variant, which of the seven hues it belongs to).\n\nThree variants, one component:\n- **Outline**, transparent fill, `<color>-600` border, `<color>-800` text. For a score or sentiment value that needs to stand out without shouting.\n- **Solid**, `<color>-600` (or `amber-500`, `red-600`) background. Danger and Success solid badges use white text (they pass 4.5:1); Warning solid uses `gray-900` text (white fails on `amber-500`). For a status that needs weight, like an alert state.\n- **Category chip**, a small colored dot plus `gray-700` label text, no border or fill. Cycle the seven hues (gray, blue, green, red, amber, purple, teal) across categories in a stable, documented order, never assign colors ad hoc per instance, or the same category will drift to different colors elsewhere.\n\nNever use color alone on the Solid variant without the text also saying what the status is, \"RE-OPENED\", not just a red pill."
    },
    {
      "name": "Button",
      "group": "Actions",
      "height": 360,
      "guide": "A clickable control that triggers an action; provide the label text and, optionally, an icon.\n\nUse `violet-600` (Primary) for the single main action in a view. Use the gray Secondary style for lower-emphasis actions beside it, never two Primary buttons in the same view. Reserve `green-700` (Success), `red-600` (Danger) and `amber-500` (Warning) for actions that match that meaning, not for visual variety. Warning pairs with `gray-900` text, not white, white fails contrast on `amber-500` (2.15:1). Radius is `radius-md`; horizontal padding scales `space-3` → `space-6` across the five sizes (xs → xl), matching Flowbite's own button padding at each size.\n\nNever rely on color alone to mark a destructive action, label it (\"Delete\", \"Remove\"), don't just make it red. Disabled buttons drop to 50% opacity and lose the pointer cursor; they still need a reason visible nearby (helper text, tooltip), not just the dimmed look."
    },
    {
      "name": "Card",
      "group": "Surfaces",
      "height": 360,
      "guide": "A contained surface for grouping related content; provide a heading, body text, and optional actions or a list of rows.\n\nBorder `gray-200`, radius `radius-lg`, shadow `shadow-xs`, padding `space-6`, matching Flowbite's default card (`p-6`). The border is decorative structure, not a state indicator, so it isn't held to the stricter 3:1 UI-boundary guideline the way a form input's border is.\n\nKeep `shadow-xs` as the only elevation cue; don't stack a heavier shadow and a darker border on the same card. A card with a list divides rows with `gray-200`, not a border around each row."
    },
    {
      "name": "Checkbox",
      "group": "Forms",
      "height": 220,
      "guide": "A binary on/off control for one option in a list, or for a single agreement toggle; provide the label text.\n\nUses the browser's native checkbox with `accent-color: violet-600` rather than a hand-drawn replica, real keyboard and screen-reader behavior for free, tinted to the brand. Label text is `gray-700`; disabled drops to `gray-400` and removes the pointer cursor.\n\nAlways pair the box with a clickable label (`<label>` wrapping both, or `for`/`id`), never a checkbox with no associated text."
    },
    {
      "name": "DateRangePicker",
      "group": "Forms",
      "height": 180,
      "guide": "The trigger control for choosing a date range; provide the currently selected start and end dates.\n\nScope note: this is the closed-state trigger only, styled like an Outline button showing the formatted range and a calendar glyph (drawn in CSS, no icon asset available to copy), not the open calendar grid itself. The grid is a materially different, more complex component (month navigation, day selection, range highlighting) and hasn't been built yet; treat it as a separate future component rather than assuming this covers it.\n\nBorder `gray-300`, radius `radius-sm`, focus ring `violet-500`, same as Select."
    },
    {
      "name": "Input",
      "group": "Forms",
      "height": 420,
      "guide": "A single-line text field with a label and helper text; provide the label, placeholder, and, for the error/success states, a message explaining why.\n\nDefault border is `gray-300`, radius `radius-sm`. That border alone is a light 1.47:1 against a white page and doesn't meet the 3:1 non-text contrast guideline on its own; the label above the field and, on focus, the `violet-500` ring (4.40:1) are what actually mark the boundary, this is flagged rather than silently fixed, since it's this system's own choice, not a copied brand value.\n\nError state tints the whole field `red-100` background / `red-600` border / `red-800` text; success tints `green-100` / `green-600` / `green-800`. Never show the error tint without an explanatory message next to it, the color change alone doesn't say what's wrong. Disabled fields use `gray-100` background and `gray-400` text and drop the pointer cursor."
    },
    {
      "name": "Link",
      "group": "Feedback",
      "height": 160,
      "guide": "Inline text that navigates or triggers an action from within a sentence or a list; provide the label text.\n\n`violet-600` default (5.88:1 on white), `violet-700` on hover with an underline added on hover only, the underline appearing is itself a hover signal, so it doesn't need to be there by default when the color already marks it as a link within a body-text paragraph. A standalone link used as a control (not inside a sentence) still needs that color to meet 4.5:1, which `violet-600` does.\n\nNever use Link styling on something that isn't navigable, that's what Button (ghost/text style) is for."
    },
    {
      "name": "MenuButton",
      "group": "Navigation",
      "height": 260,
      "guide": "A button that opens a small list of actions or options; provide the trigger label and the list of menu items.\n\nBuilt on the native `<details>`/`<summary>` disclosure element, not custom JavaScript, real click-to-toggle and keyboard support come from the browser for free. The trigger is styled as a Secondary button with a trailing chevron; the panel is `shadow-sm`, `radius-lg`, `gray-200` border, offset `space-2` below the trigger.\n\nNever put more than roughly seven items in one menu without grouping them, past that, it's a page, not a menu."
    },
    {
      "name": "MetaRow",
      "group": "Feedback",
      "height": 140,
      "guide": "An inline strip of \"LABEL: value\" pairs describing a record (a person, a submission, an entry); provide the ordered list of label/value pairs.\n\nLabels are `caption` (12px, uppercase, `gray-500`); values are `body-sm` (14px, `gray-700`). Pairs wrap onto new lines as a group, never mid-pair, separated by `space-4` gaps.\n\nKeep it to short scalar facts (dates, IDs, single words); anything longer belongs in the body content below it, not squeezed into a meta row."
    },
    {
      "name": "Navbar",
      "group": "Navigation",
      "height": 140,
      "guide": "The top-level app bar; provide the app name (and a logo image, if one exists) plus the primary nav links and the current user's name.\n\nBuilt with this system's neutral tokens only, white background, `gray-200` bottom border, `gray-800` text, not any specific product's brand color. No real logo was supplied to this system, so the logo slot is a plain `gray-200` placeholder square with `radius-md`, not a reconstructed mark; swap it for the real asset when one is provided, per this system's rule against approximating logos. The user menu on the right reuses MenuButton.\n\nHeight is `space-16` (64px); horizontal padding `space-6`."
    },
    {
      "name": "Radio",
      "group": "Forms",
      "height": 220,
      "guide": "A single choice among mutually exclusive options; provide the option group name and the list of labels.\n\nSame approach as Checkbox: native `<input type=\"radio\">` with `accent-color: violet-600`, real interaction included. Group options under one `name` attribute so only one can be selected.\n\nNever use Radio for a single yes/no toggle, that's Checkbox's job."
    },
    {
      "name": "SearchInput",
      "group": "Forms",
      "height": 200,
      "guide": "A text input scoped to filtering a list of results as you type; provide a placeholder describing what's being searched.\n\nBuilt on Input's tokens (`gray-300` border, `radius-sm`, `violet-500` focus ring) with a trailing icon button in `radius-sm` on its right edge, background `violet-600` / icon white. The icon is drawn in CSS (no icon font or image asset available to copy from a real source, so nothing was approximated as a logo or brand mark, just a generic magnifier shape).\n\nUse this only where results filter live or on submit; if there's no list to search, it's a plain Input."
    },
    {
      "name": "Select",
      "group": "Forms",
      "height": 280,
      "guide": "A single-choice dropdown for filtering or picking a value from a fixed list; provide the option list and the current value.\n\nShares Input's border and radius (`gray-300`, `radius-sm`) and the same contrast caveat: that border alone doesn't meet 3:1 against white, the label and focus ring (`violet-500`) carry the boundary. Trailing chevron in `gray-400`. Disabled uses `gray-100` background and `gray-400` text.\n\nPrefer Radio over Select when there are 4 or fewer options, letting people compare choices without opening a menu is usually better than hiding them."
    },
    {
      "name": "Sidebar",
      "group": "Navigation",
      "height": 260,
      "guide": "A vertical list of destinations (reports, pages, sections); provide the list of labels and which one is active.\n\nThe active item gets a `violet-600` left border, `violet-50` background and `violet-700` text; inactive items are `gray-600` text with a `gray-50` hover background. This is a functional current-page indicator, not decoration, don't add the same left-border treatment to something that isn't indicating \"you are here.\"\n\nThis is the generic Flowbite-token version of the container; it does not carry any specific product's brand color (see Navbar)."
    },
    {
      "name": "StatTile",
      "group": "Feedback",
      "height": 200,
      "guide": "A single number with a label, for a dashboard summary; provide the number and the caption describing it, and optionally a link to the detail view.\n\nValue uses the `h2` type style (36px/700) in `gray-900`; caption is `caption` (12px) in `gray-500`, uppercase, above the number. An optional link below uses Link's `violet-600`.\n\nNever show a number here without a caption, an unlabeled number is meaningless out of context. Keep to one number per tile; a tile with a trend arrow or delta is a variant to design deliberately, not to bolt on."
    }
  ]
};

// Fond blanc de l'extraction : Flowbite n'y definit que le mode clair, les
// apercus et les demos d'ombre restent donc sur blanc dans les deux themes.
export const flowbiteGround = "#ffffff";
