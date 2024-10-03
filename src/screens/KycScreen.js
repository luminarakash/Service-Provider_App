import React, { useState } from 'react';
import CustomButton from '../components/CustomButton';
import { submitKyc } from '../services/apiService'; // Adjust the path as needed

const KycScreen = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleKycSubmission = async () => {
    setLoading(true);
    setError('');
    setSuccessMessage('');
    try {
      // Dynamic KYC data from form inputs
      const kycData = {
        name,
        idNumber,
      };
      await submitKyc(kycData);
      setSuccessMessage('KYC Submitted Successfully!');
      // Optionally clear form
      setName('');
      setIdNumber('');
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        // Show the error message from the server
        setError(err.response.data.message);
      } else {
        // Fallback for generic error
        setError('Error submitting KYC. Please try again later.');
      }
      console.error('Error submitting KYC:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">KYC Screen</h1>
      {/* Form fields for KYC */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 p-2 w-full rounded"
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">ID Number</label>
        <input
          type="text"
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
          className="border border-gray-300 p-2 w-full rounded"
          placeholder="Enter your ID number"
        />
      </div>

      {/* Success Message */}
      {successMessage && (
        <p className="text-green-500 mb-4">{successMessage}</p>
      )}

      {/* Error Message */}
      {error && (
        <p className="text-red-500 mb-4">
          {error}
        </p>
      )}

      <CustomButton
        title={loading ? "Submitting..." : "Submit KYC"}
        onPress={handleKycSubmission}
        disabled={loading}
      />
    </div>
  );
};

export default KycScreen;
