/* Real brand SVG logos for each HRMS platform */

function WorkdayLogo() {
  /* Workday: dark navy background, gold W chevrons — matches their actual app icon */
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#003B5C" />
      {/* Two overlapping upward chevrons forming the Workday W */}
      <path
        d="M5 22 L10 10 L13.5 18 L16 13 L18.5 18 L22 10 L27 22 L23.5 22 L21.5 17 L18.5 23 L16 18 L13.5 23 L10.5 17 L8.5 22 Z"
        fill="#F5C01C"
      />
    </svg>
  );
}

function SAPLogo() {
  /* Real simple-icons SAP path */
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#0FAAFF" />
      <g transform="translate(4, 4) scale(1.0)">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path
            d="M0 6.064v11.872h12.13L24 6.064zm3.264 2.208h.005c.863.001 1.915.245 2.676.633l-.82 1.43c-.835-.404-1.255-.442-1.73-.467-.708-.038-1.064.215-1.069.488-.007.332.669.633 1.305.838.964.306 2.19.715 2.377 1.9L7.77 8.437h2.046l2.064 5.576-.007-5.575h2.37c2.257 0 3.318.764 3.318 2.519 0 1.575-1.09 2.514-2.936 2.514h-.763l-.01 2.094-3.588-.003-.25-.908c-.37.122-.787.189-1.23.189-.456 0-.885-.071-1.263-.2l-.358.919-2 .006.09-.462c-.029.025-.057.05-.087.074-.535.43-1.208.629-2.037.644l-.213.002a5.075 5.075 0 0 1-2.581-.675l.73-1.448c.79.467 1.286.572 1.956.558.347-.007.598-.07.761-.239a.557.557 0 0 0 .156-.369c.007-.376-.53-.553-1.185-.756-.531-.164-1.135-.389-1.606-.735-.559-.41-.825-.924-.812-1.65a1.99 1.99 0 0 1 .566-1.377c.519-.537 1.357-.863 2.363-.863zm10.597 1.67v1.904h.521c.694 0 1.247-.23 1.248-.964 0-.709-.554-.94-1.248-.94zm-5.087.767l-.748 2.362c.223.085.481.133.757.133.268 0 .52-.047.742-.126l-.736-2.37z"
            fill="white"
          />
        </svg>
      </g>
    </svg>
  );
}

function OracleLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="white" />
      <rect x="1" y="1" width="30" height="30" rx="5" fill="none" stroke="#E8E0DA" strokeWidth="0.5" />
      {/* Oracle red ellipse - their actual logomark */}
      <ellipse cx="16" cy="16" rx="11" ry="7.5" stroke="#C74634" strokeWidth="3.5" fill="none" />
    </svg>
  );
}

function ADPLogo() {
  /* Real simple-icons ADP path */
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#D0271D" />
      <g transform="translate(4, 4)">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path
            d="M15.08584 11.9999a3.13031 3.13031 0 0 1-3.12003 3.12002h-1.2v-1.37144h1.2a1.74859 1.74859 0 1 0 0-3.49717h-1.2V8.87987h1.2a3.13031 3.13031 0 0 1 3.12003 3.12002M8.43436 8.87987v2.53716H6.27434l-.78858 1.37144H9.8058v-3.9086Zm15.56584 1.9543a4.28575 4.28575 0 0 1-4.28575 4.28575v2.33145h-3.70289V15.6342a5.36233 5.36233 0 0 1-4.08003 1.81716H8.43436v-2.33145H5.69148l-1.37144 2.33145H0L6.34291 6.54842h5.6229a5.59548 5.59548 0 0 1 4.08004 1.81716V6.54842h3.70289a4.2789 4.2789 0 0 1 4.25146 4.28575"
            fill="white"
          />
        </svg>
      </g>
    </svg>
  );
}

function BambooHRLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#73C04A" />
      {/* Stylized bamboo shoots */}
      <rect x="10" y="7" width="4" height="10" rx="2" fill="white" />
      <rect x="16" y="11" width="4" height="10" rx="2" fill="white" />
      <ellipse cx="12" cy="7" rx="2.5" ry="2" fill="white" />
      <ellipse cx="18" cy="11" rx="2.5" ry="2" fill="white" />
      <rect x="10" y="19" width="12" height="2" rx="1" fill="white" opacity="0.6" />
    </svg>
  );
}

function RipplingLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#1A1A2E" />
      {/* Rippling diagonal grid dots */}
      <circle cx="10" cy="10" r="2.2" fill="#FF6B35" />
      <circle cx="16" cy="10" r="2.2" fill="#FF6B35" opacity="0.8" />
      <circle cx="22" cy="10" r="2.2" fill="#FF6B35" opacity="0.5" />
      <circle cx="10" cy="16" r="2.2" fill="#FF6B35" opacity="0.8" />
      <circle cx="16" cy="16" r="2.2" fill="#FF6B35" />
      <circle cx="22" cy="16" r="2.2" fill="#FF6B35" opacity="0.8" />
      <circle cx="10" cy="22" r="2.2" fill="#FF6B35" opacity="0.5" />
      <circle cx="16" cy="22" r="2.2" fill="#FF6B35" opacity="0.8" />
      <circle cx="22" cy="22" r="2.2" fill="#FF6B35" />
    </svg>
  );
}

function UKGLogo() {
  /* UKG: white background, their actual teal/green brand color with bold wordmark */
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="white" />
      <rect x="0.5" y="0.5" width="31" height="31" rx="5.5" fill="none" stroke="#E0DAD5" strokeWidth="0.5" />
      {/* UKG uses a teal-green color: #00A78E */}
      <text
        x="16"
        y="20.5"
        textAnchor="middle"
        fill="#00A78E"
        fontSize="12.5"
        fontWeight="900"
        fontFamily="Arial Black, Arial, sans-serif"
        letterSpacing="0.5"
      >
        UKG
      </text>
    </svg>
  );
}

function CeridianLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#6B2D8B" />
      {/* Ceridian C mark with swoosh */}
      <path
        d="M22 12.5 A8 8 0 1 0 22 19.5"
        stroke="white"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M19 9.5 L22 12.5 L19 15.5"
        stroke="white"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GreenhouseLogo() {
  /* Real simple-icons Greenhouse path */
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#24A47F" />
      <g transform="translate(4, 4)">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path
            d="M16.279 7.13c0 1.16-.49 2.185-1.293 2.987-.891.891-2.184 1.114-2.184 1.872 0 1.025 1.65.713 3.231 2.295 1.048 1.047 1.694 2.43 1.694 4.034C17.727 21.482 15.187 24 12 24c-3.187 0-5.727-2.518-5.727-5.68 0-1.607.646-2.989 1.694-4.036 1.582-1.582 3.23-1.27 3.23-2.295 0-.758-1.292-.98-2.183-1.872-.802-.802-1.293-1.827-1.293-3.03 0-2.318 1.895-4.19 4.212-4.19.446 0 .847.067 1.181.067.602 0 .914-.268.914-.691 0-.245-.112-.557-.112-.891 0-.758.647-1.382 1.427-1.382s1.404.646 1.404 1.426c0 .825-.647 1.204-1.137 1.382-.401.134-.713.312-.713.713 0 .758 1.382 1.493 1.382 3.61zm-.446 11.19c0-2.206-1.627-3.99-3.833-3.99-2.206 0-3.833 1.784-3.833 3.99 0 2.184 1.627 3.989 3.833 3.989 2.206 0 3.833-1.808 3.833-3.99zM14.518 7.086c0-1.404-1.136-2.562-2.518-2.562S9.482 5.682 9.482 7.086 10.618 9.65 12 9.65s2.518-1.159 2.518-2.563z"
            fill="white"
          />
        </svg>
      </g>
    </svg>
  );
}

function ServiceNowLogo() {
  /* ServiceNow: white bg, their exact green #81B5A1 or the brighter #62D84E, with NOW + signature swoosh */
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="white" />
      <rect x="0.5" y="0.5" width="31" height="31" rx="5.5" fill="none" stroke="#E0DAD5" strokeWidth="0.5" />
      {/* "now" wordmark in ServiceNow green */}
      <text
        x="16"
        y="17"
        textAnchor="middle"
        fill="#62D84E"
        fontSize="11"
        fontWeight="900"
        fontFamily="Arial Black, Arial, sans-serif"
        letterSpacing="-0.5"
      >
        now
      </text>
      {/* Signature swoosh underline — sweeps left to right with an upward curl */}
      <path
        d="M7 21 Q13 19.5 16 21 Q20 22.5 25 20"
        stroke="#62D84E"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

const integrations = [
  {
    name: "Workday",
    description: "Sync employee records, org structures, and compensation data in real-time",
    tags: ["HCM", "Payroll", "Analytics"],
    logo: <WorkdayLogo />,
  },
  {
    name: "SAP SuccessFactors",
    description: "Connect performance cycles, learning modules, and workforce planning data",
    tags: ["Performance", "L&D", "Workforce Planning"],
    logo: <SAPLogo />,
  },
  {
    name: "Oracle HCM",
    description: "Pull headcount, talent profiles, and compensation benchmarks for CHRO dashboards",
    tags: ["HCM", "Talent", "Compensation"],
    logo: <OracleLogo />,
  },
  {
    name: "ADP Workforce Now",
    description: "Access payroll records, attendance data, and benefits enrollment for helpdesk resolution",
    tags: ["Payroll", "Benefits", "Compliance"],
    logo: <ADPLogo />,
  },
  {
    name: "BambooHR",
    description: "Retrieve employee profiles, onboarding checklists, and time-off balances",
    tags: ["HRIS", "Onboarding", "PTO"],
    logo: <BambooHRLogo />,
  },
  {
    name: "Rippling",
    description: "Automate IT provisioning, payroll sync, and role-based access during onboarding",
    tags: ["IT Provisioning", "Payroll", "Onboarding"],
    logo: <RipplingLogo />,
  },
  {
    name: "UKG Pro",
    description: "Integrate workforce scheduling, time tracking, and engagement survey data",
    tags: ["Scheduling", "Engagement", "Time Tracking"],
    logo: <UKGLogo />,
  },
  {
    name: "Ceridian Dayforce",
    description: "Connect continuous pay calculations, compliance rules, and talent data streams",
    tags: ["Payroll", "Compliance", "Talent"],
    logo: <CeridianLogo />,
  },
  {
    name: "Greenhouse",
    description: "Sync candidate pipelines, job postings, and interview scorecards for recruitment agents",
    tags: ["ATS", "Recruitment", "Interviewing"],
    logo: <GreenhouseLogo />,
  },
  {
    name: "ServiceNow HR",
    description: "Route HR service requests, escalate cases, and access knowledge base articles",
    tags: ["ITSM", "Helpdesk", "Case Management"],
    logo: <ServiceNowLogo />,
  },
];

export default function IntegrationsSection() {
  return (
    <section className="mt-20">
      <div className="pb-6 mb-8 border-b" style={{ borderColor: "#C8BEBA" }}>
        <div
          className="text-xs tracking-widest uppercase mb-3 font-medium"
          style={{ color: "#8F7270" }}
        >
          Native Integrations
        </div>
        <div className="flex items-end justify-between gap-4">
          <h2
            className="text-xl font-semibold"
            style={{
              color: "#3D2B29",
              fontFamily: "'IBM Plex Mono', monospace",
              letterSpacing: "-0.02em",
            }}
          >
            Connects to your existing HRMS
          </h2>
          <p
            className="text-xs max-w-sm text-right"
            style={{ color: "#8F7270", lineHeight: "1.7" }}
          >
            Lyzr agents read and write data across leading HR platforms — no rip-and-replace required.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {integrations.map((integration) => (
          <div
            key={integration.name}
            className="p-4 border flex flex-col gap-3 transition-all duration-150"
            style={{
              background: "#F8F5F1",
              borderColor: "#C8BEBA",
              borderRadius: "4px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#72524F";
              (e.currentTarget as HTMLElement).style.background = "#EDE8E2";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#C8BEBA";
              (e.currentTarget as HTMLElement).style.background = "#F8F5F1";
            }}
          >
            <div className="flex items-center gap-2.5">
              <div className="flex-shrink-0">{integration.logo}</div>
              <span
                className="text-xs font-semibold leading-tight"
                style={{
                  color: "#3D2B29",
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                {integration.name}
              </span>
            </div>

            <p
              className="text-xs leading-relaxed"
              style={{ color: "#8F7270", lineHeight: "1.6", fontSize: "11px" }}
            >
              {integration.description}
            </p>

            <div className="flex flex-wrap gap-1 mt-auto">
              {integration.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-1.5 py-0.5"
                  style={{
                    color: "#8F7270",
                    background: "#EDE8E2",
                    borderRadius: "3px",
                    fontSize: "10px",
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* "& more" tile */}
        <div
          className="p-4 border flex flex-col items-center justify-center gap-3 text-center"
          style={{
            background: "#EDE8E2",
            borderColor: "#C8BEBA",
            borderRadius: "4px",
            borderStyle: "dashed",
          }}
        >
          <div className="flex gap-1 flex-wrap justify-center">
            {["Lever", "iCIMS", "HiBob", "Namely", "Gusto"].map((name) => (
              <span
                key={name}
                className="px-1.5 py-0.5"
                style={{
                  color: "#8F7270",
                  background: "#F2EEE9",
                  borderRadius: "3px",
                  fontSize: "10px",
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                {name}
              </span>
            ))}
          </div>
          <div>
            <p
              className="text-xs font-semibold mb-1"
              style={{ color: "#72524F", fontFamily: "'IBM Plex Mono', monospace" }}
            >
              & every player in the market
            </p>
            <p
              className="text-xs"
              style={{ color: "#A88D8A", fontSize: "11px", lineHeight: "1.6" }}
            >
              If your HRMS has an API, Lyzr agents can integrate with it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
