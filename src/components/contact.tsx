"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/data";

function Linkedin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

const channels = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone}` },
  { icon: Linkedin, label: "LinkedIn", value: "Connect", href: site.linkedin, external: true },
];

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto w-full max-w-4xl px-6 py-24 md:py-32">
      <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-surface p-10 text-center md:p-16">
        <div className="pointer-events-none absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-accent/25 blur-[100px]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Let&apos;s build your <span className="gradient-text">growth engine</span>.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted">
            Hiring for growth, lifecycle, or content? I&apos;d love to talk.
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-background px-4 py-4 text-sm transition-colors hover:border-[var(--border-strong)] hover:bg-surface-2"
              >
                <c.icon className="size-4 text-accent-3" />
                <span className="text-foreground">{c.value}</span>
                <ArrowUpRight className="size-3.5 text-muted-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
