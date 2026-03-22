import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Copy,
  Globe,
  Key,
  Monitor,
  Package,
  Pause,
  Play,
  Shield,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
} from "lucide-react";
import { useEffect, useState } from "react";
import useScrollReveal from "../useScrollReveal";

const AUTO_ADVANCE_MS = 2600;

/* ─── Install steps ────────────────────────────────── */
const installLines = [
  {
    text: "curl -fsSL https://shipit.dev/install.sh | bash",
    color: "text-emerald-300",
  },
  { text: "shipit", color: "text-amber-300" },
];

const installCode = `curl -fsSL https://shipit.dev/install.sh | bash
shipit`;

const startSignals = [
  "Download",
  "Install",
  "Activate License",
  "Start Shipping",
];

const operatorCards = [
  {
    icon: Package,
    title: "One-command install",
    desc: "A single curl command downloads, extracts, and installs everything automatically.",
  },
  {
    icon: Key,
    title: "License activation",
    desc: "Enter your token from shipit.dev on first launch. Validated and cached automatically.",
  },
  {
    icon: ShieldCheck,
    title: "Protected & secure",
    desc: "Encrypted Python, obfuscated JavaScript, and token-gated access.",
  },
];

const firstJobPrompts = [
  "Review this repo and explain how the frontend and backend connect.",
  "Add a new feature flag for onboarding and wire it into the UI.",
  "Find the failing tests, fix the issue, and show the final diff.",
];

const startJourneySlides = [
  {
    phase: "01",
    title: "Install ShipIt",
    summary:
      "One command to download, extract, and install ShipIt on your machine.",
    prompt: "curl -fsSL https://shipit.dev/install.sh | bash",
    outcome: "ShipIt installed at ~/.shipit/ with all dependencies",
  },
  {
    phase: "02",
    title: "Activate your license",
    summary:
      "Enter your license token from shipit.dev when prompted on first launch.",
    prompt:
      "shipit\n  Enter your ShipIt license token: shipit_abc123...\n  License activated! Welcome, you@example.com",
    outcome: "Token validated, license cached in config/license.json",
  },
  {
    phase: "03",
    title: "Open the workspace",
    summary:
      "The browser opens automatically. Point ShipIt at your codebase and start working.",
    prompt: firstJobPrompts[0],
    outcome: "Running workspace + first repo understanding pass",
  },
  {
    phase: "04",
    title: "Give a real task and ship",
    summary:
      "Describe what you want in plain English. Review diffs, tests, and iterate until ready.",
    prompt: firstJobPrompts[1],
    outcome: "Focused implementation with visible diffs and test results",
  },
];

const activationSteps = [
  {
    icon: Globe,
    title: "Get your token",
    desc: "Sign in at shipit.dev and copy your license token from the dashboard.",
  },
  {
    icon: Terminal,
    title: "Enter on first launch",
    desc: "Run 'shipit' — you'll be prompted to paste your token. Tokens start with shipit_.",
  },
  {
    icon: Shield,
    title: "Validated & cached",
    desc: "Token is validated remotely and cached locally. Re-validates automatically every 6 hours.",
  },
  {
    icon: Monitor,
    title: "Or use the UI",
    desc: "Open the browser and use the activation form if you prefer a visual flow.",
  },
];

export default function LandingQuickStartSection({
  onJoinWaitlist,
  onNavigate,
}) {
  const [copied, setCopied] = useState(false);
  const [activeJourneyIndex, setActiveJourneyIndex] = useState(0);
  const [isJourneyPaused, setIsJourneyPaused] = useState(false);
  const [heroRef, heroVisible] = useScrollReveal();
  const [detailRef, detailVisible] = useScrollReveal();

  useEffect(() => {
    if (isJourneyPaused) return undefined;
    const timerId = window.setInterval(() => {
      setActiveJourneyIndex(
        (current) => (current + 1) % startJourneySlides.length,
      );
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(timerId);
  }, [isJourneyPaused]);

  const handleCopy = () => {
    navigator.clipboard.writeText(installCode).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const goToJourney = (index) => setActiveJourneyIndex(index);
  const goToPreviousJourney = () =>
    setActiveJourneyIndex((c) =>
      c === 0 ? startJourneySlides.length - 1 : c - 1,
    );
  const goToNextJourney = () =>
    setActiveJourneyIndex((c) => (c + 1) % startJourneySlides.length);

  return (
    <section id="quickstart" className="mt-8 mb-10">
      <div
        ref={heroRef}
        className={`scroll-reveal rounded-[40px] border border-[var(--color-border)] bg-[var(--color-surface)]/86 p-5 shadow-[0_30px_70px_-46px_rgba(15,23,42,0.4)] backdrop-blur-xl sm:p-6 ${heroVisible ? "is-visible" : ""}`}
      >
        <div className="landing-start-shell relative overflow-hidden rounded-[34px] border border-[var(--color-border)] p-6 sm:p-7">
          <div className="landing-start-glow landing-start-glow-a" />
          <div className="landing-start-glow landing-start-glow-b" />
          <div className="landing-start-grid" />

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/22 bg-[var(--color-accent)]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                <Sparkles size={12} />
                Start Shipping
              </div>
              <div className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/88 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                Install. Activate. Ship.
              </div>
            </div>

            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {startSignals.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/92 px-3 py-1.5 text-[12px] font-medium text-[var(--color-text-secondary)] shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <h2 className="font-display mt-6 text-4xl font-semibold leading-[1.03] text-[var(--color-text-primary)] sm:text-[3.2rem] lg:text-[4rem]">
              Install in minutes,
              <span className="animate-gradient-shimmer mt-2 block bg-[linear-gradient(135deg,var(--color-accent),#0ea5e9,#10b981,#6366F1,var(--color-accent))] bg-clip-text text-transparent">
                activate your license, and start coding.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
              One command installs everything. Enter your license token from
              shipit.dev on first launch, and the workspace opens in your
              browser. Run{" "}
              <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm font-mono">
                shipit
              </code>{" "}
              every time after.
            </p>

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
                onClick={() => onNavigate?.("docs")}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-sm font-semibold text-[var(--color-text-secondary)] transition-all duration-300 hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-bg-secondary)] hover:shadow-[0_12px_28px_-14px_rgba(37,99,235,0.12)]"
              >
                Read the Docs
              </button>
            </div>
          </div>

          <div className="landing-start-stage-wrap relative z-10 mx-auto mt-10 max-w-6xl">
            <div className="landing-start-stage-glow" />
            <div className="landing-start-stage-grid" />

            {operatorCards.map(({ icon: Icon, title, desc }, index) => (
              <div
                key={title}
                className={`landing-start-floating landing-start-floating-${index + 1}`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(160deg,var(--color-accent),#0ea5e9)] text-white shadow-[0_18px_34px_-20px_rgba(37,99,235,0.35)]">
                  <Icon size={17} />
                </div>
                <div className="mt-3 text-sm font-semibold text-[var(--color-text-primary)]">
                  {title}
                </div>
                <p className="mt-1 text-sm leading-6 text-[var(--color-text-secondary)]">
                  {desc}
                </p>
              </div>
            ))}

            <div className="landing-start-frame mx-auto max-w-[52rem] overflow-hidden rounded-[36px] border border-white/[0.06] bg-[#0c1222] shadow-[0_30px_70px_-46px_rgba(15,23,42,0.65)]">
              <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#111827] px-5 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                    <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                    <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="flex items-center gap-1.5 rounded-md bg-white/[0.04] px-3 py-1 text-[11px] text-slate-500">
                    <Terminal size={11} />
                    ~/shipit
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-slate-300">
                  <Terminal size={11} />
                  Quick Install
                </div>
              </div>

              <div className="relative p-5">
                <button
                  type="button"
                  onClick={handleCopy}
                  className={`absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-semibold transition-all duration-300 ${
                    copied
                      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300 shadow-[0_0_12px_-3px_rgba(52,211,153,0.3)]"
                      : "border-white/[0.08] bg-white/[0.04] text-slate-400 hover:bg-white/[0.08] hover:text-slate-200"
                  }`}
                >
                  <Copy size={11} />
                  {copied ? "Copied!" : "Copy"}
                </button>

                <div className="space-y-0.5 pt-9 sm:pt-0">
                  {installLines.map((line, index) => (
                    <div
                      key={line.text}
                      className="group/line flex items-start gap-3 rounded-lg px-1 py-0.5 font-mono transition-colors duration-150 hover:bg-white/[0.03]"
                    >
                      <span className="w-5 shrink-0 select-none text-right text-[12px] leading-7 text-slate-600/60 transition-colors group-hover/line:text-slate-500">
                        {index + 1}
                      </span>
                      <div className="flex items-center gap-2">
                        <ChevronRight
                          size={12}
                          className="shrink-0 text-emerald-500/60 transition-colors group-hover/line:text-emerald-400"
                        />
                        <code className={`text-[13px] leading-7 ${line.color}`}>
                          {line.text}
                        </code>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/[0.06] bg-[#111827]/60 px-5 py-3.5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                      Protected
                    </span>
                    <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-sky-300">
                      Licensed
                    </span>
                    <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-300">
                      Single Port
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-2 text-[12px] text-emerald-400/80">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    Ready in ~1 min
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── License Activation Section ──────────────── */}
      <div className="mt-5 rounded-[36px] border border-[var(--color-border)] bg-[var(--color-surface)]/86 p-5 shadow-[0_24px_50px_-38px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/18 bg-amber-400/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-600 dark:text-amber-300">
              <Key size={12} />
              License Activation
            </div>
            <h3 className="mt-3 text-2xl font-semibold leading-tight text-[var(--color-text-primary)]">
              Activate your license to start using ShipIt.
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-[var(--color-text-secondary)]">
              Get your token at shipit.dev, enter it on first launch or in the
              browser, and your license is cached locally. Re-validation happens
              automatically every 6 hours. Works offline with a 24-hour grace
              period.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {activationSteps.map(({ icon: Icon, title, desc }, stepIdx) => (
            <div
              key={title}
              className="group/card relative rounded-[22px] border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-4 transition-all duration-200 hover:border-[var(--color-accent)]/20 hover:shadow-[0_8px_24px_-12px_rgba(37,99,235,0.1)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)] transition-colors group-hover/card:bg-[var(--color-accent)]/15">
                  <Icon size={18} />
                </div>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-bg-secondary)] text-[10px] font-bold tabular-nums text-[var(--color-text-muted)]">
                  {stepIdx + 1}
                </span>
              </div>
              <div className="mt-3 text-sm font-semibold text-[var(--color-text-primary)]">
                {title}
              </div>
              <p className="mt-1.5 text-[13px] leading-6 text-[var(--color-text-secondary)]">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-5 xl:grid-cols-[1fr_1fr]">
          {/* Terminal simulation */}
          <div className="overflow-hidden rounded-[24px] border border-white/[0.06] bg-[#0c1222] shadow-[0_16px_40px_-20px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#111827] px-5 py-2.5">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-[9px] w-[9px] rounded-full bg-[#ff5f57]/80" />
                  <span className="h-[9px] w-[9px] rounded-full bg-[#febc2e]/80" />
                  <span className="h-[9px] w-[9px] rounded-full bg-[#28c840]/80" />
                </div>
                <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <Terminal size={10} />
                  First Launch
                </span>
              </div>
              <div className="rounded-full border border-emerald-400/20 bg-emerald-400/8 px-2.5 py-1 text-[10px] font-semibold text-emerald-300">
                Interactive
              </div>
            </div>
            <div className="p-5 font-mono text-[13px] leading-6">
              <div className="text-slate-500">$ shipit</div>
              <div className="mt-2 text-emerald-400 text-[11px] leading-[1.15]">
                {"       _____ _   _ _____ _____ _____ _____"}<br />
                {"      /  ___| | | |_   _| ___ \\_   _|_   _|"}<br />
                {"      \\ `--.| |_| | | | | |_/ / | |   | |"}<br />
                {"       `--. \\  _  | | | |  __/  | |   | |"}<br />
                {"      /\\__/ / | | |_| |_| |    _| |_  | |"}<br />
                {"      \\____/\\_| |_/\\___/\\_|    \\___/  \\_/"}<br />
                {"                                    v1.0.0"}
              </div>
              <div className="mt-3 rounded-lg bg-amber-400/5 px-3 py-1.5 text-amber-300">
                {"  License activation required"}
              </div>
              <div className="mt-1 text-slate-400">
                {"  Get your token at: "}
                <span className="text-sky-400 underline decoration-sky-400/30">https://shipit.dev</span>
              </div>
              <div className="mt-2 text-slate-300">
                {"  Enter your ShipIt license token: "}
                <span className="text-sky-300">shipit_abc123...</span>
              </div>
              <div className="mt-1 text-emerald-400">
                {"  [ShipIt] Validating token..."}
              </div>
              <div className="text-emerald-400 font-medium">
                {"  [ShipIt] License activated! Welcome, you@example.com"}
              </div>
              <div className="mt-2 text-sky-300">
                {"  Open in browser: http://localhost:8000"}
              </div>
            </div>
          </div>

          {/* How it works summary */}
          <div className="flex flex-col gap-3">
            {[
              { borderClass: "border-amber-400/15 hover:border-amber-400/25 bg-amber-400/[0.03]", labelClass: "text-amber-600 dark:text-amber-300", label: "Token format", value: "Starts with shipit_ followed by a unique hash" },
              { borderClass: "border-emerald-400/15 hover:border-emerald-400/25 bg-emerald-400/[0.03]", labelClass: "text-emerald-600 dark:text-emerald-300", label: "Validation", value: "Token checked remotely on first use, then cached in config/license.json" },
              { borderClass: "border-sky-400/15 hover:border-sky-400/25 bg-sky-400/[0.03]", labelClass: "text-sky-600 dark:text-sky-300", label: "Offline mode", value: "Works offline for 24 hours after last successful validation" },
              { borderClass: "border-purple-400/15 hover:border-purple-400/25 bg-purple-400/[0.03]", labelClass: "text-purple-600 dark:text-purple-300", label: "Re-validation", value: "Automatic re-check every 6 hours in the background" },
            ].map(({ borderClass, labelClass, label, value }) => (
              <div
                key={label}
                className={`rounded-[18px] border p-4 transition-all duration-200 ${borderClass}`}
              >
                <div className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${labelClass}`}>
                  {label}
                </div>
                <p className="mt-1.5 text-sm leading-6 text-[var(--color-text-secondary)]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Journey Carousel ────────────────────────── */}
      <div
        ref={detailRef}
        className={`stagger-children mt-5 grid gap-5 ${detailVisible ? "is-visible" : ""}`}
      >
        <div
          className="rounded-[36px] border border-[var(--color-border)] bg-[var(--color-surface)]/86 p-5 shadow-[0_24px_50px_-38px_rgba(15,23,42,0.28)] backdrop-blur-xl"
          onMouseEnter={() => setIsJourneyPaused(true)}
          onMouseLeave={() => setIsJourneyPaused(false)}
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/18 bg-[var(--color-accent)]/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                <Workflow size={12} />
                Setup Journey
              </div>
              <div className="mt-3 text-2xl font-semibold leading-tight text-[var(--color-text-primary)]">
                From download to your first real task, step by step.
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--color-text-secondary)]">
                Install the product, activate your license, open the workspace,
                and give ShipIt a real coding job.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsJourneyPaused((c) => !c)}
                className={`inline-flex h-11 w-11 items-center justify-center rounded-full border text-[var(--color-text-secondary)] transition-all duration-300 ${
                  isJourneyPaused
                    ? "border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                    : "border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                }`}
                aria-label={
                  isJourneyPaused ? "Resume carousel" : "Pause carousel"
                }
              >
                {isJourneyPaused ? <Play size={16} /> : <Pause size={16} />}
              </button>
              <button
                type="button"
                onClick={goToPreviousJourney}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] transition-all duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                aria-label="Previous journey step"
              >
                <ArrowRight size={16} className="rotate-180" />
              </button>
              <button
                type="button"
                onClick={goToNextJourney}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] transition-all duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                aria-label="Next journey step"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="mt-5 overflow-hidden rounded-[30px] border border-[var(--color-border)] bg-[linear-gradient(135deg,var(--color-surface),var(--color-bg-secondary))] shadow-[0_18px_36px_-30px_rgba(15,23,42,0.24)]">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeJourneyIndex * 100}%)` }}
            >
              {startJourneySlides.map((slide, index) => (
                <article
                  key={slide.phase}
                  className="w-full shrink-0 p-5 sm:p-6"
                >
                  <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
                    <div className="rounded-[26px] border border-[var(--color-border)] bg-[var(--color-surface)]/86 p-5">
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                          Setup Flow
                        </div>
                        <div className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                          Step {slide.phase}
                        </div>
                      </div>
                      <div className="mt-3 text-2xl font-semibold text-[var(--color-text-primary)]">
                        {slide.title}
                      </div>
                      <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                        {slide.summary}
                      </p>
                      <div className="mt-4 rounded-[20px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/72 px-4 py-3 text-sm leading-6 text-[var(--color-text-primary)]">
                        {slide.outcome}
                      </div>
                    </div>

                    <div className="landing-start-prompts rounded-[26px] border border-[var(--color-border)] p-5">
                      <div className="flex items-center justify-between gap-3">
                        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/28 bg-emerald-500/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-300">
                          <Terminal size={12} />
                          {index < 2 ? "Terminal Output" : "First Job Idea"}
                        </div>
                        <div className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                          Step {index + 1}
                        </div>
                      </div>
                      <pre className="mt-4 overflow-x-auto whitespace-pre-wrap text-sm leading-7 text-[var(--color-text-primary)]">
                        {slide.prompt}
                      </pre>
                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        <div className="landing-card-3d-inner rounded-[20px] border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-4">
                          <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-text-primary)]">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                              <CheckCircle2 size={13} />
                            </span>
                            {index < 2 ? "Automatic setup" : "Zero cloud setup"}
                          </div>
                          <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                            {index < 2
                              ? "Dependencies installed, venv created, PATH configured automatically."
                              : "Everything runs locally before you commit to a full workflow."}
                          </p>
                        </div>
                        <div className="landing-card-3d-inner rounded-[20px] border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-4">
                          <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-text-primary)]">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10 text-blue-600">
                              <ShieldCheck size={13} />
                            </span>
                            {index < 2
                              ? "Token-gated access"
                              : "Visible control"}
                          </div>
                          <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                            {index < 2
                              ? "License validated remotely and cached. Works offline with grace period."
                              : "Review changes, tests, and next actions before you ship."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {startJourneySlides.map((slide, index) => (
              <button
                key={slide.phase}
                type="button"
                onClick={() => goToJourney(index)}
                className={`rounded-full border px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                  index === activeJourneyIndex
                    ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white shadow-[0_16px_40px_-28px_rgba(37,99,235,0.55)]"
                    : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                }`}
              >
                {slide.phase} {slide.title}
              </button>
            ))}
          </div>
        </div>

        {/* ── Checklist + Requirements ──────────────── */}
        <div className="grid gap-5 xl:grid-cols-[0.94fr_1.06fr]">
          <div className="landing-card-3d-inner rounded-[30px] border border-[var(--color-border)] bg-[var(--color-surface)]/88 p-5 shadow-[0_20px_40px_-34px_rgba(15,23,42,0.24)]">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
              Setup checklist
            </div>
            <div className="mt-4 grid gap-3">
              {[
                "Run the install command: curl -fsSL https://shipit.dev/install.sh | bash",
                "Everything is set up automatically — venv, deps, PATH, and launcher.",
                "Enter your license token on first launch (get it at shipit.dev).",
                "Open the UI at localhost:8000, select your engine, and describe your task.",
              ].map((step, index) => (
                <div
                  key={step}
                  className="flex items-start gap-3 rounded-[18px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/68 px-4 py-3"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[11px] font-bold text-[var(--color-accent)]">
                    {index + 1}
                  </span>
                  <div className="text-sm font-medium leading-6 text-[var(--color-text-primary)]">
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="landing-card-3d-inner rounded-[30px] border border-[var(--color-border)] bg-[linear-gradient(160deg,var(--color-surface),rgba(59,130,246,0.04))] p-5 shadow-[0_20px_40px_-34px_rgba(15,23,42,0.24)]">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
              Requirements & what success looks like
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                "Python 3.10+ and Node.js 18+ installed on your system.",
                "A license token from shipit.dev (free or paid plan).",
                "The UI opens at localhost:8000 and your first task runs cleanly.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[20px] border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-4 text-sm leading-7 text-[var(--color-text-secondary)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
