'use client';

import { Header } from '@/components/header';
import { GlobalStyle } from '@/styles/global';
import StyledComponentsRegistry from '@/styles/lib/styled-components';
import { Container } from '@/styles/pages/app';
import { defaultTheme } from '@/styles/theme/default';

import { Roboto } from '@next/font/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

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
      </head>
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={defaultTheme}>
            <QueryClientProvider client={queryClient}>
              <GlobalStyle />
              <Container>
                <Header />
                {children}
              </Container>
            </QueryClientProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
