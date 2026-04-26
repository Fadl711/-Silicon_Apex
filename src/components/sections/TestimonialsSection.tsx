"use client";

import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/providers/LanguageProvider';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: 'فريق Silicon Apex حول فكرتنا إلى منتج كامل في وقت قياسي. جودة الكود، الاتصال، والالتزام بالمواعيد — كل شيء كان مثالياً.',
    name: 'علي حسن',
    company: 'ShopCore للتجارة الإلكترونية 🇸🇦',
    initials: 'عح',
    gradient: 'linear-gradient(135deg,#4361EE,#6d83f5)',
  },
  {
    text: "We've worked with many agencies, but Silicon Apex stands apart. They don't just write code — they think deeply about our product and users.",
    name: 'Noura Al-Fahad',
    company: 'EduPath Platform 🇸🇦',
    initials: 'NF',
    gradient: 'linear-gradient(135deg,#16A34A,#22C55E)',
  },
  {
    text: 'قدموا لنا نظام إدارة مستشفى يخدم مئات المرضى يومياً. الأداء لا تشوبه شائبة، والدعم مستمر وممتاز.',
    name: 'سلطان الراجحي',
    company: 'MedSync Health Systems 🇸🇦',
    initials: 'سر',
    gradient: 'linear-gradient(135deg,#06B6D4,#22D3EE)',
  },
];

export default function TestimonialsSection() {
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
    <section className="section" id="testimonials" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <div className="eyebrow">{t('sec_testi')}</div>
          <h2 className="heading-lg">{t('sec_testi_h')}</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((item, i) => {
            const delay = i === 0 ? '' : i === 1 ? 'reveal-delay-1' : 'reveal-delay-2';
            return (
              <div key={i} className={`testi-card reveal ${delay}`}>
                <div className="testi-quote-mark">&ldquo;</div>
                <div className="testi-stars">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="testi-text">{item.text}</p>
                <div className="testi-author">
                  <div className="testi-avatar" style={{ background: item.gradient }}>
                    {item.initials}
                  </div>
                  <div>
                    <div className="testi-name">{item.name}</div>
                    <div className="testi-company">{item.company}</div>
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
