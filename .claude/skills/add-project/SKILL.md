---
name: add-project
description: Add a project to the portfolio, card and page together. Use when Clément wants a project added to the home side projects, e.g. "ajoute X au portfolio", "on montre X sur le portfolio", "nouveau projet sur le portfolio".
---

# Add a project

Adds one project to the portfolio end to end: its side-project card and its own
dedicated page, in the same pass. Replaces the old card-only flow. Ask for
whatever is missing below, one question at a time, do not guess a field the
user has not given.

## 1. Card (data for the home side-projects section)

1. **Name** and a **one-line pitch** (English, source for the three locales).
2. **Status**: `concept`, `concept-wip`, `fail`, `private-live`, `in progress`,
   or `live`, ask which, do not default it.
3. **Tags**: two or three, the stack or the domain, matching the style of the
   existing cards in `src/data/content.ts`.
4. **Accent colours**: two hex values, `accent` and `accent2`. If the user has
   none in mind, read every existing card's accent first, propose a pair
   visually distinct from all of them, and confirm before writing.
5. **Image**: optional. Only if a file already sits under `public/`; if the
   user names one that is not there, say so and skip it rather than write a
   path that 404s.

## 2. Page template

Every project gets a dedicated page. Ask which shape fits, naming the two
references already in the codebase:

- **Light** (`/builder` pattern, `builderText` in `i18n.ts`): kicker, title,
  intro, a handful of short sections (heading + body), a back-home link. Fits
  a pitch, a concept, or a project not yet built out.
- **Rich** (`/music-quality-upgrader` pattern, `musicQualityUpgraderText` in `i18n.ts`):
  hero with stack pills, then structured sections, steps, tables, grids,
  roadmap. Fits a working pipeline with real detail to show.
- **App landing** (`/spota` pattern, `src/app/spota/NOTES.md`): a product
  landing for an app headed to the App Store, plus its `/<id>/privacy` page.
  Outside the common shell, the app's own colours hard-coded, English only, no
  entry in `i18n.ts`. It is the listing's marketing and support URL, the
  privacy page is the URL Apple checks during review.

Ask, do not default silently. Confirm the section list (headings only) before
writing any copy.

## 3. Write

In order:

1. Derive a **kebab-case id** from the name, unique against the existing
   `ProjectId` union in `src/data/content.ts`. Add it to that union: this is
   what makes a missing translation fail the build instead of shipping
   quietly.
2. Add the entry to `recentProjects`, then its id to `sideProjectIds` (same
   file) so it shows on the home: after the first two it renders as a medium or
   small card, placed as the new last card unless the
   user asks for a position.
3. Add `projectText[locale][id]` for `en`, `fr`, and `es` in
   `src/data/i18n.ts`: a `tagline` and a `description`, written in each
   language's own voice, not a word-for-word translation. No em dash (see
   `CLAUDE.md`, "Règles strictes").
4. Write the page copy as its own locale block in `i18n.ts`, shaped like
   `builderText` or `musicQualityUpgraderText` depending on the chosen template,
   for `en`, `fr`, and `es`.
5. Create the route `src/app/<id>/page.tsx` (metadata + Content component)
   and the component `src/components/<PascalCaseId>Content.tsx`, built on the
   chosen template. Follow the shell rules in `CLAUDE.md`: `Nav`, `Footer`,
   `BackHome`, CSS variables only, `<Link>` never `<a href="/...">`.
6. Add the new route and component to the two lists in `CLAUDE.md` ("Routes"
   and the architecture tree), same one-line style as the existing entries.
   For an **App landing**, replace steps 4 to 6 with:
   - Page copy in English, inside the component, not in `i18n.ts`.
   - `src/app/<id>/page.tsx`, `src/app/<id>/privacy/page.tsx` and
     `src/components/<PascalCaseId>Content.tsx`, no shared `Nav` or `Footer`.
     The landing carries a contact, it serves as support URL.
   - The privacy text is written from the app's code, read it first. List in a
     comment at the top of the privacy page the code facts it depends on.
   - `src/app/<id>/NOTES.md`, shaped like the SpotA one: why the page exists,
     what the privacy text depends on, the traps.
   - In `CLAUDE.md`, the two routes in "Routes", the files in the tree, and a
     one-line "Exception /<id>" next to "Exception /spota".
7. Run `npx tsc --noEmit` and `npm run lint`. Fix anything they catch before
   going further.

State the exact diff (fields, id, colours, section headings), then wait for
the user's go before writing anything. After the go and the write, hand off
to `/ship` for the build, commit and deploy, do not push from here.
