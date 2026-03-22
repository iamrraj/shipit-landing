import { ArrowRight, CheckCircle2, Sparkles, X } from "lucide-react";
import { useState } from "react";

export default function WaitlistModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !name) return;

    setIsSubmitting(true);
    setError("");

    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8001";
      const res = await fetch(`${API_URL}/api/waitlist/join/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
      } else if (res.status === 409) {
        setError(data.message || "This email is already on the waitlist.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Could not connect to server. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setEmail("");
    setName("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-[fade-rise_0.3s_ease-out]"
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-lg animate-[fade-rise_0.4s_ease-out] overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_40px_100px_-50px_rgba(37,99,235,0.35)] backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--color-accent)]/[0.08] blur-[50px]" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-indigo-500/[0.06] blur-[50px]" />

        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)] transition-all duration-200 hover:bg-[var(--color-bg-secondary)] hover:text-[var(--color-text-primary)] cursor-pointer"
        >
          <X size={16} />
        </button>

        <div className="relative z-10 p-7 sm:p-9">
          {!submitted ? (
            <>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  <Sparkles size={13} />
                  Early Access
                </div>

                <h2 className="font-display mt-5 text-2xl font-semibold leading-tight text-[var(--color-text-primary)] sm:text-3xl">
                  <span className="animate-gradient-shimmer bg-[linear-gradient(135deg,var(--color-text-primary),var(--color-accent),#6366F1,var(--color-text-primary))] bg-clip-text text-transparent">
                    Join the waitlist
                  </span>
                </h2>

                <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-[var(--color-text-secondary)]">
                  Be among the first to experience ShipIt — the open-source AI
                  developer workspace. We'll notify you when it's ready.
                </p>
              </div>

              {error && (
                <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2.5 text-sm text-red-600 dark:text-red-400">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                <div>
                  <label
                    htmlFor="waitlist-name"
                    className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]"
                  >
                    Name <span className="text-[var(--color-accent)]">*</span>
                  </label>
                  <input
                    id="waitlist-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/60 px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)]/50 outline-none transition-all duration-200 focus:border-[var(--color-accent)]/50 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="waitlist-email"
                    className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]"
                  >
                    Email <span className="text-[var(--color-accent)]">*</span>
                  </label>
                  <input
                    id="waitlist-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/60 px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)]/50 outline-none transition-all duration-200 focus:border-[var(--color-accent)]/50 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.1)]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !email || !name}
                  className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_35px_-24px_rgba(37,99,235,0.65)] transition-all duration-300 hover:bg-[var(--color-accent-hover)] hover:shadow-[0_24px_50px_-20px_rgba(37,99,235,0.5)] hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Joining...
                    </>
                  ) : (
                    <>
                      Join Waitlist
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-[11px] text-[var(--color-text-muted)]">
                {["No spam", "Free forever", "Open source"].map((item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-emerald-500" />
                    {item}
                  </span>
                ))}
              </div>
            </>
          ) : (
            <div className="py-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
                <CheckCircle2
                  size={32}
                  className="text-emerald-500"
                />
              </div>

              <h2 className="font-display mt-5 text-2xl font-semibold text-[var(--color-text-primary)]">
                You're on the list!
              </h2>

              <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-[var(--color-text-secondary)]">
                Thanks{name ? `, ${name}` : ""}! We'll reach out to{" "}
                <strong className="text-[var(--color-text-primary)]">
                  {email}
                </strong>{" "}
                when early access is ready.
              </p>

              <button
                type="button"
                onClick={handleClose}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3 text-sm font-semibold text-[var(--color-text-secondary)] transition-all duration-300 hover:bg-[var(--color-bg-secondary)]"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
