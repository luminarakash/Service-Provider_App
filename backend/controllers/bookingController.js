const Booking = require('../models/Booking');

// Create new booking
exports.createBooking = async (req, res) => {
  const { serviceProviderId, customerId, location } = req.body;

  try {
    const booking = new Booking({
      serviceProviderId,
      customerId,
      location,
      status: 'Pending', // Default status
    });

    await booking.save();
    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ message: 'Error creating booking', error });
  }
};

// Get all bookings for service provider
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ serviceProviderId: req.user._id });
    res.status(200).json({ bookings });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ message: 'Error fetching bookings', error });
  }
};

// Handle booking request (accept or reject)
exports.handleBookingRequest = async (req, res) => {
  const { bookingId } = req.params;
  const { status } = req.body;

  // Validate status
  if (!['Accepted', 'Rejected'].includes(status)) {
    return res.status(400).json({ message: 'Invalid status value. Must be "Accepted" or "Rejected".' });
  }

  try {
    // Find the booking by ID
    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Update the booking status
    booking.status = status;
    await booking.save();

    res.status(200).json({ message: 'Booking status updated successfully', booking });
  } catch (error) {
    console.error('Error handling booking request:', error);
    res.status(500).json({ message: 'Error handling booking request', error });
  }
};
