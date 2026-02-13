import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { translations } from '../translations';
import './Footer.css';

const Footer = () => {
  const { language } = useApp();
  const t = translations[language];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <Link to="/" className="footer-logo">
              <img 
                src="/main-logo.png" 
                alt="Fon Real Estate"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/200x60?text=Fon+Real+Estate';
                }}
              />
            </Link>
            <p className="footer-tagline">
              {language === 'th' 
                ? 'อสังหาริมทรัพย์พรีเมียมในประเทศไทย'
                : 'Premium real estate in Thailand'
              }
            </p>
          </div>

          <div className="footer-section">
            <ul className="footer-links">
              <li><Link to="/buy">{t.nav.buy}</Link></li>
              <li><Link to="/rent">{t.nav.rent}</Link></li>
              <li><Link to="/list">{t.nav.sell}</Link></li>
              <li><Link to="/about">{t.nav.about}</Link></li>
              <li><Link to="/contact">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div className="footer-section footer-contact-section">
            <h3>{language === 'th' ? 'ติดต่อ' : 'Contact'}</h3>
            <div className="footer-contact-qr">
              <div className="footer-qr-item">
                <img src="/font_whatsapp.png" alt="WhatsApp" />
                <span>WhatsApp</span>
              </div>
              <div className="footer-qr-item">
                <img src="/fon_lineapp.png" alt="Line" />
                <span>Line</span>
              </div>
            </div>
            <a
              href="mailto:fon@fonrealestate.com?subject=Inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-email-link"
            >
              fon@fonrealestate.com
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} Fon Real Estate. {language === 'th' ? 'สงวนลิขสิทธิ์' : 'All rights reserved'}.</p>
          </div>
          <div className="footer-credit">
            <p>
              {language === 'th' ? 'สร้างโดย' : 'Created by'}{' '}
              <a href="https://golbi.co" target="_blank" rel="noopener noreferrer">golbi.co</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

