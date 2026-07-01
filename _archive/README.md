# Archive — système de theming multi-marques

Contenu retiré du bundle de prod le **1 juillet 2026**. Non compilé (dossier
exclu de `tsconfig.json`, CSS non importé).

## Ce qu'il y a ici

- **`parked-themes.css`** — les 4 thèmes de marque (Spotify, Wise, Apple, Airbnb) :
  tokens, polices, effets de marque, et la search pill Airbnb.
- **`ThemeSwitcher.tsx`** — le sélecteur de thème (3+ boutons). Dépend de
  `themes` / `ThemeId` qui ne sont plus dans `src/data/content.ts`.

## Pourquoi

La V1 a une identité unique **"signature"** (aubergine, dark/light). Les thèmes
de marque étaient un playground ; on les garde pour référence et pour un futur
**thème NRC Health** (design system client), mais ils n'ont pas à peser dans le
bundle ni à traîner dans le DOM.

## Réactiver un thème

1. Recoller le bloc voulu de `parked-themes.css` dans `src/app/globals.css`.
2. Étendre `ThemeId` + recréer le tableau `themes` dans `src/data/content.ts`.
3. Restaurer `ThemeSwitcher.tsx` dans `src/components/` et l'importer dans `Nav.tsx`.
4. Airbnb uniquement : recoller aussi le markup `.nav-search-*` dans `Nav.tsx`.
