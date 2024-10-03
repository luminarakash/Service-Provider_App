// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} Service Provider App @luminarakash. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
