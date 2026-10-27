import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageSwitcher = ({ className = '' }) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      className={`language-switcher ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <button
        type="button"
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        title="Switch to English"
      >
        English
      </button>
      <button
        type="button"
        className={`lang-btn ${language === 'kn' ? 'active' : ''}`}
        onClick={() => setLanguage('kn')}
        aria-pressed={language === 'kn'}
        title="ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಿ"
      >
        ಕನ್ನಡ
      </button>
    </div>
  );
};
