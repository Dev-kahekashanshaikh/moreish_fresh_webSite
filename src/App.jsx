import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTopButton } from './components/ScrollToTopButton';

import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { JourneySection } from './sections/JourneySection';
import { ProductsSection } from './sections/ProductsSection';
import { PackagingSection } from './sections/PackagingSection';
import { CommitmentSection } from './sections/CommitmentSection';
import { VisionSection } from './sections/VisionSection';
import { ContactSection } from './sections/ContactSection';

import './styles/variables.css';
import './styles/global.css';
import './styles/components.css';
import './styles/sections.css';
import './styles/responsive.css';

export function App() {
  return (
    <LanguageProvider>
      <div className="site-wrapper">
        <Header />
        <main id="main-content">
          <HeroSection />
          <AboutSection />
          <JourneySection />
          <ProductsSection />
          <PackagingSection />
          <CommitmentSection />
          <VisionSection />
          <ContactSection />
        </main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTopButton />
      </div>
    </LanguageProvider>
  );
}

export default App;
