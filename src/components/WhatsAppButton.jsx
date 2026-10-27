import React from 'react';
import { brandConfig } from '../data/config';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle } from 'lucide-react';
import '../styles/WhatsAppBtn.css';

export const WhatsAppButton = () => {
  const { t } = useLanguage();
  const rawNumber = brandConfig.contact.whatsappNumber || '+917842363997';
  // Normalize to international digits-only format
  const cleanNumber = rawNumber.replace(/\D/g, '');

  // If unconfigured, hide the button per brand safety guidelines
  if (!cleanNumber) {
    return null;
  }

  const message = brandConfig.contact.whatsappDefaultMessage || 'Hello Moreish Fresh, I would like to know more about your products.';
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label={t('whatsapp.buttonLabel')}
      title={t('whatsapp.tooltip')}
    >
      <div className="whatsapp-pulse" aria-hidden="true"></div>
      <MessageCircle size={28} aria-hidden="true" />
    </a>
  );
};
