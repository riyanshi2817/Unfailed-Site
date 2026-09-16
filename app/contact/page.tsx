import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StatementBlock from '@/components/StatementBlock';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Unfailed Pvt Ltd.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Block 1 (StatementBlock, nearBlack) */}
        <StatementBlock
          bgColor="nearBlack"
          eyebrow="CONTACT"
          heading="Get in touch."
          hasDivider={true}
        />

        {/* Block 2 (darkGray, simple two-row list, centered) */}
        <section className="w-full bg-darkGray py-16 md:py-24">
          <div className="w-full max-w-[1360px] mx-auto px-6 md:px-10 lg:px-16">
            <div className="max-w-xl mx-auto">
              <Reveal>
                <div className="space-y-6 font-dmsans p-8 rounded-card border border-gold/20 bg-nearBlack/40">
                  {/* Row 1: Email */}
                  <div className="flex flex-col sm:flex-row items-center justify-between py-3 border-b border-darkGray/60 gap-2">
                    <span className="text-eyebrow uppercase text-gray font-medium">
                      Email
                    </span>
                    <a
                      href="mailto:[PLACEHOLDER EMAIL]"
                      className="text-gold hover:text-lightGold transition-colors duration-200 text-body-lg font-medium rounded-interactive focus:outline-none focus-visible:ring-1 focus-visible:ring-gold"
                    >
                      [PLACEHOLDER EMAIL]
                    </a>
                  </div>

                  {/* Row 2: Registered Office */}
                  <div className="flex flex-col sm:flex-row items-center justify-between py-3 border-b border-darkGray/60 gap-2 text-center sm:text-right">
                    <span className="text-eyebrow uppercase text-gray font-medium shrink-0">
                      Registered Office
                    </span>
                    <span className="text-white text-body-md">
                      [REGISTERED OFFICE PLACEHOLDER]
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
