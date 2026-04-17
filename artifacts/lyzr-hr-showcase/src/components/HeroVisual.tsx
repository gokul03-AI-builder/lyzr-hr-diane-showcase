import { useEffect, useRef } from "react";

const nodes = [
  { id: "diane",    x: 160, y: 150, r: 28, label: "Diane",       sub: "AI Core",         primary: true },
  { id: "recruit",  x: 56,  y: 68,  r: 18, label: "Recruitment", sub: "6 agents",        primary: false },
  { id: "helpdesk", x: 264, y: 68,  r: 18, label: "HR Helpdesk", sub: "5 agents",        primary: false },
  { id: "ld",       x: 300, y: 160, r: 18, label: "L&D",         sub: "4 agents",        primary: false },
  { id: "chro",     x: 240, y: 248, r: 18, label: "Analytics",   sub: "CHRO layer",      primary: false },
  { id: "onboard",  x: 80,  y: 248, r: 18, label: "Onboarding",  sub: "4 agents",        primary: false },
  { id: "exit",     x: 20,  y: 160, r: 18, label: "Exit Mgmt",   sub: "3 agents",        primary: false },
];

const edges = [
  ["diane", "recruit"],
  ["diane", "helpdesk"],
  ["diane", "ld"],
  ["diane", "chro"],
  ["diane", "onboard"],
  ["diane", "exit"],
];

function getNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export default function HeroVisual() {
  const svgRef = useRef<SVGSVGElement>(null);

  return (
    <div
      className="anim-fade-in relative flex-shrink-0"
      style={{ animationDelay: "300ms", width: "340px", height: "310px" }}
    >
      <svg
        ref={svgRef}
        viewBox="0 0 320 310"
        width="340"
        height="310"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient for center node */}
          <radialGradient id="dianeGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#8B6460" />
            <stop offset="100%" stopColor="#4A2D2B" />
          </radialGradient>
          {/* Glow filter */}
          <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Animated dash */}
          <style>{`
            @keyframes dash {
              to { stroke-dashoffset: -40; }
            }
            @keyframes pulse-ring {
              0%   { r: 28; opacity: 0.4; }
              100% { r: 44; opacity: 0; }
            }
            @keyframes float-dot {
              0%, 100% { opacity: 0.15; }
              50%       { opacity: 0.55; }
            }
            .edge-line { animation: dash 2.2s linear infinite; }
            .pulse-ring { animation: pulse-ring 2.5s ease-out infinite; }
            .sat-node { transition: all 0.2s ease; }
          `}</style>
        </defs>

        {/* Edges */}
        {edges.map(([a, b], i) => {
          const na = getNode(a);
          const nb = getNode(b);
          return (
            <line
              key={`${a}-${b}`}
              x1={na.x} y1={na.y}
              x2={nb.x} y2={nb.y}
              stroke="#C8BEBA"
              strokeWidth="1.2"
              strokeDasharray="6 4"
              className="edge-line"
              style={{ animationDelay: `${i * 0.35}s` }}
            />
          );
        })}

        {/* Pulse ring on Diane */}
        <circle cx={160} cy={150} r={28} fill="none" stroke="#72524F" strokeWidth="1.5" className="pulse-ring" />

        {/* Satellite nodes */}
        {nodes.filter(n => !n.primary).map((n, i) => (
          <g key={n.id} style={{ animationDelay: `${200 + i * 80}ms` }}>
            <circle
              cx={n.x} cy={n.y} r={n.r}
              fill="#EDE8E2"
              stroke="#C8BEBA"
              strokeWidth="1.2"
            />
            <text
              x={n.x} y={n.y - 3}
              textAnchor="middle"
              fill="#72524F"
              fontSize="7.5"
              fontWeight="600"
              fontFamily="IBM Plex Mono, monospace"
            >
              {n.label}
            </text>
            <text
              x={n.x} y={n.y + 7}
              textAnchor="middle"
              fill="#A88D8A"
              fontSize="6"
              fontFamily="IBM Plex Mono, monospace"
            >
              {n.sub}
            </text>
          </g>
        ))}

        {/* Center Diane node */}
        <circle cx={160} cy={150} r={28} fill="url(#dianeGrad)" filter="url(#glow)" />
        <text
          x={160} y={147}
          textAnchor="middle"
          fill="#F2EEE9"
          fontSize="11"
          fontWeight="700"
          fontFamily="IBM Plex Mono, monospace"
        >
          Diane
        </text>
        <text
          x={160} y={159}
          textAnchor="middle"
          fill="#C8A09C"
          fontSize="7"
          fontFamily="IBM Plex Mono, monospace"
        >
          AI Core
        </text>

        {/* Floating data dots on edges */}
        {edges.map(([a, b], i) => {
          const na = getNode(a);
          const nb = getNode(b);
          const mx = (na.x + nb.x) / 2;
          const my = (na.y + nb.y) / 2;
          return (
            <circle
              key={`dot-${i}`}
              cx={mx} cy={my} r={2.5}
              fill="#72524F"
              className="float-dot"
              style={{ animation: `float-dot 2s ease-in-out ${i * 0.4}s infinite` }}
            />
          );
        })}
      </svg>
    </div>
  );
}
