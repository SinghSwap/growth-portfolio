"use client";

import { m } from "framer-motion";
import { impact } from "@/lib/data";
import { Counter } from "./ui/counter";

export function Impact() {
  return (
    <section id="impact" className="relative mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {impact.map((stat, i) => (
          <m.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="card card-hover p-6 md:p-7"
          >
            <div className="text-4xl font-semibold tracking-tight md:text-5xl gradient-text">
              <Counter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                compact={stat.compact}
              />
            </div>
            <p className="mt-3 text-sm font-medium text-foreground">{stat.label}</p>
            <p className="mt-1 text-xs text-muted-2">{stat.sub}</p>
          </m.div>
        ))}
      </div>
    </section>
  );
}
