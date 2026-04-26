"use client";

import React, { useEffect } from 'react';
import { useLanguage } from '@/providers/LanguageProvider';
import { useTheme } from '@/providers/ThemeProvider';
import { X, Moon, Sun, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { lang, t, setLang, dir } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const links = [
    { href: '#services', key: 'nav_services' as const },
    { href: '#projects', key: 'nav_projects' as const },
    { href: '#team', key: 'nav_team' as const },
    { href: '#contact', key: 'nav_contact' as const },
  ];

  return (
    <AnimatePresence>
      {open && (
        <div className="mobile-menu-overlay" onClick={onClose}>
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'absolute', inset: 0, zIndex: -1 }}
          />

          {/* Slide out drawer */}
          <motion.div
            initial={{ x: dir === 'rtl' ? -300 : 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: dir === 'rtl' ? -300 : 300, opacity: 0 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="mobile-menu-drawer"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside drawer
          >
            <div className="mobile-menu-header">
              <div className="nav-logo">
                <div className="logo-mark">SA</div>
                <span className="logo-text">Silicon Apex</span>
              </div>
              <button className="mobile-close-btn" onClick={onClose}>
                <X size={20} />
              </button>
            </div>

            <div className="mobile-nav-links">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={onClose}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  {t(link.key)}
                </motion.a>
              ))}
            </div>

            <div className="mobile-menu-footer">
              <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                <button
                  className="ctrl-btn"
                  style={{ flex: 1, justifyContent: 'center' }}
                  onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
                >
                  <Globe size={16} />
                  <span>{lang === 'ar' ? 'English' : 'عربي'}</span>
                </button>
                <button className="ctrl-btn icon-btn" onClick={toggleTheme}>
                  {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
                </button>
              </div>
              <a href="#contact" className="btn btn-primary btn-lg" onClick={onClose}>
                {t('nav_cta')}
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
