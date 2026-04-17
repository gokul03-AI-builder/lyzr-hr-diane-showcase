export interface Agent {
  name: string;
  role: string;
  description: string;
  icon: string;
}

export interface HRApp {
  id: string;
  title: string;
  tagline: string;
  description: string;
  url: string;
  category: string;
  icon: string;
  agents: Agent[];
  features: string[];
}

export const hrApps: HRApp[] = [
  {
    id: "recruitment-assistant",
    title: "Recruitment Assistant",
    tagline: "AI Talent Co-Pilot for end-to-end hiring",
    description:
      "An end-to-end hiring automation layer that augments recruiters across the entire funnel — from sourcing to offer negotiation — with a coordinated team of AI agents.",
    url: "https://recruit-flow-fantastic-core-wxrg.architect.space",
    category: "Talent Acquisition",
    icon: "Users",
    features: [
      "Multi-platform candidate sourcing",
      "Semantic candidate matching",
      "Automated screening assessments",
      "Calendar-synced interview scheduling",
      "AI interview analysis",
      "Offer negotiation support",
    ],
    agents: [
      {
        name: "Candidate Sourcing Agent",
        role: "Talent Discovery",
        description:
          "Proactively scans platforms like LinkedIn, Indeed, and other job boards to identify and shortlist relevant candidates based on structured job requirements.",
        icon: "Search",
      },
      {
        name: "Candidate Matching Agent",
        role: "Semantic Ranking & Scoring",
        description:
          "Uses semantic ranking and AI-powered scoring to match candidates to open roles with full explainability on why each candidate was surfaced.",
        icon: "Star",
      },
      {
        name: "Candidate Evaluation Agent",
        role: "Automated Screening",
        description:
          "Conducts automated screening assessments and evaluates candidate suitability using predefined competency frameworks for each role.",
        icon: "ClipboardCheck",
      },
      {
        name: "Interview Scheduler Agent",
        role: "Coordination & Calendar Sync",
        description:
          "Fully automates interview coordination, calendar sync, and follow-ups with zero manual dependency across all interview rounds.",
        icon: "Calendar",
      },
      {
        name: "Interview Analysis Agent",
        role: "Evaluation Summarization",
        description:
          "Analyzes interview conversations and generates structured, unbiased evaluation summaries for every candidate and interviewer pair.",
        icon: "MessageSquare",
      },
      {
        name: "Compensation Negotiation Agent",
        role: "Offer Management",
        description:
          "Facilitates offer discussions within budget guardrails while balancing candidate expectations to maximize acceptance rates.",
        icon: "FileCheck",
      },
    ],
  },
  {
    id: "hr-helpdesk",
    title: "HR Helpdesk",
    tagline: "AI-First HR Operations replacing traditional ticketing",
    description:
      "A conversational HR operations suite powered by three specialist agents — one that answers employee questions directly using a RAG knowledge base, one that helps HR admins draft resolution emails, and one that generates and sends HR documents via Gmail.",
    url: "https://assist-connect-incredible-lab-sezj.architect.space/",
    category: "Employee Support",
    icon: "HeadphonesIcon",
    features: [
      "RAG-based answers for leave, benefits, holidays & payroll",
      "Single-agent resolution — no redirects",
      "HR admin email drafting for ticket responses",
      "AI document generation (contracts, offer letters, certificates)",
      "Gmail integration for document delivery",
    ],
    agents: [
      {
        name: "Employee Chat Agent",
        role: "Conversational HR Assistant",
        description:
          "Answers employee HR questions on leave, benefits, holidays, and payroll using a RAG knowledge base. Acts as a single point of contact — handles everything directly without redirecting.",
        icon: "MessageCircle",
      },
      {
        name: "HR Ticket Resolution Agent",
        role: "Admin Response Drafting",
        description:
          "Helps HR admins draft professional resolution emails for employee tickets. Analyzes ticket context and suggests well-structured, appropriate responses.",
        icon: "Mail",
      },
      {
        name: "HR Document Drafting Agent",
        role: "Document Generation & Delivery",
        description:
          "Drafts HR documents including contracts, offer letters, certificates, and amendments — and can send them directly to recipients via Gmail.",
        icon: "FileText",
      },
    ],
  },
  {
    id: "learning-development",
    title: "Learning & Development",
    tagline: "AI Learning Co-Pilot for skills-first workforce growth",
    description:
      "A dynamic, skills-first workforce development engine that maps competency gaps, generates personalized learning journeys, surfaces internal mobility opportunities, and quantifies the business impact of learning programs.",
    url: "https://skill-oracle-ultra-core-pre9.architect.space",
    category: "Talent Development",
    icon: "GraduationCap",
    features: [
      "Employee skill graph mapping",
      "Adaptive learning journeys",
      "Internal mobility identification",
      "Learning ROI measurement",
      "Career aspiration alignment",
    ],
    agents: [
      {
        name: "Skill Gap Analysis Agent",
        role: "Competency Mapping",
        description:
          "Maps each employee's skill graph against role requirements and recommends targeted interventions to close critical competency gaps.",
        icon: "Target",
      },
      {
        name: "Personalized Learning Path Agent",
        role: "Adaptive Learning Design",
        description:
          "Generates adaptive learning journeys tailored to each employee's role, performance data, and career aspirations — dynamically adjusting as progress is made.",
        icon: "Map",
      },
      {
        name: "Internal Mobility Agent",
        role: "Talent Redeployment",
        description:
          "Identifies internal talent eligible for open roles and suggests upskilling pathways to accelerate transition readiness across the organization.",
        icon: "ArrowRight",
      },
      {
        name: "Training ROI Agent",
        role: "Learning Impact Measurement",
        description:
          "Quantifies the business impact of learning programs by correlating training completion with performance outcomes, retention rates, and promotion velocity.",
        icon: "TrendingUp",
      },
    ],
  },
  {
    id: "chro-console",
    title: "CHRO Intelligence Console",
    tagline: "Strategic Workforce AI for executive decision-making",
    description:
      "An executive-level decision intelligence layer for workforce strategy. Gives CHROs predictive attrition signals, headcount scenario modeling, compensation benchmarking, and real-time org health analytics in one unified console.",
    url: "https://boardroom-intelligence-ultra-gate-r8ed.architect.space",
    category: "Executive Intelligence",
    icon: "BarChart3",
    features: [
      "Flight risk prediction",
      "Headcount scenario simulation",
      "Pay equity benchmarking",
      "Engagement & burnout detection",
      "Retention action recommendations",
    ],
    agents: [
      {
        name: "Attrition Risk Prediction Agent",
        role: "Retention Intelligence",
        description:
          "Identifies employee flight risks using engagement, performance, and compensation signals — then surfaces recommended retention actions before resignations occur.",
        icon: "AlertCircle",
      },
      {
        name: "Workforce Planning Agent",
        role: "Headcount Scenario Modeling",
        description:
          "Simulates hiring and attrition scenarios to forecast headcount gaps and workforce needs across teams, geographies, and time horizons.",
        icon: "Layout",
      },
      {
        name: "Compensation Benchmarking Agent",
        role: "Pay Equity & Market Analysis",
        description:
          "Benchmarks internal pay structures against market standards and proactively flags pay equity gaps before they become legal or retention liabilities.",
        icon: "BarChart2",
      },
      {
        name: "Org Health Agent",
        role: "Engagement & Burnout Detection",
        description:
          "Analyzes engagement signals and sentiment data to detect burnout trends, team-level risks, and organizational health patterns requiring leadership attention.",
        icon: "Heart",
      },
    ],
  },
  {
    id: "performance-360",
    title: "Performance 360",
    tagline: "AI-driven performance management across the full cycle",
    description:
      "A comprehensive performance intelligence system that handles calibration, feedback analysis, goal tracking, review generation, and people analytics — giving managers, employees, and HR teams the insight they need at every stage of the review cycle.",
    url: "https://review-ai-clean-club-cxm5.architect.space",
    category: "Performance Management",
    icon: "Award",
    features: [
      "Rating calibration & normalization",
      "Bias detection in feedback",
      "Goal progress root cause analysis",
      "AI-drafted performance reviews",
      "HR & manager analytics",
    ],
    agents: [
      {
        name: "Calibration Agent",
        role: "Rating Normalization",
        description:
          "Analyzes all ratings for a manager's team within a cycle, detects statistical inflation, and returns suggested normalized scores with clear reasoning for each adjustment.",
        icon: "Sliders",
      },
      {
        name: "Feedback Analysis Agent",
        role: "Feedback Intelligence",
        description:
          "Analyzes all feedback items for an employee within a review cycle, surfacing top themes, sentiment scores, bias flags (vague praise, gender-coded language), and a concise synthesis.",
        icon: "MessageCircle",
      },
      {
        name: "Goal Tracking Agent",
        role: "Goal Progress Analysis",
        description:
          "Receives natural language questions about goal progress, fetches relevant goal data, and provides root cause analysis with specific, data-driven action recommendations.",
        icon: "Target",
      },
      {
        name: "Insights Agent",
        role: "People Analytics",
        description:
          "Answers natural language questions from HR (company/department scope) or managers (team scope) using aggregated performance data — ratings, goal completion, feedback sentiment, and attrition signals.",
        icon: "BarChart2",
      },
      {
        name: "Review Generation Agent",
        role: "AI Review Drafting",
        description:
          "Drafts professional performance reviews (manager mode) or self-assessments (employee mode) using goals, feedback, check-ins, and manager notes — capturing accomplishments, impact, and development areas.",
        icon: "FileText",
      },
    ],
  },
  {
    id: "onboarding-intelligence",
    title: "Onboarding Intelligence",
    tagline: "AI-orchestrated new hire success from day zero",
    description:
      "A multi-agent onboarding platform that routes new hire needs intelligently, automates pre-boarding logistics, tracks role ramp-up, captures cultural integration signals, and equips managers with AI-generated coaching prompts throughout the 30/60/90-day journey.",
    url: "https://block-trades-modern-flow-mz13.architect.space",
    category: "Employee Experience",
    icon: "Rocket",
    features: [
      "Intent-based query routing",
      "Pre-boarding automation",
      "Tool & policy onboarding",
      "Role milestone tracking",
      "Pulse & sentiment capture",
      "30/60/90-day evaluations",
      "Manager coaching prompts",
    ],
    agents: [
      {
        name: "Orchestrator",
        role: "Intent Routing",
        description:
          "Routes new hire queries to the right specialist agent based on intent and context, ensuring every question reaches the most qualified agent in the network.",
        icon: "GitBranch",
      },
      {
        name: "Day Zero Readiness",
        role: "Pre-Boarding Automation",
        description:
          "Handles pre-boarding paperwork, document collection, and first-day setup tasks so new hires arrive prepared and the admin burden on HR is eliminated.",
        icon: "CheckSquare",
      },
      {
        name: "Tool Concierge",
        role: "IT & Policy Onboarding",
        description:
          "Guides new hires through company policies, tool setup, and IT provisioning step-by-step, reducing helpdesk tickets and accelerating productivity from day one.",
        icon: "Lightbulb",
      },
      {
        name: "Role Ramp",
        role: "Milestone & Training Tracking",
        description:
          "Tracks role-specific milestones, training modules, and skill ramp-up progress — surfacing gaps and keeping both employees and managers aligned on expectations.",
        icon: "TrendingUp",
      },
      {
        name: "Check-In Culture",
        role: "Sentiment & Cultural Integration",
        description:
          "Captures employee sentiment, pulse check-ins, and cultural integration signals throughout the onboarding journey to detect disengagement early.",
        icon: "Heart",
      },
      {
        name: "Checkpoint Review",
        role: "30/60/90-Day Evaluations",
        description:
          "Generates structured 30/60/90-day performance evaluations with pre-filled context from onboarding data, making review conversations substantive from the start.",
        icon: "ClipboardList",
      },
      {
        name: "Insights & Analytics",
        role: "Team-Level Onboarding Analytics",
        description:
          "Provides team-level analytics, risk alerts, cohort trends, and at-risk hire identification to help HR and managers intervene before small problems compound.",
        icon: "BarChart3",
      },
      {
        name: "Manager Enablement",
        role: "AI Coaching for Managers",
        description:
          "Delivers AI-generated coaching prompts, risk signals, and 1:1 conversation starters to managers, ensuring they show up prepared for every new hire check-in.",
        icon: "Users",
      },
    ],
  },
  {
    id: "recruitment-automation",
    title: "Recruitment Automation Platform",
    tagline: "AI-powered candidate ranking and evaluation pipeline",
    description:
      "An intelligent recruitment automation suite built around a coordinated agent pipeline that parses resumes, analyzes job-candidate fit, scores applicants with detailed breakdowns, and manages interview scheduling — all orchestrated by a central manager agent.",
    url: "https://rank-guard-awesome-space-6d8y.architect.space",
    category: "Talent Acquisition",
    icon: "Zap",
    features: [
      "End-to-end pipeline orchestration",
      "Structured resume parsing",
      "Job-candidate alignment analysis",
      "Scored candidate rankings",
      "Interview scheduling & communication",
    ],
    agents: [
      {
        name: "Ranking Orchestrator",
        role: "Pipeline Manager",
        description:
          "Orchestrates the entire candidate evaluation pipeline by coordinating the parser, analyzer, and scorer sub-agents — managing sequencing, retries, and output aggregation.",
        icon: "GitBranch",
      },
      {
        name: "Resume Parser",
        role: "Structured Profile Extraction",
        description:
          "Extracts structured candidate profiles from raw resume text — skills, experience, education — converting unstructured documents into clean, comparable data.",
        icon: "FileText",
      },
      {
        name: "Context Analyzer",
        role: "Fit Analysis",
        description:
          "Analyzes job descriptions alongside candidate profiles to identify alignment strengths, skill gaps, and role-specific contextual signals that raw scoring misses.",
        icon: "Search",
      },
      {
        name: "Candidate Scorer",
        role: "Ranking & Scoring",
        description:
          "Scores and ranks candidates against job criteria with detailed category breakdowns — giving recruiters transparent, explainable rankings rather than opaque outputs.",
        icon: "Star",
      },
      {
        name: "Interview Scheduler",
        role: "Scheduling & Communication",
        description:
          "Handles interview scheduling, email draft generation, and candidate communication workflows — keeping every stakeholder informed without manual coordination.",
        icon: "Calendar",
      },
    ],
  },
];
