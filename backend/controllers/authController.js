const User = require('../models/User');
const { sendOtp, generateJwtToken } = require('../utils/authUtils');

// Send OTP to user
exports.sendOtp = async (req, res) => {
  const { mobileNumber } = req.body;
  let user = await User.findOne({ mobileNumber });

  if (!user) {
    user = new User({ mobileNumber });
    await user.save();
  }

  const otp = sendOtp(mobileNumber);
  user.otp = otp;
  user.otpExpiry = Date.now() + 10 * 60 * 1000; // OTP expires in 10 minutes
  await user.save();

  res.status(200).json({ message: 'OTP sent successfully' });
};

// Verify OTP and login
exports.verifyOtp = async (req, res) => {
  const { mobileNumber, otp } = req.body;
  const user = await User.findOne({ mobileNumber });

  if (!user || user.otp !== otp || user.otpExpiry < Date.now()) {
    return res.status(400).json({ message: 'Invalid OTP or OTP expired' });
  }

  user.isVerified = true;
  await user.save();

  const token = generateJwtToken(user._id);
  res.status(200).json({ token, user });
};
