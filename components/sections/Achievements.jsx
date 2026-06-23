"use client";

import { SectionHeading, GlassCard } from "@/components/ui";
import { FadeIn, StaggerContainer, StaggerItem, Counter } from "@/components/ui/animations";
import { achievements } from "@/lib/data";

export function Achievements() {
  return (
    <section id="achievements" className="section-padding relative">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-accent-cyan/5 to-transparent" />

      <div className="section-container relative">
        <FadeIn>
          <SectionHeading
            label="Achievements"
            title=""
            description="Problem-solving milestones and academic background."
          />
        </FadeIn>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement) => (
            <StaggerItem key={achievement.label}>
              <GlassCard className="p-6 text-center" glow>
                <div className="font-display text-4xl font-bold text-white sm:text-5xl">
                  {achievement.value !== null ? (
                    <span className="gradient-text">
                      <Counter value={achievement.value} suffix={achievement.suffix} />
                    </span>
                  ) : (
                    <span className="gradient-text">
                      {achievement.display}
                      <br />
                      <span className="text-3xl sm:text-4xl">{achievement.subDisplay}</span>
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-display text-sm font-semibold text-white">
                  {achievement.label}
                </h3>
                <p className="mt-1 text-xs text-white/40">{achievement.description}</p>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
