import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GlowOrb from "@/components/GlowOrb";
import ProjectsGrid from "@/components/ProjectsGrid";
import AboutMe from "@/components/AboutMe";
import RecruiterAccess from "@/components/RecruiterAccess";
import ContactButton from "@/components/ContactButton";
import Footer from "@/components/Footer";

// ============================================================
// MAIN PAGE — Composes all sections into the portfolio
// ============================================================

export default function Home() {
  return (
    <>
      {/* Background effect — cursor-tracking glow orb */}
      <GlowOrb />

      {/* Sticky navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <ProjectsGrid />
        <AboutMe />
        <RecruiterAccess />
      </main>

      {/* Floating contact CTA */}
      <ContactButton />

      {/* Footer */}
      <Footer />
    </>
  );
}
