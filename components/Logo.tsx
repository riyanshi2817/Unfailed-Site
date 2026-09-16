import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  /**
   * - 'unfailed': UF symbol mark next to "UNFAILED" in Sora text (default, for navbar)
   * - 'unfailed-symbol': UF monogram symbol mark only (for footer, legal collapsed nav, etc.)
   * - 'unfailed-lockup': Full lockup (UF symbol stacked above UNFAILED wordmark)
   * - 'swalt': Interlocking S-mark logo for SWALT (homepage tile)
   */
  variant?: 'unfailed' | 'unfailed-symbol' | 'unfailed-lockup' | 'swalt';
  /**
   * Additional CSS classes.
   */
  className?: string;
  /**
   * Whether the logo links back to the home page. Defaults to true.
   */
  linkToHome?: boolean;
}

export default function Logo({
  variant = 'unfailed',
  className = '',
  linkToHome = true,
}: LogoProps) {
  let logoContent: React.ReactNode;

  if (variant === 'unfailed') {
    logoContent = (
      <span className="inline-flex items-center gap-2.5">
        <Image
          src="/logo/unfailed-symbol-white.png"
          alt="Unfailed Logo Mark"
          width={32}
          height={27}
          className="w-auto h-6 md:h-7 object-contain select-none transition-transform duration-200 group-hover:scale-105"
          priority
        />
        <span className="font-sora font-semibold text-sm md:text-base tracking-tight text-white uppercase select-none transition-colors duration-200 group-hover:text-gold">
          UNFAILED
        </span>
      </span>
    );
  } else if (variant === 'unfailed-symbol') {
    logoContent = (
      <Image
        src="/logo/unfailed-symbol-white.png"
        alt="Unfailed Logo Mark"
        width={34}
        height={28}
        className="w-auto h-7 md:h-8 object-contain select-none transition-transform duration-200 group-hover:scale-105"
        priority
      />
    );
  } else if (variant === 'unfailed-lockup') {
    logoContent = (
      <Image
        src="/logo/unfailed-lockup-white.png"
        alt="Unfailed Logo Lockup"
        width={110}
        height={62}
        className="w-auto h-9 md:h-10 object-contain select-none transition-transform duration-200 group-hover:scale-105"
        priority
      />
    );
  } else {
    // 'swalt'
    logoContent = (
      <Image
        src="/logo/swalt-symbol.svg"
        alt="SWALT Logo Mark"
        width={48}
        height={50}
        className="w-auto h-11 md:h-12 object-contain select-none transition-transform duration-300 group-hover:scale-105"
        priority
      />
    );
  }

  if (linkToHome) {
    return (
      <Link
        href="/"
        className={`inline-flex items-center group rounded-interactive focus:outline-none focus-visible:ring-1 focus-visible:ring-gold ${className}`}
        aria-label="Unfailed Pvt Ltd"
      >
        {logoContent}
      </Link>
    );
  }

  return <div className={`inline-flex items-center justify-center ${className}`}>{logoContent}</div>;
}
