import React from 'react';
import Reveal from './Reveal';

interface StatementBlockProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  bgColor?: 'nearBlack' | 'darkGray';
  hasDivider?: boolean;
  children?: React.ReactNode;
  className?: string;
}

/**
 * StatementBlock:
 * Full-bleed, centered, large heading + one sentence.
 * Alternates background between nearBlack and darkGray for scroll rhythm.
 * Spacing: 4rem-6rem (64px-96px) vertical block padding.
 * Section Dividers: 1px hairline rgba(201,168,76,0.20) between sections.
 */
export default function StatementBlock({
  eyebrow,
  heading,
  description,
  bgColor = 'nearBlack',
  hasDivider = true,
  children,
  className = '',
}: StatementBlockProps) {
  const bgClass = bgColor === 'darkGray' ? 'bg-darkGray' : 'bg-nearBlack';

  return (
    <section
      className={`w-full ${bgClass} py-16 md:py-24 transition-colors ${
        hasDivider ? 'border-b border-gold/20' : ''
      } ${className}`}
    >
      <div className="w-full max-w-[1360px] mx-auto px-6 md:px-10 lg:px-16 text-center">
        <Reveal>
          {eyebrow && (
            <div className="font-dmsans text-eyebrow text-gold mb-4 uppercase tracking-eyebrow select-none">
              {eyebrow}
            </div>
          )}
          <h2 className="font-sora text-display-hero-mobile md:text-display-hero text-white mb-6">
            {heading}
          </h2>
          {description && (
            <p className="font-dmsans text-body-lg text-gray max-w-2xl mx-auto">
              {description}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
