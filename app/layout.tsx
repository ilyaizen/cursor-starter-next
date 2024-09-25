import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Header from './header';
import Footer from './footer';

export const metadata: Metadata = {
  title: 'John Doe Portfolio',
  description: 'Innovative Graphic Design Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col antialiased" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 transition-colors duration-500 dark:from-gray-800 dark:to-gray-900">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
