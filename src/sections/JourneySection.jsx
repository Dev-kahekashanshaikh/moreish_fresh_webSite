import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/SectionHeading';

const stepImages = [
  '/images/journey-farm.jpg',
  '/images/journey-transport.jpg',
  '/images/journey-retail.jpg',
  '/images/journey-packaging.jpg',
  '/images/journey-customer.jpg'
];

export const JourneySection = () => {
  const { t } = useLanguage();
  const [failedImages, setFailedImages] = useState({});

  const handleImageError = (index) => {
    setFailedImages((prev) => ({ ...prev, [index]: true }));
  };

  const steps = [
    {
      number: '01',
      title: t('journey.steps.0.title'),
      description: t('journey.steps.0.description'),
      alt: t('journey.steps.0.alt'),
      image: stepImages[0]
    },
    {
      number: '02',
      title: t('journey.steps.1.title'),
      description: t('journey.steps.1.description'),
      alt: t('journey.steps.1.alt'),
      image: stepImages[1]
    },
    {
      number: '03',
      title: t('journey.steps.2.title'),
      description: t('journey.steps.2.description'),
      alt: t('journey.steps.2.alt'),
      image: stepImages[2]
    },
    {
      number: '04',
      title: t('journey.steps.3.title'),
      description: t('journey.steps.3.description'),
      alt: t('journey.steps.3.alt'),
      image: stepImages[3]
    },
    {
      number: '05',
      title: t('journey.steps.4.title'),
      description: t('journey.steps.4.description'),
      alt: t('journey.steps.4.alt'),
      image: stepImages[4]
    }
  ];

  return (
    <section id="journey" className="section-wrapper bg-warm" aria-label="Our Farm to Customer Journey">
      <div className="container">
        <SectionHeading
          eyebrow={t('journey.eyebrow')}
          title={t('journey.heading')}
          intro={t('journey.intro')}
          align="center"
        />

        <div className="journey-timeline-wrap">
          <div className="journey-steps-grid">
            {steps.map((step, idx) => (
              <div key={step.number} className="journey-step-card">
                <div className="step-image-wrap">
                  <img
                    src={failedImages[idx] ? '/images/hero-chicken.jpg' : step.image}
                    alt={step.alt}
                    className="step-image"
                    loading="lazy"
                    width="320"
                    height="220"
                    onError={() => handleImageError(idx)}
                  />
                  <span className="step-number-tag">{step.number}</span>
                </div>
                <div className="step-body">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
