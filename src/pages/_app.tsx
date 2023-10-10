import AlertBanner from '@components/cityfunds/AlertBanner';
import PageFooter from '@components/common/PageFooter';
import PageLayout from '@components/common/PageLayout';
import * as snippet from '@segment/snippet';
import * as Sentry from '@sentry/react';
import { UTM_PARAMETERS } from '@utils/constants';
import { setCookie } from '@utils/helpers';
import GlobalStyle from '@utils/styles';
import theme from '@utils/theme';
import { Analytics } from '@vercel/analytics/react';
import { getFooterContent, getHomePageContent } from 'lib/sanity';
import type { AppProps as NextAppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { ThemeProvider } from 'styled-components';

declare global {
  interface Window {
    analytics: any;
  }
}

interface AppProps extends NextAppProps {
  homePage?: any;
  footer?: any[];
}

App.getInitialProps = async () => {
  const homePage = await getHomePageContent();
  const footer = await getFooterContent();
  return { homePage, footer };
};

export default function App({
  Component,
  pageProps,
  homePage,
  footer,
}: AppProps) {
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

      <Script
        id="segment-script"
        dangerouslySetInnerHTML={{ __html: renderSnippet() }}
      />

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        (homePage?.promo?.banner || homePage?.webinar?.banner) && (
        <AlertBanner
          primaryText={
            homePage?.promo?.banner
              ? homePage?.promo?.banner
              : homePage?.webinar?.banner
          }
          btnText={homePage?.promo?.banner ? 'Learn More' : 'Register Here'}
          onClick={() =>
            window.open(
              homePage?.promo?.banner ? '/rewards' : homePage?.webinar?.link,
              '_blank'
            )
          }
        />
        )
        <PageLayout
          isBanner={homePage?.promo?.banner || homePage?.webinar?.banner}
        >
          <Component {...pageProps} />
        </PageLayout>
        <PageFooter legal={footer} />
        <Analytics />
      </ThemeProvider>
    </>
  );
}
