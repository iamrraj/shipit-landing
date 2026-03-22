import { ArrowRight, Sparkles, Zap } from "lucide-react";
import useScrollReveal from "../useScrollReveal";

export default function LandingFooterCTA({ onJoinWaitlist }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`scroll-reveal-scale mt-10 mb-16 ${isVisible ? "is-visible" : ""}`}
    >
      <div className="relative overflow-hidden rounded-[40px] border border-[var(--color-accent)]/20 bg-[linear-gradient(160deg,var(--color-surface),rgba(59,130,246,0.1),rgba(14,165,233,0.08),rgba(16,185,129,0.06))] p-8 shadow-[0_40px_90px_-50px_rgba(37,99,235,0.25)] backdrop-blur-xl sm:p-12">
        {/* Background decoration */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--color-accent)]/[0.06] blur-[60px]" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-indigo-500/[0.05] blur-[60px]" />
        <div className="absolute right-1/4 top-1/3 h-40 w-40 animate-morph-blob bg-gradient-to-br from-sky-500/[0.04] to-emerald-500/[0.03] blur-[40px]" />
        <div className="absolute left-[8%] top-[18%] h-48 w-48 rounded-full border border-[var(--color-accent)]/12" />
        <div className="absolute right-[10%] bottom-[14%] h-56 w-56 rounded-full border border-sky-400/10" />
        <div className="absolute left-[16%] bottom-[10%] h-28 w-28 rounded-full border border-emerald-400/10" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)] animate-border-glow">
            <Sparkles size={13} />
            Early Access
          </div>

          <h2 className="font-display mt-6 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            <span className="animate-gradient-shimmer bg-[linear-gradient(135deg,var(--color-text-primary),var(--color-accent),#6366F1,var(--color-text-primary))] bg-clip-text text-transparent">
              Be the first to ship with ShipIt.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
            Join the waitlist and get early access to the open-source AI
            developer workspace that brings building, reviewing, and shipping
            into one connected surface.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {[
              "3 AI Engines",
              "70+ Models",
              "MCP Integrations",
              "Visible Delivery Loop",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/86 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onJoinWaitlist}
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-7 py-4 text-sm font-semibold text-white shadow-[0_20px_50px_-20px_rgba(37,99,235,0.5)] transition-all duration-300 hover:bg-[var(--color-accent-hover)] hover:shadow-[0_28px_60px_-18px_rgba(37,99,235,0.5)] hover:scale-[1.03]"
            >
              <Zap
                size={16}
                className="transition-transform group-hover:scale-110"
              />
              Join Waitlist
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--color-text-muted)]">
            {[
              "Open source",
              "Local-first",
              "Privacy-safe",
              "No vendor lock-in",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 px-2 text-sm text-[var(--color-text-muted)]">
        <div className="flex items-center gap-2">
          <img
            src="/shipit-logo.svg"
            alt="ShipIt"
            className="w-full rounded-lg"
          />
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <span>Open-source AI developer workspace</span>
          <span className="hidden sm:inline">|</span>
          <span>
            Built with{" "}
            <strong className="text-accent-hover">
              ShipIt + Claude Code + Gemini + Codex + FastAPI + React
            </strong>
          </span>
        </div>
      </div>
    </section>
  );
}
