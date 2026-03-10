import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Contact.css'

function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="contact section" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Order Now</h2>
          <p className="section-subtitle">
            Get fresh, healthy bowls delivered to your doorstep
          </p>
        </motion.div>

        <div className="contact-content">
          <div className="delivery-platforms">
            <motion.div
              className="platform-card"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <h3>Order on Swiggy</h3>
              <p>Fast delivery from your favorite food delivery app</p>
              <motion.a
                href="#"
                className="platform-btn swiggy-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="platform-icon">🛵</span>
                Order on Swiggy
              </motion.a>
            </motion.div>

            <motion.div
              className="platform-card"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <h3>Order on Zomato</h3>
              <p>Quick and reliable delivery right to your door</p>
              <motion.a
                href="#"
                className="platform-btn zomato-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="platform-icon">🍽️</span>
                Order on Zomato
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3>Get in Touch</h3>
            <div className="info-items">
              {[
                { icon: '📧', title: 'Email', value: 'hello@fruooze.com' },
                { icon: '📱', title: 'Phone', value: '+91 98765 43210' },
                { icon: '⏰', title: 'Operating Hours', value: '7:00 AM - 10:00 PM (Daily)' }
              ].map((info, index) => (
                <motion.div
                  key={index}
                  className="info-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                >
                  <span className="info-icon">{info.icon}</span>
                  <div>
                    <h4>{info.title}</h4>
                    <p>{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
