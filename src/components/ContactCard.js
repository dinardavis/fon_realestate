import React from 'react';
import { useApp } from '../context/AppContext';
import { translations } from '../translations';
import { FaEnvelope } from 'react-icons/fa';
import './ContactCard.css';

const ContactCard = () => {
  const { language } = useApp();
  const t = translations[language];
  const emailHref = 'mailto:krabi@fonrealestate.com?subject=Property Inquiry';

  return (
    <div className="contact-card">
      <div className="contact-card-image-copy">
        <div className="contact-card-image">
          <img
            src="/fon_image.jpg"
            alt="Fon Porpirun"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/150';
            }}
          />
        </div>
        <div className="contact-card-copy">
          <h3>Fon Porpirun</h3>
          <p className="contact-card-bio">
            {language === 'th'
              ? 'ผู้เชี่ยวชาญด้านอสังหาริมทรัพย์ที่มีประสบการณ์มากกว่า 10 ปี'
              : 'Experienced real estate professional with over 10 years of expertise.'}
          </p>
        </div>
      </div>
      <div className="contact-card-qr">
        <div className="contact-qr-item">
          <img src="/font_whatsapp.png" alt="WhatsApp" />
          <span>WhatsApp</span>
        </div>
        <div className="contact-qr-item">
          <img src="/fon_lineapp.png" alt="Line" />
          <span>Line</span>
        </div>
      </div>
      <a href={emailHref} className="contact-card-email-btn" role="button" target="_blank" rel="noopener noreferrer">
        <FaEnvelope /> {t.contact.email}
      </a>
    </div>
  );
};

export default ContactCard;
