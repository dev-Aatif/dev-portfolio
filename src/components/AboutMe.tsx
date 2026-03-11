"use client";

import { motion } from "framer-motion";

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
              <div className="flex flex-col items-center md:items-start gap-4">
                <div
                  className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-glass-border"
                  style={{
                    background: "linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(56,189,248,0.15) 100%)",
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-secondary/30 text-xs font-mono text-center px-4">
                      [Your Photo]<br />/public/avatar.jpg
                    </span>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="flex gap-4 text-center">
                  <div>
                    <p className="text-2xl font-semibold text-interactive">[X]+</p>
                    <p className="text-xs text-secondary">Years Exp</p>
                  </div>
                  <div className="w-px bg-glass-border" />
                  <div>
                    <p className="text-2xl font-semibold text-interactive">[X]+</p>
                    <p className="text-xs text-secondary">Projects</p>
                  </div>
                  <div className="w-px bg-glass-border" />
                  <div>
                    <p className="text-2xl font-semibold text-interactive">[X]+</p>
                    <p className="text-xs text-secondary">Clients</p>
                  </div>
                </div>
              </div>

              {/* Philosophy & Experience */}
              <div className="space-y-5">
                <p className="text-secondary leading-relaxed">
                  [Hello! I am a passionate developer and designer who believes in
                  building products that are not only functional but delightful to
                  use. My journey started with your origin story and has evolved
                  into a deep love for crafting clean, performant web experiences.]
                </p>
                <p className="text-secondary leading-relaxed">
                  [I specialize in your specialties, with a strong focus on your
                  focus area. Over the past X years, I have worked with teams at
                  notable companies to ship products that serve real users at scale.]
                </p>
                <p className="text-secondary leading-relaxed">
                  [When I am not coding, you will find me doing hobbies. I am
                  currently open to opportunities — let us build something great
                  together.]
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
