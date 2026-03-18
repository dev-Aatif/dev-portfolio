"use client";
import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: "How does the AI transcription work?",
    answer: "We use state-of-the-art neural networks trained on thousands of hours of multi-accent audio. Our engine processes the audio in real-time and refines it with context-aware algorithms for 99% accuracy."
  },
  {
    question: "Is my meeting data secure?",
    answer: "Absolutely. All data is encrypted at rest and in transit using AES-256. We are SOC2 Type II compliant and never use your private meeting data to train our public models."
  },
  {
    question: "Which platforms do you integrate with?",
    answer: "We support Zoom, Google Meet, Microsoft Teams, Webex, and BlueJeans. You can also upload recorded audio or video files directly to our dashboard."
  },
  {
    question: "Can I share summaries with non-users?",
    answer: "Yes! You can generate secure, password-protected links or export your notes directly to public-facing platforms like Notion, Slack, or Google Docs."
  },
  {
    question: "Do you offer a free trial for Pro?",
    answer: "We offer a 14-day free trial of our Pro plan with no credit card required. After the trial, you'll automatically move to our free Starter plan unless you choose to upgrade."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className={styles.faq}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Frequently Asked <span className={styles.highlight}>Questions</span></h2>
          <p className={styles.subtitle}>Find answers to common questions about NoteAI.</p>
        </div>
        
        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <div key={index} className={`${styles.item} ${openIndex === index ? styles.open : ''}`}>
              <button 
                className={styles.question}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div className={styles.answer}>
                <div className={styles.answerContent}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
