import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/SectionHeading';
import { Store } from 'lucide-react';

export const AboutSection = () => {
  const { t } = useLanguage();
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="section-wrapper bg-white" aria-label="About Moreish Fresh">
      <div className="container">
        <div className="about-grid">
          {/* Left: Balanced Editorial Retail Photography */}
          <div className="about-media">
            <div className="about-image-frame">
              <img
                src={imgError ? 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80' : '/images/moreishfresh_services.jpeg'}
                alt="Modern and clean fresh food retail counter"
                className="about-image"
                loading="lazy"
                width="600"
                height="495"
                onError={() => setImgError(true)}
              />
            </div>
            <div className="about-accent-badge">
              <Store size={22} aria-hidden="true" />
              <span>{t('about.badgeTitle')} — {t('about.badgeDesc')}</span>
            </div>
          </div>

          {/* Right: Brand Story Content */}
          <div className="about-content">
            <SectionHeading
              eyebrow={t('about.eyebrow')}
              title={t('about.heading')}
              align="left"
            />
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
            <p>{t('about.p4')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
