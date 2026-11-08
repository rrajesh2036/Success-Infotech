import React, { useState } from 'react';
import {
  Cpu,
  Palette,
  Building2,
  ShoppingBag,
  Smartphone,
  RefreshCw,
  Flame,
  ShieldCheck,
  Search,
  ArrowRight,
  X,
  Check,
  Layers,
} from 'lucide-react';
import { SERVICES } from '../data/websiteData';
import { ServiceItem } from '../types';

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Palette,
  Building2,
  ShoppingBag,
  Smartphone,
  RefreshCw,
  Flame,
  ShieldCheck,
  Search,
};

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export default function ServicesSection({ onSelectServiceForQuote }: ServicesSectionProps) {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 bg-[#070B18] relative border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#2563EB]/10 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00D9FF] mb-3">
            <span>VERIFIED CAPABILITIES</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#A9B4C8]">WHAT WE DELIVER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Comprehensive <span className="text-gradient-cyan-purple">Website Development</span> Services.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A9B4C8] leading-relaxed">
            From intelligent AI-assisted architectures to high-converting landing pages and local SEO,
            we deliver production-grade digital solutions tailored to your growth.
          </p>
        </div>

        {/* Asymmetric Bento-style Grid of Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Layers;
            // Prominent spans for marquee capabilities
            const isFeatured = idx === 0 || idx === 3;

            return (
              <div
                key={service.id}
                className={`glass-panel rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#00D9FF]/40 hover:-translate-y-1 group relative ${
                  isFeatured ? 'border-white/15 bg-[#101A32]/85 shadow-lg' : 'border-white/5'
                }`}
              >
                <div>
                  {/* Service Icon & Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB]/20 via-[#101A32] to-[#8055F6]/20 border border-white/10 flex items-center justify-center text-[#00D9FF] group-hover:scale-110 group-hover:text-white group-hover:border-[#00D9FF]/50 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-[#A9B4C8]/50">
                      0{idx + 1}.
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-heading font-bold text-white mb-2.5 group-hover:text-[#00D9FF] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#A9B4C8] leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Bullet Benefits Preview */}
                  <ul className="space-y-2 mb-6">
                    {service.benefits.slice(0, 2).map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs text-[#A9B4C8]">
                        <Check className="w-3.5 h-3.5 text-[#00D9FF] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#A9B4C8]/80">
                    {service.technologies.slice(0, 2).join(' · ')}
                  </div>
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#00D9FF] hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Details & Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#101A32] border border-white/15 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#070B18] text-[#A9B4C8] hover:text-white border border-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#2563EB]/20 border border-[#2563EB]/40 flex items-center justify-center text-[#00D9FF]">
                {React.createElement(iconMap[activeModalService.iconName] || Layers, {
                  className: 'w-5 h-5',
                })}
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#00D9FF] uppercase tracking-wider">
                  Service Scope & Deliverables
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                  {activeModalService.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-[#A9B4C8] leading-relaxed mb-6">
              {activeModalService.fullDescription}
            </p>

            {/* Benefits */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase text-white font-semibold mb-3 tracking-wide">
                Key Strategic Benefits
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeModalService.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#A9B4C8] bg-[#070B18]/60 p-2.5 rounded-lg border border-white/5">
                    <Check className="w-3.5 h-3.5 text-[#00D9FF] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase text-white font-semibold mb-3 tracking-wide">
                Standard Client Deliverables
              </h4>
              <div className="space-y-2">
                {activeModalService.deliverables.map((d, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#A9B4C8] bg-[#070B18]/40 px-3 py-2 rounded-lg border border-white/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8055F6]" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase text-white font-semibold mb-2 tracking-wide">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalService.technologies.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-md bg-[#070B18] text-[#00D9FF] border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  const title = activeModalService.title;
                  setActiveModalService(null);
                  onSelectServiceForQuote(title);
                }}
                className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#8055F6] text-white font-semibold text-xs sm:text-sm shadow-lg shadow-[#2563EB]/25 hover:from-[#1D4ED8] hover:to-[#6D28D9] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Quotation for {activeModalService.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveModalService(null)}
                className="py-3 px-5 rounded-xl bg-[#070B18] text-[#A9B4C8] hover:text-white font-medium text-xs sm:text-sm border border-white/10 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
