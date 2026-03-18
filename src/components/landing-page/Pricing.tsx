import styles from './Pricing.module.css';

const tiers = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for students and individuals.",
    features: ["5 meetings per month", "Basic summaries", "Transcripts in 10 languages", "Web access only"],
    cta: "Start for Free",
    popular: false
  },
  {
    name: "Pro",
    price: "$29",
    description: "Ideal for power users and small teams.",
    features: ["Unlimited meetings", "Advanced AI analysis", "Action items extraction", "Priority support", "Slack & Notion integration"],
    cta: "Get Started Pro",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with complex needs.",
    features: ["Role-based access", "SSO & SAML", "Dedicated account manager", "Custom AI training", "Audit logs & Security reports"],
    cta: "Contact Sales",
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className={styles.pricing}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Simple, <span className={styles.highlight}>transparent</span> pricing</h2>
          <p className={styles.subtitle}>Choose the plan that fits your needs. No hidden fees.</p>
        </div>
        
        <div className={styles.grid}>
          {tiers.map((tier, index) => (
            <div key={index} className={`${styles.card} ${tier.popular ? styles.popular : ''}`}>
              {tier.popular && <div className={styles.popularBadge}>Most Popular</div>}
              <div className={styles.tierName}>{tier.name}</div>
              <div className={styles.priceContainer}>
                <span className={styles.price}>{tier.price}</span>
                {tier.price !== "Custom" && <span className={styles.period}>/month</span>}
              </div>
              <p className={styles.tierDescription}>{tier.description}</p>
              
              <ul className={styles.featureList}>
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className={styles.featureItem}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}><polyline points="20 6 9 17 4 12"></polyline></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`${styles.ctaButton} ${tier.popular ? styles.ctaPopular : styles.ctaOutline}`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
