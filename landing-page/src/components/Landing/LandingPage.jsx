import settingsPng from "./svg/Setting.png";
import {
  ArrowRight,
  Bot,
  Brain,
  Cloud,
  Code2,
  Gem,
  Sparkles,
} from "lucide-react";
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
    <section className="animate-fade-rise landing-page-hero-shell mt-2 rounded-[40px] border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-5 shadow-[0_28px_60px_-40px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-6">
      <div className="">
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

        {/* ── Stage with floating cards + screenshot ──── */}
        <div className="landing-hero-stage-wrap relative z-10 mx-auto mt-9 max-w-6xl">
          <div className="landing-hero-stage-glow" />
          <div className="landing-hero-stage-grid" />

          {(pageId === "engines"
            ? [
                {
                  className: "landing-hero-floating-a",
                  title: "4 Engines",
                  label: "One unified interface",
                  icon: Bot,
                  color: "from-blue-500 to-indigo-600",
                },
                {
                  className: "landing-hero-floating-b",
                  title: "100+ Models",
                  label: "Switch without config",
                  icon: Sparkles,
                  color: "from-violet-500 to-purple-600",
                },
                {
                  className: "landing-hero-floating-c",
                  title: "9 Providers",
                  label: "Route across clouds",
                  icon: Cloud,
                  color: "from-cyan-400 to-teal-500",
                },
                {
                  className: "landing-hero-floating-d",
                  title: "Settings UI",
                  label: "Visual engine control",
                  icon: Gem,
                  color: "from-orange-500 to-amber-500",
                },
              ]
            : [
                {
                  className: "landing-hero-floating-a",
                  title: highlights[0] || "Step 1",
                  label: eyebrow,
                  icon: Sparkles,
                  color: "from-purple-500 to-violet-600",
                },
                {
                  className: "landing-hero-floating-b",
                  title: highlights[1] || "Step 2",
                  label: eyebrow,
                  icon: Code2,
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  className: "landing-hero-floating-c",
                  title: highlights[2] || "Step 3",
                  label: eyebrow,
                  icon: Gem,
                  color: "from-cyan-400 to-teal-500",
                },
                {
                  className: "landing-hero-floating-d",
                  title: highlights[3] || "Step 4",
                  label: eyebrow,
                  icon: Cloud,
                  color: "from-orange-500 to-amber-500",
                },
              ]
          ).map((card) => {
            const CardIcon = card.icon;
            return (
              <div
                key={card.title}
                className={`landing-hero-floating ${card.className}`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br ${card.color} text-white shadow-sm`}
                  >
                    <CardIcon size={13} />
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    {card.title}
                  </div>
                </div>
                <div className="mt-1.5 text-sm font-medium text-[var(--color-text-primary)]">
                  {card.label}
                </div>
              </div>
            );
          })}

          <div className="landing-hero-frame mx-auto max-w-4xl">
            <div className="landing-hero-screen">
              <div className="landing-hero-screen-top">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {pageId === "engines"
                    ? "Engine configuration"
                    : "Live operator surface"}
                </div>
              </div>
              <div className="relative">
                <div className="landing-hero-screen-glow" />
                <img
                  src={settingsPng}
                  alt="ShipIt Settings — engine and workspace configuration"
                  className="relative z-10 w-full rounded-[22px] object-cover"
                  loading="eager"
                />
              </div>
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
