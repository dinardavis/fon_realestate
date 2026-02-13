import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { translations } from '../translations';
import ContactCard from './ContactCard';
import SearchBar from './SearchBar';
import './HeroCarousel.css';

const HeroCarousel = ({ properties, onSearch, initialFilters }) => {
  const { language, formatPrice } = useApp();
  const t = translations[language];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Get 5 featured properties
  const featuredProperties = properties.slice(0, 5);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProperties.length);
        setIsTransitioning(false);
      }, 800);
    }, 8000);

    return () => clearInterval(interval);
  }, [featuredProperties.length]);

  const getPropertyText = (property, field) => {
    if (language === 'th' && property[`${field}Thai`]) {
      return property[`${field}Thai`];
    }
    return property[field];
  };

  const currentProperty = featuredProperties[currentIndex];

  return (
    <div className="hero-carousel-wrapper">
      <div className="hero-carousel-left">
        <div className="hero-carousel">
          <div className="hero-carousel-container">
            <div className="hero-property-image">
              <div className="hero-image-slider">
                {featuredProperties.map((property, index) => {
                  const isActive = index === currentIndex;
                  const isNext = index === (currentIndex + 1) % featuredProperties.length;
                  
                  let slideClass = 'hero-slide';
                  if (isActive) {
                    slideClass += ' active';
                    if (isTransitioning) {
                      slideClass += ' sliding-out';
                    }
                  } else if (isNext && isTransitioning) {
                    slideClass += ' sliding-in';
                  } else if (!isActive && !isNext) {
                    slideClass += ' hidden';
                  }

                  return (
                    <div key={property.id} className={slideClass}>
                      <img 
                        src={property.image} 
                        alt={getPropertyText(property, 'title')}
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=600&fit=crop';
                        }}
                      />
                      <div className="hero-property-overlay">
                        <div className="hero-property-details">
                          <div className="hero-property-header">
                            <h2>{getPropertyText(property, 'title')}</h2>
                            <p className="hero-property-location">{getPropertyText(property, 'location')}</p>
                          </div>
                          <div className="hero-property-specs">
                            <span>{property.beds} {t.property.beds}</span>
                            <span>{property.baths} {t.property.baths}</span>
                            {property.livingSpace > 0 && (
                              <span>{property.livingSpace} m²</span>
                            )}
                          </div>
                          <div className="hero-property-price">
                            {formatPrice(property.price)}
                          </div>
                          <div className="hero-property-actions">
                            <Link to={`/property/${property.id}`} className="btn-request-tour-hero">
                              Request a tour
                            </Link>
                            <p className="hero-tour-time">Earliest at 11:00 tomorrow</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="hero-carousel-indicators">
              {featuredProperties.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => {
                    setIsTransitioning(true);
                    setTimeout(() => {
                      setCurrentIndex(index);
                      setIsTransitioning(false);
                    }, 800);
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        {onSearch && initialFilters && (
          <div className="hero-search-bar-wrap">
            <SearchBar onSearch={onSearch} initialFilters={initialFilters} />
          </div>
        )}
      </div>
      <ContactCard />
    </div>
  );
};

export default HeroCarousel;

