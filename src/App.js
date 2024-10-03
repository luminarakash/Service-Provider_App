// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingScreen from './screens/BookingScreen';
import HistoryScreen from './screens/HistoryScreen';
import LoginScreen from './screens/LoginScreen';
import KycScreen from './screens/KycScreen';
import SplashScreen from './screens/SplashScreen';
import NavBar from './components/NavBar'; // Assume you have a NavBar component
import Footer from './components/Footer'; // Assume you have a Footer component

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/kyc" element={<KycScreen />} />
            <Route path="/bookings" element={<BookingScreen />} />
            <Route path="/history" element={<HistoryScreen />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
