import { Globe, Shield, Terminal } from "lucide-react";
import { CodeBlock, DocsTable } from "./DocsHelpers";

export default function DocsLicense() {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-[var(--color-text-primary)]">License Activation</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-text-secondary)]">
        ShipIt requires a valid license token to operate. Tokens are issued through your dashboard at shipit.dev
        and validated against the license server on first use and periodically thereafter.
      </p>

      <h4 className="mt-7 text-lg font-semibold text-[var(--color-text-primary)]">Activation Flow</h4>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        {[
          { icon: Globe, title: "1. Get Token", desc: "Sign in at shipit.dev, go to Dashboard, and copy your license token." },
          { icon: Terminal, title: "2. Enter Token", desc: "Paste the token when prompted on first launch, or use the activation UI in the browser." },
          { icon: Shield, title: "3. Validated", desc: "Token is validated remotely and cached locally. Re-validation happens every 6 hours." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-4 text-center">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
              <Icon size={18} />
            </div>
            <div className="mt-3 text-sm font-semibold text-[var(--color-text-primary)]">{title}</div>
            <p className="mt-1 text-xs leading-5 text-[var(--color-text-secondary)]">{desc}</p>
          </div>
        ))}
      </div>

      <h4 className="mt-7 text-lg font-semibold text-[var(--color-text-primary)]">Token Format</h4>
      <p className="mt-2 text-sm leading-7 text-[var(--color-text-secondary)]">
        All tokens begin with <code className="rounded bg-[var(--color-bg-secondary)] px-1.5 py-0.5 text-xs font-mono">shipit_</code> followed by a unique key.
        The token is stored in <code className="rounded bg-[var(--color-bg-secondary)] px-1.5 py-0.5 text-xs font-mono">config/license.json</code> after activation.
      </p>
      <CodeBlock copyable={false}>{`{
  "token_key": "shipit_abc123...",
  "user_email": "you@example.com",
  "activated_at": "2026-03-22T10:00:00Z",
  "last_validated": "2026-03-22T10:00:00Z",
  "end_date": "2026-04-22T10:00:00Z",
  "valid": true
}`}</CodeBlock>

      <h4 className="mt-7 text-lg font-semibold text-[var(--color-text-primary)]">Validation Behavior</h4>
      <DocsTable
        headers={["Scenario", "Behavior"]}
        rows={[
          ["First launch", "Prompts for token, validates remotely, stores locally"],
          ["Within 6 hours", "Uses cached result, no network call"],
          ["After 6 hours", "Re-validates against the license server"],
          ["Server unreachable", "24-hour grace period from last successful check"],
          ["Token expired", "Blocks API access, shows activation prompt"],
          ["Token revoked", "Blocks immediately on next validation"],
        ]}
      />

      <h4 className="mt-7 text-lg font-semibold text-[var(--color-text-primary)]">License API Endpoints</h4>
      <DocsTable
        headers={["Endpoint", "Method", "Description"]}
        rows={[
          [<code className="text-xs font-mono">/api/license/activate</code>, "POST", "Activate a new token"],
          [<code className="text-xs font-mono">/api/license/status</code>, "GET", "Check current license state"],
          [<code className="text-xs font-mono">/api/license/deactivate</code>, "POST", "Remove current license"],
        ]}
      />
    </div>
  );
}
