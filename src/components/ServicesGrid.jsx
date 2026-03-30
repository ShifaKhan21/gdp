import React from 'react';
import { ArrowRight } from 'lucide-react';
import './ServicesGrid.css';

import ScrollReveal from './ScrollReveal';

const services = [
  {
    image: '/images/service-general.png',
    title: 'General Disinfestation',
    desc: 'Regular inspection & treatment at all possible hiding areas like dark corners, drainage pipes, loose joints in masonry and wooden cabinets. Odourless gel bait treatment for cockroaches, red ants, centipedes and other crawling insects.',
    tag: 'Most Popular'
  },
  {
    image: '/images/service-termite.png',
    title: 'Termite Control (Pre/Post)',
    desc: 'Termites infiltrate buildings from underground colonies through cracks at the foundation. For pre-construction, chemical solution is injected into soil creating a chemical barrier. Post construction involves seeking hideouts and injecting chemicals into walls.',
    tag: '5-10 Yr Guarantee'
  },
  {
    image: '/images/service-rodent.png',
    title: 'Rodent Control',
    desc: 'Complete rodent abatement through quick, safe & effective Baiting, Trapping & repellent based solutions. We identify and seal all points of entry and exit. Effective use of Electromagnetic device, Ultrasound device, Glue Traps, Snap Traps & other baiting products.'
  },
  {
    image: '/images/service-bedbug.png',
    title: 'Bed Bugs Control',
    desc: 'A bedbug is a small nocturnal insect of the family Cimocidae that lives by feeding on the blood of humans & other warm blooded host. We carefully spray on infested areas which offers darkness, isolation & protection. Repeated treatments are required.',
  },
  {
    image: '/images/service-mosquito.png',
    title: 'Thermal Fogging (Mosquitoes)',
    desc: 'Mosquito foggers contain liquid insecticides that when activated create a kind of mist. It is an effective treatment against adult mosquitoes, best used outdoors. As long as it comes in contact with the fog, the mosquito will be eliminated.',
  },
  {
    image: '/images/service-woodworm.png',
    title: 'Woodworm Infestation',
    desc: 'Effective treatment using oil based chemicals for spraying & brushing treatment. We inject chemicals into tiny holes with the help of syringe to kill the larvae. All wooden furniture including those attached to walls are treated with care.',
  }
];

const ServicesGrid = () => {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <ScrollReveal variant="reveal" className="text-center">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Our Pest Control Services</h2>
          <div className="section-divider centered" />
          <p className="section-subtitle centered">
            Comprehensive pest management with the latest technology — serving Mumbai, Navi Mumbai, Thane and all over Maharashtra.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="reveal-stagger" className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <div className="service-card__image">
                <img src={s.image} alt={s.title} className="service-card__main-img" />
                <img src="/logo.png" alt="GD Pest Control" className="service-card__logo-overlay" />
                <div className="service-card__overlay">
                  <a href="#contact" className="btn btn-white">
                    Book Now <ArrowRight size={16} />
                  </a>
                </div>
                {s.tag && <span className="service-card__tag">{s.tag}</span>}
              </div>
              <div className="service-card__body">
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesGrid;
