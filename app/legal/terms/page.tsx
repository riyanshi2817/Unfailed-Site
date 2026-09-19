import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StatementBlock from '@/components/StatementBlock';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Unfailed Private Limited.',
};

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isLegal={true} />

      <main className="flex-1">
        {/* Block 1 (StatementBlock, nearBlack) */}
        <StatementBlock
          bgColor="nearBlack"
          eyebrow="LEGAL"
          heading="Terms of Service"
          hasDivider={true}
        />

        {/* Standard document layout, NOT block-style: single column, max-width ~700px */}
        <div className="w-full bg-nearBlack py-16 md:py-24">
          <article className="max-w-[700px] mx-auto px-6 font-dmsans text-gray text-body-md space-y-10">
            <Reveal>
              <div className="text-caption font-mono text-gray/60 uppercase tracking-wider mb-6">
                Last updated: [DATE PLACEHOLDER]
              </div>

              {/* Acceptance of Terms */}
              <section className="space-y-3">
                <h3 className="font-sora text-headline-sm text-white">
                  Acceptance of Terms
                </h3>
                <p>
                  By accessing this website, you agree to these Terms of Service. If you do not agree, please do not use this website.
                </p>
              </section>

              {/* Use of This Website */}
              <section className="space-y-3 pt-6 border-t border-darkGray/40">
                <h3 className="font-sora text-headline-sm text-white">
                  Use of This Website
                </h3>
                <p>
                  This website provides general information about Unfailed Private Limited. You may browse this site for personal, non-commercial, informational purposes. You may not copy, reproduce, or redistribute the content of this site for commercial purposes without our prior written permission.
                </p>
              </section>

              {/* Intellectual Property */}
              <section className="space-y-3 pt-6 border-t border-darkGray/40">
                <h3 className="font-sora text-headline-sm text-white">
                  Intellectual Property
                </h3>
                <p>
                  All trademarks, logos, and content on this website — including the Unfailed and SWALT names, marks, and associated branding — are the property of Unfailed Private Limited unless otherwise noted, and may not be used without permission.
                </p>
              </section>

              {/* External Links Disclaimer */}
              <section className="space-y-3 pt-6 border-t border-darkGray/40">
                <h3 className="font-sora text-headline-sm text-white">
                  External Links Disclaimer
                </h3>
                <p>
                  This site links to external websites, including swalt.co, which are operated independently. We are not responsible for the content, availability, or practices of any linked external site.
                </p>
              </section>

              {/* No Warranty */}
              <section className="space-y-3 pt-6 border-t border-darkGray/40">
                <h3 className="font-sora text-headline-sm text-white">
                  No Warranty
                </h3>
                <p>
                  This website and its content are provided &ldquo;as is,&rdquo; without warranties of any kind, express or implied. We do not guarantee that the site will be error-free, uninterrupted, or free of inaccuracies.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section className="space-y-3 pt-6 border-t border-darkGray/40">
                <h3 className="font-sora text-headline-sm text-white">
                  Limitation of Liability
                </h3>
                <p>
                  To the fullest extent permitted by law, Unfailed Private Limited shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website.
                </p>
              </section>

              {/* Governing Law */}
              <section className="space-y-3 pt-6 border-t border-darkGray/40">
                <h3 className="font-sora text-headline-sm text-white">
                  Governing Law
                </h3>
                <p>
                  These Terms are governed by the laws of India, without regard to conflict of law principles.
                </p>
              </section>

              {/* Changes to These Terms */}
              <section className="space-y-3 pt-6 border-t border-darkGray/40">
                <h3 className="font-sora text-headline-sm text-white">
                  Changes to These Terms
                </h3>
                <p>
                  We may revise these Terms of Service from time to time. Continued use of this website after changes are posted constitutes acceptance of the revised Terms.
                </p>
              </section>

              {/* Contact Us */}
              <section className="space-y-3 pt-6 border-t border-darkGray/40">
                <h3 className="font-sora text-headline-sm text-white">
                  Contact Us
                </h3>
                <p>
                  For questions about these Terms, contact us at{' '}
                  <a
                    href="mailto:sppandey5102005@gmail.com"
                    className="text-gold hover:text-lightGold transition-colors underline underline-offset-4 rounded-interactive focus:outline-none focus-visible:ring-1 focus-visible:ring-gold"
                  >
                    sppandey5102005@gmail.com
                  </a>
                  .
                </p>
                <div className="pt-4 text-body-sm text-gray space-y-1">
                  <p className="font-semibold text-white">Unfailed Private Limited</p>
                  <p>Registered Office: C/o Gobardhan Pandey, Nooranganj Sasaram, Gandhi Path, Sasaram, Rohtas, Bihar, India, 821115</p>
                  <p>CIN: U62099BR2026PTC086842</p>
                </div>
              </section>
            </Reveal>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
