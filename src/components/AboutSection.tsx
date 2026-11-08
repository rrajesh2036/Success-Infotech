import React from 'react';
import { Target, Compass, Code, Layers, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-24 bg-[#0A0F21] relative overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#8055F6]/10 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00D9FF] mb-3">
            <span>ABOUT SUCCESS INFOTECH</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#A9B4C8]">OUR PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Turning Digital Ideas Into{' '}
            <span className="text-gradient-cyan-purple">Meaningful Experiences.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A9B4C8] leading-relaxed">
            We are dedicated to building websites that don't just look visually breathtaking—they
            serve as hard-working growth engines for modern enterprises and local businesses.
          </p>
        </div>

        {/* Split Grid: Mission / Vision & Studio Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Mission, Vision & Approach */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Vision Card */}
              <div className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-[#00D9FF]/30 transition-all flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-[#00D9FF]/10 text-[#00D9FF] flex items-center justify-center mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">Our Vision</h3>
                <p className="text-xs sm:text-sm text-[#A9B4C8] leading-relaxed">
                  To empower businesses across Bhopal, India, and beyond with world-class,
                  AI-assisted web platforms that democratize digital excellence and create
                  measurable commercial impact.
                </p>
              </div>

              {/* Mission Card */}
              <div className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-[#8055F6]/30 transition-all flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-[#8055F6]/10 text-[#8055F6] flex items-center justify-center mb-4">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">Our Mission</h3>
                <p className="text-xs sm:text-sm text-[#A9B4C8] leading-relaxed">
                  To eliminate template mediocrity and sluggish web experiences by pairing
                  disciplined full-stack engineering with intelligent workflows and human-centered design.
                </p>
              </div>
            </div>

            {/* Development Approach & Value Offered */}
            <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/10">
              <h3 className="text-lg font-heading font-bold text-white mb-3 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#2563EB]" />
                <span>Our Engineering Standards</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#A9B4C8] leading-relaxed mb-4">
                We reject cluttered visual builders and generic CMS templates that burden sites with
                unnecessary code. Instead, we architect each client’s platform using modern modular
                frameworks, ensuring:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 text-[#A9B4C8]">
                  <CheckCircle2 className="w-4 h-4 text-[#00D9FF] shrink-0" />
                  <span>Sub-second page loading speed</span>
                </div>
                <div className="flex items-center gap-2 text-[#A9B4C8]">
                  <CheckCircle2 className="w-4 h-4 text-[#8055F6] shrink-0" />
                  <span>Strict WCAG AA accessibility</span>
                </div>
                <div className="flex items-center gap-2 text-[#A9B4C8]">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Integrated Schema.org SEO</span>
                </div>
                <div className="flex items-center gap-2 text-[#A9B4C8]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero horizontal scroll on mobile</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase (Agency 3D Studio Visual with Fallback) */}
          <div className="lg:col-span-5 relative flex flex-col justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-full min-h-[380px] bg-[#101A32]">
              <img
                src="/src/assets/images/agency_studio_visual_1794125307466.jpg"
                alt="Success Infotech 3D Studio Visual"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B18] via-transparent to-black/30 pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#070B18]/80 backdrop-blur-md border border-white/10">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-heading font-bold text-white">Creative Studio Ecosystem</span>
                  <span className="text-[11px] font-mono text-[#00D9FF]">React · Three.js · Vite</span>
                </div>
                <p className="text-[11px] text-[#A9B4C8]">
                  Illustrative representation of our multi-layered digital design and development pipeline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
