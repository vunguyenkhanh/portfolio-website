import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { ScrollWrapper } from '@/components/layout/scroll-wrapper';
import { ClassProvider } from '@/components/providers/class-provider';
import { ScrollToTop } from '@/components/ui/scroll-to-top';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Vũ Nguyễn Khánh - Portfolio',
  description:
    'Portfolio cá nhân của Vũ Nguyễn Khánh - Showcasing my projects and skills in web development',
  icons: {
    icon: [
      {
        url: '/images/favicon.png',
        href: '/images/favicon.png',
      },
    ],
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head />
      <body className="antialiased min-h-screen flex flex-col">
        <ClassProvider />
        <ScrollToTop />
        <ScrollWrapper>
          <Header />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </ScrollWrapper>
      </body>
    </html>
  );
}
