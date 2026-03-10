import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Products.css'

function Products() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const products = [
    {
      id: 1,
      title: 'Fresh Fruit Bowls',
      description: 'Handpicked seasonal fruits, freshly cut and ready to enjoy',
      icon: '🍎',
      gradient: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
      items: ['Tropical Paradise', 'Berry Bliss', 'Citrus Burst', 'Mixed Delight']
    },
    {
      id: 2,
      title: 'Fresh Juices',
      description: 'Cold-pressed juices packed with vitamins and natural goodness',
      icon: '🥤',
      gradient: 'linear-gradient(135deg, #00b894 0%, #55efc4 100%)',
      items: ['Orange Fresh', 'Watermelon Cooler', 'Green Detox', 'Pomegranate Power']
    },
    {
      id: 3,
      title: 'Protein Bowls',
      description: 'Nutrient-rich bowls perfect for your post-workout needs',
      icon: '💪',
      gradient: 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)',
      items: ['Power Bowl', 'Energy Boost', 'Muscle Builder', 'Recovery Mix']
    },
    {
      id: 4,
      title: 'Healthy Snack Bowls',
      description: 'Guilt-free snacking with our nutritious and tasty options',
      icon: '🥗',
      gradient: 'linear-gradient(135deg, #fd79a8 0%, #fdcb6e 100%)',
      items: ['Granola Crunch', 'Nut Mix Bowl', 'Yogurt Parfait', 'Trail Mix Special']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  }

  return (
    <section className="products section" id="products" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Fresh Menu</h2>
          <p className="section-subtitle">
            Wholesome goodness delivered straight to your door
          </p>
        </motion.div>

        <motion.div
          className="products-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card"
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
            >
              <div className="product-card-inner">
                <motion.div
                  className="product-icon-wrapper"
                  style={{ background: product.gradient }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="product-icon">{product.icon}</span>
                </motion.div>

                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>

                <ul className="product-items">
                  {product.items.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.15 + idx * 0.1 }}
                    >
                      <span className="item-bullet">✓</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  className="product-btn"
                  style={{ background: product.gradient }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Order Now</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </motion.button>
              </div>

              <div className="card-glow" style={{ background: product.gradient }}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Products
