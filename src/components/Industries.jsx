import React from 'react';
import { Zap, ShieldAlert, Fuel, Atom, HardHat, Factory, Utensils, Pill, ArrowUpRight } from 'lucide-react';

export default function Industries({ onOpenQuoteModal }) {
  const industriesList = [
    {
      title: 'Power Plants',
      icon: Zap,
      desc: 'Thermal, hydel, and captive power plant boiler overhauls, high-pressure steam piping, turbine mechanical maintenance, and condenser retubing.',
      projectsCount: '120+ Turnarounds'
    },
    {
      title: 'Steel Plants',
      icon: HardHat,
      desc: 'Blast furnace structural repairs, rolling mill maintenance, oxygen plant piping, slag handling equipment overhauls, and continuous casting repairs.',
      projectsCount: '95+ Heavy Projects'
    },
    {
      title: 'Refineries',
      icon: Fuel,
      desc: 'Catalytic cracker shutdown maintenance, high-pressure hydrogen unit piping, heat exchanger bundles, and API tank valve overhaul.',
      projectsCount: '80+ Major Turnarounds'
    },
    {
      title: 'Petrochemical Plants',
      icon: Atom,
      desc: 'Polymer reactor piping, chemical distillation column internal modifications, acid-resistant FRP ducting, and safety valve hydro-calibration.',
      projectsCount: '65+ Specialist Contracts'
    },
    {
      title: 'Cement Plants',
      icon: Factory,
      desc: 'Kiln mechanical maintenance, raw mill liner replacements, baghouse structural fabrication, and heavy drive gearbox alignments.',
      projectsCount: '45+ Plant Overhauls'
    },
    {
      title: 'Manufacturing Industries',
      icon: ShieldAlert,
      desc: 'Heavy machinery foundation grouting, utility water treatment plants, crane rail alignment, and automated conveyor system structural works.',
      projectsCount: '110+ Industrial Sites'
    },
    {
      title: 'Food Processing',
      icon: Utensils,
      desc: 'Sanitary SS 316L orbital welding, CIP utility piping, steam line insulation, and water demineralization plant servicing under strict hygiene standards.',
      projectsCount: '35+ Sanitary Projects'
    },
    {
      title: 'Pharmaceutical Industries',
      icon: Pill,
      desc: 'High-purity USP water piping, FRP acid containment tanks, HVAC structural supports, and cleanroom utility erection in Vizag Pharma City hub.',
      projectsCount: '50+ API & Formulation Plants'
    }
  ];

  return (
    <section id="industries" style={{ backgroundColor: '#000000', color: '#FFFFFF', position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-yellow">CORE SECTORS</span>
          <h2 style={{ color: '#FFFFFF', marginTop: '16px' }}>
            Tailored Engineering Solutions for <span style={{ color: '#FFCF01' }}>Critical Sectors</span>
          </h2>
          <p style={{ color: '#FFFFFF', fontSize: '18px', marginTop: '12px', maxWidth: '720px' }}>
            HITECH Industrial Services deploys sector-specific engineering squads certified in process safety, plant safety codes, and extreme industrial environment execution.
          </p>
        </div>

        {/* 8 Sector Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px'
        }} className="industries-grid">
          {industriesList.map((ind) => {
            const IndIcon = ind.icon;
            return (
              <div
                key={ind.title}
                style={{
                  backgroundColor: '#000000',
                  border: '3px solid #FFCF01',
                  borderRadius: '12px',
                  padding: '32px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                className="industry-card"
              >
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '20px'
                  }}>
                    <div style={{
                      backgroundColor: '#FFCF01',
                      color: '#000000',
                      padding: '14px',
                      borderRadius: '10px',
                      display: 'inline-flex',
                      border: '2px solid #000000'
                    }}>
                      <IndIcon size={28} />
                    </div>
                    <span style={{
                      fontSize: '12px',
                      fontWeight: '800',
                      color: '#000000',
                      backgroundColor: '#FFCF01',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      border: '1px solid #000000'
                    }}>
                      {ind.projectsCount}
                    </span>
                  </div>

                  <h3 style={{ color: '#FFFFFF', fontSize: '22px', fontWeight: '800', marginBottom: '12px' }}>
                    {ind.title}
                  </h3>

                  <p style={{ color: '#FFFFFF', fontSize: '15px', lineHeight: '1.6', marginBottom: '24px' }}>
                    {ind.desc}
                  </p>
                </div>

                <button
                  onClick={onOpenQuoteModal}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#FFCF01',
                    fontSize: '14px',
                    fontWeight: '800',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                    padding: 0,
                    textAlign: 'left'
                  }}
                >
                  Discuss Industry Scope <ArrowUpRight size={16} color="#FFCF01" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .industry-card:hover {
          transform: translateY(-6px);
          background-color: #000000 !important;
          box-shadow: 0 12px 30px rgba(255, 207, 1, 0.3) !important;
        }
      `}</style>
    </section>
  );
}
