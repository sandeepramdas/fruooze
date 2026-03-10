import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './About.css'

function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    { icon: '🌱', title: '100% Fresh & Natural', desc: 'We source only the freshest fruits and ingredients, cut and prepared daily to ensure maximum nutrition and flavor.', color: '#00b894' },
    { icon: '⚡', title: 'Quick Delivery', desc: 'Order through Swiggy or Zomato and get your healthy bowls delivered fresh to your doorstep in minutes.', color: '#fdcb6e' },
    { icon: '💚', title: 'Healthy Living', desc: 'Every bowl is crafted with your health in mind - packed with vitamins, proteins, and natural energy boosters.', color: '#55efc4' },
    { icon: '🎯', title: 'Quality Assured', desc: 'We maintain the highest standards of hygiene and quality control in every step of our process.', color: '#ff6b35' }
  ]

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Why Choose FRUOOZE?</h2>
          <p className="section-subtitle">
            Fresh, healthy, and convenient - that's our promise
          </p>
        </motion.div>

        <div className="about-content">
          <div className="about-features">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="about-feature"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="feature-icon-large"
                  style={{ background: `linear-gradient(135deg, ${feature.color}, ${feature.color}dd)` }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="about-story"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
