import React from 'react';
import './TrustIndicators.css';
import { Award, CheckCircle } from 'lucide-react';

const TrustIndicators = () => {
  return (
    <section className="section trust-section">
      <div className="container">
        <div className="trust-grid">
          
          <div className="trust-box animate-fade-in">
            <div className="trust-icon"><Award size={40} /></div>
            <h3>Certified By</h3>
            <div className="trust-badges">
              <span className="badge">MCGM</span>
              <span className="badge">NSIC</span>
            </div>
          </div>

          <div className="trust-box animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="trust-icon"><CheckCircle size={40} /></div>
            <h3>Approved Vendors</h3>
            <div className="trust-badges">
              <span className="badge">RBI</span>
              <span className="badge">MES</span>
              <span className="badge">MDL</span>
            </div>
          </div>

          <div className="trust-box featured animate-fade-in" style={{ animationDelay: '0.4s' }}>
             <h3>ISO 14001 : 2015</h3>
             <p>Certified Company</p>
             <h3 className="mt-4">ISO 45001 : 2018</h3>
             <p>Certified Company</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
