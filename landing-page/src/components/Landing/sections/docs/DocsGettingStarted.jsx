import { Code2, Globe, Play, Settings } from "lucide-react";
import { CodeBlock, InfoCard } from "./DocsHelpers";

export default function DocsGettingStarted() {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">Getting Started</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
        ShipIt is an AI developer workspace that runs locally on your machine. It connects a React frontend with a FastAPI backend,
        supporting four AI engines (Claude, Codex, Gemini, ShipIt CLI) through one unified interface.
      </p>

      <h4 className="mt-7 text-lg font-semibold text-[var(--color-text-primary)]">System Requirements</h4>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <InfoCard icon={Code2} title="Python 3.10+">Required for the backend server, pipeline engines, and all API endpoints.</InfoCard>
        <InfoCard icon={Globe} title="Node.js 18+">Required for the React frontend, ShipIt CLI, and MCP integrations.</InfoCard>
      </div>

      <h4 className="mt-7 text-lg font-semibold text-[var(--color-text-primary)]">Production Install</h4>
      <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">
        One command downloads, extracts, and installs everything. This is the recommended path for end users.
      </p>
      <CodeBlock>{`# Mac / Linux — one-line install
curl -fsSL https://shipiit.com/install.sh | bash

# Launch ShipIt
shipit`}</CodeBlock>
      <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">
        On Windows, download the release from shipiit.com and run <code className="rounded bg-[var(--color-bg-secondary)] px-1.5 py-0.5 text-xs font-mono">.\\install.ps1</code> in PowerShell.
      </p>

      <h4 className="mt-7 text-lg font-semibold text-[var(--color-text-primary)]">Developer Setup</h4>
      <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">
        Clone the repository and set up both backend and frontend for local development.
      </p>
      <CodeBlock>{`git clone https://github.com/your-org/shipit.git
cd shipit
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cd frontend && npm install && cd ..
./run_dev.sh --ui`}</CodeBlock>

      <div className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-300">
          <Play size={14} />
          After launching
        </div>
        <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">
          The UI opens at <code className="rounded bg-[var(--color-bg-secondary)] px-1.5 py-0.5 text-xs">http://localhost:5173</code> (dev)
          or <code className="rounded bg-[var(--color-bg-secondary)] px-1.5 py-0.5 text-xs">http://localhost:8000</code> (production).
          On first launch, you will be prompted for your license token.
        </p>
      </div>

      <div className="mt-5 rounded-2xl border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)]">
          <Settings size={14} />
          Configure from Settings
        </div>
        <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">
          Once activated, head to <strong className="text-[var(--color-text-primary)]">Settings</strong> to set up your AI engines,
          integrations, GitHub token, notifications, and more — all from the UI. No config files to edit.
        </p>
      </div>
    </div>
  );
}
