import { ArrowRight, Github, Sparkles } from "lucide-react";

const perks = ["Open source", "Local-first", "Privacy-safe", "No vendor lock-in"];

export default function FooterCTASection({ onJoinWaitlist }) {
  return (
    <footer>
      {/* CTA block */}
      <section className="relative mx-5 mb-12 overflow-hidden rounded-3xl sm:mx-8 lg:mx-12">
        {/* Aurora background */}
        <div className="absolute inset-0 bg-[#0a0a0a]">
          <div className="animate-aurora-1 absolute -top-1/2 -left-1/4 h-full w-3/4 rounded-full bg-gradient-to-r from-blue-600/30 to-indigo-600/20 blur-[80px]" />
          <div className="animate-aurora-2 absolute -right-1/4 -bottom-1/2 h-full w-3/4 rounded-full bg-gradient-to-r from-cyan-600/20 to-blue-600/30 blur-[80px]" />
          <div className="animate-aurora-3 absolute top-0 left-1/4 h-2/3 w-1/2 rounded-full bg-gradient-to-r from-violet-600/15 to-purple-600/20 blur-[80px]" />
        </div>

        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, #0a0a0a 25%, transparent 75%)",
          }}
        />

        <div className="relative z-10 px-8 py-24 text-center sm:py-32">
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight text-white">
            Ship code, not configs.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-white/50">
            Start building with AI in under 5 minutes. 4 engines, 100+ models,
            40+ tools — one unified workspace.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onJoinWaitlist}
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_-16px_rgba(37,99,235,0.5)] transition-all hover:scale-[1.03]"
            >
              <Sparkles size={14} />
              Join Waitlist
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white/70 transition-all hover:border-white/20 hover:text-white"
            >
              <Github size={14} />
              View on GitHub
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {perks.map((p) => (
              <span
                key={p}
                className="rounded-full border border-white/8 px-3 py-1.5 text-xs font-medium text-white/40"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer bar */}
      <div className="flex flex-col items-center gap-4 border-t border-[var(--color-border)] px-8 py-8 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
          <img src="/shipit-icon.svg" alt="ShipIt" className="h-5 w-5 rounded-md" />
          <span className="font-display text-sm font-semibold text-[var(--color-text-primary)]">
            Ship<span className="text-[var(--color-accent)]">It</span>
          </span>
          <span className="text-xs text-[var(--color-text-muted)]">
            — AI Developer Workspace
          </span>
        </div>
        <div className="flex gap-6">
          {["Product", "Docs", "GitHub", "Privacy"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-xs text-[var(--color-text-muted)] transition hover:text-[var(--color-text-secondary)]"
            >
              {item}
            </a>
          ))}
        </div>
        <span className="text-xs text-[var(--color-text-muted)]">
          © 2025 ShipIt
        </span>
      </div>
    </footer>
  );
}
