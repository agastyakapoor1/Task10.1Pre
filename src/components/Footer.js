import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We're dedicated to delivering the latest updates and exclusive content
            directly to your inbox. Join our growing community today!
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul className="footer-links">
            <li>
              <a href="tel:+1234567890">
                <i className="fas fa-phone"></i>
                +1 (234) 567-890
              </a>
            </li>
            <li>
              <a href="mailto:info@example.com">
                <i className="fas fa-envelope"></i>
                info@example.com
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-map-marker-alt"></i>
                123 Street Name, City, Country
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;