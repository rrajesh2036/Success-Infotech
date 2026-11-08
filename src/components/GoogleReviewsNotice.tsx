import React from 'react';
import { Star, MapPin, ExternalLink, ShieldCheck, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';

export default function GoogleReviewsNotice() {
  return (
    <section className="py-20 bg-[#0A0F21] relative border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-80 h-32 bg-[#2563EB]/15 blur-3xl pointer-events-none" />

          {/* Authentic Google Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101A32] border border-white/10 text-xs text-[#00D9FF] mb-6 font-mono">
            <ShieldCheck className="w-4 h-4 text-[#00D9FF]" />
            <span>AUTHENTIC REVIEWS & COMMUNITY FEEDBACK</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white tracking-tight mb-4">
            Verified on <span className="text-gradient-cyan-purple">Google Business Profile.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#A9B4C8] max-w-2xl mx-auto leading-relaxed mb-6">
            In strict compliance with our authenticity commitment, we never display fabricated reviews,
            invented star ratings, or imaginary testimonials. We encourage all clients to view and post
            authentic feedback directly on our verified Google Maps listing.
          </p>

          <div className="inline-flex items-center gap-1.5 text-amber-400 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-xs text-[#A9B4C8] ml-2 font-mono">
              (Live on Google Maps)
            </span>
          </div>

          {/* Action Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-semibold shadow-lg shadow-[#2563EB]/25 transition-all"
            >
              <MapPin className="w-4 h-4" />
              <span>Read Reviews on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={BUSINESS_INFO.googleProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#101A32] hover:bg-[#1B294E] text-[#A9B4C8] hover:text-white text-xs sm:text-sm font-medium border border-white/10 transition-colors"
            >
              <span>View Google Business Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
