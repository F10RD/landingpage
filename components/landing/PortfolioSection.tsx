'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { portfolioProjects } from '@/lib/site.config';

export default function PortfolioSection() {
  const t = useTranslations('portfolio');
  const [activeProject, setActiveProject] = useState(0);
  const project = portfolioProjects[activeProject];
  const isGold = project.color === 'gold';

  const accentText = isGold ? 'text-galaxy-gold-light' : 'text-galaxy-blue-light';
  const accentBorder = isGold ? 'border-galaxy-gold/30' : 'border-galaxy-blue/30';
  const accentBg = isGold ? 'bg-galaxy-gold/5' : 'bg-galaxy-blue/5';
  const accentGlow = isGold
    ? 'rgba(245,166,35,0.06)'
    : 'rgba(33,80,199,0.08)';

  const ctaProps = project.external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <section
      id="work"
      className="relative bg-galaxy-black py-24 px-6 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse, rgba(233,30,140,0.05) 0%, transparent 70%)`,
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-galaxy-blue-light text-xs font-medium tracking-widest uppercase mb-4 block font-mono">
            {t('eyebrow')}
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            {t('heading')}
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            {t('subline')}
          </p>
        </motion.div>

        {/* Project tabs */}
        <div className="flex justify-center mb-8 flex-wrap">
          {portfolioProjects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActiveProject(i)}
              className={`px-5 py-2 text-xs font-medium tracking-widest uppercase border-r last:border-r-0 transition-all duration-300 border-y first:border-l
                ${
                  activeProject === i
                    ? p.color === 'gold'
                      ? 'bg-galaxy-gold/10 border-galaxy-gold/30 text-galaxy-gold-light'
                      : 'bg-galaxy-blue/10 border-galaxy-blue/30 text-galaxy-blue-light'
                    : 'bg-transparent border-white/10 text-white/40 hover:text-white hover:bg-white/5'
                }`}
            >
              {p.emoji} {p.title}
            </button>
          ))}
        </div>

        {/* Project card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className={`border ${accentBorder} overflow-hidden bg-galaxy-black relative`}
          >
            <div
              className={`h-px w-full bg-gradient-to-r from-transparent ${isGold ? 'via-galaxy-gold/50' : 'via-galaxy-blue-light/50'} to-transparent`}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at 50% 0%, ${accentGlow} 0%, transparent 60%)`,
              }}
            />

            <div className="relative p-8 md:p-12">

              {/* Top row */}
              <div className="flex items-start justify-between gap-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 flex items-center justify-center text-3xl border ${accentBorder} ${accentBg}`}>
                    {project.emoji}
                  </div>
                  <div>
                    <span className={`text-xs font-mono tracking-widest uppercase ${accentText}`}>
                      {project.category}
                    </span>
                    <h3 className="font-heading text-white text-2xl md:text-3xl font-bold mt-0.5">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <a
                  href={project.liveUrl}
                  {...ctaProps}
                  className={`hidden md:inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 border transition-all duration-300
                    ${isGold
                      ? 'border-galaxy-gold/40 text-galaxy-gold-light hover:bg-galaxy-gold/10'
                      : 'border-galaxy-blue/40 text-galaxy-blue-light hover:bg-galaxy-blue/10'
                    }`}
                >
                  <ExternalLink size={14} />
                  {project.external ? t('visitSite') : t('viewLive')}
                </a>
              </div>

              <p className="text-white/70 text-base leading-relaxed max-w-2xl mb-8">
                {project.description}
              </p>

              <div className="border-t border-white/5 mb-8" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 border border-white/10 text-white/40 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.liveUrl}
                  {...ctaProps}
                  className={`md:hidden inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 border transition-all duration-300
                    ${isGold
                      ? 'border-galaxy-gold/40 text-galaxy-gold-light hover:bg-galaxy-gold/10'
                      : 'border-galaxy-blue/40 text-galaxy-blue-light hover:bg-galaxy-blue/10'
                    }`}
                >
                  <ExternalLink size={14} />
                  {project.external ? t('visitSite') : t('viewLive')}
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-white/50 text-sm mb-4 font-mono">
            {t('demoPrompt')}
          </p>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            {t('demoCta')} <ArrowRight size={14} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}