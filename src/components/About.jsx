import React from 'react'
import './About.css'

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title">Why Choose FRUOOZE?</h2>
        <p className="section-subtitle">
          Fresh, healthy, and convenient - that's our promise
        </p>

        <div className="about-content">
          <div className="about-features">
            <div className="about-feature">
              <div className="feature-icon-large">🌱</div>
              <h3>100% Fresh & Natural</h3>
              <p>We source only the freshest fruits and ingredients, cut and prepared daily to ensure maximum nutrition and flavor.</p>
            </div>

            <div className="about-feature">
              <div className="feature-icon-large">⚡</div>
              <h3>Quick Delivery</h3>
              <p>Order through Swiggy or Zomato and get your healthy bowls delivered fresh to your doorstep in minutes.</p>
            </div>

            <div className="about-feature">
              <div className="feature-icon-large">💚</div>
              <h3>Healthy Living</h3>
              <p>Every bowl is crafted with your health in mind - packed with vitamins, proteins, and natural energy boosters.</p>
            </div>

            <div className="about-feature">
              <div className="feature-icon-large">🎯</div>
              <h3>Quality Assured</h3>
              <p>We maintain the highest standards of hygiene and quality control in every step of our process.</p>
            </div>
          </div>

          <div className="about-story">
            <h3>Our Story</h3>
            <p>
              FRUOOZE was born from a simple idea: healthy eating should be easy, delicious, and accessible to everyone.
              We believe that fresh, nutritious food shouldn't be a luxury - it should be a daily choice that fits seamlessly
              into your busy lifestyle.
            </p>
            <p>
              Every fruit is carefully selected, every bowl is lovingly prepared, and every delivery is made with care.
              We're not just serving food; we're delivering wellness, one bowl at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
