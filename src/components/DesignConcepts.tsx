import React, { useState } from 'react';
import { Monitor, Tablet, Smartphone, ExternalLink, Sparkles, X, Check } from 'lucide-react';
import { DESIGN_CONCEPTS } from '../data/websiteData';
import { DesignConcept } from '../types';

export default function DesignConcepts() {
  const [activeConcept, setActiveConcept] = useState<DesignConcept>(DESIGN_CONCEPTS[0]);
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [inspectModalOpen, setInspectModalOpen] = useState(false);

  return (
    <section id="work" className="py-24 bg-[#070B18] relative border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00D9FF]/10 blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00D9FF] mb-3">
            <span>PORTFOLIO & ARCHITECTURE SHOWCASE</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#A9B4C8]">ILLUSTRATIVE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Website Design <span className="text-gradient-cyan-purple">Concepts.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A9B4C8] leading-relaxed">
            In accordance with our strict authenticity policy, these interactive showcases represent
            our illustrative architectural and UI/UX design concepts across diverse sectors.
          </p>
        </div>

        {/* Concept Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {DESIGN_CONCEPTS.map((concept) => {
            const isSelected = activeConcept.id === concept.id;
            return (
              <button
                key={concept.id}
                onClick={() => setActiveConcept(concept)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#2563EB] text-white shadow-lg shadow-[#2563EB]/30 border border-[#00D9FF]/40'
                    : 'bg-[#101A32] text-[#A9B4C8] hover:text-white border border-white/10'
                }`}
              >
                <span>{concept.title}</span>
                <span className="text-[10px] opacity-75 font-mono">· {concept.industry.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Responsive Device Frame Showcase */}
        <div className="glass-panel rounded-3xl p-4 sm:p-8 border border-white/10 shadow-2xl">
          {/* Top Frame Bar: Device Switcher & Concept Info */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                  {activeConcept.title}
                </h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#2563EB]/20 text-[#00D9FF] border border-[#2563EB]/40">
                  Concept Prototype
                </span>
              </div>
              <p className="text-xs text-[#A9B4C8] mt-1">{activeConcept.industry}</p>
            </div>

            {/* Device Switcher Segmented Control */}
            <div className="flex items-center gap-1 bg-[#070B18] p-1 rounded-xl border border-white/10">
              <button
                onClick={() => setDeviceView('desktop')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  deviceView === 'desktop'
                    ? 'bg-[#2563EB] text-white shadow-sm'
                    : 'text-[#A9B4C8] hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Desktop</span>
              </button>

              <button
                onClick={() => setDeviceView('tablet')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  deviceView === 'tablet'
                    ? 'bg-[#2563EB] text-white shadow-sm'
                    : 'text-[#A9B4C8] hover:text-white'
                }`}
              >
                <Tablet className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Tablet</span>
              </button>

              <button
                onClick={() => setDeviceView('mobile')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  deviceView === 'mobile'
                    ? 'bg-[#2563EB] text-white shadow-sm'
                    : 'text-[#A9B4C8] hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Mobile</span>
              </button>
            </div>
          </div>

          {/* Interactive Screen Preview Container */}
          <div className="py-8 flex justify-center items-center overflow-hidden">
            <div
              className={`transition-all duration-500 ease-out flex flex-col items-center ${
                deviceView === 'desktop'
                  ? 'w-full max-w-4xl'
                  : deviceView === 'tablet'
                  ? 'w-[540px] max-w-full'
                  : 'w-[320px] max-w-full'
              }`}
            >
              {/* Outer Device Bezel */}
              <div className="w-full bg-[#0E1528] rounded-2xl p-2 sm:p-3 border border-white/15 shadow-2xl relative">
                {/* Browser/Device Top Bar */}
                <div className="flex items-center justify-between pb-2 px-2 border-b border-white/5 mb-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-[11px] font-mono text-[#A9B4C8]/60 bg-[#070B18] px-3 py-0.5 rounded-md truncate max-w-[200px] sm:max-w-xs">
                    preview.successinfotech/{activeConcept.id}
                  </div>
                  <div className="w-4" />
                </div>

                {/* Concept Screen Viewport */}
                <div className="relative rounded-xl overflow-hidden bg-[#070B18] group">
                  <img
                    src={activeConcept.imagePath}
                    alt={activeConcept.title}
                    className="w-full h-auto object-cover max-h-[500px] transition-transform duration-500 group-hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  {/* Overlay inspect button */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                    <button
                      onClick={() => setInspectModalOpen(true)}
                      className="px-4 py-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform cursor-pointer"
                    >
                      <span>Expand Concept Blueprint</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Mobile/Tablet bottom indicator bar */}
                {deviceView !== 'desktop' && (
                  <div className="w-20 h-1 bg-white/20 rounded-full mx-auto mt-2" />
                )}
              </div>
            </div>
          </div>

          {/* Concept Detail Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10 text-xs">
            <div>
              <span className="font-mono text-[#00D9FF] uppercase tracking-wider block mb-1">
                Overview
              </span>
              <p className="text-[#A9B4C8] leading-relaxed">{activeConcept.description}</p>
            </div>

            <div>
              <span className="font-mono text-[#00D9FF] uppercase tracking-wider block mb-1">
                Design System Highlights
              </span>
              <div className="space-y-1">
                {activeConcept.keyFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[#A9B4C8]">
                    <Check className="w-3 h-3 text-[#2563EB] shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="font-mono text-[#00D9FF] uppercase tracking-wider block mb-1">
                Color Palette & Tokens
              </span>
              <div className="flex items-center gap-2 mt-2">
                {activeConcept.colorPalette.map((color, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div
                      className="w-7 h-7 rounded-lg border border-white/20 shadow-sm"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                    <span className="text-[10px] font-mono text-[#A9B4C8]">{color}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Concept Inspection Modal */}
      {inspectModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#101A32] border border-white/15 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setInspectModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#070B18] text-[#A9B4C8] hover:text-white border border-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs font-mono text-[#00D9FF] uppercase tracking-wider">
                High-Resolution Architectural Concept
              </span>
              <h3 className="text-2xl font-heading font-bold text-white mt-1">
                {activeConcept.title}
              </h3>
              <p className="text-xs text-[#A9B4C8]">{activeConcept.industry}</p>
            </div>

            <div className="rounded-xl overflow-hidden border border-white/10 mb-6 bg-[#070B18]">
              <img
                src={activeConcept.imagePath}
                alt={activeConcept.title}
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#A9B4C8]">
              <div className="bg-[#070B18]/60 p-4 rounded-xl border border-white/5">
                <h4 className="text-white font-semibold mb-2">Architectural Intent</h4>
                <p className="leading-relaxed">{activeConcept.description}</p>
              </div>
              <div className="bg-[#070B18]/60 p-4 rounded-xl border border-white/5">
                <h4 className="text-white font-semibold mb-2">Technical Feasibility</h4>
                <p className="leading-relaxed">
                  Engineered for seamless implementation with React 19, Tailwind CSS v4, and Node.js
                  backend microservices.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
