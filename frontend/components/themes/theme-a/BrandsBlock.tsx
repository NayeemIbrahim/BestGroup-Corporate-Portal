'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BrandsBlockContent } from '@/types/cms';
import {
  ExternalLink,
  Layers,
  ArrowRight,
  ShieldCheck,
  Building,
  ShoppingBag,
  HeartPulse,
  Plane,
  Sparkles
} from 'lucide-react';

interface BrandsBlockProps {
  content: BrandsBlockContent;
}

const wingDetailsMap: Record<
  string,
  {
    icon: React.ComponentType<{ className?: string }>;
    accentColor: string;
    borderColor: string;
    tagline: string;
    highlights: string[];
  }
> = {
  'Best Real Estate': {
    icon: Building,
    accentColor: 'from-amber-600 to-amber-500',
    borderColor: 'group-hover:border-amber-500/50',
    tagline: 'Mega-Commercial Towers & Smart Residencies',
    highlights: ['12M+ Sq.Ft Delivered', 'Green Building LEED Certified', 'Prime Metropolitan Landbanks'],
  },
  'Best E-Commerce': {
    icon: ShoppingBag,
    accentColor: 'from-blue-600 to-blue-500',
    borderColor: 'group-hover:border-blue-500/50',
    tagline: 'Nationwide Direct-to-Consumer Logistics',
    highlights: ['50K+ Daily Deliveries', 'Automated Hub Fulfillment', '99.8% On-Time SLA'],
  },
  'Best Model Pharmacy': {
    icon: HeartPulse,
    accentColor: 'from-emerald-600 to-emerald-500',
    borderColor: 'group-hover:border-emerald-500/50',
    tagline: 'Standardized Cold-Chain Medicine Chain',
    highlights: ['100% Authentic Guarantee', '150+ Flagship Pharmacies', '24/7 Pharmacist Hotline'],
  },
  'Best Travel & Tours': {
    icon: Plane,
    accentColor: 'from-rose-600 to-rose-500',
    borderColor: 'group-hover:border-rose-500/50',
    tagline: 'Luxury Corporate & Leisure Global Itineraries',
    highlights: ['40+ International Destinations', 'Corporate VIP Concierge', 'IATA Certified Operator'],
  },
};

const defaultBrands = [
  {
    brand_name: 'Best Real Estate',
    logo_url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=300&auto=format&fit=crop',
    website_link: '#real-estate',
  },
  {
    brand_name: 'Best E-Commerce',
    logo_url: 'https://images.unsplash.com/photo-1556742049-0a67e55722c6?q=80&w=300&auto=format&fit=crop',
    website_link: '#ecommerce',
  },
  {
    brand_name: 'Best Model Pharmacy',
    logo_url: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=300&auto=format&fit=crop',
    website_link: '#pharmacy',
  },
  {
    brand_name: 'Best Travel & Tours',
    logo_url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=300&auto=format&fit=crop',
    website_link: '#travel',
  },
];

export const ThemeABrandsBlock: React.FC<BrandsBlockProps> = ({ content }) => {
  const rawList = content?.brands_list;
  const brands = Array.isArray(rawList) && rawList.length > 0 
    ? rawList 
    : typeof rawList === 'string' && rawList.trim().startsWith('[')
    ? (function() { try { return JSON.parse(rawList); } catch { return defaultBrands; } })()
    : defaultBrands;

  return (
    <section id="wings" className="py-28 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
      {/* Subtle Background Accent Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header with Conglomerate Badge */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Strategic Business Wings</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Integrated Enterprises of BestGroup
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            Each business wing is a market-defining pillar with dedicated infrastructure, certified governance, and trusted delivery.
          </p>
        </div>

        {/* 4-Card Enterprise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {brands.map((brand, idx) => {
            const meta = wingDetailsMap[brand.brand_name] || {
              icon: Building,
              accentColor: 'from-red-600 to-red-500',
              borderColor: 'group-hover:border-red-500/50',
              tagline: 'Leading Sector Enterprise',
              highlights: ['ISO Certified Quality', 'Dedicated Governance', 'Nationwide Coverage'],
            };
            const Icon = meta.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative rounded-2xl bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-900 border border-slate-800 ${meta.borderColor} p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 hover:-translate-y-1.5 flex flex-col justify-between`}
              >
                <div>
                  {/* Wing Visual Banner / Preview */}
                  <div className="w-full h-48 rounded-xl overflow-hidden mb-5 bg-slate-900 relative border border-slate-800">
                    <img
                      src={brand.logo_url}
                      alt={brand.brand_name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                    {/* Wing Sector Floating Tag */}
                    <div className="absolute top-3 right-3 p-2 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-800 text-white">
                      <Icon className="w-4 h-4 text-red-400" />
                    </div>

                    <div className="absolute bottom-3 left-3">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-slate-900/90 text-red-400 border border-slate-800 font-mono">
                        Wing 0{idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-extrabold text-white group-hover:text-red-400 transition-colors">
                    {brand.brand_name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-300 mt-1">
                    {meta.tagline}
                  </p>

                  {/* Highlight Checklist */}
                  <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-2">
                    {meta.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span>
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <a
                    href={brand.website_link || '#'}
                    className="text-xs font-bold text-slate-300 group-hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Explore Wing</span>
                    <ArrowRight className="w-3.5 h-3.5 text-red-400 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href={brand.website_link || '#'}
                    className="p-2 rounded-lg bg-slate-800 text-slate-300 group-hover:bg-red-600 group-hover:text-white transition-all duration-200"
                    title={`Open ${brand.brand_name}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Corporate Trust Banner below wings */}
        <div className="mt-16 p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="p-3 rounded-xl bg-red-600/10 border border-red-500/20 text-red-500 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Centralized Quality Assurance & Compliance</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                All 4 wings adhere to strict ISO standards, transparent auditing, and sustainable development principles.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold uppercase tracking-wider text-white shrink-0 transition-colors"
          >
            Corporate Governance
          </a>
        </div>
      </div>
    </section>
  );
};
export default ThemeABrandsBlock;
