import { useState } from "react";
import { hrApps, HRApp } from "@/data/apps";
import AppDetail from "@/components/AppDetail";
import AppCard from "@/components/AppCard";
import LyzrLogo from "@/components/LyzrLogo";
import IntegrationsSection from "@/components/IntegrationsSection";
import HeroVisual from "@/components/HeroVisual";
import { useScrollReveal, useScrollRevealList } from "@/hooks/useScrollReveal";
import { Shield, Zap, GitBranch, Mic } from "lucide-react";

const stats = [
  { value: "5x", label: "Faster Hiring" },
  { value: "50%", label: "Time Savings" },
  { value: "70%", label: "Cost Savings" },
  { value: "90%", label: "Faster Response" },
];

const differentiators = [
  {
    icon: GitBranch,
    title: "Multi-Agent Orchestration",
    description: "Agents hand off, share context, and resolve workflows together.",
    metric: "37 agents",
    metricLabel: "coordinated",
  },
  {
    icon: Mic,
    title: "Voice-Native",
    description: "Hands-free HR interactions over voice for employees and recruiters.",
    metric: "24 / 7",
    metricLabel: "availability",
  },
  {
    icon: Shield,
    title: "Privacy-First",
    description: "Zero data stored outside your HRMS. Lyzr is an intelligence layer.",
    metric: "SOC2",
    metricLabel: "compliant",
  },
  {
    icon: Zap,
    title: "Plug-and-Play",
    description: "Connects to every major HRMS via secure, permission-gated APIs.",
    metric: "10+",
    metricLabel: "integrations",
  },
];

export default function Home() {
  const [selectedApp, setSelectedApp] = useState<HRApp | null>(null);

  const statsRef = useScrollReveal();
  const appsLabelRef = useScrollReveal();
  const whyLyzrRef = useScrollReveal();
  const integrationsRef = useScrollReveal();

  const setAppCardRef = useScrollRevealList(hrApps.length);
  const setDiffRef = useScrollRevealList(differentiators.length);

  return (
    <div className="min-h-screen" style={{ background: "#F2EEE9" }}>
      <header
        className="border-b"
        style={{ borderColor: "#C8BEBA", background: "#F2EEE9" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div
            className="flex items-center gap-3 anim-fade-in"
            style={{ animationDelay: "0ms" }}
          >
            <LyzrLogo />
            <span
              className="text-sm font-medium tracking-wider uppercase"
              style={{ color: "#72524F", fontFamily: "'IBM Plex Mono', monospace" }}
            >
              Lyzr AI
            </span>
          </div>
          <div
            className="text-xs tracking-widest uppercase anim-fade-in"
            style={{ color: "#8F7270", animationDelay: "100ms" }}
          >
            Diane · HR Agent Suite
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        {selectedApp ? (
          <AppDetail app={selectedApp} onBack={() => setSelectedApp(null)} />
        ) : (
          <>
            {/* Hero — two column */}
            <div className="flex items-center justify-between gap-8 mb-12">
              <div className="max-w-lg">
                <div
                  className="text-xs tracking-widest uppercase mb-4 font-medium anim-fade-up"
                  style={{ color: "#8F7270", animationDelay: "80ms" }}
                >
                  Meet Diane · AI HR Agent Suite
                </div>
                <h1
                  className="text-4xl font-semibold mb-5 leading-tight anim-fade-up"
                  style={{
                    color: "#3D2B29",
                    fontFamily: "'IBM Plex Mono', monospace",
                    letterSpacing: "-0.02em",
                    animationDelay: "160ms",
                  }}
                >
                  Automate your HR workflows{" "}
                  <span style={{ color: "#72524F" }}>with AI Agent Diane</span>
                </h1>
                <p
                  className="text-sm anim-fade-up"
                  style={{ color: "#8F7270", lineHeight: "1.8", animationDelay: "240ms" }}
                >
                  7 AI applications. 37 agents. Every stage of the employee lifecycle — automated.
                </p>
                <div
                  className="flex items-center gap-3 mt-6 anim-fade-up"
                  style={{ animationDelay: "300ms" }}
                >
                  <a
                    href="https://www.lyzr.ai/diane/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 text-xs font-medium transition-all hover:opacity-80"
                    style={{
                      background: "#72524F",
                      color: "#F2EEE9",
                      borderRadius: "4px",
                      fontFamily: "'IBM Plex Mono', monospace",
                      textDecoration: "none",
                      boxShadow: "0 2px 8px rgba(73,46,45,0.15)",
                    }}
                  >
                    Talk to us
                  </a>
                  <span className="text-xs" style={{ color: "#A88D8A" }}>
                    No rip-and-replace. Plug in and go.
                  </span>
                </div>
              </div>
              <div className="hidden lg:block flex-shrink-0">
                <HeroVisual />
              </div>
            </div>

            {/* Stats bar */}
            <div
              ref={statsRef}
              className="reveal grid grid-cols-4 border mb-14"
              style={{
                borderColor: "#C8BEBA",
                borderRadius: "4px",
                background: "#F8F5F1",
                transitionDelay: "80ms",
              }}
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="py-5 px-6 flex flex-col gap-1"
                  style={{
                    borderRight: i < stats.length - 1 ? "1px solid #C8BEBA" : "none",
                  }}
                >
                  <span
                    className="text-2xl font-semibold"
                    style={{
                      color: "#72524F",
                      fontFamily: "'IBM Plex Mono', monospace",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-xs" style={{ color: "#8F7270" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Applications label */}
            <div
              ref={appsLabelRef}
              className="reveal text-xs tracking-widest uppercase mb-6 font-medium pb-3 border-b"
              style={{ color: "#8F7270", borderColor: "#C8BEBA" }}
            >
              Applications — Select to explore agents
            </div>

            {/* App cards — staggered scroll reveal */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {hrApps.map((app, index) => (
                <AppCard
                  key={app.id}
                  app={app}
                  index={index}
                  onClick={() => setSelectedApp(app)}
                  revealRef={setAppCardRef(index) as (el: HTMLButtonElement | null) => void}
                />
              ))}
            </div>

            {/* Why Diane */}
            <section
              ref={whyLyzrRef}
              className="reveal mt-20"
              style={{ transitionDelay: "40ms" }}
            >
              <div
                className="pb-6 mb-8 border-b"
                style={{ borderColor: "#C8BEBA" }}
              >
                <div
                  className="text-xs tracking-widest uppercase mb-3 font-medium"
                  style={{ color: "#8F7270" }}
                >
                  Why Diane
                </div>
                <h2
                  className="text-xl font-semibold"
                  style={{
                    color: "#3D2B29",
                    fontFamily: "'IBM Plex Mono', monospace",
                    letterSpacing: "-0.02em",
                  }}
                >
                  A full-stack agent system built for HR
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {differentiators.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      ref={setDiffRef(i)}
                      className="reveal p-5 border flex flex-col justify-between"
                      style={{
                        background: "#F8F5F1",
                        borderColor: "#C8BEBA",
                        borderRadius: "4px",
                        transitionDelay: `${i * 80}ms`,
                        minHeight: "160px",
                      }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className="p-2.5 rounded"
                          style={{ background: "#72524F", borderRadius: "4px" }}
                        >
                          <Icon size={16} color="#F2EEE9" />
                        </div>
                        <div className="text-right">
                          <div
                            className="text-xl font-bold"
                            style={{ color: "#72524F", fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "-0.03em" }}
                          >
                            {item.metric}
                          </div>
                          <div className="text-xs" style={{ color: "#A88D8A" }}>{item.metricLabel}</div>
                        </div>
                      </div>
                      <div>
                        <h3
                          className="text-sm font-semibold mb-1.5"
                          style={{ color: "#3D2B29", fontFamily: "'IBM Plex Mono', monospace" }}
                        >
                          {item.title}
                        </h3>
                        <p className="text-xs" style={{ color: "#8F7270", lineHeight: "1.65" }}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Integrations */}
            <div
              ref={integrationsRef}
              className="reveal"
              style={{ transitionDelay: "60ms" }}
            >
              <IntegrationsSection />
            </div>

            {/* Footer */}
            <footer
              className="mt-16 pt-8 border-t flex items-center justify-between"
              style={{ borderColor: "#C8BEBA" }}
            >
              <div className="flex items-center gap-2">
                <LyzrLogo small />
                <span
                  className="text-xs"
                  style={{ color: "#8F7270", fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  Lyzr AI · Diane · HR Agent Suite
                </span>
              </div>
              <a
                href="https://www.lyzr.ai/diane/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs transition-opacity hover:opacity-70"
                style={{ color: "#A88D8A", textDecoration: "none", fontFamily: "'IBM Plex Mono', monospace" }}
              >
                lyzr.ai/diane →
              </a>
            </footer>
          </>
        )}
      </main>
    </div>
  );
}
