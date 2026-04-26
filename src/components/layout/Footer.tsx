"use client";

import React from 'react';
import { useLanguage } from '@/providers/LanguageProvider';
import { useTheme } from '@/providers/ThemeProvider';
import { Globe, Moon, Sun } from 'lucide-react';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

export default function Footer() {
  const { lang, t, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="nav-logo" style={{ marginBottom: 0 }}>
              <div className="logo-mark">SA</div>
              <span className="logo-text">Silicon Apex</span>
            </a>
            <p>{t('footer_tagline')}</p>
            <div className="footer-socials">
              <a href="#" className="social-btn" title="GitHub"><GithubIcon /></a>
              <a href="#" className="social-btn" title="LinkedIn"><LinkedinIcon /></a>
              <a href="#" className="social-btn" title="Twitter/X"><TwitterIcon /></a>
              <a href="#" className="social-btn" title="Instagram"><InstagramIcon /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>{t('footer_services')}</h4>
            <ul>
              <li><a href="#services">{t('footer_s1')}</a></li>
              <li><a href="#services">{t('footer_s2')}</a></li>
              <li><a href="#services">{t('footer_s3')}</a></li>
              <li><a href="#services">{t('footer_s4')}</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t('footer_company')}</h4>
            <ul>
              <li><a href="#">{t('footer_c1')}</a></li>
              <li><a href="#projects">{t('footer_c2')}</a></li>
              <li><a href="#team">{t('footer_c3')}</a></li>
              <li><a href="#">{t('footer_c4')}</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t('footer_contact_col')}</h4>
            <ul>
              <li><a href="mailto:hello@siliconapex.com">hello@siliconapex.com</a></li>
              <li><a href="tel:+966501234567" dir="ltr">+966 50 123 4567</a></li>
              <li><span>{t('contact_loc_v')}</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t('footer_copy')}</p>
          <div className="footer-bottom-controls">
            <button
              className="ctrl-btn"
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            >
              <Globe size={13} />
              <span>{lang === 'ar' ? 'EN' : 'ع'}</span>
            </button>
            <button className="ctrl-btn icon-btn" onClick={toggleTheme}>
              {theme === 'dark' ? <Moon size={14} /> : <Sun size={14} />}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
