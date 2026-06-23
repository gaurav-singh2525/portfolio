"use client";

import { motion } from "framer-motion";
import { SectionHeading, GlassCard } from "@/components/ui";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { techStack } from "@/lib/data";

const categoryColors = {
  Languages: "accent-cyan",
  Backend: "accent-purple",
  Frontend: "accent-green",
  Databases: "accent-cyan",
  Systems: "accent-purple",
  Tools: "accent-green",
};

export function TechStack() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/5 to-transparent" />

      <div className="section-container relative">
        <FadeIn>
          <SectionHeading
            label="Tech Stack"
            title="Tools & Technologies"
            description="Languages, frameworks, and systems I've used in coursework and personal projects — with a focus on backend and systems programming."
          />
        </FadeIn>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(techStack).map(([category, technologies]) => (
            <StaggerItem key={category}>
              <motion.div
                whileHover={{
                  rotateX: 2,
                  rotateY: -2,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              >
                <GlassCard className="h-full p-6" glow>
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className="h-2 w-2 rounded-full"
                      style={{
                        backgroundColor:
                          categoryColors[category] === "accent-purple"
                            ? "#7C3AED"
                            : categoryColors[category] === "accent-green"
                              ? "#00FFA3"
                              : "#00E5FF",
                      }}
                    />
                    <h3 className="font-display text-lg font-semibold text-white">
                      {category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/70 transition-colors hover:border-accent-cyan/30 hover:text-accent-cyan"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
