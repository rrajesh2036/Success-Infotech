import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/websiteData';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export default function LegalModals({ type, onClose }: LegalModalProps) {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#101A32] border border-white/15 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl text-xs sm:text-sm text-[#A9B4C8]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#070B18] text-[#A9B4C8] hover:text-white border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'privacy' ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#2563EB]/20 border border-[#2563EB]/40 flex items-center justify-center text-[#00D9FF]">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#00D9FF] uppercase tracking-wider">
                  Data Governance & Trust
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                  Privacy Policy
                </h3>
              </div>
            </div>

            <div className="space-y-4 leading-relaxed">
              <p>
                At <strong className="text-white">Success Infotech</strong> (based in Bhopal, Madhya
                Pradesh, India), we are committed to safeguarding the privacy and confidentiality of our
                website visitors and client enquiries.
              </p>

              <h4 className="text-white font-semibold text-sm">1. Information We Collect</h4>
              <p>
                When you submit an enquiry through our contact forms or request a consultation, we collect
                your name, company name, phone number, email address, and project requirements solely to
                evaluate your website scope and provide quotations.
              </p>

              <h4 className="text-white font-semibold text-sm">2. Use of Information</h4>
              <p>
                Information collected is strictly used to communicate with you regarding your requested
                services, execute development contracts, and provide technical support. We do not sell,
                rent, or distribute your personal details to third-party marketing companies.
              </p>

              <h4 className="text-white font-semibold text-sm">3. Security Standards</h4>
              <p>
                We employ standard SSL encryption and secure backend practices to prevent unauthorized
                access to submitted data.
              </p>

              <h4 className="text-white font-semibold text-sm">4. Contact & Inquiries</h4>
              <p>
                For any privacy questions or requests to delete your stored consultation enquiries, please
                reach out directly at <code className="text-[#00D9FF]">{BUSINESS_INFO.supportEmail}</code>.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#8055F6]/20 border border-[#8055F6]/40 flex items-center justify-center text-[#8055F6]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#00D9FF] uppercase tracking-wider">
                  Service Terms & Conditions
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                  Terms of Service
                </h3>
              </div>
            </div>

            <div className="space-y-4 leading-relaxed">
              <p>
                Welcome to <strong className="text-white">Success Infotech</strong>. By using this
                website or engaging our agency for website development services, you agree to these
                terms.
              </p>

              <h4 className="text-white font-semibold text-sm">1. Project Scopes & Quotations</h4>
              <p>
                Project quotations provided after consultation are structured based on agreed milestone
                deliverables, design prototypes, and technology specifications outlined in our formal
                service proposals.
              </p>

              <h4 className="text-white font-semibold text-sm">2. Intellectual Property & Code Ownership</h4>
              <p>
                Upon complete settlement of agreed project dues, clients receive full ownership rights to
                the custom codebases, design assets, and content developed specifically for their web
                application.
              </p>

              <h4 className="text-white font-semibold text-sm">3. Authenticity Commitment</h4>
              <p>
                Success Infotech adheres to truthful representations of services, official Bhopal
                geographic locations, and capabilities. Concepts displayed on this website are illustrative
                prototypes designed to show technical capabilities.
              </p>

              <h4 className="text-white font-semibold text-sm">4. Governing Law</h4>
              <p>
                These terms shall be governed by and construed in accordance with the laws of Madhya
                Pradesh, India.
              </p>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#070B18] hover:bg-[#1B294E] text-white text-xs font-semibold border border-white/10 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
