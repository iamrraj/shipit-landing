import {
  BellRing,
  Book,
  Bot,
  CheckCircle2,
  Code2,
  FileCode2,
  GitBranch,
  Github,
  Globe,
  Lock,
  MessageSquare,
  ScanSearch,
  Settings,
  Shield,
  Terminal,
} from "lucide-react";
import { Badge, CodeBlock, DocsTable, InfoCard } from "./DocsHelpers";

/* ─── GitHub ─────────────────────────────────────────── */
export function DocsGithub() {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">GitHub Integration</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
        Deep integration with GitHub for repository operations, branch management, and pull request workflows.
      </p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <InfoCard icon={GitBranch} title="Branch Management">Automatic feature branch creation, checkout, and cleanup.</InfoCard>
        <InfoCard icon={Github} title="Pull Requests">Create PRs with auto-generated titles and descriptions via /pr.</InfoCard>
        <InfoCard icon={Globe} title="Repo Cloning">Paste a GitHub URL to clone and work against any accessible repository.</InfoCard>
        <InfoCard icon={ScanSearch} title="Diff & Review">View inline diffs, review comments, and merge status in the chat.</InfoCard>
      </div>

      <h4 className="mt-7 text-lg font-semibold text-[var(--color-text-primary)]">Setup</h4>
      <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">
        Configure GitHub from <strong className="text-[var(--color-text-primary)]">Settings &rarr; GitHub</strong>.
        Enter your Personal Access Token, toggle automation options, and test the connection — all from the UI.
      </p>

      <div className="mt-4 rounded-2xl border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)]">
          <Settings size={14} />
          GitHub Settings
        </div>
        <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">
          Recommended scopes: <code className="rounded bg-[var(--color-bg-secondary)] px-1.5 py-0.5 text-xs font-mono">repo</code>,{" "}
          <code className="rounded bg-[var(--color-bg-secondary)] px-1.5 py-0.5 text-xs font-mono">read:org</code>, and optionally{" "}
          <code className="rounded bg-[var(--color-bg-secondary)] px-1.5 py-0.5 text-xs font-mono">workflow</code>.
          Use a fine-grained or classic token.
        </p>
      </div>

      <DocsTable
        headers={["Setting", "Default", "Description"]}
        rows={[
          ["Auto-commit", "On", "Commits changes locally after implementation"],
          ["Auto-push", "Off", "Push to remote after commit"],
          ["Auto-PR", "Off", "Create pull request after push"],
          ["Branch naming", "shipit/{task}", "Feature branch pattern"],
        ]}
      />
    </div>
  );
}

/* ─── MCP ────────────────────────────────────────────── */
export function DocsMcp() {
  const integrations = [
    { name: "GitHub", desc: "Repos, issues, PRs, actions" },
    { name: "Slack", desc: "Messages, channels, threads" },
    { name: "Linear", desc: "Issues, projects, cycles" },
    { name: "Figma", desc: "Design files, components" },
    { name: "Notion", desc: "Pages, databases, blocks" },
    { name: "Sentry", desc: "Errors, performance, alerts" },
    { name: "PostgreSQL", desc: "Database queries, schema" },
    { name: "Redis", desc: "Cache, pub/sub, streams" },
    { name: "Puppeteer", desc: "Browser automation" },
    { name: "Filesystem", desc: "File operations, search" },
    { name: "Memory", desc: "Persistent context store" },
    { name: "Brave Search", desc: "Web search results" },
  ];
  return (
    <div>
      <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">MCP Integrations</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
        28+ integrations via Model Context Protocol. Enable and configure them from{" "}
        <strong className="text-[var(--color-text-primary)]">Settings &rarr; Integrations</strong> or add custom servers in{" "}
        <strong className="text-[var(--color-text-primary)]">Settings &rarr; MCP Servers</strong>.
      </p>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {integrations.map((item) => (
          <div key={item.name} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-3">
            <div className="text-sm font-semibold text-[var(--color-text-primary)]">{item.name}</div>
            <div className="mt-1 text-xs text-[var(--color-text-secondary)]">{item.desc}</div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs leading-6 text-[var(--color-text-muted)]">
        Each integration can be enabled, configured with credentials, and tested with one click from Settings.
        Custom MCP servers support command (stdio), URL (SSE/HTTP), and SSH transports.
      </p>
    </div>
  );
}

/* ─── Notifications ──────────────────────────────────── */
export function DocsNotifications() {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">Notifications</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
        Delivery updates through Slack and Discord when tasks complete or fail.
        Configure both from the <strong className="text-[var(--color-text-primary)]">Settings</strong> panel.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-5">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
              <MessageSquare size={15} />
            </span>
            <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">Slack</h4>
          </div>
          <p className="mt-2.5 text-[13px] leading-6 text-[var(--color-text-secondary)]">
            Go to <strong className="text-[var(--color-text-primary)]">Settings &rarr; Slack</strong> to enter your bot token and channel.
            Test the connection with one click.
          </p>
        </div>
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-5">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
              <MessageSquare size={15} />
            </span>
            <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">Discord</h4>
          </div>
          <p className="mt-2.5 text-[13px] leading-6 text-[var(--color-text-secondary)]">
            Go to <strong className="text-[var(--color-text-primary)]">Settings &rarr; Discord</strong> to enter your webhook URL.
            Test the connection with one click.
          </p>
        </div>
      </div>

      <h4 className="mt-7 text-lg font-semibold text-[var(--color-text-primary)]">Notification Events</h4>
      <DocsTable
        headers={["Event", "Content"]}
        rows={[
          ["Task completed", "Summary, changed files, test results, commit hash"],
          ["Task failed", "Error details, step that failed, recovery suggestions"],
          ["Review findings", "Security issues, quality concerns, suggested fixes"],
          ["PR created", "PR link, title, description, branch info"],
        ]}
      />
    </div>
  );
}

/* ─── ShipIt CLI ─────────────────────────────────────── */
export function DocsCli() {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">ShipIt CLI</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
        Terminal-native coding agent — standalone or as the execution engine inside the workspace. Multi-provider routing across 100+ models.
      </p>
      <CodeBlock>{`# Interactive mode
shipit

# Single prompt
shipit "review this file and suggest improvements"

# With specific provider
shipit --provider openai --model gpt-4o "add error handling"

# With local model
shipit --provider ollama --model llama3.3 "explain this function"`}</CodeBlock>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <InfoCard icon={Bot} title="Multi-provider">Route to any model from Bedrock, OpenAI, Gemini, Groq, Ollama, Together AI, or OpenRouter.</InfoCard>
        <InfoCard icon={Terminal} title="Terminal-native">Full terminal UI with streaming, file previews, and interactive editing.</InfoCard>
        <InfoCard icon={FileCode2} title="Codebase-aware">Understands project structure, reads files, applies multi-file changes.</InfoCard>
        <InfoCard icon={Shield} title="40+ Tools">Built-in tools for file operations, search, git, security, testing, and more.</InfoCard>
      </div>
      <div className="mt-5 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-amber-600 dark:text-amber-300">
          <Settings size={14} />
          Provider Configuration
        </div>
        <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">
          Configure ShipIt CLI providers and credentials from{" "}
          <strong className="text-[var(--color-text-primary)]">Settings &rarr; ShipIt Providers</strong>.
          Select your default provider, enter credentials, and test the connection — all from the UI.
        </p>
      </div>
    </div>
  );
}

/* ─── API Reference ──────────────────────────────────── */
export function DocsApi() {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">API Reference</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
        REST endpoints for all workspace operations. The frontend communicates with these; they can also be called directly.
      </p>
      <h4 className="mt-7 text-lg font-semibold text-[var(--color-text-primary)]">Session Endpoints</h4>
      <DocsTable
        headers={["Method", "Endpoint", "Description"]}
        rows={[
          ["GET", <code className="text-xs font-mono">/api/sessions</code>, "List all sessions"],
          ["POST", <code className="text-xs font-mono">/api/sessions</code>, "Create a new session"],
          ["GET", <code className="text-xs font-mono">/api/sessions/{"{id}"}</code>, "Get session details"],
          ["DELETE", <code className="text-xs font-mono">/api/sessions/{"{id}"}</code>, "Delete a session"],
          ["POST", <code className="text-xs font-mono">/api/sessions/{"{id}"}/run</code>, "Execute a task"],
        ]}
      />
      <h4 className="mt-7 text-lg font-semibold text-[var(--color-text-primary)]">Other Endpoints</h4>
      <DocsTable
        headers={["Method", "Endpoint", "Description"]}
        rows={[
          ["GET", <code className="text-xs font-mono">/api/settings</code>, "Get current settings"],
          ["PUT", <code className="text-xs font-mono">/api/settings</code>, "Update settings"],
          ["GET", <code className="text-xs font-mono">/api/health</code>, "Health check"],
          ["POST", <code className="text-xs font-mono">/api/upload</code>, "Upload files for context"],
          ["GET", <code className="text-xs font-mono">/api/stream/{"{session_id}"}</code>, "SSE event stream"],
        ]}
      />
      <div className="mt-5 rounded-2xl border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)]">
          <Book size={14} />
          Interactive Docs
        </div>
        <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">
          FastAPI auto-generates interactive API docs at <code className="rounded bg-[var(--color-bg-secondary)] px-1.5 py-0.5 text-xs">/docs</code> (Swagger) and <code className="rounded bg-[var(--color-bg-secondary)] px-1.5 py-0.5 text-xs">/redoc</code>.
        </p>
      </div>
    </div>
  );
}

/* ─── Distribution ───────────────────────────────────── */
export function DocsDistribution() {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">Distribution & Packaging</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
        Distributed as a protected archive with encrypted Python bytecode and obfuscated JavaScript. No source code included.
      </p>
      <h4 className="mt-7 text-lg font-semibold text-[var(--color-text-primary)]">Building a Release</h4>
      <CodeBlock>{`./packaging/build.sh              # default version
./packaging/build.sh 1.2.3        # custom version
SKIP_OBFUSCATE=1 ./packaging/build.sh  # skip JS obfuscation`}</CodeBlock>
      <h4 className="mt-5 text-lg font-semibold text-[var(--color-text-primary)]">Protection Layers</h4>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <InfoCard icon={Lock} title="Python (PyArmor)">JIT-based encryption. Cannot be decompiled with standard tools.</InfoCard>
        <InfoCard icon={Code2} title="Frontend JS">Minified + obfuscated with control flow flattening and RC4 string encoding.</InfoCard>
        <InfoCard icon={Terminal} title="CLI JS">Compiled TypeScript with obfuscation. Source maps stripped.</InfoCard>
      </div>
      <h4 className="mt-7 text-lg font-semibold text-[var(--color-text-primary)]">Installation</h4>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-5">
          <Badge color="emerald">Mac / Linux</Badge>
          <CodeBlock>{`curl -fsSL https://shipiit.com/install.sh | bash`}</CodeBlock>
          <p className="text-xs text-[var(--color-text-secondary)]">Downloads, extracts, installs to ~/.shipit/, creates venv, adds to PATH.</p>
        </div>
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-5">
          <Badge color="sky">Windows</Badge>
          <CodeBlock>{`.\\install.ps1`}</CodeBlock>
          <p className="text-xs text-[var(--color-text-secondary)]">Installs to %LOCALAPPDATA%\ShipIt, adds to user PATH.</p>
        </div>
      </div>
      <h4 className="mt-7 text-lg font-semibold text-[var(--color-text-primary)]">Launcher</h4>
      <CodeBlock>{`shipitcli                    # default port 8000
shipitcli --port 9000        # custom port
shipitcli --host 0.0.0.0     # bind to all interfaces`}</CodeBlock>
    </div>
  );
}
