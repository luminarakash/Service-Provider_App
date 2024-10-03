import axios from 'axios';

export const loginUser = async (mobile, otp) => {
  try {
    const response = await axios.post('http://localhost:5000/auth/login', { mobile, otp });
    return response.data.success;
  } catch (error) {
    console.error(error);
    return false;
  }
};
