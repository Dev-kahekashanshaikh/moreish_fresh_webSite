import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { SectionHeading } from "../components/SectionHeading";
import { MobileJourneySlider } from './MobileJourneySlider';

export const JourneySection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      title: t("journey.steps.0.title"),
      description: t("journey.steps.0.description"),
      alt: t("journey.steps.0.alt"),
    },
    {
      number: "02",
      title: t("journey.steps.1.title"),
      description: t("journey.steps.1.description"),
      alt: t("journey.steps.1.alt"),
    },
    {
      number: "03",
      title: t("journey.steps.2.title"),
      description: t("journey.steps.2.description"),
      alt: t("journey.steps.2.alt"),
    },
    {
      number: "04",
      title: t("journey.steps.3.title"),
      description: t("journey.steps.3.description"),
      alt: t("journey.steps.3.alt"),
    },
    {
      number: "05",
      title: t("journey.steps.4.title"),
      description: t("journey.steps.4.description"),
      alt: t("journey.steps.4.alt"),
    },
  ];

  return (
    <section
      id="journey"
      className="section-wrapper bg-warm"
      aria-label="Our Farm to Customer Journey"
    >
      <div className="container">
        <SectionHeading
          eyebrow={t("journey.eyebrow")}
          title={t("journey.heading")}
          intro={t("journey.intro")}
          align="center"
        />

        {/* Mobile slider */}
        <div className="mobile-journey-only">
          <MobileJourneySlider steps={steps} />
        </div>

        {/* Desktop grid */}
        <div className="journey-timeline-wrap desktop-journey-only">
          <div className="journey-steps-grid">
            {steps.map((step, idx) => (
              <div key={step.number} className="journey-step-card">
                <div className="step-image-wrap">
                  <img
                    src={[
                      "/images/journey-farm.jpg",
                      "/images/journey-transport.jpg",
                      "/images/journey-retail.jpg",
                      "/images/journey-packaging.jpg",
                      "/images/journey-customer.jpg",
                    ][idx]}
                    alt={step.alt}
                    className="step-image"
                    loading="lazy"
                    width="320"
                    height="220"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/images/hero-chicken.jpg";
                    }}
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