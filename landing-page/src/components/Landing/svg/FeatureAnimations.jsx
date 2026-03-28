/**
 * Animated SVG illustrations for landing page features.
 * All animations use inline styles for portability.
 */

/* ── Integration Hub — tools orbiting center ──────────────────────── */
export function IntegrationHubSVG() {
  const tools = [
    { label: "Claude", short: "Cl", color: "#D97706", angle: -30 },
    { label: "Codex", short: "Cx", color: "#10B981", angle: 30 },
    { label: "Gemini", short: "Gm", color: "#3B82F6", angle: 90 },
    { label: "Slack", short: "Sl", color: "#E11D48", angle: 150 },
    { label: "GitHub", short: "Gh", color: "#6366F1", angle: 210 },
    { label: "MCP", short: "Mc", color: "#06B6D4", angle: 270 },
  ];
  const cx = 150, cy = 90, r = 65;

  return (
    <svg viewBox="0 0 300 180" fill="none" className="w-full">
      {/* Orbit rings */}
      <circle cx={cx} cy={cy} r={r} stroke="currentColor" strokeWidth="0.5" opacity="0.1" strokeDasharray="4 6">
        <animateTransform attributeName="transform" type="rotate" from={`0 ${cx} ${cy}`} to={`360 ${cx} ${cy}`} dur="50s" repeatCount="indefinite" />
      </circle>
      <circle cx={cx} cy={cy} r={r * 0.55} stroke="currentColor" strokeWidth="0.3" opacity="0.08" strokeDasharray="2 8">
        <animateTransform attributeName="transform" type="rotate" from={`360 ${cx} ${cy}`} to={`0 ${cx} ${cy}`} dur="35s" repeatCount="indefinite" />
      </circle>

      {/* Connection lines */}
      {tools.map((t, i) => {
        const x = cx + r * Math.cos((t.angle * Math.PI) / 180);
        const y = cy + r * Math.sin((t.angle * Math.PI) / 180);
        return (
          <line key={`line-${i}`} x1={cx} y1={cy} x2={x} y2={y} stroke="currentColor" strokeWidth="0.5" opacity="0.1">
            <animate attributeName="opacity" values="0.05;0.15;0.05" dur={`${3 + i * 0.7}s`} repeatCount="indefinite" />
          </line>
        );
      })}

      {/* Center node */}
      <circle cx={cx} cy={cy} r="18" fill="var(--color-surface, #fff)" stroke="var(--color-accent, #3b82f6)" strokeWidth="1.5" />
      <text x={cx} y={cy + 4} textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--color-accent, #3b82f6)">AI</text>
      <circle cx={cx + 15} cy={cy - 13} r="3.5" fill="#10b981">
        <animate attributeName="r" values="2.5;4;2.5" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Tool nodes */}
      {tools.map((t, i) => {
        const x = cx + r * Math.cos((t.angle * Math.PI) / 180);
        const y = cy + r * Math.sin((t.angle * Math.PI) / 180);
        return (
          <g key={`node-${i}`}>
            <circle cx={x} cy={y} r="14" fill="var(--color-surface, #fff)" stroke="currentColor" strokeWidth="0.4" opacity="0.25" />
            <circle cx={x} cy={y} r="12" fill={t.color} opacity="0.1" />
            <text x={x} y={y + 3.5} textAnchor="middle" fontSize="8" fontWeight="700" fill={t.color}>{t.short}</text>
            <animateTransform attributeName="transform" type="translate" values={`0,0; 0,${i % 2 === 0 ? -3 : 3}; 0,0`} dur={`${4 + i * 0.5}s`} repeatCount="indefinite" />
          </g>
        );
      })}
    </svg>
  );
}

/* ── Live Activity Feed ───────────────────────────────────────────── */
export function LiveActivitySVG() {
  const alerts = [
    { icon: "🛡", title: "Scan complete", time: "Now", desc: "4 findings", bg: "#fef2f2", border: "#fecaca" },
    { icon: "✅", title: "Tests passed", time: "2m", desc: "47/47 green", bg: "#f0fdf4", border: "#bbf7d0" },
    { icon: "🔧", title: "Auto-fix applied", time: "5m", desc: "XSS fixed", bg: "#fffbeb", border: "#fde68a" },
    { icon: "🚀", title: "Deploy ready", time: "8m", desc: "QA passed", bg: "#eff6ff", border: "#bfdbfe" },
  ];

  return (
    <svg viewBox="0 0 300 195" className="w-full">
      {alerts.map((a, i) => (
        <g key={i}>
          <rect x="20" y={8 + i * 46} width="260" height="40" rx="10" fill={a.bg} stroke={a.border} strokeWidth="0.8">
            <animate attributeName="opacity" values="0;1" dur="0.4s" begin={`${i * 0.15}s`} fill="freeze" />
            <animateTransform attributeName="transform" type="translate" values="30,0; 0,0" dur="0.4s" begin={`${i * 0.15}s`} fill="freeze" />
          </rect>
          <text x="40" y={27 + i * 47} fontSize="11" fontWeight="700" fill="#1e293b">
            <animate attributeName="opacity" values="0;1" dur="0.3s" begin={`${i * 0.15 + 0.1}s`} fill="freeze" />
            {a.icon} {a.title}
          </text>
          <text x="230" y={27 + i * 47} fontSize="8" fill="#94a3b8" textAnchor="end">
            <animate attributeName="opacity" values="0;1" dur="0.3s" begin={`${i * 0.15 + 0.1}s`} fill="freeze" />
            {a.time}
          </text>
          <text x="48" y={40 + i * 47} fontSize="8" fill="#64748b">
            <animate attributeName="opacity" values="0;1" dur="0.3s" begin={`${i * 0.15 + 0.2}s`} fill="freeze" />
            {a.desc}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ── Workflow Builder — step chain ─────────────────────────────────── */
export function WorkflowSVG() {
  const steps = [
    { label: "Research", color: "#8B5CF6", emoji: "🔍" },
    { label: "Implement", color: "#3B82F6", emoji: "⚡" },
    { label: "Review", color: "#F59E0B", emoji: "👁" },
    { label: "Test", color: "#10B981", emoji: "🧪" },
    { label: "Deploy", color: "#EC4899", emoji: "🚀" },
  ];

  return (
    <svg viewBox="0 0 300 230" className="w-full">
      {steps.map((s, i) => {
        const y = 8 + i * 44;
        return (
          <g key={i}>
            {/* Connector line */}
            {i < steps.length - 1 && (
              <line x1="32" y1={y + 34} x2="32" y2={y + 44} stroke={s.color} strokeWidth="1.5" opacity="0.3" strokeDasharray="3 3">
                <animate attributeName="strokeDashoffset" values="6;0" dur="1.5s" repeatCount="indefinite" />
              </line>
            )}
            {/* Step circle */}
            <circle cx="32" cy={y + 18} r="15" fill={s.color} opacity="0.12">
              <animate attributeName="r" values="14;16;14" dur={`${3 + i * 0.4}s`} repeatCount="indefinite" />
            </circle>
            <circle cx="32" cy={y + 18} r="12" fill={s.color} />
            <text x="32" y={y + 22} textAnchor="middle" fontSize="11">{s.emoji}</text>

            {/* Step card */}
            <rect x="58" y={y + 4} width="220" height="28" rx="8" fill="var(--color-surface, #fff)" stroke="currentColor" strokeWidth="0.4" opacity="0.2">
              <animateTransform attributeName="transform" type="translate" values="20,0; 0,0" dur="0.4s" begin={`${i * 0.1}s`} fill="freeze" />
              <animate attributeName="opacity" values="0;0.2" dur="0.3s" begin={`${i * 0.1}s`} fill="freeze" />
            </rect>
            <text x="70" y={y + 22} fontSize="11" fontWeight="600" fill="var(--color-text-primary, #1e293b)">
              {s.label}
            </text>
            <text x="260" y={y + 22} fontSize="8" fill={s.color} textAnchor="end" fontWeight="600">Step {i + 1}</text>

            {/* Active dot */}
            <circle cx="270" cy={y + 18} r="3" fill="#10b981">
              <animate attributeName="opacity" values="0.4;1;0.4" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
            </circle>
          </g>
        );
      })}
    </svg>
  );
}

/* ── Security Scanner — radar sweep ───────────────────────────────── */
export function SecurityScanSVG() {
  const findings = [
    { cx: 95, cy: 70, color: "#EF4444", label: "XSS" },
    { cx: 210, cy: 85, color: "#F59E0B", label: "SQL" },
    { cx: 120, cy: 170, color: "#F59E0B", label: "Auth" },
    { cx: 195, cy: 55, color: "#EF4444", label: "RCE" },
  ];

  return (
    <svg viewBox="0 0 300 220" className="w-full">
      {/* Radar rings */}
      {[40, 65, 88].map((r, i) => (
        <circle key={r} cx="150" cy="115" r={r} fill="none" stroke="var(--color-accent, #3b82f6)" strokeWidth="0.5" opacity={0.08 + i * 0.03}>
          <animate attributeName="r" values={`${r};${r + 4};${r}`} dur={`${3 + i}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* Sweep line */}
      <line x1="150" y1="115" x2="150" y2="30" stroke="var(--color-accent, #3b82f6)" strokeWidth="1.5" opacity="0.25">
        <animateTransform attributeName="transform" type="rotate" from="0 150 115" to="360 150 115" dur="4s" repeatCount="indefinite" />
      </line>

      {/* Sweep gradient arc */}
      <path d="M150,115 L150,30 A85,85 0 0,1 220,75 Z" fill="var(--color-accent, #3b82f6)" opacity="0.04">
        <animateTransform attributeName="transform" type="rotate" from="0 150 115" to="360 150 115" dur="4s" repeatCount="indefinite" />
      </path>

      {/* Center shield */}
      <circle cx="150" cy="115" r="24" fill="var(--color-surface, #fff)" stroke="var(--color-accent, #3b82f6)" strokeWidth="1.5" />
      <text x="150" y="119" textAnchor="middle" fontSize="16">🛡</text>

      {/* Detection dots with labels */}
      {findings.map((f, i) => (
        <g key={i}>
          <circle cx={f.cx} cy={f.cy} r="10" fill={f.color} opacity="0.1">
            <animate attributeName="r" values="8;13;8" dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite" />
          </circle>
          <circle cx={f.cx} cy={f.cy} r="4" fill={f.color}>
            <animate attributeName="opacity" values="0.6;1;0.6" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
          </circle>
          <text x={f.cx} y={f.cy - 10} textAnchor="middle" fontSize="7" fontWeight="700" fill={f.color}>{f.label}</text>
        </g>
      ))}

      {/* Floating badges */}
      <rect x="10" y="15" width="65" height="22" rx="6" fill="#fef2f2" stroke="#fecaca" strokeWidth="0.5">
        <animate attributeName="y" values="15;19;15" dur="5s" repeatCount="indefinite" />
      </rect>
      <text x="42" y="30" textAnchor="middle" fontSize="8" fontWeight="700" fill="#dc2626">2 Critical</text>

      <rect x="225" y="180" width="65" height="22" rx="6" fill="#fffbeb" stroke="#fde68a" strokeWidth="0.5">
        <animate attributeName="y" values="180;176;180" dur="6s" repeatCount="indefinite" />
      </rect>
      <text x="257" y="195" textAnchor="middle" fontSize="8" fontWeight="700" fill="#d97706">3 Medium</text>
    </svg>
  );
}

/* ── Chat Interface — message bubbles ─────────────────────────────── */
export function ChatInterfaceSVG() {
  const msgs = [
    { role: "user", text: "Add dark mode toggle", y: 10, w: 140 },
    { role: "tool", text: "▸ Read: Settings.tsx", y: 50, w: 130 },
    { role: "tool", text: "▸ Edit: Settings.tsx +24 -8", y: 80, w: 160 },
    { role: "ai", text: "Done! Dark mode added ✓", y: 120, w: 150 },
  ];

  return (
    <svg viewBox="0 0 300 180" className="w-full">
      {msgs.map((m, i) => {
        const isUser = m.role === "user";
        const isTool = m.role === "tool";
        const x = isUser ? 300 - m.w - 15 : 15;
        const fill = isUser ? "var(--color-accent, #3b82f6)" : isTool ? "var(--color-bg-secondary, #f1f5f9)" : "var(--color-surface, #fff)";
        const textFill = isUser ? "#fff" : isTool ? "var(--color-text-muted, #64748b)" : "var(--color-text-primary, #1e293b)";
        const stroke = isUser ? "none" : "currentColor";

        return (
          <g key={i}>
            <rect x={x} y={m.y} width={m.w} height="28" rx="10" fill={fill} stroke={stroke} strokeWidth="0.3" opacity={isUser ? 1 : 0.15}>
              <animate attributeName="opacity" values={`0;${isUser ? 1 : 0.15}`} dur="0.3s" begin={`${i * 0.2}s`} fill="freeze" />
              <animateTransform attributeName="transform" type="translate" values={`${isUser ? 15 : -15},0; 0,0`} dur="0.3s" begin={`${i * 0.2}s`} fill="freeze" />
            </rect>
            <text x={x + (isTool ? 10 : 14)} y={m.y + 18} fontSize={isTool ? "8" : "9"} fontWeight={isTool ? "500" : "600"} fill={textFill} fontFamily={isTool ? "monospace" : "inherit"}>
              <animate attributeName="opacity" values="0;1" dur="0.2s" begin={`${i * 0.2 + 0.1}s`} fill="freeze" />
              {m.text}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
