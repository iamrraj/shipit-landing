import { useState } from "react";
import {
  Code2,
  Shield,
  TestTube2,
  Users,
  Rocket,
  Briefcase,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Play,
} from "lucide-react";
import useScrollReveal from "../useScrollReveal";

const useCases = [
  {
    id: "developer",
    label: "Developer",
    icon: Code2,
    title: "Ship features faster with AI pair programming",
    desc: "Describe what you need in plain English. ShipIt reads your codebase, implements changes across files, reviews its own work, runs tests, and commits — all in one flow.",
    tags: ["Multi-file edits", "Auto-review", "Test execution", "Git commits"],
    cards: [
      { icon: Sparkles, color: "bg-blue-500/10 text-blue-500", title: "AI Implementation", desc: "Full codebase context with 4 engines and 100+ models.", stat: "4 engines" },
      { icon: CheckCircle2, color: "bg-emerald-500/10 text-emerald-500", title: "Smart Pipeline", desc: "Questions skip review/tests. Code changes get the full pipeline.", stat: "Dynamic" },
      { icon: Play, color: "bg-violet-500/10 text-violet-500", title: "Slash Commands", desc: "/review, /test, /fix, /pr, /explain — instant actions from chat.", stat: "12+ commands" },
    ],
  },
  {
    id: "security",
    label: "Security",
    icon: Shield,
    title: "Find and fix vulnerabilities before they ship",
    desc: "Aikido-style security dashboard with real SAST tools (Bandit, Semgrep), dependency scanning, secret detection, license compliance, and AI-powered penetration testing.",
    tags: ["OWASP 2025", "SAST + SCA", "Pentest", "AI auto-fix"],
    cards: [
      { icon: Shield, color: "bg-red-500/10 text-red-500", title: "Vulnerability Scanner", desc: "6-phase scan: recon, deps, SAST, secrets, AI analysis, config audit.", stat: "6 phases" },
      { icon: TestTube2, color: "bg-orange-500/10 text-orange-500", title: "Penetration Testing", desc: "18 injection patterns, auth analysis, SSL/TLS, infrastructure checks.", stat: "18 patterns" },
      { icon: CheckCircle2, color: "bg-emerald-500/10 text-emerald-500", title: "Issue Management", desc: "Triage, snooze, false positive, bulk actions, export CSV/JSON.", stat: "Aikido-style" },
    ],
  },
  {
    id: "qa",
    label: "QA & Testing",
    icon: TestTube2,
    title: "Automate your entire QA pipeline",
    desc: "Pre-built workflow templates for test suites, regression testing, code quality audits, and automated security scanning — with live execution and real-time logs.",
    tags: ["30+ templates", "Live execution", "Test automation", "Quality reports"],
    cards: [
      { icon: Rocket, color: "bg-blue-500/10 text-blue-500", title: "Workflow Builder", desc: "Drag-and-drop steps: research, test, review, deploy, notify.", stat: "17 step types" },
      { icon: Sparkles, color: "bg-purple-500/10 text-purple-500", title: "AI Prompt Steps", desc: "Generate prompts from context, chain outputs between steps.", stat: "Auto-generate" },
      { icon: CheckCircle2, color: "bg-emerald-500/10 text-emerald-500", title: "Scheduled Runs", desc: "Cron-based pipeline automation with history and manual triggers.", stat: "Automated" },
    ],
  },
  {
    id: "team",
    label: "Team Lead",
    icon: Users,
    title: "Keep your team aligned and shipping",
    desc: "Shared sessions, team collaboration, activity feeds, Slack/Discord notifications, cost tracking with Langfuse, and project management with GitHub integration.",
    tags: ["Session sharing", "Slack + Discord", "Cost tracking", "Activity feed"],
    cards: [
      { icon: Users, color: "bg-indigo-500/10 text-indigo-500", title: "Team Collaboration", desc: "Share sessions, assign tasks, comment on progress in real-time.", stat: "Real-time" },
      { icon: Briefcase, color: "bg-amber-500/10 text-amber-500", title: "Cost Dashboard", desc: "Track AI usage, token costs, and model performance with Langfuse.", stat: "Per-call" },
      { icon: Play, color: "bg-teal-500/10 text-teal-500", title: "Notifications", desc: "Slack Block Kit + Discord webhooks for every pipeline completion.", stat: "Instant" },
    ],
  },
  {
    id: "research",
    label: "Research & OSINT",
    icon: Briefcase,
    title: "Deep research across the open and dark web",
    desc: "OSINT tools for Telegram channels, dark web forums, paste sites, breach databases, social media, and certificate transparency — all from a /osint command.",
    tags: ["Telegram", "Dark web", "Breach DB", "Social media"],
    cards: [
      { icon: Shield, color: "bg-red-500/10 text-red-500", title: "OSINT Research", desc: "Search Telegram, dark web, paste sites, breach databases, social media.", stat: "/osint" },
      { icon: Sparkles, color: "bg-cyan-500/10 text-cyan-500", title: "Web Research", desc: "Playwright-powered scraping with Brave Search and stealth mode.", stat: "Headless" },
      { icon: Rocket, color: "bg-purple-500/10 text-purple-500", title: "Deep Analysis", desc: "AI synthesizes findings, cross-references sources, rates confidence.", stat: "AI-powered" },
    ],
  },
];

export default function LandingUseCaseTabs({ onJoinWaitlist }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [sectionRef, visible] = useScrollReveal();
  const active = useCases[activeIdx];

  return (
    <section id="use-cases" className="mt-14" ref={sectionRef}>
      <div className={`scroll-reveal ${visible ? "is-visible" : ""}`}>
        {/* Tab bar */}
        <div className="flex items-center justify-center overflow-x-auto border-b border-[var(--color-border)] pb-px scrollbar-none">
          {useCases.map((uc, idx) => {
            const Icon = uc.icon;
            const isActive = idx === activeIdx;
            return (
              <button
                key={uc.id}
                onClick={() => setActiveIdx(idx)}
                className={`flex items-center gap-2 whitespace-nowrap border-b-2 px-5 py-3.5 text-sm font-medium transition-all ${
                  isActive
                    ? "border-[var(--color-accent)] text-[var(--color-accent)]"
                    : "border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                <Icon size={15} />
                {uc.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          {/* Left: Description */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold leading-tight text-[var(--color-text-primary)] sm:text-3xl">
              {active.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-[var(--color-text-secondary)]">
              {active.desc}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {active.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-secondary)]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button
              type="button"
              onClick={onJoinWaitlist}
              className="group mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--color-accent)] transition hover:gap-3"
            >
              <Play size={14} className="rounded-full bg-[var(--color-accent)]/10 p-0.5" />
              Get started with {active.label.toLowerCase()}
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Right: Feature cards */}
          <div className="space-y-3">
            {active.cards.map((card) => {
              const CardIcon = card.icon;
              return (
                <div
                  key={card.title}
                  className="group flex items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-[var(--color-accent)]/15"
                >
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${card.color}`}>
                    <CardIcon size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                        {card.title}
                      </span>
                      <span className="rounded-full bg-[var(--color-accent)]/8 px-2.5 py-0.5 text-[10px] font-bold text-[var(--color-accent)]">
                        {card.stat}
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-5 text-[var(--color-text-muted)]">
                      {card.desc}
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
