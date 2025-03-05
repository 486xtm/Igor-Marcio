import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StarsCanvas from '@/components/main/StarBackground';
import Navbar from '@/components/main/Navbar';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from 'next-themes';
const inter = Inter({ subsets: ['latin'] });
import { ToastContainer } from 'react-toastify';
import HeaderBackground from '@/components/main/HeaderBackground';

export const metadata: Metadata = {
  title: 'Andrew Roberts Portfolio',
  description: "Andrew Roberts's portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-y-scroll overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <ToastContainer />
          <StarsCanvas />
          <HeaderBackground />
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
