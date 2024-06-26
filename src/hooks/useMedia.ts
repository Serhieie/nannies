import { useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';

export const useMedia = () => {
  const isHeightLow = useMediaQuery({ query: '(max-height: 580px)' });
  const isHeight = useMediaQuery({ query: '(max-height: 860px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' }) && !isDesktop;
  const isMobile = !isTablet && !isDesktop;

  return useMemo(
    () => ({ isMobile, isTablet, isDesktop, isHeight, isHeightLow }),
    [isMobile, isTablet, isDesktop, isHeight, isHeightLow]
  );
};
