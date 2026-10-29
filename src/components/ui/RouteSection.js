import React, { useEffect, useRef } from 'react';

const LINE_MAP = {
  cobalt: {
    bg: 'bg-line-cobalt',
    text: 'text-on-cobalt',
    ring: 'ring-line-cobalt',
  },
  vermilion: {
    bg: 'bg-line-vermilion',
    text: 'text-on-vermilion',
    ring: 'ring-line-vermilion',
  },
  sunflower: {
    bg: 'bg-line-sunflower',
    text: 'text-on-sunflower',
    ring: 'ring-line-sunflower',
  },
  green: {
    bg: 'bg-line-green',
    text: 'text-on-green',
    ring: 'ring-line-green',
  },
  violet: {
    bg: 'bg-line-violet',
    text: 'text-on-violet',
    ring: 'ring-line-violet',
  },
  magenta: {
    bg: 'bg-line-magenta',
    text: 'text-on-magenta',
    ring: 'ring-line-magenta',
  },
  paper: {
    bg: 'bg-paper',
    text: 'text-ink',
    ring: 'ring-paper',
  },
};

export function RouteSection({
  id,
  line = 'cobalt',
  code = 'M1',
  surface = 'default', // 'default' | 'drench' | 'terminus' | 'tinted'
  isLast = false,
  className = '',
  children,
}) {
  const sectionRef = useRef(null);
  const fillRef = useRef(null);
  const lineTokens = LINE_MAP[line] || LINE_MAP.cobalt;

  useEffect(() => {
    const section = sectionRef.current;
    const fill = fillRef.current;
    if (!section || !fill) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      fill.style.transform = 'scaleY(1)';
      return;
    }

    let rafId;
    const updateRail = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const triggerPoint = window.innerHeight * 0.58;
        const raw = (triggerPoint - rect.top) / Math.max(rect.height, 1);
        const progress = Math.min(1, Math.max(0, raw));
        fill.style.transform = `scaleY(${progress})`;
      });
    };

    window.addEventListener('scroll', updateRail, { passive: true });
    window.addEventListener('resize', updateRail);
    updateRail();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', updateRail);
      window.removeEventListener('resize', updateRail);
    };
  }, []);

  const surfaceStyles =
    surface === 'drench'
      ? 'bg-drench text-drench-ink'
      : surface === 'terminus'
      ? 'bg-terminus text-terminus-ink night'
      : surface === 'tinted'
      ? 'bg-surface-2 text-ink'
      : 'bg-paper text-ink';

  const trackBg =
    surface === 'drench'
      ? 'bg-white/25'
      : surface === 'terminus'
      ? 'bg-white/15'
      : 'bg-ink/15';

  const fillBg =
    surface === 'drench' ? 'bg-line-sunflower' : lineTokens.bg;

  const nodeRing =
    surface === 'drench'
      ? 'bg-ink text-white shadow-[0_0_0_4px_#FFFFFF]'
      : surface === 'terminus'
      ? `${lineTokens.bg} ${lineTokens.text} shadow-[0_0_0_4px_#F2F2EE]`
      : `${lineTokens.bg} ${lineTokens.text} shadow-[0_0_0_4px_rgb(var(--ink-rgb))]`;

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`relative w-full py-20 sm:py-28 ${surfaceStyles} ${className}`}
    >
      <div className="frame relative">
        {/* Continuous vertical transit rail */}
        <div
          aria-hidden="true"
          className="rail-x absolute top-0 bottom-0 -translate-x-1/2 flex flex-col items-center pointer-events-none select-none"
        >
          {/* Base unvisited track */}
          <div
            className={`w-2 sm:w-2.5 ${
              isLast ? 'h-16' : 'h-full'
            } rounded-full ${trackBg} overflow-hidden relative`}
          >
            <div
              ref={fillRef}
              className={`w-full h-full origin-top ${fillBg}`}
              style={{ transform: 'scaleY(0)' }}
            />
          </div>

          {/* Station Roundel Badge at top of section */}
          <div
            className={`absolute top-2 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-display text-xs sm:text-sm tracking-tight ${nodeRing}`}
          >
            {code}
          </div>
        </div>

        {children}
      </div>
    </section>
  );
}

export default RouteSection;

