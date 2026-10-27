import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/SectionHeading';
import { ProductCard } from '../components/ProductCard';
import { productsData } from '../data/products';

export const ProductsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="products" className="section-wrapper bg-white" aria-label="Our Products">
      <div className="container">
        <SectionHeading
          eyebrow={t('products.eyebrow')}
          title={t('products.heading')}
          intro={t('products.intro')}
          align="center"
        />

        <div className="products-grid">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
