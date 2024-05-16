import { Providers } from '@/components/providers';
import type { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Inter as FontSans } from 'next/font/google';
import { Toaster } from 'ui/components/ui/sonner';
import '../../styles/globals.css';
import { cn } from 'ui/lib/utils';

export const metadata: Metadata = {
  title: 'Boilerplate to development',
  description: 'Project template for starting new projects',
};

const font = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({ children, params: { locale } }: Readonly<RootLayoutProps>) {
  const messages = useMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <meta content="#7b3aec" name="theme-color" />
      <body className={cn('min-h-screen bg-background font-sans antialiased', font.variable)}>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
          now={new Date()}
          timeZone={Intl.DateTimeFormat().resolvedOptions().timeZone}
        >
          <Providers>
            {children}
            <Toaster />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
