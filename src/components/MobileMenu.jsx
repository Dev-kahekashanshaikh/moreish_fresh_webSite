import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Button } from './Button';
import { X, ChevronRight, Phone } from 'lucide-react';

export const MobileMenu = ({ isOpen, onClose, activeSection }) => {
  const { t } = useLanguage();
  const drawerRef = useRef(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { id: 'home', label: t('nav.home'), href: '#home' },
    { id: 'about', label: t('nav.about'), href: '#about' },
    { id: 'journey', label: t('nav.journey'), href: '#journey' },
    { id: 'products', label: t('nav.products'), href: '#products' },
    { id: 'packaging', label: t('nav.packaging'), href: '#packaging' },
    { id: 'commitment', label: t('nav.commitment'), href: '#commitment' },
    { id: 'contact', label: t('nav.contact'), href: '#contact' }
  ];

  const handleLinkClick = (e, href) => {
    onClose();
    // Allow default smooth hash scrolling
  };

  return (
    <>
      <div
        className={`mobile-menu-backdrop ${isOpen ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={drawerRef}
        className={`mobile-drawer ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className="mobile-drawer-header">
          <div className="brand-name-wrap">
            <span className="brand-moreish">MOREISH</span>
            <span className="brand-fresh">FRESH</span>
          </div>
          <button
            type="button"
            className="mobile-close-btn"
            onClick={onClose}
            aria-label={t('nav.closeMenu')}
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <nav className="mobile-nav-links" aria-label="Mobile Navigation Links">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, item.href)}
            >
              <span>{item.label}</span>
              <ChevronRight size={18} aria-hidden="true" />
            </a>
          ))}
        </nav>

        <div className="mobile-drawer-footer">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <LanguageSwitcher />
          </div>
          <Button
            href="#contact"
            variant="primary"
            size="md"
            className="btn-full"
            onClick={onClose}
            icon={Phone}
          >
            {t('nav.contact')}
          </Button>
        </div>
      </div>
    </>
  );
};
