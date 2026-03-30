import StickySection from "../ui/StickySection";
import SectionLabel from "../ui/SectionLabel";
import { architectureLayers } from "../data";

const layerColors = [
  { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400", bar: "bg-blue-500" },
  { bg: "bg-cyan-500/10", border: "border-cyan-500/20", text: "text-cyan-400", bar: "bg-cyan-500" },
  { bg: "bg-violet-500/10", border: "border-violet-500/20", text: "text-violet-400", bar: "bg-violet-500" },
  { bg: "bg-amber-500/10", border: "border-amber-500/20", text: "text-amber-400", bar: "bg-amber-500" },
];

function ArchitecturePanel({ layer, index }) {
  const Icon = layer.icon;
  const color = layerColors[index];

  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      {/* Left: layer description */}
      <div>
        <span className={`mb-3 inline-block text-xs font-semibold uppercase tracking-wider ${color.text}`}>
          Layer {index + 1} of 4
        </span>
        <h3 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-bold leading-tight text-[var(--color-text-primary)]">
          {layer.title}
        </h3>
        <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--color-text-secondary)]">
          {layer.desc}
        </p>
      </div>

      {/* Right: stacked layers diagram */}
      <div className="space-y-3">
        {architectureLayers.map((l, i) => {
          const c = layerColors[i];
          const isActive = i <= index;
          const isCurrent = i === index;
          const LayerIcon = l.icon;

          return (
            <div
              key={l.title}
              className={`flex items-center gap-4 rounded-xl border p-4 transition-all duration-500 ${
                isActive
                  ? `${c.bg} ${c.border}`
                  : "border-[var(--color-border)]/50 bg-[var(--color-surface)]/50 opacity-30"
              } ${isCurrent ? "scale-[1.02] shadow-lg" : ""}`}
            >
              <div
                className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${
                  isActive ? c.bar : "bg-[var(--color-surface)]"
                }`}
              >
                <LayerIcon
                  size={18}
                  className={isActive ? "text-white" : "text-[var(--color-text-muted)]"}
                />
              </div>
              <div>
                <div
                  className={`text-sm font-semibold ${
                    isActive
                      ? "text-[var(--color-text-primary)]"
                      : "text-[var(--color-text-muted)]"
                  }`}
                >
                  {l.title}
                </div>
                <div className="mt-0.5 text-xs text-[var(--color-text-muted)] line-clamp-1">
                  {l.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ArchitectureSection() {
  const panels = architectureLayers.map((layer, i) => ({
    content: <ArchitecturePanel layer={layer} index={i} />,
  }));

  return (
    <div>
      <div className="px-5 pt-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionLabel
            eyebrow="Architecture"
            heading="Clean layers. No magic."
            description="React UI on top, FastAPI + SSE in the middle, engines and integrations underneath."
          />
        </div>
      </div>
      <StickySection id="architecture" panels={panels} indicators />
    </div>
  );
}
