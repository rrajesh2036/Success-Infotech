import { ServiceItem, DesignConcept, ProcessStep, IndustryVertical, FAQItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Success Infotech',
  tagline: 'AI-Powered Website Development Agency',
  address: 'Office F25&T10, C I Square, Vineet Kunj, Akbarpura, Kolar Rd, Gehun Kheda, Bhopal, Madhya Pradesh 462042',
  city: 'Bhopal',
  state: 'Madhya Pradesh',
  postalCode: '462042',
  country: 'India',
  phones: ['+91 94254 62223', '+91 94251 32823'],
  primaryPhone: '+91 94254 62223',
  primaryPhoneRaw: '9425462223',
  secondaryPhone: '+91 94251 32823',
  secondaryPhoneRaw: '9425132823',
  whatsappNumber: '9425462223',
  whatsappFormatted: '+91 94254 62223',
  coordinates: {
    lat: 23.1723549,
    lng: 77.4172171,
  },
  googleMapsUrl: 'https://maps.app.goo.gl/PHLCteWnwqeDeSsY8',
  googleProfileUrl: 'https://share.google/uK4UMn8L0GUTXUFw2',
  operatingHours: 'Monday – Saturday: 09:30 AM – 06:30 PM',
  statusDays: 'Sunday: Closed',
  verifiedCategory: 'Website Development Agency',
  supportEmail: 'contact@successinfotech.in',
  description:
    'Success Infotech is an AI-powered website development agency based at C I Square, Kolar Road, Bhopal, Madhya Pradesh. We craft high-performance, responsive websites, bespoke digital interfaces, and modern web platforms tailored to help businesses establish a powerful digital presence, connect with customers, and drive sustainable growth.',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'ai-website-development',
    title: 'AI-Powered Website Development',
    shortDescription:
      'Next-generation websites built using AI-accelerated workflows and modern frameworks for unmatched speed, intelligent interactivity, and precision.',
    fullDescription:
      'We combine artificial intelligence tooling with senior human engineering to accelerate architecture planning, automated code optimization, and intelligent user experience design. The result is a lightning-fast, future-proof web platform that adapts to your business needs.',
    benefits: [
      'Accelerated time-to-market with automated scaffolding',
      'Optimized lightweight codebases for superior Core Web Vitals',
      'Intelligent user flow design and predictive navigation',
      'Scalable modular component architecture',
    ],
    deliverables: [
      'Custom React / TypeScript / Vite codebase',
      'Clean modular component structure',
      'Production build scripts & documentation',
      'Full source code ownership',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js'],
    iconName: 'Cpu',
  },
  {
    id: 'custom-website-design',
    title: 'Custom Website Design & UI/UX',
    shortDescription:
      'Bespoke digital design tailored to your exact brand identity, user personas, and conversion goals—zero generic templates.',
    fullDescription:
      'Every brand is unique. We build bespoke design systems featuring thoughtful typography, refined color hierarchies, interactive micro-interactions, and ergonomic user journeys that capture attention and build immediate credibility.',
    benefits: [
      'Original, distinctive visual identity that stands out from competitors',
      'User journey mapping to maximize enquiry conversions',
      'Cohesive design system with typography, tokens, and components',
      'WCAG AA accessible contrast and touch-friendly controls',
    ],
    deliverables: [
      'Complete interactive UI design prototype',
      'Custom SVG graphics & typography pairing',
      'Component design token specifications',
      'Responsive design across 360px to 4K displays',
    ],
    technologies: ['Figma', 'Tailwind CSS', 'SVG Graphics', 'Motion UI'],
    iconName: 'Palette',
  },
  {
    id: 'business-corporate-websites',
    title: 'Business & Corporate Websites',
    shortDescription:
      'Professional websites engineered to build institutional trust, articulate services clearly, and drive qualified enterprise leads.',
    fullDescription:
      'Corporate websites must establish authority from the very first second. We engineer structured, conversion-oriented platforms that clearly explain complex offerings, spotlight organizational credibility, and funnel qualified prospects to your sales team.',
    benefits: [
      'Authoritative visual presence that commands respect',
      'Structured service pages with clear calls-to-action',
      'Seamless lead capture forms with anti-spam protection',
      'Enterprise-grade security and SSL optimization',
    ],
    deliverables: [
      'Multi-section corporate website with dedicated service portals',
      'Integrated lead capture and enquiry notification pipeline',
      'About, Leadership, Case Studies, and Contact pages',
      'Fast CDN deployment configuration',
    ],
    technologies: ['TypeScript', 'Express', 'Tailwind CSS', 'REST APIs'],
    iconName: 'Building2',
  },
  {
    id: 'ecommerce-development',
    title: 'E-Commerce Website Development',
    shortDescription:
      'High-converting online storefronts optimized for smooth checkout experiences, inventory presentation, and mobile shoppers.',
    fullDescription:
      'Turn casual store visitors into loyal buyers. We engineer streamlined e-commerce catalogs featuring intuitive filtering, fast product quick-views, frictionless cart management, and seamless payment gateway integrations.',
    benefits: [
      'Frictionless checkout paths designed to reduce cart abandonment',
      'Fast catalog filtering and real-time product search',
      'High-resolution optimized product visual presentation',
      'Mobile-first shopping experience for on-the-go customers',
    ],
    deliverables: [
      'Interactive product catalog & detail modals',
      'Cart management & checkout state machine',
      'Payment gateway integration setup',
      'Order management & customer enquiry pipeline',
    ],
    technologies: ['React', 'Stripe / Razorpay SDKs', 'Tailwind CSS', 'Node.js'],
    iconName: 'ShoppingBag',
  },
  {
    id: 'responsive-web-development',
    title: 'Responsive & High-Performance Web Apps',
    shortDescription:
      'Ultra-responsive web applications tailored for flawless operation across Android phones, iPhones, iPads, and ultra-wide desktops.',
    fullDescription:
      'Over 70% of web traffic originates from mobile devices. We build mobile-first experiences with zero horizontal scrolling, rapid touch gestures, lightweight asset delivery, and sub-second load times even on spotty cellular networks.',
    benefits: [
      'Tested across 360px, 390px, 430px, 768px, 1024px, and 1440px+',
      'Touch-friendly targets (minimum 44px) for easy mobile tapping',
      'Adaptive image sizing and lazy loading',
      'Zero layout shift (CLS < 0.05)',
    ],
    deliverables: [
      'Fluid responsive grid system',
      'Mobile navigation drawer with gesture feedback',
      'Optimized SVG icons and compressed graphics',
      'Lighthouse 90+ audit verification report',
    ],
    technologies: ['CSS Flexbox/Grid', 'Touch Gestures', 'Intersection Observer'],
    iconName: 'Smartphone',
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign & Modernization',
    shortDescription:
      'Transform outdated, slow, or template-heavy websites into modern, high-performing digital flagships.',
    fullDescription:
      'Is your existing website failing to generate leads or looking dated compared to modern competitors? We analyze your legacy site, preserve your existing SEO equity and URLs, and rebuild the interface with cutting-edge technology and aesthetic polish.',
    benefits: [
      'Modern, trustworthy brand revamp without losing search rankings',
      'Dramatic reduction in page weight and load times',
      'Enhanced mobile usability and modern UX standards',
      'Clean migration of existing content and assets',
    ],
    deliverables: [
      'Legacy website audit & benchmark analysis',
      'Fresh UI/UX design mockups for approval',
      '301 URL redirection plan for SEO preservation',
      'Seamless production cutover and launch support',
    ],
    technologies: ['Vite', 'React', 'TypeScript', 'SEO Redirects'],
    iconName: 'RefreshCw',
  },
  {
    id: 'landing-page-development',
    title: 'Landing Page Development',
    shortDescription:
      'High-impact, conversion-focused landing pages built to maximize ROI on marketing campaigns, PPC ads, and social traffic.',
    fullDescription:
      'Landing pages have one clear goal: conversion. We eliminate visual clutter and navigate visitors through a compelling visual narrative featuring an irresistible value proposition, clear proof points, and focused lead capture forms.',
    benefits: [
      'Laser-focused user attention on a single primary call-to-action',
      'Fast load speeds to reduce bounce rates from paid campaigns',
      'Form validation with instant user feedback',
      'Built-in analytics tracking points for conversion tracking',
    ],
    deliverables: [
      'Single-page conversion funnel layout',
      'Interactive hero section with clear value proposition',
      'Lead capture form connected to backend API',
      'Google Analytics / Tag Manager integration hooks',
    ],
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'REST API'],
    iconName: 'Flame',
  },
  {
    id: 'website-maintenance',
    title: 'Website Maintenance & Security',
    shortDescription:
      'Proactive security monitoring, dependency updates, speed tuning, and continuous technical upkeep for peace of mind.',
    fullDescription:
      'A website is an active digital asset that requires regular maintenance. We provide ongoing support including security patches, dependency updates, uptime monitoring, performance audits, and rapid technical fixes whenever you need them.',
    benefits: [
      'Prevent security vulnerabilities with timely updates',
      'Continuous performance checks to maintain fast load times',
      'Regular automated backups of codebase and configurations',
      'Priority developer support for urgent adjustments',
    ],
    deliverables: [
      'Monthly maintenance checklist & report',
      'Security patch application & testing',
      'Continuous uptime and error monitoring',
      'Dedicated technical support channel',
    ],
    technologies: ['Git', 'SSL/TLS', 'Node.js', 'Monitoring Tools'],
    iconName: 'ShieldCheck',
  },
  {
    id: 'search-engine-optimization',
    title: 'Search Engine Optimization (SEO)',
    shortDescription:
      'Technical SEO, Schema.org structured data, and local search optimization engineered directly into your website’s code.',
    fullDescription:
      'We build websites that search engines love to crawl and rank. From semantic HTML5 tags and OpenGraph social cards to LocalBusiness JSON-LD markup and fast server response times, your website is optimized for organic Google discovery from day one.',
    benefits: [
      'Semantic heading hierarchy (H1, H2, H3) and crawlable clean code',
      'Rich Google search result snippets via valid JSON-LD schemas',
      'Local SEO alignment with Google Business Profile & coordinates',
      'Dynamic XML sitemap and automated robots.txt generation',
    ],
    deliverables: [
      'LocalBusiness & ProfessionalService JSON-LD implementation',
      'OpenGraph and Twitter Card social preview tags',
      'Dynamic XML Sitemap (/sitemap.xml) and robots.txt',
      'Core Web Vitals speed optimization report',
    ],
    technologies: ['JSON-LD', 'Schema.org', 'Meta Tags', 'Sitemaps'],
    iconName: 'Search',
  },
];

export const DESIGN_CONCEPTS: DesignConcept[] = [
  {
    id: 'concept-nova-luxe',
    title: 'Nova Luxe Commerce',
    industry: 'Luxury Retail & Modern E-Commerce',
    description:
      'A dark-mode luxury e-commerce concept featuring floating glass card surfaces, high-contrast product staging, and frictionless micro-interactions.',
    imagePath: '/src/assets/images/concept_ecommerce_luxe_1794125305814.jpg',
    tags: ['E-Commerce', 'Dark Theme', 'Glassmorphism', 'Product Showcase'],
    colorPalette: ['#070B18', '#2563EB', '#8055F6', '#FFFFFF'],
    keyFeatures: [
      'Fluid product card hover transitions',
      'Frictionless quick-view modal',
      'Tabular price and inventory metadata',
      'Mobile-optimized touch carousels',
    ],
  },
  {
    id: 'concept-pulse-health',
    title: 'PulseHealth Clinical Portal',
    industry: 'Healthcare, Clinics & Physiotherapy',
    description:
      'A serene, highly accessible clinical portal concept designed for medical practices and wellness clinics with streamlined appointment scheduling.',
    imagePath: '/src/assets/images/concept_healthcare_portal_1794125306476.jpg',
    tags: ['Healthcare', 'Appointments', 'Clean Clinical', 'Accessibility'],
    colorPalette: ['#F8FAFC', '#00D9FF', '#2563EB', '#0F172A'],
    keyFeatures: [
      'Real-time doctor appointment availability widget',
      'Patient health summary and service directory',
      'WCAG AA accessible color contrast standards',
      'Direct WhatsApp and telephone emergency links',
    ],
  },
  {
    id: 'concept-synapse-tech',
    title: 'Synapse Enterprise Cloud',
    industry: 'AI Technology & B2B Software',
    description:
      'An authoritative B2B technology website concept featuring animated telemetry charts, modular API documentation highlights, and enterprise lead capture.',
    imagePath: '/src/assets/images/concept_corporate_ai_suite_1794125308079.jpg',
    tags: ['B2B Enterprise', 'AI & Cloud', 'Data Visualization', 'Lead Gen'],
    colorPalette: ['#0A0F1D', '#00D9FF', '#2563EB', '#A9B4C8'],
    keyFeatures: [
      'Interactive data visualization showcase',
      'Architectural bento-grid feature highlights',
      'High-conversion quotation and demo scheduler',
      'Structured technical specification drawers',
    ],
  },
];

export const INDUSTRIES_SERVED: IndustryVertical[] = [
  {
    id: 'healthcare',
    name: 'Healthcare & Medical Clinics',
    iconName: 'Activity',
    description:
      'Websites engineered for doctors, diagnostic centers, and clinics that prioritize patient trust, easy appointment booking, and treatment explanations.',
    keyFeatures: [
      'Online appointment request workflows',
      'Doctor profiles, qualifications & consulting hours',
      'Service & diagnostic test pricing transparency',
      'One-tap Google Maps directions for visiting patients',
    ],
    typicalGoals: 'Increase patient bookings and establish local medical authority.',
    sampleDeliverables: [
      'Doctor Schedule Booking Engine',
      'Patient Test Preparation Guides',
      'Emergency Contact Action Bar',
    ],
  },
  {
    id: 'physiotherapy',
    name: 'Physiotherapy & Wellness Centers',
    iconName: 'HeartPulse',
    description:
      'Modern digital homes for physiotherapy practices, rehabilitation clinics, and sports medicine practitioners.',
    keyFeatures: [
      'Treatment programs (orthopedic, neuro, sports rehab)',
      'Clinic equipment and rehabilitation gym showcase',
      'Session package enquiry forms',
      'Patient recovery testimonials and FAQ guides',
    ],
    typicalGoals: 'Educate patients on rehabilitation benefits and drive session signups.',
    sampleDeliverables: [
      'Condition-Specific Treatment Pages',
      'Interactive Body Area Pain Selector',
      'WhatsApp Consultation Quick-Connect',
    ],
  },
  {
    id: 'restaurants',
    name: 'Restaurants, Cafes & Cloud Kitchens',
    iconName: 'Utensils',
    description:
      'Appetizing websites with interactive digital menus, table reservation requests, and location-first mobile experiences.',
    keyFeatures: [
      'Interactive dietary-tagged menu (Veg / Non-Veg / Vegan)',
      'Table reservation and private dining booking form',
      'High-resolution culinary photography showcase',
      'Direct WhatsApp order button and location map',
    ],
    typicalGoals: 'Fill tables during peak hours and capture catering enquiries.',
    sampleDeliverables: [
      'Dynamic Digital Menu with Allergen Badges',
      'Party & Banquet Hall Booking System',
      'Google Maps Directions Bar',
    ],
  },
  {
    id: 'education',
    name: 'Educational & Coaching Institutes',
    iconName: 'GraduationCap',
    description:
      'Authoritative portals for academies, competitive exam coaching, colleges, and professional training centers.',
    keyFeatures: [
      'Course curriculum and fee structure outlines',
      'Online admission enquiry and callback forms',
      'Faculty profiles and teaching methodology',
      'Downloadable syllabus PDFs and student achievements',
    ],
    typicalGoals: 'Drive student admissions and build academic credibility.',
    sampleDeliverables: [
      'Batch Timing & Seat Availability Tracker',
      'Syllabus Download Lead Gate',
      'Admission Callback Form',
    ],
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Builders',
    iconName: 'Home',
    description:
      'Immersive property showcases with floor plan viewers, location highlights, and site visit booking calendars.',
    keyFeatures: [
      'Project galleries with high-resolution walkthroughs',
      'Interactive 2BHK/3BHK floor plan tabs',
      'Site visit scheduling with date/time selector',
      'Neighborhood proximity map (airports, schools, metro)',
    ],
    typicalGoals: 'Capture serious home-buyer leads and schedule in-person property visits.',
    sampleDeliverables: [
      'Interactive Master Plan & Unit Viewer',
      'Brochure Download Lead Funnel',
      'Virtual Site Tour Embed',
    ],
  },
  {
    id: 'retail',
    name: 'Retail & Local Boutiques',
    iconName: 'Store',
    description:
      'Showcases for jewelers, fashion boutiques, furniture stores, and specialty retailers seeking to draw footfall and online enquiries.',
    keyFeatures: [
      'Seasonal collection lookbooks and product catalogs',
      'Store hours, parking information, and address directions',
      'In-store appointment bookings for bridal / luxury shoppers',
      'WhatsApp catalog link for direct purchase inquiries',
    ],
    typicalGoals: 'Increase offline showroom visits and online inquiries.',
    sampleDeliverables: [
      'Curated Product Lookbook',
      'VIP In-Store Appointment Scheduler',
      'Localized WhatsApp Store Connect',
    ],
  },
  {
    id: 'professional-services',
    name: 'Professional & Legal Services',
    iconName: 'Briefcase',
    description:
      'High-trust web portals for chartered accountants, law firms, consultants, and architecture studios.',
    keyFeatures: [
      'Practice areas and legal/financial domain expertise',
      'Initial case consultation request form',
      'Partner and senior consultant credentials',
      'Client confidentiality and compliance declarations',
    ],
    typicalGoals: 'Establish corporate authority and attract high-value retainer clients.',
    sampleDeliverables: [
      'Practice Area Advisory Portals',
      'Confidential Consultation Request Form',
      'Case Study & Knowledge Base Hub',
    ],
  },
  {
    id: 'local-businesses',
    name: 'Bhopal & Regional Businesses',
    iconName: 'MapPin',
    description:
      'Targeted local business websites optimized for Google Local Pack rankings, phone calls, and direct walk-ins in Bhopal and Madhya Pradesh.',
    keyFeatures: [
      'Hyper-localized SEO for Bhopal neighborhoods (MP Nagar, Arera Colony, Kolar, etc.)',
      'Google Maps coordinates embed & instant click-to-call',
      'Verified Google Business Profile link integration',
      'Direct WhatsApp and local enquiry integration',
    ],
    typicalGoals: 'Rank #1 on Google for local searches and dominate regional inbound calls.',
    sampleDeliverables: [
      'LocalBusiness Schema Integration',
      'Google Maps Driving Directions Hub',
      'Instant Mobile Call & WhatsApp Bar',
    ],
  },
];

export const WORKING_PROCESS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Discovery & Requirements',
    subtitle: 'Understanding your business, target audience, and website goals',
    description:
      'We begin with a detailed discovery session to unpack your business model, target customer personas, key offerings, and primary conversion objectives.',
    deliverables: [
      'Requirements questionnaire & project brief',
      'Target audience & competitor landscape analysis',
      'Sitemap and content hierarchy outline',
    ],
  },
  {
    stepNumber: '02',
    title: 'Planning & Strategy',
    subtitle: 'Structuring the blueprint, technical stack, and SEO foundation',
    description:
      'We establish the technical architecture, page structure, conversion funnel paths, and keyword strategy before writing a single line of code.',
    deliverables: [
      'Wireframe blueprints and user journey flows',
      'Technical stack recommendation (React, Vite, Node.js)',
      'Local SEO keyword mapping document',
    ],
  },
  {
    stepNumber: '03',
    title: 'UI/UX Design & Prototyping',
    subtitle: 'Developing the visual direction, color system, and typography',
    description:
      'We craft a bespoke, futuristic visual design featuring intentional typography, harmonious palettes, and interactive prototypes tailored to your brand identity.',
    deliverables: [
      'High-fidelity interactive UI screens (Desktop & Mobile)',
      'Design tokens (typography, color palettes, spacing math)',
      'Client feedback and design refinement rounds',
    ],
  },
  {
    stepNumber: '04',
    title: 'Website Development',
    subtitle: 'Building the responsive website using modern technologies',
    description:
      'Our developers turn approved designs into clean, modular TypeScript code with high-performance animations, fluid responsive layouts, and robust backend integrations.',
    deliverables: [
      'Custom React + TypeScript component library',
      'Smooth CSS / Three.js interactive animations',
      'Form validation and backend API integration',
    ],
  },
  {
    stepNumber: '05',
    title: 'Testing & Optimization',
    subtitle: 'Testing responsiveness, functionality, accessibility, and speed',
    description:
      'We conduct rigorous cross-browser and cross-device testing across 360px to 4K screens, auditing Core Web Vitals, WCAG AA accessibility, and form submissions.',
    deliverables: [
      'Cross-device responsive test matrix verification',
      'Lighthouse 90+ speed audit optimization',
      'End-to-end form submission & error handling checks',
    ],
  },
  {
    stepNumber: '06',
    title: 'Launch & Deployment',
    subtitle: 'Deploying the completed website after client approval',
    description:
      'We deploy your website to secure, high-speed hosting with SSL certification, submit your sitemap to Google Search Console, and hand over complete assets.',
    deliverables: [
      'Production deployment on high-speed CDN infrastructure',
      'XML Sitemap & robots.txt submission to Google',
      'Post-launch warranty and technical handover',
    ],
  },
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: 'Modern, Bespoke Engineering',
    description:
      'We never use bloated WordPress themes or cookie-cutter templates. Every website is custom-coded using modern React and TypeScript for maximum speed and longevity.',
    iconName: 'Code2',
  },
  {
    title: 'Mobile-First by Architecture',
    description:
      'Designed and stress-tested specifically for mobile screens first, ensuring that over 70% of your visitors who browse via smartphones experience zero lag and effortless navigation.',
    iconName: 'Smartphone',
  },
  {
    title: 'AI-Assisted Efficiency',
    description:
      'We harness state-of-the-art AI development workflows to accelerate foundational scaffolding, enabling us to invest deeper time into handcrafted design and performance polish.',
    iconName: 'Sparkles',
  },
  {
    title: 'Conversion-Focused Strategy',
    description:
      'A beautiful website is useless if it does not generate business. Every section, headline, and button is positioned to convert curious visitors into paying clients.',
    iconName: 'Target',
  },
  {
    title: 'Core Web Vitals & Search Speed',
    description:
      'Fast loading is non-negotiable for both user retention and Google rankings. We optimize asset delivery, minimize bundle sizes, and aim for sub-second First Contentful Paint.',
    iconName: 'Zap',
  },
  {
    title: 'Direct, Transparent Communication',
    description:
      'You communicate directly with senior engineers and designers who understand your project. No layers of non-technical middlemen or confusing jargon.',
    iconName: 'MessageSquare',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'Why does my business need a professional website?',
    answer:
      'A professional website serves as your 24/7 digital storefront and primary trust anchor. When potential customers discover your business through Google, social media, or word of mouth, they evaluate your credibility based on your web presence. A modern, fast website clearly showcases your services, answers buyer questions, and converts visitors into paying customers.',
  },
  {
    question: 'Do you develop mobile-friendly websites?',
    answer:
      'Yes, absolutely. We adopt a mobile-first development methodology. Every website we engineer is designed and rigorously tested across standard mobile widths (360px, 390px, 430px), tablets (768px, 1024px), laptops, and large desktop screens. Touch targets, font legibility, navigation drawers, and images are all optimized for handheld devices.',
  },
  {
    question: 'Can you create a custom website for my business?',
    answer:
      'Yes. Custom website development is our core specialization. Rather than using pre-made templates that look like hundreds of other businesses, we build bespoke user interfaces and application architectures tailored directly to your brand identity, business workflows, and audience requirements.',
  },
  {
    question: 'Can I request changes to the website design during development?',
    answer:
      'Yes. Our development process includes structured milestone reviews. You will review and approve the wireframes and high-fidelity UI design prototypes before full frontend development begins. Feedback and design adjustments are incorporated at each designated milestone to ensure the final result aligns with your vision.',
  },
  {
    question: 'How does the website development process work?',
    answer:
      'We follow a proven 6-step workflow: (1) Discovery & Requirements gathering, (2) Strategy & Architecture planning, (3) UI/UX Design & Prototyping, (4) Frontend & Backend Development, (5) Testing, Accessibility & Speed Optimization, and (6) Deployment & Launch handover.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer:
      'Yes. We regularly modernize legacy websites that have become slow, visually outdated, or difficult to use on mobile phones. During a redesign, we preserve your existing search engine rankings and URLs while completely refreshing the visual presentation, user experience, and technical speed.',
  },
  {
    question: 'Do you provide website maintenance after launch?',
    answer:
      'Yes. We provide comprehensive ongoing website maintenance, including security updates, dependency patches, performance monitoring, uptime checks, and priority technical assistance to ensure your website remains secure and fast long after launch.',
  },
  {
    question: 'How can I get a website development quotation?',
    answer:
      'You can easily submit an enquiry using our Project Enquiry form on this website or reach out directly with your project requirements. Share your business type, required features, and goals, and we will review your specifications and provide a structured scope of work and quotation.',
  },
  {
    question: 'Can I contact you through WhatsApp?',
    answer:
      'Yes. You can initiate a direct WhatsApp conversation with our team using the WhatsApp chat button on our website for quick consultations, project discussions, or questions about our development services.',
  },
];
