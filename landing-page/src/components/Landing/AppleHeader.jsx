import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import LandingThemeToggle from "./LandingThemeToggle";

const navLinks = [
  { id: "engines", label: "Engines" },
  { id: "features", label: "Features" },
  { id: "pipeline", label: "Pipeline" },
  { id: "cli", label: "Ship CLI" },
  { id: "use-cases", label: "Use Cases" },
  { id: "toolkit", label: "Toolkit" },
  { id: "start", label: "Start" },
];

export default function AppleHeader({ onJoinWaitlist }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ padding: scrolled ? "8px 5vw 0" : "12px 5vw 0" }}
    >
      <div
        className="mx-auto flex max-w-6xl items-center justify-between transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(10,10,10,0.72)"
            : "rgba(10,10,10,0.4)",
          backdropFilter: "blur(20px) saturate(1.4)",
          WebkitBackdropFilter: "blur(20px) saturate(1.4)",
          borderRadius: scrolled ? 16 : 20,
          border: `1px solid ${scrolled ? "rgba(255,255,255,0.08)" : "transparent"}`,
          padding: "0 24px",
          height: 52,
        }}
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-white no-underline"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img
            src="/shipit-icon.svg"
            alt="ShipIt"
            className="h-7 w-7 rounded-lg"
          />
          <span className="font-display text-sm font-semibold tracking-tight">
            Ship<span className="text-blue-400">It</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`rounded-full px-3 py-1.5 text-[13px] font-medium transition-all duration-200 ${
                activeSection === link.id
                  ? "bg-white/10 text-white"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <LandingThemeToggle />
          <button
            onClick={onJoinWaitlist}
            className="group flex items-center gap-1.5 rounded-full bg-[var(--color-accent)] px-4 py-2 text-[13px] font-semibold text-white transition-all hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)]"
          >
            <Sparkles size={12} />
            Waitlist
          </button>

          {/* Mobile hamburger */}
          <button
            className="flex items-center justify-center lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/8 p-4 lg:hidden"
          style={{
            background: "rgba(10,10,10,0.9)",
            backdropFilter: "blur(20px)",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="block w-full rounded-lg px-4 py-2.5 text-left text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
