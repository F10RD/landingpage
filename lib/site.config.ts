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
    nameKey: 'packages.starter.name',
    color: 'blue',
    price: 500,
    descriptionKey: 'packages.starter.description',
    featureKeys: [
      'packages.starter.f1',
      'packages.starter.f2',
      'packages.starter.f3',
      'packages.starter.f4',
      'packages.starter.f5',
    ],
    ctaKey: 'packages.starter.cta',
    highlighted: false,
  },
  {
    nameKey: 'packages.business.name',
    color: 'magenta',
    price: 1000,
    descriptionKey: 'packages.business.description',
    featureKeys: [
      'packages.business.f1',
      'packages.business.f2',
      'packages.business.f3',
      'packages.business.f4',
      'packages.business.f5',
    ],
    ctaKey: 'packages.business.cta',
    highlighted: true,
  },
  {
    nameKey: 'packages.custom.name',
    color: 'gold',
    price: 1500,
    pricePrefix: 'from',
    descriptionKey: 'packages.custom.description',
    featureKeys: [
      'packages.custom.f1',
      'packages.custom.f2',
      'packages.custom.f3',
      'packages.custom.f4',
      'packages.custom.f5',
    ],
    ctaKey: 'packages.custom.cta',
    highlighted: false,
  },
];

export const pricingAddons = [
  { labelKey: 'addonItems.language', price: '€100–150' },
  { labelKey: 'addonItems.subpage', price: '€80–150' },
];

export const pricingSupport = [
  {
    nameKey: 'supportTiers.basic.name',
    price: '€40/mo',
    perkKeys: ['supportTiers.basic.p1'],
  },
  {
    nameKey: 'supportTiers.standard.name',
    price: '€90/mo',
    perkKeys: ['supportTiers.standard.p1'],
  },
];
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
    titleKey: 'steps.discovery.title',
    descriptionKey: 'steps.discovery.description',
    accent: 'blue' as const,
    detailKeys: [
      'steps.discovery.d1',
      'steps.discovery.d2',
      'steps.discovery.d3',
    ],
  },
  {
    number: '02',
    titleKey: 'steps.design.title',
    descriptionKey: 'steps.design.description',
    accent: 'magenta' as const,
    detailKeys: [
      'steps.design.d1',
      'steps.design.d2',
      'steps.design.d3',
    ],
  },
  {
    number: '03',
    titleKey: 'steps.build.title',
    descriptionKey: 'steps.build.description',
    accent: 'gold' as const,
    detailKeys: [
      'steps.build.d1',
      'steps.build.d2',
      'steps.build.d3',
    ],
  },
  {
    number: '04',
    titleKey: 'steps.launch.title',
    descriptionKey: 'steps.launch.description',
    accent: 'blue' as const,
    detailKeys: [
      'steps.launch.d1',
      'steps.launch.d2',
      'steps.launch.d3',
    ],
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
