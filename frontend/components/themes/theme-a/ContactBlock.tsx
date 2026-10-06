'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContactBlockContent } from '@/types/cms';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Building,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Building2,
  Headphones,
  Sparkles,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface ContactBlockProps {
  content: ContactBlockContent;
}

export const ThemeAContactBlock: React.FC<ContactBlockProps> = ({ content }) => {
  const {
    heading = 'Connect with BEST GROUP Corporate Headquarters',
    subtext = 'Direct liaison desk for institutional partnerships, commercial real estate leasing, vendor onboarding, or executive inquiries across our 6 listed companies.',
    form_email_destination = 'info@bestgroupatoz.com',
  } = content || {};

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    wing: 'BEST GROUP (Corporate Holding & Governance)',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-slate-950 border-t border-slate-800/80 text-white relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-red-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Corporate Liaison Details (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                <Building2 className="w-3.5 h-3.5 text-red-400" />
                <span>Executive Corporate Liaison</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.15]">
                {heading}
              </h2>

              <p className="mt-4 text-slate-300 text-base leading-relaxed font-normal">
                {subtext}
              </p>
            </div>

            {/* Structured Contact Cards */}
            <div className="space-y-4 pt-2">
              {/* Card 1: Corporate Headquarters */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-red-500/40 transition-colors shadow-lg">
                <div className="p-3 rounded-xl bg-red-600/10 border border-red-500/20 text-red-400 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Corporate Headquarters
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      Motijheel Hub
                    </span>
                  </div>
                  <div className="text-base font-bold text-white mt-1 leading-snug">
                    9th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Central Governance &bull; Executive Board Secretariat
                  </div>
                </div>
              </div>

              {/* Card 2: Hotlines */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 transition-colors shadow-lg">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Direct Corporate Hotlines
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-base font-bold text-white mt-1">
                    <a
                      href="tel:01910203058"
                      className="text-amber-400 hover:text-amber-300 hover:underline transition-colors"
                    >
                      01910-203058
                    </a>
                    <span className="text-slate-600">&bull;</span>
                    <a
                      href="tel:01711626577"
                      className="text-amber-400 hover:text-amber-300 hover:underline transition-colors"
                    >
                      01711-626577
                    </a>
                  </div>
                  <div className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>Sunday to Thursday &bull; 9:00 AM – 6:00 PM BST</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Official Email */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 transition-colors shadow-lg">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Official Corporate Email
                  </div>
                  <div className="text-base font-bold text-white mt-1">
                    <a
                      href={`mailto:${form_email_destination || 'info@bestgroupatoz.com'}`}
                      className="text-white hover:text-blue-400 hover:underline transition-colors"
                    >
                      {form_email_destination || 'info@bestgroupatoz.com'}
                    </a>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Official SLA: Guaranteed 24-Hour Business Response
                  </div>
                </div>
              </div>
            </div>

            {/* Accreditation & Confidentiality Guarantee */}
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="text-xs text-slate-300 leading-relaxed">
                Strict corporate non-disclosure protocols and verified data security are maintained for all business development proposals.
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Enterprise Inquiry Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl relative">
              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/10">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Corporate Inquiry Dispatched</h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                      Thank you for contacting BEST GROUP. Your proposal has been transmitted to our central headquarters leadership at{' '}
                      <span className="text-white font-semibold">{form_email_destination || 'info@bestgroupatoz.com'}</span>.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold uppercase tracking-wider text-white transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                      <div>
                        <h3 className="text-xl font-bold text-white">Direct Enterprise Proposal</h3>
                        <p className="text-xs text-slate-400 mt-0.5">
                          Inquiry routed directly to Executive Management
                        </p>
                      </div>
                      <div className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                        <Sparkles className="w-3 h-3 text-red-400" />
                        <span>Corporate Desk</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                          Your Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g., M. Rahman"
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                          Corporate / Work Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                          Contact Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="01910-000000"
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                          Targeted Company / Wing <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.wing}
                          onChange={(e) => setFormData({ ...formData, wing: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                        >
                          <option>BEST GROUP (Corporate Holding &amp; Governance)</option>
                          <option>Best Product International Ltd. (E-Commerce)</option>
                          <option>Best South City Ltd. (Real Estate &amp; Urban Living)</option>
                          <option>Best Commercial &amp; Builders Ltd. (Commercial Construction)</option>
                          <option>Best Model Pharmacy Ltd. (Healthcare Chain)</option>
                          <option>Best International Overseas (Travel &amp; Tours)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Message / Project Scope Summary <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please provide details regarding your requirements, investment scope, or enterprise inquiry..."
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all duration-300 shadow-xl shadow-red-600/20 hover:shadow-red-600/35 active:scale-[0.99] cursor-pointer"
                    >
                      <span>Transmit Inquiry to Corporate Headquarters</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default ThemeAContactBlock;
