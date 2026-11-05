import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Navbar({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'services', 'industries', 'projects', 'clients', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Industries', href: '#industries', id: 'industries' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Clients', href: '#clients', id: 'clients' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      {/* Top Bar (Solid Pure Black #000000) */}
      <div className="top-industrial-bar" style={{
        backgroundColor: '#000000',
        color: '#FFFFFF',
        padding: '8px 24px',
        fontSize: '13px',
        fontWeight: '700',
        borderBottom: '2px solid #FFCF01',
        display: isScrolled ? 'none' : 'block'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#FFFFFF' }}>
              <ShieldCheck size={16} color="#FFCF01" /> ISO 9001:2015 Certified Contractor
            </span>
            <span style={{ color: '#FFCF01' }}>•</span>
            <span style={{ color: '#FFFFFF' }}>Visakhapatnam, Andhra Pradesh</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a href="tel:9849900004" style={{ color: '#FFCF01', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '800' }}>
              <Phone size={14} color="#FFCF01" /> +91 98499 00004
            </a>
            <span style={{ color: '#FFCF01' }}>•</span>
            <a href="tel:9059591469" style={{ color: '#FFCF01', textDecoration: 'none', fontWeight: '800' }}>
              +91 90595 91469
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar (Solid 100% Pitch Black #000000 - Zero Glow / No Transparency) */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: '#000000',
        transition: 'all 0.3s ease',
        padding: isScrolled ? '12px 20px' : '18px 24px',
        borderBottom: '3px solid #FFCF01',
        width: '100%'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px'
        }}>
          {/* Company Logo on Clean Solid Pitch Black */}
          <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <img
              src="/logo.png"
              alt="HITECH Industrial Services Official Logo"
              style={{
                height: isScrolled ? '48px' : '64px',
                width: 'auto',
                maxWidth: '240px',
                objectFit: 'contain',
                backgroundColor: '#000000',
                transition: 'all 0.3s ease'
              }}
              className="navbar-logo-img"
            />
          </a>

          {/* Desktop Nav Items */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="desktop-nav">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    textDecoration: 'none',
                    color: isActive ? '#FFCF01' : '#FFFFFF',
                    fontSize: '16px',
                    fontWeight: isActive ? '800' : '600',
                    position: 'relative',
                    padding: '6px 0',
                    transition: 'color 0.2s ease'
                  }}
                >
                  {link.name}
                  {isActive && (
                    <span style={{
                      position: 'absolute',
                      bottom: '0',
                      left: '0',
                      width: '100%',
                      height: '3px',
                      backgroundColor: '#FFCF01',
                      borderRadius: '2px'
                    }} />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Header Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            {/* Desktop CTA Button */}
            <button
              onClick={onOpenQuoteModal}
              className="btn-primary desktop-cta-btn"
              style={{ padding: '12px 24px', fontSize: '15px' }}
            >
              Get a Quote <ArrowRight size={16} />
            </button>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'none',
                backgroundColor: '#FFCF01',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                padding: '8px',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              className="mobile-toggle-btn"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={26} color="#000000" /> : <Menu size={26} color="#000000" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer (Solid Pitch Black #000000) */}
        {mobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            backgroundColor: '#000000',
            borderTop: '3px solid #FFCF01',
            borderBottom: '3px solid #FFCF01',
            padding: '20px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  color: '#FFFFFF',
                  fontSize: '17px',
                  fontWeight: '700',
                  padding: '12px 8px',
                  borderBottom: '2px solid #FFCF01',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                {link.name}
                <ArrowRight size={18} color="#FFCF01" />
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="btn-primary"
              style={{ marginTop: '12px', width: '100%', padding: '14px' }}
            >
              Get a Quote Now
            </button>
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 992px) {
          .desktop-nav, .desktop-cta-btn {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: flex !important;
          }
          .top-industrial-bar {
            display: none !important;
          }
          .navbar-logo-img {
            height: 48px !important;
            max-width: 180px !important;
          }
        }
      `}</style>
    </>
  );
}
