import useScrollReveal from "./useScrollReveal";

export default function LandingSectionHeader({ eyebrow, title, desc }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`max-w-3xl scroll-reveal ${isVisible ? "is-visible" : ""}`}
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/18 bg-[var(--color-accent)]/8 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-40" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
        </span>
        {eyebrow}
      </div>
      <h2 className="font-display mt-3 max-w-4xl text-[2rem] font-semibold leading-[1.02] sm:text-[2.4rem]">
        <span className="animate-gradient-shimmer bg-[linear-gradient(135deg,var(--color-text-primary),var(--color-accent),var(--color-text-primary))] bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--color-text-secondary)] sm:text-[15px]">
        {desc}
      </p>
      <div className="mt-4 flex items-center gap-3">
        <div className="landing-glow-line h-px flex-1 bg-gradient-to-r from-transparent via-[var(--color-accent)]/22 to-transparent" />
        <div className="hidden sm:flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/74 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
          Dynamic landing system
        </div>
      </div>
    </div>
  );
}
