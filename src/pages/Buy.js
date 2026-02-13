import React, { useState, useEffect, useCallback } from 'react';
import { properties } from '../data/properties';
import SearchBar from '../components/SearchBar';
import PropertyList from '../components/PropertyList';
import { useApp } from '../context/AppContext';
import { translations } from '../translations';
import './Buy.css';

const Buy = () => {
  const { currency, convertPrice, language } = useApp();
  const t = translations[language];
  const [filteredProperties, setFilteredProperties] = useState(
    properties.filter(p => p.transactionType === 'buy')
  );
  const [searchFilters, setSearchFilters] = useState({
    transactionType: 'buy',
    location: '',
    propertyType: '',
    minPrice: '',
    maxPrice: ''
  });

  const handleSearch = useCallback((filters) => {
    setSearchFilters(filters);
    
    let filtered = properties.filter(p => p.transactionType === 'buy');

    // Filter by location
    if (filters.location) {
      filtered = filtered.filter(p => 
        p.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Filter by property type
    if (filters.propertyType) {
      filtered = filtered.filter(p => p.type === filters.propertyType);
    }

    // Filter by price range
    if (filters.minPrice || filters.maxPrice) {
      filtered = filtered.filter(p => {
        const price = convertPrice(p.price);
        const min = filters.minPrice ? parseFloat(filters.minPrice) : 0;
        const max = filters.maxPrice ? parseFloat(filters.maxPrice) : Infinity;
        return price >= min && price <= max;
      });
    }

    setFilteredProperties(filtered);
  }, [convertPrice]);

  return (
    <div className="buy-page">
      <div className="hero-gradient-container">
        <div className="buy-hero">
          <div className="container">
            <h1>{t.pages.buy.title}</h1>
            <p>{t.pages.buy.subtitle}</p>
          </div>
        </div>
        <div className="search-bar-page-wrap">
          <SearchBar onSearch={handleSearch} initialFilters={searchFilters} />
        </div>
      </div>
      <PropertyList properties={filteredProperties} />
    </div>
  );
};

export default Buy;

