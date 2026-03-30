import { useEffect, useRef, useState } from "react";

/**
 * Scroll-driven sticky section hook.
 * Tracks scroll progress through a tall wrapper and returns the active panel index.
 *
 * @param {number} panelCount - Number of panels to crossfade through
 * @returns {{ wrapperRef, activeIndex, progress }}
 */
export default function useStickyScroll(panelCount) {
  const wrapperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // Skip on mobile
    const mq = window.matchMedia("(max-width: 767px)");
    if (mq.matches) return;

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = wrapper.getBoundingClientRect();
        const scrolled = -rect.top;
        const total = wrapper.offsetHeight - window.innerHeight;

        if (total <= 0) {
          ticking = false;
          return;
        }

        const p = Math.max(0, Math.min(1, scrolled / total));
        setProgress(p);

        const idx = Math.min(panelCount - 1, Math.floor(p * panelCount));
        setActiveIndex(idx);

        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [panelCount]);

  return { wrapperRef, activeIndex, progress };
}
