import { DisclaimerOverlay } from "../components/DisclaimerOverlay";
import { BackToTop } from "../components/BackToTop";
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
      <Nav />
      <main>
        <Hero />
        <Stack />
        <Work />
        <RecentProjects />
        <Recommendations />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
