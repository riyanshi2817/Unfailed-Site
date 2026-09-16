import Link from 'next/link';
import Logo from './Logo';

interface NavbarProps {
  /**
   * If true, collapses navigation to Logo + 'Back to home' link.
   * Used on legal pages.
   */
  isLegal?: boolean;
}

export default function Navbar({ isLegal = false }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-nearBlack/90 backdrop-blur-md border-b border-gold/20">
      <nav
        className="w-full max-w-[1360px] mx-auto px-6 md:px-10 lg:px-16 h-20 flex items-center justify-between"
        aria-label="Main Navigation"
      >
        <Logo variant={isLegal ? 'unfailed-symbol' : 'unfailed'} />

        {isLegal ? (
          <div>
            <Link
              href="/"
              className="group inline-flex items-center gap-2 font-dmsans text-body-sm font-medium tracking-wide text-gray hover:text-gold transition-colors duration-200 rounded-interactive focus:outline-none focus-visible:ring-1 focus-visible:ring-gold"
            >
              <span className="transition-transform duration-200 group-hover:-translate-x-0.5">←</span>
              <span>Back to home</span>
            </Link>
          </div>
        ) : (
          <div className="flex items-center space-x-6 md:space-x-10">
            <Link
              href="/"
              className="font-dmsans text-body-sm font-medium tracking-wide text-gray hover:text-gold transition-colors duration-200 rounded-interactive focus:outline-none focus-visible:ring-1 focus-visible:ring-gold"
            >
              Company
            </Link>
            <Link
              href="/leadership"
              className="font-dmsans text-body-sm font-medium tracking-wide text-gray hover:text-gold transition-colors duration-200 rounded-interactive focus:outline-none focus-visible:ring-1 focus-visible:ring-gold"
            >
              Leadership
            </Link>
            <Link
              href="/contact"
              className="font-dmsans text-body-sm font-medium tracking-wide text-gray hover:text-gold transition-colors duration-200 rounded-interactive focus:outline-none focus-visible:ring-1 focus-visible:ring-gold"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
