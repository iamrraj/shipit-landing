import StickySection from "../ui/StickySection";
import SectionLabel from "../ui/SectionLabel";
import ShipItToolsOrbitSvg from "../svg/ShipItToolsOrbitSvg";

const providers = [
  "AWS Bedrock", "OpenAI", "Gemini", "Vertex AI",
  "Groq", "Ollama", "Together AI", "OpenRouter",
];

const toolCategories = [
  {
    title: "Files & Search",
    tools: ["read_file", "write_file", "edit_file", "search_files", "list_dir"],
    color: "text-blue-400",
  },
  {
    title: "Shell & DevOps",
    tools: ["bash_exec", "git_ops", "github_ops", "docker_ops", "run_tests"],
    color: "text-green-400",
  },
  {
    title: "Security & Pentest",
    tools: ["security_audit", "vuln_scan", "secrets_scan", "xss_scan", "sqli_test"],
    color: "text-red-400",
  },
  {
    title: "OSINT & Research",
    tools: ["osint_search", "web_search", "web_fetch", "subdomain_enum", "port_scan"],
    color: "text-purple-400",
  },
];

function OverviewPanel() {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <div>
        <h3 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-bold leading-tight text-[var(--color-text-primary)]">
          Like Claude Code.
          <br />
          <span className="text-[var(--color-accent)]">Your own models.</span>
        </h3>
        <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--color-text-secondary)]">
          One autonomous coding agent that routes across 9+ AI providers. 43 built-in tools. OSINT research suite. Full terminal access. Runs locally.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {providers.map((p) => (
            <span
              key={p}
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-secondary)]"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative h-80 w-80">
          <ShipItToolsOrbitSvg />
        </div>
      </div>
    </div>
  );
}

function ToolsPanel() {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <div>
        <h3 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-bold leading-tight text-[var(--color-text-primary)]">
          43 built-in tools.
        </h3>
        <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--color-text-secondary)]">
          Files, shell, git, security auditing, OSINT, penetration testing, web research — all available out of the box.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {toolCategories.map((cat) => (
          <div
            key={cat.title}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
          >
            <h4 className={`mb-3 text-xs font-semibold uppercase tracking-wider ${cat.color}`}>
              {cat.title}
            </h4>
            <div className="space-y-1.5">
              {cat.tools.map((t) => (
                <div
                  key={t}
                  className="font-mono text-xs text-[var(--color-text-muted)]"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InstallPanel() {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <div>
        <h3 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-bold leading-tight text-[var(--color-text-primary)]">
          Install in seconds.
        </h3>
        <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--color-text-secondary)]">
          One command. No complex setup. Run locally, keep your code private.
        </p>
      </div>
      <div className="space-y-4">
        {[
          { label: "Install script", cmd: "curl -fsSL https://shipiit.com/install.sh | bash" },
          { label: "npm global", cmd: "npm install -g @anthropic-ai/claude-code" },
          { label: "Then run", cmd: "shipitcli" },
        ].map((item) => (
          <div
            key={item.label}
            className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]"
          >
            <div className="border-b border-[var(--color-border)] px-4 py-2 text-xs font-semibold text-[var(--color-text-muted)]">
              {item.label}
            </div>
            <pre className="px-4 py-3 font-mono text-sm text-[var(--color-text-primary)]">
              <code>{item.cmd}</code>
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CliSection() {
  const panels = [
    { content: <OverviewPanel /> },
    { content: <ToolsPanel /> },
    { content: <InstallPanel /> },
  ];

  return (
    <div>
      <div className="px-5 pt-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionLabel
            eyebrow="ShipIt CLI"
            heading="The terminal-native coding agent."
            description="One autonomous agent on your own models. 43 tools. OSINT. Pentest. Full local execution."
          />
        </div>
      </div>
      <StickySection id="cli" panels={panels} indicators />
    </div>
  );
}
