import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import LandingBackdrop from "./LandingBackdrop";
import LandingHeader from "./LandingHeader";
import WaitlistModal from "./WaitlistModal";
import LandingArchitectureSection from "./sections/LandingArchitectureSection";
import LandingBenefitsSection from "./sections/LandingBenefitsSection";
import LandingDetailsSection from "./sections/LandingDetailsSection";
import LandingEnginesSection from "./sections/LandingEnginesSection";
import LandingFooterCTA from "./sections/LandingFooterCTA";
import LandingHeroSection from "./sections/LandingHeroSection";
import LandingOfferSection from "./sections/LandingOfferSection";
import LandingPipelineSection from "./sections/LandingPipelineSection";
import LandingQuickStartSection from "./sections/LandingQuickStartSection";
import LandingDocsSection from "./sections/LandingDocsSection";
import LandingShipItCLISection from "./sections/LandingShipItCLISection";

const landingPages = [
  {
    id: "overview",
    label: "Overview",
    eyebrow: "Overview",
    title: "A cleaner entry point into ShipIt.",
    desc: "Start with the product story and core value before going deeper into engines, workflow, and setup.",
    highlights: ["Product story", "Core value", "Modern UI"],
    sections: [LandingHeroSection, LandingBenefitsSection],
  },
  {
    id: "shipit",
    label: "Ship CLI",
    eyebrow: "ShipIt CLI",
    title: "The terminal-native AI coding agent on your own models.",
    desc: "Start with ShipIt itself: what it is, why it stands out, how it installs, and why it is the strongest option when you want provider freedom.",
    highlights: ["Own models", "30+ tools", "Terminal-native", "Local-first"],
    sections: [LandingShipItCLISection],
  },
  {
    id: "engines",
    label: "Engines",
    eyebrow: "Engines",
    title: "Choose the right engine and model surface.",
    desc: "See how Claude, Codex, Gemini, and your personal ShipIt CLI fit into one modern interface.",
    highlights: ["Claude", "Codex", "Gemini", "ShipIt CLI"],
    sections: [LandingEnginesSection, LandingOfferSection],
  },
  {
    id: "workflow",
    label: "Workflow",
    eyebrow: "Workflow",
    title: "Follow how ShipIt moves from prompt to delivery.",
    desc: "Keep the pipeline, system details, and architecture readable instead of hiding them in one oversized page.",
    highlights: ["Pipeline", "System story", "Architecture"],
    sections: [
      LandingPipelineSection,
      LandingDetailsSection,
      LandingArchitectureSection,
    ],
  },
  {
    id: "start",
    label: "Start",
    eyebrow: "Start",
    title: "Install it. Activate. Start shipping.",
    desc: "Download the release, run the installer, enter your license token, and start coding with AI in minutes.",
    highlights: ["Download", "Install", "Activate", "Ship"],
    sections: [LandingQuickStartSection],
  },
  {
    id: "docs",
    label: "Docs",
    eyebrow: "Documentation",
    title: "Everything you need to know.",
    desc: "Complete reference for installation, configuration, AI engines, pipeline, integrations, and the full API surface.",
    highlights: ["Setup", "Engines", "Pipeline", "API"],
    sections: [LandingDocsSection],
  },
];

function LandingPageIntro({
  pageId,
  eyebrow,
  title,
  desc,
  highlights = [],
  onJoinWaitlist,
  onNavigate,
}) {
  return (
    <section className="animate-fade-rise mt-2 rounded-[40px] border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-5 shadow-[0_28px_60px_-40px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="landing-page-hero-shell relative overflow-hidden rounded-[34px] border border-[var(--color-border)] px-5 py-8 sm:px-7 sm:py-9 lg:px-8 lg:py-10">
        <div className="landing-page-hero-glow landing-page-hero-glow-a" />
        <div className="landing-page-hero-glow landing-page-hero-glow-b" />
        <div className="landing-page-hero-grid" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/18 bg-[var(--color-accent)]/8 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
              <Sparkles size={12} />
              {eyebrow}
            </div>
            <div className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/88 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
              {pageId === "engines"
                ? "Choose the right engine surface"
                : "Follow the delivery system visually"}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {highlights?.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/92 px-3 py-1.5 text-[12px] font-medium text-[var(--color-text-secondary)] shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <h2 className="font-display mt-6 text-[2.5rem] font-semibold leading-[1.02] sm:text-[3.3rem] lg:text-[4rem]">
            <span className="animate-gradient-shimmer bg-[linear-gradient(135deg,var(--color-text-primary),var(--color-accent),#0ea5e9,#6366F1,var(--color-text-primary))] bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
            {desc}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={onJoinWaitlist}
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_35px_-24px_rgba(37,99,235,0.65)] transition-all duration-300 hover:bg-[var(--color-accent-hover)] hover:shadow-[0_24px_50px_-20px_rgba(37,99,235,0.5)] hover:scale-[1.02]"
            >
              Join Waitlist
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </button>
            <button
              type="button"
              onClick={() =>
                onNavigate(pageId === "engines" ? "shipit" : "start")
              }
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-sm font-semibold text-[var(--color-text-secondary)] transition-all duration-300 hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-bg-secondary)]"
            >
              {pageId === "engines" ? "See Ship CLI" : "See Start"}
            </button>
          </div>
        </div>

        <div className="landing-page-hero-stage relative z-10 mx-auto mt-9 max-w-5xl">
          {highlights.map((item) => (
            <div key={item} className="landing-page-hero-floating">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                {eyebrow}
              </div>
              <div className="mt-1 text-sm font-medium text-[var(--color-text-primary)]">
                {item}
              </div>
            </div>
          ))}

          <div className="landing-page-hero-panel mx-auto max-w-3xl rounded-[30px] border border-[var(--color-border)] p-5 sm:p-6">
            <div
              className={`grid gap-3 ${highlights.length > 3 ? "sm:grid-cols-4" : "sm:grid-cols-3"}`}
            >
              {highlights.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="rounded-[20px] border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-4"
                >
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-[var(--color-text-primary)]">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  const scrollContainerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState("overview");
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const activePage =
    landingPages.find((page) => page.id === currentPage) ?? landingPages[0];

  useEffect(() => {
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handleOpenWaitlist = () => {
    setIsWaitlistOpen(true);
  };

  return (
    <div
      ref={scrollContainerRef}
      className="relative h-screen overflow-y-auto scroll-smooth bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] [scrollbar-gutter:stable]"
    >
      <LandingBackdrop />

      <div className="relative z-10 mx-auto w-full max-w-[1480px] px-4 py-4 sm:px-6 lg:px-8">
        <LandingHeader
          currentPage={currentPage}
          onJoinWaitlist={handleOpenWaitlist}
          onNavigate={setCurrentPage}
        />
        <main className="pb-14">
          {!["overview", "shipit", "start", "docs"].includes(activePage.id) && (
            <LandingPageIntro
              pageId={activePage.id}
              eyebrow={activePage.eyebrow}
              title={activePage.title}
              desc={activePage.desc}
              highlights={activePage.highlights}
              onJoinWaitlist={handleOpenWaitlist}
              onNavigate={setCurrentPage}
            />
          )}

          {activePage?.sections?.map((SectionComponent, index) => (
            <SectionComponent
              key={`${activePage.id}-${index}`}
              onJoinWaitlist={handleOpenWaitlist}
              onNavigate={setCurrentPage}
            />
          ))}

          <LandingFooterCTA onJoinWaitlist={handleOpenWaitlist} />
        </main>
      </div>

      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </div>
  );
}
