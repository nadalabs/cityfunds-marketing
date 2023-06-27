import AlertBanner from '@components/AlertBanner';
import DesktopNavBar from '@components/DesktopNavBar';
import MobileNavBar from '@components/MobileNavBar';
import useIsMobile from '@hooks/useIsMobile';
import { ReactNode } from 'react';

interface BannerProps {
  children: ReactNode;
  partnerImage?: string;
  bannerText?: string;
}

export default function PageLayout({
  children,
  partnerImage,
  bannerText,
}: BannerProps) {
  const isMobile = useIsMobile();

  return (
    <div>
      {bannerText && <AlertBanner primaryText={bannerText} />}
      {isMobile ? (
        <MobileNavBar />
      ) : (
        <DesktopNavBar partnerImage={partnerImage} />
      )}
      {children}
    </div>
  );
}
