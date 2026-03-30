import StickySection from "../ui/StickySection";
import SectionLabel from "../ui/SectionLabel";
import {
  SecurityScanSVG,
  WorkflowSVG,
  ChatInterfaceSVG,
  IntegrationHubSVG,
} from "../svg/FeatureAnimations";

const features = [
  {
    title: "Security Scanner",
    subtitle: "Aikido-style vulnerability scanning",
    desc: "Deep 6-phase scan with Bandit, Semgrep, OWASP 2025, secret detection, license compliance, and AI-powered auto-fix.",
    Visual: SecurityScanSVG,
    accent: "text-red-400",
  },
  {
    title: "Visual Workflows",
    subtitle: "Drag-and-drop workflow builder",
    desc: "30+ templates, 17 step types, AI prompt generation, auto-save, and live SSE execution with real-time progress.",
    Visual: WorkflowSVG,
    accent: "text-green-400",
  },
  {
    title: "AI Chat",
    subtitle: "Claude Code-style chat in browser",
    desc: "4 engines, 100+ models, real-time SSE streaming, tool call visualization, file previews, and syntax-highlighted diffs.",
    Visual: ChatInterfaceSVG,
    accent: "text-blue-400",
  },
  {
    title: "30+ Integrations",
    subtitle: "Everything connected in one workspace",
    desc: "Claude, Codex, Gemini, GitHub, Slack, Discord, MCP servers, Langfuse, PostgreSQL, and dozens more out of the box.",
    Visual: IntegrationHubSVG,
    accent: "text-purple-400",
  },
];

function FeaturePanel({ feature, index }) {
  const Visual = feature.Visual;
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      {/* Left: text */}
      <div>
        <div className="mb-3 flex items-center gap-3">
          <span className="font-display text-5xl font-bold text-[var(--color-text-muted)]/30">
            0{index + 1}
          </span>
        </div>
        <h3 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-bold leading-tight text-[var(--color-text-primary)]">
          {feature.title}
        </h3>
        <p className={`mt-2 text-sm font-medium ${feature.accent}`}>
          {feature.subtitle}
        </p>
        <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--color-text-secondary)]">
          {feature.desc}
        </p>
      </div>

      {/* Right: SVG animation */}
      <div className="flex items-center justify-center">
        <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
          <Visual />
        </div>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  const panels = features.map((feature, i) => ({
    content: <FeaturePanel feature={feature} index={i} />,
  }));

  return (
    <div>
      <div className="px-5 pt-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionLabel
            eyebrow="Features"
            heading="Everything you need to ship."
            description="Security scanning, visual workflows, AI chat, and 30+ integrations — all from one workspace."
          />
        </div>
      </div>
      <StickySection id="features" panels={panels} indicators />
    </div>
  );
}
