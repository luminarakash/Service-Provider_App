const jwt = require('jsonwebtoken');

// Function to generate JWT token
exports.generateJwtToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Function to generate a random OTP
exports.sendOtp = (mobileNumber) => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  console.log(`Sending OTP ${otp} to ${mobileNumber}`);
  // You can add real SMS sending logic here using Twilio or any other service
  return otp;
};
