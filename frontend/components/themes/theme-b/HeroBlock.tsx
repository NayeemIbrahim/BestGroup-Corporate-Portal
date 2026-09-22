'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HeroBlockContent } from '@/types/cms';
import {
  ArrowUpRight,
  Sparkles,
  Zap,
  Globe2,
  TrendingUp,
  ShieldCheck,
  Building,
  Layers,
  CheckCircle2
} from 'lucide-react';

interface HeroBlockProps {
  content: HeroBlockContent;
}

export const ThemeBHeroBlock: React.FC<HeroBlockProps> = ({ content }) => {
  const {
    title = 'Building the Future of Commerce & Living',
    subtitle = 'A premier diversified group with benchmark ventures in Real Estate, E-Commerce, Modern Healthcare, and Global Tourism.',
    background_image_url = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    button_text = 'Explore Business Wings',
    button_link = '#wings',
  } = content || {};

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center bg-gray-950 text-white overflow-hidden pt-36 pb-20">
      {/* Dynamic Background Glow Blobs */}
      <div className="absolute top-1/4 -left-32 w-[550px] h-[550px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[550px] h-[550px] bg-teal-500/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Modern Diagonal Grid Accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Agency Typography (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            {/* Minimalist Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs mb-8 backdrop-blur-md">
              <Zap className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
              <span>THEME B • MODERN STUDIO ARCHITECTURE</span>
            </div>

            {/* Split Headline with Gradient Text */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-white mb-6">
              {title.split(' ')[0]}{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                {title.split(' ').slice(1, 4).join(' ')}
              </span>{' '}
              {title.split(' ').slice(4).join(' ')}
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mb-10">
              {subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={button_link}
                className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-mono font-bold text-sm tracking-wide transition-all duration-300 shadow-xl shadow-emerald-500/25 hover:scale-105 active:scale-95 inline-flex items-center gap-2"
              >
                <span>{button_text}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 font-mono text-sm tracking-wide transition-all duration-200 backdrop-blur-md inline-flex items-center gap-2"
              >
                <span>04 // Liaison Desk</span>
              </a>
            </div>

            {/* Micro Indicator Bar */}
            <div className="grid grid-cols-3 gap-4 mt-14 pt-8 border-t border-white/10 max-w-xl">
              <div>
                <div className="text-2xl font-mono font-bold text-emerald-400">04 Wings</div>
                <div className="text-xs text-gray-400 font-mono mt-1">Multi-Sector Matrix</div>
              </div>
              <div>
                <div className="text-2xl font-mono font-bold text-emerald-400">100%</div>
                <div className="text-xs text-gray-400 font-mono mt-1">Headless Engine</div>
              </div>
              <div>
                <div className="text-2xl font-mono font-bold text-emerald-400">Next.js 16</div>
                <div className="text-xs text-gray-400 font-mono mt-1">App Router SSR</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Abstract Glass Creative Showcase (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Outer Glass Card Frame */}
            <div className="relative rounded-3xl p-3 bg-gradient-to-b from-white/10 to-white/5 border border-white/15 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
              {/* Image Container with Dark Vignette */}
              <div className="relative w-full h-[460px] rounded-2xl overflow-hidden bg-gray-900">
                <img
                  src={background_image_url}
                  alt="Theme B Abstract Hero"
                  className="w-full h-full object-cover brightness-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />

                {/* Floating Glass Widget 1 (Top Left) */}
                <div className="absolute top-4 left-4 p-3.5 rounded-2xl bg-gray-950/80 border border-white/10 backdrop-blur-xl shadow-xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold font-mono">
                    BG
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white font-mono">BestGroup Studio</div>
                    <div className="text-[10px] text-emerald-400 font-mono">Live Theme Engine</div>
                  </div>
                </div>

                {/* Floating Glass Widget 2 (Bottom Right) */}
                <div className="absolute bottom-4 right-4 left-4 p-4 rounded-2xl bg-gray-950/85 border border-white/10 backdrop-blur-xl shadow-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500 text-gray-950">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Dynamic Stacking Blocks</div>
                      <div className="text-[10px] text-gray-400">Filament v3 JSON Schema</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400">01 / 04</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default ThemeBHeroBlock;
