import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [currency, setCurrency] = useState('THB');
  const [exchangeRates, setExchangeRates] = useState({
    THB: 1,
    USD: 0.028,
    GBP: 0.022,
    EUR: 0.026
  });

  // Fetch real exchange rates
  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        // Using a free API for exchange rates (THB as base)
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/THB');
        const data = await response.json();
        if (data.rates) {
          setExchangeRates({
            THB: 1,
            USD: data.rates.USD || 0.028,
            GBP: data.rates.GBP || 0.022,
            EUR: data.rates.EUR || 0.026
          });
        }
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
        // Use default rates if API fails
      }
    };

    fetchExchangeRates();
    // Update rates every hour
    const interval = setInterval(fetchExchangeRates, 3600000);
    return () => clearInterval(interval);
  }, []);

  const convertPrice = (priceUSD) => {
    // Convert from USD to THB first, then to target currency
    const priceTHB = priceUSD / exchangeRates.USD;
    const convertedPrice = priceTHB * exchangeRates[currency];
    return Math.round(convertedPrice);
  };

  const formatPrice = (priceUSD) => {
    const convertedPrice = convertPrice(priceUSD);
    const symbols = {
      THB: '฿',
      USD: '$',
      GBP: '£',
      EUR: '€'
    };
    return `${symbols[currency]}${convertedPrice.toLocaleString()}`;
  };

  const getCurrencySymbol = () => {
    const symbols = {
      THB: '฿',
      USD: '$',
      GBP: '£',
      EUR: '€'
    };
    return symbols[currency] || '฿';
  };

  const value = {
    language,
    setLanguage,
    currency,
    setCurrency,
    exchangeRates,
    convertPrice,
    formatPrice,
    getCurrencySymbol
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

