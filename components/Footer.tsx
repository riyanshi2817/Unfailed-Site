import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="w-full bg-nearBlack border-t border-gold/20 pt-16 pb-12">
      <div className="w-full max-w-[1360px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Top Multi-column Section */}
        <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-6 lg:gap-10 mb-16">
          <div className="md:col-span-4 lg:col-span-6 space-y-3">
            <Logo variant="unfailed-symbol" linkToHome={true} />
            <p className="font-dmsans text-body-sm text-gray max-w-sm">
              We build credential infrastructure for institutions. Engineering how universities issue, and others verify, trusted digital credentials.
            </p>
          </div>

          {/* Company Column */}
          <div className="md:col-span-2 lg:col-span-3">
            <h4 className="font-sora font-semibold text-eyebrow uppercase text-white mb-4">
              Company
            </h4>
            <ul className="space-y-3 font-dmsans text-body-sm">
              <li>
                <Link
                  href="/leadership"
                  className="text-gray hover:text-gold transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/leadership"
                  className="text-gray hover:text-gold transition-colors duration-200"
                >
                  Leadership
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray hover:text-gold transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="md:col-span-2 lg:col-span-3">
            <h4 className="font-sora font-semibold text-eyebrow uppercase text-white mb-4">
              Legal
            </h4>
            <ul className="space-y-3 font-dmsans text-body-sm">
              <li>
                <Link
                  href="/legal/privacy"
                  className="text-gray hover:text-gold transition-colors duration-200"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/terms"
                  className="text-gray hover:text-gold transition-colors duration-200"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-darkGray/60 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-dmsans text-caption text-gray">
          <div className="space-y-1">
            <p>CIN: <span className="text-white/80 font-mono">U62099BR2026PTC086842</span></p>
            <p>Registered Office: <span className="text-white/80">C/o Gobardhan Pandey, Nooranganj Sasaram, Gandhi Path, Sasaram, Rohtas, Bihar, India, 821115</span></p>
          </div>
          <div className="text-gray/70">
            © {new Date().getFullYear()} Unfailed Private Limited. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
