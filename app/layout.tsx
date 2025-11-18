import './globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { inter, akronim } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Blog | Stories and Ideas',
  description: 'Discover stories, thinking, and expertise from writers on any topic.',
  openGraph: {
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  generator: 'v0.app'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${akronim.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
