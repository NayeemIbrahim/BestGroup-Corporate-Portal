'use client';

import React from 'react';
import { GlobalSettings, ThemeData } from '@/types/cms';
import { ThemeAHeader } from '@/components/themes/theme-a/Header';
import { ThemeBHeader } from '@/components/themes/theme-b/Header';

interface NavbarProps {
  theme?: ThemeData | null;
  settings?: GlobalSettings;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, settings }) => {
  const activeTheme = (theme?.directory_name || 'theme-a').toLowerCase().trim();

  if (activeTheme === 'theme-b') {
    return <ThemeBHeader theme={theme} settings={settings} />;
  }

  // Default: Theme A (Corporate Luxe / RFL style)
  return <ThemeAHeader theme={theme} settings={settings} />;
};
export default Navbar;
