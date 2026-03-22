export default function BenefitsSvg() {
  const flowSteps = [
    { x: 80, label: "Prompt", color: "#2563EB", icon: "💬" },
    { x: 200, label: "Parse", color: "#0EA5E9", icon: "📋" },
    { x: 320, label: "Code", color: "#6366F1", icon: "⌨️" },
    { x: 440, label: "Review", color: "#8B5CF6", icon: "🔍" },
    { x: 560, label: "Test", color: "#059669", icon: "🧪" },
    { x: 680, label: "Ship", color: "#0F172A", icon: "🚀" },
  ];

  return (
    <div className="rounded-[30px] border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-5 shadow-[0_24px_50px_-38px_rgba(15,23,42,0.4)] backdrop-blur-xl">
      <svg viewBox="0 0 760 400" className="w-full rounded-[20px]">
        <defs>
          <linearGradient id="bnBg" x1="0" y1="0" x2="760" y2="400">
            <stop stopColor="#F8FAFC" /><stop offset="1" stopColor="#EFF6FF" />
          </linearGradient>
          <linearGradient id="bnTrack" x1="80" y1="190" x2="680" y2="190">
            <stop stopColor="#3B82F6" /><stop offset="0.5" stopColor="#6366F1" /><stop offset="1" stopColor="#059669" />
          </linearGradient>
          <linearGradient id="bnHub" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#2563EB" /><stop offset="1" stopColor="#6366F1" />
          </linearGradient>
          <filter id="bnGlow"><feGaussianBlur stdDeviation="8" /></filter>
        </defs>

        <rect width="760" height="400" rx="24" fill="url(#bnBg)" />

        {/* === SOLO DEVELOPER (left) === */}
        <g className="animate-float-slow origin-center">
          <rect x="40" y="36" width="160" height="110" rx="20" fill="white" stroke="#DBEAFE" />
          {/* Person at desk */}
          <circle cx="90" cy="66" r="14" fill="#2563EB" fillOpacity="0.12" />
          <circle cx="90" cy="60" r="6" fill="#2563EB" />
          <path d="M80 74 A10 10 0 0 1 100 74" fill="#2563EB" fillOpacity="0.5" />
          {/* Laptop */}
          <rect x="74" y="86" width="32" height="20" rx="4" fill="#0F172A" />
          <rect x="78" y="90" width="24" height="12" rx="2" fill="#1E293B" />
          <rect x="82" y="94" width="16" height="2" rx="1" fill="#3B82F6">
            <animate attributeName="width" values="4;16;4" dur="2s" repeatCount="indefinite" />
          </rect>
          <rect x="82" y="98" width="10" height="2" rx="1" fill="#6366F1" fillOpacity="0.5" />
          <rect x="68" y="106" width="44" height="3" rx="1.5" fill="#0F172A" fillOpacity="0.7" />
          {/* Speed/momentum arrows */}
          <g>
            <path d="M140 60L158 60" stroke="#2563EB" strokeWidth="2" strokeLinecap="round">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
            </path>
            <path d="M152 56L158 60L152 64" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M140 76L164 76" stroke="#6366F1" strokeWidth="2" strokeLinecap="round">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
            </path>
            <path d="M158 72L164 76L158 80" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <text x="90" y="132" textAnchor="middle" fontSize="10" fontWeight="700" fill="#2563EB" fontFamily="Space Grotesk,sans-serif">Solo Developer</text>
        </g>

        {/* === TEAM (right) === */}
        <g className="animate-float-delay origin-center">
          <rect x="560" y="36" width="160" height="110" rx="20" fill="white" stroke="#E9D5FF" />
          {/* Team members in a network */}
          {[
            { cx: 610, cy: 72, color: "#6366F1" },
            { cx: 650, cy: 58, color: "#2563EB" },
            { cx: 690, cy: 72, color: "#8B5CF6" },
            { cx: 630, cy: 96, color: "#059669" },
            { cx: 670, cy: 96, color: "#0EA5E9" },
          ].map((p, i) => (
            <g key={i}>
              <circle cx={p.cx} cy={p.cy} r="10" fill={p.color} fillOpacity="0.12" />
              <circle cx={p.cx} cy={p.cy - 3} r="4" fill={p.color} />
              <path d={`M${p.cx - 6} ${p.cy + 5} A6 6 0 0 1 ${p.cx + 6} ${p.cy + 5}`} fill={p.color} fillOpacity="0.5" />
            </g>
          ))}
          {/* Connection lines between team */}
          {[
            "M610 72L650 58", "M650 58L690 72", "M610 72L630 96",
            "M690 72L670 96", "M630 96L670 96",
          ].map((d, i) => (
            <line key={i} x1={d.split(/[ML]/)[1].split(" ")[0]} y1={d.split(/[ML]/)[1].split(" ")[1]} x2={d.split(/[ML]/)[2].split(" ")[0]} y2={d.split(/[ML]/)[2].split(" ")[1]} stroke="#C4B5FD" strokeWidth="1.5" strokeDasharray="3 3">
              <animate attributeName="stroke-dashoffset" from="0" to="-12" dur="2s" repeatCount="indefinite" />
            </line>
          ))}
          <text x="650" y="132" textAnchor="middle" fontSize="10" fontWeight="700" fill="#6366F1" fontFamily="Space Grotesk,sans-serif">Team Delivery</text>
        </g>

        {/* === CENTRAL HUB === */}
        <g>
          <circle cx="380" cy="80" r="40" fill="url(#bnHub)" filter="url(#bnGlow)" opacity="0.2" />
          <circle cx="380" cy="80" r="28" fill="white" stroke="#2563EB" strokeWidth="3">
            <animate attributeName="r" values="28;30;28" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="380" cy="80" r="28" fill="none" stroke="#2563EB" strokeWidth="2">
            <animate attributeName="r" from="28" to="44" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
          </circle>
          {/* AI brain icon */}
          <circle cx="380" cy="74" r="8" fill="#2563EB" fillOpacity="0.15" />
          <path d="M372 78C372 72 376 68 380 68C384 68 388 72 388 78" stroke="#2563EB" strokeWidth="2" fill="none" />
          <path d="M374 82L380 86L386 82" stroke="#6366F1" strokeWidth="2" fill="none" strokeLinecap="round" />
          <text x="380" y="100" textAnchor="middle" fontSize="8" fontWeight="700" fill="#2563EB" fontFamily="Space Grotesk,sans-serif">ShipIt AI</text>

          {/* Lines to solo & team */}
          <path d="M200 90L352 80" stroke="#BFDBFE" strokeWidth="2" strokeDasharray="6 4">
            <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2s" repeatCount="indefinite" />
          </path>
          <path d="M408 80L560 90" stroke="#DDD6FE" strokeWidth="2" strokeDasharray="6 4">
            <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2s" repeatCount="indefinite" />
          </path>
        </g>

        {/* === WORKFLOW CHAIN (bottom) === */}
        {/* Track glow */}
        <path d="M80 210H680" stroke="url(#bnTrack)" strokeWidth="16" strokeLinecap="round" opacity="0.08" filter="url(#bnGlow)" />
        {/* Track */}
        <path d="M80 210H680" stroke="#E2E8F0" strokeWidth="4" strokeLinecap="round" />
        <path d="M80 210H680" stroke="url(#bnTrack)" strokeWidth="4" strokeLinecap="round" strokeDasharray="800" strokeDashoffset="800">
          <animate attributeName="stroke-dashoffset" from="800" to="0" dur="3s" fill="freeze" />
        </path>

        {/* Traveling data packets */}
        {[0, 1, 2].map(i => (
          <circle key={i} r="4" fill={["#2563EB", "#6366F1", "#059669"][i]}>
            <animateMotion path="M80 210H680" dur={`${3 + i * 0.5}s`} begin={`${i * 1.2}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;1;0" dur={`${3 + i * 0.5}s`} begin={`${i * 1.2}s`} repeatCount="indefinite" />
          </circle>
        ))}

        {/* Step nodes */}
        {flowSteps.map((step, i) => (
          <g key={step.label}>
            {/* Node */}
            <circle cx={step.x} cy="210" r="22" fill="white" stroke={step.color} strokeWidth="3" />
            <text x={step.x} y="214" textAnchor="middle" fontSize="16">{step.icon}</text>
            {/* Label */}
            <rect x={step.x - 28} y="240" width="56" height="20" rx="10" fill={step.color} fillOpacity="0.1" />
            <text x={step.x} y="254" textAnchor="middle" fontSize="9" fontWeight="700" fill={step.color} fontFamily="Space Grotesk,sans-serif">{step.label}</text>
          </g>
        ))}

        {/* === BENEFIT ICONS === */}
        {/* Time saved */}
        <g className="animate-float-slow origin-center">
          <rect x="60" y="290" width="140" height="80" rx="18" fill="white" stroke="#DBEAFE" />
          <circle cx="100" cy="318" r="16" fill="#0EA5E9" fillOpacity="0.1" />
          <circle cx="100" cy="318" r="10" fill="none" stroke="#0EA5E9" strokeWidth="2" />
          <path d="M100 312V318L104 322" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" from="0 100 318" to="360 100 318" dur="8s" repeatCount="indefinite" />
          </path>
          <text x="130" y="314" fontSize="10" fontWeight="700" fill="#0F172A" fontFamily="Space Grotesk,sans-serif">Save Time</text>
          <text x="130" y="328" fontSize="8" fill="#64748B" fontFamily="sans-serif">One workspace,</text>
          <text x="130" y="340" fontSize="8" fill="#64748B" fontFamily="sans-serif">zero context loss</text>
        </g>

        {/* Visibility */}
        <g className="animate-float-delay origin-center">
          <rect x="230" y="290" width="140" height="80" rx="18" fill="white" stroke="#E0E7FF" />
          <circle cx="270" cy="318" r="16" fill="#6366F1" fillOpacity="0.1" />
          {/* Eye icon */}
          <ellipse cx="270" cy="318" rx="10" ry="7" fill="none" stroke="#6366F1" strokeWidth="2" />
          <circle cx="270" cy="318" r="4" fill="#6366F1" />
          <circle cx="270" cy="318" r="2" fill="white" />
          <text x="300" y="314" fontSize="10" fontWeight="700" fill="#0F172A" fontFamily="Space Grotesk,sans-serif">Visibility</text>
          <text x="300" y="328" fontSize="8" fill="#64748B" fontFamily="sans-serif">See every step,</text>
          <text x="300" y="340" fontSize="8" fill="#64748B" fontFamily="sans-serif">trust the output</text>
        </g>

        {/* Safety */}
        <g className="animate-float-slow origin-center">
          <rect x="400" y="290" width="140" height="80" rx="18" fill="white" stroke="#D1FAE5" />
          <circle cx="440" cy="318" r="16" fill="#059669" fillOpacity="0.1" />
          {/* Shield */}
          <path d="M440 306C440 306 432 310 432 318C432 326 440 332 440 332C440 332 448 326 448 318C448 310 440 306 440 306Z" fill="none" stroke="#059669" strokeWidth="2" />
          <path d="M436 318L439 321L444 315" stroke="#059669" strokeWidth="2" strokeLinecap="round" fill="none" />
          <text x="470" y="314" fontSize="10" fontWeight="700" fill="#0F172A" fontFamily="Space Grotesk,sans-serif">Safety</text>
          <text x="470" y="328" fontSize="8" fill="#64748B" fontFamily="sans-serif">Local-first,</text>
          <text x="470" y="340" fontSize="8" fill="#64748B" fontFamily="sans-serif">controlled shipping</text>
        </g>

        {/* Control */}
        <g className="animate-float-delay origin-center">
          <rect x="570" y="290" width="150" height="80" rx="18" fill="white" stroke="#FEF3C7" />
          <circle cx="610" cy="318" r="16" fill="#D97706" fillOpacity="0.1" />
          {/* Sliders icon */}
          <line x1="602" y1="312" x2="618" y2="312" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
          <circle cx="608" cy="312" r="3" fill="#D97706" />
          <line x1="602" y1="320" x2="618" y2="320" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
          <circle cx="614" cy="320" r="3" fill="#D97706" />
          <line x1="602" y1="328" x2="618" y2="328" stroke="#D97706" strokeWidth="2" strokeLinecap="round" />
          <circle cx="606" cy="328" r="3" fill="#D97706" />
          <text x="640" y="314" fontSize="10" fontWeight="700" fill="#0F172A" fontFamily="Space Grotesk,sans-serif">Control</text>
          <text x="640" y="328" fontSize="8" fill="#64748B" fontFamily="sans-serif">You decide what</text>
          <text x="640" y="340" fontSize="8" fill="#64748B" fontFamily="sans-serif">ships and when</text>
        </g>
      </svg>
    </div>
  );
}
