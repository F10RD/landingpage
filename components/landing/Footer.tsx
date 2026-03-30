'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { siteOwner, footerLinks, footerTagline } from '@/lib/site.config';
import Image from 'next/image';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${siteOwner.email}`, label: 'Email' },
];

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-galaxy-black border-t border-white/10 overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(33,80,199,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col gap-4">
            <a href="#">
              <Image src="/logo.png" alt="FIORD" width={1672} height={511} className="h-7 w-auto" />
            </a> 
            <p className="text-white/40 text-sm font-mono leading-relaxed max-w-[220px]">
              {footerTagline}
            </p>
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/40 transition-colors duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-mono tracking-widest uppercase text-white/30">
              {t('navigation')}
            </span>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200 font-mono tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-mono tracking-widest uppercase text-white/30">
              {t('contact')}
            </span>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${siteOwner.email}`}
                className="text-white/50 hover:text-white text-sm transition-colors duration-200 font-mono"
              >
                {siteOwner.email}
              </a>
              <p className="text-white/40 text-sm font-mono">
                {siteOwner.locationShort}
              </p>
              {siteOwner.available && (
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-1.5 h-1.5 bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-mono tracking-wide">
                    {t('available')}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs font-mono">
            © {year} FIORD — {siteOwner.name}. {t('rights')}
          </p>
          <p className="text-white/20 text-xs font-mono">{t('builtWith')}</p>
        </div>
      </div>
    </footer>
  );
}
