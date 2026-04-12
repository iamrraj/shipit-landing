import { Compass, Sparkles } from "lucide-react";
import LandingThemeToggle from "./LandingThemeToggle";

const navItems = [
  { id: "overview", label: "Overview", iconType: "compass" },
  { id: "shipit", label: "Ship CLI", icon: "/shipit-icon.svg" },
  { id: "engines", label: "Engines" },
  { id: "workflow", label: "Workflow" },
  // { id: "start", label: "Start" },
  {
    id: "docs",
    label: "Docs",
    link: "https://docs.shipit.dev/",
  },
];

export default function LandingHeader({
  currentPage,

  onNavigate,
}) {
  return (
    <header className="sticky top-4 z-20 mb-6 rounded-[30px] border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-4 py-3 shadow-[0_24px_50px_-38px_rgba(15,23,42,0.42)] backdrop-blur-xl">
      <div className="flex flex-wrap items-center justify-between gap-4 xl:flex-nowrap">
        <div className="flex items-center gap-3">
          <img
            src="/shipit-icon.svg"
            alt="ShipIt"
            className="h-11 w-11 rounded-2xl shadow-[0_16px_32px_-18px_rgba(37,99,235,0.45)]"
          />
          <div className="md:flex hidden  flex-col">
            <div className="font-display text-base font-semibold">
              Ship
              <span className="ml-1 text-blue-500">It</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--color-text-muted)]">
              <span>Open-source AI developer workspace</span>
              <span className="hidden sm:inline">|</span>
              <span className="inline-flex items-center gap-1 rounded-full border border-[var(--color-accent)]/15 bg-[var(--color-accent)]/8 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                <Sparkles size={10} />4 engines, 70+ models
              </span>
            </div>
          </div>
        </div>

        <div className="hidden xl:flex items-center gap-1">
          {navItems?.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item?.link ? item.link : item.id)}
              className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full px-3 py-2 text-sm transition-all duration-300 ${
                currentPage === item.id
                  ? "bg-[var(--color-accent)] text-white shadow-[0_12px_30px_-18px_rgba(37,99,235,0.6)]"
                  : "text-[var(--color-text-secondary)] hover:bg-[var(--color-accent)]/5 hover:text-[var(--color-accent)]"
              }`}
            >
              {item?.iconType === "compass" && (
                <span
                  className={`inline-flex h-5 w-5 items-center justify-center rounded-full ${
                    currentPage === item.id
                      ? "bg-white/18 text-white"
                      : "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                  }`}
                >
                  <Compass size={12} />
                </span>
              )}
              {item?.icon && (
                <span
                  className={`inline-flex h-6 w-6 items-center justify-center rounded-xl ${
                    currentPage === item.id ? "bg-white/14" : "bg-transparent"
                  }`}
                >
                  <img src={item.icon} alt="" className="h-5 w-5 rounded-xl" />
                </span>
              )}
              {item?.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LandingThemeToggle />
        </div>
      </div>

      <div className="mt-3 flex gap-2 overflow-x-auto border-t border-[var(--color-border)]/70 pt-3 xl:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {navItems?.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onNavigate(item?.link ? item.link : item.id)}
            className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-medium transition ${
              currentPage === item.id
                ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
                : "border-[var(--color-border)] bg-[var(--color-bg-secondary)]/84 text-[var(--color-text-secondary)] hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)]"
            }`}
          >
            {item.iconType === "compass" && (
              <span
                className={`inline-flex h-4 w-4 items-center justify-center rounded-full ${
                  currentPage === item.id
                    ? "bg-white/18 text-white"
                    : "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                }`}
              >
                <Compass size={10} />
              </span>
            )}
            {item.icon && (
              <span
                className={`inline-flex h-5 w-5 items-center justify-center rounded-lg ${
                  currentPage === item.id ? "bg-white/14" : "bg-transparent"
                }`}
              >
                <img src={item.icon} alt="" className="h-4 w-4 rounded-lg" />
              </span>
            )}
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
}
