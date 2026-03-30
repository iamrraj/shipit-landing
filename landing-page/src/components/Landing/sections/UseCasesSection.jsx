import StickySection from "../ui/StickySection";
import SectionLabel from "../ui/SectionLabel";
import { audienceCards } from "../data";

const caseDetails = [
  {
    benefits: [
      "Turn rough ideas into shipped features faster",
      "Keep context in one place — no tab-switching",
      "Visible pipeline shows exactly what happened",
    ],
    accent: "from-blue-500 to-cyan-500",
  },
  {
    benefits: [
      "See how tasks become code step by step",
      "Understand reviews, tests, and architecture decisions",
      "Inspect every pipeline stage — nothing is hidden",
    ],
    accent: "from-purple-500 to-violet-500",
  },
  {
    benefits: [
      "One operator surface for implementation, review, and shipping",
      "Security scanning and testing built into every flow",
      "Connected notifications via Slack, Discord, and more",
    ],
    accent: "from-green-500 to-emerald-500",
  },
  {
    benefits: [
      "Show the path from prompt to result clearly",
      "Cleaner onboarding for new contributors",
      "Readable architecture separated into clean layers",
    ],
    accent: "from-orange-500 to-amber-500",
  },
];

function UseCasePanel({ card, detail, index }) {
  const Icon = card.icon;
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <div>
        <span className="font-display text-5xl font-bold text-[var(--color-text-muted)]/30">
          0{index + 1}
        </span>
        <h3 className="mt-2 font-display text-[clamp(1.5rem,3vw,2.5rem)] font-bold leading-tight text-[var(--color-text-primary)]">
          {card.title}
        </h3>
        <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--color-text-secondary)]">
          {card.desc}
        </p>
        <ul className="mt-6 space-y-3">
          {detail.benefits.map((b) => (
            <li
              key={b}
              className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]"
            >
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-center">
        <div className="relative">
          <div
            className={`absolute -inset-8 rounded-full bg-gradient-to-br ${detail.accent} opacity-8 blur-3xl`}
          />
          <div className="relative flex h-40 w-40 items-center justify-center rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-xl">
            <Icon size={56} className="text-[var(--color-text-muted)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UseCasesSection() {
  const panels = audienceCards.map((card, i) => ({
    content: (
      <UseCasePanel card={card} detail={caseDetails[i]} index={i} />
    ),
  }));

  return (
    <div>
      <div className="px-5 pt-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionLabel
            eyebrow="Use Cases"
            heading="Built for how you work."
            description="Solo builders, learners, professional teams, and open-source contributors — one workspace fits all."
          />
        </div>
      </div>
      <StickySection id="use-cases" panels={panels} indicators />
    </div>
  );
}
