import React from 'react';
import { Award, ShieldCheck, BadgeCheck } from 'lucide-react';
import './TrustIndicators.css';

const TrustIndicators = () => {
  return (
    <section className="section trust-section">
      <div className="container">
        <div className="text-center">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">Trusted &amp; Certified</h2>
          <div className="section-divider centered" />
          <p className="section-subtitle centered">
            We are verified, certified and trusted by leading government and private organizations.
          </p>
        </div>

        <div className="trust-grid">
          {/* Certifications */}
          <div className="trust-card">
            <div className="trust-card__header">
              <Award size={32} className="trust-card__icon" />
              <h3>Certified By</h3>
            </div>
            <div className="trust-badges">
              <div className="trust-badge">
                <span className="trust-badge__name">MCGM</span>
                <span className="trust-badge__label">Municipal Corporation</span>
              </div>
              <div className="trust-badge">
                <span className="trust-badge__name">NSIC</span>
                <span className="trust-badge__label">Govt. Enterprise</span>
              </div>
            </div>
          </div>

          {/* Approved */}
          <div className="trust-card">
            <div className="trust-card__header">
              <BadgeCheck size={32} className="trust-card__icon" />
              <h3>Approved Vendors</h3>
            </div>
            <div className="trust-badges">
              <div className="trust-badge">
                <span className="trust-badge__name">RBI</span>
                <span className="trust-badge__label">Reserve Bank</span>
              </div>
              <div className="trust-badge">
                <span className="trust-badge__name">MES</span>
                <span className="trust-badge__label">Military Engineering</span>
              </div>
              <div className="trust-badge">
                <span className="trust-badge__name">MDL</span>
                <span className="trust-badge__label">Mazagon Dock</span>
              </div>
            </div>
          </div>

          {/* ISO Card */}
          <div className="trust-card trust-card--featured">
            <ShieldCheck size={42} className="trust-card__big-icon" />
            <div>
              <h3>ISO 14001 : 2015</h3>
              <p className="trust-card__sub">Environmental Management</p>
            </div>
            <div className="trust-card__divider" />
            <div>
              <h3>ISO 45001 : 2018</h3>
              <p className="trust-card__sub">Occupational Health &amp; Safety</p>
            </div>
            <span className="trust-card__label">Associate Member of PMA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
