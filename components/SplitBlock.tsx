import React from 'react';
import Link from 'next/link';
import Reveal from './Reveal';

interface SplitBlockProps {
  eyebrow: string;
  heading: string;
  description?: string;
  bgColor?: 'nearBlack' | 'darkGray';
  isClickable?: boolean;
  href?: string;
  isExternal?: boolean;
  reverse?: boolean;
  visual?: React.ReactNode;
  hasDivider?: boolean;
  children?: React.ReactNode;
  className?: string;
}

/**
 * SplitBlock:
 * Text on one side, logo/icon on the other.
 * Optional entire-block-clickable variant with gold-dim border (border-gold/20)
 * that brightens to full gold (hover:border-gold) on hover with a small arrow icon.
 * Card internal padding: 2rem (p-8). Border radius: 4px (rounded-card).
 * Vertical block padding: 4rem-6rem (64px-96px).
 * Hairline section divider: 1px rgba(201,168,76,0.20) between sections.
 */
export default function SplitBlock({
  eyebrow,
  heading,
  description,
  bgColor = 'nearBlack',
  isClickable = false,
  href,
  isExternal = false,
  reverse = false,
  visual,
  hasDivider = true,
  children,
  className = '',
}: SplitBlockProps) {
  const bgClass = bgColor === 'darkGray' ? 'bg-darkGray' : 'bg-nearBlack';

  const content = (
    <div
      className={`relative w-full ${
        isClickable
          ? 'border border-gold/20 hover:border-gold transition-all duration-300 p-8 rounded-card group block cursor-pointer'
          : 'p-0'
      }`}
    >
      {/* Top right arrow for clickable variant */}
      {isClickable && (
        <div className="absolute top-6 right-6 md:top-8 md:right-8 text-gold/60 group-hover:text-gold transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 17L17 7M17 7H7M17 7V17"
            />
          </svg>
        </div>
      )}

      {/* Grid: 4-col mobile, 8-col tablet, 12-col desktop with respective gutters */}
      <div
        className={`grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-10 items-center ${
          reverse ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* Text side */}
        <div className={`md:col-span-8 lg:col-span-7 space-y-3 ${reverse ? 'lg:order-2' : ''}`}>
          <div className="font-dmsans text-eyebrow text-gold uppercase tracking-eyebrow select-none">
            {eyebrow}
          </div>
          <h3 className="font-sora text-headline-lg-mobile md:text-headline-lg text-white">
            {heading}
          </h3>
          {children}
          {description && (
            <p className="font-dmsans text-body-lg text-gray pt-1">
              {description}
            </p>
          )}
        </div>

        {/* Visual / Icon side */}
        <div
          className={`md:col-span-8 lg:col-span-5 flex items-center justify-center lg:justify-end ${
            reverse ? 'lg:order-1' : ''
          }`}
        >
          {visual}
        </div>
      </div>
    </div>
  );

  return (
    <section
      className={`w-full ${bgClass} py-16 md:py-24 transition-colors ${
        hasDivider ? 'border-b border-gold/20' : ''
      } ${className}`}
    >
      <div className="w-full max-w-[1360px] mx-auto px-6 md:px-10 lg:px-16">
        <Reveal>
          {isClickable && href ? (
            isExternal ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus:outline-none focus-visible:ring-1 focus-visible:ring-gold rounded-card"
                aria-label={`${heading} - ${eyebrow} (opens in a new tab)`}
              >
                {content}
              </a>
            ) : (
              <Link
                href={href}
                className="block focus:outline-none focus-visible:ring-1 focus-visible:ring-gold rounded-card"
                aria-label={`${heading} - ${eyebrow}`}
              >
                {content}
              </Link>
            )
          ) : (
            content
          )}
        </Reveal>
      </div>
    </section>
  );
}
