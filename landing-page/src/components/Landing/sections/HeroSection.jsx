import { ArrowRight, Sparkles } from "lucide-react";
import settingsPng from "../svg/Setting.png";

const stats = [
  { value: "4", label: "AI Engines" },
  { value: "100+", label: "Models" },
  { value: "40+", label: "Dev Tools" },
  { value: "30+", label: "Integrations" },
];

export default function HeroSection({ onJoinWaitlist }) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pt-24 pb-16 sm:px-8">
      {/* Background gradient accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/8 blur-[120px]" />
        <div className="absolute top-40 right-0 h-[400px] w-[400px] rounded-full bg-indigo-500/6 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Eyebrow */}
        <div className="animate-fade-rise mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
          <Sparkles size={12} />
          AI Developer Workspace
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-rise font-display text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[1.02] tracking-tight"
          style={{ animationDelay: "0.1s" }}
        >
          One workspace.
          <br />
          <span className="animate-gradient-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
            Prompt to PR.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="animate-fade-rise mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)] sm:text-xl"
          style={{ animationDelay: "0.2s" }}
        >
          4 engines. 100+ models. 7-step pipeline. Parse, implement, review,
          auto-fix, test, commit, and ship — all from a single prompt.
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-rise mt-10 flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "0.3s" }}
        >
          <button
            onClick={onJoinWaitlist}
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_-16px_rgba(37,99,235,0.5)] transition-all hover:scale-[1.03] hover:shadow-[0_20px_50px_-16px_rgba(37,99,235,0.6)]"
          >
            Join Waitlist
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </button>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-text-secondary)] transition-all hover:border-[var(--color-accent)]/30 hover:text-[var(--color-text-primary)]"
          >
            See how it works →
          </a>
        </div>

        {/* Stats strip */}
        <div
          className="animate-fade-rise mx-auto mt-14 flex max-w-lg flex-wrap justify-center gap-8"
          style={{ animationDelay: "0.4s" }}
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-2xl font-bold text-[var(--color-text-primary)]">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-[var(--color-text-muted)]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Screenshot showcase */}
      <div
        className="animate-fade-rise relative z-10 mx-auto mt-16 w-full max-w-5xl"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.3)]">
          {/* Glow behind */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-500/5 to-transparent" />
          <img
            src={settingsPng}
            alt="ShipIt Settings — workspace configuration"
            className="w-full object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
