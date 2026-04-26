"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useLanguage } from '@/providers/LanguageProvider';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function ContactSection() {
  const { lang, t } = useLanguage();
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');
  const sectionRef = useRef<HTMLElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);

  // Reveal observer
  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.reveal');
    if (!els) return;
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Code block typing animation
  useEffect(() => {
    const block = codeRef.current;
    if (!block) return;
    const lines = [
      { en: '<span class="kc">// Your idea ──────────────</span>', ar: '<span class="kc">// فكرتك ──────────────</span>' },
      { en: '<span class="kb">await</span> siliconApex.<span class="ks">startProject</span>({', ar: '<span class="kb">await</span> siliconApex.<span class="ks">ابدأمشروع</span>({' },
      { en: '  client: <span class="kv">"you"</span>,', ar: '  client: <span class="kv">"أنت"</span>,' },
      { en: '  type: <span class="kv">"web-app"</span>,', ar: '  نوع: <span class="kv">"ويب"</span>,' },
      { en: '  timeline: <span class="kv">"60 days"</span>', ar: '  مدة: <span class="kv">"60 يوم"</span>' },
      { en: '});', ar: '});' },
      { en: '<span class="kc">// ─────────────────────────────</span>', ar: '<span class="kc">// ─────────────────────────────</span>' },
      { en: '<span class="kv">status: "building... 🚀"</span>', ar: '<span class="kv">الحالة: "جاري البناء... 🚀"</span>' },
    ];

    let i = 0;
    let timeoutId: ReturnType<typeof setTimeout>;
    block.innerHTML = '';

    function typeLine() {
      if (i >= lines.length) {
        timeoutId = setTimeout(() => {
          i = 0;
          if (block) block.innerHTML = '';
          typeLine();
        }, 3000);
        return;
      }
      const div = document.createElement('div');
      div.innerHTML = lines[i][lang] || lines[i].en;
      block.appendChild(div);
      i++;
      timeoutId = setTimeout(typeLine, 280);
    }
    typeLine();

    return () => clearTimeout(timeoutId);
  }, [lang]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => {
      setFormState('sent');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1600);
  }, []);

  const contactDetails = [
    { icon: Mail, labelKey: 'contact_email_l' as const, value: 'hello@siliconapex.com' },
    { icon: Phone, labelKey: 'contact_phone_l' as const, value: '+966 50 123 4567', dir: 'ltr' as const },
    { icon: MapPin, labelKey: 'contact_loc_l' as const, valueKey: 'contact_loc_v' as const },
    { icon: Clock, labelKey: 'contact_time_l' as const, valueKey: 'contact_time_v' as const },
  ];

  return (
    <section className="section" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="contact-grid">
          <div className="contact-left reveal">
            <div className="eyebrow" style={{ marginBottom: '12px' }}>{t('sec_contact')}</div>
            <h2 className="heading-md">{t('sec_contact_h')}</h2>
            <p>{t('contact_sub')}</p>

            <div className="contact-details">
              {contactDetails.map((d, i) => {
                const Icon = d.icon;
                return (
                  <div className="contact-detail" key={i}>
                    <div className="contact-detail-icon"><Icon size={18} /></div>
                    <div className="contact-detail-text">
                      <div className="label">{t(d.labelKey)}</div>
                      <div className="value" dir={d.dir}>
                        {d.valueKey ? t(d.valueKey) : d.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="code-block">
              <div ref={codeRef} style={{ minHeight: '160px' }} />
            </div>
          </div>

          <div className="contact-right reveal reveal-delay-2">
            <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>{t('form_name')}</label>
                  <input type="text" placeholder={t('form_name')} required />
                </div>
                <div className="form-group">
                  <label>{t('form_email')}</label>
                  <input type="email" placeholder="email@example.com" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>{t('form_service')}</label>
                  <select>
                    <option>{t('form_s_web')}</option>
                    <option>{t('form_s_mobile')}</option>
                    <option>{t('form_s_design')}</option>
                    <option>{t('form_s_transform')}</option>
                    <option>{t('form_s_other')}</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>{t('form_budget')}</label>
                  <select>
                    <option>{t('form_b_1')}</option>
                    <option>{t('form_b_2')}</option>
                    <option>{t('form_b_3')}</option>
                    <option>{t('form_b_4')}</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>{t('form_message')}</label>
                <textarea placeholder={t('form_message')} rows={5} required />
              </div>
              <button
                type="submit"
                className={`btn-submit ${formState === 'sending' ? 'loading' : ''} ${formState === 'sent' ? 'success' : ''}`}
              >
                <Send size={16} />
                <span>
                  {formState === 'sending'
                    ? t('form_sending')
                    : formState === 'sent'
                    ? t('form_sent')
                    : t('form_submit')}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
