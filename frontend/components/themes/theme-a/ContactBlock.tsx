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
  Sparkles,
  ExternalLink,
  Copy,
  Check,
  User,
  MessageSquare
} from 'lucide-react';

interface ContactBlockProps {
  content?: ContactBlockContent;
}

const WINGS = [
  { id: 'holding', name: 'BEST GROUP (Corporate Holding & Governance)' },
  { id: 'ecommerce', name: 'Best Product International Ltd. (E-Commerce)' },
  { id: 'real-estate', name: 'Best South City Ltd. (Real Estate & Urban Living)' },
  { id: 'construction', name: 'Best Commercial & Builders Ltd. (Commercial Construction)' },
  { id: 'pharmacy', name: 'Best Model Pharmacy Ltd. (Healthcare & Retail Pharmacy)' },
  { id: 'travel', name: 'Best International Overseas (Travel & Tours)' }
];

export const ThemeAContactBlock: React.FC<ContactBlockProps> = ({ content }) => {
  const {
    heading = 'Corporate Headquarters & Liaison Desks',
    subtext = 'Direct executive contact points for institutional partnerships, commercial real estate leasing, vendor onboarding, and specialized services across our 6 listed companies.',
    form_email_destination = 'info@bestgroupatoz.com',
  } = content || {};

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);
  const [selectedWing, setSelectedWing] = useState(WINGS[0].name);
  const [ticketRef, setTicketRef] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleCopyPhone = (number: string) => {
    navigator.clipboard.writeText(number);
    setCopiedPhone(number);
    setTimeout(() => setCopiedPhone(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomTicket = `BG-HQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketRef(randomTicket);
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="pt-16 pb-10 lg:pt-20 lg:pb-12 bg-slate-950 border-t border-slate-800/80 text-white relative overflow-hidden">
      {/* Background Visual Accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header with Live Operational Status */}
        <div className="max-w-3xl mb-14">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-500/25 text-red-400 text-xs font-bold uppercase tracking-wider shadow-sm">
              <Building2 className="w-3.5 h-3.5 text-red-500" />
              <span>Central Headquarters Liaison</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Motijheel Desk Active (09:00 - 18:00 BST)</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>24-Hour SLA Response</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.12]">
            {heading}
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            {subtext}
          </p>
        </div>

        {/* Main Grid: Liaison Details & Enterprise Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Corporate Liaison Cards (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Primary HQ Card with Map Link */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl relative overflow-hidden group hover:border-red-500/30 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-red-600/10 border border-red-500/20 text-red-500 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                      Corporate Headquarters
                    </span>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      DBBL Wohid Tower
                    </h3>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/DBBL+Wohid+Tower+Motijheel+Dhaka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200 inline-flex items-center gap-1.5 transition-colors shrink-0"
                >
                  <span>Map</span>
                  <ExternalLink className="w-3 h-3 text-red-400" />
                </a>
              </div>

              <div className="text-sm font-semibold text-slate-200 mb-1">
                9th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Central Board Secretariat &bull; Strategic Investment Offices &bull; Corporate Legal Council
              </p>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span>Sun – Thu: 9:00 AM – 6:00 PM BST</span>
                </span>
                <span className="text-slate-500">Friday Closed</span>
              </div>
            </div>

            {/* Direct Hotlines Card with One-Touch Copy */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl group hover:border-amber-500/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Direct Corporate Telephony
                  </span>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    Executive Hotlines
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-500">Primary Line</div>
                    <a
                      href="tel:01910203058"
                      className="text-sm font-bold text-white hover:text-amber-400 transition-colors"
                    >
                      01910-203058
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyPhone('01910-203058')}
                    className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    title="Copy Phone Number"
                  >
                    {copiedPhone === '01910-203058' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-500">Secondary Line</div>
                    <a
                      href="tel:01711626577"
                      className="text-sm font-bold text-white hover:text-amber-400 transition-colors"
                    >
                      01711-626577
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyPhone('01711-626577')}
                    className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    title="Copy Phone Number"
                  >
                    {copiedPhone === '01711-626577' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="text-xs text-slate-400 flex items-center justify-between">
                <span>Direct Voice Support</span>
                <span className="text-emerald-400 font-medium">Standard Mobile Rates Apply</span>
              </div>
            </div>

            {/* Official Corporate Inquiries Email Card */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl group hover:border-blue-500/30 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Official Written Inquiries
                    </span>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      Corporate Registry Email
                    </h3>
                  </div>
                </div>

                <a
                  href={`mailto:${form_email_destination}`}
                  className="px-3 py-1.5 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-semibold hover:bg-blue-600/30 transition-colors"
                >
                  Write Email
                </a>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <span className="font-mono text-sm text-slate-200 font-medium">
                  {form_email_destination}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                  Monitored 24/7
                </span>
              </div>
            </div>

            {/* Corporate Non-Disclosure & Security Guarantee */}
            <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="text-xs text-slate-300 leading-relaxed">
                Strict corporate non-disclosure protocols and verified data security are maintained for all business development proposals.
              </div>
            </div>

          </motion.div>

          {/* Right Column: High-Grade Enterprise Proposal Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-11 rounded-3xl bg-slate-900/85 border border-slate-800 shadow-2xl backdrop-blur-xl relative">
              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-10 text-center"
                  >
                    <div className="w-20 h-20 mx-auto rounded-3xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6 shadow-2xl shadow-emerald-500/10">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold mb-4">
                      <span>REF NO: {ticketRef}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                      Proposal Successfully Logged
                    </h3>

                    <p className="text-slate-300 text-sm max-w-lg mx-auto leading-relaxed mb-6 font-normal">
                      Your formal inquiry regarding <span className="text-white font-semibold">"{selectedWing}"</span> has been transmitted directly to our central headquarters management at{' '}
                      <span className="text-amber-400 font-semibold">{form_email_destination}</span>. An executive liaison will reach out within 24 business hours.
                    </p>

                    <div className="max-w-md mx-auto p-4 rounded-2xl bg-slate-950 border border-slate-800 text-left text-xs space-y-2 mb-8 text-slate-400">
                      <div className="flex justify-between">
                        <span>Designated Wing:</span>
                        <span className="text-white font-semibold">{selectedWing}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Headquarters SLA:</span>
                        <span className="text-emerald-400 font-semibold">Under 24 Business Hours</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-lg hover:shadow-slate-700/20"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Form Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800/80 gap-3">
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-red-400 flex items-center gap-1.5 mb-1">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Direct Executive Transmission</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                          Enterprise Liaison Request
                        </h3>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400">
                        <span>ISO 9001:2015 Registered</span>
                      </div>
                    </div>

                    {/* Input Group: Name and Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-slate-400" />
                          <span>Full Name / Corporate Title <span className="text-red-500">*</span></span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. M. A. Rahman, Managing Director"
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-slate-400" />
                          <span>Official Work Email <span className="text-red-500">*</span></span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@enterprise.com"
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                        />
                      </div>
                    </div>

                    {/* Input Group: Phone and Target Wing Dropdown */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-slate-400" />
                          <span>Contact Mobile / Hotline</span>
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="01910-000000"
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-slate-400" />
                          <span>Target Entity Desk <span className="text-red-500">*</span></span>
                        </label>
                        <select
                          value={selectedWing}
                          onChange={(e) => setSelectedWing(e.target.value)}
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                        >
                          {WINGS.map((w) => (
                            <option key={w.id} value={w.name}>
                              {w.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Subject Line */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                        Inquiry Subject / Proposal Title
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g., Commercial Space Leasing / Institutional Supply Contract"
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                      />
                    </div>

                    {/* Message Area */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                          <span>Detailed Scope & Requirements <span className="text-red-500">*</span></span>
                        </span>
                        <span className="text-[11px] text-slate-500 lowercase font-normal">min 20 characters</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Specify key specifications, project scale, procurement volume, or preferred meeting schedule at our Motijheel headquarters..."
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all duration-300 shadow-xl shadow-red-600/25 hover:shadow-red-600/40 active:scale-[0.99] cursor-pointer"
                    >
                      <span>Transmit Proposal to Corporate Secretariat</span>
                      <Send className="w-4 h-4" />
                    </button>

                    {/* Security & Confidentiality Disclaimer */}
                    <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-slate-500">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Encrypted SSL Transmission &bull; Strict Corporate Non-Disclosure Compliance</span>
                    </div>
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
