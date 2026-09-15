# Portfolio, Clement Picard-Zivy

The personal site of a product designer, live at https://clementpz.com.

It is a one page home plus a set of case studies, in English, French and
Spanish, on two themes. Visitors pick the language and the theme, and the whole
site follows.

## What is on it

- **Home**: an introduction, the day to day stack, a featured project, a
  carousel of recent side projects, and the work history with recommendations.
- **Case studies**: `/nrc` for the design function at NRC Health, `/builder`
  for a Claude Code plugin, `/music-downloader` for a music pipeline,
  `/making-of` for this site explained as a project of its own.
- **Two pages that break the mould on purpose**: `/spota`, a product landing
  for a social game, and `/interior`, a votable photo gallery.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
```

## Deploying it

```bash
scripts/ship.sh "your commit message" /the-page /you-changed
```

The script checks types, lint and build before it commits anything, pushes to
`main`, then waits until the pages you named actually serve the new version.
Vercel builds from the push, so a green local build is the last gate. From a
Claude session, the `/ship` command runs the same thing.

## Changing the content

Almost everything is text, and text lives in two files: `src/data/content.ts`
for structure and `src/data/i18n.ts` for every translated string. A missing
translation fails the build rather than shipping quietly.

The editing rules, the architecture and the known traps are in `CLAUDE.md`.
Where the work stands today is in `HANDOFF.md`.

## Stack

Next.js 16, React 19, TypeScript, Tailwind v4, deployed on Vercel.

## Links

Agent rules in [[Projects/portfoliomai2026/CLAUDE|CLAUDE]], current state in
[[Projects/portfoliomai2026/HANDOFF|HANDOFF]], Next.js version notes in
[[Projects/portfoliomai2026/AGENTS|AGENTS]].
