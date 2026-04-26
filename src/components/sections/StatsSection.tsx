"use client";

import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/providers/LanguageProvider';

const stats = [
  { countKey: 'stat1_n', suffixKey: 'stat1_s', labelKey: 'stat1_l' },
  { countKey: 'stat2_n', suffixKey: 'stat2_s', labelKey: 'stat2_l' },
  { countKey: 'stat3_n', suffixKey: 'stat3_s', labelKey: 'stat3_l' },
  { countKey: 'stat4_n', suffixKey: 'stat4_s', labelKey: 'stat4_l' },
] as const;

function useCountUp(target: number, ref: React.RefObject<HTMLSpanElement | null>) {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const duration = 1800;
            const start = performance.now();
            function update(now: number) {
              const t = Math.min((now - start) / duration, 1);
              const ease = 1 - Math.pow(1 - t, 3);
              el.textContent = String(Math.floor(ease * target));
              if (t < 1) requestAnimationFrame(update);
              else el.textContent = String(target);
            }
            requestAnimationFrame(update);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, ref]);
}

function StatItem({ target, suffix, label, delay }: { target: number; suffix: string; label: string; delay: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useCountUp(target, ref);

  return (
    <div className={`stat-item reveal ${delay}`}>
      <div className="stat-num">
        <span ref={ref} className="stat-num-val">0</span>
        <span className="accent">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function StatsSection() {
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
    <section className="stats-section" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <StatItem
              key={s.countKey}
              target={parseInt(t(s.countKey))}
              suffix={t(s.suffixKey)}
              label={t(s.labelKey)}
              delay={i === 0 ? '' : `reveal-delay-${i}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
