import React from 'react';
import { ArrowRight, Sparkles, MapPin, CheckCircle2, ChevronDown } from 'lucide-react';
import Hero3DCanvas from './Hero3DCanvas';
import { BUSINESS_INFO } from '../data/websiteData';

interface HeroProps {
  onStartProject: () => void;
}

export default function Hero({ onStartProject }: HeroProps) {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background radial gradient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#2563EB]/15 via-[#8055F6]/15 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#00D9FF]/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            {/* Unboxed Metadata Kicker (Anti-slop zero-pill rule: unboxed text with middle dot) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#00D9FF] font-mono tracking-wide">
              <span className="font-semibold">AI-Powered Web Agency</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#A9B4C8]">C I Square, Kolar Rd, Bhopal</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#A9B4C8] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#00D9FF]" />
                462042
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-[1.08] text-white">
              Your Vision.{' '}
              <span className="text-gradient-cyan-purple">Our Innovation.</span>{' '}
              Your Digital Success.
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-[#A9B4C8] leading-relaxed max-w-xl font-normal">
              Modern website experiences designed to help businesses stand out, connect with
              customers, and grow in the digital world.
            </p>

            {/* CTA Action Cluster */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onStartProject}
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#8055F6] hover:from-[#1D4ED8] hover:to-[#6D28D9] rounded-xl shadow-lg shadow-[#2563EB]/25 hover:shadow-[#00D9FF]/35 transition-all transform hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[#A9B4C8] hover:text-white bg-[#101A32]/80 hover:bg-[#1B294E] rounded-xl border border-white/10 hover:border-[#00D9FF]/40 transition-all whitespace-nowrap"
              >
                <span>Explore Our Work</span>
              </a>
            </div>

            {/* Trust Proof Points (Adjacency rule) */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#A9B4C8]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00D9FF] shrink-0" />
                <span>Custom Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8055F6] shrink-0" />
                <span>Mobile-First Speed</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Google Maps Verified</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero 3D Interactive WebGL Experience */}
          <div className="lg:col-span-6 relative">
            <Hero3DCanvas />
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="flex justify-center mt-12">
        <a
          href="#about"
          className="flex flex-col items-center gap-1.5 text-xs text-[#A9B4C8]/70 hover:text-[#00D9FF] transition-colors"
          aria-label="Scroll to introduction"
        >
          <span>Discover Success Infotech</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
