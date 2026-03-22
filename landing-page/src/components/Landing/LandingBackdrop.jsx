export default function LandingBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="landing-noise-mask" />
      <div className="landing-aurora landing-aurora-a" />
      <div className="landing-aurora landing-aurora-b" />
      <div className="landing-aurora landing-aurora-c" />
      <div className="landing-aurora landing-aurora-d" />

      <div className="landing-grid-wrap">
        <div className="landing-grid-plane" />
      </div>

      <div className="landing-orbit landing-orbit-a" />
      <div className="landing-orbit landing-orbit-b" />
      <div className="landing-orbit landing-orbit-c" />
      <div className="landing-backdrop-ring landing-backdrop-ring-a" />
      <div className="landing-backdrop-ring landing-backdrop-ring-b" />
      <div className="landing-backdrop-ring landing-backdrop-ring-c" />

      <div className="landing-glass-panel landing-panel-a" />
      <div className="landing-glass-panel landing-panel-b" />
      <div className="landing-glass-panel landing-panel-c" />
      <div className="landing-light-column landing-light-column-a" />
      <div className="landing-light-column landing-light-column-b" />

      {/* Floating particles */}
      <div className="landing-particle landing-particle-a" />
      <div className="landing-particle landing-particle-b" />
      <div className="landing-particle landing-particle-c" />
      <div className="landing-particle landing-particle-d" />
      <div className="landing-particle landing-particle-e" />
      <div className="landing-particle landing-particle-f" />

      {/* Morphing ambient blob */}
      <div className="animate-morph-blob absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[28rem] w-[28rem] bg-gradient-to-br from-blue-500/[0.06] via-indigo-500/[0.04] to-emerald-500/[0.03] blur-[60px]" />
      <div className="absolute inset-x-[8%] top-[14%] h-px bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-70" />
    </div>
  );
}
