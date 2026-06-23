"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Download,
  Send,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { SectionHeading, GlassCard, Button } from "@/components/ui";
import { FadeIn } from "@/components/ui/animations";
import { siteConfig, socialLinks } from "@/lib/data";

export function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const mailtoLink = `mailto:${siteConfig.email}?subject=Portfolio Contact from ${encodeURIComponent(formState.name)}&body=${encodeURIComponent(
      `From: ${formState.name} (${formState.email})\n\n${formState.message}`
    )}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    }, 500);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-accent-purple/5 to-transparent" />

      <div className="section-container relative">
        <FadeIn>
          <SectionHeading
            label="Contact"
            title="Get in Touch"
            description="Want to connect? Feel free to reach out via email or LinkedIn"
          />
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-5">
          <FadeIn direction="left" className="lg:col-span-3">
            <GlassCard className="p-6 sm:p-8" glow>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/70">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 transition-colors focus:border-accent-cyan/50 focus:outline-none focus:ring-1 focus:ring-accent-cyan/30"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/70">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 transition-colors focus:border-accent-cyan/50 focus:outline-none focus:ring-1 focus:ring-accent-cyan/30"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/70">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 transition-colors focus:border-accent-cyan/50 focus:outline-none focus:ring-1 focus:ring-accent-cyan/30"
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button type="submit" variant="primary" size="lg" className="flex-1" disabled={loading}>
                    {submitted ? (
                      <>
                        <CheckCircle className="h-4 w-4" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        {loading ? "Sending..." : "Send Message"}
                      </>
                    )}
                  </Button>
                  <Button href={siteConfig.resumeUrl} variant="secondary" size="lg" external>
                    <Download className="h-4 w-4" />
                    Download Resume
                  </Button>
                </div>
              </form>
            </GlassCard>
          </FadeIn>

          <FadeIn direction="right" delay={0.2} className="lg:col-span-2">
            <div className="space-y-4">
              <GlassCard className="p-6">
                <h3 className="font-display text-lg font-semibold text-white">
                  Direct Contact
                </h3>
                <div className="mt-4 space-y-4">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 text-white/60 transition-colors hover:text-accent-cyan"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <Mail className="h-4 w-4 text-accent-cyan" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40">Email</p>
                      <p className="text-sm">{siteConfig.email}</p>
                    </div>
                  </a>

                  <a
                    href={socialLinks.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/60 transition-colors hover:text-accent-cyan"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <Linkedin className="h-4 w-4 text-[#0A66C2]" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40">LinkedIn</p>
                      <p className="text-sm">@{socialLinks.linkedin.username}</p>
                    </div>
                  </a>

                  <a
                    href={socialLinks.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/60 transition-colors hover:text-accent-cyan"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                      <Github className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40">GitHub</p>
                      <p className="text-sm">@{socialLinks.github.username}</p>
                    </div>
                  </a>
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent-purple" />
                  <div>
                    <p className="text-sm font-medium text-white">
                      IIT Jodhpur
                    </p>
                    <p className="text-xs text-white/40">
                       Rajasthan, India
                    </p>
                  </div>
                </div>
              </GlassCard>

              <motion.div
                className="rounded-2xl border border-accent-cyan/20 bg-accent-cyan/5 p-6"
                whileHover={{ scale: 1.01 }}
              >
                <p className="text-sm leading-relaxed text-white/60">
                  "It ain't about how hard you hit. It's about how hard you can get hit and keep moving forward."
                </p>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
