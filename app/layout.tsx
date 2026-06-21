import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk, Space_Mono } from 'next/font/google';
import Header from '@/components/layout/Header';
import Script from 'next/script';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Mark Calip',
  description: 'Computer Engineering Student — Infrastructure & DevOps',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body className="font-sans bg-portfolio-bg-primary text-portfolio-text-primary antialiased">
        <Header />
        {children}
        <Script
          defer
          src="https://analytics.markcalip.com/script.js"
          data-website-id="f5fdfe48-d1b7-4a9d-8587-8b00523f9e8c"
        />
      </body>
    </html>
  );
}
