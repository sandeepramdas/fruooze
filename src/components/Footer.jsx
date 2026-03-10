import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Footer.css'

function Footer() {
  const [logoError, setLogoError] = useState(false)

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-section footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
              {['📘', '📷', '🐦', '💬'].map((icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4>Quick Links</h4>
            <ul>
              {['Home', 'Products', 'About Us', 'Contact'].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href={`#${link.toLowerCase().replace(' ', '')}`}>{link}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4>Products</h4>
            <ul>
              {['Fruit Bowls', 'Fresh Juices', 'Protein Bowls', 'Healthy Snacks'].map((product, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#products">{product}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4>Contact Us</h4>
            <ul className="contact-list">
              <li>📧 hello@fruooze.com</li>
              <li>📱 +91 98765 43210</li>
              <li>⏰ 7:00 AM - 10:00 PM</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p>&copy; 2024 FRUOOZE. All rights reserved.</p>
          <div className="footer-links">
            <motion.a href="#" whileHover={{ y: -2 }}>Privacy Policy</motion.a>
            <motion.a href="#" whileHover={{ y: -2 }}>Terms & Conditions</motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
