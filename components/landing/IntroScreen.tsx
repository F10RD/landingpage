'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type Phase = 'materialize' | 'glow' | 'text' | 'warp' | 'done';

export default function IntroScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [phase, setPhase] = useState<Phase>('materialize');
  const [particles, setParticles] = useState<
    { x: number; y: number; size: number; color: string; delay: number }[]
  >([]);
  const [warpStars, setWarpStars] = useState<
    { x: number; y: number; speed: number; angle: number }[]
  >([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 60 }, () => ({
        x: (Math.random() - 0.5) * 400,
        y: (Math.random() - 0.5) * 400,
        size: Math.random() * 4 + 2,
        color: ['#4d9de0', '#e91e8c', '#f5a623', '#ffffff'][
          Math.floor(Math.random() * 4)
        ],
        delay: Math.random() * 1.5,
      }))
    );

    setWarpStars(
      Array.from({ length: 120 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: Math.random() * 4 + 1,
        angle: Math.random() * 360,
      }))
    );

    // PRZED: 2000 / 3500 / 7000 / 9500
    // PO:    1500 / 2800 / 5000 / 7000
    const t1 = setTimeout(() => setPhase('glow'), 1500);
    const t2 = setTimeout(() => setPhase('text'), 2800);
    const t3 = setTimeout(() => setPhase('warp'), 5000);
    const t4 = setTimeout(() => onComplete(), 7000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-galaxy-black overflow-hidden"
          animate={
            phase === 'warp'
              ? { opacity: 0, scale: 1.15 }
              : { opacity: 1, scale: 1 }
          }
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          {/* Warp stars */}
          {phase === 'warp' &&
            warpStars.map((star, i) => (
              <motion.div
                key={i}
                className="absolute bg-white rounded-full"
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  width: '2px',
                  height: '2px',
                }}
                animate={{
                  scaleX: [1, star.speed * 30],
                  opacity: [0, 1, 0],
                  x: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 400],
                }}
                transition={{ duration: 1.5, delay: i * 0.008, ease: 'easeIn' }}
              />
            ))}

          {/* Nebula glow rings */}
          {(phase === 'glow' || phase === 'text' || phase === 'warp') && (
            <>
              <motion.div
                className="absolute rounded-full border border-galaxy-purple/40"
                initial={{ width: 0, height: 0, opacity: 0 }}
                animate={{ width: 500, height: 500, opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                style={{ boxShadow: '0 0 80px rgba(33,80,199,0.3)' }}
              />
              <motion.div
                className="absolute rounded-full border border-galaxy-orange/20"
                initial={{ width: 0, height: 0, opacity: 0 }}
                animate={{ width: 340, height: 340, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
                style={{ boxShadow: '0 0 60px rgba(233,30,140,0.2)' }}
              />
              <motion.div
                className="absolute rounded-full"
                initial={{ width: 0, height: 0, opacity: 0 }}
                animate={{ width: 200, height: 200, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
                style={{
                  background:
                    'radial-gradient(circle, rgba(33,80,199,0.15) 0%, transparent 70%)',
                }}
              />
            </>
          )}

          {/* Particles */}
          {phase === 'materialize' &&
            particles.map((p, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  backgroundColor: p.color,
                  width: p.size,
                  height: p.size,
                }}
                initial={{ x: p.x, y: p.y, opacity: 0, scale: 0 }}
                animate={{
                  x: 0,
                  y: 0,
                  opacity: [0, 1, 1, 0],
                  scale: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 1.4,
                  delay: p.delay,
                  ease: 'easeInOut',
                }}
              />
            ))}

          {/* Logo */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={
                phase === 'materialize'
                  ? { opacity: 0, scale: 0.3 }
                  : phase === 'warp'
                  ? { opacity: 0, scale: 2 }
                  : { opacity: 1, scale: 1 }
              }
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <Image
                src="/logo.png"
                alt="FIORD"
                width={1672} 
                height={511}
                className="h-24 w-auto mx-auto mb-6"
                style={{
                  filter:
                    phase === 'glow' || phase === 'text'
                      ? 'drop-shadow(0 0 30px rgba(33,80,199,0.9)) drop-shadow(0 0 60px rgba(233,30,140,0.5))'
                      : 'none',
                }}
              />
            </motion.div>

            {/* Text */}
            <AnimatePresence>
              {(phase === 'text' || phase === 'warp') && (
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                  <motion.p
                    className="text-white/40 text-xs tracking-[0.5em] uppercase mt-3 font-mono"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                  >
                    Web Development
                  </motion.p>

                  <motion.div
                    className="mx-auto mt-4 h-px bg-gradient-to-r from-transparent via-galaxy-purple to-transparent"
                    initial={{ width: 0 }}
                    animate={{ width: 200 }}
                    transition={{ duration: 0.9, delay: 0.6 }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
