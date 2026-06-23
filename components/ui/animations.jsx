"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.5,
}) {
  const directions = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { x: 24, y: 0 },
    right: { x: -24, y: 0 },
    none: { x: 0, y: 0 },
  };

  const offset = directions[direction] || directions.up;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className = "", stagger = 0.1 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

function CountUp({ value, duration }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const end = value;
    const startTime = performance.now();
    const ms = duration * 1000;

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / ms, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(end * eased);
      setDisplay(current);
      if (progress < 1) requestAnimationFrame(tick);
      else setDisplay(end);
    };

    requestAnimationFrame(tick);
  }, [value, duration]);

  return <>{display.toLocaleString()}</>;
}

export function Counter({ value, suffix = "", duration = 2 }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <CountUp value={value} duration={duration} />
      {suffix}
    </motion.span>
  );
}
