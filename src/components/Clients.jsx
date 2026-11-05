import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function Clients() {
  // Official client logos requested by user including APGENCO
  const clientLogos = [
    { name: 'APGENCO', fullName: 'Andhra Pradesh Power Generation Corp.', sector: 'State Power Generation', logo: '/apgenco_logo.png' },
    { name: 'NTPC', fullName: 'NTPC Limited', sector: 'Power Sector Giant', logo: '/ntpc_logo.png' },
    { name: 'HPCL', fullName: 'Hindustan Petroleum Corp.', sector: 'Refinery & Petrochemicals', logo: '/hpcl_logo.png' },
    { name: 'Pfizer', fullName: 'Pfizer Healthcare India', sector: 'Pharmaceuticals Leader', logo: '/pfizer_logo.png' },
    { name: 'NMDC', fullName: 'NMDC Limited', sector: 'Mining & Steel Production', logo: '/nmdc_logo.png' },
  ];

  // Repeat items for seamless, rich infinite ticker loop
  const carouselItems = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section id="clients" style={{ backgroundColor: '#FFFFFF', padding: '80px 0', overflow: 'hidden', borderTop: '3px solid #000000', borderBottom: '3px solid #000000' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto 40px auto', padding: '0 24px', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <ShieldCheck size={20} color="#000000" />
          <span className="badge-yellow">
            TRUST & CREDIBILITY
          </span>
        </div>
        <h2 style={{ fontSize: '38px', fontWeight: '900', color: '#000000', marginTop: '12px' }}>
          Trusted Partner to India’s Premier Industrial Leaders
        </h2>
      </div>

      {/* Infinite Horizontal Logo Ticker */}
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        {/* Edge Gradients */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '120px',
          height: '100%',
          background: 'linear-gradient(to right, #FFFFFF, transparent)',
          zIndex: 2,
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '120px',
          height: '100%',
          background: 'linear-gradient(to left, #FFFFFF, transparent)',
          zIndex: 2,
          pointerEvents: 'none'
        }} />

        <div className="infinite-scroll-track" style={{ gap: '28px', padding: '16px 0' }}>
          {carouselItems.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              style={{
                backgroundColor: '#FFFFFF',
                border: '3px solid #000000',
                borderRadius: '12px',
                padding: '16px 28px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                minWidth: '260px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
              }}
              className="client-logo-badge"
            >
              {/* Official Image Logo */}
              <div style={{
                backgroundColor: '#FFFFFF',
                width: '68px',
                height: '68px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px',
                border: '2px solid #000000',
                flexShrink: 0
              }}>
                <img
                  src={client.logo}
                  alt={`${client.fullName} Official Logo - HITECH Client`}
                  style={{
                    maxHeight: '100%',
                    maxWidth: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>

              <div>
                <div style={{ fontSize: '20px', fontWeight: '900', color: '#000000', lineHeight: '1.2' }}>
                  {client.name}
                </div>
                <div style={{ fontSize: '12px', fontWeight: '800', color: '#000000', marginTop: '2px' }}>
                  {client.sector}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .client-logo-badge:hover {
          background-color: #000000 !important;
          border-color: #FFCF01 !important;
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25) !important;
        }
        .client-logo-badge:hover div {
          color: #FFFFFF !important;
        }
      `}</style>
    </section>
  );
}
