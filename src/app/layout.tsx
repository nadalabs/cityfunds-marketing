import { Metadata } from 'next';
import Script from 'next/script';
import StyledComponentsRegistry from './registry';
import * as snippet from '@segment/snippet';
import * as Sentry from '@sentry/react';
import { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import 'react-modern-drawer/dist/index.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../../styles/globals.css';

declare global {
  interface Window {
    analytics: any;
    hsConversationsOnReady: any;
    HubSpotConversations: any;
  }
}

export const metadata: Metadata = {
  title: 'Cityfunds',
  description: 'Own a Piece of Your Favorite City',
};

export default function RootLayout({ children }: { children: ReactNode }) {
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
    <html lang="en">
      <link rel="icon" href="/icons/cityfunds-favicon.svg" />
      <head>
        <Script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/8291437.js"
        />
        <Script
          id="segment-script"
          dangerouslySetInnerHTML={{ __html: renderSnippet() }}
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          {children}
          <Analytics />
          <SpeedInsights />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
