'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContactBlockContent } from '@/types/cms';
import {
  Send,
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface ContactBlockProps {
  content: ContactBlockContent;
}

export const ThemeBContactBlock: React.FC<ContactBlockProps> = ({ content }) => {
  const {
    heading = 'Connect with Our Corporate Headquarters',
    subtext = 'Interested in investment partnerships, vendor onboarding, or enterprise services? Send us a direct inquiry.',
    form_email_destination = 'corporate@bestgroup.com',
  } = content || {};

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    wing: 'Best Real Estate',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 bg-gray-950 text-white relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-emerald-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="p-10 sm:p-16 rounded-[2.5rem] bg-gradient-to-b from-gray-900/90 via-gray-900/60 to-gray-950 border border-white/10 backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.8)]">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs mb-4">
              <Zap className="w-3.5 h-3.5 fill-emerald-400" />
              <span>04 // DIRECT LIAISON</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
              {heading}
            </h2>
            <p className="text-gray-400 font-mono text-xs leading-relaxed">
              {subtext}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-10"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-mono text-white mb-2">
                  TRANSMISSION SUCCESSFUL
                </h3>
                <p className="text-gray-400 text-xs font-mono max-w-sm mx-auto mb-6">
                  Your inquiry has been routed to{' '}
                  <span className="text-emerald-400">{form_email_destination}</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-gray-900 border border-white/10 text-xs font-mono text-white hover:border-emerald-500 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-5 py-4 rounded-2xl bg-gray-950 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-emerald-500 transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-2">
                      Corporate Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-5 py-4 rounded-2xl bg-gray-950 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-emerald-500 transition-colors font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-2">
                    Relevant Sector Wing
                  </label>
                  <select
                    value={formData.wing}
                    onChange={(e) => setFormData({ ...formData, wing: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-gray-950 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors font-mono"
                  >
                    <option>Best Real Estate (Commercial & Residential)</option>
                    <option>Best E-Commerce (Logistics & Marketplace)</option>
                    <option>Best Model Pharmacy (Healthcare Chain)</option>
                    <option>Best Travel & Tours (Corporate & Luxury)</option>
                    <option>Group Corporate Investments & M&A</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-2">
                    Proposal Scope
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly outline your enterprise goals, project scope, or inquiry..."
                    className="w-full px-5 py-4 rounded-2xl bg-gray-950 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-emerald-500 transition-colors font-mono"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-mono font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/35 flex items-center justify-center gap-2 active:scale-[0.99]"
                >
                  <span>Dispatch Proposal to {form_email_destination}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </AnimatePresence>

          {/* Liaison Quick Badges */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-gray-400">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>{form_email_destination}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>+880 1800-BESTGRP</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>Gulshan Avenue Executive Floors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ThemeBContactBlock;
