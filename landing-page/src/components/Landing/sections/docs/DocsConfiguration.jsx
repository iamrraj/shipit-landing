import { Bot, GitBranch, Key, Layers3, Monitor, Plug, Settings, Sliders } from "lucide-react";
import { InfoCard } from "./DocsHelpers";

export default function DocsConfiguration() {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">Configuration</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
        All configuration in ShipIt is managed through the built-in <strong className="text-[var(--color-text-primary)]">Settings panel</strong> in the UI.
        No manual file editing or environment variables required — just open Settings and configure everything visually.
      </p>

      <div className="mt-6 rounded-2xl border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 p-5">
        <div className="flex items-center gap-2.5 text-sm font-semibold text-[var(--color-accent)]">
          <Settings size={16} />
          Open Settings
        </div>
        <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">
          Click the <strong className="text-[var(--color-text-primary)]">gear icon</strong> in the sidebar or use the keyboard shortcut to open the Settings panel.
          Changes are saved instantly and take effect immediately.
        </p>
      </div>

      <h4 className="mt-8 text-lg font-semibold text-[var(--color-text-primary)]">Settings Tabs</h4>
      <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">
        The Settings panel is organized into dedicated tabs, each focused on a specific area of configuration.
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <InfoCard icon={Sliders} title="General">
          Select your default AI engine, choose a model, configure project paths, and set execution preferences.
        </InfoCard>
        <InfoCard icon={Bot} title="AI Engines">
          Install, authenticate, and test each engine directly from the UI. One-click login for Claude, Codex, and Gemini — or enter API keys.
        </InfoCard>
        <InfoCard icon={Key} title="ShipIt Providers">
          Configure multi-provider credentials for ShipIt CLI — AWS Bedrock, OpenAI, Gemini, Groq, Ollama, Together AI, OpenRouter, and more.
        </InfoCard>
        <InfoCard icon={GitBranch} title="GitHub">
          Enter your Personal Access Token, toggle auto-push, auto-PR, and set the default base branch.
        </InfoCard>
        <InfoCard icon={Plug} title="Integrations">
          Enable and configure 28+ MCP integrations — Slack, Linear, Jira, Figma, Notion, Sentry, and more — all from one place.
        </InfoCard>
        <InfoCard icon={Monitor} title="Appearance">
          Switch between light, dark, and auto themes. Choose your preferred font for the chat interface.
        </InfoCard>
        <InfoCard icon={Layers3} title="MCP Servers">
          Add custom MCP servers via command (stdio), URL (SSE/HTTP), or SSH. Test connections with one click.
        </InfoCard>
        <InfoCard icon={Settings} title="Commands">
          View built-in slash commands and create custom ones with your own prompts.
        </InfoCard>
      </div>

      <h4 className="mt-8 text-lg font-semibold text-[var(--color-text-primary)]">How It Works</h4>
      <div className="mt-4 space-y-3">
        {[
          { step: "01", title: "Open Settings", desc: "Click the gear icon in the sidebar to open the Settings panel." },
          { step: "02", title: "Navigate to a Tab", desc: "Select the area you want to configure — engines, integrations, GitHub, notifications, etc." },
          { step: "03", title: "Configure & Test", desc: "Fill in credentials, toggle options, and use the built-in test buttons to verify connections." },
          { step: "04", title: "Saved Automatically", desc: "All changes persist across sessions. Settings sync to the backend and take effect immediately." },
        ].map((item) => (
          <div key={item.step} className="flex gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent)]/10 text-sm font-bold text-[var(--color-accent)]">
              {item.step}
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold text-[var(--color-text-primary)]">{item.title}</div>
              <p className="mt-1 text-sm leading-6 text-[var(--color-text-secondary)]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
