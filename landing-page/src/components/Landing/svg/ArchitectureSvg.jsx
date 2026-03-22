export default function ArchitectureSvg() {
  const layers = [
    {
      y: 40, label: "Interface Layer", color: "#0EA5E9", bgColor: "#F0F9FF",
      items: [
        { x: 100, icon: "🖥️", name: "Web App" },
        { x: 260, icon: "💬", name: "Chat UI" },
        { x: 420, icon: "⌨️", name: "Terminal" },
        { x: 580, icon: "🔌", name: "API" },
      ]
    },
    {
      y: 160, label: "Intelligence Layer", color: "#6366F1", bgColor: "#EEF2FF",
      items: [
        { x: 140, icon: "🧠", name: "LLM Engine" },
        { x: 340, icon: "📐", name: "Task Planner" },
        { x: 540, icon: "🔍", name: "Code Analyzer" },
      ]
    },
    {
      y: 280, label: "Execution Layer", color: "#8B5CF6", bgColor: "#F5F3FF",
      items: [
        { x: 100, icon: "⌨️", name: "Code Gen" },
        { x: 260, icon: "🧪", name: "Test Runner" },
        { x: 420, icon: "🔒", name: "Security" },
        { x: 580, icon: "📝", name: "Reviewer" },
      ]
    },
    {
      y: 400, label: "Integration Layer", color: "#059669", bgColor: "#F0FDF4",
      items: [
        { x: 140, icon: "🐙", name: "GitHub" },
        { x: 340, icon: "💬", name: "Slack" },
        { x: 540, icon: "🚀", name: "Deploy" },
      ]
    },
  ];

  return (
    <div className="rounded-[30px] border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-5 shadow-[0_24px_50px_-38px_rgba(15,23,42,0.4)] backdrop-blur-xl">
      <svg viewBox="0 0 700 520" className="w-full rounded-[20px]">
        <defs>
          <linearGradient id="arBg" x1="0" y1="0" x2="700" y2="520">
            <stop stopColor="#FAFBFF" /><stop offset="1" stopColor="#F0F4FF" />
          </linearGradient>
          <linearGradient id="arFlow" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#0EA5E9" /><stop offset="0.33" stopColor="#6366F1" /><stop offset="0.66" stopColor="#8B5CF6" /><stop offset="1" stopColor="#059669" />
          </linearGradient>
          <filter id="arGlow"><feGaussianBlur stdDeviation="6" /></filter>
        </defs>

        <rect width="700" height="520" rx="24" fill="url(#arBg)" />

        {/* Vertical data flow spine */}
        <line x1="350" y1="40" x2="350" y2="480" stroke="#E2E8F0" strokeWidth="3" />
        <line x1="350" y1="40" x2="350" y2="480" stroke="url(#arFlow)" strokeWidth="3" strokeDasharray="8 6">
          <animate attributeName="stroke-dashoffset" from="0" to="-28" dur="2s" repeatCount="indefinite" />
        </line>

        {/* Data packets flowing down */}
        {[0, 1, 2].map(i => (
          <circle key={i} r="5" fill={["#0EA5E9", "#6366F1", "#059669"][i]}>
            <animateMotion path="M350 40 L350 480" dur={`${3 + i}s`} begin={`${i * 1.2}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;1;0" dur={`${3 + i}s`} begin={`${i * 1.2}s`} repeatCount="indefinite" />
          </circle>
        ))}

        {/* Layers */}
        {layers.map((layer, li) => (
          <g key={layer.label}>
            {/* Layer background band */}
            <rect x="20" y={layer.y} width="660" height="100" rx="18" fill={layer.bgColor} stroke={layer.color} strokeWidth="1.5" strokeOpacity="0.2" />

            {/* Layer label */}
            <rect x="30" y={layer.y + 6} width="130" height="22" rx="11" fill={layer.color} fillOpacity="0.1" />
            <text x="95" y={layer.y + 21} textAnchor="middle" fontSize="9" fontWeight="700" fill={layer.color} fontFamily="Space Grotesk,sans-serif">{layer.label}</text>

            {/* Items in layer */}
            {layer.items.map((item, ii) => (
              <g key={item.name}>
                {/* Node */}
                <rect x={item.x - 36} y={layer.y + 36} width="72" height="52" rx="14" fill="white" stroke={layer.color} strokeWidth="1.5" strokeOpacity="0.3" />
                <text x={item.x} y={layer.y + 60} textAnchor="middle" fontSize="16">{item.icon}</text>
                <text x={item.x} y={layer.y + 80} textAnchor="middle" fontSize="8" fontWeight="600" fill={layer.color} fontFamily="Space Grotesk,sans-serif">{item.name}</text>

                {/* Connection line to spine */}
                <line x1={item.x} y1={layer.y + 36} x2="350" y2={layer.y + 10} stroke={layer.color} strokeWidth="1" strokeOpacity="0.15" strokeDasharray="3 3">
                  <animate attributeName="stroke-dashoffset" from="0" to="-12" dur="2s" repeatCount="indefinite" />
                </line>

                {/* Pulse on hover-like animation for center items */}
                {ii === 1 && layer.items.length === 3 && (
                  <rect x={item.x - 36} y={layer.y + 36} width="72" height="52" rx="14" fill="none" stroke={layer.color} strokeWidth="1.5">
                    <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite" />
                  </rect>
                )}
              </g>
            ))}

            {/* Horizontal connections between items */}
            {layer.items.slice(0, -1).map((item, ii) => (
              <line key={ii} x1={item.x + 36} y1={layer.y + 62} x2={layer.items[ii + 1].x - 36} y2={layer.y + 62} stroke={layer.color} strokeWidth="1.5" strokeOpacity="0.15" strokeDasharray="4 4">
                <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="1.5s" repeatCount="indefinite" />
              </line>
            ))}
          </g>
        ))}

        {/* Inter-layer vertical arrows */}
        {[130, 250, 370].map((y, i) => (
          <g key={i}>
            <line x1="350" y1={y + 10} x2="350" y2={y + 28} stroke={["#6366F1", "#8B5CF6", "#059669"][i]} strokeWidth="2" />
            <path d={`M344 ${y + 22}L350 ${y + 30}L356 ${y + 22}`} fill={["#6366F1", "#8B5CF6", "#059669"][i]} />
          </g>
        ))}

        {/* Bottom label */}
        <rect x="250" y="490" width="200" height="24" rx="12" fill="url(#arFlow)" fillOpacity="0.08" />
        <text x="350" y="506" textAnchor="middle" fontSize="10" fontWeight="700" fill="#6366F1" fontFamily="Space Grotesk,sans-serif">🏗️ Modular & Extensible</text>
      </svg>
    </div>
  );
}
