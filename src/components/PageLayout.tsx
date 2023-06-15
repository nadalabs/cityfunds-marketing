import AlertBanner from '@components/AlertBanner';
import DesktopNavBar from '@components/DesktopNavBar';
import Footer from '@components/Footer';
import MobileNavBar from '@components/MobileNavBar';
import useIsMobile from '@hooks/useIsMobile';
import { ReactNode } from 'react';

interface BannerProps {
  children: ReactNode;
  partnerImage?: string;
}

export default function PageLayout({ children, partnerImage }: BannerProps) {
  const isMobile = useIsMobile();

  return (
    <div>
      <AlertBanner primaryText="Cityfund of the Month: Dallas! Invest and get free shares" />
      {isMobile ? (
        <MobileNavBar />
      ) : (
        <DesktopNavBar partnerImage={partnerImage} />
      )}
      {children}
      <Footer />
    </div>
  );
}
