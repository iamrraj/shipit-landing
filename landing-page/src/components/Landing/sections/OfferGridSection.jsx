import ScrollReveal from "../ui/ScrollReveal";
import SectionLabel from "../ui/SectionLabel";
import { featureCards } from "../data";

export default function OfferGridSection() {
  return (
    <section id="toolkit" className="px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionLabel
            eyebrow="Toolkit"
            heading="The full toolkit."
            description="Every surface you need — chat, scanning, testing, workflows, integrations, and more."
          />
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featureCards.slice(0, 8).map((card, i) => {
            const Icon = card.icon;
            return (
              <ScrollReveal key={card.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-all duration-300 hover:border-[var(--color-accent)]/20 hover:shadow-[0_8px_30px_-12px_rgba(37,99,235,0.15)]">
                  {/* Icon */}
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent)]/8">
                    <Icon
                      size={18}
                      className="text-[var(--color-accent)]"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-sm font-semibold text-[var(--color-text-primary)]">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs leading-relaxed text-[var(--color-text-muted)]">
                    {card.desc}
                  </p>

                  {/* Screenshot thumbnail */}
                  {card.image && (
                    <div className="mt-4 overflow-hidden rounded-lg border border-[var(--color-border)]">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
