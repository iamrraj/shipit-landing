import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import LandingSectionHeader from "../LandingSectionHeader";
import { featureCards } from "../data";
import useScrollReveal from "../useScrollReveal";

const AUTO_SCROLL_MS = 3200;
const offerSignals = [
  "Operator-first UI",
  "Automation surfaces",
  "Review and delivery",
];
const offerStats = [
  { value: "8", label: "visible feature areas" },
  { value: "1", label: "connected workspace" },
  { value: "360°", label: "product-view showcase" },
];

export default function LandingOfferSection() {
  const scrollerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [leftRef, leftVisible] = useScrollReveal();
  const [rightRef, rightVisible] = useScrollReveal();

  const scrollToIndex = (index, shouldUpdateState = true) => {
    const scroller = scrollerRef.current;
    const cards = scroller?.querySelectorAll("[data-offer-card]");
    const safeIndex = ((index % featureCards.length) + featureCards.length) % featureCards.length;
    const nextCard = cards?.[safeIndex];

    if (!scroller || !nextCard) {
      return;
    }

    scroller.scrollTo({
      left: nextCard.offsetLeft,
      behavior: "smooth",
    });

    if (shouldUpdateState) {
      setActiveIndex(safeIndex);
    }
  };

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const timerId = window.setInterval(() => {
      setActiveIndex((current) => {
        const nextIndex = (current + 1) % featureCards.length;
        window.requestAnimationFrame(() => scrollToIndex(nextIndex, false));
        return nextIndex;
      });
    }, AUTO_SCROLL_MS);

    return () => window.clearInterval(timerId);
  }, [isPaused]);

  const handlePrevious = () => {
    scrollToIndex(activeIndex - 1);
  };

  const handleNext = () => {
    scrollToIndex(activeIndex + 1);
  };

  return (
    <section id="offer" className="mt-6">
      <LandingSectionHeader
        eyebrow="What We Offer"
        title="A clearer product surface for everything ShipIt already knows how to do."
        desc="This section should feel like a guided product tour, not a flat feature dump. It shows the operator controls, automation layers, and delivery surfaces in a way new users can scan quickly."
      />

      <div className="mt-7 grid items-start gap-5 lg:grid-cols-[0.86fr_1.14fr]">
        {/* Left column */}
        <div ref={leftRef} className={`scroll-reveal-left grid content-start gap-4 ${leftVisible ? "is-visible" : ""}`}>
          <div className="landing-stage-card rounded-[32px] border border-[var(--color-accent)]/18 p-5 shadow-[0_24px_50px_-36px_rgba(37,99,235,0.18)]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/22 bg-[var(--color-accent)]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              Product tour
            </div>
            <div className="mt-4 text-2xl font-semibold leading-tight text-[var(--color-text-primary)]">
              One workspace where prompting, repo actions, testing, review, and delivery all stay connected.
            </div>
            <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
              Instead of bouncing between tools, ShipIt keeps the practical parts
              of software delivery in one visible surface. The result is easier
              scanning, less context loss, and a UI that explains the product
              faster.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {offerSignals.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/84 px-3 py-1.5 text-[12px] font-medium text-[var(--color-text-secondary)] transition-all duration-300 hover:border-[var(--color-accent)]/30"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {offerStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[22px] border border-[var(--color-border)] bg-[var(--color-surface)]/86 p-4"
                >
                  <div className="font-display text-2xl font-semibold text-[var(--color-text-primary)]">
                    {item.value}
                  </div>
                  <div className="mt-1 text-sm leading-6 text-[var(--color-text-secondary)]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-5 overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-[var(--color-surface)]/86 shadow-sm">
              <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-4 py-3">
                <div className="rounded-full border border-white/12 bg-slate-950/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-md">
                  Git + repo access
                </div>
                <div className="rounded-full border border-white/12 bg-slate-950/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300 backdrop-blur-md">
                  Branch-aware
                </div>
              </div>
              <img src="/screenshots/github.png" alt="ShipIt GitHub integration" className="w-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>

        {/* Right column - Feature carousel */}
        <div
          ref={rightRef}
          className={`scroll-reveal-right overflow-hidden rounded-[36px] border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-5 shadow-[0_30px_70px_-46px_rgba(15,23,42,0.42)] backdrop-blur-xl ${rightVisible ? "is-visible" : ""}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-40" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                </span>
                Feature showcase
              </div>
              <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
                Auto-scrolls slowly. Hover to pause and use the arrows for manual browsing.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrevious}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] transition-all duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:shadow-[0_8px_20px_-10px_rgba(37,99,235,0.2)]"
                aria-label="Previous feature"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] transition-all duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:shadow-[0_8px_20px_-10px_rgba(37,99,235,0.2)]"
                aria-label="Next feature"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div
            ref={scrollerRef}
            className="mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {featureCards.map(({ icon: Icon, title, desc }, index) => (
              <article
                key={title}
                data-offer-card
                className={`landing-card-3d-inner min-w-[280px] snap-start rounded-[30px] border p-5 shadow-[0_22px_45px_-34px_rgba(15,23,42,0.42)] backdrop-blur-xl transition duration-500 md:min-w-[320px] ${
                  index === activeIndex
                    ? "border-[var(--color-accent)]/35 bg-[linear-gradient(160deg,var(--color-surface),rgba(59,130,246,0.08))] shadow-[0_28px_55px_-34px_rgba(37,99,235,0.28)] scale-[1.02]"
                    : "border-[var(--color-border)] bg-[var(--color-surface)]/82 scale-100"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-sm transition-all duration-500 ${
                    index === activeIndex
                      ? "bg-[linear-gradient(160deg,var(--color-accent),#6366F1)] scale-110"
                      : "bg-[linear-gradient(160deg,var(--color-accent),var(--color-accent-hover))]"
                  }`}>
                    <Icon size={19} />
                  </div>
                  <div className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="mt-4 inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/84 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                  {index === 0
                    ? "Core UI"
                    : index === 1
                      ? "Fast action"
                      : index === 2
                        ? "Reusable flow"
                        : index === 3
                          ? "Repo access"
                          : index === 4
                            ? "Quality layer"
                            : index === 5
                              ? "Validation"
                              : index === 6
                                ? "Notifications"
                                : "Theme system"}
                </div>
                <div className="mt-4 text-lg font-semibold text-[var(--color-text-primary)]">
                  {title}
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                  {desc}
                </p>
              </article>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-5 h-1 overflow-hidden rounded-full bg-[var(--color-border)]/40">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[#6366F1] transition-all duration-500"
              style={{ width: `${((activeIndex + 1) / featureCards.length) * 100}%` }}
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {featureCards.map((card, index) => (
              <button
                key={card.title}
                type="button"
                onClick={() => scrollToIndex(index)}
                className={`rounded-full border px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                  index === activeIndex
                    ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white shadow-[0_12px_30px_-18px_rgba(37,99,235,0.6)]"
                    : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                }`}
              >
                {String(index + 1).padStart(2, "0")} {card.title}
              </button>
            ))}
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {["Chat + commands", "Repo + files", "Review + tests"].map((item) => (
              <div
                key={item}
                className="rounded-[20px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/70 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
