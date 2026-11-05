import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const phone = '919849900004';
  const defaultMessage = encodeURIComponent('Hello HITECH Industrial Services, I would like to inquire about industrial shutdown & engineering services.');
  const whatsappUrl = `https://wa.me/${phone}?text=${defaultMessage}`;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}
    >
      {/* Hover Tooltip */}
      {showTooltip && (
        <div
          style={{
            backgroundColor: '#000000',
            color: '#FFFFFF',
            padding: '8px 14px',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: '700',
            boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
            whiteSpace: 'nowrap',
            border: '1px solid #FFCF01'
          }}
        >
          Chat with Technical Desk (+91 98499 00004)
        </div>
      )}

      {/* WhatsApp Trigger Circle */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Chat on WhatsApp with HITECH Industrial Services"
        style={{
          backgroundColor: '#25D366', // WhatsApp Green strictly for WhatsApp Icon
          color: '#FFFFFF',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
          textDecoration: 'none',
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          cursor: 'pointer'
        }}
        className="whatsapp-float-btn"
      >
        <MessageSquare size={30} color="#FFFFFF" fill="#FFFFFF" />
      </a>

      <style>{`
        .whatsapp-float-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 28px rgba(37, 211, 102, 0.5) !important;
        }
      `}</style>
    </div>
  );
}
