export default function QuickStartSvg() {
  const commands = [
    { text: "git clone https://github.com/shipit-ai/shipit.git", delay: 0, color: "#93C5FD" },
    { text: "cd shipit", delay: 1.2, color: "#93C5FD" },
    { text: "pip install -r requirements.txt", delay: 2.4, color: "#FDE68A" },
    { text: "npm install", delay: 3.6, color: "#FDE68A" },
    { text: "cp .env.example .env", delay: 4.8, color: "#C4B5FD" },
    { text: "python run.py", delay: 6, color: "#86EFAC" },
  ];

  const outputs = [
    { text: "Cloning into 'shipit'...", delay: 0.6, color: "#64748B" },
    { text: "✓ Repository cloned", delay: 1, color: "#34D399" },
    { text: "", delay: 0, color: "" },
    { text: "Installing 42 packages...", delay: 2.8, color: "#64748B" },
    { text: "✓ Dependencies installed", delay: 3.2, color: "#34D399" },
    { text: "✓ Frontend built", delay: 4.0, color: "#34D399" },
    { text: "", delay: 0, color: "" },
    { text: "🚀 ShipIt running on http://localhost:3000", delay: 6.5, color: "#86EFAC" },
    { text: "   Dashboard: http://localhost:5173", delay: 7, color: "#A5B4FC" },
  ];

  return (
    <div className="rounded-[30px] border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-5 shadow-[0_24px_50px_-38px_rgba(15,23,42,0.4)] backdrop-blur-xl">
      <svg viewBox="0 0 700 480" className="w-full rounded-[20px]">
        <defs>
          <linearGradient id="qsBg" x1="0" y1="0" x2="700" y2="480">
            <stop stopColor="#F8FAFC" /><stop offset="1" stopColor="#EFF6FF" />
          </linearGradient>
          <linearGradient id="qsAccent" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#2563EB" /><stop offset="1" stopColor="#6366F1" />
          </linearGradient>
        </defs>

        <rect width="700" height="480" rx="24" fill="url(#qsBg)" />

        {/* Left side: Terminal */}
        <rect x="24" y="24" width="420" height="432" rx="20" fill="#0F172A" />

        {/* Title bar */}
        <rect x="24" y="24" width="420" height="40" rx="20" fill="white" fillOpacity="0.04" />
        <circle cx="48" cy="44" r="5" fill="#FB7185" />
        <circle cx="64" cy="44" r="5" fill="#FBBF24" />
        <circle cx="80" cy="44" r="5" fill="#34D399" />
        <text x="234" y="48" textAnchor="middle" fontSize="10" fill="#64748B" fontFamily="monospace">Terminal — Quick Start</text>

        {/* Command prompt lines */}
        {commands.map((cmd, i) => {
          const y = 84 + i * 28;
          return (
            <g key={i}>
              <text x="40" y={y} fontSize="10" fill="#059669" fontFamily="monospace" fillOpacity="0">
                $
                <animate attributeName="fill-opacity" values="0;1" dur="0.1s" begin={`${cmd.delay}s`} fill="freeze" />
              </text>
              <text x="56" y={y} fontSize="10" fill={cmd.color} fontFamily="monospace" fillOpacity="0">
                {cmd.text}
                <animate attributeName="fill-opacity" values="0;1" dur="0.3s" begin={`${cmd.delay + 0.1}s`} fill="freeze" />
              </text>
            </g>
          );
        })}

        {/* Output lines */}
        {outputs.map((out, i) => {
          if (!out.text) return null;
          const y = 260 + i * 20;
          return (
            <text key={i} x="40" y={y} fontSize="9" fill={out.color} fontFamily="monospace" fillOpacity="0">
              {out.text}
              <animate attributeName="fill-opacity" values="0;1" dur="0.3s" begin={`${out.delay}s`} fill="freeze" />
            </text>
          );
        })}

        {/* Blinking cursor */}
        <rect x="40" y="430" width="7" height="12" rx="1" fill="#93C5FD">
          <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
        </rect>

        {/* Right side: Steps visualization */}
        <g>
          <rect x="464" y="24" width="212" height="432" rx="20" fill="white" stroke="#DBEAFE" />

          <text x="570" y="56" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0F172A" fontFamily="Space Grotesk,sans-serif">Setup Steps</text>

          {[
            { label: "Clone repo", icon: "📦", color: "#2563EB", desc: "Get the source code" },
            { label: "Install deps", icon: "📥", color: "#D97706", desc: "Python + Node packages" },
            { label: "Configure", icon: "⚙️", color: "#6366F1", desc: "Set environment vars" },
            { label: "Launch", icon: "🚀", color: "#059669", desc: "Start the server" },
          ].map((step, i) => {
            const y = 80 + i * 92;
            return (
              <g key={step.label}>
                {/* Vertical connector */}
                {i > 0 && (
                  <line x1="494" y1={y - 26} x2="494" y2={y + 6} stroke={step.color} strokeWidth="2" strokeOpacity="0.2" strokeDasharray="4 3">
                    <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="1.5s" repeatCount="indefinite" />
                  </line>
                )}

                {/* Step number */}
                <circle cx="494" cy={y + 16} r="14" fill={step.color} fillOpacity="0.1" stroke={step.color} strokeWidth="2" />
                <text x="494" y={y + 20} textAnchor="middle" fontSize="10" fontWeight="700" fill={step.color}>{i + 1}</text>

                {/* Icon + label */}
                <text x="518" y={y + 12} fontSize="14">{step.icon}</text>
                <text x="538" y={y + 12} fontSize="11" fontWeight="700" fill="#0F172A" fontFamily="Space Grotesk,sans-serif">{step.label}</text>
                <text x="518" y={y + 28} fontSize="8" fill="#64748B" fontFamily="sans-serif">{step.desc}</text>

                {/* Progress bar */}
                <rect x="518" y={y + 36} width="140" height="4" rx="2" fill={step.color} fillOpacity="0.08" />
                <rect x="518" y={y + 36} width="140" height="4" rx="2" fill={step.color} fillOpacity="0.4">
                  <animate attributeName="width" values="0;140" dur="1s" begin={`${i * 1.5 + 0.5}s`} fill="freeze" />
                </rect>

                {/* Checkmark that appears */}
                <circle cx="660" cy={y + 16} r="8" fill={step.color} fillOpacity="0" stroke={step.color} strokeWidth="1.5" strokeOpacity="0">
                  <animate attributeName="fill-opacity" values="0;0.15" dur="0.3s" begin={`${i * 1.5 + 1.5}s`} fill="freeze" />
                  <animate attributeName="stroke-opacity" values="0;1" dur="0.3s" begin={`${i * 1.5 + 1.5}s`} fill="freeze" />
                </circle>
                <path d={`M${655} ${y + 16}L${658} ${y + 19}L${665} ${y + 13}`} stroke={step.color} strokeWidth="2" fill="none" strokeLinecap="round" strokeOpacity="0">
                  <animate attributeName="stroke-opacity" values="0;1" dur="0.3s" begin={`${i * 1.5 + 1.5}s`} fill="freeze" />
                </path>
              </g>
            );
          })}

          {/* Final success message */}
          <rect x="478" y="422" width="184" height="26" rx="13" fill="#059669" fillOpacity="0.1" stroke="#059669" strokeWidth="1" strokeOpacity="0">
            <animate attributeName="stroke-opacity" values="0;1" dur="0.3s" begin="7s" fill="freeze" />
          </rect>
          <text x="570" y="439" textAnchor="middle" fontSize="9" fontWeight="700" fill="#059669" fontFamily="Space Grotesk,sans-serif" fillOpacity="0">
            ✅ Ready to code!
            <animate attributeName="fill-opacity" values="0;1" dur="0.3s" begin="7s" fill="freeze" />
          </text>
        </g>
      </svg>
    </div>
  );
}
