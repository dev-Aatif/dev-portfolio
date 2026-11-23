import Image from "next/image";

// ============================================================
// ABOUT ME — Editorial Profile, Verified Metrics & Updated Stack
// ============================================================

const stackGroups = [
  {
    label: "Languages & systems",
    items: ["Rust", "Kotlin", "Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    label: "App & UI surfaces",
    items: ["Jetpack Compose", "Flutter", "Electron", "React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Tooling & infrastructure",
    items: ["yt-dlp", "Playwright", "PostgreSQL", "Docker", "Git", "Linux"],
  },
];

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative z-[var(--z-base)] py-20 lg:py-28 bg-paper-2 border-t border-rule"
      aria-label="About Aatif"
    >
      <div className="container">
        <div data-reveal="">
          <h2 className="text-[length:var(--text-section)] font-bold tracking-[var(--tracking-display)] leading-[1.05] text-ink mb-10 max-w-[20ch]">
            Built carefully from first principles
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Portrait Column */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="relative aspect-square w-full max-w-[280px] rounded-[var(--radius-card)] overflow-hidden border border-rule bg-paper">
                <Image
                  src="/profile.png"
                  alt="Aatif P portrait"
                  fill
                  sizes="(max-width: 1024px) 280px, 280px"
                  className="object-cover"
                />
              </div>

              <div className="stats-ledger max-w-md">
                <div>
                  <p className="text-2xl font-bold text-accent num font-[family-name:var(--font-outlier)]">
                    2+
                  </p>
                  <p className="mt-1 text-sm text-ink-2">Years exp</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent num font-[family-name:var(--font-outlier)]">
                    10+
                  </p>
                  <p className="mt-1 text-sm text-ink-2">Projects</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent num font-[family-name:var(--font-outlier)]">
                    15+
                  </p>
                  <p className="mt-1 text-sm text-ink-2">Clients</p>
                </div>
              </div>
            </div>

            {/* Narrative, CTA & Technical Stack Column */}
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-5 text-base sm:text-lg text-ink-2 leading-relaxed max-w-[64ch]">
                <p>
                  <strong className="font-semibold text-ink">What I do:</strong> I design and
                  engineer local-first CLI tools in Rust, offline-first Android apps in Kotlin and
                  Flutter, Electron desktop utilities, and fast Next.js web applications. Every
                  layer, from data storage and automation pipelines to interface layout, is built to
                  stay predictable under real usage.
                </p>
                <p>
                  <strong className="font-semibold text-ink">Why I do it:</strong> Too much modern
                  software trades reliability and user respect for bloated dependencies. I build
                  tools that respect the machine they run on, start quickly, work offline when
                  networks drop, and solve complex problems without getting in the way.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a href="mailto:Aatif.biz@protonmail.com" className="btn-quiet">
                  Start a project together
                </a>
                <a
                  href="#contact"
                  className="min-h-[44px] inline-flex items-center text-sm font-medium text-accent hover:underline"
                >
                  See resume and channels
                </a>
              </div>

              <div className="pt-8 border-t border-rule grid grid-cols-1 sm:grid-cols-3 gap-6">
                {stackGroups.map((group) => (
                  <div key={group.label} className="space-y-3">
                    <h3 className="text-sm font-semibold text-ink">{group.label}</h3>
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((tech) => (
                        <li
                          key={tech}
                          className="px-3 py-1 text-xs font-medium text-ink-2 bg-paper border border-rule rounded-full"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
