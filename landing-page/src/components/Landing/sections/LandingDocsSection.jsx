import {
  ArrowRight,
  BellRing,
  Book,
  Bot,
  Braces,
  ChevronRight,
  Command,
  Github,
  Key,
  Monitor,
  Package,
  Plug,
  Rocket,
  Settings,
  Shield,
  Sparkles,
  Terminal,
  TestTube2,
  Workflow,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import DocsConfiguration from "./docs/DocsConfiguration";
import DocsGettingStarted from "./docs/DocsGettingStarted";
import DocsLicense from "./docs/DocsLicense";
import {
  DocsChatInterface,
  DocsEngines,
  DocsPipeline,
  DocsSlashCommands,
  DocsTemplates,
  DocsSecurity,
  DocsTesting,
} from "./docs/DocsFeatures";
import {
  DocsGithub,
  DocsMcp,
  DocsNotifications,
  DocsCli,
  DocsApi,
  DocsDistribution,
} from "./docs/DocsIntegrations";

/* ─── Sidebar structure ───────────────────────────── */
const docsSections = [
  { id: "getting-started", label: "Getting Started", icon: Rocket },
  { id: "license", label: "License Activation", icon: Key },
  { id: "configuration", label: "Configuration", icon: Settings },
  { id: "engines", label: "AI Engines", icon: Bot },
  { id: "chat-interface", label: "Chat Interface", icon: Monitor },
  { id: "pipeline", label: "Pipeline", icon: Workflow },
  { id: "slash-commands", label: "Slash Commands", icon: Command },
  { id: "templates", label: "Prompt Templates", icon: Sparkles },
  { id: "security", label: "Security Scanning", icon: Shield },
  { id: "testing", label: "Test Automation", icon: TestTube2 },
  { id: "github", label: "GitHub Integration", icon: Github },
  { id: "mcp", label: "MCP Integrations", icon: Plug },
  { id: "notifications", label: "Notifications", icon: BellRing },
  { id: "cli", label: "ShipIt CLI", icon: Terminal },
  { id: "api", label: "API Reference", icon: Braces },
  { id: "distribution", label: "Distribution", icon: Package },
];

/* ─── Content map ─────────────────────────────────── */
const sectionComponents = {
  "getting-started": DocsGettingStarted,
  license: DocsLicense,
  configuration: DocsConfiguration,
  "chat-interface": DocsChatInterface,
  engines: DocsEngines,
  pipeline: DocsPipeline,
  "slash-commands": DocsSlashCommands,
  templates: DocsTemplates,
  security: DocsSecurity,
  testing: DocsTesting,
  github: DocsGithub,
  mcp: DocsMcp,
  notifications: DocsNotifications,
  cli: DocsCli,
  api: DocsApi,
  distribution: DocsDistribution,
};

/* ═══════════════════════════════════════════════════
   Main Docs Section
   ═══════════════════════════════════════════════════ */
export default function LandingDocsSection() {
  const [activeSection, setActiveSection] = useState("getting-started");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sidebarRef = useRef(null);
  const contentRef = useRef(null);

  const ActiveContent = sectionComponents[activeSection] || DocsGettingStarted;

  /* ── Scroll sidebar active item into view ──── */
  useEffect(() => {
    if (!sidebarRef.current) return;
    const activeBtn = sidebarRef.current.querySelector("[data-active='true']");
    if (activeBtn) {
      activeBtn.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [activeSection]);

  /* ── Section change with transition ──── */
  const handleSectionChange = (id) => {
    if (id === activeSection) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSection(id);
      setIsTransitioning(false);
      contentRef.current?.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }, 150);
  };

  return (
    <section id="docs" className="mt-8 mb-10">
      {/* ── Hero header ──────────────────────────── */}
      <div className="rounded-[40px] border border-[var(--color-border)] bg-[var(--color-surface)]/86 p-5 shadow-[0_30px_70px_-46px_rgba(15,23,42,0.4)] backdrop-blur-xl sm:p-6">
        <div className="relative overflow-hidden rounded-[34px] border border-[var(--color-border)] px-6 py-8 sm:px-7 sm:py-9">
          <div className="landing-start-glow landing-start-glow-a" />
          <div className="landing-start-glow landing-start-glow-b" />
          <div className="landing-start-grid" />
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/22 bg-[var(--color-accent)]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              <Book size={12} />
              Documentation
            </div>
            <h2 className="font-display mt-5 text-3xl font-semibold leading-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-[3rem]">
              <span className="animate-gradient-shimmer bg-[linear-gradient(135deg,var(--color-accent),#0ea5e9,#10b981,#6366F1,var(--color-accent))] bg-clip-text text-transparent">
                Everything you need to know
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--color-text-secondary)]">
              Complete reference for installation, configuration, AI engines,
              pipeline, integrations, and the full API surface.
            </p>
          </div>
        </div>
      </div>

      {/* ── Mobile section selector ──────────────── */}
      <div className="mt-5 xl:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex w-full items-center justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/86 px-5 py-4 text-sm font-semibold text-[var(--color-text-primary)] backdrop-blur-xl"
        >
          <span className="flex items-center gap-2">
            <Book size={14} className="text-[var(--color-accent)]" />
            {docsSections.find((s) => s.id === activeSection)?.label}
          </span>
          <ChevronRight
            size={16}
            className={`transition-transform duration-300 ${mobileMenuOpen ? "rotate-90" : ""}`}
          />
        </button>
        {mobileMenuOpen && (
          <div className="mt-2 max-h-[60vh] overflow-y-auto rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/95 p-3 shadow-[0_20px_40px_-24px_rgba(15,23,42,0.3)] backdrop-blur-xl">
            {docsSections.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => {
                  handleSectionChange(id);
                  setMobileMenuOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition-all duration-200 ${
                  activeSection === id
                    ? "bg-[var(--color-accent)]/10 font-semibold text-[var(--color-accent)]"
                    : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                <Icon size={15} />
                {label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Desktop: sidebar + content ────────────── */}
      <div className="mt-5 grid gap-5 xl:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <aside className="hidden xl:block">
          <nav
            ref={sidebarRef}
            className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-[28px] border border-[var(--color-border)] bg-[var(--color-surface)]/86 p-4 shadow-[0_20px_40px_-34px_rgba(15,23,42,0.24)] backdrop-blur-xl [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
              Documentation
            </div>
            <div className="space-y-0.5">
              {docsSections.map(({ id, label, icon: Icon }, idx) => (
                <button
                  key={id}
                  type="button"
                  data-active={activeSection === id}
                  onClick={() => handleSectionChange(id)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[13px] transition-all duration-200 ${
                    activeSection === id
                      ? "bg-[var(--color-accent)] font-semibold text-white shadow-[0_8px_20px_-12px_rgba(37,99,235,0.5)]"
                      : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text-primary)]"
                  }`}
                >
                  <Icon
                    size={14}
                    className={
                      activeSection === id
                        ? "text-white/80"
                        : "text-[var(--color-text-muted)]"
                    }
                  />
                  <span className="flex-1">{label}</span>
                  <span
                    className={`text-[10px] tabular-nums transition-opacity duration-200 ${activeSection === id ? "text-white/50" : "text-[var(--color-text-muted)] opacity-0 group-hover:opacity-100"}`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </button>
              ))}
            </div>
          </nav>
        </aside>

        {/* Content */}
        <div
          ref={contentRef}
          className="min-w-0 rounded-[28px] border border-[var(--color-border)] bg-[var(--color-surface)]/86 p-6 shadow-[0_20px_40px_-34px_rgba(15,23,42,0.24)] backdrop-blur-xl sm:p-8"
        >
          <div className="mb-6 flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
            <span>Docs</span>
            <ChevronRight size={12} />
            <span className="font-semibold text-[var(--color-text-primary)]">
              {docsSections.find((s) => s.id === activeSection)?.label}
            </span>
            <span className="ml-auto text-[10px] tabular-nums text-[var(--color-text-muted)]">
              {docsSections.findIndex((s) => s.id === activeSection) + 1} /{" "}
              {docsSections.length}
            </span>
          </div>

          <div
            className={`transition-all duration-200 ${isTransitioning ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"}`}
          >
            <ActiveContent />
          </div>

          {/* Prev / Next nav */}
          <div className="mt-10 grid grid-cols-2 gap-4 border-t border-[var(--color-border)] pt-6">
            {(() => {
              const idx = docsSections.findIndex((s) => s.id === activeSection);
              const prev = idx > 0 ? docsSections[idx - 1] : null;
              const next =
                idx < docsSections.length - 1 ? docsSections[idx + 1] : null;
              const PrevIcon = prev?.icon;
              const NextIcon = next?.icon;
              return (
                <>
                  {prev ? (
                    <button
                      type="button"
                      onClick={() => handleSectionChange(prev.id)}
                      className="group flex flex-col items-start gap-1.5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-left transition-all duration-200 hover:border-[var(--color-accent)]/30 hover:shadow-[0_8px_24px_-12px_rgba(37,99,235,0.15)]"
                    >
                      <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
                        <ArrowRight
                          size={12}
                          className="rotate-180 transition-transform group-hover:-translate-x-0.5"
                        />
                        Previous
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-accent)]">
                        <PrevIcon
                          size={14}
                          className="text-[var(--color-text-muted)] transition-colors group-hover:text-[var(--color-accent)]"
                        />
                        {prev.label}
                      </div>
                    </button>
                  ) : (
                    <div />
                  )}
                  {next ? (
                    <button
                      type="button"
                      onClick={() => handleSectionChange(next.id)}
                      className="group flex flex-col items-end gap-1.5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-right transition-all duration-200 hover:border-[var(--color-accent)]/30 hover:shadow-[0_8px_24px_-12px_rgba(37,99,235,0.15)]"
                    >
                      <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
                        Next
                        <ArrowRight
                          size={12}
                          className="transition-transform group-hover:translate-x-0.5"
                        />
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-accent)]">
                        {next.label}
                        <NextIcon
                          size={14}
                          className="text-[var(--color-text-muted)] transition-colors group-hover:text-[var(--color-accent)]"
                        />
                      </div>
                    </button>
                  ) : (
                    <div />
                  )}
                </>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
}
