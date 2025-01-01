import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We deliver delicious food to your doorstep. Quality and freshness guaranteed!</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@fooddelivery.com</p>
          <p>Phone: +123-456-7890</p>
          <p>Address: 123 Food Street, City</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Food Delivery App. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;