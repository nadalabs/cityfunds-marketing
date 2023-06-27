import Footer from '@components/Footer';
import * as snippet from '@segment/snippet';
import * as Sentry from '@sentry/react';
import { UTM_PARAMETERS } from '@utils/constants';
import { setCookie } from '@utils/helpers';
import theme from '@utils/theme';
import AlertBanner from '@components/AlertBanner';
import { Analytics } from '@vercel/analytics/react';
import { footerQuery, homeIndexQuery } from 'lib/queries';
import { getClient } from 'lib/sanity.server';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../globalstyles';
import PageLayout from '@components/PageLayout';

declare global {
  interface Window {
    analytics: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const [banner, setBanner] = useState('');
  const [footer, setFooter] = useState([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    UTM_PARAMETERS.forEach((param) => {
      if (urlParams.has(param)) {
        const value = urlParams.get(param);
        setCookie(param, value);
      }
    });
  }, []);

  useEffect(() => {
    const loadFooter = async () => {
      const data = await getClient().fetch(footerQuery);
      setFooter(data?.legal?.content);
    };
    loadFooter();
  }, []);

  useEffect(() => {
    const loadBanner = async () => {
      const data = await getClient().fetch(homeIndexQuery);
      setBanner(data[0]?.promo?.banner);
    };
    loadBanner();
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
        {banner && <AlertBanner primaryText={banner} />}
        <Component {...pageProps} />
        <Footer legal={footer} />
        <Analytics />
      </ThemeProvider>
    </>
  );
}
