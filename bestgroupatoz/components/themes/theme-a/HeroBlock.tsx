'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
  Sparkles,
  Quote
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
    button_link = '/our-sister-concern',
  } = content || {};

  // Enterprise Slider Items (First item initialized with dynamic CMS block data)
  const slides: SlideItem[] = [
    {
      title: title,
      subtitle: subtitle,
      image: background_image_url,
      badge: 'BestGroup Holding Conglomerate',
      ctaText: button_text,
      ctaLink: button_link && button_link !== '#wings' ? button_link : '/our-sister-concern',
    },
    {
      title: 'Iconic Real Estate Developments & Smart Urban Communities',
      subtitle: 'Delivering landmark commercial towers and residential complexes across key metropolitan regions.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop',
      badge: 'Best Real Estate Wing',
      ctaText: 'Discover Properties',
      ctaLink: '/our-sister-concern',
    },
    {
      title: 'Digital Logistics & Nationwide Healthcare Supply Network',
      subtitle: 'Powering automated e-commerce delivery and certified model pharmacies with 100% authentic medicine.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
      badge: 'Retail & Healthcare Wings',
      ctaText: 'Explore Supply Chain',
      ctaLink: '/our-sister-concern',
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Hero Headline, Badge, Subtitle & CTA (7 cols on Desktop) */}
          <div className="lg:col-span-7">
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
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white drop-shadow-md mb-6"
            >
              {active.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mb-8"
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
              <Link
                href={active.ctaLink}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-extrabold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-red-600/25 hover:shadow-red-600/40 hover:-translate-y-0.5 inline-flex items-center gap-2.5 active:scale-95"
              >
                <span>{active.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-500 font-bold text-sm uppercase tracking-wider transition-all duration-200 backdrop-blur-md inline-flex items-center gap-2"
              >
                <span>Corporate Desk</span>
              </Link>
            </motion.div>

            {/* Mobile / Tablet Compact Chairman Strip */}
            <div className="lg:hidden mt-8 p-4 rounded-2xl bg-slate-900/90 border border-amber-500/30 backdrop-blur-md shadow-xl flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-xl p-0.5 bg-gradient-to-tr from-amber-400 to-red-500 shrink-0 overflow-hidden shadow-md">
                <img
                  src="/images/chairman.jpg"
                  alt="M.A. Mizanur Rahman"
                  className="w-full h-full object-cover object-top rounded-[10px]"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1">
                  <span>Chairman’s Message</span>
                </div>
                <div className="text-xs font-bold text-white truncate">
                  “Excellence in Every Endeavor.”
                </div>
                <div className="text-[11px] text-slate-400 truncate">
                  M.A. Mizanur Rahman • Chairman
                </div>
              </div>
              <Link
                href="/chairmans-message"
                className="px-3 py-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 text-xs font-bold shrink-0 transition-colors"
              >
                Read
              </Link>
            </div>
          </div>

          {/* Right Column: Executive Chairman Showcase Card (5 cols on Desktop) */}
          <div className="hidden lg:block lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-950/95 to-slate-900/90 border border-amber-500/35 backdrop-blur-xl shadow-2xl shadow-black/80 hover:border-amber-400/60 transition-all duration-300 group"
            >
              {/* Golden Ambient Glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/15 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/25 transition-all duration-500" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-red-600/15 rounded-full blur-2xl pointer-events-none" />

              {/* Card Header Strip */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-800/90">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-[11px] font-extrabold uppercase tracking-widest">
                  <Award className="w-3.5 h-3.5" />
                  <span>Chairman’s Desk</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Official Message</span>
                </div>
              </div>

              {/* Chairman Profile Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative group/avatar">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-amber-500 via-red-500 to-amber-300 opacity-70 blur-sm group-hover/avatar:opacity-100 transition-opacity duration-300" />
                  <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-amber-400/50 bg-slate-900 shadow-xl shrink-0">
                    <img
                      src="/images/chairman.jpg"
                      alt="M.A. Mizanur Rahman"
                      className="w-full h-full object-cover object-top filter brightness-105 contrast-105 group-hover/avatar:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-black text-white tracking-tight leading-snug">
                    M.A. Mizanur Rahman
                  </h3>
                  <div className="text-xs font-semibold text-amber-400">
                    Chairman, Best Group
                  </div>
                  <div className="mt-1 inline-block text-[10px] font-medium text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60">
                    Conglomerate Board
                  </div>
                </div>
              </div>

              {/* Chairman Motto */}
              <div className="mb-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300">
                <div className="text-[10px] font-bold uppercase tracking-widest text-amber-400/80 mb-0.5 flex items-center gap-1">
                  <Quote className="w-3 h-3" />
                  <span>Guiding Motto</span>
                </div>
                <div className="text-sm font-black italic tracking-wide">
                  “Excellence in Every Endeavor.”
                </div>
              </div>

              {/* Excerpt of Message */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5 line-clamp-3">
                “At Best Group, we are committed to excellence, integrity, innovation, and creating lasting value for our customers and communities. Through our diverse businesses, we continuously strive to deliver quality, build trust, and create new opportunities for a better future.”
              </p>

              {/* Action: Read Full Message Link */}
              <div className="pt-3.5 border-t border-slate-800/80 flex items-center justify-between">
                <div className="text-[11px] text-slate-400 font-medium">
                  ISO 9001:2015 Group
                </div>
                <Link
                  href="/chairmans-message"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-amber-400 hover:text-amber-300 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Read Full Message</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
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
