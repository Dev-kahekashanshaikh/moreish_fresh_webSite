
import React, { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { SectionHeading } from "../components/SectionHeading";
import { ProductCard } from "../components/ProductCard";
import { productsData } from "../data/products";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";

import "../styles/sections.css";

export const MobileProductsSlider  = () => {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <section
      id="products"
      className="section-wrapper bg-white"
      aria-label="Our Products"
    >
      <div className="container">
        <SectionHeading
          eyebrow={t("products.eyebrow")}
          title={t("products.heading")}
          intro={t("products.intro")}
          align="center"
        />

        {isMobile ? (
          <Swiper
            modules={[EffectCards]}
            effect="cards"
            grabCursor={true}
            className="mobile-products-swiper"
          >
            {productsData.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="products-grid">
            {productsData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
