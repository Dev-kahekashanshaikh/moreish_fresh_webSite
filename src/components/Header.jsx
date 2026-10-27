import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileMenu } from './MobileMenu';
import { Button } from './Button';
import { Menu, Sparkles, Phone } from 'lucide-react';

export const Header = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['home', 'about', 'journey', 'products', 'packaging', 'commitment', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: t('nav.home'), href: '#home' },
    { id: 'about', label: t('nav.about'), href: '#about' },
    { id: 'journey', label: t('nav.journey'), href: '#journey' },
    { id: 'products', label: t('nav.products'), href: '#products' },
    { id: 'packaging', label: t('nav.packaging'), href: '#packaging' },
    { id: 'commitment', label: t('nav.commitment'), href: '#commitment' },
    { id: 'contact', label: t('nav.contact'), href: '#contact' }
  ];

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-inner">
          {/* Brand Logo */}
          <a href="#home" className="brand-logo" aria-label="Moreish Fresh - Home">
            <div className="brand-logo-icon">
              <Sparkles size={20} aria-hidden="true" />
            </div>
            <div className="brand-logo-text">
              <div className="brand-name-wrap">
                <span className="brand-moreish">MOREISH</span>
                <span className="brand-fresh">FRESH</span>
              </div>
              <span className="brand-tagline-micro">From Farm to Table</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="header-actions">
            <LanguageSwitcher />

            <Button
              href="#contact"
              variant="primary"
              size="sm"
              icon={Phone}
              className='contact'
            >
              {t('nav.contact')}
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label={t('nav.openMenu')}
              aria-expanded={mobileMenuOpen}
            >
              <Menu size={22} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
};
