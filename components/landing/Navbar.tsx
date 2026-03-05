'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function Navbar() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<'EN' | 'NL'>('EN');

  useEffect(() => {
    const saved = document.cookie.match(/NEXT_LOCALE=([^;]+)/)?.[1];
    if (saved === 'nl') setLang('NL');
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLocale = (locale: 'EN' | 'NL') => {
    setLang(locale);
    document.cookie = `NEXT_LOCALE=${locale.toLowerCase()}; path=/; max-age=31536000`;
    window.location.reload();
  };

  const navLinks = [
    { label: t('services'), href: '#services' },
    { label: t('work'), href: '#work' },
    { label: t('process'), href: '#process' },
    { label: t('pricing'), href: '#pricing' },
    { label: t('contact'), href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-galaxy-black/90 backdrop-blur-md border-b border-white/10 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src="/logo.png" alt="FIORD" className="h-8 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/50 hover:text-white transition-colors duration-200 text-xs font-medium tracking-widest uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center border border-white/15">
            {(['EN', 'NL'] as const).map((l) => (
              <button
                key={l}
                onClick={() => switchLocale(l)}
                className={`px-3 py-1.5 text-xs font-semibold tracking-widest transition-all duration-200 ${
                  lang === l
                    ? 'bg-white text-galaxy-black'
                    : 'text-white/40 hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <a href="#contact" className="btn-primary py-2 px-6 text-xs">
            {t('cta')}
          </a>
        </div>

        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-galaxy-black/98 backdrop-blur-md border-t border-white/10 px-6 py-8 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-white/60 hover:text-white py-2 text-sm font-medium tracking-widest uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex pt-4 border-t border-white/10">
            {(['EN', 'NL'] as const).map((l) => (
              <button
                key={l}
                onClick={() => switchLocale(l)}
                className={`px-4 py-2 text-sm font-semibold tracking-widest border transition-all duration-200 ${
                  lang === l
                    ? 'bg-white text-galaxy-black border-white'
                    : 'text-white/40 border-white/15 hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href="#contact"
            className="btn-primary w-full text-center block mt-4"
          >
            {t('cta')}
          </a>
        </div>
      )}
    </nav>
  );
}
