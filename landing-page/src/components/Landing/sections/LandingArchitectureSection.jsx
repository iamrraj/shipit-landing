import LandingSectionHeader from "../LandingSectionHeader";
import { architectureLayers, stackItems } from "../data";
import useScrollReveal from "../useScrollReveal";

export default function LandingArchitectureSection() {
  const architectureHighlights = stackItems.slice(0, 6);
  const [topRef, topVisible] = useScrollReveal();
  const [layersRef, layersVisible] = useScrollReveal();

  return (
    <section id="architecture" className="mt-6">
      <div className="mx-auto max-w-4xl text-center">
        <LandingSectionHeader
          eyebrow="Architecture"
          title="Frontend, API, engines, and integrations laid out in one story."
          desc="The code is separated cleanly: React UI on top, FastAPI + SSE in the middle, engines and clients underneath."
        />
        <div ref={topRef} className={`stagger-children mt-5 flex flex-wrap justify-center gap-2 ${topVisible ? "is-visible" : ""}`}>
          {architectureHighlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-3.5 py-1.5 text-[12px] font-medium text-[var(--color-text-secondary)] transition-all duration-300 hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-accent)]/5"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-7 rounded-[36px] border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-5 shadow-[0_30px_70px_-46px_rgba(15,23,42,0.42)] backdrop-blur-xl sm:p-6">
        <div className="grid items-start gap-5 xl:grid-cols-[1.02fr_0.98fr]">
          <div className="grid content-start gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-40" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              </span>
              System view
            </div>
            <div className="landing-stage-card rounded-[28px] border border-[var(--color-accent)]/18 p-5 shadow-[0_22px_45px_-36px_rgba(37,99,235,0.2)]">
              <div className="text-2xl font-semibold text-[var(--color-text-primary)]">
                One UI on top, one delivery spine underneath.
              </div>
              <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                The frontend is the visible operator surface. Under it sit the
                API bridge, task engines, and connected clients that turn
                prompts into controlled delivery work.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { label: "Streaming UI and session state", icon: "sky" },
                { label: "REST + SSE orchestration", icon: "indigo" },
                { label: "Engines and external clients", icon: "emerald" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="landing-card-3d-inner rounded-[22px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/84 p-4"
                >
                  <div className="flex items-center gap-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                    <span className={`h-2 w-2 rounded-full ${
                      item.icon === "sky" ? "bg-sky-500" : item.icon === "indigo" ? "bg-indigo-500" : "bg-emerald-500"
                    }`} />
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[20px] border border-[var(--color-border)] shadow-sm">
            <img src="/screenshots/mcp.png" alt="ShipIt MCP Server configuration" className="w-full object-cover" loading="lazy" />
          </div>
        </div>

        <div ref={layersRef} className={`scroll-reveal mt-5 rounded-[30px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/42 p-5 ${layersVisible ? "is-visible" : ""}`}>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              Layered stack
            </div>
            <div className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
              Frontend to integrations
            </div>
          </div>

          <div className={`stagger-children grid gap-4 lg:grid-cols-2 ${layersVisible ? "is-visible" : ""}`}>
            {architectureLayers.map(({ icon: Icon, title, desc }, index) => {
              const layerColors = ["bg-sky-500/10 text-sky-600", "bg-indigo-500/10 text-indigo-600", "bg-violet-500/10 text-violet-600", "bg-emerald-500/10 text-emerald-600"];
              return (
                <div
                  key={title}
                  className={`group landing-card-3d-inner flex gap-4 rounded-[24px] border p-5 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-34px_rgba(37,99,235,0.2)] ${
                    index === 0
                      ? "border-[var(--color-accent)]/22 bg-[linear-gradient(160deg,var(--color-surface),rgba(59,130,246,0.08))]"
                      : "border-[var(--color-border)] bg-[var(--color-surface)]/82"
                  }`}
                >
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-sm transition group-hover:scale-110 ${layerColors[index]}`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-text-muted)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                      Layer {index + 1}
                    </div>
                    <div className="mt-2 text-lg font-semibold text-[var(--color-text-primary)]">
                      {title}
                    </div>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">
                      {desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
