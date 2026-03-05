'use client';

import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';
import {
  pricingPackages,
  pricingAddons,
  pricingSupport,
  pricingNote,
} from '@/lib/site.config';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
};

export default function PricingSection() {
  const t = useTranslations('pricing');

  return (
    <section
      id="pricing"
      className="relative bg-galaxy-black py-24 px-6 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(233,30,140,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(33,80,199,0.07) 0%, transparent 70%)',
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
          <span className="text-galaxy-magenta-light text-xs font-mono tracking-widest uppercase mb-4 block">
            {t('eyebrow')}
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            {t('heading')}
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            {t('subline')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 mb-16">
          {pricingPackages.map((plan, i) => {
            const isBlue = plan.color === 'blue';
            const isMagenta = plan.color === 'magenta';
            const accentText = isBlue
              ? 'text-galaxy-blue-light'
              : isMagenta
              ? 'text-galaxy-magenta-light'
              : 'text-galaxy-gold-light';
            const accentBg = isBlue
              ? 'bg-galaxy-blue/5'
              : isMagenta
              ? 'bg-galaxy-magenta/5'
              : 'bg-galaxy-gold/5';
            const accentBorder = isBlue
              ? 'border-galaxy-blue/20'
              : isMagenta
              ? 'border-galaxy-magenta/30'
              : 'border-galaxy-gold/20';
            const topBar = isBlue
              ? 'via-galaxy-blue-light/50'
              : isMagenta
              ? 'via-galaxy-magenta-light/70'
              : 'via-galaxy-gold-light/50';
            const priceDisplay =
              typeof plan.price === 'number' ? `€${plan.price}` : plan.price;
            const fullPrice = plan.pricePrefix
              ? `${plan.pricePrefix} ${priceDisplay}`
              : priceDisplay;

            return (
              <motion.div
                key={plan.name}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative flex flex-col bg-galaxy-black p-8 ${
                  plan.highlighted ? 'bg-white/[0.03]' : ''
                }`}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${topBar} to-transparent`}
                />
                {plan.highlighted && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 border border-galaxy-magenta/40 bg-galaxy-magenta/10 px-2 py-0.5">
                    <Zap size={10} className="text-galaxy-magenta-light" />
                    <span className="text-galaxy-magenta-light text-xs font-mono tracking-widest">
                      POPULAR
                    </span>
                  </div>
                )}
                <div
                  className={`text-xs font-mono tracking-widest uppercase mb-4 ${accentText}`}
                >
                  {plan.name}
                </div>
                <div className="font-heading text-3xl font-bold text-white mb-2">
                  {fullPrice}
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-8 min-h-[60px]">
                  {plan.description}
                </p>
                <ul className="flex flex-col gap-3 mb-10 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-white/70"
                    >
                      <Check
                        size={14}
                        className={`mt-0.5 flex-shrink-0 ${accentText}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`text-center text-xs font-mono tracking-widest uppercase py-3 border transition-all duration-300
                    ${
                      plan.highlighted
                        ? 'bg-white text-galaxy-black border-white hover:bg-white/90'
                        : `bg-transparent ${accentText} ${accentBorder} ${accentBg} hover:border-opacity-60`
                    }`}
                >
                  {plan.cta} {t('arrow')}
                </a>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-galaxy-black p-8"
          >
            <div className="text-xs font-mono tracking-widest uppercase text-galaxy-blue-light mb-6">
              {t('addons')}
            </div>
            <ul className="flex flex-col gap-4">
              {pricingAddons.map((addon) => (
                <li
                  key={addon.label}
                  className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0"
                >
                  <span className="text-white/60 text-sm">{addon.label}</span>
                  <span className="text-white font-mono text-sm">
                    {addon.price}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-galaxy-black p-8"
          >
            <div className="text-xs font-mono tracking-widest uppercase text-galaxy-gold-light mb-6">
              {t('support')}
            </div>
            <div className="flex flex-col gap-4">
              {pricingSupport.map((tier) => (
                <div key={tier.name} className="border border-white/10 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white font-heading font-semibold">
                      {tier.name}
                    </span>
                    <span className="text-galaxy-gold-light font-mono text-sm">
                      {tier.price}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-1">
                    {tier.perks.map((perk) => (
                      <li
                        key={perk}
                        className="text-white/50 text-xs flex items-center gap-2"
                      >
                        <span className="w-1 h-1 bg-galaxy-gold/60 flex-shrink-0" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <p className="text-white/30 text-xs font-mono mt-2">
                {t('supportNote')}
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 border border-white/5 p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3"
        >
          <p className="text-white/40 text-xs font-mono leading-relaxed">
            {pricingNote}
          </p>
          <a
            href="#contact"
            className="text-galaxy-blue-light text-xs font-mono tracking-widest uppercase whitespace-nowrap hover:text-galaxy-blue-glow transition-colors"
          >
            {t('consultationCta')} {t('arrow')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
