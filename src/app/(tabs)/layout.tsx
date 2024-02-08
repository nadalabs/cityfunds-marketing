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
import { setCookie } from '@utils/helpers';

export default function TabsLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    UTM_PARAMETERS.forEach((param) => {
      if (urlParams.has(param)) {
        const value = urlParams.get(param);
        setCookie(param, value);
      }
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LayoutWrapper>
        <MobileNavBar />
        <DesktopNavBar />
        <MainWrapper>{children}</MainWrapper>
        <PageFooter />
      </LayoutWrapper>
    </ThemeProvider>
  );
}
