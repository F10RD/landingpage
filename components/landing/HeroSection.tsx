'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { heroContent, siteOwner } from '@/lib/site.config';

import { Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.16, 1, 0.3, 1] as const,  // tablica zamiast stringa
    },
  }),
};

export default function HeroSection() {
  const t = useTranslations('hero');
  const [currentIndustry, setCurrentIndustry] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndustry(
          (prev) => (prev + 1) % heroContent.industries.length
        );
        setAnimating(false);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: t('stat1Value'), label: t('stat1Label') },
    { value: t('stat2Value'), label: t('stat2Label') },
    { value: t('stat3Value'), label: t('stat3Label') },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 text-center overflow-hidden">
      <div className="absolute inset-0 bg-galaxy-black" />

      <div
        className="nebula-animate absolute top-[-200px] left-[-200px] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(33,80,199,0.18) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="nebula-animate absolute bottom-[-150px] right-[-150px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(233,30,140,0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animationDelay: '4s',
        }}
      />
      <div
        className="nebula-animate absolute top-[30%] right-[10%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(245,166,35,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animationDelay: '8s',
        }}
      />

      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 4 + 's',
              opacity: Math.random() * 0.6 + 0.1,
            }}
          />
        ))}
      </div>

      <div className="absolute top-0 left-0 w-32 h-32 pointer-events-none">
        <div className="absolute top-8 left-8 w-16 h-px bg-gradient-to-r from-galaxy-purple-light/60 to-transparent" />
        <div className="absolute top-8 left-8 w-px h-16 bg-gradient-to-b from-galaxy-purple-light/60 to-transparent" />
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none">
        <div className="absolute bottom-8 right-8 w-16 h-px bg-gradient-to-l from-galaxy-orange/60 to-transparent" />
        <div className="absolute bottom-8 right-8 w-px h-16 bg-gradient-to-t from-galaxy-orange/60 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="inline-flex items-center gap-2 border border-white/15 bg-white/5 backdrop-blur-sm px-5 py-2 text-sm text-white/70 mb-12 tracking-widest uppercase"
        >
          <span
            className={`w-1.5 h-1.5 ${
              siteOwner.available
                ? 'bg-galaxy-blue-glow animate-pulse'
                : 'bg-white/30'
            }`}
          />
          {t('badge')}
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-4 tracking-tight"
        >
          <span className="block text-white">{t('headline1')}</span>
          <span className="block gradient-text">{t('headline2')}</span>
        </motion.h1>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
          className="text-xl md:text-2xl text-white/70 mb-8 font-mono h-8 tracking-wider"
        >
          {t('builtFor')}{' '}
          <span
            className={`text-galaxy-blue-glow font-medium transition-all duration-300 inline-block ${
              animating
                ? 'opacity-0 -translate-y-2'
                : 'opacity-100 translate-y-0'
            }`}
          >
            {heroContent.industries[currentIndustry]}
          </span>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.7}
          className="text-lg text-white/60 max-w-xl mx-auto mb-14 leading-relaxed"
        >
          {t('subline')}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.9}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="btn-primary text-sm px-10 py-4">
            {t('ctaPrimary')} ✦
          </a>
          <a href="#work" className="btn-secondary text-sm px-10 py-4">
            {t('ctaSecondary')}
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.1}
          className="mt-24 grid grid-cols-3 gap-8 max-w-lg mx-auto border-t border-white/10 pt-10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group cursor-default">
              <div className="text-3xl font-heading font-bold text-white group-hover:text-galaxy-blue-light transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-xs text-white/50 mt-1 tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1.4}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce"
      >
        <span className="text-xs tracking-widest uppercase font-mono">
          {t('scroll')}
        </span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </section>
  );
}
