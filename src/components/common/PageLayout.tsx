import DesktopNavBar from '@components/common/DesktopNavBar';
import MobileNavBar from '@components/common/MobileNavBar';
import useIsMobile from '@hooks/useIsMobile';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface PageLayoutProps {
  children: ReactNode;
  pageImage?: ReactNode;
  partnerImage?: string;
  isBanner?: boolean;
  hideLinks?: boolean;
}

export default function PageLayout({
  children,
  partnerImage,
  pageImage,
  isBanner,
  hideLinks,
}: PageLayoutProps) {
  const isMobile = useIsMobile();

  return (
    <LayoutWrapper>
      {isMobile ? (
        <MobileNavBar isBanner={isBanner} />
      ) : (
        <DesktopNavBar
          partnerImage={partnerImage}
          pageImage={pageImage}
          isBanner={isBanner}
          hideLinks={!!hideLinks}
        />
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
  max-width: 100rem;
`;
