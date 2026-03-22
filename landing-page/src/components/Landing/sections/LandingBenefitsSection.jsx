import {
  ArrowRight,
  Clock,
  Eye,
  Layers,
  RefreshCw,
  Rocket,
  Shield,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import LandingSectionHeader from "../LandingSectionHeader";
import { audienceCards, benefitRows } from "../data";
import useScrollReveal from "../useScrollReveal";

const benefitSignals = [
  { text: "Solo execution", icon: Rocket },
  { text: "Learning clarity", icon: Eye },
  { text: "Team delivery", icon: Layers },
  { text: "Visible workflow", icon: Target },
];

const valuePills = [
  { text: "Less context switching", icon: RefreshCw },
  { text: "Clearer execution visibility", icon: Eye },
  { text: "Safer shipping decisions", icon: Shield },
];

const benefitIcons = [Clock, RefreshCw, Eye, Shield];

export default function LandingBenefitsSection() {
  const [sectionRef, sectionVisible] = useScrollReveal();
  const [cardsRef, cardsVisible] = useScrollReveal();
  const [audienceRef, audienceVisible] = useScrollReveal();

  return (
    <section id="benefits" className="mt-10">
      <div className="mx-auto max-w-4xl text-center">
        <LandingSectionHeader
          eyebrow="Benefits"
          title="Useful when you are working solo, learning deeply, or shipping with a team."
          desc="The value is not just code generation. The real advantage is that planning, implementation, review, testing, and delivery stay connected and visible."
        />

        <div ref={sectionRef} className={`stagger-children mt-5 flex flex-wrap justify-center gap-2.5 ${sectionVisible ? "is-visible" : ""}`}>
          {benefitSignals.map((item) => {
            const BenefitIcon = item.icon;
            return (
              <span
                key={item.text}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-3.5 py-2 text-[12px] font-medium text-[var(--color-text-secondary)] transition-all duration-300 hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-accent)]/5"
              >
                <BenefitIcon size={13} className="text-[var(--color-accent)]" />
                {item.text}
              </span>
            );
          })}
        </div>
      </div>

      {/* Hero value card — full width */}
      <div ref={cardsRef} className={`scroll-reveal mt-7 ${cardsVisible ? "is-visible" : ""}`}>
        <div className="landing-stage-card rounded-[30px] border border-[var(--color-accent)]/18 p-6 shadow-[0_26px_55px_-40px_rgba(37,99,235,0.18)]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/22 bg-[var(--color-accent)]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              <Sparkles size={12} className="animate-pulse" />
              Connected value
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
              <Zap size={10} className="text-amber-500" />
              Full-loop delivery
            </div>
          </div>
          <div className="mt-4 max-w-2xl text-2xl font-semibold leading-tight text-[var(--color-text-primary)] sm:text-3xl">
            Better than isolated prompts, because the whole loop stays together.
          </div>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--color-text-secondary)]">
            ShipIt is most useful when generation is only one step inside a
            larger workflow. You can plan, implement, review, test, and
            ship without losing context or hiding what the system is doing.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {valuePills.map((item) => {
              const PillIcon = item.icon;
              return (
                <span
                  key={item.text}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/82 px-3.5 py-2 text-[12px] font-medium text-[var(--color-text-secondary)] transition-all duration-300 hover:border-[var(--color-accent)]/30"
                >
                  <PillIcon size={12} className="text-[var(--color-accent)]" />
                  {item.text}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Benefit rows — 4 equal columns */}
      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {benefitRows.map((item, index) => {
          const RowIcon = benefitIcons[index] || Zap;
          return (
            <div
              key={item.title}
              className="landing-card-3d-inner group rounded-[22px] border border-[var(--color-border)] bg-[var(--color-surface)]/78 p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)]/20 hover:shadow-md"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[#6366F1] text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <RowIcon size={14} />
                </span>
                <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                  {item.title}
                </span>
              </div>
              <p className="mt-2.5 text-sm leading-6 text-[var(--color-text-secondary)]">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Audience section */}
      <div ref={audienceRef} className={`scroll-reveal mt-5 ${audienceVisible ? "is-visible" : ""}`}>
        <div className="rounded-[30px] border border-[var(--color-border)] bg-[var(--color-surface)]/88 p-5 shadow-[0_26px_55px_-40px_rgba(15,23,42,0.4)]">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/22 bg-[var(--color-accent)]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              <Target size={12} />
              Who it is for
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
              <ArrowRight size={10} />
              Personal to team use
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {audienceCards.map(({ icon: Icon, title, desc }, index) => (
              <div
                key={title}
                className={`landing-card-3d-inner group rounded-[22px] border p-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-34px_rgba(37,99,235,0.16)] ${
                  index === 0
                    ? "border-[var(--color-accent)]/22 bg-[linear-gradient(160deg,var(--color-surface),rgba(59,130,246,0.06))]"
                    : "border-[var(--color-border)] bg-[var(--color-surface)]/84"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(160deg,var(--color-accent),#6366F1)] text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                    <Icon size={17} />
                  </div>
                  <div className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                    0{index + 1}
                  </div>
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
        </div>
      </div>
    </section>
  );
}
