import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-container">
        
        <div className="footer-brand">
          <h2>GP Pest</h2>
          <span className="logo-subtitle text-white">Control Pvt. Ltd</span>
          <p className="mt-4 text-light">
            The Complete Pest Management.<br/>
            Serving all over Maharashtra, largely in Mumbai, Navi Mumbai & Thane.
          </p>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <MapPin size={18} className="footer-icon" />
              <span>
                Unit No 19, S.S. Mungekar Industrial Estate, 2nd Floor, <br/>
                Bldg No 4, Vishweshwar Road, Goregaon (E), <br/>
                Mumbai - 400063, Maharashtra, India.
              </span>
            </li>
            <li>
              <Phone size={18} className="footer-icon" />
              <span>7738444466 / 8652444466</span>
            </li>
            <li>
              <Mail size={18} className="footer-icon" />
              <span>info@gdpest.com</span>
            </li>
          </ul>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} GP Pest Control Private Limited. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
