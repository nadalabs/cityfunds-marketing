import DesktopNavBar from '@components/common/DesktopNavBar';
import MobileNavBar from '@components/common/MobileNavBar';
import useIsMobile from '@hooks/useIsMobile';
import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
  partnerImage?: string;
  bannerText?: string;
}

export default function PageLayout({
  children,
  partnerImage,
  bannerText,
}: PageLayoutProps) {
  const isMobile = useIsMobile();

  return (
    <div>
      {isMobile ? (
        <MobileNavBar bannerText={bannerText} />
      ) : (
        <DesktopNavBar partnerImage={partnerImage} bannerText={bannerText} />
      )}
      {children}
    </div>
  );
}
