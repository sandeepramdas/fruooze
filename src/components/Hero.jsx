import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Fresh, Healthy &<br />
            <span className="highlight">Deliciously Natural</span>
          </h1>
          <p className="hero-description">
            Experience the perfect blend of taste and nutrition with our fresh-cut fruit bowls,
            energizing juices, and protein-packed healthy bowls. Delivered fresh to your doorstep!
          </p>
          <div className="hero-buttons">
            <a href="#products" className="btn btn-primary">Explore Menu</a>
            <a href="#order" className="btn btn-secondary">Order on Swiggy</a>
          </div>
          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-icon">🍊</span>
              <span>100% Fresh</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🥗</span>
              <span>Healthy & Nutritious</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🚀</span>
              <span>Quick Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
