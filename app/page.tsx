import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StatementBlock from '@/components/StatementBlock';
import SplitBlock from '@/components/SplitBlock';
import Logo from '@/components/Logo';

export const metadata: Metadata = {
  title: 'Unfailed Pvt Ltd | Credential Infrastructure for Institutions',
  description:
    'A company engineering how universities issue, and others verify, trusted digital credentials.',
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Block 1: StatementBlock (nearBlack) */}
        <StatementBlock
          bgColor="nearBlack"
          eyebrow="UNFAILED PVT LTD"
          heading="We build credential infrastructure for institutions."
          description="A company engineering how universities issue, and others verify, trusted digital credentials."
          hasDivider={true}
        />

        {/* Block 2: SplitBlock (darkGray, clickable, external link to https://swalt.co) */}
        <SplitBlock
          bgColor="darkGray"
          eyebrow="WHAT WE BUILD"
          heading="SWALT"
          description="Verifiable digital credentials — issued by institutions, checked by anyone, in seconds."
          isClickable={true}
          href="https://swalt.co"
          isExternal={true}
          hasDivider={true}
          visual={
            <div className="w-full max-w-xs aspect-video flex flex-col items-center justify-center border border-gold/20 bg-nearBlack/60 p-6 rounded-card text-center group-hover:border-gold transition-colors duration-300">
              {/* SWALT logo placeholder - easily swappable with SVG */}
              <Logo variant="swalt" linkToHome={false} />
              <span className="font-dmsans text-eyebrow uppercase tracking-eyebrow text-gold/80 mt-2">
                swalt.co
              </span>
            </div>
          }
        />

        {/* Block 3: SplitBlock (nearBlack, non-clickable) */}
        <SplitBlock
          bgColor="nearBlack"
          eyebrow="THE MODEL"
          heading="How trust moves"
          description="Institutions originate trust, individuals carry it, verifiers confirm it — in one continuous chain."
          hasDivider={true}
          visual={
            <div className="w-full max-w-sm space-y-3 p-6 rounded-card border border-darkGray/60 bg-darkGray/20">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-[2px] bg-gold inline-block shrink-0" />
                <span className="font-sora text-body-sm font-semibold text-white">Institution</span>
                <span className="text-gray text-caption">→ Origin</span>
              </div>
              <div className="h-4 border-l border-gold/30 ml-1" />
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-[2px] bg-lightGold inline-block shrink-0" />
                <span className="font-sora text-body-sm font-semibold text-white">Individual</span>
                <span className="text-gray text-caption">→ Bearer</span>
              </div>
              <div className="h-4 border-l border-gold/30 ml-1" />
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-[2px] bg-white inline-block shrink-0" />
                <span className="font-sora text-body-sm font-semibold text-white">Verifier</span>
                <span className="text-gray text-caption">→ Authenticity</span>
              </div>
            </div>
          }
        >
          {/* 3-item list */}
          <ul className="space-y-2.5 pt-2 pb-2">
            <li className="font-dmsans text-body-md text-gray flex items-baseline gap-2">
              <span className="font-medium text-white">Institution:</span>
              <span>origin of trust</span>
            </li>
            <li className="font-dmsans text-body-md text-gray flex items-baseline gap-2">
              <span className="font-medium text-white">Individual:</span>
              <span>carries trust</span>
            </li>
            <li className="font-dmsans text-body-md text-gray flex items-baseline gap-2">
              <span className="font-medium text-white">Verifier:</span>
              <span>establishes authenticity</span>
            </li>
          </ul>
        </SplitBlock>

        {/* Block 4: SplitBlock (darkGray, clickable, internal link to /leadership) */}
        <SplitBlock
          bgColor="darkGray"
          eyebrow="LEADERSHIP"
          heading="Meet the team"
          description="Founder-led, built with focus."
          isClickable={true}
          href="/leadership"
          isExternal={false}
          hasDivider={false}
          visual={
            <div className="w-full max-w-xs aspect-video flex flex-col items-center justify-center border border-gold/20 bg-nearBlack/60 p-6 rounded-card text-center group-hover:border-gold transition-colors duration-300">
              <span className="font-sora font-semibold text-body-md text-white group-hover:text-gold transition-colors">
                View Leadership
              </span>
              <span className="font-dmsans text-caption text-gray mt-1">
                Founders &amp; Direction →
              </span>
            </div>
          }
        />
      </main>

      <Footer />
    </div>
  );
}
