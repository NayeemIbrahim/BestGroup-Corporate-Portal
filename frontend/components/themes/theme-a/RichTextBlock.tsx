'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { RichTextBlockContent } from '@/types/cms';
import { FileText, ShieldCheck, Sparkles, Building2 } from 'lucide-react';

interface RichTextBlockProps {
  content: RichTextBlockContent;
}

export const ThemeARichTextBlock: React.FC<RichTextBlockProps> = ({ content }) => {
  const { title, subtitle, body } = content || {};

  return (
    <section className="pt-6 pb-20 lg:pt-8 lg:pb-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Ambience & Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 pb-6 border-b border-slate-800/80"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
              <FileText className="w-3.5 h-3.5" />
              <span>Official Institutional Document</span>
            </div>

            {title && (
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                {title}
              </h1>
            )}

            {subtitle && (
              <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
                {subtitle}
              </p>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1.5 text-slate-400">
                <Building2 className="w-4 h-4 text-red-500" />
                <span>BestGroup Holdings Ltd. Corporate Secretariat</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Compliance Document</span>
              </span>
            </div>
          </motion.div>
        )}

        {/* Rich Text Body Container */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl bg-slate-900/60 border border-slate-800/90 p-8 sm:p-14 backdrop-blur-sm shadow-2xl shadow-black/60"
        >
          <div
            className="rich-text-content space-y-4 text-slate-300 text-sm leading-relaxed font-normal
              [&_h2]:text-xl [&_h2]:sm:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:tracking-tight [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:pb-2 [&_h2]:border-b [&_h2]:border-slate-800
              [&_h3]:text-lg [&_h3]:sm:text-xl [&_h3]:font-bold [&_h3]:text-white [&_h3]:mt-6 [&_h3]:mb-2
              [&_p]:leading-relaxed [&_p]:text-slate-300 [&_p]:mb-3
              [&_strong]:text-white [&_strong]:font-semibold
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2.5 [&_ul]:my-5
              [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2.5 [&_ol]:my-5
              [&_li]:text-slate-300 [&_li]:leading-relaxed
              [&_blockquote]:border-l-4 [&_blockquote]:border-red-500 [&_blockquote]:pl-6 [&_blockquote]:py-2 [&_blockquote]:my-6 [&_blockquote]:bg-slate-950/70 [&_blockquote]:rounded-r-xl [&_blockquote]:italic [&_blockquote]:text-slate-200
              [&_a]:text-red-400 [&_a]:underline [&_a]:hover:text-red-300 [&_a]:transition-colors"
            dangerouslySetInnerHTML={{ __html: body || '' }}
          />

          {/* Institutional Corporate Footnote */}
          <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-red-500" />
              <span>Published & Authorized by BestGroup Corporate Legal & Governance Council</span>
            </div>
            <div>Ref: ISO-9001:2015-BG-DOC</div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};
export default ThemeARichTextBlock;
