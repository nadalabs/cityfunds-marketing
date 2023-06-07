import Banner from '@components/Banner';
import DesktopNavBar from '@components/DesktopNavBar';
import Footer from '@components/Footer';
import MobileNavBar from '@components/MobileNavBar';
import useIsMobile from '@hooks/useIsMobile';
import { ReactNode } from 'react';

interface BannerProps {
  children: ReactNode;
  isDarkMode?: boolean;
  partnerImage?: string;
}

export default function PageLayout({
  children,
  isDarkMode,
  partnerImage,
}: BannerProps) {
  const isMobile = useIsMobile();

  return (
    <div>
      {/* <Banner primaryText="Limited Time Investor Perk: Invest $1,000 & get $100" /> */}
      {isMobile ? (
        <MobileNavBar isDarkMode={isDarkMode} />
      ) : (
        <DesktopNavBar isDarkMode={isDarkMode} partnerImage={partnerImage} />
      )}
      {children}
      <Footer />
    </div>
  );
}
