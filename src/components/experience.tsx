"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Briefcase, Check } from "lucide-react";
import { experience } from "@/lib/data";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";

export function Experience() {
  const [active, setActive] = useState(experience.tabs[0].id);
  const current = experience.tabs.find((t) => t.id === active)!;

  return (
    <section id="experience" className="relative mx-auto w-full max-w-5xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Experience"
        title="Full-funnel growth, owned end to end"
        intro="Nearly four years at Fynd (by Reliance) — five disciplines, one operator, measurable outcomes."
      />

      <Reveal>
        <div className="card overflow-hidden">
          {/* Header */}
          <div className="flex flex-col gap-4 border-b border-[var(--border)] p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
            <div className="flex items-start gap-4">
              <div className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--accent-2),var(--accent))] text-white">
                <Briefcase className="size-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {experience.role}
                </h3>
                <p className="text-sm text-muted">
                  {experience.company}{" "}
                  <span className="text-muted-2">· {experience.parent}</span>
                </p>
                <p className="mt-1 text-xs text-muted-2">{experience.note}</p>
              </div>
            </div>
            <span className="shrink-0 rounded-full border border-[var(--border)] px-3 py-1 text-xs font-mono text-muted">
              {experience.period}
            </span>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-1.5 border-b border-[var(--border)] p-3 md:px-6">
            {experience.tabs.map((tab) => {
              const isActive = tab.id === active;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-white" : "text-muted hover:text-foreground"
                  }`}
                >
                  <span
                    className={`absolute inset-0 rounded-full bg-[linear-gradient(100deg,var(--accent-2),var(--accent))] transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <AnimatePresence mode="wait">
              <m.ul
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="grid gap-3 sm:grid-cols-2"
              >
                {current.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent-3" />
                    <span>{b}</span>
                  </li>
                ))}
              </m.ul>
            </AnimatePresence>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
