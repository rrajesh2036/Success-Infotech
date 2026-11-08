import React from 'react';
import { WORKING_PROCESS } from '../data/websiteData';
import { Check } from 'lucide-react';

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-[#070B18] relative border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#8055F6]/10 blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00D9FF] mb-3">
            <span>ENGINEERING WORKFLOW</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#A9B4C8]">FROM CONCEPT TO LAUNCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Our Working <span className="text-gradient-cyan-purple">Process.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A9B4C8] leading-relaxed">
            A transparent, 6-step collaborative methodology engineered to eliminate guesswork,
            prevent scope creep, and launch high-impact web platforms on schedule.
          </p>
        </div>

        {/* 6-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKING_PROCESS.map((step) => (
            <div
              key={step.stepNumber}
              className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-[#00D9FF]/40 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                {/* Step Index Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-heading font-black text-white/30 group-hover:text-[#00D9FF] transition-colors font-mono">
                    {step.stepNumber}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#2563EB] group-hover:bg-[#00D9FF] transition-colors" />
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg font-heading font-bold text-white mb-1.5 group-hover:text-[#00D9FF] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-[#00D9FF] font-medium mb-3">
                  {step.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-[#A9B4C8] leading-relaxed mb-5">
                  {step.description}
                </p>
              </div>

              {/* Deliverables preview */}
              <div className="pt-4 border-t border-white/5 space-y-1.5">
                <span className="text-[11px] font-mono text-white/70 uppercase tracking-wider block mb-1">
                  Step Deliverables
                </span>
                {step.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-1.5 text-xs text-[#A9B4C8]">
                    <Check className="w-3.5 h-3.5 text-[#00D9FF] shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
