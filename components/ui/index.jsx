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
        "glass rounded-2xl",
        hover && "glass-hover",
        glow && "hover:shadow-glow",
        className
      )}
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
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
      "bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 border-accent-cyan/30 text-white hover:from-accent-cyan/30 hover:to-accent-purple/30 hover:shadow-glow hover:border-accent-cyan/50",
    secondary:
      "bg-white/5 border-white/10 text-white/90 hover:bg-white/10 hover:border-white/20",
    ghost:
      "bg-transparent border-transparent text-white/70 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
  };

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl border font-medium transition-all duration-300",
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
    cyan: "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20",
    purple: "bg-accent-purple/10 text-accent-purple border-accent-purple/20",
    green: "bg-accent-green/10 text-accent-green border-accent-green/20",
    neutral: "bg-white/5 text-white/70 border-white/10",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border px-2.5 py-1 text-xs font-medium",
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
    <div className={cn("mb-12 text-center md:mb-16", className)}>
      {label && (
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent-cyan/80">
          {label}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/60 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
