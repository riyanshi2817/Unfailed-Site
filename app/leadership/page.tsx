import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StatementBlock from '@/components/StatementBlock';
import LeadershipBlock from '@/components/LeadershipBlock';

export const metadata: Metadata = {
  title: 'Leadership',
  description:
    'Unfailed Pvt Ltd is a student-founded company building credential infrastructure for institutions across India.',
};

export default function LeadershipPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Block 1 (StatementBlock, nearBlack) */}
        <StatementBlock
          bgColor="nearBlack"
          eyebrow="ABOUT"
          heading="Unfailed Pvt Ltd"
          description="A student-founded company building credential infrastructure for institutions across India."
          hasDivider={true}
        />

        {/* Block 2 (LeadershipBlock, darkGray) */}
        <LeadershipBlock
          bgColor="darkGray"
          eyebrow="FOUNDER"
          name="Satya Prakash Pandey"
          line="Founder — leads product direction, technical architecture, and institutional partnerships."
          hasDivider={true}
        />

        {/* Block 3 (LeadershipBlock, nearBlack) */}
        <LeadershipBlock
          bgColor="nearBlack"
          eyebrow="FOUNDER"
          name="Akash Kumar Jha"
          line="Founder — leads marketing, investor relations, and revenue growth."
          hasDivider={false}
        />
      </main>

      <Footer />
    </div>
  );
}
