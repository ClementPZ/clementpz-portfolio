import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { BackHome } from "./BackHome";

// Case study Music Downloader — contenu FR (i18n EN/ES : phase suivante).
// Server component : aucune interactivité propre, la Nav/Footer sont client.

const stack = ["Python", "Docker", "ffmpeg", "AppleScript", "librosa"];

const steps = [
  {
    title: "Une commande",
    body: (
      <>
        <Code>meshd track &quot;Artiste&quot; &quot;Titre&quot; &quot;Genre&quot;</Code> : c&apos;est
        le seul input nécessaire.
      </>
    ),
  },
  {
    title: "Vérification de la bibliothèque",
    body: "Le morceau existe déjà en lossless : on s'arrête là. Il existe en MP3 : on bascule sur le flow upgrade. Pas de doublons.",
  },
  {
    title: "Recherche en escalade",
    body: "Requête précise d'abord, puis de plus en plus large jusqu'à trouver une source valide. La connexion au réseau se répare toute seule si elle est tombée.",
  },
  {
    title: "Filtre qualité et anti-erreur",
    body: "Lossless en priorité, MP3 320 accepté, tout le reste refusé. Un contrôle de correspondance écarte les fichiers qui ne sont pas le bon morceau (remix non demandé, autre titre du même artiste).",
  },
  {
    title: "Téléchargement avec repli",
    body: "Si une source rejette ou bloque, la suivante prend le relais, jusqu'à cinq tentatives. Les métadonnées (genre, artiste, titre) voyagent avec le fichier.",
  },
  {
    title: "Conversion et import automatiques",
    body: "FLAC et WAV sont convertis en AIFF (lossless, lisible par les platines), le MP3 320 est gardé tel quel. Le fichier est déposé dans le dossier d'import de l'app Musique, qui l'ingère seule.",
  },
  {
    title: "Rangement",
    body: "Genre tagué, ajout à la playlist correspondante, tag d'énergie (E1 warm-up, E2 mid, E3 peak) : le morceau est prêt à jouer.",
  },
];

const tools = [
  {
    name: "meshd (CLI)",
    role: "Orchestrateur Python d'environ 3 000 lignes, un seul fichier. Pilote l'API REST du daemon et l'app Musique via AppleScript.",
  },
  {
    name: "Daemon P2P",
    role: "Client SoundMesh auto-hébergé dans Docker, API REST locale pour la recherche et les transferts.",
  },
  {
    name: "Hook de conversion",
    role: "Script shell déclenché à chaque téléchargement terminé : transcodage ffmpeg, contrôle du bitrate réel, vérification MIME, métadonnées.",
  },
  {
    name: "App Musique",
    role: "Dossier surveillé pour l'import automatique ; lecture et écriture des genres, playlists et tags via AppleScript.",
  },
  {
    name: "Moteur d'énergie",
    role: "Analyse librosa du morceau entier, score par percentile intra-genre, buckets E1/E2/E3 et détection de voix. Alternative maison à un outil payant.",
  },
  {
    name: "File d'attente",
    role: "Retry avec verrou fichier, clés normalisées (ordre des artistes, accents) et dates d'échéance : pas de doublons, pas de spam réseau.",
  },
];

const modes = [
  {
    title: "Télécharger",
    body: "Acquérir un nouveau morceau, de la recherche au rangement.",
    cmd: 'meshd track "Artiste" "Titre" "Genre"',
    featured: true,
  },
  {
    title: "Upgrader",
    body: "Remplacer les MP3 de la bibliothèque par du lossless, playlists préservées, l'ancien fichier part en liste de review, jamais supprimé à l'aveugle.",
    cmd: "meshd upgrade-batch --playlist=X --apply",
  },
  {
    title: "Classer l'énergie",
    body: "Scorer chaque morceau en E1/E2/E3 pour construire des sets, avec cache des analyses.",
    cmd: "meshd energy-analyze --genre=X --apply",
  },
];

const versions = [
  {
    v: "v1",
    title: "Fondations",
    tags: ["recherche et téléchargement via API", "filtre qualité", "cache de session"],
  },
  {
    v: "v2",
    title: "Automatisation",
    tags: [
      "hook de conversion",
      "métadonnées embarquées",
      "playlist par genre",
      "repli multi-sources",
      "flow upgrade lossless",
      "classification d'énergie",
    ],
  },
  {
    v: "v3",
    title: "Robustesse",
    tags: [
      "anti-doublons en amont",
      "recherche en escalade",
      "reconnexion auto",
      "anti-mauvais-fichier",
      "file d'attente normalisée",
      "retry nocturne daté",
      "secrets sortis du code",
    ],
  },
];

const roadmap = [
  {
    title: "Recherche par compilation",
    body: "Quand un single est introuvable seul, le chercher via les albums et compilations connus de l'artiste déjà présents dans la bibliothèque.",
  },
  {
    title: "Valider l'énergie à l'oreille",
    body: "Constituer un set de référence par genre (morceaux dont le bucket est certain) pour mesurer proprement la corrélation du score, et améliorer les genres hétérogènes où le modèle actuel décroche.",
  },
  {
    title: "Signal crowd-sourcé",
    body: "Croiser le score d'énergie avec la position des morceaux dans des sets publics : un track joué en fin de set par beaucoup de DJs est probablement un peak.",
  },
  {
    title: "Packager et partager",
    body: "Extraire la configuration personnelle, documenter l'installation et publier l'outil pour qu'un autre DJ puisse le déployer chez lui.",
  },
];

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code
      className="px-1.5 py-0.5 rounded-md text-[0.82em]"
      style={{
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        background: "var(--accent-subtle)",
        border: "1px solid var(--border)",
        color: "var(--tag-text)",
      }}
    >
      {children}
    </code>
  );
}

function SectionTitle({ title, sub }: { title: string; sub: string }) {
  return (
    <>
      <h2 className="font-display text-2xl font-bold mb-2">{title}</h2>
      <p className="text-sm max-w-xl mb-7" style={{ color: "var(--text-muted)" }}>
        {sub}
      </p>
    </>
  );
}

export function MusicDownloaderContent() {
  return (
    <div id="top">
      <Nav />
      <main className="max-w-3xl mx-auto px-6 pt-10 pb-24">
        <div className="mb-10 flex items-center justify-between">
          <BackHome />
          <span className="pill">2025 - 2026</span>
        </div>

        {/* Hero */}
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl leading-tight mb-4">
          Music Downloader
        </h1>
        <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "var(--text-muted)" }}>
          Je mixe, et je passais des heures à chercher des tracks, vérifier leur qualité, les
          convertir, les taguer et les ranger. Ce projet réduit tout ça à{" "}
          <b style={{ color: "var(--text)" }}>une commande</b> : le morceau est trouvé sur
          SoundMesh, un réseau peer-to-peer, téléchargé dans la meilleure qualité disponible,
          converti en lossless, importé dans ma bibliothèque et rangé par genre et niveau
          d&apos;énergie, prêt pour rekordbox.
        </p>
        <div className="flex flex-wrap gap-2 mt-6">
          {stack.map((s) => (
            <span key={s} className="pill">
              {s}
            </span>
          ))}
        </div>

        {/* Flow */}
        <section className="pt-12">
          <SectionTitle
            title="Le flow"
            sub="Une commande, sept étapes, zéro intervention. Chaque étape a été durcie contre un problème réellement rencontré à l'usage."
          />
          <div className="grid gap-2.5">
            {steps.map((s, i) => (
              <div key={s.title} className="surface flex flex-col sm:flex-row gap-1 sm:gap-4 px-5 py-4">
                <span
                  className="font-display font-bold text-sm shrink-0 w-7"
                  style={{ color: "var(--accent)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-semibold">{s.title}</h3>
                  <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
            className="mt-3.5 px-5 py-3.5 text-sm"
            style={{
              background: "var(--accent-subtle)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              color: "var(--text-muted)",
            }}
          >
            <b style={{ color: "var(--text)" }}>Et si le morceau est introuvable ?</b> Il rejoint
            une file d&apos;attente persistante. Un job nocturne retente les entrées arrivées à
            échéance : les raretés finissent par se résoudre quand d&apos;autres pairs se
            connectent.
          </div>
        </section>

        {/* Outils */}
        <section className="pt-12">
          <SectionTitle
            title="Les outils"
            sub="Le cœur du flow ne dépend que de Docker et de la bibliothèque standard Python. L'analyse audio est le seul module avec des dépendances scientifiques."
          />
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                {["Composant", "Rôle"].map((h) => (
                  <th
                    key={h}
                    className="text-left text-xs uppercase tracking-wider font-semibold pb-2.5 px-3"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tools.map((tl) => (
                <tr key={tl.name}>
                  <td
                    className="px-3 py-3 font-semibold whitespace-nowrap align-top"
                    style={{ borderTop: "1px solid var(--border)" }}
                  >
                    {tl.name}
                  </td>
                  <td
                    className="px-3 py-3 align-top"
                    style={{ borderTop: "1px solid var(--border)", color: "var(--text-muted)" }}
                  >
                    {tl.role}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Modes */}
        <section className="pt-12">
          <SectionTitle title="Trois modes" sub="Le même code sert trois usages distincts." />
          <div className="grid gap-3 sm:grid-cols-3">
            {modes.map((m) => (
              <div
                key={m.title}
                className={`surface px-5 py-5${m.featured ? " card-featured" : ""}`}
              >
                <h3 className="font-display text-base font-bold mb-1.5">{m.title}</h3>
                <p className="text-sm mb-3" style={{ color: "var(--text-muted)" }}>
                  {m.body}
                </p>
                <Code>{m.cmd}</Code>
              </div>
            ))}
          </div>
        </section>

        {/* Versions */}
        <section className="pt-12">
          <SectionTitle
            title="Trois itérations"
            sub="Chaque version a fermé une famille de problèmes constatés en usage réel, pas de features spéculatives."
          />
          <div className="grid gap-2.5">
            {versions.map((v) => (
              <div key={v.v} className="surface grid sm:grid-cols-[64px_1fr] gap-2 sm:gap-4 px-5 py-4">
                <span className="font-display font-bold" style={{ color: "var(--accent)" }}>
                  {v.v}
                </span>
                <div>
                  <h3 className="text-base font-semibold mb-1.5">{v.title}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {v.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full"
                        style={{ background: "var(--tag-bg)", color: "var(--tag-text)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section className="pt-12">
          <SectionTitle
            title="Et ensuite"
            sub="Le backlog assumé : des pistes identifiées, notées, et volontairement laissées de côté tant que la douleur ne le justifie pas."
          />
          <div className="grid gap-2.5">
            {roadmap.map((r) => (
              <div
                key={r.title}
                className="flex gap-4 items-baseline px-5 py-4"
                style={{
                  border: "1px dashed var(--border-strong)",
                  borderRadius: "var(--radius-lg)",
                }}
              >
                <span className="font-bold shrink-0" style={{ color: "var(--accent)" }}>
                  →
                </span>
                <div>
                  <h3 className="text-base font-semibold">{r.title}</h3>
                  <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>
                    {r.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Note légale */}
        <div
          className="mt-14 px-4.5 py-3.5 text-xs px-5"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius)",
            color: "var(--text-muted)",
          }}
        >
          SoundMesh est présenté ici comme un réseau peer-to-peer générique pour de l&apos;audio
          librement licencié et auto-produit. L&apos;ingénierie décrite (daemon auto-hébergé,
          orchestration REST, pipeline de conversion, intégration bibliothèque, classification
          d&apos;énergie) est indépendante de la source et s&apos;applique à tout catalogue auquel
          l&apos;utilisateur a légitimement accès.
        </div>
      </main>
      <Footer />
    </div>
  );
}
