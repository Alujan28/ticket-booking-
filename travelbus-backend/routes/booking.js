const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const authMiddleware = require('../middleware/authMiddleware');

// Create a Booking (Protected Route)
router.post('/', authMiddleware, async (req, res) => {
  const { fullName, nationalId, mobileNumber, numberOfSeats, from, to, date } = req.body;

  try {
    const booking = new Booking({
      user: req.user,
      fullName,
      nationalId,
      mobileNumber,
      numberOfSeats,
      from,
      to,
      date,
    });

    await booking.save();
    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;