import type { Metadata } from 'next';
import { Sora, DM_Sans } from 'next/font/google';
import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-sora',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dmsans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://unfailed.co'),
  title: {
    default: 'Unfailed Pvt Ltd | Credential Infrastructure for Institutions',
    template: '%s | Unfailed Pvt Ltd',
  },
  description:
    'A company engineering how universities issue, and others verify, trusted digital credentials.',
  openGraph: {
    title: 'Unfailed Pvt Ltd | Credential Infrastructure for Institutions',
    description:
      'A company engineering how universities issue, and others verify, trusted digital credentials.',
    url: 'https://unfailed.co',
    siteName: 'Unfailed Pvt Ltd',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Unfailed Pvt Ltd',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`}>
      <body className="bg-nearBlack text-white font-dmsans antialiased flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
