"use client";

import React from 'react';
import { useLanguage } from '@/providers/LanguageProvider';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ShinyText from '@/components/ui/ShinyText';
import BlurText from '@/components/ui/BlurText';
import Magnet from '@/components/ui/Magnet';

export default function HeroSection() {
  const { t, dir } = useLanguage();

  return (
    <section className="hero" id="hero">
      <div className="hero-glow" />
      <div className="hero-grid" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* ── centered hero content ── */}
        <div className="hero-content hero-centered">

          <h1 className="heading-xl hero-heading">
            <span>{t('hero_h1_1')}</span>{' '}
            <ShinyText
              text={t('hero_h1_2')}
              color="var(--accent)"
              shineColor="#a78bfa"
              speed={3}
              className="hero-shiny"
            />
            <br />
            <span>{t('hero_h1_3')}</span>
          </h1>

          <BlurText
            text={t('hero_sub')}
            className="hero-sub hero-sub-centered"
            delay={70}
            animateBy="words"
            direction="top"
          />

          <div className="hero-actions hero-actions-centered">
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

      {/* ── Professional scroll indicator ── */}
      <div className="hero-scroll-pro" id="hero-scroll">
        <span className="hero-scroll-text">{t('hero_scroll')}</span>
        <div className="hero-scroll-track">
          <div className="hero-scroll-dot" />
        </div>
      </div>
    </section>
  );
}
