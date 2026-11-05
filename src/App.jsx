import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import Projects from './components/Projects';
import WhyChooseUs from './components/WhyChooseUs';
import Clients from './components/Clients';
import ContactSection from './components/ContactSection';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleOpenQuoteModal = () => {
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="hitech-app">
      {/* 1. Navigation */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 2. Hero Section */}
      <Hero onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 3. About HITECH */}
      <About onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 4. Our Services */}
      <Services onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 5. Industries We Serve */}
      <Industries onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 6. Featured Projects */}
      <Projects onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 7. Why Choose HITECH */}
      <WhyChooseUs onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 8. Our Trusted Clients */}
      <Clients />

      {/* 9. Contact Section & Quote Form */}
      <ContactSection />

      {/* 10. Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* 11. Footer */}
      <Footer onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Interactive Global Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={handleCloseQuoteModal} />
    </div>
  );
}
