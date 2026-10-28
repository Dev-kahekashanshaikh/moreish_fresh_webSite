import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
import "../styles/sections.css";

const stepImages = [
  "/images/journey-farm.jpg",
  "/images/journey-transport.jpg",
  "/images/journey-retail.jpg",
  "/images/journey-packaging.jpg",
  "/images/journey-customer.jpg",
];

export const MobileJourneySlider = ({ steps }) => {
  const [failedImages, setFailedImages] = useState({});

  const handleImageError = (index) => {
    setFailedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <Swiper
      modules={[EffectCards]}
      effect="cards"
      grabCursor={true}
      className="mobile-journey-swiper"
    >
      {steps.map((step, idx) => (
        <SwiperSlide key={step.number} className="journey-slide">
          <div className="journey-step-card">
            <div className="step-image-wrap">
              <img
                src={
                  failedImages[idx]
                    ? "/images/hero-chicken.jpg"
                    : stepImages[idx]
                }
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
        </SwiperSlide>
      ))}
    </Swiper>
  );
};