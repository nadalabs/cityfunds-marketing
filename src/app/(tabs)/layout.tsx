'use client';
import GlobalStyles from '@utils/styles';
import DesktopNavBar from '@components/common/DesktopNavBar';
import MobileNavBar from '@components/common/MobileNavBar';
import theme from '@utils/theme';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { LayoutWrapper, MainWrapper } from '@elements/Containers';
import PageFooter from '@components/common/PageFooter';

export default function TabsLayout({ children }: { children: ReactNode }) {
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
