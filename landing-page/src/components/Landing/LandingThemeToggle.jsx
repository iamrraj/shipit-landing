import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Monitor, Moon, Sun } from "lucide-react";
import useStore from "../../store/useStore";

const themeOptions = [
  {
    value: "light",
    label: "Light",
    description: "Bright canvas and crisp contrast.",
    icon: Sun,
  },
  {
    value: "auto",
    label: "Auto",
    description: "Matches your system preference.",
    icon: Monitor,
  },
  {
    value: "dark",
    label: "Dark",
    description: "Dimmed tones for late sessions.",
    icon: Moon,
  },
];

export default function LandingThemeToggle() {
  const { theme, setTheme } = useStore();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const activeOption =
    themeOptions.find((option) => option.value === theme) ?? themeOptions[1];
  const ActiveIcon = activeOption.icon;

  useEffect(() => {
    function handlePointerDown(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-semibold text-[var(--color-text-secondary)] transition hover:bg-[var(--color-bg-secondary)]"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
          <ActiveIcon size={15} />
        </span>
        <span className="text-[var(--color-text-primary)]">
          {activeOption.label}
        </span>

        <ChevronDown
          size={15}
          className={`text-[var(--color-text-muted)] transition duration-200 ${
            open ? "rotate-180 text-[var(--color-text-primary)]" : ""
          }`}
        />
      </button>

      <div
        className={`absolute right-0 top-[calc(100%+0.55rem)] z-30 w-72 origin-top-right rounded-[24px] border border-[var(--color-border)] bg-[var(--color-surface)] p-2 shadow-[0_24px_50px_-38px_rgba(15,23,42,0.4)] backdrop-blur-xl transition duration-200 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="px-3 pb-2 pt-2">
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
            Theme
          </div>
          <p className="mt-1 text-xs leading-5 text-[var(--color-text-muted)]">
            Choose the landing page appearance.
          </p>
        </div>

        <div className="space-y-1">
          {themeOptions?.map((option) => {
            const Icon = option.icon;
            const active = theme === option.value;

            return (
              <button
                key={option.value}
                type="button"
                role="menuitemradio"
                aria-checked={active}
                onClick={() => {
                  setTheme(option.value);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-[18px] px-3 py-3 text-left transition ${
                  active
                    ? "bg-[var(--color-accent)]/8 ring-1 ring-[var(--color-accent)]/15"
                    : "hover:bg-[var(--color-bg-secondary)]"
                }`}
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full transition ${
                    active
                      ? "bg-[var(--color-accent)] text-white"
                      : "bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)]"
                  }`}
                >
                  <Icon size={16} />
                </span>

                <span className="min-w-0 flex-1">
                  <span
                    className={`block text-sm font-semibold ${
                      active
                        ? "text-[var(--color-accent)]"
                        : "text-[var(--color-text-primary)]"
                    }`}
                  >
                    {option.label}
                  </span>
                  <span className="mt-0.5 block text-xs leading-5 text-[var(--color-text-muted)]">
                    {option.description}
                  </span>
                </span>

                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full transition ${
                    active
                      ? "bg-[var(--color-accent)] text-white"
                      : "border border-transparent text-transparent"
                  }`}
                >
                  <Check size={12} strokeWidth={3} />
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
