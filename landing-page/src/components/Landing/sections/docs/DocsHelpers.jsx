import { Check, Copy, Terminal } from "lucide-react";
import { useState } from "react";

/* ─── Syntax highlight helper ────────────────────────── */
function highlightLine(line) {
  // Comments
  if (/^\s*#/.test(line)) {
    return <span className="text-slate-500 italic">{line}</span>;
  }
  // Environment variable assignments
  if (/^[A-Z_]+=/.test(line)) {
    const eqIdx = line.indexOf("=");
    return (
      <>
        <span className="text-sky-300">{line.slice(0, eqIdx)}</span>
        <span className="text-slate-500">=</span>
        <span className="text-amber-300">{line.slice(eqIdx + 1)}</span>
      </>
    );
  }
  // Commands at start of line (first word)
  const cmdMatch = line.match(/^(\s*)(curl|git|cd|pip|npm|python|cp|bash|shipit|source|mkdir|chmod|wget|brew|apt|docker|echo|export|cat|touch)\b(.*)/);
  if (cmdMatch) {
    return (
      <>
        {cmdMatch[1]}
        <span className="text-emerald-400">{cmdMatch[2]}</span>
        <span className="text-slate-300">{cmdMatch[3]}</span>
      </>
    );
  }
  // Shell script run
  if (/^\s*\.\//.test(line)) {
    return <span className="text-sky-300">{line}</span>;
  }
  return <span className="text-slate-300">{line}</span>;
}

/* ─── Code block with terminal header ────────────────── */
export function CodeBlock({ children, copyable = true, title = "" }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(children).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const lines = typeof children === "string" ? children.split("\n") : [];

  return (
    <div className="group my-4 overflow-hidden rounded-xl border border-white/[0.06] bg-[#0b1120] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.4)]">
      {/* Terminal header */}
      <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#111827] px-4 py-2">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="h-[10px] w-[10px] rounded-full bg-[#ff5f57]/80" />
            <span className="h-[10px] w-[10px] rounded-full bg-[#febc2e]/80" />
            <span className="h-[10px] w-[10px] rounded-full bg-[#28c840]/80" />
          </div>
          {title ? (
            <span className="text-[11px] text-slate-500">{title}</span>
          ) : (
            <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
              <Terminal size={10} />
              terminal
            </span>
          )}
        </div>
        {copyable && (
          <button
            type="button"
            onClick={handleCopy}
            className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[10px] font-medium transition-all duration-200 ${
              copied
                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                : "border-white/[0.06] text-slate-500 hover:bg-white/[0.06] hover:text-slate-300"
            }`}
          >
            {copied ? <Check size={10} /> : <Copy size={10} />}
            {copied ? "Copied" : "Copy"}
          </button>
        )}
      </div>
      {/* Code content */}
      <pre className="overflow-x-auto px-4 py-3.5 text-[13px] leading-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <code>
          {lines.length > 0
            ? lines.map((line, i) => (
                <div key={i} className="flex">
                  <span className="mr-4 w-5 shrink-0 select-none text-right text-slate-600/60">{i + 1}</span>
                  <span>{highlightLine(line)}</span>
                </div>
              ))
            : <span className="text-slate-300">{children}</span>
          }
        </code>
      </pre>
    </div>
  );
}

/* ─── Badge pill ────────────────────────────────────── */
export function Badge({ children, color = "accent" }) {
  const colors = {
    accent: "border-[var(--color-accent)]/20 bg-[var(--color-accent)]/8 text-[var(--color-accent)]",
    emerald: "border-emerald-400/20 bg-emerald-400/10 text-emerald-600 dark:text-emerald-300",
    amber: "border-amber-400/20 bg-amber-400/10 text-amber-600 dark:text-amber-300",
    purple: "border-purple-400/20 bg-purple-400/10 text-purple-600 dark:text-purple-300",
    sky: "border-sky-400/20 bg-sky-400/10 text-sky-600 dark:text-sky-300",
  };
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] ${colors[color] || colors.accent}`}>
      {children}
    </span>
  );
}

/* ─── Info card ─────────────────────────────────────── */
export function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/84 p-4">
      <div className="flex items-center gap-2.5">
        {Icon && (
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
            <Icon size={15} />
          </span>
        )}
        <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">{title}</h4>
      </div>
      <div className="mt-2.5 text-[13px] leading-6 text-[var(--color-text-secondary)]">{children}</div>
    </div>
  );
}

/* ─── Table ─────────────────────────────────────────── */
export function DocsTable({ headers, rows }) {
  return (
    <div className="my-4 overflow-x-auto rounded-xl border border-[var(--color-border)]">
      <table className="w-full text-[13px]">
        <thead>
          <tr className="border-b border-[var(--color-border)] bg-[var(--color-bg-secondary)]/50">
            {headers.map((h) => (
              <th key={h} className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-[var(--color-border)] last:border-0 hover:bg-[var(--color-bg-secondary)]/30 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-2.5 text-[var(--color-text-secondary)]">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
