# Shares Portfolio Tracker

## Project Overview
The Portfolio Tracker is a comprehensive full-stack web application that enables users to monitor and manage their stock portfolio in real-time. The application provides powerful tools for tracking shareholdings performance, discovering new stocks, and analyzing portfolio value with live data from the NASDAQ stock exchange.

**Demo Video**: https://youtu.be/f05D_Hy-H0Y

---

## Core Features

### Portfolio Management
- **Add/Remove/Update/Delete Shares**: Complete CRUD operations for managing stock holdings
- **Real-time Portfolio Value**: Live tracking of total portfolio worth
- **Individual & Total Performance Trends**: Comprehensive performance analytics
- **Current Share Prices**: Real-time price updates for individual holdings
- **Cost Basis Tracking**: View average and total paid prices for shares

### Discovery & Analysis
- **Stock Discovery**: Browse and search publicly traded companies
- **External API Integration**: Real-time data from Financial Modeling Prep API
- **Search Functionality**: Quick search to find specific stocks
- **Stock Comparison**: Temporarily add stocks to compare performance
- **Historical Data**: View past share performance for any public company
- **Interactive Charts**: Visual representation using HighCharts library

### Data Visualization
- **Portfolio Value Charts**: Visual breakdown of current holdings
- **Performance Trends**: Charts showing profit/loss over time
- **Price History**: Historical price data visualization
- **Comparative Analysis**: Side-by-side stock performance comparison

---

## Technical Architecture

### Tech Stack

#### Frontend (Client)
- **React 17.0.2**: Component-based UI framework
- **Bootstrap 5.1.3**: Responsive design and styling
- **Bootstrap Icons 1.7.2**: Icon library
- **HighCharts 9.3.2**: Interactive charting library
- **React Router DOM 6.2.1**: Client-side routing
- **React Icons 4.3.1**: Additional icon components
- **React Bootstrap 2.1.1**: Bootstrap components for React

#### Backend (Server)
- **Node.js**: JavaScript runtime environment
- **Express 4.17.2**: Web application framework
- **MongoDB 3.5.7**: NoSQL database for data persistence
- **CORS 2.8.5**: Cross-origin resource sharing

#### Development Tools
- **Nodemon 2.0.15**: Auto-restart development server
- **React Scripts 5.0.0**: Build and development scripts

### API Integration
- **Financial Modeling Prep API**: Primary source for real-time stock data
- Provides:
  - Real-time stock quotes
  - Historical price data
  - Company information
  - Market data from NASDAQ

---

## Project Structure

```
Shares-Portfolio-Tracker/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── services/      # API services and configuration
│   │   └── ...
│   └── package.json
├── server/                # Backend Express server
│   ├── db/               # Database configuration and seeds
│   └── package.json
├── images/               # Screenshot assets
└── README.md
```

---

## Setup and Installation

### Prerequisites
- Node.js installed
- MongoDB installed and running
- Financial Modeling Prep API key (free tier available)

### Frontend Setup
```bash
cd client
npm install
npm start
```

### Backend Setup
```bash
cd server
npm install
npm run seeds        # Initialize database
npm run server:dev   # Start development server
```

### API Key Configuration
1. Sign up at https://financialmodelingprep.com/
2. Create `client/src/services/apikey.js`
3. Add your API key:
```javascript
export const apikey = "YOUR_API_KEY_HERE"
export const apikeyPH = "YOUR_API_KEY_HERE"
```

---

## Key Functionalities

### 1. Portfolio Dashboard
- View all current holdings
- Real-time total portfolio value
- Individual stock performance metrics
- Quick actions for each holding

### 2. Stock Discovery Page
- Browse available stocks
- Search for specific companies
- View detailed stock information
- Add stocks to portfolio

### 3. Real-time Updates
- Live price updates from NASDAQ
- Automatic portfolio value recalculation
- Current market data integration

### 4. Performance Analytics
- Profit/Loss tracking
- Historical performance charts
- Comparison with purchase price
- Total return calculations

### 5. Interactive Charts
- Current portfolio value distribution
- Price history visualization
- Performance trend analysis
- Comparative stock analysis

---

## Database Schema

### Collections
- **Portfolio**: User's stock holdings
- **Stocks**: Available stock information
- **Transactions**: Buy/sell history
- **Performance**: Historical performance data

---

## Business Logic

### Portfolio Value Calculation
- Fetches current prices for all holdings
- Multiplies quantity by current price
- Aggregates total portfolio value
- Calculates profit/loss vs. cost basis

### Performance Tracking
- Stores purchase price and date
- Tracks current value in real-time
- Calculates percentage gains/losses
- Provides historical trend data

---

## User Stories Met

### MVP Requirements ✓
- [x] Add/Remove/Update/Delete Shares
- [x] View total current value
- [x] View individual and total performance trends
- [x] Retrieve share prices from external API
- [x] View chart of current portfolio values

### Extensions ✓
- [x] View current share price of individual shareholdings
- [x] View average and total paid prices
- [x] View chart of total paid price, value, and profit/loss
- [x] Search functionality for stocks
- [x] Temporarily add stocks for comparison
- [x] Compare past share performance data

---

## Technical Challenges Solved

1. **Real-time Data Integration**: Successfully integrated external API for live stock data
2. **Performance Optimization**: Efficient data fetching and state management
3. **Data Visualization**: Implemented complex charts using HighCharts
4. **Responsive Design**: Bootstrap-based responsive UI
5. **State Management**: React state management for real-time updates

---

## Future Enhancements

- User authentication and multi-user support
- Portfolio sharing and collaboration
- Advanced analytics and predictions
- Mobile application
- Push notifications for price alerts
- Integration with multiple stock exchanges
- Export portfolio data (PDF, CSV)
- Tax reporting features

---

## Learning Outcomes

### Technical Skills Demonstrated
- Full-stack MERN development
- RESTful API design and consumption
- Third-party API integration
- Real-time data handling
- Data visualization
- Responsive web design
- Database design and management
- State management in React

### Problem-Solving
- Handling asynchronous API calls
- Managing real-time data updates
- Optimizing performance with large datasets
- Creating intuitive user interfaces
- Error handling and data validation

---

## Project Highlights

- **Full-Stack MERN Application**: Complete implementation from database to UI
- **Real-time Functionality**: Live stock data integration
- **Professional UI**: Clean, responsive design with Bootstrap
- **Rich Visualizations**: Multiple chart types using HighCharts
- **Production-Ready**: Seed data, error handling, and proper project structure
- **Well-Documented**: Comprehensive README and inline documentation

---

## Use Cases

1. **Individual Investors**: Track personal stock portfolios
2. **Day Traders**: Monitor real-time stock performance
3. **Learning Tool**: Understand stock market dynamics
4. **Portfolio Analysis**: Analyze investment performance
5. **Stock Research**: Compare and research different stocks

---

This project demonstrates proficiency in full-stack web development, API integration, real-time data handling, and creating production-quality applications with modern web technologies.