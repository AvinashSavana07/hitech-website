import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Wrench, Building2, CheckCircle2, Zap } from 'lucide-react';

export default function Hero({ onOpenQuoteModal }) {
  const [counts, setCounts] = useState({ projects: 0, industries: 0, safety: 0 });

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts({
        projects: Math.min(500, Math.floor(500 * progress)),
        industries: Math.min(15, Math.floor(15 * progress)),
        safety: Math.min(100, Math.floor(100 * progress))
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#000000', width: '100%' }}>
      {/* Background Image Container */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url('/hero_engineer.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        opacity: 0.35,
        filter: 'contrast(1.2)'
      }} />

      {/* Solid Black Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#000000',
        opacity: 0.7
      }} />

      {/* Main Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '70px 20px 50px 20px',
        color: '#FFFFFF'
      }} className="hero-content-box">
        <div style={{ maxWidth: '840px' }}>
          {/* Flagship Service Status Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#FFCF01',
            color: '#000000',
            fontWeight: '900',
            fontSize: '12px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '6px 14px',
            borderRadius: '4px',
            marginBottom: '24px',
            border: '2px solid #000000'
          }} className="hero-badge">
            <Zap size={16} />
            <span>ONLINE LEAK SEALING • REPAIR WITHOUT SHUTTING DOWN</span>
          </div>

          {/* Headline featuring Online Leak Sealing */}
          <h1 style={{
            color: '#FFFFFF',
            fontSize: '56px',
            fontWeight: '900',
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            marginBottom: '20px'
          }} className="hero-h1">
            Specialized <span style={{ color: '#FFCF01' }}>Online Leak Sealing</span> & Turnaround Services
          </h1>

          {/* Core Flagship Description */}
          <p style={{
            fontSize: '19px',
            lineHeight: '1.5',
            color: '#FFFFFF',
            fontWeight: '600',
            marginBottom: '32px',
            maxWidth: '720px'
          }} className="hero-p">
            Repair high-pressure, high-temperature piping, valve, and flange leaks on-stream <strong>without shutting down operations</strong>. Plus turnkey shutdown services, mechanical maintenance, and fabrication.
          </p>

          {/* Action CTAs */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '40px'
          }} className="hero-cta-box">
            <button
              onClick={onOpenQuoteModal}
              className="btn-primary"
              style={{ fontSize: '16px', padding: '16px 36px' }}
            >
              Request Emergency Leak Sealing <ArrowRight size={18} />
            </button>
            <a
              href="#services"
              className="btn-outline-white"
              style={{ fontSize: '16px', padding: '16px 36px' }}
            >
              Explore Services
            </a>
          </div>

          {/* Visual Feature Tags Bar */}
          <div style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            paddingTop: '20px',
            borderTop: '2px solid #FFCF01'
          }}>
            {['Zero Plant Shutdown', 'Up to 300 Bar & 600°C Leak Repair', 'Encrypted Secure Data Submission'].map((tag) => (
              <span key={tag} style={{
                backgroundColor: '#000000',
                border: '2px solid #FFCF01',
                padding: '6px 14px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: '800',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <CheckCircle2 size={14} color="#FFCF01" /> {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        backgroundColor: '#FFFFFF',
        borderTop: '4px solid #FFCF01',
        borderBottom: '4px solid #000000'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '28px 20px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px'
        }} className="hero-stats-grid">
          {/* Stat 1 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '6px' }} className="border-right-stat">
            <div style={{
              backgroundColor: '#FFCF01',
              color: '#000000',
              padding: '12px',
              borderRadius: '8px',
              border: '2px solid #000000',
              flexShrink: 0
            }}>
              <Zap size={24} />
            </div>
            <div>
              <div style={{ fontSize: '28px', fontWeight: '900', color: '#000000', lineHeight: '1' }}>
                On-Stream
              </div>
              <div style={{ fontSize: '12px', fontWeight: '800', color: '#000000', marginTop: '4px', textTransform: 'uppercase' }}>
                Leak Sealing (No Shutdown)
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '6px' }} className="border-right-stat">
            <div style={{
              backgroundColor: '#FFCF01',
              color: '#000000',
              padding: '12px',
              borderRadius: '8px',
              border: '2px solid #000000',
              flexShrink: 0
            }}>
              <Wrench size={24} />
            </div>
            <div>
              <div style={{ fontSize: '28px', fontWeight: '900', color: '#000000', lineHeight: '1' }}>
                500+
              </div>
              <div style={{ fontSize: '12px', fontWeight: '800', color: '#000000', marginTop: '4px', textTransform: 'uppercase' }}>
                Projects Completed
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '6px' }} className="border-right-stat">
            <div style={{
              backgroundColor: '#FFCF01',
              color: '#000000',
              padding: '12px',
              borderRadius: '8px',
              border: '2px solid #000000',
              flexShrink: 0
            }}>
              <Building2 size={24} />
            </div>
            <div>
              <div style={{ fontSize: '28px', fontWeight: '900', color: '#000000', lineHeight: '1' }}>
                15+
              </div>
              <div style={{ fontSize: '12px', fontWeight: '800', color: '#000000', marginTop: '4px', textTransform: 'uppercase' }}>
                Sectors Served
              </div>
            </div>
          </div>

          {/* Stat 4 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '6px' }}>
            <div style={{
              backgroundColor: '#FFCF01',
              color: '#000000',
              padding: '12px',
              borderRadius: '8px',
              border: '2px solid #000000',
              flexShrink: 0
            }}>
              <ShieldCheck size={24} />
            </div>
            <div>
              <div style={{ fontSize: '28px', fontWeight: '900', color: '#000000', lineHeight: '1' }}>
                100%
              </div>
              <div style={{ fontSize: '12px', fontWeight: '800', color: '#000000', marginTop: '4px', textTransform: 'uppercase' }}>
                Safety Record
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 769px) {
          .border-right-stat {
            border-right: 2px solid #000000;
          }
        }
        @media (max-width: 768px) {
          .hero-content-box {
            padding: 40px 16px 28px 16px !important;
          }
          .hero-h1 {
            font-size: 32px !important;
          }
          .hero-p {
            font-size: 15px !important;
          }
          .hero-cta-box button, .hero-cta-box a {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
