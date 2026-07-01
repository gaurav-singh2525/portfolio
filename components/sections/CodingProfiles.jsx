"use client";

import {
  Github,
  Linkedin,
  Code2,
  Instagram,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import { SectionHeading, GlassCard } from "@/components/ui";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animations";
import { socialLinks } from "@/lib/data";

const profiles = [
  {
    key: "github",
    name: "GitHub",
    icon: Github,
    iconColor: "text-text-primary",
    ...socialLinks.github,
  },
  {
    key: "linkedin",
    name: "LinkedIn",
    icon: Linkedin,
    iconColor: "text-[#0A66C2]",
    ...socialLinks.linkedin,
  },
  {
    key: "leetcode",
    name: "LeetCode",
    icon: Code2,
    iconColor: "text-[#FFA116]",
    ...socialLinks.leetcode,
  },
  {
    key: "instagram",
    name: "Instagram",
    icon: Instagram,
    iconColor: "text-[#E4405F]",
    ...socialLinks.instagram,
  },
];

export function CodingProfiles() {
  return (
    <section id="profiles" className="section-padding relative">
      <div className="section-container">
        <FadeIn>
          <SectionHeading
            label="Social Profiles"
            title="Find Me Online"
            description="GitHub, LinkedIn, LeetCode, and Instagram."
          />
        </FadeIn>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map((profile) => (
            <StaggerItem key={profile.key}>
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <GlassCard
                  className="p-6 transition-all duration-300 hover:border-border-strong"
                  glow
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface-alt">
                      <profile.icon className={`h-6 w-6 ${profile.iconColor}`} />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-text-tertiary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-text-secondary" />
                  </div>

                  <h3 className="mt-4 font-display text-lg font-semibold text-text-primary">
                    {profile.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    @{profile.username}
                  </p>
                  <p className="mt-3 text-sm text-text-tertiary">{profile.stats}</p>

                  <div className="mt-4 flex items-center gap-1 text-xs text-text-tertiary transition-colors group-hover:text-accent">
                    <ExternalLink className="h-3 w-3" />
                    Visit Profile
                  </div>
                </GlassCard>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
