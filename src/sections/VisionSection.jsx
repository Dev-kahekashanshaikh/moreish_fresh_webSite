import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Compass, Sparkles } from 'lucide-react';

export const VisionSection = () => {
  const { t } = useLanguage();

  return (
    <section id="vision" className="section-wrapper bg-warm" aria-label="Our Vision">
      <div className="container">
        <div className="vision-banner">
          <div className="vision-banner-inner">
            <span className="vision-eyebrow">
              <Compass size={16} aria-hidden="true" />
              <span>{t('vision.eyebrow')}</span>
            </span>

            <h2 className="vision-heading">
              {t('vision.heading')}
            </h2>

            <p className="vision-text">
              {t('vision.p1')}
            </p>
            <p className="vision-text">
              {t('vision.p2')}
            </p>

            <div className="vision-quote-box">
              <p className="vision-statement">
                "{t('vision.statement')}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
