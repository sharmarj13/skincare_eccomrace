import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Sparkles, AlertCircle, HelpCircle } from 'lucide-react';
import { faqs } from '../../data/faq';
import PageBanner from '../layout/PageBanner';

export default function FAQView() {
  const [openId, setOpenId] = useState<string | null>('faq-01');

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-[#FAF8F5] pb-24 text-left">
      {/* Banner */}
      <PageBanner
        title="Skincare Inquiries & Support"
        subtitle="Botanical Knowledge Center"
        backgroundImage="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        
        {/* Intro */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-500 block mb-3">FAQ Database</span>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#221F1D]">Aligned Skin Advice</h2>
          <p className="text-stone-500 text-xs font-light mt-3 leading-relaxed">
            Unravel truths about natural skin lipids, botanical extracts, pH-alignment values, and how our premium Face & Body cleansers work to restore your barrier.
          </p>
        </div>

        {/* FAQ Accordion block */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl border border-stone-200/60 shadow-premium overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-brand-300' : 'hover:border-stone-350'
                }`}
              >
                {/* Accordion header */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start gap-3.5 pr-4">
                    <HelpCircle className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                    <span className="text-[#221F1D] text-sm sm:text-base font-semibold leading-relaxed uppercase tracking-wider">
                      {faq.question}
                    </span>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="p-1.5 rounded-full bg-stone-50 border border-stone-200 shrink-0 text-stone-500"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Accordion content body using Framer Motion wrapper heights */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="border-t border-stone-100"
                    >
                      <div className="p-6 sm:p-7 bg-[#FAF8F5]/30 text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                        <p>{faq.answer}</p>
                        
                        <div className="mt-4 flex items-center gap-2 text-[10px] uppercase font-bold text-[#f95f10] tracking-wider pl-1 select-none">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>Category: {faq.category}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Backing custom contact banner */}
        <div className="mt-20 p-8 rounded-2xl bg-brand-50/40 border border-brand-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-850">
              Have separate custom skincare questions?
            </h3>
            <p className="text-stone-600 text-xs font-light mt-1 max-w-md">
              Speak instantly with our chief of botanical diagnostics over Google Workspace Email or direct secure WhatsApp chat.
            </p>
          </div>

          <a
            href="mailto:help@solbotanicals.com"
            className="shrink-0 px-6 py-3 bg-[#1C1917] text-white hover:bg-black text-[10px] font-bold uppercase tracking-widest rounded-full transition-all shadow-sm"
          >
            Ask a Chemist
          </a>
        </div>

      </div>
    </div>
  );
}
