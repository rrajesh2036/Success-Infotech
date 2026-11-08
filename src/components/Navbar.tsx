import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Design Concepts', href: '#work' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070B18]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-xl shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single element lockup per Top Bar Contract) */}
          <a
            href="#"
            className="flex items-center gap-3 group whitespace-nowrap shrink-0"
            aria-label="Success Infotech Homepage"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00D9FF] via-[#2563EB] to-[#8055F6] p-0.5 shadow-md shadow-[#2563EB]/30 group-hover:shadow-[#00D9FF]/40 transition-shadow">
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
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-[#00D9FF] transition-colors">
                SUCCESS INFOTECH
              </span>
              <span className="text-[10px] text-[#A9B4C8] font-mono tracking-wider uppercase -mt-0.5">
                AI Website Agency · Bhopal
              </span>
            </div>
          </a>

          {/* Zone 2: Clean 4–5 single-line navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#A9B4C8]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-[#00D9FF] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200 whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#8055F6] hover:from-[#1D4ED8] hover:to-[#6D28D9] rounded-lg shadow-md shadow-[#2563EB]/20 hover:shadow-[#00D9FF]/30 transition-all transform hover:-translate-y-0.5 whitespace-nowrap shrink-0"
            >
              <span>Get Free Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#101A32] text-[#A9B4C8] hover:text-white border border-white/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#070B18]/95 backdrop-blur-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-[#A9B4C8] hover:text-white hover:bg-[#101A32] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg shadow-md shadow-[#2563EB]/30 transition-colors"
              >
                <span>Get Free Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href={`tel:${BUSINESS_INFO.primaryPhoneRaw}`}
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-white bg-[#101A32] rounded-lg border border-white/10"
                >
                  <span>📞 Call Us</span>
                </a>
                <a
                  href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=Hello%20Success%20Infotech%2C%20I%20would%20like%20to%20discuss%20a%20website%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-emerald-400 bg-[#101A32] rounded-lg border border-white/10"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-[#A9B4C8] hover:text-white bg-[#101A32] rounded-lg border border-white/10"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#00D9FF]" />
                  <span>Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
