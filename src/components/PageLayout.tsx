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
      {isMobile ? (
        <MobileNavBar />
      ) : (
        <DesktopNavBar isDarkMode={isDarkMode} partnerImage={partnerImage} />
      )}
      {children}
      <Footer />
    </div>
  );
}
