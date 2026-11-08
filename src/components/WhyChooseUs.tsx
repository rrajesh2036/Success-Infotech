import React from 'react';
import {
  Code2,
  Smartphone,
  Sparkles,
  Target,
  Zap,
  MessageSquare,
} from 'lucide-react';
import { WHY_CHOOSE_US_POINTS } from '../data/websiteData';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Smartphone,
  Sparkles,
  Target,
  Zap,
  MessageSquare,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-[#0A0F21] relative border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[400px] bg-[#8055F6]/10 blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00D9FF] mb-3">
            <span>THE SUCCESS INFOTECH ADVANTAGE</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#A9B4C8]">BUILT FOR RESULTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Why Businesses Need a <span className="text-gradient-cyan-purple">Smarter Digital Partner.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A9B4C8] leading-relaxed">
            In an era where your website is often the first and only impression potential clients
            have of your business, having a sluggish or outdated template costs you real customers.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US_POINTS.map((point, idx) => {
            const Icon = iconMap[point.iconName] || Zap;

            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-7 border border-white/10 hover:border-[#00D9FF]/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1B294E] border border-white/10 flex items-center justify-center text-[#00D9FF] group-hover:text-white group-hover:bg-[#2563EB] transition-colors mb-5 shadow-inner">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2.5">
                  {point.title}
                </h3>
                <p className="text-sm text-[#A9B4C8] leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Commitment Statement Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#101A32] via-[#162244] to-[#101A32] border border-white/10 text-center max-w-4xl mx-auto shadow-2xl">
          <span className="text-xs font-mono text-[#00D9FF] uppercase tracking-wider block mb-2">
            Authenticity & Quality Pledge
          </span>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed font-medium">
            "We believe in clean code, measurable performance, and honest communication. We do not
            claim unverified vanity statistics—we let the speed, responsiveness, and conversion of
            our web platforms speak for themselves."
          </p>
        </div>
      </div>
    </section>
  );
}
