import React from 'react';

/**
 * Editorial section: a hairline rule, then a two-column grammar on desktop
 * (heading + intro on the left, content on the right). `surface` picks the
 * ground: default paper, tinted, or the forest closing field.
 *
 * `split={false}` stacks the heading above full-width content, for sections
 * whose content needs the whole measure (card grids, forms).
 */
export function Section({
  id,
  title,
  intro,
  surface = 'default', // 'default' | 'tinted' | 'close'
  split = true,
  className = '',
  children,
}) {
  const ground =
    surface === 'close'
      ? 'bg-close text-close-ink'
      : surface === 'tinted'
      ? 'bg-surface-2 text-ink'
      : 'bg-paper text-ink';

  const rule = surface === 'close' ? 'border-close-ink/20' : 'border-rule/15';
  const introColour = surface === 'close' ? 'text-close-ink/80' : 'text-ink-2';

  const heading = (
    <div data-reveal>
      <h2 className="font-display text-[1.875rem] sm:text-4xl lg:text-[2.5rem] text-balance">
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-base sm:text-[1.0625rem] leading-relaxed max-w-[52ch] ${introColour}`}>
          {intro}
        </p>
      )}
    </div>
  );

  return (
    <section id={id} className={`relative w-full border-t ${rule} ${ground} ${className}`}>
      <div className="frame py-16 sm:py-24">
        {split ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">{heading}</div>
            </div>
            <div className="lg:col-span-8 min-w-0">{children}</div>
          </div>
        ) : (
          <>
            <div className="mb-10 sm:mb-14 max-w-3xl">{heading}</div>
            {children}
          </>
        )}
      </div>
    </section>
  );
}

export default Section;
