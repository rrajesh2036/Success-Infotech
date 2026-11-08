import React from 'react';
import { MapPin, ExternalLink, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';

export default function TrustIntro() {
  return (
    <section id="about" className="py-20 bg-[#070B18] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Core Agency Positioning */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00D9FF]">
              <span>AUTHENTIC BUSINESS VERIFICATION</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#A9B4C8]">BHOPAL, MADHYA PRADESH</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Technology Meets <span className="text-gradient-cyan-purple">Creativity.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#A9B4C8] leading-relaxed">
              {BUSINESS_INFO.description}
            </p>

            <p className="text-sm text-[#A9B4C8]/80 leading-relaxed">
              Based in Bhopal, we bridge the gap between creative visual artistry and robust full-stack
              engineering. Whether you are launching a new enterprise, expanding a medical clinic, or
              modernizing a retail storefront, we build web solutions engineered to perform seamlessly in
              the real world.
            </p>

            {/* Core Capability Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#101A32]/60 border border-white/5">
                <ShieldCheck className="w-5 h-5 text-[#00D9FF] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Verified Local Agency</h4>
                  <p className="text-xs text-[#A9B4C8]">
                    Official Google Business Profile registered at Bhopal GPS coordinates.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#101A32]/60 border border-white/5">
                <Sparkles className="w-5 h-5 text-[#8055F6] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Full-Stack AI Workflow</h4>
                  <p className="text-xs text-[#A9B4C8]">
                    Modern React, TypeScript, and 3D web technologies for high performance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Business Profile Verification Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl p-6 relative overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D9FF]/10 blur-3xl rounded-full pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2563EB]/20 border border-[#2563EB]/40 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#00D9FF]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-white">Google Business Profile</h3>
                    <p className="text-xs text-[#A9B4C8]">Direct Verified Location</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  Verified
                </span>
              </div>

              <div className="py-4 space-y-3.5 text-xs">
                <div className="flex justify-between items-start">
                  <span className="text-[#A9B4C8]">Business Name</span>
                  <span className="text-white font-medium text-right">{BUSINESS_INFO.name}</span>
                </div>

                <div className="flex justify-between items-start">
                  <span className="text-[#A9B4C8]">Category</span>
                  <span className="text-white font-medium text-right">{BUSINESS_INFO.verifiedCategory}</span>
                </div>

                <div className="flex justify-between items-start">
                  <span className="text-[#A9B4C8]">Region</span>
                  <span className="text-white font-medium text-right">
                    {BUSINESS_INFO.city}, {BUSINESS_INFO.state}, {BUSINESS_INFO.country}
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <span className="text-[#A9B4C8]">Office Address</span>
                  <span className="text-white font-medium text-right max-w-[240px] text-[11px] leading-tight">
                    Office F25&T10, C I Square, Kolar Rd, Bhopal 462042
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <span className="text-[#A9B4C8]">Contact Numbers</span>
                  <span className="text-[#00D9FF] font-mono text-right text-[11px]">
                    +91 94254 62223 / 94251 32823
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <span className="text-[#A9B4C8]">WhatsApp</span>
                  <span className="text-emerald-400 font-mono text-right text-[11px]">
                    +91 94254 62223
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <span className="text-[#A9B4C8]">GPS Coordinates</span>
                  <span className="text-[#00D9FF] font-mono text-right">
                    {BUSINESS_INFO.coordinates.lat}, {BUSINESS_INFO.coordinates.lng}
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <span className="text-[#A9B4C8]">Business Hours</span>
                  <span className="text-white font-medium text-right">{BUSINESS_INFO.operatingHours}</span>
                </div>
              </div>

              {/* Direct Maps Action */}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold transition-all shadow-md shadow-[#2563EB]/25"
                >
                  <span>Open on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={BUSINESS_INFO.googleProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-[#101A32] hover:bg-[#1B294E] text-[#A9B4C8] hover:text-white text-xs font-medium border border-white/10 transition-colors"
                >
                  <span>View Google Business Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
