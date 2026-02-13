import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { properties } from '../data/properties';
import PropertyList from '../components/PropertyList';
import HeroCarousel from '../components/HeroCarousel';
import { useApp } from '../context/AppContext';
import './Home.css';

const Home = () => {
  const [searchParams] = useSearchParams();
  const { currency, convertPrice } = useApp();
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [searchFilters, setSearchFilters] = useState({
    transactionType: searchParams.get('type') || '',
    location: '',
    propertyType: '',
    minPrice: '',
    maxPrice: ''
  });

  const handleSearch = useCallback((filters) => {
    setSearchFilters(filters);
    
    // If all filters are empty, show all properties
    const hasFilters = filters.transactionType || filters.location || filters.propertyType || filters.minPrice || filters.maxPrice;
    
    if (!hasFilters) {
      setFilteredProperties(properties);
      return;
    }
    
    let filtered = [...properties];

    // Filter by transaction type
    if (filters.transactionType) {
      filtered = filtered.filter(p => p.transactionType === filters.transactionType);
    }

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

  useEffect(() => {
    // Apply initial filter from URL
    const typeParam = searchParams.get('type');
    if (typeParam) {
      const filters = {
        transactionType: typeParam,
        location: '',
        propertyType: '',
        minPrice: '',
        maxPrice: ''
      };
      handleSearch(filters);
    }
  }, [searchParams, handleSearch]);

  return (
    <div className="home">
      <div className="hero-gradient-container">
        <div className="container">
          <div className="hero-section">
            <h1 className="hero-title">Real estate for living and investments</h1>
          </div>
          <div className="hero-section-wrapper">
            <HeroCarousel
              properties={properties}
              onSearch={handleSearch}
              initialFilters={searchFilters}
            />
          </div>
        </div>
      </div>
      <PropertyList properties={filteredProperties} />
    </div>
  );
};

export default Home;

