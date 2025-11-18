import { Inter, Akronim } from 'next/font/google';

export const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', 'arial']
});

export const akronim = Akronim({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-akronim',
  display: 'swap',
});
