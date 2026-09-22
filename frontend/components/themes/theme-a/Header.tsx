'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { GlobalSettings, ThemeData } from '@/types/cms';
import {
  Building2,
  Phone,
  Mail,
  Search,
  Globe,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  ShoppingBag,
  HeartPulse,
  Plane,
  Building,
  ShieldCheck,
  Award,
  Users,
  Briefcase
} from 'lucide-react';

interface ThemeAHeaderProps {
  theme?: ThemeData | null;
  settings?: GlobalSettings;
}

export const ThemeAHeader: React.FC<ThemeAHeaderProps> = ({ theme, settings }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const siteName = settings?.site_identity?.site_name || 'BestGroup';
  const phone = settings?.site_identity?.phone || '+880 1800-BESTGRP';
  const email = settings?.site_identity?.support_email || 'corporate@bestgroup.com';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const businessWings = [
    {
      title: 'Best Real Estate',
      subtitle: 'Luxury Residential & Commercial Mega-Hubs',
      desc: 'Pioneering iconic architectural landmarks, sustainable smart communities, and grade-A commercial real estate.',
      icon: Building,
      href: '#wings',
      stats: '12M+ Sq.Ft Delivered',
      color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    },
    {
      title: 'Best E-Commerce',
      subtitle: 'Omnichannel Digital Retail & Logistics',
      desc: 'Nationwide fulfillment network with automated warehousing, next-day delivery, and millions of active consumers.',
      icon: ShoppingBag,
      href: '#wings',
      stats: '50K+ Daily Deliveries',
      color: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
    },
    {
      title: 'Best Model Pharmacy',
      subtitle: 'Certified Cold-Chain Healthcare Supply',
      desc: 'Standardized modern pharmacy retail chain with 100% authentic medicine guarantee and digital prescription validation.',
      icon: HeartPulse,
      href: '#wings',
      stats: '150+ Outlets Nationwide',
      color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      title: 'Best Travel & Tours',
      subtitle: 'Bespoke Luxury & Corporate Tourism',
      desc: 'Premier international travel management, chartered flights, visa concierge, and luxury inbound/outbound travel experiences.',
      icon: Plane,
      href: '#wings',
      stats: '40+ Global Destinations',
      color: 'text-rose-500 bg-rose-500/10 border-rose-500/20',
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Top Corporate Strip - RFL Style */}
        <div className="bg-slate-900 border-b border-slate-800 text-slate-300 text-xs hidden lg:block">
          <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between">
            {/* Left: Direct Hotline & Inquiries */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-red-500" />
                <span className="text-slate-400">Toll Free:</span>
                <span className="font-semibold text-white tracking-wider">{phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-red-500" />
                <span className="text-slate-400">Liaison:</span>
                <span className="text-white hover:underline cursor-pointer">{email}</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400 font-medium bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>ISO 9001:2015 Certified Conglomerate</span>
              </div>
            </div>

            {/* Right: Corporate Links */}
            <div className="flex items-center gap-5">
              <Link href="#contact" className="hover:text-white transition-colors">
                Investor Relations
              </Link>
              <span className="text-slate-700">|</span>
              <Link href="#contact" className="hover:text-white transition-colors">
                Careers
              </Link>
              <span className="text-slate-700">|</span>
              <Link href="#contact" className="hover:text-white transition-colors">
                Media & Press
              </Link>
              <span className="text-slate-700">|</span>
              <div className="flex items-center gap-1 text-slate-400 hover:text-white cursor-pointer">
                <Globe className="w-3.5 h-3.5 text-slate-400" />
                <span>Global Presence (EN)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar Bar */}
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? 'bg-slate-950/95 backdrop-blur-md shadow-2xl border-b border-slate-800 py-3.5'
              : 'bg-slate-950/80 backdrop-blur-sm border-b border-slate-800/60 py-4.5'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            {/* BestGroup Corporate Logo */}
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-red-600 via-red-500 to-amber-500 text-white shadow-lg shadow-red-600/20 group-hover:scale-105 transition-transform duration-300">
                <Building2 className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white flex items-center gap-1">
                  BEST<span className="text-red-500">GROUP</span>
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 -mt-1">
                  Conglomerate Holdings
                </span>
              </div>
            </Link>

            {/* Desktop Navigation with Mega-Menu Trigger */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className="px-4 py-2 text-sm font-medium text-white hover:text-red-400 transition-colors rounded-lg hover:bg-slate-900/60"
              >
                Home
              </Link>

              {/* Mega-Menu Trigger for Business Wings */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMegaMenu('wings')}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button className="px-4 py-2 text-sm font-medium text-slate-200 hover:text-white flex items-center gap-1.5 rounded-lg hover:bg-slate-900/60 transition-colors group">
                  <span>Our Ventures & Wings</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 group-hover:text-white transition-transform duration-200 ${
                      activeMegaMenu === 'wings' ? 'rotate-180 text-red-500' : ''
                    }`}
                  />
                </button>

                {/* Animated Mega-Menu Dropdown Panel */}
                <AnimatePresence>
                  {activeMegaMenu === 'wings' && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[850px] bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 shadow-2xl shadow-black/80 z-50 grid grid-cols-12 gap-6"
                    >
                      {/* Left Wings List */}
                      <div className="col-span-8 grid grid-cols-2 gap-4">
                        {businessWings.map((wing, idx) => {
                          const Icon = wing.icon;
                          return (
                            <Link
                              key={idx}
                              href={wing.href}
                              onClick={() => setActiveMegaMenu(null)}
                              className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-red-500/40 hover:bg-slate-950 transition-all duration-200 group flex flex-col justify-between"
                            >
                              <div className="flex items-start gap-3">
                                <div className={`p-2 rounded-lg border ${wing.color} shrink-0`}>
                                  <Icon className="w-5 h-5" />
                                </div>
                                <div>
                                  <h4 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                                    {wing.title}
                                  </h4>
                                  <p className="text-xs text-slate-400 mt-1 leading-snug line-clamp-2">
                                    {wing.subtitle}
                                  </p>
                                </div>
                              </div>
                              <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-[11px]">
                                <span className="font-mono text-slate-400">{wing.stats}</span>
                                <span className="text-red-400 group-hover:translate-x-0.5 transition-transform font-semibold flex items-center gap-0.5">
                                  View Wing <ArrowRight className="w-3 h-3" />
                                </span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      {/* Right Conglomerate Highlight Column */}
                      <div className="col-span-4 p-4 rounded-xl bg-gradient-to-br from-red-950/40 via-slate-950 to-slate-950 border border-red-900/30 flex flex-col justify-between">
                        <div>
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-red-500/10 text-red-400 text-[11px] font-bold uppercase tracking-wider mb-2 border border-red-500/20">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>Enterprise Scale</span>
                          </div>
                          <h4 className="text-sm font-extrabold text-white mt-1">
                            BestGroup Corporate Governance
                          </h4>
                          <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                            Combining decades of strategic leadership across Real Estate, E-Commerce, Healthcare, and Tourism.
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-800/80">
                          <Link
                            href="#contact"
                            onClick={() => setActiveMegaMenu(null)}
                            className="w-full py-2 px-3 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                          >
                            <span>Corporate Liaison</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="#services"
                className="px-4 py-2 text-sm font-medium text-slate-200 hover:text-white transition-colors rounded-lg hover:bg-slate-900/60"
              >
                Capabilities
              </Link>
              <Link
                href="#contact"
                className="px-4 py-2 text-sm font-medium text-slate-200 hover:text-white transition-colors rounded-lg hover:bg-slate-900/60"
              >
                Corporate Desk
              </Link>
            </nav>

            {/* Right Action Group: Search & Primary CTA */}
            <div className="flex items-center gap-3">
              {/* Search Trigger */}
              <button
                onClick={() => setSearchModalOpen(true)}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                title="Search BestGroup Ecosystem"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Theme Badge */}
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>Theme A</span>
              </div>

              {/* Primary Enterprise CTA */}
              <Link
                href="#contact"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/20 hover:shadow-red-600/40 transition-all duration-200 active:scale-95"
              >
                Investor Desk
              </Link>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 lg:hidden"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl px-6 py-6"
            >
              <div className="space-y-4">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-base font-semibold text-white hover:text-red-400 border-b border-slate-800/80"
                >
                  Home
                </Link>
                <div className="py-2 border-b border-slate-800/80">
                  <div className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2">
                    Our Business Wings
                  </div>
                  <div className="grid grid-cols-1 gap-2 pl-2">
                    {businessWings.map((wing, idx) => (
                      <Link
                        key={idx}
                        href={wing.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-sm font-medium text-slate-300 hover:text-white py-1 flex items-center justify-between"
                      >
                        <span>{wing.title}</span>
                        <span className="text-xs text-slate-500">{wing.stats}</span>
                      </Link>
                    ))}
                  </div>
                </div>
                <Link
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-base font-semibold text-white hover:text-red-400 border-b border-slate-800/80"
                >
                  Corporate Capabilities
                </Link>
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-base font-semibold text-white hover:text-red-400"
                >
                  Corporate Liaison Desk
                </Link>
                <div className="pt-4 flex flex-col gap-2">
                  <div className="text-xs text-slate-400">
                    Hotline: <span className="text-white font-bold">{phone}</span>
                  </div>
                  <div className="text-xs text-slate-400">
                    Email: <span className="text-white font-bold">{email}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Corporate Search Modal */}
      <AnimatePresence>
        {searchModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-24 px-6"
            onClick={() => setSearchModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-2xl p-6 shadow-2xl text-white"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2 text-red-500 font-bold text-sm">
                  <Search className="w-4 h-4" />
                  <span>Search BestGroup Ventures & Services</span>
                </div>
                <button
                  onClick={() => setSearchModalOpen(false)}
                  className="p-1 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type to search (e.g., Real Estate, Pharmacy, Tours, E-Commerce)..."
                  className="w-full px-4 py-3.5 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-base focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  autoFocus
                />
              </div>

              <div className="mt-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Quick Navigation Suggestions
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Best Real Estate Hub', 'Online Pharmacy Refills', 'E-Commerce Marketplace', 'Luxury Travel Booking', 'Investor FAQ'].map(
                    (tag, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSearchQuery(tag);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 transition-colors"
                      >
                        {tag}
                      </button>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default ThemeAHeader;
