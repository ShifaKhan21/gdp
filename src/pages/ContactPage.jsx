import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, Clock, Aperture, BookOpen } from 'lucide-react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Page Hero */}
      <div className="page-hero">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="section-label">Get In Touch</span>
          <h1 className="page-hero__title">Contact Us</h1>
          <p className="page-hero__desc">
            Ready to get rid of pests? Reach out to us for a free inspection and quote.
          </p>
          <div className="page-hero__breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Contact</span>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div className="cp-grid">
            {/* Contact Info */}
            <div className="cp-info">
              <h2 className="section-title">Let's Talk</h2>
              <div className="section-divider" />
              <p className="cp-info__desc">
                If you are seeing one pest or insect chances are you are not seeing the rest. 
                Call to GD Pest Control ASAP! We are here to help 24/7.
              </p>

              <div className="cp-info-cards">
                <div className="cp-info-card">
                  <div className="cp-info-card__icon"><Phone size={22} /></div>
                  <div>
                    <h4>Phone</h4>
                    <a href="tel:7738444466">7738 444 466</a>
                    <a href="tel:8652444466">8652 444 466</a>
                  </div>
                </div>

                <div className="cp-info-card">
                  <div className="cp-info-card__icon"><Mail size={22} /></div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:info@gdpest.com">info@gdpest.com</a>
                  </div>
                </div>

                <div className="cp-info-card">
                  <div className="cp-info-card__icon"><Globe size={22} /></div>
                  <div>
                    <h4>Website</h4>
                    <a href="https://www.gdpest.com" target="_blank" rel="noreferrer">www.gdpest.com</a>
                  </div>
                </div>

                <div className="cp-info-card">
                  <div className="cp-info-card__icon"><Clock size={22} /></div>
                  <div>
                    <h4>Working Hours</h4>
                    <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="cp-social">
                <h4>Follow Us</h4>
                <div className="cp-social__links">
                  <a href="https://www.instagram.com/gdpestcontrolpvtltd" target="_blank" rel="noreferrer" className="cp-social__link">
                    <Aperture size={18} /> @gdpestcontrolpvtltd
                  </a>
                  <a href="https://www.facebook.com/GDPestControlPvtLtd" target="_blank" rel="noreferrer" className="cp-social__link">
                    <BookOpen size={18} /> GD Pest Control Pvt Ltd
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="cp-form-wrapper">
              <div className="cp-form-card">
                <h3>Request Free Inspection</h3>
                <p>Fill out the form and our team will get back to you within 24 hours.</p>
                <form className="cp-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="cp-form__group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="Your name" />
                  </div>
                  <div className="cp-form__group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" placeholder="Your phone number" />
                  </div>
                  <div className="cp-form__group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Your email" />
                  </div>
                  <div className="cp-form__group">
                    <label htmlFor="service">Service Needed</label>
                    <select id="service">
                      <option>Select a service</option>
                      <option>General Disinfestation</option>
                      <option>Termite Control</option>
                      <option>Rodent Control</option>
                      <option>Bed Bugs Control</option>
                      <option>Thermal Fogging</option>
                      <option>Woodworm Treatment</option>
                      <option>Ticks Control</option>
                      <option>Honey Comb Eradication</option>
                      <option>Weed Control</option>
                      <option>Snake & Pigeon Control</option>
                    </select>
                  </div>
                  <div className="cp-form__group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows={4} placeholder="Describe your pest problem..."></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                    Send Enquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Address Section */}
      <section className="section cp-address-section">
        <div className="container">
          <div className="cp-address-card">
            <MapPin size={32} className="cp-address__icon" />
            <div>
              <h3>Our Office</h3>
              <p>
                Unit No 19, S.S. Mungekar Industrial Estate, 2nd Floor,<br />
                Bldg No 4, Vishweshwar Road, Goregaon (E),<br />
                Mumbai - 400063, Maharashtra, India.
              </p>
              <p className="cp-address__area">
                <strong>Service Areas:</strong> Mumbai | Navi Mumbai | Thane | All Over Maharashtra
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
