import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StatementBlock from '@/components/StatementBlock';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Unfailed Private Limited.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isLegal={true} />

      <main className="flex-1">
        {/* Block 1 (StatementBlock, nearBlack) */}
        <StatementBlock
          bgColor="nearBlack"
          eyebrow="LEGAL"
          heading="Privacy Policy"
          hasDivider={true}
        />

        {/* Standard document layout, NOT block-style: single column, max-width ~700px */}
        <div className="w-full bg-nearBlack py-16 md:py-24">
          <article className="max-w-[700px] mx-auto px-6 font-dmsans text-gray text-body-md space-y-10">
            <Reveal>
              <div className="text-caption font-mono text-gray/60 uppercase tracking-wider mb-6">
                Last updated: [DATE PLACEHOLDER]
              </div>

              {/* Overview */}
              <section className="space-y-3">
                <h3 className="font-sora text-headline-sm text-white">
                  Overview
                </h3>
                <p>
                  This Privacy Policy explains how Unfailed Private Limited (&ldquo;Unfailed,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) handles information in connection with this website. This policy applies only to this website (unfailed.co or equivalent domain) — it does not cover SWALT or any other product operated by Unfailed, which will have its own separate privacy policy.
                </p>
              </section>

              {/* Information We Collect */}
              <section className="space-y-3 pt-6 border-t border-darkGray/40">
                <h3 className="font-sora text-headline-sm text-white">
                  Information We Collect
                </h3>
                <p>
                  This website does not include account creation, sign-up forms, or any mechanism for you to submit personal information directly to us through the site itself.
                </p>
                <p>
                  We may collect limited, non-identifying technical information through standard web analytics — such as pages visited, browser type, device type, and approximate location derived from IP address — for the purpose of understanding site usage. We do not knowingly collect names, email addresses, phone numbers, or other personal identifiers through this website.
                </p>
                <p>
                  If you choose to contact us directly by email (see Contact section below), any information you include in that email — such as your name or email address — is handled as ordinary business correspondence and is not otherwise processed or stored beyond what is needed to respond to you.
                </p>
              </section>

              {/* Cookies and Analytics */}
              <section className="space-y-3 pt-6 border-t border-darkGray/40">
                <h3 className="font-sora text-headline-sm text-white">
                  Cookies and Analytics
                </h3>
                <p>
                  This site may use basic, privacy-respecting analytics tools to understand general traffic patterns. These do not track you across other websites and do not build an advertising profile. We do not use this site to serve targeted advertising.
                </p>
              </section>

              {/* Third-Party Links */}
              <section className="space-y-3 pt-6 border-t border-darkGray/40">
                <h3 className="font-sora text-headline-sm text-white">
                  Third-Party Links
                </h3>
                <p>
                  This site contains links to external websites, including swalt.co. Once you leave this site via such a link, that destination&rsquo;s own privacy policy applies — we are not responsible for the privacy practices of external sites.
                </p>
              </section>

              {/* Data Security */}
              <section className="space-y-3 pt-6 border-t border-darkGray/40">
                <h3 className="font-sora text-headline-sm text-white">
                  Data Security
                </h3>
                <p>
                  We take reasonable measures to keep this website itself secure. Because this site does not collect or store personal data beyond limited analytics, there is no personal data repository associated with this website to secure beyond that.
                </p>
              </section>

              {/* Children's Privacy */}
              <section className="space-y-3 pt-6 border-t border-darkGray/40">
                <h3 className="font-sora text-headline-sm text-white">
                  Children&rsquo;s Privacy
                </h3>
                <p>
                  This website is not directed at children under 18 and we do not knowingly collect information from children through this site.
                </p>
              </section>

              {/* Changes to This Policy */}
              <section className="space-y-3 pt-6 border-t border-darkGray/40">
                <h3 className="font-sora text-headline-sm text-white">
                  Changes to This Policy
                </h3>
                <p>
                  We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at the top of this page will reflect the most recent revision.
                </p>
              </section>

              {/* Contact Us */}
              <section className="space-y-3 pt-6 border-t border-darkGray/40">
                <h3 className="font-sora text-headline-sm text-white">
                  Contact Us
                </h3>
                <p>
                  For questions about this Privacy Policy, contact us at{' '}
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
