import React from 'react';
import { Lightbulb, Shield, CheckCircle } from 'lucide-react';
import './InfoSections.css';

const diyTips = [
  'Sprinkle Boric powder to repel cockroaches.',
  'Applying Garlic oil on pets to repel ticks.',
  'Application of Cinnamon oil on body helps in repelling mosquitoes while trekking.',
  'Use a camphor vaporiser to repell lizards at home or office.',
  'A solution of apple cider vinegar and few drops of dish soap with water helps get rid of houseflies.',
  'A Mixture of Tea tree oil with water and spray it on doors & windows, to drive away ants.',
  'Sprinkling coffee grounds around your plants helps keep slugs away.',
  'Planting marigolds near windows and doors repels squash bugs & mosquitoes.',
  'Plant Lemongrass in your house or office to repel houseflies & mosquitoes.',
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

const InfoSections = () => {
  return (
    <section id="diy" className="section info-section">
      <div className="container">

        {/* DIY Solutions */}
        <div className="info-block">
          <div className="info-block__content animate-left">
            <span className="section-label">
              <Lightbulb size={14} /> DIY Solutions
            </span>
            <h2 className="section-title">Smart DIY Pest Control Tips</h2>
            <div className="section-divider" />
            <p className="info-block__intro">
              Try these natural, eco-friendly methods to keep common pests at bay between professional treatments.
            </p>
            <ul className="info-list">
              {diyTips.map((tip, i) => (
                <li key={i} className="info-list__item">
                  <CheckCircle size={16} className="info-list__icon" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="info-block__visual animate-right">
            <img src="/images/happy-family.png" alt="Happy pest-free home" />
          </div>
        </div>

        {/* Preventive Measures */}
        <div className="info-block info-block--reverse">
          <div className="info-block__content animate-right">
            <span className="section-label">
              <Shield size={14} /> Preventive Measures
            </span>
            <h2 className="section-title">Prevention Is Better Than Cure</h2>
            <div className="section-divider" />
            <p className="info-block__intro">
              Follow these essential practices to minimize the risk of pest infestation in your home and workplace.
            </p>
            <ul className="info-list">
              {preventiveTips.map((tip, i) => (
                <li key={i} className="info-list__item">
                  <CheckCircle size={16} className="info-list__icon" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="info-block__visual animate-left">
            <div className="info-cta-card">
              <h3>Seeing One Pest?</h3>
              <p>Chances are you are not seeing the rest.</p>
              <a href="tel:7738444466" className="btn btn-primary btn-lg">
                Call GD Pest Control ASAP
              </a>
              <div className="info-cta-card__numbers">
                <span>📞 7738444466</span>
                <span>📞 8652444466</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InfoSections;
