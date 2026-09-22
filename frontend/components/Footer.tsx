'use client';

import React from 'react';
import { GlobalSettings, ThemeData } from '@/types/cms';
import { ThemeAFooter } from '@/components/themes/theme-a/Footer';
import { ThemeBFooter } from '@/components/themes/theme-b/Footer';

interface FooterProps {
  theme?: ThemeData | null;
  settings?: GlobalSettings;
}

export const Footer: React.FC<FooterProps> = ({ theme, settings }) => {
  const activeTheme = (theme?.directory_name || 'theme-a').toLowerCase().trim();

  if (activeTheme === 'theme-b') {
    return <ThemeBFooter theme={theme} settings={settings} />;
  }

  // Default: Theme A (Corporate Luxe / RFL style)
  return <ThemeAFooter theme={theme} settings={settings} />;
};
export default Footer;
