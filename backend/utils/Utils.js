const jwt = require('jsonwebtoken');

// Generate JWT token
exports.generateJwtToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Generate OTP
exports.sendOtp = (mobileNumber) => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  console.log(`Sending OTP ${otp} to ${mobileNumber}`);
  return otp;
};
