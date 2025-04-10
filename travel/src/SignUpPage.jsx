import React from 'react';
import './SignUpPage.css';

const SignUpPage = () => {
  return (
    <div className="signup-container">
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

      {/* Sign Up Form */}
      <section className="signup-section">
        <div className="signup-form-container">
          <h2>Create Account</h2>
          <p>Join TravelBus for the best travel experience</p>
          <form className="signup-form">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label>Mobile Number</label>
              <input type="text" placeholder="+1 123-456-7890" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Password" />
              <p className="password-note">Password must be at least 8 characters long</p>
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm Password" />
            </div>
            <button type="submit" className="submit-btn">Register</button>
            <p className="signin-link">
              Already have an account? <a href="#">Sign in</a>
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

export default SignUpPage;