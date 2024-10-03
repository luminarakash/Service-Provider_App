const express = require('express');
const { createBooking, getBookings, handleBookingRequest } = require('../controllers/bookingController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Create a new booking request
router.post('/create', authMiddleware, (req, res) => {
  // Debugging: Log request body
  console.log('Create Booking Request Body:', req.body);
  createBooking(req, res);
});

// Get all booking requests for the logged-in service provider
router.get('/', authMiddleware, (req, res) => {
  // Debugging: Log user ID from token
  console.log('Logged-in User ID:', req.user._id);
  getBookings(req, res);
});

// Accept or reject a booking request
router.put('/:bookingId', authMiddleware, (req, res) => {
  // Debugging: Log booking ID and request body
  console.log('Update Booking ID:', req.params.bookingId);
  console.log('Update Booking Request Body:', req.body);
  handleBookingRequest(req, res);
});

module.exports = router;
