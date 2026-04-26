"use client";

import React from 'react';
import { useLanguage } from '@/providers/LanguageProvider';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ShinyText from '@/components/ui/ShinyText';
import BlurText from '@/components/ui/BlurText';
import Magnet from '@/components/ui/Magnet';

export default function HeroSection() {
  const { lang, t, dir } = useLanguage();

  return (
    <section className="hero" id="hero">
      <div className="hero-glow" />
      <div className="hero-grid" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="dot" />
            <span>{t('hero_badge')}</span>
          </div>

          <h1 className="heading-xl">
            <span>{t('hero_h1_1')}</span>{' '}
            <ShinyText
              text={t('hero_h1_2')}
              color="var(--accent)"
              shineColor="#a78bfa"
              speed={3}
              className="inline-block"
              style={{ color: 'var(--accent)' } as never}
            />
            <br />
            <span>{t('hero_h1_3')}</span>
          </h1>

          <BlurText
            text={t('hero_sub')}
            className="hero-sub"
            delay={80}
            animateBy="words"
            direction="top"
          />

          <div className="hero-actions">
            <Magnet padding={60} magnetStrength={3}>
              <a href="#contact" className="btn btn-primary btn-lg">
                {t('hero_cta1')}
              </a>
            </Magnet>
            <Magnet padding={60} magnetStrength={3}>
              <a href="#projects" className="btn btn-ghost btn-lg">
                {t('hero_cta2')}
                {dir === 'rtl' ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
              </a>
            </Magnet>
          </div>
        </div>
      </div>
      <div className="hero-scroll" id="hero-scroll">
        <span>{t('hero_scroll')}</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
