import { ArrowRight, Sparkles, Zap } from "lucide-react";
import useScrollReveal from "../useScrollReveal";

export default function LandingFooterCTA({ onJoinWaitlist }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`scroll-reveal-scale mt-14 mb-16 ${isVisible ? "is-visible" : ""}`}
    >
      {/* Dark cinematic CTA */}
      <div className="relative overflow-hidden rounded-3xl">
        {/* Dark aurora background */}
        <div className="absolute inset-0 bg-[#0a0a0f]">
          {/* Animated aurora streaks */}
          <div className="absolute inset-0 opacity-80">
            <div className="absolute -left-[20%] top-0 h-full w-[60%] rotate-[-15deg] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent blur-[60px] animate-aurora-1" />
            <div className="absolute -right-[10%] top-[10%] h-[80%] w-[50%] rotate-[20deg] bg-gradient-to-r from-transparent via-blue-600/25 to-transparent blur-[80px] animate-aurora-2" />
            <div className="absolute left-[20%] -bottom-[20%] h-[60%] w-[40%] rotate-[-8deg] bg-gradient-to-r from-transparent via-indigo-500/15 to-transparent blur-[50px] animate-aurora-3" />
            <div className="absolute right-[30%] top-[20%] h-[40%] w-[30%] rotate-[35deg] bg-gradient-to-r from-transparent via-teal-400/10 to-transparent blur-[40px] animate-aurora-1" />
          </div>
          {/* Subtle noise texture */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.03%22/%3E%3C/svg%3E')] opacity-40" />
        </div>

        <div className="relative z-10 px-8 py-16 sm:px-12 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Ship code, not configs.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
              Start building with AI in under 5 minutes. 4 engines, 100+ models,
              40+ tools — one unified workspace.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={onJoinWaitlist}
                className="group inline-flex items-center gap-2.5 rounded-2xl bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)] transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_50px_-5px_rgba(59,130,246,0.6)] hover:scale-[1.03]"
              >
                <Zap size={16} />
                Join Waitlist
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="https://github.com/nicholasrahul/shipit"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-slate-300 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                View on GitHub
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
              {["Open source", "Local-first", "Privacy-safe", "No vendor lock-in"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 px-2 text-sm text-[var(--color-text-muted)]">
        <div className="flex items-center gap-2">
          <img src="/shipit-logo.svg" alt="ShipIt" className="w-full rounded-lg" />
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <span>Open-source AI developer workspace</span>
          <span className="hidden sm:inline">|</span>
          <span>
            Built with <strong className="text-accent-hover">ShipIt + Claude Code + Gemini + Codex</strong>
          </span>
        </div>
      </div>
    </section>
  );
}
