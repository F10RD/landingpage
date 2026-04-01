import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://byfiord.dev'),
  title: 'FIORD — Web Development Flanders | Websites that bring clients',
  description: 'Custom websites, booking systems & admin panels for local businesses in Flanders, Belgium. Fast, professional, built to convert. Based in Lebbeke.',
  keywords: ['web development flanders', 'website laten maken belgie', 'webdesign oost-vlaanderen', 'booking system website', 'webdeveloper lebbeke'],
  authors: [{ name: 'Artur Daszczuk', url: 'https://byfiord.dev' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'FIORD — Websites that bring clients',
    description: 'Custom websites for local businesses in Flanders. Booking systems, admin panels, modern design.',
    url: 'https://byfiord.dev',
    siteName: 'FIORD',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_BE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FIORD — Websites that bring clients',
    description: 'Custom websites for local businesses in Flanders.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://byfiord.dev',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}