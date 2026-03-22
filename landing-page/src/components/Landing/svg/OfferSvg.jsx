export default function OfferSvg() {
  const panels = [
    { x: 28, y: 28, w: 220, h: 200, label: "Code Generation", color: "#2563EB", icon: "⌨️" },
    { x: 270, y: 28, w: 220, h: 200, label: "Smart Review", color: "#6366F1", icon: "🔍" },
    { x: 512, y: 28, w: 220, h: 200, label: "Auto Testing", color: "#059669", icon: "🧪" },
  ];

  return (
    <div className="rounded-[30px] border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-5 shadow-[0_24px_50px_-38px_rgba(15,23,42,0.4)] backdrop-blur-xl">
      <svg viewBox="0 0 760 460" className="w-full rounded-[20px]">
        <defs>
          <linearGradient id="ofBg" x1="0" y1="0" x2="760" y2="460">
            <stop stopColor="#F8FAFC" /><stop offset="1" stopColor="#EEF2FF" />
          </linearGradient>
          <linearGradient id="ofAccent" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#2563EB" /><stop offset="1" stopColor="#6366F1" />
          </linearGradient>
          <filter id="ofGlow"><feGaussianBlur stdDeviation="6" /></filter>
        </defs>

        <rect width="760" height="460" rx="24" fill="url(#ofBg)" />

        {/* Top title bar */}
        <rect x="220" y="0" width="320" height="28" rx="0" fill="url(#ofAccent)" opacity="0.08" />
        <text x="380" y="19" textAnchor="middle" fontSize="10" fontWeight="700" fill="#2563EB" fontFamily="Space Grotesk,sans-serif">ShipIt AI — Product Dashboard</text>

        {/* Three main panels */}
        {panels.map((p, i) => (
          <g key={p.label}>
            <rect x={p.x} y={p.y} width={p.w} height={p.h} rx="18" fill="white" stroke={p.color} strokeWidth="2" strokeOpacity="0.3" />
            {/* Panel header */}
            <rect x={p.x} y={p.y} width={p.w} height="36" rx="18" fill={p.color} fillOpacity="0.06" />
            <text x={p.x + 16} y={p.y + 23} fontSize="14">{p.icon}</text>
            <text x={p.x + 36} y={p.y + 23} fontSize="11" fontWeight="700" fill={p.color} fontFamily="Space Grotesk,sans-serif">{p.label}</text>

            {/* Active indicator dot */}
            <circle cx={p.x + p.w - 18} cy={p.y + 18} r="4" fill={p.color}>
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}

        {/* Panel 1: Code Generation — mini editor with lines typing */}
        <g>
          <rect x="40" y="76" width="196" height="140" rx="10" fill="#0F172A" />
          {/* Line numbers */}
          {[0,1,2,3,4,5].map(i => (
            <text key={i} x="52" y={94 + i * 20} fontSize="9" fill="#475569" fontFamily="monospace">{i + 1}</text>
          ))}
          {/* Code lines typing in */}
          {[
            { y: 94, text: "class AuthService:", color: "#93C5FD", w: 120 },
            { y: 114, text: "  def login(self):", color: "#C4B5FD", w: 110 },
            { y: 134, text: "    token = jwt()", color: "#FDE68A", w: 100 },
            { y: 154, text: "    return token", color: "#86EFAC", w: 96 },
            { y: 174, text: "", color: "", w: 0 },
            { y: 194, text: "  def verify():", color: "#C4B5FD", w: 100 },
          ].map((line, i) => line.text ? (
            <text key={i} x="68" y={line.y} fontSize="10" fill={line.color} fontFamily="monospace" fillOpacity="0">
              {line.text}
              <animate attributeName="fill-opacity" values="0;1" dur="0.3s" begin={`${0.5 + i * 0.4}s`} fill="freeze" />
            </text>
          ) : null)}
          {/* Cursor */}
          <rect x="68" y="186" width="7" height="12" rx="1" fill="#93C5FD">
            <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
          </rect>
        </g>

        {/* Panel 2: Smart Review — diff view */}
        <g>
          <rect x="282" y="76" width="196" height="140" rx="10" fill="#0F172A" />
          {/* Diff lines */}
          {[
            { y: 92, text: "- old_hash(pwd)", bg: "#7F1D1D", color: "#FCA5A5" },
            { y: 112, text: "+ bcrypt(pwd, salt)", bg: "#14532D", color: "#86EFAC" },
            { y: 132, text: "  validate_token()", bg: "none", color: "#94A3B8" },
            { y: 152, text: "- sleep(0.1)", bg: "#7F1D1D", color: "#FCA5A5" },
            { y: 172, text: "+ rate_limit(req)", bg: "#14532D", color: "#86EFAC" },
          ].map((line, i) => (
            <g key={i}>
              {line.bg !== "none" && <rect x="282" y={line.y - 10} width="196" height="18" fill={line.bg} fillOpacity="0.3" />}
              <text x="296" y={line.y} fontSize="10" fill={line.color} fontFamily="monospace">{line.text}</text>
            </g>
          ))}
          {/* Review comment bubble */}
          <rect x="310" y="190" width="150" height="22" rx="11" fill="#6366F1" fillOpacity="0.2" />
          <text x="320" y="205" fontSize="9" fill="#A5B4FC" fontFamily="monospace">✓ Security improved</text>
        </g>

        {/* Panel 3: Auto Testing — test results */}
        <g>
          <rect x="524" y="76" width="196" height="140" rx="10" fill="#0F172A" />
          {[
            { y: 94, label: "test_auth_login", pass: true },
            { y: 114, label: "test_token_verify", pass: true },
            { y: 134, label: "test_rate_limit", pass: true },
            { y: 154, label: "test_password_hash", pass: true },
            { y: 174, label: "test_session_expire", pass: false },
          ].map((t, i) => (
            <g key={i}>
              <circle cx="540" cy={t.y} r="5" fill={t.pass ? "#059669" : "#F59E0B"}>
                <animate attributeName="opacity" values="0;1" dur="0.2s" begin={`${1.5 + i * 0.3}s`} fill="freeze" />
              </circle>
              {t.pass ? (
                <path d={`M${537} ${t.y}L${539} ${t.y + 2}L${543} ${t.y - 2}`} stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              ) : (
                <text x="540" y={t.y + 3} textAnchor="middle" fontSize="7" fill="white" fontWeight="700">!</text>
              )}
              <text x="554" y={t.y + 3} fontSize="9" fill={t.pass ? "#86EFAC" : "#FDE68A"} fontFamily="monospace">{t.label}</text>
            </g>
          ))}
          {/* Summary bar */}
          <rect x="530" y="192" width="178" height="16" rx="8" fill="white" fillOpacity="0.06" />
          <rect x="530" y="192" width="142" height="16" rx="8" fill="#059669" fillOpacity="0.3">
            <animate attributeName="width" values="0;142" dur="1.5s" begin="2s" fill="freeze" />
          </rect>
          <text x="619" y="203" textAnchor="middle" fontSize="8" fill="#34D399" fontWeight="600">4/5 passed</text>
        </g>

        {/* Bottom section: Integration flow */}
        <rect x="28" y="248" width="704" height="190" rx="20" fill="white" stroke="#E2E8F0" />
        <text x="60" y="278" fontSize="12" fontWeight="700" fill="#0F172A" fontFamily="Space Grotesk,sans-serif">Integration Ecosystem</text>

        {/* Integration nodes */}
        {[
          { x: 100, y: 340, label: "GitHub", icon: "🐙", color: "#0F172A" },
          { x: 220, y: 340, label: "Slack", icon: "💬", color: "#E11D48" },
          { x: 340, y: 340, label: "Jira", icon: "📋", color: "#2563EB" },
          { x: 460, y: 340, label: "Discord", icon: "🎮", color: "#6366F1" },
          { x: 580, y: 340, label: "CI/CD", icon: "⚡", color: "#059669" },
        ].map((node, i) => (
          <g key={node.label}>
            {/* Connection to center line */}
            {i < 4 && (
              <line x1={node.x + 40} y1="340" x2={node.x + 80} y2="340" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="6 4">
                <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2s" repeatCount="indefinite" />
              </line>
            )}
            <rect x={node.x - 34} y="310" width="68" height="60" rx="16" fill={node.color} fillOpacity="0.05" stroke={node.color} strokeWidth="1.5" strokeOpacity="0.2" />
            <text x={node.x} y="338" textAnchor="middle" fontSize="18">{node.icon}</text>
            <text x={node.x} y="362" textAnchor="middle" fontSize="9" fontWeight="600" fill={node.color} fontFamily="Space Grotesk,sans-serif">{node.label}</text>

            {/* Data flowing animation */}
            <circle r="3" fill={node.color}>
              <animateMotion path={`M${node.x} 310 L${node.x} 290`} dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;1;0" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}

        {/* Central AI hub connecting integrations */}
        <circle cx="340" cy="290" r="20" fill="url(#ofAccent)" filter="url(#ofGlow)" opacity="0.15" />
        <circle cx="340" cy="290" r="14" fill="white" stroke="#2563EB" strokeWidth="2" />
        <text x="340" y="294" textAnchor="middle" fontSize="10" fontWeight="700" fill="#2563EB" fontFamily="Space Grotesk,sans-serif">AI</text>
        <circle cx="340" cy="290" r="14" fill="none" stroke="#2563EB" strokeWidth="1.5">
          <animate attributeName="r" from="14" to="28" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* Lines from AI hub to each integration */}
        {[100, 220, 340, 460, 580].map((x, i) => (
          <line key={i} x1="340" y1="304" x2={x} y2="310" stroke="#BFDBFE" strokeWidth="1.5" strokeDasharray="4 3">
            <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="1.5s" repeatCount="indefinite" />
          </line>
        ))}
      </svg>
    </div>
  );
}
