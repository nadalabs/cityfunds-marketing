import DesktopNavBar from '@components/DesktopNavBar';
import MobileNavBar from '@components/MobileNavBar';
import useIsMobile from '@hooks/useIsMobile';
import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
  partnerImage?: string;
}

export default function PageLayout({
  children,
  partnerImage,
}: PageLayoutProps) {
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
