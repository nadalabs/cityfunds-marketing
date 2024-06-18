'use client';
import { ReactNode, useEffect } from 'react';

interface PageTrackerProps {
  children: ReactNode;
  pageName: string;
  payload?: any;
}

export default function PageTracker({
  children,
  pageName,
  payload,
}: PageTrackerProps) {
  useEffect(() => {
    async function trackPageView() {
      await window.analytics.page(pageName, payload);
    }
    trackPageView();
  }, []);

  return <>{children}</>;
}
