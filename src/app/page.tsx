import { DisclaimerOverlay } from "../components/DisclaimerOverlay";
import { BackToTop } from "../components/BackToTop";
import { LiveCursors } from "../components/LiveCursors";
import { PullToRefresh } from "../components/PullToRefresh";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Stack } from "../components/Stack";
import { Work } from "../components/Work";
import { RecentProjects } from "../components/RecentProjects";
import { Recommendations } from "../components/Recommendations";
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
          <RecentProjects />
          <Work />
          <Recommendations />
        </main>
        <Footer />
      </div>
      <BackToTop />
      <LiveCursors />
    </>
  );
}
