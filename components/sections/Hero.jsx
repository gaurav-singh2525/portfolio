"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Mail,
  FolderGit2,
  GraduationCap,
  Code2,
  Trophy,
  Database,
} from "lucide-react";
import { Button } from "@/components/ui";
import { GradientGlow, ParticleBackground } from "@/components/ui/background";
import { FadeIn } from "@/components/ui/animations";
import { heroStats, siteConfig } from "@/lib/data";

const statIcons = {
  graduation: GraduationCap,
  code: Code2,
  trophy: Trophy,
  database: Database,
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <GradientGlow />
      <ParticleBackground />

      <div className="section-container relative z-10 px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn delay={0.1}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-text-secondary shadow-card">
              <GraduationCap className="h-3.5 w-3.5 text-accent" />
              IIT Jodhpur · B.Tech EE
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none tracking-[-0.04em]">
              <span className="text-text-primary">Gaurav</span>
              <br />
              <span className="text-text-tertiary">Singh</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="mx-auto mt-6 max-w-2xl font-display text-lg font-medium text-text-secondary sm:text-xl md:text-2xl leading-relaxed">
              Love{" "}
              <span className="text-text-primary font-semibold">
                exploring new technologies
              </span>{" "}
              and constantly learning through{" "}
              <span className="text-text-primary font-semibold">curiosity</span>, and{" "}
              <span className="text-text-primary font-semibold">experimentation.</span>
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-text-tertiary sm:text-lg">
              I love to learn how real infrastructure works and built backend
              systems — from TCP sockets and thread pools in C++ to distributed
              job queues and real-time WebSocket applications.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {heroStats.map((stat) => {
                const Icon = statIcons[stat.icon] ?? Trophy;
                return (
                  <div
                    key={stat.label}
                    className="card flex items-center gap-2 rounded-full px-4 py-2.5"
                  >
                    <Icon className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium text-text-secondary">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="#projects" variant="primary" size="lg">
                <FolderGit2 className="h-4 w-4" />
                View Projects
              </Button>
              <Button
                href={siteConfig.resumeUrl}
                variant="secondary"
                size="lg"
                external
              >
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                <Mail className="h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </FadeIn>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-text-tertiary transition-colors hover:text-text-secondary"
            aria-label="Scroll to about section"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
