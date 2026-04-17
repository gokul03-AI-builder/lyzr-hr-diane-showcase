import { Agent } from "@/data/apps";
import { getIcon } from "@/components/icons";

interface AgentCardProps {
  agent: Agent;
  index: number;
}

export default function AgentCard({ agent, index }: AgentCardProps) {
  const Icon = getIcon(agent.icon);

  const agentColors = [
    "#72524F",
    "#8B6460",
    "#A07470",
    "#6B4D4A",
    "#956E6B",
  ];
  const color = agentColors[index % agentColors.length];

  return (
    <div
      className="p-5 border flex flex-col gap-3 anim-scale-in"
      style={{
        background: "#F8F5F1",
        borderColor: "#C8BEBA",
        borderRadius: "4px",
        animationDelay: `${280 + index * 65}ms`,
        transition: "box-shadow 0.2s ease, border-color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#72524F";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 14px rgba(73,46,45,0.09)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#C8BEBA";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="p-2 rounded flex-shrink-0"
          style={{ background: color, borderRadius: "4px" }}
        >
          <Icon size={14} color="#F2EEE9" />
        </div>
        <div>
          <div
            className="text-sm font-semibold"
            style={{
              color: "#3D2B29",
              fontFamily: "'IBM Plex Mono', monospace",
            }}
          >
            {agent.name}
          </div>
          <div
            className="text-xs"
            style={{ color: "#A88D8A" }}
          >
            {agent.role}
          </div>
        </div>
      </div>

      <p
        className="text-xs leading-relaxed"
        style={{ color: "#8F7270", lineHeight: "1.7" }}
      >
        {agent.description}
      </p>

      <div
        className="flex items-center gap-1.5 mt-auto pt-3 border-t"
        style={{ borderColor: "#E0D8D3" }}
      >
        <div
          className="w-1.5 h-1.5 rounded-full animate-pulse"
          style={{ background: color }}
        />
        <span className="text-xs" style={{ color: "#A88D8A" }}>
          Agent Active
        </span>
      </div>
    </div>
  );
}
