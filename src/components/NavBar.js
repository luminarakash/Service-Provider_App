// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-green-500 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Service Provider App</Link>
        <div>
          <Link to="/login" className="mx-2 hover:underline">Login</Link>
          <Link to="/kyc" className="mx-2 hover:underline">KYC</Link>
          <Link to="/bookings" className="mx-2 hover:underline">Bookings</Link>
          <Link to="/history" className="mx-2 hover:underline">History</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
