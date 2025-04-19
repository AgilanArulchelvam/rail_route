
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import BookingSteps from '@/components/BookingSteps';
import FAQ from '@/components/FAQ';
import PartnerCarousel from '@/components/PartnerCarousel';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Features />
        <BookingSteps />
        <FAQ />
        <PartnerCarousel />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
