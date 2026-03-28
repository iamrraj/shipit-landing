import { useEffect, useState } from "react";

const tools = [
  { icon: "⚡", label: "bash_exec", color: "#f59e0b" },
  { icon: "📄", label: "read_file", color: "#3b82f6" },
  { icon: "🔒", label: "security", color: "#ef4444" },
  { icon: "🔍", label: "osint", color: "#8b5cf6" },
  { icon: "🌐", label: "web_search", color: "#06b6d4" },
  { icon: "🐳", label: "docker", color: "#0ea5e9" },
  { icon: "📊", label: "git_ops", color: "#10b981" },
  { icon: "🛡️", label: "pentest", color: "#f43f5e" },
];

export default function ShipItToolsOrbitSvg({ className = "" }) {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const id = requestAnimationFrame(function tick() {
      setAngle((a) => (a + 0.15) % 360);
      requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  const cx = 200;
  const cy = 200;
  const r1 = 120;
  const r2 = 160;

  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 400 400" className="w-full h-full">
        {/* Background glow */}
        <defs>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="40%">
            <stop offset="0%" stopColor="var(--color-accent, #6366f1)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <circle cx={cx} cy={cy} r="180" fill="url(#centerGlow)" />

        {/* Orbit rings */}
        <circle cx={cx} cy={cy} r={r1} fill="none" stroke="var(--color-border, #e2e8f0)" strokeWidth="1" strokeDasharray="4 6" opacity="0.5">
          <animateTransform attributeName="transform" type="rotate" from={`0 ${cx} ${cy}`} to={`360 ${cx} ${cy}`} dur="60s" repeatCount="indefinite" />
        </circle>
        <circle cx={cx} cy={cy} r={r2} fill="none" stroke="var(--color-border, #e2e8f0)" strokeWidth="1" strokeDasharray="4 6" opacity="0.3">
          <animateTransform attributeName="transform" type="rotate" from={`360 ${cx} ${cy}`} to={`0 ${cx} ${cy}`} dur="90s" repeatCount="indefinite" />
        </circle>

        {/* Center icon */}
        <circle cx={cx} cy={cy} r="36" fill="var(--color-surface, #1e293b)" stroke="var(--color-accent, #6366f1)" strokeWidth="2" filter="url(#glow)" />
        <text x={cx} y={cy + 2} textAnchor="middle" dominantBaseline="central" fontSize="22" fill="var(--color-accent, #6366f1)" fontWeight="bold">⟩_</text>
        <text x={cx} y={cy + 24} textAnchor="middle" fontSize="8" fill="var(--color-text-muted, #94a3b8)" fontWeight="600">SHIPIT</text>

        {/* Orbiting tool nodes */}
        {tools.map((tool, i) => {
          const a = ((angle + (i * 360) / tools.length) * Math.PI) / 180;
          const radius = i % 2 === 0 ? r1 : r2;
          const x = cx + Math.cos(a) * radius;
          const y = cy + Math.sin(a) * radius;

          return (
            <g key={tool.label}>
              {/* Connection line to center */}
              <line x1={cx} y1={cy} x2={x} y2={y} stroke={tool.color} strokeWidth="0.5" opacity="0.2" />

              {/* Node circle */}
              <circle cx={x} cy={y} r="22" fill="var(--color-surface, #1e293b)" stroke={tool.color} strokeWidth="1.5" opacity="0.9" />

              {/* Icon */}
              <text x={x} y={y - 3} textAnchor="middle" dominantBaseline="central" fontSize="14">{tool.icon}</text>

              {/* Label */}
              <text x={x} y={y + 12} textAnchor="middle" fontSize="6" fill="var(--color-text-muted, #94a3b8)" fontWeight="500">{tool.label}</text>
            </g>
          );
        })}

        {/* Pulse rings */}
        <circle cx={cx} cy={cy} r="40" fill="none" stroke="var(--color-accent, #6366f1)" strokeWidth="0.5" opacity="0.3">
          <animate attributeName="r" from="40" to="80" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.3" to="0" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx={cx} cy={cy} r="40" fill="none" stroke="var(--color-accent, #6366f1)" strokeWidth="0.5" opacity="0.3">
          <animate attributeName="r" from="40" to="80" dur="3s" begin="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" from="0.3" to="0" dur="3s" begin="1.5s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
}
