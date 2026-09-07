---
description: Add a project to the home carousel, structure and copy together
argument-hint: "<project name>" ["<one-line pitch>"]
---

Add one entry to `recentProjects`, end to end. Ask for whatever below is
missing, one question at a time, do not guess a field the user has not given:

1. **Name** and a **one-line pitch** (English, source for the three locales).
2. **Status**: `concept`, `concept-wip`, `fail`, or `private-live`, ask which, do not default it.
3. **Tags**: two or three, the stack or the domain, matching the style of the
   existing cards in `src/data/content.ts`.
4. **Accent colours**: two hex values, `accent` and `accent2`. If the user has
   none in mind, propose a pair that is visually distinct from every existing
   card's `accent` (read them first) and confirm before writing.
5. **Link and image**: optional. A link only if a live page or repo exists to
   point at. An image only if a file already sits under `public/`; if the user
   names one that is not there, say so and skip it rather than write a path
   that 404s.

Then, in order:

1. Derive a **kebab-case id** from the name, unique against the existing
   `ProjectId` union in `src/data/content.ts`. Add it to that union: this is
   what makes a missing translation fail the build instead of shipping quietly.
2. Add the entry to `recentProjects`, placed as the new last card unless the
   user asks for a position.
3. Add `projectText[locale][id]` for `en`, `fr`, and `es` in `src/data/i18n.ts`:
   a `tagline` and a `description`, written in each language's own voice, not
   a word for word translation. No em dash (see CLAUDE.md, "Règles strictes").
4. Run `npx tsc --noEmit` and `npm run lint`. Fix anything they catch before
   going further.

State the exact diff, then wait for the user's go before writing anything.
After the go and the write, hand off to `/ship` for the build, commit and
deploy, do not push from here.
