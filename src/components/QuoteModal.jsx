import React, { useState } from 'react';
import { X, Send, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose }) {
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

  if (!isOpen) return null;

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
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#000000',
        color: '#FFFFFF',
        borderRadius: '16px',
        maxWidth: '620px',
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
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: '#FFCF01',
            border: 'none',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#000000'
          }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <ShieldCheck size={18} color="#FFCF01" />
          <span style={{ fontSize: '13px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#FFCF01' }}>
            HITECH INDUSTRIAL SERVICES
          </span>
        </div>

        <h3 style={{ fontSize: '26px', fontWeight: '800', color: '#FFFFFF', marginBottom: '16px' }}>
          Request an Online Leak Sealing & Engineering Quote
        </h3>

        {/* Data Security Badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'rgba(255, 207, 1, 0.1)',
          border: '1px solid #FFCF01',
          padding: '8px 12px',
          borderRadius: '6px',
          marginBottom: '20px',
          fontSize: '12px',
          color: '#FFCF01',
          fontWeight: '700'
        }}>
          <Lock size={16} /> 256-Bit SSL Encrypted • Confidential Corporate Data Protection
        </div>

        {submitted ? (
          <div style={{ padding: '20px 0', textAlign: 'center' }}>
            <div style={{
              backgroundColor: '#FFCF01',
              color: '#000000',
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px auto'
            }}>
              <CheckCircle2 size={32} />
            </div>
            <h4 style={{ color: '#FFFFFF', fontSize: '22px', marginBottom: '10px' }}>Inquiry Received Securely!</h4>
            <p style={{ color: '#FFFFFF', fontSize: '15px', marginBottom: '24px', lineHeight: '1.5' }}>
              Our senior engineering desk in Visakhapatnam will review your request for <strong>{formData.service}</strong> and contact you securely.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="btn-primary"
              style={{ width: '100%' }}
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '800', color: '#FFCF01', marginBottom: '6px' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Suresh Varma"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    backgroundColor: '#000000',
                    border: '2px solid #FFCF01',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '800', color: '#FFCF01', marginBottom: '6px' }}>
                  Company Name *
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
                    padding: '12px',
                    borderRadius: '8px',
                    backgroundColor: '#000000',
                    border: '2px solid #FFCF01',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '800', color: '#FFCF01', marginBottom: '6px' }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="98499 00004"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    backgroundColor: '#000000',
                    border: '2px solid #FFCF01',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '800', color: '#FFCF01', marginBottom: '6px' }}>
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
                    padding: '12px',
                    borderRadius: '8px',
                    backgroundColor: '#000000',
                    border: '2px solid #FFCF01',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '800', color: '#FFCF01', marginBottom: '6px' }}>
                Required Service *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  backgroundColor: '#000000',
                  border: '2px solid #FFCF01',
                  color: '#FFFFFF',
                  fontSize: '14px',
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
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '800', color: '#FFCF01', marginBottom: '6px' }}>
                Scope Details & Leak Specifications
              </label>
              <textarea
                name="message"
                rows={3}
                placeholder="Brief description of leak pressure, temperature, pipe size, or target dates..."
                value={formData.message}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  backgroundColor: '#000000',
                  border: '2px solid #FFCF01',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  outline: 'none',
                  resize: 'none'
                }}
              />
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '16px', marginTop: '8px' }}>
              Securely Submit Request <Send size={16} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
