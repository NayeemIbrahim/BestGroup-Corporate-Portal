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
  Briefcase,
  MapPin,
  Newspaper,
  Compass,
  Sparkles
} from 'lucide-react';

interface ThemeAHeaderProps {
  theme?: ThemeData | null;
  settings?: GlobalSettings;
}

export const ThemeAHeader: React.FC<ThemeAHeaderProps> = ({ theme, settings }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const siteName = settings?.site_identity?.site_name || 'BEST GROUP';
  const tagline = settings?.site_identity?.tagline || 'Excellence in Every Endeavor';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const businessWings = [
    {
      title: 'Best Product International Ltd.',
      subtitle: 'Omnichannel Digital Retail & Logistics',
      desc: 'Nationwide fulfillment network with automated warehousing, authentic product sourcing, and rapid doorstep delivery.',
      icon: ShoppingBag,
      href: '/our-sister-concern#ecommerce',
      stats: 'E-Commerce Wing',
      color: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
    },
    {
      title: 'Best South City Ltd.',
      subtitle: 'Smart Residential Communities & Housing',
      desc: 'Master-planned modern residential projects, planned communities, and contemporary urban living solutions.',
      icon: Building,
      href: '/our-sister-concern#real-estate',
      stats: 'Real Estate Wing',
      color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    },
    {
      title: 'Best Commercial & Builders Ltd.',
      subtitle: 'Landmark Commercial Construction & Towers',
      desc: 'State-of-the-art commercial high-rises, corporate mega-hubs, and sustainable civil engineering contracting.',
      icon: Building2,
      href: '/our-sister-concern#construction',
      stats: 'Commercial Wing',
      color: 'text-orange-500 bg-orange-500/10 border-orange-500/20',
    },
    {
      title: 'Best Model Pharmacy Ltd.',
      subtitle: 'Certified Cold-Chain Healthcare Supply',
      desc: 'Standardized model pharmacy chain guaranteeing 100% authentic medicine, clinical consultations, and cold-chain safety.',
      icon: HeartPulse,
      href: '/our-sister-concern#pharmacy',
      stats: 'Healthcare Wing',
      color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      title: 'Best International Overseas',
      subtitle: 'Bespoke Travel, Tours & Overseas Mobility',
      desc: 'Premier international travel management, chartered flights, visa consulting, Hajj & Umrah, and luxury tours.',
      icon: Plane,
      href: '/our-sister-concern#travel',
      stats: 'Travel & Tours Wing',
      color: 'text-rose-500 bg-rose-500/10 border-rose-500/20',
    },
    {
      title: 'Best Group (Holding & Governance)',
      subtitle: 'Excellence in Every Endeavor',
      desc: 'Central holding conglomerate steering strategic investments, ethics, governance, and multi-sector synergies.',
      icon: ShieldCheck,
      href: '/about-us',
      stats: 'Parent Holding',
      color: 'text-red-500 bg-red-500/10 border-red-500/20',
    },
  ];

  const aboutSublinks = [
    {
      title: 'About BEST GROUP',
      desc: 'Corporate heritage, milestones & leadership',
      href: '/about-us',
      icon: Building,
      badge: 'Heritage',
      color: 'text-red-500 bg-red-500/10 border-red-500/20',
    },
    {
      title: 'Chairman’s Message',
      desc: 'M.A. Mizanur Rahman’s executive address',
      href: '/chairmans-message',
      icon: Award,
      badge: 'Leadership',
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    },
    {
      title: 'Mission, Vision & Values',
      desc: 'Our creed: Excellence in Every Endeavor',
      href: '/mission-vision',
      icon: Compass,
      badge: 'Creed',
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      title: 'Corporate Desk',
      desc: 'Board secretariat & central governance',
      href: '/corporate-desk',
      icon: Briefcase,
      badge: 'Governance',
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    },
    {
      title: 'FAQ & Inquiries',
      desc: 'Frequently asked corporate questions',
      href: '/faq',
      icon: Users,
      badge: 'Support',
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Top Corporate Strip - Sleek Executive Menu */}
        <div className="bg-slate-950/95 border-b border-slate-800/80 text-slate-300 text-xs hidden lg:block backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between">
            {/* Left: Refined Corporate Tagline Badge */}
            <div className="flex items-center gap-2.5">
              <span className="font-black text-white tracking-widest text-[11px] uppercase">
                {siteName}
              </span>
              <span className="text-slate-600">&bull;</span>
              <span className="text-amber-400 font-medium tracking-wide">
                {tagline}
              </span>
            </div>

            {/* Right: Focused Top Nav Links */}
            <div className="flex items-center gap-5 text-slate-300 font-medium">
              <Link
                href="/investor-portal"
                className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Investor Relations</span>
              </Link>
              <span className="text-slate-700">|</span>
              <Link
                href="/careers"
                className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
              >
                <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                <span>Careers</span>
              </Link>
              <span className="text-slate-700">|</span>
              <Link
                href="/media-press"
                className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
              >
                <Newspaper className="w-3.5 h-3.5 text-purple-400" />
                <span>Media &amp; Press</span>
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
          className={`transition-all duration-300 ${isScrolled
              ? 'bg-slate-950/95 backdrop-blur-md shadow-2xl border-b border-slate-800 py-3.5'
              : 'bg-slate-950/90 backdrop-blur-sm border-b border-slate-800/60 py-4.5'
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
                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-amber-400 -mt-0.5">
                  Excellence in Every Endeavor
                </span>
              </div>
            </Link>

            {/* Desktop Navigation: Reorganized with Dropdowns */}
            <nav className="hidden lg:flex items-center gap-1.5">
              <Link
                href="/"
                className="px-3.5 py-2 text-sm font-medium text-white hover:text-red-400 transition-colors rounded-lg hover:bg-slate-900/60"
              >
                Home
              </Link>

              {/* About Us Dropdown Trigger */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMegaMenu('about')}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <Link
                  href="/about-us"
                  className="px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-white flex items-center gap-1.5 rounded-lg hover:bg-slate-900/60 transition-colors group"
                >
                  <span>About Us</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 group-hover:text-white transition-transform duration-200 ${activeMegaMenu === 'about' ? 'rotate-180 text-red-500' : ''
                      }`}
                  />
                </Link>

                {/* Animated Dropdown Menu for About Us */}
                <AnimatePresence>
                  {activeMegaMenu === 'about' && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="absolute top-full left-0 mt-2 w-80 bg-slate-900/98 backdrop-blur-2xl border border-slate-800 rounded-2xl p-3 shadow-2xl shadow-black/90 z-50 space-y-1"
                    >
                      <div className="px-3 py-2 border-b border-slate-800/80 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          About BEST GROUP Conglomerate
                        </span>
                      </div>
                      {aboutSublinks.map((sub, idx) => {
                        const SubIcon = sub.icon;
                        return (
                          <Link
                            key={idx}
                            href={sub.href}
                            onClick={() => setActiveMegaMenu(null)}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-950/80 transition-all duration-150 group"
                          >
                            <div className={`p-2 rounded-lg border ${sub.color} shrink-0 mt-0.5`}>
                              <SubIcon className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-white group-hover:text-red-400 transition-colors">
                                  {sub.title}
                                </span>
                                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-400">
                                  {sub.badge}
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-400 mt-0.5 leading-snug line-clamp-1">
                                {sub.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mega-Menu Trigger for Business Wings */}
              <div
                className="relative"
                onMouseEnter={() => setActiveMegaMenu('wings')}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <Link
                  href="/our-sister-concern"
                  className="px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-white flex items-center gap-1.5 rounded-lg hover:bg-slate-900/60 transition-colors group"
                >
                  <span>Our Ventures &amp; Wings</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 group-hover:text-white transition-transform duration-200 ${activeMegaMenu === 'wings' ? 'rotate-180 text-red-500' : ''
                      }`}
                  />
                </Link>

                {/* Animated Mega-Menu Dropdown Panel */}
                <AnimatePresence>
                  {activeMegaMenu === 'wings' && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[850px] bg-slate-900/98 backdrop-blur-2xl border border-slate-800 rounded-2xl p-6 shadow-2xl shadow-black/90 z-50 grid grid-cols-12 gap-6"
                    >
                      {/* Left Wings List */}
                      <div className="col-span-8 grid grid-cols-2 gap-4">
                        {businessWings.map((wing, idx) => {
                          const Icon = wing.icon;
                          return (
                            <Link
                              key={idx}
                              href={wing.href || "/our-sister-concern"}
                              onClick={() => setActiveMegaMenu(null)}
                              className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-red-500/40 hover:bg-slate-950 transition-all duration-200 group flex flex-col justify-between"
                            >
                              <div className="flex items-start gap-3">
                                <div className={`p-2 rounded-lg border ${wing.color} shrink-0`}>
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div>
                                  <h4 className="text-xs font-bold text-white group-hover:text-red-400 transition-colors">
                                    {wing.title}
                                  </h4>
                                  <p className="text-[11px] text-slate-400 mt-0.5 leading-snug line-clamp-1">
                                    {wing.subtitle}
                                  </p>
                                </div>
                              </div>
                              <div className="mt-2.5 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px]">
                                <span className="font-mono text-slate-400">{wing.stats}</span>
                                <span className="text-red-400 group-hover:translate-x-0.5 transition-transform font-semibold flex items-center gap-0.5">
                                  View Entity <ArrowRight className="w-3 h-3" />
                                </span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      {/* Right Conglomerate Highlight Column */}
                      <div className="col-span-4 p-5 rounded-xl bg-gradient-to-br from-red-950/40 via-slate-950 to-slate-950 border border-red-900/30 flex flex-col justify-between">
                        <div>
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 text-[11px] font-bold uppercase tracking-wider mb-2 border border-amber-500/20">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>Central Headquarters</span>
                          </div>
                          <h4 className="text-sm font-extrabold text-white mt-1">
                            BEST GROUP Corporate Governance
                          </h4>
                          <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                            9th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000.<br />
                            Hotline: 01910-203058, 01711-626577
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-800/80">
                          <Link
                            href="/corporate-desk"
                            onClick={() => setActiveMegaMenu(null)}
                            className="w-full py-2 px-3 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                          >
                            <span>Executive Corporate Desk</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Corporate Desk Link */}
              <Link
                href="/corporate-desk"
                className="px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-white transition-colors rounded-lg hover:bg-slate-900/60"
              >
                Corporate Desk
              </Link>

              {/* Contact Link */}
              <Link
                href="/contact"
                className="px-3.5 py-2 text-sm font-medium text-slate-200 hover:text-white transition-colors rounded-lg hover:bg-slate-900/60"
              >
                Contact
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

              {/* Primary Enterprise CTA */}
              <Link
                href="/investor-portal"
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
              className="lg:hidden bg-slate-950/98 border-b border-slate-800 backdrop-blur-2xl px-6 py-6 max-h-[85vh] overflow-y-auto"
            >
              <div className="space-y-4">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-base font-semibold text-white hover:text-red-400 border-b border-slate-800/80"
                >
                  Home
                </Link>

                {/* Mobile About Us Accordion */}
                <div className="py-2 border-b border-slate-800/80">
                  <button
                    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                    className="w-full flex items-center justify-between text-base font-semibold text-white hover:text-red-400"
                  >
                    <span>About BEST GROUP</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${mobileAboutOpen ? 'rotate-180 text-red-500' : ''}`}
                    />
                  </button>

                  {mobileAboutOpen && (
                    <div className="grid grid-cols-1 gap-2 pt-3 pl-2">
                      {aboutSublinks.map((sub, idx) => (
                        <Link
                          key={idx}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-sm font-medium text-slate-300 hover:text-white py-1.5 flex items-center justify-between"
                        >
                          <span>{sub.title}</span>
                          <span className="text-[10px] text-slate-500">{sub.badge}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Business Wings Accordion */}
                <div className="py-2 border-b border-slate-800/80">
                  <Link
                    href="/our-sister-concern"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2 block hover:underline"
                  >
                    6 Listed Companies &amp; Wings
                  </Link>
                  <div className="grid grid-cols-1 gap-2 pl-2">
                    {businessWings.map((wing, idx) => (
                      <Link
                        key={idx}
                        href={wing.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-sm font-medium text-slate-300 hover:text-white py-1 flex items-center justify-between"
                      >
                        <span>{wing.title}</span>
                        <span className="text-[10px] text-slate-500">{wing.stats}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/corporate-desk"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-base font-semibold text-white hover:text-red-400 border-b border-slate-800/80"
                >
                  Corporate Desk
                </Link>

                <Link
                  href="/careers"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-base font-semibold text-white hover:text-red-400 border-b border-slate-800/80"
                >
                  Careers
                </Link>

                <Link
                  href="/media-press"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-base font-semibold text-white hover:text-red-400 border-b border-slate-800/80"
                >
                  Media &amp; Press
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-base font-semibold text-white hover:text-red-400 border-b border-slate-800/80"
                >
                  Contact Us
                </Link>

                <Link
                  href="/investor-portal"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-base font-semibold text-amber-400 hover:text-amber-300"
                >
                  Investor Desk &bull; Portal Access &rarr;
                </Link>
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
                  <span>Search BEST GROUP Ecosystem</span>
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
                  placeholder="Type to search (e.g., Careers, Press, Corporate Desk, Pharmacy, Real Estate)..."
                  className="w-full px-4 py-3.5 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 text-base focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  autoFocus
                />
              </div>

              <div className="mt-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Quick Links
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'Corporate Desk', href: '/corporate-desk' },
                    { label: 'Careers at Best Group', href: '/careers' },
                    { label: 'Media & Press Center', href: '/media-press' },
                    { label: '6 Listed Wings', href: '/our-sister-concern' },
                    { label: 'Chairman’s Message', href: '/chairmans-message' },
                    { label: 'Investor Portal', href: '/investor-portal' },
                  ].map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setSearchModalOpen(false)}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-300 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
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
