"use client";

import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/providers/LanguageProvider';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  cat: string;
  catLabel: string;
  title: string;
  desc: string;
  tags: string[];
  gradient: string;
  accentColor: string;
}

const projects: Project[] = [
  {
    cat: 'saas', catLabel: 'SaaS · Web', title: 'FinTrack Pro',
    desc: 'منصة إدارة مالية متكاملة للمؤسسات مع لوحات تحكم تحليلية في الوقت الفعلي.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    gradient: 'linear-gradient(135deg,#0D0D20 0%,#1a1a35 100%)',
    accentColor: 'rgba(67,97,238,',
  },
  {
    cat: 'mobile', catLabel: 'Mobile · Maps', title: 'Mahali — محلي',
    desc: 'تطبيق سوق محلي يربط المشترين بالبائعين القريبين مع خرائط تفاعلية.',
    tags: ['Flutter', 'Firebase', 'Google Maps'],
    gradient: 'linear-gradient(135deg,#0A1628 0%,#0d2040 100%)',
    accentColor: 'rgba(14,165,233,',
  },
  {
    cat: 'enterprise', catLabel: 'Enterprise · Healthcare', title: 'MedSync',
    desc: 'نظام إدارة مستشفيات متكامل يربط الأقسام، السجلات الطبية، والمواعيد.',
    tags: ['Next.js', 'Laravel', 'MySQL', 'Socket.io'],
    gradient: 'linear-gradient(135deg,#0A1A0E 0%,#0d2a14 100%)',
    accentColor: 'rgba(22,163,74,',
  },
  {
    cat: 'web', catLabel: 'Web · E-commerce', title: 'ShopCore',
    desc: 'منصة تجارة إلكترونية متعددة البائعين مع بوابة دفع متكاملة.',
    tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    gradient: 'linear-gradient(135deg,#1A0D0A 0%,#2a1408 100%)',
    accentColor: 'rgba(249,115,22,',
  },
  {
    cat: 'saas', catLabel: 'SaaS · EdTech', title: 'EduPath',
    desc: 'منصة تعلم إلكتروني بفصول حية وتتبع التقدم وتحليلات المتعلم.',
    tags: ['Next.js', 'WebRTC', 'PostgreSQL', 'AWS S3'],
    gradient: 'linear-gradient(135deg,#0A0A1E 0%,#130d2a 100%)',
    accentColor: 'rgba(139,92,246,',
  },
  {
    cat: 'enterprise', catLabel: 'Enterprise · IoT', title: 'FleetOps',
    desc: 'لوحة تحكم لتتبع وإدارة الأساطيل في الوقت الفعلي مع تحليلات متقدمة.',
    tags: ['Vue.js', 'Python', 'MQTT', 'TimescaleDB'],
    gradient: 'linear-gradient(135deg,#0A1214 0%,#0a1c22 100%)',
    accentColor: 'rgba(6,182,212,',
  },
];

const filters = [
  { key: 'filter_all', value: 'all' },
  { key: 'filter_web', value: 'web' },
  { key: 'filter_mobile', value: 'mobile' },
  { key: 'filter_enterprise', value: 'enterprise' },
  { key: 'filter_saas', value: 'saas' },
] as const;

export default function ProjectsSection() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
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
    <section className="section" id="projects" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <div className="eyebrow">{t('sec_projects')}</div>
          <h2 className="heading-lg">{t('sec_projects_h')}</h2>
          <p style={{ marginTop: '14px', color: 'var(--text-2)', fontSize: '17px' }}>
            {t('sec_projects_sub')}
          </p>
        </div>

        <div className="projects-filter reveal">
          {filters.map(f => (
            <button
              key={f.value}
              className={`filter-btn ${activeFilter === f.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {t(f.key)}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => {
            const isVisible = activeFilter === 'all' || p.cat === activeFilter;
            const delay = i % 3 === 0 ? '' : i % 3 === 1 ? 'reveal-delay-1' : 'reveal-delay-2';

            return (
              <div
                key={p.title}
                className={`project-card reveal ${delay} ${!isVisible ? 'hidden' : ''}`}
                data-cat={p.cat}
              >
                <div className="project-art" style={{ background: p.gradient }}>
                  {/* Abstract SVG art */}
                  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                    <rect width="400" height="200" fill={`${p.accentColor}0.05)`} />
                    <circle cx="200" cy="100" r="60" fill="none" stroke={`${p.accentColor}0.2)`} strokeWidth="1" />
                    <circle cx="200" cy="100" r="40" fill="none" stroke={`${p.accentColor}0.3)`} strokeWidth="1.5" />
                    <circle cx="200" cy="100" r="15" fill={`${p.accentColor}0.4)`} />
                    <rect x="40" y="40" width="100" height="8" rx="4" fill={`${p.accentColor}0.3)`} />
                    <rect x="40" y="56" width="70" height="6" rx="3" fill={`${p.accentColor}0.15)`} />
                    <rect x="40" y="70" width="80" height="6" rx="3" fill={`${p.accentColor}0.1)`} />
                    <rect x="40" y="100" width="50" height="22" rx="6" fill={`${p.accentColor}0.5)`} />
                    <rect x="280" y="130" width="80" height="40" rx="8" fill={`${p.accentColor}0.08)`} stroke={`${p.accentColor}0.2)`} strokeWidth="1" />
                    <rect x="290" y="142" width="60" height="6" rx="3" fill={`${p.accentColor}0.3)`} />
                    <rect x="290" y="154" width="40" height="6" rx="3" fill={`${p.accentColor}0.15)`} />
                  </svg>
                  <div className="project-art-overlay">
                    <span>
                      <ArrowUpRight size={14} />
                      <span>{t('proj_view')}</span>
                    </span>
                  </div>
                </div>
                <div className="project-info">
                  <div className="project-cat">{p.catLabel}</div>
                  <div className="project-title">{p.title}</div>
                  <div className="project-desc">{p.desc}</div>
                  <div className="project-tags">
                    {p.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
