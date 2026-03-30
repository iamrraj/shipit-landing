import ScrollReveal from "../ui/ScrollReveal";
import SectionLabel from "../ui/SectionLabel";

const steps = [
  {
    num: "01",
    title: "Install ShipIt",
    desc: "One command downloads and sets up everything you need.",
    cmd: "curl -fsSL https://shipiit.com/install.sh | bash",
  },
  {
    num: "02",
    title: "Activate your license",
    desc: "Enter your token on first launch — validated and cached locally.",
    cmd: "shipitcli",
  },
  {
    num: "03",
    title: "Open the workspace",
    desc: "The React UI launches at localhost:5173 with all surfaces ready.",
    cmd: "./run_dev.sh --ui",
  },
  {
    num: "04",
    title: "Describe a task and ship",
    desc: "Type a prompt, watch the pipeline execute, and ship the result.",
    cmd: null,
  },
];

export default function QuickStartSection() {
  return (
    <section id="start" className="px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionLabel
            eyebrow="Get Started"
            heading="Ship in five minutes."
            description="Download, install, activate, and start coding with AI — no config files needed."
          />
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 0.1}>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-accent)] text-xs font-bold text-white">
                    {step.num}
                  </span>
                  <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
                    {step.title}
                  </h3>
                </div>
                <p className="mb-4 text-sm text-[var(--color-text-secondary)]">
                  {step.desc}
                </p>
                {step.cmd && (
                  <div className="overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
                    <pre className="px-4 py-3 font-mono text-xs text-[var(--color-text-primary)]">
                      <code>
                        <span className="text-[var(--color-accent)]">$</span>{" "}
                        {step.cmd}
                      </code>
                    </pre>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
