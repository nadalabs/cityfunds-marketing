import { useEffect, useState } from 'react';

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  const isMobileDevice = () => {
    if (typeof window !== 'undefined') {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    }
  };

  useEffect(() => {
    const isMobile = isMobileDevice();
    setIsMobile(isMobile);
  }, []);

  return isMobile;
}
