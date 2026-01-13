# Zerodha Clone

## Overview
This project is a full-stack web application that replicates UI and some of the core features of the Zerodha stock trading platform. Users can sign up, log in, and manage their accounts. They can also view stock charts, manage trades, and access various trading functionalities.

## Tech Stack

### Backend
- **Node.js**: For building the backend server.
- **Express.js**: Lightweight web framework for creating RESTful APIs.
- **MongoDB & Mongoose**: Database for storing user information and trading data.
- **bcryptjs**: For password hashing to ensure secure user authentication.
- **jsonwebtoken**: Manages token-based authentication for secure user sessions.
- **Passport.js & passport-local**: Local authentication for secure login using email and password.
- **cookie-parser & cors**: For handling cookies and cross-origin requests.

### Frontend
- **React**: Frontend framework for building dynamic and interactive UIs.
- **Material-UI (MUI)**: For building a clean, responsive interface using pre-built components.
- **React Router DOM**: Client-side routing to handle navigation between different views (e.g., login, dashboard, signup).
- **React Toastify**: Provides beautiful notifications for user actions.
- **Chart.js & react-chartjs-2**: Interactive stock charts to display real-time stock information.

### Utilities
- **Axios**: HTTP client for making API requests from the frontend to the backend.
- **dotenv**: For environment variable management (API keys, database connections).
- **web-vitals**: For monitoring performance metrics of the web application.

## Features
- **User Authentication**: Users can sign up, log in, and log out. Authentication is handled using JWT tokens.
- **Secure Password Storage**: Passwords are hashed using bcryptjs to ensure user data security.
- **Stock Charts**: View stock performance in real-time using interactive charts powered by Chart.js.
- **Design**: The frontend is styled using bootstrap and Material-UI to ensure the application is user-friendly.
- **Notifications**: React-Toastify is used to display real-time notifications for actions like login, logout, and trade actions.


