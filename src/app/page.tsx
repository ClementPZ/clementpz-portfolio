import { DisclaimerOverlay } from "../components/DisclaimerOverlay";
import { BackToTop } from "../components/BackToTop";
import { LiveCursors } from "../components/LiveCursors";
import { PullToRefresh } from "../components/PullToRefresh";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Stack } from "../components/Stack";
import { Highlight } from "../components/Highlight";
import { Work } from "../components/Work";
import { RecentProjects } from "../components/RecentProjects";
import { Footer } from "../components/Footer";

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
          <Highlight />
          <RecentProjects />
          <Work />
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
