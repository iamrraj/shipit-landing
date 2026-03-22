import {
  BellRing,
  Bot,
  Braces,
  BriefcaseBusiness,
  Command,
  Eye,
  FileCode2,
  GraduationCap,
  GitBranchPlus,
  Github,
  Layers3,
  MonitorCog,
  PersonStanding,
  Plug,
  Rocket,
  ScanSearch,
  Shield,
  Sparkles,
  TimerReset,
  TerminalSquare,
  TestTube2,
  Users,
  Workflow,
} from "lucide-react";

export const heroStats = [
  { value: "11", label: "structured pipeline steps" },
  { value: "28+", label: "MCP integrations and presets" },
  { value: "329 + 207", label: "backend and frontend tests" },
  { value: "4", label: "AI engines with fallback support" },
];

export const offerGroups = [
  {
    icon: Bot,
    title: "AI execution",
    desc: "Claude Code CLI, OpenAI Codex CLI, Google Gemini CLI, and ShipIt (multi-provider: Bedrock, OpenAI, Gemini, Ollama, Groq, and more) with full codebase context and multi-file editing.",
  },
  {
    icon: Workflow,
    title: "Structured orchestration",
    desc: "A production pipeline handles parsing, validation, implementation, review, fixes, tests, commits, and reporting.",
  },
  {
    icon: GitBranchPlus,
    title: "Git-safe shipping",
    desc: "Local-only by default, with feature branches, optional push and PR creation when you explicitly enable it.",
  },
  {
    icon: Plug,
    title: "Connected tooling",
    desc: "MCP servers, GitHub, Slack, Discord, Linear, databases, browser tooling, and more from one interface.",
  },
];

export const featureCards = [
  {
    icon: TerminalSquare,
    title: "Chat Interface",
    desc: "Real-time SSE streaming, session continuity, inline file previews, diff viewing, uploads, @mentions, and multi-project paths.",
  },
  {
    icon: Command,
    title: "Slash Commands",
    desc: "/review, /test, /fix, /rollback, /explain, /pr, /search, /changelog, and /docs for fast operator workflows.",
  },
  {
    icon: Sparkles,
    title: "Prompt Templates",
    desc: "Reusable task blueprints for backend, frontend, testing, security, refactors, and full-stack work.",
  },
  {
    icon: Github,
    title: "Repo Operations",
    desc: "Paste a GitHub URL, clone the repository, work against branches, and keep repo access inside the same flow.",
  },
  {
    icon: ScanSearch,
    title: "Review + Security",
    desc: "Quality review, bug detection, OWASP-oriented scanning, and optional Aikido-backed checks.",
  },
  {
    icon: TestTube2,
    title: "Test Automation",
    desc: "Supports pytest, Jest, Vitest, Go, Cargo, and framework-aware test execution based on detected project shape.",
  },
  {
    icon: BellRing,
    title: "Notifications",
    desc: "Slack Block Kit and Discord webhook summaries keep the team informed when tasks finish or fail.",
  },
  {
    icon: MonitorCog,
    title: "Dark + Light UI",
    desc: "Theme-aware interface with a modern React + Zustand + Tailwind frontend and live activity visibility.",
  },
];

export const pipelineSteps = [
  {
    phase: "01",
    title: "Parse Task",
    summary:
      "Turns a rough instruction into a structured execution brief with intent, scope, and expected output.",
    detail:
      "The pipeline starts by understanding what you asked for so later stages operate on a clean, explicit task shape instead of ambiguous chat text.",
    artifacts: "Prompt intent, goals, constraints",
  },
  {
    phase: "02",
    title: "Validate Paths",
    summary:
      "Checks repositories, project boundaries, and target paths before touching code.",
    detail:
      "This reduces accidental edits and makes multi-project work safer by verifying the workspace matches the requested change.",
    artifacts: "Repo map, project detection, safe targets",
  },
  {
    phase: "03",
    title: "Implement Projects",
    summary:
      "Applies changes across frontend, backend, and shared modules using full codebase context.",
    detail:
      "The execution engine writes real code, keeps related files aligned, and handles cross-repo context where the task spans multiple surfaces.",
    artifacts: "Code changes, file edits, diffs",
  },
  {
    phase: "04",
    title: "Code Review",
    summary:
      "Reviews behavior, quality, and security before the work moves forward.",
    detail:
      "Instead of treating generation as final output, ShipIt inserts a review stage that looks for regressions, weak assumptions, and risky patterns.",
    artifacts: "Review notes, quality findings, security checks",
  },
  {
    phase: "05",
    title: "Auto-Fix Issues",
    summary:
      "Feeds review findings back into the pipeline and repairs what can be corrected automatically.",
    detail:
      "This closes the loop between review and implementation so the system can improve its own output before handing it back to you.",
    artifacts: "Fix patches, refinement passes",
  },
  {
    phase: "06",
    title: "Run Tests",
    summary:
      "Executes framework-aware test commands to verify the change in context.",
    detail:
      "The pipeline supports multiple test ecosystems and uses the detected project shape to choose practical validation steps.",
    artifacts: "Test runs, logs, pass/fail output",
  },
  {
    phase: "07",
    title: "Report & Notify",
    summary:
      "Summarizes the result, prepares delivery details, and sends updates through connected tools.",
    detail:
      "Once the code is stable, the system can commit locally, prepare branch-ready output, and notify Slack, Discord, or other integrated services.",
    artifacts: "Reports, commits, notifications",
  },
];

export const architectureLayers = [
  {
    icon: Eye,
    title: "React + Vite frontend",
    desc: "Chat UI, Zustand state, settings, session management, diff viewers, and streaming output.",
  },
  {
    icon: Braces,
    title: "FastAPI + SSE bridge",
    desc: "REST endpoints for sessions, settings, uploads, integrations, and live pipeline events.",
  },
  {
    icon: Layers3,
    title: "Pipeline engines",
    desc: "TaskParser, ProjectDetector, CodeEngine (Claude, Codex, Gemini, ShipIt), CodeReviewer, AutoFixer, TestRunner, and ReportGenerator.",
  },
  {
    icon: Shield,
    title: "Clients and integrations",
    desc: "Git, Slack, Discord, Aikido, MCP servers, and external services wired into a single delivery flow.",
  },
];

export const stackItems = [
  "Python 3.9+",
  "FastAPI + Uvicorn",
  "React 19 + Vite 6",
  "Zustand 5",
  "Tailwind CSS 4",
  "Claude Code CLI",
  "OpenAI Codex CLI",
  "Google Gemini CLI",
  "ShipIt CLI (multi-provider)",
  "Slack + Discord",
  "Aikido Security",
  "GitHub + MCP",
];

export const quickStartSteps = [
  "Clone the repo and install backend and frontend dependencies.",
  "Configure `config/.env` with GitHub, Slack, and other tokens you need.",
  "Run `./run_dev.sh --ui` and open the UI at `localhost:5173`.",
  "Enter the workspace and describe the change you want in plain English.",
];

export const quickStartCode = `git clone https://github.com/your-org/shipit.git
cd shipit
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cd frontend && npm install && cd ..
cp config/.env.template config/.env
./run_dev.sh --ui`;

export const openSourcePromises = [
  {
    icon: FileCode2,
    title: "Readable architecture",
    desc: "The codebase is separated into engines, clients, API endpoints, utilities, tests, and a React UI instead of one giant agent script.",
  },
  {
    icon: Rocket,
    title: "Built for contribution",
    desc: "The product already exposes clear seams for adding templates, commands, integrations, notifications, and UI surfaces.",
  },
];

export const audienceCards = [
  {
    icon: PersonStanding,
    title: "Personal projects",
    desc: "Turn rough ideas into shipped features faster, keep your context in one place, and avoid losing time switching between docs, tests, git, and issue notes.",
  },
  {
    icon: GraduationCap,
    title: "Learning and experiments",
    desc: "Use the visible pipeline to understand how tasks become code, how reviews work, and how architecture decisions play out across a real repository.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional delivery",
    desc: "Use one operator surface for implementation, review, security scanning, testing, commit flow, and notifications across connected services.",
  },
  {
    icon: Users,
    title: "Teams and contributors",
    desc: "Make the system easier to adopt by showing the path from prompt to result instead of hiding work behind opaque agent behavior.",
  },
];

export const benefitRows = [
  {
    title: "Save setup time",
    desc: "One workspace for prompts, logs, context files, repo operations, reviews, test output, and delivery status.",
  },
  {
    title: "Reduce context switching",
    desc: "The same UI covers code generation, slash commands, templates, security review, and integration-driven notifications.",
  },
  {
    title: "Make agent behavior inspectable",
    desc: "The frontend surfaces steps, events, diffs, previews, and activity so users can trust what the system is doing.",
  },
  {
    title: "Keep shipping under control",
    desc: "Local-only defaults, explicit push and PR behavior, and visible branch/report flow keep automation practical instead of reckless.",
  },
];

export const supportedEngines = [
  {
    name: "Claude Code CLI",
    color: "text-purple-600",
    bg: "bg-purple-50 dark:bg-purple-950/30",
    border: "border-purple-200 dark:border-purple-800",
    desc: "Anthropic Claude — strongest reasoning and planning.",
    models: ["Sonnet 4.6", "Opus 4.6", "Haiku 4.5"],
  },
  {
    name: "OpenAI Codex CLI",
    color: "text-blue-600",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-200 dark:border-blue-800",
    desc: "OpenAI models — optimized for code generation.",
    models: ["GPT-5.4", "GPT-5.4 Mini", "GPT-5.3 Codex"],
  },
  {
    name: "Google Gemini CLI",
    color: "text-cyan-600",
    bg: "bg-cyan-50 dark:bg-cyan-950/30",
    border: "border-cyan-200 dark:border-cyan-800",
    desc: "Google Gemini — multimodal reasoning and code generation.",
    models: ["Gemini 3.1 Pro Preview", "Gemini 3 Flash Preview", "Gemini 2.5 Pro", "Gemini 2.5 Flash", "Gemini 2.5 Flash Lite"],
  },
  {
    name: "ShipIt CLI",
    color: "text-orange-600",
    bg: "bg-orange-50 dark:bg-orange-950/30",
    border: "border-orange-200 dark:border-orange-800",
    desc: "Your personal ShipIt CLI with multi-provider routing across 100+ models.",
    providers: [
      { name: "AWS Bedrock", models: "Nova, Claude, Llama 4, Mistral, GPT-OSS, DeepSeek, Qwen" },
      { name: "OpenAI", models: "GPT-4o, GPT-4.1, O3, O4 Mini" },
      { name: "Google Gemini", models: "Gemini 3.1 Pro, 3 Flash, 2.5 Pro/Flash" },
      { name: "Vertex AI", models: "Gemini 3.1 Pro, 3 Flash, 2.5 Pro/Flash" },
      { name: "Groq", models: "Llama 3.3 70B, Mixtral 8x7B" },
      { name: "Ollama", models: "Llama 3.3, Code Llama, DeepSeek, Qwen, Mistral" },
      { name: "Together AI", models: "Llama 4 Scout, DeepSeek R1, Qwen 2.5 Coder" },
      { name: "OpenRouter", models: "GPT-4.1, Claude 3.7, Gemini 2.5 Pro" },
    ],
  },
];

export const detailSections = [
  {
    title: "How it works in practice",
    desc: "You describe a task, the parser structures it, the project detector understands the workspace, the engine implements changes, the reviewer checks quality and security, the auto-fixer corrects issues, then tests, commits, and notifications finish the flow.",
  },
  {
    title: "Why it helps personal work",
    desc: "It acts like a structured co-developer: faster feature delivery, fewer missed test steps, less forgotten context, and clearer progress when working alone.",
  },
  {
    title: "Why it helps professional work",
    desc: "It supports repeatable workflows, connected tools, review visibility, and cleaner collaboration across frontend, backend, and shared packages.",
  },
];
