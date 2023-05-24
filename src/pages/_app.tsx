import * as Sentry from '@sentry/react';
import theme from '@utils/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../globalstyles';

export default function App({ Component, pageProps }: AppProps) {
  Sentry.init({
    dsn: '',
    integrations: [new Sentry.BrowserTracing()],
    tracesSampleRate: 1.0,
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
