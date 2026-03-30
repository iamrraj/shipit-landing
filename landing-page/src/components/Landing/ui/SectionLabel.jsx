/**
 * Reusable section header: eyebrow label + heading + optional description.
 * Apple-style: uppercase eyebrow, massive heading, muted description.
 */
export default function SectionLabel({
  eyebrow,
  heading,
  description,
  align = "left",
  light = false,
}) {
  const textAlign = align === "center" ? "text-center" : "text-left";
  const maxW = align === "center" ? "mx-auto max-w-3xl" : "max-w-2xl";

  return (
    <div className={`${textAlign} ${maxW} mb-12`}>
      {eyebrow && (
        <span
          className={`mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] ${
            light
              ? "text-blue-400"
              : "text-[var(--color-accent)]"
          }`}
        >
          {eyebrow}
        </span>
      )}
      {heading && (
        <h2
          className={`font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] ${
            light
              ? "text-white"
              : "text-[var(--color-text-primary)]"
          }`}
        >
          {heading}
        </h2>
      )}
      {description && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            light
              ? "text-white/50"
              : "text-[var(--color-text-secondary)]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
