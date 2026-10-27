import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/SectionHeading';
import { ShieldCheck, Truck, Award, Package, HeartHandshake } from 'lucide-react';

export const CommitmentSection = () => {
  const { t } = useLanguage();

  const commitments = [
    {
      icon: ShieldCheck,
      title: t('commitment.items.0.title'),
      desc: t('commitment.items.0.desc')
    },
    {
      icon: Truck,
      title: t('commitment.items.1.title'),
      desc: t('commitment.items.1.desc')
    },
    {
      icon: Award,
      title: t('commitment.items.2.title'),
      desc: t('commitment.items.2.desc')
    },
    {
      icon: Package,
      title: t('commitment.items.3.title'),
      desc: t('commitment.items.3.desc')
    },
    {
      icon: HeartHandshake,
      title: t('commitment.items.4.title'),
      desc: t('commitment.items.4.desc')
    }
  ];

  return (
    <section id="commitment" className="section-wrapper bg-white" aria-label="Our Commitment">
      <div className="container">
        <SectionHeading
          eyebrow={t('commitment.eyebrow')}
          title={t('commitment.heading')}
          align="center"
        />

        <div className="commitment-grid">
          {commitments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="commitment-card">
                <div className="commitment-icon-wrap">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className="commitment-title">{item.title}</h3>
                <p className="commitment-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
