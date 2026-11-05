import React, { useState } from 'react';
import { MapPin, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Projects({ onOpenQuoteModal }) {
  const [filterCategory, setFilterCategory] = useState('All');

  // Minimalist Project Showcase - NO specific company/client names mentioned
  const projectsList = [
    {
      id: 1,
      title: 'Heavy Structural Steel Fabrication & High-Pressure Piping',
      category: 'Structural & Piping',
      location: 'Visakhapatnam, Andhra Pradesh',
      duration: '45 Days Schedule',
      image: '/fabrication_engineer.jpg',
      type: 'Structural Fabrication & Spool Piping',
      desc: 'Pre-fabrication and field installation of 1,400 MT heavy structural steel framing, steam spool pre-fabrication, 100% radiographic inspection, and industrial gas line overhauls.',
      metrics: ['1,400 MT Steel Fabricated', '100% Radiography Passed', 'Zero Safety Incidents']
    },
    {
      id: 2,
      title: 'Refinery Process Unit Shutdown & Control Valves Overhaul',
      category: 'Shutdown Maintenance',
      location: 'Visakhapatnam Industrial Belt, AP',
      duration: '21 Days Turnaround',
      image: '/valves_work.jpg',
      type: 'Turnkey Unit Shutdown & Valve Testing',
      desc: 'In-situ repair and hydrostatic calibration of 380+ control and safety relief valves up to Class 2500, heat exchanger bundle servicing, and high-pressure joint torqueing under strict HSE protocols.',
      metrics: ['380+ Valves Hydro-Tested', '24/7 Shift Execution', 'Zero Downtime Delays']
    },
    {
      id: 3,
      title: 'Thermal Power Station Boiler Erection & Piping Integration',
      category: 'Erection & Power',
      location: 'Visakhapatnam Coastal Sector, AP',
      duration: '6 Months Integration',
      image: '/erection_work.jpg',
      type: 'Boiler Structure Erection & Piping',
      desc: 'Mechanical erection of boiler pressure parts, high-temperature alloy steam headers, precipitator ducting, and installation of water treatment demineralization plant piping.',
      metrics: ['500 MW Unit Integration', 'High-Pressure Steam Headers', 'ISO Accredited Execution']
    },
    {
      id: 4,
      title: 'Pharma Infrastructure Water Treatment & FRP Acid Piping',
      category: 'Water & FRP Works',
      location: 'Parawada Industrial Park, AP',
      duration: '3 Months Turnkey',
      image: '/maintenance_engineer.jpg',
      type: 'Water Treatment & FRP Piping',
      desc: 'Engineering, lamination, and chemical resin lining of acid storage vessels, high-purity USP water distribution piping, and installation of Effluent Treatment Plant (ETP) clarifiers.',
      metrics: ['Sanitary Grade Fitting', 'FRP Chemical Tank Lining', 'USP Water Standard Compliance']
    }
  ];

  const projectCategories = ['All', 'Shutdown Maintenance', 'Structural & Piping', 'Erection & Power', 'Water & FRP Works'];

  const filteredProjects = filterCategory === 'All'
    ? projectsList
    : projectsList.filter(p => p.category === filterCategory);

  return (
    <section id="projects" style={{ backgroundColor: '#FFFFFF', position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <span className="badge-yellow">PROVEN TRACK RECORD</span>
            <h2 style={{ marginTop: '16px', color: '#000000' }}>
              Featured <span className="yellow-underline">Engineering Projects</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                style={{
                  padding: '10px 18px',
                  borderRadius: '6px',
                  border: '2px solid #000000',
                  fontSize: '14px',
                  fontWeight: '800',
                  cursor: 'pointer',
                  backgroundColor: filterCategory === cat ? '#000000' : '#FFFFFF',
                  color: filterCategory === cat ? '#FFCF01' : '#000000',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Minimal Showcase Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              style={{
                backgroundColor: '#FFFFFF',
                border: '3px solid #000000',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                display: 'grid',
                gridTemplateColumns: idx % 2 === 0 ? '1.1fr 1fr' : '1fr 1.1fr',
                transition: 'all 0.3s ease'
              }}
              className="project-showcase-card"
            >
              {/* Image Side */}
              <div style={{
                position: 'relative',
                minHeight: '320px',
                order: idx % 2 === 0 ? 1 : 2
              }} className="project-img-container">
                <img
                  src={project.image}
                  alt={`${project.title} - HITECH Industrial Engineering`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  backgroundColor: '#000000',
                  color: '#FFCF01',
                  padding: '6px 14px',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  border: '1px solid #FFCF01'
                }}>
                  {project.type}
                </div>
              </div>

              {/* Content Side */}
              <div style={{
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                order: idx % 2 === 0 ? 2 : 1
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px', flexWrap: 'wrap' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: '800', color: '#000000' }}>
                      <MapPin size={16} color="#000000" /> {project.location}
                    </span>
                    <span style={{ color: '#FFCF01' }}>•</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: '800', color: '#000000' }}>
                      <Calendar size={16} color="#000000" /> {project.duration}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '26px', fontWeight: '900', marginBottom: '14px', color: '#000000', lineHeight: '1.2' }}>
                    {project.title}
                  </h3>

                  <p style={{ color: '#000000', fontSize: '15px', lineHeight: '1.6', marginBottom: '20px' }}>
                    {project.desc}
                  </p>

                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '24px' }}>
                    {project.metrics.map((m, i) => (
                      <span
                        key={i}
                        style={{
                          backgroundColor: '#000000',
                          border: '2px solid #FFCF01',
                          padding: '6px 12px',
                          borderRadius: '6px',
                          fontSize: '12px',
                          fontWeight: '800',
                          color: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <CheckCircle2 size={14} color="#FFCF01" /> {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', borderTop: '2px solid #000000', paddingTop: '16px' }}>
                  <button
                    onClick={onOpenQuoteModal}
                    className="btn-primary"
                    style={{ padding: '12px 24px', fontSize: '14px' }}
                  >
                    Request Similar Scope <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .project-showcase-card {
            grid-template-columns: 1fr !important;
          }
          .project-img-container {
            order: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
