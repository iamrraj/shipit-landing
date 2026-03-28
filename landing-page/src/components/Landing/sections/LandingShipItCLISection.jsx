import shipitCliPng from "../svg/shipit_cli.png";
import ShipItToolsOrbitSvg from "../svg/ShipItToolsOrbitSvg";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Boxes,
  Check,
  Cloud,
  Command,
  Copy,
  FolderSearch2,
  HardDrive,
  Image,
  Layers3,
  Lock,
  Monitor,
  Play,
  RefreshCw,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Terminal,
  WandSparkles,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import useScrollReveal from "../useScrollReveal";

/* ─── data ─── */

const heroSignals = [
  "One-man-army autonomous AI agent",
  "Full terminal access + OSINT research",
  "Local or cloud — your models, your rules",
];

const heroStats = [
  { value: "9+", label: "AI providers" },
  { value: "43", label: "built-in tools" },
  { value: "OSINT", label: "research suite" },
  { value: "HITL", label: "smart safety" },
];

const providerPills = [
  "AWS Bedrock",
  "OpenAI",
  "Gemini",
  "Vertex AI",
  "Ollama",
  "Together AI",
  "Groq",
  "OpenRouter",
  "Custom",
];

const shipitFlow = ["Install", "Route", "Inspect", "Code", "Verify", "Ship"];

const commandPills = [
  "/model",
  "/provider",
  "/session",
  "/tools",
  "/hitl",
  "/osint",
  "/pentest",
  "/scan",
];

const whyShipIt = [
  {
    icon: Cloud,
    title: "Your models, your rules",
    desc: "AWS Bedrock, OpenAI, Gemini, Vertex AI, Ollama, Together, Groq, OpenRouter — bring any model.",
  },
  {
    icon: Terminal,
    title: "One-man-army agent",
    desc: "Developer, DevOps, security researcher, pentester, sysadmin — entire engineering team in one CLI.",
  },
  {
    icon: FolderSearch2,
    title: "Deep code tracing",
    desc: "Reads 5-10+ files per question. Follows imports, maps architecture, cross-references components.",
  },
  {
    icon: ShieldCheck,
    title: "OSINT & threat intel",
    desc: "Telegram scraping, dark web search, IP reputation, breach checks, Google dorking — built-in.",
  },
];

const installMethods = [
  {
    title: "Install script",
    code: "curl -fsSL https://raw.githubusercontent.com/iamrraj/shipit-cli/main/install.sh | bash",
    note: "Fastest",
    gradient: "from-[var(--color-accent)] to-[#0ea5e9]",
  },
  {
    title: "npm global",
    code: "npm install -g shipit-cli",
    note: "Node ready",
    gradient: "from-[#10b981] to-[#34d399]",
  },
  {
    title: "From source",
    code: "git clone https://github.com/iamrraj/shipit-cli.git && npm install && npm run build && npm link",
    note: "Contribute",
    gradient: "from-[#f97316] to-[#fb923c]",
  },
];

const localRunCards = [
  {
    icon: HardDrive,
    title: "Ollama",
    command: "shipit -p ollama -m qwen2.5-coder",
    desc: "100% local, no API key needed",
  },
  {
    icon: Boxes,
    title: "LM Studio",
    command: "shipit -p custom -m <model>",
    desc: "OpenAI-compatible local server",
  },
  {
    icon: Zap,
    title: "vLLM",
    command: "shipit -p custom -m Qwen/Qwen2.5-Coder-32B",
    desc: "High-throughput GPU inference",
  },
];

const featureCards = [
  {
    icon: Layers3,
    title: "43 built-in tools",
    desc: "Files, bash, git, GitHub, Docker, security, OSINT, web search, code intel, pentest, malware analysis.",
  },
  {
    icon: ShieldCheck,
    title: "OSINT & threat intel",
    desc: "Telegram scraping, dark web search, IP reputation, cert transparency, breach checks, Google dorking.",
  },
  {
    icon: Lock,
    title: "Claude Code-style HITL",
    desc: "Arrow-key menu approval. 150+ auto-approved safe commands. 50+ dangerous patterns blocked.",
  },
  {
    icon: Zap,
    title: "Parallel execution",
    desc: "Up to 5 tools run concurrently. Circuit breaker, exponential backoff, rate limit recovery.",
  },
  {
    icon: Image,
    title: "Multi-modal + MCP",
    desc: "Paste images, connect Playwright, databases, APIs via MCP (stdio, SSE, HTTP, WebSocket).",
  },
  {
    icon: Monitor,
    title: "Deep code tracing",
    desc: "Reads 5-10+ files per question. Follows imports, cross-references architecture layers.",
  },
];

const toolCategories = [
  {
    icon: FolderSearch2,
    title: "Files & search",
    tools: [
      "read_file",
      "write_file",
      "edit_file",
      "search_files",
      "list_dir",
    ],
  },
  {
    icon: ServerCog,
    title: "Shell & DevOps",
    tools: [
      "bash_exec",
      "git_ops",
      "github_ops",
      "docker_ops",
      "run_tests",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Security & pentest",
    tools: [
      "security_audit",
      "vuln_scan",
      "secrets_scan",
      "xss_scan",
      "sqli_test",
    ],
  },
  {
    icon: Bot,
    title: "OSINT & research",
    tools: [
      "osint_search",
      "web_search",
      "web_fetch",
      "subdomain_enum",
      "port_scan",
    ],
  },
];

/* ─── copy button ─── */

function CopyBtn({ text }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };
  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ${
        copied
          ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-400"
          : "border-[var(--color-border)] bg-[var(--color-surface)]/80 text-[var(--color-text-muted)] hover:border-[var(--color-accent)]/30 hover:text-[var(--color-text-secondary)]"
      }`}
      aria-label={copied ? "Copied" : "Copy command"}
    >
      {copied ? <Check size={11} /> : <Copy size={11} />}
    </button>
  );
}

/* ─── detail carousel ─── */

const DETAIL_AUTO_MS = 3400;
const DETAIL_SLIDE_COUNT = 3;

const detailSteps = [
  { key: "local", label: "01 Run Locally" },
  { key: "features", label: "02 Key Features" },
  { key: "tools", label: "03 Built-in Tools" },
];

function DetailCarousel({ detailRef, detailVisible }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return undefined;
    const id = window.setInterval(() => {
      setActiveIdx((c) => (c + 1) % DETAIL_SLIDE_COUNT);
    }, DETAIL_AUTO_MS);
    return () => window.clearInterval(id);
  }, [isPaused]);

  return (
    <div
      ref={detailRef}
      className={`stagger-children mt-5 ${detailVisible ? "is-visible" : ""}`}
    >
      <div
        className="rounded-[36px] border border-[var(--color-border)] bg-[var(--color-surface)]/86 p-5 shadow-[0_24px_50px_-38px_rgba(15,23,42,0.28)] backdrop-blur-xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Fixed header */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-300/22 bg-orange-500/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-600 dark:text-orange-300">
              <Sparkles size={12} />
              Deep Dive
            </div>
            <div className="mt-3 text-2xl font-semibold leading-tight text-[var(--color-text-primary)]">
              Local inference, key features, and 43 tools — without the
              scroll.
            </div>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--color-text-secondary)]">
              Everything that ships inside the CLI, one panel at a time.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsPaused((p) => !p)}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border text-[var(--color-text-secondary)] transition-all duration-300 ${
                isPaused
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                  : "border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              }`}
              aria-label={isPaused ? "Resume" : "Pause"}
            >
              {isPaused ? (
                <Play size={16} />
              ) : (
                <span className="flex gap-[3px]">
                  <span className="h-3.5 w-[2.5px] rounded-full bg-current" />
                  <span className="h-3.5 w-[2.5px] rounded-full bg-current" />
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() =>
                setActiveIdx(
                  (c) => (c - 1 + DETAIL_SLIDE_COUNT) % DETAIL_SLIDE_COUNT,
                )
              }
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] transition-all duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              aria-label="Previous"
            >
              <ArrowRight size={16} className="rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => setActiveIdx((c) => (c + 1) % DETAIL_SLIDE_COUNT)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] transition-all duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              aria-label="Next"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Sliding container */}
        <div className="mt-5 overflow-hidden rounded-[30px] border border-[var(--color-border)] bg-[linear-gradient(135deg,var(--color-surface),var(--color-bg-secondary))] shadow-[0_18px_36px_-30px_rgba(15,23,42,0.24)]">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activeIdx * 100}%)` }}
          >
            {/* Slide 0: Local run */}
            <article className="w-full shrink-0 p-5 sm:p-6">
              <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-[26px] border border-[var(--color-border)] bg-[var(--color-surface)]/86 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/28 bg-emerald-500/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-300">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      </span>
                      100% Local
                    </div>
                    <div className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                      No API key
                    </div>
                  </div>
                  <div className="mt-3 text-2xl font-semibold text-[var(--color-text-primary)]">
                    Private inference on your machine.
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                    Keep inference entirely local when privacy matters. Ollama,
                    LM Studio, and vLLM all work out of the box — zero cloud
                    dependency.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {[
                      "qwen2.5-coder",
                      "deepseek-r1",
                      "llama3.3",
                      "codellama",
                      "mistral",
                      "phi-4",
                    ].map((m) => (
                      <span
                        key={m}
                        className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/76 px-2.5 py-1 font-mono text-[10px] text-[var(--color-text-muted)]"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid content-start gap-3">
                  {localRunCards.map(
                    ({ icon: Icon, title, command, desc }, index) => (
                      <div
                        key={title}
                        className="landing-card-3d-inner rounded-[20px] border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-4"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(160deg,#10b981,#34d399)] text-white shadow-[0_16px_32px_-20px_rgba(16,185,129,0.35)]">
                            <Icon size={16} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                                {title}
                              </span>
                              <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
                                0{index + 1}
                              </span>
                            </div>
                            <p className="text-[12px] leading-5 text-[var(--color-text-secondary)]">
                              {desc}
                            </p>
                          </div>
                        </div>
                        <div className="mt-2.5 rounded-[10px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/76 px-3 py-2 font-mono text-[11px] leading-5 text-[var(--color-text-secondary)]">
                          <span className="text-emerald-500/60">$ </span>
                          {command}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </article>

            {/* Slide 1: Key features */}
            <article className="w-full shrink-0 p-5 sm:p-6">
              <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-[26px] border border-[var(--color-border)] bg-[var(--color-surface)]/86 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/18 bg-[var(--color-accent)]/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                      <BadgeCheck size={12} />
                      Key Features
                    </div>
                    <div className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                      6 highlights
                    </div>
                  </div>
                  <div className="mt-3 text-2xl font-semibold text-[var(--color-text-primary)]">
                    Everything in a terminal-native agent.
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                    Slash commands, HITL safety, session persistence,
                    multi-modal input, rich inline diffs — all built into one
                    CLI.
                  </p>
                  <div className="mt-4 rounded-[20px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/72 px-4 py-3 text-sm leading-6 text-[var(--color-text-primary)]">
                    One interface for tools, providers, and execution control.
                  </div>
                </div>

                <div className="grid content-start gap-2.5 sm:grid-cols-2">
                  {featureCards.map(({ icon: Icon, title, desc }, index) => (
                    <div
                      key={title}
                      className="landing-card-3d-inner rounded-[20px] border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-3.5"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[linear-gradient(160deg,var(--color-accent),#6366F1)] text-white shadow-sm">
                          <Icon size={15} />
                        </div>
                        <span className="rounded-full bg-[var(--color-surface)] px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
                          0{index + 1}
                        </span>
                      </div>
                      <div className="mt-2.5 text-[13px] font-semibold text-[var(--color-text-primary)]">
                        {title}
                      </div>
                      <p className="mt-1 text-[12px] leading-5 text-[var(--color-text-secondary)]">
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* Slide 2: Tools */}
            <article className="w-full shrink-0 p-5 sm:p-6">
              <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-[26px] border border-[var(--color-border)] bg-[var(--color-surface)]/86 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/18 bg-cyan-500/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-300">
                      <Layers3 size={12} />
                      43 Built-in Tools
                    </div>
                    <div className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                      4 categories
                    </div>
                  </div>
                  <div className="mt-3 text-2xl font-semibold text-[var(--color-text-primary)]">
                    Files, shell, security, OSINT, code intel.
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                    Read, write, search, execute, scan, and analyze — all
                    available as first-class tools inside the agent loop.
                  </p>
                  <div className="mt-4 rounded-[20px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/72 px-4 py-3 text-sm leading-6 text-[var(--color-text-primary)]">
                    No plugins required. Every tool ships with the CLI.
                  </div>
                </div>

                <div className="grid content-start gap-3 sm:grid-cols-2">
                  {toolCategories.map(({ icon: Icon, title, tools }, index) => (
                    <div
                      key={title}
                      className="landing-card-3d-inner rounded-[20px] border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-3.5"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[linear-gradient(160deg,#0ea5e9,#6366F1)] text-white shadow-sm">
                          <Icon size={15} />
                        </div>
                        <span className="text-[13px] font-semibold text-[var(--color-text-primary)]">
                          {title}
                        </span>
                        <span className="ml-auto rounded-full bg-[var(--color-surface)] px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
                          0{index + 1}
                        </span>
                      </div>
                      <div className="mt-2.5 flex flex-wrap gap-1">
                        {tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/76 px-2 py-0.5 font-mono text-[10px] text-[var(--color-text-muted)]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Step buttons */}
        <div className="mt-5 flex flex-wrap gap-2">
          {detailSteps.map((step, index) => (
            <button
              key={step.key}
              type="button"
              onClick={() => setActiveIdx(index)}
              className={`rounded-full border px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                index === activeIdx
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white shadow-[0_16px_40px_-28px_rgba(37,99,235,0.55)]"
                  : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              }`}
            >
              {step.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── component ─── */

export default function LandingShipItCLISection() {
  const [statsRef, statsVisible] = useScrollReveal();
  const [detailRef, detailVisible] = useScrollReveal();
  const [toolsRef, toolsVisible] = useScrollReveal();

  return (
    <section id="shipit-cli" className="mt-10">
      {/* ════════════════ HERO SHELL — like main landing ════════════════ */}
      <div className="landing-shipit-shell animate-fade-rise relative overflow-hidden rounded-[44px] border border-[var(--color-border)] bg-[var(--color-surface)]/88 px-5 py-8 shadow-[0_34px_80px_-48px_rgba(15,23,42,0.42)] backdrop-blur-xl sm:px-7 sm:py-9 lg:px-10 lg:py-10">
        {/* Animated background layers */}
        <div className="landing-shipit-beam" />
        <div className="landing-shipit-grid" />
        <div className="landing-shipit-orb landing-shipit-orb-a" />
        <div className="landing-shipit-orb landing-shipit-orb-b" />
        <div className="landing-shipit-orb landing-shipit-orb-c" />
        <div className="landing-shipit-halo landing-shipit-halo-a" />
        <div className="landing-shipit-halo landing-shipit-halo-b" />
        <div className="landing-shipit-glow landing-shipit-glow-a" />
        <div className="landing-shipit-glow landing-shipit-glow-b" />

        {/* ── Centered hero text ── */}
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-300/25 bg-orange-500/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-600 animate-border-glow dark:text-orange-300">
              <Sparkles size={13} />
              ShipIt CLI
            </div>
            <div className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/86 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
              9 providers. 43 tools. Your models.
            </div>
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {heroSignals.map((item, index) => (
              <span
                key={item}
                className="animate-fade-rise rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/94 px-3 py-1.5 text-[12px] font-medium text-[var(--color-text-secondary)] shadow-sm transition-all duration-300 hover:border-orange-400/30 hover:shadow-[0_8px_20px_-10px_rgba(249,115,22,0.15)]"
                style={{ animationDelay: `${150 + index * 100}ms` }}
              >
                {item}
              </span>
            ))}
          </div>

          <h2 className="font-display mt-6 text-4xl font-semibold leading-[1.02] sm:text-[3.4rem] lg:text-[4.35rem]">
            One coding agent interface for
            <span className="animate-gradient-shimmer mt-2 block bg-[linear-gradient(135deg,#f97316,var(--color-accent),#0ea5e9,#6366F1,#f97316)] bg-clip-text text-transparent">
              your providers, your models, and your workflow.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
            Like Claude Code, but on your own models. Install fast, route across
            cloud or local inference, inspect before editing, and keep execution
            visible from prompt to verification.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {providerPills.slice(0, 5).map((item, index) => (
              <div
                key={item}
                className="landing-floating-chip animate-fade-rise"
                style={{ animationDelay: `${260 + index * 110}ms` }}
              >
                <span className="text-[var(--color-text-primary)]">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {shipitFlow.map((item, index) => (
              <div key={item} className="flex items-center gap-2">
                <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/82 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                  {item}
                </span>
                {index < shipitFlow.length - 1 && (
                  <span className="h-px w-4 bg-gradient-to-r from-orange-500/50 to-transparent" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {commandPills.map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/88 px-3 py-1.5 text-[12px] font-medium text-[var(--color-text-secondary)]"
              >
                <Command size={12} className="text-orange-500" />
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* ── Screenshot showcase with floating cards ── */}
        <div className="landing-hero-stage-wrap relative z-10 mx-auto mt-10 max-w-6xl">
          <div className="landing-hero-stage-glow" />
          <div className="landing-hero-stage-grid" />

          {[
            {
              className: "landing-hero-floating-a",
              title: "Multi-provider",
              label: "9 routes, one CLI",
              icon: Cloud,
              color: "from-orange-500 to-amber-500",
            },
            {
              className: "landing-hero-floating-b",
              title: "40 Tools",
              label: "Files, git, security, code",
              icon: Layers3,
              color: "from-blue-500 to-cyan-500",
            },
            {
              className: "landing-hero-floating-c",
              title: "HITL Safety",
              label: "Approve or auto-run",
              icon: ShieldCheck,
              color: "from-emerald-500 to-teal-500",
            },
            {
              className: "landing-hero-floating-d",
              title: "Local Models",
              label: "Ollama, vLLM, LM Studio",
              icon: HardDrive,
              color: "from-violet-500 to-purple-600",
            },
          ].map((card) => {
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
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-600 dark:text-orange-300">
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
            <div className="landing-hero-screen">
              <div className="landing-hero-screen-top">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  ShipIt CLI terminal
                </div>
              </div>
              <div className="relative">
                <div className="landing-hero-screen-glow" />
                <img
                  src={shipitCliPng}
                  alt="ShipIt CLI — terminal-native AI coding agent"
                  className="relative z-10 w-full rounded-[22px] object-cover"
                  loading="eager"
                />
                {/* Animated tools orbit */}
                <div className="absolute -right-16 -bottom-16 z-20 w-64 h-64 opacity-80 hidden xl:block">
                  <ShipItToolsOrbitSvg />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats + Why section (inside hero shell) ── */}
        <div
          ref={statsRef}
          className={`relative z-10 mt-8 grid gap-3 xl:grid-cols-[1.08fr_0.92fr] ${statsVisible ? "" : ""}`}
        >
          <div className="landing-stage-card rounded-[30px] border border-orange-400/18 p-5 shadow-[0_22px_45px_-36px_rgba(249,115,22,0.18)]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-600 dark:text-orange-300">
                Why it feels different
              </div>
              <div className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                Like Claude Code, your models
              </div>
            </div>

            <div className="mt-3 text-xl font-semibold text-[var(--color-text-primary)]">
              Not just generation. A visible, multi-provider coding agent.
            </div>
            <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
              Route across Bedrock, OpenAI, Gemini, Ollama, and more. Inspect
              deeply before editing. Keep execution visible with inline diffs,
              progress bars, and HITL safety gates.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              {shipitFlow.slice(0, 4).map((item, index) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/82 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                    {item}
                  </span>
                  {index < 3 && (
                    <span className="h-px w-4 bg-gradient-to-r from-orange-500/50 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div
            className={`stagger-children grid auto-rows-min gap-2.5 sm:grid-cols-2 ${statsVisible ? "is-visible" : ""}`}
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
                    className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400"
                    style={{ width: `${65 + index * 10}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Why cards — 4 columns ── */}
        <div className="relative z-10 mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {whyShipIt.map(({ icon: Icon, title, desc }, index) => (
            <div
              key={title}
              className="landing-card-3d-inner rounded-[26px] border border-[var(--color-border)] bg-[linear-gradient(160deg,var(--color-surface),rgba(249,115,22,0.04))] p-4 shadow-[0_20px_40px_-34px_rgba(15,23,42,0.38)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-34px_rgba(249,115,22,0.14)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(160deg,#f97316,#fb923c)] text-white shadow-[0_18px_36px_-22px_rgba(249,115,22,0.4)]">
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

        {/* ── Provider pills + Install — inside hero ── */}
        <div className="relative z-10 mt-4 grid gap-3 xl:grid-cols-[1.02fr_0.98fr]">
          {/* Provider orbit */}
          <div className="landing-shipit-support-panel rounded-[30px] border border-[var(--color-border)] p-5 shadow-[0_24px_50px_-38px_rgba(15,23,42,0.24)]">
            <div className="landing-shipit-support-orbit">
              <div className="landing-shipit-support-ring landing-shipit-support-ring-a" />
              <div className="landing-shipit-support-ring landing-shipit-support-ring-b" />
              <div className="landing-shipit-support-core">
                <img
                  src="/shipit-icon.svg"
                  alt="ShipIt"
                  className="h-10 w-10"
                />
                <span>ShipIt</span>
              </div>
              {["Bedrock", "OpenAI", "Gemini", "Ollama", "Groq", "Custom"].map(
                (item, index) => (
                  <div
                    key={item}
                    className={`landing-shipit-support-node landing-shipit-support-node-${index + 1}`}
                  >
                    {item}
                  </div>
                ),
              )}
            </div>
            <div className="relative z-10 mt-3">
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-600 dark:text-orange-300">
                Multi-provider routing
              </div>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                One CLI across cloud and local inference. Switch with{" "}
                <code className="rounded bg-[var(--color-surface)]/80 px-1.5 py-0.5 text-[12px]">
                  /provider
                </code>{" "}
                and{" "}
                <code className="rounded bg-[var(--color-surface)]/80 px-1.5 py-0.5 text-[12px]">
                  /model
                </code>{" "}
                inside the REPL.
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {providerPills.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/86 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)] transition-all duration-300 hover:border-orange-400/25 hover:text-orange-600 dark:hover:text-orange-300"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Install compact */}
          <div className="rounded-[30px] border border-[var(--color-border)] bg-[var(--color-surface)]/86 p-5">
            <div className="flex items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/18 bg-[var(--color-accent)]/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                <Play size={12} /> Install
              </div>
              <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/84 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                Node &gt;= 18 &middot; MIT
              </span>
            </div>
            <div className="mt-4 grid gap-2.5">
              {installMethods.map((m, i) => (
                <div
                  key={m.title}
                  className="group rounded-[18px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/72 p-3.5 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-r ${m.gradient} text-[9px] font-bold text-white`}
                    >
                      0{i + 1}
                    </div>
                    <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                      {m.title}
                    </span>
                    <span className="ml-auto rounded-full border border-[var(--color-border)] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
                      {m.note}
                    </span>
                  </div>
                  <div className="mt-2.5 overflow-x-auto rounded-[12px] border border-[var(--color-border)] bg-[var(--color-surface)]/86 px-3 py-2 font-mono text-[11px] leading-5 text-[var(--color-text-secondary)]">
                    {m.code}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════ DETAIL CAROUSEL: local + features + tools ════════════════ */}
      <DetailCarousel detailRef={detailRef} detailVisible={detailVisible} />

      {/* ════════════════ FOOTER: dev flow + built for real usage ════════════════ */}
      <div
        ref={toolsRef}
        className={`stagger-children mt-5 grid gap-4 lg:grid-cols-2 ${toolsVisible ? "is-visible" : ""}`}
      >
        <div className="landing-shipit-terminal rounded-[32px] border border-white/8 p-5 shadow-[0_30px_60px_-38px_rgba(2,6,23,0.72)]">
          <div className="flex items-center justify-between gap-3 border-b border-white/8 pb-3">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              <Command size={10} className="mr-1 inline" /> Dev flow
            </div>
          </div>
          <div className="mt-3 grid gap-2">
            {[
              { cmd: "npm run dev", note: "Development" },
              { cmd: "npm run build", note: "Build" },
              { cmd: "npm test", note: "Tests" },
              { cmd: "npm run typecheck", note: "Types" },
              { cmd: "npm link", note: "Global link" },
            ].map(({ cmd, note }, index) => (
              <div key={cmd} className="group flex items-start gap-2.5">
                <span className="w-4 shrink-0 pt-0.5 text-right font-mono text-[10px] text-slate-600">
                  {index + 1}
                </span>
                <div className="flex-1 rounded-[10px] border border-white/6 bg-white/[0.03] px-3 py-2 transition-all duration-300 group-hover:border-[var(--color-accent)]/15 group-hover:bg-white/[0.05]">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[12px] leading-5 text-slate-300">
                      <span className="text-slate-500">$ </span>
                      {cmd}
                    </span>
                    <span className="text-[10px] text-slate-500">{note}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="landing-card-3d-inner rounded-[28px] border border-[var(--color-border)] bg-[var(--color-surface)]/86 p-5 shadow-[0_20px_40px_-34px_rgba(15,23,42,0.24)]">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(160deg,#f97316,#fb923c)] text-white shadow-sm">
              <WandSparkles size={16} />
            </div>
            <div>
              <div className="text-sm font-semibold text-[var(--color-text-primary)]">
                Built for real usage
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                TypeScript &middot; MIT &middot; Node &gt;= 18
              </div>
            </div>
          </div>
          <p className="mt-3 text-[13px] leading-6 text-[var(--color-text-secondary)]">
            Sessions resume, context compacts automatically, full-project
            scaffolding from zero, and the CLI keeps moving across real coding
            workflows.
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {[
              "Multi-provider",
              "40 tools",
              "HITL safety",
              "Auto-compact",
              "Image support",
              "Tab completion",
              "Rich diffs",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/88 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
