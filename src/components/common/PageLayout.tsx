import DesktopNavBar from '@components/common/DesktopNavBar';
import MobileNavBar from '@components/common/MobileNavBar';
import useIsMobile from '@hooks/useIsMobile';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface PageLayoutProps {
  children: ReactNode;
  isBanner?: boolean;
}

export default function PageLayout({ children, isBanner }: PageLayoutProps) {
  const isMobile = useIsMobile();

  return (
    <LayoutWrapper>
      {isMobile ? (
        <MobileNavBar isBanner={isBanner} />
      ) : (
        <DesktopNavBar isBanner={isBanner} />
      )}
      <MainWrapper>{children}</MainWrapper>
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const MainWrapper = styled.div`
  width: 100%;
  /* max-width: 100rem; */
`;
