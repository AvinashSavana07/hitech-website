import React from 'react';
import { Award, ShieldCheck, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export default function WhyChooseUs({ onOpenQuoteModal }) {
  const pillars = [
    {
      title: 'Engineering Expertise',
      icon: Award,
      subtitle: 'Certified Technical Leadership',
      desc: 'Our team comprises certified mechanical engineers, IBR welders, ASNT Level II NDT inspectors, and master riggers backed by 15+ years of specialized industrial experience.',
      points: [
        'IBR Approved Piping Welders',
        'ASNT Level II NDT Technicians',
        'Laser Alignment & Dynamic Balancing',
        'API 510/570 Code Standard Knowledge'
      ]
    },
    {
      title: 'Safety First',
      icon: ShieldCheck,
      subtitle: 'Zero Harm Operating Policy',
      desc: 'Safety is non-negotiable. We maintain a zero-incident culture supported by strict Tool Box Talks (TBT), permit-to-work compliance, gas monitoring, and mandatory PPE.',
      points: [
        'Zero Lost Time Injury (LTI) Record',
        'Daily Pre-Shift Tool Box Talks',
        'Confined Space Gas Monitoring',
        'ISO 45001 EHS Compliance'
      ]
    },
    {
      title: 'Reliable Execution',
      icon: CheckCircle2,
      subtitle: 'Turnkey Accountability',
      desc: 'From initial site survey to hydro-testing and pre-commissioning handover, HITECH takes complete end-to-end accountability for mechanical integrity.',
      points: [
        '24/7 Rapid Emergency Response',
        'In-House Calibrated Heavy Equipment',
        'Strict Material Traceability',
        'Comprehensive Quality Dossiers'
      ]
    },
    {
      title: 'On-Time Delivery',
      icon: Clock,
      subtitle: 'Guaranteed Downtime Minimization',
      desc: 'Plant shutdowns carry millions in hourly operational risk. We deploy multi-shift parallel workflows to guarantee critical path turnaround completion ahead of schedule.',
      points: [
        'Critical Path Primavera/MS Project Tracking',
        'Multi-Shift Parallel Task Execution',
        'Zero Schedule Overrun Record',
        'Rapid Mobilization Within 24 Hours'
      ]
    }
  ];

  return (
    <section style={{ backgroundColor: '#F5F5F5', position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' }}>
          <span className="badge-yellow">THE HITECH ADVANTAGE</span>
          <h2 style={{ marginTop: '16px', marginBottom: '20px' }}>
            Why Leading Industrial Giants <span className="yellow-underline">Trust HITECH</span>
          </h2>
          <p style={{ color: '#4B5563', fontSize: '18px' }}>
            Built on unyielding commitments to engineering precision, zero-incident safety protocols, and fast turnaround mobilization across Andhra Pradesh & India.
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px'
        }} className="why-us-grid">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="industrial-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{
                    backgroundColor: '#FFCF01',
                    color: '#000000',
                    width: '60px',
                    height: '60px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    boxShadow: '0 4px 14px rgba(255, 207, 1, 0.4)'
                  }}>
                    <Icon size={32} />
                  </div>

                  <span style={{ fontSize: '13px', fontWeight: '800', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {pillar.subtitle}
                  </span>

                  <h3 style={{ fontSize: '26px', fontWeight: '800', marginTop: '6px', marginBottom: '16px', color: '#000000' }}>
                    {pillar.title}
                  </h3>

                  <p style={{ color: '#4B5563', fontSize: '15px', lineHeight: '1.65', marginBottom: '24px' }}>
                    {pillar.desc}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px', borderTop: '1px solid #F5F5F5', paddingTop: '16px' }}>
                    {pillar.points.map((pt, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '700', color: '#111827' }}>
                        <CheckCircle2 size={16} color="#FFCF01" /> {pt}
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenQuoteModal}
                  style={{
                    backgroundColor: '#000000',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '14px',
                    fontWeight: '700',
                    fontSize: '14px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Partner With Us <ArrowRight size={16} color="#FFCF01" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
