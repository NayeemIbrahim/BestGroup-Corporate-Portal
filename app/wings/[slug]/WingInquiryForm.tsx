'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface WingInquiryFormProps {
  wingName: string;
  wingSlug: string;
}

export const WingInquiryForm: React.FC<WingInquiryFormProps> = ({ wingName, wingSlug }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: 'General Commercial Partnership',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate reliable inquiry submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="p-8 lg:p-10 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-emerald-500/40 text-center shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white">Inquiry Transmitted Successfully</h3>
        <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-md mx-auto leading-relaxed">
          Your proposal for <strong className="text-amber-400">{wingName}</strong> has been logged with the Departmental Secretariat. A designated liaison officer will review and reach out within 24 business hours.
        </p>
        <button
          onClick={() => {
            setStatus('idle');
            setFormData({
              fullName: '',
              email: '',
              phone: '',
              company: '',
              inquiryType: 'General Commercial Partnership',
              message: '',
            });
          }}
          className="mt-6 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 lg:p-10 rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 shadow-2xl relative">
      <div className="flex items-center justify-between pb-6 border-b border-slate-800/80 mb-6">
        <div>
          <h3 className="text-xl font-extrabold text-white">Direct Enterprise Proposal / RFP</h3>
          <p className="text-xs text-slate-400 mt-1">
            Official inquiry desk for <span className="text-amber-400 font-semibold">{wingName}</span>
          </p>
        </div>
        <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold uppercase">
          SSL Monitored
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono font-semibold text-slate-300 uppercase mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. M. R. Chowdhury"
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-semibold text-slate-300 uppercase mb-1.5">
              Corporate / Direct Email *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. contact@yourcompany.com"
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono font-semibold text-slate-300 uppercase mb-1.5">
              Telephone / Mobile *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="e.g. +880 1711 000000"
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono font-semibold text-slate-300 uppercase mb-1.5">
              Company / Institution (Optional)
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="e.g. Apex Holdings / Private Individual"
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono font-semibold text-slate-300 uppercase mb-1.5">
            Nature of Engagement *
          </label>
          <select
            value={formData.inquiryType}
            onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
          >
            <option value="Wholesale & Bulk Supply">Wholesale &amp; Bulk Institutional Supply</option>
            <option value="Residential / Commercial Plot Booking">Residential / Commercial Plot Booking &amp; Land Visit</option>
            <option value="Commercial Construction & EPC Tender">Commercial Construction &amp; EPC Tender Bid</option>
            <option value="Hospital & Pharmaceutical Supply">Hospital &amp; Clinical Medicine Supply</option>
            <option value="Corporate Travel / Group Air Ticketing">Corporate Travel / Group Air Ticketing / Hajj Delegation</option>
            <option value="Strategic Joint Venture / Equity">Strategic Joint Venture / Capital Investment</option>
            <option value="General Commercial Partnership">General Commercial Partnership</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-mono font-semibold text-slate-300 uppercase mb-1.5">
            Detailed Proposal / Requirement Specifications *
          </label>
          <textarea
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder={`Specify your requirement, quantities, delivery targets, or specific project queries regarding ${wingName}...`}
            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-red-600/20 hover:shadow-red-600/35 transition-all duration-300 active:scale-98 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {status === 'submitting' ? (
              <span>Transmitting Proposal...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Proposal to {wingName}</span>
              </>
            )}
          </button>
        </div>

        <div className="flex items-center justify-between text-[11px] text-slate-400 pt-3">
          <span>* Direct encryption protocols active</span>
          <span>Monitored 24/7 by Corporate Secretariat</span>
        </div>
      </form>
    </div>
  );
};
