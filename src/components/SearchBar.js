import React, { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { translations } from "../translations";
import "./SearchBar.css";

const SearchBar = ({ onSearch, initialFilters }) => {
  const { language, currency, formatPrice, getCurrencySymbol } = useApp();
  const t = translations[language];

  const [filters, setFilters] = useState({
    transactionType: initialFilters?.transactionType || "",
    location: initialFilters?.location || "",
    propertyType: initialFilters?.propertyType || "",
    minPrice: initialFilters?.minPrice || "",
    maxPrice: initialFilters?.maxPrice || "",
  });

  useEffect(() => {
    if (initialFilters) {
      setFilters(initialFilters);
    }
  }, [initialFilters]);

  const handleChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSearch = () => {
    onSearch(filters);
  };

  const handleClearFilters = () => {
    const emptyFilters = {
      transactionType: "",
      location: "",
      propertyType: "",
      minPrice: "",
      maxPrice: "",
    };
    setFilters(emptyFilters);
    onSearch(emptyFilters);
  };

  // Get price range based on currency
  const getPriceOptions = () => {
    const baseRanges = [
      { min: 0, max: 500000 },
      { min: 500000, max: 1000000 },
      { min: 1000000, max: 2000000 },
      { min: 2000000, max: 5000000 },
      { min: 5000000, max: 10000000 },
    ];

    return baseRanges.map((range) => ({
      min: Math.round(range.min / (currency === "THB" ? 0.028 : 1)),
      max: Math.round(range.max / (currency === "THB" ? 0.028 : 1)),
    }));
  };

  return (
    <div className="search-bar">
      <div className="search-container">
        <div className="search-filters">
          <div className="filter-group">
            <label>{t.search.transactionType}</label>
            <select
              value={filters.transactionType}
              onChange={(e) => handleChange("transactionType", e.target.value)}
            >
              <option value="">
                {t.search.buy} / {t.search.rent}
              </option>
              <option value="buy">{t.search.buy}</option>
              <option value="rent">{t.search.rent}</option>
            </select>
          </div>

          <div className="filter-group">
            <label>{t.search.propertyType}</label>
            <select
              value={filters.propertyType}
              onChange={(e) => handleChange("propertyType", e.target.value)}
            >
              <option value="">{t.search.anyResidential}</option>
              <option value="Condo">{t.search.condo}</option>
              <option value="Land">{t.search.land}</option>
              <option value="Villa">{t.search.villa}</option>
              <option value="Commercial Property">{t.search.commercialProperty}</option>
            </select>
          </div>

          <div className="filter-group">
            <label>
              {t.search.minPrice} ({getCurrencySymbol()})
            </label>
            <input
              type="number"
              placeholder={t.search.minPlaceholder}
              value={filters.minPrice}
              min="0"
              step="1"
              onChange={(e) => {
                const value = e.target.value;
                if (value === "" || parseFloat(value) >= 0) {
                  handleChange("minPrice", value);
                }
              }}
              onKeyDown={(e) => {
                if (
                  e.key === "-" ||
                  e.key === "+" ||
                  e.key === "e" ||
                  e.key === "E" ||
                  e.key === "."
                ) {
                  e.preventDefault();
                }
              }}
            />
          </div>

          <div className="filter-group">
            <label>
              {t.search.maxPrice} ({getCurrencySymbol()})
            </label>
            <input
              type="number"
              placeholder={t.search.maxPlaceholder}
              value={filters.maxPrice}
              min="0"
              step="1"
              onChange={(e) => {
                const value = e.target.value;
                if (value === "" || parseFloat(value) >= 0) {
                  handleChange("maxPrice", value);
                }
              }}
              onKeyDown={(e) => {
                if (
                  e.key === "-" ||
                  e.key === "+" ||
                  e.key === "e" ||
                  e.key === "E" ||
                  e.key === "."
                ) {
                  e.preventDefault();
                }
              }}
            />
          </div>

          <div className="search-actions">
            <button className="btn-search" onClick={handleSearch}>
              {t.search.search}
            </button>
            <button className="btn-clear" onClick={handleClearFilters}>
              {language === "th" ? "ล้างตัวกรอง" : "Clear filters"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
