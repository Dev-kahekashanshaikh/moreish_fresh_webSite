import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { brandConfig } from '../data/config';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    enquiryType: 'general',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status.type) setStatus({ type: '', message: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.contactInfo.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: t('contact.errorRequired')
      });
      return;
    }

    // Phone / email format check
    const contactVal = formData.contactInfo.trim();
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactVal);
    const isPhone = /^[+]?[\d\s-]{7,15}$/.test(contactVal);

    if (!isEmail && !isPhone) {
      setStatus({
        type: 'error',
        message: t('contact.errorContact')
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate submission handling with clear transparency that backend service is to be connected
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({
        type: 'success',
        message: t('contact.successMsg')
      });
      setFormData({
        name: '',
        contactInfo: '',
        enquiryType: 'general',
        message: ''
      });
    }, 600);
  };

  const address = brandConfig.contact.address;
  const phone = brandConfig.contact.phone || t('contact.notProvided');
  const email = brandConfig.contact.email || t('contact.notProvided');
  const hours = brandConfig.contact.businessHours || t('contact.notProvided');

  return (
    <section id="contact" className="section-wrapper bg-white" aria-label="Contact Moreish Fresh">
      <div className="container">
        <SectionHeading
          eyebrow={t('contact.eyebrow')}
          title={t('contact.heading')}
          intro={t('contact.intro')}
          align="left"
        />

        <div className="contact-grid">
          {/* Left Column: Business Details */}
          <div className="contact-info-col">
            <h3 className="contact-brand-title">{brandConfig.brandName}</h3>
            <p className="contact-brand-sub">{t('contact.brandSub')}</p>
            <p className="contact-intro-text">
              {t('contact.intro')}
            </p>

            <div className="contact-items-list">
              {/* Address */}
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={20} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="contact-item-title">{t('contact.labels.address')}</h4>
                  <p className="contact-item-val">{address}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={20} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="contact-item-title">{t('contact.labels.phone')}</h4>
                  <p className="contact-item-val">{phone}</p>
                </div>
              </div>

              {/* Email */}
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={20} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="contact-item-title">{t('contact.labels.email')}</h4>
                  <p className="contact-item-val">{email}</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="contact-item">
                <div className="contact-icon">
                  <Clock size={20} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="contact-item-title">{t('contact.labels.hours')}</h4>
                  <p className="contact-item-val">{hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Enquiry Form */}
          <div className="contact-form-card">
            <h3 className="form-title">{t('contact.formTitle')}</h3>

            {status.message && (
              <div
                className={`form-feedback ${status.type}`}
                role={status.type === 'error' ? 'alert' : 'status'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {status.type === 'success' ? (
                    <CheckCircle2 size={18} aria-hidden="true" />
                  ) : (
                    <AlertCircle size={18} aria-hidden="true" />
                  )}
                  <span>{status.message}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  {t('contact.nameLabel')} *
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact.namePlaceholder')}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-info" className="form-label">
                  {t('contact.contactInfoLabel')} *
                </label>
                <input
                  type="text"
                  id="contact-info"
                  name="contactInfo"
                  value={formData.contactInfo}
                  onChange={handleChange}
                  placeholder={t('contact.contactInfoPlaceholder')}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-enquiry" className="form-label">
                  {t('contact.enquiryTypeLabel')}
                </label>
                <select
                  id="contact-enquiry"
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="general">{t('contact.types.general')}</option>
                  <option value="retail">{t('contact.types.retail')}</option>
                  <option value="supplier">{t('contact.types.supplier')}</option>
                  <option value="feedback">{t('contact.types.feedback')}</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  {t('contact.messageLabel')} *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.messagePlaceholder')}
                  className="form-textarea"
                  rows={4}
                  required
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="md"
                className="btn-full"
                disabled={isSubmitting}
                icon={Send}
              >
                {isSubmitting ? t('contact.sendingBtn') : t('contact.submitBtn')}
              </Button>

              <p className="form-config-note">
                {t('contact.configNotice')}
              </p>
            </form>
          </div>
        </div>

      </div>


    </section>
  );
};
