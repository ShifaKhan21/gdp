import React from 'react';
import Header from './components/Header';
import GlobalBookingBar from './components/GlobalBookingBar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import InfoSections from './components/InfoSections';
import TrustIndicators from './components/TrustIndicators';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <GlobalBookingBar />
      <ServicesGrid />
      <InfoSections />
      <TrustIndicators />
      <Footer />
    </>
  );
}

export default App;
