"use client";

import { useEffect, useState } from "react";
import { m } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { nav, site } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <m.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-3"
    >
      <nav
        className={`flex items-center gap-1 rounded-full px-2 py-2 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(14,14,20,0.82)] backdrop-blur-md border border-[var(--border)] shadow-[0_10px_40px_-20px_#000]"
            : "bg-transparent border border-transparent"
        }`}
      >
        <a
          href="#top"
          className="px-4 py-1.5 text-sm font-semibold tracking-tight text-foreground"
        >
          {site.name}
        </a>
        <div className="hidden md:flex items-center">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 text-sm text-muted hover:text-foreground transition-colors rounded-full"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href={site.resume}
          download
          className="ml-1 inline-flex items-center gap-1 rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background hover:opacity-90 transition-opacity"
        >
          Resume
          <ArrowUpRight className="size-3.5" />
        </a>
      </nav>
    </m.header>
  );
}
