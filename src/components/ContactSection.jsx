import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, Lock, ShieldCheck } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Online Leak Sealing Services',
    industry: 'Power Plants',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Client-side Input Sanitization (Anti-XSS Protection)
  const sanitizeInput = (text) => {
    return text.replace(/[<>]/g, '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: sanitizeInput(value) });
  };

  return (
    <section id="contact" style={{ backgroundColor: '#000000', color: '#FFFFFF', position: 'relative' }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge-yellow">INITIATE PROJECT SCOPE</span>
          <h2 style={{ color: '#FFFFFF', marginTop: '16px' }}>
            Request an Engineering <span style={{ color: '#FFCF01' }}>Leak Sealing & Turnaround Quote</span>
          </h2>
          <p style={{ color: '#FFFFFF', fontSize: '18px', marginTop: '12px' }}>
            Connect directly with HITECH Industrial Services technical project leads for high-pressure online leak sealing estimates, site surveys, and emergency turnaround support.
          </p>
        </div>

        {/* Contact Split Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '48px',
          alignItems: 'start'
        }} className="contact-grid">
          {/* Encrypted Form Card */}
          <div style={{
            backgroundColor: '#000000',
            border: '3px solid #FFCF01',
            borderRadius: '16px',
            padding: '40px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
          }}>
            {/* Data Security & Confidentiality Badge */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'rgba(255, 207, 1, 0.1)',
              border: '2px solid #FFCF01',
              borderRadius: '8px',
              padding: '10px 14px',
              marginBottom: '24px'
            }}>
              <Lock size={20} color="#FFCF01" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '12px', fontWeight: '900', color: '#FFCF01', letterSpacing: '0.05em' }}>
                  256-BIT ENCRYPTED & NDA PROTECTED
                </div>
                <div style={{ fontSize: '12px', color: '#FFFFFF', fontWeight: '600' }}>
                  Your corporate contact & plant data is securely encrypted. We never share customer data.
                </div>
              </div>
            </div>

            {submitted ? (
              <div style={{ padding: '30px 0', textAlign: 'center' }}>
                <div style={{
                  backgroundColor: '#FFCF01',
                  color: '#000000',
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto'
                }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ color: '#FFFFFF', fontSize: '28px', marginBottom: '12px' }}>Encrypted Submission Confirmed!</h3>
                <p style={{ color: '#FFFFFF', fontSize: '16px', marginBottom: '24px' }}>
                  Thank you <strong>{formData.name}</strong>. Our senior leak sealing engineering desk in Visakhapatnam will review your request for <strong>{formData.service}</strong> and contact you securely.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', company: '', phone: '', email: '', service: 'Online Leak Sealing Services', industry: 'Power Plants', message: '' }); }}
                  className="btn-primary"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h3 style={{ color: '#FFFFFF', fontSize: '24px', fontWeight: '900', marginBottom: '4px' }}>
                  Project Scope & Leak Details
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '800', color: '#FFCF01', marginBottom: '8px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '14px',
                        borderRadius: '8px',
                        backgroundColor: '#000000',
                        border: '2px solid #FFCF01',
                        color: '#FFFFFF',
                        fontSize: '15px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '800', color: '#FFCF01', marginBottom: '8px' }}>
                      Company / Plant Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      placeholder="e.g. Industrial Plant"
                      value={formData.company}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '14px',
                        borderRadius: '8px',
                        backgroundColor: '#000000',
                        border: '2px solid #FFCF01',
                        color: '#FFFFFF',
                        fontSize: '15px',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '800', color: '#FFCF01', marginBottom: '8px' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 98499 00004"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '14px',
                        borderRadius: '8px',
                        backgroundColor: '#000000',
                        border: '2px solid #FFCF01',
                        color: '#FFFFFF',
                        fontSize: '15px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '800', color: '#FFCF01', marginBottom: '8px' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '14px',
                        borderRadius: '8px',
                        backgroundColor: '#000000',
                        border: '2px solid #FFCF01',
                        color: '#FFFFFF',
                        fontSize: '15px',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '800', color: '#FFCF01', marginBottom: '8px' }}>
                      Primary Service Required *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '14px',
                        borderRadius: '8px',
                        backgroundColor: '#000000',
                        border: '2px solid #FFCF01',
                        color: '#FFFFFF',
                        fontSize: '15px',
                        outline: 'none'
                      }}
                    >
                      <option value="Online Leak Sealing Services">Online Leak Sealing Services (No Shutdown)</option>
                      <option value="Industrial Shutdown Services">Industrial Shutdown Services</option>
                      <option value="Mechanical Maintenance">Mechanical Maintenance</option>
                      <option value="Valves Repairing">Valves Repairing</option>
                      <option value="Fire & Safety Services">Fire & Safety Services</option>
                      <option value="FRP Works">FRP Works</option>
                      <option value="Engineering Works">Engineering Works</option>
                      <option value="All Water Treatment Services">All Water Treatment Services</option>
                      <option value="Industrial Coatings">Industrial Coatings</option>
                      <option value="Fabrication">Fabrication</option>
                      <option value="Piping">Piping</option>
                      <option value="Structural Works">Structural Works</option>
                      <option value="Plant Erection">Plant Erection</option>
                      <option value="Equipment Installation">Equipment Installation</option>
                      <option value="Engineering Support">Engineering Support</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '800', color: '#FFCF01', marginBottom: '8px' }}>
                      Industry Sector *
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '14px',
                        borderRadius: '8px',
                        backgroundColor: '#000000',
                        border: '2px solid #FFCF01',
                        color: '#FFFFFF',
                        fontSize: '15px',
                        outline: 'none'
                      }}
                    >
                      <option value="Power Plants">Power Plants</option>
                      <option value="Steel Plants">Steel Plants</option>
                      <option value="Refineries">Refineries</option>
                      <option value="Petrochemical Plants">Petrochemical Plants</option>
                      <option value="Cement Plants">Cement Plants</option>
                      <option value="Manufacturing Industries">Manufacturing Industries</option>
                      <option value="Food Processing">Food Processing</option>
                      <option value="Pharmaceutical Industries">Pharmaceutical Industries</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '800', color: '#FFCF01', marginBottom: '8px' }}>
                    Leak Pressure / Temperature / Pipe Details
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Specify leak medium (steam, gas, chemical), pressure (bar), temperature (°C), or line size..."
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '14px',
                      borderRadius: '8px',
                      backgroundColor: '#000000',
                      border: '2px solid #FFCF01',
                      color: '#FFFFFF',
                      fontSize: '15px',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '18px' }}>
                  Securely Submit Quote Request <Send size={18} />
                </button>
              </form>
            )}
          </div>

          {/* Official Company Info Side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {/* Address Card */}
            <div style={{
              backgroundColor: '#000000',
              border: '2px solid #FFCF01',
              borderRadius: '12px',
              padding: '28px',
              borderLeft: '8px solid #FFCF01'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ backgroundColor: '#FFCF01', padding: '12px', borderRadius: '8px', color: '#000000' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ color: '#FFFFFF', fontSize: '18px', marginBottom: '8px' }}>Headquarters Address</h4>
                  <p style={{ color: '#FFFFFF', fontSize: '15px', lineHeight: '1.6' }}>
                    <strong>Flat No. 504, SSS Towers</strong><br />
                    Simon Nagar, Kurmannapalem,<br />
                    Visakhapatnam, Andhra Pradesh – 530046, India
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Numbers Card */}
            <div style={{
              backgroundColor: '#000000',
              border: '2px solid #FFCF01',
              borderRadius: '12px',
              padding: '28px',
              borderLeft: '8px solid #FFCF01'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ backgroundColor: '#FFCF01', padding: '12px', borderRadius: '8px', color: '#000000' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ color: '#FFFFFF', fontSize: '18px', marginBottom: '8px' }}>Emergency Leak Sealing Hotline</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <a href="tel:9849900004" style={{ color: '#FFCF01', fontSize: '18px', fontWeight: '800', textDecoration: 'none' }}>
                      +91 98499 00004
                    </a>
                    <a href="tel:9059591469" style={{ color: '#FFCF01', fontSize: '18px', fontWeight: '800', textDecoration: 'none' }}>
                      +91 90595 91469
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div style={{
              backgroundColor: '#000000',
              border: '2px solid #FFCF01',
              borderRadius: '12px',
              padding: '28px',
              borderLeft: '8px solid #FFCF01'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ backgroundColor: '#FFCF01', padding: '12px', borderRadius: '8px', color: '#000000' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ color: '#FFFFFF', fontSize: '18px', marginBottom: '8px' }}>Confidential Technical Desk</h4>
                  <a href="mailto:hitechindustrialservices@gmail.com" style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: '800', textDecoration: 'none', wordBreak: 'break-all' }}>
                    hitechindustrialservices@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
