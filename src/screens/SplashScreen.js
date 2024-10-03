import React, { useState, useEffect } from 'react';
import CustomButton from '../components/CustomButton';
import { fetchInitialData } from '../services/apiService'; // Adjust the path as needed

const SplashScreen = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        // Fetch initial data from the API
        await fetchInitialData();
        setLoading(false);
      } catch (err) {
        setError('Error loading initial data');
        console.error('Error fetching initial data:', err);
      }
    };

    loadInitialData();
  }, []);

  const handleGetStarted = () => {
    alert('Get Started');
    // Additional logic for "Get Started" button can be added here
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to Our App</h1>
      <p className="text-lg mb-6 text-gray-700">Your gateway to service excellence</p>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <CustomButton
        title={loading ? "Loading..." : "Get Started"}
        onPress={handleGetStarted}
        disabled={loading}
      />
    </div>
  );
};

export default SplashScreen;
