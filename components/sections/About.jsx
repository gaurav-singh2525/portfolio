"use client";

import { Cpu, Server, Network, Layers } from "lucide-react";
import { SectionHeading, GlassCard } from "@/components/ui";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/animations";
import { aboutTimeline, siteConfig } from "@/lib/data";

const interests = [
  {
    icon: Server,
    title: "Backend Engineering",
    description:
      "Learning to design APIs, services, and data layers through hands-on projects.",
  },
  {
    icon: Cpu,
    title: "Systems Programming",
    description:
      "C/C++ development — sockets, memory management, thread pools, and performance.",
  },
  {
    icon: Network,
    title: "Distributed Systems",
    description:
      "Exploring fault tolerance, job queues, coordination, and service architecture.",
  },
  {
    icon: Layers,
    title: "Concurrency & Networking",
    description:
      "Multithreading, synchronization primitives, TCP/IP, and parallel processing.",
  },
];

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="section-container">
        <FadeIn>
          <SectionHeading
            label="About"
            title="Student, Learner, Problem Solver"
            description="Music | Coding | Movies | Exploring Places"
          />
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn direction="left">
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
                I&apos;m a 3rd-year Electrical Engineering student at{" "}
                <span className="text-accent font-medium">IIT Jodhpur</span> (Batch
                2024–2028) with a strong interest in software development —
                especially backend systems, systems programming, and distributed
                systems.
              </p>
              <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
                Outside of coding, you'll usually find me listening to music,
                watching story-driven movies, exploring new places, or playing
                badminton. I enjoy discovering new experiences, meeting
                different people, and learning from the stories and perspectives
                they bring.
              </p>
              <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
                I&apos;m looking forward to get opportunities to work with
                experienced engineers where I can learn from them and contribute
                to real world projects.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {interests.map((item) => (
                <StaggerItem key={item.title}>
                  <GlassCard className="p-5" glow>
                    <item.icon className="mb-3 h-5 w-5 text-accent" />
                    <h3 className="mb-1 font-display text-sm font-semibold text-text-primary">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-text-tertiary">
                      {item.description}
                    </p>
                  </GlassCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-16">
            <h3 className="mb-8 text-center font-display text-xl font-semibold text-text-primary">
              Journey
            </h3>
            <div className="relative">
              <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-border-strong via-border to-transparent md:left-1/2 md:block md:-translate-x-px" />

              <div className="space-y-8">
                {aboutTimeline.map((item, index) => (
                  <FadeIn key={item.year + item.title} delay={index * 0.1}>
                    <div
                      className={`relative flex flex-col gap-4 md:flex-row ${
                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="hidden md:block md:w-1/2" />
                      <div
                        className={`md:w-1/2 ${
                          index % 2 === 0
                            ? "md:pr-12 md:text-right"
                            : "md:pl-12"
                        }`}
                      >
                        <GlassCard className="p-6">
                          <span className="text-sm font-semibold text-accent">
                            {item.year}
                          </span>
                          <h4 className="mt-1 font-display text-lg font-semibold text-text-primary">
                            {item.title}
                          </h4>
                          <p className="mt-2 text-sm leading-relaxed text-text-tertiary">
                            {item.description}
                          </p>
                        </GlassCard>
                      </div>
                      <div className="absolute left-4 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-background md:left-1/2 md:block" />
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
