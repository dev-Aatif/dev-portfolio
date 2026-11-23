import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import AboutMe from "@/components/AboutMe";
import RecruiterAccess from "@/components/RecruiterAccess";
import ContactButton from "@/components/ContactButton";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

// ============================================================
// MAIN PAGE — Surface Telemetry Monograph
// ============================================================

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Navbar />

      <main className="relative z-[var(--z-base)]">
        <Hero />
        <ProjectsGrid />
        <AboutMe />
        <div id="contact">
          <RecruiterAccess />
        </div>
      </main>

      <ContactButton />
      <Footer />
    </>
  );
}
