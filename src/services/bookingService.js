import axios from 'axios';

export const getBookings = async () => {
  try {
    const response = await axios.get('http://localhost:5000/bookings');
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getBookingHistory = async () => {
  try {
    const response = await axios.get('http://localhost:5000/bookings/history');
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
