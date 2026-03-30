import React from 'react';
import { Lightbulb, ShieldAlert } from 'lucide-react';
import './InfoSections.css';

const InfoSections = () => {
  return (
    <section id="about" className="section info-section">
      <div className="container">
        
        {/* DIY Solutions */}
        <div className="info-block">
          <div className="info-content">
            <h2 className="info-title">
              <Lightbulb className="info-icon" size={28} />
              DIY Solutions
            </h2>
            <ul className="info-list">
              <li>Sprinkle Boric powder to repel cockroaches.</li>
              <li>Apply Garlic oil on pets to repel ticks.</li>
              <li>Application of Cinnamon oil on body helps in repelling mosquitoes while trekking.</li>
              <li>Use a camphor vaporiser to repel lizards at home or office.</li>
              <li>A solution of apple cider vinegar and few drops of dish soap with water helps get rid of houseflies.</li>
              <li>A mixture of Tea tree oil with water sprayed on doors & windows drives away ants.</li>
              <li>Sprinkling coffee grounds around your plants helps keep slugs away.</li>
              <li>Plant Lemongrass in your house or office to repel houseflies & mosquitoes.</li>
            </ul>
          </div>
          <div className="info-image bg-red-accent">
            <div className="image-placeholder">
               <h3>SAY NO TO BUGS</h3>
            </div>
          </div>
        </div>

        {/* Preventive Measures */}
        <div className="info-block reverse">
          <div className="info-content">
            <h2 className="info-title">
              <ShieldAlert className="info-icon" size={28} />
              Preventive Measures
            </h2>
            <ul className="info-list">
              <li>Keeping your house clean is the first step against pest infestation.</li>
              <li>Deep cleaning of your house or workplace is necessary.</li>
              <li>Pests thrive in moist environments, so moisture control is critical by fixing leaks.</li>
              <li>Do not leave piles of clothes, papers or other things just laying around.</li>
              <li>Seal all cracks and crevices in your house to keep cockroaches away.</li>
              <li>Don't leave dirty dishes piled up for long periods of time.</li>
              <li>Food should always be stored in air-tight containers.</li>
              <li>Schedule regular pest control maintenance.</li>
            </ul>
          </div>
          <div className="info-image bg-beige-accent">
            <div className="image-placeholder text-dark">
               <h3>IT'S BUGS DAY OUT...</h3>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InfoSections;
