import StickySection from "../ui/StickySection";
import SectionLabel from "../ui/SectionLabel";
import { supportedEngines } from "../data";

const engineVisuals = [
  {
    gradient: "from-orange-500 to-amber-500",
    icon: "/shipit-icon.svg",
    tagline: "Your models, your rules",
    highlight: "Route across 9 providers — AWS Bedrock, OpenAI, Gemini, Vertex AI, Groq, Ollama, Together AI, OpenRouter.",
  },
  {
    gradient: "from-purple-500 to-violet-600",
    icon: "/claude-icon.svg",
    tagline: "Strongest reasoning",
    highlight: "Anthropic Claude — best-in-class planning, code review, and complex multi-step tasks.",
  },
  {
    gradient: "from-blue-500 to-cyan-500",
    icon: "/codex-icon.png",
    tagline: "Optimized for code",
    highlight: "OpenAI Codex — fast code generation, completions, and direct code manipulation.",
  },
  {
    gradient: "from-cyan-400 to-teal-500",
    icon: "/gemini-icon.png",
    tagline: "Multimodal power",
    highlight: "Google Gemini — multimodal reasoning with code, images, and long context windows.",
  },
];

function EnginePanel({ engine, visual, index }) {
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
          {engine.name}
        </h3>
        <p className="mt-2 text-sm font-medium text-[var(--color-accent)]">
          {visual.tagline}
        </p>
        <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--color-text-secondary)]">
          {visual.highlight}
        </p>

        {/* Models or providers */}
        <div className="mt-6 flex flex-wrap gap-2">
          {engine.models
            ? engine.models.map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-secondary)]"
                >
                  {m}
                </span>
              ))
            : engine.providers?.slice(0, 5).map((p) => (
                <span
                  key={p.name}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-secondary)]"
                >
                  {p.name}
                </span>
              ))}
        </div>
      </div>

      {/* Right: visual */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <div
            className={`absolute -inset-8 rounded-full bg-gradient-to-br ${visual.gradient} opacity-10 blur-3xl`}
          />
          <div className="relative flex h-48 w-48 items-center justify-center rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-xl">
            <img
              src={visual.icon}
              alt={engine.name}
              className="h-20 w-20 rounded-2xl object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EnginesSection() {
  const panels = supportedEngines.map((engine, i) => ({
    content: (
      <EnginePanel
        engine={engine}
        visual={engineVisuals[i]}
        index={i}
      />
    ),
  }));

  return (
    <div>
      <div className="px-5 pt-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionLabel
            eyebrow="Engines"
            heading="Four engines. One surface."
            description="Choose the right engine and model for every task — switch with one click, no config files."
          />
        </div>
      </div>
      <StickySection id="engines" panels={panels} indicators />
    </div>
  );
}
