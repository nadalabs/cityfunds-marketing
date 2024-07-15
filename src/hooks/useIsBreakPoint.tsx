import { useEffect, useState } from 'react';

export default function useIsBreakPoint (breakpoint = 768) {
  const checkForDevice = () => {
    if (typeof window !== 'undefined') {
      return window.outerWidth <= breakpoint;
    }
    else return false;
  }

  const [isBreakPoint, setIsBreakPoint] = useState(checkForDevice());

  useEffect(() => {
    const handlePageResized = () => {
      setIsBreakPoint(checkForDevice());
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handlePageResized);
      window.addEventListener('orientationchange', handlePageResized);
      window.addEventListener('load', handlePageResized);
      window.addEventListener('reload', handlePageResized);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handlePageResized);
        window.removeEventListener('orientationchange', handlePageResized);
        window.removeEventListener('load', handlePageResized);
        window.removeEventListener('reload', handlePageResized);
      }
    };
  }, []);

  return isBreakPoint;
};