import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { translations } from '../translations';
import { baseUrl } from '../config';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const { language, setLanguage, currency, setCurrency } = useApp();
  const t = translations[language];
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const handleEscape = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <img 
            src={`${baseUrl}/main-logo.png`} 
            alt="Fon Real Estate"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/200x60?text=Fon+Real+Estate';
            }}
          />
        </Link>
        <button
          type="button"
          className="header-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <Link to="/buy" className={isActive('/buy') ? 'active' : ''}>{t.nav.buy}</Link>
          <Link to="/rent" className={isActive('/rent') ? 'active' : ''}>{t.nav.rent}</Link>
          <Link to="/list" className={isActive('/list') ? 'active' : ''}>{t.nav.sell}</Link>
          <Link to="/blog" className={isActive('/blog') ? 'active' : ''}>{t.nav.blog}</Link>
          <Link to="/about" className={isActive('/about') ? 'active' : ''}>{t.nav.about}</Link>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>{t.nav.contact}</Link>
        </nav>
        <div className="header-controls">
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="currency-select"
          >
            <option value="THB">THB</option>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
          </select>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="language-select"
          >
            <option value="en">EN</option>
            <option value="th">TH</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;




