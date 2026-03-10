import React from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="badge-icon">✨</span>
            <span>Premium Quality & Fresh Ingredients</span>
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Fresh, Healthy &<br />
            <span className="highlight">Deliciously Natural</span>
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            Experience the perfect blend of taste and nutrition with our fresh-cut fruit bowls,
            energizing juices, and protein-packed healthy bowls. Delivered fresh to your doorstep!
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.a
              href="#products"
              className="btn btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore Menu</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.a>
            <motion.a
              href="#order"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Order on Swiggy</span>
            </motion.a>
          </motion.div>

          <motion.div className="hero-features" variants={itemVariants}>
            {[
              { icon: '🍊', text: '100% Fresh', color: '#ff6b35' },
              { icon: '🥗', text: 'Healthy & Nutritious', color: '#00b894' },
              { icon: '🚀', text: 'Quick Delivery', color: '#6c5ce7' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="feature-item"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <span className="feature-icon" style={{ background: feature.color }}>
                  {feature.icon}
                </span>
                <span>{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="stat-item">
              <h3>10K+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Fresh & Natural</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Available</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          variants={floatingVariants}
          animate="animate"
        >
          <div className="image-wrapper">
            <div className="image-bg"></div>
          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <motion.div
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ↓
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
