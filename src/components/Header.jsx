import React, { useState } from 'react'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <a href="#home" className="logo">
            {!logoError ? (
              <img
                src="/logo.png"
                alt="FRUOOZE Logo"
                className="logo-image"
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="logo-text">FRUOOZE</span>
            )}
          </a>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#products" onClick={() => setIsMenuOpen(false)}>Products</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            <li><a href="#order" className="order-btn" onClick={() => setIsMenuOpen(false)}>Order Now</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
