export default function PipelineSvg() {
  const steps = [
    { x: 60, label: "Prompt", icon: "💬", color: "#2563EB", desc: "Describe task" },
    { x: 160, label: "Parse", icon: "🧠", color: "#0EA5E9", desc: "Understand intent" },
    { x: 260, label: "Plan", icon: "📐", color: "#6366F1", desc: "Design solution" },
    { x: 360, label: "Code", icon: "⌨️", color: "#8B5CF6", desc: "Generate code" },
    { x: 460, label: "Review", icon: "🔍", color: "#D97706", desc: "Quality check" },
    { x: 560, label: "Test", icon: "🧪", color: "#059669", desc: "Run tests" },
    { x: 660, label: "Ship", icon: "🚀", color: "#0F172A", desc: "Deploy it" },
  ];

  return (
    <div className="rounded-[30px] border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-5 shadow-[0_24px_50px_-38px_rgba(15,23,42,0.4)] backdrop-blur-xl">
      <svg viewBox="0 0 720 400" className="w-full rounded-[20px]">
        <defs>
          <linearGradient id="ppBg" x1="0" y1="0" x2="720" y2="400">
            <stop stopColor="#F8FAFC" /><stop offset="1" stopColor="#EFF6FF" />
          </linearGradient>
          <linearGradient id="ppTrack" x1="60" y1="0" x2="660" y2="0">
            <stop stopColor="#2563EB" /><stop offset="0.5" stopColor="#8B5CF6" /><stop offset="1" stopColor="#059669" />
          </linearGradient>
          <filter id="ppGlow"><feGaussianBlur stdDeviation="8" /></filter>
        </defs>

        <rect width="720" height="400" rx="24" fill="url(#ppBg)" />

        {/* Title */}
        <text x="360" y="36" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0F172A" fontFamily="Space Grotesk,sans-serif">AI-Powered Development Pipeline</text>

        {/* Main conveyor track */}
        <path d="M60 120H660" stroke="#E2E8F0" strokeWidth="6" strokeLinecap="round" />
        {/* Animated gradient overlay */}
        <path d="M60 120H660" stroke="url(#ppTrack)" strokeWidth="6" strokeLinecap="round" strokeDasharray="1200" strokeDashoffset="1200">
          <animate attributeName="stroke-dashoffset" from="1200" to="0" dur="4s" fill="freeze" />
        </path>
        {/* Glow under track */}
        <path d="M60 120H660" stroke="url(#ppTrack)" strokeWidth="20" strokeLinecap="round" opacity="0.06" filter="url(#ppGlow)" />

        {/* Traveling packets on conveyor */}
        {[0, 1, 2].map(i => (
          <g key={i}>
            <rect rx="4" width="16" height="10" fill={["#2563EB", "#8B5CF6", "#059669"][i]}>
              <animateMotion path="M60 115H660" dur={`${4 + i}s`} begin={`${i * 1.5}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;1;1;0" dur={`${4 + i}s`} begin={`${i * 1.5}s`} repeatCount="indefinite" />
            </rect>
          </g>
        ))}

        {/* Step nodes */}
        {steps.map((step, i) => (
          <g key={step.label}>
            {/* Vertical connector */}
            <line x1={step.x} y1="120" x2={step.x} y2="150" stroke={step.color} strokeWidth="2" strokeOpacity="0.3" />

            {/* Node circle */}
            <circle cx={step.x} cy="120" r="18" fill="white" stroke={step.color} strokeWidth="3" />
            <text x={step.x} y="126" textAnchor="middle" fontSize="14">{step.icon}</text>

            {/* Step number badge */}
            <circle cx={step.x + 14} cy="105" r="8" fill={step.color} />
            <text x={step.x + 14} y="109" textAnchor="middle" fontSize="8" fontWeight="700" fill="white">{i + 1}</text>

            {/* Info card below */}
            <rect x={step.x - 40} y="155" width="80" height="52" rx="12" fill="white" stroke={step.color} strokeWidth="1.5" strokeOpacity="0.2" />
            <text x={step.x} y="175" textAnchor="middle" fontSize="10" fontWeight="700" fill={step.color} fontFamily="Space Grotesk,sans-serif">{step.label}</text>
            <text x={step.x} y="192" textAnchor="middle" fontSize="8" fill="#64748B" fontFamily="sans-serif">{step.desc}</text>

            {/* Pulse on active (middle step) */}
            {i === 3 && (
              <circle cx={step.x} cy="120" r="18" fill="none" stroke={step.color} strokeWidth="2">
                <animate attributeName="r" from="18" to="32" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
              </circle>
            )}
          </g>
        ))}

        {/* Bottom detail: Before/After comparison */}
        <rect x="40" y="230" width="310" height="150" rx="18" fill="white" stroke="#DBEAFE" />
        <rect x="40" y="230" width="310" height="34" rx="18" fill="#2563EB" fillOpacity="0.04" />
        <text x="60" y="252" fontSize="11" fontWeight="700" fill="#2563EB" fontFamily="Space Grotesk,sans-serif">❌ Without ShipIt</text>

        {/* Manual steps — slow, error-prone */}
        {[
          { y: 278, label: "Write code manually", time: "2 hrs" },
          { y: 298, label: "Debug & fix bugs", time: "1.5 hrs" },
          { y: 318, label: "Write tests", time: "1 hr" },
          { y: 338, label: "Code review wait", time: "4 hrs" },
          { y: 358, label: "Deploy process", time: "30 min" },
        ].map((item, i) => (
          <g key={i}>
            <circle cx="64" cy={item.y} r="4" fill="#EF4444" fillOpacity="0.3" />
            <text x="78" y={item.y + 3} fontSize="9" fill="#64748B" fontFamily="monospace">{item.label}</text>
            <text x="320" y={item.y + 3} textAnchor="end" fontSize="9" fill="#EF4444" fontWeight="600" fontFamily="monospace">{item.time}</text>
          </g>
        ))}

        <rect x="370" y="230" width="310" height="150" rx="18" fill="white" stroke="#D1FAE5" />
        <rect x="370" y="230" width="310" height="34" rx="18" fill="#059669" fillOpacity="0.04" />
        <text x="390" y="252" fontSize="11" fontWeight="700" fill="#059669" fontFamily="Space Grotesk,sans-serif">✅ With ShipIt AI</text>

        {/* AI steps — fast, reliable */}
        {[
          { y: 278, label: "Describe in plain English", time: "1 min" },
          { y: 298, label: "AI generates + fixes", time: "30 sec" },
          { y: 318, label: "Auto-tests generated", time: "15 sec" },
          { y: 338, label: "Instant AI review", time: "10 sec" },
          { y: 358, label: "One-click ship", time: "5 sec" },
        ].map((item, i) => (
          <g key={i}>
            <circle cx="394" cy={item.y} r="4" fill="#059669">
              <animate attributeName="opacity" values="0;1" dur="0.3s" begin={`${2 + i * 0.3}s`} fill="freeze" />
            </circle>
            <path d={`M${391} ${item.y}L${393} ${item.y + 2}L${397} ${item.y - 2}`} stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <text x="408" y={item.y + 3} fontSize="9" fill="#64748B" fontFamily="monospace">{item.label}</text>
            <text x="650" y={item.y + 3} textAnchor="end" fontSize="9" fill="#059669" fontWeight="600" fontFamily="monospace">{item.time}</text>
          </g>
        ))}

        {/* Time savings arrow */}
        <g>
          <rect x="280" y="388" width="160" height="28" rx="14" fill="url(#ppTrack)" fillOpacity="0.1" stroke="url(#ppTrack)" strokeWidth="1" />
          <text x="360" y="406" textAnchor="middle" fontSize="10" fontWeight="700" fill="#2563EB" fontFamily="Space Grotesk,sans-serif">⚡ 100x Faster</text>
        </g>
      </svg>
    </div>
  );
}
