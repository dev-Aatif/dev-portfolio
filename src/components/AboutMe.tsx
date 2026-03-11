"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// ============================================================
// ABOUT ME — Clean two-column, single entrance animation
// ============================================================

export default function AboutMe() {
  return (
    <section id="about" className="relative z-10 py-24 px-6" aria-label="About me">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="glass-bordered rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
              {/* Avatar */}
              <div className="flex flex-col items-center gap-6">
                <div
                  className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-glass-border"
                  style={{
                    background: "linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(56,189,248,0.15) 100%)",
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image 
                      src="/profile.png" 
                      alt="Aatif - Profile Picture" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="flex items-center justify-center gap-6 text-center w-full">
                  <div>
                    <p className="text-2xl font-semibold text-interactive">2+</p>
                    <p className="text-xs text-secondary">Years Exp</p>
                  </div>
                  <div className="w-px bg-glass-border" />
                  <div>
                    <p className="text-2xl font-semibold text-interactive">4+</p>
                    <p className="text-xs text-secondary">Projects</p>
                  </div>
                  <div className="w-px bg-glass-border" />
                  <div>
                    <p className="text-2xl font-semibold text-interactive">5+</p>
                    <p className="text-xs text-secondary">Clients</p>
                  </div>
                </div>
              </div>

              {/* Philosophy & Experience */}
              <div className="space-y-5">
                <p className="text-secondary leading-relaxed">
                  I’m a developer who finds complex problems and fixes them by building 
                  meticulously organized, optimized, and incredibly simple solutions. 
                  While the tech world rushes to ship, I prioritize deep research and 
                  planning to ensure the final product feels effortless for the user.
                </p>
                <p className="text-secondary leading-relaxed">
                  I specialize in building for the web, mobile, and desktop, with a obsession 
                  for simplicity and performance. I spend most of my time optimizing what 
                  others ignore, turning digital chaos into intuitive, chill experiences 
                  that just work.
                </p>
                <p className="text-secondary leading-relaxed">
                  Most of what I do is driven by the pure fulfillment of building something 
                  right. I’m currently open to new opportunities—let’s build something 
                  great (and simple) together.
                </p>
              
                {/* Tech Stack */}
                <div className="pt-4">
                  <p className="text-xs text-secondary/50 uppercase tracking-wider mb-3 font-mono">
                    Tech I work with
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "Tailwind CSS", "PostgreSQL", "Docker", "AWS", "Figma", "Git"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-mono rounded-lg bg-base-light/50 text-secondary border border-glass-border hover:border-interactive/30 hover:text-primary transition-colors duration-150"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
