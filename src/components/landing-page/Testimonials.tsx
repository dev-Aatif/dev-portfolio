import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: "NoteAI has completely changed how our product team operates. We no longer worry about missing details during discovery calls.",
    author: "Sarah Chen",
    role: "Product Lead at TechFlow",
    avatar: "SC",
    rating: 5
  },
  {
    quote: "The accuracy of the action item extraction is spooky. it's like having a project manager in every meeting.",
    author: "Marcus Thorne",
    role: "Founder of ScaleUp",
    avatar: "MT",
    rating: 5
  },
  {
    quote: "Best investment we've made this year. It saves every engineer at least 3 hours of documentation per week.",
    author: "Elena Rodriguez",
    role: "CTO at Innovate",
    avatar: "ER",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Trusted by <span className={styles.highlight}>visionaries</span></h2>
          <p className={styles.subtitle}>Join thousands of teams who have transformed their meeting culture.</p>
        </div>
        
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.ratingContainer}>
                <div className={styles.stars}>
                  {[...Array(t.rating)].map((_, index) => (
                    <svg key={index} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={styles.star}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className={styles.ratingNumber}>5.0</span>
              </div>
              <div className={styles.quoteIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.4"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM14.017 13L14.017 10C14.017 8.89543 14.9124 8 16.017 8H19.017C20.1216 8 21.017 8.89543 21.017 10V13C21.017 14.1046 20.1216 15 19.017 15H16.017C14.9124 15 14.017 14.1046 14.017 13ZM3 21L3 18C3 16.8954 3.89543 16 5 16H8C9.10457 16 10 16.8954 10 18V21C10 22.1046 9.10457 23 8 23H5C3.89543 23 3 22.1046 3 21ZM3 13L3 10C3 8.89543 3.89543 8 5 8H8C9.10457 8 10 8.89543 10 10V13C10 14.1046 9.10457 15 8 15H5C3.89543 15 3 14.1046 3 13Z"></path></svg>
              </div>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.avatar}</div>
                <div className={styles.info}>
                  <strong>{t.author}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
