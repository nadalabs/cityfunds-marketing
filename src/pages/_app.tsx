import Footer from '@components/Footer';
import * as snippet from '@segment/snippet';
import * as Sentry from '@sentry/react';
import { UTM_PARAMETERS } from '@utils/constants';
import { setCookie } from '@utils/helpers';
import theme from '@utils/theme';
import { Analytics } from '@vercel/analytics/react';
import { footerQuery } from 'lib/queries';
import { getClient } from 'lib/sanity.server';
import type { AppProps as NextAppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
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

interface AppProps extends NextAppProps {
  footer?: any[];
  banner?: string;
}

App.getInitialProps = async () => {
  const foooterData = await getClient().fetch(footerQuery);
  return { footer: foooterData?.legal?.content };
};

export default function App({ Component, pageProps, footer }: AppProps) {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    UTM_PARAMETERS.forEach((param) => {
      if (urlParams.has(param)) {
        const value = urlParams.get(param);
        setCookie(param, value);
      }
    });
  }, []);

  function renderSnippet() {
    const opts = {
      apiKey: process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY || '',
      page: true,
    };

    if (process.env.NODE_ENV === 'development') {
      return snippet.max(opts);
    }
    return snippet.min(opts);
  }

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
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#48DC95" />
        <meta
          name="description"
          content="Gain access to professionally-managed, diversified real estate portfolios in the world’s best cities - start with as little as $100."
        />
        <title>Nada</title>
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Script
          id="segment-script"
          dangerouslySetInnerHTML={{ __html: renderSnippet() }}
        />
        <Component {...pageProps} />
        <Footer legal={footer} />
        <Analytics />
      </ThemeProvider>
    </>
  );
}
