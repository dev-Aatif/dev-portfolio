import styles from './SocialProof.module.css';

const logos = [
  { name: "TechCrunch", icon: "TC" },
  { name: "Product Hunt", icon: "PH" },
  { name: "Forbes", icon: "F" },
  { name: "Wired", icon: "W" },
  { name: "The Verge", icon: "TV" },
];

export default function SocialProof() {
  return (
    <section className={styles.socialProof}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.trustpilotContainer}>
            <div className={styles.trustpilotStar}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#00b67a"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            </div>
            <span className={styles.trustpilotText}>Excellent 4.8 out of 5 on <strong>Trustpilot</strong></span>
          </div>
          <p className={styles.featuredIn}>As featured in</p>
        </div>
        
        <div className={styles.logoGrid}>
          {logos.map((logo, i) => (
            <div key={i} className={styles.logoItem}>
              <span className={styles.logoPlaceholder}>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
