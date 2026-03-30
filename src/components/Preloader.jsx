import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [stage, setStage] = useState('loading'); // 'loading', 'zoom', 'done'

  useEffect(() => {
    // Show logo for 2 seconds, then trigger zoom out effect
    const timer1 = setTimeout(() => {
      setStage('zoom');
    }, 2000);

    // After animation completely finishes (approx 0.8s), remove preloader from DOM
    const timer2 = setTimeout(() => {
      setStage('done');
    }, 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (stage === 'done') return null;

  return (
    <div className={`preloader ${stage === 'zoom' ? 'preloader--zoom-out' : ''}`}>
      <div className="preloader__content">
        <div className="preloader__logo-container">
          <img src="/logo.png" alt="GD Pest Control" className="preloader__logo" />
          <h1 className="preloader__text">GD Pest Control Private Limited</h1>
          <div className="preloader__underline"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
