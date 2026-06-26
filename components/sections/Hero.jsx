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
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70 backdrop-blur-sm">
              <GraduationCap className="h-3.5 w-3.5 text-accent-cyan" />
              IIT Jodhpur · B.Tech EE
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none tracking-[-0.04em]">
              <span className="text-white">GAURAV</span>
              <br />
              <span className="text-neutral-400">SINGH</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="mx-auto mt-6 max-w-2xl font-display text-lg font-medium text-white/80 sm:text-xl md:text-2xl">
              Love{" "}
              <span className="text-accent-cyan">
                exploring new technologies
              </span>{" "}
              and constantly learning through{" "}
              <span className="text-accent-purple">curiosity </span>, and{" "}
              <span className="text-accent-green">experimentation.</span>
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/50 sm:text-lg">
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
                    className="glass flex items-center gap-2 rounded-xl px-4 py-2.5"
                  >
                    <Icon className="h-4 w-4 text-accent-cyan" />
                    <span className="text-sm font-medium text-white/80">
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
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-white/30 transition-colors hover:text-white/60"
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
