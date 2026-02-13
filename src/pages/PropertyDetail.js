import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { properties } from '../data/properties';
import { useApp } from '../context/AppContext';
import { translations } from '../translations';
import { baseUrl } from '../config';
import { FaEnvelope } from 'react-icons/fa';
import './PropertyDetail.css';

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language, formatPrice } = useApp();
  const t = translations[language];
  const [property, setProperty] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const foundProperty = properties.find(p => p.id === id);
    setProperty(foundProperty);
  }, [id]);

  if (!property) {
    return (
      <div className="property-detail">
        <div className="container">
          <p>Property not found</p>
          <button className="btn-back" onClick={() => navigate('/')}>
            ← {language === 'th' ? 'กลับหน้าหลัก' : 'Back to Home'}
          </button>
        </div>
      </div>
    );
  }

  const getPropertyText = (field) => {
    if (language === 'th' && property[`${field}Thai`]) {
      return property[`${field}Thai`];
    }
    return property[field];
  };

  const emailHref = 'mailto:fon@fonrealestate.com?subject=Property Inquiry';

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: property.title,
          text: property.description,
          url: url
        });
      } catch (err) {
        // Fallback to clipboard if share fails
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="property-detail">
      <div className="container">
        <button className="btn-back" onClick={() => navigate(-1)}>
          ← {language === 'th' ? 'กลับ' : 'Back'}
        </button>
        <div className="property-header">
          <h1>{getPropertyText('title')}</h1>
          <p className="property-location-detail">{getPropertyText('location')}</p>
        </div>

        <div className="property-main">
          <div className="property-images">
            <div className="main-image">
              <img 
                src={property.images[currentImageIndex] || property.image} 
                alt={getPropertyText('title')}
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop';
                }}
              />
              <button className="share-icon" onClick={handleShare} aria-label="Share property">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              </button>
            </div>
            {property.images && property.images.length > 1 && (
              <div className="image-thumbnails">
                {property.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${getPropertyText('title')} ${index + 1}`}
                    className={index === currentImageIndex ? 'active' : ''}
                    onClick={() => setCurrentImageIndex(index)}
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=200&h=200&fit=crop';
                    }}
                  />
                ))}
              </div>
            )}
            <div className="property-description">
              <h2>Description</h2>
              <p>{getPropertyText('description')}</p>
            </div>
          </div>

          <div className="property-sidebar">
            <div className="price-section">
              <div className="price">{formatPrice(property.price)}</div>
              <div className="ownership">{getPropertyText('ownership')}</div>
            </div>

            <div className="property-specs">
              <div className="spec-item">
                <span className="spec-label">{t.property.livingSpace}</span>
                <span className="spec-value">{property.livingSpace} m²</span>
              </div>
              {property.landSize > 0 && (
                <div className="spec-item">
                  <span className="spec-label">{t.property.landSize}</span>
                  <span className="spec-value">
                    {property.landSize} m² / {Math.round(property.landSize / 1600 * 10) / 10} Rai
                  </span>
                </div>
              )}
              <div className="spec-item">
                <span className="spec-label">{t.property.beds}</span>
                <span className="spec-value">{property.beds}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">{t.property.baths}</span>
                <span className="spec-value">{property.baths}</span>
              </div>
              {property.pool !== 'None' && (
                <div className="spec-item">
                  <span className="spec-label">{t.property.pool}</span>
                  <span className="spec-value">{getPropertyText('pool')}</span>
                </div>
              )}
              <div className="spec-item">
                <span className="spec-label">{t.property.furniture}</span>
                <span className="spec-value">{getPropertyText('furniture')}</span>
              </div>
              {property.yearBuilt && (
                <div className="spec-item">
                  <span className="spec-label">{t.property.yearBuilt}</span>
                  <span className="spec-value">{property.yearBuilt}</span>
                </div>
              )}
            </div>

            <div className="property-meta">
              <div className="meta-item">
                <strong>{t.property.refNo}</strong>
                <span>{property.id}</span>
              </div>
              <div className="meta-item">
                <strong>{t.property.view}</strong>
                <span>{getPropertyText('view')}</span>
              </div>
            </div>

            <div className="agent-section agent-section-tour">
              <h3>{t.property.requestTourHeading}</h3>
              <div className='agent-section-top-content'>
                <div className="agent-section-image-copy">
                  <div className="agent-section-image">
                    <img
                      src={`${baseUrl}/fon_image.jpg`}
                      alt="Fon Porpirun"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/150';
                      }}
                    />
                  </div>
                  <div className="agent-section-copy">
                    <div className="agent-name">Fon Porpirun</div>
                  </div>
                </div>
                <div className="agent-section-qr">
                  <div className="agent-qr-item">
                    <img src={`${baseUrl}/font_whatsapp.png`} alt="WhatsApp" />
                    <span>WhatsApp</span>
                  </div>
                  <div className="agent-qr-item">
                    <img src={`${baseUrl}/fon_lineapp.png`} alt="Line" />
                    <span>Line</span>
                  </div>
                </div>
              </div>
              <a href={emailHref} className="agent-email-btn" target="_blank" rel="noopener noreferrer">
                <FaEnvelope /> {t.contact.email}
              </a>
            </div>
          </div>
        </div>

        <div className="property-map">
          <h2>Location</h2>
          <div className="map-container">
            <iframe
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${property.lat},${property.lng}&hl=${language}&z=14&output=embed`}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;

