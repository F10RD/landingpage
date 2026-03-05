'use client';

import { useState, useEffect } from 'react';
import IntroScreen from '@/components/landing/IntroScreen';
import HeroSection from '@/components/landing/HeroSection';
import WorkWithSection from '@/components/landing/WorkWithSection';
import Navbar from '@/components/landing/Navbar';
import WhatIBuildSection from '@/components/landing/WhatIBuildSection';
import PortfolioSection from '@/components/landing/PortfolioSection';
import PricingSection from '@/components/landing/PricingSection';
import ContactSection from '@/components/landing/ContactSection';
import Footer from '@/components/landing/Footer';
import ProcessSection from '@/components/landing/ProcessSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem('fiord_intro_seen');
    if (alreadySeen) setIntroComplete(true);
    setChecked(true);
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem('fiord_intro_seen', 'true');
    setIntroComplete(true);
  };

  if (!checked) return null;

  return (
    <main>
      {!introComplete && <IntroScreen onComplete={handleIntroComplete} />}
      {introComplete && (
        <>
          <Navbar />
          <HeroSection />
          <WorkWithSection />
          <WhatIBuildSection />
          <PortfolioSection />
          <ProcessSection />
          <TestimonialsSection />
          <PricingSection />
          <ContactSection />
          <Footer />
        </>
      )}
    </main>
  );
}
