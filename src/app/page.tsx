import { DisclaimerOverlay } from "../components/DisclaimerOverlay";
import { BackToTop } from "../components/BackToTop";
import { LiveCursors } from "../components/LiveCursors";
import { PullToRefresh } from "../components/PullToRefresh";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Stack } from "../components/Stack";
import { Highlight } from "../components/Highlight";
import { LastExperience, PastExperiences } from "../components/Work";
import { RecentProjects } from "../components/RecentProjects";
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
      <DisclaimerOverlay />
      <PullToRefresh />
      <div id="page-shift">
        <Nav />
        <main>
          <Hero />
          <Stack />
          <SectionRule />
          <LastExperience />
          <SectionRule />
          <Highlight />
          <RecentProjects />
          <SectionRule />
          <PastExperiences />
        </main>
        <Footer />
        {/* Dans #page-shift (transformé → stacking context) pour que la nav
            z-50 reste au-dessus du curseur z-40 au scroll. */}
        <LiveCursors />
      </div>
      <BackToTop />
    </>
  );
}
