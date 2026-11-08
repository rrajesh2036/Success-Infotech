import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data/websiteData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#070B18] relative border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-[#00D9FF]/10 blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00D9FF] mb-3">
            <span>FREQUENTLY ASKED QUESTIONS</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#A9B4C8]">CLEAR ANSWERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Got Questions? We’ve Got <span className="text-gradient-cyan-purple">Answers.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A9B4C8] leading-relaxed">
            Everything you need to know about our web development standards, mobile responsiveness,
            and working process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#101A32]/50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-heading font-semibold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#101A32] border border-white/10 flex items-center justify-center text-[#00D9FF] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#2563EB] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#A9B4C8] leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Footer */}
        <div className="mt-12 p-6 rounded-2xl bg-[#101A32]/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-semibold text-white">Have a specific question not listed here?</h4>
            <p className="text-xs text-[#A9B4C8] mt-0.5">Reach out via WhatsApp or submit a quick enquiry.</p>
          </div>
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hi%20Success%20Infotech%2C%20I%20have%20a%20question%20about%20your%20services`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold shadow-md transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
