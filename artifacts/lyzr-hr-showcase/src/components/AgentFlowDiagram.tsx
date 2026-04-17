import { Agent } from "@/data/apps";
import { getIcon } from "@/components/icons";

interface AgentFlowDiagramProps {
  agents: Agent[];
  appTitle: string;
}

const agentColors = ["#72524F", "#8B6460", "#A07470", "#6B4D4A", "#956E6B", "#7A5855", "#634846"];

export default function AgentFlowDiagram({ agents, appTitle }: AgentFlowDiagramProps) {
  return (
    <div
      className="border mt-8 mb-8"
      style={{ borderColor: "#C8BEBA", borderRadius: "4px", background: "#F8F5F1", overflow: "hidden" }}
    >
      {/* Header */}
      <div
        className="px-5 py-3 border-b flex items-center justify-between"
        style={{ borderColor: "#C8BEBA", background: "#EDE8E2" }}
      >
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#C8BEBA" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#C8BEBA" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#C8BEBA" }} />
          </div>
          <span
            className="text-xs font-medium"
            style={{ color: "#8F7270", fontFamily: "'IBM Plex Mono', monospace" }}
          >
            agent_architecture.flow
          </span>
        </div>
        <span className="text-xs" style={{ color: "#A88D8A", fontFamily: "'IBM Plex Mono', monospace" }}>
          {agents.length} agents · sequential orchestration
        </span>
      </div>

      {/* Flow canvas */}
      <div className="p-5 overflow-x-auto">
        <div className="flex items-start gap-0" style={{ minWidth: "max-content" }}>

          {/* Trigger node */}
          <div className="flex items-center">
            <div
              className="flex flex-col items-center gap-1.5 px-3 py-3 rounded"
              style={{ background: "#3D2B29", borderRadius: "4px", minWidth: "80px" }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#F5C01C" }}
              />
              <span
                className="text-xs font-semibold text-center"
                style={{ color: "#F2EEE9", fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px", lineHeight: "1.4" }}
              >
                HR Task
              </span>
              <span style={{ color: "#A88D8A", fontSize: "9px" }}>Trigger</span>
            </div>
          </div>

          {/* Each agent step */}
          {agents.map((agent, i) => {
            const Icon = getIcon(agent.icon);
            const color = agentColors[i % agentColors.length];
            const step = String(i + 1).padStart(2, "0");

            return (
              <div key={i} className="flex items-start">
                {/* Arrow connector */}
                <div className="flex items-center" style={{ paddingTop: "28px" }}>
                  <svg width="32" height="2" viewBox="0 0 32 2">
                    <line x1="0" y1="1" x2="28" y2="1" stroke="#C8BEBA" strokeWidth="1.5" strokeDasharray="3 2" />
                    <polygon points="26,−3 32,1 26,5" fill="#C8BEBA" />
                  </svg>
                </div>

                {/* Agent node */}
                <div
                  className="flex flex-col gap-2 p-3 border"
                  style={{
                    borderColor: "#C8BEBA",
                    borderRadius: "4px",
                    background: "#F2EEE9",
                    minWidth: "110px",
                    maxWidth: "120px",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  }}
                >
                  {/* Step badge + icon */}
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs font-bold"
                      style={{ color, fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px" }}
                    >
                      {step}
                    </span>
                    <div
                      className="p-1 rounded"
                      style={{ background: color, borderRadius: "3px" }}
                    >
                      <Icon size={10} color="#F2EEE9" />
                    </div>
                  </div>
                  {/* Agent name */}
                  <div>
                    <div
                      className="font-semibold leading-tight mb-0.5"
                      style={{ color: "#3D2B29", fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px" }}
                    >
                      {agent.name.replace(" Agent", "").replace(" Agents", "")}
                    </div>
                    <div style={{ color: "#A88D8A", fontSize: "9px" }}>
                      {agent.role}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Final arrow + output node */}
          <div className="flex items-start">
            <div className="flex items-center" style={{ paddingTop: "28px" }}>
              <svg width="32" height="2" viewBox="0 0 32 2">
                <line x1="0" y1="1" x2="28" y2="1" stroke="#C8BEBA" strokeWidth="1.5" strokeDasharray="3 2" />
                <polygon points="26,−3 32,1 26,5" fill="#C8BEBA" />
              </svg>
            </div>
            <div
              className="flex flex-col items-center gap-1.5 px-3 py-3 rounded"
              style={{ background: "#72524F", borderRadius: "4px", minWidth: "80px" }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6 L5 9 L10 3" stroke="#F2EEE9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span
                className="text-xs font-semibold text-center"
                style={{ color: "#F2EEE9", fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px", lineHeight: "1.4" }}
              >
                Result
              </span>
              <span style={{ color: "#C8A09C", fontSize: "9px" }}>Delivered</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
