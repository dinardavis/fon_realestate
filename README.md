# Fon Real Estate Website

A modern, responsive real estate website built with React and CSS, featuring property listings, search functionality, multi-language support (English/Thai), and multi-currency conversion.

## Features

- **Property Listings**: Browse 25+ premium properties across Thailand (Krabi, Phuket, Bangkok)
- **Advanced Search**: Filter by transaction type (buy/rent), location, property type, and price range
- **Property Details**: Comprehensive property pages with images, specifications, and location maps
- **Multi-Language**: Toggle between English and Thai
- **Multi-Currency**: Real-time currency conversion between THB, USD, GBP, and EUR
- **Responsive Design**: Mobile-friendly layout optimized for all devices
- **Modern UI**: Clean, professional design inspired by Estately

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
fon_realestate/
├── public/
│   ├── fon_image.png          # Agent photo
│   ├── main-logo.png          # Company logo
│   └── index.html
├── src/
│   ├── components/            # Reusable components
│   │   ├── Header.js
│   │   ├── SearchBar.js
│   │   ├── PropertyCard.js
│   │   └── PropertyList.js
│   ├── pages/                 # Page components
│   │   ├── Home.js
│   │   ├── PropertyDetail.js
│   │   ├── Contact.js
│   │   └── About.js
│   ├── context/               # React context
│   │   └── AppContext.js      # Language & currency state
│   ├── data/                  # Data files
│   │   └── properties.js      # Property dataset
│   ├── translations.js        # Language translations
│   ├── App.js                 # Main app component
│   └── index.js               # Entry point
└── package.json
```

## Features in Detail

### Search Functionality

Users can filter properties by:
- Transaction type (Buy/Rent)
- Location (Krabi, Phuket, Bangkok)
- Property type (Villa, Condo, Land, Commercial, etc.)
- Price range (minimum and maximum)

### Currency Conversion

The site uses real-time exchange rates from an external API to convert property prices. All prices are displayed in the selected currency and rounded to whole numbers.

### Language Support

Full bilingual support with translations for:
- Navigation
- Search filters
- Property details
- Contact information

## Deployment

The site is configured to be hosted at `fonrealestate.com`. To deploy:

1. Build the production version: `npm run build`
2. Deploy the `build` folder to your hosting service (Vercel, Netlify, etc.)

## Contact Information

- **Address**: Krabi, Thailand, 81180
- **Service Area**: Ban Ao Nang, Krabi, Thailand
- **Mobile**: +66 84 169 7894
- **WhatsApp**: +66 89 503 7747
- **Email**: krabi@fonrealestate.com
- **Website**: https://www.fonrealestate.com/

## Technologies Used

- React 18
- React Router DOM
- Vanilla CSS (no frameworks)
- Exchange Rate API for currency conversion

## License

Private - Fon Real Estate




