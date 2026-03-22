import { useState } from "react";
import LandingSectionHeader from "../LandingSectionHeader";
import { audienceCards } from "../data";
import useScrollReveal from "../useScrollReveal";

const useCaseHighlights = [
  "Side projects",
  "Learning loops",
  "Team workflows",
  "Open-source onboarding",
];

const audienceDetails = [
  {
    eyebrow: "Personal Flow",
    title: "Build faster without losing your place.",
    desc: "For side projects and solo experiments, ShipIt keeps prompts, file context, reviews, tests, and delivery steps in one working surface so you spend less time reloading context.",
    bullets: [
      "Fewer repetitive setup steps before you can start shipping",
      "One place for prompts, diffs, tests, and repo actions",
      "Useful when you want momentum instead of process overhead",
    ],
    footer: "Best when you want feature velocity with visible control.",
    accentColor: "sky",
  },
  {
    eyebrow: "Learning Mode",
    title: "See how real delivery work actually happens.",
    desc: "The visible pipeline makes ShipIt useful for learning, not just generating. You can follow how a task is parsed, implemented, reviewed, tested, and reported across a real repository.",
    bullets: [
      "Good for understanding the shape of production workflows",
      "Makes architecture decisions easier to connect to code changes",
      "Helps learners inspect the process instead of only the result",
    ],
    footer: "Best when you want understanding, not just output.",
    accentColor: "violet",
  },
  {
    eyebrow: "Team Delivery",
    title: "Keep implementation, review, and reporting aligned.",
    desc: "For professional work, ShipIt acts like a shared operator surface where coding, quality checks, notifications, and delivery status stay connected instead of being scattered across tools.",
    bullets: [
      "Better handoff between coding, review, and testing stages",
      "Clearer visibility for branch flow, notifications, and results",
      "More disciplined automation than one-shot generation",
    ],
    footer: "Best when teams need speed with guardrails.",
    accentColor: "indigo",
  },
  {
    eyebrow: "Open Source",
    title: "Make the product easier to understand and contribute to.",
    desc: "A good open-source surface should explain itself. This mode is about helping contributors grasp workflow, structure, and intent faster so the codebase feels approachable.",
    bullets: [
      "Better onboarding for new contributors and maintainers",
      "Clearer mapping between product claims and actual architecture",
      "Less guesswork around how the system is supposed to work",
    ],
    footer: "Best when clarity matters as much as capability.",
    accentColor: "emerald",
  },
];

export default function LandingUseCasesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentCard = audienceCards[activeIndex];
  const currentDetail = audienceDetails[activeIndex];
  const ActiveIcon = currentCard.icon;
  const [headerRef, headerVisible] = useScrollReveal();
  const [contentRef, contentVisible] = useScrollReveal();
  const [cardsRef, cardsVisible] = useScrollReveal();

  return (
    <section className="mt-10">
      <div className="mx-auto max-w-4xl text-center">
        <LandingSectionHeader
          eyebrow="Use Cases"
          title="From solo building to team delivery, without changing how you work."
          desc="ShipIt should feel useful in real life, not only impressive on paper: faster personal execution, clearer learning loops, more disciplined team delivery, and easier open-source onboarding."
        />

        <div ref={headerRef} className={`stagger-children mt-5 flex flex-wrap justify-center gap-2 ${headerVisible ? "is-visible" : ""}`}>
          {useCaseHighlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-3 py-1.5 text-[12px] font-medium text-[var(--color-text-secondary)] transition-all duration-300 hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-accent)]/5"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div ref={contentRef} className={`scroll-reveal mt-7 rounded-[36px] border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-5 shadow-[0_30px_70px_-46px_rgba(15,23,42,0.42)] backdrop-blur-xl sm:p-6 ${contentVisible ? "is-visible" : ""}`}>
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
            Real workflows
          </div>
          <div className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
            Choose a working mode
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {audienceCards.map((card, index) => (
            <button
              key={card.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-full border px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                index === activeIndex
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white shadow-[0_16px_40px_-28px_rgba(37,99,235,0.55)] scale-[1.03]"
                  : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              }`}
            >
              {card.title}
            </button>
          ))}
        </div>

        <div className="mt-5 grid items-start gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          {/* Left detail panel */}
          <div className="grid content-start gap-4">
            <div className="landing-stage-card rounded-[28px] border border-[var(--color-accent)]/20 p-6 shadow-[0_22px_45px_-36px_rgba(37,99,235,0.22)]">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                {currentDetail.eyebrow}
              </div>
              <div className="mt-3 text-3xl font-semibold leading-tight text-[var(--color-text-primary)]">
                {currentDetail.title}
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--color-text-secondary)]">
                {currentDetail.desc}
              </p>

              <div className="mt-6 grid gap-2.5">
                {currentDetail.bullets.map((bullet, idx) => (
                  <div
                    key={bullet}
                    className="flex items-start gap-3 rounded-[20px] border border-[var(--color-border)] bg-[var(--color-surface)]/74 px-4 py-3 text-sm leading-6 text-[var(--color-text-secondary)] transition-all duration-300 hover:border-[var(--color-accent)]/20"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[10px] font-bold text-[var(--color-accent)]">
                      {idx + 1}
                    </span>
                    {bullet}
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[20px] border border-[var(--color-accent)]/15 bg-[var(--color-accent)]/5 px-4 py-3 text-sm font-medium text-[var(--color-text-primary)]">
                {currentDetail.footer}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {["Faster context", "Visible process", "Safer delivery"].map(
                (item) => (
                  <div
                    key={item}
                    className="landing-card-3d-inner rounded-[22px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/84 p-4 transition-all duration-300 hover:border-[var(--color-accent)]/20"
                  >
                    <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                      {item}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Right illustration + summary */}
          <div className="grid gap-4">
            <div className="overflow-hidden rounded-[16px] border border-[var(--color-border)] shadow-sm">
              <img src="/screenshots/discord.png" alt="ShipIt Discord integration" className="w-full object-cover" loading="lazy" />
            </div>

            <div className="landing-card-3d-inner rounded-[26px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/82 p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(160deg,var(--color-accent),#6366F1)] text-white shadow-sm">
                  <ActiveIcon size={19} />
                </div>
                <div className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Active use case
                </div>
              </div>
              <div className="mt-4 text-xl font-semibold text-[var(--color-text-primary)]">
                {currentCard.title}
              </div>
              <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                {currentCard.desc}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div ref={cardsRef} className={`stagger-children mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 ${cardsVisible ? "is-visible" : ""}`}>
        {audienceCards.map(({ icon: Icon, title, desc }, index) => (
          <button
            key={title}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`landing-card-3d-inner rounded-[30px] border p-5 shadow-[0_22px_45px_-34px_rgba(15,23,42,0.4)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_55px_-34px_rgba(37,99,235,0.22)] ${
              index === activeIndex
                ? "border-[var(--color-accent)]/25 bg-[linear-gradient(160deg,var(--color-surface),rgba(59,130,246,0.08))] ring-1 ring-[var(--color-accent)]/10"
                : "border-[var(--color-border)] bg-[var(--color-surface)]/82"
            } text-left`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm transition-all duration-300 ${
                index === activeIndex
                  ? "bg-[linear-gradient(160deg,var(--color-accent),#6366F1)] text-white"
                  : "bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)]"
              }`}>
                <Icon size={19} />
              </div>
              <div className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                0{index + 1}
              </div>
            </div>

            <div className="mt-4 text-lg font-semibold text-[var(--color-text-primary)]">
              {title}
            </div>
            <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
              {desc}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}
