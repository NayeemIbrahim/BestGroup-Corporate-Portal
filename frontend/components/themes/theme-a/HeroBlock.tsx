'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroBlockContent } from '@/types/cms';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Building,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface HeroBlockProps {
  content: HeroBlockContent;
}

interface SlideItem {
  title: string;
  subtitle: string;
  image: string;
  badge: string;
  ctaText: string;
  ctaLink: string;
}

export const ThemeAHeroBlock: React.FC<HeroBlockProps> = ({ content }) => {
  const {
    title = 'Building the Future of Commerce & Living',
    subtitle = 'A premier diversified group with benchmark ventures in Real Estate, E-Commerce, Modern Healthcare, and Global Tourism.',
    background_image_url = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    button_text = 'Explore Business Wings',
    button_link = '#wings',
  } = content || {};

  // Enterprise Slider Items (First item initialized with dynamic CMS block data)
  const slides: SlideItem[] = [
    {
      title: title,
      subtitle: subtitle,
      image: background_image_url,
      badge: 'BestGroup Holding Conglomerate',
      ctaText: button_text,
      ctaLink: button_link,
    },
    {
      title: 'Iconic Real Estate Developments & Smart Urban Communities',
      subtitle: 'Delivering landmark commercial towers and residential complexes across key metropolitan regions.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop',
      badge: 'Best Real Estate Wing',
      ctaText: 'Discover Properties',
      ctaLink: '#wings',
    },
    {
      title: 'Digital Logistics & Nationwide Healthcare Supply Network',
      subtitle: 'Powering automated e-commerce delivery and certified model pharmacies with 100% authentic medicine.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
      badge: 'Retail & Healthcare Wings',
      ctaText: 'Explore Supply Chain',
      ctaLink: '#wings',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const active = slides[currentSlide];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-slate-950 text-white overflow-hidden pt-28 pb-16">
      {/* Background Slider Carousel with Cross-fade */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <img
              src={active.image}
              alt={active.title}
              className="w-full h-full object-cover object-center opacity-30 brightness-90"
            />
          </motion.div>
        </AnimatePresence>

        {/* Multi-Layered Enterprise Gradient Overlay (RFL Corporate Style) */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-600/15 via-transparent to-transparent" />
      </div>

      {/* Grid Pattern Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          {/* Animated Enterprise Badge */}
          <motion.div
            key={`badge-${currentSlide}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md shadow-lg shadow-red-600/10"
          >
            <Sparkles className="w-3.5 h-3.5 text-red-400" />
            <span>{active.badge}</span>
          </motion.div>

          {/* Animated Hero Headline */}
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-white drop-shadow-md mb-6"
          >
            {active.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            key={`subtitle-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mb-10"
          >
            {active.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            key={`cta-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href={active.ctaLink}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-extrabold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-red-600/25 hover:shadow-red-600/40 hover:-translate-y-0.5 inline-flex items-center gap-2.5 active:scale-95"
            >
              <span>{active.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-500 font-bold text-sm uppercase tracking-wider transition-all duration-200 backdrop-blur-md inline-flex items-center gap-2"
            >
              <span>Corporate Desk</span>
            </a>
          </motion.div>
        </div>

        {/* Bottom Banner Stats Strip & Slider Pagination Controls */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* 4 Trust Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full md:w-auto">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 font-bold">
                04
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">Business Wings</div>
                <div className="text-[11px] text-slate-400">Integrated Enterprise</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 font-bold">
                25+
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">Years of Trust</div>
                <div className="text-[11px] text-slate-400">Pioneering Growth</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 font-bold">
                100k+
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">Happy Clients</div>
                <div className="text-[11px] text-slate-400">Across All Sectors</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 font-bold">
                100%
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">ISO Compliant</div>
                <div className="text-[11px] text-slate-400">Quality Assured</div>
              </div>
            </div>
          </div>

          {/* Slider Pagination Dots & Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
              title="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1.5 px-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === i ? 'w-8 bg-red-500' : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
              title="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ThemeAHeroBlock;
