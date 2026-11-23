import { Mail } from "lucide-react";

// ============================================================
// FLOATING CONTACT BUTTON — Quiet instrument pill, zero bounce
// ============================================================

export default function ContactButton() {
  return (
    <div className="fixed bottom-6 right-6 z-[var(--z-sticky)]">
      <a
        href="mailto:Aatif.biz@protonmail.com"
        className="btn-quiet"
        aria-label="Send email to Aatif.biz@protonmail.com"
      >
        <Mail size={16} className="text-accent" aria-hidden="true" />
        <span className="hidden sm:inline">Say hello</span>
      </a>
    </div>
  );
}
