"use client";

import { SectionHeading, GlassCard } from "@/components/ui";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { techStack } from "@/lib/data";

export function TechStack() {
  return (
    <section id="skills" className="section-padding relative bg-surface-alt">
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
              <GlassCard className="h-full p-6" glow>
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <h3 className="font-display text-lg font-semibold text-text-primary">
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-badge border border-border bg-surface-alt px-3 py-1.5 text-sm text-text-secondary transition-colors hover:border-accent/30 hover:text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
