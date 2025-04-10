const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
  },
  nationalId: {
    type: String,
    required: [true, 'National ID is required'],
  },
  mobileNumber: {
    type: String,
    required: [true, 'Mobile number is required'],
  },
  numberOfSeats: {
    type: Number,
    required: [true, 'Number of seats is required'],
    min: 1,
  },
  from: {
    type: String,
    required: [true, 'Departure city is required'],
  },
  to: {
    type: String,
    required: [true, 'Destination city is required'],
  },
  date: {
    type: Date,
    required: [true, 'Travel date is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Booking', bookingSchema);