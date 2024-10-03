// src/screens/HistoryScreen.js
import React from 'react';


const HistoryScreen = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Booking History</h1>
      <div className="space-y-4">
        {/* Replace with actual data */}
        <div className="border border-gray-200 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">Booking #1</h2>
          <p className="text-gray-600">Details about booking #1</p>
        </div>
        <div className="border border-gray-200 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">Booking #2</h2>
          <p className="text-gray-600">Details about booking #2</p>
        </div>
        {/* More booking items */}
      </div>
    </div>
  );
};

export default HistoryScreen;
