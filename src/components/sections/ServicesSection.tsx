"use client";

import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/providers/LanguageProvider';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { Monitor, Smartphone, PenTool, Zap, Plug, Cloud } from 'lucide-react';

const services = [
  {
    num: '01', icon: Monitor, key_h: 's1_h' as const, key_p: 's1_p' as const,
    tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
    color: '#4361EE', large: true, spotColor: 'rgba(67, 97, 238, 0.25)',
  },
  {
    num: '02', icon: Smartphone, key_h: 's2_h' as const, key_p: 's2_p' as const,
    tags: ['Flutter', 'React Native', 'Swift'],
    color: '#06b6d4', large: false, spotColor: 'rgba(6, 182, 212, 0.2)',
  },
  {
    num: '03', icon: PenTool, key_h: 's3_h' as const, key_p: 's3_p' as const,
    tags: ['Figma', 'Prototyping', 'Design Systems'],
    color: '#ec4899', large: false, spotColor: 'rgba(236, 72, 153, 0.2)',
  },
  {
    num: '04', icon: Zap, key_h: 's4_h' as const, key_p: 's4_p' as const,
    tags: ['AI', 'Automation', 'Legacy Migration', 'ERP'],
    color: '#10b981', large: true, spotColor: 'rgba(16, 185, 129, 0.2)',
  },
  {
    num: '05', icon: Plug, key_h: 's5_h' as const, key_p: 's5_p' as const,
    tags: ['REST', 'GraphQL', 'Webhooks'],
    color: '#f97316', large: false, spotColor: 'rgba(249, 115, 22, 0.2)',
  },
  {
    num: '06', icon: Cloud, key_h: 's6_h' as const, key_p: 's6_p' as const,
    tags: ['AWS', 'GCP', 'Docker', 'CI/CD'],
    color: '#3b82f6', large: false, spotColor: 'rgba(59, 130, 246, 0.2)',
  },
];

export default function ServicesSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.svc-card');
    if (!els) return;
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = '1';
            (e.target as HTMLElement).style.transform = 'translateY(0)';
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section" id="services" ref={sectionRef}>
      <div className="container">
        {/* Section Header — uses existing design system */}
        <div className="section-header" style={{ textAlign: 'center' }}>
          <div className="eyebrow">{t('sec_services')}</div>
          <h2 className="heading-lg">{t('sec_services_h')}</h2>
          <p style={{ marginTop: 14, color: 'var(--text-2)', fontSize: 17, maxWidth: 520, marginInline: 'auto', lineHeight: 1.7 }}>
            {t('sec_services_sub')}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="svc-bento">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <SpotlightCard
                key={s.num}
                className={`svc-card ${s.large ? 'svc-large' : ''}`}
                spotlightColor={s.spotColor}
              >
                <div className="svc-inner">
                  {/* Top row: icon + number */}
                  <div className="svc-top">
                    <div className="svc-icon-box" style={{ borderColor: `${s.color}30`, background: `${s.color}12` }}>
                      <Icon size={s.large ? 26 : 22} color={s.color} strokeWidth={1.8} />
                    </div>
                    <span className="svc-num">{s.num}</span>
                  </div>

                  {/* Title */}
                  <h3 className="svc-title">{t(s.key_h)}</h3>

                  {/* Description */}
                  <p className="svc-desc">{t(s.key_p)}</p>

                  {/* Tags */}
                  <div className="svc-tags">
                    {s.tags.map(tag => (
                      <span key={tag} className="svc-tag" style={{ color: `${s.color}bb`, background: `${s.color}14` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
