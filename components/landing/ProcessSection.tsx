'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { processSteps } from '@/lib/site.config';

export default function ProcessSection() {
  const t = useTranslations('process');

  return (
    <section
      id="process"
      className="relative bg-galaxy-black py-24 px-6 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div
        className="absolute top-1/2 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(233,30,140,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-galaxy-blue-light text-xs font-mono tracking-widest uppercase mb-4 block">
            {t('eyebrow')}
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            {t('heading')}
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            {t('subline')}
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-galaxy-blue/40 via-galaxy-magenta/40 to-galaxy-gold/40 hidden md:block" />
          <div className="flex flex-col gap-12">
            {processSteps.map((step, i) => {
              const isEven = i % 2 === 0;
              const isBlue = step.accent === 'blue';
              const isMagenta = step.accent === 'magenta';
              const accentText = isBlue
                ? 'text-galaxy-blue-light'
                : isMagenta
                ? 'text-galaxy-magenta-light'
                : 'text-galaxy-gold-light';
              const accentBorder = isBlue
                ? 'border-galaxy-blue/30'
                : isMagenta
                ? 'border-galaxy-magenta/30'
                : 'border-galaxy-gold/30';
              const accentBg = isBlue
                ? 'bg-galaxy-blue/5'
                : isMagenta
                ? 'bg-galaxy-magenta/5'
                : 'bg-galaxy-gold/5';
              const dotColor = isBlue
                ? 'bg-galaxy-blue-light'
                : isMagenta
                ? 'bg-galaxy-magenta-light'
                : 'bg-galaxy-gold-light';
              const dotGlow = isBlue
                ? '0 0 20px rgba(77,157,224,0.6)'
                : isMagenta
                ? '0 0 20px rgba(233,30,140,0.6)'
                : '0 0 20px rgba(245,166,35,0.6)';
              const topBarVia = isBlue
                ? 'via-galaxy-blue-light/50'
                : isMagenta
                ? 'via-galaxy-magenta-light/60'
                : 'via-galaxy-gold-light/50';

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.1,
                    ease: 'easeOut',
                  }}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                    isEven ? '' : 'md:[&>*:first-child]:order-last'
                  }`}
                >
                  <div
                    className={`border ${accentBorder} ${accentBg} p-8 relative`}
                  >
                    <div
                      className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${topBarVia} to-transparent`}
                    />
                    <div
                      className={`text-5xl font-heading font-bold mb-4 ${accentText} opacity-20`}
                    >
                      {step.number}
                    </div>
                    <h3 className="font-heading text-white text-2xl font-bold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-6">
                      {step.description}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {step.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-center gap-3 text-sm text-white/50"
                        >
                          <span
                            className={`w-1 h-1 flex-shrink-0 ${dotColor}`}
                          />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-3 h-3 z-10">
                    <div
                      className={`w-3 h-3 ${dotColor}`}
                      style={{ boxShadow: dotGlow }}
                    />
                  </div>
                  <div className="hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-20"
        >
          <p className="text-white/40 text-sm font-mono mb-6">
            {t('readyPrompt')}
          </p>
          <a href="#contact" className="btn-primary inline-block">
            {t('cta')} →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
