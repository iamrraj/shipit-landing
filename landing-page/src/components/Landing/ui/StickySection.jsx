import useStickyScroll from "../hooks/useStickyScroll";

/**
 * Reusable scroll-driven sticky section.
 * Wraps multiple panels that crossfade as the user scrolls.
 *
 * @param {Object} props
 * @param {Array} props.panels - Array of { content: ReactNode } objects
 * @param {ReactNode} props.indicators - Optional step indicator UI
 * @param {string} props.id - Section id for navigation
 * @param {string} props.className - Extra classes on outer wrapper
 */
export default function StickySection({
  panels,
  indicators,
  id,
  className = "",
}) {
  const panelCount = panels.length;
  const { wrapperRef, activeIndex } = useStickyScroll(panelCount);
  const wrapperHeight = `${(panelCount + 1) * 100}vh`;

  return (
    <div
      id={id}
      ref={wrapperRef}
      className={`sticky-wrapper ${className}`}
      style={{ height: wrapperHeight }}
    >
      <div className="sticky-inner px-5 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-6xl">
          {/* Step indicators */}
          {indicators && (
            <div className="mb-8 flex gap-2">
              {panels.map((_, i) => (
                <div
                  key={i}
                  className={`step-bar ${i === activeIndex ? "is-active" : ""}`}
                />
              ))}
            </div>
          )}

          {/* Panels */}
          <div className="relative" style={{ minHeight: "60vh" }}>
            {panels.map((panel, i) => (
              <div
                key={i}
                className={`sticky-panel ${i === activeIndex ? "is-active" : ""}`}
              >
                {panel.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
