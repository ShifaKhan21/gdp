import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#home" className="header__logo">
          <div className="header__logo-icon">GD</div>
          <div className="header__logo-text">
            <span className="header__brand">GD Pest Control</span>
            <span className="header__tagline">Private Limited</span>
          </div>
        </a>

        <nav className={`header__nav ${mobileOpen ? 'header__nav--open' : ''}`}>
          <a href="#home" onClick={() => setMobileOpen(false)}>Home</a>
          <a href="#services" onClick={() => setMobileOpen(false)}>Services</a>
          <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
          <a href="#diy" onClick={() => setMobileOpen(false)}>Tips</a>
          <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
        </nav>

        <div className="header__actions">
          <a href="tel:7738444466" className="header__phone">
            <div className="header__phone-icon">
              <Phone size={16} />
            </div>
            <div className="header__phone-text">
              <span className="header__phone-label">Call Us Now</span>
              <span className="header__phone-number">7738 444 466</span>
            </div>
          </a>
          <button className="header__hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
