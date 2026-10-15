'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { WingFaq } from '@/data/wings';

interface WingFaqAccordionProps {
  faqs: WingFaq[];
}

export const WingFaqAccordion: React.FC<WingFaqAccordionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="rounded-2xl bg-slate-950 border border-slate-800 transition-colors overflow-hidden"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full p-6 text-left flex items-center justify-between gap-4 group"
            >
              <span className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                {faq.question}
              </span>
              <div
                className={`w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-amber-400 border-amber-500/40' : 'text-slate-400'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 text-slate-300 text-sm leading-relaxed border-t border-slate-900 pt-4">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
