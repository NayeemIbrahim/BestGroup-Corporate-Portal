'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BrandsBlockContent } from '@/types/cms';
import {
  ArrowUpRight,
  Sparkles,
  Zap,
  Building,
  ShoppingBag,
  HeartPulse,
  Plane,
  Layers,
  ChevronRight
} from 'lucide-react';

interface BrandsBlockProps {
  content: BrandsBlockContent;
}

const defaultBrands = [
  {
    brand_name: 'Best Group',
    logo_url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop',
    website_link: '/our-sister-concern#best-group',
  },
  {
    brand_name: 'Best Product International Ltd.',
    logo_url: 'https://images.unsplash.com/photo-1556742049-0a67e55722c6?q=80&w=600&auto=format&fit=crop',
    website_link: '/our-sister-concern#best-product',
  },
  {
    brand_name: 'Best South City Ltd.',
    logo_url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600&auto=format&fit=crop',
    website_link: '/our-sister-concern#best-south-city',
  },
  {
    brand_name: 'Best Commercial & Builders Ltd.',
    logo_url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop',
    website_link: '/our-sister-concern#best-commercial-builders',
  },
  {
    brand_name: 'Best Model Pharmacy Ltd.',
    logo_url: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=600&auto=format&fit=crop',
    website_link: '/our-sister-concern#best-model-pharmacy',
  },
  {
    brand_name: 'Best International Overseas',
    logo_url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&auto=format&fit=crop',
    website_link: '/our-sister-concern#best-international-overseas',
  },
];

export const ThemeBBrandsBlock: React.FC<BrandsBlockProps> = ({ content }) => {
  const rawList: any = content?.brands_list;
  const brands: any[] = Array.isArray(rawList) && rawList.length > 0 
    ? rawList 
    : typeof rawList === 'string' && (rawList as string).trim().startsWith('[')
    ? (function() { try { return JSON.parse(rawList as string); } catch { return defaultBrands; } })()
    : defaultBrands;
  const [activeBrandIndex, setActiveBrandIndex] = useState(0);

  const wingDetails = [
    {
      code: 'CORP-01',
      tagline: 'Excellence in Every Endeavor — Parent Holding & Governance',
      metric: 'EST. GROUP',
      metricLabel: 'Apex Governance',
      category: 'Conglomerate Holding',
    },
    {
      code: 'ECOM-02',
      tagline: 'Premier E-Commerce Infrastructure & Consumer Retail',
      metric: '50K+ DAILY',
      metricLabel: 'Orders Fulfilled',
      category: 'E-Commerce & Logistics',
    },
    {
      code: 'PROP-03',
      tagline: 'Master-Planned Urban Communities & Modern Living',
      metric: '10M+ SQFT',
      metricLabel: 'Townships Developed',
      category: 'Urban Real Estate',
    },
    {
      code: 'BLD-04',
      tagline: 'High-Rise Commercial Towers & Infrastructure Engineering',
      metric: '15+ TOWERS',
      metricLabel: 'Completed Projects',
      category: 'Commercial Construction',
    },
    {
      code: 'PHAR-05',
      tagline: 'Standardized Model Pharmacy Network & Authentic Healthcare',
      metric: '100% GENUINE',
      metricLabel: 'DGDA Certified Chain',
      category: 'Healthcare & Retail',
    },
    {
      code: 'TRV-06',
      tagline: 'Global Mobility, Executive Corporate Travel & Aviation Tours',
      metric: '45+ GLOBAL',
      metricLabel: 'Destinations',
      category: 'Travel & Global Tours',
    },
  ];

  return (
    <section id="wings" className="py-28 bg-gray-950 text-white relative overflow-hidden border-y border-white/5">
      {/* Dynamic Animated Marquee Strip at the Top of Section */}
      <div className="w-full overflow-hidden whitespace-nowrap border-b border-white/5 py-4 bg-gray-900/50 mb-16">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
          className="inline-flex items-center gap-12 font-mono text-xs uppercase tracking-widest text-gray-400"
        >
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex items-center gap-8">
                <span className="text-emerald-400 flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 fill-emerald-400" />
                  <span>BEST GROUP</span>
                </span>
                <span className="text-gray-600">•</span>
                <span className="text-teal-400">BEST PRODUCT INTERNATIONAL LTD.</span>
                <span className="text-gray-600">•</span>
                <span className="text-cyan-400">BEST SOUTH CITY LTD.</span>
                <span className="text-gray-600">•</span>
                <span className="text-blue-400">BEST COMMERCIAL & BUILDERS LTD.</span>
                <span className="text-gray-600">•</span>
                <span className="text-purple-400">BEST MODEL PHARMACY LTD.</span>
                <span className="text-gray-600">•</span>
                <span className="text-amber-400">BEST INTERNATIONAL OVERSEAS</span>
                <span className="text-gray-600">•</span>
              </div>
            ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Minimal Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>02 // ECOSYSTEM PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              6 Listed Companies &amp; Business Wings
            </h2>
          </div>
          <p className="text-gray-400 font-mono text-xs max-w-sm mt-4 md:mt-0 leading-relaxed">
            Excellence in Every Endeavor across Holding Governance, E-Commerce, Real Estate, Commercial Construction, Model Pharmacy, and Global Travel.
          </p>
        </div>

        {/* Masonry / Interactive Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {brands.map((brand: any, idx: number) => {
            const meta = wingDetails[idx % wingDetails.length];
            const isFeatured = idx === 0 || idx === 3;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative rounded-3xl p-8 bg-gradient-to-b from-gray-900/90 to-gray-950 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-emerald-500/5 ${
                  isFeatured ? 'md:col-span-7' : 'md:col-span-5'
                }`}
              >
                <div>
                  {/* Top Identifier */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      {meta.code}
                    </span>
                    <span className="font-mono text-xs text-gray-500">{meta.category}</span>
                  </div>

                  {/* Brand Visual Preview */}
                  <div className="w-full h-44 rounded-2xl overflow-hidden mb-6 bg-gray-950 border border-white/10 relative">
                    <img
                      src={brand.logo_url}
                      alt={brand.brand_name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {brand.brand_name}
                  </h3>
                  <p className="text-sm text-gray-400 mt-2 font-mono leading-relaxed">
                    {meta.tagline}
                  </p>
                </div>

                {/* Bottom Metric & CTA */}
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-lg font-mono font-extrabold text-white">{meta.metric}</div>
                    <div className="text-[11px] font-mono text-gray-500 uppercase">{meta.metricLabel}</div>
                  </div>

                  <a
                    href={brand.website_link || '#'}
                    className="p-3 rounded-full bg-gray-950 border border-white/10 text-gray-300 group-hover:bg-emerald-500 group-hover:text-gray-950 transition-all duration-300 hover:rotate-45"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ThemeBBrandsBlock;
