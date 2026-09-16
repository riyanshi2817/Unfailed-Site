import React from 'react';
import Reveal from './Reveal';

interface LeadershipBlockProps {
  eyebrow: string;
  name: string;
  line?: string;
  bgColor?: 'nearBlack' | 'darkGray';
  hasDivider?: boolean;
  className?: string;
}

/**
 * LeadershipBlock:
 * Name as heading, eyebrow role label, optional one line.
 * Spacing: 4rem-6rem (64px-96px) vertical padding.
 * Hairline section divider: 1px rgba(201,168,76,0.20) between sections.
 */
export default function LeadershipBlock({
  eyebrow,
  name,
  line,
  bgColor = 'darkGray',
  hasDivider = true,
  className = '',
}: LeadershipBlockProps) {
  const bgClass = bgColor === 'darkGray' ? 'bg-darkGray' : 'bg-nearBlack';

  return (
    <section
      className={`w-full ${bgClass} py-16 md:py-24 transition-colors ${
        hasDivider ? 'border-b border-gold/20' : ''
      } ${className}`}
    >
      <div className="w-full max-w-[1360px] mx-auto px-6 md:px-10 lg:px-16">
        <Reveal>
          <div className="font-dmsans text-eyebrow text-gold mb-3 uppercase tracking-eyebrow select-none">
            {eyebrow}
          </div>
          <h2 className="font-sora text-headline-lg-mobile md:text-headline-lg text-white mb-3">
            {name}
          </h2>
          {line && (
            <p className="font-dmsans text-body-lg text-gray max-w-2xl">
              {line}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
