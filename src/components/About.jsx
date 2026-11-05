import React, { useState } from 'react';
import { Target, Eye, ShieldCheck, Award, CheckCircle, ArrowRight, Wrench, HardHat, Compass } from 'lucide-react';

export default function About({ onOpenQuoteModal }) {
  const [activeTab, setActiveTab] = useState('overview');

  const highlightGrid = [
    { title: 'ISO 9001:2015 Accredited', desc: 'International Quality Certified' },
    { title: 'IBR & ASME Certified Squads', desc: 'Expert Welders & Fitters' },
    { title: 'Zero Harm EHS Protocol', desc: 'Strict Safety Compliance' },
    { title: '24/7 Rapid Response Desk', desc: 'Emergency Shutdown Support' }
  ];

  return (
    <section id="about" style={{ backgroundColor: '#FFFFFF', position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-yellow">ABOUT HITECH</span>
          <h2 style={{ marginTop: '16px', color: '#000000' }}>
            Empowering India's Heavy Industries Through <span className="yellow-underline">Precision Engineering</span>
          </h2>
        </div>

        {/* Tab Controls */}
        <div style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '36px',
          borderBottom: '3px solid #000000',
          overflowX: 'auto',
          paddingBottom: '8px'
        }}>
          {[
            { id: 'overview', label: 'Company Overview', icon: Compass },
            { id: 'mission', label: 'Our Mission', icon: Target },
            { id: 'vision', label: 'Our Vision', icon: Eye },
            { id: 'values', label: 'Core Values', icon: ShieldCheck }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  fontSize: '15px',
                  fontWeight: '800',
                  color: isActive ? '#000000' : '#FFFFFF',
                  backgroundColor: isActive ? '#FFCF01' : '#000000',
                  border: '2px solid #000000',
                  borderRadius: '6px 6px 0 0',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                <Icon size={18} color={isActive ? '#000000' : '#FFCF01'} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Split Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'center'
        }} className="about-grid">
          {/* Left Column: Engineer Photo */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
              border: '4px solid #000000',
              position: 'relative'
            }}>
              <img
                src="/about_engineer.jpg"
                alt="HITECH Industrial Engineer"
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                backgroundColor: '#000000',
                padding: '18px 24px',
                color: '#FFFFFF',
                borderTop: '3px solid #FFCF01',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <span style={{ fontSize: '12px', fontWeight: '800', color: '#FFCF01', textTransform: 'uppercase' }}>
                    Visakhapatnam Hub
                  </span>
                  <div style={{ fontSize: '18px', fontWeight: '800', color: '#FFFFFF' }}>
                    Steel, Power & Refinery Support
                  </div>
                </div>
                <div style={{ backgroundColor: '#FFCF01', color: '#000000', padding: '8px 14px', borderRadius: '6px', fontWeight: '900', fontSize: '18px' }}>
                  15+ Yrs
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Punchy Visual Content */}
          <div>
            {activeTab === 'overview' && (
              <div>
                <h3 style={{ marginBottom: '14px', color: '#000000', fontSize: '30px' }}>
                  Industrial Reliability & Maintenance Leaders
                </h3>
                <p style={{ marginBottom: '24px', color: '#000000', fontSize: '17px', lineHeight: '1.6' }}>
                  Based in <strong>Kurmannapalem, Visakhapatnam</strong>, HITECH Industrial Services executes critical unit shutdowns, mechanical repairs, valve testing, and structural piping for India’s largest industrial facilities.
                </p>

                {/* Visual Highlight Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '28px' }}>
                  {highlightGrid.map((h, i) => (
                    <div key={i} style={{
                      backgroundColor: '#000000',
                      color: '#FFFFFF',
                      padding: '14px 16px',
                      borderRadius: '8px',
                      border: '2px solid #FFCF01',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      <CheckCircle size={20} color="#FFCF01" style={{ flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: '800', color: '#FFFFFF', lineHeight: '1.2' }}>{h.title}</div>
                        <div style={{ fontSize: '11px', fontWeight: '700', color: '#FFCF01', marginTop: '2px' }}>{h.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <button onClick={onOpenQuoteModal} className="btn-primary">
                  Consult With Our Engineers <ArrowRight size={18} />
                </button>
              </div>
            )}

            {activeTab === 'mission' && (
              <div>
                <div style={{
                  backgroundColor: '#000000',
                  color: '#FFFFFF',
                  padding: '24px',
                  borderRadius: '12px',
                  borderLeft: '8px solid #FFCF01',
                  marginBottom: '20px'
                }}>
                  <span className="badge-yellow" style={{ marginBottom: '8px' }}>OUR MISSION</span>
                  <p style={{ fontSize: '20px', fontWeight: '800', color: '#FFFFFF', lineHeight: '1.4' }}>
                    "To empower industrial plants with zero-downtime mechanical maintenance and structural piping executed under strict safety standards."
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'vision' && (
              <div>
                <div style={{
                  backgroundColor: '#000000',
                  color: '#FFFFFF',
                  padding: '24px',
                  borderRadius: '12px',
                  borderLeft: '8px solid #FFCF01',
                  marginBottom: '20px'
                }}>
                  <span className="badge-yellow" style={{ marginBottom: '8px' }}>OUR VISION</span>
                  <p style={{ fontSize: '20px', fontWeight: '800', color: '#FFFFFF', lineHeight: '1.4' }}>
                    "To be India's most trusted, safety-driven industrial engineering partner for complex heavy plant turnarounds."
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                {[
                  { title: 'Engineering Precision', desc: 'API & ASME tolerances', icon: Wrench },
                  { title: 'Safety First', desc: 'Zero Harm EHS compliance', icon: ShieldCheck },
                  { title: 'On-Time Delivery', desc: '24/7 multi-shift speed', icon: Award },
                  { title: 'Certified Expertise', desc: 'IBR welders & fitters', icon: HardHat }
                ].map((val) => {
                  const ValIcon = val.icon;
                  return (
                    <div key={val.title} style={{
                      backgroundColor: '#000000',
                      color: '#FFFFFF',
                      padding: '16px',
                      borderRadius: '10px',
                      border: '2px solid #FFCF01'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                        <ValIcon size={20} color="#FFCF01" />
                        <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#FFFFFF' }}>{val.title}</h4>
                      </div>
                      <p style={{ fontSize: '13px', color: '#FFCF01', fontWeight: '700' }}>{val.desc}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
