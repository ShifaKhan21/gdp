import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, ShieldAlert, CheckCircle } from 'lucide-react';
import './TipsPage.css';

const diyTips = [
  { tip: 'Sprinkle Boric powder to repel cockroaches.', pest: 'Cockroaches' },
  { tip: 'Applying Garlic oil on pets to repel ticks.', pest: 'Ticks' },
  { tip: 'Application of Cinnamon oil on body helps in repelling mosquitoes while trekking.', pest: 'Mosquitoes' },
  { tip: 'Use a camphor vaporiser to repell lizards at home or office.', pest: 'Lizards' },
  { tip: 'A solution of apple cider vinegar and few drops of dish soap with water helps get rid of houseflies.', pest: 'Houseflies' },
  { tip: 'A Mixture of Tea tree oil with water and spray it on doors & windows, to drive away ants.', pest: 'Ants' },
  { tip: 'Sprinkling coffee grounds around your plants helps keep slugs away.', pest: 'Slugs' },
  { tip: 'Planting marigolds near windows and doors is a great idea, the flowers repel squash bugs & mosquitoes very well.', pest: 'Bugs & Mosquitoes' },
  { tip: 'Plant Lemongrass in your house or office to repel houseflies & mosquitoes.', pest: 'Flies & Mosquitoes' },
];

const preventiveTips = [
  'Keeping your house clean is the first step against pest infestation.',
  'Deep cleaning of your house or workplace is necessary.',
  'Pests thrive in moist environments so moisture control is critical by fixing the leaks & seepage.',
  'Do not leave piles of clothes, papers or other things just laying around.',
  'Seal all cracks and crevices in your house to keep the cockroaches away.',
  "Don't have dirty dishes piled up for long period of times, especially in water.",
  'Food should always be stored in air tight containers.',
  'Schedule regular pest control maintenance.',
];

const TipsPage = () => {
  return (
    <div className="tips-page">
      {/* Page Hero */}
      <div className="page-hero">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="section-label"><Lightbulb size={14} /> Expert Advice</span>
          <h1 className="page-hero__title">DIY Tips & Prevention</h1>
          <p className="page-hero__desc">
            Natural solutions and preventive measures to keep your home pest-free between professional treatments.
          </p>
          <div className="page-hero__breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Tips</span>
          </div>
        </div>
      </div>

      {/* DIY Solutions */}
      <section className="section">
        <div className="container">
          <div className="tp-header">
            <Lightbulb size={32} className="tp-header__icon" />
            <div>
              <h2 className="section-title">DIY Pest Control Solutions</h2>
              <p className="section-subtitle">Try these natural, eco-friendly methods at home</p>
            </div>
          </div>

          <div className="tp-diy-grid">
            {diyTips.map((item, i) => (
              <div key={i} className="tp-diy-card" style={{ animationDelay: `${i * 0.08}s` }}>
                <span className="tp-diy-card__pest">{item.pest}</span>
                <p className="tp-diy-card__tip">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preventive Measures */}
      <section className="section tp-prevent-section">
        <div className="container">
          <div className="tp-prevent-grid">
            <div className="tp-prevent-content">
              <div className="tp-header">
                <ShieldAlert size={32} className="tp-header__icon" />
                <div>
                  <h2 className="section-title">Preventive Measures</h2>
                  <p className="section-subtitle">Essential practices for a pest-free environment</p>
                </div>
              </div>

              <ul className="tp-prevent-list">
                {preventiveTips.map((tip, i) => (
                  <li key={i}>
                    <CheckCircle size={18} className="tp-prevent-list__icon" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="tp-prevent-image">
              <img src="/images/happy-family.png" alt="Happy pest-free family" />
            </div>
          </div>
        </div>
      </section>

      {/* Warning CTA */}
      <section className="tp-warning">
        <div className="container tp-warning__inner">
          <h2>If you are seeing one pest or insect...</h2>
          <p>Chances are you are not seeing the rest. Call to GD Pest Control ASAP!</p>
          <div className="tp-warning__ctas">
            <a href="tel:7738444466" className="btn btn-white btn-lg">📞 7738 444 466</a>
            <a href="tel:8652444466" className="btn btn-secondary btn-lg" style={{ borderColor: 'white', color: 'white' }}>📞 8652 444 466</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TipsPage;
