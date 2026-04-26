"use client";

import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/providers/LanguageProvider';

const teamMembers = [
  { initials: 'أر', name: 'أحمد الراشد', role: 'CEO & Founder', bio: 'رؤية استراتيجية وقيادة تنفيذية. يجمع بين الخبرة التقنية والبصيرة التجارية.', gradient: 'linear-gradient(135deg,#4361EE,#6d83f5)' },
  { initials: 'SM', name: 'Sara Mitchell', role: 'CTO & Lead Architect', bio: 'Systems thinker, code purist. 10+ years building scalable platforms.', gradient: 'linear-gradient(135deg,#0EA5E9,#38BDF8)' },
  { initials: 'مع', name: 'محمد العمري', role: 'Senior Frontend Engineer', bio: 'مهوس بالتفاصيل البصرية. يحول التصاميم إلى تجارب تفاعلية سلسة.', gradient: 'linear-gradient(135deg,#8B5CF6,#A78BFA)' },
  { initials: 'LA', name: 'Lina Al-Faris', role: 'UI/UX Designer', bio: 'Research-driven design that converts. Figma wizard, user empathy champion.', gradient: 'linear-gradient(135deg,#F97316,#FB923C)' },
  { initials: 'خغ', name: 'خالد الغامدي', role: 'Mobile Developer', bio: 'متخصص في Flutter وReact Native. يبني تطبيقات بأداء native حقيقي.', gradient: 'linear-gradient(135deg,#16A34A,#22C55E)' },
  { initials: 'RK', name: 'Ryan Kowalski', role: 'Backend Engineer', bio: 'API maestro. Builds systems that handle millions of requests without breaking a sweat.', gradient: 'linear-gradient(135deg,#DC2626,#F87171)' },
];

export default function TeamSection() {
  const { t } = useLanguage();
  const beltInnerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Duplicate cards for seamless loop
  useEffect(() => {
    const inner = beltInnerRef.current;
    if (!inner || inner.dataset.cloned === 'true') return;
    const cards = Array.from(inner.children);
    cards.forEach(c => inner.appendChild(c.cloneNode(true)));
    inner.dataset.cloned = 'true';
  }, []);

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

  return (
    <section className="section team-section" id="team" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <div className="eyebrow">{t('sec_team')}</div>
          <h2 className="heading-lg">{t('sec_team_h')}</h2>
          <p style={{ marginTop: '14px', color: 'var(--text-2)', fontSize: '17px' }}>
            {t('sec_team_sub')}
          </p>
        </div>
      </div>

      <div className="team-belt-outer" id="team-belt">
        <div className="team-belt team-belt-inner" ref={beltInnerRef}>
          {teamMembers.map((m, i) => (
            <div className="team-card" key={i}>
              <div className="team-avatar" style={{ background: m.gradient }}>
                {m.initials}
              </div>
              <div className="team-name">{m.name}</div>
              <div className="team-role">{m.role}</div>
              <div className="team-bio">{m.bio}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
