import {
  ArrowRight,
  Boxes,
  Brain,
  Cloud,
  Code2,
  Command,
  Gem,
  GitBranch,
  Layers,
  Play,
  Rocket,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";
import { heroStats, offerGroups } from "../data";
import useScrollReveal from "../useScrollReveal";

const heroSignals = [
  { text: "Repo-aware before editing", icon: ScanSearch },
  { text: "Visible review and test loop", icon: Workflow },
  { text: "Your personal ShipIt CLI", icon: Terminal },
];

const engineStrip = [
  {
    name: "ShipIt",
    role: "Personal multi-provider CLI",
    icon: Cloud,
    color: "from-orange-500 to-amber-500",
    glow: "shadow-orange-500/20",
  },
  {
    name: "Claude",
    role: "Reasoning",
    icon: Brain,
    color: "from-purple-500 to-violet-600",
    glow: "shadow-purple-500/20",
  },
  {
    name: "Codex",
    role: "Code generation",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    glow: "shadow-blue-500/20",
  },
  {
    name: "Gemini",
    role: "Multimodal",
    icon: Gem,
    color: "from-cyan-400 to-teal-500",
    glow: "shadow-cyan-500/20",
  },
];

const heroCommandPills = [
  { cmd: "/review", icon: ScanSearch },
  { cmd: "/fix", icon: Zap },
  { cmd: "/test", icon: Play },
  { cmd: "/pr", icon: GitBranch },
];
const heroFlow = [
  { label: "Parse", icon: Layers },
  { label: "Build", icon: Code2 },
  { label: "Review", icon: ScanSearch },
  { label: "Ship", icon: Rocket },
];

const floatingCards = [
  {
    className: "landing-hero-floating-a",
    title: "Claude",
    label: "Reasoning engine",
    icon: Brain,
    color: "from-purple-500 to-violet-600",
  },
  {
    className: "landing-hero-floating-b",
    title: "Codex",
    label: "Code generation",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
  },
  {
    className: "landing-hero-floating-c",
    title: "Gemini",
    label: "Multimodal engine",
    icon: Gem,
    color: "from-cyan-400 to-teal-500",
  },
  {
    className: "landing-hero-floating-d",
    title: "ShipIt CLI",
    label: "Your personal operator",
    icon: Cloud,
    color: "from-orange-500 to-amber-500",
  },
];

const operatorSignals = [
  {
    icon: Workflow,
    title: "Visible delivery graph",
    desc: "Planning, coding, review, fixes, tests, and reports stay connected.",
  },
  {
    icon: Boxes,
    title: "Multi-repo context",
    desc: "Path validation and repo awareness reduce bad edits before they happen.",
  },
  {
    icon: ShieldCheck,
    title: "Safer automation",
    desc: "Guardrails and review loops make the system feel disciplined.",
  },
];

function DashboardScreenshot() {
  return (
    <div className="landing-hero-screen">
      <div className="landing-hero-screen-top">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
          Live operator surface
        </div>
      </div>

      <div className="relative">
        <div className="landing-hero-screen-glow" />
        <img
          src="/screenshots/dashboard.png"
          alt="ShipIt Dashboard"
          className="relative z-10 w-full rounded-[22px] object-cover"
          loading="eager"
        />
      </div>
    </div>
  );
}

export default function LandingHeroSection({ onJoinWaitlist, onNavigate }) {
  const [statsRef, statsVisible] = useScrollReveal();

  return (
    <section className="mt-2">
      <div className="landing-hero-shell animate-fade-rise relative overflow-hidden rounded-[44px] border border-[var(--color-border)] bg-[var(--color-surface)]/88 px-5 py-8 shadow-[0_34px_80px_-48px_rgba(15,23,42,0.42)] backdrop-blur-xl sm:px-7 sm:py-9 lg:px-10 lg:py-10">
        <div className="landing-hero-beam" />
        <div className="landing-hero-grid" />
        <div className="landing-hero-orb landing-hero-orb-a" />
        <div className="landing-hero-orb landing-hero-orb-b" />
        <div className="landing-hero-orb landing-hero-orb-c" />
        <div className="landing-hero-halo landing-hero-halo-a" />
        <div className="landing-hero-halo landing-hero-halo-b" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)] animate-border-glow">
              <Sparkles size={13} className="animate-pulse" />
              Production-grade coding agent
            </div>
            <div className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/86 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
              <span className="inline-flex items-center gap-1.5">
                <Zap size={10} className="text-amber-500" />4 engines. 100+
                models. One control surface.
              </span>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {heroSignals?.map((item, index) => {
              const SignalIcon = item.icon;
              return (
                <span
                  key={item.text}
                  className="animate-fade-rise inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/94 px-3.5 py-1.5 text-[12px] font-medium text-[var(--color-text-secondary)] shadow-sm transition-all duration-300 hover:border-[var(--color-accent)]/30 hover:shadow-[0_8px_20px_-10px_rgba(37,99,235,0.15)]"
                  style={{ animationDelay: `${150 + index * 100}ms` }}
                >
                  <SignalIcon
                    size={13}
                    className="text-[var(--color-accent)]"
                  />
                  {item.text}
                </span>
              );
            })}
          </div>

          <h1 className="font-display mt-6 text-4xl font-semibold leading-[1.02] sm:text-[3.4rem] lg:text-[4.35rem]">
            One AI developer workspace for
            <span className="animate-gradient-shimmer mt-2   block bg-[linear-gradient(135deg,var(--color-text-primary),var(--color-accent),#0ea5e9,#6366F1,var(--color-text-primary))] bg-clip-text text-transparent">
              building, reviewing, and shipping from a single message.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
            ShipIt turns plain-English requests into a controlled delivery loop:
            understand the repo, write code, review changes, fix issues, run
            tests, and hand back a result that feels visible, modern, and under
            control.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {engineStrip.map((item, index) => {
              const EngineIcon = item.icon;
              return (
                <div
                  key={item.name}
                  className={`animate-fade-rise group relative flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/90 px-4 py-3 shadow-lg ${item.glow} backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)]/30 hover:shadow-xl`}
                  style={{ animationDelay: `${260 + index * 110}ms` }}
                >
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                  >
                    <EngineIcon size={17} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                      {item.name}
                    </span>
                    <span className="text-[11px] text-[var(--color-text-muted)]">
                      {item.role}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={onJoinWaitlist}
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_35px_-24px_rgba(37,99,235,0.65)] transition-all duration-300 hover:bg-[var(--color-accent-hover)] hover:shadow-[0_24px_50px_-20px_rgba(37,99,235,0.5)] hover:scale-[1.02]"
            >
              <Sparkles
                size={15}
                className="transition-transform group-hover:scale-110"
              />
              Join Waitlist
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </button>
            <button
              type="button"
              onClick={() => onNavigate("start")}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-sm font-semibold text-[var(--color-text-secondary)] transition-all duration-300 hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-bg-secondary)] hover:shadow-[0_12px_28px_-14px_rgba(37,99,235,0.12)]"
            >
              Read quick start
            </button>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {heroCommandPills.map((pill) => {
              const PillIcon = pill.icon;
              return (
                <span
                  key={pill.cmd}
                  className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/88 px-3.5 py-2 text-[12px] font-medium text-[var(--color-text-secondary)] transition-all duration-300 hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-accent)]/5"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-md bg-[var(--color-accent)]/10 text-[var(--color-accent)] transition-colors group-hover:bg-[var(--color-accent)]/20">
                    <PillIcon size={11} />
                  </span>
                  <Command
                    size={11}
                    className="text-[var(--color-text-muted)]"
                  />
                  {pill.cmd}
                </span>
              );
            })}
          </div>
        </div>

        <div className="landing-hero-stage-wrap relative z-10 mx-auto mt-10 max-w-6xl">
          <div className="landing-hero-stage-glow" />
          <div className="landing-hero-stage-grid" />

          {floatingCards.map((card) => {
            const CardIcon = card.icon;
            return (
              <div
                key={card.title}
                className={`landing-hero-floating ${card.className}`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br ${card.color} text-white shadow-sm`}
                  >
                    <CardIcon size={13} />
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    {card.title}
                  </div>
                </div>
                <div className="mt-1.5 text-sm font-medium text-[var(--color-text-primary)]">
                  {card.label}
                </div>
              </div>
            );
          })}

          <div className="landing-hero-frame mx-auto max-w-4xl">
            <DashboardScreenshot />
          </div>
        </div>

        <div
          ref={statsRef}
          className={`relative z-10 mt-8 grid gap-3 xl:grid-cols-[1.08fr_0.92fr] ${
            statsVisible ? "" : ""
          }`}
        >
          <div className="landing-stage-card rounded-[30px] border border-[var(--color-accent)]/18 p-5 shadow-[0_22px_45px_-36px_rgba(37,99,235,0.18)]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                Why it feels different
              </div>
              <div className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                Operator-first product
              </div>
            </div>

            <div className="mt-3 text-xl font-semibold text-[var(--color-text-primary)]">
              It is not just generation. It is a visible delivery system.
            </div>
            <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
              Prompting, implementation, review, fixes, tests, commits, and
              notifications stay connected in one workspace instead of being
              scattered across separate tools.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              {heroFlow.map((item, index) => {
                const FlowIcon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/82 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)] transition-all duration-300 hover:border-[var(--color-accent)]/30 hover:text-[var(--color-accent)]">
                      <FlowIcon
                        size={11}
                        className="text-[var(--color-accent)]/70"
                      />
                      {item.label}
                    </span>
                    {index < heroFlow.length - 1 && (
                      <span className="flex items-center">
                        <ArrowRight
                          size={12}
                          className="text-[var(--color-accent)]/40"
                        />
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className={`stagger-children grid auto-rows-min gap-2.5 sm:grid-cols-2 ${
              statsVisible ? "is-visible" : ""
            }`}
          >
            {heroStats.map((item, index) => (
              <div
                key={item.label}
                className="landing-card-3d-inner rounded-[24px] border border-[var(--color-border)] bg-[var(--color-surface)]/94 p-3.5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="font-display text-2xl font-semibold text-[var(--color-text-primary)]">
                    {item.value}
                  </div>
                  <div className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/84 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                    0{index + 1}
                  </div>
                </div>
                <div className="mt-1 text-sm leading-6 text-[var(--color-text-secondary)]">
                  {item.label}
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[var(--color-border)]/55">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[#0ea5e9]"
                    style={{ width: `${70 + index * 8}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-4 grid gap-3 lg:grid-cols-3">
          {operatorSignals.map(({ icon: Icon, title, desc }, index) => (
            <div
              key={title}
              className="landing-card-3d-inner rounded-[26px] border border-[var(--color-border)] bg-[linear-gradient(160deg,var(--color-surface),rgba(59,130,246,0.05))] p-4 shadow-[0_20px_40px_-34px_rgba(15,23,42,0.38)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-34px_rgba(37,99,235,0.16)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(160deg,var(--color-accent),#0ea5e9)] text-white shadow-sm">
                  <Icon size={18} />
                </div>
                <div className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                  0{index + 1}
                </div>
              </div>
              <div className="mt-4 text-base font-semibold text-[var(--color-text-primary)]">
                {title}
              </div>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div className="relative z-10 mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {offerGroups.map(({ icon: Icon, title, desc }, index) => (
            <div
              key={title}
              className="landing-card-3d-inner rounded-[24px] border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-4 shadow-[0_18px_36px_-30px_rgba(15,23,42,0.32)] transition duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(160deg,var(--color-accent),#6366F1)] text-white shadow-sm">
                  <Icon size={17} />
                </div>
                <div className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                  0{index + 1}
                </div>
              </div>
              <div className="mt-3 text-sm font-semibold text-[var(--color-text-primary)]">
                {title}
              </div>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
