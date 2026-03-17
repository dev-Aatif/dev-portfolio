"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// ============================================================
// ABOUT ME — Clean two-column, single entrance animation
// ============================================================

export default function AboutMe() {
  return (
    <section id="about" className="relative z-10 pt-12 pb-12 px-6" aria-label="About me">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="glass-bordered rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
              {/* Avatar */}
              <div className="flex flex-col items-center gap-6">
                <div
                  className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-glass-border shadow-2xl"
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
                     <p className="text-xs text-primary/70 font-medium">Years Exp</p>
                   </div>
                   <div className="w-px h-8 bg-glass-border" />
                   <div>
                     <p className="text-2xl font-semibold text-interactive">5+</p>
                     <p className="text-xs text-primary/70 font-medium">Projects</p>
                   </div>
                   <div className="w-px h-8 bg-glass-border" />
                   <div>
                     <p className="text-2xl font-semibold text-interactive">15+</p>
                     <p className="text-xs text-primary/70 font-medium">Clients</p>
                   </div>
                 </div>
              </div>

               <div className="space-y-5 text-primary/90">
                 <p className="leading-relaxed text-lg">
                   I’m a developer who finds complex problems and fixes them by building 
                   meticulously organized, optimized, and incredibly simple solutions. 
                   While the tech world rushes to ship, I prioritize deep research and 
                   planning to ensure the final product feels effortless for the user.
                 </p>
                 <p className="leading-relaxed text-lg">
                   I specialize in building for the web, mobile, and desktop, with an obsession 
                   for simplicity and performance. I spend most of my time optimizing what 
                   others ignore, turning digital chaos into intuitive, chill experiences 
                   that just work.
                 </p>
                 <p className="leading-relaxed text-lg italic opacity-80">
                   Most of what I do is driven by the pure fulfillment of building something 
                   right. I&apos;m currently open to new opportunities — let&apos;s build something 
                   great (and simple) together.
                 </p>
               </div>
              
            </div>

            {/* Tech Stack — Full-width horizontal bar */}
            <div className="mt-12 pt-10 border-t border-glass-border/30">
              <div className="flex flex-col lg:flex-row lg:items-start gap-10">
                <p className="text-[12px] text-primary/40 uppercase tracking-[0.3em] font-mono font-bold pt-1 shrink-0">
                  Tech Stack
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-12 gap-y-10 flex-grow">
                  {[
                    { label: "Languages", tech: ["TypeScript", "JavaScript", "Python", "Kotlin", "SQL"] },
                    { label: "Frontend", tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] },
                    { label: "Backend & Tools", tech: ["Node.js", "PostgreSQL", "Git", "Docker", "GitHub"] }
                  ].map((category) => (
                    <div key={category.label} className="space-y-4">
                      <p className="text-[11px] text-interactive font-bold uppercase tracking-wider">
                        {category.label}
                      </p>
                      <div className="flex flex-wrap gap-2.5">
                        {category.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1.5 text-[13px] font-medium text-primary/90 bg-surface/10 border border-glass-border/20 rounded-lg hover:border-interactive/40 hover:bg-interactive/5 transition-colors cursor-default"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
