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
        "relative flex items-center justify-center overflow-hidden rounded-t-card bg-surface-alt",
        tall ? "h-56 sm:h-64" : "h-48 sm:h-52"
      )}
    >
      <div className="absolute inset-0 opacity-40">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`grid-${project.id}`} width="24" height="24" patternUnits="userSpaceOnUse">
              <path
                d="M 24 0 L 0 0 0 24"
                fill="none"
                stroke="rgba(0,0,0,0.04)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${project.id})`} />
        </svg>
      </div>
      <div className="relative z-10">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-surface shadow-card">
          <Icon className="h-10 w-10 text-text-tertiary" />
        </div>
      </div>
      {project.metrics.length > 0 && (
        <div className="absolute bottom-3 left-3 right-3 flex gap-2">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex-1 rounded-badge border border-border bg-surface/90 px-2 py-1.5 text-center backdrop-blur-sm"
            >
              <p className="text-xs font-bold text-accent">{metric.value}</p>
              <p className="text-[10px] text-text-tertiary">{metric.label}</p>
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
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-card border border-border bg-surface p-6 shadow-card-lg sm:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface-alt text-text-tertiary transition-colors hover:text-text-primary"
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-alt">
              <Icon className="h-6 w-6 text-accent" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-display text-2xl font-bold text-text-primary">
                  {project.title}
                </h3>
                {project.featured && (
                  <span className="inline-flex items-center gap-1 rounded-badge border border-accent/20 bg-accent-light px-2 py-0.5 text-xs font-medium text-accent">
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

          <p className="mt-6 text-base leading-relaxed text-text-secondary">
            {project.description}
          </p>

          <div className="mt-6">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-tertiary">
              Highlights
            </h4>
            <div className="grid gap-2 sm:grid-cols-2">
              {project.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-2 rounded-badge border border-border bg-surface-alt px-3 py-2"
                >
                  <Zap className="h-3.5 w-3.5 shrink-0 text-accent" />
                  <span className="text-sm text-text-secondary">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {project.metrics.length > 0 && (
            <div className="mt-6">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-tertiary">
                Benchmark Results
              </h4>
              <div className="flex flex-wrap gap-4">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex items-center gap-3 rounded-card border border-accent/20 bg-accent-subtle px-4 py-3"
                  >
                    <Clock className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-display text-lg font-bold text-accent">
                        {metric.value}
                      </p>
                      <p className="text-xs text-text-tertiary">{metric.label}</p>
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
        featured && "border-accent/15"
      )}
      glow
    >
      <ProjectIllustration project={project} tall={featured} />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-display text-xl font-bold text-text-primary">
            {project.title}
          </h3>
          {featured && (
            <span className="inline-flex items-center gap-1 rounded-badge border border-accent/20 bg-accent-light px-2 py-0.5 text-xs font-medium text-accent">
              <Star className="h-3 w-3" />
              Flagship
            </span>
          )}
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-tertiary">
          {featured
            ? project.description
            : `${project.description.slice(0, 120)}...`}
        </p>

        {featured && project.metrics.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-3">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-badge border border-accent/15 bg-accent-subtle px-3 py-2"
              >
                <p className="text-sm font-bold text-accent">{metric.value}</p>
                <p className="text-[10px] text-text-tertiary">{metric.label}</p>
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
