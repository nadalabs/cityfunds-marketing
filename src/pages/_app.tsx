import * as Sentry from '@sentry/react';
import { UTM_PARAMETERS } from '@utils/constants';
import { setCookie } from '@utils/helpers';
import theme from '@utils/theme';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../globalstyles';

declare global {
  interface Window {
    analytics: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    UTM_PARAMETERS.forEach((param) => {
      if (urlParams.has(param)) {
        const value = urlParams.get(param);
        setCookie(param, value);
      }
    });
  }, []);

  if (process.env.NEXT_PUBLIC_APP_ENV !== 'localhost') {
    Sentry.init({
      environment: process.env.NEXT_PUBLIC_APP_ENV,
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      integrations: [new Sentry.BrowserTracing()],
      tracesSampleRate: 1.0,
    });
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </>
  );
}
