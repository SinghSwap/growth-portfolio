import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      {intro ? (
        <p className="mt-3 max-w-xl text-muted text-sm md:text-base">{intro}</p>
      ) : null}
    </Reveal>
  );
}
