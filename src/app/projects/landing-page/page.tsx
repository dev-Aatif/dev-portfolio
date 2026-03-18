import Navbar from '@/components/landing-page/Navbar';
import Hero from '@/components/landing-page/Hero';
import SocialProof from '@/components/landing-page/SocialProof';
import Features from '@/components/landing-page/Features';
import Pricing from '@/components/landing-page/Pricing';
import Testimonials from '@/components/landing-page/Testimonials';
import CTA from '@/components/landing-page/CTA';
import FAQ from '@/components/landing-page/FAQ';
import Footer from '@/components/landing-page/Footer';
import './landing-page.css';

export default function LandingPageDemo() {
  return (
    <div className="landing-page-root">
      <main>
        <Navbar />
        <Hero />
        <SocialProof />
        <Features />
        <Testimonials />
        <Pricing />
        <CTA />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}
