"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { achievements } from "@/lib/data";
import { SectionHeading } from "./ui/section-heading";

export function Achievements() {
  return (
    <section id="work" className="relative mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Featured work"
        title="Highlights that moved the needle"
        intro="A few outcomes, built from scratch and shipped end to end."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <motion.article
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group card card-hover relative flex flex-col p-6"
          >
            <ArrowUpRight className="absolute right-5 top-5 size-4 text-muted-2 transition-colors group-hover:text-accent" />
            <span className="w-fit rounded-full border border-[var(--border)] bg-[rgba(139,92,246,0.08)] px-3 py-1 text-sm font-mono font-medium text-accent-3">
              {a.metric}
            </span>
            <h3 className="mt-4 text-base font-semibold text-foreground">{a.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{a.detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
