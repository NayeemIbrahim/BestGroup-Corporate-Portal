'use client';

import React from 'react';
import Link from 'next/link';
import { GlobalSettings, ThemeData } from '@/types/cms';
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Award,
  ArrowRight,
  ExternalLink,
  Send,
  Building,
  ShoppingBag,
  HeartPulse,
  Plane
} from 'lucide-react';

interface ThemeAFooterProps {
  theme?: ThemeData | null;
  settings?: GlobalSettings;
}

export const ThemeAFooter: React.FC<ThemeAFooterProps> = ({ theme, settings }) => {
  const siteName = settings?.site_identity?.site_name || 'BEST GROUP';
  const tagline =
    settings?.site_identity?.tagline ||
    'BEST GROUP — Excellence in Every Endeavor — A premier multi-sector holding conglomerate operating benchmark enterprises across E-Commerce, Real Estate, Construction, Healthcare, and Global Travel.';
  const headquarters = settings?.site_identity?.headquarters || '9th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000';
  const phone = settings?.site_identity?.phone || '01910-203058, 01711-626577';
  const email = settings?.site_identity?.support_email || 'info@bestgroupatoz.com';

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm relative">
      {/* Top Pre-Footer Bar with Conglomerate Accreditations */}
      <div className="bg-slate-900/90 border-b border-slate-800/80 py-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-600/10 border border-red-500/20 text-red-500 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                Multi-Sector Scale
              </div>
              <div className="text-xs text-slate-400">6 Listed Companies Under One Flag</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-600/10 border border-red-500/20 text-red-500 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                ISO 9001:2015
              </div>
              <div className="text-xs text-slate-400">Standardized Corporate Governance</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-600/10 border border-red-500/20 text-red-500 shrink-0">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                Central Headquarters
              </div>
              <div className="text-xs text-slate-400">DBBL Wohid Tower, Motijheel, Dhaka</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-600/10 border border-red-500/20 text-red-500 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                Corporate Inquiries
              </div>
              <div className="text-xs text-slate-400">{email}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer Area */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: About BestGroup (4 cols) */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3.5 group mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 via-red-500 to-amber-500 text-white shadow-lg shadow-red-600/20">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white flex items-center gap-1">
                  BEST<span className="text-red-500">GROUP</span>
                </span>
                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-amber-400 -mt-0.5">
                  Excellence in Every Endeavor
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {tagline}
            </p>

            {/* Newsletter Subscription Box */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                Subscribe to Executive Bulletin
              </div>
              <form className="flex items-center gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter corporate email..."
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-red-500"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold shrink-0 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>

          {/* Column 2: Listed Companies (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-red-500 rounded-full"></span>
              <span>Listed Companies</span>
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/our-sister-concern#ecommerce"
                  className="text-slate-300 hover:text-red-400 flex items-center justify-between text-xs transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <ShoppingBag className="w-3.5 h-3.5 text-blue-500" />
                    <span>Best Product Int. Ltd.</span>
                  </span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="/our-sister-concern#real-estate"
                  className="text-slate-300 hover:text-red-400 flex items-center justify-between text-xs transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <Building className="w-3.5 h-3.5 text-amber-500" />
                    <span>Best South City Ltd.</span>
                  </span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="/our-sister-concern#construction"
                  className="text-slate-300 hover:text-red-400 flex items-center justify-between text-xs transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5 text-orange-500" />
                    <span>Best Commercial & Builders Ltd.</span>
                  </span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="/our-sister-concern#pharmacy"
                  className="text-slate-300 hover:text-red-400 flex items-center justify-between text-xs transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <HeartPulse className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Best Model Pharmacy Ltd.</span>
                  </span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="/our-sister-concern#travel"
                  className="text-slate-300 hover:text-red-400 flex items-center justify-between text-xs transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <Plane className="w-3.5 h-3.5 text-rose-500" />
                    <span>Best International Overseas</span>
                  </span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-slate-300 hover:text-red-400 flex items-center justify-between text-xs transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
                    <span>Best Group (Holding)</span>
                  </span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Important Corporate Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-red-500 rounded-full"></span>
              <span>Corporate Links</span>
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/about-us" className="hover:text-red-400 transition-colors">
                  About BEST GROUP
                </Link>
              </li>
              <li>
                <Link href="/chairmans-message" className="text-amber-300 hover:text-amber-200 transition-colors font-medium">
                  Chairman’s Message
                </Link>
              </li>
              <li>
                <Link href="/corporate-desk" className="hover:text-red-400 transition-colors">
                  Corporate Desk &amp; Governance
                </Link>
              </li>
              <li>
                <Link href="/mission-vision" className="hover:text-red-400 transition-colors">
                  Mission, Vision &amp; Values
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-red-400 transition-colors">
                  Careers &amp; Opportunities
                </Link>
              </li>
              <li>
                <Link href="/media-press" className="hover:text-red-400 transition-colors">
                  Media &amp; Press Center
                </Link>
              </li>
              <li>
                <Link href="/our-sister-concern" className="hover:text-red-400 transition-colors">
                  6 Listed Companies
                </Link>
              </li>
              <li>
                <Link href="/investor-portal" className="hover:text-red-400 transition-colors">
                  Investor Relations Desk
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-red-400 transition-colors">
                  FAQ &amp; Knowledge
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-400 transition-colors">
                  Contact Headquarters
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Headquarters (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-red-500 rounded-full"></span>
              <span>Headquarters Liaison</span>
            </h4>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-snug">{headquarters}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <span className="text-white font-semibold">{phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <span className="text-slate-300">{email}</span>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-white border border-slate-700 transition-colors"
                >
                  <span>Request Corporate Visit</span>
                  <ExternalLink className="w-3.5 h-3.5 text-red-400" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Copyright & Disclaimers */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {siteName} Holdings Ltd. All International Rights Reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-engagement" className="hover:text-slate-300 transition-colors">
              Terms of Engagement
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Compliance & Audit
            </Link>
            <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 font-mono text-red-400">
              Theme A • RFL Corporate Engine
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default ThemeAFooter;
