export default function UseCasesSvg() {
  const scenes = [
    {
      label: "Solo Developer", color: "#2563EB",
      elements: [
        { type: "person", x: 180, y: 100 },
        { type: "laptop", x: 160, y: 140 },
        { type: "thought", x: 260, y: 70, text: "Build auth flow" },
        { type: "code", x: 340, y: 90, lines: ["login()", "verify()", "token()"] },
        { type: "arrow", x1: 220, y1: 120, x2: 320, y2: 120 },
        { type: "result", x: 480, y: 90, text: "PR Ready ✅" },
      ]
    },
    {
      label: "Team Lead", color: "#6366F1",
      elements: [
        { type: "people", x: 140, y: 100, count: 3 },
        { type: "board", x: 300, y: 70 },
        { type: "arrow", x1: 240, y1: 120, x2: 280, y2: 120 },
        { type: "dashboard", x: 440, y: 70 },
        { type: "result", x: 580, y: 90, text: "All Tracked 📊" },
      ]
    },
    {
      label: "Code Reviewer", color: "#059669",
      elements: [
        { type: "diff", x: 140, y: 70 },
        { type: "arrow", x1: 280, y1: 120, x2: 340, y2: 120 },
        { type: "ai_review", x: 380, y: 70 },
        { type: "result", x: 540, y: 90, text: "Approved 🛡️" },
      ]
    },
  ];

  return (
    <div className="rounded-[30px] border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-5 shadow-[0_24px_50px_-38px_rgba(15,23,42,0.4)] backdrop-blur-xl">
      <svg viewBox="0 0 700 520" className="w-full rounded-[20px]">
        <defs>
          <linearGradient id="ucBg" x1="0" y1="0" x2="700" y2="520">
            <stop stopColor="#FAFBFF" /><stop offset="1" stopColor="#F0FDF9" />
          </linearGradient>
          <filter id="ucGlow"><feGaussianBlur stdDeviation="6" /></filter>
        </defs>

        <rect width="700" height="520" rx="24" fill="url(#ucBg)" />

        {/* Scene 1: Solo Developer */}
        <g>
          <rect x="30" y="30" width="640" height="140" rx="20" fill="white" stroke="#DBEAFE" strokeWidth="1.5" />
          <rect x="30" y="30" width="640" height="32" rx="20" fill="#2563EB" fillOpacity="0.04" />
          <circle cx="52" cy="46" r="6" fill="#2563EB" />
          <text x="66" y="50" fontSize="11" fontWeight="700" fill="#2563EB" fontFamily="Space Grotesk,sans-serif">Solo Developer — Feature Building</text>

          {/* Person */}
          <circle cx="90" cy="95" r="14" fill="#2563EB" fillOpacity="0.1" />
          <circle cx="90" cy="89" r="6" fill="#2563EB" />
          <path d="M80 103 A10 10 0 0 1 100 103" fill="#2563EB" fillOpacity="0.4" />

          {/* Thought bubble */}
          <rect x="120" y="78" width="120" height="28" rx="14" fill="#2563EB" fillOpacity="0.08" />
          <text x="180" y="96" textAnchor="middle" fontSize="9" fill="#2563EB" fontFamily="monospace">"Build auth flow"</text>

          {/* Arrow */}
          <line x1="250" y1="92" x2="300" y2="92" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 3">
            <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="1s" repeatCount="indefinite" />
          </line>
          <path d="M296 88L304 92L296 96" fill="#2563EB" />

          {/* AI Processing */}
          <rect x="310" y="72" width="160" height="50" rx="12" fill="#0F172A" />
          <text x="320" y="90" fontSize="9" fill="#93C5FD" fontFamily="monospace">async login(cred):</text>
          <text x="320" y="104" fontSize="9" fill="#86EFAC" fontFamily="monospace">  return jwt(user)</text>
          <rect x="320" y="108" width="6" height="10" rx="1" fill="#93C5FD">
            <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
          </rect>

          {/* Arrow to result */}
          <line x1="480" y1="92" x2="530" y2="92" stroke="#059669" strokeWidth="2" strokeDasharray="4 3">
            <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="1s" repeatCount="indefinite" />
          </line>
          <path d="M526 88L534 92L526 96" fill="#059669" />

          {/* Result */}
          <rect x="540" y="78" width="110" height="30" rx="15" fill="#059669" fillOpacity="0.1" stroke="#059669" strokeWidth="1.5" />
          <text x="595" y="97" textAnchor="middle" fontSize="10" fontWeight="700" fill="#059669">PR Ready ✅</text>
        </g>

        {/* Scene 2: Team Lead */}
        <g>
          <rect x="30" y="190" width="640" height="140" rx="20" fill="white" stroke="#E0E7FF" strokeWidth="1.5" />
          <rect x="30" y="190" width="640" height="32" rx="20" fill="#6366F1" fillOpacity="0.04" />
          <circle cx="52" cy="206" r="6" fill="#6366F1" />
          <text x="66" y="210" fontSize="11" fontWeight="700" fill="#6366F1" fontFamily="Space Grotesk,sans-serif">Team Lead — Project Oversight</text>

          {/* Team members */}
          {[60, 90, 120].map((x, i) => (
            <g key={i}>
              <circle cx={x} cy="260" r="12" fill={["#6366F1", "#2563EB", "#8B5CF6"][i]} fillOpacity="0.1" />
              <circle cx={x} cy="255" r="5" fill={["#6366F1", "#2563EB", "#8B5CF6"][i]} />
              <path d={`M${x-5} 266 A5 5 0 0 1 ${x+5} 266`} fill={["#6366F1", "#2563EB", "#8B5CF6"][i]} fillOpacity="0.4" />
            </g>
          ))}

          {/* Task board */}
          <rect x="160" y="238" width="140" height="70" rx="10" fill="#F8FAFC" stroke="#E2E8F0" />
          {["Todo: 3", "Doing: 2", "Done: 5"].map((t, i) => (
            <g key={i}>
              <circle cx="174" cy={254 + i * 18} r="4" fill={["#F59E0B", "#3B82F6", "#059669"][i]} />
              <text x="184" y={258 + i * 18} fontSize="9" fill="#475569" fontFamily="monospace">{t}</text>
            </g>
          ))}

          {/* Arrow */}
          <line x1="310" y1="270" x2="360" y2="270" stroke="#6366F1" strokeWidth="2" strokeDasharray="4 3">
            <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="1s" repeatCount="indefinite" />
          </line>
          <path d="M356 266L364 270L356 274" fill="#6366F1" />

          {/* Dashboard */}
          <rect x="370" y="238" width="160" height="70" rx="10" fill="#0F172A" />
          {/* Mini charts */}
          <rect x="380" y="258" width="20" height="30" rx="3" fill="#059669" fillOpacity="0.5">
            <animate attributeName="height" values="10;30;10" dur="3s" repeatCount="indefinite" />
          </rect>
          <rect x="406" y="268" width="20" height="20" rx="3" fill="#3B82F6" fillOpacity="0.5">
            <animate attributeName="height" values="20;10;20" dur="3s" repeatCount="indefinite" />
          </rect>
          <rect x="432" y="260" width="20" height="28" rx="3" fill="#6366F1" fillOpacity="0.5">
            <animate attributeName="height" values="15;28;15" dur="3s" repeatCount="indefinite" />
          </rect>
          <rect x="458" y="252" width="20" height="36" rx="3" fill="#8B5CF6" fillOpacity="0.5" />
          <text x="450" y="300" textAnchor="middle" fontSize="8" fill="#94A3B8" fontFamily="monospace">Progress</text>

          {/* Result */}
          <rect x="550" y="256" width="110" height="30" rx="15" fill="#6366F1" fillOpacity="0.1" stroke="#6366F1" strokeWidth="1.5" />
          <text x="605" y="275" textAnchor="middle" fontSize="10" fontWeight="700" fill="#6366F1">All Tracked 📊</text>
        </g>

        {/* Scene 3: Code Reviewer */}
        <g>
          <rect x="30" y="350" width="640" height="140" rx="20" fill="white" stroke="#D1FAE5" strokeWidth="1.5" />
          <rect x="30" y="350" width="640" height="32" rx="20" fill="#059669" fillOpacity="0.04" />
          <circle cx="52" cy="366" r="6" fill="#059669" />
          <text x="66" y="370" fontSize="11" fontWeight="700" fill="#059669" fontFamily="Space Grotesk,sans-serif">Code Reviewer — Quality Assurance</text>

          {/* Diff view */}
          <rect x="50" y="396" width="180" height="80" rx="10" fill="#0F172A" />
          <rect x="50" y="406" width="180" height="14" fill="#7F1D1D" fillOpacity="0.3" />
          <text x="60" y="416" fontSize="9" fill="#FCA5A5" fontFamily="monospace">- eval(user_input)</text>
          <rect x="50" y="422" width="180" height="14" fill="#14532D" fillOpacity="0.3" />
          <text x="60" y="432" fontSize="9" fill="#86EFAC" fontFamily="monospace">+ sanitize(input)</text>
          <text x="60" y="452" fontSize="9" fill="#94A3B8" fontFamily="monospace">  validate(token)</text>
          <text x="60" y="466" fontSize="9" fill="#94A3B8" fontFamily="monospace">  return response</text>

          {/* Arrow */}
          <line x1="240" y1="430" x2="290" y2="430" stroke="#059669" strokeWidth="2" strokeDasharray="4 3">
            <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="1s" repeatCount="indefinite" />
          </line>
          <path d="M286 426L294 430L286 434" fill="#059669" />

          {/* AI Review */}
          <rect x="300" y="396" width="180" height="80" rx="12" fill="white" stroke="#D1FAE5" />
          <text x="310" y="416" fontSize="9" fontWeight="700" fill="#059669" fontFamily="Space Grotesk,sans-serif">🤖 AI Review</text>
          {[
            { text: "✓ No injection risk", color: "#059669" },
            { text: "✓ Input sanitized", color: "#059669" },
            { text: "✓ Tests passing", color: "#059669" },
            { text: "⚡ Suggest: add rate limit", color: "#D97706" },
          ].map((item, i) => (
            <text key={i} x="316" y={434 + i * 14} fontSize="8" fill={item.color} fontFamily="monospace">
              {item.text}
              <animate attributeName="opacity" values="0;1" dur="0.3s" begin={`${1 + i * 0.3}s`} fill="freeze" />
            </text>
          ))}

          {/* Result */}
          <rect x="510" y="416" width="140" height="30" rx="15" fill="#059669" fillOpacity="0.1" stroke="#059669" strokeWidth="1.5" />
          <text x="580" y="435" textAnchor="middle" fontSize="10" fontWeight="700" fill="#059669">Approved 🛡️</text>
        </g>
      </svg>
    </div>
  );
}
