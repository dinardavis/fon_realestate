import React from 'react';
import { useApp } from '../context/AppContext';
import { translations } from '../translations';
import { baseUrl } from '../config';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const { language } = useApp();
  const t = translations[language];
  const emailHref = 'mailto:fon@fonrealestate.com?subject=Contact Inquiry';

  return (
    <div className="contact-page">
      <div className="hero-gradient-container">
        <div className="contact-hero">
          <div className="container">
            <h1>{t.nav.contact}</h1>
            <p>{language === 'th' ? 'ติดต่อเราวันนี้เพื่อค้นหาอสังหาริมทรัพย์ในฝันของคุณ' : 'Get in touch with us today to find your dream property'}</p>
          </div>
        </div>
      </div>
      <div className="contact-hero-wrap">
        <div className="contact-hero-bg" aria-hidden="true" />
        <div className="contact-hero-overlay" aria-hidden="true" />
        <div className="container contact-hero-container">
          <div className="contact-info-section">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <div className="contact-label">{t.contact.serviceArea}</div>
                  <div className="contact-value">Krabi, Thailand</div>
                </div>
              </div>

              <div className="contact-qr-row">
                <div className="contact-qr-item">
                  <img src={`${baseUrl}/font_whatsapp.png`} alt="WhatsApp" />
                  <span>WhatsApp</span>
                </div>
                <div className="contact-qr-item">
                  <img src={`${baseUrl}/fon_lineapp.png`} alt="Line" />
                  <span>Line</span>
                </div>
              </div>

              <div className="contact-item contact-email-row">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="contact-label">{t.contact.email}</div>
                  <div className="contact-value">
                    <a href={emailHref} target="_blank" rel="noopener noreferrer">fon@fonrealestate.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
