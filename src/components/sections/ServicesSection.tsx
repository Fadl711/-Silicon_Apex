"use client";

import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/providers/LanguageProvider';
import { Monitor, Smartphone, PenTool, Zap, Plug, Cloud } from 'lucide-react';
import BorderGlow from '@/components/ui/BorderGlow';

const services = [
  { num: '01', icon: Monitor, key_h: 's1_h', key_p: 's1_p', tags: ['React', 'Next.js', 'Node.js', 'Laravel', 'PostgreSQL'], large: true },
  { num: '02', icon: Smartphone, key_h: 's2_h', key_p: 's2_p', tags: ['Flutter', 'React Native'], large: false },
  { num: '03', icon: PenTool, key_h: 's3_h', key_p: 's3_p', tags: ['Figma', 'Prototyping'], large: false },
  { num: '04', icon: Zap, key_h: 's4_h', key_p: 's4_p', tags: ['AI Integration', 'Automation', 'Legacy Migration'], large: true },
  { num: '05', icon: Plug, key_h: 's5_h', key_p: 's5_p', tags: ['REST', 'GraphQL'], large: false },
  { num: '06', icon: Cloud, key_h: 's6_h', key_p: 's6_p', tags: ['AWS', 'Docker', 'Kubernetes'], large: false },
] as const;

export default function ServicesSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section className="section" id="services" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <div className="eyebrow">{t('sec_services')}</div>
          <h2 className="heading-lg">{t('sec_services_h')}</h2>
          <p style={{ marginTop: '14px', color: 'var(--text-2)', fontSize: '17px', maxWidth: '480px' }}>
            {t('sec_services_sub')}
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => {
            const delay = i % 3 === 0 ? '' : i % 3 === 1 ? 'reveal-delay-1' : 'reveal-delay-2';
            const Icon = s.icon;
            const isFeatured = s.num === '01' || s.num === '04';

            const cardContent = (
              <>
                <span className="service-num">{s.num}</span>
                <div className="service-icon">
                  <Icon size={22} />
                </div>
                <h3>{t(s.key_h)}</h3>
                <p>{t(s.key_p)}</p>
                <div className="service-tags">
                  {s.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </>
            );

            if (isFeatured) {
              return (
                <BorderGlow
                  key={s.num}
                  className={`service-card ${s.large ? 'large' : ''} reveal ${delay}`}
                  backgroundColor="var(--bg-2)"
                  borderRadius={20}
                  glowRadius={30}
                  glowIntensity={0.6}
                  edgeSensitivity={40}
                  colors={['#4361EE', '#a78bfa', '#38bdf8']}
                  glowColor="230 80 60"
                >
                  {cardContent}
                </BorderGlow>
              );
            }

            return (
              <div key={s.num} className={`service-card ${s.large ? 'large' : ''} reveal ${delay}`}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
