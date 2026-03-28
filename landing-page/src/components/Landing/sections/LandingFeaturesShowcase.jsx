import { useState } from "react";
import {
  Shield,
  Workflow,
  Terminal,
  Globe,
  ArrowRight,
} from "lucide-react";
import useScrollReveal from "../useScrollReveal";
import {
  IntegrationHubSVG,
  WorkflowSVG,
  SecurityScanSVG,
  ChatInterfaceSVG,
} from "../svg/FeatureAnimations";

const features = [
  {
    id: "security",
    icon: Shield,
    color: "from-red-500 to-orange-500",
    label: "Security",
    title: "Aikido-style vulnerability scanner",
    desc: "6-phase deep scan with Bandit, Semgrep, secret detection, license compliance, and AI penetration testing with OWASP 2025 coverage.",
    bullets: ["OWASP 2025", "SAST + SCA", "18 pentest patterns", "AI auto-fix"],
    Illustration: SecurityScanSVG,
  },
  {
    id: "workflow",
    icon: Workflow,
    color: "from-blue-500 to-indigo-500",
    label: "Workflows",
    title: "Drag-and-drop workflow builder",
    desc: "30+ templates, 17 step types, AI prompt generation, auto-save, and live SSE execution with real-time progress.",
    bullets: ["30+ templates", "17 step types", "Live execution", "Auto-save"],
    Illustration: WorkflowSVG,
  },
  {
    id: "chat",
    icon: Terminal,
    color: "from-violet-500 to-purple-500",
    label: "AI Chat",
    title: "Claude Code-style chat in browser",
    desc: "4 engines, 100+ models, expandable file previews, syntax diffs, tool call visualization, and smart pipeline that skips unnecessary steps.",
    bullets: ["4 engines", "100+ models", "File preview", "Tool viz"],
    Illustration: ChatInterfaceSVG,
  },
  {
    id: "integrations",
    icon: Globe,
    color: "from-cyan-500 to-teal-500",
    label: "Integrations",
    title: "30+ tools in one workspace",
    desc: "Claude, Codex, Gemini, ShipIt, GitHub, Slack, Discord, MCP servers, Langfuse, PostgreSQL, MySQL, and scheduled pipelines.",
    bullets: ["30+ MCP", "Slack + Discord", "Langfuse", "GitHub orgs"],
    Illustration: IntegrationHubSVG,
  },
];

export default function LandingFeaturesShowcase({ onJoinWaitlist }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [sectionRef, visible] = useScrollReveal();
  const active = features[activeIdx];
  const ActiveIllustration = active.Illustration;

  return (
    <section id="features-showcase" className="mt-10" ref={sectionRef}>
      <div className={`scroll-reveal ${visible ? "is-visible" : ""}`}>
        {/* Compact tab bar */}
        <div className="flex items-center justify-center border-b border-[var(--color-border)]">
          {features.map((f, idx) => {
            const Icon = f.icon;
            const isActive = idx === activeIdx;
            return (
              <button
                key={f.id}
                onClick={() => setActiveIdx(idx)}
                className={`flex items-center gap-1.5 border-b-2 px-5 py-3 text-[13px] font-semibold transition ${
                  isActive
                    ? "border-[var(--color-accent)] text-[var(--color-accent)]"
                    : "border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                <Icon size={14} />
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Content: info left, compact SVG right */}
        <div className="mt-6 grid items-center gap-6 lg:grid-cols-2">
          {/* Left: Info */}
          <div>
            <div className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${active.color} px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white`}>
              <active.icon size={10} />
              {active.label}
            </div>
            <h3 className="mt-3 text-xl font-bold leading-snug text-[var(--color-text-primary)] sm:text-2xl">
              {active.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">{active.desc}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {active.bullets.map((b) => (
                <span key={b} className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-2.5 py-1 text-[10px] font-medium text-[var(--color-text-secondary)]">
                  {b}
                </span>
              ))}
            </div>
            <button onClick={onJoinWaitlist} className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)]">
              Get started <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Right: Animated SVG — constrained height */}
          <div className="flex items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/40 p-5">
            <div className="w-3/5 max-w-[380px]">
              <ActiveIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
