'use client';

import React from 'react';
import { GlobalSettings, ThemeData } from '@/types/cms';
import { ArrowUpRight, Zap, Globe2 } from 'lucide-react';

interface ThemeBFooterProps {
  theme?: ThemeData | null;
  settings?: GlobalSettings;
}

export const ThemeBFooter: React.FC<ThemeBFooterProps> = ({ theme, settings }) => {
  const siteName = settings?.site_identity?.site_name || 'BestGroup';
  const tagline = settings?.site_identity?.tagline || 'Leading Multi-Sector Conglomerate';
  const email = settings?.site_identity?.support_email || 'corporate@bestgroup.com';

  return (
    <footer className="bg-gray-950 border-t border-white/10 text-gray-400 py-20 px-6 relative overflow-hidden">
      {/* Background Watermark / Giant Monogram */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-mono text-[14vw] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter">
        BESTGROUP
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Minimalist Brand Symbol */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 text-emerald-400 mb-6 shadow-xl shadow-emerald-500/10">
          <Zap className="w-6 h-6 fill-emerald-400 text-emerald-400" />
        </div>

        {/* Big Agency Statement */}
        <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight max-w-2xl mx-auto leading-snug">
          Architecting High-Growth Ventures for the Next Generation.
        </h3>
        <p className="text-gray-400 text-sm mt-3 max-w-lg mx-auto font-mono">
          {tagline}
        </p>

        {/* Quick Email Pill */}
        <div className="mt-8">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 border border-emerald-500/30 hover:border-emerald-500 text-emerald-400 font-mono text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-xl shadow-emerald-500/10"
          >
            <span>Direct Inquiries: {email}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Minimalist Horizontal Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-10 border-t border-white/5 text-xs font-mono uppercase tracking-wider text-gray-400">
          <a href="#wings" className="hover:text-emerald-400 transition-colors">
            Real Estate
          </a>
          <a href="#wings" className="hover:text-emerald-400 transition-colors">
            E-Commerce
          </a>
          <a href="#wings" className="hover:text-emerald-400 transition-colors">
            Model Pharmacy
          </a>
          <a href="#wings" className="hover:text-emerald-400 transition-colors">
            Travel & Tours
          </a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">
            Corporate Liaison
          </a>
        </div>

        {/* Copyright Bottom Bar */}
        <div className="mt-12 text-[11px] font-mono text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            &copy; {new Date().getFullYear()} {siteName.toUpperCase()} HOLDINGS. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-2 text-emerald-400/80">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>THEME B • DARK MODERN AGENCY MODE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default ThemeBFooter;
