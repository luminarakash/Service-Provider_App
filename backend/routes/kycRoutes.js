const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware'); // Ensure correct path

router.post('/submit', authMiddleware, (req, res) => {
    const { name, idProof } = req.body;
    if (!name || !idProof) {
        return res.status(400).json({ message: 'Name and ID proof are required' });
    }
    // Handle KYC submission logic here
    res.status(200).json({ message: 'KYC submitted successfully' });
});

module.exports = router;
