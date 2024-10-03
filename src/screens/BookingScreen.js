import React, { useState } from 'react';
import CustomButton from '../components/CustomButton';
import { createBooking } from '../services/apiService'; // Adjust the path as needed

const BookingScreen = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [serviceName, setServiceName] = useState('');
  const [serviceDate, setServiceDate] = useState('');

  const handleBooking = async () => {
    setLoading(true);
    setError('');
    setSuccessMessage('');
    try {
      // Replace with actual form data
      const bookingData = {
        title: serviceName,
        date: serviceDate || new Date().toISOString(), // Default to current date if no date is selected
      };
      await createBooking(bookingData);
      setSuccessMessage('Booking successful!');
      // Clear form fields
      setServiceName('');
      setServiceDate('');
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message); // Show server error
      } else {
        setError('Error booking service. Please try again later.');
      }
      console.error('Error creating booking:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Book a Service</h1>
      
      {/* Form Field for Service Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Service Name</label>
        <input
          type="text"
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
          className="border border-gray-300 p-2 w-full rounded"
          placeholder="Enter the service name"
        />
      </div>
      
      {/* Form Field for Service Date */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Service Date</label>
        <input
          type="date"
          value={serviceDate}
          onChange={(e) => setServiceDate(e.target.value)}
          className="border border-gray-300 p-2 w-full rounded"
          placeholder="Select the service date"
        />
      </div>

      {/* Success Message */}
      {successMessage && (
        <p className="text-green-500 mb-4">{successMessage}</p>
      )}
      
      {/* Error Message */}
      {error && (
        <p className="text-red-500 mb-4">{error}</p>
      )}

      {/* Booking Button */}
      <CustomButton
        title={loading ? "Booking..." : "Book Now"}
        onPress={handleBooking}
        disabled={loading || !serviceName} // Disable button if loading or service name is empty
      />
    </div>
  );
};

export default BookingScreen;
