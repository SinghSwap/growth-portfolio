"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

function format(n: number) {
  if (n >= 1000) {
    // 60000 -> 60K, 1500 -> 1.5K
    const k = n / 1000;
    return (Number.isInteger(k) ? k.toString() : k.toFixed(1)) + "K";
  }
  return Math.round(n).toString();
}

export function Counter({
  value,
  prefix = "",
  suffix = "",
  compact = true,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  compact?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value]);

  const text = compact ? format(display) : Math.round(display).toLocaleString();

  return (
    <span ref={ref}>
      {prefix}
      {text}
      {suffix}
    </span>
  );
}
