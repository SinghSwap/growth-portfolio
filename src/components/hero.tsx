"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { site } from "@/lib/data";
import { MagneticButton } from "./ui/magnetic-button";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      <div className="aurora" />
      <div className="absolute inset-0 grid-overlay" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex max-w-3xl flex-col items-center"
      >
        <motion.div variants={item} className="mb-7">
          <div className="relative mx-auto size-28 sm:size-32">
            <div className="absolute -inset-1 rounded-full bg-[conic-gradient(from_180deg,var(--accent-3),var(--accent),var(--accent-2),var(--accent-3))] opacity-70 blur-[6px]" />
            <div className="absolute -inset-px rounded-full bg-[linear-gradient(135deg,var(--accent-3),var(--accent-2))]" />
            {/* Initials fallback — shows if the photo is missing */}
            <div className="absolute inset-0 flex items-center justify-center rounded-full border-2 border-[var(--background)] bg-[linear-gradient(135deg,var(--surface-2),var(--surface))] text-2xl font-semibold text-foreground">
              SS
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={site.photo}
              alt={`${site.name} — ${site.role}`}
              className="relative size-full rounded-full border-2 border-[var(--background)] object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.03)] px-4 py-1.5 text-xs text-muted"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          Open to growth marketing roles
          <span className="mx-1 text-muted-2">·</span>
          <MapPin className="size-3" />
          {site.location}
        </motion.div>

        <motion.h1
          variants={item}
          className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          {site.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 text-lg font-medium sm:text-xl gradient-text"
        >
          {site.role}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-balance text-base text-muted sm:text-lg"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <MagneticButton href="#experience" variant="primary">
            View Experience
          </MagneticButton>
          <MagneticButton href={site.resume} variant="secondary" download>
            <Download className="size-4" />
            Download Resume
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.a
        href="#impact"
        aria-label="Scroll to impact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-8 z-10 text-muted-2 hover:text-foreground transition-colors"
      >
        <ArrowDown className="size-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
