import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { brandConfig } from '../data/config';
import { Sparkles, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.journey'), href: '#journey' },
    { label: t('nav.products'), href: '#products' },
    { label: t('nav.packaging'), href: '#packaging' },
    { label: t('nav.commitment'), href: '#commitment' },
    { label: t('nav.contact'), href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const address = brandConfig.contact.address;
  const hasPhone = Boolean(brandConfig.contact.phone);
  const hasEmail = Boolean(brandConfig.contact.email);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <a href="#home" className="footer-logo" aria-label="Moreish Fresh">
              <div className="brand-logo-icon">
                <Sparkles size={18} aria-hidden="true" />
              </div>
              <div className="brand-name-wrap">
                <span className="brand-moreish">MOREISH</span>
                <span className="brand-fresh">FRESH</span>
              </div>
            </a>
            <p className="footer-tagline">"{t('footer.tagline')}"</p>
            <p className="footer-secondary-tagline">{t('footer.secondaryTagline')}</p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="footer-col-title">{t('footer.navTitle')}</h3>
            <ul className="footer-nav-list">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="footer-col-title">{t('footer.categoriesTitle')}</h3>
            <p className="footer-categories-text">
              {t('footer.categories')}
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="footer-col-title">{t('footer.contactTitle')}</h3>
            <div className="footer-nav-list" style={{ fontSize: '0.9rem' }}>
              <p>{address}</p>
              {hasPhone && <p>{brandConfig.contact.phone}</p>}
              {hasEmail && <p>{brandConfig.contact.email}</p>}
              <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#888888' }}>
                {brandConfig.contact.businessHours}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">{t('footer.copyright')}</p>
          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
          >
            <span>{t('footer.backToTop')}</span>
            <ArrowUp size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};
