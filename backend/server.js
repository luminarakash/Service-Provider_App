const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const kycRoutes = require('./routes/kycRoutes'); // Import KYC routes
const bookingRoutes = require('./routes/bookingRoutes');
const cors = require('cors');
const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

// Simple route to check if the server is running
app.get('/', (req, res) => {
    res.send('<h1>backend is Running</h1>');
});




connectDB();

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/kyc', kycRoutes); // Use KYC routes
app.use('/api/bookings', bookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
