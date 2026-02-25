import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title">Order Now</h2>
        <p className="section-subtitle">
          Get fresh, healthy bowls delivered to your doorstep
        </p>

        <div className="contact-content">
          <div className="delivery-platforms">
            <div className="platform-card">
              <h3>Order on Swiggy</h3>
              <p>Fast delivery from your favorite food delivery app</p>
              <a href="#" className="platform-btn swiggy-btn">
                <span className="platform-icon">🛵</span>
                Order on Swiggy
              </a>
            </div>

            <div className="platform-card">
              <h3>Order on Zomato</h3>
              <p>Quick and reliable delivery right to your door</p>
              <a href="#" className="platform-btn zomato-btn">
                <span className="platform-icon">🍽️</span>
                Order on Zomato
              </a>
            </div>
          </div>

          <div className="contact-info">
            <h3>Get in Touch</h3>
            <div className="info-items">
              <div className="info-item">
                <span className="info-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>hello@fruooze.com</p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">📱</span>
                <div>
                  <h4>Phone</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">⏰</span>
                <div>
                  <h4>Operating Hours</h4>
                  <p>7:00 AM - 10:00 PM (Daily)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
