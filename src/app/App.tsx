import React from 'react';
import { Hero } from './components/Hero';
import { AboutTour } from './components/AboutTour';
import { Audience } from './components/Audience';
import { Program } from './components/Program';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#08111f] text-slate-200 selection:bg-teal-500/30 font-sans">
      <Hero />
      <AboutTour />
      <Audience />
      <Program />
      <CTA />
      <Footer />
    </div>
  );
}
