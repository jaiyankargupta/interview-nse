# Zerodha Clone

## Project Overview
This is a comprehensive full-stack web application that replicates the UI and core features of Zerodha, India's leading stock trading platform. The project demonstrates advanced authentication, trading functionalities, real-time stock data visualization, and a professional user interface built with modern web technologies.

---

## Core Features

### User Management
- **User Registration**: Secure sign-up with email validation
- **User Authentication**: JWT-based token authentication
- **Secure Login/Logout**: Password hashing with bcryptjs
- **Session Management**: Cookie-based session handling
- **User Profiles**: Account management and user information

### Trading Features
- **Stock Charts**: Interactive, real-time stock performance visualization
- **Trade Management**: Buy and sell stock functionalities
- **Portfolio View**: Dashboard to view all holdings and positions
- **Market Data**: Real-time stock information and quotes
- **Trading Interface**: User-friendly trading dashboard

### Security Features
- **Password Hashing**: Secure password storage using bcryptjs
- **JWT Authentication**: Token-based authentication for secure sessions
- **Passport.js Integration**: Local authentication strategy
- **Protected Routes**: Secure API endpoints and pages
- **CORS Configuration**: Controlled cross-origin resource sharing

---

## Technical Architecture

### Backend Technologies

#### Core Framework
- **Node.js**: JavaScript runtime for server-side development
- **Express.js 4.21.1**: Lightweight web framework for RESTful APIs
- **MongoDB 8.7.1**: NoSQL database for flexible data storage
- **Mongoose 8.7.1**: ODM for MongoDB object modeling

#### Authentication & Security
- **bcryptjs 2.4.3**: Password hashing algorithm
- **jsonwebtoken 9.0.2**: JWT token generation and verification
- **Passport.js 0.7.0**: Authentication middleware
- **passport-local 1.0.0**: Local username/password authentication strategy
- **passport-local-mongoose 8.0.0**: Mongoose plugin for Passport integration
- **cookie-parser 1.4.7**: Cookie parsing middleware

#### Utilities
- **axios 1.7.7**: HTTP client for API requests
- **cors 2.8.5**: Enable cross-origin resource sharing
- **body-parser 1.20.3**: Parse incoming request bodies
- **dotenv 16.4.5**: Environment variable management

#### Development
- **nodemon 3.1.7**: Auto-restart server during development

---

### Frontend Technologies

#### Main Application (Frontend)
- **React 18.3.1**: Modern UI library with hooks and functional components
- **React Router DOM 6.26.2**: Client-side routing and navigation
- **Axios 1.7.7**: HTTP client for API communication
- **React Cookie 7.2.1**: Cookie management in React
- **React Toastify 10.0.5**: Beautiful toast notifications

#### Dashboard Application
- **React 18.2.0**: Component-based UI framework
- **Material-UI (MUI) 5.16.7**: Professional React component library
  - @mui/material: Core MUI components
  - @mui/icons-material 5.16.7: Material Design icons
  - @emotion/react 11.13.3: CSS-in-JS styling
  - @emotion/styled 11.13.0: Styled components for MUI
- **Chart.js 4.4.4**: Powerful charting library
- **react-chartjs-2 5.2.0**: React wrapper for Chart.js
- **React Router DOM 6.26.2**: Navigation and routing
- **React Toastify 10.0.5**: User notifications
- **React Cookie 7.2.1**: Authentication cookie handling

#### Shared Frontend Tools
- **React Scripts 5.0.1**: Build and development tooling
- **Web Vitals 2.1.4**: Performance monitoring

---

## Project Structure

```
Zerodha-Clone/
├── backend/                    # Node.js/Express server
│   ├── models/                # Mongoose data models
│   ├── routes/                # API route handlers
│   ├── middleware/            # Authentication middleware
│   ├── config/                # Database and environment config
│   ├── index.js               # Server entry point
│   └── package.json
├── frontend/                   # Main React application (Landing/Auth)
│   ├── src/
│   │   ├── components/        # Reusable React components
│   │   ├── pages/             # Page components (Login, Signup)
│   │   ├── services/          # API service layer
│   │   └── App.js             # Main App component
│   └── package.json
├── dashboard/                  # Trading Dashboard (Material-UI)
│   ├── src/
│   │   ├── components/        # Dashboard components
│   │   ├── pages/             # Dashboard pages
│   │   ├── charts/            # Chart components
│   │   └── App.js
│   └── package.json
├── README.md
└── .hintrc
```

---

## Setup and Installation

### Backend Setup
```bash
cd backend
npm install
npm start                      # Production
# or
npm run dev                    # Development with nodemon
```

### Frontend Setup
```bash
cd frontend
npm install
npm start                      # Runs on port 3000
```

### Dashboard Setup
```bash
cd dashboard
npm install
npm start                      # Runs on different port
```

### Environment Configuration
Create `.env` files in respective directories:

**Backend .env:**
```
MONGODB_URI=mongodb://localhost:27017/zerodha-clone
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

**Frontend/Dashboard .env:**
```
REACT_APP_API_URL=http://localhost:5000/api
```

---

## Key Functionalities

### 1. Authentication Flow
- User registers with email and password
- Password is hashed using bcryptjs before storage
- Login generates JWT token stored in cookies
- Protected routes validate JWT on each request
- Secure logout clears authentication tokens

### 2. Dashboard Interface
- Clean, professional UI using Material-UI components
- Responsive design for all screen sizes
- Intuitive navigation with React Router
- Real-time notifications using React Toastify
- Modern Material Design aesthetics

### 3. Stock Charts
- Interactive charts powered by Chart.js
- Real-time data visualization
- Multiple chart types (line, candlestick, bar)
- Historical data representation
- Responsive and interactive charts

### 4. Trading Operations
- View market data and stock quotes
- Execute buy/sell orders
- Track portfolio performance
- View order history
- Real-time portfolio updates

---

## API Architecture

### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/verify` - Verify JWT token

### Trading Endpoints
- `GET /api/stocks` - Get stock listings
- `GET /api/stocks/:symbol` - Get specific stock data
- `POST /api/orders` - Place new order
- `GET /api/orders` - Get user orders
- `GET /api/portfolio` - Get user portfolio

### User Endpoints
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile
- `GET /api/user/holdings` - Get user holdings

---

## Security Implementation

### Password Security
- Passwords hashed with bcryptjs (salt rounds: 10)
- Never stored in plain text
- Secure password comparison for login

### JWT Implementation
- Token generated on successful login
- Contains user ID and expiration
- Stored in HTTP-only cookies
- Verified on protected route access

### Passport.js Strategy
- Local strategy for username/password authentication
- Session management
- Serialization and deserialization of user data

### CORS Configuration
- Configured for specific origins
- Credentials support enabled
- Secure headers implementation

---

## Database Schema

### User Model
```javascript
{
  email: String (unique, required),
  password: String (hashed),
  name: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Portfolio Model
```javascript
{
  userId: ObjectId (ref: User),
  holdings: [{
    symbol: String,
    quantity: Number,
    averagePrice: Number
  }],
  totalValue: Number
}
```

### Order Model
```javascript
{
  userId: ObjectId (ref: User),
  symbol: String,
  type: String (buy/sell),
  quantity: Number,
  price: Number,
  status: String,
  timestamp: Date
}
```

---

## User Experience Features

### Notifications
- Success messages for completed actions
- Error handling with user-friendly messages
- Real-time updates using React Toastify
- Toast notifications for trades and updates

### Responsive Design
- Mobile-first approach
- Material-UI responsive grid system
- Optimized for all screen sizes
- Touch-friendly interface

### Performance
- Lazy loading of components
- Optimized re-renders
- Efficient state management
- Fast API response times

---

## Technical Challenges Solved

1. **Authentication Flow**: Implemented secure JWT-based authentication with refresh tokens
2. **State Management**: Efficient state handling across multiple components
3. **Real-time Updates**: Chart updates and portfolio value calculations
4. **Security**: Password hashing, JWT validation, and secure cookie handling
5. **Multi-App Architecture**: Separate frontend and dashboard applications
6. **API Integration**: RESTful API design with proper error handling
7. **Material-UI Customization**: Custom theming and component styling

---

## Design Patterns Used

- **MVC Pattern**: Separation of models, views, and controllers
- **Middleware Pattern**: Authentication and error handling middleware
- **Component-Based Architecture**: Reusable React components
- **Service Layer Pattern**: Separate API service layer
- **Repository Pattern**: Database access abstraction with Mongoose

---

## Development Best Practices

- Clean, modular code structure
- Environment variable management
- Error handling and logging
- Input validation and sanitization
- RESTful API conventions
- Proper HTTP status codes
- Comprehensive error messages
- Code comments and documentation

---

## Learning Outcomes

### Backend Skills
- RESTful API development with Express
- MongoDB database design and Mongoose ODM
- JWT authentication implementation
- Passport.js authentication strategies
- Security best practices (hashing, tokens)
- Middleware design patterns

### Frontend Skills
- Advanced React development (hooks, context)
- Material-UI component library
- Chart.js data visualization
- Client-side routing with React Router
- State management patterns
- Cookie-based authentication

### Full-Stack Integration
- Frontend-backend communication
- CORS configuration
- Token-based authentication flow
- Real-time data synchronization
- Error handling across stack

---

## Future Enhancements

- Real-time WebSocket integration for live market data
- Advanced charting with technical indicators
- Watchlist and alerts functionality
- Order types (limit, stop-loss, market)
- Transaction history and reporting
- Mobile application (React Native)
- Two-factor authentication (2FA)
- Social features (share trades, follow traders)
- Paper trading mode for practice
- Integration with real stock market APIs
- Advanced portfolio analytics
- Tax calculation and reporting

---

## Project Highlights

- **Production-Ready Architecture**: Scalable and maintainable code structure
- **Modern Tech Stack**: Latest versions of React, Node.js, and MongoDB
- **Professional UI**: Material-UI based design matching industry standards
- **Secure Authentication**: Industry-standard JWT and bcrypt implementation
- **Clean Code**: Well-organized, documented, and maintainable
- **Responsive Design**: Works seamlessly on all devices
- **Real-World Application**: Replicates actual trading platform functionality

---

## Use Cases

1. **Learning Platform**: Understand how trading platforms work
2. **Portfolio Management**: Track and manage stock investments
3. **Demo Trading**: Practice trading without real money
4. **UI/UX Study**: Study professional trading interface design
5. **Full-Stack Portfolio**: Demonstrate full-stack development skills

---

## Comparison with Real Zerodha

### Replicated Features
- Clean, minimalist UI design
- User authentication system
- Trading dashboard layout
- Stock charts and visualization
- Portfolio management interface

### Educational Purpose
This is a clone built for educational purposes to demonstrate:
- Full-stack development capabilities
- Understanding of financial application architecture
- Implementation of complex authentication flows
- Real-time data visualization
- Professional UI/UX design

---

This project showcases expertise in modern full-stack web development, secure authentication systems, real-time data visualization, and building production-quality applications with professional UI/UX design using the MERN stack with Material-UI.