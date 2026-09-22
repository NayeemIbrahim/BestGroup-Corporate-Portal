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
  const siteName = settings?.site_identity?.site_name || 'BestGroup';
  const tagline =
    settings?.site_identity?.tagline ||
    'A premier holding conglomerate operating benchmark ventures across Real Estate, E-Commerce, Modern Healthcare, and Global Tourism.';
  const headquarters = settings?.site_identity?.headquarters || 'Plot 42, Gulshan Avenue, Dhaka 1212';
  const phone = settings?.site_identity?.phone || '+880 1800-BESTGRP';
  const email = settings?.site_identity?.support_email || 'corporate@bestgroup.com';

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
              <div className="text-xs text-slate-400">4 Enterprise Wings Under One Flag</div>
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
                Nationwide Presence
              </div>
              <div className="text-xs text-slate-400">Over 100K+ Clients & Patients Served</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-600/10 border border-red-500/20 text-red-500 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                Investor Relations
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
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400 -mt-1">
                  Conglomerate Holdings
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {tagline}
            </p>

            {/* Newsletter Subscription Box */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                Subscribe to Investor Bulletin
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

          {/* Column 2: Business Wings (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-red-500 rounded-full"></span>
              <span>Our Business Wings</span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#wings"
                  className="text-slate-300 hover:text-red-400 flex items-center justify-between text-sm transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-amber-500" />
                    <span>Best Real Estate</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="#wings"
                  className="text-slate-300 hover:text-red-400 flex items-center justify-between text-sm transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-blue-500" />
                    <span>Best E-Commerce</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="#wings"
                  className="text-slate-300 hover:text-red-400 flex items-center justify-between text-sm transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-emerald-500" />
                    <span>Best Model Pharmacy</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="#wings"
                  className="text-slate-300 hover:text-red-400 flex items-center justify-between text-sm transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <Plane className="w-4 h-4 text-rose-500" />
                    <span>Best Travel & Tours</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
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
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="#services" className="hover:text-red-400 transition-colors">
                  Capabilities & R&D
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-red-400 transition-colors">
                  Corporate Governance
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-red-400 transition-colors">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-red-400 transition-colors">
                  Career Opportunities
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-red-400 transition-colors">
                  Sustainability Goals
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
                  href="#contact"
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
            <Link href="#privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-slate-300 transition-colors">
              Terms of Engagement
            </Link>
            <Link href="#compliance" className="hover:text-slate-300 transition-colors">
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
