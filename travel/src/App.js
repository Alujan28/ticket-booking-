import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';

const HomePage = () => {
  const [bookingForm, setBookingForm] = useState({
    fullName: '',
    nationalId: '',
    mobileNumber: '',
    numberOfSeats: 1,
    from: '',
    to: '',
    date: '',
  });
  const [bookingError, setBookingError] = useState('');

  const handleBookingChange = (e) => {
    setBookingForm({ ...bookingForm, [e.target.name]: e.target.value });
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (!token) {
      setBookingError('Please sign in to book a ticket');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/bookings', bookingForm, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Booking created successfully!');
      setBookingForm({
        fullName: '',
        nationalId: '',
        mobileNumber: '',
        numberOfSeats: 1,
        from: '',
        to: '',
        date: '',
      });
      setBookingError('');
    } catch (err) {
      setBookingError(err.response?.data?.message || 'Booking failed');
    }
  };

  return (
    <div className="travelbus-container">
      {/* Header */}
      <header className="header">
        <h1 className="logo">TravelBus</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">History</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <Link to="/signin">
            <button className="signin-btn">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="signup-btn">Sign Up</button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Explore the Journey, Not Just the Destination</h2>
          <p>Travel with style, your next adventure with TravelBus, and experience the beauty of the country.</p>
          <a href="#booking-section">
            <button className="book-now-btn">Book Now</button>
          </a>
        </div>
      </section>

      {/* Booking Form */}
      <section className="booking-section" id="booking-section">
        <div className="booking-form-container">
          <h3>Book Your Ticket</h3>
          {bookingError && <p className="error-message">{bookingError}</p>}
          <form className="booking-form" onSubmit={handleBookingSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={bookingForm.fullName}
                  onChange={handleBookingChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label>National ID Number</label>
                <input
                  type="text"
                  name="nationalId"
                  value={bookingForm.nationalId}
                  onChange={handleBookingChange}
                  placeholder="1234567890"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Mobile Number</label>
                <input
                  type="text"
                  name="mobileNumber"
                  value={bookingForm.mobileNumber}
                  onChange={handleBookingChange}
                  placeholder="+1 (123) 456-7890"
                  required
                />
              </div>
              <div className="form-group">
                <label>Number of Seats</label>
                <input
                  type="number"
                  name="numberOfSeats"
                  value={bookingForm.numberOfSeats}
                  onChange={handleBookingChange}
                  placeholder="1"
                  min="1"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>From</label>
                <select
                  name="from"
                  value={bookingForm.from}
                  onChange={handleBookingChange}
                  required
                >
                  <option value="">Select departure city</option>
                  <option value="New York">New York</option>
                  <option value="Los Angeles">Los Angeles</option>
                </select>
              </div>
              <div className="form-group">
                <label>To</label>
                <select
                  name="to"
                  value={bookingForm.to}
                  onChange={handleBookingChange}
                  required
                >
                  <option value="">Select destination city</option>
                  <option value="Washington DC">Washington DC</option>
                  <option value="Chicago">Chicago</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                name="date"
                value={bookingForm.date}
                onChange={handleBookingChange}
                required
              />
            </div>
            <button type="submit" className="submit-btn">Book Now</button>
          </form>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="destinations-section">
        <h3>Popular Destinations</h3>
        <p>Discover amazing places across the country that you can visit with comfortable bus!</p>
        <div className="destinations-grid">
          {[
            { name: 'New York City', desc: 'Explore the vibrant streets of the Big Apple, from Times Square to Central Park.', image: 'https://picsum.photos/300/200?random=1' },
            { name: 'Washington DC', desc: 'Visit the nation’s capital and its iconic landmarks.', image: 'https://picsum.photos/300/200?random=2' },
            { name: 'Chicago', desc: 'Discover the Windy City’s architecture.', image: 'https://picsum.photos/300/200?random=3' },
            { name: 'Boston', desc: 'America’s revolutionary history awaits.', image: 'https://picsum.photos/300/200?random=4' },
            { name: 'Los Angeles', desc: 'Enjoy the sunshine, glamour, and beaches.', image: 'https://picsum.photos/300/200?random=5' },
            { name: 'San Francisco', desc: 'Cross the Golden Gate Bridge and explore.', image: 'https://picsum.photos/300/200?random=6' },
            { name: 'Miami', desc: 'Indulge in vibrant, cultural experiences.', image: 'https://picsum.photos/300/200?random=7' },
            { name: 'Las Vegas', desc: 'Try your luck and enjoy the nightlife.', image: 'https://picsum.photos/300/200?random=8' },
            { name: 'Atlanta', desc: 'Discover the hub of the American South.', image: 'https://picsum.photos/300/200?random=9' },
            { name: 'Philadelphia', desc: 'Explore America’s World Heritage City.', image: 'https://picsum.photos/300/200?random=10' },
            { name: 'Seattle', desc: 'Visit the Emerald City and enjoy coffee.', image: 'https://picsum.photos/300/200?random=11' },
            { name: 'New Orleans', desc: 'Experience the unique blend of cultures.', image: 'https://picsum.photos/300/200?random=12' },
          ].map((destination, index) => (
            <div key={index} className="destination-card">
              <img src={destination.image} alt={destination.name} />
              <div className="destination-content">
                <h4>{destination.name}</h4>
                <p>{destination.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="story-section">
        <h3>Our Story</h3>
        <p>
          For over 25 years, TravelBus has been at the forefront of connecting cities and people across the nation, offering a reliable and safe transportation service that millions of travelers trust. What began in 1998 as a small fleet of buses has evolved into one of the country’s most prominent and dependable transportation networks. Our journey has been driven by an unwavering commitment to providing exceptional service, prioritizing both the comfort and safety of our passengers. From the very start, we set out to make travel a more enjoyable experience by offering efficient, affordable, and dependable options for people across the country.<br /><br />
          
          As our fleet has grown and our reach expanded, we’ve remained dedicated to ensuring that every journey, whether for business, leisure, or family trips, is as smooth and memorable as possible. Our focus on delivering high-quality service has helped us build a reputation as one of the most trusted names in the industry, earning the loyalty of millions. Every day, we work tirelessly to maintain the highest standards, providing passengers with clean, well-maintained buses, professional drivers, and outstanding customer care.<br /><br />

          Whether you’re exploring new destinations or simply commuting to work, we’re here to ensure your travel is stress-free and enjoyable. At TravelBus, we understand that each journey is important, and we strive to make every one of them a positive experience. Thank you for choosing us where every journey truly matters, and we’re honored to be a part of your travels across the country.
        </p>
      </section>

      {/* Our Services */}
      <section className="services-section" id="services-section">
        <h3>Our Services</h3>
        <p>Check out our popular routes. We offer frequent departures to give you flexibility in your travel plans.</p>
        <table className="services-table">
          <thead>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Ticket Price</th>
              <th>Bus Departure Time</th>
            </tr>
          </thead>
          <tbody>
            {[
              { from: 'New York', to: 'Boston', price: '$45', time: '08:00 AM, 12:00 PM, 04:00 PM' },
              { from: 'Boston', to: 'New York', price: '$45', time: '07:30 AM, 11:30 AM, 03:30 PM' },
              { from: 'New York', to: 'Washington DC', price: '$60', time: '07:00 AM, 01:00 PM, 06:00 PM' },
              { from: 'Washington DC', to: 'New York', price: '$60', time: '08:30 AM, 02:30 PM, 07:30 PM' },
              { from: 'Los Angeles', to: 'San Francisco', price: '$75', time: '06:30 AM, 12:30 PM, 05:30 PM' },
              { from: 'San Francisco', to: 'Los Angeles', price: '$75', time: '07:00 AM, 01:00 PM, 06:00 PM' },
              { from: 'Chicago', to: 'Detroit', price: '$40', time: '09:00 AM, 03:00 PM, 08:00 PM' },
              { from: 'Detroit', to: 'Chicago', price: '$40', time: '08:00 AM, 02:00 PM, 07:00 PM' },
            ].map((route, index) => (
              <tr key={index}>
                <td>{route.from}</td>
                <td>{route.to}</td>
                <td>{route.price}</td>
                <td>{route.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="services-note">*Prices may vary depending on the season and availability. Early booking is recommended.</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-column">
          <h4>TravelBus</h4>
          <p>Making travel comfortable, convenient, and affordable for everyone.</p>
          <div className="social-links">
            <a href="#">📘</a>
            <a href="#">📷</a>
            <a href="#">🐦</a>
          </div>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">History</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Group Booking</a></li>
            <li><a href="#">Corporate Travel</a></li>
            <li><a href="#">Charter Services</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Bus Tickets</a></li>
            <li><a href="#">Group Booking</a></li>
            <li><a href="#">Tour Packages</a></li>
            <li><a href="#">Corporate Travel</a></li>
            <li><a href="#">Charter Services</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>
            123 Travel St, New York, NY 10001<br />
            +1 (555) 123-4567<br />
            info@travelbus.com<br />
            Mon - Fri: 8AM - 8PM
          </p>
        </div>
      </footer>
      <div className="footer-bottom">
        © 2025 TravelBus. All rights reserved.
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;