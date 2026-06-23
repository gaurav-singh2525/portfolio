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
    color: "text-white",
    bgColor: "from-white/10 to-white/5",
    borderColor: "hover:border-white/30",
    ...socialLinks.github,
  },
  {
    key: "linkedin",
    name: "LinkedIn",
    icon: Linkedin,
    color: "text-[#0A66C2]",
    bgColor: "from-[#0A66C2]/10 to-[#0A66C2]/5",
    borderColor: "hover:border-[#0A66C2]/30",
    ...socialLinks.linkedin,
  },
  {
    key: "leetcode",
    name: "LeetCode",
    icon: Code2,
    color: "text-[#FFA116]",
    bgColor: "from-[#FFA116]/10 to-[#FFA116]/5",
    borderColor: "hover:border-[#FFA116]/30",
    ...socialLinks.leetcode,
  },
  {
    key: "instagram",
    name: "Instagram",
    icon: Instagram,
    color: "text-[#E4405F]",
    bgColor: "from-[#E4405F]/10 to-[#C13584]/5",
    borderColor: "hover:border-[#E4405F]/30",
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
                  className={`p-6 transition-all duration-300 ${profile.borderColor}`}
                  glow
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${profile.bgColor} border border-white/10`}
                    >
                      <profile.icon className={`h-6 w-6 ${profile.color}`} />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-white/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/60" />
                  </div>

                  <h3 className="mt-4 font-display text-lg font-semibold text-white">
                    {profile.name}
                  </h3>
                  <p className="mt-1 font-mono text-sm text-accent-cyan">
                    @{profile.username}
                  </p>
                  <p className="mt-3 text-sm text-white/50">{profile.stats}</p>

                  <div className="mt-4 flex items-center gap-1 text-xs text-white/40 transition-colors group-hover:text-accent-cyan">
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
