"use client";

import { m, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";
import { useRef } from "react";

export function MagneticButton({
  children,
  href,
  variant = "primary",
  download,
  external,
  className = "",
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  download?: boolean;
  external?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  function onMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const mx = e.clientX - (rect.left + rect.width / 2);
    const my = e.clientY - (rect.top + rect.height / 2);
    x.set(mx * 0.25);
    y.set(my * 0.35);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 select-none";
  const styles =
    variant === "primary"
      ? "text-white bg-[linear-gradient(100deg,var(--accent-2),var(--accent))] shadow-[0_8px_30px_-8px_var(--accent)] hover:shadow-[0_10px_40px_-6px_var(--accent)]"
      : "text-foreground bg-surface border border-[var(--border-strong)] hover:bg-surface-2";

  return (
    <m.a
      ref={ref}
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </m.a>
  );
}
