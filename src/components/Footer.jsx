import React, { useState } from 'react'
import './Footer.css'

function Footer() {
  const [logoError, setLogoError] = useState(false)

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo-container">
              {!logoError ? (
                <img
                  src="/logo.png"
                  alt="FRUOOZE Logo"
                  className="footer-logo-image"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <h3 className="footer-logo">FRUOOZE</h3>
              )}
            </div>
            <p className="footer-tagline">
              Fresh, Healthy & Deliciously Natural
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="WhatsApp">💬</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Products</h4>
            <ul>
              <li><a href="#products">Fruit Bowls</a></li>
              <li><a href="#products">Fresh Juices</a></li>
              <li><a href="#products">Protein Bowls</a></li>
              <li><a href="#products">Healthy Snacks</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul className="contact-list">
              <li>📧 hello@fruooze.com</li>
              <li>📱 +91 98765 43210</li>
              <li>⏰ 7:00 AM - 10:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 FRUOOZE. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
