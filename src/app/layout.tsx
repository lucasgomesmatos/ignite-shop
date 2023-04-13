'use client';

import { Header } from '@/components/header';
import { globalStyles } from '@/styles/global';
import { Container } from '@/styles/pages/app';
import { Roboto } from '@next/font/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getCssText } from '../styles';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

globalStyles();

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Ignite Shop</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body className={roboto.className}>
        <QueryClientProvider client={queryClient}>
          <Container>
            <Header />
            {children}
          </Container>
        </QueryClientProvider>
      </body>
    </html>
  );
}
