import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/SectionHeading';
import { Sparkles, PackageCheck, Layers, ShoppingBag } from 'lucide-react';
import { Store } from 'lucide-react';

export const PackagingSection = () => {
  const { t } = useLanguage();
  const [imgError, setImgError] = useState(false);

  const benefits = [
    {
      icon: Sparkles,
      title: t('packaging.benefits.0.title'),
      desc: t('packaging.benefits.0.desc')
    },
    {
      icon: PackageCheck,
      title: t('packaging.benefits.1.title'),
      desc: t('packaging.benefits.1.desc')
    },
    {
      icon: Layers,
      title: t('packaging.benefits.2.title'),
      desc: t('packaging.benefits.2.desc')
    },
    {
      icon: ShoppingBag,
      title: t('packaging.benefits.3.title'),
      desc: t('packaging.benefits.3.desc')
    }
  ];

  return (
    <section id="packaging" className="section-wrapper bg-warm" aria-label="Hygienic Packaging">
      <div className="container">
        <div className="packaging-grid">
          {/* Packaging Photography */}
          <div className="packaging-media">
            <div className="packaging-image-frame">
              <img
                src={imgError ? 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&w=1000&q=80' : '/images/packaging.png'}
                alt="Carefully handled chicken in food-grade packaging"
                className="packaging-image"
                loading="lazy"
                width="650"
                height="595"
                onError={() => setImgError(true)}
              />
              
            </div>
             <div className="about-accent-badge">
              <Store size={22} aria-hidden="true" />
              <span>{t('about.badgeTitle')} — {t('about.badgeDesc')}</span>
            </div>
          </div>

          {/* Content & 4 Visual Benefits */}
          <div className="packaging-content">
            <SectionHeading
              eyebrow={t('packaging.eyebrow')}
              title={t('packaging.heading')}
              align="left"
            />
            <p>{t('packaging.intro')}</p>
            <p>{t('packaging.body1')}</p>
            <p>{t('packaging.body2')}</p>

            <div className="packaging-benefits-grid">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="benefit-card">
                    <div className="benefit-icon">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <h3 className="benefit-title">{benefit.title}</h3>
                    <p className="benefit-desc">{benefit.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
