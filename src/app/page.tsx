import { BackToTop } from "../components/BackToTop";
import { LiveCursors } from "../components/LiveCursors";
import { PullToRefresh } from "../components/PullToRefresh";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Stack } from "../components/Stack";
import { LastExperience, PastExperiences } from "../components/Work";
import { SideProjects } from "../components/SideProjects";
import { Footer } from "../components/Footer";

// Séparateur discret entre sections, aligné sur la colonne de contenu.
function SectionRule() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <hr className="section-rule" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <PullToRefresh />
      <div id="page-shift">
        <Nav />
        <main>
          <Hero />
          <SectionRule />
          <LastExperience />
          <SectionRule />
          <SideProjects />
          <SectionRule />
          <PastExperiences />
          <SectionRule />
          <Stack />
        </main>
        <Footer tight />
        {/* Dans #page-shift (transformé → stacking context) pour que la nav
            z-50 reste au-dessus du curseur z-40 au scroll. */}
        <LiveCursors />
      </div>
      <BackToTop />
    </>
  );
}
