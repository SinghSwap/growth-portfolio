"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import {
  ChevronDown,
  ArrowUpRight,
  MessageSquareQuote,
  Share2,
  Search,
  Check,
} from "lucide-react";
import { selectedWork } from "@/lib/data";
import { SectionHeading } from "./ui/section-heading";
import { Reveal } from "./ui/reveal";

const icons = [MessageSquareQuote, Share2, Search];
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function SelectedWork() {
  const [open, setOpen] = useState<string | null>(selectedWork[0].id);

  return (
    <section
      id="selected-work"
      className="relative mx-auto w-full max-w-5xl px-6 py-20 md:py-28"
    >
      <SectionHeading
        eyebrow="Proof of work"
        title="Selected Work"
        intro="Public, shipped work across customer stories, organic social, and website & SEO."
      />

      <div className="flex flex-col gap-4">
        {selectedWork.map((item, i) => {
          const Icon = icons[i % icons.length];
          const isOpen = open === item.id;
          return (
            <Reveal key={item.id} delay={i * 0.05}>
              <div className="card overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 p-5 text-left md:p-6"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--accent-2),var(--accent))] text-white">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="min-w-0 flex-1 text-base font-semibold text-foreground">
                    {item.category}
                  </h3>
                  <ChevronDown
                    className={`size-5 shrink-0 text-muted-2 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-[var(--border)] p-5 md:p-6">
                        <p className="text-sm leading-relaxed text-muted">
                          {item.overview}
                        </p>

                        <div className="mt-6 grid gap-6 sm:grid-cols-2">
                          <div>
                            <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-muted-2">
                              What I did
                            </p>
                            <ul className="space-y-2">
                              {item.contributions.map((c, j) => (
                                <li
                                  key={j}
                                  className="flex gap-2.5 text-sm leading-relaxed text-muted"
                                >
                                  <Check className="mt-0.5 size-4 shrink-0 text-accent-3" />
                                  <span>{c}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-muted-2">
                              Impact
                            </p>
                            <ul className="space-y-2">
                              {item.impact.map((c, j) => (
                                <li
                                  key={j}
                                  className="flex gap-2.5 text-sm leading-relaxed text-muted"
                                >
                                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                                  <span>{c}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-6">
                          <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-muted-2">
                            Public work
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {item.links.map((link) => (
                              <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-1.5 rounded-full border border-[var(--border-strong)] bg-surface-2 px-3 py-1.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent-3"
                              >
                                {link.label}
                                <ArrowUpRight className="size-3.5 text-muted-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
