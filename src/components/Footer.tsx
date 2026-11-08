import React from 'react';
import { MapPin, Mail, ArrowUpRight, Heart, ShieldCheck, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/websiteData';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onSelectService: (serviceTitle: string) => void;
}

export default function Footer({ onOpenPrivacy, onOpenTerms, onSelectService }: FooterProps) {
  return (
    <footer className="bg-[#050813] text-[#A9B4C8] border-t border-white/10 relative overflow-hidden">
      {/* Subtle top animated gradient highlight */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#00D9FF] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand & Positioning Column */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00D9FF] via-[#2563EB] to-[#8055F6] p-0.5 shadow-md shadow-[#2563EB]/25">
                <div className="w-full h-full bg-[#070B18] rounded-[10px] flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#00D9FF]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6L6 18" />
                    <path d="M8 6h10v10" />
                  </svg>
                </div>
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                  SUCCESS INFOTECH
                </span>
                <span className="text-[10px] text-[#00D9FF] font-mono block -mt-0.5">
                  AI-Powered Website Development
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A9B4C8] leading-relaxed max-w-sm">
              Premier website development agency in Bhopal, crafting modern, high-performance,
              responsive web experiences designed to establish credibility and drive real customer
              conversions.
            </p>

            <div className="pt-1 space-y-1.5 text-xs text-[#A9B4C8]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00D9FF] shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed">
                  {BUSINESS_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] text-white">
                <span>📞</span>
                <a href={`tel:${BUSINESS_INFO.primaryPhoneRaw}`} className="hover:text-[#00D9FF] transition-colors">
                  {BUSINESS_INFO.primaryPhone}
                </a>
                <span>·</span>
                <a href={`tel:${BUSINESS_INFO.secondaryPhoneRaw}`} className="hover:text-[#00D9FF] transition-colors">
                  {BUSINESS_INFO.secondaryPhone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Agency
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Verified Services
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Design Concepts
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="hover:text-[#00D9FF] text-left transition-colors cursor-pointer"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Verification Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Business Verification
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#101A32] hover:bg-[#1B294E] border border-white/10 flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-4 h-4 text-[#00D9FF]" />
                  <span className="font-medium">Google Maps Listing</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A9B4C8] group-hover:text-white transition-colors" />
              </a>

              <a
                href={BUSINESS_INFO.googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#101A32] hover:bg-[#1B294E] border border-white/10 flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-2 text-white">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="font-medium">Google Business Profile</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A9B4C8] group-hover:text-white transition-colors" />
              </a>

              <a
                href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=Hi%20Success%20Infotech%2C%20I%20would%20like%20to%20discuss%20a%20website%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#101A32] hover:bg-[#1B294E] border border-white/10 flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-2 text-white">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <div>
                    <span className="font-medium block">WhatsApp: +91 {BUSINESS_INFO.whatsappNumber}</span>
                    <span className="text-[10px] text-emerald-400">Available Mon-Sat</span>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A9B4C8] group-hover:text-white transition-colors" />
              </a>

              <a
                href={`tel:${BUSINESS_INFO.primaryPhoneRaw}`}
                className="p-3 rounded-xl bg-[#101A32] hover:bg-[#1B294E] border border-white/10 flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-2 text-white">
                  <span className="text-sm">📞</span>
                  <div>
                    <span className="font-medium block">Call: {BUSINESS_INFO.primaryPhone}</span>
                    <span className="text-[10px] text-[#A9B4C8]">Alt: {BUSINESS_INFO.secondaryPhone}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A9B4C8] group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A9B4C8]/70">
          <p>
            © {new Date().getFullYear()} Success Infotech. All rights reserved. Registered in Bhopal,
            Madhya Pradesh.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span aria-hidden="true">·</span>
            <a href="/sitemap.xml" className="hover:text-white transition-colors">
              XML Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
