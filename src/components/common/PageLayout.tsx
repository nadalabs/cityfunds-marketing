import AlertBanner from '@components/cityfunds/AlertBanner';
import DesktopNavBar from '@components/common/DesktopNavBar';
import MobileNavBar from '@components/common/MobileNavBar';
import useIsMobile from '@hooks/useIsMobile';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface PageLayoutProps {
  children: ReactNode;
  pageImage?: ReactNode;
  partnerImage?: string;
  bannerText?: string;
  hideLinks?: boolean;
}

export default function PageLayout({
  children,
  partnerImage,
  pageImage,
  bannerText,
  hideLinks,
}: PageLayoutProps) {
  const isMobile = useIsMobile();

  return (
    <LayoutWrapper>
      {bannerText && <AlertBanner primaryText={bannerText} />}
      {isMobile ? (
        <MobileNavBar bannerText={bannerText} />
      ) : (
        <DesktopNavBar
          partnerImage={partnerImage}
          pageImage={pageImage}
          bannerText={bannerText}
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
