import { about } from "@/lib/data";
import { Reveal } from "./ui/reveal";

export function About() {
  return (
    <section className="relative mx-auto w-full max-w-4xl px-6 py-16 md:py-20">
      <Reveal>
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-5">
          About
        </p>
        <p className="text-2xl font-medium leading-snug tracking-tight text-foreground md:text-3xl">
          {about.map((line, i) => (
            <span key={i} className={i === 0 ? "" : "text-muted"}>
              {line}{" "}
            </span>
          ))}
        </p>
      </Reveal>
    </section>
  );
}
