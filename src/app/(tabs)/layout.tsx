'use client';
import GlobalStyles from '@utils/styles';
import DesktopNavBar from '@components/common/DesktopNavBar';
import MobileNavBar from '@components/common/MobileNavBar';
import theme from '@utils/theme';
import { ReactNode, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { LayoutWrapper, MainWrapper } from '@elements/Containers';
import PageFooter from '@components/common/PageFooter';
import { UTM_PARAMETERS } from '@utils/constants';
import { getCookie, setCookie } from '@utils/helpers';
import AlertBanner from '@components/common/AlertBanner';
import { getCityfundsAppContent } from 'lib/sanity';

interface AlertBannerProps {
  show_banner: boolean;
    text: string;
    button_text: string;
    button_link: string;
}

export default function TabsLayout({ children }: { children: ReactNode }) {
  const [banner, setBanner] = useState<AlertBannerProps>();

  useEffect(() => {
    getCityfundsAppContent().then((result) => {
      if(result && result.banner){
        setBanner(result.banner)
      }
    });
  }, [])

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
        <AlertBanner  banner={banner}/>
        <MobileNavBar isBanner={banner?.show_banner}/>
        <DesktopNavBar isBanner={banner?.show_banner}/>
        <MainWrapper isBanner={banner?.show_banner}>{children}</MainWrapper>
        <PageFooter />
      </LayoutWrapper>
    </ThemeProvider>
  );
}
