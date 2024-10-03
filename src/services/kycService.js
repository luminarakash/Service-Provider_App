import axios from 'axios';

export const submitKyc = async (kycData) => {
  try {
    const response = await axios.post('http://localhost:5000/kyc', kycData);
    return response.data.success;
  } catch (error) {
    console.error(error);
    return false;
  }
};
