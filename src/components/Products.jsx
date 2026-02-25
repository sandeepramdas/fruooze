import React from 'react'
import './Products.css'

function Products() {
  const products = [
    {
      id: 1,
      title: 'Fresh Fruit Bowls',
      description: 'Handpicked seasonal fruits, freshly cut and ready to enjoy',
      icon: '🍎',
      items: ['Tropical Paradise', 'Berry Bliss', 'Citrus Burst', 'Mixed Delight']
    },
    {
      id: 2,
      title: 'Fresh Juices',
      description: 'Cold-pressed juices packed with vitamins and natural goodness',
      icon: '🥤',
      items: ['Orange Fresh', 'Watermelon Cooler', 'Green Detox', 'Pomegranate Power']
    },
    {
      id: 3,
      title: 'Protein Bowls',
      description: 'Nutrient-rich bowls perfect for your post-workout needs',
      icon: '💪',
      items: ['Power Bowl', 'Energy Boost', 'Muscle Builder', 'Recovery Mix']
    },
    {
      id: 4,
      title: 'Healthy Snack Bowls',
      description: 'Guilt-free snacking with our nutritious and tasty options',
      icon: '🥗',
      items: ['Granola Crunch', 'Nut Mix Bowl', 'Yogurt Parfait', 'Trail Mix Special']
    }
  ]

  return (
    <section className="products section" id="products">
      <div className="container">
        <h2 className="section-title">Our Fresh Menu</h2>
        <p className="section-subtitle">
          Wholesome goodness delivered straight to your door
        </p>

        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-icon">{product.icon}</div>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <ul className="product-items">
                {product.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <button className="product-btn">Order Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
