export default function HeroSvg() {
  return (
    <div className="relative overflow-hidden rounded-[30px] border border-white/35 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,255,255,0.58))] p-4 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.38),rgba(15,23,42,0.18))]">
      <div className="landing-hero-illustration-glow landing-hero-illustration-glow-a" />
      <div className="landing-hero-illustration-glow landing-hero-illustration-glow-b" />
      <svg viewBox="0 0 760 540" className="w-full rounded-[24px]">
        <defs>
          <linearGradient id="hsBg" x1="0" y1="0" x2="760" y2="540">
            <stop stopColor="#EFF6FF" /><stop offset="1" stopColor="#E0E7FF" />
          </linearGradient>
          <linearGradient id="hsTerminal" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#0F172A" /><stop offset="1" stopColor="#1E293B" />
          </linearGradient>
          <linearGradient id="hsAccent" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#2563EB" /><stop offset="1" stopColor="#6366F1" />
          </linearGradient>
          <linearGradient id="hsGlow" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#3B82F6" stopOpacity="0.25" /><stop offset="1" stopColor="#8B5CF6" stopOpacity="0.08" />
          </linearGradient>
          <filter id="hsBlur"><feGaussianBlur stdDeviation="12" /></filter>
          <filter id="hsSm"><feGaussianBlur stdDeviation="4" /></filter>
          <clipPath id="hsClip"><rect width="760" height="540" rx="24" /></clipPath>
        </defs>

        <g clipPath="url(#hsClip)">
          <rect width="760" height="540" rx="24" fill="url(#hsBg)" />

          {/* Ambient glows */}
          <ellipse cx="140" cy="100" rx="120" ry="100" fill="url(#hsGlow)" filter="url(#hsBlur)" />
          <ellipse cx="620" cy="440" rx="140" ry="110" fill="url(#hsGlow)" filter="url(#hsBlur)" />

          {/* === SIDEBAR === */}
          <rect x="28" y="28" width="140" height="484" rx="22" fill="white" fillOpacity="0.7" stroke="#DBEAFE" />
          {/* Logo */}
          <circle cx="60" cy="62" r="14" fill="url(#hsAccent)" />
          <text x="60" y="67" textAnchor="middle" fontSize="12" fontWeight="800" fill="white" fontFamily="Space Grotesk,sans-serif">S</text>
          <text x="84" y="67" fontSize="13" fontWeight="700" fill="#0F172A" fontFamily="Space Grotesk,sans-serif">ShipIt</text>
          {/* File tree */}
          {[
            { y: 100, w: 76, icon: "📁", label: "src/", color: "#2563EB" },
            { y: 128, w: 64, icon: "📄", label: "App.jsx", color: "#6366F1" },
            { y: 156, w: 68, icon: "📄", label: "api.py", color: "#059669" },
            { y: 184, w: 56, icon: "🧪", label: "tests/", color: "#D97706" },
            { y: 212, w: 48, icon: "⚙️", label: ".env", color: "#64748B" },
          ].map((f) => (
            <g key={f.label}>
              <rect x="44" y={f.y - 2} width={f.w + 20} height="22" rx="8" fill={f.color} fillOpacity="0.06" />
              <text x="52" y={f.y + 13} fontSize="10" fill="#64748B" fontFamily="monospace">{f.icon} {f.label}</text>
            </g>
          ))}
          {/* Git branch */}
          <rect x="40" y="260" width="116" height="64" rx="14" fill="#0F172A" fillOpacity="0.05" />
          <circle cx="58" cy="278" r="6" fill="#059669" />
          <text x="70" y="282" fontSize="9" fontWeight="600" fill="#059669" fontFamily="monospace">main</text>
          <line x1="58" y1="284" x2="58" y2="300" stroke="#059669" strokeWidth="2" />
          <circle cx="58" cy="306" r="6" fill="#2563EB" />
          <line x1="58" y1="284" x2="80" y2="296" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="4 3">
            <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="2s" repeatCount="indefinite" />
          </line>
          <circle cx="80" cy="296" r="5" fill="#2563EB" />
          <text x="70" y="310" fontSize="9" fontWeight="600" fill="#2563EB" fontFamily="monospace">feat/login</text>
          {/* Activity dots */}
          {[360, 390, 420, 450].map((y, i) => (
            <g key={y}>
              <circle cx="56" cy={y} r="4" fill={["#2563EB", "#059669", "#6366F1", "#D97706"][i]}>
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
              </circle>
              <rect x="68" y={y - 5} width={[60, 48, 56, 44][i]} height="10" rx="5" fill="#94A3B8" fillOpacity="0.15" />
            </g>
          ))}

          {/* === MAIN TERMINAL / CHAT AREA === */}
          <rect x="188" y="28" width="544" height="484" rx="24" fill="url(#hsTerminal)" />

          {/* Title bar */}
          <rect x="188" y="28" width="544" height="48" rx="24" fill="white" fillOpacity="0.04" />
          <circle cx="214" cy="52" r="6" fill="#FB7185" />
          <circle cx="234" cy="52" r="6" fill="#FBBF24" />
          <circle cx="254" cy="52" r="6" fill="#34D399" />
          <rect x="380" y="42" width="180" height="20" rx="10" fill="white" fillOpacity="0.06" />
          <text x="470" y="56" textAnchor="middle" fontSize="10" fill="#94A3B8" fontFamily="monospace">ShipIt Terminal</text>
          {/* Typing dots */}
          {[688, 700, 712].map((x, i) => (
            <circle key={x} cx={x} cy="52" r="3" fill="#94A3B8" fillOpacity="0.4">
              <animate attributeName="opacity" values="0.2;0.9;0.2" dur="1.5s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
            </circle>
          ))}

          {/* Grid lines */}
          <g opacity="0.03">
            {[0,1,2,3,4,5,6,7,8,9].map(i => <line key={`vg${i}`} x1={240+i*50} y1="76" x2={240+i*50} y2="512" stroke="white" />)}
            {[0,1,2,3,4,5,6,7,8].map(i => <line key={`hg${i}`} x1="188" y1={100+i*50} x2="732" y2={100+i*50} stroke="white" />)}
          </g>

          {/* === USER MESSAGE BUBBLE === */}
          <g>
            <rect x="380" y="92" width="332" height="56" rx="18" fill="#2563EB">
              <animate attributeName="opacity" values="0;1" dur="0.6s" fill="freeze" />
            </rect>
            <text x="400" y="114" fontSize="12" fontWeight="600" fill="white" fontFamily="Space Grotesk,sans-serif">Build a user login form with</text>
            <text x="400" y="132" fontSize="12" fontWeight="600" fill="white" fontFamily="Space Grotesk,sans-serif">JWT auth and password hashing</text>
            <circle cx="726" cy="120" r="14" fill="white" fillOpacity="0.15" />
            <text x="726" y="124" textAnchor="middle" fontSize="10" fill="white">👤</text>
          </g>

          {/* === AI RESPONSE AREA === */}
          <g>
            {/* AI avatar */}
            <circle cx="218" cy="180" r="16" fill="url(#hsAccent)">
              <animate attributeName="r" values="16;17.5;16" dur="3s" repeatCount="indefinite" />
            </circle>
            <text x="218" y="184" textAnchor="middle" fontSize="11" fill="white" fontWeight="700">AI</text>

            {/* Thinking/parsing */}
            <rect x="244" y="166" width="220" height="30" rx="12" fill="white" fillOpacity="0.06">
              <animate attributeName="opacity" values="0;1" dur="0.4s" begin="0.6s" fill="freeze" />
            </rect>
            <text x="260" y="185" fontSize="11" fill="#93C5FD" fontFamily="monospace">
              Parsing task...
              <animate attributeName="opacity" values="0;1" dur="0.4s" begin="0.6s" fill="freeze" />
            </text>
            <circle cx="448" cy="181" r="5" fill="#34D399">
              <animate attributeName="opacity" values="0;1" dur="0.3s" begin="1.2s" fill="freeze" />
            </circle>

            {/* Code block output */}
            <rect x="244" y="208" width="460" height="180" rx="16" fill="white" fillOpacity="0.06">
              <animate attributeName="opacity" values="0;1" dur="0.5s" begin="1s" fill="freeze" />
            </rect>
            {/* Code line labels */}
            <rect x="254" y="216" width="56" height="16" rx="8" fill="#059669" fillOpacity="0.2" />
            <text x="282" y="228" textAnchor="middle" fontSize="9" fontWeight="600" fill="#34D399" fontFamily="monospace">auth.py</text>

            {/* Code lines with staggered reveal */}
            {[
              { y: 244, text: "from fastapi import APIRouter", color: "#93C5FD", w: 240 },
              { y: 262, text: "from jose import jwt", color: "#93C5FD", w: 180 },
              { y: 280, text: "", color: "", w: 0 },
              { y: 298, text: "async def login(cred: LoginReq):", color: "#C4B5FD", w: 260 },
              { y: 316, text: "    user = await verify(cred)", color: "#FDE68A", w: 250 },
              { y: 334, text: "    token = jwt.encode(payload)", color: "#FDE68A", w: 260 },
              { y: 352, text: "    return {\"access_token\": token}", color: "#86EFAC", w: 280 },
              { y: 370, text: "", color: "", w: 0 },
            ].map((line, i) => line.text ? (
              <g key={i}>
                <text x="268" y={line.y} fontSize="11" fill="#64748B" fontFamily="monospace" fillOpacity="0.4">{i + 1}</text>
                <text x="290" y={line.y} fontSize="11" fill={line.color} fontFamily="monospace" fillOpacity="0">
                  {line.text}
                  <animate attributeName="fill-opacity" values="0;1" dur="0.3s" begin={`${1.4 + i * 0.25}s`} fill="freeze" />
                </text>
              </g>
            ) : null)}

            {/* Blinking cursor */}
            <rect x="290" y="368" width="8" height="14" rx="2" fill="#93C5FD">
              <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
            </rect>
          </g>

          {/* === STATUS / PIPELINE BAR === */}
          <rect x="208" y="404" width="504" height="48" rx="16" fill="white" fillOpacity="0.05" />
          {[
            { x: 228, label: "Parse", color: "#34D399", done: true },
            { x: 312, label: "Code", color: "#3B82F6", done: true },
            { x: 396, label: "Review", color: "#6366F1", done: false },
            { x: 480, label: "Test", color: "#F59E0B", done: false },
            { x: 564, label: "Ship", color: "#059669", done: false },
          ].map((step, i) => (
            <g key={step.label}>
              {/* Connector line */}
              {i > 0 && (
                <line x1={step.x - 52} y1="428" x2={step.x - 8} y2="428" stroke={step.done ? step.color : "#334155"} strokeWidth="2" strokeDasharray={step.done ? "none" : "4 4"}>
                  {!step.done && <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="1.5s" repeatCount="indefinite" />}
                </line>
              )}
              {/* Node */}
              <circle cx={step.x} cy="428" r={step.done ? "12" : "10"} fill={step.done ? step.color : "#1E293B"} stroke={step.color} strokeWidth={step.done ? "0" : "2"}>
                {i === 2 && <animate attributeName="r" values="10;12;10" dur="1.5s" repeatCount="indefinite" />}
              </circle>
              {step.done ? (
                <path d={`M${step.x - 4} ${428}L${step.x - 1} ${431}L${step.x + 5} ${425}`} stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
              ) : (
                <text x={step.x} y="432" textAnchor="middle" fontSize="8" fontWeight="700" fill={step.color} fontFamily="monospace">{i + 1}</text>
              )}
              <text x={step.x} y="452" textAnchor="middle" fontSize="9" fontWeight="600" fill="#94A3B8" fontFamily="Space Grotesk,sans-serif">{step.label}</text>
              {/* Active pulse */}
              {i === 2 && (
                <circle cx={step.x} cy="428" r="10" fill="none" stroke={step.color} strokeWidth="2">
                  <animate attributeName="r" from="12" to="22" dur="1.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.6" to="0" dur="1.5s" repeatCount="indefinite" />
                </circle>
              )}
            </g>
          ))}
          {/* Progress bar */}
          <rect x="228" y="464" width="456" height="4" rx="2" fill="white" fillOpacity="0.06" />
          <rect x="228" y="464" width="182" height="4" rx="2" fill="url(#hsAccent)">
            <animate attributeName="width" values="0;182" dur="2s" fill="freeze" />
          </rect>

          {/* === FLOATING TOOL ICONS === */}
          {[
            { x: 680, y: 96, icon: "🔒", delay: 0 },
            { x: 710, y: 180, icon: "🧪", delay: 1.5 },
            { x: 700, y: 300, icon: "🛡️", delay: 3 },
          ].map((t) => (
            <g key={t.icon} className="animate-float-slow origin-center">
              <circle cx={t.x} cy={t.y} r="18" fill="white" fillOpacity="0.08" stroke="#334155" strokeWidth="1" />
              <text x={t.x} y={t.y + 4} textAnchor="middle" fontSize="14">{t.icon}</text>
            </g>
          ))}

          {/* Notification badge */}
          <g className="animate-float-delay origin-center">
            <rect x="200" y="480" width="140" height="28" rx="14" fill="#059669" fillOpacity="0.15" stroke="#059669" strokeWidth="1" />
            <circle cx="216" cy="494" r="4" fill="#34D399">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
            </circle>
            <text x="228" y="498" fontSize="10" fontWeight="600" fill="#34D399" fontFamily="monospace">Building... 40%</text>
          </g>
        </g>
      </svg>
    </div>
  );
}
