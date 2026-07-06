"use client";

import { m } from "framer-motion";
import { toolGroups, skills } from "@/lib/data";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";

export function Tools() {
  return (
    <section id="skills" className="relative mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Skills & stack"
        title="What I do, and what I do it with"
      />

      {/* Skill pills */}
      <Reveal className="mb-12">
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill, i) => (
            <m.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="rounded-full border border-[var(--border-strong)] bg-surface px-4 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent-3"
            >
              {skill}
            </m.span>
          ))}
        </div>
      </Reveal>

      {/* Tool groups */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {toolGroups.map((group, i) => (
          <m.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="card p-6"
          >
            <p className="text-xs font-mono uppercase tracking-[0.15em] text-muted-2">
              {group.category}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-lg bg-surface-2 px-3 py-1.5 text-sm text-muted"
                >
                  {tool}
                </span>
              ))}
            </div>
          </m.div>
        ))}
      </div>
    </section>
  );
}
