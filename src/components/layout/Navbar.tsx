"use client";

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/providers/LanguageProvider';
import { useTheme } from '@/providers/ThemeProvider';
import { Moon, Sun, Globe, Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const { lang, t, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setActiveSection(e.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const navLinks = [
    { href: '#services', key: 'nav_services' as const },
    { href: '#projects', key: 'nav_projects' as const },
    { href: '#team', key: 'nav_team' as const },
    { href: '#contact', key: 'nav_contact' as const },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container">
          <a href="#" className="nav-logo">
            <div className="logo-mark">SA</div>
            <span className="logo-text">Silicon Apex</span>
          </a>

          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={activeSection === link.href.slice(1) ? 'active' : ''}
                >
                  {t(link.key)}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-controls">
            <button
              className="ctrl-btn"
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              title="Toggle Language"
            >
              <Globe size={14} />
              <span className="lang-label">{lang === 'ar' ? 'EN' : 'ع'}</span>
            </button>
            <button
              className="ctrl-btn icon-btn"
              onClick={toggleTheme}
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Moon size={15} /> : <Sun size={15} />}
            </button>
            <a href="#contact" className="btn btn-primary btn-sm">
              {t('nav_cta')}
            </a>
          </div>

          <button
            className="hamburger"
            onClick={() => setMobileOpen(true)}
            aria-label="Menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
