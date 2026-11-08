import React from 'react';
import { MapPin, Navigation, ExternalLink, Clock, Phone, Mail, Compass, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';

export default function LocationSection() {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    BUSINESS_INFO.address
  )}`;

  return (
    <section className="py-24 bg-[#070B18] relative border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#00D9FF]/10 blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00D9FF] mb-3">
            <span>OFFICIAL LOCATION & MAPS</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#A9B4C8]">LOCAL BHOPAL PRESENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Find Us in <span className="text-gradient-cyan-purple">Bhopal.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A9B4C8] leading-relaxed">
            Registered and verified on Google Maps. Serving clients locally in Bhopal, across Madhya Pradesh,
            and throughout India.
          </p>
        </div>

        {/* 2-Column Location Card + Interactive Map Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Business Location Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="glass-panel rounded-3xl p-7 border border-white/10 shadow-2xl space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="w-12 h-12 rounded-xl bg-[#2563EB]/20 border border-[#2563EB]/40 flex items-center justify-center text-[#00D9FF]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-white">
                    {BUSINESS_INFO.name}
                  </h3>
                  <p className="text-xs text-[#A9B4C8]">
                    {BUSINESS_INFO.verifiedCategory}
                  </p>
                </div>
              </div>

              {/* Exact Details */}
              <div className="space-y-4 text-xs sm:text-sm">
                {/* Official Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#8055F6] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#A9B4C8] text-xs block">Official Registered Address</span>
                    <span className="text-white font-medium leading-relaxed block">
                      {BUSINESS_INFO.address}
                    </span>
                  </div>
                </div>

                {/* Direct Calling Numbers */}
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#00D9FF] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#A9B4C8] text-xs block">Contact Phone Numbers</span>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 mt-0.5">
                      <a
                        href={`tel:${BUSINESS_INFO.primaryPhoneRaw}`}
                        className="text-white hover:text-[#00D9FF] font-medium font-mono transition-colors"
                      >
                        {BUSINESS_INFO.primaryPhone}
                      </a>
                      <span className="text-white/40">·</span>
                      <a
                        href={`tel:${BUSINESS_INFO.secondaryPhoneRaw}`}
                        className="text-white hover:text-[#00D9FF] font-medium font-mono transition-colors"
                      >
                        {BUSINESS_INFO.secondaryPhone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Connect */}
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#A9B4C8] text-xs block">Official WhatsApp Number</span>
                    <a
                      href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=Hi%20Success%20Infotech%2C%20I%20would%20like%20to%20discuss%20a%20website%20project.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline font-mono font-medium"
                    >
                      +91 {BUSINESS_INFO.whatsappNumber} (Chat Now)
                    </a>
                  </div>
                </div>

                {/* Exact Coordinates */}
                <div className="flex items-start gap-3">
                  <Compass className="w-4 h-4 text-[#00D9FF] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#A9B4C8] text-xs block">Exact GPS Coordinates</span>
                    <span className="text-white font-mono font-medium">
                      {BUSINESS_INFO.coordinates.lat}° N, {BUSINESS_INFO.coordinates.lng}° E
                    </span>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#A9B4C8] text-xs block">Working Business Hours</span>
                    <span className="text-white font-medium">{BUSINESS_INFO.operatingHours}</span>
                    <span className="text-[#A9B4C8] text-xs block mt-0.5">{BUSINESS_INFO.statusDays}</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#A9B4C8] text-xs block">Official Email</span>
                    <a
                      href={`mailto:${BUSINESS_INFO.supportEmail}`}
                      className="text-[#00D9FF] hover:underline font-mono"
                    >
                      {BUSINESS_INFO.supportEmail}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#8055F6] hover:from-[#1D4ED8] hover:to-[#6D28D9] text-white text-xs sm:text-sm font-semibold shadow-lg shadow-[#2563EB]/25 transition-all flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Driving Directions to C I Square</span>
                </a>

                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#101A32] hover:bg-[#1B294E] text-[#A9B4C8] hover:text-white text-xs font-medium border border-white/10 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Open Official Google Maps Pin</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="glass-panel rounded-3xl p-3 sm:p-4 border border-white/10 shadow-2xl h-full min-h-[420px] flex flex-col relative overflow-hidden">
              {/* Map View Header */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/5 mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00D9FF]" />
                  <span className="text-xs font-mono text-white">Google Maps Interactive View</span>
                </div>
                <span className="text-[11px] font-mono text-[#A9B4C8]">
                  C I Square · Kolar Rd · 462042
                </span>
              </div>

              {/* Map Iframe with coordinates & address query */}
              <div className="flex-1 w-full rounded-2xl overflow-hidden relative border border-white/5 bg-[#0A0F1D]">
                <iframe
                  title="Success Infotech Location"
                  width="100%"
                  height="100%"
                  style={{ minHeight: '380px', border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    'C I Square, Vineet Kunj, Kolar Rd, Bhopal, Madhya Pradesh 462042'
                  )}&hl=en&z=15&output=embed`}
                />

                {/* Floating location pill */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto p-3.5 rounded-xl bg-[#070B18]/95 backdrop-blur-md border border-white/15 shadow-xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#2563EB] flex items-center justify-center text-white shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Success Infotech Office</h5>
                    <p className="text-[11px] text-[#A9B4C8]">
                      Office F25&T10, C I Square, Kolar Rd, Bhopal 462042
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
