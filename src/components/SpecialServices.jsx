import React from 'react';
import { SprayCan, Trees, Bird, Zap } from 'lucide-react';
import './SpecialServices.css';

const specials = [
  {
    icon: <Zap size={28} />,
    title: 'Ticks Control',
    desc: 'Ticks are blood sucking parasites often found embedded in the skin of pets and people. They are notoriously difficult to control. Repeated treatment is often required. A chemical solution is sprayed on them in a limited amount so that they don\'t harm your pets.'
  },
  {
    icon: <SprayCan size={28} />,
    title: 'Honey Comb Eradication',
    desc: 'Experienced bee removal specialists who are trained and absolutely capable of getting rid of beehives and honey comb once and for all.'
  },
  {
    icon: <Trees size={28} />,
    title: 'Weed Control',
    desc: 'Spray is absorbed by the foliage, the chemical solution is translocated to the roots to destroy the weed. First signs are a gradual yellowing of the plant. Effective, economical and easy control of weeds.'
  },
  {
    icon: <Bird size={28} />,
    title: 'Snake & Pigeon Control',
    desc: 'Snake Repellent Spray in the yard keeps snakes away before they arrive on your compound. Birds are a major pest causing respiratory diseases. We offer Netting, Bird Strike and other effective solutions.'
  }
];

const SpecialServices = () => {
  return (
    <section className="section special-section">
      <div className="container">
        <div className="text-center">
          <span className="section-label">More Solutions</span>
          <h2 className="section-title">Specialized Services</h2>
          <div className="section-divider centered" />
          <p className="section-subtitle centered">
            Beyond standard pest control — we handle even the most unusual infestations.
          </p>
        </div>

        <div className="special-grid">
          {specials.map((s, i) => (
            <div key={i} className="special-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="special-card__icon">{s.icon}</div>
              <h3 className="special-card__title">{s.title}</h3>
              <p className="special-card__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialServices;
