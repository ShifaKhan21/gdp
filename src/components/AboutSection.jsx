import React from 'react';
import { CheckCircle, ShieldCheck, Award } from 'lucide-react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image animate-left">
            <img src="/images/about-team.png" alt="GD Pest Control Team" />
            <div className="about-image__badge">
              <span className="about-image__badge-number">15+</span>
              <span className="about-image__badge-text">Years of Excellence</span>
            </div>
          </div>

          <div className="about-content animate-right">
            <span className="section-label">About Us</span>
            <h2 className="section-title">The Complete Pest Management</h2>
            <div className="section-divider" />
            <p className="about-text">
              We at <strong>GD Pest Control Pvt. Ltd.</strong> offer the latest, affordable, and high quality
              technology in pest control. Our services offer many types of treatment to get rid of pests 
              giving you a pest free and hygienic surroundings.
            </p>
            <p className="about-text">
              If you are seeing one pest or insect chances are you are not seeing the rest. Call GD Pest Control ASAP!
            </p>

            <div className="about-features">
              <div className="about-feature">
                <CheckCircle size={20} className="about-feature__icon" />
                <span>Long Lasting &amp; Eco Friendly Solutions</span>
              </div>
              <div className="about-feature">
                <ShieldCheck size={20} className="about-feature__icon" />
                <span>ISO 14001:2015 &amp; ISO 45001:2018 Certified</span>
              </div>
              <div className="about-feature">
                <Award size={20} className="about-feature__icon" />
                <span>Associate Member of Pest Management Association</span>
              </div>
              <div className="about-feature">
                <CheckCircle size={20} className="about-feature__icon" />
                <span>Approved Vendors: RBI, MES, MDL</span>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary">
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
