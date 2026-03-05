'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { CalendarCheck, LayoutDashboard, Layers, Wrench } from 'lucide-react';

const services = [
  {
    icon: CalendarCheck,
    titleKey: 'booking',
    accent: 'blue',
    highlights: [
      'Real-time availability',
      'Email confirmations',
      'Mobile-friendly',
    ],
  },
  {
    icon: LayoutDashboard,
    titleKey: 'admin',
    accent: 'gold',
    highlights: ['Booking overview', 'Confirm & cancel', 'Easy to use'],
  },
  {
    icon: Layers,
    titleKey: 'landing',
    accent: 'blue',
    highlights: ['SEO-ready', 'Lightning fast', 'Professional design'],
  },
  {
    icon: Wrench,
    titleKey: 'custom',
    accent: 'gold',
    highlights: ['EN/NL support', 'CMS integration', 'Built to scale'],
  },
] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

export default function WhatIBuildSection() {
  const t = useTranslations('whatIBuild');

  return (
    <section
      id="services"
      className="relative bg-galaxy-black py-24 px-6 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(245,166,35,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-galaxy-gold-light text-xs font-medium tracking-widest uppercase mb-4 block font-mono">
            {t('eyebrow')}
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            {t('heading')}
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            {t('subline')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5"
        >
          {services.map((service) => {
            const Icon = service.icon;
            const isGold = service.accent === 'gold';
            return (
              <motion.div
                key={service.titleKey}
                variants={cardVariants}
                className="group relative bg-galaxy-black p-8 cursor-default"
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${
                    isGold ? 'via-galaxy-gold/20' : 'via-galaxy-blue/20'
                  } to-transparent`}
                />
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 mb-5 border ${
                    isGold
                      ? 'border-galaxy-gold/20 text-galaxy-gold-light bg-galaxy-gold/5'
                      : 'border-galaxy-blue/20 text-galaxy-blue-light bg-galaxy-blue/5'
                  }`}
                >
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="font-heading text-white text-xl font-semibold mb-3">
                  {t(`services.${service.titleKey}.title`)}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  {t(`services.${service.titleKey}.description`)}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {service.highlights.map((tag) => (
                    <li
                      key={tag}
                      className={`text-xs px-3 py-1 border font-mono ${
                        isGold
                          ? 'border-galaxy-gold/20 text-galaxy-gold-light bg-galaxy-gold/5'
                          : 'border-galaxy-blue/20 text-galaxy-blue-light bg-galaxy-blue/5'
                      }`}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
