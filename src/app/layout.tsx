import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import { portfolioData } from '@/config/portfolio-data';
import { ThemeProvider } from '@/components/theme-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `Portfolio | ${portfolioData.personalInfo.name}`,
  description: 'Portfolio website of Akash Mondal (Akash98Sky).'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {process.env.UMAMI_SCRIPT_URL && <script defer src={process.env.UMAMI_SCRIPT_URL} data-website-id={process.env.UMAMI_DATA_WEBSITE_ID}></script>}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
