'use client';
import { useState, useEffect } from 'react';
import {
  SCREEN_SM,
  SCREEN_MD,
  SCREEN_LG,
  SCREEN_XL,
  SCREEN_XXL,
} from './const-breakpoints';

export const useResize = () => {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);

      const handleResize = (event: UIEvent) => {
        if (event.target instanceof Window) {
          setWidth(event.target.innerWidth);
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return {
    width,
    isScreenSm: width ? width >= SCREEN_SM : false,
    isScreenMd: width ? width >= SCREEN_MD : false,
    isScreenLg: width ? width >= SCREEN_LG : false,
    isScreenXl: width ? width >= SCREEN_XL : false,
    isScreenXxl: width ? width >= SCREEN_XXL : false,
  };
};
