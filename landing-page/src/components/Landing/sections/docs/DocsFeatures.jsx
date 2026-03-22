import {
  Bot,
  CheckCircle2,
  Code2,
  Command,
  Database,
  FileCode2,
  Layers3,
  Lock,
  Monitor,
  ScanSearch,
  Server,
  Settings,
  Shield,
  Terminal,
  TestTube2,
  Zap,
} from "lucide-react";
import { Badge, CodeBlock, DocsTable, InfoCard } from "./DocsHelpers";

/* ─── Chat Interface ────────────────────────────────── */
export function DocsChatInterface() {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">
        Chat Interface
      </h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
        The chat interface is the primary way to interact with ShipIt. It
        supports real-time streaming, session continuity, file previews, inline
        diffs, and rich context from your codebase.
      </p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <InfoCard icon={Zap} title="Real-time Streaming">
          Responses stream via SSE. You see tokens appear in real-time as the
          engine works.
        </InfoCard>
        <InfoCard icon={Database} title="Session Continuity">
          Sessions are saved and can be resumed. Switch between active sessions
          from the sidebar.
        </InfoCard>
        <InfoCard icon={FileCode2} title="File Previews">
          Inline file previews with syntax highlighting. Click to expand full
          diffs.
        </InfoCard>
        <InfoCard icon={Layers3} title="Multi-project Paths">
          Work across multiple projects simultaneously. Use @mentions to
          reference files.
        </InfoCard>
      </div>
      <h4 className="mt-7 text-lg font-semibold text-[var(--color-text-primary)]">
        Message Types
      </h4>
      <DocsTable
        headers={["Type", "Description"]}
        rows={[
          [
            "Text messages",
            "Natural language prompts describing tasks, questions, or instructions",
          ],
          [
            "File uploads",
            "Drag and drop files for context — images, code files, documents",
          ],
          [
            "@file mentions",
            "Reference specific files in the codebase for targeted operations",
          ],
          [
            "Slash commands",
            "Quick actions like /review, /test, /fix that trigger specific workflows",
          ],
          [
            "Prompt templates",
            "Pre-built task blueprints for common development operations",
          ],
        ]}
      />
    </div>
  );
}

/* ─── Engines ────────────────────────────────────────── */
export function DocsEngines() {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">
        AI Engines
      </h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
        ShipIt supports four AI engines. Each can be selected per-session and
        the pipeline works identically regardless of which is active. All
        engines are configured through the{" "}
        <strong className="text-[var(--color-text-primary)]">Settings</strong>{" "}
        panel — install, authenticate, and test with a single click.
      </p>

      <div className="mt-5 rounded-2xl border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)]">
          <Settings size={14} />
          Setup via Settings
        </div>
        <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">
          Go to{" "}
          <strong className="text-[var(--color-text-primary)]">
            Settings &rarr; General
          </strong>{" "}
          to select your default engine and model. Each engine can be installed,
          authenticated, and tested directly from the UI — no API keys or config
          files needed.
        </p>
      </div>

      <div className="rounded-2xl mt-5 border border-amber-400/20 bg-amber-500/5 p-5">
        <Badge color="amber">ShipIt CLI</Badge>
        <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
          Multi-provider CLI routing across 100+ models from Bedrock, OpenAI,
          Google, Groq, Ollama, Together AI, and OpenRouter.
        </p>
        <div className="mt-2 flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
          <CheckCircle2 size={13} className="text-emerald-500" />
          Configure providers and credentials from Settings &rarr; ShipIt
          Providers tab.
        </div>
        <DocsTable
          headers={["Provider", "Models"]}
          rows={[
            ["AWS Bedrock", "Nova, Claude, Llama 4, Mistral, DeepSeek, Qwen"],
            ["OpenAI", "GPT-4o, GPT-4.1, O3, O4 Mini"],
            ["Groq", "Llama 3.3 70B, Mixtral 8x7B"],
            ["Ollama", "Llama 3.3, Code Llama, DeepSeek, Qwen, Mistral"],
            ["Together AI", "Llama 4 Scout, DeepSeek R1, Qwen 2.5 Coder"],
          ]}
        />
      </div>

      <div className="mt-5 grid gap-4">
        {[
          {
            badge: "Claude Code CLI",
            color: "purple",
            desc: "Anthropic Claude — strongest reasoning and planning. Sonnet 4.6, Opus 4.6, Haiku 4.5.",
            setup: "One-click install and OAuth login via Settings.",
          },
          {
            badge: "OpenAI Codex CLI",
            color: "sky",
            desc: "OpenAI models optimized for code generation. GPT-5.4, GPT-5.4 Mini, GPT-5.3 Codex.",
            setup:
              "Install and authenticate via subscription login or API key — both options in Settings.",
          },
          {
            badge: "Google Gemini CLI",
            color: "sky",
            desc: "Gemini multimodal reasoning. 3.1 Pro Preview, 3 Flash Preview, 2.5 Pro, 2.5 Flash.",
            setup:
              "Install and authenticate via OAuth login or API key from Settings.",
          },
        ].map((engine) => (
          <div
            key={engine.badge}
            className={`rounded-2xl border border-${engine.color}-400/20 bg-${engine.color}-500/5 p-5`}
          >
            <Badge color={engine.color}>{engine.badge}</Badge>
            <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
              {engine.desc}
            </p>
            <div className="mt-2 flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
              <CheckCircle2 size={13} className="text-emerald-500" />
              {engine.setup}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Pipeline ───────────────────────────────────────── */
export function DocsPipeline() {
  const steps = [
    {
      s: "01",
      t: "Parse Task",
      d: "Turns a rough instruction into a structured execution brief.",
      a: "Prompt intent, goals, constraints",
    },
    {
      s: "02",
      t: "Validate Paths",
      d: "Checks repositories, project boundaries, and target paths.",
      a: "Repo map, project detection, safe targets",
    },
    {
      s: "03",
      t: "Implement",
      d: "Applies changes across frontend, backend, and shared modules.",
      a: "Code changes, file edits, diffs",
    },
    {
      s: "04",
      t: "Code Review",
      d: "Reviews behavior, quality, and security.",
      a: "Review notes, quality findings, security checks",
    },
    {
      s: "05",
      t: "Auto-Fix",
      d: "Feeds review findings back and repairs automatically.",
      a: "Fix patches, refinement passes",
    },
    {
      s: "06",
      t: "Run Tests",
      d: "Executes framework-aware test commands.",
      a: "Test runs, logs, pass/fail output",
    },
    {
      s: "07",
      t: "Report & Notify",
      d: "Summarizes results, commits, and sends updates.",
      a: "Reports, commits, notifications",
    },
  ];
  return (
    <div>
      <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">
        Pipeline
      </h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
        ShipIt executes tasks through a structured 7-step pipeline. Each step
        produces visible artifacts you can inspect.
      </p>
      <div className="mt-5 space-y-4">
        {steps?.map((item) => (
          <div
            key={item.s}
            className="flex gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent)]/10 text-sm font-bold text-[var(--color-accent)]">
              {item.s}
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold text-[var(--color-text-primary)]">
                {item.t}
              </div>
              <p className="mt-1 text-sm leading-6 text-[var(--color-text-secondary)]">
                {item.d}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {item.a.split(", ").map((a) => (
                  <Badge key={a} color="emerald">
                    {a}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Slash Commands ─────────────────────────────────── */
export function DocsSlashCommands() {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">
        Slash Commands
      </h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
        Shorthand actions that trigger specific workflows. Type them directly in
        the chat input. You can also create custom commands from{" "}
        <strong className="text-[var(--color-text-primary)]">
          Settings &rarr; Commands
        </strong>
        .
      </p>
      <DocsTable
        headers={["Command", "Description"]}
        rows={[
          [
            <code className="text-xs font-mono text-[var(--color-accent)]">
              /review
            </code>,
            "Run a code review on the current workspace or specific files",
          ],
          [
            <code className="text-xs font-mono text-[var(--color-accent)]">
              /test
            </code>,
            "Execute tests and show results inline",
          ],
          [
            <code className="text-xs font-mono text-[var(--color-accent)]">
              /fix
            </code>,
            "Auto-fix issues found in the last review or test run",
          ],
          [
            <code className="text-xs font-mono text-[var(--color-accent)]">
              /rollback
            </code>,
            "Undo the last set of changes made by the engine",
          ],
          [
            <code className="text-xs font-mono text-[var(--color-accent)]">
              /explain
            </code>,
            "Get a detailed explanation of selected code",
          ],
          [
            <code className="text-xs font-mono text-[var(--color-accent)]">
              /pr
            </code>,
            "Create a pull request from the current branch",
          ],
          [
            <code className="text-xs font-mono text-[var(--color-accent)]">
              /search
            </code>,
            "Search across the codebase for patterns",
          ],
          [
            <code className="text-xs font-mono text-[var(--color-accent)]">
              /changelog
            </code>,
            "Generate a changelog from recent commits",
          ],
          [
            <code className="text-xs font-mono text-[var(--color-accent)]">
              /docs
            </code>,
            "Generate or update documentation",
          ],
        ]}
      />
      <CodeBlock copyable={false}>{`/review src/api/server.py
/test --backend
/fix
/pr --title "Add user authentication"`}</CodeBlock>
    </div>
  );
}

/* ─── Templates ──────────────────────────────────────── */
export function DocsTemplates() {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">
        Prompt Templates
      </h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
        Reusable task blueprints that pre-fill the prompt with structured
        instructions for common development operations.
      </p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <InfoCard icon={Server} title="Backend">
          API endpoints, database models, middleware, service layers.
        </InfoCard>
        <InfoCard icon={Monitor} title="Frontend">
          Components, pages, hooks, state management, styling.
        </InfoCard>
        <InfoCard icon={TestTube2} title="Testing">
          Unit tests, integration tests, E2E tests, fixtures.
        </InfoCard>
        <InfoCard icon={Shield} title="Security">
          OWASP checks, dependency audits, input validation.
        </InfoCard>
        <InfoCard icon={Code2} title="Refactoring">
          Code cleanup, pattern extraction, performance optimization.
        </InfoCard>
        <InfoCard icon={Layers3} title="Full-stack">
          End-to-end features spanning frontend, backend, and shared modules.
        </InfoCard>
      </div>
    </div>
  );
}

/* ─── Security ───────────────────────────────────────── */
export function DocsSecurity() {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">
        Security Scanning
      </h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
        Built-in security review as part of the pipeline. Optional Aikido
        Security integration provides deeper scanning.
      </p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <InfoCard icon={ScanSearch} title="OWASP Top 10">
          Checks for injection, XSS, broken auth, sensitive data exposure.
        </InfoCard>
        <InfoCard icon={Lock} title="Secrets Detection">
          Flags hardcoded API keys, passwords, tokens in code changes.
        </InfoCard>
      </div>
      <h4 className="mt-7 text-lg font-semibold text-[var(--color-text-primary)]">
        Aikido Security Integration
      </h4>
      <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">
        Connect your Aikido account from{" "}
        <strong className="text-[var(--color-text-primary)]">
          Settings &rarr; Aikido
        </strong>
        . Enter your client credentials, set the minimum severity filter, and
        test the connection — all from the UI.
      </p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <InfoCard icon={Shield} title="Credential Setup">
          Enter your Aikido client ID and secret in Settings. Test the
          connection with one click.
        </InfoCard>
        <InfoCard icon={ScanSearch} title="Severity Filter">
          Set the minimum severity level (critical, high, medium, low) to
          control which issues surface.
        </InfoCard>
      </div>
    </div>
  );
}

/* ─── Testing ────────────────────────────────────────── */
export function DocsTesting() {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">
        Test Automation
      </h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
        The pipeline auto-detects your test framework and runs relevant tests
        after implementation.
      </p>
      <DocsTable
        headers={["Framework", "Language", "Detection"]}
        rows={[
          ["pytest", "Python", "pytest.ini, setup.cfg, pyproject.toml"],
          ["Jest", "JavaScript", "jest.config.js, package.json"],
          ["Vitest", "JavaScript", "vitest.config.ts, vite.config.ts"],
          ["Go test", "Go", "go.mod, *_test.go files"],
          ["Cargo test", "Rust", "Cargo.toml"],
          ["Django test", "Python", "manage.py, django in requirements"],
        ]}
      />
      <CodeBlock copyable={false}>{`/test
/test --backend
/test --frontend
/test tests/test_api.py`}</CodeBlock>
    </div>
  );
}
