"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  X,
  Database,
  Layers,
  Terminal,
  Zap,
  Clock,
  Star,
} from "lucide-react";
import { SectionHeading, GlassCard, Badge, Button } from "@/components/ui";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/animations";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const projectIcons = {
  database: Database,
  layers: Layers,
  terminal: Terminal,
};

function ProjectIllustration({ project, tall = false }) {
  const Icon = projectIcons[project.icon] || Database;

  return (
    <div
      className={cn(
        `relative flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${project.gradient}`,
        tall ? "h-56 sm:h-64" : "h-48 sm:h-52"
      )}
    >
      <div className="absolute inset-0 opacity-30">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`grid-${project.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${project.id})`} />
        </svg>
      </div>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm">
          <Icon className="h-10 w-10 text-white/80" />
        </div>
      </motion.div>
      {project.metrics.length > 0 && (
        <div className="absolute bottom-3 left-3 right-3 flex gap-2">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex-1 rounded-lg border border-white/10 bg-black/30 px-2 py-1.5 text-center backdrop-blur-sm"
            >
              <p className="text-xs font-bold text-accent-cyan">{metric.value}</p>
              <p className="text-[10px] text-white/50">{metric.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  const Icon = projectIcons[project.icon] || Database;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="glass relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 p-6 sm:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition-colors hover:text-white"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
              <Icon className="h-6 w-6 text-accent-cyan" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-display text-2xl font-bold text-white">
                  {project.title}
                </h3>
                {project.featured && (
                  <span className="inline-flex items-center gap-1 rounded-lg border border-accent-cyan/30 bg-accent-cyan/10 px-2 py-0.5 text-xs font-medium text-accent-cyan">
                    <Star className="h-3 w-3" />
                    Flagship
                  </span>
                )}
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t} color="cyan">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-6 text-base leading-relaxed text-white/60">
            {project.description}
          </p>

          <div className="mt-6">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/40">
              Highlights
            </h4>
            <div className="grid gap-2 sm:grid-cols-2">
              {project.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2"
                >
                  <Zap className="h-3.5 w-3.5 shrink-0 text-accent-green" />
                  <span className="text-sm text-white/70">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {project.metrics.length > 0 && (
            <div className="mt-6">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/40">
                Benchmark Results
              </h4>
              <div className="flex flex-wrap gap-4">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex items-center gap-3 rounded-xl border border-accent-cyan/20 bg-accent-cyan/5 px-4 py-3"
                  >
                    <Clock className="h-5 w-5 text-accent-cyan" />
                    <div>
                      <p className="font-display text-lg font-bold text-accent-cyan">
                        {metric.value}
                      </p>
                      <p className="text-xs text-white/50">{metric.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={project.github} variant="primary" external>
              <Github className="h-4 w-4" />
              View on GitHub
            </Button>
            <Button onClick={onClose} variant="secondary">
              Close
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectCard({ project, featured = false, onSelect }) {
  return (
    <GlassCard
      className={cn(
        "group flex h-full flex-col overflow-hidden",
        featured && "border-accent-cyan/20"
      )}
      glow
    >
      <ProjectIllustration project={project} tall={featured} />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-display text-xl font-bold text-white">
            {project.title}
          </h3>
          {featured && (
            <span className="inline-flex items-center gap-1 rounded-lg border border-accent-cyan/30 bg-accent-cyan/10 px-2 py-0.5 text-xs font-medium text-accent-cyan">
              <Star className="h-3 w-3" />
              Flagship
            </span>
          )}
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-white/50">
          {featured
            ? project.description
            : `${project.description.slice(0, 120)}...`}
        </p>

        {featured && project.metrics.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-3">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-accent-cyan/20 bg-accent-cyan/5 px-3 py-2"
              >
                <p className="text-sm font-bold text-accent-cyan">{metric.value}</p>
                <p className="text-[10px] text-white/40">{metric.label}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, featured ? 6 : 4).map((t) => (
            <Badge key={t} color="neutral">
              {t}
            </Badge>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <Button
            variant="primary"
            size="sm"
            className="flex-1"
            onClick={() => onSelect(project)}
          >
            <ExternalLink className="h-3.5 w-3.5" />
            View Details
          </Button>
          <Button
            href={project.github}
            variant="secondary"
            size="sm"
            external
            aria-label={`${project.title} on GitHub`}
          >
            <Github className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </GlassCard>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const flagship = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="section-padding relative">
      <div className="section-container">
        <FadeIn>
          <SectionHeading
            label="Featured Projects"
            title="System Projects I've Built"
            description="Hands-on backend and system projects — exploring sockets, concurrency, distributed queues, and real-time applications."
          />
        </FadeIn>

        {flagship && (
          <FadeIn delay={0.1}>
            <div className="mb-6">
              <ProjectCard
                project={flagship}
                featured
                onSelect={setSelectedProject}
              />
            </div>
          </FadeIn>
        )}

        <StaggerContainer className="grid gap-6 sm:grid-cols-2">
          {otherProjects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} onSelect={setSelectedProject} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
