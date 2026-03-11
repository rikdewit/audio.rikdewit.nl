import { Inter, JetBrains_Mono, Caveat } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  preload: true,
  display: 'block',
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  preload: false,
  display: 'block',
});

export const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-caveat',
  preload: false,
  display: 'block',
});
