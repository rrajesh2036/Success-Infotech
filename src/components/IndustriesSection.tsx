import React, { useState } from 'react';
import {
  Activity,
  HeartPulse,
  Utensils,
  GraduationCap,
  Home,
  Store,
  Briefcase,
  MapPin,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { INDUSTRIES_SERVED } from '../data/websiteData';
import { IndustryVertical } from '../types';

const iconMap: Record<string, React.ElementType> = {
  Activity,
  HeartPulse,
  Utensils,
  GraduationCap,
  Home,
  Store,
  Briefcase,
  MapPin,
};

interface IndustriesSectionProps {
  onConsultIndustry: (industryName: string) => void;
}

export default function IndustriesSection({ onConsultIndustry }: IndustriesSectionProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryVertical>(INDUSTRIES_SERVED[0]);

  return (
    <section className="py-24 bg-[#0A0F21] relative border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-[#2563EB]/10 blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00D9FF] mb-3">
            <span>DOMAIN TAILORING</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#A9B4C8]">TARGET SECTORS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Industries We <span className="text-gradient-cyan-purple">Can Serve.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A9B4C8] leading-relaxed">
            Every business vertical has distinct conversion dynamics. We tailor page structures,
            booking workflows, and user interfaces to match your target audience's expectations.
          </p>
        </div>

        {/* 2-Column Interactive Workspace: Left Pills / Right Tailored Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Industry List Selectors */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
            {INDUSTRIES_SERVED.map((ind) => {
              const Icon = iconMap[ind.iconName] || Briefcase;
              const isSelected = selectedIndustry.id === ind.id;

              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`p-3.5 rounded-xl text-left transition-all flex items-center justify-between border cursor-pointer ${
                    isSelected
                      ? 'bg-[#101A32] border-[#00D9FF]/40 text-white shadow-lg shadow-[#2563EB]/15'
                      : 'bg-[#070B18]/60 border-white/5 text-[#A9B4C8] hover:bg-[#101A32]/60 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#2563EB] text-white shadow-sm'
                          : 'bg-[#101A32] text-[#00D9FF]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-heading font-semibold text-white">{ind.name}</h4>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-[#00D9FF] translate-x-1' : 'text-white/20'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Tailored Architecture Detail Card */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-3 pb-5 border-b border-white/10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB]/30 via-[#101A32] to-[#8055F6]/30 border border-white/10 flex items-center justify-center text-[#00D9FF]">
                  {React.createElement(iconMap[selectedIndustry.iconName] || Briefcase, {
                    className: 'w-6 h-6',
                  })}
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#00D9FF] uppercase tracking-wider">
                    Tailored Solution Blueprint
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                    {selectedIndustry.name}
                  </h3>
                </div>
              </div>

              <div className="py-6 space-y-6">
                <div>
                  <span className="text-xs font-mono text-[#A9B4C8] uppercase tracking-wide block mb-1">
                    Industry Positioning & Need
                  </span>
                  <p className="text-sm text-[#A9B4C8] leading-relaxed">
                    {selectedIndustry.description}
                  </p>
                </div>

                {/* Primary Business Goal */}
                <div className="p-4 rounded-xl bg-[#070B18]/60 border border-white/5">
                  <span className="text-xs font-mono text-[#00D9FF] uppercase tracking-wide block mb-1">
                    Primary Conversion Objective
                  </span>
                  <p className="text-sm text-white font-medium">
                    {selectedIndustry.typicalGoals}
                  </p>
                </div>

                {/* Key Recommended Features */}
                <div>
                  <span className="text-xs font-mono text-[#A9B4C8] uppercase tracking-wide block mb-3">
                    Essential Website Architecture Features
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedIndustry.keyFeatures.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2 text-xs text-[#A9B4C8] bg-[#070B18]/40 p-2.5 rounded-lg border border-white/5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00D9FF] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended Deliverables */}
                <div>
                  <span className="text-xs font-mono text-[#A9B4C8] uppercase tracking-wide block mb-2">
                    Key Deliverables for {selectedIndustry.name}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedIndustry.sampleDeliverables.map((del, dIdx) => (
                      <span
                        key={dIdx}
                        className="text-xs px-3 py-1 rounded-md bg-[#101A32] text-white border border-white/10"
                      >
                        {del}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Consultation CTA */}
              <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#A9B4C8]">
                  Looking to build a website in this sector?
                </span>
                <button
                  onClick={() => onConsultIndustry(selectedIndustry.name)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold shadow-md shadow-[#2563EB]/25 transition-all cursor-pointer whitespace-nowrap"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
