import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/Button';
import { ShieldCheck, Sparkles, HeartHandshake, Award, ArrowDown, Phone } from 'lucide-react';


export const HeroSection = () => {
  const { t } = useLanguage();
  const [imgError, setImgError] = useState(false);

  const values = [
    { key: 'freshness', label: t('hero.values.freshness'), icon: Sparkles },
    { key: 'hygiene', label: t('hero.values.hygiene'), icon: ShieldCheck },
    { key: 'quality', label: t('hero.values.quality'), icon: Award },
    { key: 'trust', label: t('hero.values.trust'), icon: HeartHandshake }
  ];

  return (
    <section id="home" className="hero-section" aria-label="Hero Section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Story & CTAs */}
          <div className="hero-content">
            <span className="hero-eyebrow">
              {t('hero.eyebrow')}
            </span>

            <h1 className="hero-headline">
              {t('hero.headline')}
            </h1>

            <p className="hero-paragraph">
              {t('hero.paragraph1')}
            </p>
            <p className="hero-paragraph">
              {t('hero.paragraph2')}
            </p>

            <div className="hero-cta-group">
              <Button
                href="#journey"
                variant="primary"
                size="lg"
                icon={ArrowDown}
              >
                {t('hero.ctaJourney')}
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                size="lg"
                icon={Phone}
              >
                {t('hero.ctaContact')}
              </Button>

            </div>

            {/* Brand Promise Bar */}
            <div className="hero-promise-bar">
              <span className="promise-label">{t('hero.promiseLabel')}</span>
              <div className="promise-tags">
                {values.map(({ key, label, icon: Icon }) => (
                  <span key={key} className="promise-tag">
                    <Icon size={15} aria-hidden="true" />
                    <span>{label}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Fresh Food Photography */}
          <div className="hero-media-wrap">
            <div className="hero-image-frame">
              <img
                src={imgError ? 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=1200&q=80' : '/images/hero-chicken.jpg'}
                alt={t('products.broiler.imageAlt')}
                className="hero-image"
                width="600"
                height="570"
                onError={() => setImgError(true)}
              />
            </div>

            {/* Subtle Floating Trust Badge */}
            <div className="hero-floating-card">
              <div className="floating-icon">
                <ShieldCheck size={24} aria-hidden="true" />
              </div>
              <div>
                <h4 className="floating-title">{t('hero.floatingBadgeTitle')}</h4>
                <p className="floating-subtitle">{t('hero.floatingBadgeSubtitle')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
