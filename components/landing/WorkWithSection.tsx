'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const industries = [
  { key: 'barbershops', emoji: '✂️' },
  { key: 'beauty', emoji: '💅' },
  { key: 'restaurants', emoji: '🍽️' },
  { key: 'gyms', emoji: '💪' },
  { key: 'wellness', emoji: '🧘' },
  { key: 'tradesmen', emoji: '🔧' },
] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function WorkWithSection() {
  const t = useTranslations('workWith');

  return (
    <section
      id="work-with"
      className="relative bg-galaxy-black py-24 px-6 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(33,80,199,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
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
          <span className="text-galaxy-blue-light text-xs font-medium tracking-widest uppercase mb-4 block font-mono">
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
          className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/5"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.key}
              variants={cardVariants}
              whileHover={{ backgroundColor: 'rgba(33,80,199,0.08)' }}
              className="group relative bg-galaxy-black p-8 flex flex-col items-center text-center cursor-default transition-colors duration-300"
            >
              <div className="absolute top-0 left-0 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-2 left-2 w-2 h-px bg-galaxy-blue-light" />
                <div className="absolute top-2 left-2 w-px h-2 bg-galaxy-blue-light" />
              </div>
              <div className="absolute bottom-0 right-0 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-2 right-2 w-2 h-px bg-galaxy-blue-light" />
                <div className="absolute bottom-2 right-2 w-px h-2 bg-galaxy-blue-light" />
              </div>
              <span className="text-4xl mb-4">{industry.emoji}</span>
              <h3 className="font-heading text-white font-semibold text-lg mb-1">
                {t(`industries.${industry.key}`)}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center text-white/30 text-sm mt-12 font-mono"
        >
          {t('cta')}{' '}
          <a
            href="#contact"
            className="text-galaxy-blue-light hover:text-galaxy-blue-glow underline underline-offset-4 transition-colors"
          >
            {t('ctaLink')}
          </a>
        </motion.p>
      </div>
    </section>
  );
}
