"use client";

import React from 'react';
import { useLanguage } from '@/providers/LanguageProvider';
import { useTheme } from '@/providers/ThemeProvider';
import { X, Moon, Sun } from 'lucide-react';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { lang, t, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  React.useEffect(() => {
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
    <div className={`mobile-menu ${open ? 'open' : ''}`} id="mobile-menu">
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '20px',
          insetInlineEnd: '20px',
          padding: '10px',
          color: 'var(--text-2)',
        }}
      >
        <X size={24} />
      </button>

      {links.map(link => (
        <a key={link.href} href={link.href} onClick={onClose}>
          {t(link.key)}
        </a>
      ))}

      <div className="mobile-menu-footer">
        <button
          className="ctrl-btn"
          onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
        >
          {lang === 'ar' ? 'EN' : 'ع'}
        </button>
        <button className="ctrl-btn icon-btn" onClick={toggleTheme}>
          {theme === 'dark' ? <Moon size={15} /> : <Sun size={15} />}
        </button>
        <a href="#contact" className="btn btn-primary btn-sm" onClick={onClose}>
          {t('nav_cta')}
        </a>
      </div>
    </div>
  );
}
