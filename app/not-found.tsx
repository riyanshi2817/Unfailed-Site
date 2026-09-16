import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StatementBlock from '@/components/StatementBlock';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <StatementBlock
          bgColor="nearBlack"
          eyebrow="404"
          heading="Page not found"
          description="The page you are looking for does not exist or has been moved."
          hasDivider={false}
        >
          <div className="mt-8">
            <Link href="/" className="btn-primary">
              Return Home
            </Link>
          </div>
        </StatementBlock>
      </main>

      <Footer />
    </div>
  );
}
