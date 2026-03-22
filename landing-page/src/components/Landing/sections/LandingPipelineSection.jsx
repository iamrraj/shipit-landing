import { ChevronLeft, ChevronRight, Pause, Play, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import LandingSectionHeader from "../LandingSectionHeader";
import { PipelineStepIllustration } from "../LandingIllustrations";
import { pipelineSteps } from "../data";
import useScrollReveal from "../useScrollReveal";

const AUTO_ADVANCE_MS = 2000;

export default function LandingPipelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [carouselRef, carouselVisible] = useScrollReveal();
  const [bottomRef, bottomVisible] = useScrollReveal();

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const timerId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % pipelineSteps.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timerId);
  }, [isPaused]);

  const goToStep = (index) => {
    setActiveIndex(index);
  };

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? pipelineSteps.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % pipelineSteps.length);
  };

  return (
    <section id="pipeline" className="mt-6">
      <LandingSectionHeader
        eyebrow="Pipeline"
        title="A visible multi-stage workflow instead of a black box."
        desc="See the delivery loop in a tighter, stage-by-stage view instead of reading through a long process wall."
      />
      <div className="mt-7">
        <div
          ref={carouselRef}
          className={`scroll-reveal landing-stage-card rounded-[36px] border border-[var(--color-border)] p-5 shadow-[0_30px_70px_-46px_rgba(15,23,42,0.42)] backdrop-blur-xl sm:p-6 ${carouselVisible ? "is-visible" : ""}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-40" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              </span>
              Structured execution
            </div>
            <div className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
              From prompt to delivery
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {[
                "Parse -> validate -> implement",
                "Review + fix loop",
                "Tests and report visible",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/86 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsPaused((current) => !current)}
                className={`inline-flex h-11 w-11 items-center justify-center rounded-full border text-[var(--color-text-secondary)] transition-all duration-300 ${
                  isPaused
                    ? "border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                    : "border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                }`}
                aria-label={isPaused ? "Resume carousel" : "Pause carousel"}
              >
                {isPaused ? <Play size={16} /> : <Pause size={16} />}
              </button>
              <button
                type="button"
                onClick={goToPrevious}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] transition-all duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:shadow-[0_8px_20px_-10px_rgba(37,99,235,0.2)]"
                aria-label="Previous step"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] transition-all duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:shadow-[0_8px_20px_-10px_rgba(37,99,235,0.2)]"
                aria-label="Next step"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="mt-5 grid gap-5 xl:grid-cols-[1.02fr_0.98fr]">
            <div className="landing-pipeline-visual-panel rounded-[30px] border border-[var(--color-border)] p-4">
              <PipelineStepIllustration
                steps={pipelineSteps}
                activeIndex={activeIndex}
              />
            </div>

            <div className="overflow-hidden rounded-[30px] border border-[var(--color-border)] bg-[linear-gradient(135deg,var(--color-surface),var(--color-bg-secondary))] shadow-[0_18px_36px_-30px_rgba(15,23,42,0.45)]">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {pipelineSteps.map((step, index) => (
                  <article
                    key={step.phase}
                    className="w-full shrink-0 p-5 sm:p-6"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-text-muted)]">
                          Step {step.phase}
                        </div>
                        <div className="mt-2 text-2xl font-semibold text-[var(--color-text-primary)]">
                          {step.title}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 rounded-full border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                        <span className={`h-2 w-2 rounded-full ${index <= activeIndex ? "bg-[var(--color-accent)]" : "bg-[var(--color-border)]"}`} />
                        Stage {index + 1}
                      </div>
                    </div>

                    <div className="mt-5 rounded-[24px] border border-[var(--color-border)] bg-[var(--color-surface)]/82 p-4">
                      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                        <Sparkles size={12} />
                        What happens here
                      </div>
                      <p className="mt-3 text-base font-semibold leading-7 text-[var(--color-text-primary)]">
                        {step.summary}
                      </p>
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-[22px] border border-[var(--color-border)] bg-[var(--color-surface)]/76 p-4">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                          Output
                        </div>
                        <div className="mt-2 text-sm leading-7 text-[var(--color-text-primary)]">
                          {step.artifacts}
                        </div>
                      </div>
                      <div className="rounded-[22px] border border-[var(--color-border)] bg-[var(--color-surface)]/76 p-4">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                          Why it matters
                        </div>
                        <div className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">
                          {step.detail.split(".")[0]}.
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-[var(--color-border)]/50">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[#6366F1] transition-all duration-700"
                        style={{
                          width: `${((index + 1) / pipelineSteps.length) * 100}%`,
                        }}
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {pipelineSteps.map((step, index) => (
              <button
                key={step.phase}
                type="button"
                onClick={() => goToStep(index)}
                className={`rounded-full border px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                  index === activeIndex
                    ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white shadow-[0_16px_40px_-28px_rgba(37,99,235,0.55)]"
                    : index < activeIndex
                      ? "border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10"
                      : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                }`}
              >
                {step.phase} {step.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div ref={bottomRef} className={`mt-5 ${bottomVisible ? "" : ""}`}>
        <div className={`stagger-children grid gap-4 md:grid-cols-3 ${bottomVisible ? "is-visible" : ""}`}>
          {[
            {
              title: "Safer execution",
              desc: "Validation, review, fixes, and tests reduce reckless one-shot automation.",
            },
            {
              title: "Better visibility",
              desc: "Each stage exposes progress, outputs, and intent instead of hiding the work.",
            },
            {
              title: "Faster trust",
              desc: "People can scan the flow quickly, understand what happened, and keep iterating.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="landing-card-3d-inner rounded-[24px] border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-4 shadow-[0_18px_36px_-30px_rgba(15,23,42,0.22)]"
            >
              <div className="text-sm font-semibold text-[var(--color-text-primary)]">
                {item.title}
              </div>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
