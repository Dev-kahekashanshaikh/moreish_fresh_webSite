import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem('moreish_language');
      return saved === 'kn' ? 'kn' : 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem('moreish_language', language);
    } catch {
      // Local storage not accessible
    }

    // Update document title dynamically
    const currentMeta = translations[language]?.meta;
    if (currentMeta?.siteTitle) {
      document.title = currentMeta.siteTitle;
    }
  }, [language]);

  // Robust dot-notation lookup with fallback to English
  const t = (path) => {
    const keys = path.split('.');
    let result = translations[language];

    for (const key of keys) {
      if (result && result[key] !== undefined) {
        result = result[key];
      } else {
        result = undefined;
        break;
      }
    }

    // Fallback to English if translation is missing
    if (result === undefined && language !== 'en') {
      let fallback = translations.en;
      for (const key of keys) {
        if (fallback && fallback[key] !== undefined) {
          fallback = fallback[key];
        } else {
          fallback = undefined;
          break;
        }
      }
      return fallback !== undefined ? fallback : path;
    }

    return result !== undefined ? result : path;
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'kn' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
