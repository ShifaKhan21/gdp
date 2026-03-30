import React from 'react';
import { ShieldCheck, ArrowRight, Star, Award, Users } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <img src="/images/hero-banner.png" alt="Professional pest control" />
        <div className="hero__overlay" />
      </div>

      <div className="container hero__container">
        <div className="hero__content animate-in">
          <div className="hero__badge">
            <ShieldCheck size={16} />
            <span>5 to 10 Years Termite Guarantee Available</span>
          </div>

          <h1 className="hero__title">
            Say <span className="hero__title-accent">No To Bugs</span><br />
            With GD Pest Control
          </h1>

          <p className="hero__desc">
            Offering the latest, affordable, and high-quality technology in pest control. 
            Get rid of pests and enjoy a hygienic, safe environment for your home and business.
            Services available all over Maharashtra — largely in Mumbai, Navi Mumbai &amp; Thane.
          </p>

          <div className="hero__cta">
            <a href="#services" className="btn btn-primary btn-lg">
              Explore Solutions <ArrowRight size={18} />
            </a>
            <a href="tel:7738444466" className="btn btn-white btn-lg">
              Get Free Inspection
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <Star size={18} className="hero__stat-icon" />
              <div>
                <span className="hero__stat-value">15+</span>
                <span className="hero__stat-label">Years Experience</span>
              </div>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <Users size={18} className="hero__stat-icon" />
              <div>
                <span className="hero__stat-value">5000+</span>
                <span className="hero__stat-label">Happy Clients</span>
              </div>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <Award size={18} className="hero__stat-icon" />
              <div>
                <span className="hero__stat-value">ISO</span>
                <span className="hero__stat-label">Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
