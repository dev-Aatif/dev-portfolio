import styles from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={`glass ${styles.navbar}`}>
      <div className={`container ${styles.content}`}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M12 7v6"></path><path d="M9 10h6"></path></svg>
          </div>
          <span className={styles.logoText}>NoteAI</span>
        </div>
        
        <div className={styles.links}>
          <Link href="#features">Features</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#faq">FAQ</Link>
        </div>
        
        <div className={styles.cta}>
          <button className={styles.buttonSecondary}>Log in</button>
          <button className={styles.buttonPrimary}>Get Started</button>
        </div>
      </div>
    </nav>
  );
}
