import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OnboardingForm from './components/OnboardingForm';

function App() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <OnboardingForm />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;