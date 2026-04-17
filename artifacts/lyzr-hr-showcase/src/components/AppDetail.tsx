import { HRApp } from "@/data/apps";
import { getIcon, ArrowLeft, ExternalLink } from "@/components/icons";
import AgentCard from "@/components/AgentCard";

interface AppDetailProps {
  app: HRApp;
  onBack: () => void;
}

export default function AppDetail({ app, onBack }: AppDetailProps) {
  const Icon = getIcon(app.icon);

  return (
    <div className="anim-page-enter">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-xs mb-10 transition-opacity hover:opacity-70 anim-fade-in"
        style={{ color: "#8F7270", fontFamily: "'IBM Plex Mono', monospace", animationDelay: "0ms" }}
      >
        <ArrowLeft size={14} />
        <span>All Applications</span>
      </button>

      <div className="mb-10">
        <div
          className="flex items-start justify-between gap-6 mb-6 anim-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          <div className="flex items-start gap-5">
            <div
              className="p-3 rounded flex-shrink-0"
              style={{ background: "#72524F", borderRadius: "4px" }}
            >
              <Icon size={22} color="#F2EEE9" />
            </div>
            <div>
              <div
                className="text-xs tracking-widest uppercase mb-2 font-medium"
                style={{ color: "#A88D8A" }}
              >
                {app.category}
              </div>
              <h1
                className="text-2xl font-semibold mb-2"
                style={{
                  color: "#3D2B29",
                  fontFamily: "'IBM Plex Mono', monospace",
                  letterSpacing: "-0.02em",
                }}
              >
                {app.title}
              </h1>
              <p
                className="text-sm"
                style={{ color: "#8F7270" }}
              >
                {app.tagline}
              </p>
            </div>
          </div>

          <a
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 text-xs font-medium transition-all hover:opacity-90 hover:-translate-y-px"
            style={{
              background: "#72524F",
              color: "#F2EEE9",
              borderRadius: "4px",
              fontFamily: "'IBM Plex Mono', monospace",
              boxShadow: "rgba(73, 46, 45, 0.08) 2px 2px 0px 0px",
              letterSpacing: "0.02em",
              textDecoration: "none",
            }}
          >
            <span>Open App</span>
            <ExternalLink size={12} />
          </a>
        </div>

        <div
          className="p-5 border text-sm leading-relaxed anim-fade-up"
          style={{
            background: "#F8F5F1",
            borderColor: "#C8BEBA",
            color: "#8F7270",
            borderRadius: "4px",
            lineHeight: "1.8",
            animationDelay: "160ms",
          }}
        >
          {app.description}
        </div>
      </div>

      <div className="mb-8">
        <div
          className="flex items-center gap-3 mb-2 anim-fade-in"
          style={{ animationDelay: "220ms" }}
        >
          <div
            className="h-px flex-1"
            style={{ background: "#C8BEBA" }}
          />
          <div
            className="text-xs tracking-widest uppercase font-medium px-3"
            style={{ color: "#8F7270" }}
          >
            {app.agents.length} AI Agents
          </div>
          <div
            className="h-px flex-1"
            style={{ background: "#C8BEBA" }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {app.agents.map((agent, index) => (
            <AgentCard key={index} agent={agent} index={index} />
          ))}
        </div>
      </div>

      <div
        className="border p-5 anim-fade-up"
        style={{
          background: "#F8F5F1",
          borderColor: "#C8BEBA",
          borderRadius: "4px",
          animationDelay: `${220 + app.agents.length * 60}ms`,
        }}
      >
        <div
          className="text-xs tracking-widest uppercase mb-4 font-medium"
          style={{ color: "#A88D8A" }}
        >
          Key Capabilities
        </div>
        <div className="flex flex-wrap gap-2">
          {app.features.map((feature, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1.5 border"
              style={{
                color: "#72524F",
                borderColor: "#C8BEBA",
                background: "#F2EEE9",
                borderRadius: "4px",
                fontFamily: "'IBM Plex Mono', monospace",
              }}
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center anim-fade-up" style={{ animationDelay: `${280 + app.agents.length * 60}ms` }}>
        <a
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-6 py-3 text-sm font-medium transition-all hover:opacity-90 hover:-translate-y-0.5"
          style={{
            background: "#72524F",
            color: "#F2EEE9",
            borderRadius: "4px",
            fontFamily: "'IBM Plex Mono', monospace",
            boxShadow: "rgba(73, 46, 45, 0.12) 0px 4px 14px",
            textDecoration: "none",
          }}
        >
          <ExternalLink size={14} />
          Launch {app.title}
        </a>
      </div>
    </div>
  );
}
