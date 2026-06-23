"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.slice(1));
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-300 sm:px-6",
          scrolled
            ? "glass rounded-2xl border border-white/10 px-6 py-3 shadow-glass"
            : "px-4 py-0"
        )}
      >
        <a
          href="#home"
          className="flex items-center gap-2 font-display text-lg font-bold text-white"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 border border-accent-cyan/30">
            <Terminal className="h-4 w-4 text-accent-cyan" />
          </span>
          <span className="hidden sm:inline"></span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200",
                  activeSection === link.href.slice(1)
                    ? "text-accent-cyan"
                    : "text-white/60 hover:text-white"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-xl border border-accent-cyan/30 bg-accent-cyan/10 px-4 py-2 text-sm font-medium text-accent-cyan transition-all hover:bg-accent-cyan/20 md:inline-flex"
        >
          Get in Touch
        </a>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="glass mx-4 mt-2 rounded-2xl border border-white/10 p-4 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                      activeSection === link.href.slice(1)
                        ? "bg-accent-cyan/10 text-accent-cyan"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 border-t border-white/10 pt-2">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl bg-accent-cyan/10 px-4 py-3 text-center text-sm font-medium text-accent-cyan"
                >
                  Get in Touch
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
