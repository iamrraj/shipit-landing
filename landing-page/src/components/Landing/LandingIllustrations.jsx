function Label({ x, y, text, tone = "slate" }) {
  const tones = {
    sky: { fill: "#0EA5E9", bg: "#E0F2FE" },
    indigo: { fill: "#4F46E5", bg: "#E0E7FF" },
    emerald: { fill: "#059669", bg: "#D1FAE5" },
    slate: { fill: "#334155", bg: "#E2E8F0" },
    amber: { fill: "#B45309", bg: "#FEF3C7" },
    violet: { fill: "#7C3AED", bg: "#EDE9FE" },
  };
  const toneValue = tones[tone];
  const width = Math.max(62, text.length * 6.9 + 18);

  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={width} height="26" rx="13" fill={toneValue.bg} />
      <text
        x={width / 2}
        y="17"
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill={toneValue.fill}
        fontFamily="Space Grotesk, Avenir Next, sans-serif"
      >
        {text}
      </text>
    </g>
  );
}

function PulseRing({ cx, cy, color = "#2563EB", delay = 0 }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="10" fill="none" stroke={color} strokeOpacity="0.4" strokeWidth="2">
        <animate attributeName="r" from="10" to="26" dur="2.5s" begin={`${delay}s`} repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.5" to="0" dur="2.5s" begin={`${delay}s`} repeatCount="indefinite" />
      </circle>
      <circle cx={cx} cy={cy} r="10" fill="none" stroke={color} strokeOpacity="0.25" strokeWidth="1.5">
        <animate attributeName="r" from="10" to="34" dur="2.5s" begin={`${delay + 0.8}s`} repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.35" to="0" dur="2.5s" begin={`${delay + 0.8}s`} repeatCount="indefinite" />
      </circle>
    </g>
  );
}

function AnimatedPath({ d, stroke, strokeWidth = 5, duration = 2.5 }) {
  return (
    <path
      d={d}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      fill="none"
      strokeDasharray="500"
      strokeDashoffset="500"
    >
      <animate attributeName="stroke-dashoffset" from="500" to="0" dur={`${duration}s`} fill="freeze" calcMode="spline" keySplines="0.22 1 0.36 1" />
    </path>
  );
}

function GlowCircle({ cx, cy, r, color = "#3B82F6", delay = 0 }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r * 2.2} fill={color} fillOpacity="0.06">
        <animate attributeName="r" values={`${r * 1.8};${r * 2.6};${r * 1.8}`} dur="6s" begin={`${delay}s`} repeatCount="indefinite" />
        <animate attributeName="fill-opacity" values="0.06;0.12;0.06" dur="6s" begin={`${delay}s`} repeatCount="indefinite" />
      </circle>
      <circle cx={cx} cy={cy} r={r} fill={color} fillOpacity="0.15" className="animate-float-slow origin-center" />
    </g>
  );
}

export function HeroIllustration() {
  return (
    <div className="animate-float-3d relative overflow-hidden rounded-[30px] border border-white/35 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,255,255,0.58))] p-4 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.38),rgba(15,23,42,0.18))]">
      <div className="landing-hero-illustration-glow landing-hero-illustration-glow-a" />
      <div className="landing-hero-illustration-glow landing-hero-illustration-glow-b" />
      <svg viewBox="0 0 760 520" className="w-full rounded-[24px]">
        <defs>
          <linearGradient id="heroPanel" x1="120" y1="80" x2="610" y2="420">
            <stop stopColor="#0F172A" />
            <stop offset="1" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient id="heroCard" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#FFFFFF" stopOpacity="0.92" />
            <stop offset="1" stopColor="#E2E8F0" stopOpacity="0.86" />
          </linearGradient>
          <linearGradient id="heroTrack" x1="342" y1="246" x2="546" y2="346">
            <stop stopColor="#93C5FD" />
            <stop offset="0.5" stopColor="#6366F1" />
            <stop offset="1" stopColor="#DBEAFE" />
          </linearGradient>
          <linearGradient id="heroGlow" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#3B82F6" stopOpacity="0.2" />
            <stop offset="1" stopColor="#8B5CF6" stopOpacity="0.1" />
          </linearGradient>
          <filter id="heroBlur">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        <rect width="760" height="520" rx="32" fill="#EFF6FF" />

        {/* Animated background blobs */}
        <ellipse cx="100" cy="90" rx="90" ry="80" fill="url(#heroGlow)" filter="url(#heroBlur)" className="animate-float-slow origin-center" />
        <ellipse cx="670" cy="430" rx="100" ry="90" fill="url(#heroGlow)" filter="url(#heroBlur)" className="animate-float-delay origin-center" />

        <circle cx="86" cy="82" r="68" fill="#BAE6FD" className="animate-float-slow origin-center" />
        <circle cx="682" cy="96" r="72" fill="#BFDBFE" className="animate-float-delay origin-center" />
        <circle cx="656" cy="444" r="74" fill="#DBEAFE" className="animate-float-slow origin-center" />

        <g className="animate-fade-rise">
          <rect x="132" y="86" width="496" height="338" rx="36" fill="url(#heroPanel)" />

          {/* Subtle grid pattern inside panel */}
          <g opacity="0.06">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <line key={`hg${i}`} x1={180 + i * 56} y1="86" x2={180 + i * 56} y2="424" stroke="white" strokeWidth="1" />
            ))}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <line key={`hh${i}`} x1="132" y1={130 + i * 50} x2="628" y2={130 + i * 50} stroke="white" strokeWidth="1" />
            ))}
          </g>

          <rect x="158" y="112" width="444" height="44" rx="18" fill="white" fillOpacity="0.08" />
          <circle cx="184" cy="134" r="6" fill="#FB7185" />
          <circle cx="206" cy="134" r="6" fill="#FBBF24" />
          <circle cx="228" cy="134" r="6" fill="#34D399" />

          {/* Typing indicator */}
          <g>
            <circle cx="560" cy="134" r="3" fill="white" fillOpacity="0.4">
              <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="572" cy="134" r="3" fill="white" fillOpacity="0.4">
              <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
            </circle>
            <circle cx="584" cy="134" r="3" fill="white" fillOpacity="0.4">
              <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
            </circle>
          </g>

          <rect x="178" y="178" width="196" height="134" rx="28" fill="white" fillOpacity="0.1" />
          <rect x="394" y="178" width="184" height="86" rx="24" fill="white" fillOpacity="0.1" />
          <rect x="394" y="280" width="184" height="112" rx="24" fill="white" fillOpacity="0.1" />
          <rect x="180" y="330" width="186" height="64" rx="22" fill="white" fillOpacity="0.08" />

          <rect x="204" y="202" width="88" height="10" rx="5" fill="#93C5FD" />
          <rect x="204" y="224" width="136" height="9" rx="4.5" fill="white" fillOpacity="0.56" />
          <rect x="204" y="245" width="116" height="9" rx="4.5" fill="white" fillOpacity="0.42" />
          <rect x="204" y="266" width="96" height="9" rx="4.5" fill="white" fillOpacity="0.28" />
          <rect x="204" y="348" width="62" height="9" rx="4.5" fill="#DBEAFE" />
          <rect x="204" y="368" width="116" height="8" rx="4" fill="white" fillOpacity="0.44" />

          <rect x="420" y="204" width="72" height="10" rx="5" fill="#DBEAFE" />
          <rect x="420" y="227" width="120" height="9" rx="4.5" fill="white" fillOpacity="0.52" />
          <rect x="420" y="304" width="92" height="10" rx="5" fill="#93C5FD" />
          <rect x="420" y="326" width="126" height="9" rx="4.5" fill="white" fillOpacity="0.48" />
          <rect x="420" y="347" width="104" height="9" rx="4.5" fill="white" fillOpacity="0.34" />

          {/* Animated workflow path */}
          <AnimatedPath
            d="M342 246C374 246 384 214 416 214C452 214 452 332 482 332C510 332 522 346 546 346"
            stroke="url(#heroTrack)"
            strokeWidth={5}
            duration={2}
          />

          {/* Pulsing nodes on the path */}
          <PulseRing cx={342} cy={246} color="#93C5FD" delay={0} />
          <circle cx="342" cy="246" r="7" fill="#F8FAFC" />
          <PulseRing cx={416} cy={214} color="#6366F1" delay={0.5} />
          <circle cx="416" cy="214" r="7" fill="#BFDBFE" />
          <PulseRing cx={482} cy={332} color="#3B82F6" delay={1} />
          <circle cx="482" cy="332" r="7" fill="#DBEAFE" />
          <PulseRing cx={546} cy={346} color="#2563EB" delay={1.5} />
          <circle cx="546" cy="346" r="7" fill="#93C5FD" />
        </g>

        <g className="animate-float-delay origin-center">
          <rect x="64" y="174" width="162" height="96" rx="26" fill="url(#heroCard)" stroke="#BFDBFE" />
          <rect x="88" y="198" width="72" height="9" rx="4.5" fill="#2563EB" />
          <rect x="88" y="218" width="102" height="8" rx="4" fill="#64748B" fillOpacity="0.45" />
          <rect x="88" y="236" width="84" height="8" rx="4" fill="#64748B" fillOpacity="0.28" />
          <Label x={78} y={134} text="Implement" tone="sky" />
        </g>

        <g className="animate-float-slow origin-center">
          <rect x="572" y="86" width="128" height="86" rx="24" fill="url(#heroCard)" stroke="#C7D2FE" />
          <rect x="596" y="110" width="56" height="9" rx="4.5" fill="#1D4ED8" />
          <rect x="596" y="129" width="76" height="8" rx="4" fill="#64748B" fillOpacity="0.4" />
          <rect x="596" y="147" width="60" height="8" rx="4" fill="#64748B" fillOpacity="0.28" />
          <Label x={568} y={42} text="Review" tone="indigo" />
        </g>

        <g className="animate-float-delay origin-center">
          <rect x="548" y="394" width="142" height="86" rx="24" fill="url(#heroCard)" stroke="#BFDBFE" />
          <rect x="572" y="418" width="62" height="9" rx="4.5" fill="#2563EB" />
          <rect x="572" y="438" width="90" height="8" rx="4" fill="#64748B" fillOpacity="0.38" />
          <Label x={556} y={488} text="Ship" tone="emerald" />
        </g>

        {/* Animated checkmark on Ship card */}
        <g className="animate-float-delay origin-center">
          <circle cx="674" cy="414" r="14" fill="#059669" fillOpacity="0.15">
            <animate attributeName="r" values="14;17;14" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="674" cy="414" r="8" fill="#059669" />
          <path d="M669 414L672 417L679 411" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>
      </svg>
    </div>
  );
}

export function FlowIllustration() {
  return (
    <div className="animate-float-3d rounded-[30px] border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-5 shadow-[0_24px_50px_-38px_rgba(15,23,42,0.4)] backdrop-blur-xl">
      <svg viewBox="0 0 760 360" className="w-full rounded-[20px]">
        <defs>
          <linearGradient id="flowBg" x1="82" y1="42" x2="680" y2="322">
            <stop stopColor="#EFF6FF" />
            <stop offset="0.55" stopColor="#EEF2FF" />
            <stop offset="1" stopColor="#ECFDF5" />
          </linearGradient>
          <linearGradient id="flowTrack" x1="90" y1="178" x2="670" y2="178">
            <stop stopColor="#38BDF8" />
            <stop offset="0.35" stopColor="#6366F1" />
            <stop offset="0.7" stopColor="#14B8A6" />
            <stop offset="1" stopColor="#0F172A" />
          </linearGradient>
          <filter id="flowGlow">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>
        <rect width="760" height="360" rx="28" fill="url(#flowBg)" />

        {/* Background decorative grid */}
        <g opacity="0.55">
          <path d="M72 78H688M72 282H688" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="8 10" />
          <path d="M72 124H688M72 236H688" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="6 12" />
        </g>

        {/* Glow behind the path */}
        <path
          d="M98 180C180 180 188 118 268 118C351 118 356 244 438 244C518 244 536 180 660 180"
          stroke="url(#flowTrack)"
          strokeWidth="20"
          strokeLinecap="round"
          fill="none"
          opacity="0.12"
          filter="url(#flowGlow)"
        />

        {/* Animated main path */}
        <AnimatedPath
          d="M98 180C180 180 188 118 268 118C351 118 356 244 438 244C518 244 536 180 660 180"
          stroke="url(#flowTrack)"
          strokeWidth={8}
          duration={2}
        />

        {/* Animated traveling dot */}
        <circle r="5" fill="#2563EB">
          <animateMotion
            path="M98 180C180 180 188 118 268 118C351 118 356 244 438 244C518 244 536 180 660 180"
            dur="4s"
            repeatCount="indefinite"
          />
          <animate attributeName="r" values="3;6;3" dur="4s" repeatCount="indefinite" />
        </circle>

        {[
          { cx: 110, cy: 180, color: "#0EA5E9" },
          { cx: 268, cy: 118, color: "#6366F1" },
          { cx: 438, cy: 244, color: "#14B8A6" },
          { cx: 660, cy: 180, color: "#0F172A" },
        ].map((node, idx) => (
          <g
            key={node.cx}
            className={idx % 2 === 0 ? "animate-float-slow origin-center" : "animate-float-delay origin-center"}
          >
            <circle cx={node.cx} cy={node.cy} r="28" fill="#FFFFFF" stroke={node.color} strokeOpacity="0.25" strokeWidth="10" />
            <circle cx={node.cx} cy={node.cy} r="11" fill={node.color} />
            <PulseRing cx={node.cx} cy={node.cy} color={node.color} delay={idx * 0.6} />
          </g>
        ))}

        <g className="animate-fade-rise">
          <rect x="128" y="44" width="164" height="74" rx="24" fill="#FFFFFF" fillOpacity="0.86" stroke="#BFDBFE" />
          <rect x="148" y="66" width="54" height="9" rx="4.5" fill="#0EA5E9" />
          <rect x="148" y="86" width="108" height="8" rx="4" fill="#64748B" fillOpacity="0.36" />
          <Label x={144} y={18} text="Parse + Validate" tone="sky" />
        </g>

        <g className="animate-float-delay origin-center">
          <rect x="300" y="110" width="172" height="82" rx="24" fill="#FFFFFF" fillOpacity="0.86" stroke="#C7D2FE" />
          <rect x="322" y="132" width="66" height="9" rx="4.5" fill="#6366F1" />
          <rect x="322" y="152" width="124" height="8" rx="4" fill="#64748B" fillOpacity="0.36" />
          <rect x="322" y="168" width="102" height="8" rx="4" fill="#64748B" fillOpacity="0.24" />
          <Label x={320} y={82} text="Implement" tone="indigo" />
        </g>

        <g className="animate-float-slow origin-center">
          <rect x="486" y="214" width="170" height="84" rx="24" fill="#FFFFFF" fillOpacity="0.9" stroke="#A7F3D0" />
          <rect x="508" y="236" width="64" height="9" rx="4.5" fill="#059669" />
          <rect x="508" y="256" width="126" height="8" rx="4" fill="#64748B" fillOpacity="0.38" />
          <rect x="508" y="272" width="96" height="8" rx="4" fill="#64748B" fillOpacity="0.24" />
          <Label x={496} y={314} text="Review + Test + Report" tone="emerald" />
        </g>

        <g className="animate-float-delay origin-center">
          <rect x="550" y="54" width="126" height="70" rx="22" fill="#FFFFFF" fillOpacity="0.84" stroke="#CBD5E1" />
          <rect x="570" y="76" width="48" height="9" rx="4.5" fill="#0F172A" />
          <rect x="570" y="95" width="78" height="8" rx="4" fill="#64748B" fillOpacity="0.34" />
          <Label x={552} y={18} text="Ship Control" tone="slate" />
        </g>
      </svg>
    </div>
  );
}

export function PipelineStepIllustration({ steps, activeIndex = 0 }) {
  const currentStep = steps[activeIndex] ?? steps[0];
  const nodes = [84, 178, 272, 366, 460, 554, 648];
  const colors = ["#0EA5E9", "#6366F1", "#2563EB", "#8B5CF6", "#14B8A6", "#059669", "#0F172A"];

  return (
    <div className="animate-float-3d rounded-[30px] border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-5 shadow-[0_24px_50px_-38px_rgba(15,23,42,0.4)] backdrop-blur-xl">
      <svg viewBox="0 0 760 420" className="w-full rounded-[24px]">
        <defs>
          <linearGradient id="pipelineFocusBg" x1="84" y1="34" x2="672" y2="364">
            <stop stopColor="#EFF6FF" />
            <stop offset="0.45" stopColor="#EEF4FF" />
            <stop offset="1" stopColor="#E2E8F0" />
          </linearGradient>
          <linearGradient id="pipelineFocusTrack" x1="82" y1="108" x2="664" y2="108">
            <stop stopColor="#38BDF8" />
            <stop offset="0.4" stopColor="#6366F1" />
            <stop offset="0.75" stopColor="#2563EB" />
            <stop offset="1" stopColor="#0F172A" />
          </linearGradient>
          <filter id="pipeGlow">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        <rect width="760" height="420" rx="28" fill="url(#pipelineFocusBg)" />
        <rect x="36" y="30" width="688" height="360" rx="30" fill="#FFFFFF" fillOpacity="0.72" stroke="#DBEAFE" />

        {/* Track background */}
        <path d="M82 108H664" stroke="#CBD5E1" strokeWidth="8" strokeLinecap="round" />

        {/* Active track glow */}
        <path d={`M82 108H${nodes[Math.max(activeIndex, 0)]}`} stroke="url(#pipelineFocusTrack)" strokeWidth="14" strokeLinecap="round" opacity="0.15" filter="url(#pipeGlow)" />

        {/* Active track */}
        <path
          d={`M82 108H${nodes[Math.max(activeIndex, 0)]}`}
          stroke="url(#pipelineFocusTrack)"
          strokeWidth="8"
          strokeLinecap="round"
          className="transition-all duration-700"
        />

        {steps.map((step, index) => {
          const cx = nodes[index];
          const isActive = index === activeIndex;
          const isComplete = index <= activeIndex;

          return (
            <g key={step.phase}>
              {isActive && <PulseRing cx={cx} cy={108} color={colors[index]} delay={0} />}
              <circle
                cx={cx}
                cy="108"
                r={isActive ? "24" : "18"}
                fill={isActive ? "#FFFFFF" : isComplete ? "#F8FAFC" : "#E2E8F0"}
                stroke={isComplete ? colors[index] || "#2563EB" : "#94A3B8"}
                strokeWidth={isActive ? "8" : "4"}
                className={`transition-all duration-500 ${isActive ? "animate-float-delay origin-center" : ""}`}
              />
              <text
                x={cx}
                y="113"
                textAnchor="middle"
                fontSize="12"
                fontWeight="700"
                fill={isComplete ? "#1D4ED8" : "#64748B"}
                fontFamily="Space Grotesk, Avenir Next, sans-serif"
              >
                {step.phase}
              </text>
              <text
                x={cx}
                y="146"
                textAnchor="middle"
                fontSize="11"
                fontWeight={isActive ? "700" : "600"}
                fill={isActive ? "#0F172A" : "#64748B"}
                fontFamily="Space Grotesk, Avenir Next, sans-serif"
              >
                {step.title.length > 12 ? `${step.title.slice(0, 12)}...` : step.title}
              </text>
            </g>
          );
        })}

        <g className="animate-fade-rise">
          <rect x="74" y="190" width="612" height="154" rx="28" fill="#0F172A" fillOpacity="0.94" />

          {/* Subtle grid in dark panel */}
          <g opacity="0.04">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <line key={`pg${i}`} x1={120 + i * 56} y1="190" x2={120 + i * 56} y2="344" stroke="white" strokeWidth="1" />
            ))}
          </g>

          <circle cx="112" cy="226" r="7" fill="#FB7185" />
          <circle cx="136" cy="226" r="7" fill="#FBBF24" />
          <circle cx="160" cy="226" r="7" fill="#34D399" />

          <rect x="104" y="256" width="84" height="28" rx="14" fill="#1D4ED8" />
          <text x="146" y="274" textAnchor="middle" fontSize="11" fontWeight="700" fill="#DBEAFE" fontFamily="Space Grotesk, Avenir Next, sans-serif">
            STEP {currentStep.phase}
          </text>

          <text x="104" y="310" fontSize="28" fontWeight="700" fill="#F8FAFC" fontFamily="Space Grotesk, Avenir Next, sans-serif">
            {currentStep.title}
          </text>
          <text x="104" y="336" fontSize="13" fill="#93C5FD" fontFamily="Avenir Next, Inter, sans-serif">
            {currentStep.artifacts}
          </text>

          <rect x="458" y="248" width="190" height="70" rx="24" fill="#FFFFFF" fillOpacity="0.08" stroke="#334155" />
          <rect x="478" y="270" width="76" height="10" rx="5" fill="#7DD3FC" />
          <rect x="478" y="288" width="132" height="8" rx="4" fill="#E2E8F0" fillOpacity="0.6" />
          <Label x={474} y={214} text={currentStep.phase} tone="sky" />

          {/* Activity indicator */}
          <circle cx="630" cy="216" r="4" fill="#34D399">
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  );
}

export function OfferShowcaseIllustration() {
  return (
    <div className="animate-float-3d rounded-[30px] border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-5 shadow-[0_24px_50px_-38px_rgba(15,23,42,0.4)] backdrop-blur-xl">
      <svg viewBox="0 0 760 320" className="w-full rounded-[24px]">
        <defs>
          <linearGradient id="offerBg" x1="72" y1="30" x2="692" y2="290">
            <stop stopColor="#EFF6FF" />
            <stop offset="0.6" stopColor="#EEF4FF" />
            <stop offset="1" stopColor="#E2E8F0" />
          </linearGradient>
          <linearGradient id="offerPanel" x1="170" y1="72" x2="600" y2="250">
            <stop stopColor="#0F172A" />
            <stop offset="1" stopColor="#2563EB" />
          </linearGradient>
          <linearGradient id="offerPath" x1="350" y1="184" x2="536" y2="214">
            <stop stopColor="#93C5FD" />
            <stop offset="0.5" stopColor="#6366F1" />
            <stop offset="1" stopColor="#14B8A6" />
          </linearGradient>
        </defs>

        <rect width="760" height="320" rx="28" fill="url(#offerBg)" />

        <GlowCircle cx={112} cy={82} r={46} color="#3B82F6" delay={0} />
        <GlowCircle cx={654} cy={256} r={52} color="#6366F1" delay={2} />

        <g className="animate-fade-rise">
          <rect x="154" y="56" width="454" height="208" rx="30" fill="url(#offerPanel)" />
          <rect x="182" y="84" width="398" height="30" rx="15" fill="white" fillOpacity="0.08" />
          <rect x="204" y="142" width="144" height="84" rx="22" fill="white" fillOpacity="0.1" />
          <rect x="370" y="142" width="182" height="44" rx="18" fill="white" fillOpacity="0.1" />
          <rect x="370" y="198" width="182" height="28" rx="14" fill="white" fillOpacity="0.1" />

          <rect x="224" y="166" width="76" height="10" rx="5" fill="#93C5FD" />
          <rect x="224" y="188" width="92" height="8" rx="4" fill="white" fillOpacity="0.52" />
          <rect x="392" y="158" width="86" height="10" rx="5" fill="#DBEAFE" />
          <rect x="392" y="214" width="104" height="8" rx="4" fill="white" fillOpacity="0.48" />

          <AnimatedPath
            d="M350 184C376 184 386 164 412 164C446 164 442 214 474 214C500 214 512 214 536 214"
            stroke="url(#offerPath)"
            strokeWidth={5}
            duration={2}
          />

          <circle cx="350" cy="184" r="7" fill="#F8FAFC" />
          <circle cx="412" cy="164" r="7" fill="#BFDBFE" />
          <circle cx="474" cy="214" r="7" fill="#DBEAFE" />
          <circle cx="536" cy="214" r="7" fill="#93C5FD" />

          {/* Traveling dot */}
          <circle r="4" fill="#6366F1">
            <animateMotion
              path="M350 184C376 184 386 164 412 164C446 164 442 214 474 214C500 214 512 214 536 214"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        <g className="animate-float-delay origin-center">
          <rect x="70" y="162" width="150" height="88" rx="24" fill="#FFFFFF" fillOpacity="0.92" stroke="#BFDBFE" />
          <rect x="92" y="186" width="64" height="9" rx="4.5" fill="#2563EB" />
          <rect x="92" y="205" width="94" height="8" rx="4" fill="#64748B" fillOpacity="0.35" />
          <Label x={86} y={126} text="Prompt + Tools" tone="sky" />
        </g>

        <g className="animate-float-slow origin-center">
          <rect x="564" y="52" width="128" height="84" rx="24" fill="#FFFFFF" fillOpacity="0.9" stroke="#CBD5E1" />
          <rect x="586" y="76" width="56" height="9" rx="4.5" fill="#0F172A" />
          <rect x="586" y="95" width="82" height="8" rx="4" fill="#64748B" fillOpacity="0.35" />
          <Label x={560} y={20} text="Output" tone="emerald" />
        </g>
      </svg>
    </div>
  );
}

export function UseCasesIllustration({ activeIndex = 0 }) {
  const sceneLabels = [
    { primary: "Solo build", secondary: "Idea to feature", accent: "#2563EB", nodeFill: "#DBEAFE" },
    { primary: "Learn the flow", secondary: "Visible pipeline", accent: "#6366F1", nodeFill: "#EDE9FE" },
    { primary: "Team delivery", secondary: "Review + tests", accent: "#0F172A", nodeFill: "#CBD5E1" },
    { primary: "OSS onboarding", secondary: "Readable workflow", accent: "#059669", nodeFill: "#D1FAE5" },
  ];
  const currentScene = sceneLabels[activeIndex] ?? sceneLabels[0];
  const tones = ["sky", "violet", "slate", "emerald"];

  return (
    <div className="animate-float-3d rounded-[30px] border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-5 shadow-[0_24px_50px_-38px_rgba(15,23,42,0.4)] backdrop-blur-xl">
      <svg viewBox="0 0 760 340" className="w-full rounded-[24px]">
        <defs>
          <linearGradient id="useCasesBg" x1="76" y1="34" x2="682" y2="300">
            <stop stopColor="#EFF6FF" />
            <stop offset="0.55" stopColor="#EEF4FF" />
            <stop offset="1" stopColor="#E2E8F0" />
          </linearGradient>
          <linearGradient id="useCasesPanel" x1="160" y1="62" x2="602" y2="262">
            <stop stopColor="#0F172A" />
            <stop offset="1" stopColor={currentScene.accent} />
          </linearGradient>
        </defs>

        <rect width="760" height="340" rx="28" fill="url(#useCasesBg)" />

        <GlowCircle cx={98} cy={90} r={42} color={currentScene.accent} delay={0} />
        <GlowCircle cx={664} cy={254} r={48} color="#3B82F6" delay={1.5} />

        <g className="animate-fade-rise">
          <rect x="156" y="58" width="448" height="226" rx="30" fill="url(#useCasesPanel)" />
          <rect x="186" y="88" width="388" height="34" rx="17" fill="white" fillOpacity="0.08" />
          <rect x="198" y="148" width="150" height="100" rx="24" fill="white" fillOpacity="0.1" />
          <rect x="368" y="148" width="194" height="44" rx="18" fill="white" fillOpacity="0.1" />
          <rect x="368" y="204" width="194" height="44" rx="18" fill="white" fillOpacity="0.1" />

          <rect x="220" y="172" width="74" height="10" rx="5" fill="#93C5FD" />
          <rect x="220" y="194" width="92" height="8" rx="4" fill="white" fillOpacity="0.5" />
          <rect x="392" y="164" width="72" height="9" rx="4.5" fill="#DBEAFE" />
          <rect x="392" y="220" width="88" height="9" rx="4.5" fill="#BFDBFE" />

          <AnimatedPath
            d="M350 198C376 198 386 170 418 170C446 170 450 226 482 226C506 226 520 226 544 226"
            stroke="#E2E8F0"
            strokeWidth={5}
            duration={2.5}
          />

          <circle cx="350" cy="198" r="7" fill="#F8FAFC" />
          <circle cx="418" cy="170" r="7" fill="#BFDBFE" />
          <circle cx="482" cy="226" r="7" fill="#DBEAFE" />
          <circle cx="544" cy="226" r="7" fill="#93C5FD" />

          <circle r="4" fill={currentScene.accent}>
            <animateMotion
              path="M350 198C376 198 386 170 418 170C446 170 450 226 482 226C506 226 520 226 544 226"
              dur="3.5s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        <g className="animate-float-delay origin-center">
          <rect x="68" y="178" width="152" height="90" rx="24" fill="#FFFFFF" fillOpacity="0.92" stroke="#BFDBFE" />
          <rect x="90" y="202" width="62" height="9" rx="4.5" fill={currentScene.accent} />
          <rect x="90" y="220" width="96" height="8" rx="4" fill="#64748B" fillOpacity="0.35" />
          <Label x={82} y={142} text={currentScene.primary} tone={tones[activeIndex]} />
        </g>

        <g className="animate-float-slow origin-center">
          <rect x="560" y="54" width="132" height="84" rx="24" fill="#FFFFFF" fillOpacity="0.9" stroke="#CBD5E1" />
          <rect x="582" y="78" width="58" height="9" rx="4.5" fill={currentScene.accent} />
          <rect x="582" y="97" width="84" height="8" rx="4" fill="#64748B" fillOpacity="0.35" />
          <Label x={548} y={22} text={currentScene.secondary} tone="slate" />
        </g>
      </svg>
    </div>
  );
}

export function ArchitectureIllustration() {
  return (
    <div className="animate-float-3d rounded-[30px] border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-5 shadow-[0_24px_50px_-38px_rgba(15,23,42,0.4)] backdrop-blur-xl">
      <svg viewBox="0 0 760 360" className="w-full rounded-[24px]">
        <defs>
          <linearGradient id="architectureBg" x1="78" y1="32" x2="686" y2="310">
            <stop stopColor="#EFF6FF" />
            <stop offset="0.55" stopColor="#EEF4FF" />
            <stop offset="1" stopColor="#E2E8F0" />
          </linearGradient>
          <linearGradient id="architectureCore" x1="172" y1="74" x2="588" y2="252">
            <stop stopColor="#0F172A" />
            <stop offset="1" stopColor="#2563EB" />
          </linearGradient>
          <linearGradient id="architectureEdge" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="1" stopColor="#E2E8F0" stopOpacity="0.88" />
          </linearGradient>
          <filter id="archGlow">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>

        <rect width="760" height="360" rx="28" fill="url(#architectureBg)" />

        <GlowCircle cx={118} cy={80} r={44} color="#3B82F6" delay={0} />
        <GlowCircle cx={652} cy={270} r={52} color="#6366F1" delay={2} />

        <g className="animate-fade-rise">
          <rect x="174" y="72" width="412" height="214" rx="32" fill="url(#architectureCore)" />

          {/* Grid pattern */}
          <g opacity="0.05">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <line key={`ag${i}`} x1={220 + i * 66} y1="72" x2={220 + i * 66} y2="286" stroke="white" strokeWidth="1" />
            ))}
          </g>

          <rect x="202" y="98" width="356" height="34" rx="17" fill="white" fillOpacity="0.08" />
          <rect x="224" y="164" width="116" height="68" rx="22" fill="white" fillOpacity="0.12" />
          <rect x="362" y="164" width="92" height="68" rx="22" fill="white" fillOpacity="0.12" />
          <rect x="476" y="164" width="82" height="68" rx="22" fill="white" fillOpacity="0.12" />

          <rect x="246" y="188" width="68" height="9" rx="4.5" fill="#93C5FD" />
          <rect x="384" y="188" width="48" height="9" rx="4.5" fill="#DBEAFE" />
          <rect x="498" y="188" width="40" height="9" rx="4.5" fill="#BFDBFE" />

          {/* Animated connectors */}
          <g>
            <line x1="340" y1="198" x2="362" y2="198" stroke="#E2E8F0" strokeWidth="5" strokeLinecap="round">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
            </line>
            <line x1="454" y1="198" x2="476" y2="198" stroke="#E2E8F0" strokeWidth="5" strokeLinecap="round">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.5s" repeatCount="indefinite" />
            </line>
          </g>

          {/* Data flow dots */}
          <circle r="3" fill="#93C5FD">
            <animate attributeName="cx" values="340;362" dur="1s" repeatCount="indefinite" />
            <animate attributeName="cy" values="198;198" dur="1s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" />
          </circle>
          <circle r="3" fill="#DBEAFE">
            <animate attributeName="cx" values="454;476" dur="1s" repeatCount="indefinite" begin="0.3s" />
            <animate attributeName="cy" values="198;198" dur="1s" repeatCount="indefinite" begin="0.3s" />
            <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" begin="0.3s" />
          </circle>
        </g>

        <g className="animate-float-delay origin-center">
          <rect x="58" y="168" width="150" height="88" rx="24" fill="url(#architectureEdge)" stroke="#BFDBFE" />
          <rect x="80" y="190" width="66" height="9" rx="4.5" fill="#2563EB" />
          <rect x="80" y="210" width="96" height="8" rx="4" fill="#64748B" fillOpacity="0.32" />
          <Label x={74} y={128} text="Frontend" tone="sky" />
        </g>

        <g className="animate-float-slow origin-center">
          <rect x="560" y="62" width="134" height="84" rx="24" fill="url(#architectureEdge)" stroke="#CBD5E1" />
          <rect x="582" y="86" width="58" height="9" rx="4.5" fill="#0F172A" />
          <rect x="582" y="104" width="84" height="8" rx="4" fill="#64748B" fillOpacity="0.34" />
          <Label x={552} y={26} text="Integrations" tone="slate" />
        </g>

        <g className="animate-float-delay origin-center">
          <rect x="538" y="244" width="146" height="86" rx="24" fill="url(#architectureEdge)" stroke="#BFDBFE" />
          <rect x="560" y="266" width="62" height="9" rx="4.5" fill="#2563EB" />
          <rect x="560" y="286" width="94" height="8" rx="4" fill="#64748B" fillOpacity="0.34" />
          <Label x={548} y={336} text="Delivery flow" tone="emerald" />
        </g>
      </svg>
    </div>
  );
}

export function AudienceIllustration() {
  return (
    <div className="animate-float-3d rounded-[30px] border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-5 shadow-[0_24px_50px_-38px_rgba(15,23,42,0.4)] backdrop-blur-xl">
      <svg viewBox="0 0 760 320" className="w-full rounded-[20px]">
        <rect width="760" height="320" rx="28" fill="#F8FAFC" />
        <rect x="60" y="58" width="264" height="204" rx="28" fill="#FFFFFF" stroke="#DBEAFE" />
        <rect x="436" y="58" width="264" height="204" rx="28" fill="#FFFFFF" stroke="#E9D5FF" />
        <Label x={82} y={30} text="Personal work" tone="sky" />
        <Label x={458} y={30} text="Professional teams" tone="violet" />
        <rect x="88" y="90" width="84" height="12" rx="6" fill="#2563EB" />
        <rect x="88" y="118" width="176" height="9" rx="4.5" fill="#64748B" fillOpacity="0.44" />
        <rect x="88" y="138" width="154" height="9" rx="4.5" fill="#64748B" fillOpacity="0.3" />
        <rect x="88" y="180" width="78" height="42" rx="18" fill="#E0F2FE" className="animate-float-slow origin-center" />
        <rect x="182" y="180" width="110" height="42" rx="18" fill="#D1FAE5" className="animate-float-delay origin-center" />

        <rect x="464" y="90" width="92" height="12" rx="6" fill="#6366F1" />
        <rect x="464" y="118" width="182" height="9" rx="4.5" fill="#64748B" fillOpacity="0.44" />
        <rect x="464" y="138" width="168" height="9" rx="4.5" fill="#64748B" fillOpacity="0.3" />
        <rect x="464" y="180" width="92" height="42" rx="18" fill="#EDE9FE" className="animate-float-delay origin-center" />
        <rect x="570" y="180" width="102" height="42" rx="18" fill="#FEF3C7" className="animate-float-slow origin-center" />

        {/* Animated dashed connector */}
        <path d="M324 160H436" stroke="#CBD5E1" strokeWidth="5" strokeDasharray="8 10">
          <animate attributeName="stroke-dashoffset" from="0" to="-36" dur="2s" repeatCount="indefinite" />
        </path>

        <circle cx="380" cy="160" r="18" fill="#0F172A">
          <animate attributeName="r" values="18;20;18" dur="3s" repeatCount="indefinite" />
        </circle>
        <path d="M372 160H388M382 152L390 160L382 168" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
