'use client';
import GlobalStyles from '@utils/styles';
import DesktopNavBar from '@components/common/DesktopNavBar';
import MobileNavBar from '@components/common/MobileNavBar';
import theme from '@utils/theme';
import { ReactNode, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { LayoutWrapper, MainWrapper } from '@elements/Containers';
import PageFooter from '@components/common/PageFooter';
import { UTM_PARAMETERS } from '@utils/constants';
import { getCookie, setCookie } from '@utils/helpers';
import AlertBanner from '@components/common/AlertBanner';

export default function TabsLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    const utm: string[] = [];
    for (let param of UTM_PARAMETERS) {
      const value = getCookie(param);
      if (value) utm.push(value);
    }

    const urlParams = new URLSearchParams(window.location.search);
    if (utm.length === 0) {
      UTM_PARAMETERS.forEach((param) => {
        if (urlParams.has(param)) {
          const value = urlParams.get(param);
          setCookie(param, value);
        }
      });
    }

    UTM_PARAMETERS.forEach((param) => {
      if (urlParams.has(param)) {
        const value = urlParams.get(param);
        setCookie(`latest_${param}`, value);
      }
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LayoutWrapper>
        {/* <AlertBanner /> */}
        <MobileNavBar />
        <DesktopNavBar />
        <MainWrapper>{children}</MainWrapper>
        <PageFooter />
      </LayoutWrapper>
    </ThemeProvider>
  );
}
