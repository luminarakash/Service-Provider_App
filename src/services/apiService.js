import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Apne backend URL se replace kar

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 1000,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Storage se token le
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Submit KYC data function
export const submitKyc = (data) => api.post('/kyc', data);

// Fetch initial data function
export const fetchInitialData = () => api.get('/initial-data');

// Existing functions
export const createBooking = (data) => api.post('/create', data);
export const getBookings = () => api.get('/');
export const handleBookingRequest = (bookingId, data) => api.put(`/${bookingId}`, data);
