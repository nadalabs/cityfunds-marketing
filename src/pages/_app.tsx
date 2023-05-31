import theme from '@utils/theme';
import type { AppProps } from 'next/app';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../globalstyles';

export default function App({ Component, pageProps }: AppProps) {
  // Sentry.init({
  //   dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  //   integrations: [new Sentry.BrowserTracing()],
  //   tracesSampleRate: 1.0,
  // });

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
