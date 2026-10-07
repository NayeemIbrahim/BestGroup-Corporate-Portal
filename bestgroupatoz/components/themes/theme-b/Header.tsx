'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { GlobalSettings, ThemeData } from '@/types/cms';
import {
  Sparkles,
  Menu,
  X,
  ArrowUpRight,
  Compass,
  Layers,
  Zap,
  Flame,
  Globe2,
  ChevronRight
} from 'lucide-react';

interface ThemeBHeaderProps {
  theme?: ThemeData | null;
  settings?: GlobalSettings;
}

export const ThemeBHeader: React.FC<ThemeBHeaderProps> = ({ theme, settings }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const siteName = settings?.site_identity?.site_name || 'BestGroup';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Island Navbar (Theme B Creative Modern Minimalist) */}
      <header className="fixed top-5 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`max-w-5xl mx-auto rounded-full transition-all duration-300 pointer-events-auto border ${
            scrolled
              ? 'bg-gray-950/85 backdrop-blur-2xl border-emerald-500/30 shadow-[0_10px_35px_rgba(0,0,0,0.8)] py-3 px-6'
              : 'bg-gray-900/80 backdrop-blur-xl border-white/10 shadow-2xl py-3.5 px-7'
          } flex items-center justify-between`}
        >
          {/* Brand Logo / Monogram */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 p-[1px] flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <div className="w-full h-full bg-gray-950 rounded-full flex items-center justify-center text-emerald-400">
                <Zap className="w-4 h-4 fill-emerald-400 text-emerald-400" />
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-base font-extrabold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                {siteName.toUpperCase()}
              </span>
              <span className="text-[10px] font-mono text-emerald-400 px-1.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                STUDIO
              </span>
            </div>
          </Link>

          {/* Minimalist Centered Navigation Pills */}
          <nav className="hidden md:flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-gray-300 bg-gray-950/60 p-1 rounded-full border border-white/5">
            <Link
              href="/"
              className="px-4 py-1.5 rounded-full text-white hover:text-emerald-400 hover:bg-white/5 transition-all"
            >
              01 // Index
            </Link>
            <a
              href="#wings"
              className="px-4 py-1.5 rounded-full hover:text-emerald-400 hover:bg-white/5 transition-all"
            >
              02 // Ventures
            </a>
            <a
              href="#services"
              className="px-4 py-1.5 rounded-full hover:text-emerald-400 hover:bg-white/5 transition-all"
            >
              03 // Capabilities
            </a>
            <a
              href="#contact"
              className="px-4 py-1.5 rounded-full hover:text-emerald-400 hover:bg-white/5 transition-all"
            >
              04 // Liaison
            </a>
          </nav>

          {/* Action Badge & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Active Theme Badge */}
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Theme B Active</span>
            </div>

            {/* Launch CTA */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-mono font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:scale-105 active:scale-95"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-full bg-gray-950 border border-white/10 text-gray-300 md:hidden"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Floating Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-4 top-24 z-50 p-6 rounded-3xl bg-gray-950/95 backdrop-blur-2xl border border-emerald-500/30 shadow-2xl text-white md:hidden"
          >
            <div className="space-y-4 font-mono text-sm">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="block py-2 border-b border-gray-800 text-gray-300 hover:text-emerald-400"
              >
                01 // Index
              </Link>
              <a
                href="#wings"
                onClick={() => setMobileOpen(false)}
                className="block py-2 border-b border-gray-800 text-gray-300 hover:text-emerald-400"
              >
                02 // Ventures & Wings
              </a>
              <a
                href="#services"
                onClick={() => setMobileOpen(false)}
                className="block py-2 border-b border-gray-800 text-gray-300 hover:text-emerald-400"
              >
                03 // Capabilities
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-gray-300 hover:text-emerald-400"
              >
                04 // Corporate Liaison
              </a>
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full py-3 rounded-2xl bg-emerald-500 text-gray-950 font-bold flex items-center justify-center gap-2"
                >
                  <span>Connect with Board</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default ThemeBHeader;
