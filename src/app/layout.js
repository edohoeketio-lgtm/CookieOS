import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-text',
  display: 'swap',
});

export const metadata = {
  title: 'CookieOS — Your AI Agent Platform',
  description: 'An autonomous agent that lives on your machine and actually does the work for you. Private. Local. Powerful.',
  openGraph: {
    title: 'CookieOS — Your AI Agent Platform',
    description: 'An autonomous agent that lives on your machine and actually does the work for you.',
    type: 'website',
    url: 'https://www.cookieos.app',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
