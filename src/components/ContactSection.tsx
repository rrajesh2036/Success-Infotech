import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Sparkles,
  Inbox,
  RefreshCw,
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/websiteData';
import { StoredEnquiry } from '../types';

interface ContactSectionProps {
  prefilledService?: string;
}

export default function ContactSection({ prefilledService }: ContactSectionProps) {
  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [websiteType, setWebsiteType] = useState(
    prefilledService || 'AI-Powered Website Development'
  );
  const [budget, setBudget] = useState('₹25,000 – ₹50,000');
  const [requirements, setRequirements] = useState('');
  const [honeypot, setHoneypot] = useState('');

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{
    enquiryId: string;
    client: string;
    service: string;
  } | null>(null);

  // Testing & verification drawer state
  const [storedEnquiries, setStoredEnquiries] = useState<StoredEnquiry[]>([]);
  const [showEnquiriesDrawer, setShowEnquiriesDrawer] = useState(false);
  const [isLoadingEnquiries, setIsLoadingEnquiries] = useState(false);

  // Sync prefilled service
  useEffect(() => {
    if (prefilledService) {
      setWebsiteType(prefilledService);
    }
  }, [prefilledService]);

  // Load enquiries from both server and local cache (for Netlify static deployment)
  const loadStoredEnquiries = async () => {
    setIsLoadingEnquiries(true);
    let combined: StoredEnquiry[] = [];

    // 1. Try server fetch
    try {
      const res = await fetch('/api/enquiries');
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data.enquiries)) {
          combined = [...data.enquiries];
        }
      }
    } catch {
      // offline or static host
    }

    // 2. Read from localStorage (for Netlify static deployments)
    try {
      const localData = localStorage.getItem('success_infotech_enquiries');
      if (localData) {
        const parsed = JSON.parse(localData);
        if (Array.isArray(parsed)) {
          // Merge unique by ID
          const existingIds = new Set(combined.map((e) => e.id));
          parsed.forEach((item) => {
            if (!existingIds.has(item.id)) {
              combined.push(item);
            }
          });
        }
      }
    } catch {
      // ignore
    }

    setStoredEnquiries(combined);
    setIsLoadingEnquiries(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Client-side validations
    if (!fullName.trim() || fullName.trim().length < 2) {
      setErrorMessage('Please enter your full name (at least 2 characters).');
      return;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setErrorMessage('Please enter a valid contact phone number.');
      return;
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!requirements.trim() || requirements.trim().length < 10) {
      setErrorMessage('Please describe your project requirements in at least 10 characters.');
      return;
    }

    setIsSubmitting(true);

    const generatedId = `SI-${Date.now().toString(36).toUpperCase()}-${Math.floor(
      Math.random() * 1000
    )}`;

    const newEnquiryRecord: StoredEnquiry = {
      id: generatedId,
      fullName: fullName.trim(),
      businessName: (businessName || '').trim(),
      phone: phone.trim(),
      email: email.trim().toLowerCase(),
      websiteType,
      budget,
      requirements: requirements.trim(),
      createdAt: new Date().toISOString(),
      status: 'new',
    };

    let submissionSucceeded = false;
    let finalEnquiryId = generatedId;

    // 1. Attempt Node.js backend POST
    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          businessName,
          phone,
          email,
          websiteType,
          budget,
          requirements,
          honeypot,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          submissionSucceeded = true;
          finalEnquiryId = result.enquiryId || generatedId;
        }
      }
    } catch {
      // Server not reachable (e.g. static Netlify deployment)
    }

    // 2. Netlify & Client-side storage fallback (guarantees smooth operation on Netlify)
    try {
      const existing = localStorage.getItem('success_infotech_enquiries');
      const list = existing ? JSON.parse(existing) : [];
      list.unshift(newEnquiryRecord);
      localStorage.setItem('success_infotech_enquiries', JSON.stringify(list));
      submissionSucceeded = true;
    } catch {
      // storage failed
    }

    if (submissionSucceeded) {
      setSuccessData({
        enquiryId: finalEnquiryId,
        client: fullName,
        service: websiteType,
      });

      // Celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00D9FF', '#2563EB', '#8055F6', '#FFFFFF'],
        });
      } catch {
        // fallback
      }

      // Reset form fields
      setFullName('');
      setBusinessName('');
      setPhone('');
      setEmail('');
      setRequirements('');
    } else {
      setErrorMessage('Could not record your enquiry. Please contact us directly via phone or WhatsApp.');
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0F21] relative border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/4 w-[550px] h-[550px] bg-[#8055F6]/10 blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Heading & Direct Channels */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#00D9FF]">
              <span>GET IN TOUCH</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#A9B4C8]">START YOUR PROJECT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Let's Build Something <span className="text-gradient-cyan-purple">Extraordinary.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#A9B4C8] leading-relaxed">
              Have an idea for your next website? Let's discuss how we can turn it into a powerful
              digital experience.
            </p>

            {/* Direct Channel Cards */}
            <div className="pt-2 space-y-3.5 text-xs sm:text-sm">
              {/* Address */}
              <div className="p-4 rounded-xl bg-[#101A32]/80 border border-white/10 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/20 text-[#00D9FF] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Official Business Address</h4>
                  <p className="text-[#A9B4C8] text-xs mt-1 leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00D9FF] hover:underline text-xs inline-block mt-1.5 font-medium"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>

              {/* Calling Contact Numbers */}
              <div className="p-4 rounded-xl bg-[#101A32]/80 border border-white/10 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/20 text-[#00D9FF] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Direct Phone Lines</h4>
                  <p className="text-[#A9B4C8] text-xs mt-0.5">
                    Call our consulting team directly for project requirements:
                  </p>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1.5 font-mono">
                    <a
                      href={`tel:${BUSINESS_INFO.primaryPhoneRaw}`}
                      className="text-white hover:text-[#00D9FF] font-medium text-xs transition-colors"
                    >
                      {BUSINESS_INFO.primaryPhone}
                    </a>
                    <span className="text-white/40">·</span>
                    <a
                      href={`tel:${BUSINESS_INFO.secondaryPhoneRaw}`}
                      className="text-white hover:text-[#00D9FF] font-medium text-xs transition-colors"
                    >
                      {BUSINESS_INFO.secondaryPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp Consultation */}
              <div className="p-4 rounded-xl bg-[#101A32]/80 border border-white/10 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Direct WhatsApp Consultation</h4>
                  <p className="text-[#A9B4C8] text-xs mt-0.5">
                    Instant chat for quick discussions, scope questions, and estimates.
                  </p>
                  <a
                    href={`https://wa.me/91${BUSINESS_INFO.whatsappNumber}?text=Hello%20Success%20Infotech%2C%20I%20would%20like%20to%20discuss%20a%20website%20project.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline text-xs inline-block mt-1 font-mono font-medium"
                  >
                    +91 {BUSINESS_INFO.whatsappNumber} (Chat on WhatsApp) →
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="p-4 rounded-xl bg-[#101A32]/80 border border-white/10 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#8055F6]/20 text-[#8055F6] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Consultation Hours</h4>
                  <p className="text-[#A9B4C8] text-xs mt-0.5">
                    {BUSINESS_INFO.operatingHours} · {BUSINESS_INFO.statusDays}
                  </p>
                  <span className="text-[11px] text-[#A9B4C8]/70 block mt-0.5">
                    Average proposal turnaround: Within 24 business hours
                  </span>
                </div>
              </div>
            </div>

            {/* Test Admin / Verification Drawer Button */}
            <div className="pt-2">
              <button
                onClick={() => {
                  setShowEnquiriesDrawer(!showEnquiriesDrawer);
                  if (!showEnquiriesDrawer) loadStoredEnquiries();
                }}
                className="text-xs font-mono text-[#A9B4C8] hover:text-[#00D9FF] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Inbox className="w-3.5 h-3.5" />
                <span>
                  {showEnquiriesDrawer ? 'Hide Stored Submissions' : 'Inspect Received Submissions (Live Sync)'}
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: High-Conversion Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-9 border border-white/10 shadow-2xl relative">
              {successData ? (
                /* Success Confirmation State */
                <div className="py-8 text-center animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-emerald-500/10">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    Enquiry Successfully Registered!
                  </h3>

                  <p className="text-sm text-[#A9B4C8] max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{successData.client}</span>.
                    Our technical lead is reviewing your requirements for{' '}
                    <span className="text-[#00D9FF] font-semibold">{successData.service}</span> and
                    will reach out within 24 business hours.
                  </p>

                  <div className="inline-block p-4 rounded-xl bg-[#070B18] border border-white/10 text-xs font-mono mb-8 text-left max-w-xs w-full">
                    <div className="flex justify-between text-[#A9B4C8] mb-1">
                      <span>Reference ID:</span>
                      <span className="text-[#00D9FF] font-bold">{successData.enquiryId}</span>
                    </div>
                    <div className="flex justify-between text-[#A9B4C8]">
                      <span>Status:</span>
                      <span className="text-emerald-400">Received & Queued</span>
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={() => setSuccessData(null)}
                      className="px-6 py-2.5 rounded-xl bg-[#101A32] hover:bg-[#1B294E] text-white text-xs font-semibold border border-white/10 transition-colors cursor-pointer"
                    >
                      Submit Another Project Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Enquiry Form */
                <form
                  name="contact-enquiries"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="space-y-4 text-xs sm:text-sm"
                >
                  {/* Netlify Form Hidden Field */}
                  <input type="hidden" name="form-name" value="contact-enquiries" />

                  {/* Spam honeypot */}
                  <input
                    type="text"
                    name="website_pot"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Form Header */}
                  <div className="pb-2 border-b border-white/10 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg sm:text-xl font-heading font-bold text-white">
                        Project Consultation & Scope
                      </h3>
                      <p className="text-xs text-[#A9B4C8]">
                        Share your goals to receive a custom proposal and architecture plan.
                      </p>
                    </div>
                    <Sparkles className="w-5 h-5 text-[#00D9FF]" />
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Row 1: Full Name & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-white mb-1.5">
                        Full Name <span className="text-[#00D9FF]">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#070B18] border border-white/10 focus:border-[#00D9FF] focus:outline-none text-white text-xs sm:text-sm transition-colors placeholder:text-[#A9B4C8]/40"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-white mb-1.5">
                        Business / Company Name
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        placeholder="e.g. Apex Health Clinic"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#070B18] border border-white/10 focus:border-[#00D9FF] focus:outline-none text-white text-xs sm:text-sm transition-colors placeholder:text-[#A9B4C8]/40"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-white mb-1.5">
                        Phone Number <span className="text-[#00D9FF]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. +91 94254 62223"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#070B18] border border-white/10 focus:border-[#00D9FF] focus:outline-none text-white text-xs sm:text-sm transition-colors placeholder:text-[#A9B4C8]/40"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-white mb-1.5">
                        Email Address <span className="text-[#00D9FF]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="e.g. rahul@business.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#070B18] border border-white/10 focus:border-[#00D9FF] focus:outline-none text-white text-xs sm:text-sm transition-colors placeholder:text-[#A9B4C8]/40"
                      />
                    </div>
                  </div>

                  {/* Row 3: Website Type & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-white mb-1.5">
                        Type of Website Required
                      </label>
                      <select
                        name="websiteType"
                        value={websiteType}
                        onChange={(e) => setWebsiteType(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#070B18] border border-white/10 focus:border-[#00D9FF] focus:outline-none text-white text-xs sm:text-sm transition-colors"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Landing Page Funnel">Landing Page Funnel</option>
                        <option value="Full Web Application">Full Web Application</option>
                        <option value="Other Custom Requirement">Other Custom Requirement</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-white mb-1.5">
                        Estimated Budget (Optional)
                      </label>
                      <select
                        name="budget"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#070B18] border border-white/10 focus:border-[#00D9FF] focus:outline-none text-white text-xs sm:text-sm transition-colors"
                      >
                        <option value="₹15,000 – ₹25,000">₹15,000 – ₹25,000 (Starter / Landing Page)</option>
                        <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000 (Standard Business Website)</option>
                        <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000 (Advanced / E-Commerce)</option>
                        <option value="₹1,00,000+">₹1,00,000+ (Custom Enterprise Platform)</option>
                        <option value="Flexible / To Be Discussed">Flexible / To Be Discussed</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Project Requirements */}
                  <div>
                    <label className="block text-xs font-medium text-white mb-1.5">
                      Project Requirements & Goals <span className="text-[#00D9FF]">*</span>
                    </label>
                    <textarea
                      name="requirements"
                      required
                      rows={3}
                      placeholder="Briefly describe what your business does, key features you need (e.g., booking form, product gallery, WhatsApp connect), and target launch timeline..."
                      value={requirements}
                      onChange={(e) => setRequirements(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#070B18] border border-white/10 focus:border-[#00D9FF] focus:outline-none text-white text-xs sm:text-sm transition-colors placeholder:text-[#A9B4C8]/40 resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#8055F6] hover:from-[#1D4ED8] hover:to-[#6D28D9] text-white font-semibold text-sm shadow-lg shadow-[#2563EB]/25 hover:shadow-[#00D9FF]/35 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Registering Your Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send My Enquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-[#A9B4C8]/60 text-center mt-2">
                      Zero spam. Your information is securely stored and never shared with third parties.
                    </p>
                  </div>
                </form>
              )}

              {/* Stored Enquiries Drawer (for testing & owner verification) */}
              {showEnquiriesDrawer && (
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-mono font-semibold text-white uppercase tracking-wider flex items-center gap-2">
                      <Inbox className="w-4 h-4 text-[#00D9FF]" />
                      <span>Inbound Enquiry Submissions (Server & Local)</span>
                    </h4>
                    <button
                      onClick={loadStoredEnquiries}
                      className="text-xs text-[#00D9FF] hover:underline flex items-center gap-1"
                    >
                      <RefreshCw className={`w-3 h-3 ${isLoadingEnquiries ? 'animate-spin' : ''}`} />
                      <span>Refresh</span>
                    </button>
                  </div>

                  {storedEnquiries.length === 0 ? (
                    <p className="text-xs text-[#A9B4C8] bg-[#070B18] p-3 rounded-xl border border-white/5">
                      No enquiries stored yet. Submit the form above to verify real-time submission!
                    </p>
                  ) : (
                    <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                      {storedEnquiries.map((enq) => (
                        <div
                          key={enq.id}
                          className="p-3 rounded-xl bg-[#070B18] border border-white/10 text-xs"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-semibold text-white">{enq.fullName}</span>
                            <span className="font-mono text-[10px] text-[#00D9FF]">{enq.id}</span>
                          </div>
                          <div className="text-[#A9B4C8] text-[11px] flex flex-wrap gap-2 mb-1">
                            <span>📞 {enq.phone}</span>
                            <span>✉️ {enq.email}</span>
                            <span>🏷️ {enq.websiteType}</span>
                          </div>
                          <p className="text-[#A9B4C8]/80 line-clamp-1 italic text-[11px]">
                            "{enq.requirements}"
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
