import StickySection from "../ui/StickySection";
import SectionLabel from "../ui/SectionLabel";
import { pipelineSteps } from "../data";

const stepColors = [
  "bg-blue-500",
  "bg-cyan-500",
  "bg-indigo-500",
  "bg-amber-500",
  "bg-green-500",
  "bg-violet-500",
  "bg-rose-500",
];

function PipelinePanel({ step, index, total }) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      {/* Left: step content */}
      <div>
        <span className="font-display text-7xl font-bold text-[var(--color-accent)]/15">
          {step.phase}
        </span>
        <h3 className="mt-2 font-display text-[clamp(1.5rem,3vw,2.5rem)] font-bold leading-tight text-[var(--color-text-primary)]">
          {step.title}
        </h3>
        <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--color-text-secondary)]">
          {step.summary}
        </p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--color-text-muted)]">
          {step.detail}
        </p>
        {step.artifacts && (
          <div className="mt-5 flex flex-wrap gap-2">
            {step.artifacts.split(", ").map((a) => (
              <span
                key={a}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs font-medium text-[var(--color-text-secondary)]"
              >
                {a}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Right: progress visualization */}
      <div className="flex items-center justify-center">
        <div className="w-full max-w-sm space-y-3">
          {pipelineSteps.map((s, i) => (
            <div key={s.phase} className="flex items-center gap-3">
              <div
                className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white transition-all duration-500 ${
                  i <= index
                    ? stepColors[i]
                    : "bg-[var(--color-surface)] text-[var(--color-text-muted)]"
                } ${i === index ? "scale-110 shadow-lg" : ""}`}
              >
                {s.phase}
              </div>
              <div className="flex-1">
                <div
                  className={`text-sm font-medium transition-colors duration-300 ${
                    i <= index
                      ? "text-[var(--color-text-primary)]"
                      : "text-[var(--color-text-muted)]"
                  } ${i === index ? "font-semibold" : ""}`}
                >
                  {s.title}
                </div>
              </div>
              {i < index && (
                <span className="text-xs text-green-500">✓</span>
              )}
              {i === index && (
                <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PipelineSection() {
  const panels = pipelineSteps.map((step, i) => ({
    content: (
      <PipelinePanel step={step} index={i} total={pipelineSteps.length} />
    ),
  }));

  return (
    <div>
      <div className="px-5 pt-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionLabel
            eyebrow="Pipeline"
            heading="Seven steps. Zero black boxes."
            description="Every stage is visible — from parsing your prompt to shipping the final result."
          />
        </div>
      </div>
      <StickySection id="pipeline" panels={panels} indicators />
    </div>
  );
}
