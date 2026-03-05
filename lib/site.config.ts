// lib/site.config.ts
// ============================================================
//  FIORD — Site Configuration
//  Edytuj ten plik by zmieniać treści na stronie.
//  Nie musisz dotykać żadnego komponentu.
// ============================================================

// ─────────────────────────────────────────
//  DANE KONTAKTOWE
// ─────────────────────────────────────────
export const siteOwner = {
  name: 'Artur Andrzej Daszczuk',
  displayName: 'Artur',
  email: 'hello@fiord.dev',
  location: 'Lebbeke, Flanders, Belgium',
  locationShort: 'Flanders, Belgium',
  responseTime: 'Within 24 hours',
  available: true, // true = zielony dot "Available for new projects"
  availabilityNote:
    'Currently taking on new clients in Flanders and remotely across Belgium.',
};

// ─────────────────────────────────────────
//  HERO SECTION
// ─────────────────────────────────────────
export const heroContent = {
  badge: 'Web Development · Flanders, BE',
  headline: ['Websites that', 'work for your business', ''],
  subline:
    'I design and develop modern, fast & professional websites — custom booking systems, admin panels and more. Based in Flanders, working globally.',
  ctaPrimary: { label: 'Get a Free Quote', href: '#contact' },
  ctaSecondary: { label: 'View My Work', href: '#work' },

  industries: [
    'Barbershops',
    'Beauty Salons',
    'Restaurants',
    'Car Services',
    'Bars & Cafés',
    'Fitness Studios',
    'Law Offices',
    'Medical Clinics',
  ],
  stats: [
    { value: '100%', label: 'Custom Code' },
    { value: 'EN/NL', label: 'Languages' },
    { value: '24h', label: 'Response Time' },
  ],
};

// ─────────────────────────────────────────
//  TESTIMONIALS
// ─────────────────────────────────────────
export const testimonials = [
  {
    name: 'Martine V.',
    business: 'Beauty salon, Dendermonde',
    text: 'Since the new booking system went live, my clients can book 24/7 without calling me. I get fewer no-shows and spend less time on the phone. Exactly what I needed.',
    rating: 5,
    accent: 'blue' as const,
    initials: 'MV',
    // photo: '/testimonials/martine.jpg', // ← odkomentuj gdy masz zdjęcie
  },
  {
    name: 'Kevin D.',
    business: 'Barbershop, Aalst',
    text: 'Clean design, fast delivery and a guy who actually explains what he is building. Not a single moment where I felt lost. The admin panel is dead simple to use.',
    rating: 5,
    accent: 'gold' as const,
    initials: 'KD',
    // photo: '/testimonials/kevin.jpg',
  },
  {
    name: 'Sarah L.',
    business: 'Local business, Gent',
    text: 'Our new site looks far more professional than what agencies were quoting us double the price for. Artur was responsive, honest and delivered on time.',
    rating: 5,
    accent: 'blue' as const,
    initials: 'SL',
    // photo: '/testimonials/sarah.jpg',
  },
];

// Ustaw na false by ukryć disclaimer "* Placeholder reviews"
export const testimonialsArePlaceholder = true;

// ─────────────────────────────────────────
//  PRICING
// ─────────────────────────────────────────
export const pricingPackages = [
  {
    name: 'Starter',
    price: 500,
    description:
      'Perfect for small businesses that need a clean, fast landing page.',
    features: [
      'Custom landing page',
      'Mobile responsive',
      'Contact form',
      'SEO basics',
      '1 month support',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Business',
    price: 1000,
    description:
      'Full booking system with admin panel. The most popular choice.',
    features: [
      'Everything in Starter',
      'Online booking system',
      'Admin dashboard',
      'Email confirmations',
      '1 month support',
    ],
    cta: 'Most Popular',
    highlighted: true,
  },
  {
    name: 'Custom',
    price: 1500,
    pricePrefix: 'from',
    description:
      'Multi-language, CMS, loyalty systems or anything specific to your business.',
    features: [
      'Everything in Business',
      'EN/NL or custom language',
      'CMS integration',
      'Custom features',
      'Priority support',
    ],
    cta: "Let's Talk",
    highlighted: false,
  },
];

export const pricingAddons = [
  { name: 'Extra language (EN/NL)', price: '€100–150' },
  { name: 'Extra subpage', price: '€80–150' },
];

export const pricingSupport = [
  {
    name: 'Basic support',
    price: '€40/mo',
    perks: ['Bug fixes, minor updates'],
  },
  {
    name: 'Standard support',
    price: '€90/mo',
    perks: ['Updates, content changes, priority response'],
  },
];

export const pricingNote =
  '1 month free support included with every project. Domain & hosting on your side (~€10–15/yr + Vercel).';

// ─────────────────────────────────────────
//  PORTFOLIO / DEMO LAYOUTS
// ─────────────────────────────────────────
export const portfolioProjects = [
  {
    id: 1,
    title: 'Luxe Beauty Studio',
    category: 'Beauty Salon',
    description:
      'Full booking system for a beauty salon — service selection, staff picking, real-time slots and email confirmations. Clean, elegant design built to convert.',
    tech: [
      'Next.js 14',
      'TypeScript',
      'Supabase',
      'Tailwind CSS',
      'Framer Motion',
    ],
    liveUrl: null as string | null, // ← wstaw URL po deploymencie
    color: 'blue' as const,
    emoji: '💆‍♀️',
    images: [
      { id: 1, placeholder: true, label: 'Homepage', src: undefined },
      { id: 2, placeholder: true, label: 'Booking Flow', src: undefined },
      { id: 3, placeholder: true, label: 'Services', src: undefined },
      { id: 4, placeholder: true, label: 'Confirmation', src: undefined },
    ],
  },
  {
    id: 2,
    title: 'Iron Blade Barbershop',
    category: 'Barber Shop',
    description:
      'Dark, bold barbershop site with online booking, team profiles and pricing. Built for a premium grooming experience with a no-nonsense attitude.',
    tech: [
      'Next.js 14',
      'TypeScript',
      'Supabase',
      'Tailwind CSS',
      'Framer Motion',
    ],
    liveUrl: null as string | null,
    color: 'gold' as const,
    emoji: '💈',
    images: [
      { id: 1, placeholder: true, label: 'Homepage', src: undefined },
      { id: 2, placeholder: true, label: 'Our Barbers', src: undefined },
      { id: 3, placeholder: true, label: 'Pricing', src: undefined },
      { id: 4, placeholder: true, label: 'Booking', src: undefined },
    ],
  },
  {
    id: 3,
    title: 'Professional Services',
    category: 'Business Landing Page',
    description:
      'Modern, conversion-focused landing page for professional services. Features services section, contact form and a clean corporate aesthetic.',
    tech: [
      'Next.js 14',
      'TypeScript',
      'Supabase',
      'Tailwind CSS',
      'Framer Motion',
    ],
    liveUrl: null as string | null,
    color: 'blue' as const,
    emoji: '🏢',
    images: [
      {
        id: 1,
        placeholder: false,
        label: 'Homepage',
        src: '/landing/YourFirm.png',
      },
      {
        id: 2,
        placeholder: false,
        label: 'Services',
        src: '/landing/YourFirm2.png',
      },
      {
        id: 3,
        placeholder: false,
        label: 'Contact & Footer',
        src: '/landing/YourFirm3.png',
      },
    ],
  },
];

// ─────────────────────────────────────────
//  PROCESS STEPS
// ─────────────────────────────────────────
export const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We start with a free consultation — you tell me about your business, goals and vision. I ask the right questions to understand exactly what you need.',
    accent: 'blue' as const,
    details: ['Free 30-min call', 'Requirements scoping', 'Timeline & budget'],
  },
  {
    number: '02',
    title: 'Design',
    description:
      'I create a visual direction based on your brand. You see exactly what the site will look like before a single line of code is written.',
    accent: 'magenta' as const,
    details: [
      'Moodboard & palette',
      'Layout mockup',
      'Your feedback & approval',
    ],
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Once design is approved, I build the full site — fast, clean code, mobile-first. You get progress updates throughout.',
    accent: 'gold' as const,
    details: ['Next.js & Tailwind', 'Mobile responsive', 'Weekly updates'],
  },
  {
    number: '04',
    title: 'Launch',
    description:
      'We test everything, connect your domain and go live. I stay available for 1 month after launch to fix anything that comes up.',
    accent: 'blue' as const,
    details: ['Domain setup', 'Final QA testing', '1 month free support'],
  },
];

// ─────────────────────────────────────────
//  FOOTER
// ─────────────────────────────────────────
export const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export const footerTagline = 'Custom websites for local businesses in Belgium.';
