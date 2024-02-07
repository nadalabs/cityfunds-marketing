import { ReactNode, useEffect } from 'react';

interface PageTrackerProps {
  children: ReactNode;
  pageName: string;
}

export default function PageTracker({ children, pageName }: PageTrackerProps) {
  useEffect(() => {
    async function trackPageView(event: string) {
      await window.analytics.track(event);
    }
    trackPageView(`${pageName} Page Viewed`);
  }, []);

  return <>{children}</>;
}
