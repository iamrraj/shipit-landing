import enginePng from "../svg/Engine.png";
import { Brain, Cloud, Code2, Gem, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import LandingSectionHeader from "../LandingSectionHeader";
import { supportedEngines } from "../data";
import useScrollReveal from "../useScrollReveal";
import useStickyScroll from "../hooks/useStickyScroll";

const engineIcons = {
  "ShipIt CLI": Cloud,
  "Claude Code CLI": Brain,
  "OpenAI Codex CLI": Code2,
  "Google Gemini CLI": Gem,
};

const engineNotes = {
  "ShipIt CLI":
    "A powerful terminal-native AI coding agent, like Claude Code, but on your own models.",
  "Claude Code CLI":
    "Use Claude when the task needs careful reasoning, review discipline, and stronger planning.",
  "OpenAI Codex CLI":
    "Use Codex when you want fast code generation and direct implementation momentum.",
  "Google Gemini CLI":
    "Use Gemini when you need multimodal reasoning, large context windows, and Google-scale models.",
};

const engineRoles = {
  "ShipIt CLI": "Personal CLI",
  "Claude Code CLI": "Reasoning mode",
  "OpenAI Codex CLI": "Code generation",
  "Google Gemini CLI": "Multimodal mode",
};

const engineStats = [
  { value: "4", label: "engine choices" },
  { value: "100+", label: "model options" },
  { value: "9", label: "provider routes" },
];

export default function LandingEnginesSection() {
  const orderedEngines = useMemo(() => {
    const order = [
      "ShipIt CLI",
      "Claude Code CLI",
      "OpenAI Codex CLI",
      "Google Gemini CLI",
    ];
    return [...supportedEngines].sort(
      (a, b) => order.indexOf(a.name) - order.indexOf(b.name),
    );
  }, []);

  // Scroll-driven sticky: auto-switch engine on scroll
  const { wrapperRef: stickyRef, activeIndex: stickyIndex } = useStickyScroll(4);
  const [manualName, setManualName] = useState(null);

  // Scroll overrides manual selection
  const activeName = manualName ?? orderedEngines[stickyIndex]?.name ?? "ShipIt CLI";
  const setActiveName = (name) => setManualName(name);

  const activeEngine =
    orderedEngines.find((engine) => engine.name === activeName) ??
    orderedEngines[0];
  const ActiveIcon = engineIcons[activeEngine.name] ?? Sparkles;
  const [topRef, topVisible] = useScrollReveal();
  const [bottomRef, bottomVisible] = useScrollReveal();

  return (
    <section id="engines" className="mt-6">
      <div className="mx-auto max-w-4xl text-center">
        <LandingSectionHeader
          eyebrow="AI Engines"
          title="Four engines, 100+ models, one unified interface."
          desc="Choose the right engine and model for every task. Claude for reasoning, Codex for code generation, Gemini for multimodal, and ShipIt for multi-provider flexibility across AWS Bedrock, OpenAI, Gemini, Vertex AI, Groq, Ollama, and more."
        />
      </div>

      {/* ── Settings screenshot hero with overflow ──── */}
      <div
        ref={topRef}
        className={`scroll-reveal relative mt-7 overflow-hidden rounded-[38px] border border-[var(--color-border)] bg-[var(--color-surface)]/84 shadow-[0_30px_70px_-46px_rgba(15,23,42,0.42)] backdrop-blur-xl ${topVisible ? "is-visible" : ""}`}
      >
        <div className="relative z-10 grid gap-0 xl:grid-cols-[1fr_1.15fr]">
          {/* Left: text + stats */}
          <div className="p-6 sm:p-8 xl:py-10 xl:pl-8 xl:pr-0">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/22 bg-[var(--color-accent)]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                <Sparkles size={12} />
                Engine comparison
              </div>
              <div className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/84 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                ShipIt shown first
              </div>
            </div>

            <h3 className="mt-5 text-3xl font-semibold leading-[1.1] text-[var(--color-text-primary)] lg:text-[2.4rem]">
              Pick the right engine for the job
              <span className="animate-gradient-shimmer mt-1 block bg-[linear-gradient(135deg,var(--color-accent),#0ea5e9,#10b981,#6366F1,var(--color-accent))] bg-clip-text text-transparent">
                without changing the UI.
              </span>
            </h3>
            <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--color-text-secondary)]">
              Keep one clean workspace on top, then switch between ShipIt,
              Claude, Codex, and Gemini depending on whether you want provider
              flexibility, deeper reasoning, faster code generation, or
              multimodal capabilities.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {engineStats.map((item) => (
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
          </div>

          {/* Right: Settings screenshot with overflow */}
          <div className="relative flex items-end justify-end overflow-hidden xl:min-h-[420px]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-surface)_0%,transparent_20%)] z-10 pointer-events-none hidden xl:block" />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--color-surface)_0%,transparent_16%)] z-10 pointer-events-none" />
            <img
              src={enginePng}
              alt="ShipIt Settings — engine selection UI"
              className="relative w-full xl:absolute xl:left-4 xl:top-8 xl:w-[115%] xl:max-w-none rounded-tl-2xl rounded-tr-2xl xl:rounded-tr-none border border-[var(--color-border)] xl:border-r-0 xl:border-b-0 shadow-[0_-20px_60px_-20px_rgba(15,23,42,0.4)]"
            />
          </div>
        </div>
      </div>

      {/* ── Sticky scroll-driven engine selector ──── */}
      <div
        ref={stickyRef}
        className="sticky-wrapper mt-5"
        style={{ height: "500vh" }}
      >
        <div className="sticky-inner" style={{ padding: "0" }}>
          <div className="rounded-[38px] border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-5 shadow-[0_30px_70px_-46px_rgba(15,23,42,0.42)] backdrop-blur-xl sm:p-6">
            {/* Step indicators */}
            <div className="mb-4 flex items-center gap-2">
              {orderedEngines.map((engine, i) => (
                <button
                  key={engine.name}
                  type="button"
                  onClick={() => setActiveName(engine.name)}
                  className={`sticky-step-bar cursor-pointer ${i === stickyIndex ? "is-active" : ""}`}
                  title={engine.name}
                />
              ))}
              <span className="ml-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                {activeEngine.name} — {engineRoles[activeEngine.name]}
              </span>
            </div>

            <div className="grid gap-5 xl:grid-cols-[0.92fr_1.08fr]">
              <div className="grid content-start gap-4">
                <div className="grid gap-3">
                  {orderedEngines.map((engine, index) => {
                    const Icon = engineIcons[engine.name] ?? Sparkles;
                    const isActive = engine.name === activeEngine.name;
                    return (
                      <button
                        key={engine.name}
                        type="button"
                        onClick={() => setActiveName(engine.name)}
                        className={`landing-engine-selector text-left transition-all duration-500 ${
                          isActive ? "is-active scale-[1.01]" : "opacity-60 hover:opacity-100"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <div className="landing-engine-selector-icon">
                              <Icon size={18} />
                            </div>
                            <div>
                              <div
                                className={`text-base font-semibold ${engine.color}`}
                              >
                                {engine.name}
                              </div>
                              <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                                {engineRoles[engine.name] || `0${index + 1}`}
                              </div>
                              <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">
                                {engine.desc}
                              </p>
                            </div>
                          </div>

                          <div className={`rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                            isActive
                              ? "border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                              : "border-[var(--color-border)] bg-[var(--color-surface)]/90 text-[var(--color-text-muted)]"
                          }`}>
                            {isActive ? "Active" : `0${index + 1}`}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

          <div className="landing-engine-panel rounded-[34px] border border-[var(--color-border)] p-5 shadow-[0_24px_50px_-38px_rgba(15,23,42,0.4)]">
            <div className="landing-engine-panel-orb landing-engine-panel-orb-a" />
            <div className="landing-engine-panel-orb landing-engine-panel-orb-b" />

            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/22 bg-[var(--color-accent)]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
                <ActiveIcon size={12} />
                Active engine
              </div>
              <div className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/84 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                {activeEngine.name}
              </div>
            </div>

            <div className="relative z-10 mt-5 grid gap-4 lg:grid-cols-[1.02fr_0.98fr]">
              <div className="grid content-start gap-4">
                <div className="rounded-[30px] border border-[var(--color-border)] bg-[var(--color-surface)]/88 p-5 shadow-[0_20px_40px_-32px_rgba(15,23,42,0.18)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[linear-gradient(160deg,var(--color-accent),#6366F1)] text-white shadow-[0_20px_44px_-24px_rgba(37,99,235,0.4)]">
                    <ActiveIcon size={22} />
                  </div>

                  <div className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                    {activeEngine.name === "ShipIt CLI"
                      ? "Why ShipIt stands out"
                      : activeEngine.name === "Claude Code CLI"
                        ? "Reasoning mode"
                        : activeEngine.name === "Google Gemini CLI"
                          ? "Multimodal mode"
                          : "Code generation mode"}
                  </div>
                  <div
                    className={`mt-2 text-3xl font-semibold ${activeEngine.color}`}
                  >
                    {activeEngine.name}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
                    {engineNotes[activeEngine.name]}
                  </p>

                  <div className="mt-5 grid gap-3">
                    {(activeEngine.providers
                      ? [
                          "Route across many providers from one personal CLI.",
                          "Use setup commands instead of manual config editing.",
                          "Switch models without leaving the same workflow.",
                        ]
                      : [
                          "Keep the same UI while changing engine strengths.",
                          "Use the best engine for the current task instead of forcing one model.",
                          "Stay inside one modern workspace while routing work differently.",
                        ]
                    ).map((item) => (
                      <div
                        key={item}
                        className="rounded-[20px] border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/76 px-4 py-3 text-sm leading-6 text-[var(--color-text-secondary)]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid content-start gap-4">
                <div className="rounded-[28px] border border-[var(--color-border)] bg-[var(--color-surface)]/86 p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                    Model coverage
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {(activeEngine.models ?? []).map((model) => (
                      <span
                        key={model}
                        className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/88 px-3 py-1.5 text-[12px] font-medium text-[var(--color-text-secondary)]"
                      >
                        {model}
                      </span>
                    ))}
                    {!activeEngine.models &&
                      activeEngine.providers?.slice(0, 5).map((provider) => (
                        <span
                          key={provider.name}
                          className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/88 px-3 py-1.5 text-[12px] font-medium text-[var(--color-text-secondary)]"
                        >
                          {provider.name}
                        </span>
                      ))}
                  </div>
                </div>

                <div className="rounded-[28px] border border-[var(--color-border)] bg-[var(--color-surface)]/86 p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                    {activeEngine.providers
                      ? "Provider matrix"
                      : "Recommended models"}
                  </div>

                  <div className="mt-3 grid gap-3">
                    {(activeEngine.providers
                      ? activeEngine.providers.slice(0, 5)
                      : (activeEngine.models ?? []).map((model) => ({
                          name: model,
                          models: activeEngine.desc,
                        }))
                    ).map((item) => (
                      <div
                        key={item.name}
                        className="landing-engine-provider-card"
                      >
                        <div className="text-sm font-semibold text-[var(--color-text-primary)]">
                          {item.name}
                        </div>
                        {activeEngine.providers && (
                          <div className="mt-1 text-sm leading-6 text-[var(--color-text-secondary)]">
                            {item.models}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>

      <div
        ref={bottomRef}
        className={`stagger-children mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ${bottomVisible ? "is-visible" : ""}`}
      >
        {[
          "ShipIt gives you the most flexibility because the model layer is yours to route.",
          "Claude is strongest when the work needs careful reasoning and review judgment.",
          "Codex is strongest when you want direct code generation and implementation speed.",
          "Gemini is strongest when you need multimodal understanding and large context windows.",
        ].map((item, index) => (
          <div
            key={item}
            className="landing-card-3d-inner rounded-[28px] border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-5 shadow-[0_20px_40px_-34px_rgba(15,23,42,0.35)]"
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
              0{index + 1}
            </div>
            <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
