export default function DetailSvg() {
  const journey = [
    { y: 50, label: "You describe the task", detail: "\"Add dark mode to settings page\"", color: "#2563EB", icon: "👤" },
    { y: 130, label: "AI parses & plans", detail: "Identifies files, dependencies, approach", color: "#0EA5E9", icon: "🧠" },
    { y: 210, label: "Code is generated", detail: "Creates components, styles, logic", color: "#6366F1", icon: "⌨️" },
    { y: 290, label: "Automatic review", detail: "Checks quality, security, patterns", color: "#8B5CF6", icon: "🔍" },
    { y: 370, label: "Tests run & pass", detail: "Unit tests, integration tests", color: "#059669", icon: "✅" },
    { y: 450, label: "Ready to ship", detail: "PR created, changelog updated", color: "#0F172A", icon: "🚀" },
  ];

  return (
    <div className="rounded-[30px] border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-5 shadow-[0_24px_50px_-38px_rgba(15,23,42,0.4)] backdrop-blur-xl">
      <svg viewBox="0 0 760 520" className="w-full rounded-[20px]">
        <defs>
          <linearGradient id="dtBg" x1="0" y1="0" x2="760" y2="520">
            <stop stopColor="#F8FAFC" /><stop offset="1" stopColor="#EFF6FF" />
          </linearGradient>
          <linearGradient id="dtLine" x1="0" y1="50" x2="0" y2="450">
            <stop stopColor="#2563EB" /><stop offset="0.5" stopColor="#6366F1" /><stop offset="1" stopColor="#059669" />
          </linearGradient>
          <filter id="dtGlow"><feGaussianBlur stdDeviation="6" /></filter>
        </defs>

        <rect width="760" height="520" rx="24" fill="url(#dtBg)" />

        {/* Vertical timeline line */}
        <line x1="120" y1="50" x2="120" y2="450" stroke="#E2E8F0" strokeWidth="4" strokeLinecap="round" />
        <line x1="120" y1="50" x2="120" y2="450" stroke="url(#dtLine)" strokeWidth="4" strokeLinecap="round" strokeDasharray="800" strokeDashoffset="800">
          <animate attributeName="stroke-dashoffset" from="800" to="0" dur="3s" fill="freeze" />
        </line>

        {/* Traveling dot along timeline */}
        <circle r="6" fill="#2563EB">
          <animateMotion path="M120 50 L120 450" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite" />
        </circle>

        {/* Journey steps */}
        {journey.map((step, i) => (
          <g key={step.label}>
            {/* Node on timeline */}
            <circle cx="120" cy={step.y} r="16" fill="white" stroke={step.color} strokeWidth="3" />
            <text x="120" y={step.y + 5} textAnchor="middle" fontSize="12">{step.icon}</text>

            {/* Step number */}
            <circle cx="104" cy={step.y - 12} r="8" fill={step.color} />
            <text x="104" y={step.y - 8} textAnchor="middle" fontSize="8" fontWeight="700" fill="white">{i + 1}</text>

            {/* Connector line to card */}
            <line x1="136" y1={step.y} x2="180" y2={step.y} stroke={step.color} strokeWidth="2" strokeOpacity="0.3" strokeDasharray="4 3">
              <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="1.5s" repeatCount="indefinite" />
            </line>

            {/* Info card */}
            <rect x="184" y={step.y - 30} width="280" height="60" rx="14" fill="white" stroke={step.color} strokeWidth="1.5" strokeOpacity="0.2">
              <animate attributeName="opacity" values="0;1" dur="0.4s" begin={`${i * 0.5}s`} fill="freeze" />
            </rect>
            <text x="200" y={step.y - 6} fontSize="11" fontWeight="700" fill="#0F172A" fontFamily="Space Grotesk,sans-serif">{step.label}</text>
            <text x="200" y={step.y + 12} fontSize="9" fill="#64748B" fontFamily="sans-serif">{step.detail}</text>

            {/* Progress indicator */}
            <rect x="184" y={step.y + 24} width="280" height="3" rx="1.5" fill={step.color} fillOpacity="0.08" />
            <rect x="184" y={step.y + 24} width="280" height="3" rx="1.5" fill={step.color} fillOpacity="0.3">
              <animate attributeName="width" values="0;280" dur="1s" begin={`${i * 0.5}s`} fill="freeze" />
            </rect>
          </g>
        ))}

        {/* Right side: Live code preview */}
        <rect x="500" y="40" width="240" height="440" rx="18" fill="#0F172A" />
        <rect x="500" y="40" width="240" height="32" rx="18" fill="white" fillOpacity="0.04" />
        <circle cx="520" cy="56" r="4" fill="#FB7185" />
        <circle cx="534" cy="56" r="4" fill="#FBBF24" />
        <circle cx="548" cy="56" r="4" fill="#34D399" />
        <text x="620" y="60" textAnchor="middle" fontSize="9" fill="#64748B" fontFamily="monospace">Live Preview</text>

        {/* Mini code blocks that appear as steps complete */}
        {[
          { y: 86, file: "settings.jsx", lines: ["<ThemeProvider>", "  <DarkMode", "    toggle={on}", "  />", "</ThemeProvider>"] },
          { y: 196, file: "theme.css", lines: [":root { --bg: #fff }", ".dark { --bg: #0f172a }", ".toggle { all: unset }", "  cursor: pointer;"] },
          { y: 316, file: "test.spec.js", lines: ["it('toggles dark', () =>", "  click(toggle);", "  expect(body)", "    .hasClass('dark')", ");"] },
        ].map((block, bi) => (
          <g key={bi}>
            <rect x="510" y={block.y} width="60" height="16" rx="8" fill={["#2563EB", "#6366F1", "#059669"][bi]} fillOpacity="0.15" />
            <text x="540" y={block.y + 12} textAnchor="middle" fontSize="8" fontWeight="600" fill={["#93C5FD", "#A5B4FC", "#86EFAC"][bi]} fontFamily="monospace">{block.file}</text>
            {block.lines.map((line, li) => (
              <text key={li} x="518" y={block.y + 32 + li * 16} fontSize="9" fill="#94A3B8" fontFamily="monospace" fillOpacity="0">
                {line}
                <animate attributeName="fill-opacity" values="0;0.8" dur="0.3s" begin={`${bi * 1.2 + li * 0.2}s`} fill="freeze" />
              </text>
            ))}
          </g>
        ))}

        {/* Blinking cursor at bottom of code */}
        <rect x="518" y="430" width="7" height="12" rx="1" fill="#93C5FD">
          <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
        </rect>
      </svg>
    </div>
  );
}
