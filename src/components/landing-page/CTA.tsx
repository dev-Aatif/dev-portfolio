"use client";
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>Ready to make your meetings <span className={styles.highlight}>work</span> for you?</h2>
          <p className={styles.subtitle}>Join 2,000+ teams already using NoteAI to boost their productivity.</p>
          <div className={styles.actions}>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" className={styles.input} required />
              <button type="submit" className={styles.button}>Get Started for Free</button>
            </form>
          </div>
          <p className={styles.hint}>7-day free trial • No credit card required</p>
        </div>
        <div className={styles.decorLeft} />
        <div className={styles.decorRight} />
      </div>
    </section>
  );
}
