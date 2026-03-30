import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ShieldCheck, Award, BadgeCheck, Users, Star } from 'lucide-react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Page Hero */}
      <div className="page-hero">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="section-label">Who We Are</span>
          <h1 className="page-hero__title">About GD Pest Control</h1>
          <p className="page-hero__desc">
            The Complete Pest Management — serving homes and businesses across Maharashtra since 2009.
          </p>
          <div className="page-hero__breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>About</span>
          </div>
        </div>
      </div>

      {/* About Content */}
      <section className="section">
        <div className="container">
          <div className="ap-grid">
            <div className="ap-image">
              <img src="/images/about-team.png" alt="GD Pest Control Team" />
              <div className="ap-image__badge">
                <span className="ap-image__badge-num">15+</span>
                <span className="ap-image__badge-text">Years of Excellence</span>
              </div>
            </div>
            <div className="ap-content">
              <h2 className="section-title">Your Trusted Partner in Pest Management</h2>
              <div className="section-divider" />
              <p>
                We at <strong>GD Pest Control Pvt. Ltd.</strong> offer the latest, affordable, and high quality 
                technology in pest control. Our services offer many types of treatment to get rid of pests 
                giving you a pest free and hygienic surroundings.
              </p>
              <p>
                If you are seeing one pest or insect chances are you are not seeing the rest. 
                Call to <strong>GD Pest Control ASAP</strong>!
              </p>

              <div className="ap-stats">
                <div className="ap-stat">
                  <Star size={24} className="ap-stat__icon" />
                  <span className="ap-stat__value">5000+</span>
                  <span className="ap-stat__label">Happy Clients</span>
                </div>
                <div className="ap-stat">
                  <Users size={24} className="ap-stat__icon" />
                  <span className="ap-stat__value">50+</span>
                  <span className="ap-stat__label">Expert Team</span>
                </div>
                <div className="ap-stat">
                  <ShieldCheck size={24} className="ap-stat__icon" />
                  <span className="ap-stat__value">10</span>
                  <span className="ap-stat__label">Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section ap-cert-section">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Certifications & Approvals</span>
            <h2 className="section-title">Trusted & Verified</h2>
            <div className="section-divider centered" />
          </div>

          <div className="ap-cert-grid">
            <div className="ap-cert-card">
              <Award size={36} className="ap-cert-card__icon" />
              <h3>Certified By</h3>
              <div className="ap-cert-badges">
                <div className="ap-cert-badge">
                  <span className="ap-cert-badge__name">MCGM</span>
                  <span className="ap-cert-badge__sub">Municipal Corporation</span>
                </div>
                <div className="ap-cert-badge">
                  <span className="ap-cert-badge__name">NSIC</span>
                  <span className="ap-cert-badge__sub">Govt. Enterprise</span>
                </div>
              </div>
            </div>

            <div className="ap-cert-card ap-cert-card--featured">
              <ShieldCheck size={48} className="ap-cert-card__big-icon" />
              <h3>ISO 14001 : 2015</h3>
              <p>Environmental Management</p>
              <div className="ap-cert-card__divider" />
              <h3>ISO 45001 : 2018</h3>
              <p>Occupational Health & Safety</p>
            </div>

            <div className="ap-cert-card">
              <BadgeCheck size={36} className="ap-cert-card__icon" />
              <h3>Approved Vendors</h3>
              <div className="ap-cert-badges">
                <div className="ap-cert-badge">
                  <span className="ap-cert-badge__name">RBI</span>
                  <span className="ap-cert-badge__sub">Reserve Bank</span>
                </div>
                <div className="ap-cert-badge">
                  <span className="ap-cert-badge__name">MES</span>
                  <span className="ap-cert-badge__sub">Military Engg.</span>
                </div>
                <div className="ap-cert-badge">
                  <span className="ap-cert-badge__name">MDL</span>
                  <span className="ap-cert-badge__sub">Mazagon Dock</span>
                </div>
              </div>
            </div>
          </div>

          <div className="ap-pma text-center">
            <p>Associate Member of <strong>Pest Management Association (PMA)</strong></p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Our Promise</span>
            <h2 className="section-title">Why Choose Us</h2>
            <div className="section-divider centered" />
          </div>
          <div className="ap-values-grid">
            {[
              { icon: <CheckCircle size={24} />, title: 'Long Lasting', desc: 'Our treatments provide long-lasting protection using the latest chemical and eco-friendly solutions.' },
              { icon: <CheckCircle size={24} />, title: 'Economical', desc: 'Affordable pricing without compromising on quality or effectiveness of the treatment.' },
              { icon: <CheckCircle size={24} />, title: 'Eco Friendly', desc: 'We use environment-safe chemicals that are harmless to humans and pets while being effective against pests.' },
              { icon: <CheckCircle size={24} />, title: 'All Over Maharashtra', desc: 'Services available largely in Mumbai, Navi Mumbai & Thane and all over Maharashtra state.' },
            ].map((v, i) => (
              <div key={i} className="ap-value-card">
                <div className="ap-value-card__icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
