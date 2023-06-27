import DesktopNavBar from '@components/DesktopNavBar';
import MobileNavBar from '@components/MobileNavBar';
import useIsMobile from '@hooks/useIsMobile';
import { ReactNode } from 'react';

interface BannerProps {
  children: ReactNode;
  partnerImage?: string;
  bannerText?: string;
}

export default function PageLayout({ children, partnerImage }: BannerProps) {
  const isMobile = useIsMobile();

  return (
    <div>
      {isMobile ? (
        <MobileNavBar />
      ) : (
        <DesktopNavBar partnerImage={partnerImage} />
      )}
      {children}
    </div>
  );
}
