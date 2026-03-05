'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { testimonials, testimonialsArePlaceholder } from '@/lib/site.config';

export default function TestimonialsSection() {
  const t = useTranslations('testimonials');
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent(
      (prev) => (prev + dir + testimonials.length) % testimonials.length
    );
  };

  const item = testimonials[current];
  const isGold = item.accent === 'gold';

  return (
    <section className="relative bg-galaxy-black py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(33,80,199,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-3xl mx-auto relative">
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

        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={{
                enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
                center: { x: 0, opacity: 1 },
                exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="bg-white/[0.03] border border-white/10 p-8 md:p-12"
            >
              <div className="mb-6">
                <Quote
                  size={28}
                  className={
                    isGold ? 'text-galaxy-gold-light' : 'text-galaxy-blue-light'
                  }
                  strokeWidth={1.5}
                />
              </div>
              <div className="flex gap-1 mb-6">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      isGold
                        ? 'text-galaxy-gold-light'
                        : 'text-galaxy-blue-light'
                    }
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed font-heading mb-10">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                {'photo' in item && item.photo ? (
                  <img
                    src={item.photo as string}
                    alt={item.name}
                    className="w-11 h-11 object-cover"
                  />
                ) : (
                  <div
                    className={`w-11 h-11 flex items-center justify-center text-sm font-bold font-mono border ${
                      isGold
                        ? 'border-galaxy-gold/30 text-galaxy-gold-light bg-galaxy-gold/5'
                        : 'border-galaxy-blue-light/30 text-galaxy-blue-light bg-galaxy-blue-light/5'
                    }`}
                  >
                    {item.initials}
                  </div>
                )}
                <div>
                  <p className="text-white font-semibold text-sm">
                    {item.name}
                  </p>
                  <p className="text-white/40 text-xs font-mono">
                    {item.business}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`rounded-none transition-all duration-300 ${
                    i === current
                      ? 'w-6 h-1 bg-galaxy-blue-light'
                      : 'w-2 h-1 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => go(-1)}
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => go(1)}
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {testimonialsArePlaceholder && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-white/20 text-xs font-mono text-center mt-10"
          >
            {t('placeholder')}
          </motion.p>
        )}
      </div>
    </section>
  );
}
