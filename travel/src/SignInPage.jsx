import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';

const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signin', formData);
      localStorage.setItem('token', response.data.token); // Store JWT token
      navigate('/'); // Redirect to homepage after successful sign-in
    } catch (err) {
      setError(err.response?.data?.message || 'Sign-in failed');
    }
  };

  return (
    <div className="signin-container">
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
          <button className="signin-btn">Sign In</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </header>

      {/* Sign In Form */}
      <section className="signin-section">
        <div className="signin-form-container">
          <h2>Welcome Back</h2>
          <p>Sign in to your TravelBus account</p>
          {error && <p className="error-message">{error}</p>}
          <form className="signin-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email or Username</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <div className="password-group">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
                <a href="#" className="forgot-password">Forgot password?</a>
              </div>
            </div>
            <button type="submit" className="submit-btn">Sign In</button>
            <p className="signup-link">
              Don't have an account? <a href="/signup">Sign up</a>
            </p>
          </form>
        </div>
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

export default SignInPage;