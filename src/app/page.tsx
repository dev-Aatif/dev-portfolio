import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GlowOrb from "@/components/GlowOrb";
import ProjectsGrid from "@/components/ProjectsGrid";
import AboutMe from "@/components/AboutMe";
import RecruiterAccess from "@/components/RecruiterAccess";
import ContactButton from "@/components/ContactButton";
import Footer from "@/components/Footer";

// ============================================================
// MAIN PAGE — All sections + static bg mesh div
// ============================================================

export default function Home() {
  return (
    <>
      {/* Static mesh gradient background — real div, not pseudo-element */}
      <div className="bg-mesh" aria-hidden="true" />

      {/* Cursor glow */}
      <GlowOrb />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <main className="relative z-10">
        <Hero />
        <ProjectsGrid />
        <AboutMe />
        <div id="contact">
          <RecruiterAccess />
        </div>
      </main>

      {/* Floating CTA */}
      <ContactButton />

      {/* Footer */}
      <Footer />
    </>
  );
}
