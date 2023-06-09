import AlertBanner from '@components/AlertBanner';
import DesktopNavBar from '@components/DesktopNavBar';
import Footer from '@components/Footer';
import MobileNavBar from '@components/MobileNavBar';
import useIsMobile from '@hooks/useIsMobile';
import { ReactNode } from 'react';

interface BannerProps {
  children: ReactNode;
  footerLegal?: string;
  partnerImage?: string;
}

export default function PageLayout({
  children,
  partnerImage,
  footerLegal,
}: BannerProps) {
  const isMobile = useIsMobile();

  return (
    <div>
      <AlertBanner primaryText="Invest $2,500 & get 10 Free Shares or $5,000 for 50 Free Shares" />
      {isMobile ? (
        <MobileNavBar />
      ) : (
        <DesktopNavBar partnerImage={partnerImage} />
      )}
      {children}
      <Footer footerLegal={footerLegal} />
    </div>
  );
}
