import React, { useState, useMemo, useRef } from 'react';
import PropertyCard from './PropertyCard';
import { useApp } from '../context/AppContext';
import { translations } from '../translations';
import './PropertyList.css';

const PropertyList = ({ properties }) => {
  const { language } = useApp();
  const t = translations[language];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const propertyListRef = useRef(null);

  const count = properties ? properties.length : 0;

  const paginatedProperties = useMemo(() => {
    if (!properties || properties.length === 0) return [];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return properties.slice(startIndex, endIndex);
  }, [properties, currentPage]);

  const totalPages = useMemo(() => {
    if (!properties || properties.length === 0) return 0;
    return Math.ceil(properties.length / itemsPerPage);
  }, [properties]);

  // Reset to page 1 when properties change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [properties]);

  if (!properties || properties.length === 0) {
    return (
      <div className="property-list-empty">
        <p>No properties found matching your criteria.</p>
      </div>
    );
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to the top of the property list section, accounting for navbar height (70px)
    setTimeout(() => {
      if (propertyListRef.current) {
        const elementTop = propertyListRef.current.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: elementTop - 90, behavior: 'smooth' });
      }
    }, 0);
  };

  return (
    <div className="property-list" ref={propertyListRef}>
      <div className="property-grid">
        <p className="property-count">
          {count} {language === 'th' ? 'ทรัพย์สินที่มีให้เลือกตามเกณฑ์นี้' : 'properties are available with this criteria'}
        </p>
        {paginatedProperties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            className="pagination-btn"
            aria-label="First page"
          >
            «
          </button>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-btn"
            aria-label="Previous page"
          >
            ‹
          </button>
          <span className="pagination-info">
            {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="pagination-btn"
            aria-label="Next page"
          >
            ›
          </button>
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="pagination-btn"
            aria-label="Last page"
          >
            »
          </button>
        </div>
      )}
    </div>
  );
};

export default PropertyList;




