"use client";
import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.projectExplanation}`}>
        <div className={styles.explanationContent}>
          <h3 className={styles.explanationTitle}>Portfolio Context</h3>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <strong>Problem:</strong>
              <span>Startups need a fast landing page to validate ideas.</span>
            </div>
            <div className={styles.statItem}>
              <strong>Solution:</strong>
              <span>Built a responsive SaaS landing page with pricing and lead capture.</span>
            </div>
            <div className={styles.statItem}>
              <strong>Result:</strong>
              <span>Optimized for fast load and conversion. Now founders instantly understand.</span>
            </div>
          </div>
        </div>
      </div>

      <div className={`container ${styles.mainFooter}`}>
        <div className={styles.brandSection}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            </div>
            <span className={styles.logoText}>NoteAI</span>
          </div>
          <p className={styles.brandDesc}>
            Making meetings useful for teams worldwide. Powered by advanced AI.
          </p>
        </div>
        
        <div className={styles.linksGrid}>
          <div className={styles.linkColumn}>
            <h4>Product</h4>
            <Link href="#features">Features</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#">What&apos;s New</Link>
          </div>
          <div className={styles.linkColumn}>
            <h4>Company</h4>
            <Link href="#">About Us</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Careers</Link>
          </div>
          <div className={styles.linkColumn}>
            <h4>Support</h4>
            <Link href="#faq">FAQ</Link>
            <Link href="#">Help Center</Link>
            <Link href="#">Contact</Link>
          </div>
        </div>

        <div className={styles.newsletter}>
          <h4>Stay Updated</h4>
          <p>Join 5,000+ others receiving our weekly AI tips.</p>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email address" className={styles.input} required />
            <button type="submit" className={styles.button}>Join</button>
          </form>
        </div>
      </div>

      <div className={`container ${styles.bottomBar}`}>
        <p>© 2026 NoteAI Inc. All rights reserved.</p>
        <div className={styles.legalLinks}>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
