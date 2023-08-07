import DesktopNavBar from '@components/common/DesktopNavBar';
import MobileNavBar from '@components/common/MobileNavBar';
import useIsMobile from '@hooks/useIsMobile';
import { ReactNode } from 'react';

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
    <div>
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
      {children}
    </div>
  );
}
