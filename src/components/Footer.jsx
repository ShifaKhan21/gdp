import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, Aperture, BookOpen, ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="contact" className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">
            
            {/* Brand */}
            <div className="footer__col">
              <div className="footer__logo">
                <div className="footer__logo-icon">GD</div>
                <div>
                  <h3>GD Pest Control</h3>
                  <span className="footer__logo-sub">Private Limited</span>
                </div>
              </div>
              <p className="footer__desc">
                The Complete Pest Management. Offering the latest, affordable, and high quality technology in pest control. 
                Services available all over Maharashtra.
              </p>
              <div className="footer__social">
                <a href="https://www.instagram.com/gdpestcontrolpvtltd" className="footer__social-link" aria-label="Instagram"><Aperture size={18} /></a>
                <a href="https://www.facebook.com/GDPestControlPvtLtd" className="footer__social-link" aria-label="Facebook"><BookOpen size={18} /></a>
                <a href="https://www.gdpest.com" className="footer__social-link" aria-label="Website"><Globe size={18} /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__col">
              <h4 className="footer__heading">Quick Links</h4>
              <ul className="footer__links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Our Services</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/tips">DIY Tips</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer__col">
              <h4 className="footer__heading">Our Services</h4>
              <ul className="footer__links">
                <li><Link to="/services">General Disinfestation</Link></li>
                <li><Link to="/services">Termite Control</Link></li>
                <li><Link to="/services">Rodent Control</Link></li>
                <li><Link to="/services">Bed Bugs Control</Link></li>
                <li><Link to="/services">Thermal Fogging</Link></li>
                <li><Link to="/services">Woodworm Treatment</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__col">
              <h4 className="footer__heading">Contact Info</h4>
              <ul className="footer__contact">
                <li>
                  <MapPin size={16} className="footer__contact-icon" />
                  <span>
                    Unit No 19, S.S. Mungekar Industrial Estate,<br/>
                    2nd Floor, Bldg No 4, Vishweshwar Road,<br/>
                    Goregaon (E), Mumbai - 400063,<br/>
                    Maharashtra, India.
                  </span>
                </li>
                <li>
                  <Phone size={16} className="footer__contact-icon" />
                  <span>7738444466 / 8652444466</span>
                </li>
                <li>
                  <Mail size={16} className="footer__contact-icon" />
                  <span>info@gdpest.com</span>
                </li>
                <li>
                  <Globe size={16} className="footer__contact-icon" />
                  <span>www.gdpest.com</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; {new Date().getFullYear()} GD Pest Control Private Limited. All Rights Reserved.</p>
          <p className="footer__areas">Services Available: Mumbai | Navi Mumbai | Thane | All Over Maharashtra</p>
        </div>
      </div>

      <button className="footer__scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
