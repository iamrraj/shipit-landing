import { ArrowRight, Code2, Cpu, Users } from "lucide-react";
import LandingSectionHeader from "../LandingSectionHeader";
import { detailSections } from "../data";
import useScrollReveal from "../useScrollReveal";

export default function LandingDetailsSection() {
  const [mainDetail, personalDetail, professionalDetail] = detailSections;
  const [leftRef, leftVisible] = useScrollReveal();
  const [rightRef, rightVisible] = useScrollReveal();

  const narrativeSteps = [
    { label: "Task parser structures the request", color: "bg-sky-500" },
    { label: "Project detector maps the workspace", color: "bg-indigo-500" },
    { label: "Engine writes the changes", color: "bg-violet-500" },
    {
      label: "Review, fixes, tests, and reporting close the loop",
      color: "bg-emerald-500",
    },
  ];

  return (
    <section id="details" className="mt-6">
      <div className="mx-auto max-w-4xl text-center">
        <LandingSectionHeader
          eyebrow="How It Works"
          title="The product story explained in a way that new users can actually understand."
          desc="This section turns the README and analysis report into a cleaner narrative for visitors who want to understand how ShipIt works and why it is useful."
        />
      </div>

      <div className="mt-7 rounded-[36px] border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-5 shadow-[0_30px_70px_-46px_rgba(15,23,42,0.42)] backdrop-blur-xl sm:p-6">
        <div className="grid items-start gap-5 lg:grid-cols-2">
          {/* Left column */}
          <div
            ref={leftRef}
            className={`scroll-reveal-left grid content-start gap-4 ${leftVisible ? "is-visible" : ""}`}
          >
            <div className="landing-stage-card rounded-[28px] border border-[var(--color-accent)]/18 p-5 shadow-[0_22px_45px_-36px_rgba(37,99,235,0.18)]">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                <Code2 size={12} />
                How it works
              </div>
              <div className="mt-3 text-2xl font-semibold leading-tight text-[var(--color-text-primary)]">
                {mainDetail.title}
              </div>
              <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                {mainDetail.desc}
              </p>

              {/* Connected step visualization */}
              <div className="mt-4 grid gap-0">
                {narrativeSteps.map((item, index) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="flex flex-col items-center">
                      <div
                        className={`h-3 w-3 rounded-full ${item.color} shadow-sm`}
                      />
                      {index < narrativeSteps.length - 1 && (
                        <div className="h-8 w-px bg-gradient-to-b from-[var(--color-accent)]/30 to-transparent" />
                      )}
                    </div>
                    <div className="rounded-[16px] border border-[var(--color-border)] bg-[var(--color-surface)]/76 px-3.5 py-2 text-sm leading-6 text-[var(--color-text-secondary)] transition-all duration-300 hover:border-[var(--color-accent)]/25 -mt-1 mb-0.5">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Appearance screenshot */}
            <div className="overflow-hidden rounded-[16px] border border-[var(--color-border)] shadow-sm">
              <img src="/screenshots/appearance.png" alt="ShipIt Appearance settings" className="w-full object-cover" loading="lazy" />
            </div>

            {/* Summary stats */}
            <div className="rounded-[20px] border border-[var(--color-accent)]/15 bg-[linear-gradient(160deg,var(--color-accent)/5,transparent)] p-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { value: "10+", label: "Pipeline stages" },
                  { value: "1", label: "Operator surface" },
                  { value: "∞", label: "Workflow clarity" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-2xl font-semibold text-[var(--color-accent)]">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs text-[var(--color-text-muted)]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div
            ref={rightRef}
            className={`scroll-reveal-right grid content-start gap-4 ${rightVisible ? "is-visible" : ""}`}
          >
            <div className="landing-card-3d-inner rounded-[24px] border border-[var(--color-border)] bg-[var(--color-surface)]/82 p-5 shadow-[0_24px_45px_-36px_rgba(15,23,42,0.4)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_55px_-34px_rgba(37,99,235,0.14)]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600">
                  <Cpu size={18} />
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-text-muted)]">
                  Personal value
                </div>
              </div>
              <div className="mt-3 text-xl font-semibold text-[var(--color-text-primary)]">
                {personalDetail.title}
              </div>
              <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">
                {personalDetail.desc}
              </p>
              <div className="mt-3 flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] transition-all duration-300 hover:gap-3">
                Faster solo execution
                <ArrowRight size={14} />
              </div>
            </div>

            <div className="landing-card-3d-inner rounded-[24px] border border-[var(--color-border)] bg-[var(--color-surface)]/82 p-5 shadow-[0_24px_45px_-36px_rgba(15,23,42,0.4)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_55px_-34px_rgba(37,99,235,0.14)]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600">
                  <Users size={18} />
                </div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-text-muted)]">
                  Professional value
                </div>
              </div>
              <div className="mt-3 text-xl font-semibold text-[var(--color-text-primary)]">
                {professionalDetail.title}
              </div>
              <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">
                {professionalDetail.desc}
              </p>
              <div className="mt-3 flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] transition-all duration-300 hover:gap-3">
                Better team workflows
                <ArrowRight size={14} />
              </div>
            </div>

            {/* Pipeline screenshot */}
            <div className="overflow-hidden rounded-[16px] border border-[var(--color-border)] shadow-sm">
              <img src="/screenshots/pipeline.png" alt="ShipIt Pipeline execution" className="w-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
