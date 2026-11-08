export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  deliverables: string[];
  technologies: string[];
  iconName: string;
}

export interface DesignConcept {
  id: string;
  title: string;
  industry: string;
  description: string;
  imagePath: string;
  tags: string[];
  colorPalette: string[];
  keyFeatures: string[];
  liveConceptPreviewUrl?: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface IndustryVertical {
  id: string;
  name: string;
  iconName: string;
  description: string;
  keyFeatures: string[];
  typicalGoals: string;
  sampleDeliverables: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface EnquirySubmission {
  fullName: string;
  businessName: string;
  phone: string;
  email: string;
  websiteType: string;
  budget?: string;
  requirements: string;
}

export interface StoredEnquiry extends EnquirySubmission {
  id: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'in_progress';
}
