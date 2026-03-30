import React from 'react';
import Hero from '../components/Hero';
import GlobalBookingBar from '../components/GlobalBookingBar';
import ServicesGrid from '../components/ServicesGrid';
import AboutSection from '../components/AboutSection';
import TrustIndicators from '../components/TrustIndicators';

const HomePage = () => {
  return (
    <>
      <Hero />
      <GlobalBookingBar />
      <ServicesGrid />
      <AboutSection />
      <TrustIndicators />
    </>
  );
};

export default HomePage;
