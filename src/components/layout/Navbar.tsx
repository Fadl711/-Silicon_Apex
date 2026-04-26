"use client";

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/providers/LanguageProvider';
import { useTheme } from '@/providers/ThemeProvider';
import { Moon, Sun, Globe, Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';
import { motion } from 'motion/react';

export default function Navbar() {
  const { lang, t, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section tracking using IntersectionObserver
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
      <nav className={`nav-wrapper ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="navbar-inner">
          <a href="#" className="nav-logo">
            <div className="logo-mark">SA</div>
            <span className="logo-text">Silicon Apex</span>
          </a>

          <div className="nav-links" onMouseLeave={() => setHoveredLink(null)}>
            {navLinks.map(link => {
              const isActive = activeSection === link.href.slice(1);
              const isHovered = hoveredLink === link.href;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link-item ${isActive ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredLink(link.href)}
                >
                  {t(link.key)}
                  
                  {/* Active/Hover Animated Pill Background */}
                  {(isActive || isHovered) && (
                    <motion.div
                      layoutId="nav-pill"
                      className="nav-active-bg"
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

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
            
            <button
              className="hamburger"
              onClick={() => setMobileOpen(true)}
              aria-label="Menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
