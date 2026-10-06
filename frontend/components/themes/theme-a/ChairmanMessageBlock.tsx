'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChairmanMessageBlockContent } from '@/types/cms';
import {
  Quote,
  Award,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Building,
  Target,
  Users,
  Compass,
  CheckCircle2,
  Mail
} from 'lucide-react';

interface ChairmanMessageBlockProps {
  content: ChairmanMessageBlockContent;
}

export const ThemeAChairmanMessageBlock: React.FC<ChairmanMessageBlockProps> = ({ content }) => {
  const {
    title = 'Chairman’s Message',
    chairman_name = 'M.A. Mizanur Rahman',
    chairman_title = 'Chairman, Best Group',
    motto = '“Excellence in Every Endeavor.”',
    chairman_image_url = '/images/chairman.jpg',
    message = 'At Best Group, we are committed to excellence, integrity, innovation, and creating lasting value for our customers and communities. Through our diverse businesses, we continuously strive to deliver quality, build trust, and create new opportunities for a better future.',
  } = content || {};

  const pillars = [
    {
      title: 'Uncompromising Excellence',
      desc: 'Setting industry benchmarks across Real Estate, E-Commerce, Healthcare, and Tourism.',
      icon: Award,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    },
    {
      title: 'Integrity & Ethics',
      desc: 'Institutional trust built over decades with 100% transparency and regulatory compliance.',
      icon: ShieldCheck,
      color: 'text-red-400 bg-red-500/10 border-red-500/20',
    },
    {
      title: 'Customer-Centric Innovation',
      desc: 'Embracing next-generation automation, digital convenience, and sustainable methodologies.',
      icon: Sparkles,
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    },
    {
      title: 'Creating Lasting Value',
      desc: 'Fostering long-term economic empowerment for communities, partners, and our nation.',
      icon: Target,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    },
  ];

  return (
    <div className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24">
      {/* Background Ambience & Grid */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-red-600/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Top Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Executive Leadership Desk</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed"
          >
            Vision, institutional values, and forward strategy driving BestGroup’s multi-sector conglomerate footprint.
          </motion.p>
        </div>

        {/* Executive Showcase Card (Two-Column Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-gradient-to-br from-slate-900/90 via-slate-950/95 to-slate-900/80 border border-amber-500/25 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl shadow-black/80 backdrop-blur-xl relative overflow-hidden">
          {/* Subtle Decorative Golden Border Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Column: Chairman Portrait Frame (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center text-center"
          >
            <div className="relative group">
              {/* Outer Golden Gradient Ring */}
              <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-amber-500 via-red-500 to-amber-300 opacity-75 blur-md group-hover:opacity-100 transition duration-500" />

              {/* Portrait Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/40 bg-slate-900 shadow-2xl w-64 h-80 sm:w-80 sm:h-96">
                <img
                  src={chairman_image_url || '/images/chairman.jpg'}
                  alt={chairman_name}
                  className="w-full h-full object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                {/* Badge Overlay on Image */}
                <div className="absolute bottom-4 left-4 right-4 text-left bg-slate-950/80 backdrop-blur-md border border-amber-500/30 rounded-xl p-3.5">
                  <div className="text-amber-400 text-[11px] font-black uppercase tracking-widest flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    <span>Founder & Chairman</span>
                  </div>
                  <div className="text-white font-extrabold text-base tracking-tight">
                    {chairman_name}
                  </div>
                  <div className="text-slate-400 text-xs">
                    {chairman_title}
                  </div>
                </div>
              </div>
            </div>

            {/* Accreditations below photo */}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-red-400" />
                <span>25+ Yrs Industry Leadership</span>
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-amber-400" />
                <span>4 Integrated Sectors</span>
              </span>
            </div>
          </motion.div>

          {/* Right Column: Chairman Message Content (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            {/* Elegant Quote Symbol & Motto */}
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 shrink-0 shadow-lg shadow-amber-500/10">
                <Quote className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
                  Guiding Philosophy & Motto
                </span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white italic bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
                  {motto}
                </h3>
              </div>
            </div>

            {/* Core Message Text */}
            <div className="relative pl-6 border-l-2 border-amber-500/40 space-y-4">
              <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed">
                {message}
              </p>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
                Under this visionary charter, Best Group has consistently expanded its horizons—delivering iconic real estate developments that shape skylines, building modern cold-chain healthcare infrastructures to protect communities, orchestrating nationwide digital retail fulfillment, and facilitating premier global travel services.
              </p>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
                We believe that corporate success is measured not only by financial growth, but by the trust we earn every day from our clients, our employees, and the society we proudly serve.
              </p>
            </div>

            {/* Chairman Signature Block */}
            <div className="pt-6 border-t border-slate-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <div className="text-lg sm:text-xl font-black text-white tracking-tight">
                  {chairman_name}
                </div>
                <div className="text-sm font-semibold text-amber-400">
                  {chairman_title}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Best Group Conglomerate Holdings Ltd.
                </div>
              </div>

              {/* Official Corporate Seal Badge */}
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-amber-500/30 text-amber-300">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-red-500 flex items-center justify-center text-white font-black text-xs shadow-md">
                  BG
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                    Official Message
                  </div>
                  <div className="text-xs font-bold text-white">
                    Executive Board Seal
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/our-sister-concern"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-red-600/25 inline-flex items-center gap-2"
              >
                <span>Explore Sister Concerns</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-500 font-bold text-xs uppercase tracking-wider transition-all duration-200 inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>Contact Chairman’s Office</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* 4 Pillars of the Chairman's Vision */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Cornerstones of Our Corporate Creed
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              The non-negotiable principles guiding every BestGroup venture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5 group"
                >
                  <div className={`p-3 rounded-xl w-fit mb-4 border ${pillar.color}`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-extrabold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeAChairmanMessageBlock;
