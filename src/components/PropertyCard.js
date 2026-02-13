import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { translations } from '../translations';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
  const { language, formatPrice } = useApp();
  const t = translations[language];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getPropertyTitle = () => {
    return language === 'th' ? property.titleThai : property.title;
  };

  const getPropertyLocation = () => {
    return language === 'th' ? property.locationThai : property.location;
  };

  const images = property.images && property.images.length > 0 ? property.images : [property.image];
  const hasMultipleImages = images.length > 1;

  const handlePrevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Link to={`/property/${property.id}`} className="property-card">
      <div className="property-image">
        <div className="property-image-container">
          <img 
            src={images[currentImageIndex]} 
            alt={getPropertyTitle()}
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop';
            }}
          />
          {hasMultipleImages && (
            <>
              <button 
                className="property-carousel-btn property-carousel-btn-left"
                onClick={handlePrevImage}
                aria-label="Previous image"
              >
                ‹
              </button>
              <button 
                className="property-carousel-btn property-carousel-btn-right"
                onClick={handleNextImage}
                aria-label="Next image"
              >
                ›
              </button>
              <div className="property-image-indicator">
                {currentImageIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>
        <div className="property-badge">
          {language === 'th' ? property.transactionTypeThai : property.transactionType}
        </div>
      </div>
      <div className="property-info">
        <h3 className="property-title">{getPropertyTitle()}</h3>
        <p className="property-location">{getPropertyLocation()}</p>
        <div className="property-details">
          <span>{property.beds} {t.property.beds}</span>
          <span>{property.baths} {t.property.baths}</span>
          {property.livingSpace > 0 && (
            <span>{property.livingSpace} m²</span>
          )}
        </div>
        <div className="property-price">
          {formatPrice(property.price)}
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;

