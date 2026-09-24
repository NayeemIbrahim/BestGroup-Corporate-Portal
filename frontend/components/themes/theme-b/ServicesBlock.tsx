'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServicesBlockContent } from '@/types/cms';
import {
  Plus,
  Minus,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Sparkles
} from 'lucide-react';

interface ServicesBlockProps {
  content: ServicesBlockContent;
}

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

export const ThemeBServicesBlock: React.FC<ServicesBlockProps> = ({ content }) => {
  const section_title = content?.section_title || 'Our Strategic Business Capabilities';
  const section_subtitle = content?.section_subtitle || 'Pioneering excellence across diversified high-growth sectors with benchmark infrastructure.';
  const rawList: any = content?.services_list;
  const services_list: any[] = Array.isArray(rawList) && rawList.length > 0 
    ? rawList 
    : typeof rawList === 'string' && (rawList as string).trim().startsWith('[')
    ? (function() { try { return JSON.parse(rawList as string); } catch { return defaultServices; } })()
    : defaultServices;

  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const deliverablesMap = [
    ['Architectural Design & LEED Certification', 'Smart Residential Automation', 'Prime Commercial Asset Management'],
    ['Nationwide Same-Day Dispatch Logistics', 'Automated Cold-Chain Warehousing', 'Omnichannel Customer Experience'],
    ['100% Authentic Pharmaceutical Sourcing', '24/7 Licensed Pharmacist Consultation', 'Temperature-Regulated Logistics'],
    ['Customized Executive Corporate Itineraries', 'VIP Airport & Visa Facilitation', 'Bespoke Luxury Global Getaways'],
  ];

  return (
    <section id="services" className="py-28 bg-gray-950 text-white relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Minimalist Studio Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>03 // CAPABILITIES & DELIVERABLES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              {section_title}
            </h2>
          </div>
          <p className="text-gray-400 font-mono text-xs max-w-sm mt-4 md:mt-0 leading-relaxed">
            {section_subtitle}
          </p>
        </div>

        {/* Minimalist Accordion List View (Theme B Style) */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {services_list.map((service: any, idx: number) => {
            const isOpen = activeAccordion === idx;
            const deliverables = deliverablesMap[idx % deliverablesMap.length];

            return (
              <div key={idx} className="py-8 transition-colors duration-200">
                {/* Accordion Row Header */}
                <button
                  onClick={() => setActiveAccordion(isOpen ? null : idx)}
                  className="w-full text-left flex items-start justify-between gap-6 group"
                >
                  <div className="flex items-start gap-6">
                    <span className="font-mono text-sm font-bold text-emerald-400/80 pt-1">
                      0{idx + 1} //
                    </span>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-emerald-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-400 mt-2 font-mono max-w-2xl leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Toggle Button Icon */}
                  <div
                    className={`p-3 rounded-full border transition-all duration-300 shrink-0 ${
                      isOpen
                        ? 'bg-emerald-500 text-gray-950 border-emerald-400'
                        : 'bg-gray-900 text-gray-400 border-white/10 group-hover:text-white group-hover:border-white/30'
                    }`}
                  >
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                {/* Animated Accordion Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 pl-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {deliverables.map((item, dIdx) => (
                          <div
                            key={dIdx}
                            className="p-4 rounded-2xl bg-gray-900/60 border border-white/5 flex items-start gap-3"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="text-xs font-mono text-gray-300 leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-6 pl-14 flex items-center justify-between">
                        <span className="text-xs font-mono text-gray-500">
                          ISO 9001:2015 Process Architecture
                        </span>
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 font-bold"
                        >
                          <span>Request RFP Scope</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ThemeBServicesBlock;
