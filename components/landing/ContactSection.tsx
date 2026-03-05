'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { siteOwner } from '@/lib/site.config';

type FormState = 'idle' | 'sending' | 'success' | 'error';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
};

export default function ContactSection() {
  const t = useTranslations('contact');
  const [formState, setFormState] = useState<FormState>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    business: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    // TODO: podłącz Resend
    await new Promise((r) => setTimeout(r, 1500));
    setFormState('success');
  };

  const infoItems = [
    {
      icon: Mail,
      label: t('labelEmail'),
      value: siteOwner.email,
      href: `mailto:${siteOwner.email}`,
    },
    {
      icon: MapPin,
      label: t('labelLocation'),
      value: siteOwner.locationShort,
      href: null,
    },
    {
      icon: Clock,
      label: t('labelResponse'),
      value: siteOwner.responseTime,
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="relative bg-galaxy-black py-24 px-6 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div
        className="absolute bottom-0 left-1/4 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(33,80,199,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-galaxy-gold-light text-xs font-medium tracking-widest uppercase mb-4 block font-mono">
            {t('eyebrow')}
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            {t('heading')}
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            {t('subline')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.1}
            viewport={{ once: true }}
            className="md:col-span-2 flex flex-col gap-6"
          >
            {infoItems.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center flex-shrink-0 bg-white/[0.03]">
                  <Icon size={16} className="text-galaxy-blue-light" />
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-widest mb-0.5 font-mono">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-white text-sm hover:text-galaxy-blue-light transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-white text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {siteOwner.available && (
              <div className="mt-4 p-4 border border-white/10 bg-white/[0.03]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-sm font-mono tracking-wide">
                    {t('available')}
                  </span>
                </div>
                <p className="text-white/30 text-xs leading-relaxed font-mono">
                  {t('availableNote')}
                </p>
              </div>
            )}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            {formState === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 gap-4">
                <CheckCircle size={40} className="text-green-400" />
                <h3 className="font-heading text-white text-2xl font-bold">
                  {t('successTitle')}
                </h3>
                <p className="text-white/40 text-sm max-w-xs font-mono">
                  {t('successText')}
                </p>
                <button
                  onClick={() => {
                    setFormState('idle');
                    setForm({ name: '', email: '', business: '', message: '' });
                  }}
                  className="text-galaxy-blue-light text-sm underline underline-offset-4 hover:text-galaxy-blue-glow transition-colors mt-2 font-mono"
                >
                  {t('successReset')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      name: 'name',
                      label: t('fieldName'),
                      type: 'text',
                      placeholder: t('placeholderName'),
                      required: true,
                    },
                    {
                      name: 'email',
                      label: t('fieldEmail'),
                      type: 'email',
                      placeholder: t('placeholderEmail'),
                      required: true,
                    },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="text-white/30 text-xs uppercase tracking-widest mb-1.5 block font-mono">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        required={field.required}
                        value={form[field.name as keyof typeof form]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-galaxy-blue/50 focus:bg-white/5 transition-colors font-mono"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="text-white/30 text-xs uppercase tracking-widest mb-1.5 block font-mono">
                    {t('fieldBusiness')}
                  </label>
                  <input
                    type="text"
                    name="business"
                    value={form.business}
                    onChange={handleChange}
                    placeholder={t('placeholderBusiness')}
                    className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-galaxy-blue/50 focus:bg-white/5 transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="text-white/30 text-xs uppercase tracking-widest mb-1.5 block font-mono">
                    {t('fieldMessage')}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t('placeholderMessage')}
                    className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-galaxy-blue/50 focus:bg-white/5 transition-colors resize-none font-mono"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === 'sending'}
                  className="btn-primary flex items-center justify-center gap-2 py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formState === 'sending' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      {t('sending')}
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      {t('send')}
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
