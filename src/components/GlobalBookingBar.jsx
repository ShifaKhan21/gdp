import React from 'react';
import { ChevronDown, MapPin, Search, Calendar } from 'lucide-react';
import './GlobalBookingBar.css';

const GlobalBookingBar = () => {
  return (
    <div className="booking-wrap">
      <div className="container">
        <div className="booking-bar">
          <div className="booking-field">
            <div className="booking-field__icon"><Calendar size={18} /></div>
            <div className="booking-field__content">
              <span className="booking-field__label">Select Service</span>
              <div className="booking-field__value">
                <span>Termite Control</span>
                <ChevronDown size={14} />
              </div>
            </div>
          </div>

          <div className="booking-divider" />

          <div className="booking-field">
            <div className="booking-field__icon"><MapPin size={18} /></div>
            <div className="booking-field__content">
              <span className="booking-field__label">Your Location</span>
              <div className="booking-field__value">
                <span>Mumbai, Maharashtra</span>
                <ChevronDown size={14} />
              </div>
            </div>
          </div>

          <div className="booking-divider" />

          <div className="booking-field">
            <div className="booking-field__icon"><Search size={18} /></div>
            <div className="booking-field__content">
              <span className="booking-field__label">Premises Type</span>
              <div className="booking-field__value">
                <span>Residential</span>
                <ChevronDown size={14} />
              </div>
            </div>
          </div>

          <button className="btn btn-primary booking-btn">
            Book Free Inspection
          </button>
        </div>
      </div>
    </div>
  );
};

export default GlobalBookingBar;
