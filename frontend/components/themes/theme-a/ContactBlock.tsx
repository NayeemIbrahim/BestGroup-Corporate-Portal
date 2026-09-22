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
  Sparkles
} from 'lucide-react';

interface ContactBlockProps {
  content: ContactBlockContent;
}

export const ThemeAContactBlock: React.FC<ContactBlockProps> = ({ content }) => {
  const {
    heading = 'Connect with Our Corporate Headquarters',
    subtext = 'Interested in investment partnerships, vendor onboarding, or enterprise services? Send us a direct inquiry.',
    form_email_destination = 'corporate@bestgroup.com',
  } = content || {};

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    wing: 'Best Real Estate (Commercial & Residential)',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      // simulate receipt
    }, 1000);
  };

  return (
    <section id="contact" className="py-28 bg-slate-900 border-t border-slate-800 text-white relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-red-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Corporate Liaison Details (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Building2 className="w-3.5 h-3.5" />
              <span>Headquarters Liaison Desk</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              {heading}
            </h2>

            <p className="mt-4 text-slate-400 text-base leading-relaxed">
              {subtext}
            </p>

            {/* Structured Contact Cards (RFL Style) */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90 shadow-md">
                <div className="p-3 rounded-xl bg-red-600/10 border border-red-500/20 text-red-400 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Corporate Headquarters
                  </div>
                  <div className="text-sm font-semibold text-white mt-0.5">
                    BestGroup Tower, Plot 42, Gulshan Avenue, Dhaka 1212
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">Executive Board Floors 12–16</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90 shadow-md">
                <div className="p-3 rounded-xl bg-red-600/10 border border-red-500/20 text-red-400 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Corporate Toll-Free Hotline
                  </div>
                  <div className="text-sm font-semibold text-white mt-0.5">
                    +880 1800-BESTGRP / +880 2-9880000
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">Sunday to Thursday • 9:00 AM – 6:00 PM BST</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90 shadow-md">
                <div className="p-3 rounded-xl bg-red-600/10 border border-red-500/20 text-red-400 shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Investor & Partner Desk
                  </div>
                  <div className="text-sm font-semibold text-white mt-0.5">
                    {form_email_destination}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">Guaranteed 24-Hour SLA Response</div>
                </div>
              </div>
            </div>

            {/* Accreditation Note */}
            <div className="mt-8 p-4 rounded-2xl bg-slate-950 border border-slate-800/60 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="text-xs text-slate-400 leading-snug">
                Strict corporate non-disclosure protocols are maintained for all business development proposals.
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
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-900 border border-slate-800 shadow-2xl relative">
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
                    <p className="text-slate-400 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                      Thank you for contacting BestGroup. Your message has been routed to the relevant wing leadership at{' '}
                      <span className="text-white font-semibold">{form_email_destination}</span>.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold uppercase tracking-wider text-white transition-colors"
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
                          Inquiry routed to {form_email_destination}
                        </p>
                      </div>
                      <div className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-red-400 bg-red-500/10 px-2.5 py-1 rounded border border-red-500/20">
                        <Sparkles className="w-3 h-3" />
                        <span>Fast-Track Desk</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                          Your Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g., Salman Khan"
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
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
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                          Contact Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+880 1700-000000"
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                          Targeted Business Wing <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.wing}
                          onChange={(e) => setFormData({ ...formData, wing: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                        >
                          <option>Best Real Estate (Commercial & Residential)</option>
                          <option>Best E-Commerce (Logistics & Marketplace)</option>
                          <option>Best Model Pharmacy (Supply & Retail)</option>
                          <option>Best Travel & Tours (Corporate & Luxury)</option>
                          <option>Group Corporate Investments & M&A</option>
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
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all duration-300 shadow-xl shadow-red-600/20 hover:shadow-red-600/35 active:scale-[0.99]"
                    >
                      <span>Transmit Inquiry to Executive Desk</span>
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
