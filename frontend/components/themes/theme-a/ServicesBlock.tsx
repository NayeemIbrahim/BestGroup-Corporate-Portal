'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ServicesBlockContent } from '@/types/cms';
import {
  Building2,
  ShoppingBag,
  HeartPulse,
  Plane,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Award,
  ArrowRight,
  Globe2
} from 'lucide-react';

interface ServicesBlockProps {
  content: ServicesBlockContent;
}

const serviceMetaList = [
  {
    icon: Building2,
    badge: 'Real Estate & Infrastructure',
    accent: 'from-amber-500/20 to-transparent',
    border: 'hover:border-amber-500/40',
    color: 'text-amber-400',
  },
  {
    icon: ShoppingBag,
    badge: 'Digital Commerce & Supply Logistics',
    accent: 'from-blue-500/20 to-transparent',
    border: 'hover:border-blue-500/40',
    color: 'text-blue-400',
  },
  {
    icon: HeartPulse,
    badge: 'Healthcare & Cold-Chain Network',
    accent: 'from-emerald-500/20 to-transparent',
    border: 'hover:border-emerald-500/40',
    color: 'text-emerald-400',
  },
  {
    icon: Plane,
    badge: 'Global Tourism & Aviation Services',
    accent: 'from-rose-500/20 to-transparent',
    border: 'hover:border-rose-500/40',
    color: 'text-rose-400',
  },
];

const defaultServices = [
  {
    icon: 'Building2',
    title: 'Luxury & Commercial Real Estate',
    description: 'Developing state-of-the-art residential condominiums, commercial hubs, and green-certified industrial parks.',
  },
  {
    icon: 'ShoppingBag',
    title: 'Omnichannel E-Commerce',
    description: 'Nationwide consumer retail ecosystem powering tens of thousands of daily direct-to-consumer deliveries.',
  },
  {
    icon: 'HeartPulse',
    title: 'Best Model Pharmacy Network',
    description: 'Standardized retail pharmacies guaranteeing 100% authentic medicine, professional consultation, and cold-chain compliance.',
  },
  {
    icon: 'Plane',
    title: 'Best Travel & Tours',
    description: 'Luxury business travel, inbound tourism, customized holiday getaways, and worldwide visa & ticketing facilitation.',
  },
];

export const ThemeAServicesBlock: React.FC<ServicesBlockProps> = ({ content }) => {
  const section_title = content?.section_title || 'Our Strategic Business Capabilities';
  const section_subtitle = content?.section_subtitle || 'Pioneering excellence across diversified high-growth sectors with benchmark infrastructure.';
  const rawList = content?.services_list;
  const services_list = Array.isArray(rawList) && rawList.length > 0 
    ? rawList 
    : typeof rawList === 'string' && rawList.trim().startsWith('[')
    ? (function() { try { return JSON.parse(rawList); } catch { return defaultServices; } })()
    : defaultServices;

  return (
    <section id="services" className="py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      {/* Top Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header (RFL Corporate Style) */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Corporate Capabilities & Governance</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            {section_title}
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            {section_subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services_list.map((service, idx) => {
            const meta = serviceMetaList[idx % serviceMetaList.length];
            const Icon = meta.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800/90 ${meta.border} transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 hover:-translate-y-1`}
              >
                {/* Top Subtle Gradient Light */}
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${meta.accent} blur-2xl rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
                  {/* Icon Box */}
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-red-500 group-hover:scale-110 group-hover:border-red-500/40 transition-transform duration-300 shrink-0 shadow-lg">
                    <Icon className="w-8 h-8 text-red-400" />
                  </div>

                  <div className="flex-1">
                    <div className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                      {meta.badge}
                    </div>

                    <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-slate-300 leading-relaxed text-sm sm:text-base">
                      {service.description}
                    </p>

                    {/* Feature Quality Assurance Badge */}
                    <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2 text-slate-400 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>ISO 9001:2015 Compliant SLA</span>
                      </div>

                      <a
                        href="#contact"
                        className="text-red-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                      >
                        <span>Corporate Desk</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Corporate Footnote */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
            <Globe2 className="w-4 h-4 text-red-400" />
            <span>
              BestGroup serves over 100,000+ business clients and households nationwide across Bangladesh & beyond.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ThemeAServicesBlock;
