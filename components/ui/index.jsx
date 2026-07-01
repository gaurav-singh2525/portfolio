"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className = "",
  hover = true,
  glow = false,
  ...props
}) {
  return (
    <motion.div
      className={cn(
        "card",
        hover && "card-hover",
        className
      )}
      whileHover={hover ? { y: -2 } : undefined}
      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  onClick,
  type = "button",
  external = false,
  ...props
}) {
  const variants = {
    primary:
      "bg-accent text-white border-accent hover:bg-accent-hover hover:border-accent-hover",
    secondary:
      "bg-surface text-text-primary border-border hover:bg-surface-alt hover:border-border-strong",
    ghost:
      "bg-transparent border-transparent text-text-secondary hover:text-text-primary hover:bg-surface-alt",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
  };

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-button border font-medium transition-all duration-200",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export function Badge({ children, className = "", color = "cyan" }) {
  const colors = {
    cyan: "bg-accent-light text-accent border-accent/15",
    purple: "bg-accent-light text-accent border-accent/15",
    green: "bg-accent-light text-accent border-accent/15",
    neutral: "bg-surface-alt text-text-secondary border-border",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-badge border px-2.5 py-1 text-xs font-medium",
        colors[color],
        className
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({ label, title, description, className = "" }) {
  return (
    <div className={cn("mb-16 text-center md:mb-20", className)}>
      {label && (
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
          {label}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
