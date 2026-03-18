import styles from './Hero.module.css';


export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <div className={`animate-fade-in ${styles.textContent}`}>
          <div className={styles.badge}>New: AI-Powered Action Items</div>
          <h1 className={styles.title}>
            Meetings that <span className={styles.highlight}>document</span> themselves.
          </h1>
          <p className={styles.subtitle}>
            Stop taking notes and start being present. NoteAI captures every detail, 
            summarizes key points, and extracts action items automatically.
          </p>
          <div className={styles.actions}>
            <button className={styles.buttonPrimary}>Start for Free</button>
            <button className={styles.buttonOutline}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              Watch Demo
            </button>
          </div>
          <p className={styles.trustText}>No credit card required. Trusted by 2,000+ teams.</p>
        </div>
      </div>
    </section>
  );
}
