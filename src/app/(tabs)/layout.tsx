'use client';

import styled from 'styled-components';
import AlertBanner from '@components/common/AlertBanner';
import MobileNavBar from '@components/common/MobileNavBar';
import DesktopNavBar from '@components/common/DesktopNavBar';
import PageFooter from '@components/common/PageFooter';
import useIsMobile from '@hooks/useIsMobile';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { UTM_PARAMETERS } from '@utils/constants';
import { setCookie } from '@utils/helpers';

export default function Layout({ children }) {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const isAuth = pathname === '/login' || pathname === '/signup';

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    UTM_PARAMETERS.forEach((param) => {
      if (urlParams.has(param)) {
        const value = urlParams.get(param);
        // setCookie(param, value);
      }
    });
  }, []);

  return (
    <LayoutWrapper>
      {isMobile ? (
        <MobileNavBar isBanner={true} />
      ) : (
        <DesktopNavBar isBanner={true} />
      )}
      <MainWrapper isBanner={true}>{children}</MainWrapper>
      {/* {!isAuth && <PageFooter legal={footer} />} */}
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const MainWrapper = styled.div<{ isBanner?: boolean }>`
  width: 100%;
  margin-top: ${({ isBanner }) => (isBanner ? '2rem' : 0)};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: ${({ isBanner }) => (isBanner ? '8rem' : '4rem')};
  }
`;
