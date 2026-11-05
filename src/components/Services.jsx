import React, { useState } from 'react';
import {
  Zap,
  Wrench,
  Flame,
  ShieldCheck,
  Droplets,
  Layers,
  Cpu,
  Paintbrush,
  Hammer,
  Pipette,
  Building,
  Factory,
  Cog,
  Headphones,
  Search,
  ArrowRight,
  CheckCircle,
  X
} from 'lucide-react';

export default function Services({ onOpenQuoteModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalService, setActiveModalService] = useState(null);

  const servicesData = [
    {
      id: 'online-leak-sealing',
      title: 'Online Leak Sealing Services',
      category: 'Flagship Service',
      icon: Zap,
      shortDesc: 'Repair high-pressure or high-temperature piping, valve, and flange leaks on-stream WITHOUT shutting down plant operations, saving millions in downtime.',
      fullDesc: 'HITECH Industrial Services specializes in specialized Online Leak Sealing. Our proven on-stream leak sealing technology allows industrial facilities (power plants, refineries, chemical plants, steel mills) to safely repair active leaks in steam lines, high-pressure utility piping, valve gland packing, valve bonnets, flanges, and pipe elbows up to 300 Bar pressure and 600°C temperature—completely eliminating plant shutdown losses.',
      highlights: [
        'Zero Plant Shutdown / Zero Production Loss',
        'Seals Leaks Up to 300 Bar & 600°C Temperature',
        'Custom Engineered Clamp & Compound Injection',
        'Flange, Valve Bonnet & Pipe Elbow Repair'
      ]
    },
    {
      id: 'shutdown',
      title: 'Industrial Shutdown Services',
      category: 'Shutdown & Maintenance',
      icon: Wrench,
      shortDesc: 'Comprehensive turnkey unit shutdowns, boiler overhaul, catalyst changeouts, and emergency turnaround services with zero downtime delays.',
      fullDesc: 'HITECH Industrial Services specializes in planned and emergency turnaround shutdowns for power plants, oil refineries, and steel mills. Our multidisciplinary workforce handles everything from blind-to-blind isolation, vessel internal modifications, heat exchanger retubing, boiler header inspection, and high-pressure steam line restoration.',
      highlights: ['Turnkey Shutdown Management', '24/7 Multi-Shift Execution', 'Vessel & Exchanger Overhauls', 'API & ASME Code Compliance']
    },
    {
      id: 'maintenance',
      title: 'Mechanical Maintenance',
      category: 'Shutdown & Maintenance',
      icon: Cog,
      shortDesc: 'Preventive, predictive, and corrective mechanical maintenance for turbines, pumps, gearboxes, compressors, and heavy rotating equipment.',
      fullDesc: 'We offer specialized mechanical maintenance contracts ensuring maximum equipment availability. Our certified technicians perform laser alignment, dynamic balancing, bearing replacements, seal overhauls, and routine preventive maintenance across critical rotating and static equipment.',
      highlights: ['Rotating Equipment Maintenance', 'Precision Laser Alignment', 'Predictive Vibration Analysis', 'Emergency Breakdown Support']
    },
    {
      id: 'valves',
      title: 'Valves Repairing',
      category: 'Shutdown & Maintenance',
      icon: Cpu,
      shortDesc: 'In-situ and shop overhaul, lapping, testing, and hydro-calibration for safety relief valves, control valves, gate, globe, and check valves.',
      fullDesc: 'Our dedicated valve testing and calibration facility in Visakhapatnam is equipped with high-pressure hydraulic test benches. We overhaul, re-seat, lap, install new trim sets, and hydro-test all classes of control, globe, gate, butterfly, and safety relief valves up to Class 2500.',
      highlights: ['In-Situ & Shop Lapping', 'Hydrostatic & Seat Testing', 'Safety Relief Valve Calibration', 'Control Valve Diagnostics']
    },
    {
      id: 'fire-safety',
      title: 'Fire & Safety Services',
      category: 'Safety & Environmental',
      icon: Flame,
      shortDesc: 'Design, supply, installation, and testing of industrial fire hydrant networks, deluge systems, CO2 flooding, and safety compliance audit.',
      fullDesc: 'We install and maintain enterprise fire protection systems tailored for hazardous industrial plants. Our scope covers fire water ring mains, deluge spray networks for fuel storage tanks, smoke detection systems, portable extinguishers, and safety standby squads.',
      highlights: ['Fire Water Piping Networks', 'Automatic Deluge Systems', 'Safety Attendant Deployment', 'NFPA Standards Adherence']
    },
    {
      id: 'frp',
      title: 'FRP Works',
      category: 'Fabrication & Specialty',
      icon: Layers,
      shortDesc: 'Custom Fiber Reinforced Plastic (FRP/GRP) piping, tank lining, scrubber fabrication, and chemical corrosion resistant ducting.',
      fullDesc: 'HITECH delivers specialized FRP and GRP solutions designed to withstand harsh acids, chlorination, and sea water corrosion in chemical and water treatment plants. We fabricate custom tanks, scrubbers, acid piping, and perform hand layup resin linings.',
      highlights: ['Acid-Resistant FRP Ducting', 'GRP Chemical Storage Tanks', 'Impervious Resin Linings', 'On-Site FRP Lamination']
    },
    {
      id: 'engineering',
      title: 'Engineering Works',
      category: 'Engineering & Erection',
      icon: Cog,
      shortDesc: 'Precision machining, CAD design, structural stress calculations, NDT inspection, and custom industrial component manufacturing.',
      fullDesc: 'Our engineering workshop offers custom machining, reverse engineering of obsolete mechanical spares, finite element stress analysis, and comprehensive Non-Destructive Testing (UT, MPI, DP) to support plant upgrades and structural enhancements.',
      highlights: ['Custom Precision Machining', 'Reverse Engineering Spares', 'NDT & Metallurgical Testing', 'FEA Structural Stress Analysis']
    },
    {
      id: 'water-treatment',
      title: 'All Water Treatment Services',
      category: 'Safety & Environmental',
      icon: Droplets,
      shortDesc: 'Installation & overhauling of RO plants, DM plants, Effluent Treatment Plants (ETP), Sewage Treatment Plants (STP), and cooling towers.',
      fullDesc: 'We provide end-to-end water treatment engineering including Demineralization (DM) plant erection, Reverse Osmosis (RO) membrane servicing, clarifier mechanical repairs, cooling tower basin cleaning, and ETP/STP mechanical piping maintenance.',
      highlights: ['DM & RO Plant Servicing', 'ETP / STP Mechanical Overhauls', 'Cooling Tower Maintenance', 'Sludge Handling Systems']
    },
    {
      id: 'coatings',
      title: 'Industrial Coatings',
      category: 'Fabrication & Specialty',
      icon: Paintbrush,
      shortDesc: 'Grit blasting, anti-corrosive epoxy coatings, polyurethane paints, rubber lining, and thermal spray aluminum coating for structures.',
      fullDesc: 'Protecting steel assets against Vizag marine atmospheric corrosion. We execute high-pressure grit/shot blasting, heavy-duty epoxy coatings, fireproof intumescent paint application, and specialized rubber lining inside chemical tanks and pipe spools.',
      highlights: ['SA 2.5 Abrasive Grit Blasting', 'Heavy-Duty Epoxy Coatings', 'Intumescent Passive Fireproofing', 'Tank & Vessel Rubber Lining']
    },
    {
      id: 'fabrication',
      title: 'Fabrication',
      category: 'Fabrication & Specialty',
      icon: Hammer,
      shortDesc: 'Shop and field fabrication of pressure vessels, heavy structural steel girders, storage tanks, ducting, and custom steel structures.',
      fullDesc: 'Operating state-of-the-art fabrication bays equipped with submerged arc welding (SAW), CNC plasma cutters, and plate rolling machines. We fabricate heavy structural steel frameworks, pressure vessels, hoppers, stacks, and furnace structures to IBR codes.',
      highlights: ['IBR Certified Welders', 'Heavy Structural Steel Framing', 'Pressure Vessel Fabrication', 'CNC Plate Cutting & Rolling']
    },
    {
      id: 'piping',
      title: 'Piping',
      category: 'Fabrication & Specialty',
      icon: Pipette,
      shortDesc: 'High-pressure carbon steel, stainless steel, alloy steel, and HDPE piping pre-fabrication, hydro-testing, and field erection.',
      fullDesc: 'Comprehensive industrial piping contractor for steam, chemical, gas, and water utilities. We handle isometric detailing, spool pre-fabrication, 100% radiographic quality welding, hydro-testing up to 300 bar, and chemical flushing.',
      highlights: ['100% Radiography TIG/SMAW Welding', 'High-Pressure Steam & Gas Lines', 'On-Site Hydrotesting & Flushing', 'IBR Approved Piping Contractors']
    },
    {
      id: 'structural',
      title: 'Structural Works',
      category: 'Engineering & Erection',
      icon: Building,
      shortDesc: 'Heavy industrial structural erection, pipe rack framing, conveyor galleries, shed roofs, platforms, and walkway fabrication.',
      fullDesc: 'Erection of heavy industrial steel buildings, pipe racks, elevated galleries, and maintenance platforms for steel plants, ports, and power stations. We ensure strict bolt torque checks and structural alignment under EHS guidelines.',
      highlights: ['Pipe Rack & Gallery Erection', 'Multi-Story Steel Structures', 'Conveyor System Frameworks', 'Precision Crane Alignment']
    },
    {
      id: 'plant-erection',
      title: 'Plant Erection',
      category: 'Engineering & Erection',
      icon: Factory,
      shortDesc: 'Greenfield and brownfield heavy industrial plant erection, boiler structure alignment, stack rigging, and mechanical integration.',
      fullDesc: 'Turnkey plant erection services deploying heavy tonnage cranes, specialized rigging crews, and master riggers. We erect utility boilers, cement kilns, blast furnace equipment, and chemical reactors from foundation to commissioning.',
      highlights: ['Heavy Lift Rigging & Erection', 'Boiler & Furnace Structures', 'Greenfield Plant Assembly', 'Precision Foundation Grouting']
    },
    {
      id: 'equipment-installation',
      title: 'Equipment Installation',
      category: 'Engineering & Erection',
      icon: Cog,
      shortDesc: 'Setting, leveling, optical alignment, and grouting of heavy machinery, pumps, blowers, crushers, and transformers.',
      fullDesc: 'Precision installation of static and rotating machinery. We manage transport, offloading, foundation preparation, epoxy grouting, optical levelling, and pre-commissioning dry runs for industrial plants.',
      highlights: ['Heavy Machinery Offloading & Rigging', 'Epoxy & Cementitious Grouting', 'Precision Optical Leveling', 'Pre-Commissioning Support']
    },
    {
      id: 'engineering-support',
      title: 'Engineering Support',
      category: 'Engineering & Erection',
      icon: Headphones,
      shortDesc: 'On-site technical manpower deputation, shutdown planning assistance, EHS management, and project control consulting.',
      fullDesc: 'Providing specialized engineering manpower deputation—including certified QA/QC inspectors, safety officers, shutdown planners, pipe fitters, and skilled welders—to support clients during complex project phases.',
      highlights: ['Deputation of Skilled Manpower', 'Safety & QA/QC Officers', 'Shutdown Project Controls', 'On-Call Technical Consulting']
    }
  ];

  const categories = ['All', 'Flagship Service', 'Shutdown & Maintenance', 'Fabrication & Specialty', 'Engineering & Erection', 'Safety & Environmental'];

  const filteredServices = servicesData.filter((service) => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" style={{ backgroundColor: '#FFFFFF', position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px auto' }}>
          <span className="badge-yellow">OUR CORE CAPABILITIES</span>
          <h2 style={{ marginTop: '16px', marginBottom: '20px', color: '#000000' }}>
            Specialized <span className="yellow-underline">Online Leak Sealing</span> & Maintenance Services
          </h2>
          <p style={{ color: '#000000', fontSize: '18px', fontWeight: '600' }}>
            Featuring on-stream online leak sealing without shutting down operations, backed by ISO certified engineering teams.
          </p>
        </div>

        {/* Filter & Search Controls Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          marginBottom: '40px',
          backgroundColor: '#000000',
          padding: '16px 24px',
          borderRadius: '12px',
          border: '3px solid #FFCF01'
        }}>
          {/* Category Filter Pills */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '10px 18px',
                  borderRadius: '6px',
                  border: '2px solid #FFCF01',
                  fontSize: '14px',
                  fontWeight: '800',
                  cursor: 'pointer',
                  backgroundColor: selectedCategory === cat ? '#FFCF01' : '#000000',
                  color: selectedCategory === cat ? '#000000' : '#FFFFFF',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar Input */}
          <div style={{ position: 'relative', width: '280px' }} className="service-search-box">
            <Search size={18} color="#FFCF01" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search leak sealing, piping..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 16px 10px 42px',
                borderRadius: '6px',
                border: '2px solid #FFCF01',
                backgroundColor: '#000000',
                color: '#FFFFFF',
                fontSize: '14px',
                outline: 'none',
                fontFamily: 'inherit'
              }}
            />
          </div>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '28px'
        }} className="services-grid">
          {filteredServices.map((service) => {
            const ServiceIcon = service.icon;
            const isFlagship = service.id === 'online-leak-sealing';
            return (
              <div
                key={service.id}
                className="industrial-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: isFlagship ? '#000000' : '#FFFFFF',
                  color: isFlagship ? '#FFFFFF' : '#000000',
                  border: isFlagship ? '4px solid #FFCF01' : '3px solid #000000',
                  boxShadow: isFlagship ? '0 12px 30px rgba(255,207,1,0.25)' : 'none'
                }}
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
                      borderRadius: '8px',
                      display: 'inline-flex',
                      border: '2px solid #000000'
                    }}>
                      <ServiceIcon size={28} />
                    </div>
                    <span style={{
                      fontSize: '12px',
                      fontWeight: '900',
                      color: isFlagship ? '#000000' : '#FFCF01',
                      backgroundColor: isFlagship ? '#FFCF01' : '#000000',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      letterSpacing: '0.05em'
                    }}>
                      {service.category}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '12px', color: isFlagship ? '#FFFFFF' : '#000000' }}>
                    {service.title}
                  </h3>

                  <p style={{ fontSize: '15px', color: isFlagship ? '#FFFFFF' : '#000000', lineHeight: '1.6', marginBottom: '24px', fontWeight: '500' }}>
                    {service.shortDesc}
                  </p>
                </div>

                <div style={{ borderTop: isFlagship ? '2px solid #FFCF01' : '2px solid #000000', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <button
                    onClick={() => setActiveModalService(service)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: isFlagship ? '#FFCF01' : '#000000',
                      fontSize: '15px',
                      fontWeight: '800',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: 0
                    }}
                  >
                    Learn Details <ArrowRight size={16} color={isFlagship ? '#FFCF01' : '#000000'} />
                  </button>

                  <button
                    onClick={onOpenQuoteModal}
                    className="btn-primary"
                    style={{
                      padding: '8px 16px',
                      fontSize: '13px'
                    }}
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px', backgroundColor: '#000000', color: '#FFFFFF', borderRadius: '12px', border: '3px solid #FFCF01' }}>
            <h3 style={{ color: '#FFFFFF' }}>No services found matching "{searchQuery}"</h3>
            <p style={{ marginTop: '8px', color: '#FFCF01' }}>Try searching for "Online Leak Sealing" or view all services.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="btn-primary"
              style={{ marginTop: '20px' }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Service Detail Modal Popover */}
      {activeModalService && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.85)',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px'
        }}>
          <div style={{
            backgroundColor: '#000000',
            color: '#FFFFFF',
            borderRadius: '16px',
            maxWidth: '680px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '36px',
            position: 'relative',
            boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
            borderTop: '6px solid #FFCF01',
            borderLeft: '2px solid #FFCF01',
            borderRight: '2px solid #FFCF01',
            borderBottom: '2px solid #FFCF01'
          }}>
            <button
              onClick={() => setActiveModalService(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#FFCF01',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={22} color="#000000" />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div style={{
                backgroundColor: '#FFCF01',
                padding: '16px',
                borderRadius: '10px',
                color: '#000000'
              }}>
                {React.createElement(activeModalService.icon, { size: 36 })}
              </div>
              <div>
                <span className="badge-yellow">{activeModalService.category}</span>
                <h3 style={{ fontSize: '28px', marginTop: '6px', color: '#FFFFFF' }}>{activeModalService.title}</h3>
              </div>
            </div>

            <p style={{ fontSize: '17px', color: '#FFFFFF', lineHeight: '1.65', marginBottom: '24px' }}>
              {activeModalService.fullDesc}
            </p>

            <h4 style={{ fontSize: '18px', marginBottom: '14px', borderBottom: '2px solid #FFCF01', paddingBottom: '8px', color: '#FFCF01' }}>
              Key Operational Capabilities:
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '32px' }}>
              {activeModalService.highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', fontWeight: '700', color: '#FFFFFF' }}>
                  <CheckCircle size={18} color="#FFCF01" /> {h}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '16px', borderTop: '2px solid #FFCF01', paddingTop: '20px' }}>
              <button
                onClick={() => {
                  setActiveModalService(null);
                  onOpenQuoteModal();
                }}
                className="btn-primary"
                style={{ flex: 1 }}
              >
                Request Quote For This Service
              </button>
              <button
                onClick={() => setActiveModalService(null)}
                className="btn-outline-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .service-search-box {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
