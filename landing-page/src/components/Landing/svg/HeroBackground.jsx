/**
 * Animated SVG hero background — flowing mesh, particles, aurora waves.
 * Pure SVG animations, no external dependencies.
 */
export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          {/* Gradient for aurora waves */}
          <linearGradient id="hero-wave-1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="30%" stopColor="#3b82f6" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.12" />
            <stop offset="70%" stopColor="#06b6d4" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hero-wave-2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
            <stop offset="40%" stopColor="#6366f1" stopOpacity="0.06" />
            <stop offset="60%" stopColor="#ec4899" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hero-wave-3" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
          {/* Radial glow */}
          <radialGradient id="hero-glow" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="var(--color-accent, #3b82f6)" stopOpacity="0.06" />
            <stop offset="100%" stopColor="var(--color-accent, #3b82f6)" stopOpacity="0" />
          </radialGradient>
          {/* Particle glow */}
          <radialGradient id="particle-glow">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Central glow */}
        <rect x="0" y="0" width="1200" height="700" fill="url(#hero-glow)" />

        {/* Flowing wave 1 — top */}
        <path d="M0,180 C200,120 400,220 600,160 C800,100 1000,200 1200,140 L1200,0 L0,0 Z" fill="url(#hero-wave-1)">
          <animateTransform attributeName="transform" type="translate" values="0,0; -60,15; 0,0" dur="12s" repeatCount="indefinite" />
        </path>

        {/* Flowing wave 2 — middle */}
        <path d="M0,350 C150,300 350,380 550,320 C750,260 950,370 1200,310 L1200,200 C950,260 750,180 550,240 C350,300 150,210 0,260 Z" fill="url(#hero-wave-2)">
          <animateTransform attributeName="transform" type="translate" values="0,0; 50,-20; 0,0" dur="16s" repeatCount="indefinite" />
        </path>

        {/* Flowing wave 3 — bottom */}
        <path d="M0,700 C300,620 500,680 700,630 C900,580 1100,650 1200,620 L1200,500 C1100,530 900,470 700,520 C500,570 300,500 0,580 Z" fill="url(#hero-wave-3)">
          <animateTransform attributeName="transform" type="translate" values="0,0; -40,10; 0,0" dur="20s" repeatCount="indefinite" />
        </path>

        {/* Geometric mesh lines */}
        {[
          { x1: 100, y1: 50, x2: 400, y2: 200, dur: "15s" },
          { x1: 800, y1: 80, x2: 1100, y2: 250, dur: "18s" },
          { x1: 300, y1: 400, x2: 600, y2: 550, dur: "14s" },
          { x1: 700, y1: 350, x2: 1000, y2: 500, dur: "17s" },
          { x1: 150, y1: 250, x2: 500, y2: 350, dur: "20s" },
          { x1: 600, y1: 150, x2: 900, y2: 350, dur: "16s" },
        ].map((line, i) => (
          <line
            key={`mesh-${i}`}
            x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
            stroke="var(--color-accent, #3b82f6)"
            strokeWidth="0.3"
            opacity="0.06"
          >
            <animate attributeName="opacity" values="0.03;0.08;0.03" dur={line.dur} repeatCount="indefinite" />
          </line>
        ))}

        {/* Floating particles */}
        {Array.from({ length: 20 }, (_, i) => {
          const x = 50 + (i * 57) % 1100;
          const y = 30 + (i * 37) % 640;
          const size = 1 + (i % 3);
          const dur = 6 + (i % 8);
          const delay = (i * 0.5) % 4;
          return (
            <circle key={`p-${i}`} cx={x} cy={y} r={size} fill="var(--color-accent, #3b82f6)" opacity="0.15">
              <animate attributeName="cy" values={`${y};${y - 20 - (i % 15)};${y}`} dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.08;0.25;0.08" dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" />
              <animate attributeName="r" values={`${size};${size + 1};${size}`} dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" />
            </circle>
          );
        })}

        {/* Glowing orbs — slow moving */}
        {[
          { cx: 200, cy: 150, r: 80, color: "#3b82f6", dur: "25s", dx: 40, dy: 30 },
          { cx: 900, cy: 200, r: 100, color: "#8b5cf6", dur: "30s", dx: -50, dy: 40 },
          { cx: 600, cy: 500, r: 70, color: "#06b6d4", dur: "22s", dx: 30, dy: -25 },
          { cx: 1050, cy: 450, r: 60, color: "#10b981", dur: "28s", dx: -35, dy: 20 },
        ].map((orb, i) => (
          <circle key={`orb-${i}`} cx={orb.cx} cy={orb.cy} r={orb.r} fill={orb.color} opacity="0.03" filter="blur(40px)">
            <animateTransform attributeName="transform" type="translate" values={`0,0; ${orb.dx},${orb.dy}; 0,0`} dur={orb.dur} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.02;0.05;0.02" dur={orb.dur} repeatCount="indefinite" />
          </circle>
        ))}

        {/* Constellation dots with connecting lines */}
        {[
          [200, 100], [350, 180], [500, 120], [650, 200], [800, 130],
          [180, 350], [400, 420], [620, 380], [850, 440], [1000, 360],
        ].map(([cx, cy], i, arr) => (
          <g key={`star-${i}`}>
            <circle cx={cx} cy={cy} r="1.5" fill="var(--color-accent, #3b82f6)" opacity="0.2">
              <animate attributeName="opacity" values="0.1;0.35;0.1" dur={`${4 + i * 0.7}s`} repeatCount="indefinite" />
            </circle>
            {i < arr.length - 1 && i % 2 === 0 && (
              <line x1={cx} y1={cy} x2={arr[i + 1][0]} y2={arr[i + 1][1]} stroke="var(--color-accent, #3b82f6)" strokeWidth="0.3" opacity="0.04">
                <animate attributeName="opacity" values="0.02;0.06;0.02" dur={`${5 + i * 0.5}s`} repeatCount="indefinite" />
              </line>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
