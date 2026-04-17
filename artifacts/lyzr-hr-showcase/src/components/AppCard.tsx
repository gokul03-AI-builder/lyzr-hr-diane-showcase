import { HRApp } from "@/data/apps";
import { ArrowRight } from "lucide-react";
import { getIcon } from "@/components/icons";

interface AppCardProps {
  app: HRApp;
  index: number;
  onClick: () => void;
  revealRef?: (el: HTMLButtonElement | null) => void;
}

export default function AppCard({ app, onClick, index, revealRef }: AppCardProps) {
  const Icon = getIcon(app.icon);

  return (
    <button
      ref={revealRef}
      onClick={onClick}
      className="group text-left border transition-all duration-200 p-6 flex flex-col gap-4 cursor-pointer reveal"
      style={{
        background: "#F8F5F1",
        borderColor: "#C8BEBA",
        borderRadius: "4px",
        transitionDelay: `${index * 70}ms`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = "#EDE8E2";
        (e.currentTarget as HTMLElement).style.borderColor = "#72524F";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(73,46,45,0.10)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "#F8F5F1";
        (e.currentTarget as HTMLElement).style.borderColor = "#C8BEBA";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      <div className="flex items-start justify-between">
        <div
          className="p-2.5 rounded"
          style={{ background: "#72524F", borderRadius: "4px" }}
        >
          <Icon size={16} color="#F2EEE9" />
        </div>
        <ArrowRight
          size={14}
          className="transition-transform duration-200 group-hover:translate-x-1"
          style={{ color: "#C8BEBA" }}
        />
      </div>

      <div>
        <div
          className="text-xs tracking-widest uppercase mb-2 font-medium"
          style={{ color: "#A88D8A" }}
        >
          {app.category}
        </div>
        <h3
          className="text-base font-semibold mb-2"
          style={{
            color: "#3D2B29",
            fontFamily: "'IBM Plex Mono', monospace",
            letterSpacing: "-0.01em",
          }}
        >
          {app.title}
        </h3>
        <p
          className="text-xs leading-relaxed"
          style={{ color: "#8F7270", lineHeight: "1.7" }}
        >
          {app.tagline}
        </p>
      </div>

      <div className="flex items-center gap-1.5 mt-auto pt-3 border-t" style={{ borderColor: "#E0D8D3" }}>
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "#72524F" }}
        />
        <span className="text-xs" style={{ color: "#A88D8A" }}>
          {app.agents.length} AI Agents
        </span>
      </div>
    </button>
  );
}
