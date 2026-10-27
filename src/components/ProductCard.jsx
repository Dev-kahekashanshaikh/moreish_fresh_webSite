import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from './Button';
import { ArrowUpRight, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

export const ProductCard = ({ product }) => {
  const { t } = useLanguage();
  const [imgError, setImgError] = useState(false);

  // Status mapping
  const statusConfig = {
    available: {
      label: t('products.status.available'),
      className: 'badge-available',
      icon: CheckCircle2
    },
    pending_confirmation: {
      label: t('products.status.pending_confirmation'),
      className: 'badge-pending',
      icon: AlertCircle
    },
    coming_soon: {
      label: t('products.status.coming_soon'),
      className: 'badge-coming_soon',
      icon: Clock
    }
  };

  const currentStatus = statusConfig[product.status] || statusConfig.coming_soon;
  const StatusIcon = currentStatus.icon;

  const title = t(product.titleKey);
  const label = t(product.labelKey);
  const description = t(product.descriptionKey);
  const imageAlt = t(product.imageAltKey) || title;

  return (
    <article className={`product-card ${product.featured ? 'product-featured' : ''}`}>
      <div className="product-image-wrap">
        <img
          src={imgError ? '/images/hero-chicken.jpg' : product.image}
          alt={imageAlt}
          className="product-image"
          loading="lazy"
          width="400"
          height="300"
          onError={() => setImgError(true)}
        />
        <div className={`product-status-badge ${currentStatus.className}`}>
          <StatusIcon size={13} aria-hidden="true" />
          <span>{currentStatus.label}</span>
        </div>
      </div>

      <div className="product-content">
        {label && <span className="product-category-label">{label}</span>}
        <h3 className="product-title">{title}</h3>
        <p className="product-desc">{description}</p>

        <div className="product-footer">
          <Button
            href="#contact"
            variant={product.status === 'available' ? 'primary' : 'secondary'}
            size="sm"
            className="btn-full"
            icon={ArrowUpRight}
          >
            {t('products.inquireCta')}
          </Button>
        </div>
      </div>
    </article>
  );
};
