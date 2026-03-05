'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Lock } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { portfolioProjects } from '@/lib/site.config';

type ProjectImage = {
  id: number;
  placeholder: boolean;
  label: string;
  src?: string;
};

function ProjectCarousel({
  images,
  color,
  emoji,
}: {
  images: ProjectImage[];
  color: string;
  emoji: string;
}) {
  const t = useTranslations('portfolio');
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const isGold = color === 'gold';

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + images.length) % images.length);
  };

  return (
    <div className="relative w-full aspect-video overflow-hidden bg-galaxy-black select-none">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={{
            enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
            center: { x: 0, opacity: 1 },
            exit: (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {images[current].placeholder ? (
            <>
              <div
                className="absolute inset-0"
                style={{
                  background: isGold
                    ? 'radial-gradient(ellipse at center, rgba(245,166,35,0.08) 0%, #050814 70%)'
                    : 'radial-gradient(ellipse at center, rgba(33,80,199,0.10) 0%, #050814 70%)',
                }}
              />
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <span className="text-5xl">{emoji}</span>
                <p className="text-white/50 text-sm font-mono">
                  {images[current].label}
                </p>
                <p
                  className={`text-xs font-mono ${
                    isGold ? 'text-galaxy-gold/60' : 'text-galaxy-blue-light/60'
                  }`}
                >
                  {t('screenshotSoon')}
                </p>
              </div>
            </>
          ) : (
            <img
              src={images[current].src!}
              alt={images[current].label}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-galaxy-black/80 border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-galaxy-black/80 border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </>
      )}

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`transition-all duration-300 h-1 ${
              i === current
                ? `w-5 ${
                    isGold ? 'bg-galaxy-gold-light' : 'bg-galaxy-blue-light'
                  }`
                : 'w-1 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      <div className="absolute top-3 right-3 z-20 text-xs text-white/50 bg-galaxy-black/70 px-2 py-1 font-mono">
        {current + 1} / {images.length}
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  const t = useTranslations('portfolio');
  const [activeProject, setActiveProject] = useState(0);
  const project = portfolioProjects[activeProject];
  const isGold = project.color === 'gold';

  return (
    <section
      id="work"
      className="relative bg-galaxy-black py-24 px-6 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(233,30,140,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-5xl mx-auto">
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

        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="border border-white/10 overflow-hidden bg-galaxy-black"
          >
            <ProjectCarousel
              images={project.images as ProjectImage[]}
              color={project.color}
              emoji={project.emoji}
            />

            <div className="p-6 md:p-8 border-t border-white/10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <span
                    className={`text-xs font-mono tracking-widest uppercase mb-2 block ${
                      isGold
                        ? 'text-galaxy-gold-light'
                        : 'text-galaxy-blue-light'
                    }`}
                  >
                    {project.category}
                  </span>
                  <h3 className="font-heading text-white text-2xl font-bold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed max-w-xl">
                    {project.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 btn-primary text-xs px-5 py-2.5"
                    >
                      <ExternalLink size={14} />
                      {t('viewLive')}
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-2 text-white/20 text-xs border border-white/10 px-5 py-2.5 cursor-not-allowed font-mono tracking-wider">
                      <Lock size={14} />
                      {t('comingSoon')}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 border border-white/10 text-white/50 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

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
          <a href="#contact" className="btn-primary inline-block">
            {t('demoCta')} →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
