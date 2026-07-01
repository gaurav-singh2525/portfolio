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
    <section id="contact" className="section-padding relative bg-surface-alt">
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
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-secondary">
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
                    className="w-full rounded-button border border-border bg-surface px-4 py-3 text-text-primary placeholder-text-tertiary transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-secondary">
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
                    className="w-full rounded-button border border-border bg-surface px-4 py-3 text-text-primary placeholder-text-tertiary transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-text-secondary">
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
                    className="w-full resize-none rounded-button border border-border bg-surface px-4 py-3 text-text-primary placeholder-text-tertiary transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30"
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
                <h3 className="font-display text-lg font-semibold text-text-primary">
                  Direct Contact
                </h3>
                <div className="mt-4 space-y-4">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 text-text-secondary transition-colors hover:text-accent"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-alt">
                      <Mail className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-text-tertiary">Email</p>
                      <p className="text-sm">{siteConfig.email}</p>
                    </div>
                  </a>

                  <a
                    href={socialLinks.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-text-secondary transition-colors hover:text-accent"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-alt">
                      <Linkedin className="h-4 w-4 text-[#0A66C2]" />
                    </div>
                    <div>
                      <p className="text-xs text-text-tertiary">LinkedIn</p>
                      <p className="text-sm">@{socialLinks.linkedin.username}</p>
                    </div>
                  </a>

                  <a
                    href={socialLinks.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-text-secondary transition-colors hover:text-accent"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-alt">
                      <Github className="h-4 w-4 text-text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-text-tertiary">GitHub</p>
                      <p className="text-sm">@{socialLinks.github.username}</p>
                    </div>
                  </a>
                </div>
              </GlassCard>

              <GlassCard className="p-6">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      IIT Jodhpur
                    </p>
                    <p className="text-xs text-text-tertiary">
                       Rajasthan, India
                    </p>
                  </div>
                </div>
              </GlassCard>

              <motion.div
                className="rounded-card border border-accent/15 bg-accent-subtle p-6"
                whileHover={{ scale: 1.01 }}
              >
                <p className="text-sm leading-relaxed text-text-secondary">
                  &ldquo;It ain&apos;t about how hard you hit. It&apos;s about how hard you can get hit and keep moving forward.&rdquo;
                </p>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
