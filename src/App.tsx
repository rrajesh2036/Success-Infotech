/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustIntro from './components/TrustIntro';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import DesignConcepts from './components/DesignConcepts';
import IndustriesSection from './components/IndustriesSection';
import ProcessSection from './components/ProcessSection';
import GoogleReviewsNotice from './components/GoogleReviewsNotice';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import LegalModals from './components/LegalModals';

export default function App() {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [prefilledService, setPrefilledService] = useState<string>('AI-Powered Website Development');

  const scrollToContact = (service?: string) => {
    if (service) {
      setPrefilledService(service);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070B18] text-white flex flex-col selection:bg-[#2563EB] selection:text-white">
      {/* Sticky Premium Navbar */}
      <Navbar onOpenConsultation={() => scrollToContact()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with 3D Interactive Laptop Experience */}
        <Hero onStartProject={() => scrollToContact()} />

        {/* 2. Trust & Authentic Google Profile Verification */}
        <TrustIntro />

        {/* 3. About Us & Engineering Philosophy */}
        <AboutSection />

        {/* 4. Verified Services Bento Grid */}
        <ServicesSection onSelectServiceForQuote={(service) => scrollToContact(service)} />

        {/* 5. Why Choose Success Infotech */}
        <WhyChooseUs />

        {/* 6. Website Design Concepts (Authentic Portfolio Showcase) */}
        <DesignConcepts />

        {/* 7. Industries We Can Serve */}
        <IndustriesSection onConsultIndustry={(industry) => scrollToContact(`${industry} Website`)} />

        {/* 8. 6-Step Working Process */}
        <ProcessSection />

        {/* 9. Authentic Google Reviews & Community Verification Notice */}
        <GoogleReviewsNotice />

        {/* 10. Frequently Asked Questions Accordion */}
        <FAQSection />

        {/* 11. High-Conversion Lead Capture Form */}
        <ContactSection prefilledService={prefilledService} />

        {/* 12. Google Maps Embed & Business Coordinates */}
        <LocationSection />
      </main>

      {/* Premium Dark Glass Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onSelectService={(service) => scrollToContact(service)}
      />

      {/* Legal Modals (Privacy & Terms) */}
      <LegalModals type={legalModalType} onClose={() => setLegalModalType(null)} />
    </div>
  );
}
