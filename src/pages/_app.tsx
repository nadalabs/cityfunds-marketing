import * as Sentry from '@sentry/react';
import { setCookie } from '@utils/helpers';
import theme from '@utils/theme';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
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
  const router = useRouter();

  useEffect(() => {
    if (router.query.utm_source)
      setCookie('utm_source', router.query.utm_source as string);
    if (router.query.utm_medium)
      setCookie('utm_medium', router.query.utm_medium as string);
    if (router.query.utm_campaign)
      setCookie('utm_campaign', router.query.utm_campaign as string);
    if (router.query.utm_content)
      setCookie('utm_content', router.query.utm_content as string);
    if (router.query.utm_term)
      setCookie('utm_term', router.query.utm_term as string);
    if (router.query.gclid) setCookie('gclid', router.query.gclid as string);
    if (router.query.fbclid) setCookie('fbclid', router.query.fbclid as string);
    if (router.query.msclkid)
      setCookie('msclkid', router.query.msclkid as string);
    if (router.query.asPath) setCookie('referrer_url', router.asPath as string);
  }, [router.query, router.asPath]);

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
