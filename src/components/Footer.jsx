import React from 'react';
import { ArrowUp, MapPin, Phone, Mail, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Footer({ onOpenQuoteModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: '#000000', color: '#FFFFFF', borderTop: '4px solid #FFCF01', position: 'relative' }}>
      {/* Top Footer Section */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 24px 60px 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1.2fr',
          gap: '48px'
        }} className="footer-grid">
          {/* Column 1: Official Logo & Overview */}
          <div>
            <div style={{ marginBottom: '24px' }}>
              <img
                src="/logo.png"
                alt="HITECH Industrial Services Logo"
                style={{ height: '68px', width: 'auto', display: 'block', maxWidth: '260px' }}
              />
            </div>

            <p style={{ color: '#FFFFFF', fontSize: '15px', lineHeight: '1.65', marginBottom: '24px' }}>
              HITECH Industrial Services is Visakhapatnam’s trusted partner for turnkey shutdown execution, mechanical maintenance, valve overhauls, heavy steel fabrication, utility piping, and plant erection.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#000000', border: '2px solid #FFCF01', padding: '8px 14px', borderRadius: '6px' }}>
              <ShieldCheck size={18} color="#FFCF01" />
              <span style={{ fontSize: '13px', fontWeight: '800', color: '#FFFFFF' }}>
                ISO 9001:2015 & ISO 45001 Certified
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: '800', marginBottom: '20px', position: 'relative', paddingBottom: '10px' }}>
              Quick Navigation
              <span style={{ position: 'absolute', bottom: 0, left: 0, width: '36px', height: '3px', backgroundColor: '#FFCF01' }} />
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { name: 'Home', href: '#home' },
                { name: 'About HITECH', href: '#about' },
                { name: 'Our Services', href: '#services' },
                { name: 'Industries We Serve', href: '#industries' },
                { name: 'Featured Projects', href: '#projects' },
                { name: 'Client Credentials', href: '#clients' },
                { name: 'Contact & Quote', href: '#contact' },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    style={{
                      color: '#FFFFFF',
                      textDecoration: 'none',
                      fontSize: '15px',
                      fontWeight: '600',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'color 0.2s ease'
                    }}
                    className="footer-link"
                  >
                    <ChevronRight size={14} color="#FFCF01" /> {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Services Directory */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: '800', marginBottom: '20px', position: 'relative', paddingBottom: '10px' }}>
              Key Capabilities
              <span style={{ position: 'absolute', bottom: 0, left: 0, width: '36px', height: '3px', backgroundColor: '#FFCF01' }} />
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Industrial Shutdown Services',
                'Mechanical Maintenance',
                'Valves Repairing & Hydro-Test',
                'Fabrication & Heavy Structures',
                'High-Pressure Piping Spools',
                'Water Treatment (RO/DM/ETP)',
                'Plant & Equipment Erection'
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    style={{
                      color: '#FFFFFF',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: '600',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                    className="footer-link"
                  >
                    <ChevronRight size={14} color="#FFCF01" /> {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Direct Contact & Hours */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: '800', marginBottom: '20px', position: 'relative', paddingBottom: '10px' }}>
              Visakhapatnam Desk
              <span style={{ position: 'absolute', bottom: 0, left: 0, width: '36px', height: '3px', backgroundColor: '#FFCF01' }} />
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={20} color="#FFCF01" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#FFFFFF', fontSize: '14px', lineHeight: '1.5' }}>
                  Flat No. 504, SSS Towers, Simon Nagar, Kurmannapalem, Visakhapatnam, AP – 530046
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={20} color="#FFCF01" style={{ flexShrink: 0 }} />
                <div style={{ display: 'flex', gap: '12px' }}>
                  <a href="tel:9849900004" style={{ color: '#FFCF01', textDecoration: 'none', fontSize: '15px', fontWeight: '800' }}>
                    98499 00004
                  </a>
                  <span style={{ color: '#FFCF01' }}>|</span>
                  <a href="tel:9059591469" style={{ color: '#FFCF01', textDecoration: 'none', fontSize: '15px', fontWeight: '800' }}>
                    90595 91469
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={20} color="#FFCF01" style={{ flexShrink: 0 }} />
                <a href="mailto:hitechindustrialservices@gmail.com" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '14px', fontWeight: '700', wordBreak: 'break-all' }}>
                  hitechindustrialservices@gmail.com
                </a>
              </div>

              <button
                onClick={onOpenQuoteModal}
                className="btn-primary"
                style={{ marginTop: '8px', padding: '12px 20px', fontSize: '14px' }}
              >
                Request Technical Estimate
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div style={{ backgroundColor: '#000000', borderTop: '2px solid #FFCF01', padding: '24px 0' }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{ fontSize: '14px', color: '#FFFFFF', fontWeight: '600' }}>
            © {new Date().getFullYear()} <strong style={{ color: '#FFCF01' }}>HITECH Industrial Services</strong>. All Rights Reserved. Built for Industrial Excellence.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <span style={{ fontSize: '13px', color: '#FFCF01', fontWeight: '700' }}>Visakhapatnam, Andhra Pradesh</span>
            <button
              onClick={scrollToTop}
              style={{
                backgroundColor: '#FFCF01',
                color: '#000000',
                border: 'none',
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(255, 207, 1, 0.4)'
              }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link:hover {
          color: #FFCF01 !important;
          transform: translateX(4px);
        }
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
