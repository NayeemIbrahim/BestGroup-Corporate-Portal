'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaqBlockContent } from '@/types/cms';
import { HelpCircle, ChevronDown, Search, Sparkles, MessageCircleQuestion } from 'lucide-react';

interface FaqBlockProps {
  content: FaqBlockContent;
}

export const ThemeAFaqBlock: React.FC<FaqBlockProps> = ({ content }) => {
  const {
    section_title = 'Frequently Asked Questions',
    section_subtitle = 'Find clear answers to common inquiries regarding BestGroup investments, corporate governance, and operations.',
    faqs = [],
  } = content || {};

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqs.filter((faq) => {
    if (!searchQuery.trim()) return true;
    const q = faq.question?.toLowerCase() || '';
    const a = faq.answer?.toLowerCase() || '';
    const query = searchQuery.toLowerCase();
    return q.includes(query) || a.includes(query);
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Ambience & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Corporate Knowledgebase</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {section_title}
          </h2>

          {section_subtitle && (
            <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
              {section_subtitle}
            </p>
          )}

          {/* Quick FAQ Search Bar */}
          <div className="mt-8 relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search frequently asked questions..."
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors shadow-inner"
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-16 px-6 rounded-3xl bg-slate-900/40 border border-slate-800/80">
            <MessageCircleQuestion className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <p className="text-slate-400 text-sm font-medium">
              No matching questions found for &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-xs font-bold text-red-400 hover:underline"
            >
              Clear search filter
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-slate-900/95 border-red-500/40 shadow-xl shadow-red-950/20'
                      : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full p-6 text-left flex items-start justify-between gap-4 group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-xs font-bold text-red-400 pt-1 shrink-0">
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-red-400 transition-colors leading-snug">
                        {faq.question}
                      </h3>
                    </div>

                    <div
                      className={`p-2 rounded-xl border shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'rotate-180 bg-red-600/20 border-red-500/40 text-red-400'
                          : 'bg-slate-800 border-slate-700 text-slate-400 group-hover:text-white'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-2 pl-14 text-sm sm:text-base text-slate-300 leading-relaxed font-normal border-t border-slate-800/60">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Corporate Helpdesk Footnote */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-red-600/10 border border-red-500/20 text-red-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Have a more specific question?</div>
              <div className="text-xs text-slate-400">Our investor and corporate desks reply within 24 hours.</div>
            </div>
          </div>
          <a
            href="/contact"
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider border border-slate-700 transition-colors shrink-0"
          >
            Submit an Inquiry
          </a>
        </div>
      </div>
    </section>
  );
};
export default ThemeAFaqBlock;
